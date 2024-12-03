interface Triangle {
  type: 'triangle';
  base: number;
  height: number;
}

interface Rectangle {
  type: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  type: 'circle';
  radius: number;
}

type Figure = Triangle | Rectangle | Circle;

function getFigureInfo(figure: Figure): string {
  if (figure.type === 'triangle') {
    const area = 0.5 * figure.base * figure.height;
    return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${area}`;
  } else if (figure.type === 'rectangle') {
    const area = figure.width * figure.height;
    return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${area}`;
  } else if (figure.type === 'circle') {
    const area = Math.PI * Math.pow(figure.radius, 2);
    return `Circle with radius ${figure.radius} has an area of ${area.toFixed(2)}`;
  }
  return 'Invalid figure type';
}

const triangle: Triangle = { type: 'triangle', base: 5, height: 10 };
const rectangle: Rectangle = { type: 'rectangle', width: 8, height: 14 };
const circle: Circle = { type: 'circle', radius: 8 };

console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));
