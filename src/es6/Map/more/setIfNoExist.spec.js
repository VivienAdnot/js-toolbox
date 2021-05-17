// Design pattern for unique keys

// At Bloom, we use Map like a Set. The goal is to append only new elements to the Map.
// We create unique keys. So we append elements only if the key is different

// const createMap = () => {
//   const myMap = new Map();

//   const _map = () => {
//     return myMap;
//   };

//   const addAuthoredBy = (actorUri, documentUri) => {
//     if (actorUri && documentUri) {
//       myMap.set(`${actorUri}-${documentUri}`, {
//         actor_uri: actorUri,
//         document_uri: documentUri
//       });
//     }
//   };

//   return {
//     _map,
//     addAuthoredBy
//   };
// };

// describe("es6 Map", () => {
//   describe("set if not exist", () => {
//     it("basic", () => {
//       const myMap = createMap();
//       myMap.addAuthoredBy("foo", "bar");
//       myMap.addAuthoredBy("bar", "baz");
//       myMap.addAuthoredBy("foo", "bar");
//       myMap.addAuthoredBy("foo");
//       expect(myMap._map().size).toBe(2);
//     });
//   });
// });

test.todo('some test to be written in the future');