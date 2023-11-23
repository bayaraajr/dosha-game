import CharacterTwoDimensional from "../CharacterTwoDimensional";

const Hurricane = ({ action = "idle", ...props }) => {
  let p = { frameCount: 8, wrapAfter: 30 };
  if (action === "run") p = { wrapAfter: 30, frameCount: 8 };

  return (
    <CharacterTwoDimensional
      height={128}
      width={288}
      frameCount={8}
      scale={0.3}
      fps={8}
      sprite="/vata/hurricane-vata-sprites.png"
      {...p}
    />
  );
};

export default Hurricane;
