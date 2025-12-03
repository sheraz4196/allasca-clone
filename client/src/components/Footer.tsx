
import { Link } from 'react-router-dom';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gradient-to-br from-casa-oxford to-casa-oxford text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold">All<span className="text-casa-blue">Casa</span></span>
            </div>
            <p className="text-gray-200 mb-4">
              Transforming houses into dream homes with expert craftsmanship and exceptional design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-white transition-colors" aria-label="Visit AllCasa on Facebook" data-testid="link-facebook">
                <FacebookIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors" aria-label="Visit AllCasa on Instagram" data-testid="link-instagram">
                <InstagramIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors" aria-label="Visit AllCasa on Twitter" data-testid="link-twitter">
                <TwitterIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors" aria-label="Visit AllCasa on LinkedIn" data-testid="link-linkedin">
                <LinkedinIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('residential-construction')} className="text-gray-200 hover:text-white transition-colors" data-testid="button-footer-residential">Custom Home Construction</button></li>
              <li><button onClick={() => scrollToSection('home-renovation')} className="text-gray-200 hover:text-white transition-colors" data-testid="button-footer-renovation">Home Renovations</button></li>
              <li><button onClick={() => scrollToSection('basement-development')} className="text-gray-200 hover:text-white transition-colors" data-testid="button-footer-basement">Basement Development</button></li>
              <li><button onClick={() => scrollToSection('garden-suites')} className="text-gray-200 hover:text-white transition-colors" data-testid="button-footer-landscaping">Landscaping & Outdoor</button></li>
              <li><button onClick={() => scrollToSection('estimates')} className="text-gray-200 hover:text-white transition-colors" data-testid="button-footer-estimates">Price Estimates</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-200 hover:text-white transition-colors" data-testid="link-footer-about">About Us</Link></li>
              <li><button onClick={() => scrollToSection('meet-our-team')} className="text-gray-200 hover:text-white transition-colors" data-testid="button-footer-team">Our Team</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-200 hover:text-white transition-colors" data-testid="button-footer-testimonials">Testimonials</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-200"><a href="tel:+16479614070" className="text-gray-200 hover:text-white transition-colors" data-testid="link-footer-phone">+1-647-961-4070</a></li>
              <li className="text-gray-200">info@allcasa.ca</li>
              <li className="text-gray-200">7299 Yonge St, <br />Thornhill, ON L3T 0C5</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-casa-oxford/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm">
              &copy; {currentYear} AllCasa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-gray-200 hover:text-white text-sm transition-colors" data-testid="link-footer-privacy">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-200 hover:text-white text-sm transition-colors" data-testid="link-footer-terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
