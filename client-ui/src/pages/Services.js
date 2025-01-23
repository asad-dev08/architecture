import React from "react";
import { Link } from "react-router-dom";
import { Home, Building2, Compass } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-16 h-16" />,
      title: "Residential Interior",
      description:
        "Transform your living spaces into stunning, functional environments that reflect your personal style and enhance your daily life.",
      features: [
        "Custom furniture design",
        "Space planning and layout",
        "Color consultation",
        "Material selection",
        "Lighting design",
        "Art and accessories curation",
      ],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      link: "/services/residential-interior",
    },
    {
      icon: <Building2 className="w-16 h-16" />,
      title: "Commercial Interior",
      description:
        "Create impressive commercial spaces that enhance productivity, inspire creativity, and leave lasting impressions on clients and employees.",
      features: [
        "Office space planning",
        "Corporate branding integration",
        "Ergonomic workspace design",
        "Commercial lighting solutions",
        "Acoustic treatment",
        "Sustainable design solutions",
      ],
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      link: "/services/commercial-interior",
    },
    {
      icon: <Compass className="w-16 h-16" />,
      title: "Architectural Consultancy",
      description:
        "Expert guidance for your architectural projects, from concept development to completion, ensuring both aesthetic appeal and functional excellence.",
      features: [
        "Concept development",
        "Technical drawings",
        "Project management",
        "Sustainability consulting",
        "Building regulations compliance",
        "Construction supervision",
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      link: "/services/architectural-consultancy",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Comprehensive design solutions tailored to transform your spaces
            into extraordinary environments.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="text-primary-600 mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
