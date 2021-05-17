describe("es6 Map", () => {
  describe("set", () => {
    describe("Map can have mixed values types", () => {
      const myMap = new Map();

      it("string", () => {
        myMap.set("foo", "bar");
        expect(myMap.get("foo")).toBe("bar");
      });

      it("object", () => {
        const valueObj = { foo: { bar: "baz" } };
        myMap.set(1, valueObj);

        expect(myMap.get(1)).toEqual(valueObj);
        expect(myMap.size).toBe(2);
      });
    });

    it("set on existing key replaces value", () => {
      const myMap = new Map();
      myMap.set("foo", "bar");
      expect(myMap.get("foo")).toBe("bar");
      myMap.set("foo", "baz");
      expect(myMap.get("foo")).toBe("baz");
    });

    describe("edge cases", () => {
      it("objects as keys DO NOT WORK", () => {
        const myMap = new Map();
        myMap.set({ foo: "bar" }, 1);
        myMap.set({ bar: "baz" }, 2);
        myMap.set({ foo: "bar" }, 3);

        // /!\ /!\ /!\
        expect(myMap.size).toBe(3);
        // /!\ /!\ /!\
        expect(myMap.get({ foo: "bar" })).toBeUndefined();
        // /!\ /!\ /!\
        expect(myMap.get({ bar: "baz" })).toBeUndefined();
      });
    });
  });
});
