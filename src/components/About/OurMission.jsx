import React from 'react';

// Custom Card Components
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
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
      title: "AI Technology Ecosystem",
      description: "Understanding the evolving technical capabilities available in India and exploring necessary developments and challenges to be competitive in an AI Technology Ecosystem."
    },
    {
      id: 2,
      title: "Societal Impact of AI",
      description: "Developing tools to make AI applications most suitable for Indian scenarios, focusing on healthcare, education, mobility, languages for maximum positive societal impact."
    },
    {
      id: 3,
      title: "AI Policy: Legal Regulations and Public Advocacy",
      description: "Partnering with Think-Tanks, regulators, industry bodies, advocates and legal experts to promote the appropriate framework."
    },
    {
      id: 4,
      title: "Development of AI capabilities",
      description: "Creating a platform that enables engagement of various stakeholders engaged in development of AI platforms and applications."
    },
    {
      id: 5,
      title: "Strategic Initiatives",
      description: "Addressing the key issues faced by citizen technologies that need to be developed in India, with ongoing focus on high priorities."
    }
  ];

  const pastEvents = [
    {
      title: "2024 Year in Review for Artificial Intelligence",
      date: "January 2024",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      title: "AI4INDIA SUMMIT - Bangalore",
      date: "September 28, 2024",
      thumbnail: "/api/placeholder/400/225"
    },
    {
      title: "Expert Session on Shaping the Impact of AI on Society",
      date: "October 6, 2023",
      thumbnail: "/api/placeholder/400/225"
    }
  ];

  const videos = [
    {
      title: "AI Decoded",
      thumbnail: "/api/placeholder/400/225",
      speaker: "Shashi Vempati"
    },
    {
      title: "Artificial Intelligence & Its Applications",
      thumbnail: "/api/placeholder/400/225",
      speaker: "Alok Agarwal"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-lg p-8 mb-12">
        <h1 className="text-4xl font-bold mb-4">Mission to make AI work for all Indians</h1>
        <p className="text-xl opacity-90">Empowering India through Artificial Intelligence</p>
      </div>

      {/* Mission Statement */}
      <Card className="mb-12">
        <CardContent className="bg-gradient-to-br from-orange-50 to-orange-100">
          <p className="text-lg leading-relaxed mb-6">
            AI is making rapid strides in its capabilities, moving from simple data related tasks to providing front facing consumer applications. It won't be wrong to say that we are entering an era where humans and AI will coexist, to further enhance human development.
          </p>
          <p className="text-lg leading-relaxed">
            AI and related applications has the potential to further empower even the most disenfranchised and reduce inequities they face in this rapidly changing Ecosystem.
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