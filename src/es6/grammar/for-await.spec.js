describe("for await", () => {
  it("for-await then", async () => {
    const fn = async () => {
      const double = data => Promise.resolve(data * 2);

      const data = [1, 2, 3];

      const result = [];
      for (let item of data) {
        result.push(await double(item));
      }

      return result;
    };

    return fn().then(result => {
      return expect(result).toEqual([2, 4, 6]);
    });
  });

  it("for-await catch", async () => {
    const fn = async () => {
      const oddOrEven = data => {
        if (data % 2 === 0) return Promise.resolve(data);
        else return Promise.reject(new Error("foo"));
      };

      const data = [1, 2, 3];

      const result = [];
      for (let item of data) {
        result.push(await oddOrEven(item));
      }

      return result;
    };

    return fn()
      .then(result => {
        console.log("wrong then", result);
        expect(0).toBe(1);
        return;
      })
      .catch(err => {
        expect(err.message).toBe("foo");
      });
  });
});
