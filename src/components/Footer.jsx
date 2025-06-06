// Footer.js
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'How It Works', href: '#tracker' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Get Started', href: '#quiz' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: 'Facebook', href: '#' },
    { icon: <FaTwitter />, name: 'Twitter', href: '#' },
    { icon: <FaInstagram />, name: 'Instagram', href: '#' },
    { icon: <FaLinkedin />, name: 'LinkedIn', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-klimb-primary mb-4">KLIMB</h3>
            <p className="text-gray-400 max-w-xs mb-4">
              Helping kids find their perfect sport match through smart assessment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-klimb-accent text-xl"
                  whileHover={{ y: -3 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {links.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-klimb-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {links.slice(4).map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-klimb-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="col-span-2 md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Fun Fact</h4>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-klimb-accent text-3xl font-bold mb-2">1,200+</p>
                <p className="text-gray-400">Kids matched with their perfect sports</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} KLIMB. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;