import React, { useState } from 'react';

const WhatWeDo = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const activities = [
        {
            title: "Open-Source Innovation",
            description: "Foster open-source projects in AI and quantum computing to drive collaborative technological advancement.",
            icon: "🔓",
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "Strategic Partnerships",
            description: "Partner with academia, industry, and government to advance strategic initiatives and create lasting impact.",
            icon: "🤝",
            color: "from-purple-400 to-purple-600"
        },
        {
            title: "Policy Engagement",
            description: "Engage with diverse stakeholders to shape policies and frameworks for ethical AI development and implementation.",
            icon: "⚖️",
            color: "from-green-400 to-green-600"
        }
    ];

    return (
        <div className="w-full bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto relative">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-16">
                        What We Do
                    </h1>

                    {/* Main content container */}
                    <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                        {/* Center circle */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center z-10">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                <span className="text-xl">🎯</span>
                            </div>
                        </div>

                        {/* Connecting lines */}
                        {activities.map((_, index) => (
                            <div
                                key={`line-${index}`}
                                className="absolute left-1/2 top-1/2 h-px bg-gray-300 origin-left"
                                style={{
                                    width: '35%',
                                    transform: `rotate(${120 * index}deg) translateY(-50%)`
                                }}
                            />
                        ))}

                        {/* Activity circles */}
                        {activities.map((activity, index) => {
                            const angle = (index * 360) / activities.length;
                            const radius = 42; // percentage of container width
                            const xPercent = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
                            const yPercent = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

                            return (
                                <div
                                    key={`activity-${index}`}
                                    className="absolute w-28 h-28"
                                    style={{
                                        left: `${xPercent}%`,
                                        top: `${yPercent}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        <div className={`
                                            w-full h-full rounded-full 
                                            bg-gradient-to-br ${activity.color} 
                                            flex items-center justify-center 
                                            cursor-pointer
                                            transform transition-all duration-300
                                            ${activeIndex === index ? 'scale-110' : 'scale-100'}
                                        `}>
                                            <div className="w-20 h-20 bg-white rounded-full flex flex-col items-center justify-center p-2">
                                                <span className="text-2xl mb-1">{activity.icon}</span>
                                                <span className="text-xs font-semibold text-center">
                                                    {activity.title.split(' ')[0]}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Info card */}
                                        <div className={`
                                            absolute z-20 w-64 
                                            bg-white rounded-lg shadow-xl p-4 
                                            transition-all duration-300
                                            ${activeIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'}
                                        `}
                                        style={{
                                            top: '120%',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                        }}>
                                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                                                {activity.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {activity.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600">
                            Hover over each circle to learn more about our activities
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;