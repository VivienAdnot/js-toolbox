const R = require("ramda");

describe("ramda", () => {
  describe("mergeDeepRight", () => {
    it("mergeDeepRight override properties", () => {
      const pool = {
        min: 0,
        max: 1
      };

      const databaseOrchestrator = {
        client: "pg",
        connection: {
          host: "localhost",
          port: 5432
        },
        pool: {
          min: 0,
          max: 2,
          propagateCreateError: false // https://github.com/tgriesser/knex/issues/2820#issuecomment-481710112
        }
      };

      expect(
        R.mergeDeepRight(databaseOrchestrator, {
          pool
        })
      ).toEqual({
        client: "pg",
        connection: {
          host: "localhost",
          port: 5432
        },
        pool: {
          min: 0,
          max: 1,
          propagateCreateError: false // https://github.com/tgriesser/knex/issues/2820#issuecomment-481710112
        }
      });
    });

    it("mergeDeepRight override properties 2", () => {
      const pool = {
        min: 0,
        max: 1
      };

      const databaseOrchestrator = {
        client: "pg",
        connection: {
          host: "localhost",
          port: 5432
        },
        pool: {
          min: 0,
          max: 2,
          propagateCreateError: false // https://github.com/tgriesser/knex/issues/2820#issuecomment-481710112
        }
      };

      expect(
        R.mergeDeepRight(
          {
            pool
          },
          databaseOrchestrator
        )
      ).toEqual({
        client: "pg",
        connection: {
          host: "localhost",
          port: 5432
        },
        pool: {
          min: 0,
          max: 2,
          propagateCreateError: false // https://github.com/tgriesser/knex/issues/2820#issuecomment-481710112
        }
      });
    });
  });
});
