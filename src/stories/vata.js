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
          point: 0,
        },
        {
          text: "Drink this iced cola! Let's do some practice after you calm down.",
          point: 10,
        },
        {
          text: "Eat this hot soup! Let's do some practice after you calm down.",
          point: 0,
        },
      ],
      kapha: [
        {
          text: "Say loudly wake up!!!!! And push him into a floor",
          point: -10,
        },
        {
          text: "Wait him until afternoon.",
          point: 0,
        },
        {
          text: "Put a awesome fried beef steak front of the bed. He might be smell it and wake up.",
          point: 10,
        },
      ],
    },
  },
  friend2: {},
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
        image: "/foods/15_burger.png",
      },
      {
        text: "mozzarella cheese, hot tea",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Corn and milk",
        point: -8,
        image: "/foods/22_cheesecake.png",
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
        image: "/foods/15_burger.png",
      },
      {
        text: "Karate",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Basketball",
        point: -10,
        image: "/foods/22_cheesecake.png",
      },
    ],
  },
  {
    text: "Woo, I am ready to fight! But I need a partner. Let’s call one of my friend who able to learn vata-jitsu quickly!",
    friends: [],
    damage: 0,
    answers: [
      {
        text: "FirePitta",
        point: 10,
        image: "/foods/15_burger.png",
        action: () => {
          vataFriends.friend1.name = "FirePitta";
        },
        frame: {
          w: 288,
          h: 128,
          c: 3,
        },
      },
      {
        text: "EarhKapha",
        point: -10,
        action: () => {
          vataFriends.friend1.name = "EarhKapha";
        },
        frame: {
          w: 288,
          h: 128,
          c: 3,
        },
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text:
      vataFriends.friend1.name == "FirePitta"
        ? vataFriends.friend1.question.pitta
        : vataFriends.friend1.question.kapha,
    friends: [],
    damage: 0,
    answers:
      vataFriends.friend1.name == "FirePitta"
        ? vataFriends.friend1.answers.pitta
        : vataFriends.friend1.answers.kapha,
  },
  {
    text: "Yeah! We've done our workout.",
    friends: [
      {
        name: vataFriends.friend1.name,
        text: "We need someone who has 80 years of experience to kill dragons.",
      },
    ],
    damage: 0,
  },
  {
    text: "Oh, yeah. Let’s ask for join another friend.",
    friends: [],
    damage: 0,
    answers: [
      {
        text: "LegenderyPitta",
        point: 5,
        action: () => {
          vataFriends.friend2.name = "LegenderyPitta";
        },
      },
      {
        text: "HurricaneVata",
        point: -10,
        action: () => {
          vataFriends.friend2.name = "HurricaneVata";
        },
      },
      {
        text: "WaterKapha",
        point: 10,
        action: () => {
          vataFriends.friend2.name = "WaterKapha";
        },
      },
    ],
  },
  {
    text: "Let's fight!",
    friends: [],
    villians: [
      {
        text: "Hahahaha! Let’s kill those little insects!",
      },
    ],
    damage: -50,
  },
  {
    text: "Let’s eat fruits food for buff!",
    friends: [],
    answers: [
      {
        text: "Peanuts",
        point: -10,
      },
      {
        text: "Pineapple",
        point: 10,
      },
      {
        text: "Oranges",
        point: 10,
      },
      {
        text: "Watermelon",
        point: -10,
      },
    ],
    damage: 0,
  },
  {
    text: "Dragon is attacking!!",
    friends: [],
    villians: [
      {
        text: "Hahahaha! Take this!",
      },
    ],
    damage: -30,
  },

  {
    text: "Choose fighting methods!",
    friends: [],
    answers: [
      {
        text: "Use pranayama breathing for hurricane damage",
        point: -10,
      },
      {
        text: "Run like a speed light and attack tornado",
        point: 10,
      },
      {
        text: "Make snow and cover your body, then attack with freezing wind",
        point: 10,
      },
    ],
    damage: 0,
  },
  {
    text: "Dragon is attacking!!",
    friends: [],
    villians: [
      {
        text: "Hahahaha! Take this!",
      },
    ],
    damage: -50,
  },

  {
    text: "Yeahh! We did it :)",
    friends: [],
    villians: [
      { text: "Are you a transcendental walker!" },
      { text: "My friends will kill you tomorrow! Ahhhhhh…." },
    ],
    answers: [],
    damage: 0,
  },
  {
    text: "Yeah, we won!!!! Tomorrow morning, we have to fight again! It’s 20:00",
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
