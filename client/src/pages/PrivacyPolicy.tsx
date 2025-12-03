import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <Seo 
        title="Privacy Policy - AllCasa"
        description="AllCasa's privacy policy and data protection information for our construction and renovation services."
        canonical="https://allcasa.ca/privacy-policy"
      />
      <div className="container py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center text-casa-navy" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-casa-navy mb-6">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: May {currentYear}</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">1. Introduction</h2>
              <p>AllCasa ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our construction and renovation services.</p>
              <p className="mt-2">By accessing or using our services, you consent to the collection, use, disclosure, and storage of your information as described in this Privacy Policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">2. Information We Collect</h2>
              <p><strong>Personal Information:</strong> We may collect personal information that you provide directly to us, such as your name, address, email address, telephone number, payment information, and any other information you choose to provide when you:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Request a quote or consultation</li>
                <li>Contact us through our website</li>
                <li>Enter into a contract for construction services</li>
                <li>Make payments for our services</li>
                <li>Sign up for our newsletter or promotional communications</li>
              </ul>
              
              <p className="mt-3"><strong>Usage Information:</strong> We may automatically collect information about your use of our website through cookies, web beacons, and other technologies, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your browser type and operating system</li>
                <li>Your IP address</li>
                <li>Pages you view on our website</li>
                <li>Links you click and interactions with our content</li>
                <li>Referring website, if applicable</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and fulfill your requests for quotes, consultations, or services</li>
                <li>Communicate with you about your project, including scheduling, updates, and payment</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Develop new products, services, and features</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">4. Sharing of Information</h2>
              <p>We may share your personal information with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Service Providers:</strong> Vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, such as subcontractors, material suppliers, or payment processors.</li>
                <li><strong>Professional Advisors:</strong> Accountants, attorneys, and other professional advisors in the context of the professional services they provide to us.</li>
                <li><strong>Legal Requirements:</strong> When required by applicable law, regulation, legal process, or governmental request.</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">5. Data Security</h2>
              <p>We implement reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">6. Your Rights and Choices</h2>
              <p>You may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing your consent at any time, where we rely on consent to process your information</li>
                <li>Requesting restrictions on the processing of your personal information</li>
                <li>Requesting the transfer of your personal information to you or a third party</li>
                <li>Opting out of marketing communications</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us at info@allcasa.ca.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">7. Children's Privacy</h2>
              <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect or solicit personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">8. Changes to this Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the date at the top of the policy and, in some cases, we may provide additional notice (such as adding a statement to our website or sending you a notification).</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">9. Contact Information</h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="mt-2">
                <p>AllCasa</p>
                <p>7299 Yonge St</p>
                <p>Thornhill, ON L3T 0C5</p>
                <p>Canada</p>
                <p>Phone: +1-647-961-4070</p>
                <p>Email: info@allcasa.ca</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">10. Limitation of Liability</h2>
              <p>By using our website and services, you acknowledge and agree that any information you send or receive during your use of our site or services may not be secure and may be intercepted or later acquired by unauthorized parties. You acknowledge that your use of our website and services is at your own risk.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
