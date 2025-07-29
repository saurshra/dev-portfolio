import React, { useContext, useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript } from "react-icons/si";
import { FolioContext } from "../context/FolioContext";
import ImageAnimate from "./ImageAnimate";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useContext(FolioContext);
  const [text, setText] = useState("");
  const fullText = "I  am a Software Developer";
  const projects = [
    {
      id: "eventhub",
      img: "/dev-portfolio/images/eventhub.jpg",
      name: "EventHub",
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
  ];
  const iconColor = theme ? "text-white " : "text-black";
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-20">
      <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 md:px-8">
        <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 w-full">
          {[
            {
              icon: HiOutlineMail,
              href: "mailto:saurabhmishra8021@gmail.com",
              label: "Send Email",
              className: "text-4xl sm:text-5xl md:text-6xl p-0.5",
            },
            {
              icon: FaGithub,
              href: "https://github.com",
              label: "GitHub",
              className: "text-4xl sm:text-5xl md:text-6xl p-1",
            },
            {
              icon: BsLinkedin,
              href: "https://linkedin.com",
              label: "LinkedIn",
              className: "text-4xl sm:text-5xl md:text-6xl p-1",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-110"
            >
              <a
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={item.label}
              >
                <item.icon
                  className={`${item.className} text-slate-700 transition ${
                    theme ? "hover:text-white" : "hover:text-black"
                  }`}
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10 text-center w-full">
          <div className="flex items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gap-2 sm:gap-3 custom-font">
            <span className={theme ? "text-white" : "text-black"}>Hello</span>
            <img
              src="/dev-portfolio/wave-hand.webp"
              alt="Hi-hand"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-14 md:w-14"
              loading="lazy"
            />
            <span>,</span>
          </div>
          <div
            className={`${
              theme ? "text-white" : "text-black"
            } text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold custom-font mt-1 sm:mt-2`}
          >
            I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Saurabh</span>
          </div>
        </div>

        <div
          className={`custom-font text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 sm:mt-5 md:mt-6 h-12 sm:h-14 md:h-16 flex items-center justify-center ${
            theme ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <span>{text}</span>
          <span className="animate-blink">|</span>
        </div>
      </div>

      <div
        className={`flex flex-col lg:flex-row ${
          theme ? "" : "bg-slate-900"
        } text-white rounded-xl md:rounded-2xl mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 lg:p-10 w-full gap-6 md:gap-8 lg:gap-10`}
      >
        <div className="w-full lg:w-1/2 xl:w-[55%]">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold custom-font mb-3 md:mb-4">
            About Me
          </h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
            Welcome to my portfolio! I am a passionate Computer Science student
            at Mumbai University, where I am pursuing a Bachelor's degree in
            Computer Science. I aim to graduate in June 2026 with a solid
            foundation in software development, programming, data management,
            machine learning, and more.
            <br />
            <br />
            My technical skills include React, JavaScript, Node.js, Express.js,
            SQL, and MongoDB.
          </p>
        </div>

        <div className="w-full lg:w-1/2 xl:w-[45%] flex justify-center items-center py-4 sm:py-6 md:py-0">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            <ImageAnimate />
          </div>
        </div>
      </div>
      <div
        className={`m-10 mb-0 custom-font ${
          theme ? "text-white" : "text-black"
        } text-3xl`}
      >
        Projects
      </div>
      <div className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {projects.map((item) => (
            <div
              className="w-full bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              key={item.id}
            >
              <Link to={`/projects/${item.id}`} className="block h-full">
                <div className="relative pt-[75%] overflow-hidden">
                  <img
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                    src={item.img}
                    alt={`${item.name} project screenshot`}
                    loading="lazy"
                  />
                </div>
                <div className="bg-slate-700 p-3 sm:p-4 rounded-b-lg">
                  <h3 className="text-white custom-font text-center text-sm sm:text-base md:text-lg">
                    {item.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-700 text-white p-1.5 rounded-lg custom-font">
        <Link to={"/projects"}>View More Projects</Link>
      </div>
      <div
        className={`m-10 mb-0 custom-font ${
          theme ? "text-white" : "text-black"
        } text-3xl`}
      >
        Skills
      </div>

      <div
        className={`relative w-full h-32 overflow-hidden ${
          theme ? "bg-black" : ""
        }`}
      >
        <div className="flex w-max animate-marquee gap-10 sm:gap-14 md:gap-16 px-10 sm:px-14 md:px-16">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className={`icon ${iconColor}`}>
                <FaReact />
              </div>
              <div className={`icon ${iconColor}`}>
                <FaNodeJs />
              </div>
              <div className={`icon ${iconColor}`}>
                <SiExpress />
              </div>
              <div className={`icon ${iconColor}`}>
                <SiMongodb />
              </div>
              <div className={`icon ${iconColor}`}>
                <SiJavascript />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <a
        href="/dev-portfolio/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-slate-700 text-white custom-font rounded-lg p-1.5 mt-4 mb-10 md:mb-20 cursor-pointer">
          View Resume
        </button>
      </a>
    </div>
  );
};

export default Home;
