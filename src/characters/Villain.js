"use client";

import { useEffect, useState } from "react";
import { SpriteAnimator, useSprite } from "react-sprite-animator";

function Villain({
  action = "idle",
  character = "wizard",
  className,
  hover,
  ...props
}) {
  const [current, setCurrent] = useState(action || "idle");
  const styles = useSprite({
    sprite: `/villains/${character}/${current}.png`,
    width: 128,
    height: 128,
    fps: 8,
    scale: 0.4,
    frameCount: 6,
    ...props,
  });

  useEffect(() => {
    setCurrent(action);
  }, [action]);
  return (
    <SpriteAnimator
      sprite={`/villains/${character}/${current}.png`}
      width={32}
      height={32}
      fps={8}
      scale={0.2}
      frameCount={8}
      onMouseOver={() => setCurrent(hover)}
      onMouseOut={() => setCurrent(action || "idle")}
      className={className}
      {...props}
    />
  );
}

export default Villain;
