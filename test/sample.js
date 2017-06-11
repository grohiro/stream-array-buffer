const streamBuffer = require('..')({size: 3});
const stream = require('stream');
const toStream = require('stream-array');

const toJsonString = new stream.Transform({objectMode: true});
toJsonString._transform = function(array, encoding, callback) {
  this.push(JSON.stringify(array));
  callback();
};

toStream(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
  .pipe(streamBuffer)
  .pipe(toJsonString)
  .pipe(process.stdout);

