import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  ExternalLink,
  Clock
} from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "National Quantum Computing Summit 2025",
      date: "March 15-16, 2025",
      location: "IIT Delhi",
      type: "Conference",
      description: "Join leading researchers and industry experts to discuss the future of quantum computing in India.",
      attendees: "250+ Expected"
    },
    {
      title: "Quantum Technology Workshop Series",
      date: "February 1-28, 2025",
      location: "Virtual Event",
      type: "Workshop",
      description: "Month-long virtual workshop series covering quantum computing fundamentals and applications.",
      attendees: "500+ Registered"
    },
    {
      title: "AI & Quantum Integration Symposium",
      date: "April 5, 2025",
      location: "Bengaluru",
      type: "Symposium",
      description: "Exploring synergies between AI and quantum technologies for national development.",
      attendees: "150+ Expected"
    }
  ];

  return (
    <section id='events' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in shaping the future of quantum technology and AI in India through our events and programs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                  {event.type}
                </span>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{event.title}</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.attendees}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{event.description}</p>

              <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                Register Now
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Events;