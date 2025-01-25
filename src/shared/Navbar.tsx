import { ModeToggle } from "@/components/ui/mode-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              MyLogo
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to={"/"} className="hover:bg-gray-700 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to={"/"} className="hover:bg-gray-700 px-3 py-2 rounded-md">
              task
            </Link>
            <Link
              to={"/user"}
              className="hover:bg-gray-700 px-3 py-2 rounded-md"
            >
              User
            </Link>
            {/* Add more links as needed */}
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
