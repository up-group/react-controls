export type MentorName =
  | "glasses-orange"
  | "mouth-straight-orange"
  | "wink-grey"
  | "sparkles";

export const MentorNames: MentorName[] = [
         "glasses-orange",
         "mouth-straight-orange",
         "wink-grey",
         "sparkles"
       ];

let dictionary = {};

for (let i = 0; i < MentorNames.length; i++) {
    const iconName = MentorNames[i];
  dictionary[iconName] = require("./icons/mentors/" + iconName + ".svg");
}

export default dictionary