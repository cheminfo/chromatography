import test from 'ava';
import {Chromatogram} from '..';

test('Constructor errors', t => {
    t.throws(() => new Chromatogram(), 'data must be an object or array');
    t.throws(() => new Chromatogram({}), 'times array is mandatory');
});

test('addSerie errors', t => {
    let chrom = new Chromatogram({
        times: [1, 2],
        series: [{
            name: 'tic',
            dimension: 1,
            data: [1, 2]
        }]
    });
    t.throws(() => chrom.addSerie({dimension: 'a'}), 'serie must have a dimension');
    t.throws(() => chrom.addSerie({dimension: 1, name: 1}), 'serie must have a name');
    t.throws(() => chrom.addSerie({dimension: 1, name: 'tic'}), 'a serie with name tic already exists');
    t.throws(() => chrom.addSerie({dimension: 1, name: 'a'}), 'serie must have a data array');
});

test('addSerie errors', t => {
    let chrom = new Chromatogram([1, 2, 3]);
    t.is(chrom.getFirstTime(), 1);
    t.is(chrom.getLastTime(), 3);
});
