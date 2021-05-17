// return a shallow copy of some elements of an array (without changing original array)
// the slice returned is a shallow copy of the original one (depth 0)

describe("slice", () => {
  describe("positive index", () => {
    describe("with end limit", () => {
      it("returns an extract elements of the array, from index 2 to 4, excluding right edge", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(2, 4);

        // excluding right edge
        expect(elements).toEqual(["baz", "bim"]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });

    describe("without end limit", () => {
      it("returns an extract elements of the array, from index 2 to end", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(2);

        expect(elements).toEqual(["baz", "bim", "boom", "bobaz"]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });

    describe("with end limit overflow", () => {
      it("returns an extract elements of the array, from index 2 to end if end index overflow", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(2, 10);

        expect(elements).toEqual(["baz", "bim", "boom", "bobaz"]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });

    describe("empty array if wrong indexes order", () => {
      it("returns returns empty array if index are in the wrong order", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(10, 2);

        expect(elements).toEqual([]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });
  });

  describe("negative index", () => {
    describe("with end limit", () => {
      it("returns elements of an array, excluding left edge", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(-3, -1);

        // excluding left edge
        expect(elements).toEqual(["bim", "boom"]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });

    describe("without end limit", () => {
      it("returns the last element of an array", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(-1);

        expect(elements).toEqual(["bobaz"]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });

    describe("with end limit overflow", () => {
      it("returns elements of an array, except last one", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(-10, -1);

        // excluding left edge
        expect(elements).toEqual(["foo", "bar", "baz", "bim", "boom"]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });

    describe("empty array if wrong indexes order", () => {
      it("returns returns empty array if negative indexes are in the wrong order", () => {
        const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
        const elements = lines.slice(-1, -4);

        expect(elements).toEqual([]);
        // original array is unchanged
        expect(lines.length).toEqual(6);
      });
    });
  });

  describe('edge', () => {
    it('no arguments copy object', () => {
      const lines = ["foo", "bar", "baz", "bim", "boom", "bobaz"];
      const copy = lines.slice();

      expect(copy).toEqual(lines);
    })
  })
});
