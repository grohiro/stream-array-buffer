# stream-array-buffer

`stream-array-buffer` is a `stream.Transform` of Node.js.
It gathers input values and emits them as an array.

```javascript
const streamBuffer = require('stream-array-buffer')({size: 3});

toStream(['a', 'b', 'c', 'd', 'e', 'f', 'g'])
    .pipe(streamBuffer) // objectMode is true.
    .pipe(toJsonString) // so, convert the array to string for the next task. 
    .pipe(process.stdout);
// => ["a","b","c"]["d","e","f"]["g"]
```

## Usage

```console
$ npm install --save stream-array-buffer
```

```javascript
// `size` option is the length of array.
const streamBuffer = require('stream-array-buffer')({size: 3});
```