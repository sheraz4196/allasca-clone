import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Mail } from 'lucide-react';
import { CartItem, CustomerInfo } from '@/types/quoteTypes';
import { formatCurrency } from '@/utils/quoteUtils';
import { trackFormStart, trackFormComplete, trackFormSuccess, trackButtonClick } from '@/utils/gtmTracking';
import { sendFormNotification } from '@/utils/emailNotification';

interface CheckoutFormProps {
  customerInfo: CustomerInfo;
  handleCustomerInfoChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  cart: CartItem[];
  handleSelectChange: (value: string, name: string) => void;
  onBackToShopping: () => void;
  onSubmitQuote: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  customerInfo,
  handleCustomerInfoChange,
  cart,
  handleSelectChange,
  onBackToShopping,
  onSubmitQuote,
  isSubmitting
}) => {
  const quoteRef = useRef<HTMLDivElement>(null);
  const [formStartTracked, setFormStartTracked] = useState(false);
  
  const formName = 'Custom Quote Checkout';
  const formId = 'checkout-form';

  useEffect(() => {
    // Track form start only once when user first interacts with any field
    const hasFormData = Object.values(customerInfo).some(value => value.trim() !== '');
    if (!formStartTracked && hasFormData) {
      trackFormStart(formName, formId);
      setFormStartTracked(true);
    }
  }, [customerInfo, formStartTracked]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = {
      ...customerInfo,
      cart: cart,
      totalAmount: cart.reduce((total, item) => total + (item.selectedPrice * item.quantity), 0)
    };

    try {
      // Send email notification first
      const emailResult = await sendFormNotification({
        formName,
        formData,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
      });

      // Track form completion and success only after successful submission
      const trackingData = {
        formName,
        formId,
        formData,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
      };
      
      trackFormComplete(trackingData);
      trackFormSuccess(trackingData);

      // Call the original submit handler
      onSubmitQuote(e);
    } catch (error) {
      console.error('Error in checkout form submission:', error);
      // Still call the original handler even if tracking/email fails
      onSubmitQuote(e);
    }
  };

  const handleBackClick = () => {
    trackButtonClick('Back to Services', 'checkout-back-to-services');
    onBackToShopping();
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Your Quote Request</CardTitle>
        <CardDescription>
          Fill out your contact information to receive your detailed quote via email.
        </CardDescription>
      </CardHeader>
      
      <form id={formId} onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                required
                value={customerInfo.name}
                onChange={handleCustomerInfoChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required
                value={customerInfo.email}
                onChange={handleCustomerInfoChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required
                value={customerInfo.phone}
                onChange={handleCustomerInfoChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget">Overall Budget</Label>
              <Select 
                value={customerInfo.budget} 
                onValueChange={(value) => handleSelectChange(value, 'budget')}
                required
              >
                <SelectTrigger id="budget">
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dont-know">I don't know</SelectItem>
                  <SelectItem value="under-50k">Under $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000-$100,000</SelectItem>
                  <SelectItem value="100k-200k">$100,000-$200,000</SelectItem>
                  <SelectItem value="200k-300k">$200,000-$300,000</SelectItem>
                  <SelectItem value="300k-500k">$300,000-$500,000</SelectItem>
                  <SelectItem value="500k-750k">$500,000-$750,000</SelectItem>
                  <SelectItem value="750k-plus">&gt;$750,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Project Address</Label>
            <Input 
              id="address" 
              name="address" 
              value={customerInfo.address}
              onChange={handleCustomerInfoChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Additional Details</Label>
            <Textarea 
              id="message" 
              name="message" 
              rows={4}
              placeholder="Tell us more about your project, timeline, or specific requirements..."
              value={customerInfo.message}
              onChange={handleCustomerInfoChange}
            />
          </div>
          
          <div ref={quoteRef} className="bg-casa-purple/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2 flex items-center">
              <Check className="h-5 w-5 mr-2 text-casa-purple" />
              Quote Summary
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              You've selected {cart.length} service(s) with an estimated total of {formatCurrency(cart.reduce((total, item) => total + (item.selectedPrice * item.quantity), 0))}.
            </p>
            <ul className="text-sm text-gray-600 list-disc list-inside">
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} ({item.quantity} {item.unit}) - {formatCurrency(item.selectedPrice * item.quantity)}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col md:flex-row justify-between gap-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleBackClick}
          >
            Back to Services
          </Button>
          
          <Button 
            type="submit" 
            className="bg-casa-purple hover:bg-casa-darkpurple"
            disabled={isSubmitting}
            onClick={() => trackButtonClick('Submit Quote Request', 'checkout-submit-quote')}
          >
            {isSubmitting ? (
              <>Processing...</>
            ) : (
              <>
                <Mail className="h-4 w-4 mr-2" />
                Submit Quote Request
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CheckoutForm;
