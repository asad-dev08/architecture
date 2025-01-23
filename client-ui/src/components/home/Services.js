import React from "react";
import { Link } from "react-router-dom";
import { Home, Building2, Compass } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Residential Interior",
      description:
        "Transform your living spaces into stunning, functional environments that reflect your personal style.",
      link: "/services/residential-interior",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Commercial Interior",
      description:
        "Create impressive commercial spaces that enhance productivity and leave lasting impressions.",
      link: "/services/commercial-interior",
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: "Architectural Consultancy",
      description:
        "Expert guidance for your architectural projects, from concept to completion.",
      link: "/services/architectural-consultancy",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive design solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
