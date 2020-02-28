export type IllustrationName =
    | "email-expired"
    | "email-validation"
    | "email-verification"
    | "user-succes"
    | "user-remove"
    | "user-creation"
    | "attachment-succes"
    | "product-order"
    | "card-new"
    | "cadhoc-card"
    | "cadhoc-check"
    | "cadhoc-success"
    | "gift-opened"
    | "up-dej-card"
    | "up-dej-card-add"
    | "up-dej-card-transaction"
    | "user-avatar"
    | "card-4c";

export const IllustrationNames: IllustrationName[] = [
         "email-expired",
         "email-validation",
         "email-verification",
         "user-succes",
         "user-remove",
         "user-creation",
         "attachment-succes",
         "product-order",
         "card-new",
         "cadhoc-card",
         "cadhoc-check",
         "cadhoc-success",
         "gift-opened",
         "up-dej-card",
         "up-dej-card-add",
         "up-dej-card-transaction",
         "user-avatar",
         "card-4c"
       ];

let dictionary = {};

for (let i = 0; i < IllustrationNames.length; i++) {
    const iconName = IllustrationNames[i];
  dictionary[iconName] = require("./icons/illustrations/" + iconName + ".svg");
}

export default dictionary