describe("Set", () => {
  describe("ctor", () => {
    it("numbers", () => {
      const set1 = new Set([1, 2, 3]);
      expect(set1.has(2)).toBe(true);
    });

    it("string", () => {
      const set1 = new Set(["toto", "tata", "titi"]);
      expect(set1.has("toto")).toBe(true);
      expect(set1.has("TOTO")).toBe(false);
      expect(set1.has("tutu")).toBe(false);
    });

    it("respect type", () => {
      const set1 = new Set([1, 2, 3]);
      expect(set1.has("2")).toBe(false);
    });

    it("objects DO NOT WORK", () => {
      const set1 = new Set([{ foo: "bar" }, { bar: "baz" }, { baz: "foo" }]);
      expect(set1.size).toBe(3);
      // /!\ /!\ /!\ /!\ /!\ /!\
      expect(set1.has({ foo: "bar" })).toBe(false);
    });
  });
});
