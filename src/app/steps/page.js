"use client";

import Character from "@dosha/characters/Character";
import Villain from "@dosha/characters/Villain";
import Button from "@dosha/components/Button";
import { useEffect, useState } from "react";

const StepPage = (props) => {
  const [currentHP, setCurrentHP] = useState(95);
  const [state, setState] = useState("walk");
  const [currentDmg, setCurrentDmg] = useState(null);
  const action = (dmg) => {
    setCurrentDmg(dmg);
    if (dmg < 0) setState("dead");
    else setState("walking");
    setCurrentHP((hp) => {
      if (hp + dmg > 100) return 100;
      return hp + dmg;
    });
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="col-span-2 flex justify-between p-10 items-center">
        <Button>Kapha warrior</Button>
        <div className="relative w-[200px] border-2 p-0 overflow-hidden  border-black transition-all  bg-green-100 h-[20px] rounded-md">
          <div
            style={{ width: `${currentHP}%` }}
            className={`absolute bg-green-600 h-[20px]`}
          ></div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Villain
          character="dragon"
          action="idle"
          //   stopLastFrame={currentDmg < 0}
        />
        <Character
          character="wizard"
          action={currentDmg ? (currentDmg < 0 ? "hurt" : "run") : "idle"}
          //   stopLastFrame={currentDmg < 0}
        />
        {currentDmg ? (
          currentDmg < 0 ? (
            <p className="text-4xl text-white">
              Ouch, you hurt yourself!{" "}
              <b className="text-red-500">{currentDmg} HP</b>
            </p>
          ) : (
            <p className="text-4xl text-white">
              Great job! <b className="text-green-400">+{currentDmg} HP</b>
            </p>
          )
        ) : null}
      </div>
      <div className="flex justify-center px-10 items-center">
        <div>
          <Button>
            What a beatiful day! I am ready to fight with the monsters, but I am
            starving. I need to eat something. What am I having for breakfast ?
            Note: Choose carefully
          </Button>

          <div className="flex justify-evenly items-center">
            <Button disabled={currentDmg} onClick={() => action(-10)}>
              <img height="64" width="64" src="/herbs/1.png" alt="Herb1" />
              <p>Herb</p>
            </Button>
            <Button disabled={currentDmg} onClick={() => action(-20)}>
              <img height="64" width="64" src="/meats/23.png" alt="Herb1" />
              <p>Meat</p>
            </Button>
            <Button disabled={currentDmg} onClick={() => action(10)}>
              <img height="64" width="64" src="/herbs/33.png" alt="Herb1" />
              <p>Herb 2</p>
            </Button>
            <Button disabled={currentDmg} onClick={() => action(10)}>
              <img height="64" width="64" src="/meats/17.png" alt="Herb1" />
              <p>Meat 2</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPage;
