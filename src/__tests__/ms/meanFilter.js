import {Chromatogram} from '../..';
import {meanFilter} from '../../ms/meanFilter';

test('simple case', () => {
    let chromatogram = new Chromatogram(
        [1, 2], {
            ms: [
                [[100, 200, 300], [10, 20, 300]],
                [[600], [274]]
            ]
        }
    );

    let ms = meanFilter(chromatogram, 'ms');
    expect(ms).toEqual([
        [[300], [300]],
        [[], []]
    ]);
});

test('inplace', () => {
    let chromatogram = new Chromatogram(
        [1, 2], {
            ms: [
                [[100, 200, 300], [10, 20, 300]],
                [[600], [274]]
            ]
        }
    );

    chromatogram.meanFilter('ms');
    expect(chromatogram.series.ms.data).toEqual([
        [[300], [300]],
        [[], []]
    ]);
});

