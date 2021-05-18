// const Promise = require("bluebird");

// const processId = () => Promise.delay(100);

// const fn = ids => {
//   const next = async () => {
//     const nextChunk = ids.splice(0, 8);
//     if (nextChunk.length) {
//       return process(nextChunk);
//     }
//   };

//   const process = idsChunk => {
//     return Promise.mapSeries(idsChunk, id => {
//       return Promise.delay(100).then(() => processId(id));
//     }).then(next);
//   };

//   return next().then(() => {
//     console.log("finished");
//     return;
//   });
// };

test.todo('some test to be written in the future');