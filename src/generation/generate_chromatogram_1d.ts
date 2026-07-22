import type { Shape1D } from 'ml-peak-shape-generator';
import { SpectrumGenerator } from 'spectrum-generator';

export interface GenerateChromatogram1DPeak {
  /**
   * Retention time of the peak (apex).
   */
  retentionTime: number;

  /**
   * Intensity of the peak (at the apex).
   */
  intensity: number;

  /**
   * Width of the peak.
   */
  width?: number;

  /**
   * Shape of the peak.
   * @default { kind: 'gaussian', fwhm: 4 }
   */
  shape?: Shape1D;
}

export interface GenerateChromatogram1DOptions {
  /**
   * First time value (inclusive).
   */
  firstTime: number;

  /**
   * Last time value (inclusive).
   */
  lastTime: number;

  /**
   * Number of values to generate between each time unit.
   */
  scansPerTime: number;
}

const defaultPeakShape: Shape1D = {
  kind: 'gaussian',
  fwhm: 4,
};

/**
 * Generate 1D chromatographic data from a list of peaks.
 * @param peaks - The list of peaks to include in the chromatogram.
 * @param options - Information about the chromatographic range to generate.
 * @returns The generated chromatographic data (times and intensities).
 */
export function generateChromatogram1D(
  peaks: GenerateChromatogram1DPeak[],
  options: GenerateChromatogram1DOptions,
) {
  const nbPoints = Math.round(
    (options.lastTime - options.firstTime) * options.scansPerTime,
  );

  const generator = new SpectrumGenerator({
    from: options.firstTime,
    to: options.lastTime,
    nbPoints,
  });

  const generatorPeaks = peaks.map((peak) => {
    return {
      x: peak.retentionTime,
      y: peak.intensity,
      width: peak.width,
      shape: peak.shape ?? defaultPeakShape,
    };
  });

  generator.addPeaks(generatorPeaks);

  const data = generator.getSpectrum();

  return {
    times: data.x,
    intensities: data.y,
  };
}
