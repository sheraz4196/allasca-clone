
interface FormSubmissionData {
  formName: string;
  formData: any;
  pageUrl: string;
  timestamp: string;
}

export const sendFormNotification = async (submissionData: FormSubmissionData) => {
  try {
    console.log('Sending form notification:', submissionData);
    
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Email API error:', errorData);
      // Don't throw error - return error object instead
      return { error: errorData.error || 'Failed to send email' };
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);
    return data;
  } catch (error: any) {
    console.error('Error sending email notification:', error);
    // Don't throw the error - let the form submission continue even if email fails
    return { error: error.message };
  }
};
