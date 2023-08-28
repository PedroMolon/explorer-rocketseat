export function calcIMC(weight, height) {
  return (weight / Math.pow((height/100), 2)).toFixed(2);
}

export function notNumber(value) {
  return isNaN(value) || value == "";
}