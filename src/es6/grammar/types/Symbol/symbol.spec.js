// Symbol allows to declare a type
// http://thecodebarbarian.com/a-practical-guide-to-symbols-in-javascript.html

const TYPE = Symbol("IS_ENTITIES_MAP");

const createStruct = () => {
  const data = {};
  return {
    [TYPE]: true,
    get data() {
      return data;
    },
    setItem: (key, value) => {
      data[key] = value;
    },
    getItem: key => {
      return data[key];
    }
  };
};

describe("check symbol", () => {
  it("symbol ok", () => {
    const myStruct = createStruct();
    expect(myStruct[TYPE]).toBe(true);
  });
  it("string nok", () => {
    const myStruct = createStruct();
    expect(myStruct["IS_ENTITIES_MAP"]).toBeUndefined();
  });
});
