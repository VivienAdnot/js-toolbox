describe('isNaN', () => {
  describe('true', () => {
    it('after failed parseInt', () => {
      const result = isNaN(parseInt('boom', 10));
      expect(result).toBe(true);
    });
  });

  describe('false', () => {
    it('after successful parseInt', () => {
      const result = isNaN(parseInt('50', 10));
      expect(result).toBe(false);
    });
  });
});
