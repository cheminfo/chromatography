# chromatography

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![npm download][download-image]][download-url]

Tools for storing, searching and analyzing GC/MS data.

## Installation

`$ npm i chromatography`

## Usage

```js
import * as GCMS from 'chromatography';

let gcms = GCMS.fromJcamp(jcampReferenceMixture);

let kovatsConversionTable = GCMS.appendKovats(gcms); // [{time, value}]
let conversionFunction = GCMS.getKovatsConversionFunction(
  kovatsConversionTable,
  {},
);

let diesel = GCMS.fromJcamp(jcampOfDiesel);
let times = GCMS.rescaleTime(diesel.getTimes(), conversionFunction);
diesel.setTimes(times);

let peaks = GCMS.getPeaks(diesel, options);
let dieselJSON = diesel.toJSON(options); // [{time:12, height:12, width: 3, mass: [{mass, intensity}]}]
let gcms2 = GCMS.fromJSON(anotherDieselJSON);
let similarity = GCMS.similarity(gcms, gcms2, options);

// Get a spectrum in another reference model
let revertConversionFunction = GCMS.getKovatsConversionFunction(
  kovatsConversionTable,
  { revert: true },
);
let mySpectrumInAnotherReference = revertConversionFunction(mySpectrum);
```

## [API Documentation](https://cheminfo.github.io/chromatography/)

[API discussion](https://docs.google.com/document/d/1Jg2l6wKjFCYBSqdVWBSujSkqMhsEV6ZMyxeI9RSLhn0/edit#heading=h.8gjgl6jygt0s)

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/chromatography.svg?style=flat-square
[npm-url]: https://npmjs.org/package/chromatography
[ci-image]: https://github.com/mljs/matrix/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/mljs/matrix/actions?query=workflow%3A%22Node.js+CI%22
[download-image]: https://img.shields.io/npm/dm/chromatography.svg?style=flat-square
[download-url]: https://npmjs.org/package/chromatography
