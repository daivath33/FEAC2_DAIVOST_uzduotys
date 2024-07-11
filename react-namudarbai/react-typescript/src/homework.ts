export function sum(number1: number, number2: number): number {
  return number1 + number2;
}

interface Person {
  name: string;
  age: number;
}

export function greet(person: Person): string {
  return "Hello, " + person.name + "!";
}

export const numbers: number[] = [12, 13, 14, 45];

export function getFirstElement(numbers: number[]): number {
  return numbers[0];
}

export enum Color {
  Red,
  Green,
  Blue,
}

export function getColorName(color: Color): string {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Green:
      return "Green";
    case Color.Blue:
      return "Blue";
    default:
      return "Unknown color";
  }
}
