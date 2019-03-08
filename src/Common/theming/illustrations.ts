export type IllustrationName =
    | "email-expired"
    | "email-validation"
    | "email-verification"
    | "user-succes";

export const IllustrationNames: IllustrationName[] = [
         "email-expired",
         "email-validation",
         "email-verification",
         "user-succes",
       ];

let dictionary = {};

for (let i = 0; i < IllustrationNames.length; i++) {
    const iconName = IllustrationNames[i];
  dictionary[iconName] = require("./icons/illustrations/" + iconName + ".svg");
}

export default dictionary