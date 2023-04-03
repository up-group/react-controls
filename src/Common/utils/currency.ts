export const getIntegerValue = (number: number, separator?: string) => {
  if (number == null || number == 0) {
    return '- -';
  }
  const integerValue = Math.trunc(number) + '';
  const numberString = `${number < 0 && number > -1 ? `-${integerValue}` : integerValue}`;
  return addSeparatorToNumber(numberString, separator);
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
