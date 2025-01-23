import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResidentialInterior = () => {
  const services = [
    "Complete Interior Design Solutions",
    "Space Planning & Layout",
    "Custom Furniture Design",
    "Kitchen & Bathroom Design",
    "Lighting Design",
    "Color Consultation",
    "Material Selection",
    "Project Management",
  ];

  const projects = [
    {
      title: "Modern Apartment",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",

      category: "Apartment",
    },
    {
      title: "Luxury Villa",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",

      category: "Villa",
    },
    {
      title: "Contemporary Home",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",

      category: "House",
    },
    // Add more projects
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Residential Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-6xl font-bold text-white mb-6">
              Residential Interior
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Transform your living space into a perfect blend of comfort,
              functionality, and aesthetic appeal with our expert residential
              interior design services.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Creating Spaces That Tell Your Story
              </h2>
              <p className="text-gray-600 mb-8">
                We understand that your home is more than just a space – it's a
                reflection of your personality and lifestyle. Our residential
                interior design services focus on creating harmonious
                environments that perfectly balance aesthetics with
                functionality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
                alt="Interior"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
                alt="Interior"
                className="rounded-lg w-full h-64 object-cover translate-y-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "Initial meeting to understand your vision, requirements, and budget.",
              },
              {
                number: "02",
                title: "Design Development",
                description:
                  "Creating detailed design concepts and space planning solutions.",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "Executing the approved design with attention to every detail.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold text-primary-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Some of Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can create your dream living space together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-700 text-white px-8 py-4 hover:bg-primary-600 transition-colors duration-300 rounded-full"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResidentialInterior;
