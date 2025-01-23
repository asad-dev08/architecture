import React from "react";
import {
  Wallet,
  Shield,
  Clock,
  ClipboardCheck,
  Users,
  Gem,
  Palette,
  Award,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Flexible Budget And Taste",
      description:
        "Customized solutions to match every budget without compromising on quality and style",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "2-year Free-service Warranty",
      description:
        "Comprehensive warranty coverage ensuring peace of mind and lasting quality",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "50-day Move-in Guarantee",
      description:
        "Swift project completion and timely handover for your convenience",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "54 Design And Build Checks",
      description:
        "Rigorous quality control process ensuring perfection in every detail",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Project Team",
      description:
        "Expert professionals committed to bringing your vision to life",
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Premium Materials",
      description:
        "Carefully selected high-quality materials for lasting beauty",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Customized Design",
      description: "Unique solutions tailored to your specific style and needs",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award-winning Service",
      description: "Recognized excellence in design and customer satisfaction",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in every aspect of our service, from design to
            delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-primary-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full">
            <div className="px-6 py-2 ">Over 250+ Projects Completed</div>
            <div className="px-6 py-2">100% Client Satisfaction</div>
            <div className="px-6 py-2">15+ Years Experience</div>
          </div>
        </div>
        <div className="mt-16 w-full flex justify-center group">
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
  );
};

export default WhyChooseUs;
