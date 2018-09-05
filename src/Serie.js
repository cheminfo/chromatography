/**
 * Class allowing to manage a Serie
 */
export class Serie {
  constructor(array, dimension, options = {}) {
    let { meta = {} } = options;
    if (new.target === Serie) {
      throw new Error('You need to create either a 1D or 2D serie');
    }
    this.data = array;
    this.dimension = dimension;
    this.meta = meta;
    this.name = '';
  }

  is1D() {
    return this.dimension === 1;
  }

  is2D() {
    return this.dimension === 2;
  }

  toJSON() {
    return {
      data: this.data,
      meta: this.meta
    };
  }

  /**
   * Specify an array of index to keep
   * @param {Array} array
   */
  keep(array) {
    let newData = [];
    for (let i of array) {
      newData.push(this.data[i]);
    }
    this.data = newData;
  }
}
