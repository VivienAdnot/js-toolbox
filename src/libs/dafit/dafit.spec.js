const { Resolver } = require("dafit");

describe("resolves user", () => {
  const resolveUser = new Resolver({
    id: user => user.id,
    firstname: user => user.first_name,
    lastname: user => user.last_name,
    fullname: user => `${user.first_name} ${user.last_name.toUpperCase()}`,
    test: (data, context) => {
      if (context.withPermissions) return "foo";
      return "bar";
    }
  });

  const user = {
    id: 1,
    first_name: "John",
    last_name: "Cena",
    age: 39,
    coucou1: "coucou",
    coucou2: "coucou"
  };

  it("with permissions", () => {
    return resolveUser(user, { withPermissions: true }).then(result =>
      expect(result).toEqual({
        id: 1,
        firstname: "John",
        lastname: "Cena",
        fullname: "John CENA",
        test: "foo"
      })
    );
  });

  it("permissions false", () => {
    return resolveUser(user, { withPermissions: false }).then(result =>
      expect(result).toEqual({
        id: 1,
        firstname: "John",
        lastname: "Cena",
        fullname: "John CENA",
        test: "bar"
      })
    );
  });

  it("default permissions = false", () => {
    return resolveUser(user).then(result =>
      expect(result).toEqual({
        id: 1,
        firstname: "John",
        lastname: "Cena",
        fullname: "John CENA",
        test: "bar"
      })
    );
  });
});
