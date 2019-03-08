export type MentorName =
  | "glasses-orange"
  | "mouth-straight-orange"
  | "wink-grey";

export const MentorNames: MentorName[] = [
         "glasses-orange",
         "mouth-straight-orange",
         "wink-grey",
       ];

let dictionary = {};

for (let i = 0; i < MentorNames.length; i++) {
    const iconName = MentorNames[i];
  dictionary[iconName] = require("./icons/mentors/" + iconName + ".svg");
}

export default dictionary