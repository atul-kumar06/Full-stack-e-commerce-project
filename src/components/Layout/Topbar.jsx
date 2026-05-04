import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";


export const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-gray-300">
            <FaMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        <div className="text-sm text-center grow">
          <span className="hover:text-gray-300">
            We ship world-fast and reliable shipping
          </span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="tel:+123456789" className="hover:text-gray-300">
            +1 (234) 567-89
          </a>
        </div>
      </div>
    </div>
  );
};
