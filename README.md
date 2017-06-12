# chromatography

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![Test coverage][codecov-image]][codecov-url]
  [![npm download][download-image]][download-url]

Tools for storing, search and analyze GC/MS spectra.

## Installation

`$ npm install --save chromatography`

## Usage

```js
import * as GCMS from 'chromatography';
// const GCMS = require('chromatography');

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
let mySpectrumInAnotherReference = revertConversionFunction(mySpectrum);
```

## [API Documentation](https://cheminfo-js.github.io/chromatography/)

[API discussion](https://docs.google.com/document/d/1Jg2l6wKjFCYBSqdVWBSujSkqMhsEV6ZMyxeI9RSLhn0/edit#heading=h.8gjgl6jygt0s)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/chromatography.svg?style=flat-square
[npm-url]: https://npmjs.org/package/chromatography
[travis-image]: https://img.shields.io/travis/cheminfo-js/chromatography/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/chromatography
[codecov-image]: https://img.shields.io/codecov/c/github/cheminfo-js/chromatography.svg?style=flat-square
[codecov-url]: https://codecov.io/github/cheminfo-js/chromatography
[download-image]: https://img.shields.io/npm/dm/chromatography.svg?style=flat-square
[download-url]: https://npmjs.org/package/chromatography
