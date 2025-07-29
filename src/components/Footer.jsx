import { BsLinkedin } from "react-icons/bs"; 
import { FaGithub } from "react-icons/fa"; 
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-700 py-4 border-t border-t-gray-100 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center gap-5 mb-4">
          <div className="transition-transform duration-300 hover:scale-110">
            <a
              href="https://www.linkedin.com/in/saurshra/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="text-2xl text-white transition-colors" />
            </a>
          </div>
          <div className="transition-transform duration-300 hover:scale-110">
            <a
              href="https://github.com/saurshra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl text-white transition-colors" />
            </a>
          </div>
                              <div className="transition-transform duration-300 hover:scale-110">
            <Link
             to={'/contact'}
            >
              <IoCallOutline className="text-2xl text-white transition-colors" />
            </Link>
          </div>

        </div>


        <div className="text-center text-white custom-font text-sm">
          Designed by saurshra
        </div>
      </div>
    </footer>
  );
};

export default Footer;
