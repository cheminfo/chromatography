/**
 * Class allowing to manage a Serie
 */
export class Series {
  constructor(array, dimension, options = {}) {
    let { meta = {} } = options;
    if (new.target === Series) {
      throw new Error('You need to create either a 1D or 2D series');
    }
    this.data = array;
    this.dimension = dimension;
    this.meta = meta;
    this.name = '';
  }

  getData() {
    return this.data;
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
      meta: this.meta,
    };
  }

  /**
   * Specify an array of index to keep
   * @param {Array} array
   */
  keep(array) {
    const newData = [];
    for (let i of array) {
      newData.push(this.data[i]);
    }
    this.data = newData;
    return this;
  }
}
