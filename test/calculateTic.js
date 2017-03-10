import test from 'ava';
import {Chromatogram, calculateTic} from '..';

test('simple case', t => {
    let ms = [
        [[100, 200, 300], [10, 20, 30]],
        [[101, 201, 301], [11, 21, 31]],
    ];

    let i = 1;
    let times = ms.map(() => i++);

    let chrom = new Chromatogram(times);
    chrom.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms
    });

    calculateTic(chrom);
    t.is(chrom.series.tic.name, 'tic');
    t.deepEqual(chrom.series.tic.data, [60, 63]);
});
