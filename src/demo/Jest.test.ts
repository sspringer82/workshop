function add(a: any, b: any): number {
  if (typeof a === 'string') {
    throw new Error('whoops');
  }
  return a + b;
}

function doSomethingAsync() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('ok');
    }, 100);
  });
}

function doIt(cb: any) {
  cb('hallo');
}

function randomNumberGenerator() {
  return Math.random();
}

describe('add', () => {
  beforeEach(() => {});
  beforeAll(() => {});
  afterEach(() => {});
  afterAll(() => {});

  describe('add numbers', () => {
    it('should add two numbers', () => {
      // arrange
      const a = 1;
      const b = 2;
      const expected = 3;

      // act
      const result = add(a, b);

      // assert
      expect(result).toBe(expected);
    });
  });

  it('should throw an exception if a string is provided', () => {
    expect(() => add('1', '2')).toThrow();
  });

  it('should work async', (done) => {
    const result = doSomethingAsync().then((data) => {
      expect(result).toBe('ok');
      done();
    });
  });

  it('should work async/await', async () => {
    const result = await doSomethingAsync();
    expect(result).toBe('ok');
  });

  it('should work with callbacks', () => {
    const spy = jest.fn();

    doIt(spy);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('hallo');
  });

  it('should mock', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.123);

    const result = randomNumberGenerator();

    expect(result).toBe(0.123);
    expect(Math.random).toHaveBeenCalled();
  });
});
