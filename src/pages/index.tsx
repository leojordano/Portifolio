"use client";
import { useState } from "react";
import { GiCard2Hearts } from "react-icons/gi";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Home() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const bounceTransition = {
    y: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 0.7,
      yoyo: Infinity,
      ease: "easeOut",
      delay: 2.2,
    },
  };

  const handleToggleLikedState = (state: boolean) => {
    return !state;
  };

  return (
    <div className="flex justify-between items-center flex-col h-full">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <GiCard2Hearts className="text-5xl text-slate-200" />
      </motion.div>

      <div className="text-slate-200 flex justify-center items-center flex-col">
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h1 className="text-3xl font-semibold tracking-wider">
            Leonardo Jordano
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <h2 className="text-xl font-semibold tracking-wider">
            Dev Front End
          </h2>
        </motion.div>

        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <motion.div
            transition={bounceTransition}
            animate={{
              y: ["10px", "0px"],
            }}
          >
            <BiDownArrow className="text-2xl text-slate-200 mt-5" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -10, opacity: 0 }}
        transition={{ duration: 0.7, delay: 1.9 }}
      >
        {isLiked ? (
          <AiTwotoneLike
            onClick={() => setIsLiked(handleToggleLikedState)}
            className="text-5xl text-slate-200 cursor-pointer hover:fill-white"
          />
        ) : (
          <AiOutlineLike
            onClick={() => setIsLiked(handleToggleLikedState)}
            className="text-5xl text-slate-200 cursor-pointer hover:fill-white"
          />
        )}
      </motion.div>
    </div>
  );
}
