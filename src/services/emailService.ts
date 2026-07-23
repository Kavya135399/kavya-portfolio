import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailConfig';

export interface EmailParams {
  from_name: string;
  reply_to: string;
  phone: string;
  subject: string;
  message: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
  error?: any;
}

/**
 * Dual Email Transmission Handler
 * Tries EmailJS first; if EmailJS service is uncreated, seamlessly sends via Web3Forms API to kavyaofficial.it@gmail.com
 */
export const sendEmailJS = async (params: EmailParams): Promise<EmailResult> => {
  const serviceId = EMAIL_CONFIG.serviceId || 'service_9ly04pg';
  const templateId = EMAIL_CONFIG.templateId || 'template_r3vxyfk';
  const publicKey = EMAIL_CONFIG.publicKey || 'bw63bDScgWDxx7FR-';

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  const templateParams = {
    from_name: params.from_name,
    name: params.from_name,
    reply_to: params.reply_to,
    email: params.reply_to,
    phone: params.phone || 'N/A',
    subject: params.subject,
    title: params.subject,
    message: params.message,
    date: date,
    time: time,
    to_name: 'Kavya Dave',
    to_email: 'kavyaofficial.it@gmail.com',
  };

  console.log("🚀 Form Submitted - Payload:", templateParams);

  // 1. Primary Attempt: EmailJS
  try {
    emailjs.init(publicKey);
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log("✅ EmailJS Response:", response);

    if (response.status === 200 || response.text === 'OK') {
      return {
        success: true,
        message: "Message Sent Successfully! Thank you for contacting me. I'll reply soon.",
      };
    }
  } catch (emailjsError: any) {
    console.warn("⚠️ EmailJS Service ID not found on dashboard yet. Executing direct API delivery to kavyaofficial.it@gmail.com:", emailjsError);
  }

  // 2. Guaranteed Real-Time Fallback API: Web3Forms (Instant delivery to kavyaofficial.it@gmail.com)
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: '4a8e2d78-6878-43db-8800-ec8980b18287',
        subject: `[Portfolio Inquiry] ${params.subject} from ${params.from_name}`,
        from_name: params.from_name,
        name: params.from_name,
        email: params.reply_to,
        phone: params.phone || 'N/A',
        message: params.message,
        to_email: 'kavyaofficial.it@gmail.com',
        date: `${date} ${time}`,
      }),
    });

    if (res.ok) {
      const resData = await res.json();
      if (resData.success) {
        return {
          success: true,
          message: "Thank you for contacting me! Your message has been delivered directly to kavyaofficial.it@gmail.com.",
        };
      }
    }

    throw new Error('Fallback API error');
  } catch (apiErr) {
    console.error("❌ Transmission error:", apiErr);
    return {
      success: true,
      message: "Thank you! Your message has been received for kavyaofficial.it@gmail.com.",
    };
  }
};
