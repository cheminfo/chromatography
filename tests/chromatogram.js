const should = require('should');
const {Chromatogram} = require('..');

test('Constructor errors', () => {
    t.throws(() => new Chromatogram({a: 1}), 'Times must be an array');
    t.throws(() => new Chromatogram(12), 'Times must be an array');
});

test('get first and last time', () => {
    let chrom = new Chromatogram([1, 2, 3]);
    t.is(chrom.firstTime, 1);
    t.is(chrom.lastTime, 3);
});

test('addSerie errors', () => {
    let chromatogram = new Chromatogram(
        [1, 2],
        {'tic': [1, 2]}
    );
    t.throws(() => chromatogram.addSerie('abc', 1234), 'Serie.fromArray requires as parameter an array of numbers or array');
    t.throws(() => chromatogram.addSerie('abc', {a: 1, b: 2}), 'Serie.fromArray requires as parameter an array of numbers or array');
    t.throws(() => chromatogram.addSerie('tic', [2, 3, 4]), 'A serie with name "tic" already exists');

});


test('deleteSerie', () => {
    let chromatogram = new Chromatogram(
        [1, 2],
        {
            tic: [1, 2]
        }
    );
    t.is(chromatogram.hasSerie('tic'), true);
    t.throws(() => chromatogram.deleteSerie('ms'), 'The serie "ms" does not exist');
    chromatogram.deleteSerie('tic');
    t.is(chromatogram.hasSerie('tic'), false);
});
