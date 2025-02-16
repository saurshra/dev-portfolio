import React from "react";
import { Link } from "react-router-dom";

const ProjectList = () => {
  const projects = [
    {
      id: "crypto",
      img: "/images/crypto.png",
      name: "CryptoCurrency",
    },
    {
      id: "mrl",
      img: "/images/mrl.png",
      name: "MRL",
    },
    {
      id: "portfolio",
      img: "/images/portfolio.png",
      name: "Mobile Portfolio",
    },
    {
      id: "taskmanager",
      img: "/images/taskmanager.png",
      name: "Task Manager",
    },
    {
      id: "myntra",
      img: "/images/myntra.png",
      name: "Myntra",
    },
    {
      id: "newsapp",
      img: "/images/newsapp.png",
      name: "NewsApp",
    },
  ];
  return (
    <div className="mt-25 m-4 md:ml-6 flex flex-wrap gap-5 justify-evenly mb-10">
      {projects.map((item) => (
        <div
          class="w-full max-w-sm bg-white  rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          key={item.id}
        >
          <Link to={`/projects/${item.id}`}>
            <img
              class=" h-[86%] rounded-t-lg filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
              src={item.img}
              alt="project img"
            />
            <div className="   bg-slate-700 p-3.5  rounded-b-lg ">
              <h3 className="text-white custom-font text-center cursor-pointer">
                {item.name}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
