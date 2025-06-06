import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Parent of 8-year-old",
    role: "Soccer & Swimming",
    content: "KLIMB helped us discover sports our daughter actually enjoys. No more dragging her to practice!",
    avatar: "👩",
  },
  {
    id: 2,
    name: "Parent of 10-year-old",
    role: "Basketball",
    content: "We never would have considered basketball, but it's been the perfect match for our son's height and personality.",
    avatar: "👨",
  },
  {
    id: 3,
    name: "Parent of 7-year-old",
    role: "Gymnastics",
    content: "The quiz was so fun my child didn't even realize they were being assessed. The results were spot on!",
    avatar: "👩",
  },
  {
    id: 4,
    name: "Parent of 9-year-old",
    role: "Tennis & Track",
    content: "Two sports we'd never considered, but KLIMB's assessment showed they matched perfectly with our child's skills.",
    avatar: "👨",
  },
];

const Testimonials = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What Parents Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from families who discovered their perfect sports matches
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center text-5xl mb-6">
                <FaQuoteLeft className="text-klimb-primary opacity-20" />
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-klimb-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;