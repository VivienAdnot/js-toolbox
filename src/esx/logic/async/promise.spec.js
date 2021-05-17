const createEsClient = require("./__stubs__/es");
const esClient = createEsClient();

// it("Promise", () => {
//   const esInsert = esClient.upsertEntities();

//   return esInsert.then(result => {
//     return expect(result).toEqual({
//       foo: "bar"
//     });
//   });
// });

// const getAdvertiserTags = () => Promise.reject('foo');
// const getAdvertiserTags2 = (x) => Promise.resolve(x * 10);
// it('try catch', () => {
//   getAdvertiserTags().catch(expect(1).toBe(1));
// });

// it('async foreach', () => {
//   const array = [1,2,3,4,5];

//   array.forEach(index => {
//     console.log("new iteration", index)
//     getAdvertiserTags2(index).then(result => {
//       console.log(index, result);
//     })
//   })

//   expect(array.length).toBe(5);
// });

test.todo('some test to be written in the future');