const R = require("ramda");

describe("ramda", () => {
  it("groupBy", () => {
    const data = [
      { label: "actor", context: null, count: "20" },
      { label: "actor", context: "page", count: "2" },
      { label: "document", context: "website", count: "2" },
      { label: "document", context: "comment", count: "56" }
    ];

    const result = R.groupBy(row => row.label, data);
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
