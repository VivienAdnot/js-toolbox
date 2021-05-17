const TOTAL_LENGTH = 1100;
const CHUNK_LENGTH = 500;

it("for with particular increment", () => {
  const iteratorHistory = [];
  const chunkLength = [];

  const data = Array.from({ length: TOTAL_LENGTH }, () => 1);

  for (let i = 0; i < data.length; i += CHUNK_LENGTH) {
    console.log("slice", i, i + CHUNK_LENGTH);
    let chunk = data.slice(i, i + CHUNK_LENGTH);
    iteratorHistory.push(i);
    chunkLength.push(chunk.length);
  }

  expect(iteratorHistory).toEqual([0, 500, 1000]);
  expect(chunkLength).toEqual([500, 500, 100]);
});
