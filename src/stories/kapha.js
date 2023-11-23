const kaphaStory = [
  {
    text: "Tonight is the Resurrection of the lord of darkness, Dracula. As a legendary vampire hunter I'll have to stop it. But first I need to take care of the night creatures, so need to have my strength up. I'm craving sweets. What should I eat?",
    friends: [],
    damage: 0,
    answers: [
      {
        text: "Burger",
        point: -10,
        image: "/foods/15_burger.png",
      },
      {
        text: "Fried chicken",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Cake & chocolates",
        point: -10,
        image: "/foods/22_cheesecake.png",
      },
      {
        text: "Fruit Salat",
        point: 10,
        image: "/foods/61_jam.png",
      },
    ],
  },
  {
    text: "SKELETING FIGHTING TEXT HERE",
    friends: [],
    villains: [
      {
        sprite: "skeleton",
        text: "hehe bat wolf",
        props: {
          frameCount: 6,
        },
      },
    ],
    damage: -10,
    answers: [
      {
        text: "Stone",
        point: 0,
        image: "/foods/15_burger.png",
      },
      {
        text: "Axe",
        point: 0,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "It started raining in the forset, what should I do? Take a shelter or keep going ",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Take a shelter",
        point: 10,
        image: "/foods/15_burger.png",
      },
      {
        text: "Keep going",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "It started raining in the forset, what should I do? Take a shelter or keep going ",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Drink ik, Yuk!",
        point: 10,
        image: "/foods/15_burger.png",
      },
      {
        text: " No need, let's go on ahead",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "BIG ARMOUR MAN TEXT HERE",
    friends: [],
    villains: [
      {
        sprite: "knight",
        text: "BIG BIG MAN HERE",
        props: {
          height: 86,
          width: 108,
        },
      },
    ],
    damage: -20,
    answers: [
      {
        text: "Whip",
        point: 0,
        image: "/foods/15_burger.png",
      },
      {
        text: "Sword",
        point: 0,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "IM TIRED",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Take a quick nap",
        point: -10,
        image: "/foods/15_burger.png",
      },
      {
        text: "No need, let's go on ahead",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Oh here is an Apple",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Hmmmm this steak, LOOKS DELICIOUS, so oily and juicy, what should I do?",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "No one seems to be looking, let's take a BIG BITE HEHE!",
        point: -10,
        image: "/foods/15_burger.png",
      },
      {
        text: "Seems like a trap, lets go",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "WOLF FIGHT TEXT HERE",
    friends: [],
    villains: [
      {
        sprite: "werewolf",
        text: "hehe bat wolf",
      },
    ],
    multiple_choice: true,
    damage: -30,
    answers: [
      {
        text: "A Gun",
        point: 0,
        image: "/foods/15_burger.png",
      },
      {
        text: "Wooden cross",
        point: 0,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Hmmm, I will need fire energy to defat dracula, who should I take?",
    friends: [
      {
        name: "Vata Hunter",
        sprite: "vata_hunter",
        text: "Hi Kapha hunter, we too are here to stop dracula, but one of us needs to stay behind and stop the night creatures. Which one of us would you like to take with you? ",
      },
      {
        name: "Pitta Huntress",
        text: "",
        sprite: "pitta_huntress",
        // props: { action:}
      },
    ],
    villains: [],
    multiple_choice: true,
    damage: 0,
    answers: [
      {
        text: "Vata Hunter",
        point: 0,
        sprite: "vata_hunter",
        type: "character",
      },
      {
        text: "Pitta huntress",
        point: 0,
        sprite: "pitta_huntress",
        type: "character",
      },
    ],
  },
  {
    text: "Dracula fight",
    friends: [],
    villains: [],
    multiple_choice: true,
    damage: -60,
    answers: [
      {
        text: "Silver sword",
        point: 0,
        image: "/foods/15_burger.png",
      },
      {
        text: "Vile of poison",
        point: 0,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Flashlight",
        point: 0,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
];
export default kaphaStory;
