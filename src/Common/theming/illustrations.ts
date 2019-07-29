export type IllustrationName =
    | "email-expired"
    | "email-validation"
    | "email-verification"
    | "user-succes"
    | "user-creation"
    | "attachment-succes"
    | "product-order";

export const IllustrationNames: IllustrationName[] = [
         "email-expired",
         "email-validation",
         "email-verification",
         "user-succes",
         "user-creation",
         "attachment-succes",
         "product-order"
       ];

let dictionary = {};

for (let i = 0; i < IllustrationNames.length; i++) {
    const iconName = IllustrationNames[i];
  dictionary[iconName] = require("./icons/illustrations/" + iconName + ".svg");
}

export default dictionary