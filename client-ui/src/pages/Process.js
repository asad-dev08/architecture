import React from "react";
import {
  CheckCircle,
  PenTool,
  FileCheck,
  Hammer,
  Package,
  FileText,
  Home,
  Wallet,
  Palette,
  Layout,
  Paintbrush,
  MonitorPlay,
  Calculator,
  File,
  CalendarClock,
  HardHat,
  Shield,
  ClipboardCheck,
  Sparkles,
  HandshakeIcon,
} from "lucide-react";

const processSteps = [
  {
    icon: "assets/icons/meet.svg",
    title: "Meet & Know",
  },
  {
    icon: "assets/icons/design.svg",
    title: "Design Development",
  },
  {
    icon: "assets/icons/confirm.png",
    title: "Confirmation",
  },
  {
    icon: "assets/icons/development.png",
    title: "Development",
  },
  {
    icon: "assets/icons/delivery.png",
    title: "Delivery",
  },
];

const Process = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Meet & Know",
      description:
        "Initial consultation to understand your vision, requirements, and budget.",
      timeline: [
        {
          icon: <FileText className="w-6 h-6 text-primary-600 " />,
          title: "Project Brief",
          description: "Detailed discussion about your needs and expectations",
        },
        {
          icon: <Home className="w-6 h-6 text-primary-600 " />,
          title: "Site Visit",
          description: "Thorough analysis of the space and its potential",
        },
        {
          icon: <Wallet className="w-6 h-6 text-primary-600 " />,
          title: "Budget Planning",
          description: "Establishing clear financial parameters",
        },
      ],
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Design Development",
      description:
        "Creating conceptual designs and refining them based on your feedback.",
      timeline: [
        {
          icon: <Palette className="w-6 h-6 text-primary-600 " />,
          title: "Concept Creation",
          description: "Developing initial design concepts and mood boards",
        },
        {
          icon: <Layout className="w-6 h-6 text-primary-600 " />,
          title: "Space Planning",
          description: "Detailed layout and furniture arrangement",
        },
        {
          icon: <Paintbrush className="w-6 h-6 text-primary-600 " />,
          title: "Material Selection",
          description: "Choosing finishes, fabrics, and materials",
        },
      ],
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Confirmation",
      description:
        "Finalizing designs and getting your approval for implementation.",
      timeline: [
        {
          icon: <Calculator className="w-6 h-6 text-primary-600 " />,
          title: "Cost Estimation",
          description: "Detailed breakdown of project costs",
        },
        {
          icon: <File className="w-6 h-6 text-primary-600 " />,
          title: "Contract Signing",
          description: "Agreement on final scope and terms",
        },
        {
          icon: <CalendarClock className="w-6 h-6 text-primary-600 " />,
          title: "Design Presentation",
          description: "3D visualization and detailed plans review",
        },
      ],
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Development",
      description: "Executing the approved design with attention to detail.",
      timeline: [
        {
          icon: <HardHat className="w-6 h-6 text-primary-600 " />,
          title: "Project Planning",
          description: "Creating detailed execution schedule",
        },
        {
          icon: <Shield className="w-6 h-6 text-primary-600 " />,
          title: "Construction",
          description: "Implementation of approved designs",
        },
        {
          icon: <ClipboardCheck className="w-6 h-6 text-primary-600 " />,
          title: "Quality Control",
          description: "Regular site visits and progress monitoring",
        },
      ],
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Delivery",
      description: "Final touches and handover of your transformed space.",
      timeline: [
        {
          icon: <Sparkles className="w-6 h-6 text-primary-600 " />,
          title: "Final Inspection",
          description: "Thorough quality check of all work",
        },
        {
          icon: <HandshakeIcon className="w-6 h-6 text-primary-600 " />,
          title: "Styling",
          description: "Adding finishing touches and accessories",
        },
        {
          icon: <MonitorPlay className="w-6 h-6 text-primary-600 " />,
          title: "Handover",
          description: "Project completion and documentation",
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">How we work</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Our process is designed to be collaborative, transparent, and
            efficient, ensuring you are involved every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Your Desired Interior
            <br />
            in 5 Simple Steps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thinking of building a new home or workplace?
            <br />
            Here's how you can get started.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-40 relative"
            >
              <div className="w-20 h-20 mb-4">
                <img
                  src={step.icon}
                  // alt={step.title}
                  className="w-full h-full"
                />
              </div>

              <h3 className="text-center font-medium text-gray-800">
                {step.title}
              </h3>

              {index < processSteps.length - 1 && (
                <div className="absolute bottom-0 md:top-0 -right-10 md:-right-20 w-16 h-8 rotate-[120deg] md:rotate-[30deg]">
                  <img
                    src="assets/icons/arrow.png"
                    alt="arrow"
                    className="w-full h-full text-primary-200"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20">
        <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div class="md:flex items-center md:space-x-4 mb-3">
                <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                    <svg
                      class="fill-[#0284c7]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                    </svg>
                  </div>

                  <time class="font-caveat font-medium text-xl  text-primary-500 md:w-28">
                    {step.title}
                  </time>
                </div>

                <div class="text-slate-500 ml-14">
                  <span class="text-slate-900 font-bold">
                    {step.description}
                  </span>
                </div>
              </div>

              {step.timeline.map((timeline, idx) => (
                <div key={idx}>
                  <div className="bg-white p-4 my-3 rounded border border-slate-200 text-slate-600 shadow ml-14 md:ml-44">
                    <div className="mb-3">{timeline.icon}</div>
                    {timeline.description}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
