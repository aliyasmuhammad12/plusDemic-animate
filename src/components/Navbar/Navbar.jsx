import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{duration:0.5, delay:0.6}}
    >
      <div className="container py-5 flex items-center justify-between">
        {/* Logo section */}
        <div>
          <img src={Logo} alt="logo" className="w-48" />
        </div>
        {/* Navlinks sections */}
        <ul className="hidden md:flex items-center gap-10 md:text-base text-sm">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href='#'>Custome Stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <button className="py-2 border border-gray-400 px-4 rounded-lg hover:bg-primary hover:text-white transform duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
