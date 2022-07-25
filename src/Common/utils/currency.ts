export const getIntegerValue = (number: number, separator?: string, displaySign?: boolean) => {
  if (number == null || number == 0) return '- -';
  const numberString = Math.trunc(number) + '';
  if (separator && separator.length > 0) {
    return addSeparatorToNumber(numberString, separator);
  } else {
    return `${displaySign ? (number < 0 ? `-${Math.trunc(Math.abs(number))}` : numberString) : numberString}`;
  }
};

export const addSeparatorToNumber = (number: string | number, separator?: string) => {
  return (number + '').replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, separator ? separator : ' ');
};

export const getDecimalValue = (number: number, numberOfDecimal?: number) => {
  if (number == null || number == 0) {
    return ', - -';
  }
  let numberString = number + '';
  if (!numberString.includes('.')) {
    numberString = '00';
  } else {
    numberString = numberString.split('.')[1];
  }
  if (numberOfDecimal != null) {
    numberString = numberString.slice(0, numberOfDecimal);
    while (numberString.length < numberOfDecimal) {
      numberString += '0';
    }
  }
  return ',' + numberString;
};
