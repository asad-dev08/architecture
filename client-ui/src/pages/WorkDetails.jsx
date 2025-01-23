import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaRuler } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const WorkDetails = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  // Mock project data (replace with your actual data)
  const project = {
    id: id,
    title: "Modern Visionextbd Villa",
    location: "Bashundhara Residential Area, Dhaka",
    thumbnail:
      "https://images.unsplash.com/photo-1525896544042-354764aa27e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    description:
      "A contemporary residential project that seamlessly blends indoor and outdoor living. This 5,000 sq ft villa features open-plan living spaces, floor-to-ceiling windows, and sustainable materials throughout.",
    area: "5,000 sq ft",
    startDate: "March 2023",
    completionDate: "December 2023",
    category: "Residential",
    services: [
      "Architectural Design",
      "Interior Design",
      "Landscape Design",
      "Project Management",
    ],
    gallery: [
      "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    ],
    features: [
      "Open-plan living spaces",
      "Custom-designed furniture",
      "Smart home integration",
      "Sustainable materials",
      "Indoor-outdoor flow",
      "Natural lighting optimization",
    ],
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="h-[70vh] relative">
        <img
          src={project.gallery[activeImage]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-end pb-16">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl flex items-center gap-2">
                <FaMapMarkerAlt /> {project.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Project Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-600 mb-2">Category</div>
            <div className="text-xl font-semibold">{project.category}</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-600 mb-2">Area</div>
            <div className="text-xl font-semibold flex items-center gap-2">
              <FaRuler className="text-primary" /> {project.area}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-600 mb-2">Start Date</div>
            <div className="text-xl font-semibold flex items-center gap-2">
              <FaCalendarAlt className="text-primary" /> {project.startDate}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-600 mb-2">Completion Date</div>
            <div className="text-xl font-semibold flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />{" "}
              {project.completionDate}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About the Project</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {project.description}
            </p>

            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Services Provided</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {project.services.map((service, index) => (
                <div
                  key={index}
                  className={`py-3 ${
                    index !== project.services.length - 1 ? "border-b" : ""
                  }`}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-transform duration-300 hover:scale-105 ${
                  activeImage === index ? "shadow-lg" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm text-center">
          <h3 className="text-2xl font-bold mb-4">
            Interested in Similar Projects?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us to discuss your project requirements and vision.
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
  );
};

export default WorkDetails;
