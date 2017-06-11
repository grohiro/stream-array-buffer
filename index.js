/**
 * stream-buffer
 * `stream-buffer` is a `stream.Transform`.
 * It gathers input values and emits them as an array.
 */
const stream = require('stream');

const streamBuffer = function(options) {

  const transform = new stream.Transform({objectMode: true});

  const size = options.size || 10;
  let buffer = [];
  let counter = 0;

  transform._transform = function(chunk, encoding, callback) {
    buffer.push(chunk);
    if (++counter >= size) {
      this.push(buffer);
      buffer = [];
      counter = 0;
    }

    callback();
  };

  transform._flush = function(callback) {
    this.push(buffer);
    callback();
  };

  return transform;
};

module.exports = streamBuffer;
