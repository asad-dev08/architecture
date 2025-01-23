import React, { useState } from "react";
import { Upload, CheckCircle, AlertCircle } from "lucide-react";
import "../styles/career.css";

const Career = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null); // 'success' | 'error' | null

  const designations = [
    "Interior Designer",
    "Senior Architect",
    "Project Manager",
    "3D Visualizer",
    "Design Consultant",
    "Site Supervisor",
    "CAD Designer",
    "Color Consultant",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (validTypes.includes(file.type)) {
        setSelectedFile(file);
        setUploadStatus(null);
      } else {
        setUploadStatus("error");
        setSelectedFile(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUploadStatus("success");
    } catch (error) {
      setUploadStatus("error");
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center max-w-3xl mx-auto px-4">
          <div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Be part of a creative team that transforms spaces and builds
              dreams.
            </p>
          </div>
        </div>
      </div>

      {/* Career Description Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <p className="text-gray-600">
              At Visionextbd, we believe in nurturing talent and providing
              opportunities for growth. Join our dynamic team and be part of
              innovative projects that shape the future of interior design and
              architecture. We offer competitive benefits, a collaborative work
              environment, and continuous learning opportunities.
            </p>
          </div>

          {/* CV Upload Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              Submit Your Application
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Position Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position Applied For
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a position</option>
                  {designations.map((designation, index) => (
                    <option key={index} value={designation}>
                      {designation}
                    </option>
                  ))}
                </select>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV (PDF or DOC)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="cv-upload"
                    required
                  />
                  <label
                    htmlFor="cv-upload"
                    className="flex items-center justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <Upload className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">
                        {selectedFile ? selectedFile.name : "Choose a file"}
                      </span>
                    </div>
                  </label>
                </div>
                {/* Upload Status Messages */}
                {uploadStatus === "error" && (
                  <div className="mt-2 flex items-center text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    Please upload only PDF or DOC files
                  </div>
                )}
                {uploadStatus === "success" && (
                  <div className="mt-2 flex items-center text-green-600 text-sm">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    CV uploaded successfully
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Submit Application</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
