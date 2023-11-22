"use client";

import Character from "@dosha/characters/Character";
import { SpriteAnimator, useSprite } from "react-sprite-animator";

export default function Home() {
  return (
    <div>
      <h4 className="text-center text-2xl mt-10">Choose your hero</h4>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <div className="transition hover:scale-125 flex justify-center items-center flex-col">
          <Character character="wizard" action="idle" hover="attack_3" />
          <p className="text-center text-4xl">The Pitta man</p>
        </div>
        <div className="transition hover:scale-125 flex justify-center items-center flex-col">
          <Character character="archer" action="idle" hover="walk" />
          <p className="text-center text-4xl">The Doctor Vata</p>
        </div>
        <div className="transition hover:scale-125 flex justify-center items-center flex-col">
          <Character character="swordsman" action="idle" hover="attack_2" />
          <p className="text-center text-4xl">The Kapha Ranger</p>
        </div>
      </div>
    </div>
  );
}
