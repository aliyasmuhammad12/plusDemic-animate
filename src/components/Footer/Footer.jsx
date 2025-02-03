import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* brand info */}

        <div className="">
          <img src={Logo} alt="" className="w-40" />
          <p className="text-gray-400 md:max-w-[400px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe
            repellendus eligendi obcaecati?
          </p>
        </div>
        {/* social icons */}

        <div className="flex spac-x-6 text-3xl gap-4">
          <FaFacebook className="hover:text-primary duration-200" />
          <FaInstagram className="hover:text-primary duration-200" />
          <FaLinkedin className="hover:text-primary duration-200" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
