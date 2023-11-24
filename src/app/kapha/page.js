/* eslint-disable @next/next/no-img-element */
"use client";

import Character from "@dosha/characters/Character";
import Villain from "@dosha/characters/Villain";
import Button from "@dosha/components/Button";
import kapha from "@dosha/stories/kapha";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoHeartSharp } from "react-icons/io5";
import Modal from "@dosha/components/Modal";

const StepPage = (props) => {
  const [friends, setFriends] = useState([]);
  const [history, setHistory] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(kapha[currentStepIndex]);
  const [currentHP, setCurrentHP] = useState(100);
  const [currentBalance, setCurrentBalance] = useState(50);
  const [state, setState] = useState("walk");
  const [currentDmg, setCurrentDmg] = useState(null);
  const action = (a) => {
    const dmg = a.point;
    if (a.type === "character") setFriends((f) => [...f, a]);
    setHistory((h) => [...h, a]);
    setCurrentDmg(dmg);
    if (dmg < 0) setState("dead");
    else setState("walking");
    if (currentBalance + dmg < 50) {
      setCurrentHP((ch) => ch + currentStep.damage);
    }
    setCurrentBalance((balance) => {
      if (balance + dmg > 100) return 100;
      if (balance + dmg < 0) return 0;

      return balance + dmg;
    });
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const nextScenario = () => {
    if (currentStepIndex >= kapha.length - 1) setGameOver(true);
    setCurrentDmg(null);
    setCurrentStepIndex((i) => i + 1);
    setCurrentStep(kapha[currentStepIndex + 1]);
    setOpen(false);
  };

  useLayoutEffect(() => {
    var audio = document.getElementById("audio");
    audio.volume = 0.1;
    document.body.style.background =
      'url("/backgrounds/game_background_1.png")';
    document.body.style.backgroundSize = "100%";
  }, []);

  return !gameOver ? (
    <div>
      <audio autoPlay controls className="hidden" id="audio">
        <source src="/music/castlevania.mp3" type="audio/mp3" />
      </audio>

      <div className="relative bg-[url('/backgrounds/game_background_1.png')] w-screen h-screen bg-cover bg-bottom ">
        <Modal className="lg:bottom-0" open={open}>
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-4 p-4">
            <div className="lg:col-span-3">
              <img
                src="/vata/faces/fire-pitta.png"
                height={140}
                width={140}
                alt="pitta"
              />
            </div>
            <div className="lg:col-span-9">
              {currentDmg ? (
                <>
                  {currentDmg < 0 ? (
                    <div>
                      <p className="text-4xl text-white">
                        Ouch, you hurt your Dosha balance!
                      </p>
                      <b className="text-red-500 text-2xl">{currentDmg} DB</b>
                    </div>
                  ) : (
                    <div>
                      <p className="text-4xl text-white">
                        Great job! You have chosen correct item!
                      </p>
                      <b className="text-green-400 text-2xl">
                        +{currentDmg} DB
                      </b>
                    </div>
                  )}
                </>
              ) : currentBalance < 50 ? (
                currentStep.damage < 0 ? (
                  <div>
                    <p className="text-2xl text-white">
                      You took
                      <b className="text-red-500 text-2xl">
                        {currentStep.damage} damage
                      </b>
                      , because your dosha is out of balance
                    </p>
                    <p className="text-white">
                      Current Dosha Balance:
                      <b
                        className={
                          currentBalance >= 50
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {currentBalance >= 50
                          ? " In Balance"
                          : " Out of balance"}
                      </b>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-2xl text-white">
                      Nothing happens, keep going! {currentStep.damage}
                    </p>
                  </div>
                )
              ) : (
                <div>
                  <p className="text-2xl text-white">
                    Yay! You will not take a damage, cause your dosha is in
                    balance. <b className="text-green-500">Keep going!</b>
                  </p>
                  <p className="text-white">
                    Current Dosha Balance:
                    <b
                      className={
                        currentBalance >= 50 ? "text-green-500" : "text-red-500"
                      }
                    >
                      {currentBalance >= 50 ? " In Balance" : " Out of balance"}
                    </b>
                  </p>
                </div>
              )}

              <div className="flex justify-end items-center">
                <Button onClick={nextScenario} className="text-4xl">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </Modal>

        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:col-span-2 flex justify-between p-10 items-center">
            <div>
              <div className="relative w-[100px] lg:w-[200px] border-2 p-0 overflow-hidden  border-black transition-all  bg-cyan-100 lg:h-[20px] h-[10px] rounded-md">
                <div
                  style={{ width: `${currentBalance}%` }}
                  className={`absolute bg-cyan-600 h-[20px]`}
                ></div>
              </div>
              <p className="text-white text-center bg-black mt-1 rounded-xl">
                Dosha Balance
              </p>
            </div>
            <Button className="lg:block hidden">Kapha hunter</Button>
            <div className="flex justify-end items-center">
              <div className="relative w-[100px] lg:w-[200px] border-2 p-0 overflow-hidden  border-black transition-all  bg-green-100 h-[10px] lg:h-[20px] rounded-md">
                <div
                  style={{ width: `${currentHP}%` }}
                  className={`absolute bg-green-600 h-[20px]`}
                ></div>
              </div>
              <IoHeartSharp className="text-red-500 text-xl ml-2" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            {friends &&
              friends.map((v, i) => {
                return (
                  <Character
                    key={i}
                    character={v.sprite}
                    action="attack_1"
                    scale={0.5}
                    frameCount={8}
                    fps={8}
                    className="-ml-36"
                    {...v.props}
                  />
                );
              })}
            <Character
              character="wizard"
              scale={0.5}
              action={
                currentDmg
                  ? currentDmg < 0
                    ? "hurt"
                    : "run"
                  : currentStep.villains && currentStep.villains.length > 0
                  ? "attack_3"
                  : "idle"
              }
              //   stopLastFrame={currentDmg < 0}
            />

            {currentStep.villains &&
              currentStep.villains.map((v, i) => {
                return (
                  <div key={i} className="relative">
                    <p className="text-xl p-4 rounded-md bg-black text-white absolute top-[20%] left-[50%]">
                      {v.text}
                      <div className="w-[20px] h-[20px] rotate-45 bg-black absolute left-[calc(50%_-_10px)] bottom-[-10px]"></div>
                    </p>
                    <Character
                      character={v.sprite}
                      action="attack_2"
                      scale={0.5}
                      className="-scale-x-[1]"
                      {...v.props}
                    />
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center px-10 items-center">
            <div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Button>{currentStep.text}</Button>
              </motion.div>

              <div className="flex justify-evenly items-center">
                {currentStep.answers.map((a, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + 0.1 * i }}
                    >
                      <div
                        key={a.text}
                        disabled={currentDmg}
                        onClick={() => action(a)}
                      >
                        <motion.div
                          initial={{ y: 0 }}
                          animate={{ y: 10 }}
                          transition={{
                            delay: 0.1 * i,
                            type: "spring",
                            repeat: Infinity,
                            duration: 2,
                          }}
                          className="flex justify-center p-4 items-center flex-col"
                        >
                          {a.image && (
                            <img
                              height="64"
                              width="64"
                              src={a.image}
                              alt="Herb1"
                            />
                          )}
                          {a.type === "character" && (
                            <Character
                              character={a.sprite}
                              action="idle"
                              scale={0.5}
                              className="-mt-10 -scale-x-[1]"
                              {...a.props}
                            />
                          )}
                          <p className="text-center text-white text-xl">
                            {a.text}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center flex-col h-screen">
      {currentHP <= 0 ? (
        <p className="p-4 text-white bg-black">
          Nooooooooo, it cannot end like this, I should have kept my dosha in
          balance, humanity depends on me
        </p>
      ) : (
        <p className="p-4 text-white bg-black">
          As long as evil creatures roam the earth, We hunters will be there to
          stop them!
        </p>
      )}
      <Character
        character="wizard"
        action={currentHP <= 0 ? "dead" : "jump"}
        stopLastFrame={currentHP <= 0}
        frameCount={4}
      />
    </div>
  );
};

export default StepPage;
