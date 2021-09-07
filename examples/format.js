/*
2 possibilities for data:
[1,2,3,4] or
[{x:[], y:[]}]
*/

export const chromatogram = {
  times: [], // renamed to data ???
  meta: {},
  variables: [
    {
      data: [], // problem of 'sparse' variables
      meta: {},
      units: '',
      variableType: 'dependent',
      label: 'tic',
      kind: 'values',
    },
    {
      data: [{ x: [], y: [] }], // one element per time = the higher level data
      parent: [], //???
      meta: {},
      label: 'ms',
      kind: 'ms',
      parentIon: 123,
      variables: [
        {
          data: [{ x: [], y: [], time: Number }], // one element per previous data.x BUT only 14 peaks ...
          kind: 'ms',
          label: 'ms',
          parentIon: [],
          meta: {},
        },
      ],
    },
  ],
};
