import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FolioContext } from "../context/FolioContext";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const Projects = () => {
  const { projectName } = useParams();
  const projectData = {
    crypto: {
      title: "CryptoCurrency",
      description: ` A real-time cryptocurrency tracking app built with React.Users can
              view live market prices and interactive charts for each
              cryptocurrency.This also allows users to convert crypto prices
              into different country currencies for better insights.`,
      img: "/dev-portfolio/images/crypto.png",
      web: "https://saurshra.github.io/Cryptocurrency/",
      git: "https://github.com/saurshra/Cryptocurrency",
    },
    mrl: {
      title: "MRL",
      description: ` A web application designed for managing and tracking household
              goods transportation efficiently, ensuring smooth deliveries with
              real-time updates and user-friendly interfaces. "Contributed to
              the frontend development, specifically in managing the customer
              list and enhancing the UI for better usability.`,
      img: "/dev-portfolio/images/mrl.png",
      web: "https://mrl.scottysthemovers.com.au/dashboards/crm/",
    },
    blog: {
      title: "Blog",
      description: ` The platform features an intuitive UI, allowing users to create, categorize, and tag blogs while supporting image uploads. Implemented backend authentication, RESTful APIs, and MongoDB for efficient data storage. Integrated dynamic rendering for improved user experience and ensured smooth functionality with Node.js and Express.js.`,
      img: "/dev-portfolio/images/blog.png",
      //web: "https://mrl.scottysthemovers.com.au/dashboards/crm/",
    },
    portfolio: {
      title: "Portfolio",
      description: ``,
      img: "/dev-portfolio/images/portfolio.png",
      // web: "",
      git: "https://github.com/saurshra/dev-portfolio",
    },
    taskmanager: {
      title: "Task Manager",
      description: `  Task Manager – A simple yet powerful task management web app built
              with React. It allows users to create,edit and delete tasks, with
              features like task prioritization and due dates. This project
              helped me further improve my skills in React and local storage
              management, enabling users to maintain their tasks even after page
              refresh.`,
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
      img: "/dev-portfolio/images/myntra.png",
      // web: "",
      git: "https://github.com/saurshra/Cryptocurrency",
    },
    newsapp: {
      title: "NewsApp",
      description: ` This News App is a modern and responsive news aggregator built using React and powered by the NewsAPI. It provides users with the latest news articles from various sources, covering different categories such as technology, sports, business, and entertainment. The app features a clean UI, seamless navigation, and real-time updates, ensuring users stay informed with trending news worldwide.`,
      img: "/dev-portfolio/images/newsapp.png",
      //   // web: "",
      git: "https://github.com/saurshra/News_app",
    },
  };
  const { theme } = useContext(FolioContext);
  const projectDataItem = projectData[projectName];
  return (
    <div className="md:mt-20 mt-25 mb-20">
      <div className="flex flex-col justify-center">
        <div className="m-10 flex flex-row  justify-evenly">
          <img
            className="w-105 h-70 md:h-100 rounded-lg shadow-2xl transition-transform duration-300 hover:scale-110"
            src={projectDataItem.img}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2
            className={`custom-font text-3xl text-center mb-4 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            {projectDataItem.title}
          </h2>
          <div className="w-full max-w-2xl text-white p-4 rounded-lg flex flex-wrap">
            <p
              className={`${
                theme ? "text-white" : "text-black"
              } text-xl custom-font text-center md:text-left`}
            >
              {projectDataItem.description}
            </p>
          </div>
          <div className="flex mt-4 gap-5">
            <a
              href={projectDataItem.web}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {!projectDataItem.web ? (
                ""
              ) : (
                <BsGlobe2
                  className={`text-5xl md:text-5xl text-slate-700 transition ${
                    theme ? "hover:text-white" : "hover:text-black"
                  }`}
                />
              )}
            </a>
            <a
              href={projectDataItem.git}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {!projectDataItem.git ? (
                ""
              ) : (
                <FaGithub
                  className={`text-5xl md:text-5xl text-slate-700 transition ${
                    theme ? "hover:text-white" : "hover:text-black"
                  }`}
                />
              )}
            </a>
          </div>

          <div className="flex flex-row gap-3">
            <Link to="/projects">
              <button className="bg-slate-700 p-3 text-white custom-font mt-4 rounded-lg cursor-pointer">
                Go To All Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
