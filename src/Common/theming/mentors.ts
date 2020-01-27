export type MentorName =
  | "glasses-orange"
  | "glasses-brown"
  | "mouth-straight-orange"
  | "wink-grey"
  | "happy-orange"
  | "confused-orange"
  | "sparkles"
  | "cry"
  | "mentor-surprised";

export const MentorNames: MentorName[] = [
  "glasses-orange",
  "glasses-brown",
  "mouth-straight-orange",
  "wink-grey",
  "happy-orange",
  "confused-orange",
  "sparkles",
  "cry",
   "mentor-surprised"
];

let dictionary = {};

for (let i = 0; i < MentorNames.length; i++) {
  const iconName = MentorNames[i];
  dictionary[iconName] = require("./icons/mentors/" + iconName + ".svg");
}

export default dictionary;
