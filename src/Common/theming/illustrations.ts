export type IllustrationName =
    | "email-expired"
    | "email-validation"
    | "email-verification"
    | "user-succes"
    | "user-remove"
    | "user-creation"
    | "attachment-succes"
    | "product-order"
    | "cadhoc-card"
    | "cadhoc-check"
    | "cadhoc-success"
    | "gift-opened";

export const IllustrationNames: IllustrationName[] = [
         "email-expired",
         "email-validation",
         "email-verification",
         "user-succes",
         "user-remove",
         "user-creation",
         "attachment-succes",
         "product-order",
         "cadhoc-card",
         "cadhoc-check",
         "cadhoc-success",
         "gift-opened"
       ];

let dictionary = {};

for (let i = 0; i < IllustrationNames.length; i++) {
    const iconName = IllustrationNames[i];
  dictionary[iconName] = require("./icons/illustrations/" + iconName + ".svg");
}

export default dictionary