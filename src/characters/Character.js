"use client";

import { useState } from "react";
import { useSprite } from "react-sprite-animator";

function Character({
  action = "idle",
  character = "wizard",
  className,
  hover,
  ...props
}) {
  const [current, setCurrent] = useState(action || "idle");
  const styles = useSprite({
    sprite: `/characters/${character}/${current}.png`,
    width: 128,
    height: 128,
    fps: 8,
    scale: 0.4,
    frameCount: 6,
    ...props,
  });
  return (
    <div
      onMouseOver={() => setCurrent(hover)}
      onMouseOut={() => setCurrent(action || "idle")}
      style={styles}
      className={className}
    ></div>
  );
}

export default Character;
