import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Users,
  Lightbulb,
  Target,
  Plus,
  Minus,
  PlayCircle,
} from "lucide-react";
import { useState } from "react";

import "../styles/about.css";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for excellence in every project, delivering exceptional quality and attention to detail.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "We work closely with our clients, ensuring their vision is at the heart of every design decision.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We embrace innovative solutions and stay at the forefront of design trends and technologies.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "We prioritize sustainable practices and eco-friendly solutions in all our projects.",
    },
  ];

  const team = [
    {
      name: "Sarah Anderson",
      role: "Principal Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "15+ years of experience in luxury interior design",
    },
    {
      name: "Michael Zhang",
      role: "Senior Architect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Award-winning architect specializing in sustainable design",
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Expert in managing high-end residential and commercial projects",
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Expert in managing high-end residential and commercial projects",
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Expert in managing high-end residential and commercial projects",
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Expert in managing high-end residential and commercial projects",
    },
    {
      name: "Emma Thompson",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Expert in managing high-end residential and commercial projects",
    },
  ];

  const faqs = [
    {
      question: "What sets your interior design services apart?",
      answer:
        "Our unique blend of innovative design, sustainable practices, and client-focused approach sets us apart. We combine creativity with functionality to deliver spaces that exceed expectations.",
    },
    {
      question: "How long does a typical interior design project take?",
      answer:
        "Project timelines vary based on scope and complexity. A typical residential project can take 3-6 months from concept to completion, while larger commercial projects may take 6-12 months.",
    },
    {
      question: "Do you work with specific design styles?",
      answer:
        "We're versatile in our approach and work across various design styles - from modern contemporary to traditional classic. Our focus is on creating spaces that reflect our clients' personalities and preferences.",
    },
    {
      question: "What is your project management process?",
      answer:
        "We follow a comprehensive 5-step process: consultation, design development, planning, implementation, and final delivery. Each step involves close collaboration with our clients to ensure satisfaction.",
    },
    {
      question: "Do you provide sustainable design solutions?",
      answer:
        "Yes, sustainability is at the core of our design philosophy. We prioritize eco-friendly materials, energy-efficient solutions, and sustainable practices in all our projects.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-6">Who We Are</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A team of passionate designers and architects dedicated to
              creating extraordinary spaces that inspire and endure.
            </p>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://weimaracademy.org/wp-content/uploads/2021/08/dummy-user.png"
                alt="CEO"
                className="rounded-lg w-full h-[600px] object-cover"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary-600/10 rounded-lg -z-10"></div>
            </div>

            <div>
              <div className="mb-6">
                <h2 className="text-4xl font-bold mb-2">John Doe</h2>
                <p className="text-primary-600 text-lg font-semibold">
                  Founder & CEO
                </p>
              </div>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="mb-4">
                  "As the founder and CEO of Visionextbd, I've dedicated my
                  career to transforming spaces and creating environments that
                  inspire. Our commitment to excellence and innovation has been
                  the cornerstone of our success over the past 15 years."
                </p>
                <p>
                  "We believe that great design has the power to enhance lives
                  and create lasting impact. This belief drives every project we
                  undertake and every decision we make."
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold mb-3">
                  Education & Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Master of Architecture</p>
                      <p className="text-gray-600">
                        BUET Graduate School of Design
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">
                        Bachelor of Interior Design
                      </p>
                      <p className="text-gray-600">ABC School of Design</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">AIA Gold Medal 2022</p>
                      <p className="text-gray-600">Institute of Architects</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Design Excellence Award</p>
                      <p className="text-gray-600">
                        International Interior Design Association
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">
                    500+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">25+</div>
                  <div className="text-gray-600">Design Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, Visionextbd has grown from a small design
                studio to a leading force in interior design and architectural
                consultancy. Our journey has been marked by a relentless pursuit
                of excellence and innovation.
              </p>
              <p className="text-gray-600 mb-4">
                We've had the privilege of working with diverse clients across
                residential, commercial, and architectural projects, each
                contributing to our rich portfolio of successful
                transformations.
              </p>
              <p className="text-gray-600">
                Today, we continue to push boundaries and set new standards in
                the industry, guided by our commitment to creating spaces that
                inspire and endure.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                alt="Our Work"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Our Work"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Design Process</h2>
              <p className="text-gray-600 mb-8">
                Take a behind-the-scenes look at how we transform spaces and
                bring our clients' visions to life. Our meticulous attention to
                detail and collaborative approach ensures exceptional results
                every time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">1</span>
                  </div>
                  <span className="text-gray-700">
                    Initial Consultation & Vision Planning
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">2</span>
                  </div>
                  <span className="text-gray-700">
                    Design Development & 3D Visualization
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">3</span>
                  </div>
                  <span className="text-gray-700">
                    Material Selection & Project Planning
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
                  alt="Design Process"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <button className="transform scale-100 group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-600" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Creative Team
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for design excellence.
          </p>
          <Link
            to="/about/career"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            View Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
