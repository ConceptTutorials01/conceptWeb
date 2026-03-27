import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Alumni Stories', href: '#alumni' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  const courses = [
    'IIT JEE Main',
    'IIT JEE Advanced', 
    'Class 11th Foundation',
    'Class 12th Intensive',
    'Class 10th',
    'Class 9th',
    'NTSE',
    'Crash Course',
    'Test Series'
  ];

  const socialLinks = [
    /*{ icon: <Facebook className="w-5 h-5" />, href: 'https://www.youtube.com/', name: 'Facebook' },*/
    /*{ icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },*/
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/concept_tutorials_/?hl=en', name: 'Instagram' },
    /*{ icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube' },*/
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Concept Tutorials</h3>
                <p className="text-sm opacity-90">Coaching Institute By Parag Kher</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering students to achieve their IIT JEE dreams through comprehensive 
              offline coaching, expert faculty, and proven methodologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Courses</h4>
            <ul className="space-y-2">
              {courses.map((course, index) => (
                <li key={index} className="text-sm opacity-90">
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>113, Lokmanya Nagar</p>
                  <p>Indore (M.P.)</p>
                  <p>India - 452009</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>0731 3582568</p>
                  <p>93003 60180</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>conceptutorials@outlook.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90 mb-4 md:mb-0">
            © 2025 Concept Tutorials. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm opacity-90">
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity duration-300">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;