describe("Set", () => {
  describe("ctor", () => {
    describe("array ctor", () => {
      it("basic", () => {
        const set1 = new Set([1, 2, 3]);
        expect(set1.has(1)).toBe(true);
        expect(set1.has(2)).toBe(true);
        expect(set1.has(3)).toBe(true);
        expect(set1.has(4)).toBe(false);
        expect(set1.size).toBe(3);
      });

      it("automatically removes doublons", () => {
        const set1 = new Set([1, 2, 2, 2, 3, 2]);
        expect(set1.has(1)).toBe(true);
        expect(set1.has(2)).toBe(true);
        expect(set1.has(3)).toBe(true);
        expect(set1.has(4)).toBe(false);
        expect(set1.size).toBe(3);
      });

      it("experiment", () => {
        const existingValue = {
          href: "https://www.facebook.com/564057640613743",
          initial_source: "facebook",
          is_complete: false,
          source: "facebook",
          name: "المرصد الشعبي لمحاربة الفساد",
          uri: "https://www.facebook.com/564057640613743"
        };

        const newValue = {
          language: "",
          parentCreatedAt: "2019-10-29T11:46:06.000Z",
          local_engagement: 0,
          content: "",
          source: "facebook",
          name: "المرصد الشعبي لمحاربة الفساد",
          initial_source: "facebook",
          is_complete: false,
          context: "discovered",
          description: null,
          uri: "https://www.facebook.com/564057640613743",
          href: "https://www.facebook.com/Marsad.Shaabi/"
        };

        const uniqueKeys = new Set([
          ...Object.keys(existingValue),
          ...Object.keys(newValue)
        ]);
        expect([...uniqueKeys]).toEqual([
          "href",
          "initial_source",
          "is_complete",
          "source",
          "name",
          "uri",
          "language",
          "parentCreatedAt",
          "local_engagement",
          "content",
          "context",
          "description"
        ]);
      });
    });

    describe("edge cases", () => {
      it("objects", () => {
        const set1 = new Set([{ foo: "bar" }, { bar: "baz" }, { baz: "foo" }]);
        expect(set1.size).toBe(3);
      });

      it("set of set", () => {
        const set1 = new Set([1, 2, 2, 2, 3, 2]);
        const set2 = new Set(set1);
        expect([...set2]).toEqual([1, 2, 3]);
      });
    });
  });
});
