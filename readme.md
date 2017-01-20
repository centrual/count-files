# Count Files

Count files, directories, and bytes in a directory recursively. 

Ignore files in the count.

## Usage

```javascript
var countFiles = require('count-files')

var stats = countFiles(dir, function (err, stats) {
  console.log('done counting')
})

setInterval(function () {
  console.log('current count', count)
}, 500)
```

## API

### var stats = countFiles(dir, [opts], cb) { }

Callback returns a stats object: `{files, dirs, bytes}`.

Options include:

```js
opts = {
  ignore: function (file) {
    return match(['**/*.js'], file) // return true to ignore file
  }
}
```

We find [anymatch](https://github.com/es128/anymatch) nice for ignoring files!

That's all folks!

## Development

Some basic performance testing in `tests/perf.js` and alternate implementations in `lib/`. I think I chose the fastest but didn't test all situations!

## License

ISC
