// Hero.js
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-klimb-primary to-klimb-secondary text-white pt-32 pb-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Find Your Child's <span className="text-klimb-accent">Perfect Sport</span> Match
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our smart assessment matches kids with sports they'll love based on personality, body type, and abilities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#quiz"
                className="inline-flex items-center px-8 py-4 bg-klimb-accent text-white rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Quiz <FaArrowRight className="ml-2" />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Mascot placeholder - replace with actual image */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-8xl">🏆</span>
              </div>
              
              {/* Decorative animated elements */}
              <motion.div 
                className="absolute -top-10 -left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-5 -right-5 w-16 h-16 bg-klimb-accent rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;