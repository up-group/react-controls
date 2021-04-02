export type IllustrationName =
  | "logo-up"
  | "logo-up-white"
  | "email-expired"
  | "email-validation"
  | "email-verification"
  | "user-succes"
  | "user-remove"
  | "user-creation"
  | "attachment-succes"
  | "product-order"
  | "card-new"
  | "load-file"
  | "cadhoc-card"
  | "cadhoc-check"
  | "cadhoc-success"
  | "gift-opened"
  | "up-dej-card"
  | "up-dej-card-add"
  | "up-dej-card-transaction"
  | "user-avatar"
  | "card-4c"
  | "visa"
  | "mastercard"
  | "maestro"
  | "user-zen"
  | "idea"
  | "404"
  | "search-avatar"
  | "search-avatar-sad"
  | "search-glass"
  | "card-orange-add"
  | "card-orange-trans";

export const IllustrationNames: IllustrationName[] = [
  "logo-up",
  "logo-up-white",
  "email-expired",
  "email-validation",
  "email-verification",
  "user-succes",
  "user-remove",
  "user-creation",
  "attachment-succes",
  "product-order",
  "card-new",
  "load-file",
  "cadhoc-card",
  "cadhoc-check",
  "cadhoc-success",
  "gift-opened",
  "up-dej-card",
  "up-dej-card-add",
  "up-dej-card-transaction",
  "user-avatar",
  "card-4c",
  "visa",
  "mastercard",
  "maestro",
  "user-zen",
  "idea",
  "404",
  "search-avatar",
  "search-avatar-sad",
  "search-glass",
  "card-orange-add",
  "card-orange-trans"
];

let dictionary = {};

for (let i = 0; i < IllustrationNames.length; i++) {
  const iconName = IllustrationNames[i];
  dictionary[iconName] = require("./icons/illustrations/" + iconName + ".svg");
}

export default dictionary;
