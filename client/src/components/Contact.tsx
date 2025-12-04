import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Building2, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackFormStart, trackFormComplete, trackFormSuccess, trackButtonClick } from '@/utils/gtmTracking';
import { sendFormNotification } from '@/utils/emailNotification';
import { grantAnalyticsConsent } from '@/utils/analyticsConsent';

interface BudgetOption {
  value: string;
  label: string;
}

interface ProjectTypeOption {
  value: string;
  label: string;
}

interface ContactProps {
  budgetOptions?: BudgetOption[];
  projectTypeOptions?: ProjectTypeOption[];
  formOnly?: boolean;
}

const Contact = ({ budgetOptions, projectTypeOptions, formOnly = false }: ContactProps = {}) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    budget: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStartTracked, setFormStartTracked] = useState(false);

  const formName = 'Contact Form';
  const formId = 'contact-form';

  useEffect(() => {
    // Track form start only once when user first interacts with any field
    const hasFormData = Object.values(formData).some(value => value.trim() !== '');
    if (!formStartTracked && hasFormData) {
      trackFormStart(formName, formId);
      setFormStartTracked(true);
    }
  }, [formData, formStartTracked]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    grantAnalyticsConsent();
    console.log('=== CONTACT FORM SUBMISSION START ===');
    console.log('Form data:', formData);

    // Basic validation - let HTML5 validation handle this first
    if (!formData.name || !formData.email || !formData.phone) {
      console.log('Required fields missing');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting to backend API...');
      
      // Submit to backend API
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form_type: 'contact_form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          project_type: formData.projectType,
          budget: formData.budget,
          description: formData.description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);

      // Send email notification in background
      sendFormNotification({
        formName,
        formData,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
      }).catch(error => {
        console.log('Email notification failed:', error);
      });

      // Track form completion and success
      const trackingData = {
        formName,
        formId,
        formData,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
      };
      
      trackFormComplete(trackingData);
      trackFormSuccess(trackingData);
      handleButtonClick('Get Free Consultation');

      // Show success message
      toast({
        title: 'Thank you for your inquiry!',
        description: "We've received your message and will contact you shortly.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        projectType: '',
        budget: '',
        description: '',
      });
      setFormStartTracked(false);

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Error',
        description: 'There was a problem submitting your form. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleButtonClick = (buttonText: string) => {
    trackButtonClick(buttonText, `${formId}-${buttonText.toLowerCase().replace(/\s+/g, '-')}`);
  };

  if (formOnly) {
    return (
      <form
            id={formId}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            action="#"
            method="POST"
          >
            <h3 className="text-2xl font-poppins font-bold text-casa-navy mb-6">
              Get Your Free Quote
            </h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Project Location (Address)</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Project address or location"
                />
              </div>

              <div>
                <Label htmlFor="projectType">Project Type</Label>
                <Select
                  name="projectType"
                  value={formData.projectType}
                  onValueChange={(value) => handleSelectChange('projectType', value)}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypeOptions ? (
                      projectTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))
                    ) : (
                      <>
                        <SelectItem value="home-construction">Custom House Construction</SelectItem>
                        <SelectItem value="renovation">Home Renovation</SelectItem>
                        <SelectItem value="basement">Basement Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Project Budget</Label>
                <Select
                  name="budget"
                  value={formData.budget}
                  onValueChange={(value) => handleSelectChange('budget', value)}
                >
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions ? (
                      budgetOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))
                    ) : (
                      <>
                        <SelectItem value="dont-know">I don't know</SelectItem>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000-$100,000</SelectItem>
                        <SelectItem value="100k-200k">$100,000-$200,000</SelectItem>
                        <SelectItem value="200k-300k">$200,000-$300,000</SelectItem>
                        <SelectItem value="300k-500k">$300,000-$500,000</SelectItem>
                        <SelectItem value="500k-750k">$500,000-$750,000</SelectItem>
                        <SelectItem value="750k-plus">&gt;$750,000</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Tell us about your project</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe your project needs and any specific details"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="sm"
                className="h-8 w-full bg-gradient-to-r from-casa-navy to-casa-purple hover:from-casa-purple hover:to-casa-navy text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Get Free Consultation'}
              </Button>

              <p className="text-xs text-center text-casa-gray">
                By submitting this form, you agree to our privacy policy and consent to being contacted about our services.
              </p>
            </div>
          </form>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <form
            id={formId}
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            action="#"
            method="POST"
          >
            <h3 className="text-2xl font-poppins font-bold text-casa-navy mb-6">
              Get Your Free Quote
            </h3>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Project Location (Address)</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Project address or location"
                />
              </div>

              <div>
                <Label htmlFor="projectType">Project Type</Label>
                <Select
                  name="projectType"
                  value={formData.projectType}
                  onValueChange={(value) => handleSelectChange('projectType', value)}
                >
                  <SelectTrigger id="projectType">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypeOptions ? (
                      projectTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))
                    ) : (
                      <>
                        <SelectItem value="home-construction">Custom House Construction</SelectItem>
                        <SelectItem value="renovation">Home Renovation</SelectItem>
                        <SelectItem value="basement">Basement Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="budget">Project Budget</Label>
                <Select
                  name="budget"
                  value={formData.budget}
                  onValueChange={(value) => handleSelectChange('budget', value)}
                >
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions ? (
                      budgetOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))
                    ) : (
                      <>
                        <SelectItem value="dont-know">I don't know</SelectItem>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000-$100,000</SelectItem>
                        <SelectItem value="100k-200k">$100,000-$200,000</SelectItem>
                        <SelectItem value="200k-300k">$200,000-$300,000</SelectItem>
                        <SelectItem value="300k-500k">$300,000-$500,000</SelectItem>
                        <SelectItem value="500k-750k">$500,000-$750,000</SelectItem>
                        <SelectItem value="750k-plus">&gt;$750,000</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Tell us about your project</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe your project needs and any specific details"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                size="sm"
                className="h-8 w-full bg-gradient-to-r from-casa-navy to-casa-purple hover:from-casa-purple hover:to-casa-navy text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : 'Get Free Consultation'}
              </Button>

              <p className="text-xs text-center text-casa-gray">
                By submitting this form, you agree to our privacy policy and consent to being contacted about our services.
              </p>
            </div>
          </form>

          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-casa-navy mb-6">Ready to Transform Your Home?</h2>
            <p className="text-lg text-casa-gray mb-8">
              Get in touch with our team for a free consultation and estimate. We'd love to hear about your project and help you bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-casa-blue/10 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-casa-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-casa-navy">Call Us</h3>
                  <p className="text-casa-gray">+1-647-961-4070</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-casa-blue/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-casa-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-casa-navy">Email Us</h3>
                  <p className="text-casa-gray">info@allcasa.ca</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-casa-blue/10 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="h-5 w-5 text-casa-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-casa-navy">Visit Us</h3>
                  <p className="text-casa-gray">7299 Yonge St, Thornhill, ON L3T 0C5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
