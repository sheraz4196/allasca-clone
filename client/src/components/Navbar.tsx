import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { sendFormNotification } from '@/utils/emailNotification';
import { trackButtonClick, trackFormComplete, trackFormStart, trackFormSuccess } from '@/utils/gtmTracking';
import { useEffect, useState } from 'react';

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function PhoneCallIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15.05 5a5 5 0 0 1 4 4" />
      <path d="M15.05 1a9 9 0 0 1 8 8" />
      <path d="M22 16.92V23a1 1 0 0 1-1.09 1 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 3.09 1 1 0 0 1 4 2h6.08a1 1 0 0 1 1 0 12.35 12.35 0 0 0 0 6.4 1 1 0 0 1-.28.94L9 11a16 16 0 0 0 6 6l1.66-1.82a1 1 0 0 1 .94-.28 12.35 12.35 0 0 0 6.4 0 1 1 0 0 1 0 1z" />
    </svg>
  );
}
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [formStartTracked, setFormStartTracked] = useState(false);
  const { toast } = useToast();
  const currentLocation = useLocation();
  const isHomePage = currentLocation.pathname === '/';
  const isBuildingPermitPage = currentLocation.pathname === '/building-permit';

  const formName = 'Navbar Quick Quote';
  const formId = 'navbar-quote-form';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Track form start only once when user first interacts with any field
    const hasFormData = name || email || phone || budget || location || description;
    if (showQuoteForm && !formStartTracked && hasFormData) {
      trackFormStart(formName, formId);
      setFormStartTracked(true);
    }
  }, [name, email, phone, budget, location, description, showQuoteForm, formStartTracked]);

  const handleQuickQuote = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      budget,
      location,
      description
    };

    try {
      // Save to database first
      const response = await fetch('/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form_type: 'navbar_quote',
          name,
          email,
          phone,
          location,
          project_type: '', // navbar form doesn't have project type
          budget,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Navbar form submitted successfully:', result);

      // Send email notification in background (non-blocking)
      sendFormNotification({
        formName,
        formData,
        pageUrl: window.location.href,
        timestamp: new Date().toISOString()
      }).catch(error => {
        console.log('Email notification failed:', error);
      }); // Don't await - fire and forget

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

      toast({
        title: "Quote request received!",
        description: "We'll contact you shortly with a free estimate.",
      });

      setName('');
      setEmail('');
      setBudget('');
      setPhone('');
      setLocation('');
      setDescription('');
      setShowQuoteForm(false);
      setFormStartTracked(false);
    } catch (error) {
      console.error('Error submitting quick quote:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your quote. Please try again.",
        variant: 'destructive',
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    trackButtonClick(`Navigate to ${sectionId}`, `nav-${sectionId}`);

    if (sectionId === 'testimonials') {
      const section = document.getElementById('testimonials');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
      return;
    }

    if (isHomePage) {
      // If already on the home page, scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    } else {
      // If on another page, navigate to home with section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <>
      {/* Top Banner Quote Form - Fixed positioning with proper z-index and spacing */}
      {showQuoteForm && (
        <div className="bg-casa-gold text-casa-navy py-3 fixed w-full z-50 top-0">
          <div className="container">
            <form id={formId} onSubmit={handleQuickQuote} className="flex flex-col gap-3">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                <p className="font-bold text-sm md:text-base">Get your free quote now!</p>
                <Button
                  variant="ghost"
                  className="md:hidden h-6 w-6 p-0 hover:bg-casa-gold/80 absolute top-2 right-4"
                  onClick={() => {
                    trackButtonClick('Close Quote Form', 'close-quote-form-mobile');
                    setShowQuoteForm(false);
                  }}
                  type="button"
                  aria-label="Close quick quote form"
                  data-testid="button-close-quote-mobile"
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2">
                <Input
                  type="text"
                  placeholder="Your name"
                  className="h-8 text-sm bg-white/90"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-8 text-sm bg-white/90"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Your phone *"
                  className="h-8 text-sm bg-white/90"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Project location"
                  className="h-8 text-sm bg-white/90"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Select
                  value={budget}
                  onValueChange={setBudget}
                  required
                >
                  <SelectTrigger className="h-8 text-sm bg-white/90">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {isBuildingPermitPage ? (
                      <>
                        <SelectItem value="dont-know">I don't know</SelectItem>
                        <SelectItem value="under-3k">Under $3000</SelectItem>
                        <SelectItem value="3k-5k">$3000-$5000</SelectItem>
                        <SelectItem value="5k-7k">$5000-$7000</SelectItem>
                        <SelectItem value="7k-10k">$7000-$10,000</SelectItem>
                        <SelectItem value="10k-15k">$10,000-$15000</SelectItem>
                        <SelectItem value="15k-plus">&gt;$15,000</SelectItem>
                      </>
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
                <Textarea
                  placeholder="Project description"
                  className="text-sm bg-white/90 h-12 min-h-12 py-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <Button
                  size="sm"
                  className="h-8 bg-casa-navy hover:bg-casa-navy/80 text-white whitespace-nowrap col-span-1"
                  type="submit"
                  onClick={() => trackButtonClick('Submit Quick Quote', 'submit-quick-quote')}
                >
                  Submit
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="hidden md:flex h-8 hover:bg-casa-gold/80 p-1 col-span-1"
                  onClick={() => {
                    trackButtonClick('Close Quote Form', 'close-quote-form-desktop');
                    setShowQuoteForm(false);
                  }}
                  type="button"
                  aria-label="Close quick quote form"
                  data-testid="button-close-quote-desktop"
                >
                  ✕
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fixed header positioning to appear below the quote form when active */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${showQuoteForm ? 'top-[120px] md:top-[90px]' : 'top-0'} ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => trackButtonClick('Logo', 'nav-logo')}
              aria-label="Go to AllCasa homepage"
            >
              <img
                src="/lovable-uploads/1217ade2-9799-4eb9-afb7-52cd425cd153.webp"
                alt="AllCasa Logo - Home Renovations and Construction"
                className="h-16 w-16 md:h-20 md:w-20"
                loading="eager"
              />
            </Link>

            <div className="ml-4 md:ml-6 hidden md:flex">
              <a
                href="tel:6479614070"
                className="flex items-center text-casa-purple hover:text-casa-darkpurple transition-colors group"
                onClick={() => trackButtonClick('Call Secondary Number', 'nav-phone-secondary')}
                aria-label="Call AllCasa secondary number at 647-961-4070"
              >
                <PhoneCallIcon className="h-4 w-4 mr-1" />
                <span className="font-medium text-base px-2 py-1 rounded">
                  647-961-4070
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection('services')} className="text-casa-navy hover:text-casa-purple font-medium transition-colors" data-testid="button-nav-services">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-casa-navy hover:text-casa-purple font-medium transition-colors" data-testid="button-nav-portfolio">Portfolio</button>
                <button onClick={() => scrollToSection('process')} className="text-casa-navy hover:text-casa-purple font-medium transition-colors" data-testid="button-nav-process">Process</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-casa-navy hover:text-casa-purple font-medium transition-colors" data-testid="button-nav-testimonials">Testimonials</button>
              </>
            ) : (
              <Link to="/" className="text-casa-navy hover:text-casa-purple font-medium transition-colors" data-testid="link-nav-home">Home</Link>
            )}
            <Link to="/building-permit" className="text-casa-navy hover:text-casa-purple font-medium transition-colors" data-testid="link-nav-building-permit">Building Permit</Link>
            <button onClick={() => {
              trackButtonClick('Navigate to Permit Services', 'nav-permit-services');
              window.location.href = '/building-permit#permit-services-section';
            }} className="text-casa-navy hover:text-casa-purple font-medium transition-colors" data-testid="button-nav-permit-services">Permit Services</button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1">
            <div className="flex flex-col items-center space-y-1">
              <a
                href="tel:6479614070"
                className="text-casa-purple"
                onClick={() => trackButtonClick('Call Secondary Number', 'nav-phone-secondary-mobile')}
              >
                <div className="flex items-center px-1 py-1 rounded">
                  <PhoneCallIcon className="h-2 w-2 mr-1" />
                  <span className="font-medium text-xs whitespace-nowrap">647-961-4070</span>
                </div>
              </a>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => {
                trackButtonClick('Mobile Menu', 'nav-mobile-menu');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              data-testid="button-mobile-menu"
            >
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full z-50 border-t">
            <div className="container py-4 flex flex-col space-y-3">
              {isHomePage ? (
                <>
                  <button onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }} className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left" data-testid="button-mobile-services">Services</button>
                  <button onClick={() => { scrollToSection('portfolio'); setMobileMenuOpen(false); }} className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left" data-testid="button-mobile-portfolio">Portfolio</button>
                  <button onClick={() => { scrollToSection('process'); setMobileMenuOpen(false); }} className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left" data-testid="button-mobile-process">Process</button>
                  <button onClick={() => { scrollToSection('testimonials'); setMobileMenuOpen(false); }} className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left" data-testid="button-mobile-testimonials">Testimonials</button>
                </>
              ) : (
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left" data-testid="link-mobile-home">Home</Link>
              )}
              <Link to="/building-permit" onClick={() => setMobileMenuOpen(false)} className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left" data-testid="link-mobile-building-permit">Building Permit</Link>
              <button onClick={() => {
                trackButtonClick('Navigate to Permit Services', 'nav-permit-services-mobile');
                setMobileMenuOpen(false);
                window.location.href = '/building-permit#permit-services-section';
              }} className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left" data-testid="button-mobile-permit-services">Permit Services</button>
              <Button className="bg-casa-purple hover:bg-casa-darkpurple text-white w-full" onClick={() => {
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }} data-testid="button-mobile-contact">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
