import React from "react";
import { Link, useParams } from "react-router-dom";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import "../styles/news.css";

const NewsDetail = () => {
  const { slug } = useParams();

  // Mock data - replace with actual data fetching
  const article = {
    title: "Modern Visionextbd: The Future of Interior Design",
    category: "Interior Design",
    publishDate: "2024-03-15",
    readTime: "5 min read",
    mainImage:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
    content: `
      <p>Detailed article content goes here...</p>
      <h2>The Rise of Visionextbd</h2>
      <p>More content...</p>
    `,
    gallery: [
      "https://images.unsplash.com/photo-1525896544042-354764aa27e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    ],
    relatedArticles: [
      // Related articles data
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={article.mainImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 pb-20">
            {/* Back Button */}
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-white mb-8 hover:text-primary-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to News</span>
            </Link>

            {/* Article Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <span>{article.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(article.publishDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <h1 className="text-5xl font-bold text-white">{article.title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Share Button */}
        <div className="flex justify-end mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors duration-300">
            <Share2 className="w-5 h-5" />
            <span>Share Article</span>
          </button>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Image Gallery */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Image Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            {article.gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {article.relatedArticles.map((related, index) => (
              <Link key={index} to={`/news/${related.slug}`} className="group">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={related.thumbnail}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
