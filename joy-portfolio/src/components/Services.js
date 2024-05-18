import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut non sapiente iste blanditiis, commodi eum neque quod reiciendis hic minima atque est veritatis ad, nemo perspiciatis eligendi voluptatibus explicabo qui!",
    link: "Learn more",
  },
  {
    name: "Digital marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut non sapiente iste blanditiis, commodi eum neque quod reiciendis hic minima atque est veritatis ad, nemo perspiciatis eligendi voluptatibus explicabo qui!",
    link: "Learn more",
  },
  {
    name: "Media Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut non sapiente iste blanditiis, commodi eum neque quod reiciendis hic minima atque est veritatis ad, nemo perspiciatis eligendi voluptatibus explicabo qui!",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="service" className="section  ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6">What I DO</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a passionate and results-driven Social Media Marketer with a
              knack for turning digital landscapes into thriving communities
            </h3>
            <button className="btn btn-sm"> Work with me </button>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-fit mb-[38px] flex "
                    key={index}
                  >
                    <div className="max-w-[476px]  ">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight pb-4 ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex items-center justify-center"
                      >
                        <BsArrowUpRight />{" "}
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {" "}
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
