const Promise = require("bluebird");

describe("Promise.all", () => {
  it("returns an array", async () => {
    const data = [1, 2, 3];

    const results = await Promise.all(
      data.map(datum => {
        const result = datum * 10;
        return Promise.resolve(result);
      })
    );

    expect(results).toEqual([10, 20, 30]);
  });

  describe("odd usecases", () => {
    it("auto-resolved", async () => {
      const p1 = Promise.resolve(1);
      const p2 = Promise.resolve(2);
      const p3 = Promise.resolve(3);

      const result = await Promise.all([p1, p2, p3]);
      expect(result).toEqual([1, 2, 3]);
    });

    describe("resolved inside", () => {
      const p1 = () => {
        return Promise.resolve().then(() => {
          return 1;
        });
      };

      const p2 = () => {
        return Promise.resolve().then(() => {
          return 2;
        });
      };

      const p3 = () => {
        return Promise.resolve().then(() => {
          return 3;
        });
      };

      it("promise not resolved", async () => {
        const result = await Promise.all([p1, p2, p3]);
        expect(result).not.toEqual([1, 2, 3]);
      });

      it("promise resolved", async () => {
        const result = await Promise.all([p1(), p2(), p3()]);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe("forced aync functions", () => {
      const p1 = async () => 1;
      const p2 = async () => 2;
      const p3 = async () => 3;

      it("promise not resolved", async () => {
        const result = await Promise.all([p1, p2, p3]);
        expect(result).not.toEqual([1, 2, 3]);
      });

      it("promise resolved", async () => {
        const result = await Promise.all([p1(), p2(), p3()]);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    it("functors", async () => {
      const createEsClient = () => {
        return {
          upsertEntities: () => Promise.resolve(1)
        };
      };

      const esClient = createEsClient();
      const esInsert = esClient.upsertEntities();

      const result = await Promise.all([esInsert]);
      expect(result).toEqual([1]);
    });

    it("defined functions inside Promise.all", () => {
      const data = {};
      const fn1 = () => {
        data["0"] = 2;
        return Promise.resolve();
      };
      const fn2 = () => {
        data["1"] = 2;
        return Promise.resolve();
      };
      return Promise.all([fn1(), fn2(), Promise.delay(100)])
        .then(() => {
          data.final = true;
          return;
        })
        .then(() => {
          return expect(data).toEqual({
            0: 2,
            1: 2,
            final: true
          });
        });
    });
  });
});
