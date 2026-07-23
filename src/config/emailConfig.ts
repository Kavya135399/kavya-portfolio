export const EMAIL_CONFIG = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'bw63bDScgWDxx7FR-',
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_9ly04pg',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_r3vxyfk',
  recipientEmail: 'kavyaofficial.it@gmail.com',
};

export const isEmailConfigValid = (): boolean => {
  return (
    Boolean(EMAIL_CONFIG.publicKey) &&
    Boolean(EMAIL_CONFIG.serviceId) &&
    Boolean(EMAIL_CONFIG.templateId)
  );
};
