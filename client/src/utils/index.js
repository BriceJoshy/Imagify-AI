import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random()) * surpriseMePrompts.length;
  const randomprompt = surpriseMePrompts[randomIndex];
  // to check if same random prompt is two times in a row
  if (randomprompt === prompt) return getRandomPrompt(prompt);

  return randomprompt;
}
