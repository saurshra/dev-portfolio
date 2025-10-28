import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FolioContext } from "../context/FolioContext";

const ProjectList = () => {
  const { theme } = useContext(FolioContext);
  const projects = [
    {
      id: "eventhub",
      img: "/dev-portfolio/images/eventhub.jpg",
      name: "EventHub",
    },
    {
      id: "TrustFlow",
      img: "/dev-portfolio/images/trustflow.jpg",
      name: "TruatFlow",
    },

    {
      id: "urbannest",
      img: "/dev-portfolio/images/urbannest2.png",
      name: "UrbanNest",
    },

    {
      id: "crypto",
      img: "/dev-portfolio/images/crypto.png",
      name: "CryptoCurrency",
    },

    {
      id: "mrl",
      img: "/dev-portfolio/images/mrl.png",
      name: "MRL",
    },
    {
      id: "myntra",
      img: "/dev-portfolio/images/myntra.png",
      name: "Myntra",
    },

    {
      id: "taskmanager",
      img: "/dev-portfolio/images/taskmanager.png",
      name: "Task Manager",
    },
  ];
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {projects.map((item) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl ${
              theme ? "bg-gray-800" : "bg-white"
            }`}
          >
            <Link to={`/projects/${item.id}`} className="block h-full">
              <div className="relative pt-[70%] overflow-hidden">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  src={item.img}
                  alt={`${item.name} project screenshot`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span
                    className={`text-lg font-medium ${
                      theme ? "text-white" : "text-white"
                    }`}
                  >
                    View Details
                  </span>
                </div>
              </div>
              <div className={`p-4 ${theme ? "bg-gray-800" : "bg-gray-50"}`}>
                <h3
                  className={`text-lg font-semibold text-center ${
                    theme ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {projects.length === 0 && (
        <div
          className={`text-center py-12 rounded-lg ${
            theme ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"
          }`}
        >
          <p className="text-xl">No projects found</p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
