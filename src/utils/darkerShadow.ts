const hueToRgb = (p: number, q: number, t: number): number => {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
};

const hslToRgba = (
  h: number,
  s: number,
  l: number,
  a: number = 1,
  darkerPercentage: number = 0
) => {
  l = l - l * (darkerPercentage / 100); // decrease lightness by the specified percentage

  // Ensure that lightness doesn't exceed the boundaries
  if (l < 0) l = 0;
  if (l > 100) l = 100;

  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
    b * 255
  )}, ${a})`;
};

export const darkerShadow = (
  choice: string,
  opacity: number,
  darkness: number
) => {
  // Finding the index of the last first ')' bracket, so we can can cut the second color out
  const indexOfFirstClosingBracket = choice.indexOf(')');

  // Cutting the second color out
  const firstColor = choice.substring(0, indexOfFirstClosingBracket);

  const firstColorNumbers = firstColor.substring(4).split(',');

  const mappedFirstColorNumbers = firstColorNumbers.map((number) => {
    const newNumber = [];
    for (let char of number) {
      if (!Number.isNaN(+char) && char !== ' ') {
        newNumber.push(char);
      }
    }
    return +newNumber.join('');
  });

  const hValue = mappedFirstColorNumbers[0];
  const sValue = mappedFirstColorNumbers[1];
  const lValue = mappedFirstColorNumbers[2];

  // console.log(hslToRgba(hValue, sValue, lValue, opacity));
  return hslToRgba(hValue, sValue, lValue, opacity, darkness);
};
