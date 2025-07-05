import React from 'react';
import { 
  Slash, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook 
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    services: [
      'Social Media Marketing',
      'Digital Marketing',
              'Content Creation',
      'Brand Building',
      'Shopify Development',
      'Website Development'
    ],
    company: [
      'About Us',
      'Our Process',
      'Case Studies',
      'Careers',
      'Contact',
      'Blog'
    ],
    support: [
      'Help Center',
      'FAQ',
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'GDPR'
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 to-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-white to-slate-100 rounded-lg flex items-center justify-center shadow-lg">
                  <Slash className="w-7 h-7 text-slate-800" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-md"></div>
              </div>
              <span className="text-2xl font-bold text-white">
                SLASHNEST
              </span>
            </div>
            
            <p className="text-white/70 mb-6 leading-relaxed">
              We empower brands with cutting-edge digital solutions. From content creation to custom development, 
              we're your partner in digital transformation.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-white/70">
                <Mail className="w-5 h-5 mr-3 text-amber-400" />
                <span>hello@slashnest.com</span>
              </div>
              <div className="flex items-center text-white/70">
                <Phone className="w-5 h-5 mr-3 text-amber-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/70">
                <MapPin className="w-5 h-5 mr-3 text-amber-400" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/60 text-sm">
              © 2024 SLASHNEST. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>

            <div className="text-white/60 text-sm">
              We work with ❤️ for digital excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;