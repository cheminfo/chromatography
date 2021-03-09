/*
2 possibilities for data:
[1,2,3,4] or
[{x:[], y:[]}]
*/

export const chromatogram = {
  times: [], // renamed to data ???
  meta: {},
  series: [
    {
      data: [], // problem of 'sparse' series
      meta: {},
      name: 'tic',
      kind: 'values',
    },
    {
      data: [{ x: [], y: [] }], // one element per time = the higher level data
      parent: [], //???
      meta: {},
      name: 'ms',
      kind: 'ms',
      parentIon: 123,
      series: [
        {
          data: [{ x: [], y: [], time: Number }], // one element per previous data.x BUT only 14 peaks ...
          kind: 'ms',
          name: 'ms',
          parentIon: [],
          meta: {},
        },
      ],
    },
  ],
};
