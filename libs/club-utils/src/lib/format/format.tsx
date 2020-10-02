export const numberToReal = (value: number | string) => {
  if (value) {
    const formattedValue = Number(value).toFixed(2).split('.');
    formattedValue[0] = formattedValue[0].split(/(?=(?:...)*$)/).join('.');
    return formattedValue.join(',');
  }
  return 0;
};

export const zeroPad = (str: number, max: number) =>
  Array(max - Math.floor(Math.log10(str))).join('0') + str;
