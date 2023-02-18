export const sum = (a: number, b: number): number => {
  return a + b;
};

export const diff = (a: number, b: number): number => {
  if (a >= b) {
    return a - b;
  } else {
    return b - a;
  }
};

export const product = (a: number, b: number): number => {
  return a * b;
};

export const recursiveFibonacci = (n: number): number => {
  if (n <= 1) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

export const iterativeFibonacci = (n: number): number => {
  if (n < 1) {
    return 0;
  }
  let a = 0;
  let b = 1;

  for (let i = 1; i < n; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
};

export const binetFibonacci = (n: number): number => {
  const phi = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(phi, n) / Math.sqrt(5));
};

export const reverseString = (str: string): string => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
};

export const reverseWord = (str: string): string => {
  let newStr = '';

  newStr = str
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
  return newStr;
};
