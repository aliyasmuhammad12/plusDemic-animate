import { motion } from "framer-motion";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import { SlideUp } from "../../utility/animation";

const Trust = () => {
  return (
    <section className="bg-brandWhite py-16 mt-20">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className=" py-6 text-4xl font-bold text-drakBlue text-center"
        >
          Why you can trust this tools
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Icon1} alt="" className="mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">Based on reliable sources</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              dicta. Distinctio, quis. Dolorem, ipsum fugit alias itaque culpa
              ratione ducimus.
            </p>
            <p className="text-sm text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              dicta. Distinctio, quis. Dolorem, ipsum fugit alias itaque culpa
              ratione ducimus <span className="text-primary">Learn More</span>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.7)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 text-center md:text-left md:px-16 xl:px-32"
          >
            <img src={Icon2} alt="" className="mx-auto md:mx-0" />
            <p className="text-3xl font-semibold">Based on reliable sources</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              dicta. Distinctio, quis. Dolorem, ipsum fugit alias itaque culpa
              ratione ducimus.
            </p>
            <p className="text-sm text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              dicta. Distinctio, quis. Dolorem, ipsum fugit alias itaque culpa
              ratione ducimus <span className="text-primary">Learn More</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
