class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName; // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    return this._name + ' is walking.';
  }
}

describe('class', () => {
  it('getter', () => {
    const bob = new Person('Bob');
    expect(bob.name).toBe('BOB');
    expect(bob.walk()).toBe('Bob is walking.');
  });
});
