describe("Set", () => {
  describe("add will only insert distinct values", () => {
    it("numbers", () => {
      const set1 = new Set();
      set1.add(1);
      set1.add(2);
      expect(set1.has(1)).toBe(true);
      expect(set1.size).toBe(2);
    });

    it("string", () => {
      const set1 = new Set();
      set1.add("foo");
      set1.add("foo");
      set1.add("bar");
      set1.add("bar");
      expect(set1.size).toBe(2);
    });

    describe("edge cases", () => {
      // /!\ /!\ /!\
      it("objects remove doublons DO NOT WORK", () => {
        const set1 = new Set();
        set1.add({ foo: "bar" });
        set1.add({ foo: "bar" });
        set1.add({ foo: "baz" });
        set1.add({ foo: "baz" });
        // /!\ /!\ /!\
        expect(set1.size).toBe(4);
      });
    });
  });
});
