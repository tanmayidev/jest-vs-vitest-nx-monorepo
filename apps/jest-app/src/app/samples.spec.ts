import {
  sum,
  diff,
  product,
  iterativeFibonacci,
  recursiveFibonacci,
  binetFibonacci,
  reverseString,
  reverseWord,
} from './samples';

const cases = [...Array(1000).keys()];

describe('tests', () => {
  test.each(cases)('check obj toEqual', () => {
    const obj = {
      name: 'ABC',
      type: 'company',
      members: {
        employees: 100,
        contributors: 500,
      },
    };

    const testObj = {
      name: 'ABC',
      type: 'company',
      members: {
        employees: 100,
        contributors: 500,
      },
    };

    expect(obj).toEqual(testObj);
  });

  test.each(cases)('floating point number - use toBeCloseTo instead', () => {
    const result = 9.31 + 9.2;

    expect(result).toBeCloseTo(18.51);
  });
});

describe('sum', () => {
  test.each(cases)('test1', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test.each(cases)('test2', () => {
    expect(sum(4, 5)).not.toEqual(8);
  });
});

describe('diff', () => {
  test.each(cases)('test1', () => {
    expect(diff(10, 5)).toEqual(5);
  });

  test.each(cases)('test1', () => {
    expect(diff(5, 15)).toEqual(10);
  });

  test.each(cases)('test2', () => {
    expect(diff(10, 5)).not.toEqual(6);
  });
});

describe('product', () => {
  test.each(cases)('test1', () => {
    expect(product(4, 5)).toEqual(20);
  });

  test.each(cases)('test2', () => {
    expect(product(4, 5)).not.toEqual(21);
  });
});

describe('iterative fibonacci', () => {
  test.each(cases)('test1', () => {
    expect(iterativeFibonacci(9)).toEqual(34);
  });

  test.each(cases)('test2', () => {
    expect(iterativeFibonacci(9)).not.toEqual(33);
  });

  test.each(cases)('test3', () => {
    expect(iterativeFibonacci(10)).toEqual(55);
  });

  test.each(cases)('test4', () => {
    expect(iterativeFibonacci(11)).toEqual(89);
  });

  test.each(cases)('test5', () => {
    expect(iterativeFibonacci(12)).toEqual(144);
  });

  test.each(cases)('test6', () => {
    expect(iterativeFibonacci(20)).toEqual(6765);
  });
});

describe('recursive fibonacci', () => {
  test.each(cases)('test1', () => {
    expect(recursiveFibonacci(9)).toEqual(34);
  });

  test.each(cases)('test2', () => {
    expect(recursiveFibonacci(9)).not.toEqual(33);
  });

  test.each(cases)('test3', () => {
    expect(recursiveFibonacci(10)).toEqual(55);
  });

  test.each(cases)('test4', () => {
    expect(recursiveFibonacci(11)).toEqual(89);
  });

  test.each(cases)('test5', () => {
    expect(recursiveFibonacci(12)).toEqual(144);
  });

  test.each(cases)('test6', () => {
    expect(recursiveFibonacci(20)).toEqual(6765);
  });
});

describe("binet's fibonacci formual", () => {
  test.each(cases)('test1', () => {
    expect(binetFibonacci(9)).toEqual(34);
  });

  test.each(cases)('test2', () => {
    expect(binetFibonacci(9)).not.toEqual(33);
  });

  test.each(cases)('test3', () => {
    expect(binetFibonacci(10)).toEqual(55);
  });

  test.each(cases)('test4', () => {
    expect(binetFibonacci(11)).toEqual(89);
  });

  test.each(cases)('test5', () => {
    expect(binetFibonacci(12)).toEqual(144);
  });

  test.each(cases)('test6', () => {
    expect(binetFibonacci(20)).toEqual(6765);
  });
});

describe('reverse string', () => {
  test.each(cases)('test1', () => {
    expect(reverseString('Reverse string program')).toBe(
      'margorp gnirts esreveR'
    );
  });

  test.each(cases)('test2', () => {
    expect(reverseString('')).toBe('');
  });

  test.each(cases)('test3', () => {
    expect(reverseString('reverseastring')).toBe('gnirtsaesrever');
  });

  test.each(cases)('test4', () => {
    expect(reverseString('jake')).toBe('ekaj');
  });

  test.each(cases)('test5', () => {
    expect(reverseString('Technology')).toBe('ygolonhceT');
  });
});

describe('reverse word', () => {
  test.each(cases)('test1', () => {
    expect(reverseWord('Reverse string program')).toBe(
      'esreveR gnirts margorp'
    );
  });

  test.each(cases)('test2', () => {
    expect(reverseWord('')).toBe('');
  });

  test.each(cases)('test3', () => {
    expect(reverseWord('reverseastring')).toBe('gnirtsaesrever');
  });

  test.each(cases)('test4', () => {
    expect(reverseWord('this is a sample string')).toBe(
      'siht si a elpmas gnirts'
    );
  });

  test.each(cases)('test5', () => {
    expect(reverseWord('getting good at coding needs a lot of practice')).toBe(
      'gnitteg doog ta gnidoc sdeen a tol fo ecitcarp'
    );
  });
});

/*

describe('tests', () => {
  it('check obj toEqual', () => {
    const obj = {
      name: 'ABC',
      type: 'company',
      members: {
        employees: 100,
        contributors: 500,
      },
    };

    const testObj = {
      name: 'ABC',
      type: 'company',
      members: {
        employees: 100,
        contributors: 500,
      },
    };

    expect(obj).toEqual(testObj);
  });

  it('floating point number - use toBeCloseTo instead', () => {
    const result = 9.31 + 9.2;

    expect(result).toBeCloseTo(18.51);
  });
});

describe('sum', () => {
  it('test1', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('test2', () => {
    expect(sum(4, 5)).not.toEqual(8);
  });
});

describe('diff', () => {
  it('test1', () => {
    expect(diff(10, 5)).toEqual(5);
  });

  it('test1', () => {
    expect(diff(5, 15)).toEqual(10);
  });

  it('test2', () => {
    expect(diff(10, 5)).not.toEqual(6);
  });
});

describe('product', () => {
  it('test1', () => {
    expect(product(4, 5)).toEqual(20);
  });

  it('test2', () => {
    expect(product(4, 5)).not.toEqual(21);
  });
});

describe('iterative fibonacci', () => {
  it('test1', () => {
    expect(iterativeFibonacci(9)).toEqual(34);
  });

  it('test2', () => {
    expect(iterativeFibonacci(9)).not.toEqual(33);
  });

  it('test3', () => {
    expect(iterativeFibonacci(10)).toEqual(55);
  });

  it('test4', () => {
    expect(iterativeFibonacci(11)).toEqual(89);
  });

  it('test5', () => {
    expect(iterativeFibonacci(12)).toEqual(144);
  });

  it('test6', () => {
    expect(iterativeFibonacci(20)).toEqual(6765);
  });
});

describe('recursive fibonacci', () => {
  it('test1', () => {
    expect(recursiveFibonacci(9)).toEqual(34);
  });

  it('test2', () => {
    expect(recursiveFibonacci(9)).not.toEqual(33);
  });

  it('test3', () => {
    expect(recursiveFibonacci(10)).toEqual(55);
  });

  it('test4', () => {
    expect(recursiveFibonacci(11)).toEqual(89);
  });

  it('test5', () => {
    expect(recursiveFibonacci(12)).toEqual(144);
  });

  it('test6', () => {
    expect(recursiveFibonacci(20)).toEqual(6765);
  });
});

describe("binet's fibonacci formual", () => {
  it('test1', () => {
    expect(binetFibonacci(9)).toEqual(34);
  });

  it('test2', () => {
    expect(binetFibonacci(9)).not.toEqual(33);
  });

  it('test3', () => {
    expect(binetFibonacci(10)).toEqual(55);
  });

  it('test4', () => {
    expect(binetFibonacci(11)).toEqual(89);
  });

  it('test5', () => {
    expect(binetFibonacci(12)).toEqual(144);
  });

  it('test6', () => {
    expect(binetFibonacci(20)).toEqual(6765);
  });
});

describe('reverse string', () => {
  it('test1', () => {
    expect(reverseString('Reverse string program')).toBe(
      'margorp gnirts esreveR'
    );
  });

  it('test2', () => {
    expect(reverseString('')).toBe('');
  });

  it('test3', () => {
    expect(reverseString('reverseastring')).toBe('gnirtsaesrever');
  });

  it('test4', () => {
    expect(reverseString('jake')).toBe('ekaj');
  });

  it('test5', () => {
    expect(reverseString('Technology')).toBe('ygolonhceT');
  });
});

describe('reverse word', () => {
  it('test1', () => {
    expect(reverseWord('Reverse string program')).toBe(
      'esreveR gnirts margorp'
    );
  });

  it('test2', () => {
    expect(reverseWord('')).toBe('');
  });

  it('test3', () => {
    expect(reverseWord('reverseastring')).toBe('gnirtsaesrever');
  });

  it('test4', () => {
    expect(reverseWord('this is a sample string')).toBe(
      'siht si a elpmas gnirts'
    );
  });

  it('test5', () => {
    expect(reverseWord('getting good at coding needs a lot of practice')).toBe(
      'gnitteg doog ta gnidoc sdeen a tol fo ecitcarp'
    );
  });
});

*/
