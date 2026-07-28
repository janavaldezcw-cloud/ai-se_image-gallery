import { colorMap } from "./colorMap.js";

const decks = [
  {
    id: "1",
    name: "Spanish Basics",
    color: colorMap.peach,
    cards: [
      { id: "1", front: "Hello", back: "Hola" },
      { id: "2", front: "Goodbye", back: "Adiós" },
      { id: "3", front: "Thank you", back: "Gracias" },
      { id: "4", front: "Please", back: "Por favor" },
    ],
  },
  {
    id: "2",
    name: "World Capitals",
    color: colorMap.blue,
    cards: [
      { id: "1", front: "France", back: "Paris" },
      { id: "2", front: "Japan", back: "Tokyo" },
      { id: "3", front: "Egypt", back: "Cairo" },
    ],
  },
];

export { decks };
