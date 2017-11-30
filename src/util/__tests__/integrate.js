import {integrate, Chromatogram} from '../..';
import {chromato} from '../../__tests__/examples';

var chrom = new Chromatogram([1, 2, 3, 4], {tic: [2, 4, 6, 8]});

test('Integrate a tic', () => {
    var result = integrate(chromato, 'tic', [[1.8, 5.5]]);
    expect(result).toEqual([{
        integral: 120.05,
        from: {
            time: 1.8,
            index: 0,
            baseline: 0
        },
        to: {
            time: 5.5,
            index: 4,
            baseline: 0
        }
    }]);
});

test.only('Errors', () => {
    expect(() => integrate(chromato, 'tic', 123)).toThrow('ranges must be an array of type [[from,to]]');

    var ms = new Chromatogram([1], {ms: [
        [[300.001, 300.010, 300.019], [10, 20, 30]]
    ]});
    expect(() => integrate(ms, 'ms', [[1]])).toThrow('ranges must be an array of type [[from,to]]');
});

describe('Applies baseline correction', () => {
    it('without baseline', () => {
        var result = integrate(chrom, 'tic', [[1, 3]], {baseline: false});
        expect(result).toEqual([{
            integral: 8,
            from: {
                time: 1,
                index: 0,
                baseline: 0
            },
            to: {
                time: 3,
                index: 2,
                baseline: 0
            }
        }]);
    });

    it('trapezoid baseline', () => {
        var result = integrate(chrom, 'tic', [[1, 3]], {baseline: 'trapezoid'});
        expect(result).toEqual([{
            integral: 0,
            from: {
                time: 1,
                index: 0,
                baseline: 2
            },
            to: {
                time: 3,
                index: 2,
                baseline: 6
            }
        }]);
    });

    it('min baseline', () => {
        var result = integrate(chrom, 'tic', [[1, 3]], {baseline: 'min'});
        expect(result).toEqual([{
            integral: 4,
            from: {
                time: 1,
                index: 0,
                baseline: 2
            },
            to: {
                time: 3,
                index: 2,
                baseline: 2
            }
        }]);

        var other = new Chromatogram([1, 2, 3], {tic: [6, 4, 2]});
        result = integrate(other, 'tic', [[1, 3]], {baseline: 'min'});
        expect(result).toEqual([{
            integral: 4,
            from: {
                time: 1,
                index: 0,
                baseline: 2
            },
            to: {
                time: 3,
                index: 2,
                baseline: 2
            }
        }]);
    });

    it('error', () => {
        expect(() => integrate(chrom, 'tic', [[1, 3]], {baseline: 'bla'})).toThrow('Unknown baseline method "bla"');
    });
});
