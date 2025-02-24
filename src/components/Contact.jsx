import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Building2, 
  Send,
} from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormStatus('Message sent successfully!');
      // Add your form submission logic here
    };
  
    return (
      <section id='contact' className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us for collaborations, inquiries, and support
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Building2 className="w-5 h-5 text-orange-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Official Address</p>
                      <p className="text-gray-600">Department of Quantum Technologies</p>
                      <p className="text-gray-600">Government of India</p>
                      <p className="text-gray-600">New Delhi, India</p>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 11 2304 XXXX</p>
                    </div>
                  </div>
  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">contact@quantum4india.gov.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
  
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
  
                {formStatus && (
                  <div className="mt-4 text-green-600 text-sm">{formStatus}</div>
                )}
  
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default Contact;