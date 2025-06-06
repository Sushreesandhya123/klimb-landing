import { motion } from 'framer-motion';
import { FaSearch, FaClipboardList, FaTrophy, FaRunning, FaChartLine } from 'react-icons/fa';

const JourneyTracker = () => {
  const steps = [
    {
      icon: <FaSearch className="text-3xl mb-4 text-klimb-primary" />,
      title: "Discover KLIMB",
      description: "Learn how our unique assessment helps match kids with their ideal sports.",
    },
    {
      icon: <FaClipboardList className="text-3xl mb-4 text-klimb-secondary" />,
      title: "Take the Quiz",
      description: "Our fun, interactive quiz evaluates both physical and psychological traits.",
    },
    {
      icon: <FaTrophy className="text-3xl mb-4 text-klimb-accent" />,
      title: "Reveal Your Matches",
      description: "Get personalized sport recommendations based on your child's unique profile.",
    },
    {
      icon: <FaRunning className="text-3xl mb-4 text-klimb-primary" />,
      title: "Visit an Academy",
      description: "Connect with local sports academies for your child to try their matches.",
    },
    {
      icon: <FaChartLine className="text-3xl mb-4 text-klimb-secondary" />,
      title: "Track Progress",
      description: "Monitor your child's development and get ongoing recommendations.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tracker" className="py-20 bg-gray-50">  {/* Changed id to #tracker */}
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Sports Tracker Journey</h2>  {/* Updated heading */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, fun process to discover your child's perfect sports match
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 text-sm font-semibold text-klimb-primary">
                Step {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTracker;