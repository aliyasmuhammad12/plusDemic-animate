import { motion } from "framer-motion";
import HeroImage from "../../assets/hero.png";
import { SlideUp } from "../../utility/animation";
function Hero() {
  return (
    <section>
      <div className="bg-brandWhite rounded-3xl container grid grid-cols-1  md:grid-cols-2 gap-6 min-h-[650px]">
        {/* Text section */}
        <div className="flex flex-col justify-center xl:pr-40 ">
          <div className="mt-24 mb-10 md:mt-0 space-y-6 text-center md:text-left ">
            <motion.h1
              variants={SlideUp(0.2)}
              initial={"initial"}
              whileInView={"animate"}
              className="text-5xl font-bold text-drakBlue"
            >
              COVID-19 Risk <br /> Assessment Tool
            </motion.h1>
            <motion.p variants={SlideUp(0.4)}
              initial={"initial"}
              whileInView={"animate"} className="text-lg text-gray-400 mt-4 ">
              A set of solutions designed to help quickly identify coronavirus
              symptoms and get reliable information regarding COVID-19 concerns.
            </motion.p>
            <motion.div variants={SlideUp(0.6)}
              initial={"initial"}
              whileInView={"animate"} className="bg-primary text-white px-6 py-4 rounded mt-4 w-fit mx-auto md:mx-0  font-bold hover:shadow-lg duration-200 ">
              <button>See how to use it</button>
            </motion.div>
          </div>
        </div>
        {/* Image Section */}
        <motion.div 
              initial={{opacity:0, scale:0.5}}
              transition={{duration:0.5}}
              whileInView={{opacity:1, scale:1}} className="flex flex-col justify-center">
          <img src={HeroImage} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
