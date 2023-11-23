import CharacterTwoDimensional from "../CharacterTwoDimensional";

const EarthKapha = ({ action = "idle", ...props }) => {
  // let p = { frameCount: 8 };
  // if (action === "run") p = { frameCount: 8 };

  return (
    <CharacterTwoDimensional
      height={128}
      width={288}
      // wrapAfter={1}
      frameCount={6}
      scale={0.3}
      fps={24}
      sprite="/vata/earth-kapha-sprites.png"
      // {...p}
    />
  );
};

export default EarthKapha;
