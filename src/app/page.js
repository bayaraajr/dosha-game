"use client";

import Character from "@dosha/characters/Character";
import Button from "@dosha/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const paths = {
    0: "kapha",
    1: "vata",
    2: "pitta",
  };

  const [index, setIndex] = useState(1);

  const characters = [
    <div
      onClick={() => setIndex(0)}
      key="pitta"
      className="transition flex justify-center items-center flex-col"
    >
      <Character
        scale={0.5}
        character="wizard2"
        action="idle"
        hover="attack_3"
      />
      <div className="flex justify-center items-center">
        <p className="text-center text-white text-4xl">Kapha hunter</p>
        {index == 0 && <FaCheckCircle className=" text-green-500 text-xl" />}
      </div>
    </div>,
    <div
      onClick={() => setIndex(1)}
      key="vata"
      className="transition relative overflow-hidden flex justify-center items-center flex-col"
    >
      <Character
        character="thunder_vata"
        height={128}
        width={288}
        className="-mt-40"
        action="idle"
        scale={0.3}
        frameCount={8}
      />
      <div className="flex justify-center items-center">
        <p className="text-center text-white text-4xl"> Thunder Vata </p>
        {index === 1 && <FaCheckCircle className="text-green-500 text-xl" />}
      </div>
    </div>,
    <div
      onClick={() => setIndex(2)}
      key="kapha"
      className="transition flex justify-center items-center flex-col"
    >
      <Character scale={0.5} character="swordsman" action="idle" />
      <div className="flex justify-center items-center">
        <p className="text-center text-white text-4xl">Scholar Pitta</p>
        {index === 2 && <FaCheckCircle className="text-green-500 text-xl" />}
      </div>
    </div>,
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-scroll bg-[url('/backgrounds/game_background_3.png')]  bg-cover bg-bottom">
      <div className="flex justify-center items-center ">
        <Button>Choose your hero</Button>
      </div>
      <div className="mt-4 w-full flex max-h-80 px-4 justify-around items-center relative">
        <button
          hidden={index == 0}
          onClick={() => setIndex((i) => (i == 0 ? 0 : i - 1))}
          className="lg:hidden w-12 h-12 z-20 rounded-full bg-slate-900 hover:bg-slate-900/80 text-slate-50 flex items-center justify-center absolute left-4 top-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="grid-cols-3 gap-4 hidden lg:grid px-40">
          {characters.map((row, i) => (
            <motion.div
              key={i}
              transition={{ delay: 0.2 * i }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {row}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="lg:hidden overflow-hidden"
          transition={{ delay: 0 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {characters[index]}
        </motion.div>

        <button
          hidden={index == 2}
          onClick={() => setIndex((i) => (i == 2 ? 2 : i + 1))}
          className="lg:hidden w-12 h-12 z-20 rounded-full bg-slate-900 hover:bg-slate-900/80 text-slate-50 flex items-center justify-center absolute right-4 top-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="w-full flex justify-center mt-20 ">
        <Button onClick={() => router.push("/" + paths[index])}>Start!</Button>
      </div>
    </div>
  );
}
