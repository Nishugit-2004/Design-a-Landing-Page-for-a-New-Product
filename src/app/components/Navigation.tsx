import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">P</span>
            </div>
            <span className="ml-2 text-xl">ProductName</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-blue-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-foreground hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#pricing" className="text-foreground hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">About</a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-foreground hover:text-blue-600 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
              Get Started
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-foreground hover:text-blue-600 transition-colors">Features</a>
              <a href="#testimonials" className="text-foreground hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-foreground hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">About</a>
              <button className="text-left text-foreground hover:text-blue-600 transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-left">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
