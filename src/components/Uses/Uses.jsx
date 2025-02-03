import { motion } from "framer-motion";
import Img1 from "../../assets/uses/1.png";
import Img2 from "../../assets/uses/2.png";
import Img3 from "../../assets/uses/3.png";
import { SlideLeft,SlideRight } from "../../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <motion.div variants={SlideRight(0.2)}
            whileInView="animate"
            initial="initial" className="flex flex-col justify-center xl:pr-14">
            <h1 className="text-3xl font-bold text-drakBlue">
              How it Helps people
            </h1>
            <p className=" text-gray-400 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
              reprehenderit? Lorem ipsum dolor sit amet.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              <a href="#" className="text-primary">
                Learn More{" "}
              </a>
            </p>
            <button className="w-fit mt-4 border border-gray-200 px-4 py-4 rounded-lg hover:bg-primary hover:text-white  transform duration-300">
              Get In Touch
            </button>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            whileInView="animate"
            initial="initial"
          >
            <img src={Img1} alt="" className="w-full rounded-3xl " />
            <p className="text-gray-400 mt-4">Coronavirus</p>
          </motion.div>
          <motion.div  variants={SlideLeft(0.6)}
            whileInView="animate"
            initial="initial" >
            <img src={Img2} alt="" className="w-full rounded-3xl " />
            <p className="text-gray-400 mt-4">Diagnostic</p>
          </motion.div>
          <motion.div 
           variants={SlideLeft(0.8)}
           whileInView="animate"
           initial="initial">
            <img src={Img3} alt="" className="w-full rounded-3xl " />
            <p className="text-gray-400 mt-4">Symptoms</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
