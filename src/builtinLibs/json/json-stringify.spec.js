// deep ok
it("JSON.stringify", () => {
  const obj = {
    foo: {
      bar: {
        baz: {
          foo: {
            bar: {
              baz: "vivien"
            }
          }
        }
      }
    }
  };

  const str = JSON.stringify(obj);
  expect(str).toBe('{"foo":{"bar":{"baz":{"foo":{"bar":{"baz":"vivien"}}}}}}');
});
