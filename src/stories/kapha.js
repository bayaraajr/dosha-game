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
        text: "Fruit Salad",
        point: 10,
        image: "/foods/fruit_salad.png",
      },
    ],
  },
  {
    text: "Choose your weapon to fight the undead",
    friends: [],
    villains: [
      {
        sprite: "skeleton",
        text: "Dieeee Human",
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
        image: "/weapons/stone.png",
      },
      {
        text: "Axe",
        point: 0,
        image: "/weapons/axe.png",
      },
    ],
  },
  {
    text: "It started raining in the forset, what should I do?",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Take shelter from rain",
        point: 10,
        image: "/general/tree.png",
      },
      {
        text: "Keep going",
        point: -10,
        image: "/general/keep_going.png",
      },
    ],
  },
  {
    text: "Found an exlixer made from the things I hate the most, leafy green vegetables, what should I do?",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Drink ik, Yuk!",
        point: 10,
        image: "/foods/elixer.png",
      },
      {
        text: " No need, let's go on ahead",
        point: -10,
        image: "/general/keep_going.png",
      },
    ],
  },
  {
    text: "Choose your weapon to fight the undead",
    friends: [],
    villains: [
      {
        sprite: "knight",
        text: "The living be cursed!",
        props: {
          height: 86,
          width: 108,
        },
      },
    ],
    damage: -20,
    answers: [
      {
        text: "Bow & Arrow",
        point: 0,
        image: "/weapons/bow.png",
      },
      {
        text: "Sword",
        point: 0,
        image: "/weapons/sword.png",
      },
    ],
  },
  {
    text: "Phew, I sure am exhaused from all this fighting, I should take a small break, but what should I do?",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Take a quick nap",
        point: -10,
        image: "/general/nap.png",
      },
      {
        text: "Oh here is an Apple",
        point: -10,
        image: "/foods/apple.png",
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
        text: "let's take a BIG BITE HEHE!",
        point: -10,
        image: "/foods/steak.png",
      },
      {
        text: "Seems like a trap, let's ignore",
        point: 10,
        image: "/general/keep_going.png",
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
