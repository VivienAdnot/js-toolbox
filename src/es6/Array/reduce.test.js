let subscriptions = [
  {
    id: "sub1",
    _initiator: "user1",
    _target: "user1"
  },
  {
    id: "sub2",
    _initiator: "user1",
    _target: "user2"
  },
  {
    id: "sub3",
    _initiator: "user1",
    _target: "user3"
  }
];

it("?", () => {
  let reduced = subscriptions.reduce((acc, current) => {
    return [...acc, current._target]; // concat immutable
  }, []);

  expect(reduced).toEqual(["user1", "user2", "user3"]);
});

it("basic merge", () => {
  let struct = [
    [
      {
        type: "pages",
        call_count: 1
      },
      {
        type: "post",
        call_count: 1
      }
    ],
    { call_count: 0 },
    { call_count: 0 }
  ];

  let merge = struct.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return [...acc, ...curr];
    }
    return [...acc, curr];
  }, []);

  expect(merge).toEqual([
    {
      type: "pages",
      call_count: 1
    },
    {
      type: "post",
      call_count: 1
    },
    { call_count: 0 },
    { call_count: 0 }
  ]);
});
