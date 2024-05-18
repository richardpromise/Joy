import React from "react";
// import image from "../assets/avatar.svg";
import {
  // FaCameraRetro,
  // FaInstagram,
  FaInstagramSquare,
  FaWhatsapp,
} from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { PiVideoCameraLight } from "react-icons/pi";

const Banner = () => {
  return (
    <section
      id="home"
      className="section min-h-[85vh] lg:min-h[78vh] flex items-center "
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8  lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center  font-secondary lg:text-left">
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="px-3"
            >
              Hi there my name is
            </motion.p>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              JOY <span>OFURE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[25px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="block lg:inline text-[30px]  text-white">
                {" "}
                i am a social media{" "}
              </span>
              <TypeAnimation
                sequence={[
                  "Manager",
                  2000,
                  "Promoter",
                  2000,
                  "Influencer",
                  2000,
                ]}
                speed={50}
                className="text-accent text-[30px]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 "
            >
              A passionate and results-driven Social Media Marketer with a knack
              for turning digital landscapes into thriving communities.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg"> Contact me</button>
              <a href="#" className="text-white/80 btn-link">
                My resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <GrLinkedin />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className=""
          >
            <div
              id="cam"
              className="h-96 w-96 rounded-[150px] bg-gradient-to-t from-fuchsia-600 rotate-180  #406aff flex-col justify-center items-center text-white text-5xl font-extrabold hidden max-w-[320px] lg:flex  flex-1 lg:max-w-[482px]"
            >
              <PiVideoCameraLight color={"white"} size={150} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
