import {integrate, Chromatogram} from '../..';
import {chromato} from '../data/examples';

var chrom = new Chromatogram([1, 2, 3, 4], {tic: [2, 4, 6, 8]});

test('Integrate a tic', () => {
    var result = integrate(chromato, 'tic', [[1.8, 5.5]]);
    expect(result).toEqual([{
        integral: 120.05,
        base: {
            start: {height: 0, time: 1.8},
            end: {height: 0, time: 5.5}
        }
    }]);
});

test('Errors', () => {
    expect(() => integrate(chromato, 'tic', 123)).toThrow('ranges must be an array of type [[from,to]]');

    var ms = new Chromatogram([1], {ms: [
        [[300.001, 300.010, 300.019], [10, 20, 30]]
    ]});
    expect(() => integrate(ms, 'ms', [[1]])).toThrow('The serie is not of dimension 1');
});

describe('Applies baseline correction', () => {
    it('without baseline', () => {
        var result = integrate(chrom, 'tic', [[1, 3]], {baseline: false});
        expect(result).toEqual([{
            integral: 8,
            base: {
                start: {height: 0, time: 1},
                end: {height: 0, time: 3}
            }
        }]);
    });

    it('trapezoid baseline', () => {
        var result = integrate(chrom, 'tic', [[1, 3]], {baseline: 'trapezoid'});
        expect(result).toEqual([{
            integral: 0,
            base: {
                start: {height: 2, time: 1},
                end: {height: 6, time: 3}
            }
        }]);
    });

    it('min baseline', () => {
        var result = integrate(chrom, 'tic', [[1, 3]], {baseline: 'min'});
        expect(result).toEqual([{
            integral: 4,
            base: {
                start: {height: 2, time: 1},
                end: {height: 2, time: 3}
            }
        }]);

        var other = new Chromatogram([1, 2, 3], {tic: [6, 4, 2]});
        result = integrate(other, 'tic', [[1, 3]], {baseline: 'min'});
        expect(result).toEqual([{
            integral: 4,
            base: {
                start: {height: 2, time: 1},
                end: {height: 2, time: 3}
            }
        }]);
    });

    it('error', () => {
        expect(() => integrate(chrom, 'tic', [[1, 3]], {baseline: 'bla'})).toThrow('Unknown baseline method "bla"');
    });
});
