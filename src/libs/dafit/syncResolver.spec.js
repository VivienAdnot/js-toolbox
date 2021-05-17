const { SyncResolver } = require("dafit");

describe("dafit", () => {
  describe("syncResolver", () => {
    const resolveUser = new SyncResolver({
      source: "instagram",
      uri: ({ username }) => `https://instagram.com/${username}`,
      originalId: ({ id }) => id
    });

    it("resolves user", () => {
      const user = {
        id: 1,
        username: "John",
        age: 39,
        coucou1: "coucou",
        coucou2: "coucou"
      };

      const result = resolveUser(user);
      expect(result).toEqual({
        source: "instagram",
        uri: `https://instagram.com/John`,
        originalId: 1
      });
    });

    describe("edge case", () => {
      const resolveActor1 = new SyncResolver({
        name: null,
        uri: ({ id }) => `https://www.facebook.com/${id}`,
        source: () => "facebook"
      });

      const resolveActor2 = new SyncResolver({
        name: ({ name }) => name,
        uri: ({ id }) => `https://www.facebook.com/${id}`,
        source: () => "facebook"
      });

      const from = { name: "MTV Lebanon", id: "158056104212380" };
      expect(resolveActor1(from)).toEqual({
        name: "MTV Lebanon",
        uri: "https://www.facebook.com/158056104212380",
        source: "facebook"
      });

      expect(resolveActor2(from)).toEqual({
        name: "MTV Lebanon",
        uri: "https://www.facebook.com/158056104212380",
        source: "facebook"
      });
    });
  });
});
