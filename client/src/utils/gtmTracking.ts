
// Declare global dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  budget?: string;
  projectType?: string;
  address?: string;
  message?: string;
  description?: string;
}

interface FormTrackingData {
  formName: string;
  formId: string;
  formData: FormData;
  pageUrl: string;
  timestamp: string;
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

export const gtmTrack = (eventName: string, eventData: any = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      ...eventData
    });
    console.log('GTM Event:', eventName, eventData);
  }
};

export const trackFormStart = (formName: string, formId: string) => {
  gtmTrack('form_start', {
    form_name: formName,
    form_id: formId,
    event_category: 'Form',
    event_action: 'Form Started'
  });
};

export const trackFormComplete = (trackingData: FormTrackingData) => {
  gtmTrack('form_complete', {
    form_name: trackingData.formName,
    form_id: trackingData.formId,
    form_data: trackingData.formData,
    page_url: trackingData.pageUrl,
    event_category: 'Form',
    event_action: 'Form Completed',
    user_name: trackingData.formData.name || '',
    user_email: trackingData.formData.email || '',
    user_phone: trackingData.formData.phone || '',
    project_budget: trackingData.formData.budget || '',
    project_type: trackingData.formData.projectType || ''
  });
};

export const trackFormSuccess = (trackingData: FormTrackingData) => {
  gtmTrack('form_success', {
    form_name: trackingData.formName,
    form_id: trackingData.formId,
    form_data: trackingData.formData,
    page_url: trackingData.pageUrl,
    event_category: 'Form',
    event_action: 'Form Success',
    user_name: trackingData.formData.name || '',
    user_email: trackingData.formData.email || '',
    user_phone: trackingData.formData.phone || '',
    project_budget: trackingData.formData.budget || '',
    project_type: trackingData.formData.projectType || ''
  });
};

export const trackButtonClick = (buttonText: string, buttonId?: string, additionalData: any = {}) => {
  gtmTrack('button_click', {
    button_text: buttonText,
    button_id: buttonId || '',
    event_category: 'Button',
    event_action: 'Click',
    ...additionalData
  });
};
