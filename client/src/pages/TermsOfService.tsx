import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

const TermsOfService = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      <Seo 
        title="Terms of Service - AllCasa"
        description="Terms of service and conditions for AllCasa construction and renovation services in Toronto and GTA."
        canonical="https://allcasa.ca/terms-of-service"
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
          <h1 className="text-3xl font-bold text-casa-navy mb-6">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: May {currentYear}</p>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the services provided by AllCasa ("Company", "we", "our", or "us"), you agree to be bound by these Terms of Service ("Terms"). These Terms apply to all visitors, users, and customers who access or use our construction, renovation, and related services ("Services").</p>
              <p className="mt-2">If you do not agree with any part of these Terms, you must not access or use our Services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">2. Description of Services</h2>
              <p>AllCasa provides residential and commercial construction, renovation, remodeling, and design services, including but not limited to custom home construction, home renovations, basement development, landscaping, and outdoor construction.</p>
              <p className="mt-2">The specific Services to be provided will be outlined in a separate written agreement between you and the Company (the "Service Agreement"), which will include details about the scope of work, timeline, payment terms, and other project-specific information.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">3. Payment Terms</h2>
              <h3 className="text-lg font-medium mt-4">3.1 Deposits and Payments</h3>
              <p>To initiate any project, a non-refundable deposit of 20% of the total project cost is required. As the project progresses, installments of 15-20% will be charged according to the project milestones outlined in the Service Agreement until project completion.</p>
              
              <h3 className="text-lg font-medium mt-4">3.2 Additional Costs</h3>
              <p>Any changes to the scope of work requested by you after the Service Agreement has been signed may result in additional costs. Such changes and associated costs will be documented in writing and must be approved by you before implementation.</p>
              
              <h3 className="text-lg font-medium mt-4">3.3 Payment Methods</h3>
              <p>We accept payments by check, bank transfer, credit card, or other methods specified in the Service Agreement. Late payments may incur interest charges as outlined in the Service Agreement.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">4. Project Timeline and Delays</h2>
              <p>While we strive to complete projects within the estimated timeline, completion dates are estimates only and are not guaranteed. Delays may occur due to factors beyond our control, including but not limited to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Weather conditions</li>
                <li>Permit and inspection delays</li>
                <li>Material availability</li>
                <li>Discovery of unforeseen conditions</li>
                <li>Client-requested changes</li>
                <li>Force majeure events</li>
              </ul>
              <p className="mt-2">We will not be liable for any losses, damages, or inconvenience arising from such delays.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">5. Warranties and Limitations</h2>
              <h3 className="text-lg font-medium mt-4">5.1 Workmanship Warranty</h3>
              <p>We warrant our workmanship for a period of one (1) year from the date of project completion, unless otherwise specified in the Service Agreement. This warranty covers defects in workmanship performed by our company but does not extend to materials (which may be covered by manufacturers' warranties) or work performed by third-party subcontractors.</p>
              
              <h3 className="text-lg font-medium mt-4">5.2 Limitation of Liability</h3>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your use or inability to use the Services;</li>
                <li>Any conduct or content of any third party related to the Services;</li>
                <li>Any content obtained from the Services; and</li>
                <li>Unauthorized access, use or alteration of your transmissions or content.</li>
              </ul>
              <p className="mt-2">THE COMPANY'S TOTAL LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL BE LIMITED TO THE AMOUNT PAID BY YOU TO THE COMPANY FOR THE SERVICES GIVING RISE TO SUCH LIABILITY.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">6. Insurance and Indemnification</h2>
              <h3 className="text-lg font-medium mt-4">6.1 Insurance</h3>
              <p>AllCasa maintains appropriate insurance coverage for our business operations, including general liability insurance and workers' compensation insurance. Upon request, we will provide certificates of insurance.</p>
              
              <h3 className="text-lg font-medium mt-4">6.2 Indemnification</h3>
              <p>You agree to indemnify, defend and hold harmless the Company and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your violation of these Terms;</li>
                <li>Your violation of any rights of another;</li>
                <li>Your conduct in connection with the Services; or</li>
                <li>Any misrepresentations made by you.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">7. Property Access and Site Conditions</h2>
              <p>You agree to provide us with reasonable access to your property to perform the Services during normal business hours, unless otherwise specified in the Service Agreement.</p>
              <p className="mt-2">You are responsible for ensuring that the site is reasonably clear of obstructions that would impede our work. You also warrant that, to the best of your knowledge, there are no concealed conditions on the property that would materially affect our ability to perform the Services.</p>
              <p className="mt-2">We are not responsible for damage to underground utilities, pipes, wires, or other installations that were not properly marked or identified before work began.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">8. Intellectual Property</h2>
              <p>All designs, plans, drawings, specifications, and other documents prepared by us remain our intellectual property. You are granted a non-exclusive license to use such materials solely in connection with the specific project for which they were created.</p>
              <p className="mt-2">We reserve the right to photograph and/or videotape the project before, during, and after completion, and to use these images for promotional purposes unless you explicitly request otherwise in writing.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">9. Termination</h2>
              <p>Either party may terminate the Service Agreement as specified therein. In the event of termination:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>You will be responsible for paying for all Services performed up to the date of termination, plus any non-cancelable commitments or costs incurred by us;</li>
                <li>We will provide you with all documents and materials related to the completed portion of the project; and</li>
                <li>Any deposits paid may be non-refundable as specified in the Service Agreement.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">10. Dispute Resolution</h2>
              <p>Any disputes arising from or relating to these Terms or the Services shall first be attempted to be resolved through good-faith negotiation between the parties.</p>
              <p className="mt-2">If negotiation is unsuccessful, the dispute shall be submitted to binding arbitration in accordance with the rules of the Canadian Arbitration Association. The arbitration shall take place in Toronto, Ontario, and shall be conducted in English.</p>
              <p className="mt-2">The decision of the arbitrator shall be final and binding, and judgment on the award rendered by the arbitrator may be entered in any court having jurisdiction.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">11. Force Majeure</h2>
              <p>Neither party shall be liable for any failure or delay in performance under these Terms due to fire, flood, earthquake, elements of nature or acts of God, acts of war, terrorism, riots, civil disorders, rebellions or revolutions, strikes, lockouts, labor disputes, or any other cause beyond the reasonable control of such party.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">12. Governing Law</h2>
              <p>These Terms and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without giving effect to any principles of conflicts of law.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">13. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
              <p className="mt-2">By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Services.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">14. Severability and Waiver</h2>
              <p>If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will continue in effect.</p>
              <p className="mt-2">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. No waiver of any provision of these Terms shall be deemed a further or continuing waiver of such provision or any other provision.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">15. Entire Agreement</h2>
              <p>These Terms, together with the Service Agreement and any other legal notices and agreements published by us, shall constitute the entire agreement between you and us concerning the Services.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-casa-purple mb-3">16. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="mt-2">
                <p>AllCasa</p>
                <p>7299 Yonge St</p>
                <p>Thornhill, ON L3T 0C5</p>
                <p>Canada</p>
                <p>Phone: +1-647-961-4070</p>
                <p>Email: info@allcasa.ca</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
