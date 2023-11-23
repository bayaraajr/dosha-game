"use client";

import { useEffect, useState } from "react";
import { SpriteAnimator, useSprite } from "react-sprite-animator";

function CharacterTwoDimensional({ className, ...props }) {
  // const [current, setCurrent] = useState(action || "idle");
  // useEffect(() => {
  //   setCurrent(action);
  // }, [action]);
  return (
    <SpriteAnimator
      // sprite={`${sprite}`}
      // width={128}
      // height={128}
      // fps={8}
      // // wrapAfter={2}
      // scale={0.3}
      // frameCount={8}
      // onMouseOver={() => setCurrent(hover)}
      // onMouseOut={() => setCurrent(action || "idle")}
      className={className}
      {...props}
    />
  );
}

export default CharacterTwoDimensional;
