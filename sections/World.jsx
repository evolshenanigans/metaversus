"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title=" | People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-20 w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="maskgroup.png" alt="people" className="w-full h-full rounded-[24px]" />
          <div className=' justify-start w-full flex flex-row'>
            <img src="Ellipse39.png" alt="ellipse39" className="absolute bottom-10 left-5 z-30"/>
            <img src="Ellipse40.png" alt="ellipse40" className="absolute bottom-10 left-7 z-20" />
            <img src="Ellipse41.png" alt="ellipse41" className="absolute bottom-10 left-9 z-10"/>
            <p className="absolute bottom-10 left-16 text-[#FFFFFF] text-[12px]">+ 264 has joined</p>
            <h1 className="text-[#FFFFFF] text-[18px] absolute bottom-3 left-5">The Upside Down</h1>
          </div>
        </div>
        <div className="absolute top-10 left-[65%] w-[180px] h-[136px] p-[6px] rounded-[24px] bg-[#5d6680]">
          <img src="maskgroup2.png" alt="people" className="w-full h-full rounded-[24px]" />
          <div className=' justify-start w-full flex flex-row'>
            <img src="Ellipse42.png" alt="ellipse42" className="absolute bottom-10 left-5 z-30"/>
            <img src="Ellipse43.png" alt="ellipse43" className="absolute bottom-10 left-7 z-20" />
            <img src="Ellipse44.png" alt="ellipse44" className="absolute bottom-10 left-9 z-10"/>
            <p className="absolute bottom-10 left-16 text-[#FFFFFF] text-[12px]">+ 264 has joined</p>
            <h1 className="text-[#FFFFFF] text-[18px] absolute bottom-3 left-5">Hawkings Lab</h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
