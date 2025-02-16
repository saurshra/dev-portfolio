import React, { useContext, useEffect, useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FolioContext } from "../context/FolioContext";

const Home = () => {
  const { theme } = useContext(FolioContext);
  const [text, setText] = useState("");
  const fullText = "I  am a Software Developer";

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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-40">
      {/* Social Media Icons */}
      <div className="text-gray-600 flex flex-row flex-wrap gap-5 mt-10">
        <div className="transition-transform duration-300 hover:scale-110 ">
          <a
            href="mailto:saurabhmishra8021@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Send Email"
          >
            <HiOutlineMail
              className={`text-5xl md:text-5xl  text-slate-700 transition ${
                theme ? "hover:text-white" : "hover:text-black"
              }`}
            />
          </a>
        </div>
        <div className="transition-transform duration-300 hover:scale-110">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub
              className={`text-5xl md:text-5xl p-0.5 text-slate-700 transitio ${
                theme ? "hover:text-white" : "hover:text-black"
              }`}
            />
          </a>
        </div>
        <div className="transition-transform duration-300 hover:scale-110">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin
              className={`text-5xl md:text-5xl p-1 text-slate-700 transitio ${
                theme ? "hover:text-white" : "hover:text-black"
              }`}
            />
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col items-center mt-10 text-center">
        <div className="flex items-center text-4xl md:text-5xl font-bold gap-3 custom-font">
          <span className={`${theme ? "text-white" : "text-black"}`}>
            Hello
          </span>
          <img
            src="/wave-hand.webp"
            alt="Hi-hand"
            className="h-10 w-10 md:h-16 md:w-16"
          />
          <span>,</span>
        </div>
        <div
          className={`${
            theme ? "text-white" : "text-black"
          } text-4xl md:text-5xl font-bold custom-font mt-2`}
        >
          I'm <span className="text-slate-700">Saurabh</span>
        </div>
      </div>

      {/* Typing Animation */}
      <div
        className={`text-gray-800 custom-font text-2xl md:text-4xl mt-6 h-16 flex items-center ${
          theme ? "text-white" : "text-black"
        }`}
      >
        <span>{text}</span>
        <span className="animate-blink">|</span>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row bg-slate-700 text-white rounded-2xl mt-16 p-6 md:p-12 w-full max-w-6xl gap-8 md:h-100  ">
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold custom-font mb-4">About Me</h3>
          <p className="text-2xl md:text-base leading-relaxed ">
            Welcome to my portfolio! I am a passionate Computer Science student
            at Mumbai University, where I am pursuing a Bachelor's degree in
            Computer Science.I aim to graduate in June 2026 with a solid
            foundation in software development, programming, data management,
            machine learning, and more.
            <br />
            <br />
            My technical skills includes React, JavaScript, Node.Js, Express.Js,
            SQL, MongoDb.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            className="w-full md:w-1/2 rounded-2xl shadow-lg md:h-90 filter grayscale hover:grayscale-0 active:grayscale-0 transition duration-300 ease-in-out"
            src="/images/saurshra.jpg"
            alt="About Me"
          />
        </div>
      </div>
      <a
        href="/path/to/resume.pdf"
        download="Resume-Name"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-slate-700 text-white custom-font rounded-xl p-1.5 mt-4 mb-10 md:mb-20 cursor-pointer">
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default Home;
