import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { sendEmailJS, EmailParams } from '../services/emailService';

export interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const MAX_MESSAGE_LENGTH = 500;

  // Anti-spam 30-second cooldown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  // Live Field Validation Logic
  const validateField = (name: string, value: string): string => {
    const trimmed = value.trim();

    switch (name) {
      case 'name':
        if (!trimmed) return 'Full Name is required.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!trimmed) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
          return 'Please enter a valid email address (e.g. user@domain.com).';
        }
        return '';
      case 'phone':
        if (trimmed && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(trimmed)) {
          return 'Please enter a valid phone number.';
        }
        return '';
      case 'subject':
        if (!trimmed) return 'Subject is required.';
        if (trimmed.length < 3) return 'Subject must be at least 3 characters.';
        return '';
      case 'message':
        if (!trimmed) return 'Message is required.';
        if (trimmed.length < 10) return 'Message must be at least 10 characters.';
        if (trimmed.length > MAX_MESSAGE_LENGTH) return `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
        return '';
      default:
        return '';
    }
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormState>).forEach((field) => {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cooldown > 0) {
      toast.error(`Anti-spam active. Please wait ${cooldown}s before submitting again.`);
      return;
    }

    // Mark all fields touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!validateAll()) {
      toast.error('Please fix the highlighted errors before sending.');
      return;
    }

    setIsSubmitting(true);

    const emailParams: EmailParams = {
      from_name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const result = await sendEmailJS(emailParams);

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setErrors({});
        setTouched({});
        setCooldown(30);

        // Toast Notification
        toast.success("Message Sent Successfully! Thank you for contacting me. I'll reply soon.", {
          duration: 5000,
          style: {
            background: '#09090e',
            color: '#38bdf8',
            border: '1px solid rgba(6, 182, 212, 0.4)',
          },
        });

        // Trigger Confetti
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });

        // Hide success checkmark overlay after 3.5 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 3500);
      } else {
        throw new Error(result.message);
      }
    } catch (err: any) {
      toast.error(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    isSuccess,
    cooldown,
    maxMessageLength: MAX_MESSAGE_LENGTH,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
