import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "Quantum Computing: Transforming India's Technological Landscape",
      excerpt:
        "Exploring how quantum computing is reshaping India's technological capabilities and future prospects.",
      date: "January 10, 2025",
      readTime: "8 min read",
      image: "https://placehold.co/800x600",
    },
    {
      title: "AI for Social Good: Empowering Rural Communities",
      excerpt:
        "Discovering innovative ways AI is being utilized to enhance rural development and community empowerment.",
      date: "January 8, 2025",
      readTime: "6 min read",
      image: "https://placehold.co/800x600",
    },
    {
      title: "Navigating AI Regulations: A Pathway to Ethical Development",
      excerpt:
        "Understanding the regulatory framework and ethical considerations in AI development for India.",
      date: "January 5, 2025",
      readTime: "7 min read",
      image: "https://placehold.co/800x600",
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Updates
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in quantum computing and
            artificial intelligence
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <button className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Explore more articles to stay updated on advancements in AI and
            quantum technologies.
          </p>
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
