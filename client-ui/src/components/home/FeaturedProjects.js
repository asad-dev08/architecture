import React from "react";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      title: "Modern Visionextbd Villa",
      category: "Residential",
      link: "/works/modern-Visionextbd-villa",
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      title: "Tech Hub Office",
      category: "Commercial",
      link: "/works/tech-hub-office",
    },
    {
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      title: "Luxury Apartment Complex",
      category: "Architectural",
      link: "/works/luxury-apartment-complex",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest and most innovative design projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[16/12]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-sm text-primary-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/works"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition-colors duration-300"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
