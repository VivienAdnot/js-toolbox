const Promise = require("bluebird");

const transform = async foo => {
  return foo.toUpperCase();
};

let comments;

// how to perform async operations inside a loop ?
describe("async for loop", () => {
  beforeAll(() => {
    comments = [
      {
        id: 1,
        foo: "a"
      },
      {
        foo: 1,
        foo: "b"
      }
    ];
  });

  it("method 1: for-loop", async () => {
    const asyncFn = async comments => {
      const result = [];

      for (let { foo } of comments) {
        let element = await transform(foo);
        result.push(element);
      }

      return result.join("");
    };

    const result = await asyncFn(comments);
    expect(result).toEqual("AB");
  });

  // interesting if I cannot use bluebird
  it("method 2: promise.all + list.map", async () => {
    const asyncFn = async comments => {
      const result = await Promise.all(
        comments.map(async ({ foo }) => {
          return await transform(foo);
        })
      );

      return result.join("");
    };

    const result = await asyncFn(comments);
    expect(result).toEqual("AB");
  });

  // bluebird is mandatory
  it("method 3: promise.map", async () => {
    const asyncFn = async comments => {
      const result = await Promise.map(comments, async ({ foo }) => {
        return await transform(foo);
      });

      return result.join("");
    };

    const result = await asyncFn(comments);
    expect(result).toEqual("AB");
  });
});