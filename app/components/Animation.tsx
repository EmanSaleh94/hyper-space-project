"use client";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons";
import {socialData} from '../data/data'



const Animation = () => {
  return (
    <>
      <motion.div className=" h-1/2 flex justify-center items-center">
        <motion.div
          className="w-80 h-80  max-sm:w-44 max-sm:h-44  bg-white text-center flex items-center"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "5px"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className=" w-96 font-GTAmerica text-black  max-md:text-md text-lg  flex justify-content flex-col items-center"
            transition={{
              delay: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],

              repeatDelay: 1,
            }}
          >
            <p>Social Contacts</p>
            <div className="socialLinks flex items-center justify-around mt-10 w-3/4   ">
              {socialData.map((ele:any, index:any) => (
                <SocialIcons
                  key={index}
                  path={ele.path}
                  iconSvg={ele.iconSvg}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Animation;
