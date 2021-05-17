const _ = require("lodash");

describe("lodash", () => {
  it("chunk", () => {
    const data = Array.from({ length: 1100 }, () => 1);
    // chunks will be 500, 500, 100
    const chunks = _.chunk(data, 500);

    expect(chunks.length).toBe(3);
    expect(chunks[0].length).toBe(500);
    expect(chunks[1].length).toBe(500);
    expect(chunks[2].length).toBe(100);

    expect(chunks.every(chunk => chunk.every(item => item === 1)));
  });
});
