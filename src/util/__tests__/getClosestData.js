import { simple4 as chromatogram } from '../../../testFiles/examples';

test('Get closest data', () => {
  // time : [1, 2, 3, 4]

  expect(chromatogram.getClosestData('ms', 1.9)).toStrictEqual({
    rt: 2,
    index: 1,
    data: [[102, 202, 302], [12, 22, 32]]
  });
});
