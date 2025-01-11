import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    const footerLinks = [
      { name: 'Mission', href: '#mission' },
      { name: 'Themes', href: '#themes' },
      { name: '#DataDaan', href: '#datadaan' },
      { name: 'Activities', href: '#activities' },
      { name: 'Past Events', href: '#events' },
      { name: 'Participants', href: '#participants' },
      { name: 'Join', href: '#join' },
      { name: 'Media', href: '#media' },
      { name: 'Resources', href: '#resources' },
      { name: 'Contact us', href: '#contact' }
    ];
  
    const socialLinks = [
      { icon: Twitter, href: 'https://twitter.com' },
      { icon: Linkedin, href: 'https://linkedin.com' },
      { icon: Youtube, href: 'https://youtube.com' },
      { icon: Github, href: 'https://github.com' }
    ];
  
    return (
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              {/* Replace with your logo */}
              <div className="text-2xl font-bold text-orange-500 mb-4">Quantum4India</div>
              <p className="text-sm text-gray-500">
                Advancing quantum technologies for India's future
              </p>
            </div>
  
            <div className="col-span-2 md:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Footer Links */}
                <div className="space-y-3">
                  {footerLinks.slice(0, 4).map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-gray-600 hover:text-orange-500"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-3">
                  {footerLinks.slice(4, 7).map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-gray-600 hover:text-orange-500"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-3">
                  {footerLinks.slice(7).map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-gray-600 hover:text-orange-500"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          {/* Social Links & Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Quantum4India. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;