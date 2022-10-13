export const evaluateFraction: (val: number, tot: number) => number = (value, total) => 
    Math.round((value / total) * 1000) / 10
