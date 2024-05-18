import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-x-20 lg:gap-y-0  lg:items-center h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain  bg-no-repeat  lg:h-[620px] mix-blend-lighten bg-top "
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className=" text-bolder lg:h3 lg:mb-4">
              {" "}
              Welcome to my portfolio! I'm Joy ofure{" "}
            </h3>
            <div className="mb-6">
              <p>
                I am a passionate and results-driven Social Media Marketer with
                a knack for turning digital landscapes into thriving
                communities. With a blend of creativity, strategy, and
                analytics, I specialize in crafting impactful social media
                campaigns that elevate brands and drive meaningful engagement.
              </p>
            </div>

            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-10 lg:mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={90} duration={5} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Media/Tech <br />
                  Skill
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={80} duration={5} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Social <br />
                  Skill
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={70} duration={5} /> : null}%
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Leadership <br />
                  Skill
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
