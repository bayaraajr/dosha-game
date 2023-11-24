/* eslint-disable @next/next/no-img-element */
"use client";

import Character from "@dosha/characters/Character";
import Button from "@dosha/components/Button";
import kapha from "@dosha/stories/vata";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoHeartSharp } from "react-icons/io5";
import Modal from "@dosha/components/ModalVata";
import Link from "next/link";

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
    if (currentHP <= 0) {
      setState("dead");
      setGameOver(true);
    } else setState("walking");
    if (currentBalance + dmg < 50) {
      setCurrentHP((ch) => ch + currentStep.damage);
    }

    if (dmg) setCurrentBalance((balance) => balance + dmg);
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
  return (
    <>
      <Modal open={open}>
        <div className="grid grid-cols-12 gap-4 p-4">
          <div className="col-span-2">
            <img
              src="/vata/faces/thunder-vata.png"
              height={140}
              width={140}
              alt="pitta"
            />
          </div>
          <div className="col-span-9">
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
                    <b className="text-green-400 text-2xl">+{currentDmg} DB</b>
                  </div>
                )}
              </>
            ) : currentBalance < 50 ? (
              currentStep.damage && currentStep.damage < 0 ? (
                <div>
                  <p className="text-2xl text-white">
                    You took
                    <b className="text-red-500 text-2xl">
                      {currentStep.damage} damage
                    </b>
                    , because you are out of balance
                  </p>
                  <p className="text-white">
                    Current Dosha Balance:
                    <b
                      className={
                        currentBalance >= 50 ? "text-green-500" : "text-red-500"
                      }
                    >
                      {currentBalance >= 50 ? "In Balance" : "Out of balance"}
                    </b>
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-2xl text-white">
                    Nothing happens, keep going!{" "}
                    {currentStep.damage && currentStep.damage}
                  </p>
                </div>
              )
            ) : (
              <div>
                <p className="text-2xl text-white">
                  Yay! You will not take a damage, cause you are in balance.{" "}
                  <b className="text-green-500">Keep going!</b>
                </p>
                <p className="text-white">
                  Current Dosha Balance:
                  <b
                    className={
                      currentBalance >= 50 ? "text-green-500" : "text-red-500"
                    }
                  >
                    {currentBalance >= 50 ? "In Balance" : "Out of balance"}
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
      {!gameOver ? (
        <div className="relative bg-[url('/backgrounds/game_background_3.png')] w-screen h-screen bg-cover bg-bottom ">
          <div className="fixed top-0 flex gap-2 justify-between p-4 items-center w-full flex-col lg:flex-row">
            <div>
              <div className="relative w-[200px] border-2 p-0 overflow-hidden  border-black transition-all  bg-cyan-100 h-[20px] rounded-md">
                <div
                  style={{ width: `${currentBalance}%` }}
                  className={`absolute bg-cyan-600 h-[20px]`}
                ></div>
              </div>
              <p className="text-white text-center bg-black mt-1 rounded-xl">
                Dosha Balance {currentBalance}
              </p>
            </div>
            <Button className="-order-1 lg:order-none">Vata</Button>
            <div className="flex justify-end items-center">
              <div className="relative w-[200px] border-2 p-0 overflow-hidden  border-black transition-all  bg-green-100 h-[20px] rounded-md">
                <div
                  style={{ width: `${currentHP}%` }}
                  className={`absolute bg-green-600 h-[20px]`}
                ></div>
              </div>
              <IoHeartSharp className="text-red-500 text-xl ml-2" />
            </div>
          </div>
          <div className="flex justify-between items-center h-screen px-2 lg:px-40 overflow-x-auto">
            <div className="flex flex-col gap-0">
              <div className="w-56 h-28 relative overflow-hidden ">
                <Character
                  character="thunder_vata"
                  className="absolute object-contain left-1/2 -translate-x-1/2 bottom-0"
                  scale={0.5}
                  width={288}
                  height={128}
                  frameCount={
                    currentStep.villians && currentStep.villians.length > 0
                      ? 18
                      : 8
                  }
                  action={
                    currentDmg
                      ? currentDmg < 0
                        ? "hurt"
                        : "idle"
                      : currentStep.villians && currentStep.villians.length > 0
                      ? "attack"
                      : "idle"
                  }
                  stopLastFrame={currentDmg < 0}
                />
              </div>
              {friends &&
                friends.map((v, i) => {
                  return (
                    <div key={i} className="w-28 h-28 relative overflow-hidden">
                      <Character
                        character={v.sprite}
                        className="absolute object-contain left-1/2 -translate-x-1/2 bottom-0"
                        scale={0.5}
                        width={288}
                        height={128}
                        frameCount={v.props.idleFrameCount}
                        fps={8}
                        // className="-scale-x-[1]"
                        {...v.props}
                        action="idle"
                      />
                    </div>
                  );
                })}
            </div>

            <div className="flex justify-center items-center -translate-x-36 lg:-translate-x-12">
              {currentStep.villians &&
                currentStep.villians.map((v, i) => {
                  return (
                    <Character
                      character={v.sprite}
                      key={i}
                      action="idle"
                      frameCount={9}
                      scale={1}
                      {...v.props}
                    />
                  );
                })}
            </div>
          </div>

          <div className="absolute items-start bottom-0 left-1/2 -translate-x-1/2 bg-slate-900 rounded w-full">
            <div className="flex">
              <img
                src={
                  currentStep.character == "friend1"
                    ? friends[0] && friends[0].face
                    : currentStep.character == "dragon"
                    ? "/vata/faces/dragon.png"
                    : "/vata/faces/thunder-vata.png"
                }
                height={140}
                width={140}
                className="object-contain"
                alt="pitta"
              />
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Button>
                  {currentStep.type == "custom"
                    ? currentStep.text(friends[0] && friends[0].sprite)
                    : currentStep.text}
                </Button>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-evenly items-center overflow-x-auto">
              {(currentStep.type == "custom"
                ? currentStep.answers(friends[0] && friends[0].sprite)
                : currentStep.answers || []
              ).map((a, i) => {
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
                          <div className="w-72 h-32 relative overflow-hidden">
                            <Character
                              character={a.sprite}
                              action="idle"
                              scale={0.5}
                              className="absolute object-contain left-1/2 -translate-x-1/2 bottom-0"
                              {...a.props}
                            />
                          </div>
                        )}
                        <p
                          className={`text-center text-white text-xl ${
                            !a.image &&
                            a.type !== "character" &&
                            "border border-slate-50 rounded px-2 py-1"
                          }`}
                        >
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
      ) : (
        <div className="flex justify-center items-center flex-col bg-[url('/backgrounds/game_background_3.png')] w-screen h-screen bg-cover bg-bottom">
          {currentHP <= 0 ? (
            <p className="p-4 text-white bg-black text-lg flex flex-col">
              Nooooooooo, it cannot end like this, I should have kept my dosha
              in balance, humanity depends on me
              <Link
                href="/"
                className="bg-green-800 rounded text-slate-100 px-2 py-1"
              >
                New Game
              </Link>
            </p>
          ) : (
            <p className="p-4 text-white bg-black text-2xl flex flex-col">
              And we will be there to stop you, you can bet on that!
              <p className="">
                Dosha score:
                <span className="text-yellow-500 font-bold">
                  {currentBalance}
                </span>
              </p>
              <Link
                href="/"
                className="bg-green-800 rounded text-slate-100 px-2 py-1"
              >
                New Game
              </Link>
            </p>
          )}
          {!open && (
            <Character
              character="thunder_vata"
              width={288}
              height={128}
              action={currentHP <= 0 ? "dead" : "jump"}
              stopLastFrame={currentHP <= 0}
              frameCount={currentHP <= 0 ? 12 : 11}
            />
          )}
        </div>
      )}
    </>
  );
};

export default StepPage;
