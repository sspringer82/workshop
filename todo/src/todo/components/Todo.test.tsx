describe('<Todo>', () => {
  describe('add', () => {
    let add;

    beforeEach(() => {
      // arrange
      add = (a, b) => a + b;
    });

    it('should add 1 and 1 and return 2', () => {
      // act
      const result = add(1, 1);
      // assert
      expect(result).toBe(2);
      expect(result).not.toBe(3);
      expect(result).toBeGreaterThan(1);
      expect(result).toBeLessThan(3);
    });
    it('should add 2 and 2 and return 4', () => {
      // act
      const result = add(2, 2);
      // assert
      expect(result).toBe(4);
    });
  });
});
