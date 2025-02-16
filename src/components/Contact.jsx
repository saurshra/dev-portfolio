import React, { useContext } from "react";
import { FolioContext } from "../context/FolioContext";

const Contact = () => {
  const { theme } = useContext(FolioContext);
  return (
    <section className=" mt-15">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md custom-font">
        <h2
          className={`mb-4 text-4xl tracking-tight font-extrabold text-center ${
            theme ? "text-white" : "text-black"
          }`}
        >
          Contact Me
        </h2>
        <p
          className={`mb-8 lg:mb-16 font-light text-center sm:text-xl custom-font ${
            theme ? "text-white" : "text-black"
          }`}
        >
          If you have any questions, suggestions, or need assistance, I am here
          to help. Please feel free to reach out— I would be happy to assist
          you.
        </p>
        <form
          action="https://api.web3forms.com/submit"
          className="space-y-8"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="75a9302e-287f-469b-81c3-b7a658bb3050"
          />
          <div>
            <label
              for="name"
              className={`block mb-2 text-sm font-medium custom-font text-black ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="first_name"
              className="block p-3 w-full text-sm rounded-lg border border-gray-900 shadow-sm custom-font bg-slate-700 text-white "
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className={`block mb-2 text-sm font-medium custom-font text-black ${
                theme ? "text-white" : "text-black"
              } `}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm border border-gray-900 text-white text-sm rounded-lg block w-full p-2.5 custom-font bg-slate-700"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className={`block mb-2 text-sm font-medium custom-font text-blak ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-white rounded-lg shadow-sm border border-gray-900 bg-slate-700 "
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white bg-slate-700 rounded-lg custom-font cursor-pointer"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
