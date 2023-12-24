export const prettify = (string: string): string => {
  const braces: boolean[] = [];
  for (let i = 0; i < string.length; i++) {
    if (['{', '['].includes(string[i])) {
      if (string[i] === '[' && string[i + 1] === ']') {
        i += 2;
      } else {
        braces.push(true);
        string =
          string.slice(0, i + 1) +
          `\n${'\t'.repeat(braces.length)}` +
          string.slice(i + 1);
        i += 1;
      }
    }
    if (['}', ']'].includes(string[i])) {
      braces.pop();

      string =
        string.slice(0, i) +
        `\n${'\t'.repeat(braces.length)}` +
        string.slice(i);
      i = i + braces.length + 1;
    }
    if (',' === string[i]) {
      string =
        string.slice(0, i + 1) +
        `\n${'\t'.repeat(braces.length)}` +
        string.slice(i + 1);
      i += 1;
    }
    if ([':'].includes(string[i])) {
      string = string.slice(0, i + 1) + ' ' + string.slice(i + 1);
      i += 1;
    }
    if ([',"'].includes(string[i] + string[i + 1])) {
      string = string.slice(0, i + 1) + ' ' + string.slice(i + 1);
      i += 1;
    }
    if (string[i] === '\\' && string[i + 1] === 'n') {
      string = string.slice(0, i) + ' ' + string.slice(i + 2);
    }
  }
  return string;
};
