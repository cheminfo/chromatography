# chromatography

  [![NPM version][npm-image]][npm-url]
  [![Build Status][travis-image]][travis-url]
  [![Test coverage][coveralls-image]][coveralls-url]
  [![Dependency Status][daviddm-image]][daviddm-url]
  [![npm download][download-image]][download-url]

> Tools for storing, search and analyze GC/MS spectra

## Installation

`npm install chromatography`

## [API Documentation](https://cheminfo-js.github.io/chromatography/)
[GC/MS API proposal](https://docs.google.com/document/d/1Jg2l6wKjFCYBSqdVWBSujSkqMhsEV6ZMyxeI9RSLhn0/edit#heading=h.8gjgl6jygt0s)

## Example

```js
const GCMS = require('chromatography');
let gcms = GCMS.fromJcamp(jcampReferenceMixture);

let kovatsConversionTable = GCMS.getKovatsTable(gcms); // [{time, value}]
let conversionFunction = GCMS.kovatsConversionFunction(kovatsConversionTable, {});

let diesel = GCMS.fromJcamp(jcampOfDiesel);
let times = GCMS.rescaleTime(diesel.getTimes(), conversionFunction);
diesel.setTimes(times);
// diesel.rescaleTime(conversionFunction);

let peaks = GCMS.getPeaks(diesel, options);
let dieselJSON = diesel.toJSON(options); // [{time:12, height:12, width: 3, mass: [{mass, intensity}]}]
let gcms2 = GCMS.fromJSON(anotherDieselJSON);
let similarity = GCMS.similarity(gcms, gcms2, options);

// get a spectrum in another reference model
let revertConversionFunction = GCMS.kovatsConversionFunction(kovatsConversionTable, {revert: true});
let mySpectrumInAnotherReference = mySpectrum
```

## License

[MIT](./LICENSE)

[npm-image]: https://badge.fury.io/js/chromatography.svg
[npm-url]: https://npmjs.org/package/chromatography
[travis-image]: https://travis-ci.org/cheminfo-js/chromatography.svg?branch=master
[travis-url]: https://travis-ci.org/cheminfo-js/chromatography
[coveralls-image]: https://img.shields.io/coveralls/cheminfo-js/chromatography.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/cheminfo-js/chromatography
[daviddm-image]: https://david-dm.org/cheminfo-js/chromatography.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/cheminfo-js/chromatography
[download-image]: https://img.shields.io/npm/dm/chromatography.svg?style=flat-square
[download-url]: https://npmjs.org/package/chromatography