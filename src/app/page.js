"use client";

import Character from "@dosha/characters/Character";
import Button from "@dosha/components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import { SpriteAnimator, useSprite } from "react-sprite-animator";
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const [selected, setSelected] = useState("vata");
  const router = useRouter();
  const characters = [
    <div
      onClick={() => setSelected("kapha")}
      key="pitta"
      className="transition hover:scale-125 flex justify-center items-center flex-col"
    >
      <Character
        scale={0.5}
        character="wizard"
        action="idle"
        hover="attack_3"
      />
      <div className="flex justify-center items-center">
        <p className="text-center text-white text-4xl">Kapha hunter</p>
        {selected === "kapha" && (
          <FaCheckCircle className=" text-green-500 text-xl" />
        )}
      </div>
    </div>,
    <div
      onClick={() => setSelected("vata")}
      key="vata"
      className="transition relative hover:scale-125 flex justify-center items-center flex-col"
    >
      <Character
        character="thunder_vata"
        height={128}
        width={288}
        className="-mt-10"
        action="idle"
        scale={0.4}
        frameCount={8}
      />
      <div className="flex justify-center items-center">
        <p className="text-center text-white text-4xl"> Thunder Vata </p>
        {selected === "vata" && (
          <FaCheckCircle className="text-green-500 text-xl" />
        )}
      </div>
    </div>,
    <div
      onClick={() => setSelected("pitta")}
      key="kapha"
      className="transition hover:scale-125 flex justify-center items-center flex-col"
    >
      <Character scale={0.5} character="swordsman" action="idle" />
      <div className="flex justify-center items-center">
        <p className="text-center text-white text-4xl">Scholar Pitta</p>
        {selected === "pitta" && (
          <FaCheckCircle className="text-green-500 text-xl" />
        )}
      </div>
    </div>,
  ];
  return (
    <div className="h-screen w-screen overflow-scroll">
      <div className="absolute top-2 left-[calc(50%_-_150px)] w-[300px] flex justify-center items-center">
        <Button>Choose your hero</Button>
      </div>
      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1">
        {characters.map((c, i) => {
          return (
            <motion.div
              key={i}
              transition={{ delay: 0.2 * i }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {c}
            </motion.div>
          );
        })}
        <div className="col-span-3 flex justify-center mt-12">
          <Button onClick={() => router.push("/" + selected)}>Start!</Button>
        </div>
      </div>
    </div>
  );
}
