const DASHCASE_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
const FIRST_LETTER_CAPETILIZED = /^[A-Z\u00C0-\u00D6\u00D8-\u00DE]{1}/i;

const inputRequired = name => {
  return value => (/.+/.test(value) ? true : `${name} is required`);
};

const toDashCase = str => {
  // Check if first letter is capetilize
  if (str.match(FIRST_LETTER_CAPETILIZED)) {
    str = str.replace(FIRST_LETTER_CAPETILIZED, function (match) {
      return match.toLowerCase();
    });
  }

  return str.replace(DASHCASE_REGEX, function (match) {
    return '-' + match.toLowerCase();
  });
};

module.exports = {
  inputRequired,
  toDashCase,
};
