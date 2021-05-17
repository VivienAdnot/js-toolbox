const _ = require("lodash");

describe("spread edge cases", () => {
  it("spread null", () => {
    const a = {
      foo: "bar"
    };

    const b = null;

    const c = {
      ...a,
      ...b
    };

    expect(c).toEqual({ foo: "bar" });
  });

  it("spread undefined", () => {
    const a = {
      foo: "bar"
    };

    const b = undefined;

    const c = {
      ...a,
      ...b
    };

    expect(c).toEqual({ foo: "bar" });
  });

  it("spread empty", () => {
    const a = {
      foo: "bar"
    };

    const b = {};

    const c = {
      ...a,
      ...b
    };

    expect(c).toEqual({ foo: "bar" });
  });

  it("spread field empty keep field", () => {
    const a = {
      foo: "bar"
    };

    const b = {
      query_hash: {}
    };

    const c = {
      ...a,
      ...b
    };

    expect(c).toEqual({ foo: "bar", query_hash: {} });
  });

  describe("real life example", () => {
    const formatFn = ({ request, includeQueryParams = false }) => {
      const query_hash_param = !!includeQueryParams
        ? { query_hash: _.get(request, "params.query_hash", undefined) }
        : {};

      const result = {
        ...request,
        ...query_hash_param
      };

      delete result.params;

      return result;
    };

    it("query_hash should be excluded from result", () => {
      const request = {
        params: {
          bar: "!!! this field should be removed !!!"
        },
        foo: "bar"
      };

      expect(formatFn({ request, includeQueryParams: false })).toEqual({
        foo: "bar"
      });
    });

    it("query_hash should be included in result", () => {
      const request = {
        params: {
          bar: "!!! this field should be removed !!!",
          query_hash: "baz"
        },
        foo: "bar"
      };

      expect(formatFn({ request, includeQueryParams: true })).toEqual({
        foo: "bar",
        query_hash: "baz"
      });
    });

    it("query_hash should be included in result", () => {
      const request = {
        params: {
          bar: "!!! this field should be removed !!!"
        },
        foo: "bar"
      };

      expect(formatFn({ request, includeQueryParams: true })).toEqual({
        foo: "bar"
      });
    });
  });
});
