import {integrate, Chromatogram} from '../..';
import {chromato} from '../data/examples';

var chrom = new Chromatogram([1, 2, 3, 4], {tic: [2, 4, 6, 8]});

test('Integrate a tic', () => {
    var result = integrate(chromato, [1.8, 5.5]);
    expect(result).toEqual({tic: [{
        integral: 120.05,
        base: {
            start: {height: 0, time: 1.8},
            end: {height: 0, time: 5.5}
        }
    }]});
});

test('Errors', () => {
    expect(() => integrate(chromato, 123)).toThrow('fromTo must be an array of type [from,to]');
});

describe('Applies baseline correction', () => {
    it('without baseline', () => {
        var result = integrate(chrom, [1, 3], {name: 'tic', baseline: false});
        expect(result).toEqual({tic: [{
            integral: 8,
            base: {
                start: {height: 0, time: 1},
                end: {height: 0, time: 3}
            }
        }]});
    });

    it('trapezoid baseline', () => {
        var result = integrate(chrom, [1, 3], {name: 'tic', baseline: 'trapezoid'});
        expect(result).toEqual({tic: [{
            integral: 0,
            base: {
                start: {height: 2, time: 1},
                end: {height: 6, time: 3}
            }
        }]});
    });

    it('min baseline', () => {
        var result = integrate(chrom, [1, 3], {name: 'tic', baseline: 'min'});
        expect(result).toEqual({tic: [{
            integral: 4,
            base: {
                start: {height: 2, time: 1},
                end: {height: 2, time: 3}
            }
        }]});

        var other = new Chromatogram([1, 2, 3], {tic: [6, 4, 2]});
        result = integrate(other, [1, 3], {name: 'tic', baseline: 'min'});
        expect(result).toEqual({tic: [{
            integral: 4,
            base: {
                start: {height: 2, time: 1},
                end: {height: 2, time: 3}
            }
        }]});
    });

    it('error', () => {
        expect(() => integrate(chrom, [1, 3], {name: 'tic', baseline: 'bla'})).toThrow('Unknown baseline method "bla"');
    });
});
