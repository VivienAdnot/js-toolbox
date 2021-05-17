// Sets the value at path of object. If a portion of path doesn't exist, it's created.
// Arrays are created for missing index properties while objects are created for all other missing properties.

const _ = require("lodash");

describe("lodash", () => {
  describe("groupBy", () => {
    it("default example", () => {
      const array = ["one", "two", "three"];

      const result = _.groupBy(array, "length");
      expect(result).toEqual({ "3": ["one", "two"], "5": ["three"] });

      // array is unchanged
      expect(array).toEqual(["one", "two", "three"]);
    });

    it("default example more explicit way", () => {
      const array = ["one", "two", "three"];

      const result = _.groupBy(array, item => item.length);
      expect(result).toEqual({ "3": ["one", "two"], "5": ["three"] });

      // array is unchanged
      expect(array).toEqual(["one", "two", "three"]);
    });

    describe("group by property", () => {
      it("theory example", () => {
        const array = [{ content: "A" }, { content: "A" }, { content: "B" }];

        const result = _.groupBy(array, item => item.content);

        expect(result).toEqual({
          A: [{ content: "A" }, { content: "A" }],
          B: [{ content: "B" }]
        });
      });

      it("real world example", () => {
        const data = [
          { label: "actor", context: null, count: "20" },
          { label: "actor", context: "page", count: "2" },
          { label: "document", context: "website", count: "2" },
          { label: "document", context: "comment", count: "56" }
        ];

        const result = _.groupBy(data, row => row.label);
        expect(result).toEqual({
          actor: [
            { label: "actor", context: null, count: "20" },
            { label: "actor", context: "page", count: "2" }
          ],
          document: [
            { label: "document", context: "website", count: "2" },
            { label: "document", context: "comment", count: "56" }
          ]
        });
      });
    });
  });
});
