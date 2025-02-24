import React from 'react';

const OurVision = () => {
  const visionPoints = [
    {
      title: "Advanced Technology Ecosystem",
      description: "Advancing quantum and AI technologies to create meaningful impact through innovative solutions that address real-world challenges and drive progress across sectors.",
      icon: "🔬"
    },
    {
      title: "Ethical Innovation Framework",
      description: "Establishing and promoting responsible innovation practices that prioritize transparency, accountability, and societal benefit in technological advancement.",
      icon: "⚖️"
    },
    {
      title: "Inclusive Growth Initiative",
      description: "Dedicated to reducing socio-economic disparities by democratizing access to advanced technologies and creating opportunities for all segments of society.",
      icon: "🌟"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Vision
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our vision is to create a better future through innovation and technology, fostering a thriving ecosystem that drives technological innovation while ensuring ethical practices and inclusive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="group"
            >
              <div className="h-full bg-white rounded-lg border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{point.icon}</span>
                  <div className="h-px w-2/3 bg-gradient-to-r from-orange-400 to-transparent"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
                
                <div className="mt-6 h-1 w-full bg-gradient-to-r from-orange-400 to-orange-200 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-700 text-lg font-medium max-w-2xl">
              Through strategic initiatives and collaborative partnerships, we aim to create lasting positive impact on society while maintaining the highest standards of technological excellence and ethical responsibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;

