// Official Documentation:
// Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// Vivien:
// Object.create is a template where you can define fields with default values and default functions
// instances will inherit these default values and default functions
// you can override it

const person = {
  isHuman: false,
  printIntroduction: function() {
    return `My name is ${this.name}. Am I human? ${this.isHuman}`;
  }
};

describe("Object.create", () => {
  const matthew = Object.create(person);
  matthew.name = "Matthew";
  matthew.isHuman = true; // inherited properties can be overwritten

  const bob = Object.create(person);

  const helena = Object.create(person);
  helena.name = "Helena";

  it("Matthew", () => {
    // "name" is a property set on "me", but not on "person"
    expect(matthew.isHuman).toEqual(true);
    expect(matthew.printIntroduction()).toEqual(
      "My name is Matthew. Am I human? true"
    );
  });

  it("Bob", () => {
    // "name" is a property set on "me", but not on "person"
    expect(bob.isHuman).toEqual(false);
    expect(bob.printIntroduction()).toEqual(
      "My name is undefined. Am I human? false"
    );
  });

  it("Helena", () => {
    // "name" is a property set on "me", but not on "person"
    expect(helena.isHuman).toEqual(false);
    expect(helena.printIntroduction()).toEqual(
      "My name is Helena. Am I human? false"
    );
  });
});
