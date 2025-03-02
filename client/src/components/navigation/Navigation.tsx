
import  { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-gray/80 backdrop-blur-lg shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            CodeSync
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden text-white md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-sm text-white hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-white hover:text-primary transition-colors"
          >
            How It Works
          </a>
          {/* <a
            href="#pricing"
            className="text-sm text-white hover:text-primary transition-colors"
          >
            Pricing
          </a> */}
          {/* <a
            href="#testimonials"
            className="text-sm text-white hover:text-primary transition-colors"
          >
            Testimonials
          </a> */}

        {/* contact us */}
        <a href="#contact" className="text-sm text-white hover:text-primary transition-colors">
            Contact Us
          </a>


         <a href="/login"> <Button
            variant="ghost"
            className="text-sm hover:bg-primary/10 hover:text-primary"
          >
            Log In
          </Button></a>
          <a href="/signup">
          <Button className="bg-primary hover:bg-primary/90 transition-colors">
            Sign Up
          </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 " />
          ) : (
            <Menu className="h-6 w-6  " />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-foreground/80 hover:text-primary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-primary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            {/* <a
              href="#pricing"
              className="text-foreground/80 hover:text-primary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a> */}
            {/* <a
              href="#testimonials"
              className="text-foreground/80 hover:text-primary py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a> */}
            <div className="flex flex-col space-y-3 pt-2">
             <a href="/login">
               <Button
                variant="ghost"
                className="w-full text-black justify-start hover:bg-primary hover:text-white"
              >
                Log In
              </Button></a>
              <a href="/signup">
              <Button className="w-full bg-primary hover:bg-primary/90 transition-colors">
                Sign Up
              </Button></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
