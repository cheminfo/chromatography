# chromatography

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![npm download][download-image]][download-url]

Tools for storing, search and analyze GC/MS spectra.

## Installation

`$ npm install --save chromatography`

## Usage

### As an ES module

```js
import {
    fromJcamp,
    fromJSON,
    getKovatsTable,
    kovatsConversionFunction,
    rescaleTime,
    getPeaks,
    similarity
} from 'chromatography';

let gcms = fromJcamp(jcampReferenceMixture);
let kovatsConversionTable = getKovatsTable(gcms); // [{time, value}]
let conversionFunction = kovatsConversionFunction(kovatsConversionTable, {});

let diesel = fromJcamp(jcampOfDiesel);
let times = rescaleTime(diesel.getTimes(), conversionFunction);
diesel.setTimes(times);
// diesel.rescaleTime(conversionFunction);

let peaks = getPeaks(diesel, options);
let dieselJSON = diesel.toJSON(options); // [{time:12, height:12, width: 3, mass: [{mass, intensity}]}]
let gcms2 = fromJSON(anotherDieselJSON);
let similarityCalc = similarity(gcms, gcms2, options);

// get a spectrum in another reference model
let revertConversionFunction = kovatsConversionFunction(kovatsConversionTable, {revert: true});
let mySpectrumInAnotherReference = revertConversionFunction(mySpectrum);
```

### As a CommonJS modulesimilarity

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
let mySpectrumInAnotherReference = revertConversionFunction(mySpectrum);
```

## [API Documentation](https://cheminfo-js.github.io/chromatography/)

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/chromatography.svg?style=flat-square
[npm-url]: https://npmjs.org/package/chromatography
[travis-image]: https://img.shields.io/travis/cheminfo-js/chromatography/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cheminfo-js/chromatography
[download-image]: https://img.shields.io/npm/dm/chromatography.svg?style=flat-square
[download-url]: https://npmjs.org/package/chromatography
