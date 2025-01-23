import React, { useState } from "react";
import { Link } from "react-router-dom";

const Works = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: "modern-villa",
      title: "Modern Visionextbd Villa",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      location: "Beverly Hills, CA",
      year: "2023",
    },
    {
      id: "tech-office",
      title: "Tech Hub Office",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      location: "San Francisco, CA",
      year: "2023",
    },
    {
      id: "luxury-apartment",
      title: "Luxury Apartment Complex",
      category: "architectural",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      location: "Miami, FL",
      year: "2023",
    },
    {
      id: "eco-house",
      title: "Eco-Friendly House",
      category: "residential",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      location: "Portland, OR",
      year: "2023",
    },
    {
      id: "boutique-hotel",
      title: "Boutique Hotel Lobby",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      location: "New York, NY",
      year: "2023",
    },
    {
      id: "urban-development",
      title: "Urban Development Project",
      category: "architectural",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
      location: "Chicago, IL",
      year: "2023",
    },
  ];

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "architectural", label: "Architectural" },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Works</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our portfolio of award-winning designs and transformative
            spaces.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeTab === tab.id
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} to={`/work/${project.id}`} className="group">
              <div className="relative overflow-hidden rounded-lg">
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
                      {project.location} • {project.year}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
