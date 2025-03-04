import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs, FaPhp } from "react-icons/fa";
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { motion } from "motion/react";
import { FaJava } from "react-icons/fa6";

const iconVarianrs = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center flex-wrap gap-4"
      >
        <motion.div
          variants={iconVarianrs(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/linux.png" className="w-18 h-18" alt="linux" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/mysql.png" className="w-18 h-18" alt="linux" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/python.png" className="w-18 h-18" alt="linux" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoCss3 className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoHtml5 className="text-7xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoTailwindCss
            className="text-7xl "
            style={{ color: "	a5f3fc" }}
          />
        </motion.div>
        <motion.div
          variants={iconVarianrs(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoBootstrap className="text-7xl" style={{ color: "563d7c" }} />
        </motion.div>
        <motion.div
          variants={iconVarianrs(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/php.png" alt="" className="w-18 h-18" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/java.png" alt="" className="w-18 h-18" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoJavascript className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src="/symfony.png"
            alt="symfony"
            className="w-18 h-18"
          />
        </motion.div>
        <motion.div
          variants={iconVarianrs(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/csharp.png" className="w-18 h-18" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/C++.png" className="w-18 h-18" />
        </motion.div>
        <motion.div
          variants={iconVarianrs(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="/C.png" className="w-18 h-18" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
