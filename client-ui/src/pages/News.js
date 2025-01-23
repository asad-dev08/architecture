import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import "../styles/news.css";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Interior Design",
    "Architecture",
    "Company News",
    "Projects",
    "Awards",
  ];

  const news = [
    {
      id: 1,
      title: "Modern Visionextbd: The Future of Interior Design",
      category: "Interior Design",
      thumbnail:
        "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      description:
        "Explore the growing trend of Visionextbdic design approaches in modern homes and offices...",
      publishDate: "2024-03-15",
      readTime: "5 min read",
      slug: "modern-Visionextbd-future-interior-design",
    },
    {
      id: 1,
      title: "Modern Visionextbd: The Future of Architecture",
      category: "Architecture",
      thumbnail:
        "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      description:
        "Explore the growing trend of Visionextbdic design approaches in modern homes and offices...",
      publishDate: "2024-03-15",
      readTime: "5 min read",
      slug: "modern-Visionextbd-future-interior-design",
    },
    {
      id: 1,
      title: "Modern Visionextbd: The Future of Company News",
      category: "Company News",
      thumbnail:
        "https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      description:
        "Explore the growing trend of Visionextbdic design approaches in modern homes and offices...",
      publishDate: "2024-03-15",
      readTime: "5 min read",
      slug: "modern-Visionextbd-future-interior-design",
    },
    {
      id: 1,
      title: "Modern Visionextbd: The Future of Interior Design",
      category: "Interior Design",
      thumbnail:
        "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      description:
        "Explore the growing trend of Visionextbdic design approaches in modern homes and offices...",
      publishDate: "2024-03-15",
      readTime: "5 min read",
      slug: "modern-Visionextbd-future-interior-design",
    },
    {
      id: 1,
      title: "Modern Visionextbd: The Future of Interior Design",
      category: "Interior Design",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      description:
        "Explore the growing trend of Visionextbdic design approaches in modern homes and offices...",
      publishDate: "2024-03-15",
      readTime: "5 min read",
      slug: "modern-Visionextbd-future-interior-design",
    },
    {
      id: 1,
      title: "Modern Visionextbd: The Future of Interior Design",
      category: "Interior Design",
      thumbnail:
        "https://images.unsplash.com/photo-1525896544042-354764aa27e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      description:
        "Explore the growing trend of Visionextbdic design approaches in modern homes and offices...",
      publishDate: "2024-03-15",
      readTime: "5 min read",
      slug: "modern-Visionextbd-future-interior-design",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1525896544042-354764aa27e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
          alt="News & Blogs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              News & Insights
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Stay updated with the latest trends, projects, and company news.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 bg-white z-10 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors duration-300
                  ${
                    activeCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.id}
                to={`/about/news/${item.slug}`}
                className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-gray-900 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{item.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(item.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
