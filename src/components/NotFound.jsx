import React, { useContext } from "react";
import { FolioContext } from "../context/FolioContext";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { theme } = useContext(FolioContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen  p-6">
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/dev-portfolio/images/errorpage.png"
          alt="404 Not Found"
          className={`w-3/4 md:w-2/3 rounded-lg  ${
            theme ? "shadow-lg " : "shadow-white"
          }  ${theme ? "bg-slate-300" : ""}`}
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1
          className={`text-6xl font-bold custom-font ${
            theme ? "text-white" : "text-black"
          }`}
        >
          404
        </h1>
        <p
          className={`text-xl mt-4 custom-font ${
            theme ? "text-white" : "text-black"
          }`}
        >
          Oops! The page you're looking for doesn't exist.
        </p>

        <button
          className="mt-6 px-6 py-3 bg-slate-500 hover:bg-slate-600 rounded-lg text-white font-semibold transition custom-font cursor-pointer"
          onClick={() => navigate(-1)}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
