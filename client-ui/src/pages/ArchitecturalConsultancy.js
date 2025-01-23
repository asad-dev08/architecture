import React from "react";
import {
  ArrowRight,
  CheckCircle,
  Building2,
  Ruler,
  PenTool,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/architectural.css";

const ArchitecturalConsultancy = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Building Design",
      description:
        "Comprehensive architectural design solutions for residential and commercial projects.",
    },
    {
      icon: <Ruler className="w-12 h-12" />,
      title: "Technical Planning",
      description:
        "Detailed technical drawings and documentation for construction.",
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Design Development",
      description:
        "Iterative design process with 3D visualization and material selection.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Project Management",
      description:
        "End-to-end project supervision and coordination with contractors.",
    },
  ];

  const expertise = [
    {
      title: "Residential Architecture",
      image:
        "https://images.unsplash.com/photo-1525896544042-354764aa27e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      points: [
        "Custom Home Design",
        "Villa & Apartment Planning",
        "Renovation Consulting",
        "Space Optimization",
      ],
    },
    {
      title: "Commercial Architecture",
      image:
        "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      points: [
        "Office Buildings",
        "Retail Spaces",
        "Hotels & Restaurants",
        "Industrial Facilities",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
          alt="Architectural Consultancy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-bold text-white mb-8">
                Architectural
                <br />
                Consultancy
              </h1>
              <p className="text-xl text-gray-200 mb-12 max-w-2xl">
                Expert architectural solutions that blend innovation,
                functionality, and sustainable design principles.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-700 text-white px-8 py-4 hover:bg-primary-600 transition-colors duration-300 rounded-full"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive architectural consulting services tailored to your
              needs, from concept development to project completion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white border border-gray-100 hover:border-primary-200 transition-colors duration-300"
              >
                <div className="text-primary-600 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {expertise.map((area, index) => (
              <div key={index} className="space-y-8">
                <div className="relative h-[400px] overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">{area.title}</h3>
                  <ul className="space-y-4">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "Initial meeting to understand project requirements",
              },
              {
                number: "02",
                title: "Concept Design",
                description:
                  "Development of architectural concepts and sketches",
              },
              {
                number: "03",
                title: "Documentation",
                description: "Detailed technical drawings and specifications",
              },
              {
                number: "04",
                title: "Execution",
                description: "Project supervision and quality control",
              },
            ].map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-7xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors duration-300">
                  {step.number}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {/* {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-primary-100" />
                )} */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
              <p className="text-gray-400 mb-8">
                Explore our portfolio of successful architectural projects that
                showcase our expertise and commitment to excellence.
              </p>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                alt="Project 1"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                alt="Project 2"
                className="w-full h-64 object-cover translate-y-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Let's collaborate to bring your architectural vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-700 text-white px-8 py-4 hover:bg-primary-600 transition-colors duration-300 rounded-full"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchitecturalConsultancy;
