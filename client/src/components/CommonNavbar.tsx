import { MenuIcon, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trackButtonClick } from "@/utils/gtmTracking";
import { useEffect, useState } from "react";
export default function CommonNavbar() {
  const scrollToSectionWithAnimation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Get navbar height for offset calculation
      const navbar = document.querySelector("header");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const sectionTop = section.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);

      // Update URL hash
      if (window.location.hash !== `#${sectionId}`) {
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    trackButtonClick(`Navigate to ${sectionId}`, `nav-${sectionId}`);

    if (sectionId === "testimonials") {
      const section = document.getElementById("testimonials");
      if (section) {
        scrollToSectionWithAnimation("testimonials");
      }
      return;
    }

    scrollToSectionWithAnimation(sectionId);
  };
  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 top-0 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => trackButtonClick("Logo", "nav-logo")}
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
              onClick={() =>
                trackButtonClick("Call Secondary Number", "nav-phone-secondary")
              }
              aria-label="Call AllCasa secondary number at 647-961-4070"
            >
              <PhoneCallIcon className="h-4 w-4 mr-1" />
              <span className="font-medium text-base px-2 py-1 rounded">
                647-961-4070
              </span>
            </a>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <>
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="text-casa-navy hover:text-casa-purple font-medium transition-colors"
              data-testid="button-nav-services"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="text-casa-navy hover:text-casa-purple font-medium transition-colors"
              data-testid="button-nav-portfolio"
            >
              Portfolio
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("process")}
              className="text-casa-navy hover:text-casa-purple font-medium transition-colors"
              data-testid="button-nav-process"
            >
              Process
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("testimonials")}
              className="text-casa-navy hover:text-casa-purple font-medium transition-colors"
              data-testid="button-nav-testimonials"
            >
              Testimonials
            </button>
          </>

          <Link
            to="/building-permit"
            className="text-casa-navy hover:text-casa-purple font-medium transition-colors"
            data-testid="link-nav-building-permit"
          >
            Building Permit
          </Link>
          <button
            type="button"
            onClick={() => {
              trackButtonClick(
                "Navigate to Permit Services",
                "nav-permit-services"
              );
              window.location.href = "/building-permit#permit-services-section";
            }}
            className="text-casa-navy hover:text-casa-purple font-medium transition-colors"
            data-testid="button-nav-permit-services"
          >
            Permit Services
          </button>
        </nav>

        <div className="md:hidden flex items-center space-x-1">
          <div className="flex flex-col items-center space-y-1">
            <a
              href="tel:6479614070"
              className="text-casa-purple"
              onClick={() =>
                trackButtonClick(
                  "Call Secondary Number",
                  "nav-phone-secondary-mobile"
                )
              }
            >
              <div className="flex items-center px-1 py-1 rounded">
                <PhoneCallIcon className="h-2 w-2 mr-1" />
                <span className="font-medium text-xs whitespace-nowrap">
                  647-961-4070
                </span>
              </div>
            </a>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => {
              trackButtonClick("Mobile Menu", "nav-mobile-menu");
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            data-testid="button-mobile-menu"
          >
            <MenuIcon className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full z-50 border-t">
          <div className="container py-4 flex flex-col space-y-3">
            <>
              <button
                type="button"
                onClick={() => {
                  scrollToSection("services");
                  setMobileMenuOpen(false);
                }}
                className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left"
                data-testid="button-mobile-services"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => {
                  scrollToSection("portfolio");
                  setMobileMenuOpen(false);
                }}
                className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left"
                data-testid="button-mobile-portfolio"
              >
                Portfolio
              </button>
              <button
                type="button"
                onClick={() => {
                  scrollToSection("process");
                  setMobileMenuOpen(false);
                }}
                className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left"
                data-testid="button-mobile-process"
              >
                Process
              </button>
              <button
                onClick={() => {
                  scrollToSection("testimonials");
                  setMobileMenuOpen(false);
                }}
                className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left"
                data-testid="button-mobile-testimonials"
              >
                Testimonials
              </button>
            </>

            <Link
              to="/building-permit"
              onClick={() => setMobileMenuOpen(false)}
              className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left"
              data-testid="link-mobile-building-permit"
            >
              Building Permit
            </Link>
            <a
              href="/building-permit#permit-services-section"
              className="text-casa-navy hover:text-casa-purple font-medium transition-colors py-2 text-left"
              data-testid="button-mobile-permit-services"
              onClick={() => {
                trackButtonClick(
                  "Navigate to Permit Services",
                  "nav-permit-services-mobile"
                );

                setMobileMenuOpen(false);
              }}
            >
              Permit Services
            </a>
            <Button
              className="bg-casa-purple hover:bg-casa-darkpurple text-white w-full"
              onClick={() => {
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              data-testid="button-mobile-contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
