const kaphaStory = [
  {
    friends: [],
    text: "Rise and Shine! Get up from bed -",
    damage: 0,
    answers: [
      {
        text: "6:00 AM",
        point: 10,
      },
      {
        text: "7:00 AM",
        point: 0,
      },
      {
        text: "8:00 AM",
        point: -10,
      },
    ],
  },
  {
    friends: [],
    text: "Do you want to transcend ?",
    damage: 0,
    answers: [
      {
        text: "Yes, of course",
        point: 10,
      },
      {
        text: "No, I am hungry",
        point: -20,
      },
    ],
  },
  {
    text: "What's for breakfast?",
    friends: [],

    damage: 0,
    answers: [
      {
        text: "Cereal, cold milk",
        point: -10,
        image: "/foods/15_burger.png",
      },
      {
        text: "Fresh fruit smoothie",
        point: 10,
        image: "/foods/15_burger.png",
      },
      {
        text: "Oatmeal, warm tea",
        point: 5,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Skip breakfast",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Time for morning exercises! What's the plan ?",
    friends: [],
    villains: [],
    damage: 0,
    random_damage: {
      text: "You have twisted your ankle",
      damage: -20,
    },
    answers: [
      {
        text: "Intense cardio workout",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Yoga session",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Short brisk walk",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Heading to class! Choose a study partner:",
    friends: [],
    villains: [],
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
    text: "Uh-oh, late for class! How to handle the situation?",
    friends: [],
    villains: [],
    damage: 0,
    random_damage: {
      text: "while you were running you have twisted your ankle",
      damage: -20,
    },
    answers: [
      {
        text: "Rush in and apologize!",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Enter calmly and take a seat",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Skip the class and come in the next one",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Need an experienced partner for group project work",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Wise Pitta senior",
        point: 5,
        sprite: "vata_hunter",
        type: "character",
      },
      {
        text: "Friendly Kapha junior",
        point: 0,
        sprite: "pitta_huntress",
        type: "character",
      },
      {
        text: "Seasoned Vata graduate",
        point: 10,
        sprite: "pitta_huntress",
        type: "character",
      },
    ],
  },
  {
    text: "Midday recharge! What's on the menu?",
    friends: [],
    villains: [],
    damage: 0,
    random_damage: {
      text: "You've got food poisoning",
      damage: -10,
    },
    answers: [
      {
        text: "Spicy chips",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Fresh salad",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Sushi rolls",
        point: 5,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Skip meals",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "It's the debate club today! What strategy to use?",
    friends: [],
    villains: [],
    damage: 0,
    random_damage: {
      text: "while you were debating, you got into fight with your clubmate",
      damage: -20,
    },
    answers: [
      {
        text: "Present strong arguments aggressively",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Employ a balanced and assertive stance",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Stay quiet and listen",
        point: 5,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Oh no there is Steven? Who? The school bully Steven He",
    friends: [],
    villains: [
      {
        sprite: "wizard",
        text: "Stop you failure! Gimme all of your money, or I will beat you down",
      },
    ],
    damage: -20,
    answers: [
      {
        text: "Give him money",
        point: 0,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Run",
        point: 0,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Fight",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Time for a break! Choose an activity",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Speed reading /playing video game/watching",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Meditation",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Light stretching",
        point: 5,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    friends: [],
    text: "Do you want to transcend ?",
    damage: 0,
    answers: [
      {
        text: "Yes, of course",
        point: 20,
      },
      {
        text: "Not for now",
        point: -20,
      },
    ],
  },
  {
    text: "Dinner Time! What's on the menu?",
    friends: [],
    villains: [],
    damage: 0,
    random_damage: {
      text: "Oh, you ate something that you are allergic",
      damage: -15,
    },
    answers: [
      {
        text: "Spicy chips",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Fresh salad",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Sushi rolls",
        point: 5,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Skip meal",
        point: 5,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "Exams aced! Tomorrow's prep:",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "Revise all notes for upcoming class",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Plan a brief review session",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
  {
    text: "It’s time to go to bed!",
    friends: [],
    villains: [],
    damage: 0,
    answers: [
      {
        text: "In bed before 10:00 PM",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "In bed before 11:00 PM",
        point: 10,
        image: "/foods/85_roastedchicken.png",
      },
      {
        text: "Sleep after midnight",
        point: -10,
        image: "/foods/85_roastedchicken.png",
      },
    ],
  },
];
export default kaphaStory;
