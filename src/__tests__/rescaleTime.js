import { readFileSync } from 'fs';
import { join } from 'path';
import { kovatsConversionFunction, rescaleTime, fromJcamp } from '..';

test('Simple case', () => {
  const time2kovats = kovatsConversionFunction([
    { time: 10, value: 800 },
    { time: 20, value: 900 },
    { time: 30, value: 1000 }
  ]);

  const inferior = 10;
  const superior = 30;
  const step = 1;

  let time = new Array((superior - inferior) / step);
  let index = 0;
  for (let i = inferior; i < superior; i += step) {
    time[index++] = i;
  }

  const newTime = rescaleTime(time, time2kovats);
  for (let j = 0; j < newTime.length; j++) {
    expect(newTime[j]).toEqual(time2kovats(time[j]));
  }
});

test('Non-in place', () => {
  const path = join(__dirname, '../../testFiles/jcamp/P064.JDX');
  const jcamp = readFileSync(path, 'utf8');
  const chrom = fromJcamp(jcamp);

  const time2kovats = kovatsConversionFunction([
    { time: 2.735, value: 800 },
    { time: 4.313, value: 900 },
    { time: 5.951, value: 1000 },
    { time: 7.529, value: 1100 },
    { time: 9.017, value: 1200 },
    { time: 10.417, value: 1300 },
    { time: 11.732, value: 1400 },
    { time: 12.960, value: 1500 },
    { time: 14.156, value: 1600 },
    { time: 15.280, value: 1700 },
    { time: 16.340, value: 1800 },
    { time: 17.359, value: 1900 },
    { time: 18.327, value: 2000 },
    { time: 19.255, value: 2100 },
    { time: 20.147, value: 2200 },
    { time: 20.997, value: 2300 },
    { time: 21.821, value: 2400 },
    { time: 22.608, value: 2500 },
    { time: 23.404, value: 2600 },
    { time: 24.373, value: 2700 },
    { time: 25.582, value: 2800 },
    { time: 27.124, value: 2900 },
    { time: 29.090, value: 3000 },
    { time: 31.619, value: 3100 }
  ]);
  const newTime = rescaleTime(chrom.getTimes(), time2kovats);
  chrom.setTimes(newTime);
  const internalTime = chrom.getTimes();
  for (let i = 0; i < newTime.length; i++) {
    expect(internalTime[i]).toEqual(newTime[i]);
  }
});

test('In place', () => {
  const path = join(__dirname, '../../testFiles/jcamp/P064.JDX');
  const jcamp = readFileSync(path, 'utf8');
  const chrom = fromJcamp(jcamp);

  const time2kovats = kovatsConversionFunction([
    { time: 2.735, value: 800 },
    { time: 4.313, value: 900 },
    { time: 5.951, value: 1000 },
    { time: 7.529, value: 1100 },
    { time: 9.017, value: 1200 },
    { time: 10.417, value: 1300 },
    { time: 11.732, value: 1400 },
    { time: 12.960, value: 1500 },
    { time: 14.156, value: 1600 },
    { time: 15.280, value: 1700 },
    { time: 16.340, value: 1800 },
    { time: 17.359, value: 1900 },
    { time: 18.327, value: 2000 },
    { time: 19.255, value: 2100 },
    { time: 20.147, value: 2200 },
    { time: 20.997, value: 2300 },
    { time: 21.821, value: 2400 },
    { time: 22.608, value: 2500 },
    { time: 23.404, value: 2600 },
    { time: 24.373, value: 2700 },
    { time: 25.582, value: 2800 },
    { time: 27.124, value: 2900 },
    { time: 29.090, value: 3000 },
    { time: 31.619, value: 3100 }
  ]);
  chrom.rescaleTime(time2kovats);
  const internalTime = chrom.getTimes();
  for (let i = 0; i < internalTime.length; i++) {
    expect(internalTime[i] < 3100).toEqual(true);
  }
});
