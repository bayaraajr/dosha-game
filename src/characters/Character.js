"use client";

import { useEffect, useState } from "react";
import { SpriteAnimator, useSprite } from "react-sprite-animator";

function Character({
  action = "idle",
  character = "wizard",
  className,
  hover,
  ...props
}) {
  const [current, setCurrent] = useState(action || "idle");

  useEffect(() => {
    setCurrent(action);
  }, [action]);
  return (
    <SpriteAnimator
      sprite={`/characters/${character.trim()}/${current.trim()}.png`}
      width={128}
      height={128}
      fps={8}
      scale={0.4}
      frameCount={8}
      onMouseOver={() => setCurrent(hover)}
      onMouseOut={() => setCurrent(action || "idle")}
      className={className}
      {...props}
    />
  );
}

export default Character;
