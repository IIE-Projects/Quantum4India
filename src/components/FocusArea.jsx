import { motion } from 'framer-motion';
import { 
  Cpu, 
  Globe, 
  GraduationCap, 
  Rocket
} from 'lucide-react';

const FocusArea = () => {
  const areas = [
    {
      icon: Cpu,
      title: "Quantum Technology Ecosystem",
      description: "Understanding and strengthening India's technological capabilities to build an Atmanirbhar (self-reliant) quantum ecosystem. We focus on identifying areas for investment and development to ensure global competitiveness in quantum computing, quantum communication, and quantum sensing, with AI as a supporting technology.",
    },
    {
      icon: Globe,
      title: "Societal Impact of Quantum Technologies",
      description: "Designing quantum and AI applications tailored for India's diverse society. By collaborating with physicists, economists, sociologists, and technologists, we aim to create solutions that address unique cultural, economic, and infrastructural challenges, with quantum solutions leading the way.",
    },
    {
      icon: GraduationCap,
      title: "Development of Quantum Capabilities",
      description: "Building a robust pipeline of quantum and AI talent by engaging with educational institutions, researchers, and startups. We provide mentorship, resources, and collaboration opportunities to create cutting-edge quantum platforms and applications, with quantum as the primary focus.",
    },
    {
      icon: Rocket,
      title: "Strategic Initiatives in Quantum Technologies",
      description: "Driving innovation in critical areas such as cybersecurity, healthcare, space exploration, and national security. Through strategic partnerships and risk mitigation strategies, we address key challenges and unlock the potential of quantum and AI technologies for India's future, with quantum as the foundation for progress.",
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id='focusarea' className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white to-orange-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Focus Areas
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-1 bg-orange-500 mx-auto"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-0 group-hover:bg-orange-100 transition-colors duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FocusArea;