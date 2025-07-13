// Custom Card Components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const OurMission = () => {
  const themes = [
    {
      id: 1,
      title: "Quantum Technology Ecosystem",
      description: "Strengthening India's quantum capabilities in computing, communication, and sensing to build a self-reliant quantum ecosystem."
    },
    {
      id: 2,
      title: "Societal Impact of Quantum",
      description: "Developing quantum solutions tailored for India's diverse society, addressing unique cultural, economic, and infrastructural challenges."
    },
    {
      id: 3,
      title: "AI Technology Ecosystem",
      description: "Understanding the evolving technical capabilities available in India and exploring necessary developments and challenges to be competitive in an AI Technology Ecosystem."
    },
    {
      id: 4,
      title: "Societal Impact of AI",
      description: "Developing tools to make AI applications most suitable for Indian scenarios, focusing on healthcare, education, mobility, languages for maximum positive societal impact."
    },
    {
      id: 5,
      title: "Quantum & AI Strategic Initiatives",
      description: "Driving innovation in critical areas such as cybersecurity, healthcare, and national security through strategic partnerships and risk mitigation strategies, leveraging both quantum and AI technologies."
    }
  ];

  const pastEvents = [
    {
      title: "2024 Year in Review for Artificial Intelligence",
      date: "January 2024",
      thumbnail: "https://placehold.co/400x225"
    },
    {
      title: "AI4INDIA SUMMIT - Bangalore",
      date: "September 28, 2024",
      thumbnail: "https://placehold.co/400x225"
    },
    {
      title: "Expert Session on Shaping the Impact of AI on Society",
      date: "October 6, 2023",
      thumbnail: "https://placehold.co/400x225"
    }
  ];

  const videos = [
    {
      title: "AI Decoded",
      thumbnail: "https://placehold.co/400x225",
      speaker: "Shashi Vempati"
    },
    {
      title: "Artificial Intelligence & Its Applications",
      thumbnail: "https://placehold.co/400x225",
      speaker: "Alok Agarwal"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Mission to Empower India with Quantum and AI</h1>
        <p className="text-xl opacity-90">Driving progress through Quantum Technologies and Artificial Intelligence</p>
      </div>

      {/* Mission Statement */}
      <Card className="mb-12">
        <CardContent className="bg-gradient-to-br from-orange-50 to-orange-100">
          <p className="text-lg leading-relaxed mb-6">
            Quantum technologies are opening new frontiers in computing, security, and communication, enabling India to leap ahead in scientific and technological innovation. At the same time, AI is making rapid strides in its capabilities, moving from simple data-related tasks to providing front-facing consumer applications. Together, quantum and AI are shaping a future where humans and technology collaborate for greater societal impact.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Quantum solutions have the potential to revolutionize industries, enhance national security, and solve complex problems that were previously out of reach. AI and related applications can further empower even the most disenfranchised and reduce inequities they face in this rapidly changing ecosystem.
          </p>
          <p className="text-lg leading-relaxed">
            Our mission is to foster a balanced ecosystem where quantum and AI work hand-in-hand, as well as independently, to drive innovation, inclusion, and growth for all Indians.
          </p>
        </CardContent>
      </Card>

      {/* Themes Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Focus on 5 Themes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <Card key={theme.id} className="hover:shadow-lg transition-shadow border border-orange-100">
              <CardContent>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full font-bold">
                    {theme.id}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-800">{theme.title}</h3>
                </div>
                <p className="text-gray-600">{theme.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Past Events</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <img src={event.thumbnail} alt={event.title} className="w-full h-48 object-cover" />
              <CardContent>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{event.title}</h3>
                <p className="text-orange-600">{event.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Videos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{video.title}</h3>
                <p className="text-orange-600">with {video.speaker}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Emerging Technologies in Indian Diplomacy</h3>
              <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                Download PDF
              </button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-400 to-orange-500 text-white">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Responsible AI Proposals</h3>
              <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                Learn More
              </button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white">
            <CardContent>
              <h3 className="text-xl font-semibold mb-3">Responsible AI Guidelines</h3>
              <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                View Guidelines
              </button>
            </CardContent>
          </Card>
        </div>
      </div>

      
    </div>
  );
};

export default OurMission;