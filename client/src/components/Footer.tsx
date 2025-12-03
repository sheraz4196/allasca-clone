
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors" aria-label="Visit AllCasa on Instagram" data-testid="link-instagram">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors" aria-label="Visit AllCasa on Twitter" data-testid="link-twitter">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors" aria-label="Visit AllCasa on LinkedIn" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
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
