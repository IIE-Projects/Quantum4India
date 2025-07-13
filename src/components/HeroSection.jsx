import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Orange decorative element */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Tagline */}
        <motion.p
          className="text-orange-600 font-medium text-lg mb-4"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          Advancing Quantum and AI Technologies for India
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          Empowering India with Quantum Technologies
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-xl text-gray-600 mb-8 max-w-3xl"
          {...fadeIn}
          transition={{ delay: 0.6 }}
        >
          Creating an ecosystem for quantum innovation, inclusion, and growth, with AI as a key enabler.
        </motion.p>

        {/* CTA Button */}
        <motion.div {...fadeIn} transition={{ delay: 0.8 }}>
          <button className="group inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
            Join Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          className="mt-16 max-w-4xl"
          {...fadeIn}
          transition={{ delay: 1 }}
        >
          <div className="prose prose-lg">
            <p className="text-gray-600 leading-relaxed">
              At Quantum4India, we are on a mission to democratize access to quantum technologies and artificial intelligence, with quantum at the forefront of our initiatives. By fostering open-source contributions, we empower individuals and organizations to leverage these cutting-edge technologies for societal growth and innovation. Explore our initiatives to build a self-reliant quantum and AI ecosystem in India, where quantum leads the way in transformative change.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-50/50 to-transparent -z-10" />
    </div>
  );
};

export default HeroSection;
