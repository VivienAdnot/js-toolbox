const { format } = require("date-fns");

describe("date-fns", () => {
  it("format", () => {
    const date = new Date("1989-11-19");
    const result = format(date, "dd/MM/yyyy");
    expect(result).toBe("19/11/1989");
  });
});
