export type MentorName =
  | "glasses-orange"
  | "glasses-brown"
  | "mouth-straight-orange"
  | "wink-grey"
  | "happy-orange"
  | "confused-orange"
  | "sparkles"
  | "cry"
  | "mentor-surprised"
  | "sorry-orange";

export const MentorNames: MentorName[] = [
  "glasses-orange",
  "glasses-brown",
  "mouth-straight-orange",
  "wink-grey",
  "happy-orange",
  "confused-orange",
  "cry",
  "mentor-surprised",
  "sorry-orange",
  "sparkles"
];

let dictionary = {};

for (let i = 0; i < MentorNames.length; i++) {
  const iconName = MentorNames[i];
  dictionary[iconName] = require("./icons/mentors/" + iconName + ".svg");
}

export default dictionary;
