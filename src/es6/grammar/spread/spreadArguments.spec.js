describe("spread operator as arguments", () => {
  // this is the function tested
  const fooFn = (...args) => {
    return args;
  };

  describe("tests", () => {
    it("numbers becore array[numbers]", () => {
      expect(fooFn(1, 2)).toEqual([1, 2]);
    });

    describe("edge cases", () => {
      it("arrays", () => {
        expect(fooFn([1, 2])).toEqual([[1, 2]]);
      });

      it("objects", () => {
        expect(fooFn({ foo: "bar" })).toEqual([{ foo: "bar" }]);
      });

      it("null", () => {
        expect(fooFn(null)).toEqual([null]);
      });
    });
  });
});

describe("forward options to sub-functions without defining parameters, thanks to spread", () => {
  const myFn = ({ account, limit, ...options }) => {
    const variables = { id: account.id, first: limit, ...options };
    return variables;
  };
  it("spread", () => {
    const params = {
      account: { id: "foo" },
      limit: 10,
      end_cursor: "bar"
    };

    expect(myFn(params)).toEqual({
      id: "foo",
      first: 10,
      end_cursor: "bar"
    });
  });

  describe("edge spread casees", () => {
    it("null argument stays null when spreading", () => {
      const params = {
        account: { id: "foo" },
        limit: 10,
        end_cursor: "bar",
        foo: null
      };

      expect(myFn(params)).toEqual({
        id: "foo",
        first: 10,
        end_cursor: "bar",
        foo: null
      });
    });

    it("undefined argument is removed when spreading", () => {
      const params = {
        account: { id: "foo" },
        limit: 10,
        end_cursor: "bar",
        foo: undefined
      };

      expect(myFn(params)).toEqual({
        id: "foo",
        first: 10,
        end_cursor: "bar"
      });
    });
  });
});
