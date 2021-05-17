const test = async shouldThrow => {
  if (shouldThrow) {
    throw new Error("BOOM");
  }

  return "ok";
};

it("ok", async () => {
  const shouldThrow = false;
  try {
    const result = await test(shouldThrow);
    expect(result).toEqual("ok");
  } catch (e) {
    expect(1).toEqual(0);
  }
});

it("not ok", async () => {
  const shouldThrow = true;
  try {
    const result = await test(shouldThrow);
    expect(1).toEqual(0);
  } catch (err) {
    expect(err.message).toEqual("BOOM");
  }
});
