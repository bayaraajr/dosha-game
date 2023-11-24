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
        image: "/foods/105_milk.png",
      },
      {
        text: "Fresh fruit smoothie",
        point: 10,
        image: "/foods/103_monster_cocktail.png",
      },
      {
        text: "Oatmeal, warm tea",
        point: 5,
        image: "/foods/106_tea.png",
      },
      {
        text: "Skip breakfast",
        point: -10,
        image: "/foods/104_skip.png",
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
        image: "/foods/107_cardio.png",
      },
      {
        text: "Yoga session",
        point: 10,
        image: "/foods/108_yoga.png",
      },
      {
        text: "Short brisk walk",
        point: 10,
        image: "/foods/109_walk.png",
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
        image: "/characters/vata_hunter/Hurt.png",
      },
      {
        text: "Pitta huntress",
        point: 0,
        sprite: "pitta_huntress",
        type: "character",
        image: "/characters/pitta_huntress/Hurt.png",
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
        image: "/characters/action/1_rush.png",
      },
      {
        text: "Enter calmly and take a seat",
        point: 10,
        image: "/characters/action/2_take_seat.png",
      },
      {
        text: "Skip the class and come in the next one",
        point: -10,
        image: "/characters/action/3_skip.png",
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
        image: "/foods/110_chips.png",
      },
      {
        text: "Fresh salad",
        point: 10,
        image: "/foods/111_salad.png",
      },
      {
        text: "Sushi rolls",
        point: 5,
        image: "/foods/97_sushi.png",
      },
      {
        text: "Skip meals",
        point: -10,
        image: "/foods/104_skip.png",
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
        image: "/characters/action/4_strong.png",
      },
      {
        text: "Employ a balanced and assertive stance",
        point: 10,
        image: "/characters/action/5_balance.png",
      },
      {
        text: "Stay quiet and listen",
        point: 5,
        image: "/characters/action/6_quite.png",
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
        image: "/characters/action/7_give_money.png",
      },
      {
        text: "Run",
        point: 0,
        image: "/characters/action/1_rush.png",
      },
      {
        text: "Fight",
        point: -10,
        image: "/characters/action/8_fight.png",
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
        image: "/characters/action/9_playing_game.png",
      },
      {
        text: "Meditation",
        point: 10,
        image: "/characters/action/10_meditation.png",
      },
      {
        text: "Light stretching",
        point: 5,
        image: "/characters/action/11_stretching.png",
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
        image: "/foods/110_chips.png",
      },
      {
        text: "Fresh salad",
        point: 10,
        image: "/foods/111_salad.png",
      },
      {
        text: "Sushi rolls",
        point: 5,
        image: "/foods/97_sushi.png",
      },
      {
        text: "Skip meal",
        point: 5,
        image: "/foods/104_skip.png",
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
        image: "/characters/action/12_revise all notes.png",
      },
      {
        text: "Plan a brief review session",
        point: 10,
        image: "/characters/action/13_review.png",
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
        image: "/characters/action/14_bed.png",
      },
      {
        text: "In bed before 11:00 PM",
        point: 10,
        image: "/characters/action/14_bed.png",
      },
      {
        text: "Sleep after midnight",
        point: -10,
        image: "/characters/action/14_bed.png",
      },
    ],
  },
];
export default kaphaStory;
