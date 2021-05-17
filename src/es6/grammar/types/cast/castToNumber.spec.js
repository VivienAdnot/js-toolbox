const fn = (a, b) => {
  const result = a.foo + b.bar || 0;
  return result;
};

describe("cast", () => {
  describe("number", () => {
    describe("implicit cast", () => {
      it("success", () => {
        const a = {
          foo: 1
        };

        const b = {
          bar: 2
        };

        expect(fn(a, b)).toBe(3);
      });

      it("failure so null", () => {
        const a = {};

        const b = {
          bar: 2
        };

        expect(fn(a, b)).toBe(0);
      });
    });

    describe("explicit", () => {
      it("basic cast", () => {
        const test = "39";
        expect(Number(test)).toBe(39);
      });

      it("basic parseInt cast", () => {
        const test = "39";
        expect(parseInt(test)).toBe(39);
      });

      it("basic parseInt cast removes digits", () => {
        const test = "39.48";
        expect(parseInt(test)).toBe(39);
      });

      it("basic parseInt cast removes digits", () => {
        const test = "39.98";
        expect(parseInt(test)).toBe(39);
      });

      it("cast fails", () => {
        const test = "A";
        expect(Number(test)).toBe(NaN);
      });
    });
  });
});

describe("cast to Number", () => {
  const testsNaN = ["A", "1,2", undefined, {}];
  const tests0 = [null, []];

  for (let test of testsNaN) {
    it(String(test), () => {
      expect(Number(test)).toBe(NaN);
    });
  }

  for (let test of tests0) {
    it(String(test), () => {
      expect(Number(test)).toBe(0);
    });
  }
});
