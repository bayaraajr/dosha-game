const vataFriends = {
  friend1: {
    name: "",
    question: {
      pitta:
        "Oh no, FirePitta is angry! We need to practice quickly, what should I do?",
      kapha:
        "Oh no, EarthKapha is sleeping. We need to practice quickly, what should I do?",
    },
    answers: {
      pitta: [
        {
          text: "Come on, hurry up!! Let’s do some workout. You need to learn vita-jitsu!!",
          point: -10,
        },
        {
          text: "Calm down my friend. I will wait you for 30 minutes. Then let’s practice",
          point: 5,
        },
        {
          text: "Drink this iced cola! Let's do some practice after you calm down.",
          point: 10,
        },
        {
          text: "Eat this hot soup! Let's do some practice after you calm down.",
          point: -5,
        },
      ],
      kapha: [
        {
          text: "Say loudly wake up!!!!! And push him into a floor",
          point: -10,
        },
        {
          text: "Wait him until afternoon.",
          point: -5,
        },
        {
          text: "Put a awesome fried beef steak front of the bed. He might be smell it and wake up.",
          point: 10,
        },
      ],
    },
  },
};

const vataStory = [
  {
    text: "What a great day! I need a meal for breakfast.",
    friends: [],
    damage: 0,
    answers: [
      {
        text: "Bread, orange juice with iced cubes",
        point: -10,
        image: "/foods/08_bread_dish.png",
      },
      {
        text: "mozzarella cheese, hot tea",
        point: 10,
        image: "/foods/22_cheesecake.png",
      },
      {
        text: "Corn and milk",
        point: -8,
        image: "/foods/84_popcorn_bowl.png",
      },
    ],
  },
  {
    text: "Today I have to fight dragons. So I need to power up. Let’s do some workout!",
    friends: [],
    damage: 0,
    answers: [
      {
        text: "Yoga",
        point: 10,
        image: "/activities/yoga.png",
      },
      {
        text: "Karate",
        point: -10,
        image: "/activities/karate.png",
      },
      {
        text: "Basketball",
        point: -10,
        image: "/activities/basketball.png",
      },
    ],
  },
  {
    text: "Woo, I am ready to fight! But I need a partner. Let’s call one of my friend who able to learn vata-jitsu quickly!",
    friends: [],
    damage: 0,
    answers: [
      {
        text: "Earth Kapha",
        point: -5,
        sprite: "earth_kapha",
        type: "character",
        face: "vata/faces/earth-kapha.png",
        props: {
          height: 128,
          width: 288,
          action: "attack",
          frameCount: 25,
          idleFrameCount: 16,
        },
      },
      {
        text: "Fire Pitta",
        point: 10,
        sprite: "fire_pitta",
        type: "character",
        face: "vata/faces/fire-pitta.png",
        props: {
          action: "attack",
          height: 128,
          width: 288,
          frameCount: 18,
          idleFrameCount: 8,
        },
      },
    ],
  },
  {
    type: "custom",
    text: (name) =>
      name == "fire_pitta"
        ? vataFriends.friend1.question.pitta
        : vataFriends.friend1.question.kapha,
    friends: [],
    damage: 0,
    answers: (name) =>
      name == "fire_pitta"
        ? vataFriends.friend1.answers.pitta
        : vataFriends.friend1.answers.kapha,
  },
  {
    character: "friend1",
    text: "We need someone who has 80 years of experience to kill dragons.",
    answers: [
      {
        text: "Yes",
      },
    ],
  },
  {
    text: "Oh, yeah. Let’s ask for join another friend.",
    friends: [],
    damage: 0,
    answers: [
      {
        text: "Legendary Pitta",
        point: 5,
        sprite: "fire_pitta",
        type: "character",
        face: "vata/faces/fire-pitta.png",
        props: {
          action: "attack",
          height: 128,
          width: 288,
          frameCount: 18,
          idleFrameCount: 8,
        },
      },
      {
        text: "Huricane Vata",
        point: -10,
        sprite: "huricane_vata",
        type: "character",
        face: "vata/faces/hurricane-vata.png",
        props: {
          height: 128,
          width: 288,
          action: "attack",
          frameCount: 7,
          idleFrameCount: 8,
        },
      },
      {
        text: "Water Kapha",
        point: 10,
        sprite: "water_kapha",
        type: "character",
        face: "vata/faces/water-kapha.png",
        props: {
          height: 128,
          width: 288,
          action: "attack",
          frameCount: 32,
          idleFrameCount: 8,
        },
      },
    ],
  },
  {
    character: "dragon",
    text: "Hahahaha! Let’s kill those little insects!",
    friends: [],
    villians: [
      {
        sprite: "dragon",
        text: "Hahahaha! Let’s kill those little insects!",
        props: {
          height: 445,
          width: 725,
          frameCount: 18,
          action: "attack",
        },
      },
    ],
    damage: -50,
    answers: [
      {
        text: "Attack",
        point: 0,
      },
    ],
  },
  {
    text: "Let’s eat fruits food for buff!",
    friends: [],
    answers: [
      {
        text: "Peanuts",
        image: "/fruits/peanuts.png",
        point: -10,
      },
      {
        text: "Pineapple",
        image: "/fruits/pineapple.png",
        point: 10,
      },
      {
        text: "Oranges",
        image: "/fruits/orange.png",
        point: 10,
      },
      {
        text: "Watermelon",
        image: "/fruits/watermelon.png",
        point: -10,
      },
    ],
    villians: [
      {
        sprite: "dragon",
        text: "Hahahaha! Let’s kill those little insects!",
        props: {
          height: 445,
          width: 725,
          frameCount: 9,
          action: "idle",
        },
      },
    ],
    damage: 0,
  },
  {
    character: "dragon",
    text: "Hahahaha! Take this!",
    friends: [],
    villians: [
      {
        sprite: "dragon",
        text: "Hahahaha! Take this!",
        props: {
          height: 445,
          width: 725,
          frameCount: 18,
          action: "attack",
        },
      },
    ],
    damage: -30,
    answers: [
      {
        text: "Attack",
        point: 0,
      },
    ],
  },

  {
    text: "Choose fighting methods!",
    friends: [],
    answers: [
      {
        text: "Use pranayama breathing for hurricane damage",
        point: 10,
      },
      {
        text: "Run like a speed light and attack tornado",
        point: -10,
      },
      {
        text: "Make snow and cover your body, then attack with freezing wind",
        point: -20,
      },
    ],
    villians: [
      {
        sprite: "dragon",
        text: "Hahahaha! Take this!",
        props: {
          height: 445,
          width: 725,
          frameCount: 18,
          action: "attack",
        },
      },
    ],
    damage: -30,
  },
  {
    character: "dragon",
    text: "You can't defeat me!",
    friends: [],
    villians: [
      {
        sprite: "dragon",
        text: "You can't defeat me!",
        props: {
          height: 445,
          width: 725,
          frameCount: 18,
          action: "attack",
        },
      },
    ],
    damage: -50,
    answers: [
      {
        text: "Attack",
        point: 0,
      },
    ],
  },

  {
    character: "dragon",
    text: "Are you a transcendental walker!",
    friends: [],
    villians: [
      {
        text: "Are you a transcendental walker!",
        sprite: "dragon",
        props: {
          height: 445,
          width: 725,
          frameCount: 9,
          action: "idle",
        },
      },
    ],

    damage: 0,
    answers: [
      {
        text: "No",
        point: 0,
      },
      {
        text: "Yes",
        point: 1,
      },
    ],
  },

  {
    character: "dragon",
    text: "My friends will kill you tomorrow! Ahhhhhh…!",
    friends: [],
    villians: [
      {
        text: "My friends will kill you tomorrow! Ahhhhhh….",
        sprite: "dragon",
        props: {
          height: 445,
          width: 725,
          frameCount: 9,
          action: "idle",
        },
      },
    ],

    damage: 0,
    answers: [
      {
        text: "Next",
        point: 0,
      },
    ],
  },
  {
    character: "friend1",
    text: "woohoo, we won!!!! Tomorrow morning, we have to fight again! It’s 20:00",
    friends: [],
    answers: [
      { text: "Do some workout for tomorrow’s battle! ", point: -10 },
      { text: "Find some quite place for do TM.", point: 10 },
    ],
    damage: 0,
  },
  {
    text: "It was a long day! Time to sleep. Let’s set an alarm.",
    answers: [
      { text: "Before 6:00", point: 10 },
      { text: "Before 7:00", point: -5 },
      { text: "Before 8:00", point: -5 },
      { text: "Before 9:00", point: -5 },
    ],
  },
];

export default vataStory;
