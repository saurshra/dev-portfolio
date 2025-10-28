import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FolioContext } from "../context/FolioContext";
import { BsChevronRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiEthereum,
  SiExpress,
  SiIpfs,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import NotFound from "./NotFound";

const Projects = () => {
  const { projectName } = useParams();

  const { theme } = useContext(FolioContext);
  const projectData = {
    eventhub: {
      title: "EventHub",
      description: `EventHub is a dynamic event management web application that connects users with a wide range of events including technical, cultural, social, and sports activities. Designed for an interactive and seamless user experience, the platform allows users to browse upcoming events, view detailed information, register, and secure their spot with digital tickets.The application ensures secure and personalized access through an email OTP verification system during signup. EventHub also includes an admin dashboard where authorized users can add, update, or delete events, ensuring smooth management and content control. Integrated with a real-time payment system, users can effortlessly purchase tickets through Razorpay and receive confirmation immediately.With a clean UI, responsive design, and reliable backend services, EventHub simplifies event discovery and participation for students and institutions under Mumbai University.`,
      techStack: [
        { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-3xl text-green-600" />,
        },
        {
          name: "Express",
          icon: (
            <SiExpress className="text-3xl text-gray-800 dark:text-gray-200" />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-3xl text-green-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
        },
      ],
      features: [
        "Event listings categorized by type (Technical, Cultural, Social, Sports)",
        "Detailed event pages with timing, location, and image gallery",
        "User registration with secure OTP email verification",
        "Login authentication with password hashing and session handling",
        "Razorpay integration for secure ticket payments",
        "Admin panel for adding, updating, and removing events",
        "Role-based access control to differentiate user and admin privileges",
        "Bookmark functionality for saving favorite events",
        "Realistic event data from colleges under Mumbai University",
        "Clean and intuitive UI for easy event exploration",
      ],
      img: "/dev-portfolio/images/eventhub.jpg",
      web: "https://eventhub-o45b.onrender.com/",
      // git: "https://github.com/saurshra/UrbanNest",
    },
    trustflow: {
      title: "TrustFlow",
      description: `TrustFlow is a blockchain-powered certificate verification platform built using the MERN stack, Ethereum (Ethers.js), and MetaMask. It enables institutions to securely upload academic or professional certificates, while users can verify their authenticity in real-time through blockchain records. Each certificate’s hash is stored on the Ethereum blockchain, ensuring tamper-proof validation, and the files themselves are hosted on IPFS via Pinata for decentralized and immutable storage. The platform also includes an OTP-based signup and login system for verified access.  TrustFlow is evolving into a complete decentralized verification system with enhanced upload, authentication, and verification workflows.`,
      techStack: [
        { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-3xl text-green-600" />,
        },
        {
          name: "Express",
          icon: (
            <SiExpress className="text-3xl text-gray-800 dark:text-gray-200" />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-3xl text-green-500" />,
        },
        {
          name: "Ethereum",
          icon: <SiEthereum className="text-3xl text-indigo-500" />,
        },
        {
          name: "Ethers.js",
          icon: <SiJavascript className="text-3xl text-yellow-400" />, // replace with custom icon if you have one
        },
        {
          name: "IPFS (Pinata)",
          icon: <SiIpfs className="text-3xl text-teal-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
        },
      ],
      features: [
        "Admin and user dashboards for certificate upload and verification",
        "Blockchain integration using Ethers.js for hash-based authenticity checks",
        "Decentralized file storage through IPFS (Pinata) ensuring data immutability",
        "Secure OTP-based signup and authentication system",
        "MetaMask integration for decentralized wallet-based interactions",
        "Real-time blockchain verification displaying certificate authenticity status",
        "User-friendly and responsive UI for seamless accessibility",
      ],
      img: "/dev-portfolio/images/blockchain.jpg",
      web: "https://blockchain-t2z6.onrender.com/",
      // git: "https://github.com/saurshra/blockchain-verification",
    },
    urbannest: {
      title: "UrbanNest",
      description: `UrbanNest is a comprehensive web application designed to streamline the process of renting properties by connecting tenants and property owners in a user-friendly environment. The platform allows users to browse through a variety of property listings, complete with detailed descriptions and images, helping them make informed rental decisions. Users can create accounts to manage their preferences and saved listings, while an integrated search and filter system makes it easy to find properties based on specific needs like location, budget, or property type.A key feature of UrbanNest is its dedicated admin panel, which enables administrators to manage the entire listing ecosystem. Admins can add, update, or remove property listings and monitor user activity to ensure the platform remains secure and well-organized. Role-based access control is implemented to maintain a clear separation between general users and admin functionalities, ensuring a secure and scalable user management structure.`,
      techStack: [
        { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-3xl text-green-600" />,
        },
        {
          name: "Express",
          icon: (
            <SiExpress className="text-3xl text-gray-800 dark:text-gray-200" />
          ),
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-3xl text-green-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
        },
      ],
      features: [
        "Responsive design for all devices",
        "JWT authentication system",
        "Real-time data updates",
        "Interactive user dashboard",
        "RESTful API integration",
      ],
      img: "/dev-portfolio/images/urbannest2.png",
      //web: "https://saurshra.github.io/Cryptocurrency/",
      git: "https://github.com/saurshra/UrbanNest",
    },
    crypto: {
      title: "CryptoCurrency",
      description: `This is a real-time cryptocurrency tracking application that allows users to monitor the latest market prices and trends of various cryptocurrencies. It offers an intuitive interface where users can explore detailed information and interactive charts for each coin, helping them stay informed about market movements. The application also features a currency converter, enabling users to view cryptocurrency values in different local currencies for better financial insights.The data displayed in the app is dynamically fetched using public APIs, ensuring that the information remains current and accurate. With a clean and responsive design, this project focuses on delivering real-time updates and a smooth user experience, making it a practical tool for anyone interested in tracking cryptocurrencies.`,
      img: "/dev-portfolio/images/crypto.png",
      techStack: [
        { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },
        {
          name: "API",
          icon: <AiOutlineApi className="text-3xl text-blue-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
        },
      ],
      features: [
        "Responsive design for all devices",
        "Real-time data updates",
        "Interactive user dashboard",
        "RESTful API integration",
      ],
      web: "https://saurshra.github.io/Cryptocurrency/",
      git: "https://github.com/saurshra/Cryptocurrency",
    },
    mrl: {
      title: "MRL",
      description: `This web application is built to manage and track household goods transportation with a focus on efficiency and reliability. It provides real-time updates on delivery statuses and offers a user-friendly interface that simplifies the logistics process for both service providers and customers. The platform ensures that users can easily monitor their shipments, access essential details, and stay informed throughout the transportation journey.In this project, I contributed to the frontend development by working on the customer list management and enhancing the overall user interface to improve usability. The application fetches and displays live data using APIs, ensuring accurate and up-to-date information for a seamless user experience.`,
      techStack: [
        {
          name: "Next",
          icon: (
            <RiNextjsFill
              className={`text-3xl ${theme ? "text-white" : "text-black"}`}
            />
          ),
        },
        {
          name: "API",
          icon: <AiOutlineApi className="text-3xl text-blue-500" />,
        },
      ],
      features: [
        "Responsive design for all devices",
        "Real-time data updates",
        "Interactive user dashboard",
        "RESTful API integration",
      ],
      img: "/dev-portfolio/images/mrl.png",
      web: "https://mrl.scottysthemovers.com.au/dashboards/crm/",
    },
    taskmanager: {
      title: "Task Manager",
      description: `  Task Manager – A simple yet powerful task management web app built
              with React. It allows users to create,edit and delete tasks, with
              features like task prioritization and due dates.`,
      techStack: [
        { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },

        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
        },
      ],
      features: [
        "Responsive design for all devices",
        "Create, edit, and delete tasks with ease",
      ],
      img: "/dev-portfolio/images/taskmanager.png",
      git: "https://github.com/saurshra/task-manager-updated",
    },
    myntra: {
      title: "Myntra",
      description: ` An e-commerce web app built using React to replicate Myntra’s
              shopping experience. It includes product listings,add to bag
              feature along with responsive UI. This project helped me
              strengthen my React skills, including state management and
              component-based architecture.`,
      techStack: [
        { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },

        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
        },
      ],
      features: [
        "Product listing with dynamic filtering and sorting",
        "Detailed product pages with images, price, and description",
        "Add to bag (cart) functionality with quantity management",
        "Seamless navigation across categories and sections",
        "Persistent cart state using local storage or context",
        "User-friendly UI replicating the Myntra shopping experience",
        "Component-based architecture for scalable development",
      ],
      img: "/dev-portfolio/images/myntra.png",
      // web: "",
      git: "https://github.com/saurshra/Cryptocurrency",
    },
  };
  const projectDataItem = projectData[projectName];

  if (!projectDataItem) {
    return <NotFound />;
  }
  return (
    <div
      className={`min-h-screen ${
        theme ? "bg-gray-900" : "bg-gray-50"
      } py-12 px-4 sm:px-8 mt-20 custom-font`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link to="/projects" className="flex items-center gap-2 group">
            <div
              className={`p-2 rounded-full transition-all ${
                theme
                  ? "bg-gray-800 group-hover:bg-gray-700"
                  : "bg-white group-hover:bg-gray-100"
              }`}
            >
              <FiArrowLeft
                className={`text-xl ${theme ? "text-white" : "text-gray-800"}`}
              />
            </div>
            <span
              className={`font-medium ${
                theme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              All Projects
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative group overflow-hidden rounded-2xl shadow-xl">
            <img
              src={projectDataItem.img}
              alt={projectDataItem.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col justify-center">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-6 custom-font ${
                theme ? "text-white" : "text-gray-900"
              }`}
            >
              {projectDataItem.title}
            </h1>

            <p
              className={`text-lg mb-8 leading-relaxed ${
                theme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {projectDataItem.description}
            </p>

            <div className="flex gap-4 mb-8">
              {projectDataItem.web && (
                <a
                  href={projectDataItem.web}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    theme
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-800 hover:bg-gray-700"
                  } text-white`}
                >
                  <BsGlobe2 className="text-xl" />
                  View Project
                </a>
              )}
              {projectDataItem.git && (
                <a
                  href={projectDataItem.git}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    theme
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-200 hover:bg-gray-300"
                  } ${theme ? "text-white" : "text-gray-800"}`}
                >
                  <FaGithub className="text-xl" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mb-16">
          <h2
            className={`text-2xl font-bold mb-8 pb-2 border-b ${
              theme
                ? "text-white border-gray-700"
                : "text-gray-900 border-gray-200"
            }`}
          >
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {projectDataItem?.techStack?.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                  theme
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-100"
                } shadow-md`}
              >
                {tech.icon}
                <span
                  className={`mt-2 font-medium ${
                    theme ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h2
            className={`text-2xl font-bold mb-8 pb-2 border-b ${
              theme
                ? "text-white border-gray-700"
                : "text-gray-900 border-gray-200"
            }`}
          >
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectDataItem?.features?.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start p-4 rounded-lg ${
                  theme ? "bg-gray-800" : "bg-white"
                } shadow-sm`}
              >
                <BsChevronRight
                  className={`flex-shrink-0 mt-1 mr-3 ${
                    theme ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span
                  className={`${theme ? "text-gray-300" : "text-gray-700"}`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
