import React, { useState, useEffect } from "react";
import celebrate1 from "../assets/celebrate-1.jpg";
import celebrate2 from "../assets/celebrate-2.jpg";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { Link } from "react-router";

export default function Banner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageVariants1 = {
    animate: {
      y: isMobile ? [0, 50, 0] : [0, 100, 0],
      transition: { duration: 5, ease: easeInOut, repeat: Infinity },
    },
  };

  const imageVariants2 = {
    animate: {
      x: isMobile ? [50, 0, 50] : [150, 100, 150],
      transition: { duration: 5, ease: easeInOut, repeat: Infinity },
    },
  };

  return (
    <div className="hero h-screen bg-blue-100 px-4 py-10">
      <div className="w-11/12 mx-auto flex flex-col-reverse gap-8 lg:flex-row-reverse items-center">
        {/* Images Section */}
        <div className="flex flex-col items-center gap-4 flex-1">
          <motion.img
            variants={imageVariants1}
            animate="animate"
            src={celebrate1}
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] border-l-8 border-b-8 border-blue-600 rounded-t-[54px] rounded-br-[54px] shadow-2xl"
          />
          <motion.img
            variants={imageVariants2}
            animate="animate"
            src={celebrate2}
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] border-l-8 border-b-8 border-blue-600 rounded-t-[54px] rounded-br-[54px] shadow-2xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Connecting People Across Faiths & Interests
          </h1>
          <p className="py-4 text-sm md:text-base lg:text-lg">
            Communion App is a platform designed to connect people of all faiths
            through meaningful events and community engagement. Whether you're
            looking for religious gatherings, social meetups, or charity events,
            Communion App helps you discover, filter, and add events
            effortlessly. Join us in fostering inclusivity, connection, and
            shared experiences.
          </p>
          <Link to={"/events"} className="btn btn-primary w-full md:w-auto">
            Explore Events
          </Link>
        </div>
      </div>
    </div>
  );
}
