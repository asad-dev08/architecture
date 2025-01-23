import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/commercial.css";

const CommercialInterior = () => {
  const commercialTypes = [
    {
      title: "Office Space",
      image:
        "https://images.unsplash.com/photo-1525896544042-354764aa27e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      description: "Modern and productive workplace solutions",
    },
    {
      title: "Retail Stores",
      image:
        "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      description: "Engaging retail environments that drive sales",
    },
    {
      title: "Restaurants",
      image:
        "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      description: "Atmospheric dining spaces that enhance experience",
    },
    {
      title: "Hotels",
      image:
        "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      description: "Luxurious and comfortable hospitality designs",
    },
  ];

  const features = [
    {
      title: "Space Planning",
      description: "Optimal layout design for maximum efficiency and flow",
    },
    {
      title: "Corporate Branding",
      description: "Interior design aligned with your brand identity",
    },
    {
      title: "Ergonomic Solutions",
      description: "Comfortable and productive work environments",
    },
    {
      title: "Sustainability",
      description: "Eco-friendly materials and energy-efficient solutions",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
          alt="Commercial Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-7xl font-bold text-white mb-8">
                Commercial Interior Design
              </h1>
              <p className="text-xl text-gray-200 mb-12">
                Creating inspiring commercial spaces that enhance productivity,
                engage customers, and elevate your brand.
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

      {/* Types of Commercial Spaces */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Transforming Commercial Spaces
              </h2>
              <p className="text-gray-600 mb-8">
                We specialize in creating functional and aesthetically pleasing
                commercial environments that reflect your brand's identity and
                enhance user experience.
              </p>
              <Link
                to="/works"
                className="inline-flex items-center text-primary-600 hover:text-primary-700"
              >
                <span>View Our Projects</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {commercialTypes.map((type, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="space-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
                alt="Features"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description:
                  "Understanding your business needs, brand values, and project requirements",
              },
              {
                number: "02",
                title: "Design Development",
                description:
                  "Creating detailed design concepts with 3D visualizations and material selections",
              },
              {
                number: "03",
                title: "Implementation",
                description:
                  "Professional execution with quality craftsmanship and project management",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-primary-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[60vh]">
        <img
          src="https://images.unsplash.com/photo-1527005980469-e172416c200b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Transform Your Commercial Space?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can create an inspiring environment for your
              business.
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

export default CommercialInterior;
