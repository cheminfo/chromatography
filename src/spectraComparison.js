'use strict';

const peakPicking = require('./peakPicking');
const massInPeaks = require('./massInPeaks');
const vectorify = require('./vectorify');
const cosine = require('./cosine');

function preprocessing(chromatography, options) {
    // peak picking
    let peaks = peakPicking(chromatography, options);
    peaks = peaks.sort((a, b) => a.index - b.index);

    // integrate mass in the peaks
    let ms = chromatography.findSerieByName('ms').data;
    let integratedMs = massInPeaks(peaks, ms, options);
    let vector = vectorify(integratedMs, options);

    return {
        peaks,
        ms,
        integratedMs,
        vector
    };
}

const defaultOption = {
    thresholdFactor: 0,
    maxNumberPeaks: Number.MAX_VALUE,
    groupWidth: 0,
    heightFilter: 2,
    massPower: 3,
    intPower: 0.6,
    similarityThreshold: 0.7
};

function spectraComparison(chrom1, chrom2, options) {
    options = Object.extends({}, defaultOption, options);

    // peak picking
    let reference = preprocessing(chrom1, options);
    let sample = preprocessing(chrom2, options);

    // similarity between MS
    const len = Math.max(sample.peaks.length, reference.peaks.length);
    let similarityPeaks = {
        chrom1: new Array(len),
        chrom2: new Array(len),
        similarity: new Array(len)
    };
    let similarLen = 0;

    // Similarity matrix
    for (let i = 0; i < sample.peaks.length; ++i) {
        let max = {similarity: -3};
        let biggerCounter = 0;
        for (let j = 0; j < reference.peaks.length; ++j) {
            let sim = cosine(sample.vector[i].x, sample.vector[i].y, reference.vector[j].x, reference.vector[j].y);

            if (sim > options.similarityThreshold && sim > max.similarity) {
                max = {
                    similarity: sim,
                    chrom1: reference.peaks[j],
                    chrom2: sample.peaks[i]
                };
            }
            if (sim > options.similarityThreshold) {
                ++biggerCounter;
            }
        }
        if (biggerCounter === 1) {
            similarityPeaks.chrom1[similarLen] = max.chrom1;
            similarityPeaks.chrom2[similarLen] = max.chrom2;
            similarityPeaks.similarity[similarLen++] = max.similarity;
        }
    }
    similarityPeaks.chrom1.length = similarLen;
    similarityPeaks.chrom2.length = similarLen;

    let duplicates = {};
    for (let i = 0; i < similarLen; ++i) {
        if (duplicates.hasOwnProperty(similarityPeaks.chrom1.peaks[i].x)) {
            duplicates[similarityPeaks.chrom1.peaks[i].x].push(i);
        } else {
            duplicates[similarityPeaks.chrom1.peaks[i].x] = [i];
        }
    }

    let peaksChrom1 = [];
    let peaksChrom2 = [];
    let peaksSimilarity = [];
    for (let val in duplicates) {
        if (duplicates[val].length === 1) {
            peaksChrom1.push(similarityPeaks.chrom1[duplicates[val][0]]);
            peaksChrom2.push(similarityPeaks.chrom2[duplicates[val][0]]);
            peaksSimilarity.push(similarityPeaks.similarity[duplicates[val][0]]);
        }
    }

    return {
        peaksFirst: peaksChrom1,
        peaksSecond: peaksChrom2,
        peaksSimilarity: peaksSimilarity,
    };
}

module.exports = spectraComparison;
