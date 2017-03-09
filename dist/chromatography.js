(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Chromatography"] = factory();
	else
		root["Chromatography"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 197);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(150);
var abstractMatrix = __webpack_require__(69);
var util = __webpack_require__(25);

class Matrix extends abstractMatrix(Array) {
    constructor(nRows, nColumns) {
        var i;
        if (arguments.length === 1 && typeof nRows === 'number') {
            return new Array(nRows);
        }
        if (Matrix.isMatrix(nRows)) {
            return nRows.clone();
        } else if (Number.isInteger(nRows) && nRows > 0) { // Create an empty matrix
            super(nRows);
            if (Number.isInteger(nColumns) && nColumns > 0) {
                for (i = 0; i < nRows; i++) {
                    this[i] = new Array(nColumns);
                }
            } else {
                throw new TypeError('nColumns must be a positive integer');
            }
        } else if (Array.isArray(nRows)) { // Copy the values from the 2D array
            const matrix = nRows;
            nRows = matrix.length;
            nColumns = matrix[0].length;
            if (typeof nColumns !== 'number' || nColumns === 0) {
                throw new TypeError('Data must be a 2D array with at least one element');
            }
            super(nRows);
            for (i = 0; i < nRows; i++) {
                if (matrix[i].length !== nColumns) {
                    throw new RangeError('Inconsistent array dimensions');
                }
                this[i] = [].concat(matrix[i]);
            }
        } else {
            throw new TypeError('First argument must be a positive number or an array');
        }
        this.rows = nRows;
        this.columns = nColumns;
        return this;
    }

    set(rowIndex, columnIndex, value) {
        this[rowIndex][columnIndex] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        return this[rowIndex][columnIndex];
    }

    /**
     * Creates an exact and independent copy of the matrix
     * @return {Matrix}
     */
    clone() {
        var newMatrix = new this.constructor[Symbol.species](this.rows, this.columns);
        for (var row = 0; row < this.rows; row++) {
            for (var column = 0; column < this.columns; column++) {
                newMatrix.set(row, column, this.get(row, column));
            }
        }
        return newMatrix;
    }

    /**
     * Removes a row from the given index
     * @param {number} index - Row index
     * @return {Matrix} this
     */
    removeRow(index) {
        util.checkRowIndex(this, index);
        if (this.rows === 1) {
            throw new RangeError('A matrix cannot have less than one row');
        }
        this.splice(index, 1);
        this.rows -= 1;
        return this;
    }

    /**
     * Adds a row at the given index
     * @param {number} [index = this.rows] - Row index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addRow(index, array) {
        if (array === undefined) {
            array = index;
            index = this.rows;
        }
        util.checkRowIndex(this, index, true);
        array = util.checkRowVector(this, array, true);
        this.splice(index, 0, array);
        this.rows += 1;
        return this;
    }

    /**
     * Removes a column from the given index
     * @param {number} index - Column index
     * @return {Matrix} this
     */
    removeColumn(index) {
        util.checkColumnIndex(this, index);
        if (this.columns === 1) {
            throw new RangeError('A matrix cannot have less than one column');
        }
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 1);
        }
        this.columns -= 1;
        return this;
    }

    /**
     * Adds a column at the given index
     * @param {number} [index = this.columns] - Column index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addColumn(index, array) {
        if (typeof array === 'undefined') {
            array = index;
            index = this.columns;
        }
        util.checkColumnIndex(this, index, true);
        array = util.checkColumnVector(this, array);
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 0, array[i]);
        }
        this.columns += 1;
        return this;
    }
}

exports.Matrix = Matrix;
Matrix.abstractMatrix = abstractMatrix;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(177);
var abstractMatrix = __webpack_require__(72);
var util = __webpack_require__(27);

class Matrix extends abstractMatrix(Array) {
    constructor(nRows, nColumns) {
        var i;
        if (arguments.length === 1 && typeof nRows === 'number') {
            return new Array(nRows);
        }
        if (Matrix.isMatrix(nRows)) {
            return nRows.clone();
        } else if (Number.isInteger(nRows) && nRows > 0) { // Create an empty matrix
            super(nRows);
            if (Number.isInteger(nColumns) && nColumns > 0) {
                for (i = 0; i < nRows; i++) {
                    this[i] = new Array(nColumns);
                }
            } else {
                throw new TypeError('nColumns must be a positive integer');
            }
        } else if (Array.isArray(nRows)) { // Copy the values from the 2D array
            const matrix = nRows;
            nRows = matrix.length;
            nColumns = matrix[0].length;
            if (typeof nColumns !== 'number' || nColumns === 0) {
                throw new TypeError('Data must be a 2D array with at least one element');
            }
            super(nRows);
            for (i = 0; i < nRows; i++) {
                if (matrix[i].length !== nColumns) {
                    throw new RangeError('Inconsistent array dimensions');
                }
                this[i] = [].concat(matrix[i]);
            }
        } else {
            throw new TypeError('First argument must be a positive number or an array');
        }
        this.rows = nRows;
        this.columns = nColumns;
        return this;
    }

    set(rowIndex, columnIndex, value) {
        this[rowIndex][columnIndex] = value;
        return this;
    }

    get(rowIndex, columnIndex) {
        return this[rowIndex][columnIndex];
    }

    /**
     * Creates an exact and independent copy of the matrix
     * @return {Matrix}
     */
    clone() {
        var newMatrix = new this.constructor[Symbol.species](this.rows, this.columns);
        for (var row = 0; row < this.rows; row++) {
            for (var column = 0; column < this.columns; column++) {
                newMatrix.set(row, column, this.get(row, column));
            }
        }
        return newMatrix;
    }

    /**
     * Removes a row from the given index
     * @param {number} index - Row index
     * @return {Matrix} this
     */
    removeRow(index) {
        util.checkRowIndex(this, index);
        if (this.rows === 1) {
            throw new RangeError('A matrix cannot have less than one row');
        }
        this.splice(index, 1);
        this.rows -= 1;
        return this;
    }

    /**
     * Adds a row at the given index
     * @param {number} [index = this.rows] - Row index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addRow(index, array) {
        if (array === undefined) {
            array = index;
            index = this.rows;
        }
        util.checkRowIndex(this, index, true);
        array = util.checkRowVector(this, array, true);
        this.splice(index, 0, array);
        this.rows += 1;
        return this;
    }

    /**
     * Removes a column from the given index
     * @param {number} index - Column index
     * @return {Matrix} this
     */
    removeColumn(index) {
        util.checkColumnIndex(this, index);
        if (this.columns === 1) {
            throw new RangeError('A matrix cannot have less than one column');
        }
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 1);
        }
        this.columns -= 1;
        return this;
    }

    /**
     * Adds a column at the given index
     * @param {number} [index = this.columns] - Column index
     * @param {Array|Matrix} array - Array or vector
     * @return {Matrix} this
     */
    addColumn(index, array) {
        if (typeof array === 'undefined') {
            array = index;
            index = this.columns;
        }
        util.checkColumnIndex(this, index, true);
        array = util.checkColumnVector(this, array);
        for (var i = 0; i < this.rows; i++) {
            this[i].splice(index, 0, array[i]);
        }
        this.columns += 1;
        return this;
    }
}

exports.Matrix = Matrix;
Matrix.abstractMatrix = abstractMatrix;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(39)('wks')
  , uid        = __webpack_require__(24)
  , Symbol     = __webpack_require__(3).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class BaseRegression {
    predict(x) {
        var y2;
        if (Array.isArray(x)) {
            y2 = new Array(x.length);
            for (var i = 0; i < x.length; i++) {
                y2[i] = this._predict(x[i]);
            }
        } else if (Number.isFinite(x)) {
            y2 = this._predict(x);
        } else {
            throw new TypeError('x must be a number or array');
        }
        return y2;
    }

    _predict() {
        throw new Error('_compute not implemented');
    }

    train() {
        //Do nothing for this package
    }

    toString() {
        return '';
    }

    toLaTeX() {
        return '';
    }

    /**
     * Return the correlation coefficient of determination (r) and chi-square.
     * @param {Array<number>} x
     * @param {Array<number>} y
     * @return {object}
     */
    modelQuality(x, y) {
        let n = x.length;
        var y2 = new Array(n);
        for (let i = 0; i < n; i++) {
            y2[i] = this._predict(x[i]);
        }
        var xSum = 0;
        var ySum = 0;
        var chi2 = 0;
        var rmsd = 0;
        var xSquared = 0;
        var ySquared = 0;
        var xY = 0;

        for (let i = 0; i < n; i++) {
            xSum += y2[i];
            ySum += y[i];
            xSquared += y2[i] * y2[i];
            ySquared += y[i] * y[i];
            xY += y2[i] * y[i];
            if (y[i] !== 0) {
                chi2 += (y[i] - y2[i]) * (y[i] - y2[i]) / y[i];
            }
            rmsd = (y[i] - y2[i]) * (y[i] - y2[i]);
        }

        var r = (n * xY - xSum * ySum) / Math.sqrt((n * xSquared - xSum * xSum) * (n * ySquared - ySum * ySum));

        return {
            r: r,
            r2: r * r,
            chi2: chi2,
            rmsd: rmsd * rmsd / n
        };
    }

}

module.exports = BaseRegression;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(18)
  , IE8_DOM_DEFINE = __webpack_require__(57)
  , toPrimitive    = __webpack_require__(42)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(58)
  , defined = __webpack_require__(33);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var abstractMatrix = __webpack_require__(69);
var Matrix = __webpack_require__(1);

class BaseView extends abstractMatrix() {
    constructor(matrix, rows, columns) {
        super();
        this.matrix = matrix;
        this.rows = rows;
        this.columns = columns;
    }

    static get [Symbol.species]() {
        return Matrix.Matrix;
    }
}

module.exports = BaseView;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Asplice = Array.prototype.splice,
    Aconcat = Array.prototype.concat;

// For performance : http://jsperf.com/clone-array-slice-vs-while-vs-for
function slice(arr) {
    var i = 0,
        ii = arr.length,
        result = new Array(ii);
    for (; i < ii; i++) {
        result[i] = arr[i];
    }
    return result;
}

/**
 * Real matrix.
 * @constructor
 * @param {number|Array} nRows - Number of rows of the new matrix or a 2D array containing the data.
 * @param {number|boolean} [nColumns] - Number of columns of the new matrix or a boolean specifying if the input array should be cloned
 */
function Matrix(nRows, nColumns) {
    var i = 0, rows, columns, matrix, newInstance;
    if (Array.isArray(nRows)) {
        newInstance = nColumns;
        matrix = newInstance ? slice(nRows) : nRows;
        nRows = matrix.length;
        nColumns = matrix[0].length;
        if (typeof nColumns === 'undefined') {
            throw new TypeError('Data must be a 2D array');
        }
        if (nRows > 0 && nColumns > 0) {
            for (; i < nRows; i++) {
                if (matrix[i].length !== nColumns) {
                    throw new RangeError('Inconsistent array dimensions');
                } else if (newInstance) {
                    matrix[i] = slice(matrix[i]);
                }
            }
        } else {
            throw new RangeError('Invalid dimensions: ' + nRows + 'x' + nColumns);
        }
    } else if (typeof nRows === 'number') { // Create empty matrix
        if (nRows > 0 && nColumns > 0) {
            matrix = new Array(nRows);
            for (; i < nRows; i++) {
                matrix[i] = new Array(nColumns);
            }
        } else {
            throw new RangeError('Invalid dimensions: ' + nRows + 'x' + nColumns);
        }
    } else {
        throw new TypeError('Invalid arguments');
    }

    Object.defineProperty(matrix, 'rows', {writable: true, value: nRows});
    Object.defineProperty(matrix, 'columns', {writable: true, value: nColumns});

    matrix.__proto__ = Matrix.prototype;

    return matrix;
}

/**
 * Constructs a Matrix with the chosen dimensions from a 1D array.
 * @param {number} newRows - Number of rows
 * @param {number} newColumns - Number of columns
 * @param {Array} newData - A 1D array containing data for the matrix
 * @returns {Matrix} - The new matrix
 */
Matrix.from1DArray = function from1DArray(newRows, newColumns, newData) {
    var length, data, i = 0;

    length = newRows * newColumns;
    if (length !== newData.length)
        throw new RangeError('Data length does not match given dimensions');

    data = new Array(newRows);
    for (; i < newRows; i++) {
        data[i] = newData.slice(i * newColumns, (i + 1) * newColumns);
    }
    return new Matrix(data);
};

/**
 * Creates a row vector, a matrix with only one row.
 * @param {Array} newData - A 1D array containing data for the vector
 * @returns {Matrix} - The new matrix
 */
Matrix.rowVector = function rowVector(newData) {
    return new Matrix([newData]);
};

/**
 * Creates a column vector, a matrix with only one column.
 * @param {Array} newData - A 1D array containing data for the vector
 * @returns {Matrix} - The new matrix
 */
Matrix.columnVector = function columnVector(newData) {
    var l = newData.length, vector = new Array(l);
    for (var i = 0; i < l; i++)
        vector[i] = [newData[i]];
    return new Matrix(vector);
};

/**
 * Creates an empty matrix with the given dimensions. Values will be undefined. Same as using new Matrix(rows, columns).
 * @param {number} rows - Number of rows
 * @param {number} columns - Number of columns
 * @returns {Matrix} - The new matrix
 */
Matrix.empty = function empty(rows, columns) {
    return new Matrix(rows, columns);
};

/**
 * Creates a matrix with the given dimensions. Values will be set to zero.
 * @param {number} rows - Number of rows
 * @param {number} columns - Number of columns
 * @returns {Matrix} - The new matrix
 */
Matrix.zeros = function zeros(rows, columns) {
    return Matrix.empty(rows, columns).fill(0);
};

/**
 * Creates a matrix with the given dimensions. Values will be set to one.
 * @param {number} rows - Number of rows
 * @param {number} columns - Number of columns
 * @returns {Matrix} - The new matrix
 */
Matrix.ones = function ones(rows, columns) {
    return Matrix.empty(rows, columns).fill(1);
};

/**
 * Creates a matrix with the given dimensions. Values will be randomly set using Math.random().
 * @param {number} rows - Number of rows
 * @param {number} columns - Number of columns
 * @returns {Matrix} The new matrix
 */
Matrix.rand = function rand(rows, columns) {
    var matrix = Matrix.empty(rows, columns);
    for (var i = 0, ii = matrix.rows; i < ii; i++) {
        for (var j = 0, jj = matrix.columns; j < jj; j++) {
            matrix[i][j] = Math.random();
        }
    }
    return matrix;
};

/**
 * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and other will be 0.
 * @param {number} n - Number of rows and columns
 * @returns {Matrix} - The new matrix
 */
Matrix.eye = function eye(n) {
    var matrix = Matrix.zeros(n, n), l = matrix.rows;
    for (var i = 0; i < l; i++) {
        matrix[i][i] = 1;
    }
    return matrix;
};

/**
 * Creates a diagonal matrix based on the given array.
 * @param {Array} data - Array containing the data for the diagonal
 * @returns {Matrix} - The new matrix
 */
Matrix.diag = function diag(data) {
    var l = data.length, matrix = Matrix.zeros(l, l);
    for (var i = 0; i < l; i++) {
        matrix[i][i] = data[i];
    }
    return matrix;
};

/**
 * Creates an array of indices between two values
 * @param {number} from
 * @param {number} to
 * @returns {Array}
 */
Matrix.indices = function indices(from, to) {
    var vector = new Array(to - from);
    for (var i = 0; i < vector.length; i++)
        vector[i] = from++;
    return vector;
};

// TODO DOC
Matrix.stack = function stack(arg1) {
    var i, j, k;
    if (Matrix.isMatrix(arg1)) {
        var rows = 0,
            cols = 0;
        for (i = 0; i < arguments.length; i++) {
            rows += arguments[i].rows;
            if (arguments[i].columns > cols)
                cols = arguments[i].columns;
        }

        var r = Matrix.zeros(rows, cols);
        var c = 0;
        for (i = 0; i < arguments.length; i++) {
            var current = arguments[i];
            for (j = 0; j < current.rows; j++) {
                for (k = 0; k < current.columns; k++)
                    r[c][k] = current[j][k];
                c++;
            }
        }
        return r;
    }
    else if (Array.isArray(arg1)) {
        var matrix = Matrix.empty(arguments.length, arg1.length);
        for (i = 0; i < arguments.length; i++)
            matrix.setRow(i, arguments[i]);
        return matrix;
    }
};

// TODO DOC
Matrix.expand = function expand(base, count) {
    var expansion = [];
    for (var i = 0; i < count.length; i++)
        for (var j = 0; j < count[i]; j++)
            expansion.push(base[i]);
    return new Matrix(expansion);
};

/**
 * Check that the provided value is a Matrix and tries to instantiate one if not
 * @param value - The value to check
 * @returns {Matrix}
 * @throws {TypeError}
 */
Matrix.checkMatrix = function checkMatrix(value) {
    if (!value) {
        throw new TypeError('Argument has to be a matrix');
    }
    if (value.klass !== 'Matrix') {
        value = new Matrix(value);
    }
    return value;
};

/**
 * Returns true if the argument is a Matrix, false otherwise
 * @param value - The value to check
 * @returns {boolean}
 */
Matrix.isMatrix = function isMatrix(value) {
    return value ? value.klass === 'Matrix' : false;
};

/**
 * @property {string} - The name of this class.
 */
Object.defineProperty(Matrix.prototype, 'klass', {
    get: function klass() {
        return 'Matrix';
    }
});

/**
 * @property {number} - The number of elements in the matrix.
 */
Object.defineProperty(Matrix.prototype, 'size', {
    get: function size() {
        return this.rows * this.columns;
    }
});

/**
 * @private
 * Internal check that a row index is not out of bounds
 * @param {number} index
 */
Matrix.prototype.checkRowIndex = function checkRowIndex(index) {
    if (index < 0 || index > this.rows - 1)
        throw new RangeError('Row index out of range.');
};

/**
 * @private
 * Internal check that a column index is not out of bounds
 * @param {number} index
 */
Matrix.prototype.checkColumnIndex = function checkColumnIndex(index) {
    if (index < 0 || index > this.columns - 1)
        throw new RangeError('Column index out of range.');
};

/**
 * @private
 * Internal check that two matrices have the same dimensions
 * @param {Matrix} otherMatrix
 */
Matrix.prototype.checkDimensions = function checkDimensions(otherMatrix) {
    if ((this.rows !== otherMatrix.rows) || (this.columns !== otherMatrix.columns))
        throw new RangeError('Matrices dimensions must be equal.');
};

/**
 * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
 * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
 * @returns {Matrix} this
 */
Matrix.prototype.apply = function apply(callback) {
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            callback.call(this, i, j);
        }
    }
    return this;
};

/**
 * Creates an exact and independent copy of the matrix
 * @returns {Matrix}
 */
Matrix.prototype.clone = function clone() {
    return new Matrix(this.to2DArray());
};

/**
 * Returns a new 1D array filled row by row with the matrix values
 * @returns {Array}
 */
Matrix.prototype.to1DArray = function to1DArray() {
    return Aconcat.apply([], this);
};

/**
 * Returns a 2D array containing a copy of the data
 * @returns {Array}
 */
Matrix.prototype.to2DArray = function to2DArray() {
    var l = this.rows, copy = new Array(l);
    for (var i = 0; i < l; i++) {
        copy[i] = slice(this[i]);
    }
    return copy;
};

/**
 * @returns {boolean} true if the matrix has one row
 */
Matrix.prototype.isRowVector = function isRowVector() {
    return this.rows === 1;
};

/**
 * @returns {boolean} true if the matrix has one column
 */
Matrix.prototype.isColumnVector = function isColumnVector() {
    return this.columns === 1;
};

/**
 * @returns {boolean} true if the matrix has one row or one column
 */
Matrix.prototype.isVector = function isVector() {
    return (this.rows === 1) || (this.columns === 1);
};

/**
 * @returns {boolean} true if the matrix has the same number of rows and columns
 */
Matrix.prototype.isSquare = function isSquare() {
    return this.rows === this.columns;
};

/**
 * @returns {boolean} true if the matrix is square and has the same values on both sides of the diagonal
 */
Matrix.prototype.isSymmetric = function isSymmetric() {
    if (this.isSquare()) {
        var l = this.rows;
        for (var i = 0; i < l; i++) {
            for (var j = 0; j <= i; j++) {
                if (this[i][j] !== this[j][i]) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
};

/**
 * Sets a given element of the matrix. mat.set(3,4,1) is equivalent to mat[3][4]=1
 * @param {number} rowIndex - Index of the row
 * @param {number} columnIndex - Index of the column
 * @param {number} value - The new value for the element
 * @returns {Matrix} this
 */
Matrix.prototype.set = function set(rowIndex, columnIndex, value) {
    this[rowIndex][columnIndex] = value;
    return this;
};

/**
 * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
 * @param {number} rowIndex - Index of the row
 * @param {number} columnIndex - Index of the column
 * @returns {number}
 */
Matrix.prototype.get = function get(rowIndex, columnIndex) {
    return this[rowIndex][columnIndex];
};

/**
 * Fills the matrix with a given value. All elements will be set to this value.
 * @param {number} value - New value
 * @returns {Matrix} this
 */
Matrix.prototype.fill = function fill(value) {
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] = value;
        }
    }
    return this;
};

/**
 * Negates the matrix. All elements will be multiplied by (-1)
 * @returns {Matrix} this
 */
Matrix.prototype.neg = function neg() {
    return this.mulS(-1);
};

/**
 * Adds a scalar or values from another matrix (in place)
 * @param {number|Matrix} value
 * @returns {Matrix} this
 */
Matrix.prototype.add = function add(value) {
    if (typeof value === 'number')
        return this.addS(value);
    value = Matrix.checkMatrix(value);
        return this.addM(value);
};

/**
 * Adds a scalar to each element of the matrix
 * @param {number} value
 * @returns {Matrix} this
 */
Matrix.prototype.addS = function addS(value) {
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] += value;
        }
    }
    return this;
};

/**
 * Adds the value of each element of matrix to the corresponding element of this
 * @param {Matrix} matrix
 * @returns {Matrix} this
 */
Matrix.prototype.addM = function addM(matrix) {
    this.checkDimensions(matrix);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] += matrix[i][j];
        }
    }
    return this;
};

/**
 * Subtracts a scalar or values from another matrix (in place)
 * @param {number|Matrix} value
 * @returns {Matrix} this
 */
Matrix.prototype.sub = function sub(value) {
    if (typeof value === 'number')
        return this.subS(value);
    value = Matrix.checkMatrix(value);
        return this.subM(value);
};

/**
 * Subtracts a scalar from each element of the matrix
 * @param {number} value
 * @returns {Matrix} this
 */
Matrix.prototype.subS = function subS(value) {
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] -= value;
        }
    }
    return this;
};

/**
 * Subtracts the value of each element of matrix from the corresponding element of this
 * @param {Matrix} matrix
 * @returns {Matrix} this
 */
Matrix.prototype.subM = function subM(matrix) {
    this.checkDimensions(matrix);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] -= matrix[i][j];
        }
    }
    return this;
};

/**
 * Multiplies a scalar or values from another matrix (in place)
 * @param {number|Matrix} value
 * @returns {Matrix} this
 */
Matrix.prototype.mul = function mul(value) {
    if (typeof value === 'number')
        return this.mulS(value);
    value = Matrix.checkMatrix(value);
        return this.mulM(value);
};

/**
 * Multiplies a scalar with each element of the matrix
 * @param {number} value
 * @returns {Matrix} this
 */
Matrix.prototype.mulS = function mulS(value) {
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] *= value;
        }
    }
    return this;
};

/**
 * Multiplies the value of each element of matrix with the corresponding element of this
 * @param {Matrix} matrix
 * @returns {Matrix} this
 */
Matrix.prototype.mulM = function mulM(matrix) {
    this.checkDimensions(matrix);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] *= matrix[i][j];
        }
    }
    return this;
};

/**
 * Divides by a scalar or values from another matrix (in place)
 * @param {number|Matrix} value
 * @returns {Matrix} this
 */
Matrix.prototype.div = function div(value) {
    if (typeof value === 'number')
        return this.divS(value);
    value = Matrix.checkMatrix(value);
        return this.divM(value);
};

/**
 * Divides each element of the matrix by a scalar
 * @param {number} value
 * @returns {Matrix} this
 */
Matrix.prototype.divS = function divS(value) {
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] /= value;
        }
    }
    return this;
};

/**
 * Divides each element of this by the corresponding element of matrix
 * @param {Matrix} matrix
 * @returns {Matrix} this
 */
Matrix.prototype.divM = function divM(matrix) {
    this.checkDimensions(matrix);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] /= matrix[i][j];
        }
    }
    return this;
};

/**
 * Returns a new array from the given row index
 * @param {number} index - Row index
 * @returns {Array}
 */
Matrix.prototype.getRow = function getRow(index) {
    this.checkRowIndex(index);
    return slice(this[index]);
};

/**
 * Returns a new row vector from the given row index
 * @param {number} index - Row index
 * @returns {Matrix}
 */
Matrix.prototype.getRowVector = function getRowVector(index) {
    return Matrix.rowVector(this.getRow(index));
};

/**
 * Sets a row at the given index
 * @param {number} index - Row index
 * @param {Array|Matrix} array - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.setRow = function setRow(index, array) {
    this.checkRowIndex(index);
    if (Matrix.isMatrix(array)) array = array.to1DArray();
    if (array.length !== this.columns)
        throw new RangeError('Invalid row size');
    this[index] = slice(array);
    return this;
};

/**
 * Removes a row from the given index
 * @param {number} index - Row index
 * @returns {Matrix} this
 */
Matrix.prototype.removeRow = function removeRow(index) {
    this.checkRowIndex(index);
    if (this.rows === 1)
        throw new RangeError('A matrix cannot have less than one row');
    Asplice.call(this, index, 1);
    this.rows -= 1;
    return this;
};

/**
 * Adds a row at the given index
 * @param {number} [index = this.rows] - Row index
 * @param {Array|Matrix} array - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.addRow = function addRow(index, array) {
    if (typeof array === 'undefined') {
        array = index;
        index = this.rows;
    }
    if (index < 0 || index > this.rows)
        throw new RangeError('Row index out of range.');
    if (Matrix.isMatrix(array)) array = array.to1DArray();
    if (array.length !== this.columns)
        throw new RangeError('Invalid row size');
    Asplice.call(this, index, 0, slice(array));
    this.rows += 1;
    return this;
};

/**
 * Swaps two rows
 * @param {number} row1 - First row index
 * @param {number} row2 - Second row index
 * @returns {Matrix} this
 */
Matrix.prototype.swapRows = function swapRows(row1, row2) {
    this.checkRowIndex(row1);
    this.checkRowIndex(row2);
    var temp = this[row1];
    this[row1] = this[row2];
    this[row2] = temp;
    return this;
};

/**
 * Returns a new array from the given column index
 * @param {number} index - Column index
 * @returns {Array}
 */
Matrix.prototype.getColumn = function getColumn(index) {
    this.checkColumnIndex(index);
    var l = this.rows, column = new Array(l);
    for (var i = 0; i < l; i++) {
        column[i] = this[i][index];
    }
    return column;
};

/**
 * Returns a new column vector from the given column index
 * @param {number} index - Column index
 * @returns {Matrix}
 */
Matrix.prototype.getColumnVector = function getColumnVector(index) {
    return Matrix.columnVector(this.getColumn(index));
};

/**
 * Sets a column at the given index
 * @param {number} index - Column index
 * @param {Array|Matrix} array - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.setColumn = function setColumn(index, array) {
    this.checkColumnIndex(index);
    if (Matrix.isMatrix(array)) array = array.to1DArray();
    var l = this.rows;
    if (array.length !== l)
        throw new RangeError('Invalid column size');
    for (var i = 0; i < l; i++) {
        this[i][index] = array[i];
    }
    return this;
};

/**
 * Removes a column from the given index
 * @param {number} index - Column index
 * @returns {Matrix} this
 */
Matrix.prototype.removeColumn = function removeColumn(index) {
    this.checkColumnIndex(index);
    if (this.columns === 1)
        throw new RangeError('A matrix cannot have less than one column');
    for (var i = 0, ii = this.rows; i < ii; i++) {
        this[i].splice(index, 1);
    }
    this.columns -= 1;
    return this;
};

/**
 * Adds a column at the given index
 * @param {number} [index = this.columns] - Column index
 * @param {Array|Matrix} array - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.addColumn = function addColumn(index, array) {
    if (typeof array === 'undefined') {
        array = index;
        index = this.columns;
    }
    if (index < 0 || index > this.columns)
        throw new RangeError('Column index out of range.');
    if (Matrix.isMatrix(array)) array = array.to1DArray();
    var l = this.rows;
    if (array.length !== l)
        throw new RangeError('Invalid column size');
    for (var i = 0; i < l; i++) {
        this[i].splice(index, 0, array[i]);
    }
    this.columns += 1;
    return this;
};

/**
 * Swaps two columns
 * @param {number} column1 - First column index
 * @param {number} column2 - Second column index
 * @returns {Matrix} this
 */
Matrix.prototype.swapColumns = function swapColumns(column1, column2) {
    this.checkRowIndex(column1);
    this.checkRowIndex(column2);
    var l = this.rows, temp, row;
    for (var i = 0; i < l; i++) {
        row = this[i];
        temp = row[column1];
        row[column1] = row[column2];
        row[column2] = temp;
    }
    return this;
};

/**
 * @private
 * Internal check that the provided vector is an array with the right length
 * @param {Array|Matrix} vector
 * @returns {Array}
 * @throws {RangeError}
 */
Matrix.prototype.checkRowVector = function checkRowVector(vector) {
    if (Matrix.isMatrix(vector))
        vector = vector.to1DArray();
    if (vector.length !== this.columns)
        throw new RangeError('vector size must be the same as the number of columns');
    return vector;
};

/**
 * @private
 * Internal check that the provided vector is an array with the right length
 * @param {Array|Matrix} vector
 * @returns {Array}
 * @throws {RangeError}
 */
Matrix.prototype.checkColumnVector = function checkColumnVector(vector) {
    if (Matrix.isMatrix(vector))
        vector = vector.to1DArray();
    if (vector.length !== this.rows)
        throw new RangeError('vector size must be the same as the number of rows');
    return vector;
};

/**
 * Adds the values of a vector to each row
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.addRowVector = function addRowVector(vector) {
    vector = this.checkRowVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] += vector[j];
        }
    }
    return this;
};

/**
 * Subtracts the values of a vector from each row
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.subRowVector = function subRowVector(vector) {
    vector = this.checkRowVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] -= vector[j];
        }
    }
    return this;
};

/**
 * Multiplies the values of a vector with each row
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.mulRowVector = function mulRowVector(vector) {
    vector = this.checkRowVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] *= vector[j];
        }
    }
    return this;
};

/**
 * Divides the values of each row by those of a vector
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.divRowVector = function divRowVector(vector) {
    vector = this.checkRowVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] /= vector[j];
        }
    }
    return this;
};

/**
 * Adds the values of a vector to each column
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.addColumnVector = function addColumnVector(vector) {
    vector = this.checkColumnVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] += vector[i];
        }
    }
    return this;
};

/**
 * Subtracts the values of a vector from each column
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.subColumnVector = function subColumnVector(vector) {
    vector = this.checkColumnVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] -= vector[i];
        }
    }
    return this;
};

/**
 * Multiplies the values of a vector with each column
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.mulColumnVector = function mulColumnVector(vector) {
    vector = this.checkColumnVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] *= vector[i];
        }
    }
    return this;
};

/**
 * Divides the values of each column by those of a vector
 * @param {Array|Matrix} vector - Array or vector
 * @returns {Matrix} this
 */
Matrix.prototype.divColumnVector = function divColumnVector(vector) {
    vector = this.checkColumnVector(vector);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] /= vector[i];
        }
    }
    return this;
};

/**
 * Multiplies the values of a row with a scalar
 * @param {number} index - Row index
 * @param {number} value
 * @returns {Matrix} this
 */
Matrix.prototype.mulRow = function mulRow(index, value) {
    this.checkRowIndex(index);
    var i = 0, l = this.columns;
    for (; i < l; i++) {
        this[index][i] *= value;
    }
    return this;
};

/**
 * Multiplies the values of a column with a scalar
 * @param {number} index - Column index
 * @param {number} value
 * @returns {Matrix} this
 */
Matrix.prototype.mulColumn = function mulColumn(index, value) {
    this.checkColumnIndex(index);
    var i = 0, l = this.rows;
    for (; i < l; i++) {
        this[i][index] *= value;
    }
};

/**
 * A matrix index
 * @typedef {Object} MatrixIndex
 * @property {number} row
 * @property {number} column
 */

/**
 * Returns the maximum value of the matrix
 * @returns {number}
 */
Matrix.prototype.max = function max() {
    var v = -Infinity;
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            if (this[i][j] > v) {
                v = this[i][j];
            }
        }
    }
    return v;
};

/**
 * Returns the index of the maximum value
 * @returns {MatrixIndex}
 */
Matrix.prototype.maxIndex = function maxIndex() {
    var v = -Infinity;
    var idx = {};
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            if (this[i][j] > v) {
                v = this[i][j];
                idx.row = i;
                idx.column = j;
            }
        }
    }
    return idx;
};

/**
 * Returns the minimum value of the matrix
 * @returns {number}
 */
Matrix.prototype.min = function min() {
    var v = Infinity;
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            if (this[i][j] < v) {
                v = this[i][j];
            }
        }
    }
    return v;
};

/**
 * Returns the index of the minimum value
 * @returns {MatrixIndex}
 */
Matrix.prototype.minIndex = function minIndex() {
    var v = Infinity;
    var idx = {};
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            if (this[i][j] < v) {
                v = this[i][j];
                idx.row = i;
                idx.column = j;
            }
        }
    }
    return idx;
};

/**
 * Returns the maximum value of one row
 * @param {number} index - Row index
 * @returns {number}
 */
Matrix.prototype.maxRow = function maxRow(index) {
    this.checkRowIndex(index);
    var v = -Infinity;
    for (var i = 0, ii = this.columns; i < ii; i++) {
        if (this[index][i] > v) {
            v = this[index][i];
        }
    }
    return v;
};

/**
 * Returns the index of the maximum value of one row
 * @param {number} index - Row index
 * @returns {MatrixIndex}
 */
Matrix.prototype.maxRowIndex = function maxRowIndex(index) {
    this.checkRowIndex(index);
    var v = -Infinity;
    var idx = {
            row: index
        };
    for (var i = 0, ii = this.columns; i < ii; i++) {
        if (this[index][i] > v) {
            v = this[index][i];
            idx.column = i;
        }
    }
    return idx;
};

/**
 * Returns the minimum value of one row
 * @param {number} index - Row index
 * @returns {number}
 */
Matrix.prototype.minRow = function minRow(index) {
    this.checkRowIndex(index);
    var v = Infinity;
    for (var i = 0, ii = this.columns; i < ii; i++) {
        if (this[index][i] < v) {
            v = this[index][i];
        }
    }
    return v;
};

/**
 * Returns the index of the maximum value of one row
 * @param {number} index - Row index
 * @returns {MatrixIndex}
 */
Matrix.prototype.minRowIndex = function minRowIndex(index) {
    this.checkRowIndex(index);
    var v = Infinity;
    var idx = {
        row: index,
        column: 0
    };
    for (var i = 0, ii = this.columns; i < ii; i++) {
        if (this[index][i] < v) {
            v = this[index][i];
            idx.column = i;
        }
    }
    return idx;
};

/**
 * Returns the maximum value of one column
 * @param {number} index - Column index
 * @returns {number}
 */
Matrix.prototype.maxColumn = function maxColumn(index) {
    this.checkColumnIndex(index);
    var v = -Infinity;
    for (var i = 0, ii = this.rows; i < ii; i++) {
        if (this[i][index] > v) {
            v = this[i][index];
        }
    }
    return v;
};

/**
 * Returns the index of the maximum value of one column
 * @param {number} index - Column index
 * @returns {MatrixIndex}
 */
Matrix.prototype.maxColumnIndex = function maxColumnIndex(index) {
    this.checkColumnIndex(index);
    var v = -Infinity;
    var idx = {
        row: 0,
        column: index
    };
    for (var i = 0, ii = this.rows; i < ii; i++) {
        if (this[i][index] > v) {
            v = this[i][index];
            idx.row = i;
        }
    }
    return idx;
};

/**
 * Returns the minimum value of one column
 * @param {number} index - Column index
 * @returns {number}
 */
Matrix.prototype.minColumn = function minColumn(index) {
    this.checkColumnIndex(index);
    var v = Infinity;
    for (var i = 0, ii = this.rows; i < ii; i++) {
        if (this[i][index] < v) {
            v = this[i][index];
        }
    }
    return v;
};

/**
 * Returns the index of the minimum value of one column
 * @param {number} index - Column index
 * @returns {MatrixIndex}
 */
Matrix.prototype.minColumnIndex = function minColumnIndex(index) {
    this.checkColumnIndex(index);
    var v = Infinity;
    var idx = {
        row: 0,
        column: index
    };
    for (var i = 0, ii = this.rows; i < ii; i++) {
        if (this[i][index] < v) {
            v = this[i][index];
            idx.row = i;
        }
    }
    return idx;
};

/**
 * Returns an array containing the diagonal values of the matrix
 * @returns {Array}
 */
Matrix.prototype.diag = function diag() {
    if (!this.isSquare())
        throw new TypeError('Only square matrices have a diagonal.');
    var diag = new Array(this.rows);
    for (var i = 0, ii = this.rows; i < ii; i++) {
        diag[i] = this[i][i];
    }
    return diag;
};

/**
 * Returns the sum of all elements of the matrix
 * @returns {number}
 */
Matrix.prototype.sum = function sum() {
    var v = 0;
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            v += this[i][j];
        }
    }
    return v;
};

/**
 * Returns the mean of all elements of the matrix
 * @returns {number}
 */
Matrix.prototype.mean = function mean() {
    return this.sum() / this.size;
};

/**
 * Returns the product of all elements of the matrix
 * @returns {number}
 */
Matrix.prototype.prod = function prod() {
    var prod = 1;
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            prod *= this[i][j];
        }
    }
    return prod;
};

/**
 * Computes the cumulative sum of the matrix elements (in place, row by row)
 * @returns {Matrix} this
 */
Matrix.prototype.cumulativeSum = function cumulativeSum() {
    var sum = 0;
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            sum += this[i][j];
            this[i][j] = sum;
        }
    }
    return this;
};

/**
 * Computes the dot (scalar) product between the matrix and another
 * @param {Matrix} other vector
 * @returns {number}
 */
Matrix.prototype.dot = function dot(other) {
    if (this.size !== other.size)
        throw new RangeError('vectors do not have the same size');
    var vector1 = this.to1DArray();
    var vector2 = other.to1DArray();
    var dot = 0, l = vector1.length;
    for (var i = 0; i < l; i++) {
        dot += vector1[i] * vector2[i];
    }
    return dot;
};

/**
 * Returns the matrix product between this and other
 * @returns {Matrix}
 */
Matrix.prototype.mmul = function mmul(other) {
    if (!Matrix.isMatrix(other))
        throw new TypeError('parameter "other" must be a matrix');
    if (this.columns !== other.rows)
        console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');

    var m = this.rows, n = this.columns, p = other.columns;
    var result = new Matrix(m, p);

    var Bcolj = new Array(n);
    var i, j, k;
    for (j = 0; j < p; j++) {
        for (k = 0; k < n; k++)
            Bcolj[k] = other[k][j];

        for (i = 0; i < m; i++) {
            var Arowi = this[i];

            var s = 0;
            for (k = 0; k < n; k++)
                s += Arowi[k] * Bcolj[k];

            result[i][j] = s;
        }
    }
    return result;
};

/**
 * Sorts the rows (in place)
 * @param {function} compareFunction - usual Array.prototype.sort comparison function
 * @returns {Matrix} this
 */
Matrix.prototype.sortRows = function sortRows(compareFunction) {
    for (var i = 0, ii = this.rows; i < ii; i++) {
        this[i].sort(compareFunction);
    }
    return this;
};

/**
 * Sorts the columns (in place)
 * @param {function} compareFunction - usual Array.prototype.sort comparison function
 * @returns {Matrix} this
 */
Matrix.prototype.sortColumns = function sortColumns(compareFunction) {
    for (var i = 0, ii = this.columns; i < ii; i++) {
        this.setColumn(i, this.getColumn(i).sort(compareFunction));
    }
    return this;
};

/**
 * Transposes the matrix and returns a new one containing the result
 * @returns {Matrix}
 */
Matrix.prototype.transpose = function transpose() {
    var result = new Matrix(this.columns, this.rows);
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            result[j][i] = this[i][j];
        }
    }
    return result;
};

/**
 * Returns a subset of the matrix
 * @param {number} startRow - First row index
 * @param {number} endRow - Last row index
 * @param {number} startColumn - First column index
 * @param {number} endColumn - Last column index
 * @returns {Matrix}
 */
Matrix.prototype.subMatrix = function subMatrix(startRow, endRow, startColumn, endColumn) {
    if ((startRow > endRow) || (startColumn > endColumn) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns))
        throw new RangeError('Argument out of range');
    var newMatrix = new Matrix(endRow - startRow + 1, endColumn - startColumn + 1);
    for (var i = startRow; i <= endRow; i++) {
        for (var j = startColumn; j <= endColumn; j++) {
            newMatrix[i - startRow][j - startColumn] = this[i][j];
        }
    }
    return newMatrix;
};

/**
 * Returns a subset of the matrix based on an array of row indices
 * @param {Array} indices - Array containing the row indices
 * @param {number} [startColumn = 0] - First column index
 * @param {number} [endColumn = this.columns-1] - Last column index
 * @returns {Matrix}
 */
Matrix.prototype.subMatrixRow = function subMatrixRow(indices, startColumn, endColumn) {
    if (typeof startColumn === 'undefined') {
        startColumn = 0;
        endColumn = this.columns - 1;
    } else if (typeof endColumn === 'undefined') {
        endColumn = this.columns - 1;
    }
    if ((startColumn > endColumn) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns))
        throw new RangeError('Argument out of range.');
    var l = indices.length, rows = this.rows,
        X = new Matrix(l, endColumn - startColumn + 1);
    for (var i = 0; i < l; i++) {
        for (var j = startColumn; j <= endColumn; j++) {
            if ((indices[i] < 0) || (indices[i] >= rows))
                throw new RangeError('Argument out of range.');
            X[i][j - startColumn] = this[indices[i]][j];
        }
    }
    return X;
};

/**
 * Returns a subset of the matrix based on an array of column indices
 * @param {Array} indices - Array containing the column indices
 * @param {number} [startRow = 0] - First row index
 * @param {number} [endRow = this.rows-1] - Last row index
 * @returns {Matrix}
 */
Matrix.prototype.subMatrixColumn = function subMatrixColumn(indices, startRow, endRow) {
    if (typeof startRow === 'undefined') {
        startRow = 0;
        endRow = this.rows - 1;
    } else if (typeof endRow === 'undefined') {
        endRow = this.rows - 1;
    }
    if ((startRow > endRow) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows))
        throw new RangeError('Argument out of range.');
    var l = indices.length, columns = this.columns,
        X = new Matrix(endRow - startRow + 1, l);
    for (var i = 0; i < l; i++) {
        for (var j = startRow; j <= endRow; j++) {
            if ((indices[i] < 0) || (indices[i] >= columns))
                throw new RangeError('Argument out of range.');
            X[j - startRow][i] = this[j][indices[i]];
        }
    }
    return X;
};

/**
 * Returns the trace of the matrix (sum of the diagonal elements)
 * @returns {number}
 */
Matrix.prototype.trace = function trace() {
    if (!this.isSquare())
        throw new TypeError('The matrix is not square');
    var trace = 0, i = 0, l = this.rows;
    for (; i < l; i++) {
        trace += this[i][i];
    }
    return trace;
};

/**
 * Sets each element of the matrix to its absolute value
 * @returns {Matrix} this
 */
Matrix.prototype.abs = function abs() {
    var ii = this.rows, jj = this.columns;
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            this[i][j] = Math.abs(this[i][j]);
        }
    }
};

module.exports = Matrix;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var abstractMatrix = __webpack_require__(72);
var Matrix = __webpack_require__(2);

class BaseView extends abstractMatrix() {
    constructor(matrix, rows, columns) {
        super();
        this.matrix = matrix;
        this.rows = rows;
        this.columns = columns;
    }

    static get [Symbol.species]() {
        return Matrix.Matrix;
    }
}

module.exports = BaseView;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(8)
  , createDesc = __webpack_require__(23);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(62)
  , enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function squaredEuclidean(p, q) {
    var d = 0;
    for (var i = 0; i < p.length; i++) {
        d += (p[i] - q[i]) * (p[i] - q[i]);
    }
    return d;
}

function euclidean(p, q) {
    return Math.sqrt(squaredEuclidean(p, q));
}

module.exports = euclidean;
euclidean.squared = squaredEuclidean;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.maybeToPrecision = function maybeToPrecision(value, digits) {
    if (value < 0) {
        value = -1 * value;
        if (digits) {
            return '- ' + value.toPrecision(digits);
        } else {
            return '- ' + value.toString();
        }
    } else {
        if (digits) {
            return value.toPrecision(digits);
        } else {
            return value.toString();
        }
    }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(3)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(105)
  , hide      = __webpack_require__(14)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(1);

/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
exports.checkRowIndex = function checkRowIndex(matrix, index, outer) {
    var max = outer ? matrix.rows : matrix.rows - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Row index out of range');
    }
};

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
exports.checkColumnIndex = function checkColumnIndex(matrix, index, outer) {
    var max = outer ? matrix.columns : matrix.columns - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Column index out of range');
    }
};

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
exports.checkRowVector = function checkRowVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.columns) {
        throw new RangeError('vector size must be the same as the number of columns');
    }
    return vector;
};

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
exports.checkColumnVector = function checkColumnVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.rows) {
        throw new RangeError('vector size must be the same as the number of rows');
    }
    return vector;
};

exports.checkIndices = function checkIndices(matrix, rowIndices, columnIndices) {
    var rowOut = rowIndices.some(r => {
        return r < 0 || r >= matrix.rows;

    });

    var columnOut = columnIndices.some(c => {
        return c < 0 || c >= matrix.columns;
    });

    if (rowOut || columnOut) {
        throw new RangeError('Indices are out of range');
    }

    if (typeof rowIndices !== 'object' || typeof columnIndices !== 'object') {
        throw new TypeError('Unexpected type for row/column indices');
    }
    if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);
    if (!Array.isArray(columnIndices)) rowIndices = Array.from(columnIndices);

    return {
        row: rowIndices,
        column: columnIndices
    };
};

exports.checkRange = function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
    if (arguments.length !== 5) throw new TypeError('Invalid argument type');
    var notAllNumbers = Array.from(arguments).slice(1).some(function (arg) {
        return typeof arg !== 'number';
    });
    if (notAllNumbers) throw new TypeError('Invalid argument type');
    if (startRow > endRow || startColumn > endColumn || startRow < 0 || startRow >= matrix.rows || endRow < 0 || endRow >= matrix.rows || startColumn < 0 || startColumn >= matrix.columns || endColumn < 0 || endColumn >= matrix.columns) {
        throw new RangeError('Submatrix indices are out of range');
    }
};

exports.getRange = function getRange(from, to) {
    var arr = new Array(to - from + 1);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = from + i;
    }
    return arr;
};

exports.sumByRow = function sumByRow(matrix) {
    var sum = Matrix.Matrix.zeros(matrix.rows, 1);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(i, 0, sum.get(i, 0) + matrix.get(i, j));
        }
    }
    return sum;
};

exports.sumByColumn = function sumByColumn(matrix) {
    var sum = Matrix.Matrix.zeros(1, matrix.columns);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(0, j, sum.get(0, j) + matrix.get(i, j));
        }
    }
    return sum;
};

exports.sumAll = function sumAll(matrix) {
    var v = 0;
    for (var i = 0; i < matrix.rows; i++) {
        for (var j = 0; j < matrix.columns; j++) {
            v += matrix.get(i, j);
        }
    }
    return v;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(11);
module.exports.Decompositions = module.exports.DC = __webpack_require__(171);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(2);

/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
exports.checkRowIndex = function checkRowIndex(matrix, index, outer) {
    var max = outer ? matrix.rows : matrix.rows - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Row index out of range');
    }
};

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
exports.checkColumnIndex = function checkColumnIndex(matrix, index, outer) {
    var max = outer ? matrix.columns : matrix.columns - 1;
    if (index < 0 || index > max) {
        throw new RangeError('Column index out of range');
    }
};

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
exports.checkRowVector = function checkRowVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.columns) {
        throw new RangeError('vector size must be the same as the number of columns');
    }
    return vector;
};

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
exports.checkColumnVector = function checkColumnVector(matrix, vector) {
    if (vector.to1DArray) {
        vector = vector.to1DArray();
    }
    if (vector.length !== matrix.rows) {
        throw new RangeError('vector size must be the same as the number of rows');
    }
    return vector;
};

exports.checkIndices = function checkIndices(matrix, rowIndices, columnIndices) {
    var rowOut = rowIndices.some(r => {
        return r < 0 || r >= matrix.rows;

    });

    var columnOut = columnIndices.some(c => {
        return c < 0 || c >= matrix.columns;
    });

    if (rowOut || columnOut) {
        throw new RangeError('Indices are out of range');
    }

    if (typeof rowIndices !== 'object' || typeof columnIndices !== 'object') {
        throw new TypeError('Unexpected type for row/column indices');
    }
    if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);
    if (!Array.isArray(columnIndices)) rowIndices = Array.from(columnIndices);

    return {
        row: rowIndices,
        column: columnIndices
    };
};

exports.checkRange = function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
    if (arguments.length !== 5) throw new TypeError('Invalid argument type');
    var notAllNumbers = Array.from(arguments).slice(1).some(function (arg) {
        return typeof arg !== 'number';
    });
    if (notAllNumbers) throw new TypeError('Invalid argument type');
    if (startRow > endRow || startColumn > endColumn || startRow < 0 || startRow >= matrix.rows || endRow < 0 || endRow >= matrix.rows || startColumn < 0 || startColumn >= matrix.columns || endColumn < 0 || endColumn >= matrix.columns) {
        throw new RangeError('Submatrix indices are out of range');
    }
};

exports.getRange = function getRange(from, to) {
    var arr = new Array(to - from + 1);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = from + i;
    }
    return arr;
};

exports.sumByRow = function sumByRow(matrix) {
    var sum = Matrix.Matrix.zeros(matrix.rows, 1);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(i, 0, sum.get(i, 0) + matrix.get(i, j));
        }
    }
    return sum;
};

exports.sumByColumn = function sumByColumn(matrix) {
    var sum = Matrix.Matrix.zeros(1, matrix.columns);
    for (var i = 0; i < matrix.rows; ++i) {
        for (var j = 0; j < matrix.columns; ++j) {
            sum.set(0, j, sum.get(0, j) + matrix.get(i, j));
        }
    }
    return sum;
};

exports.sumAll = function sumAll(matrix) {
    var v = 0;
    for (var i = 0; i < matrix.rows; i++) {
        for (var j = 0; j < matrix.columns; j++) {
            v += matrix.get(i, j);
        }
    }
    return v;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__(85);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = __webpack_require__(92);

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(90);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(91);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _rescaleTime = __webpack_require__(53);

/**
 * Class allowing to store time / ms (ms) series
 * It allows also to store simple time a trace
 * @class Chromatogram
 * @param {object|Array<number>} data - A GC/MS data format object or a time serie
 */

var Chromatogram = function () {
    function Chromatogram(data) {
        (0, _classCallCheck3.default)(this, Chromatogram);

        if (Array.isArray(data)) {
            // init with times
            data = { times: data };
        } else if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object') {
            throw new TypeError('data must be an object or array');
        }

        if (!Array.isArray(data.times)) {
            throw new TypeError('times array is mandatory');
        }
        this.times = data.times;
        this.length = data.times.length;

        this.series = [];
        if (data.series) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(data.series), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var serie = _step.value;

                    this.addSerie(serie);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }

    /**
     * Find the serie giving the name
     * @param {string} name - name of the serie
     * @return {object} - Object with an array of data, dimensions of the elements in the array and name of the serie
     */


    (0, _createClass3.default)(Chromatogram, [{
        key: 'findSerieByName',
        value: function findSerieByName(name) {
            return this.series.find(function (serie) {
                return serie.name === name;
            });
        }

        /**
         * Add a new serie
         * @param {object} serie - Object with an array of data, dimensions of the elements in the array and name of the serie
         */

    }, {
        key: 'addSerie',
        value: function addSerie(serie) {
            if (typeof serie.dimension !== 'number') {
                throw new Error('serie must have a dimension');
            }
            if (typeof serie.name !== 'string') {
                throw new Error('serie must have a name');
            }
            if (this.findSerieByName(serie.name)) {
                throw new Error('a serie with name ' + serie.name + ' already exists');
            }
            if (!Array.isArray(serie.data)) {
                throw new Error('serie must have a data array');
            }
            this.series.push(serie);
        }

        /**
         * Returns the first time value
         * @return {number} - First time value
         */

    }, {
        key: 'getFirstTime',
        value: function getFirstTime() {
            return this.times[0];
        }

        /**
         * Returns the last time value
         * @return {number} - Last time value
         */

    }, {
        key: 'getLastTime',
        value: function getLastTime() {
            return this.times[this.length - 1];
        }

        /**
         * Returns the time values
         * @return {Array<number>} - Time values
         */

    }, {
        key: 'getTimes',
        value: function getTimes() {
            return this.times;
        }

        /**
         * Assign the time values
         * @param {Array<number>} times - New time values
         */

    }, {
        key: 'setTimes',
        value: function setTimes(times) {
            this.times = times;
        }

        /**
         * Modifies the time applying the conversion function
         * @param {function(number)} conversionFunction
         */

    }, {
        key: 'rescaleTime',
        value: function rescaleTime(conversionFunction) {
            this.times = _rescaleTime(this.times, conversionFunction);
        }

        /**
         * Parse the content to an JSON Array
         * @return {Array<object>} - Returns a list with the following fields:
         *  * `time`: Number for the retention time
         *  * `tic`: Number for the total ion chromatogram
         *  * `mass`: List of mass values and their respective intensities
         */

    }, {
        key: 'toJSON',
        value: function toJSON() {
            var ans = new Array(this.times.length);
            var tic = this.findSerieByName('tic').data;
            var mass = this.findSerieByName('ms').data.map(function (ms) {
                var ansMS = new Array(ms[0].length);
                for (var i = 0; i < ansMS.length; i++) {
                    ansMS[i] = {
                        mass: ms[0][i],
                        intensity: ms[1][i]
                    };
                }
                return ansMS;
            });

            for (var i = 0; i < ans.length; i++) {
                ans[i] = {
                    time: this.times[i],
                    tic: tic[i],
                    mass: mass[i]
                };
            }

            return ans;
        }
    }]);
    return Chromatogram;
}();

module.exports = Chromatogram;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaHJvbWF0b2dyYW0uanMiXSwibmFtZXMiOlsicmVzY2FsZVRpbWUiLCJyZXF1aXJlIiwiQ2hyb21hdG9ncmFtIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInRpbWVzIiwiVHlwZUVycm9yIiwibGVuZ3RoIiwic2VyaWVzIiwic2VyaWUiLCJhZGRTZXJpZSIsIm5hbWUiLCJmaW5kIiwiZGltZW5zaW9uIiwiRXJyb3IiLCJmaW5kU2VyaWVCeU5hbWUiLCJwdXNoIiwiY29udmVyc2lvbkZ1bmN0aW9uIiwiYW5zIiwidGljIiwibWFzcyIsIm1hcCIsIm1zIiwiYW5zTVMiLCJpIiwiaW50ZW5zaXR5IiwidGltZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWNDLFFBQVEsZUFBUixDQUFwQjs7QUFFQTs7Ozs7OztJQU1NQyxZO0FBQ0YsMEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxZQUFJQyxNQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQjtBQUNBQSxtQkFBTyxFQUFDRyxPQUFPSCxJQUFSLEVBQVA7QUFDSCxTQUhELE1BR08sSUFBSSxRQUFPQSxJQUFQLHVEQUFPQSxJQUFQLE9BQWdCLFFBQXBCLEVBQThCO0FBQ2pDLGtCQUFNLElBQUlJLFNBQUosQ0FBYyxpQ0FBZCxDQUFOO0FBQ0g7O0FBRUQsWUFBSSxDQUFDSCxNQUFNQyxPQUFOLENBQWNGLEtBQUtHLEtBQW5CLENBQUwsRUFBZ0M7QUFDNUIsa0JBQU0sSUFBSUMsU0FBSixDQUFjLDBCQUFkLENBQU47QUFDSDtBQUNELGFBQUtELEtBQUwsR0FBYUgsS0FBS0csS0FBbEI7QUFDQSxhQUFLRSxNQUFMLEdBQWNMLEtBQUtHLEtBQUwsQ0FBV0UsTUFBekI7O0FBRUEsYUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxZQUFJTixLQUFLTSxNQUFULEVBQWlCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2IsZ0VBQW9CTixLQUFLTSxNQUF6Qiw0R0FBaUM7QUFBQSx3QkFBdEJDLEtBQXNCOztBQUM3Qix5QkFBS0MsUUFBTCxDQUFjRCxLQUFkO0FBQ0g7QUFIWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSWhCO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozt3Q0FLZ0JFLEksRUFBTTtBQUNsQixtQkFBTyxLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUI7QUFBQSx1QkFBU0gsTUFBTUUsSUFBTixLQUFlQSxJQUF4QjtBQUFBLGFBQWpCLENBQVA7QUFDSDs7QUFFRDs7Ozs7OztpQ0FJU0YsSyxFQUFPO0FBQ1osZ0JBQUksT0FBT0EsTUFBTUksU0FBYixLQUEyQixRQUEvQixFQUF5QztBQUNyQyxzQkFBTSxJQUFJQyxLQUFKLENBQVUsNkJBQVYsQ0FBTjtBQUNIO0FBQ0QsZ0JBQUksT0FBT0wsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQztBQUNoQyxzQkFBTSxJQUFJRyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNIO0FBQ0QsZ0JBQUksS0FBS0MsZUFBTCxDQUFxQk4sTUFBTUUsSUFBM0IsQ0FBSixFQUFzQztBQUNsQyxzQkFBTSxJQUFJRyxLQUFKLHdCQUErQkwsTUFBTUUsSUFBckMscUJBQU47QUFDSDtBQUNELGdCQUFJLENBQUNSLE1BQU1DLE9BQU4sQ0FBY0ssTUFBTVAsSUFBcEIsQ0FBTCxFQUFnQztBQUM1QixzQkFBTSxJQUFJWSxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNIO0FBQ0QsaUJBQUtOLE1BQUwsQ0FBWVEsSUFBWixDQUFpQlAsS0FBakI7QUFDSDs7QUFFRDs7Ozs7Ozt1Q0FJZTtBQUNYLG1CQUFPLEtBQUtKLEtBQUwsQ0FBVyxDQUFYLENBQVA7QUFDSDs7QUFFRDs7Ozs7OztzQ0FJYztBQUNWLG1CQUFPLEtBQUtBLEtBQUwsQ0FBVyxLQUFLRSxNQUFMLEdBQWMsQ0FBekIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7O21DQUlXO0FBQ1AsbUJBQU8sS0FBS0YsS0FBWjtBQUNIOztBQUVEOzs7Ozs7O2lDQUlTQSxLLEVBQU87QUFDWixpQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7O0FBRUQ7Ozs7Ozs7b0NBSVlZLGtCLEVBQW9CO0FBQzVCLGlCQUFLWixLQUFMLEdBQWFOLGFBQVksS0FBS00sS0FBakIsRUFBd0JZLGtCQUF4QixDQUFiO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7aUNBT1M7QUFDTCxnQkFBSUMsTUFBTSxJQUFJZixLQUFKLENBQVUsS0FBS0UsS0FBTCxDQUFXRSxNQUFyQixDQUFWO0FBQ0EsZ0JBQU1ZLE1BQU0sS0FBS0osZUFBTCxDQUFxQixLQUFyQixFQUE0QmIsSUFBeEM7QUFDQSxnQkFBTWtCLE9BQU8sS0FBS0wsZUFBTCxDQUFxQixJQUFyQixFQUEyQmIsSUFBM0IsQ0FBZ0NtQixHQUFoQyxDQUFvQyxVQUFDQyxFQUFELEVBQVE7QUFDckQsb0JBQUlDLFFBQVEsSUFBSXBCLEtBQUosQ0FBVW1CLEdBQUcsQ0FBSCxFQUFNZixNQUFoQixDQUFaO0FBQ0EscUJBQUssSUFBSWlCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTWhCLE1BQTFCLEVBQWtDaUIsR0FBbEMsRUFBdUM7QUFDbkNELDBCQUFNQyxDQUFOLElBQVc7QUFDUEosOEJBQU1FLEdBQUcsQ0FBSCxFQUFNRSxDQUFOLENBREM7QUFFUEMsbUNBQVdILEdBQUcsQ0FBSCxFQUFNRSxDQUFOO0FBRkoscUJBQVg7QUFJSDtBQUNELHVCQUFPRCxLQUFQO0FBQ0gsYUFUWSxDQUFiOztBQVdBLGlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sSUFBSVgsTUFBeEIsRUFBZ0NpQixHQUFoQyxFQUFxQztBQUNqQ04sb0JBQUlNLENBQUosSUFBUztBQUNMRSwwQkFBTSxLQUFLckIsS0FBTCxDQUFXbUIsQ0FBWCxDQUREO0FBRUxMLHlCQUFLQSxJQUFJSyxDQUFKLENBRkE7QUFHTEosMEJBQU1BLEtBQUtJLENBQUw7QUFIRCxpQkFBVDtBQUtIOztBQUVELG1CQUFPTixHQUFQO0FBQ0g7Ozs7O0FBR0xTLE9BQU9DLE9BQVAsR0FBaUIzQixZQUFqQiIsImZpbGUiOiJDaHJvbWF0b2dyYW0uanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZXNjYWxlVGltZSA9IHJlcXVpcmUoJy4vcmVzY2FsZVRpbWUnKTtcblxuLyoqXG4gKiBDbGFzcyBhbGxvd2luZyB0byBzdG9yZSB0aW1lIC8gbXMgKG1zKSBzZXJpZXNcbiAqIEl0IGFsbG93cyBhbHNvIHRvIHN0b3JlIHNpbXBsZSB0aW1lIGEgdHJhY2VcbiAqIEBjbGFzcyBDaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fEFycmF5PG51bWJlcj59IGRhdGEgLSBBIEdDL01TIGRhdGEgZm9ybWF0IG9iamVjdCBvciBhIHRpbWUgc2VyaWVcbiAqL1xuY2xhc3MgQ2hyb21hdG9ncmFtIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAvLyBpbml0IHdpdGggdGltZXNcbiAgICAgICAgICAgIGRhdGEgPSB7dGltZXM6IGRhdGF9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCBvciBhcnJheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEudGltZXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aW1lcyBhcnJheSBpcyBtYW5kYXRvcnknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVzID0gZGF0YS50aW1lcztcbiAgICAgICAgdGhpcy5sZW5ndGggPSBkYXRhLnRpbWVzLmxlbmd0aDtcblxuICAgICAgICB0aGlzLnNlcmllcyA9IFtdO1xuICAgICAgICBpZiAoZGF0YS5zZXJpZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VyaWUgb2YgZGF0YS5zZXJpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNlcmllKHNlcmllKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIHNlcmllIGdpdmluZyB0aGUgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgc2VyaWVcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gT2JqZWN0IHdpdGggYW4gYXJyYXkgb2YgZGF0YSwgZGltZW5zaW9ucyBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIGFycmF5IGFuZCBuYW1lIG9mIHRoZSBzZXJpZVxuICAgICAqL1xuICAgIGZpbmRTZXJpZUJ5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcmllcy5maW5kKHNlcmllID0+IHNlcmllLm5hbWUgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBzZXJpZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZXJpZSAtIE9iamVjdCB3aXRoIGFuIGFycmF5IG9mIGRhdGEsIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSBhbmQgbmFtZSBvZiB0aGUgc2VyaWVcbiAgICAgKi9cbiAgICBhZGRTZXJpZShzZXJpZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNlcmllLmRpbWVuc2lvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2VyaWUgbXVzdCBoYXZlIGEgZGltZW5zaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzZXJpZS5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXJpZSBtdXN0IGhhdmUgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmluZFNlcmllQnlOYW1lKHNlcmllLm5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGEgc2VyaWUgd2l0aCBuYW1lICR7c2VyaWUubmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2VyaWUuZGF0YSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2VyaWUgbXVzdCBoYXZlIGEgZGF0YSBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VyaWVzLnB1c2goc2VyaWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IHRpbWUgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gRmlyc3QgdGltZSB2YWx1ZVxuICAgICAqL1xuICAgIGdldEZpcnN0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCB0aW1lIHZhbHVlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIExhc3QgdGltZSB2YWx1ZVxuICAgICAqL1xuICAgIGdldExhc3RUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbWUgdmFsdWVzXG4gICAgICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gLSBUaW1lIHZhbHVlc1xuICAgICAqL1xuICAgIGdldFRpbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ24gdGhlIHRpbWUgdmFsdWVzXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB0aW1lcyAtIE5ldyB0aW1lIHZhbHVlc1xuICAgICAqL1xuICAgIHNldFRpbWVzKHRpbWVzKSB7XG4gICAgICAgIHRoaXMudGltZXMgPSB0aW1lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllcyB0aGUgdGltZSBhcHBseWluZyB0aGUgY29udmVyc2lvbiBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24obnVtYmVyKX0gY29udmVyc2lvbkZ1bmN0aW9uXG4gICAgICovXG4gICAgcmVzY2FsZVRpbWUoY29udmVyc2lvbkZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMudGltZXMgPSByZXNjYWxlVGltZSh0aGlzLnRpbWVzLCBjb252ZXJzaW9uRnVuY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSBjb250ZW50IHRvIGFuIEpTT04gQXJyYXlcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxvYmplY3Q+fSAtIFJldHVybnMgYSBsaXN0IHdpdGggdGhlIGZvbGxvd2luZyBmaWVsZHM6XG4gICAgICogICogYHRpbWVgOiBOdW1iZXIgZm9yIHRoZSByZXRlbnRpb24gdGltZVxuICAgICAqICAqIGB0aWNgOiBOdW1iZXIgZm9yIHRoZSB0b3RhbCBpb24gY2hyb21hdG9ncmFtXG4gICAgICogICogYG1hc3NgOiBMaXN0IG9mIG1hc3MgdmFsdWVzIGFuZCB0aGVpciByZXNwZWN0aXZlIGludGVuc2l0aWVzXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICB2YXIgYW5zID0gbmV3IEFycmF5KHRoaXMudGltZXMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdGljID0gdGhpcy5maW5kU2VyaWVCeU5hbWUoJ3RpYycpLmRhdGE7XG4gICAgICAgIGNvbnN0IG1hc3MgPSB0aGlzLmZpbmRTZXJpZUJ5TmFtZSgnbXMnKS5kYXRhLm1hcCgobXMpID0+IHtcbiAgICAgICAgICAgIHZhciBhbnNNUyA9IG5ldyBBcnJheShtc1swXS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbnNNUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFuc01TW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICBtYXNzOiBtc1swXVtpXSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW5zaXR5OiBtc1sxXVtpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYW5zTVM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhbnNbaV0gPSB7XG4gICAgICAgICAgICAgICAgdGltZTogdGhpcy50aW1lc1tpXSxcbiAgICAgICAgICAgICAgICB0aWM6IHRpY1tpXSxcbiAgICAgICAgICAgICAgICBtYXNzOiBtYXNzW2ldXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFucztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21hdG9ncmFtO1xuIl19

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gsd = __webpack_require__(140).gsd;

/**
 * Apply the GSD peak picking algorithm
 * @param {Chromatogram} chrom - GC/MS chromatogram where make the peak picking
 * @param {object} [options] - Options object
 * @param {object} [options.heightFilter = 2] - Filter all objects that are bellow `heightFilter` times the median of the height
 * @return {Array<object>} - List of GSD objects
 */
function getPeaks(chrom) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$heightFilter = options.heightFilter,
        heightFilter = _options$heightFilter === undefined ? 2 : _options$heightFilter;


    var tic = chrom.findSerieByName('tic');
    if (!tic) {
        throw new Error('\'tic\' serie not founded');
    }
    tic = tic.data;
    var times = chrom.getTimes();

    // first peak selection
    var peakList = gsd(times, tic, {
        noiseLevel: 0,
        realTopDetection: false,
        smoothY: true,
        sgOptions: { windowSize: 5, polynomial: 2 },
        heightFactor: 2,
        boundaries: true
    });

    peakList.sort(function (a, b) {
        return a.right.index - a.left.index - (b.right.index - b.left.index);
    });
    var medianDotsWidth = peakList[Math.floor((peakList.length - 1) / 2)];
    medianDotsWidth = medianDotsWidth.right.index - medianDotsWidth.left.index;

    // reset parameters
    if (medianDotsWidth < 5) {
        medianDotsWidth = 5;
    }
    if (medianDotsWidth % 2 === 0) {
        medianDotsWidth -= 1;
    }

    // second peak selection
    peakList = gsd(times, tic, {
        noiseLevel: 0,
        realTopDetection: false,
        smoothY: true,
        sgOptions: { windowSize: medianDotsWidth, polynomial: 2 },
        heightFactor: 2,
        boundaries: true
    });
    peakList.sort(function (a, b) {
        return a.height - b.height;
    });

    // filter height by factor
    var medianHeight = peakList[Math.floor((peakList.length - 1) / 2)].height;
    peakList = peakList.filter(function (val) {
        return val.height > medianHeight * heightFilter;
    });

    return peakList;
}

module.exports = getPeaks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nZXRQZWFrcy5qcyJdLCJuYW1lcyI6WyJnc2QiLCJyZXF1aXJlIiwiZ2V0UGVha3MiLCJjaHJvbSIsIm9wdGlvbnMiLCJoZWlnaHRGaWx0ZXIiLCJ0aWMiLCJmaW5kU2VyaWVCeU5hbWUiLCJFcnJvciIsImRhdGEiLCJ0aW1lcyIsImdldFRpbWVzIiwicGVha0xpc3QiLCJub2lzZUxldmVsIiwicmVhbFRvcERldGVjdGlvbiIsInNtb290aFkiLCJzZ09wdGlvbnMiLCJ3aW5kb3dTaXplIiwicG9seW5vbWlhbCIsImhlaWdodEZhY3RvciIsImJvdW5kYXJpZXMiLCJzb3J0IiwiYSIsImIiLCJyaWdodCIsImluZGV4IiwibGVmdCIsIm1lZGlhbkRvdHNXaWR0aCIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImhlaWdodCIsIm1lZGlhbkhlaWdodCIsImZpbHRlciIsInZhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLE1BQU1DLFFBQVEsUUFBUixFQUFrQkQsR0FBOUI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTRSxRQUFULENBQWtCQyxLQUFsQixFQUF1QztBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLGdDQUNSQSxPQURRLENBQzVCQyxZQUQ0QjtBQUFBLFFBQzVCQSxZQUQ0Qix5Q0FDYixDQURhOzs7QUFHbkMsUUFBSUMsTUFBTUgsTUFBTUksZUFBTixDQUFzQixLQUF0QixDQUFWO0FBQ0EsUUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTixjQUFNLElBQUlFLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ0g7QUFDREYsVUFBTUEsSUFBSUcsSUFBVjtBQUNBLFFBQUlDLFFBQVFQLE1BQU1RLFFBQU4sRUFBWjs7QUFFQTtBQUNBLFFBQUlDLFdBQVdaLElBQUlVLEtBQUosRUFBV0osR0FBWCxFQUFnQjtBQUMzQk8sb0JBQVksQ0FEZTtBQUUzQkMsMEJBQWtCLEtBRlM7QUFHM0JDLGlCQUFTLElBSGtCO0FBSTNCQyxtQkFBVyxFQUFDQyxZQUFZLENBQWIsRUFBZ0JDLFlBQVksQ0FBNUIsRUFKZ0I7QUFLM0JDLHNCQUFjLENBTGE7QUFNM0JDLG9CQUFZO0FBTmUsS0FBaEIsQ0FBZjs7QUFTQVIsYUFBU1MsSUFBVCxDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVdELEVBQUVFLEtBQUYsQ0FBUUMsS0FBUixHQUFnQkgsRUFBRUksSUFBRixDQUFPRCxLQUF4QixJQUFrQ0YsRUFBRUMsS0FBRixDQUFRQyxLQUFSLEdBQWdCRixFQUFFRyxJQUFGLENBQU9ELEtBQXpELENBQVY7QUFBQSxLQUFkO0FBQ0EsUUFBSUUsa0JBQWtCZixTQUFTZ0IsS0FBS0MsS0FBTCxDQUFXLENBQUNqQixTQUFTa0IsTUFBVCxHQUFrQixDQUFuQixJQUF3QixDQUFuQyxDQUFULENBQXRCO0FBQ0FILHNCQUFrQkEsZ0JBQWdCSCxLQUFoQixDQUFzQkMsS0FBdEIsR0FBOEJFLGdCQUFnQkQsSUFBaEIsQ0FBcUJELEtBQXJFOztBQUVBO0FBQ0EsUUFBSUUsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3JCQSwwQkFBa0IsQ0FBbEI7QUFDSDtBQUNELFFBQUlBLGtCQUFrQixDQUFsQixLQUF3QixDQUE1QixFQUErQjtBQUMzQkEsMkJBQW1CLENBQW5CO0FBQ0g7O0FBRUQ7QUFDQWYsZUFBV1osSUFBSVUsS0FBSixFQUFXSixHQUFYLEVBQWdCO0FBQ3ZCTyxvQkFBWSxDQURXO0FBRXZCQywwQkFBa0IsS0FGSztBQUd2QkMsaUJBQVMsSUFIYztBQUl2QkMsbUJBQVcsRUFBQ0MsWUFBWVUsZUFBYixFQUE4QlQsWUFBWSxDQUExQyxFQUpZO0FBS3ZCQyxzQkFBYyxDQUxTO0FBTXZCQyxvQkFBWTtBQU5XLEtBQWhCLENBQVg7QUFRQVIsYUFBU1MsSUFBVCxDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELEVBQUVTLE1BQUYsR0FBV1IsRUFBRVEsTUFBdkI7QUFBQSxLQUFkOztBQUVBO0FBQ0EsUUFBSUMsZUFBZXBCLFNBQVNnQixLQUFLQyxLQUFMLENBQVcsQ0FBQ2pCLFNBQVNrQixNQUFULEdBQWtCLENBQW5CLElBQXdCLENBQW5DLENBQVQsRUFBZ0RDLE1BQW5FO0FBQ0FuQixlQUFXQSxTQUFTcUIsTUFBVCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsZUFBU0EsSUFBSUgsTUFBSixHQUFhQyxlQUFlM0IsWUFBckM7QUFBQSxLQUFoQixDQUFYOztBQUVBLFdBQU9PLFFBQVA7QUFDSDs7QUFFRHVCLE9BQU9DLE9BQVAsR0FBaUJsQyxRQUFqQiIsImZpbGUiOiJnZXRQZWFrcy5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdzZCA9IHJlcXVpcmUoJ21sLWdzZCcpLmdzZDtcblxuLyoqXG4gKiBBcHBseSB0aGUgR1NEIHBlYWsgcGlja2luZyBhbGdvcml0aG1cbiAqIEBwYXJhbSB7Q2hyb21hdG9ncmFtfSBjaHJvbSAtIEdDL01TIGNocm9tYXRvZ3JhbSB3aGVyZSBtYWtlIHRoZSBwZWFrIHBpY2tpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmhlaWdodEZpbHRlciA9IDJdIC0gRmlsdGVyIGFsbCBvYmplY3RzIHRoYXQgYXJlIGJlbGxvdyBgaGVpZ2h0RmlsdGVyYCB0aW1lcyB0aGUgbWVkaWFuIG9mIHRoZSBoZWlnaHRcbiAqIEByZXR1cm4ge0FycmF5PG9iamVjdD59IC0gTGlzdCBvZiBHU0Qgb2JqZWN0c1xuICovXG5mdW5jdGlvbiBnZXRQZWFrcyhjaHJvbSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge2hlaWdodEZpbHRlciA9IDJ9ID0gb3B0aW9ucztcblxuICAgIGxldCB0aWMgPSBjaHJvbS5maW5kU2VyaWVCeU5hbWUoJ3RpYycpO1xuICAgIGlmICghdGljKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXFwndGljXFwnIHNlcmllIG5vdCBmb3VuZGVkJyk7XG4gICAgfVxuICAgIHRpYyA9IHRpYy5kYXRhO1xuICAgIGxldCB0aW1lcyA9IGNocm9tLmdldFRpbWVzKCk7XG5cbiAgICAvLyBmaXJzdCBwZWFrIHNlbGVjdGlvblxuICAgIGxldCBwZWFrTGlzdCA9IGdzZCh0aW1lcywgdGljLCB7XG4gICAgICAgIG5vaXNlTGV2ZWw6IDAsXG4gICAgICAgIHJlYWxUb3BEZXRlY3Rpb246IGZhbHNlLFxuICAgICAgICBzbW9vdGhZOiB0cnVlLFxuICAgICAgICBzZ09wdGlvbnM6IHt3aW5kb3dTaXplOiA1LCBwb2x5bm9taWFsOiAyfSxcbiAgICAgICAgaGVpZ2h0RmFjdG9yOiAyLFxuICAgICAgICBib3VuZGFyaWVzOiB0cnVlXG4gICAgfSk7XG5cbiAgICBwZWFrTGlzdC5zb3J0KChhLCBiKSA9PiAoYS5yaWdodC5pbmRleCAtIGEubGVmdC5pbmRleCkgLSAoYi5yaWdodC5pbmRleCAtIGIubGVmdC5pbmRleCkpO1xuICAgIGxldCBtZWRpYW5Eb3RzV2lkdGggPSBwZWFrTGlzdFtNYXRoLmZsb29yKChwZWFrTGlzdC5sZW5ndGggLSAxKSAvIDIpXTtcbiAgICBtZWRpYW5Eb3RzV2lkdGggPSBtZWRpYW5Eb3RzV2lkdGgucmlnaHQuaW5kZXggLSBtZWRpYW5Eb3RzV2lkdGgubGVmdC5pbmRleDtcblxuICAgIC8vIHJlc2V0IHBhcmFtZXRlcnNcbiAgICBpZiAobWVkaWFuRG90c1dpZHRoIDwgNSkge1xuICAgICAgICBtZWRpYW5Eb3RzV2lkdGggPSA1O1xuICAgIH1cbiAgICBpZiAobWVkaWFuRG90c1dpZHRoICUgMiA9PT0gMCkge1xuICAgICAgICBtZWRpYW5Eb3RzV2lkdGggLT0gMTtcbiAgICB9XG5cbiAgICAvLyBzZWNvbmQgcGVhayBzZWxlY3Rpb25cbiAgICBwZWFrTGlzdCA9IGdzZCh0aW1lcywgdGljLCB7XG4gICAgICAgIG5vaXNlTGV2ZWw6IDAsXG4gICAgICAgIHJlYWxUb3BEZXRlY3Rpb246IGZhbHNlLFxuICAgICAgICBzbW9vdGhZOiB0cnVlLFxuICAgICAgICBzZ09wdGlvbnM6IHt3aW5kb3dTaXplOiBtZWRpYW5Eb3RzV2lkdGgsIHBvbHlub21pYWw6IDJ9LFxuICAgICAgICBoZWlnaHRGYWN0b3I6IDIsXG4gICAgICAgIGJvdW5kYXJpZXM6IHRydWVcbiAgICB9KTtcbiAgICBwZWFrTGlzdC5zb3J0KChhLCBiKSA9PiBhLmhlaWdodCAtIGIuaGVpZ2h0KTtcblxuICAgIC8vIGZpbHRlciBoZWlnaHQgYnkgZmFjdG9yXG4gICAgbGV0IG1lZGlhbkhlaWdodCA9IHBlYWtMaXN0W01hdGguZmxvb3IoKHBlYWtMaXN0Lmxlbmd0aCAtIDEpIC8gMildLmhlaWdodDtcbiAgICBwZWFrTGlzdCA9IHBlYWtMaXN0LmZpbHRlcigodmFsKSA9PiB2YWwuaGVpZ2h0ID4gbWVkaWFuSGVpZ2h0ICogaGVpZ2h0RmlsdGVyKTtcblxuICAgIHJldHVybiBwZWFrTGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQZWFrcztcbiJdfQ==

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Filters based in groupWidth
 * @ignore
 * @param {Array<object>} list - Sorted list of XY-objects to be filtered
 * @param {number} maxNumberPeaks - Maximum number of peaks for each mass spectra
 * @param {number} groupWidth - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - List of XY-objects filtered
 */

function moreDistinct(list, maxNumberPeaks, groupWidth) {
    var len = 0;
    if (maxNumberPeaks > list.length) {
        maxNumberPeaks = list.length;
    }
    var filteredList = new Array(maxNumberPeaks);

    for (var i = 0; i < list.length && len < maxNumberPeaks; ++i) {
        var outRange = true;
        for (var j = 0; j < len && outRange; ++j) {
            outRange = outRange && !(list[i].x > filteredList[j].x - groupWidth && list[i].x < filteredList[j].x + groupWidth);
        }
        if (outRange) {
            filteredList[len++] = list[i];
        }
    }
    filteredList.length = len;

    return filteredList;
}

/**
 * Filters a mass object
 * @param {object} massXYObject - Object with x and y data
 * @param {Array<number>} massXYObject.x - Array of mass values
 * @param {Array<number>} massXYObject.y - Array of abundance values
 * @param {object} options - Options for the integral filtering
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @return {object} - Object with filtered x and y data
 */
function massFilter(massXYObject) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$thresholdFac = options.thresholdFactor,
        thresholdFactor = _options$thresholdFac === undefined ? 0 : _options$thresholdFac,
        _options$maxNumberPea = options.maxNumberPeaks,
        maxNumberPeaks = _options$maxNumberPea === undefined ? Number.MAX_VALUE : _options$maxNumberPea,
        _options$groupWidth = options.groupWidth,
        groupWidth = _options$groupWidth === undefined ? 0 : _options$groupWidth;


    var max = -1;
    var massList = new Array(massXYObject.x.length);
    for (var i = 0; i < massXYObject.x.length; ++i) {
        massList[i] = {
            x: massXYObject.x[i],
            y: massXYObject.y[i]
        };

        if (massXYObject.y[i] > max) {
            max = massXYObject.y[i];
        }
    }

    // filters based in thresholdFactor
    max *= thresholdFactor;
    var filteredList = massList.filter(function (val) {
        return val.y > max;
    });

    // filters based in maxNumberPeaks
    if (filteredList.length > maxNumberPeaks || groupWidth !== 0) {
        filteredList.sort(function (a, b) {
            return b.y - a.y;
        });

        // filters based in groupWidth
        filteredList = moreDistinct(filteredList, maxNumberPeaks, groupWidth);

        filteredList.sort(function (a, b) {
            return a.x - b.x;
        });
    }

    var ans = {
        x: new Array(filteredList.length),
        y: new Array(filteredList.length)
    };
    for (var _i = 0; _i < filteredList.length; ++_i) {
        ans.x[_i] = filteredList[_i].x;
        ans.y[_i] = filteredList[_i].y;
    }

    return ans;
}

module.exports = massFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYXNzRmlsdGVyLmpzIl0sIm5hbWVzIjpbIm1vcmVEaXN0aW5jdCIsImxpc3QiLCJtYXhOdW1iZXJQZWFrcyIsImdyb3VwV2lkdGgiLCJsZW4iLCJsZW5ndGgiLCJmaWx0ZXJlZExpc3QiLCJBcnJheSIsImkiLCJvdXRSYW5nZSIsImoiLCJ4IiwibWFzc0ZpbHRlciIsIm1hc3NYWU9iamVjdCIsIm9wdGlvbnMiLCJ0aHJlc2hvbGRGYWN0b3IiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtYXgiLCJtYXNzTGlzdCIsInkiLCJmaWx0ZXIiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJhbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLGNBQTVCLEVBQTRDQyxVQUE1QyxFQUF3RDtBQUNwRCxRQUFJQyxNQUFNLENBQVY7QUFDQSxRQUFJRixpQkFBaUJELEtBQUtJLE1BQTFCLEVBQWtDO0FBQzlCSCx5QkFBaUJELEtBQUtJLE1BQXRCO0FBQ0g7QUFDRCxRQUFJQyxlQUFlLElBQUlDLEtBQUosQ0FBVUwsY0FBVixDQUFuQjs7QUFFQSxTQUFLLElBQUlNLElBQUksQ0FBYixFQUFpQkEsSUFBSVAsS0FBS0ksTUFBVixJQUFzQkQsTUFBTUYsY0FBNUMsRUFBNkQsRUFBRU0sQ0FBL0QsRUFBa0U7QUFDOUQsWUFBSUMsV0FBVyxJQUFmO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlOLEdBQUosSUFBV0ssUUFBM0IsRUFBcUMsRUFBRUMsQ0FBdkMsRUFBMEM7QUFDdENELHVCQUFXQSxZQUFZLEVBQUdSLEtBQUtPLENBQUwsRUFBUUcsQ0FBUixHQUFhTCxhQUFhSSxDQUFiLEVBQWdCQyxDQUFoQixHQUFvQlIsVUFBbEMsSUFBbURGLEtBQUtPLENBQUwsRUFBUUcsQ0FBUixHQUFhTCxhQUFhSSxDQUFiLEVBQWdCQyxDQUFoQixHQUFvQlIsVUFBdEYsQ0FBdkI7QUFDSDtBQUNELFlBQUlNLFFBQUosRUFBYztBQUNWSCx5QkFBYUYsS0FBYixJQUFzQkgsS0FBS08sQ0FBTCxDQUF0QjtBQUNIO0FBQ0o7QUFDREYsaUJBQWFELE1BQWIsR0FBc0JELEdBQXRCOztBQUVBLFdBQU9FLFlBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7QUFXQSxTQUFTTSxVQUFULENBQW9CQyxZQUFwQixFQUFnRDtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLGdDQUNxQ0EsT0FEckMsQ0FDckNDLGVBRHFDO0FBQUEsUUFDckNBLGVBRHFDLHlDQUNuQixDQURtQjtBQUFBLGdDQUNxQ0QsT0FEckMsQ0FDaEJaLGNBRGdCO0FBQUEsUUFDaEJBLGNBRGdCLHlDQUNDYyxPQUFPQyxTQURSO0FBQUEsOEJBQ3FDSCxPQURyQyxDQUNtQlgsVUFEbkI7QUFBQSxRQUNtQkEsVUFEbkIsdUNBQ2dDLENBRGhDOzs7QUFHNUMsUUFBSWUsTUFBTSxDQUFDLENBQVg7QUFDQSxRQUFJQyxXQUFXLElBQUlaLEtBQUosQ0FBVU0sYUFBYUYsQ0FBYixDQUFlTixNQUF6QixDQUFmO0FBQ0EsU0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlLLGFBQWFGLENBQWIsQ0FBZU4sTUFBbkMsRUFBMkMsRUFBRUcsQ0FBN0MsRUFBZ0Q7QUFDNUNXLGlCQUFTWCxDQUFULElBQWM7QUFDVkcsZUFBR0UsYUFBYUYsQ0FBYixDQUFlSCxDQUFmLENBRE87QUFFVlksZUFBR1AsYUFBYU8sQ0FBYixDQUFlWixDQUFmO0FBRk8sU0FBZDs7QUFLQSxZQUFJSyxhQUFhTyxDQUFiLENBQWVaLENBQWYsSUFBb0JVLEdBQXhCLEVBQTZCO0FBQ3pCQSxrQkFBTUwsYUFBYU8sQ0FBYixDQUFlWixDQUFmLENBQU47QUFDSDtBQUNKOztBQUVEO0FBQ0FVLFdBQU9ILGVBQVA7QUFDQSxRQUFJVCxlQUFlYSxTQUFTRSxNQUFULENBQWdCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJRixDQUFKLEdBQVFGLEdBQWpCO0FBQUEsS0FBaEIsQ0FBbkI7O0FBRUE7QUFDQSxRQUFJWixhQUFhRCxNQUFiLEdBQXNCSCxjQUF0QixJQUF3Q0MsZUFBZSxDQUEzRCxFQUE4RDtBQUMxREcscUJBQWFpQixJQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1CQUFVQSxFQUFFTCxDQUFGLEdBQU1JLEVBQUVKLENBQWxCO0FBQUEsU0FBbEI7O0FBRUE7QUFDQWQsdUJBQWVOLGFBQWFNLFlBQWIsRUFBMkJKLGNBQTNCLEVBQTJDQyxVQUEzQyxDQUFmOztBQUVBRyxxQkFBYWlCLElBQWIsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELEVBQUViLENBQUYsR0FBTWMsRUFBRWQsQ0FBbEI7QUFBQSxTQUFsQjtBQUNIOztBQUVELFFBQUllLE1BQU07QUFDTmYsV0FBRyxJQUFJSixLQUFKLENBQVVELGFBQWFELE1BQXZCLENBREc7QUFFTmUsV0FBRyxJQUFJYixLQUFKLENBQVVELGFBQWFELE1BQXZCO0FBRkcsS0FBVjtBQUlBLFNBQUssSUFBSUcsS0FBSSxDQUFiLEVBQWdCQSxLQUFJRixhQUFhRCxNQUFqQyxFQUF5QyxFQUFFRyxFQUEzQyxFQUE4QztBQUMxQ2tCLFlBQUlmLENBQUosQ0FBTUgsRUFBTixJQUFXRixhQUFhRSxFQUFiLEVBQWdCRyxDQUEzQjtBQUNBZSxZQUFJTixDQUFKLENBQU1aLEVBQU4sSUFBV0YsYUFBYUUsRUFBYixFQUFnQlksQ0FBM0I7QUFDSDs7QUFFRCxXQUFPTSxHQUFQO0FBQ0g7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJoQixVQUFqQiIsImZpbGUiOiJtYXNzRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBGaWx0ZXJzIGJhc2VkIGluIGdyb3VwV2lkdGhcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gbGlzdCAtIFNvcnRlZCBsaXN0IG9mIFhZLW9iamVjdHMgdG8gYmUgZmlsdGVyZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhOdW1iZXJQZWFrcyAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYVxuICogQHBhcmFtIHtudW1iZXJ9IGdyb3VwV2lkdGggLSBXaGVuIGZpbmQgYSBtYXggY2FuJ3QgYmUgYW5vdGhlciBtYXggaW4gYSByYWRpdXMgb2YgdGhpcyBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxvYmplY3Q+fSAtIExpc3Qgb2YgWFktb2JqZWN0cyBmaWx0ZXJlZFxuICovXG5mdW5jdGlvbiBtb3JlRGlzdGluY3QobGlzdCwgbWF4TnVtYmVyUGVha3MsIGdyb3VwV2lkdGgpIHtcbiAgICBsZXQgbGVuID0gMDtcbiAgICBpZiAobWF4TnVtYmVyUGVha3MgPiBsaXN0Lmxlbmd0aCkge1xuICAgICAgICBtYXhOdW1iZXJQZWFrcyA9IGxpc3QubGVuZ3RoO1xuICAgIH1cbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gbmV3IEFycmF5KG1heE51bWJlclBlYWtzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyAoaSA8IGxpc3QubGVuZ3RoKSAmJiAobGVuIDwgbWF4TnVtYmVyUGVha3MpOyArK2kpIHtcbiAgICAgICAgbGV0IG91dFJhbmdlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW4gJiYgb3V0UmFuZ2U7ICsraikge1xuICAgICAgICAgICAgb3V0UmFuZ2UgPSBvdXRSYW5nZSAmJiAhKChsaXN0W2ldLnggPiAoZmlsdGVyZWRMaXN0W2pdLnggLSBncm91cFdpZHRoKSkgJiYgKGxpc3RbaV0ueCA8IChmaWx0ZXJlZExpc3Rbal0ueCArIGdyb3VwV2lkdGgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dFJhbmdlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZExpc3RbbGVuKytdID0gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWx0ZXJlZExpc3QubGVuZ3RoID0gbGVuO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbn1cblxuLyoqXG4gKiBGaWx0ZXJzIGEgbWFzcyBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtYXNzWFlPYmplY3QgLSBPYmplY3Qgd2l0aCB4IGFuZCB5IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbWFzc1hZT2JqZWN0LnggLSBBcnJheSBvZiBtYXNzIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBtYXNzWFlPYmplY3QueSAtIEFycmF5IG9mIGFidW5kYW5jZSB2YWx1ZXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGludGVncmFsIGZpbHRlcmluZ1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEByZXR1cm4ge29iamVjdH0gLSBPYmplY3Qgd2l0aCBmaWx0ZXJlZCB4IGFuZCB5IGRhdGFcbiAqL1xuZnVuY3Rpb24gbWFzc0ZpbHRlcihtYXNzWFlPYmplY3QsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHt0aHJlc2hvbGRGYWN0b3IgPSAwLCBtYXhOdW1iZXJQZWFrcyA9IE51bWJlci5NQVhfVkFMVUUsIGdyb3VwV2lkdGggPSAwfSA9IG9wdGlvbnM7XG5cbiAgICBsZXQgbWF4ID0gLTE7XG4gICAgbGV0IG1hc3NMaXN0ID0gbmV3IEFycmF5KG1hc3NYWU9iamVjdC54Lmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzWFlPYmplY3QueC5sZW5ndGg7ICsraSkge1xuICAgICAgICBtYXNzTGlzdFtpXSA9IHtcbiAgICAgICAgICAgIHg6IG1hc3NYWU9iamVjdC54W2ldLFxuICAgICAgICAgICAgeTogbWFzc1hZT2JqZWN0LnlbaV1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWFzc1hZT2JqZWN0LnlbaV0gPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IG1hc3NYWU9iamVjdC55W2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsdGVycyBiYXNlZCBpbiB0aHJlc2hvbGRGYWN0b3JcbiAgICBtYXggKj0gdGhyZXNob2xkRmFjdG9yO1xuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBtYXNzTGlzdC5maWx0ZXIoKHZhbCkgPT4gdmFsLnkgPiBtYXgpO1xuXG4gICAgLy8gZmlsdGVycyBiYXNlZCBpbiBtYXhOdW1iZXJQZWFrc1xuICAgIGlmIChmaWx0ZXJlZExpc3QubGVuZ3RoID4gbWF4TnVtYmVyUGVha3MgfHwgZ3JvdXBXaWR0aCAhPT0gMCkge1xuICAgICAgICBmaWx0ZXJlZExpc3Quc29ydCgoYSwgYikgPT4gYi55IC0gYS55KTtcblxuICAgICAgICAvLyBmaWx0ZXJzIGJhc2VkIGluIGdyb3VwV2lkdGhcbiAgICAgICAgZmlsdGVyZWRMaXN0ID0gbW9yZURpc3RpbmN0KGZpbHRlcmVkTGlzdCwgbWF4TnVtYmVyUGVha3MsIGdyb3VwV2lkdGgpO1xuXG4gICAgICAgIGZpbHRlcmVkTGlzdC5zb3J0KChhLCBiKSA9PiBhLnggLSBiLngpO1xuICAgIH1cblxuICAgIGxldCBhbnMgPSB7XG4gICAgICAgIHg6IG5ldyBBcnJheShmaWx0ZXJlZExpc3QubGVuZ3RoKSxcbiAgICAgICAgeTogbmV3IEFycmF5KGZpbHRlcmVkTGlzdC5sZW5ndGgpXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICBhbnMueFtpXSA9IGZpbHRlcmVkTGlzdFtpXS54O1xuICAgICAgICBhbnMueVtpXSA9IGZpbHRlcmVkTGlzdFtpXS55O1xuICAgIH1cblxuICAgIHJldHVybiBhbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFzc0ZpbHRlcjtcbiJdfQ==

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(87);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var massFilter = __webpack_require__(30);

/**
 * Integrate MS spectra of a peak list
 * @param {Array<object>} peakList - List of GSD objects
 * @param {Array<object>} sampleMS - MS array of GC spectra
 * @param {object} options - Options for the integral filtering
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
 */
function massInPeaks(peakList, sampleMS) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // integrate MS
    for (var i = 0; i < peakList.length; ++i) {
        var massDictionary = {};
        var max = -1;
        for (var j = peakList[i].left.index; j <= peakList[i].right.index; ++j) {
            for (var k = 0; k < sampleMS[j][0].length; ++k) {
                // round the mass value
                var mass = Math.round(sampleMS[j][0][k]);

                // add the mass value to the dictionary
                if (massDictionary[mass]) {
                    massDictionary[mass] += sampleMS[j][1][k];
                } else {
                    massDictionary[mass] = sampleMS[j][1][k];
                }

                if (massDictionary[mass] > max) {
                    max = massDictionary[mass];
                }
            }
        }
        var massList = (0, _keys2.default)(massDictionary);
        var msSum = {
            x: new Array(massList.length),
            y: new Array(massList.length)
        };

        for (var _j = 0; _j < massList.length; ++_j) {
            msSum.x[_j] = Number(massList[_j]);
            msSum.y[_j] = massDictionary[massList[_j]];
        }

        if (options.maxNumberPeaks || options.thresholdFactor || options.groupWidth) {
            msSum = massFilter(msSum, options);
        }
        peakList[i].ms = msSum;
    }

    return peakList;
}

module.exports = massInPeaks;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYXNzSW5QZWFrcy5qcyJdLCJuYW1lcyI6WyJtYXNzRmlsdGVyIiwicmVxdWlyZSIsIm1hc3NJblBlYWtzIiwicGVha0xpc3QiLCJzYW1wbGVNUyIsIm9wdGlvbnMiLCJpIiwibGVuZ3RoIiwibWFzc0RpY3Rpb25hcnkiLCJtYXgiLCJqIiwibGVmdCIsImluZGV4IiwicmlnaHQiLCJrIiwibWFzcyIsIk1hdGgiLCJyb3VuZCIsIm1hc3NMaXN0IiwibXNTdW0iLCJ4IiwiQXJyYXkiLCJ5IiwiTnVtYmVyIiwibWF4TnVtYmVyUGVha3MiLCJ0aHJlc2hvbGRGYWN0b3IiLCJncm91cFdpZHRoIiwibXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGNBQVIsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7QUFVQSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBdUQ7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ25EO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFNBQVNJLE1BQTdCLEVBQXFDLEVBQUVELENBQXZDLEVBQTBDO0FBQ3RDLFlBQUlFLGlCQUFpQixFQUFyQjtBQUNBLFlBQUlDLE1BQU0sQ0FBQyxDQUFYO0FBQ0EsYUFBSyxJQUFJQyxJQUFJUCxTQUFTRyxDQUFULEVBQVlLLElBQVosQ0FBaUJDLEtBQTlCLEVBQXFDRixLQUFLUCxTQUFTRyxDQUFULEVBQVlPLEtBQVosQ0FBa0JELEtBQTVELEVBQW1FLEVBQUVGLENBQXJFLEVBQXdFO0FBQ3BFLGlCQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSVYsU0FBU00sQ0FBVCxFQUFZLENBQVosRUFBZUgsTUFBbkMsRUFBMkMsRUFBRU8sQ0FBN0MsRUFBZ0Q7QUFDNUM7QUFDQSxvQkFBSUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXYixTQUFTTSxDQUFULEVBQVksQ0FBWixFQUFlSSxDQUFmLENBQVgsQ0FBWDs7QUFFQTtBQUNBLG9CQUFJTixlQUFlTyxJQUFmLENBQUosRUFBMEI7QUFDdEJQLG1DQUFlTyxJQUFmLEtBQXdCWCxTQUFTTSxDQUFULEVBQVksQ0FBWixFQUFlSSxDQUFmLENBQXhCO0FBQ0gsaUJBRkQsTUFFTztBQUNITixtQ0FBZU8sSUFBZixJQUF1QlgsU0FBU00sQ0FBVCxFQUFZLENBQVosRUFBZUksQ0FBZixDQUF2QjtBQUNIOztBQUVELG9CQUFJTixlQUFlTyxJQUFmLElBQXVCTixHQUEzQixFQUFnQztBQUM1QkEsMEJBQU1ELGVBQWVPLElBQWYsQ0FBTjtBQUNIO0FBQ0o7QUFDSjtBQUNELFlBQU1HLFdBQVcsb0JBQVlWLGNBQVosQ0FBakI7QUFDQSxZQUFJVyxRQUFRO0FBQ1JDLGVBQUcsSUFBSUMsS0FBSixDQUFVSCxTQUFTWCxNQUFuQixDQURLO0FBRVJlLGVBQUcsSUFBSUQsS0FBSixDQUFVSCxTQUFTWCxNQUFuQjtBQUZLLFNBQVo7O0FBS0EsYUFBSyxJQUFJRyxLQUFJLENBQWIsRUFBZ0JBLEtBQUlRLFNBQVNYLE1BQTdCLEVBQXFDLEVBQUVHLEVBQXZDLEVBQTBDO0FBQ3RDUyxrQkFBTUMsQ0FBTixDQUFRVixFQUFSLElBQWFhLE9BQU9MLFNBQVNSLEVBQVQsQ0FBUCxDQUFiO0FBQ0FTLGtCQUFNRyxDQUFOLENBQVFaLEVBQVIsSUFBYUYsZUFBZVUsU0FBU1IsRUFBVCxDQUFmLENBQWI7QUFDSDs7QUFFRCxZQUFJTCxRQUFRbUIsY0FBUixJQUEwQm5CLFFBQVFvQixlQUFsQyxJQUFxRHBCLFFBQVFxQixVQUFqRSxFQUE2RTtBQUN6RVAsb0JBQVFuQixXQUFXbUIsS0FBWCxFQUFrQmQsT0FBbEIsQ0FBUjtBQUNIO0FBQ0RGLGlCQUFTRyxDQUFULEVBQVlxQixFQUFaLEdBQWlCUixLQUFqQjtBQUNIOztBQUVELFdBQU9oQixRQUFQO0FBQ0g7O0FBRUR5QixPQUFPQyxPQUFQLEdBQWlCM0IsV0FBakIiLCJmaWxlIjoibWFzc0luUGVha3MuanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXNzRmlsdGVyID0gcmVxdWlyZSgnLi9tYXNzRmlsdGVyJyk7XG5cbi8qKlxuICogSW50ZWdyYXRlIE1TIHNwZWN0cmEgb2YgYSBwZWFrIGxpc3RcbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcGVha0xpc3QgLSBMaXN0IG9mIEdTRCBvYmplY3RzXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHNhbXBsZU1TIC0gTVMgYXJyYXkgb2YgR0Mgc3BlY3RyYVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgaW50ZWdyYWwgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGhyZXNob2xkRmFjdG9yID0gMF0gLSBFdmVyeSBwZWFrIHRoYXQgaXQncyBiZWxsb3cgdGhlIG1haW4gcGVhayB0aW1lcyB0aGlzIGZhY3RvciBmaWxsIGJlIHJlbW92ZWQgKHdoZW4gaXMgMCB0aGVyZSdzIG5vIGZpbHRlcilcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhOdW1iZXJQZWFrcyA9IE51bWJlci5NQVhfVkFMVUVdIC0gTWF4aW11bSBudW1iZXIgb2YgcGVha3MgZm9yIGVhY2ggbWFzcyBzcGVjdHJhICh3aGVuIGlzIE51bWJlci5NQVhfVkFMVUUgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuZ3JvdXBXaWR0aCA9IDBdIC0gV2hlbiBmaW5kIGEgbWF4IGNhbid0IGJlIGFub3RoZXIgbWF4IGluIGEgcmFkaXVzIG9mIHRoaXMgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8b2JqZWN0Pn0gLSBMaXN0IG9mIEdTRCBvYmplY3RzIHdpdGggYW4gZXh0cmEgJ21zJyBmaWVsZCB3aXRoIHRoZSBpbnRlZ3JhdGVkIE1TIHNwZWN0cmFcbiAqL1xuZnVuY3Rpb24gbWFzc0luUGVha3MocGVha0xpc3QsIHNhbXBsZU1TLCBvcHRpb25zID0ge30pIHtcbiAgICAvLyBpbnRlZ3JhdGUgTVNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlYWtMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBtYXNzRGljdGlvbmFyeSA9IHt9O1xuICAgICAgICBsZXQgbWF4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGogPSBwZWFrTGlzdFtpXS5sZWZ0LmluZGV4OyBqIDw9IHBlYWtMaXN0W2ldLnJpZ2h0LmluZGV4OyArK2opIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2FtcGxlTVNbal1bMF0ubGVuZ3RoOyArK2spIHtcbiAgICAgICAgICAgICAgICAvLyByb3VuZCB0aGUgbWFzcyB2YWx1ZVxuICAgICAgICAgICAgICAgIGxldCBtYXNzID0gTWF0aC5yb3VuZChzYW1wbGVNU1tqXVswXVtrXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIG1hc3MgdmFsdWUgdG8gdGhlIGRpY3Rpb25hcnlcbiAgICAgICAgICAgICAgICBpZiAobWFzc0RpY3Rpb25hcnlbbWFzc10pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzc0RpY3Rpb25hcnlbbWFzc10gKz0gc2FtcGxlTVNbal1bMV1ba107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzc0RpY3Rpb25hcnlbbWFzc10gPSBzYW1wbGVNU1tqXVsxXVtrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWFzc0RpY3Rpb25hcnlbbWFzc10gPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gbWFzc0RpY3Rpb25hcnlbbWFzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hc3NMaXN0ID0gT2JqZWN0LmtleXMobWFzc0RpY3Rpb25hcnkpO1xuICAgICAgICBsZXQgbXNTdW0gPSB7XG4gICAgICAgICAgICB4OiBuZXcgQXJyYXkobWFzc0xpc3QubGVuZ3RoKSxcbiAgICAgICAgICAgIHk6IG5ldyBBcnJheShtYXNzTGlzdC5sZW5ndGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXNzTGlzdC5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbXNTdW0ueFtqXSA9IE51bWJlcihtYXNzTGlzdFtqXSk7XG4gICAgICAgICAgICBtc1N1bS55W2pdID0gbWFzc0RpY3Rpb25hcnlbbWFzc0xpc3Rbal1dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWF4TnVtYmVyUGVha3MgfHwgb3B0aW9ucy50aHJlc2hvbGRGYWN0b3IgfHwgb3B0aW9ucy5ncm91cFdpZHRoKSB7XG4gICAgICAgICAgICBtc1N1bSA9IG1hc3NGaWx0ZXIobXNTdW0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHBlYWtMaXN0W2ldLm1zID0gbXNTdW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlYWtMaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc3NJblBlYWtzO1xuIl19

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(4)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(39)('keys')
  , uid    = __webpack_require__(24);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(33);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(20);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(3)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(35)
  , wksExt         = __webpack_require__(44)
  , defineProperty = __webpack_require__(8).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.hypotenuse = function hypotenuse(a, b) {
    var r;
    if (Math.abs(a) > Math.abs(b)) {
        r = b / a;
        return Math.abs(a) * Math.sqrt(1 + r * r);
    }
    if (b !== 0) {
        r = a / b;
        return Math.abs(b) * Math.sqrt(1 + r * r);
    }
    return 0;
};

// For use in the decomposition algorithms. With big matrices, access time is
// too long on elements from array subclass
// todo check when it is fixed in v8
// http://jsperf.com/access-and-write-array-subclass
exports.getEmpty2DArray = function (rows, columns) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
    }
    return array;
};

exports.getFilled2DArray = function (rows, columns, value) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for (var j = 0; j < columns; j++) {
            array[i][j] = value;
        }
    }
    return array;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.hypotenuse = function hypotenuse(a, b) {
    var r;
    if (Math.abs(a) > Math.abs(b)) {
        r = b / a;
        return Math.abs(a) * Math.sqrt(1 + r * r);
    }
    if (b !== 0) {
        r = a / b;
        return Math.abs(b) * Math.sqrt(1 + r * r);
    }
    return 0;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.hypotenuse = function hypotenuse(a, b) {
    var r;
    if (Math.abs(a) > Math.abs(b)) {
        r = b / a;
        return Math.abs(a) * Math.sqrt(1 + r * r);
    }
    if (b !== 0) {
        r = a / b;
        return Math.abs(b) * Math.sqrt(1 + r * r);
    }
    return 0;
};

// For use in the decomposition algorithms. With big matrices, access time is
// too long on elements from array subclass
// todo check when it is fixed in v8
// http://jsperf.com/access-and-write-array-subclass
exports.getEmpty2DArray = function (rows, columns) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
    }
    return array;
};

exports.getFilled2DArray = function (rows, columns, value) {
    var array = new Array(rows);
    for (var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for (var j = 0; j < columns; j++) {
            array[i][j] = value;
        }
    }
    return array;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2).Matrix;
module.exports.Decompositions = module.exports.DC = __webpack_require__(176);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var maybeToPrecision = __webpack_require__(17).maybeToPrecision;
const BaseRegression = __webpack_require__(5);


class SimpleLinearRegression extends BaseRegression {

    constructor(x, y, options) {
        options = options || {};
        super();
        if (x === true) {
            this.slope = y.slope;
            this.intercept = y.intercept;
            this.quality = y.quality || {};
            if (y.quality.r) {
                this.quality.r = y.quality.r;
                this.quality.r2 = y.quality.r2;
            }
            if (y.quality.chi2) {
                this.quality.chi2 = y.quality.chi2;
            }
        } else {
            var n = x.length;
            if (n !== y.length) {
                throw new RangeError('input and output array have a different length');
            }

            var xSum = 0;
            var ySum = 0;

            var xSquared = 0;
            var xY = 0;

            for (var i = 0; i < n; i++) {
                xSum += x[i];
                ySum += y[i];
                xSquared += x[i] * x[i];
                xY += x[i] * y[i];
            }

            var numerator = (n * xY - xSum * ySum);


            this.slope = numerator / (n * xSquared - xSum * xSum);
            this.intercept = (1 / n) * ySum - this.slope * (1 / n) * xSum;
            this.coefficients = [this.intercept, this.slope];
            if (options.computeQuality) {
                this.quality = this.modelQuality(x, y);
            }
        }

    }

    toJSON() {
        var out = {
            name: 'simpleLinearRegression',
            slope: this.slope,
            intercept: this.intercept
        };
        if (this.quality) {
            out.quality = this.quality;
        }

        return out;
    }

    _predict(input) {
        return this.slope * input + this.intercept;
    }

    computeX(input) {
        return (input - this.intercept) / this.slope;
    }

    toString(precision) {
        var result = 'f(x) = ';
        if (this.slope) {
            var xFactor = maybeToPrecision(this.slope, precision);
            result += (Math.abs(xFactor - 1) < 1e-5 ? '' : xFactor + ' * ') + 'x';
            if (this.intercept) {
                var absIntercept = Math.abs(this.intercept);
                var operator = absIntercept === this.intercept ? '+' : '-';
                result += ' ' + operator + ' ' + maybeToPrecision(absIntercept, precision);
            }
        } else {
            result += maybeToPrecision(this.intercept, precision);
        }
        return result;
    }

    toLaTeX(precision) {
        return this.toString(precision);
    }

    static load(json) {
        if (json.name !== 'simpleLinearRegression') {
            throw new TypeError('not a SLR model');
        }
        return new SimpleLinearRegression(true, json);
    }
}

module.exports = SimpleLinearRegression;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compareNumbers(a, b) {
    return a - b;
}

/**
 * Computes the sum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.sum = function sum(values) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
};

/**
 * Computes the maximum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.max = function max(values) {
    var max = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] > max) max = values[i];
    }
    return max;
};

/**
 * Computes the minimum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.min = function min(values) {
    var min = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] < min) min = values[i];
    }
    return min;
};

/**
 * Computes the min and max of the given values
 * @param {Array} values
 * @returns {{min: number, max: number}}
 */
exports.minMax = function minMax(values) {
    var min = values[0];
    var max = values[0];
    var l = values.length;
    for (var i = 1; i < l; i++) {
        if (values[i] < min) min = values[i];
        if (values[i] > max) max = values[i];
    }
    return {
        min: min,
        max: max
    };
};

/**
 * Computes the arithmetic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.arithmeticMean = function arithmeticMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        sum += values[i];
    }
    return sum / l;
};

/**
 * {@link arithmeticMean}
 */
exports.mean = exports.arithmeticMean;

/**
 * Computes the geometric mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.geometricMean = function geometricMean(values) {
    var mul = 1;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        mul *= values[i];
    }
    return Math.pow(mul, 1 / l);
};

/**
 * Computes the mean of the log of the given values
 * If the return value is exponentiated, it gives the same result as the
 * geometric mean.
 * @param {Array} values
 * @returns {number}
 */
exports.logMean = function logMean(values) {
    var lnsum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        lnsum += Math.log(values[i]);
    }
    return lnsum / l;
};

/**
 * Computes the weighted grand mean for a list of means and sample sizes
 * @param {Array} means - Mean values for each set of samples
 * @param {Array} samples - Number of original values for each set of samples
 * @returns {number}
 */
exports.grandMean = function grandMean(means, samples) {
    var sum = 0;
    var n = 0;
    var l = means.length;
    for (var i = 0; i < l; i++) {
        sum += samples[i] * means[i];
        n += samples[i];
    }
    return sum / n;
};

/**
 * Computes the truncated mean of the given values using a given percentage
 * @param {Array} values
 * @param {number} percent - The percentage of values to keep (range: [0,1])
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.truncatedMean = function truncatedMean(values, percent, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }
    var l = values.length;
    var k = Math.floor(l * percent);
    var sum = 0;
    for (var i = k; i < (l - k); i++) {
        sum += values[i];
    }
    return sum / (l - 2 * k);
};

/**
 * Computes the harmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.harmonicMean = function harmonicMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        if (values[i] === 0) {
            throw new RangeError('value at index ' + i + 'is zero');
        }
        sum += 1 / values[i];
    }
    return l / sum;
};

/**
 * Computes the contraharmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.contraHarmonicMean = function contraHarmonicMean(values) {
    var r1 = 0;
    var r2 = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        r1 += values[i] * values[i];
        r2 += values[i];
    }
    if (r2 < 0) {
        throw new RangeError('sum of values is negative');
    }
    return r1 / r2;
};

/**
 * Computes the median of the given values
 * @param {Array} values
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.median = function median(values, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }
    var l = values.length;
    var half = Math.floor(l / 2);
    if (l % 2 === 0) {
        return (values[half - 1] + values[half]) * 0.5;
    } else {
        return values[half];
    }
};

/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.variance = function variance(values, unbiased) {
    if (unbiased === undefined) unbiased = true;
    var theMean = exports.mean(values);
    var theVariance = 0;
    var l = values.length;

    for (var i = 0; i < l; i++) {
        var x = values[i] - theMean;
        theVariance += x * x;
    }

    if (unbiased) {
        return theVariance / (l - 1);
    } else {
        return theVariance / l;
    }
};

/**
 * Computes the standard deviation of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.standardDeviation = function standardDeviation(values, unbiased) {
    return Math.sqrt(exports.variance(values, unbiased));
};

exports.standardError = function standardError(values) {
    return exports.standardDeviation(values) / Math.sqrt(values.length);
};

/**
 * IEEE Transactions on biomedical engineering, vol. 52, no. 1, january 2005, p. 76-
 * Calculate the standard deviation via the Median of the absolute deviation
 *  The formula for the standard deviation only holds for Gaussian random variables.
 * @returns {{mean: number, stdev: number}}
 */
exports.robustMeanAndStdev = function robustMeanAndStdev(y) {
    var mean = 0, stdev = 0;
    var length = y.length, i = 0;
    for (i = 0; i < length; i++) {
        mean += y[i];
    }
    mean /= length;
    var averageDeviations = new Array(length);
    for (i = 0; i < length; i++)
        averageDeviations[i] = Math.abs(y[i] - mean);
    averageDeviations.sort(compareNumbers);
    if (length % 2 === 1) {
        stdev = averageDeviations[(length - 1) / 2] / 0.6745;
    } else {
        stdev = 0.5 * (averageDeviations[length / 2] + averageDeviations[length / 2 - 1]) / 0.6745;
    }

    return {
        mean: mean,
        stdev: stdev
    };
};

exports.quartiles = function quartiles(values, alreadySorted) {
    if (typeof (alreadySorted) === 'undefined') alreadySorted = false;
    if (!alreadySorted) {
        values = [].concat(values).sort(compareNumbers);
    }

    var quart = values.length / 4;
    var q1 = values[Math.ceil(quart) - 1];
    var q2 = exports.median(values, true);
    var q3 = values[Math.ceil(quart * 3) - 1];

    return {q1: q1, q2: q2, q3: q3};
};

exports.pooledStandardDeviation = function pooledStandardDeviation(samples, unbiased) {
    return Math.sqrt(exports.pooledVariance(samples, unbiased));
};

exports.pooledVariance = function pooledVariance(samples, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var sum = 0;
    var length = 0, l = samples.length;
    for (var i = 0; i < l; i++) {
        var values = samples[i];
        var vari = exports.variance(values);

        sum += (values.length - 1) * vari;

        if (unbiased)
            length += values.length - 1;
        else
            length += values.length;
    }
    return sum / length;
};

exports.mode = function mode(values) {
    var l = values.length,
        itemCount = new Array(l),
        i;
    for (i = 0; i < l; i++) {
        itemCount[i] = 0;
    }
    var itemArray = new Array(l);
    var count = 0;

    for (i = 0; i < l; i++) {
        var index = itemArray.indexOf(values[i]);
        if (index >= 0)
            itemCount[index]++;
        else {
            itemArray[count] = values[i];
            itemCount[count] = 1;
            count++;
        }
    }

    var maxValue = 0, maxIndex = 0;
    for (i = 0; i < count; i++) {
        if (itemCount[i] > maxValue) {
            maxValue = itemCount[i];
            maxIndex = i;
        }
    }

    return itemArray[maxIndex];
};

exports.covariance = function covariance(vector1, vector2, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var mean1 = exports.mean(vector1);
    var mean2 = exports.mean(vector2);

    if (vector1.length !== vector2.length)
        throw 'Vectors do not have the same dimensions';

    var cov = 0, l = vector1.length;
    for (var i = 0; i < l; i++) {
        var x = vector1[i] - mean1;
        var y = vector2[i] - mean2;
        cov += x * y;
    }

    if (unbiased)
        return cov / (l - 1);
    else
        return cov / l;
};

exports.skewness = function skewness(values, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var theMean = exports.mean(values);

    var s2 = 0, s3 = 0, l = values.length;
    for (var i = 0; i < l; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s3 += dev * dev * dev;
    }
    var m2 = s2 / l;
    var m3 = s3 / l;

    var g = m3 / (Math.pow(m2, 3 / 2.0));
    if (unbiased) {
        var a = Math.sqrt(l * (l - 1));
        var b = l - 2;
        return (a / b) * g;
    } else {
        return g;
    }
};

exports.kurtosis = function kurtosis(values, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var theMean = exports.mean(values);
    var n = values.length, s2 = 0, s4 = 0;

    for (var i = 0; i < n; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s4 += dev * dev * dev * dev;
    }
    var m2 = s2 / n;
    var m4 = s4 / n;

    if (unbiased) {
        var v = s2 / (n - 1);
        var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
        var b = s4 / (v * v);
        var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));

        return a * b - 3 * c;
    } else {
        return m4 / (m2 * m2) - 3;
    }
};

exports.entropy = function entropy(values, eps) {
    if (typeof (eps) === 'undefined') eps = 0;
    var sum = 0, l = values.length;
    for (var i = 0; i < l; i++)
        sum += values[i] * Math.log(values[i] + eps);
    return -sum;
};

exports.weightedMean = function weightedMean(values, weights) {
    var sum = 0, l = values.length;
    for (var i = 0; i < l; i++)
        sum += values[i] * weights[i];
    return sum;
};

exports.weightedStandardDeviation = function weightedStandardDeviation(values, weights) {
    return Math.sqrt(exports.weightedVariance(values, weights));
};

exports.weightedVariance = function weightedVariance(values, weights) {
    var theMean = exports.weightedMean(values, weights);
    var vari = 0, l = values.length;
    var a = 0, b = 0;

    for (var i = 0; i < l; i++) {
        var z = values[i] - theMean;
        var w = weights[i];

        vari += w * (z * z);
        b += w;
        a += w * w;
    }

    return vari * (b / (b * b - a));
};

exports.center = function center(values, inPlace) {
    if (typeof (inPlace) === 'undefined') inPlace = false;

    var result = values;
    if (!inPlace)
        result = [].concat(values);

    var theMean = exports.mean(result), l = result.length;
    for (var i = 0; i < l; i++)
        result[i] -= theMean;
};

exports.standardize = function standardize(values, standardDev, inPlace) {
    if (typeof (standardDev) === 'undefined') standardDev = exports.standardDeviation(values);
    if (typeof (inPlace) === 'undefined') inPlace = false;
    var l = values.length;
    var result = inPlace ? values : new Array(l);
    for (var i = 0; i < l; i++)
        result[i] = values[i] / standardDev;
    return result;
};

exports.cumulativeSum = function cumulativeSum(array) {
    var l = array.length;
    var result = new Array(l);
    result[0] = array[0];
    for (var i = 1; i < l; i++)
        result[i] = result[i - 1] + array[i];
    return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Cosine similarity between two MS spectra
 * @param {Array<number>} ms1x - Array of mass values for the first spectra
 * @param {Array<number>} ms1y - Array of weighted abundance values for the first spectra
 * @param {Array<number>} ms2x - Array of mass values for the second spectra
 * @param {Array<number>} ms2y - Array of weighted abundance values for the second spectra
 * @return {number} - Similarity between two MS spectra
 */

function cosine(ms1x, ms1y, ms2x, ms2y) {
    var index1 = 0;
    var index2 = 0;

    var product = 0;
    var norm1 = 0;
    var norm2 = 0;

    while (index1 < ms1x.length || index2 < ms2x.length) {
        var w1 = ms1y[index1];
        var w2 = ms2y[index2];
        if (index2 === ms2x.length || ms1x[index1] < ms2x[index2]) {
            norm1 += w1 * w1;
            ++index1;
        } else if (index1 === ms1x.length || ms2x[index2] < ms1x[index1]) {
            norm2 += w2 * w2;
            ++index2;
        } else {
            product += w1 * w2;
            norm1 += w1 * w1;
            norm2 += w2 * w2;
            ++index1;
            ++index2;
        }
    }

    var norm1Norm2 = norm1 * norm2;
    if (norm1Norm2 === 0) {
        return 0;
    } else {
        return product * product / norm1Norm2;
    }
}

module.exports = cosine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3NpbmUuanMiXSwibmFtZXMiOlsiY29zaW5lIiwibXMxeCIsIm1zMXkiLCJtczJ4IiwibXMyeSIsImluZGV4MSIsImluZGV4MiIsInByb2R1Y3QiLCJub3JtMSIsIm5vcm0yIiwibGVuZ3RoIiwidzEiLCJ3MiIsIm5vcm0xTm9ybTIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDcEMsUUFBSUMsU0FBUyxDQUFiO0FBQ0EsUUFBSUMsU0FBUyxDQUFiOztBQUVBLFFBQUlDLFVBQVUsQ0FBZDtBQUNBLFFBQUlDLFFBQVEsQ0FBWjtBQUNBLFFBQUlDLFFBQVEsQ0FBWjs7QUFFQSxXQUFRSixTQUFTSixLQUFLUyxNQUFmLElBQTJCSixTQUFTSCxLQUFLTyxNQUFoRCxFQUF5RDtBQUNyRCxZQUFJQyxLQUFLVCxLQUFLRyxNQUFMLENBQVQ7QUFDQSxZQUFJTyxLQUFLUixLQUFLRSxNQUFMLENBQVQ7QUFDQSxZQUFJQSxXQUFXSCxLQUFLTyxNQUFoQixJQUEwQlQsS0FBS0ksTUFBTCxJQUFlRixLQUFLRyxNQUFMLENBQTdDLEVBQTJEO0FBQ3ZERSxxQkFBU0csS0FBS0EsRUFBZDtBQUNBLGNBQUVOLE1BQUY7QUFDSCxTQUhELE1BR08sSUFBSUEsV0FBV0osS0FBS1MsTUFBaEIsSUFBMEJQLEtBQUtHLE1BQUwsSUFBZUwsS0FBS0ksTUFBTCxDQUE3QyxFQUEyRDtBQUM5REkscUJBQVNHLEtBQUtBLEVBQWQ7QUFDQSxjQUFFTixNQUFGO0FBQ0gsU0FITSxNQUdBO0FBQ0hDLHVCQUFXSSxLQUFLQyxFQUFoQjtBQUNBSixxQkFBU0csS0FBS0EsRUFBZDtBQUNBRixxQkFBU0csS0FBS0EsRUFBZDtBQUNBLGNBQUVQLE1BQUY7QUFDQSxjQUFFQyxNQUFGO0FBQ0g7QUFDSjs7QUFFRCxRQUFJTyxhQUFhTCxRQUFRQyxLQUF6QjtBQUNBLFFBQUlJLGVBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsZUFBTyxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBUU4sVUFBVUEsT0FBWCxHQUF1Qk0sVUFBOUI7QUFDSDtBQUNKOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZixNQUFqQiIsImZpbGUiOiJjb3NpbmUuanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvc2luZSBzaW1pbGFyaXR5IGJldHdlZW4gdHdvIE1TIHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbXMxeCAtIEFycmF5IG9mIG1hc3MgdmFsdWVzIGZvciB0aGUgZmlyc3Qgc3BlY3RyYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBtczF5IC0gQXJyYXkgb2Ygd2VpZ2h0ZWQgYWJ1bmRhbmNlIHZhbHVlcyBmb3IgdGhlIGZpcnN0IHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbXMyeCAtIEFycmF5IG9mIG1hc3MgdmFsdWVzIGZvciB0aGUgc2Vjb25kIHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbXMyeSAtIEFycmF5IG9mIHdlaWdodGVkIGFidW5kYW5jZSB2YWx1ZXMgZm9yIHRoZSBzZWNvbmQgc3BlY3RyYVxuICogQHJldHVybiB7bnVtYmVyfSAtIFNpbWlsYXJpdHkgYmV0d2VlbiB0d28gTVMgc3BlY3RyYVxuICovXG5mdW5jdGlvbiBjb3NpbmUobXMxeCwgbXMxeSwgbXMyeCwgbXMyeSkge1xuICAgIGxldCBpbmRleDEgPSAwO1xuICAgIGxldCBpbmRleDIgPSAwO1xuXG4gICAgbGV0IHByb2R1Y3QgPSAwO1xuICAgIGxldCBub3JtMSA9IDA7XG4gICAgbGV0IG5vcm0yID0gMDtcblxuICAgIHdoaWxlICgoaW5kZXgxIDwgbXMxeC5sZW5ndGgpIHx8IChpbmRleDIgPCBtczJ4Lmxlbmd0aCkpIHtcbiAgICAgICAgbGV0IHcxID0gbXMxeVtpbmRleDFdO1xuICAgICAgICBsZXQgdzIgPSBtczJ5W2luZGV4Ml07XG4gICAgICAgIGlmIChpbmRleDIgPT09IG1zMngubGVuZ3RoIHx8IG1zMXhbaW5kZXgxXSA8IG1zMnhbaW5kZXgyXSkge1xuICAgICAgICAgICAgbm9ybTEgKz0gdzEgKiB3MTtcbiAgICAgICAgICAgICsraW5kZXgxO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4MSA9PT0gbXMxeC5sZW5ndGggfHwgbXMyeFtpbmRleDJdIDwgbXMxeFtpbmRleDFdKSB7XG4gICAgICAgICAgICBub3JtMiArPSB3MiAqIHcyO1xuICAgICAgICAgICAgKytpbmRleDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0ICs9IHcxICogdzI7XG4gICAgICAgICAgICBub3JtMSArPSB3MSAqIHcxO1xuICAgICAgICAgICAgbm9ybTIgKz0gdzIgKiB3MjtcbiAgICAgICAgICAgICsraW5kZXgxO1xuICAgICAgICAgICAgKytpbmRleDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbm9ybTFOb3JtMiA9IG5vcm0xICogbm9ybTI7XG4gICAgaWYgKG5vcm0xTm9ybTIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChwcm9kdWN0ICogcHJvZHVjdCkgLyAobm9ybTFOb3JtMik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvc2luZTtcbiJdfQ==

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Calculates the Kovats retention index for a mass spectra of a n-alkane
 * @param {object} ms - An mass spectra object
 * @param {Array<number>} ms.x - Array of masses
 * @param {Array<number>} ms.y - Array of intensities
 * @return {number} - Kovats retention index
 */

function kovats(ms) {
    var mass = ms.x;
    var massMol = [];
    var targets = [43, 57, 71, 85];

    for (var i = 0; i < mass.length; i++) {
        if ((mass[i] - 2) % 14 === 0) {
            massMol.push(mass[i]);
        }
    }
    if (massMol.length === 0) {
        return 0;
    }

    var kovatsIndex = 0;
    for (var m = 0; m < massMol.length; m++) {
        var candidate = true;
        for (var t = 0; t < targets.length; t++) {
            candidate = candidate && mass.indexOf(targets[t]) !== -1 && (mass.indexOf(massMol[m] - targets[t]) !== -1 || mass.indexOf(massMol[m] - targets[t] + 1) !== -1 || mass.indexOf(massMol[m] - targets[t] - 1) !== -1);
        }
        if (candidate) {
            kovatsIndex = 100 * (massMol[m] - 2) / 14;
        }
    }
    return kovatsIndex;
}

module.exports = kovats;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9rb3ZhdHMuanMiXSwibmFtZXMiOlsia292YXRzIiwibXMiLCJtYXNzIiwieCIsIm1hc3NNb2wiLCJ0YXJnZXRzIiwiaSIsImxlbmd0aCIsInB1c2giLCJrb3ZhdHNJbmRleCIsIm0iLCJjYW5kaWRhdGUiLCJ0IiwiaW5kZXhPZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7OztBQU9BLFNBQVNBLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CO0FBQ2hCLFFBQUlDLE9BQU9ELEdBQUdFLENBQWQ7QUFDQSxRQUFJQyxVQUFVLEVBQWQ7QUFDQSxRQUFNQyxVQUFVLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixDQUFoQjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosS0FBS0ssTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ2xDLFlBQUksQ0FBQ0osS0FBS0ksQ0FBTCxJQUFVLENBQVgsSUFBZ0IsRUFBaEIsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUJGLG9CQUFRSSxJQUFSLENBQWFOLEtBQUtJLENBQUwsQ0FBYjtBQUNIO0FBQ0o7QUFDRCxRQUFJRixRQUFRRyxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLGVBQU8sQ0FBUDtBQUNIOztBQUVELFFBQUlFLGNBQWMsQ0FBbEI7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sUUFBUUcsTUFBNUIsRUFBb0NHLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQUlDLFlBQVksSUFBaEI7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsUUFBUUUsTUFBNUIsRUFBb0NLLEdBQXBDLEVBQXlDO0FBQ3JDRCx3QkFBWUEsYUFDSlQsS0FBS1csT0FBTCxDQUFhUixRQUFRTyxDQUFSLENBQWIsTUFBNkIsQ0FBQyxDQUQxQixLQUVIVixLQUFLVyxPQUFMLENBQWFULFFBQVFNLENBQVIsSUFBYUwsUUFBUU8sQ0FBUixDQUExQixNQUEwQyxDQUFDLENBQTVDLElBQ0FWLEtBQUtXLE9BQUwsQ0FBYVQsUUFBUU0sQ0FBUixJQUFhTCxRQUFRTyxDQUFSLENBQWIsR0FBMEIsQ0FBdkMsTUFBOEMsQ0FBQyxDQUQvQyxJQUVBVixLQUFLVyxPQUFMLENBQWFULFFBQVFNLENBQVIsSUFBYUwsUUFBUU8sQ0FBUixDQUFiLEdBQTBCLENBQXZDLE1BQThDLENBQUMsQ0FKM0MsQ0FBWjtBQUtIO0FBQ0QsWUFBSUQsU0FBSixFQUFlO0FBQ1hGLDBCQUFjLE9BQU9MLFFBQVFNLENBQVIsSUFBYSxDQUFwQixJQUF5QixFQUF2QztBQUNIO0FBQ0o7QUFDRCxXQUFPRCxXQUFQO0FBQ0g7O0FBRURLLE9BQU9DLE9BQVAsR0FBaUJmLE1BQWpCIiwiZmlsZSI6ImtvdmF0cy5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgS292YXRzIHJldGVudGlvbiBpbmRleCBmb3IgYSBtYXNzIHNwZWN0cmEgb2YgYSBuLWFsa2FuZVxuICogQHBhcmFtIHtvYmplY3R9IG1zIC0gQW4gbWFzcyBzcGVjdHJhIG9iamVjdFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBtcy54IC0gQXJyYXkgb2YgbWFzc2VzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IG1zLnkgLSBBcnJheSBvZiBpbnRlbnNpdGllc1xuICogQHJldHVybiB7bnVtYmVyfSAtIEtvdmF0cyByZXRlbnRpb24gaW5kZXhcbiAqL1xuZnVuY3Rpb24ga292YXRzKG1zKSB7XG4gICAgbGV0IG1hc3MgPSBtcy54O1xuICAgIGxldCBtYXNzTW9sID0gW107XG4gICAgY29uc3QgdGFyZ2V0cyA9IFs0MywgNTcsIDcxLCA4NV07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKChtYXNzW2ldIC0gMikgJSAxNCA9PT0gMCkge1xuICAgICAgICAgICAgbWFzc01vbC5wdXNoKG1hc3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChtYXNzTW9sLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBsZXQga292YXRzSW5kZXggPSAwO1xuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgbWFzc01vbC5sZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgY2FuZGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0YXJnZXRzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVcbiAgICAgICAgICAgICAgICAmJiAobWFzcy5pbmRleE9mKHRhcmdldHNbdF0pICE9PSAtMSlcbiAgICAgICAgICAgICAgICAmJiAoKG1hc3MuaW5kZXhPZihtYXNzTW9sW21dIC0gdGFyZ2V0c1t0XSkgIT09IC0xKVxuICAgICAgICAgICAgICAgIHx8IChtYXNzLmluZGV4T2YobWFzc01vbFttXSAtIHRhcmdldHNbdF0gKyAxKSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgfHwgKG1hc3MuaW5kZXhPZihtYXNzTW9sW21dIC0gdGFyZ2V0c1t0XSAtIDEpICE9PSAtMSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICAgIGtvdmF0c0luZGV4ID0gMTAwICogKG1hc3NNb2xbbV0gLSAyKSAvIDE0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrb3ZhdHNJbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrb3ZhdHM7XG4iXX0=

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Modifies the time applying the conversion function
 * @param {Array<number>} originalTime - Original list of time values
 * @param {function(number)} conversionFunction - Function that given a number computes the new value
 * @return {Array<number>} - Modified list of time values
 */

function rescaleTime(originalTime, conversionFunction) {
  return originalTime.map(conversionFunction);
}

module.exports = rescaleTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZXNjYWxlVGltZS5qcyJdLCJuYW1lcyI6WyJyZXNjYWxlVGltZSIsIm9yaWdpbmFsVGltZSIsImNvbnZlcnNpb25GdW5jdGlvbiIsIm1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7O0FBTUEsU0FBU0EsV0FBVCxDQUFxQkMsWUFBckIsRUFBbUNDLGtCQUFuQyxFQUF1RDtBQUNuRCxTQUFPRCxhQUFhRSxHQUFiLENBQWlCRCxrQkFBakIsQ0FBUDtBQUNIOztBQUVERSxPQUFPQyxPQUFQLEdBQWlCTCxXQUFqQiIsImZpbGUiOiJyZXNjYWxlVGltZS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHRpbWUgYXBwbHlpbmcgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gb3JpZ2luYWxUaW1lIC0gT3JpZ2luYWwgbGlzdCBvZiB0aW1lIHZhbHVlc1xuICogQHBhcmFtIHtmdW5jdGlvbihudW1iZXIpfSBjb252ZXJzaW9uRnVuY3Rpb24gLSBGdW5jdGlvbiB0aGF0IGdpdmVuIGEgbnVtYmVyIGNvbXB1dGVzIHRoZSBuZXcgdmFsdWVcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IC0gTW9kaWZpZWQgbGlzdCBvZiB0aW1lIHZhbHVlc1xuICovXG5mdW5jdGlvbiByZXNjYWxlVGltZShvcmlnaW5hbFRpbWUsIGNvbnZlcnNpb25GdW5jdGlvbikge1xuICAgIHJldHVybiBvcmlnaW5hbFRpbWUubWFwKGNvbnZlcnNpb25GdW5jdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzY2FsZVRpbWU7XG4iXX0=

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var massFilter = __webpack_require__(30);

/**
 * Given a list of GSD objects returns the weighted mass times abundance
 * @param {Array<object>} peakList - List of GSD objects
 * @param {object} options - Options for the integral filtering
 * @param {number} [options.massPower = 3] - Power applied to the mass values
 * @param {number} [options.intPower = 0.6] - Power applied to the abundance values
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - List of mass and weighted mass times abundance objects
 */
function vectorify(peakList) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$massPower = options.massPower,
        massPower = _options$massPower === undefined ? 3 : _options$massPower,
        _options$intPower = options.intPower,
        intPower = _options$intPower === undefined ? 0.6 : _options$intPower;

    var filter = options.thresholdFactor || options.maxNumberPeaks || options.groupWidth;

    var vector = new Array(peakList.length);
    if (filter) {
        var filterOptions = {
            thresholdFactor: options.thresholdFactor,
            maxNumberPeaks: options.maxNumberPeaks,
            groupWidth: options.groupWidth
        };

        for (var i = 0; i < peakList.length; ++i) {
            var len = peakList[i].ms.x.length;
            vector[i] = {
                x: peakList[i].ms.x,
                y: new Array(len)
            };
            for (var j = 0; j < len; ++j) {
                vector[i].y[j] = Math.pow(peakList[i].ms.x[j], massPower) * Math.pow(peakList[i].ms.y[j], intPower);
            }

            vector[i] = massFilter(vector[i], filterOptions);
        }
    } else {
        for (var _i = 0; _i < peakList.length; ++_i) {
            var _len = peakList[_i].ms.x.length;
            vector[_i] = {
                x: peakList[_i].ms.x,
                y: new Array(_len)
            };
            for (var _j = 0; _j < _len; ++_j) {
                vector[_i].y[_j] = Math.pow(peakList[_i].ms.x[_j], massPower) * Math.pow(peakList[_i].ms.y[_j], intPower);
            }
        }
    }

    return vector;
}

module.exports = vectorify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92ZWN0b3JpZnkuanMiXSwibmFtZXMiOlsibWFzc0ZpbHRlciIsInJlcXVpcmUiLCJ2ZWN0b3JpZnkiLCJwZWFrTGlzdCIsIm9wdGlvbnMiLCJtYXNzUG93ZXIiLCJpbnRQb3dlciIsImZpbHRlciIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiZ3JvdXBXaWR0aCIsInZlY3RvciIsIkFycmF5IiwibGVuZ3RoIiwiZmlsdGVyT3B0aW9ucyIsImkiLCJsZW4iLCJtcyIsIngiLCJ5IiwiaiIsIk1hdGgiLCJwb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGNBQVIsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0EsU0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsRUFBMkM7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFBQSw2QkFDQ0EsT0FERCxDQUNoQ0MsU0FEZ0M7QUFBQSxRQUNoQ0EsU0FEZ0Msc0NBQ3BCLENBRG9CO0FBQUEsNEJBQ0NELE9BREQsQ0FDakJFLFFBRGlCO0FBQUEsUUFDakJBLFFBRGlCLHFDQUNOLEdBRE07O0FBRXZDLFFBQUlDLFNBQVVILFFBQVFJLGVBQVIsSUFBMkJKLFFBQVFLLGNBQW5DLElBQXFETCxRQUFRTSxVQUEzRTs7QUFFQSxRQUFJQyxTQUFTLElBQUlDLEtBQUosQ0FBVVQsU0FBU1UsTUFBbkIsQ0FBYjtBQUNBLFFBQUlOLE1BQUosRUFBWTtBQUNSLFlBQU1PLGdCQUFnQjtBQUNsQk4sNkJBQWlCSixRQUFRSSxlQURQO0FBRWxCQyw0QkFBZ0JMLFFBQVFLLGNBRk47QUFHbEJDLHdCQUFZTixRQUFRTTtBQUhGLFNBQXRCOztBQU1BLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJWixTQUFTVSxNQUE3QixFQUFxQyxFQUFFRSxDQUF2QyxFQUEwQztBQUN0QyxnQkFBSUMsTUFBTWIsU0FBU1ksQ0FBVCxFQUFZRSxFQUFaLENBQWVDLENBQWYsQ0FBaUJMLE1BQTNCO0FBQ0FGLG1CQUFPSSxDQUFQLElBQVk7QUFDUkcsbUJBQUdmLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlQyxDQURWO0FBRVJDLG1CQUFHLElBQUlQLEtBQUosQ0FBVUksR0FBVjtBQUZLLGFBQVo7QUFJQSxpQkFBSyxJQUFJSSxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLEdBQXBCLEVBQXlCLEVBQUVJLENBQTNCLEVBQThCO0FBQzFCVCx1QkFBT0ksQ0FBUCxFQUFVSSxDQUFWLENBQVlDLENBQVosSUFBaUJDLEtBQUtDLEdBQUwsQ0FBU25CLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlQyxDQUFmLENBQWlCRSxDQUFqQixDQUFULEVBQThCZixTQUE5QixJQUEyQ2dCLEtBQUtDLEdBQUwsQ0FBU25CLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlRSxDQUFmLENBQWlCQyxDQUFqQixDQUFULEVBQThCZCxRQUE5QixDQUE1RDtBQUNIOztBQUVESyxtQkFBT0ksQ0FBUCxJQUFZZixXQUFXVyxPQUFPSSxDQUFQLENBQVgsRUFBc0JELGFBQXRCLENBQVo7QUFDSDtBQUNKLEtBbkJELE1BbUJPO0FBQ0gsYUFBSyxJQUFJQyxLQUFJLENBQWIsRUFBZ0JBLEtBQUlaLFNBQVNVLE1BQTdCLEVBQXFDLEVBQUVFLEVBQXZDLEVBQTBDO0FBQ3RDLGdCQUFJQyxPQUFNYixTQUFTWSxFQUFULEVBQVlFLEVBQVosQ0FBZUMsQ0FBZixDQUFpQkwsTUFBM0I7QUFDQUYsbUJBQU9JLEVBQVAsSUFBWTtBQUNSRyxtQkFBR2YsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVDLENBRFY7QUFFUkMsbUJBQUcsSUFBSVAsS0FBSixDQUFVSSxJQUFWO0FBRkssYUFBWjtBQUlBLGlCQUFLLElBQUlJLEtBQUksQ0FBYixFQUFnQkEsS0FBSUosSUFBcEIsRUFBeUIsRUFBRUksRUFBM0IsRUFBOEI7QUFDMUJULHVCQUFPSSxFQUFQLEVBQVVJLENBQVYsQ0FBWUMsRUFBWixJQUFpQkMsS0FBS0MsR0FBTCxDQUFTbkIsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVDLENBQWYsQ0FBaUJFLEVBQWpCLENBQVQsRUFBOEJmLFNBQTlCLElBQTJDZ0IsS0FBS0MsR0FBTCxDQUFTbkIsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVFLENBQWYsQ0FBaUJDLEVBQWpCLENBQVQsRUFBOEJkLFFBQTlCLENBQTVEO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQU9LLE1BQVA7QUFDSDs7QUFFRFksT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6InZlY3RvcmlmeS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hc3NGaWx0ZXIgPSByZXF1aXJlKCcuL21hc3NGaWx0ZXInKTtcblxuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgR1NEIG9iamVjdHMgcmV0dXJucyB0aGUgd2VpZ2h0ZWQgbWFzcyB0aW1lcyBhYnVuZGFuY2VcbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcGVha0xpc3QgLSBMaXN0IG9mIEdTRCBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSBpbnRlZ3JhbCBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXNzUG93ZXIgPSAzXSAtIFBvd2VyIGFwcGxpZWQgdG8gdGhlIG1hc3MgdmFsdWVzXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuaW50UG93ZXIgPSAwLjZdIC0gUG93ZXIgYXBwbGllZCB0byB0aGUgYWJ1bmRhbmNlIHZhbHVlc1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PG9iamVjdD59IC0gTGlzdCBvZiBtYXNzIGFuZCB3ZWlnaHRlZCBtYXNzIHRpbWVzIGFidW5kYW5jZSBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIHZlY3RvcmlmeShwZWFrTGlzdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge21hc3NQb3dlciA9IDMsIGludFBvd2VyID0gMC42fSA9IG9wdGlvbnM7XG4gICAgbGV0IGZpbHRlciA9IChvcHRpb25zLnRocmVzaG9sZEZhY3RvciB8fCBvcHRpb25zLm1heE51bWJlclBlYWtzIHx8IG9wdGlvbnMuZ3JvdXBXaWR0aCk7XG5cbiAgICBsZXQgdmVjdG9yID0gbmV3IEFycmF5KHBlYWtMaXN0Lmxlbmd0aCk7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgICBjb25zdCBmaWx0ZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgdGhyZXNob2xkRmFjdG9yOiBvcHRpb25zLnRocmVzaG9sZEZhY3RvcixcbiAgICAgICAgICAgIG1heE51bWJlclBlYWtzOiBvcHRpb25zLm1heE51bWJlclBlYWtzLFxuICAgICAgICAgICAgZ3JvdXBXaWR0aDogb3B0aW9ucy5ncm91cFdpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZWFrTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGxlbiA9IHBlYWtMaXN0W2ldLm1zLngubGVuZ3RoO1xuICAgICAgICAgICAgdmVjdG9yW2ldID0ge1xuICAgICAgICAgICAgICAgIHg6IHBlYWtMaXN0W2ldLm1zLngsXG4gICAgICAgICAgICAgICAgeTogbmV3IEFycmF5KGxlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgKytqKSB7XG4gICAgICAgICAgICAgICAgdmVjdG9yW2ldLnlbal0gPSBNYXRoLnBvdyhwZWFrTGlzdFtpXS5tcy54W2pdLCBtYXNzUG93ZXIpICogTWF0aC5wb3cocGVha0xpc3RbaV0ubXMueVtqXSwgaW50UG93ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZWN0b3JbaV0gPSBtYXNzRmlsdGVyKHZlY3RvcltpXSwgZmlsdGVyT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlYWtMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gcGVha0xpc3RbaV0ubXMueC5sZW5ndGg7XG4gICAgICAgICAgICB2ZWN0b3JbaV0gPSB7XG4gICAgICAgICAgICAgICAgeDogcGVha0xpc3RbaV0ubXMueCxcbiAgICAgICAgICAgICAgICB5OiBuZXcgQXJyYXkobGVuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyArK2opIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3JbaV0ueVtqXSA9IE1hdGgucG93KHBlYWtMaXN0W2ldLm1zLnhbal0sIG1hc3NQb3dlcikgKiBNYXRoLnBvdyhwZWFrTGlzdFtpXS5tcy55W2pdLCBpbnRQb3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlY3RvcmlmeTtcbiJdfQ==

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(96), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(20)
  , document = __webpack_require__(3).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(13)(function(){
  return Object.defineProperty(__webpack_require__(56)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(35)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(63)
  , hide           = __webpack_require__(14)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(21)
  , $iterCreate    = __webpack_require__(109)
  , setToStringTag = __webpack_require__(37)
  , getPrototypeOf = __webpack_require__(117)
  , ITERATOR       = __webpack_require__(4)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(18)
  , dPs         = __webpack_require__(114)
  , enumBugKeys = __webpack_require__(34)
  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(56)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(107).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(62)
  , hiddenKeys = __webpack_require__(34).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(9)
  , arrayIndexOf = __webpack_require__(103)(false)
  , IE_PROTO     = __webpack_require__(38)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(119)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(59)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
var global        = __webpack_require__(3)
  , hide          = __webpack_require__(14)
  , Iterators     = __webpack_require__(21)
  , TO_STRING_TAG = __webpack_require__(4)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0],
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = exports = __webpack_require__(134);


exports.getEquallySpacedData = __webpack_require__(135).getEquallySpacedData;
exports.SNV = __webpack_require__(136).SNV;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by acastillo on 8/24/15.
 */
/**
 * Non in-place function definitions, compatible with mathjs code *
 */



var Matrix = __webpack_require__(26);

function matrix(A,B){
    return new Matrix(A,B);
}

function ones(rows, cols){
    return Matrix.ones(rows,cols);
}

function eye(rows, cols){
    return Matrix.eye(rows, cols);
}

function zeros(rows, cols){
    return Matrix.zeros(rows, cols);
}

function random(rows, cols){
    return Matrix.rand(rows,cols);
}

function transpose(A){
    if(typeof A == 'number')
        return A;
    var result = A.clone();
    return result.transpose();
}

function add(A, B){
    if(typeof A == 'number'&&typeof B === 'number')
        return A+B;
    if(typeof A == 'number')
        return this.add(B,A);

    var result = A.clone();
    return result.add(B);

}

function subtract(A, B){
    if(typeof A == 'number'&&typeof B === 'number')
        return A-B;
    if(typeof A == 'number')
        return this.subtract(B,A);
    var result = A.clone();
    return result.sub(B);
}

function multiply(A, B){
    if(typeof A == 'number'&&typeof B === 'number')
        return A*B;
    if(typeof A == 'number')
        return this.multiply(B,A);

    var result = A.clone();

    if(typeof B === 'number')
        result.mul(B);
    else
        result = result.mmul(B);

    if(result.rows==1&&result.columns==1)
        return result[0][0];
    else
        return result;

}

function dotMultiply(A, B){
    var result = A.clone();
    return result.mul(B);
}

function dotDivide(A, B){
    var result = A.clone();
    return result.div(B);
}

function diag(A){
    var diag = null;
    var rows = A.rows, cols = A.columns, j, r;
    //It is an array
    if(typeof cols === "undefined" && (typeof A)=='object'){
        if(A[0]&&A[0].length){
            rows = A.length;
            cols = A[0].length;
            r = Math.min(rows,cols);
            diag = Matrix.zeros(cols, cols);
            for (j = 0; j < cols; j++) {
                diag[j][j]=A[j][j];
            }
        }
        else{
            cols = A.length;
            diag = Matrix.zeros(cols, cols);
            for (j = 0; j < cols; j++) {
                diag[j][j]=A[j];
            }
        }

    }
    if(rows == 1){
        diag = Matrix.zeros(cols, cols);
        for (j = 0; j < cols; j++) {
            diag[j][j]=A[0][j];
        }
    }
    else{
        if(rows>0 && cols > 0){
            r = Math.min(rows,cols);
            diag = new Array(r);
            for (j = 0; j < r; j++) {
                diag[j] = A[j][j];
            }
        }
    }
    return diag;
}

function min(A, B){
    if(typeof A==='number' && typeof B ==='number')
        return Math.min(A,B);
    var ii = A.rows, jj = A.columns;
    var result = new Matrix(ii,jj);
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            if (A[i][j] < B[i][j]) {
                result[i][j] = A[i][j];
            }
            else{
                result[i][j] = B[i][j];
            }
        }
    }
    return result;
}

function max(A, B){
    if(typeof A==='number' && typeof B ==='number')
        return Math.max(A,B);
    var ii = A.rows, jj = A.columns;
    var result = new Matrix(ii,jj);
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            if (A[i][j] > B[i][j]) {
                result[i][j] = A[i][j];
            }
            else{
                result[i][j] = B[i][j];
            }
        }
    }
    return result;
}

function sqrt(A){
    if(typeof A==='number' )
        return Math.sqrt(A);
    var ii = A.rows, jj = A.columns;
    var result = new Matrix(ii,jj);
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            result[i][j] = Math.sqrt(A[i][j]);

        }
    }
    return result;
}

function abs(A){
    if(typeof A==='number' )
        return Math.abs(A);
    var ii = A.rows, jj = A.columns;
    var result = new Matrix(ii,jj);
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            result[i][j] = Math.abs(A[i][j]);

        }
    }
    return result;
}

function exp(A){
    if(typeof A==='number' )
        return Math.sqrt(A);
    var ii = A.rows, jj = A.columns;
    var result = new Matrix(ii,jj);
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            result[i][j] = Math.exp(A[i][j]);
        }
    }
    return result;
}

function dotPow(A, b){
    if(typeof A==='number' )
        return Math.pow(A,b);
    //console.log(A);
    var ii = A.rows, jj = A.columns;
    var result = new Matrix(ii,jj);
    for (var i = 0; i < ii; i++) {
        for (var j = 0; j < jj; j++) {
            result[i][j] = Math.pow(A[i][j],b);
        }
    }
    return result;
}

function solve(A, B){
    return A.solve(B);
}

function inv(A){
    if(typeof A ==="number")
        return 1/A;
    return A.inverse();
}

module.exports = {
    transpose:transpose,
    add:add,
    subtract:subtract,
    multiply:multiply,
    dotMultiply:dotMultiply,
    dotDivide:dotDivide,
    diag:diag,
    min:min,
    max:max,
    solve:solve,
    inv:inv,
    sqrt:sqrt,
    exp:exp,
    dotPow:dotPow,
    abs:abs,
    matrix:matrix,
    ones:ones,
    zeros:zeros,
    random:random,
    eye:eye
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = abstractMatrix;

var LuDecomposition = __webpack_require__(70);
var SvDecomposition = __webpack_require__(71);
var arrayUtils = __webpack_require__(67);
var util = __webpack_require__(25);
var MatrixTransposeView = __webpack_require__(157);
var MatrixRowView = __webpack_require__(154);
var MatrixSubView = __webpack_require__(156);
var MatrixSelectionView = __webpack_require__(155);
var MatrixColumnView = __webpack_require__(151);
var MatrixFlipRowView = __webpack_require__(153);
var MatrixFlipColumnView = __webpack_require__(152);

function abstractMatrix(superCtor) {
    if (superCtor === undefined) superCtor = Object;

    /**
     * Real matrix
     * @class Matrix
     * @param {number|Array|Matrix} nRows - Number of rows of the new matrix,
     * 2D array containing the data or Matrix instance to clone
     * @param {number} [nColumns] - Number of columns of the new matrix
     */
    class Matrix extends superCtor {
        static get [Symbol.species]() {
            return this;
        }

        /**
         * Constructs a Matrix with the chosen dimensions from a 1D array
         * @param {number} newRows - Number of rows
         * @param {number} newColumns - Number of columns
         * @param {Array} newData - A 1D array containing data for the matrix
         * @return {Matrix} - The new matrix
         */
        static from1DArray(newRows, newColumns, newData) {
            var length = newRows * newColumns;
            if (length !== newData.length) {
                throw new RangeError('Data length does not match given dimensions');
            }
            var newMatrix = new this(newRows, newColumns);
            for (var row = 0; row < newRows; row++) {
                for (var column = 0; column < newColumns; column++) {
                    newMatrix.set(row, column, newData[row * newColumns + column]);
                }
            }
            return newMatrix;
        }

        /**
         * Creates a row vector, a matrix with only one row.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static rowVector(newData) {
            var vector = new this(1, newData.length);
            for (var i = 0; i < newData.length; i++) {
                vector.set(0, i, newData[i]);
            }
            return vector;
        }

        /**
         * Creates a column vector, a matrix with only one column.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static columnVector(newData) {
            var vector = new this(newData.length, 1);
            for (var i = 0; i < newData.length; i++) {
                vector.set(i, 0, newData[i]);
            }
            return vector;
        }

        /**
         * Creates an empty matrix with the given dimensions. Values will be undefined. Same as using new Matrix(rows, columns).
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static empty(rows, columns) {
            return new this(rows, columns);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to zero.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static zeros(rows, columns) {
            return this.empty(rows, columns).fill(0);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to one.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static ones(rows, columns) {
            return this.empty(rows, columns).fill(1);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be randomly set.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static rand(rows, columns, rng) {
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    matrix.set(i, j, rng());
                }
            }
            return matrix;
        }

        /**
         * Creates a matrix with the given dimensions. Values will be random integers.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {number} [maxValue=1000] - Maximum value
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static randInt(rows, columns, maxValue, rng) {
            if (maxValue === undefined) maxValue = 1000;
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    var value = Math.floor(rng() * maxValue);
                    matrix.set(i, j, value);
                }
            }
            return matrix;
        }

        /**
         * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
         * @param {number} rows - Number of rows
         * @param {number} [columns=rows] - Number of columns
         * @param {number} [value=1] - Value to fill the diagonal with
         * @return {Matrix} - The new identity matrix
         */
        static eye(rows, columns, value) {
            if (columns === undefined) columns = rows;
            if (value === undefined) value = 1;
            var min = Math.min(rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, value);
            }
            return matrix;
        }

        /**
         * Creates a diagonal matrix based on the given array.
         * @param {Array} data - Array containing the data for the diagonal
         * @param {number} [rows] - Number of rows (Default: data.length)
         * @param {number} [columns] - Number of columns (Default: rows)
         * @return {Matrix} - The new diagonal matrix
         */
        static diag(data, rows, columns) {
            var l = data.length;
            if (rows === undefined) rows = l;
            if (columns === undefined) columns = rows;
            var min = Math.min(l, rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, data[i]);
            }
            return matrix;
        }

        /**
         * Returns a matrix whose elements are the minimum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static min(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Returns a matrix whose elements are the maximum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static max(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Check that the provided value is a Matrix and tries to instantiate one if not
         * @param {*} value - The value to check
         * @return {Matrix}
         */
        static checkMatrix(value) {
            return Matrix.isMatrix(value) ? value : new this(value);
        }

        /**
         * Returns true if the argument is a Matrix, false otherwise
         * @param {*} value - The value to check
         * @return {boolean}
         */
        static isMatrix(value) {
            return (value != null) && (value.klass === 'Matrix');
        }

        /**
         * @prop {number} size - The number of elements in the matrix.
         */
        get size() {
            return this.rows * this.columns;
        }

        /**
         * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
         * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
         * @return {Matrix} this
         */
        apply(callback) {
            if (typeof callback !== 'function') {
                throw new TypeError('callback must be a function');
            }
            var ii = this.rows;
            var jj = this.columns;
            for (var i = 0; i < ii; i++) {
                for (var j = 0; j < jj; j++) {
                    callback.call(this, i, j);
                }
            }
            return this;
        }

        /**
         * Returns a new 1D array filled row by row with the matrix values
         * @return {Array}
         */
        to1DArray() {
            var array = new Array(this.size);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    array[i * this.columns + j] = this.get(i, j);
                }
            }
            return array;
        }

        /**
         * Returns a 2D array containing a copy of the data
         * @return {Array}
         */
        to2DArray() {
            var copy = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                copy[i] = new Array(this.columns);
                for (var j = 0; j < this.columns; j++) {
                    copy[i][j] = this.get(i, j);
                }
            }
            return copy;
        }

        /**
         * @return {boolean} true if the matrix has one row
         */
        isRowVector() {
            return this.rows === 1;
        }

        /**
         * @return {boolean} true if the matrix has one column
         */
        isColumnVector() {
            return this.columns === 1;
        }

        /**
         * @return {boolean} true if the matrix has one row or one column
         */
        isVector() {
            return (this.rows === 1) || (this.columns === 1);
        }

        /**
         * @return {boolean} true if the matrix has the same number of rows and columns
         */
        isSquare() {
            return this.rows === this.columns;
        }

        /**
         * @return {boolean} true if the matrix is square and has the same values on both sides of the diagonal
         */
        isSymmetric() {
            if (this.isSquare()) {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j <= i; j++) {
                        if (this.get(i, j) !== this.get(j, i)) {
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        }

        /**
         * Sets a given element of the matrix. mat.set(3,4,1) is equivalent to mat[3][4]=1
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @param {number} value - The new value for the element
         * @return {Matrix} this
         */
        set(rowIndex, columnIndex, value) { // eslint-disable-line no-unused-vars
            throw new Error('set method is unimplemented');
        }

        /**
         * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @return {number}
         */
        get(rowIndex, columnIndex) { // eslint-disable-line no-unused-vars
            throw new Error('get method is unimplemented');
        }

        /**
         * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
         * rows of the matrix, and colRep times the number of columns of the matrix
         * @param {number} rowRep - Number of times the rows should be repeated
         * @param {number} colRep - Number of times the columns should be re
         * @return {Matrix}
         * @example
         * var matrix = new Matrix([[1,2]]);
         * matrix.repeat(2); // [[1,2],[1,2]]
         */
        repeat(rowRep, colRep) {
            rowRep = rowRep || 1;
            colRep = colRep || 1;
            var matrix = new this.constructor[Symbol.species](this.rows * rowRep, this.columns * colRep);
            for (var i = 0; i < rowRep; i++) {
                for (var j = 0; j < colRep; j++) {
                    matrix.setSubMatrix(this, this.rows * i, this.columns * j);
                }
            }
            return matrix;
        }

        /**
         * Fills the matrix with a given value. All elements will be set to this value.
         * @param {number} value - New value
         * @return {Matrix} this
         */
        fill(value) {
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, value);
                }
            }
            return this;
        }

        /**
         * Negates the matrix. All elements will be multiplied by (-1)
         * @return {Matrix} this
         */
        neg() {
            return this.mulS(-1);
        }

        /**
         * Returns a new array from the given row index
         * @param {number} index - Row index
         * @return {Array}
         */
        getRow(index) {
            util.checkRowIndex(this, index);
            var row = new Array(this.columns);
            for (var i = 0; i < this.columns; i++) {
                row[i] = this.get(index, i);
            }
            return row;
        }

        /**
         * Returns a new row vector from the given row index
         * @param {number} index - Row index
         * @return {Matrix}
         */
        getRowVector(index) {
            return this.constructor.rowVector(this.getRow(index));
        }

        /**
         * Sets a row at the given index
         * @param {number} index - Row index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setRow(index, array) {
            util.checkRowIndex(this, index);
            array = util.checkRowVector(this, array);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, array[i]);
            }
            return this;
        }

        /**
         * Swaps two rows
         * @param {number} row1 - First row index
         * @param {number} row2 - Second row index
         * @return {Matrix} this
         */
        swapRows(row1, row2) {
            util.checkRowIndex(this, row1);
            util.checkRowIndex(this, row2);
            for (var i = 0; i < this.columns; i++) {
                var temp = this.get(row1, i);
                this.set(row1, i, this.get(row2, i));
                this.set(row2, i, temp);
            }
            return this;
        }

        /**
         * Returns a new array from the given column index
         * @param {number} index - Column index
         * @return {Array}
         */
        getColumn(index) {
            util.checkColumnIndex(this, index);
            var column = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                column[i] = this.get(i, index);
            }
            return column;
        }

        /**
         * Returns a new column vector from the given column index
         * @param {number} index - Column index
         * @return {Matrix}
         */
        getColumnVector(index) {
            return this.constructor.columnVector(this.getColumn(index));
        }

        /**
         * Sets a column at the given index
         * @param {number} index - Column index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setColumn(index, array) {
            util.checkColumnIndex(this, index);
            array = util.checkColumnVector(this, array);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, array[i]);
            }
            return this;
        }

        /**
         * Swaps two columns
         * @param {number} column1 - First column index
         * @param {number} column2 - Second column index
         * @return {Matrix} this
         */
        swapColumns(column1, column2) {
            util.checkColumnIndex(this, column1);
            util.checkColumnIndex(this, column2);
            for (var i = 0; i < this.rows; i++) {
                var temp = this.get(i, column1);
                this.set(i, column1, this.get(i, column2));
                this.set(i, column2, temp);
            }
            return this;
        }

        /**
         * Adds the values of a vector to each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[j]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[j]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[j]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each row by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[j]);
                }
            }
            return this;
        }

        /**
         * Adds the values of a vector to each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[i]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[i]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each column by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a row with a scalar
         * @param {number} index - Row index
         * @param {number} value
         * @return {Matrix} this
         */
        mulRow(index, value) {
            util.checkRowIndex(this, index);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, this.get(index, i) * value);
            }
            return this;
        }

        /**
         * Multiplies the values of a column with a scalar
         * @param {number} index - Column index
         * @param {number} value
         * @return {Matrix} this
         */
        mulColumn(index, value) {
            util.checkColumnIndex(this, index);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, this.get(i, index) * value);
            }
            return this;
        }

        /**
         * Returns the maximum value of the matrix
         * @return {number}
         */
        max() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value
         * @return {Array}
         */
        maxIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of the matrix
         * @return {number}
         */
        min() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value
         * @return {Array}
         */
        minIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        maxRow(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        maxRowIndex(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        minRow(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        minRowIndex(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        maxColumn(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        maxColumnIndex(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        minColumn(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        minColumnIndex(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns an array containing the diagonal values of the matrix
         * @return {Array}
         */
        diag() {
            var min = Math.min(this.rows, this.columns);
            var diag = new Array(min);
            for (var i = 0; i < min; i++) {
                diag[i] = this.get(i, i);
            }
            return diag;
        }

        /**
         * Returns the sum by the argument given, if no argument given,
         * it returns the sum of all elements of the matrix.
         * @param {string} by - sum by 'row' or 'column'.
         * @return {Matrix|number}
         */
        sum(by) {
            switch (by) {
                case 'row':
                    return util.sumByRow(this);
                case 'column':
                    return util.sumByColumn(this);
                default:
                    return util.sumAll(this);
            }
        }

        /**
         * Returns the mean of all elements of the matrix
         * @return {number}
         */
        mean() {
            return this.sum() / this.size;
        }

        /**
         * Returns the product of all elements of the matrix
         * @return {number}
         */
        prod() {
            var prod = 1;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    prod *= this.get(i, j);
                }
            }
            return prod;
        }

        /**
         * Computes the cumulative sum of the matrix elements (in place, row by row)
         * @return {Matrix} this
         */
        cumulativeSum() {
            var sum = 0;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    sum += this.get(i, j);
                    this.set(i, j, sum);
                }
            }
            return this;
        }

        /**
         * Computes the dot (scalar) product between the matrix and another
         * @param {Matrix} vector2 vector
         * @return {number}
         */
        dot(vector2) {
            if (Matrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
            var vector1 = this.to1DArray();
            if (vector1.length !== vector2.length) {
                throw new RangeError('vectors do not have the same size');
            }
            var dot = 0;
            for (var i = 0; i < vector1.length; i++) {
                dot += vector1[i] * vector2[i];
            }
            return dot;
        }

        /**
         * Returns the matrix product between this and other
         * @param {Matrix} other
         * @return {Matrix}
         */
        mmul(other) {
            other = this.constructor.checkMatrix(other);
            if (this.columns !== other.rows) {
                // eslint-disable-next-line no-console
                console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');
            }

            var m = this.rows;
            var n = this.columns;
            var p = other.columns;

            var result = new this.constructor[Symbol.species](m, p);

            var Bcolj = new Array(n);
            for (var j = 0; j < p; j++) {
                for (var k = 0; k < n; k++) {
                    Bcolj[k] = other.get(k, j);
                }

                for (var i = 0; i < m; i++) {
                    var s = 0;
                    for (k = 0; k < n; k++) {
                        s += this.get(i, k) * Bcolj[k];
                    }

                    result.set(i, j, s);
                }
            }
            return result;
        }

        strassen2x2(other) {
            var result = new this.constructor[Symbol.species](2, 2);
            const a11 = this.get(0, 0);
            const b11 = other.get(0, 0);
            const a12 = this.get(0, 1);
            const b12 = other.get(0, 1);
            const a21 = this.get(1, 0);
            const b21 = other.get(1, 0);
            const a22 = this.get(1, 1);
            const b22 = other.get(1, 1);

            // Compute intermediate values.
            const m1 = (a11 + a22) * (b11 + b22);
            const m2 = (a21 + a22) * b11;
            const m3 = a11 * (b12 - b22);
            const m4 = a22 * (b21 - b11);
            const m5 = (a11 + a12) * b22;
            const m6 = (a21 - a11) * (b11 + b12);
            const m7 = (a12 - a22) * (b21 + b22);

            // Combine intermediate values into the output.
            const c00 = m1 + m4 - m5 + m7;
            const c01 = m3 + m5;
            const c10 = m2 + m4;
            const c11 = m1 - m2 + m3 + m6;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            return result;
        }

        strassen3x3(other) {
            var result = new this.constructor[Symbol.species](3, 3);

            const a00 = this.get(0, 0);
            const a01 = this.get(0, 1);
            const a02 = this.get(0, 2);
            const a10 = this.get(1, 0);
            const a11 = this.get(1, 1);
            const a12 = this.get(1, 2);
            const a20 = this.get(2, 0);
            const a21 = this.get(2, 1);
            const a22 = this.get(2, 2);

            const b00 = other.get(0, 0);
            const b01 = other.get(0, 1);
            const b02 = other.get(0, 2);
            const b10 = other.get(1, 0);
            const b11 = other.get(1, 1);
            const b12 = other.get(1, 2);
            const b20 = other.get(2, 0);
            const b21 = other.get(2, 1);
            const b22 = other.get(2, 2);

            const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
            const m2 = (a00 - a10) * (-b01 + b11);
            const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
            const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
            const m5 = (a10 + a11) * (-b00 + b01);
            const m6 = a00 * b00;
            const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
            const m8 = (-a00 + a20) * (b02 - b12);
            const m9 = (a20 + a21) * (-b00 + b02);
            const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
            const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
            const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
            const m13 = (a02 - a22) * (b11 - b21);
            const m14 = a02 * b20;
            const m15 = (a21 + a22) * (-b20 + b21);
            const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
            const m17 = (a02 - a12) * (b12 - b22);
            const m18 = (a11 + a12) * (-b20 + b22);
            const m19 = a01 * b10;
            const m20 = a12 * b21;
            const m21 = a10 * b02;
            const m22 = a20 * b01;
            const m23 = a22 * b22;

            const c00 = m6 + m14 + m19;
            const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
            const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
            const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
            const c11 = m2 + m4 + m5 + m6 + m20;
            const c12 = m14 + m16 + m17 + m18 + m21;
            const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
            const c21 = m12 + m13 + m14 + m15 + m22;
            const c22 = m6 + m7 + m8 + m9 + m23;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(0, 2, c02);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            result.set(1, 2, c12);
            result.set(2, 0, c20);
            result.set(2, 1, c21);
            result.set(2, 2, c22);
            return result;
        }

        /**
         * Returns the matrix product between x and y. More efficient than mmul(other) only when we multiply squared matrix and when the size of the matrix is > 1000.
         * @param {Matrix} y
         * @return {Matrix}
         */
        mmulStrassen(y) {
            var x = this.clone();
            var r1 = x.rows;
            var c1 = x.columns;
            var r2 = y.rows;
            var c2 = y.columns;
            if (c1 !== r2) {
                // eslint-disable-next-line no-console
                console.warn(`Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`);
            }

            // Put a matrix into the top left of a matrix of zeros.
            // `rows` and `cols` are the dimensions of the output matrix.
            function embed(mat, rows, cols) {
                var r = mat.rows;
                var c = mat.columns;
                if ((r === rows) && (c === cols)) {
                    return mat;
                } else {
                    var resultat = Matrix.zeros(rows, cols);
                    resultat = resultat.setSubMatrix(mat, 0, 0);
                    return resultat;
                }
            }


            // Make sure both matrices are the same size.
            // This is exclusively for simplicity:
            // this algorithm can be implemented with matrices of different sizes.

            var r = Math.max(r1, r2);
            var c = Math.max(c1, c2);
            x = embed(x, r, c);
            y = embed(y, r, c);

            // Our recursive multiplication function.
            function blockMult(a, b, rows, cols) {
                // For small matrices, resort to naive multiplication.
                if (rows <= 512 || cols <= 512) {
                    return a.mmul(b); // a is equivalent to this
                }

                // Apply dynamic padding.
                if ((rows % 2 === 1) && (cols % 2 === 1)) {
                    a = embed(a, rows + 1, cols + 1);
                    b = embed(b, rows + 1, cols + 1);
                } else if (rows % 2 === 1) {
                    a = embed(a, rows + 1, cols);
                    b = embed(b, rows + 1, cols);
                } else if (cols % 2 === 1) {
                    a = embed(a, rows, cols + 1);
                    b = embed(b, rows, cols + 1);
                }

                var halfRows = parseInt(a.rows / 2);
                var halfCols = parseInt(a.columns / 2);
                // Subdivide input matrices.
                var a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
                var b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);

                var a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
                var b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);

                var a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
                var b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);

                var a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
                var b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1);

                // Compute intermediate values.
                var m1 = blockMult(Matrix.add(a11, a22), Matrix.add(b11, b22), halfRows, halfCols);
                var m2 = blockMult(Matrix.add(a21, a22), b11, halfRows, halfCols);
                var m3 = blockMult(a11, Matrix.sub(b12, b22), halfRows, halfCols);
                var m4 = blockMult(a22, Matrix.sub(b21, b11), halfRows, halfCols);
                var m5 = blockMult(Matrix.add(a11, a12), b22, halfRows, halfCols);
                var m6 = blockMult(Matrix.sub(a21, a11), Matrix.add(b11, b12), halfRows, halfCols);
                var m7 = blockMult(Matrix.sub(a12, a22), Matrix.add(b21, b22), halfRows, halfCols);

                // Combine intermediate values into the output.
                var c11 = Matrix.add(m1, m4);
                c11.sub(m5);
                c11.add(m7);
                var c12 = Matrix.add(m3, m5);
                var c21 = Matrix.add(m2, m4);
                var c22 = Matrix.sub(m1, m2);
                c22.add(m3);
                c22.add(m6);

                //Crop output to the desired size (undo dynamic padding).
                var resultat = Matrix.zeros(2 * c11.rows, 2 * c11.columns);
                resultat = resultat.setSubMatrix(c11, 0, 0);
                resultat = resultat.setSubMatrix(c12, c11.rows, 0);
                resultat = resultat.setSubMatrix(c21, 0, c11.columns);
                resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
                return resultat.subMatrix(0, rows - 1, 0, cols - 1);
            }
            return blockMult(x, y, r, c);
        }

        /**
         * Returns a row-by-row scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The scaled matrix
         */
        scaleRows(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.rows; i++) {
                var scaled = arrayUtils.scale(this.getRow(i), {min, max});
                newMatrix.setRow(i, scaled);
            }
            return newMatrix;
        }

        /**
         * Returns a new column-by-column scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The new scaled matrix
         * @example
         * var matrix = new Matrix([[1,2],[-1,0]]);
         * var scaledMatrix = matrix.scaleColumns(); // [[1,1],[0,0]]
         */
        scaleColumns(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.columns; i++) {
                var scaled = arrayUtils.scale(this.getColumn(i), {
                    min: min,
                    max: max
                });
                newMatrix.setColumn(i, scaled);
            }
            return newMatrix;
        }


        /**
         * Returns the Kronecker product (also known as tensor product) between this and other
         * See https://en.wikipedia.org/wiki/Kronecker_product
         * @param {Matrix} other
         * @return {Matrix}
         */
        kroneckerProduct(other) {
            other = this.constructor.checkMatrix(other);

            var m = this.rows;
            var n = this.columns;
            var p = other.rows;
            var q = other.columns;

            var result = new this.constructor[Symbol.species](m * p, n * q);
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    for (var k = 0; k < p; k++) {
                        for (var l = 0; l < q; l++) {
                            result[p * i + k][q * j + l] = this.get(i, j) * other.get(k, l);
                        }
                    }
                }
            }
            return result;
        }

        /**
         * Transposes the matrix and returns a new one containing the result
         * @return {Matrix}
         */
        transpose() {
            var result = new this.constructor[Symbol.species](this.columns, this.rows);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    result.set(j, i, this.get(i, j));
                }
            }
            return result;
        }

        /**
         * Sorts the rows (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortRows(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.rows; i++) {
                this.setRow(i, this.getRow(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Sorts the columns (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortColumns(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.columns; i++) {
                this.setColumn(i, this.getColumn(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Returns a subset of the matrix
         * @param {number} startRow - First row index
         * @param {number} endRow - Last row index
         * @param {number} startColumn - First column index
         * @param {number} endColumn - Last column index
         * @return {Matrix}
         */
        subMatrix(startRow, endRow, startColumn, endColumn) {
            util.checkRange(this, startRow, endRow, startColumn, endColumn);
            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, endColumn - startColumn + 1);
            for (var i = startRow; i <= endRow; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    newMatrix[i - startRow][j - startColumn] = this.get(i, j);
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of row indices
         * @param {Array} indices - Array containing the row indices
         * @param {number} [startColumn = 0] - First column index
         * @param {number} [endColumn = this.columns-1] - Last column index
         * @return {Matrix}
         */
        subMatrixRow(indices, startColumn, endColumn) {
            if (startColumn === undefined) startColumn = 0;
            if (endColumn === undefined) endColumn = this.columns - 1;
            if ((startColumn > endColumn) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](indices.length, endColumn - startColumn + 1);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    if (indices[i] < 0 || indices[i] >= this.rows) {
                        throw new RangeError('Row index out of range: ' + indices[i]);
                    }
                    newMatrix.set(i, j - startColumn, this.get(indices[i], j));
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of column indices
         * @param {Array} indices - Array containing the column indices
         * @param {number} [startRow = 0] - First row index
         * @param {number} [endRow = this.rows-1] - Last row index
         * @return {Matrix}
         */
        subMatrixColumn(indices, startRow, endRow) {
            if (startRow === undefined) startRow = 0;
            if (endRow === undefined) endRow = this.rows - 1;
            if ((startRow > endRow) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, indices.length);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startRow; j <= endRow; j++) {
                    if (indices[i] < 0 || indices[i] >= this.columns) {
                        throw new RangeError('Column index out of range: ' + indices[i]);
                    }
                    newMatrix.set(j - startRow, i, this.get(j, indices[i]));
                }
            }
            return newMatrix;
        }

        /**
         * Set a part of the matrix to the given sub-matrix
         * @param {Matrix|Array< Array >} matrix - The source matrix from which to extract values.
         * @param {number} startRow - The index of the first row to set
         * @param {number} startColumn - The index of the first column to set
         * @return {Matrix}
         */
        setSubMatrix(matrix, startRow, startColumn) {
            matrix = this.constructor.checkMatrix(matrix);
            var endRow = startRow + matrix.rows - 1;
            var endColumn = startColumn + matrix.columns - 1;
            util.checkRange(this, startRow, endRow, startColumn, endColumn);
            for (var i = 0; i < matrix.rows; i++) {
                for (var j = 0; j < matrix.columns; j++) {
                    this[startRow + i][startColumn + j] = matrix.get(i, j);
                }
            }
            return this;
        }

        /**
         * Return a new matrix based on a selection of rows and columns
         * @param {Array<number>} rowIndices - The row indices to select. Order matters and an index can be more than once.
         * @param {Array<number>} columnIndices - The column indices to select. Order matters and an index can be use more than once.
         * @return {Matrix} The new matrix
         */
        selection(rowIndices, columnIndices) {
            var indices = util.checkIndices(this, rowIndices, columnIndices);
            var newMatrix = new this.constructor[Symbol.species](rowIndices.length, columnIndices.length);
            for (var i = 0; i < indices.row.length; i++) {
                var rowIndex = indices.row[i];
                for (var j = 0; j < indices.column.length; j++) {
                    var columnIndex = indices.column[j];
                    newMatrix[i][j] = this.get(rowIndex, columnIndex);
                }
            }
            return newMatrix;
        }

        /**
         * Returns the trace of the matrix (sum of the diagonal elements)
         * @return {number}
         */
        trace() {
            var min = Math.min(this.rows, this.columns);
            var trace = 0;
            for (var i = 0; i < min; i++) {
                trace += this.get(i, i);
            }
            return trace;
        }

        /*
         Matrix views
         */

        /**
         * Returns a view of the transposition of the matrix
         * @return {MatrixTransposeView}
         */
        transposeView() {
            return new MatrixTransposeView(this);
        }

        /**
         * Returns a view of the row vector with the given index
         * @param {number} row - row index of the vector
         * @return {MatrixRowView}
         */
        rowView(row) {
            util.checkRowIndex(this, row);
            return new MatrixRowView(this, row);
        }

        /**
         * Returns a view of the column vector with the given index
         * @param {number} column - column index of the vector
         * @return {MatrixColumnView}
         */
        columnView(column) {
            util.checkColumnIndex(this, column);
            return new MatrixColumnView(this, column);
        }

        /**
         * Returns a view of the matrix flipped in the row axis
         * @return {MatrixFlipRowView}
         */
        flipRowView() {
            return new MatrixFlipRowView(this);
        }

        /**
         * Returns a view of the matrix flipped in the column axis
         * @return {MatrixFlipColumnView}
         */
        flipColumnView() {
            return new MatrixFlipColumnView(this);
        }

        /**
         * Returns a view of a submatrix giving the index boundaries
         * @param {number} startRow - first row index of the submatrix
         * @param {number} endRow - last row index of the submatrix
         * @param {number} startColumn - first column index of the submatrix
         * @param {number} endColumn - last column index of the submatrix
         * @return {MatrixSubView}
         */
        subMatrixView(startRow, endRow, startColumn, endColumn) {
            return new MatrixSubView(this, startRow, endRow, startColumn, endColumn);
        }

        /**
         * Returns a view of the cross of the row indices and the column indices
         * @example
         * // resulting vector is [[2], [2]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).selectionView([0, 0], [1])
         * @param {Array<number>} rowIndices
         * @param {Array<number>} columnIndices
         * @return {MatrixSelectionView}
         */
        selectionView(rowIndices, columnIndices) {
            return new MatrixSelectionView(this, rowIndices, columnIndices);
        }


        /**
        * Calculates and returns the determinant of a matrix as a Number
        * @example
        *   new Matrix([[1,2,3], [4,5,6]]).det()
        * @return {number}
        */
        det() {
            if (this.isSquare()) {
                var a, b, c, d;
                if (this.columns === 2) {
                    // 2 x 2 matrix
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(1, 0);
                    d = this.get(1, 1);

                    return a * d - (b * c);
                } else if (this.columns === 3) {
                    // 3 x 3 matrix
                    var subMatrix0, subMatrix1, subMatrix2;
                    subMatrix0 = this.selectionView([1, 2], [1, 2]);
                    subMatrix1 = this.selectionView([1, 2], [0, 2]);
                    subMatrix2 = this.selectionView([1, 2], [0, 1]);
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(0, 2);

                    return a * subMatrix0.det() - b * subMatrix1.det() + c * subMatrix2.det();
                } else {
                    // general purpose determinant using the LU decomposition
                    return new LuDecomposition(this).determinant;
                }

            } else {
                throw Error('Determinant can only be calculated for a square matrix.');
            }
        }

        /**
         * Returns inverse of a matrix if it exists or the pseudoinverse
         * @param {number} threshold - threshold for taking inverse of singular values (default = 1e-15)
         * @return {Matrix} the (pseudo)inverted matrix.
         */
        pseudoInverse(threshold) {
            if (threshold === undefined) threshold = Number.EPSILON;
            var svdSolution = new SvDecomposition(this, {autoTranspose: true});

            var U = svdSolution.leftSingularVectors;
            var V = svdSolution.rightSingularVectors;
            var s = svdSolution.diagonal;

            for (var i = 0; i < s.length; i++) {
                if (Math.abs(s[i]) > threshold) {
                    s[i] = 1.0 / s[i];
                } else {
                    s[i] = 0.0;
                }
            }

            // convert list to diagonal
            s = this.constructor[Symbol.species].diag(s);
            return V.mmul(s.mmul(U.transposeView()));
        }
    }

    Matrix.prototype.klass = 'Matrix';

    /**
     * @private
     * Check that two matrices have the same dimensions
     * @param {Matrix} matrix
     * @param {Matrix} otherMatrix
     */
    function checkDimensions(matrix, otherMatrix) { // eslint-disable-line no-unused-vars
        if (matrix.rows !== otherMatrix.rows ||
            matrix.columns !== otherMatrix.columns) {
            throw new RangeError('Matrices dimensions must be equal');
        }
    }

    function compareNumbers(a, b) {
        return a - b;
    }

    /*
     Synonyms
     */

    Matrix.random = Matrix.rand;
    Matrix.diagonal = Matrix.diag;
    Matrix.prototype.diagonal = Matrix.prototype.diag;
    Matrix.identity = Matrix.eye;
    Matrix.prototype.negate = Matrix.prototype.neg;
    Matrix.prototype.tensorProduct = Matrix.prototype.kroneckerProduct;
    Matrix.prototype.determinant = Matrix.prototype.det;

    /*
     Add dynamically instance and static methods for mathematical operations
     */

    var inplaceOperator = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var inplaceOperatorScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% value);
        }
    }
    return this;
})
`;

    var inplaceOperatorMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    checkDimensions(this, matrix);
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% matrix.get(i, j));
        }
    }
    return this;
})
`;

    var staticOperator = `
(function %name%(matrix, value) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(value);
})
`;

    var inplaceMethod = `
(function %name%() {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j)));
        }
    }
    return this;
})
`;

    var staticMethod = `
(function %name%(matrix) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%();
})
`;

    var inplaceMethodWithArgs = `
(function %name%(%args%) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), %args%));
        }
    }
    return this;
})
`;

    var staticMethodWithArgs = `
(function %name%(matrix, %args%) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(%args%);
})
`;


    var inplaceMethodWithOneArgScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), value));
        }
    }
    return this;
})
`;
    var inplaceMethodWithOneArgMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    checkDimensions(this, matrix);
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), matrix.get(i, j)));
        }
    }
    return this;
})
`;

    var inplaceMethodWithOneArg = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var staticMethodWithOneArg = staticMethodWithArgs;

    var operators = [
        // Arithmetic operators
        ['+', 'add'],
        ['-', 'sub', 'subtract'],
        ['*', 'mul', 'multiply'],
        ['/', 'div', 'divide'],
        ['%', 'mod', 'modulus'],
        // Bitwise operators
        ['&', 'and'],
        ['|', 'or'],
        ['^', 'xor'],
        ['<<', 'leftShift'],
        ['>>', 'signPropagatingRightShift'],
        ['>>>', 'rightShift', 'zeroFillRightShift']
    ];

    var i;

    for (var operator of operators) {
        var inplaceOp = eval(fillTemplateFunction(inplaceOperator, {name: operator[1], op: operator[0]}));
        var inplaceOpS = eval(fillTemplateFunction(inplaceOperatorScalar, {name: operator[1] + 'S', op: operator[0]}));
        var inplaceOpM = eval(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[1] + 'M', op: operator[0]}));
        var staticOp = eval(fillTemplateFunction(staticOperator, {name: operator[1]}));
        for (i = 1; i < operator.length; i++) {
            Matrix.prototype[operator[i]] = inplaceOp;
            Matrix.prototype[operator[i] + 'S'] = inplaceOpS;
            Matrix.prototype[operator[i] + 'M'] = inplaceOpM;
            Matrix[operator[i]] = staticOp;
        }
    }

    var methods = [
        ['~', 'not']
    ];

    [
        'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil',
        'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'log', 'log1p',
        'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
    ].forEach(function (mathMethod) {
        methods.push(['Math.' + mathMethod, mathMethod]);
    });

    for (var method of methods) {
        var inplaceMeth = eval(fillTemplateFunction(inplaceMethod, {name: method[1], method: method[0]}));
        var staticMeth = eval(fillTemplateFunction(staticMethod, {name: method[1]}));
        for (i = 1; i < method.length; i++) {
            Matrix.prototype[method[i]] = inplaceMeth;
            Matrix[method[i]] = staticMeth;
        }
    }

    var methodsWithArgs = [
        ['Math.pow', 1, 'pow']
    ];

    for (var methodWithArg of methodsWithArgs) {
        var args = 'arg0';
        for (i = 1; i < methodWithArg[1]; i++) {
            args += `, arg${i}`;
        }
        if (methodWithArg[1] !== 1) {
            var inplaceMethWithArgs = eval(fillTemplateFunction(inplaceMethodWithArgs, {
                name: methodWithArg[2],
                method: methodWithArg[0],
                args: args
            }));
            var staticMethWithArgs = eval(fillTemplateFunction(staticMethodWithArgs, {name: methodWithArg[2], args: args}));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
                Matrix[methodWithArg[i]] = staticMethWithArgs;
            }
        } else {
            var tmplVar = {
                name: methodWithArg[2],
                args: args,
                method: methodWithArg[0]
            };
            var inplaceMethod2 = eval(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
            var inplaceMethodS = eval(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
            var inplaceMethodM = eval(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
            var staticMethod2 = eval(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethod2;
                Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
                Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
                Matrix[methodWithArg[i]] = staticMethod2;
            }
        }
    }

    function fillTemplateFunction(template, values) {
        for (var value in values) {
            template = template.replace(new RegExp('%' + value + '%', 'g'), values[value]);
        }
        return template;
    }

    return Matrix;
}


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(1);

// https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
function LuDecomposition(matrix) {
    if (!(this instanceof LuDecomposition)) {
        return new LuDecomposition(matrix);
    }

    matrix = Matrix.Matrix.checkMatrix(matrix);

    var lu = matrix.clone(),
        rows = lu.rows,
        columns = lu.columns,
        pivotVector = new Array(rows),
        pivotSign = 1,
        i, j, k, p, s, t, v,
        LUrowi, LUcolj, kmax;

    for (i = 0; i < rows; i++) {
        pivotVector[i] = i;
    }

    LUcolj = new Array(rows);

    for (j = 0; j < columns; j++) {

        for (i = 0; i < rows; i++) {
            LUcolj[i] = lu[i][j];
        }

        for (i = 0; i < rows; i++) {
            LUrowi = lu[i];
            kmax = Math.min(i, j);
            s = 0;
            for (k = 0; k < kmax; k++) {
                s += LUrowi[k] * LUcolj[k];
            }
            LUrowi[j] = LUcolj[i] -= s;
        }

        p = j;
        for (i = j + 1; i < rows; i++) {
            if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                p = i;
            }
        }

        if (p !== j) {
            for (k = 0; k < columns; k++) {
                t = lu[p][k];
                lu[p][k] = lu[j][k];
                lu[j][k] = t;
            }

            v = pivotVector[p];
            pivotVector[p] = pivotVector[j];
            pivotVector[j] = v;

            pivotSign = -pivotSign;
        }

        if (j < rows && lu[j][j] !== 0) {
            for (i = j + 1; i < rows; i++) {
                lu[i][j] /= lu[j][j];
            }
        }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
}

LuDecomposition.prototype = {
    isSingular: function () {
        var data = this.LU,
            col = data.columns;
        for (var j = 0; j < col; j++) {
            if (data[j][j] === 0) {
                return true;
            }
        }
        return false;
    },
    get determinant() {
        var data = this.LU;
        if (!data.isSquare()) {
            throw new Error('Matrix must be square');
        }
        var determinant = this.pivotSign, col = data.columns;
        for (var j = 0; j < col; j++) {
            determinant *= data[j][j];
        }
        return determinant;
    },
    get lowerTriangularMatrix() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix.Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i > j) {
                    X[i][j] = data[i][j];
                } else if (i === j) {
                    X[i][j] = 1;
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get upperTriangularMatrix() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix.Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i <= j) {
                    X[i][j] = data[i][j];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get pivotPermutationVector() {
        return this.pivotVector.slice();
    },
    solve: function (value) {
        value = Matrix.Matrix.checkMatrix(value);

        var lu = this.LU,
            rows = lu.rows;

        if (rows !== value.rows) {
            throw new Error('Invalid matrix dimensions');
        }
        if (this.isSingular()) {
            throw new Error('LU matrix is singular');
        }

        var count = value.columns;
        var X = value.subMatrixRow(this.pivotVector, 0, count - 1);
        var columns = lu.columns;
        var i, j, k;

        for (k = 0; k < columns; k++) {
            for (i = k + 1; i < columns; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        for (k = columns - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= lu[k][k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        return X;
    }
};

module.exports = LuDecomposition;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(1);
var util = __webpack_require__(45);
var hypotenuse = util.hypotenuse;
var getFilled2DArray = util.getFilled2DArray;

// https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
function SingularValueDecomposition(value, options) {
    if (!(this instanceof SingularValueDecomposition)) {
        return new SingularValueDecomposition(value, options);
    }
    value = Matrix.Matrix.checkMatrix(value);

    options = options || {};

    var m = value.rows,
        n = value.columns,
        nu = Math.min(m, n);

    var wantu = true, wantv = true;
    if (options.computeLeftSingularVectors === false) wantu = false;
    if (options.computeRightSingularVectors === false) wantv = false;
    var autoTranspose = options.autoTranspose === true;

    var swapped = false;
    var a;
    if (m < n) {
        if (!autoTranspose) {
            a = value.clone();
            // eslint-disable-next-line no-console
            console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
        } else {
            a = value.transpose();
            m = a.rows;
            n = a.columns;
            swapped = true;
            var aux = wantu;
            wantu = wantv;
            wantv = aux;
        }
    } else {
        a = value.clone();
    }

    var s = new Array(Math.min(m + 1, n)),
        U = getFilled2DArray(m, nu, 0),
        V = getFilled2DArray(n, n, 0),
        e = new Array(n),
        work = new Array(m);

    var nct = Math.min(m - 1, n);
    var nrt = Math.max(0, Math.min(n - 2, m));

    var i, j, k, p, t, ks, f, cs, sn, max, kase,
        scale, sp, spm1, epm1, sk, ek, b, c, shift, g;

    for (k = 0, max = Math.max(nct, nrt); k < max; k++) {
        if (k < nct) {
            s[k] = 0;
            for (i = k; i < m; i++) {
                s[k] = hypotenuse(s[k], a[i][k]);
            }
            if (s[k] !== 0) {
                if (a[k][k] < 0) {
                    s[k] = -s[k];
                }
                for (i = k; i < m; i++) {
                    a[i][k] /= s[k];
                }
                a[k][k] += 1;
            }
            s[k] = -s[k];
        }

        for (j = k + 1; j < n; j++) {
            if ((k < nct) && (s[k] !== 0)) {
                t = 0;
                for (i = k; i < m; i++) {
                    t += a[i][k] * a[i][j];
                }
                t = -t / a[k][k];
                for (i = k; i < m; i++) {
                    a[i][j] += t * a[i][k];
                }
            }
            e[j] = a[k][j];
        }

        if (wantu && (k < nct)) {
            for (i = k; i < m; i++) {
                U[i][k] = a[i][k];
            }
        }

        if (k < nrt) {
            e[k] = 0;
            for (i = k + 1; i < n; i++) {
                e[k] = hypotenuse(e[k], e[i]);
            }
            if (e[k] !== 0) {
                if (e[k + 1] < 0) {
                    e[k] = 0 - e[k];
                }
                for (i = k + 1; i < n; i++) {
                    e[i] /= e[k];
                }
                e[k + 1] += 1;
            }
            e[k] = -e[k];
            if ((k + 1 < m) && (e[k] !== 0)) {
                for (i = k + 1; i < m; i++) {
                    work[i] = 0;
                }
                for (j = k + 1; j < n; j++) {
                    for (i = k + 1; i < m; i++) {
                        work[i] += e[j] * a[i][j];
                    }
                }
                for (j = k + 1; j < n; j++) {
                    t = -e[j] / e[k + 1];
                    for (i = k + 1; i < m; i++) {
                        a[i][j] += t * work[i];
                    }
                }
            }
            if (wantv) {
                for (i = k + 1; i < n; i++) {
                    V[i][k] = e[i];
                }
            }
        }
    }

    p = Math.min(n, m + 1);
    if (nct < n) {
        s[nct] = a[nct][nct];
    }
    if (m < p) {
        s[p - 1] = 0;
    }
    if (nrt + 1 < p) {
        e[nrt] = a[nrt][p - 1];
    }
    e[p - 1] = 0;

    if (wantu) {
        for (j = nct; j < nu; j++) {
            for (i = 0; i < m; i++) {
                U[i][j] = 0;
            }
            U[j][j] = 1;
        }
        for (k = nct - 1; k >= 0; k--) {
            if (s[k] !== 0) {
                for (j = k + 1; j < nu; j++) {
                    t = 0;
                    for (i = k; i < m; i++) {
                        t += U[i][k] * U[i][j];
                    }
                    t = -t / U[k][k];
                    for (i = k; i < m; i++) {
                        U[i][j] += t * U[i][k];
                    }
                }
                for (i = k; i < m; i++) {
                    U[i][k] = -U[i][k];
                }
                U[k][k] = 1 + U[k][k];
                for (i = 0; i < k - 1; i++) {
                    U[i][k] = 0;
                }
            } else {
                for (i = 0; i < m; i++) {
                    U[i][k] = 0;
                }
                U[k][k] = 1;
            }
        }
    }

    if (wantv) {
        for (k = n - 1; k >= 0; k--) {
            if ((k < nrt) && (e[k] !== 0)) {
                for (j = k + 1; j < n; j++) {
                    t = 0;
                    for (i = k + 1; i < n; i++) {
                        t += V[i][k] * V[i][j];
                    }
                    t = -t / V[k + 1][k];
                    for (i = k + 1; i < n; i++) {
                        V[i][j] += t * V[i][k];
                    }
                }
            }
            for (i = 0; i < n; i++) {
                V[i][k] = 0;
            }
            V[k][k] = 1;
        }
    }

    var pp = p - 1,
        iter = 0,
        eps = Math.pow(2, -52);
    while (p > 0) {
        for (k = p - 2; k >= -1; k--) {
            if (k === -1) {
                break;
            }
            if (Math.abs(e[k]) <= eps * (Math.abs(s[k]) + Math.abs(s[k + 1]))) {
                e[k] = 0;
                break;
            }
        }
        if (k === p - 2) {
            kase = 4;
        } else {
            for (ks = p - 1; ks >= k; ks--) {
                if (ks === k) {
                    break;
                }
                t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
                if (Math.abs(s[ks]) <= eps * t) {
                    s[ks] = 0;
                    break;
                }
            }
            if (ks === k) {
                kase = 3;
            } else if (ks === p - 1) {
                kase = 1;
            } else {
                kase = 2;
                k = ks;
            }
        }

        k++;

        switch (kase) {
            case 1: {
                f = e[p - 2];
                e[p - 2] = 0;
                for (j = p - 2; j >= k; j--) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    if (j !== k) {
                        f = -sn * e[j - 1];
                        e[j - 1] = cs * e[j - 1];
                    }
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][p - 1];
                            V[i][p - 1] = -sn * V[i][j] + cs * V[i][p - 1];
                            V[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 2 : {
                f = e[k - 1];
                e[k - 1] = 0;
                for (j = k; j < p; j++) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    f = -sn * e[j];
                    e[j] = cs * e[j];
                    if (wantu) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][k - 1];
                            U[i][k - 1] = -sn * U[i][j] + cs * U[i][k - 1];
                            U[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 3 : {
                scale = Math.max(Math.max(Math.max(Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2])), Math.abs(e[p - 2])), Math.abs(s[k])), Math.abs(e[k]));
                sp = s[p - 1] / scale;
                spm1 = s[p - 2] / scale;
                epm1 = e[p - 2] / scale;
                sk = s[k] / scale;
                ek = e[k] / scale;
                b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
                c = (sp * epm1) * (sp * epm1);
                shift = 0;
                if ((b !== 0) || (c !== 0)) {
                    shift = Math.sqrt(b * b + c);
                    if (b < 0) {
                        shift = -shift;
                    }
                    shift = c / (b + shift);
                }
                f = (sk + sp) * (sk - sp) + shift;
                g = sk * ek;
                for (j = k; j < p - 1; j++) {
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    if (j !== k) {
                        e[j - 1] = t;
                    }
                    f = cs * s[j] + sn * e[j];
                    e[j] = cs * e[j] - sn * s[j];
                    g = sn * s[j + 1];
                    s[j + 1] = cs * s[j + 1];
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][j + 1];
                            V[i][j + 1] = -sn * V[i][j] + cs * V[i][j + 1];
                            V[i][j] = t;
                        }
                    }
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    s[j] = t;
                    f = cs * e[j] + sn * s[j + 1];
                    s[j + 1] = -sn * e[j] + cs * s[j + 1];
                    g = sn * e[j + 1];
                    e[j + 1] = cs * e[j + 1];
                    if (wantu && (j < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][j + 1];
                            U[i][j + 1] = -sn * U[i][j] + cs * U[i][j + 1];
                            U[i][j] = t;
                        }
                    }
                }
                e[p - 2] = f;
                iter = iter + 1;
                break;
            }
            case 4: {
                if (s[k] <= 0) {
                    s[k] = (s[k] < 0 ? -s[k] : 0);
                    if (wantv) {
                        for (i = 0; i <= pp; i++) {
                            V[i][k] = -V[i][k];
                        }
                    }
                }
                while (k < pp) {
                    if (s[k] >= s[k + 1]) {
                        break;
                    }
                    t = s[k];
                    s[k] = s[k + 1];
                    s[k + 1] = t;
                    if (wantv && (k < n - 1)) {
                        for (i = 0; i < n; i++) {
                            t = V[i][k + 1];
                            V[i][k + 1] = V[i][k];
                            V[i][k] = t;
                        }
                    }
                    if (wantu && (k < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = U[i][k + 1];
                            U[i][k + 1] = U[i][k];
                            U[i][k] = t;
                        }
                    }
                    k++;
                }
                iter = 0;
                p--;
                break;
            }
            // no default
        }
    }

    if (swapped) {
        var tmp = V;
        V = U;
        U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
}

SingularValueDecomposition.prototype = {
    get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    },
    get norm2() {
        return this.s[0];
    },
    get rank() {
        var eps = Math.pow(2, -52),
            tol = Math.max(this.m, this.n) * this.s[0] * eps,
            r = 0,
            s = this.s;
        for (var i = 0, ii = s.length; i < ii; i++) {
            if (s[i] > tol) {
                r++;
            }
        }
        return r;
    },
    get diagonal() {
        return this.s;
    },
    // https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Decompositions/SingularValueDecomposition.cs
    get threshold() {
        return (Math.pow(2, -52) / 2) * Math.max(this.m, this.n) * this.s[0];
    },
    get leftSingularVectors() {
        if (!Matrix.Matrix.isMatrix(this.U)) {
            this.U = new Matrix.Matrix(this.U);
        }
        return this.U;
    },
    get rightSingularVectors() {
        if (!Matrix.Matrix.isMatrix(this.V)) {
            this.V = new Matrix.Matrix(this.V);
        }
        return this.V;
    },
    get diagonalMatrix() {
        return Matrix.Matrix.diag(this.s);
    },
    solve: function (value) {

        var Y = value,
            e = this.threshold,
            scols = this.s.length,
            Ls = Matrix.Matrix.zeros(scols, scols),
            i;

        for (i = 0; i < scols; i++) {
            if (Math.abs(this.s[i]) <= e) {
                Ls[i][i] = 0;
            } else {
                Ls[i][i] = 1 / this.s[i];
            }
        }

        var U = this.U;
        var V = this.rightSingularVectors;

        var VL = V.mmul(Ls),
            vrows = V.rows,
            urows = U.length,
            VLU = Matrix.Matrix.zeros(vrows, urows),
            j, k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < scols; k++) {
                    sum += VL[i][k] * U[j][k];
                }
                VLU[i][j] = sum;
            }
        }

        return VLU.mmul(Y);
    },
    solveForDiagonal: function (value) {
        return this.solve(Matrix.Matrix.diag(value));
    },
    inverse: function () {
        var V = this.V;
        var e = this.threshold,
            vrows = V.length,
            vcols = V[0].length,
            X = new Matrix.Matrix(vrows, this.s.length),
            i, j;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < vcols; j++) {
                if (Math.abs(this.s[j]) > e) {
                    X[i][j] = V[i][j] / this.s[j];
                } else {
                    X[i][j] = 0;
                }
            }
        }

        var U = this.U;

        var urows = U.length,
            ucols = U[0].length,
            Y = new Matrix.Matrix(vrows, urows),
            k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < ucols; k++) {
                    sum += X[i][k] * U[j][k];
                }
                Y[i][j] = sum;
            }
        }

        return Y;
    }
};

module.exports = SingularValueDecomposition;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = abstractMatrix;

var LuDecomposition = __webpack_require__(73);
var SvDecomposition = __webpack_require__(74);
var arrayUtils = __webpack_require__(67);
var util = __webpack_require__(27);
var MatrixTransposeView = __webpack_require__(184);
var MatrixRowView = __webpack_require__(181);
var MatrixSubView = __webpack_require__(183);
var MatrixSelectionView = __webpack_require__(182);
var MatrixColumnView = __webpack_require__(178);
var MatrixFlipRowView = __webpack_require__(180);
var MatrixFlipColumnView = __webpack_require__(179);

function abstractMatrix(superCtor) {
    if (superCtor === undefined) superCtor = Object;

    /**
     * Real matrix
     * @class Matrix
     * @param {number|Array|Matrix} nRows - Number of rows of the new matrix,
     * 2D array containing the data or Matrix instance to clone
     * @param {number} [nColumns] - Number of columns of the new matrix
     */
    class Matrix extends superCtor {
        static get [Symbol.species]() {
            return this;
        }

        /**
         * Constructs a Matrix with the chosen dimensions from a 1D array
         * @param {number} newRows - Number of rows
         * @param {number} newColumns - Number of columns
         * @param {Array} newData - A 1D array containing data for the matrix
         * @return {Matrix} - The new matrix
         */
        static from1DArray(newRows, newColumns, newData) {
            var length = newRows * newColumns;
            if (length !== newData.length) {
                throw new RangeError('Data length does not match given dimensions');
            }
            var newMatrix = new this(newRows, newColumns);
            for (var row = 0; row < newRows; row++) {
                for (var column = 0; column < newColumns; column++) {
                    newMatrix.set(row, column, newData[row * newColumns + column]);
                }
            }
            return newMatrix;
        }

        /**
         * Creates a row vector, a matrix with only one row.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static rowVector(newData) {
            var vector = new this(1, newData.length);
            for (var i = 0; i < newData.length; i++) {
                vector.set(0, i, newData[i]);
            }
            return vector;
        }

        /**
         * Creates a column vector, a matrix with only one column.
         * @param {Array} newData - A 1D array containing data for the vector
         * @return {Matrix} - The new matrix
         */
        static columnVector(newData) {
            var vector = new this(newData.length, 1);
            for (var i = 0; i < newData.length; i++) {
                vector.set(i, 0, newData[i]);
            }
            return vector;
        }

        /**
         * Creates an empty matrix with the given dimensions. Values will be undefined. Same as using new Matrix(rows, columns).
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static empty(rows, columns) {
            return new this(rows, columns);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to zero.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static zeros(rows, columns) {
            return this.empty(rows, columns).fill(0);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be set to one.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @return {Matrix} - The new matrix
         */
        static ones(rows, columns) {
            return this.empty(rows, columns).fill(1);
        }

        /**
         * Creates a matrix with the given dimensions. Values will be randomly set.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static rand(rows, columns, rng) {
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    matrix.set(i, j, rng());
                }
            }
            return matrix;
        }

        /**
         * Creates a matrix with the given dimensions. Values will be random integers.
         * @param {number} rows - Number of rows
         * @param {number} columns - Number of columns
         * @param {number} [maxValue=1000] - Maximum value
         * @param {function} [rng=Math.random] - Random number generator
         * @return {Matrix} The new matrix
         */
        static randInt(rows, columns, maxValue, rng) {
            if (maxValue === undefined) maxValue = 1000;
            if (rng === undefined) rng = Math.random;
            var matrix = this.empty(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    var value = Math.floor(rng() * maxValue);
                    matrix.set(i, j, value);
                }
            }
            return matrix;
        }

        /**
         * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
         * @param {number} rows - Number of rows
         * @param {number} [columns=rows] - Number of columns
         * @param {number} [value=1] - Value to fill the diagonal with
         * @return {Matrix} - The new identity matrix
         */
        static eye(rows, columns, value) {
            if (columns === undefined) columns = rows;
            if (value === undefined) value = 1;
            var min = Math.min(rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, value);
            }
            return matrix;
        }

        /**
         * Creates a diagonal matrix based on the given array.
         * @param {Array} data - Array containing the data for the diagonal
         * @param {number} [rows] - Number of rows (Default: data.length)
         * @param {number} [columns] - Number of columns (Default: rows)
         * @return {Matrix} - The new diagonal matrix
         */
        static diag(data, rows, columns) {
            var l = data.length;
            if (rows === undefined) rows = l;
            if (columns === undefined) columns = rows;
            var min = Math.min(l, rows, columns);
            var matrix = this.zeros(rows, columns);
            for (var i = 0; i < min; i++) {
                matrix.set(i, i, data[i]);
            }
            return matrix;
        }

        /**
         * Returns a matrix whose elements are the minimum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static min(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Returns a matrix whose elements are the maximum between matrix1 and matrix2
         * @param {Matrix} matrix1
         * @param {Matrix} matrix2
         * @return {Matrix}
         */
        static max(matrix1, matrix2) {
            matrix1 = this.checkMatrix(matrix1);
            matrix2 = this.checkMatrix(matrix2);
            var rows = matrix1.rows;
            var columns = matrix1.columns;
            var result = new this(rows, columns);
            for (var i = 0; i < rows; i++) {
                for (var j = 0; j < columns; j++) {
                    result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
                }
            }
            return result;
        }

        /**
         * Check that the provided value is a Matrix and tries to instantiate one if not
         * @param {*} value - The value to check
         * @return {Matrix}
         */
        static checkMatrix(value) {
            return Matrix.isMatrix(value) ? value : new this(value);
        }

        /**
         * Returns true if the argument is a Matrix, false otherwise
         * @param {*} value - The value to check
         * @return {boolean}
         */
        static isMatrix(value) {
            return (value != null) && (value.klass === 'Matrix');
        }

        /**
         * @prop {number} size - The number of elements in the matrix.
         */
        get size() {
            return this.rows * this.columns;
        }

        /**
         * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
         * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
         * @return {Matrix} this
         */
        apply(callback) {
            if (typeof callback !== 'function') {
                throw new TypeError('callback must be a function');
            }
            var ii = this.rows;
            var jj = this.columns;
            for (var i = 0; i < ii; i++) {
                for (var j = 0; j < jj; j++) {
                    callback.call(this, i, j);
                }
            }
            return this;
        }

        /**
         * Returns a new 1D array filled row by row with the matrix values
         * @return {Array}
         */
        to1DArray() {
            var array = new Array(this.size);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    array[i * this.columns + j] = this.get(i, j);
                }
            }
            return array;
        }

        /**
         * Returns a 2D array containing a copy of the data
         * @return {Array}
         */
        to2DArray() {
            var copy = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                copy[i] = new Array(this.columns);
                for (var j = 0; j < this.columns; j++) {
                    copy[i][j] = this.get(i, j);
                }
            }
            return copy;
        }

        /**
         * @return {boolean} true if the matrix has one row
         */
        isRowVector() {
            return this.rows === 1;
        }

        /**
         * @return {boolean} true if the matrix has one column
         */
        isColumnVector() {
            return this.columns === 1;
        }

        /**
         * @return {boolean} true if the matrix has one row or one column
         */
        isVector() {
            return (this.rows === 1) || (this.columns === 1);
        }

        /**
         * @return {boolean} true if the matrix has the same number of rows and columns
         */
        isSquare() {
            return this.rows === this.columns;
        }

        /**
         * @return {boolean} true if the matrix is square and has the same values on both sides of the diagonal
         */
        isSymmetric() {
            if (this.isSquare()) {
                for (var i = 0; i < this.rows; i++) {
                    for (var j = 0; j <= i; j++) {
                        if (this.get(i, j) !== this.get(j, i)) {
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        }

        /**
         * Sets a given element of the matrix. mat.set(3,4,1) is equivalent to mat[3][4]=1
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @param {number} value - The new value for the element
         * @return {Matrix} this
         */
        set(rowIndex, columnIndex, value) { // eslint-disable-line no-unused-vars
            throw new Error('set method is unimplemented');
        }

        /**
         * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
         * @abstract
         * @param {number} rowIndex - Index of the row
         * @param {number} columnIndex - Index of the column
         * @return {number}
         */
        get(rowIndex, columnIndex) { // eslint-disable-line no-unused-vars
            throw new Error('get method is unimplemented');
        }

        /**
         * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
         * rows of the matrix, and colRep times the number of columns of the matrix
         * @param {number} rowRep - Number of times the rows should be repeated
         * @param {number} colRep - Number of times the columns should be re
         * @return {Matrix}
         * @example
         * var matrix = new Matrix([[1,2]]);
         * matrix.repeat(2); // [[1,2],[1,2]]
         */
        repeat(rowRep, colRep) {
            rowRep = rowRep || 1;
            colRep = colRep || 1;
            var matrix = new this.constructor[Symbol.species](this.rows * rowRep, this.columns * colRep);
            for (var i = 0; i < rowRep; i++) {
                for (var j = 0; j < colRep; j++) {
                    matrix.setSubMatrix(this, this.rows * i, this.columns * j);
                }
            }
            return matrix;
        }

        /**
         * Fills the matrix with a given value. All elements will be set to this value.
         * @param {number} value - New value
         * @return {Matrix} this
         */
        fill(value) {
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, value);
                }
            }
            return this;
        }

        /**
         * Negates the matrix. All elements will be multiplied by (-1)
         * @return {Matrix} this
         */
        neg() {
            return this.mulS(-1);
        }

        /**
         * Returns a new array from the given row index
         * @param {number} index - Row index
         * @return {Array}
         */
        getRow(index) {
            util.checkRowIndex(this, index);
            var row = new Array(this.columns);
            for (var i = 0; i < this.columns; i++) {
                row[i] = this.get(index, i);
            }
            return row;
        }

        /**
         * Returns a new row vector from the given row index
         * @param {number} index - Row index
         * @return {Matrix}
         */
        getRowVector(index) {
            return this.constructor.rowVector(this.getRow(index));
        }

        /**
         * Sets a row at the given index
         * @param {number} index - Row index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setRow(index, array) {
            util.checkRowIndex(this, index);
            array = util.checkRowVector(this, array);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, array[i]);
            }
            return this;
        }

        /**
         * Swaps two rows
         * @param {number} row1 - First row index
         * @param {number} row2 - Second row index
         * @return {Matrix} this
         */
        swapRows(row1, row2) {
            util.checkRowIndex(this, row1);
            util.checkRowIndex(this, row2);
            for (var i = 0; i < this.columns; i++) {
                var temp = this.get(row1, i);
                this.set(row1, i, this.get(row2, i));
                this.set(row2, i, temp);
            }
            return this;
        }

        /**
         * Returns a new array from the given column index
         * @param {number} index - Column index
         * @return {Array}
         */
        getColumn(index) {
            util.checkColumnIndex(this, index);
            var column = new Array(this.rows);
            for (var i = 0; i < this.rows; i++) {
                column[i] = this.get(i, index);
            }
            return column;
        }

        /**
         * Returns a new column vector from the given column index
         * @param {number} index - Column index
         * @return {Matrix}
         */
        getColumnVector(index) {
            return this.constructor.columnVector(this.getColumn(index));
        }

        /**
         * Sets a column at the given index
         * @param {number} index - Column index
         * @param {Array|Matrix} array - Array or vector
         * @return {Matrix} this
         */
        setColumn(index, array) {
            util.checkColumnIndex(this, index);
            array = util.checkColumnVector(this, array);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, array[i]);
            }
            return this;
        }

        /**
         * Swaps two columns
         * @param {number} column1 - First column index
         * @param {number} column2 - Second column index
         * @return {Matrix} this
         */
        swapColumns(column1, column2) {
            util.checkColumnIndex(this, column1);
            util.checkColumnIndex(this, column2);
            for (var i = 0; i < this.rows; i++) {
                var temp = this.get(i, column1);
                this.set(i, column1, this.get(i, column2));
                this.set(i, column2, temp);
            }
            return this;
        }

        /**
         * Adds the values of a vector to each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[j]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[j]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each row
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[j]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each row by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divRowVector(vector) {
            vector = util.checkRowVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[j]);
                }
            }
            return this;
        }

        /**
         * Adds the values of a vector to each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        addColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) + vector[i]);
                }
            }
            return this;
        }

        /**
         * Subtracts the values of a vector from each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        subColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) - vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a vector with each column
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        mulColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) * vector[i]);
                }
            }
            return this;
        }

        /**
         * Divides the values of each column by those of a vector
         * @param {Array|Matrix} vector - Array or vector
         * @return {Matrix} this
         */
        divColumnVector(vector) {
            vector = util.checkColumnVector(this, vector);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    this.set(i, j, this.get(i, j) / vector[i]);
                }
            }
            return this;
        }

        /**
         * Multiplies the values of a row with a scalar
         * @param {number} index - Row index
         * @param {number} value
         * @return {Matrix} this
         */
        mulRow(index, value) {
            util.checkRowIndex(this, index);
            for (var i = 0; i < this.columns; i++) {
                this.set(index, i, this.get(index, i) * value);
            }
            return this;
        }

        /**
         * Multiplies the values of a column with a scalar
         * @param {number} index - Column index
         * @param {number} value
         * @return {Matrix} this
         */
        mulColumn(index, value) {
            util.checkColumnIndex(this, index);
            for (var i = 0; i < this.rows; i++) {
                this.set(i, index, this.get(i, index) * value);
            }
            return this;
        }

        /**
         * Returns the maximum value of the matrix
         * @return {number}
         */
        max() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value
         * @return {Array}
         */
        maxIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) > v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of the matrix
         * @return {number}
         */
        min() {
            var v = this.get(0, 0);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                    }
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value
         * @return {Array}
         */
        minIndex() {
            var v = this.get(0, 0);
            var idx = [0, 0];
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    if (this.get(i, j) < v) {
                        v = this.get(i, j);
                        idx[0] = i;
                        idx[1] = j;
                    }
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        maxRow(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        maxRowIndex(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) > v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one row
         * @param {number} row - Row index
         * @return {number}
         */
        minRow(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one row
         * @param {number} row - Row index
         * @return {Array}
         */
        minRowIndex(row) {
            util.checkRowIndex(this, row);
            var v = this.get(row, 0);
            var idx = [row, 0];
            for (var i = 1; i < this.columns; i++) {
                if (this.get(row, i) < v) {
                    v = this.get(row, i);
                    idx[1] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the maximum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        maxColumn(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the maximum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        maxColumnIndex(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) > v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns the minimum value of one column
         * @param {number} column - Column index
         * @return {number}
         */
        minColumn(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                }
            }
            return v;
        }

        /**
         * Returns the index of the minimum value of one column
         * @param {number} column - Column index
         * @return {Array}
         */
        minColumnIndex(column) {
            util.checkColumnIndex(this, column);
            var v = this.get(0, column);
            var idx = [0, column];
            for (var i = 1; i < this.rows; i++) {
                if (this.get(i, column) < v) {
                    v = this.get(i, column);
                    idx[0] = i;
                }
            }
            return idx;
        }

        /**
         * Returns an array containing the diagonal values of the matrix
         * @return {Array}
         */
        diag() {
            var min = Math.min(this.rows, this.columns);
            var diag = new Array(min);
            for (var i = 0; i < min; i++) {
                diag[i] = this.get(i, i);
            }
            return diag;
        }

        /**
         * Returns the sum by the argument given, if no argument given,
         * it returns the sum of all elements of the matrix.
         * @param {string} by - sum by 'row' or 'column'.
         * @return {Matrix|number}
         */
        sum(by) {
            switch (by) {
                case 'row':
                    return util.sumByRow(this);
                case 'column':
                    return util.sumByColumn(this);
                default:
                    return util.sumAll(this);
            }
        }

        /**
         * Returns the mean of all elements of the matrix
         * @return {number}
         */
        mean() {
            return this.sum() / this.size;
        }

        /**
         * Returns the product of all elements of the matrix
         * @return {number}
         */
        prod() {
            var prod = 1;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    prod *= this.get(i, j);
                }
            }
            return prod;
        }

        /**
         * Computes the cumulative sum of the matrix elements (in place, row by row)
         * @return {Matrix} this
         */
        cumulativeSum() {
            var sum = 0;
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    sum += this.get(i, j);
                    this.set(i, j, sum);
                }
            }
            return this;
        }

        /**
         * Computes the dot (scalar) product between the matrix and another
         * @param {Matrix} vector2 vector
         * @return {number}
         */
        dot(vector2) {
            if (Matrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
            var vector1 = this.to1DArray();
            if (vector1.length !== vector2.length) {
                throw new RangeError('vectors do not have the same size');
            }
            var dot = 0;
            for (var i = 0; i < vector1.length; i++) {
                dot += vector1[i] * vector2[i];
            }
            return dot;
        }

        /**
         * Returns the matrix product between this and other
         * @param {Matrix} other
         * @return {Matrix}
         */
        mmul(other) {
            other = this.constructor.checkMatrix(other);
            if (this.columns !== other.rows) {
                // eslint-disable-next-line no-console
                console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');
            }

            var m = this.rows;
            var n = this.columns;
            var p = other.columns;

            var result = new this.constructor[Symbol.species](m, p);

            var Bcolj = new Array(n);
            for (var j = 0; j < p; j++) {
                for (var k = 0; k < n; k++) {
                    Bcolj[k] = other.get(k, j);
                }

                for (var i = 0; i < m; i++) {
                    var s = 0;
                    for (k = 0; k < n; k++) {
                        s += this.get(i, k) * Bcolj[k];
                    }

                    result.set(i, j, s);
                }
            }
            return result;
        }

        strassen2x2(other) {
            var result = new this.constructor[Symbol.species](2, 2);
            const a11 = this.get(0, 0);
            const b11 = other.get(0, 0);
            const a12 = this.get(0, 1);
            const b12 = other.get(0, 1);
            const a21 = this.get(1, 0);
            const b21 = other.get(1, 0);
            const a22 = this.get(1, 1);
            const b22 = other.get(1, 1);

            // Compute intermediate values.
            const m1 = (a11 + a22) * (b11 + b22);
            const m2 = (a21 + a22) * b11;
            const m3 = a11 * (b12 - b22);
            const m4 = a22 * (b21 - b11);
            const m5 = (a11 + a12) * b22;
            const m6 = (a21 - a11) * (b11 + b12);
            const m7 = (a12 - a22) * (b21 + b22);

            // Combine intermediate values into the output.
            const c00 = m1 + m4 - m5 + m7;
            const c01 = m3 + m5;
            const c10 = m2 + m4;
            const c11 = m1 - m2 + m3 + m6;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            return result;
        }

        strassen3x3(other) {
            var result = new this.constructor[Symbol.species](3, 3);

            const a00 = this.get(0, 0);
            const a01 = this.get(0, 1);
            const a02 = this.get(0, 2);
            const a10 = this.get(1, 0);
            const a11 = this.get(1, 1);
            const a12 = this.get(1, 2);
            const a20 = this.get(2, 0);
            const a21 = this.get(2, 1);
            const a22 = this.get(2, 2);

            const b00 = other.get(0, 0);
            const b01 = other.get(0, 1);
            const b02 = other.get(0, 2);
            const b10 = other.get(1, 0);
            const b11 = other.get(1, 1);
            const b12 = other.get(1, 2);
            const b20 = other.get(2, 0);
            const b21 = other.get(2, 1);
            const b22 = other.get(2, 2);

            const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
            const m2 = (a00 - a10) * (-b01 + b11);
            const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
            const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
            const m5 = (a10 + a11) * (-b00 + b01);
            const m6 = a00 * b00;
            const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
            const m8 = (-a00 + a20) * (b02 - b12);
            const m9 = (a20 + a21) * (-b00 + b02);
            const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
            const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
            const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
            const m13 = (a02 - a22) * (b11 - b21);
            const m14 = a02 * b20;
            const m15 = (a21 + a22) * (-b20 + b21);
            const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
            const m17 = (a02 - a12) * (b12 - b22);
            const m18 = (a11 + a12) * (-b20 + b22);
            const m19 = a01 * b10;
            const m20 = a12 * b21;
            const m21 = a10 * b02;
            const m22 = a20 * b01;
            const m23 = a22 * b22;

            const c00 = m6 + m14 + m19;
            const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
            const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
            const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
            const c11 = m2 + m4 + m5 + m6 + m20;
            const c12 = m14 + m16 + m17 + m18 + m21;
            const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
            const c21 = m12 + m13 + m14 + m15 + m22;
            const c22 = m6 + m7 + m8 + m9 + m23;

            result.set(0, 0, c00);
            result.set(0, 1, c01);
            result.set(0, 2, c02);
            result.set(1, 0, c10);
            result.set(1, 1, c11);
            result.set(1, 2, c12);
            result.set(2, 0, c20);
            result.set(2, 1, c21);
            result.set(2, 2, c22);
            return result;
        }

        /**
         * Returns the matrix product between x and y. More efficient than mmul(other) only when we multiply squared matrix and when the size of the matrix is > 1000.
         * @param {Matrix} y
         * @return {Matrix}
         */
        mmulStrassen(y) {
            var x = this.clone();
            var r1 = x.rows;
            var c1 = x.columns;
            var r2 = y.rows;
            var c2 = y.columns;
            if (c1 !== r2) {
                // eslint-disable-next-line no-console
                console.warn(`Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`);
            }

            // Put a matrix into the top left of a matrix of zeros.
            // `rows` and `cols` are the dimensions of the output matrix.
            function embed(mat, rows, cols) {
                var r = mat.rows;
                var c = mat.columns;
                if ((r === rows) && (c === cols)) {
                    return mat;
                } else {
                    var resultat = Matrix.zeros(rows, cols);
                    resultat = resultat.setSubMatrix(mat, 0, 0);
                    return resultat;
                }
            }


            // Make sure both matrices are the same size.
            // This is exclusively for simplicity:
            // this algorithm can be implemented with matrices of different sizes.

            var r = Math.max(r1, r2);
            var c = Math.max(c1, c2);
            x = embed(x, r, c);
            y = embed(y, r, c);

            // Our recursive multiplication function.
            function blockMult(a, b, rows, cols) {
                // For small matrices, resort to naive multiplication.
                if (rows <= 512 || cols <= 512) {
                    return a.mmul(b); // a is equivalent to this
                }

                // Apply dynamic padding.
                if ((rows % 2 === 1) && (cols % 2 === 1)) {
                    a = embed(a, rows + 1, cols + 1);
                    b = embed(b, rows + 1, cols + 1);
                } else if (rows % 2 === 1) {
                    a = embed(a, rows + 1, cols);
                    b = embed(b, rows + 1, cols);
                } else if (cols % 2 === 1) {
                    a = embed(a, rows, cols + 1);
                    b = embed(b, rows, cols + 1);
                }

                var halfRows = parseInt(a.rows / 2);
                var halfCols = parseInt(a.columns / 2);
                // Subdivide input matrices.
                var a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
                var b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);

                var a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
                var b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);

                var a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
                var b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);

                var a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
                var b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1);

                // Compute intermediate values.
                var m1 = blockMult(Matrix.add(a11, a22), Matrix.add(b11, b22), halfRows, halfCols);
                var m2 = blockMult(Matrix.add(a21, a22), b11, halfRows, halfCols);
                var m3 = blockMult(a11, Matrix.sub(b12, b22), halfRows, halfCols);
                var m4 = blockMult(a22, Matrix.sub(b21, b11), halfRows, halfCols);
                var m5 = blockMult(Matrix.add(a11, a12), b22, halfRows, halfCols);
                var m6 = blockMult(Matrix.sub(a21, a11), Matrix.add(b11, b12), halfRows, halfCols);
                var m7 = blockMult(Matrix.sub(a12, a22), Matrix.add(b21, b22), halfRows, halfCols);

                // Combine intermediate values into the output.
                var c11 = Matrix.add(m1, m4);
                c11.sub(m5);
                c11.add(m7);
                var c12 = Matrix.add(m3, m5);
                var c21 = Matrix.add(m2, m4);
                var c22 = Matrix.sub(m1, m2);
                c22.add(m3);
                c22.add(m6);

                //Crop output to the desired size (undo dynamic padding).
                var resultat = Matrix.zeros(2 * c11.rows, 2 * c11.columns);
                resultat = resultat.setSubMatrix(c11, 0, 0);
                resultat = resultat.setSubMatrix(c12, c11.rows, 0);
                resultat = resultat.setSubMatrix(c21, 0, c11.columns);
                resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
                return resultat.subMatrix(0, rows - 1, 0, cols - 1);
            }
            return blockMult(x, y, r, c);
        }

        /**
         * Returns a row-by-row scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The scaled matrix
         */
        scaleRows(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.rows; i++) {
                var scaled = arrayUtils.scale(this.getRow(i), {min, max});
                newMatrix.setRow(i, scaled);
            }
            return newMatrix;
        }

        /**
         * Returns a new column-by-column scaled matrix
         * @param {number} [min=0] - Minimum scaled value
         * @param {number} [max=1] - Maximum scaled value
         * @return {Matrix} - The new scaled matrix
         * @example
         * var matrix = new Matrix([[1,2],[-1,0]]);
         * var scaledMatrix = matrix.scaleColumns(); // [[1,1],[0,0]]
         */
        scaleColumns(min, max) {
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            if (min >= max) {
                throw new RangeError('min should be strictly smaller than max');
            }
            var newMatrix = this.constructor.empty(this.rows, this.columns);
            for (var i = 0; i < this.columns; i++) {
                var scaled = arrayUtils.scale(this.getColumn(i), {
                    min: min,
                    max: max
                });
                newMatrix.setColumn(i, scaled);
            }
            return newMatrix;
        }


        /**
         * Returns the Kronecker product (also known as tensor product) between this and other
         * See https://en.wikipedia.org/wiki/Kronecker_product
         * @param {Matrix} other
         * @return {Matrix}
         */
        kroneckerProduct(other) {
            other = this.constructor.checkMatrix(other);

            var m = this.rows;
            var n = this.columns;
            var p = other.rows;
            var q = other.columns;

            var result = new this.constructor[Symbol.species](m * p, n * q);
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    for (var k = 0; k < p; k++) {
                        for (var l = 0; l < q; l++) {
                            result[p * i + k][q * j + l] = this.get(i, j) * other.get(k, l);
                        }
                    }
                }
            }
            return result;
        }

        /**
         * Transposes the matrix and returns a new one containing the result
         * @return {Matrix}
         */
        transpose() {
            var result = new this.constructor[Symbol.species](this.columns, this.rows);
            for (var i = 0; i < this.rows; i++) {
                for (var j = 0; j < this.columns; j++) {
                    result.set(j, i, this.get(i, j));
                }
            }
            return result;
        }

        /**
         * Sorts the rows (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortRows(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.rows; i++) {
                this.setRow(i, this.getRow(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Sorts the columns (in place)
         * @param {function} compareFunction - usual Array.prototype.sort comparison function
         * @return {Matrix} this
         */
        sortColumns(compareFunction) {
            if (compareFunction === undefined) compareFunction = compareNumbers;
            for (var i = 0; i < this.columns; i++) {
                this.setColumn(i, this.getColumn(i).sort(compareFunction));
            }
            return this;
        }

        /**
         * Returns a subset of the matrix
         * @param {number} startRow - First row index
         * @param {number} endRow - Last row index
         * @param {number} startColumn - First column index
         * @param {number} endColumn - Last column index
         * @return {Matrix}
         */
        subMatrix(startRow, endRow, startColumn, endColumn) {
            util.checkRange(this, startRow, endRow, startColumn, endColumn);
            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, endColumn - startColumn + 1);
            for (var i = startRow; i <= endRow; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    newMatrix[i - startRow][j - startColumn] = this.get(i, j);
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of row indices
         * @param {Array} indices - Array containing the row indices
         * @param {number} [startColumn = 0] - First column index
         * @param {number} [endColumn = this.columns-1] - Last column index
         * @return {Matrix}
         */
        subMatrixRow(indices, startColumn, endColumn) {
            if (startColumn === undefined) startColumn = 0;
            if (endColumn === undefined) endColumn = this.columns - 1;
            if ((startColumn > endColumn) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](indices.length, endColumn - startColumn + 1);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startColumn; j <= endColumn; j++) {
                    if (indices[i] < 0 || indices[i] >= this.rows) {
                        throw new RangeError('Row index out of range: ' + indices[i]);
                    }
                    newMatrix.set(i, j - startColumn, this.get(indices[i], j));
                }
            }
            return newMatrix;
        }

        /**
         * Returns a subset of the matrix based on an array of column indices
         * @param {Array} indices - Array containing the column indices
         * @param {number} [startRow = 0] - First row index
         * @param {number} [endRow = this.rows-1] - Last row index
         * @return {Matrix}
         */
        subMatrixColumn(indices, startRow, endRow) {
            if (startRow === undefined) startRow = 0;
            if (endRow === undefined) endRow = this.rows - 1;
            if ((startRow > endRow) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows)) {
                throw new RangeError('Argument out of range');
            }

            var newMatrix = new this.constructor[Symbol.species](endRow - startRow + 1, indices.length);
            for (var i = 0; i < indices.length; i++) {
                for (var j = startRow; j <= endRow; j++) {
                    if (indices[i] < 0 || indices[i] >= this.columns) {
                        throw new RangeError('Column index out of range: ' + indices[i]);
                    }
                    newMatrix.set(j - startRow, i, this.get(j, indices[i]));
                }
            }
            return newMatrix;
        }

        /**
         * Set a part of the matrix to the given sub-matrix
         * @param {Matrix|Array< Array >} matrix - The source matrix from which to extract values.
         * @param {number} startRow - The index of the first row to set
         * @param {number} startColumn - The index of the first column to set
         * @return {Matrix}
         */
        setSubMatrix(matrix, startRow, startColumn) {
            matrix = this.constructor.checkMatrix(matrix);
            var endRow = startRow + matrix.rows - 1;
            var endColumn = startColumn + matrix.columns - 1;
            util.checkRange(this, startRow, endRow, startColumn, endColumn);
            for (var i = 0; i < matrix.rows; i++) {
                for (var j = 0; j < matrix.columns; j++) {
                    this[startRow + i][startColumn + j] = matrix.get(i, j);
                }
            }
            return this;
        }

        /**
         * Return a new matrix based on a selection of rows and columns
         * @param {Array<number>} rowIndices - The row indices to select. Order matters and an index can be more than once.
         * @param {Array<number>} columnIndices - The column indices to select. Order matters and an index can be use more than once.
         * @return {Matrix} The new matrix
         */
        selection(rowIndices, columnIndices) {
            var indices = util.checkIndices(this, rowIndices, columnIndices);
            var newMatrix = new this.constructor[Symbol.species](rowIndices.length, columnIndices.length);
            for (var i = 0; i < indices.row.length; i++) {
                var rowIndex = indices.row[i];
                for (var j = 0; j < indices.column.length; j++) {
                    var columnIndex = indices.column[j];
                    newMatrix[i][j] = this.get(rowIndex, columnIndex);
                }
            }
            return newMatrix;
        }

        /**
         * Returns the trace of the matrix (sum of the diagonal elements)
         * @return {number}
         */
        trace() {
            var min = Math.min(this.rows, this.columns);
            var trace = 0;
            for (var i = 0; i < min; i++) {
                trace += this.get(i, i);
            }
            return trace;
        }

        /*
         Matrix views
         */

        /**
         * Returns a view of the transposition of the matrix
         * @return {MatrixTransposeView}
         */
        transposeView() {
            return new MatrixTransposeView(this);
        }

        /**
         * Returns a view of the row vector with the given index
         * @param {number} row - row index of the vector
         * @return {MatrixRowView}
         */
        rowView(row) {
            util.checkRowIndex(this, row);
            return new MatrixRowView(this, row);
        }

        /**
         * Returns a view of the column vector with the given index
         * @param {number} column - column index of the vector
         * @return {MatrixColumnView}
         */
        columnView(column) {
            util.checkColumnIndex(this, column);
            return new MatrixColumnView(this, column);
        }

        /**
         * Returns a view of the matrix flipped in the row axis
         * @return {MatrixFlipRowView}
         */
        flipRowView() {
            return new MatrixFlipRowView(this);
        }

        /**
         * Returns a view of the matrix flipped in the column axis
         * @return {MatrixFlipColumnView}
         */
        flipColumnView() {
            return new MatrixFlipColumnView(this);
        }

        /**
         * Returns a view of a submatrix giving the index boundaries
         * @param {number} startRow - first row index of the submatrix
         * @param {number} endRow - last row index of the submatrix
         * @param {number} startColumn - first column index of the submatrix
         * @param {number} endColumn - last column index of the submatrix
         * @return {MatrixSubView}
         */
        subMatrixView(startRow, endRow, startColumn, endColumn) {
            return new MatrixSubView(this, startRow, endRow, startColumn, endColumn);
        }

        /**
         * Returns a view of the cross of the row indices and the column indices
         * @example
         * // resulting vector is [[2], [2]]
         * var matrix = new Matrix([[1,2,3], [4,5,6]]).selectionView([0, 0], [1])
         * @param {Array<number>} rowIndices
         * @param {Array<number>} columnIndices
         * @return {MatrixSelectionView}
         */
        selectionView(rowIndices, columnIndices) {
            return new MatrixSelectionView(this, rowIndices, columnIndices);
        }


        /**
        * Calculates and returns the determinant of a matrix as a Number
        * @example
        *   new Matrix([[1,2,3], [4,5,6]]).det()
        * @return {number}
        */
        det() {
            if (this.isSquare()) {
                var a, b, c, d;
                if (this.columns === 2) {
                    // 2 x 2 matrix
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(1, 0);
                    d = this.get(1, 1);

                    return a * d - (b * c);
                } else if (this.columns === 3) {
                    // 3 x 3 matrix
                    var subMatrix0, subMatrix1, subMatrix2;
                    subMatrix0 = this.selectionView([1, 2], [1, 2]);
                    subMatrix1 = this.selectionView([1, 2], [0, 2]);
                    subMatrix2 = this.selectionView([1, 2], [0, 1]);
                    a = this.get(0, 0);
                    b = this.get(0, 1);
                    c = this.get(0, 2);

                    return a * subMatrix0.det() - b * subMatrix1.det() + c * subMatrix2.det();
                } else {
                    // general purpose determinant using the LU decomposition
                    return new LuDecomposition(this).determinant;
                }

            } else {
                throw Error('Determinant can only be calculated for a square matrix.');
            }
        }

        /**
         * Returns inverse of a matrix if it exists or the pseudoinverse
         * @param {number} threshold - threshold for taking inverse of singular values (default = 1e-15)
         * @return {Matrix} the (pseudo)inverted matrix.
         */
        pseudoInverse(threshold) {
            if (threshold === undefined) threshold = Number.EPSILON;
            var svdSolution = new SvDecomposition(this, {autoTranspose: true});

            var U = svdSolution.leftSingularVectors;
            var V = svdSolution.rightSingularVectors;
            var s = svdSolution.diagonal;

            for (var i = 0; i < s.length; i++) {
                if (Math.abs(s[i]) > threshold) {
                    s[i] = 1.0 / s[i];
                } else {
                    s[i] = 0.0;
                }
            }

            // convert list to diagonal
            s = this.constructor[Symbol.species].diag(s);
            return V.mmul(s.mmul(U.transposeView()));
        }
    }

    Matrix.prototype.klass = 'Matrix';

    /**
     * @private
     * Check that two matrices have the same dimensions
     * @param {Matrix} matrix
     * @param {Matrix} otherMatrix
     */
    function checkDimensions(matrix, otherMatrix) { // eslint-disable-line no-unused-vars
        if (matrix.rows !== otherMatrix.rows ||
            matrix.columns !== otherMatrix.columns) {
            throw new RangeError('Matrices dimensions must be equal');
        }
    }

    function compareNumbers(a, b) {
        return a - b;
    }

    /*
     Synonyms
     */

    Matrix.random = Matrix.rand;
    Matrix.diagonal = Matrix.diag;
    Matrix.prototype.diagonal = Matrix.prototype.diag;
    Matrix.identity = Matrix.eye;
    Matrix.prototype.negate = Matrix.prototype.neg;
    Matrix.prototype.tensorProduct = Matrix.prototype.kroneckerProduct;
    Matrix.prototype.determinant = Matrix.prototype.det;

    /*
     Add dynamically instance and static methods for mathematical operations
     */

    var inplaceOperator = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var inplaceOperatorScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% value);
        }
    }
    return this;
})
`;

    var inplaceOperatorMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    checkDimensions(this, matrix);
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, this.get(i, j) %op% matrix.get(i, j));
        }
    }
    return this;
})
`;

    var staticOperator = `
(function %name%(matrix, value) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(value);
})
`;

    var inplaceMethod = `
(function %name%() {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j)));
        }
    }
    return this;
})
`;

    var staticMethod = `
(function %name%(matrix) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%();
})
`;

    var inplaceMethodWithArgs = `
(function %name%(%args%) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), %args%));
        }
    }
    return this;
})
`;

    var staticMethodWithArgs = `
(function %name%(matrix, %args%) {
    var newMatrix = new this[Symbol.species](matrix);
    return newMatrix.%name%(%args%);
})
`;


    var inplaceMethodWithOneArgScalar = `
(function %name%S(value) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), value));
        }
    }
    return this;
})
`;
    var inplaceMethodWithOneArgMatrix = `
(function %name%M(matrix) {
    matrix = this.constructor.checkMatrix(matrix);
    checkDimensions(this, matrix);
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.columns; j++) {
            this.set(i, j, %method%(this.get(i, j), matrix.get(i, j)));
        }
    }
    return this;
})
`;

    var inplaceMethodWithOneArg = `
(function %name%(value) {
    if (typeof value === 'number') return this.%name%S(value);
    return this.%name%M(value);
})
`;

    var staticMethodWithOneArg = staticMethodWithArgs;

    var operators = [
        // Arithmetic operators
        ['+', 'add'],
        ['-', 'sub', 'subtract'],
        ['*', 'mul', 'multiply'],
        ['/', 'div', 'divide'],
        ['%', 'mod', 'modulus'],
        // Bitwise operators
        ['&', 'and'],
        ['|', 'or'],
        ['^', 'xor'],
        ['<<', 'leftShift'],
        ['>>', 'signPropagatingRightShift'],
        ['>>>', 'rightShift', 'zeroFillRightShift']
    ];

    var i;

    for (var operator of operators) {
        var inplaceOp = eval(fillTemplateFunction(inplaceOperator, {name: operator[1], op: operator[0]}));
        var inplaceOpS = eval(fillTemplateFunction(inplaceOperatorScalar, {name: operator[1] + 'S', op: operator[0]}));
        var inplaceOpM = eval(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[1] + 'M', op: operator[0]}));
        var staticOp = eval(fillTemplateFunction(staticOperator, {name: operator[1]}));
        for (i = 1; i < operator.length; i++) {
            Matrix.prototype[operator[i]] = inplaceOp;
            Matrix.prototype[operator[i] + 'S'] = inplaceOpS;
            Matrix.prototype[operator[i] + 'M'] = inplaceOpM;
            Matrix[operator[i]] = staticOp;
        }
    }

    var methods = [
        ['~', 'not']
    ];

    [
        'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'cbrt', 'ceil',
        'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'log', 'log1p',
        'log10', 'log2', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'
    ].forEach(function (mathMethod) {
        methods.push(['Math.' + mathMethod, mathMethod]);
    });

    for (var method of methods) {
        var inplaceMeth = eval(fillTemplateFunction(inplaceMethod, {name: method[1], method: method[0]}));
        var staticMeth = eval(fillTemplateFunction(staticMethod, {name: method[1]}));
        for (i = 1; i < method.length; i++) {
            Matrix.prototype[method[i]] = inplaceMeth;
            Matrix[method[i]] = staticMeth;
        }
    }

    var methodsWithArgs = [
        ['Math.pow', 1, 'pow']
    ];

    for (var methodWithArg of methodsWithArgs) {
        var args = 'arg0';
        for (i = 1; i < methodWithArg[1]; i++) {
            args += `, arg${i}`;
        }
        if (methodWithArg[1] !== 1) {
            var inplaceMethWithArgs = eval(fillTemplateFunction(inplaceMethodWithArgs, {
                name: methodWithArg[2],
                method: methodWithArg[0],
                args: args
            }));
            var staticMethWithArgs = eval(fillTemplateFunction(staticMethodWithArgs, {name: methodWithArg[2], args: args}));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
                Matrix[methodWithArg[i]] = staticMethWithArgs;
            }
        } else {
            var tmplVar = {
                name: methodWithArg[2],
                args: args,
                method: methodWithArg[0]
            };
            var inplaceMethod2 = eval(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
            var inplaceMethodS = eval(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
            var inplaceMethodM = eval(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
            var staticMethod2 = eval(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
            for (i = 2; i < methodWithArg.length; i++) {
                Matrix.prototype[methodWithArg[i]] = inplaceMethod2;
                Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
                Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
                Matrix[methodWithArg[i]] = staticMethod2;
            }
        }
    }

    function fillTemplateFunction(template, values) {
        for (var value in values) {
            template = template.replace(new RegExp('%' + value + '%', 'g'), values[value]);
        }
        return template;
    }

    return Matrix;
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(2);

// https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
function LuDecomposition(matrix) {
    if (!(this instanceof LuDecomposition)) {
        return new LuDecomposition(matrix);
    }

    matrix = Matrix.Matrix.checkMatrix(matrix);

    var lu = matrix.clone(),
        rows = lu.rows,
        columns = lu.columns,
        pivotVector = new Array(rows),
        pivotSign = 1,
        i, j, k, p, s, t, v,
        LUrowi, LUcolj, kmax;

    for (i = 0; i < rows; i++) {
        pivotVector[i] = i;
    }

    LUcolj = new Array(rows);

    for (j = 0; j < columns; j++) {

        for (i = 0; i < rows; i++) {
            LUcolj[i] = lu[i][j];
        }

        for (i = 0; i < rows; i++) {
            LUrowi = lu[i];
            kmax = Math.min(i, j);
            s = 0;
            for (k = 0; k < kmax; k++) {
                s += LUrowi[k] * LUcolj[k];
            }
            LUrowi[j] = LUcolj[i] -= s;
        }

        p = j;
        for (i = j + 1; i < rows; i++) {
            if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                p = i;
            }
        }

        if (p !== j) {
            for (k = 0; k < columns; k++) {
                t = lu[p][k];
                lu[p][k] = lu[j][k];
                lu[j][k] = t;
            }

            v = pivotVector[p];
            pivotVector[p] = pivotVector[j];
            pivotVector[j] = v;

            pivotSign = -pivotSign;
        }

        if (j < rows && lu[j][j] !== 0) {
            for (i = j + 1; i < rows; i++) {
                lu[i][j] /= lu[j][j];
            }
        }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
}

LuDecomposition.prototype = {
    isSingular: function () {
        var data = this.LU,
            col = data.columns;
        for (var j = 0; j < col; j++) {
            if (data[j][j] === 0) {
                return true;
            }
        }
        return false;
    },
    get determinant() {
        var data = this.LU;
        if (!data.isSquare()) {
            throw new Error('Matrix must be square');
        }
        var determinant = this.pivotSign, col = data.columns;
        for (var j = 0; j < col; j++) {
            determinant *= data[j][j];
        }
        return determinant;
    },
    get lowerTriangularMatrix() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix.Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i > j) {
                    X[i][j] = data[i][j];
                } else if (i === j) {
                    X[i][j] = 1;
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get upperTriangularMatrix() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix.Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i <= j) {
                    X[i][j] = data[i][j];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get pivotPermutationVector() {
        return this.pivotVector.slice();
    },
    solve: function (value) {
        value = Matrix.Matrix.checkMatrix(value);

        var lu = this.LU,
            rows = lu.rows;

        if (rows !== value.rows) {
            throw new Error('Invalid matrix dimensions');
        }
        if (this.isSingular()) {
            throw new Error('LU matrix is singular');
        }

        var count = value.columns;
        var X = value.subMatrixRow(this.pivotVector, 0, count - 1);
        var columns = lu.columns;
        var i, j, k;

        for (k = 0; k < columns; k++) {
            for (i = k + 1; i < columns; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        for (k = columns - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= lu[k][k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        return X;
    }
};

module.exports = LuDecomposition;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(2);
var util = __webpack_require__(47);
var hypotenuse = util.hypotenuse;
var getFilled2DArray = util.getFilled2DArray;

// https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
function SingularValueDecomposition(value, options) {
    if (!(this instanceof SingularValueDecomposition)) {
        return new SingularValueDecomposition(value, options);
    }
    value = Matrix.Matrix.checkMatrix(value);

    options = options || {};

    var m = value.rows,
        n = value.columns,
        nu = Math.min(m, n);

    var wantu = true, wantv = true;
    if (options.computeLeftSingularVectors === false) wantu = false;
    if (options.computeRightSingularVectors === false) wantv = false;
    var autoTranspose = options.autoTranspose === true;

    var swapped = false;
    var a;
    if (m < n) {
        if (!autoTranspose) {
            a = value.clone();
            // eslint-disable-next-line no-console
            console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
        } else {
            a = value.transpose();
            m = a.rows;
            n = a.columns;
            swapped = true;
            var aux = wantu;
            wantu = wantv;
            wantv = aux;
        }
    } else {
        a = value.clone();
    }

    var s = new Array(Math.min(m + 1, n)),
        U = getFilled2DArray(m, nu, 0),
        V = getFilled2DArray(n, n, 0),
        e = new Array(n),
        work = new Array(m);

    var nct = Math.min(m - 1, n);
    var nrt = Math.max(0, Math.min(n - 2, m));

    var i, j, k, p, t, ks, f, cs, sn, max, kase,
        scale, sp, spm1, epm1, sk, ek, b, c, shift, g;

    for (k = 0, max = Math.max(nct, nrt); k < max; k++) {
        if (k < nct) {
            s[k] = 0;
            for (i = k; i < m; i++) {
                s[k] = hypotenuse(s[k], a[i][k]);
            }
            if (s[k] !== 0) {
                if (a[k][k] < 0) {
                    s[k] = -s[k];
                }
                for (i = k; i < m; i++) {
                    a[i][k] /= s[k];
                }
                a[k][k] += 1;
            }
            s[k] = -s[k];
        }

        for (j = k + 1; j < n; j++) {
            if ((k < nct) && (s[k] !== 0)) {
                t = 0;
                for (i = k; i < m; i++) {
                    t += a[i][k] * a[i][j];
                }
                t = -t / a[k][k];
                for (i = k; i < m; i++) {
                    a[i][j] += t * a[i][k];
                }
            }
            e[j] = a[k][j];
        }

        if (wantu && (k < nct)) {
            for (i = k; i < m; i++) {
                U[i][k] = a[i][k];
            }
        }

        if (k < nrt) {
            e[k] = 0;
            for (i = k + 1; i < n; i++) {
                e[k] = hypotenuse(e[k], e[i]);
            }
            if (e[k] !== 0) {
                if (e[k + 1] < 0) {
                    e[k] = 0 - e[k];
                }
                for (i = k + 1; i < n; i++) {
                    e[i] /= e[k];
                }
                e[k + 1] += 1;
            }
            e[k] = -e[k];
            if ((k + 1 < m) && (e[k] !== 0)) {
                for (i = k + 1; i < m; i++) {
                    work[i] = 0;
                }
                for (j = k + 1; j < n; j++) {
                    for (i = k + 1; i < m; i++) {
                        work[i] += e[j] * a[i][j];
                    }
                }
                for (j = k + 1; j < n; j++) {
                    t = -e[j] / e[k + 1];
                    for (i = k + 1; i < m; i++) {
                        a[i][j] += t * work[i];
                    }
                }
            }
            if (wantv) {
                for (i = k + 1; i < n; i++) {
                    V[i][k] = e[i];
                }
            }
        }
    }

    p = Math.min(n, m + 1);
    if (nct < n) {
        s[nct] = a[nct][nct];
    }
    if (m < p) {
        s[p - 1] = 0;
    }
    if (nrt + 1 < p) {
        e[nrt] = a[nrt][p - 1];
    }
    e[p - 1] = 0;

    if (wantu) {
        for (j = nct; j < nu; j++) {
            for (i = 0; i < m; i++) {
                U[i][j] = 0;
            }
            U[j][j] = 1;
        }
        for (k = nct - 1; k >= 0; k--) {
            if (s[k] !== 0) {
                for (j = k + 1; j < nu; j++) {
                    t = 0;
                    for (i = k; i < m; i++) {
                        t += U[i][k] * U[i][j];
                    }
                    t = -t / U[k][k];
                    for (i = k; i < m; i++) {
                        U[i][j] += t * U[i][k];
                    }
                }
                for (i = k; i < m; i++) {
                    U[i][k] = -U[i][k];
                }
                U[k][k] = 1 + U[k][k];
                for (i = 0; i < k - 1; i++) {
                    U[i][k] = 0;
                }
            } else {
                for (i = 0; i < m; i++) {
                    U[i][k] = 0;
                }
                U[k][k] = 1;
            }
        }
    }

    if (wantv) {
        for (k = n - 1; k >= 0; k--) {
            if ((k < nrt) && (e[k] !== 0)) {
                for (j = k + 1; j < n; j++) {
                    t = 0;
                    for (i = k + 1; i < n; i++) {
                        t += V[i][k] * V[i][j];
                    }
                    t = -t / V[k + 1][k];
                    for (i = k + 1; i < n; i++) {
                        V[i][j] += t * V[i][k];
                    }
                }
            }
            for (i = 0; i < n; i++) {
                V[i][k] = 0;
            }
            V[k][k] = 1;
        }
    }

    var pp = p - 1,
        iter = 0,
        eps = Math.pow(2, -52);
    while (p > 0) {
        for (k = p - 2; k >= -1; k--) {
            if (k === -1) {
                break;
            }
            if (Math.abs(e[k]) <= eps * (Math.abs(s[k]) + Math.abs(s[k + 1]))) {
                e[k] = 0;
                break;
            }
        }
        if (k === p - 2) {
            kase = 4;
        } else {
            for (ks = p - 1; ks >= k; ks--) {
                if (ks === k) {
                    break;
                }
                t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
                if (Math.abs(s[ks]) <= eps * t) {
                    s[ks] = 0;
                    break;
                }
            }
            if (ks === k) {
                kase = 3;
            } else if (ks === p - 1) {
                kase = 1;
            } else {
                kase = 2;
                k = ks;
            }
        }

        k++;

        switch (kase) {
            case 1: {
                f = e[p - 2];
                e[p - 2] = 0;
                for (j = p - 2; j >= k; j--) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    if (j !== k) {
                        f = -sn * e[j - 1];
                        e[j - 1] = cs * e[j - 1];
                    }
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][p - 1];
                            V[i][p - 1] = -sn * V[i][j] + cs * V[i][p - 1];
                            V[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 2 : {
                f = e[k - 1];
                e[k - 1] = 0;
                for (j = k; j < p; j++) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    f = -sn * e[j];
                    e[j] = cs * e[j];
                    if (wantu) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][k - 1];
                            U[i][k - 1] = -sn * U[i][j] + cs * U[i][k - 1];
                            U[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 3 : {
                scale = Math.max(Math.max(Math.max(Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2])), Math.abs(e[p - 2])), Math.abs(s[k])), Math.abs(e[k]));
                sp = s[p - 1] / scale;
                spm1 = s[p - 2] / scale;
                epm1 = e[p - 2] / scale;
                sk = s[k] / scale;
                ek = e[k] / scale;
                b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
                c = (sp * epm1) * (sp * epm1);
                shift = 0;
                if ((b !== 0) || (c !== 0)) {
                    shift = Math.sqrt(b * b + c);
                    if (b < 0) {
                        shift = -shift;
                    }
                    shift = c / (b + shift);
                }
                f = (sk + sp) * (sk - sp) + shift;
                g = sk * ek;
                for (j = k; j < p - 1; j++) {
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    if (j !== k) {
                        e[j - 1] = t;
                    }
                    f = cs * s[j] + sn * e[j];
                    e[j] = cs * e[j] - sn * s[j];
                    g = sn * s[j + 1];
                    s[j + 1] = cs * s[j + 1];
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][j + 1];
                            V[i][j + 1] = -sn * V[i][j] + cs * V[i][j + 1];
                            V[i][j] = t;
                        }
                    }
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    s[j] = t;
                    f = cs * e[j] + sn * s[j + 1];
                    s[j + 1] = -sn * e[j] + cs * s[j + 1];
                    g = sn * e[j + 1];
                    e[j + 1] = cs * e[j + 1];
                    if (wantu && (j < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][j + 1];
                            U[i][j + 1] = -sn * U[i][j] + cs * U[i][j + 1];
                            U[i][j] = t;
                        }
                    }
                }
                e[p - 2] = f;
                iter = iter + 1;
                break;
            }
            case 4: {
                if (s[k] <= 0) {
                    s[k] = (s[k] < 0 ? -s[k] : 0);
                    if (wantv) {
                        for (i = 0; i <= pp; i++) {
                            V[i][k] = -V[i][k];
                        }
                    }
                }
                while (k < pp) {
                    if (s[k] >= s[k + 1]) {
                        break;
                    }
                    t = s[k];
                    s[k] = s[k + 1];
                    s[k + 1] = t;
                    if (wantv && (k < n - 1)) {
                        for (i = 0; i < n; i++) {
                            t = V[i][k + 1];
                            V[i][k + 1] = V[i][k];
                            V[i][k] = t;
                        }
                    }
                    if (wantu && (k < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = U[i][k + 1];
                            U[i][k + 1] = U[i][k];
                            U[i][k] = t;
                        }
                    }
                    k++;
                }
                iter = 0;
                p--;
                break;
            }
            // no default
        }
    }

    if (swapped) {
        var tmp = V;
        V = U;
        U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
}

SingularValueDecomposition.prototype = {
    get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    },
    get norm2() {
        return this.s[0];
    },
    get rank() {
        var eps = Math.pow(2, -52),
            tol = Math.max(this.m, this.n) * this.s[0] * eps,
            r = 0,
            s = this.s;
        for (var i = 0, ii = s.length; i < ii; i++) {
            if (s[i] > tol) {
                r++;
            }
        }
        return r;
    },
    get diagonal() {
        return this.s;
    },
    // https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Decompositions/SingularValueDecomposition.cs
    get threshold() {
        return (Math.pow(2, -52) / 2) * Math.max(this.m, this.n) * this.s[0];
    },
    get leftSingularVectors() {
        if (!Matrix.Matrix.isMatrix(this.U)) {
            this.U = new Matrix.Matrix(this.U);
        }
        return this.U;
    },
    get rightSingularVectors() {
        if (!Matrix.Matrix.isMatrix(this.V)) {
            this.V = new Matrix.Matrix(this.V);
        }
        return this.V;
    },
    get diagonalMatrix() {
        return Matrix.Matrix.diag(this.s);
    },
    solve: function (value) {

        var Y = value,
            e = this.threshold,
            scols = this.s.length,
            Ls = Matrix.Matrix.zeros(scols, scols),
            i;

        for (i = 0; i < scols; i++) {
            if (Math.abs(this.s[i]) <= e) {
                Ls[i][i] = 0;
            } else {
                Ls[i][i] = 1 / this.s[i];
            }
        }

        var U = this.U;
        var V = this.rightSingularVectors;

        var VL = V.mmul(Ls),
            vrows = V.rows,
            urows = U.length,
            VLU = Matrix.Matrix.zeros(vrows, urows),
            j, k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < scols; k++) {
                    sum += VL[i][k] * U[j][k];
                }
                VLU[i][j] = sum;
            }
        }

        return VLU.mmul(Y);
    },
    solveForDiagonal: function (value) {
        return this.solve(Matrix.Matrix.diag(value));
    },
    inverse: function () {
        var V = this.V;
        var e = this.threshold,
            vrows = V.length,
            vcols = V[0].length,
            X = new Matrix.Matrix(vrows, this.s.length),
            i, j;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < vcols; j++) {
                if (Math.abs(this.s[j]) > e) {
                    X[i][j] = V[i][j] / this.s[j];
                } else {
                    X[i][j] = 0;
                }
            }
        }

        var U = this.U;

        var urows = U.length,
            ucols = U[0].length,
            Y = new Matrix.Matrix(vrows, urows),
            k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < ucols; k++) {
                    sum += X[i][k] * U[j][k];
                }
                Y[i][j] = sum;
            }
        }

        return Y;
    }
};

module.exports = SingularValueDecomposition;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Function that return a constants of the M degree polynomial that
 * fit the given points, this constants is given from lower to higher
 * order of the polynomial.
 *
 * @param {Vector} X - Vector of the x positions of the points.
 * @param {Vector} Y - Vector of the y positions of the points.
 * @param {Number|BigNumber} M - Degree of the polynomial.
 * @param {Vector} constants - Vector of constants of the function.
 * Created by acastillo on 5/12/16.
 */

const maybeToPrecision = __webpack_require__(17).maybeToPrecision;
const BaseRegression = __webpack_require__(5);
const Matrix = __webpack_require__(48);


class PolynomialRegression extends BaseRegression {
    /**
     * @constructor
     * @param x: Independent variable
     * @param y: Dependent variable
     * @param M: Maximum degree of the polynomial
     * @param options
     */
    constructor(x, y, M, options) {
        super();
        let opt = options || {};
        if (x === true) { // reloading model
            this.coefficients = y.coefficients;
            this.powers = y.powers;
            this.M = y.M;
            if (y.quality) {
                this.quality = y.quality;
            }
        } else {
            var n = x.length;
            if (n !== y.length) {
                throw new RangeError('input and output array have a different length');
            }

            let powers;
            if (Array.isArray(M)) {
                powers = M;
                M = powers.length;
            } else {
                M++;
                powers = new Array(M);
                for (k = 0; k < M; k++) {
                    powers[k] = k;
                }
            }
            var F = new Matrix(n, M);
            var Y = new Matrix([y]);
            var k, i;
            for (k = 0; k < M; k++) {
                for (i = 0; i < n; i++) {
                    if (powers[k] === 0) {
                        F[i][k] = 1;
                    } else {
                        F[i][k] = Math.pow(x[i], powers[k]);
                    }
                }
            }

            var FT = F.transposeView();
            var A = FT.mmul(F);
            var B = FT.mmul(Y.transposeView());

            this.coefficients = A.solve(B).to1DArray();
            this.powers = powers;
            this.M = M - 1;
            if (opt.computeQuality) {
                this.quality = this.modelQuality(x, y);
            }
        }
    }

    _predict(x) {
        var y = 0;
        for (var  k = 0; k < this.powers.length; k++) {
            y += this.coefficients[k] * Math.pow(x, this.powers[k]);
        }
        return y;
    }

    toJSON() {
        var out = {name: 'polynomialRegression',
            coefficients: this.coefficients,
            powers: this.powers,
            M: this.M
        };

        if (this.quality) {
            out.quality = this.quality;
        }
        return out;
    }

    toString(precision) {
        return this._toFormula(precision, false);
    }

    toLaTeX(precision) {
        return this._toFormula(precision, true);
    }

    _toFormula(precision, isLaTeX) {
        var sup = '^';
        var closeSup = '';
        var times = ' * ';
        if (isLaTeX) {
            sup = '^{';
            closeSup = '}';
            times = '';
        }

        var fn =  '', str;
        for (var k = 0; k < this.coefficients.length; k++) {
            str = '';
            if (this.coefficients[k] !== 0) {
                if (this.powers[k] === 0) {
                    str = maybeToPrecision(this.coefficients[k], precision);
                } else {
                    if (this.powers[k] === 1) {
                        str = maybeToPrecision(this.coefficients[k], precision) + times + 'x';
                    } else {
                        str = maybeToPrecision(this.coefficients[k], precision) + times + 'x' + sup + this.powers[k] + closeSup;
                    }
                }

                if (this.coefficients[k] > 0 && k !== (this.coefficients.length - 1)) {
                    str = ' + ' + str;
                } else if (k !== (this.coefficients.length - 1)) {
                    str = ' ' + str;
                }
            }
            fn = str + fn;
        }
        if (fn.charAt(0) === ' + ') {
            fn = fn.slice(1);
        }

        return 'f(x) = ' + fn;
    }

    static load(json) {
        if (json.name !== 'polynomialRegression') {
            throw new TypeError('not a polynomial regression model');
        }
        return new PolynomialRegression(true, json);
    }
}

module.exports = PolynomialRegression;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function compareNumbers(a, b) {
    return a - b;
}

/**
 * Computes the sum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.sum = function sum(values) {
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return sum;
};

/**
 * Computes the maximum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.max = function max(values) {
    var max = -Infinity;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        if (values[i] > max) max = values[i];
    }
    return max;
};

/**
 * Computes the minimum of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.min = function min(values) {
    var min = Infinity;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        if (values[i] < min) min = values[i];
    }
    return min;
};

/**
 * Computes the min and max of the given values
 * @param {Array} values
 * @returns {{min: number, max: number}}
 */
exports.minMax = function minMax(values) {
    var min = Infinity;
    var max = -Infinity;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        if (values[i] < min) min = values[i];
        if (values[i] > max) max = values[i];
    }
    return {
        min: min,
        max: max
    };
};

/**
 * Computes the arithmetic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.arithmeticMean = function arithmeticMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        sum += values[i];
    }
    return sum / l;
};

/**
 * {@link arithmeticMean}
 */
exports.mean = exports.arithmeticMean;

/**
 * Computes the geometric mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.geometricMean = function geometricMean(values) {
    var mul = 1;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        mul *= values[i];
    }
    return Math.pow(mul, 1 / l);
};

/**
 * Computes the mean of the log of the given values
 * If the return value is exponentiated, it gives the same result as the
 * geometric mean.
 * @param {Array} values
 * @returns {number}
 */
exports.logMean = function logMean(values) {
    var lnsum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        lnsum += Math.log(values[i]);
    }
    return lnsum / l;
};

/**
 * Computes the weighted grand mean for a list of means and sample sizes
 * @param {Array} means - Mean values for each set of samples
 * @param {Array} samples - Number of original values for each set of samples
 * @returns {number}
 */
exports.grandMean = function grandMean(means, samples) {
    var sum = 0;
    var n = 0;
    var l = means.length;
    for (var i = 0; i < l; i++) {
        sum += samples[i] * means[i];
        n += samples[i];
    }
    return sum / n;
};

/**
 * Computes the truncated mean of the given values using a given percentage
 * @param {Array} values
 * @param {number} percent - The percentage of values to keep (range: [0,1])
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.truncatedMean = function truncatedMean(values, percent, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = values.slice().sort(compareNumbers);
    }
    var l = values.length;
    var k = Math.floor(l * percent);
    var sum = 0;
    for (var i = k; i < (l - k); i++) {
        sum += values[i];
    }
    return sum / (l - 2 * k);
};

/**
 * Computes the harmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.harmonicMean = function harmonicMean(values) {
    var sum = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        if (values[i] === 0) {
            throw new RangeError('value at index ' + i + 'is zero');
        }
        sum += 1 / values[i];
    }
    return l / sum;
};

/**
 * Computes the contraharmonic mean of the given values
 * @param {Array} values
 * @returns {number}
 */
exports.contraHarmonicMean = function contraHarmonicMean(values) {
    var r1 = 0;
    var r2 = 0;
    var l = values.length;
    for (var i = 0; i < l; i++) {
        r1 += values[i] * values[i];
        r2 += values[i];
    }
    if (r2 < 0) {
        throw new RangeError('sum of values is negative');
    }
    return r1 / r2;
};

/**
 * Computes the median of the given values
 * @param {Array} values
 * @param {boolean} [alreadySorted=false]
 * @returns {number}
 */
exports.median = function median(values, alreadySorted) {
    if (alreadySorted === undefined) alreadySorted = false;
    if (!alreadySorted) {
        values = values.slice().sort(compareNumbers);
    }
    var l = values.length;
    var half = Math.floor(l / 2);
    if (l % 2 === 0) {
        return (values[half - 1] + values[half]) * 0.5;
    } else {
        return values[half];
    }
};

/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.variance = function variance(values, unbiased) {
    if (unbiased === undefined) unbiased = true;
    var theMean = exports.mean(values);
    var theVariance = 0;
    var l = values.length;

    for (var i = 0; i < l; i++) {
        var x = values[i] - theMean;
        theVariance += x * x;
    }

    if (unbiased) {
        return theVariance / (l - 1);
    } else {
        return theVariance / l;
    }
};

/**
 * Computes the standard deviation of the given values
 * @param {Array} values
 * @param {boolean} [unbiased=true] - if true, divide by (n-1); if false, divide by n.
 * @returns {number}
 */
exports.standardDeviation = function standardDeviation(values, unbiased) {
    return Math.sqrt(exports.variance(values, unbiased));
};

exports.standardError = function standardError(values) {
    return exports.standardDeviation(values) / Math.sqrt(values.length);
};

exports.quartiles = function quartiles(values, alreadySorted) {
    if (typeof(alreadySorted) === 'undefined') alreadySorted = false;
    if (!alreadySorted) {
        values = values.slice();
        values.sort(compareNumbers);
    }

    var quart = values.length / 4;
    var q1 = values[Math.ceil(quart) - 1];
    var q2 = exports.median(values, true);
    var q3 = values[Math.ceil(quart * 3) - 1];

    return {q1: q1, q2: q2, q3: q3};
};

exports.pooledStandardDeviation = function pooledStandardDeviation(samples, unbiased) {
    return Math.sqrt(exports.pooledVariance(samples, unbiased));
};

exports.pooledVariance = function pooledVariance(samples, unbiased) {
    if (typeof(unbiased) === 'undefined') unbiased = true;
    var sum = 0;
    var length = 0, l = samples.length;
    for (var i = 0; i < l; i++) {
        var values = samples[i];
        var vari = exports.variance(values);

        sum += (values.length - 1) * vari;

        if (unbiased)
            length += values.length - 1;
        else
            length += values.length;
    }
    return sum / length;
};

exports.mode = function mode(values) {
    var l = values.length,
        itemCount = new Array(l),
        i;
    for (i = 0; i < l; i++) {
        itemCount[i] = 0;
    }
    var itemArray = new Array(l);
    var count = 0;

    for (i = 0; i < l; i++) {
        var index = itemArray.indexOf(values[i]);
        if (index >= 0)
            itemCount[index]++;
        else {
            itemArray[count] = values[i];
            itemCount[count] = 1;
            count++;
        }
    }

    var maxValue = 0, maxIndex = 0;
    for (i = 0; i < count; i++) {
        if (itemCount[i] > maxValue) {
            maxValue = itemCount[i];
            maxIndex = i;
        }
    }

    return itemArray[maxIndex];
};

exports.covariance = function covariance(vector1, vector2, unbiased) {
    if (typeof(unbiased) === 'undefined') unbiased = true;
    var mean1 = exports.mean(vector1);
    var mean2 = exports.mean(vector2);

    if (vector1.length !== vector2.length)
        throw "Vectors do not have the same dimensions";

    var cov = 0, l = vector1.length;
    for (var i = 0; i < l; i++) {
        var x = vector1[i] - mean1;
        var y = vector2[i] - mean2;
        cov += x * y;
    }

    if (unbiased)
        return cov / (l - 1);
    else
        return cov / l;
};

exports.skewness = function skewness(values, unbiased) {
    if (typeof(unbiased) === 'undefined') unbiased = true;
    var theMean = exports.mean(values);

    var s2 = 0, s3 = 0, l = values.length;
    for (var i = 0; i < l; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s3 += dev * dev * dev;
    }
    var m2 = s2 / l;
    var m3 = s3 / l;

    var g = m3 / (Math.pow(m2, 3 / 2.0));
    if (unbiased) {
        var a = Math.sqrt(l * (l - 1));
        var b = l - 2;
        return (a / b) * g;
    }
    else {
        return g;
    }
};

exports.kurtosis = function kurtosis(values, unbiased) {
    if (typeof(unbiased) === 'undefined') unbiased = true;
    var theMean = exports.mean(values);
    var n = values.length, s2 = 0, s4 = 0;

    for (var i = 0; i < n; i++) {
        var dev = values[i] - theMean;
        s2 += dev * dev;
        s4 += dev * dev * dev * dev;
    }
    var m2 = s2 / n;
    var m4 = s4 / n;

    if (unbiased) {
        var v = s2 / (n - 1);
        var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
        var b = s4 / (v * v);
        var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));

        return a * b - 3 * c;
    }
    else {
        return m4 / (m2 * m2) - 3;
    }
};

exports.entropy = function entropy(values, eps) {
    if (typeof(eps) === 'undefined') eps = 0;
    var sum = 0, l = values.length;
    for (var i = 0; i < l; i++)
        sum += values[i] * Math.log(values[i] + eps);
    return -sum;
};

exports.weightedMean = function weightedMean(values, weights) {
    var sum = 0, l = values.length;
    for (var i = 0; i < l; i++)
        sum += values[i] * weights[i];
    return sum;
};

exports.weightedStandardDeviation = function weightedStandardDeviation(values, weights) {
    return Math.sqrt(exports.weightedVariance(values, weights));
};

exports.weightedVariance = function weightedVariance(values, weights) {
    var theMean = exports.weightedMean(values, weights);
    var vari = 0, l = values.length;
    var a = 0, b = 0;

    for (var i = 0; i < l; i++) {
        var z = values[i] - theMean;
        var w = weights[i];

        vari += w * (z * z);
        b += w;
        a += w * w;
    }

    return vari * (b / (b * b - a));
};

exports.center = function center(values, inPlace) {
    if (typeof(inPlace) === 'undefined') inPlace = false;

    var result = values;
    if (!inPlace)
        result = values.slice();

    var theMean = exports.mean(result), l = result.length;
    for (var i = 0; i < l; i++)
        result[i] -= theMean;
};

exports.standardize = function standardize(values, standardDev, inPlace) {
    if (typeof(standardDev) === 'undefined') standardDev = exports.standardDeviation(values);
    if (typeof(inPlace) === 'undefined') inPlace = false;
    var l = values.length;
    var result = inPlace ? values : new Array(l);
    for (var i = 0; i < l; i++)
        result[i] = values[i] / standardDev;
    return result;
};

exports.cumulativeSum = function cumulativeSum(array) {
    var l = array.length;
    var result = new Array(l);
    result[0] = array[0];
    for (var i = 1; i < l; i++)
        result[i] = result[i - 1] + array[i];
    return result;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.array = __webpack_require__(50);
exports.matrix = __webpack_require__(195);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var analyseMF = __webpack_require__(94).analyseMF;

var defaultOptions = {
    oddReference: true
};

/**
 * Recalculates series for GC/MS with lock mass
 * @param {Chromatogram} chromatogram - GC/MS chromatogram where make the peak picking
 * @param {string|Array<string>} mf - Reference molecular formula(s)
 * @param {object} [options] - Options object
 * @param {boolean} [options.oddReference] - Mass reference it's in the odd position
 * @return {{tic: Array<number>, ms: Array<Array<number>>, time: Array<number>}}
 */
function applyLockMass(chromatogram, mf, options) {
    options = (0, _assign2.default)({}, defaultOptions, options);

    // allows mf as string or array
    if (typeof mf === 'string') {
        mf = [mf];
    }

    // calculate the mass reference values
    var referenceMass = mf.map(function (mf) {
        return analyseMF(mf).em;
    });

    var ms = chromatogram.findSerieByName('ms');
    if (!ms) {
        throw new Error('The mass serie must be defined');
    }
    ms = ms.data;
    var time = chromatogram.getTimes();

    // check where is the reference values
    var referenceIndexShift = Number(options.oddReference);
    var msIndexShift = Number(!options.oddReference);

    if (ms.length % 2 !== 0) {
        throw new Error('The series must have an even size');
    }
    var result = {
        tic: new Array(ms.length / 2),
        ms: new Array(ms.length / 2),
        time: new Array(ms.length / 2)
    };

    for (var i = 0; i < ms.length / 2; i++) {
        // calculate the difference between theory and experimental
        var difference = Number.MAX_VALUE;
        for (var j = 0; j < referenceMass.length; j++) {
            if (Math.abs(difference) > Math.abs(referenceMass[j] - ms[2 * i + referenceIndexShift][0])) {
                difference = referenceMass[j] - ms[2 * i + referenceIndexShift][0];
            }
        }

        // apply the difference
        result.time[i] = time[2 * i + msIndexShift];

        var len = ms[2 * i + msIndexShift][0].length;
        result.ms[i] = [new Array(len), new Array(len)];
        for (var m = 0; m < len; m++) {
            result.ms[i][0][m] = ms[2 * i + msIndexShift][0][m] + difference;
            result.ms[i][1][m] = ms[2 * i + msIndexShift][1][m];
        }

        result.tic[i] = ms[2 * i + msIndexShift][1].reduce(function (a, b) {
            return a + b;
        }, 0);
    }

    return result;
}

module.exports = applyLockMass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHBseUxvY2tNYXNzLmpzIl0sIm5hbWVzIjpbImFuYWx5c2VNRiIsInJlcXVpcmUiLCJkZWZhdWx0T3B0aW9ucyIsIm9kZFJlZmVyZW5jZSIsImFwcGx5TG9ja01hc3MiLCJjaHJvbWF0b2dyYW0iLCJtZiIsIm9wdGlvbnMiLCJyZWZlcmVuY2VNYXNzIiwibWFwIiwiZW0iLCJtcyIsImZpbmRTZXJpZUJ5TmFtZSIsIkVycm9yIiwiZGF0YSIsInRpbWUiLCJnZXRUaW1lcyIsInJlZmVyZW5jZUluZGV4U2hpZnQiLCJOdW1iZXIiLCJtc0luZGV4U2hpZnQiLCJsZW5ndGgiLCJyZXN1bHQiLCJ0aWMiLCJBcnJheSIsImkiLCJkaWZmZXJlbmNlIiwiTUFYX1ZBTFVFIiwiaiIsIk1hdGgiLCJhYnMiLCJsZW4iLCJtIiwicmVkdWNlIiwiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFVBQVIsRUFBb0JELFNBQXRDOztBQUVBLElBQU1FLGlCQUFpQjtBQUNuQkMsa0JBQWM7QUFESyxDQUF2Qjs7QUFJQTs7Ozs7Ozs7QUFRQSxTQUFTQyxhQUFULENBQXVCQyxZQUF2QixFQUFxQ0MsRUFBckMsRUFBeUNDLE9BQXpDLEVBQWtEO0FBQzlDQSxjQUFVLHNCQUFjLEVBQWQsRUFBa0JMLGNBQWxCLEVBQWtDSyxPQUFsQyxDQUFWOztBQUVBO0FBQ0EsUUFBSSxPQUFPRCxFQUFQLEtBQWMsUUFBbEIsRUFBNEI7QUFDeEJBLGFBQUssQ0FBQ0EsRUFBRCxDQUFMO0FBQ0g7O0FBRUQ7QUFDQSxRQUFNRSxnQkFBZ0JGLEdBQUdHLEdBQUgsQ0FBTyxVQUFDSCxFQUFEO0FBQUEsZUFBUU4sVUFBVU0sRUFBVixFQUFjSSxFQUF0QjtBQUFBLEtBQVAsQ0FBdEI7O0FBRUEsUUFBSUMsS0FBS04sYUFBYU8sZUFBYixDQUE2QixJQUE3QixDQUFUO0FBQ0EsUUFBSSxDQUFDRCxFQUFMLEVBQVM7QUFDTCxjQUFNLElBQUlFLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0g7QUFDREYsU0FBS0EsR0FBR0csSUFBUjtBQUNBLFFBQU1DLE9BQU9WLGFBQWFXLFFBQWIsRUFBYjs7QUFFQTtBQUNBLFFBQUlDLHNCQUFzQkMsT0FBT1gsUUFBUUosWUFBZixDQUExQjtBQUNBLFFBQUlnQixlQUFlRCxPQUFPLENBQUNYLFFBQVFKLFlBQWhCLENBQW5COztBQUVBLFFBQUlRLEdBQUdTLE1BQUgsR0FBWSxDQUFaLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLGNBQU0sSUFBSVAsS0FBSixDQUFVLG1DQUFWLENBQU47QUFDSDtBQUNELFFBQUlRLFNBQVM7QUFDVEMsYUFBSyxJQUFJQyxLQUFKLENBQVVaLEdBQUdTLE1BQUgsR0FBWSxDQUF0QixDQURJO0FBRVRULFlBQUksSUFBSVksS0FBSixDQUFVWixHQUFHUyxNQUFILEdBQVksQ0FBdEIsQ0FGSztBQUdUTCxjQUFNLElBQUlRLEtBQUosQ0FBVVosR0FBR1MsTUFBSCxHQUFZLENBQXRCO0FBSEcsS0FBYjs7QUFNQSxTQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBS2IsR0FBR1MsTUFBSCxHQUFZLENBQWpDLEVBQXFDSSxHQUFyQyxFQUEwQztBQUN0QztBQUNBLFlBQUlDLGFBQWFQLE9BQU9RLFNBQXhCO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUluQixjQUFjWSxNQUFsQyxFQUEwQ08sR0FBMUMsRUFBK0M7QUFDM0MsZ0JBQUlDLEtBQUtDLEdBQUwsQ0FBU0osVUFBVCxJQUF1QkcsS0FBS0MsR0FBTCxDQUFTckIsY0FBY21CLENBQWQsSUFBbUJoQixHQUFHLElBQUlhLENBQUosR0FBUVAsbUJBQVgsRUFBZ0MsQ0FBaEMsQ0FBNUIsQ0FBM0IsRUFBNEY7QUFDeEZRLDZCQUFhakIsY0FBY21CLENBQWQsSUFBbUJoQixHQUFHLElBQUlhLENBQUosR0FBUVAsbUJBQVgsRUFBZ0MsQ0FBaEMsQ0FBaEM7QUFDSDtBQUNKOztBQUVEO0FBQ0FJLGVBQU9OLElBQVAsQ0FBWVMsQ0FBWixJQUFpQlQsS0FBSyxJQUFJUyxDQUFKLEdBQVFMLFlBQWIsQ0FBakI7O0FBRUEsWUFBSVcsTUFBTW5CLEdBQUcsSUFBSWEsQ0FBSixHQUFRTCxZQUFYLEVBQXlCLENBQXpCLEVBQTRCQyxNQUF0QztBQUNBQyxlQUFPVixFQUFQLENBQVVhLENBQVYsSUFBZSxDQUNYLElBQUlELEtBQUosQ0FBVU8sR0FBVixDQURXLEVBRVgsSUFBSVAsS0FBSixDQUFVTyxHQUFWLENBRlcsQ0FBZjtBQUlBLGFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxHQUFwQixFQUF5QkMsR0FBekIsRUFBOEI7QUFDMUJWLG1CQUFPVixFQUFQLENBQVVhLENBQVYsRUFBYSxDQUFiLEVBQWdCTyxDQUFoQixJQUFxQnBCLEdBQUcsSUFBSWEsQ0FBSixHQUFRTCxZQUFYLEVBQXlCLENBQXpCLEVBQTRCWSxDQUE1QixJQUFpQ04sVUFBdEQ7QUFDQUosbUJBQU9WLEVBQVAsQ0FBVWEsQ0FBVixFQUFhLENBQWIsRUFBZ0JPLENBQWhCLElBQXFCcEIsR0FBRyxJQUFJYSxDQUFKLEdBQVFMLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEJZLENBQTVCLENBQXJCO0FBQ0g7O0FBRURWLGVBQU9DLEdBQVAsQ0FBV0UsQ0FBWCxJQUFnQmIsR0FBRyxJQUFJYSxDQUFKLEdBQVFMLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEJhLE1BQTVCLENBQW1DLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1CQUFXRCxJQUFJQyxDQUFmO0FBQUEsU0FBbkMsRUFBc0QsQ0FBdEQsQ0FBaEI7QUFDSDs7QUFFRCxXQUFPYixNQUFQO0FBQ0g7O0FBRURjLE9BQU9DLE9BQVAsR0FBaUJoQyxhQUFqQiIsImZpbGUiOiJhcHBseUxvY2tNYXNzLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYW5hbHlzZU1GID0gcmVxdWlyZSgnY2hlbWNhbGMnKS5hbmFseXNlTUY7XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIG9kZFJlZmVyZW5jZTogdHJ1ZVxufTtcblxuLyoqXG4gKiBSZWNhbGN1bGF0ZXMgc2VyaWVzIGZvciBHQy9NUyB3aXRoIGxvY2sgbWFzc1xuICogQHBhcmFtIHtDaHJvbWF0b2dyYW19IGNocm9tYXRvZ3JhbSAtIEdDL01TIGNocm9tYXRvZ3JhbSB3aGVyZSBtYWtlIHRoZSBwZWFrIHBpY2tpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfEFycmF5PHN0cmluZz59IG1mIC0gUmVmZXJlbmNlIG1vbGVjdWxhciBmb3JtdWxhKHMpXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMub2RkUmVmZXJlbmNlXSAtIE1hc3MgcmVmZXJlbmNlIGl0J3MgaW4gdGhlIG9kZCBwb3NpdGlvblxuICogQHJldHVybiB7e3RpYzogQXJyYXk8bnVtYmVyPiwgbXM6IEFycmF5PEFycmF5PG51bWJlcj4+LCB0aW1lOiBBcnJheTxudW1iZXI+fX1cbiAqL1xuZnVuY3Rpb24gYXBwbHlMb2NrTWFzcyhjaHJvbWF0b2dyYW0sIG1mLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIC8vIGFsbG93cyBtZiBhcyBzdHJpbmcgb3IgYXJyYXlcbiAgICBpZiAodHlwZW9mIG1mID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZiA9IFttZl07XG4gICAgfVxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBtYXNzIHJlZmVyZW5jZSB2YWx1ZXNcbiAgICBjb25zdCByZWZlcmVuY2VNYXNzID0gbWYubWFwKChtZikgPT4gYW5hbHlzZU1GKG1mKS5lbSk7XG5cbiAgICBsZXQgbXMgPSBjaHJvbWF0b2dyYW0uZmluZFNlcmllQnlOYW1lKCdtcycpO1xuICAgIGlmICghbXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbWFzcyBzZXJpZSBtdXN0IGJlIGRlZmluZWQnKTtcbiAgICB9XG4gICAgbXMgPSBtcy5kYXRhO1xuICAgIGNvbnN0IHRpbWUgPSBjaHJvbWF0b2dyYW0uZ2V0VGltZXMoKTtcblxuICAgIC8vIGNoZWNrIHdoZXJlIGlzIHRoZSByZWZlcmVuY2UgdmFsdWVzXG4gICAgdmFyIHJlZmVyZW5jZUluZGV4U2hpZnQgPSBOdW1iZXIob3B0aW9ucy5vZGRSZWZlcmVuY2UpO1xuICAgIHZhciBtc0luZGV4U2hpZnQgPSBOdW1iZXIoIW9wdGlvbnMub2RkUmVmZXJlbmNlKTtcblxuICAgIGlmIChtcy5sZW5ndGggJSAyICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHNlcmllcyBtdXN0IGhhdmUgYW4gZXZlbiBzaXplJyk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIHRpYzogbmV3IEFycmF5KG1zLmxlbmd0aCAvIDIpLFxuICAgICAgICBtczogbmV3IEFycmF5KG1zLmxlbmd0aCAvIDIpLFxuICAgICAgICB0aW1lOiBuZXcgQXJyYXkobXMubGVuZ3RoIC8gMilcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAobXMubGVuZ3RoIC8gMik7IGkrKykge1xuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGVvcnkgYW5kIGV4cGVyaW1lbnRhbFxuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVmZXJlbmNlTWFzcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZlcmVuY2UpID4gTWF0aC5hYnMocmVmZXJlbmNlTWFzc1tqXSAtIG1zWzIgKiBpICsgcmVmZXJlbmNlSW5kZXhTaGlmdF1bMF0pKSB7XG4gICAgICAgICAgICAgICAgZGlmZmVyZW5jZSA9IHJlZmVyZW5jZU1hc3Nbal0gLSBtc1syICogaSArIHJlZmVyZW5jZUluZGV4U2hpZnRdWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXBwbHkgdGhlIGRpZmZlcmVuY2VcbiAgICAgICAgcmVzdWx0LnRpbWVbaV0gPSB0aW1lWzIgKiBpICsgbXNJbmRleFNoaWZ0XTtcblxuICAgICAgICB2YXIgbGVuID0gbXNbMiAqIGkgKyBtc0luZGV4U2hpZnRdWzBdLmxlbmd0aDtcbiAgICAgICAgcmVzdWx0Lm1zW2ldID0gW1xuICAgICAgICAgICAgbmV3IEFycmF5KGxlbiksXG4gICAgICAgICAgICBuZXcgQXJyYXkobGVuKVxuICAgICAgICBdO1xuICAgICAgICBmb3IgKHZhciBtID0gMDsgbSA8IGxlbjsgbSsrKSB7XG4gICAgICAgICAgICByZXN1bHQubXNbaV1bMF1bbV0gPSBtc1syICogaSArIG1zSW5kZXhTaGlmdF1bMF1bbV0gKyBkaWZmZXJlbmNlO1xuICAgICAgICAgICAgcmVzdWx0Lm1zW2ldWzFdW21dID0gbXNbMiAqIGkgKyBtc0luZGV4U2hpZnRdWzFdW21dO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnRpY1tpXSA9IG1zWzIgKiBpICsgbXNJbmRleFNoaWZ0XVsxXS5yZWR1Y2UoKGEsIGIpID0+IChhICsgYiksIDApO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHlMb2NrTWFzcztcbiJdfQ==

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Chromatogram = __webpack_require__(28);

/**
 * Parse from a JSON element to a new Chromatogram
 * @param {Array<object>} json - Result from the toJSON
 * @return {Chromatogram} - New parsed Chromatogram
 */
function fromJSON(json) {
    var time = new Array(json.length);
    var tic = new Array(json.length);
    var ms = new Array(json.length);

    for (var i = 0; i < json.length; i++) {
        time[i] = json[i].time;
        tic[i] = json[i].tic;
        ms[i] = [new Array(json[i].mass.length), new Array(json[i].mass.length)];
        for (var j = 0; j < json[i].mass.length; j++) {
            ms[i][0][j] = json[i].mass[j].mass;
            ms[i][1][j] = json[i].mass[j].intensity;
        }
    }

    var chrom = new Chromatogram(time);
    chrom.addSerie({
        dimension: 1,
        name: 'tic',
        data: tic
    });
    chrom.addSerie({
        dimension: 2,
        name: 'ms',
        data: ms
    });

    return chrom;
}

module.exports = fromJSON;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9tSlNPTi5qcyJdLCJuYW1lcyI6WyJDaHJvbWF0b2dyYW0iLCJyZXF1aXJlIiwiZnJvbUpTT04iLCJqc29uIiwidGltZSIsIkFycmF5IiwibGVuZ3RoIiwidGljIiwibXMiLCJpIiwibWFzcyIsImoiLCJpbnRlbnNpdHkiLCJjaHJvbSIsImFkZFNlcmllIiwiZGltZW5zaW9uIiwibmFtZSIsImRhdGEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGdCQUFSLENBQXJCOztBQUVBOzs7OztBQUtBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3BCLFFBQUlDLE9BQU8sSUFBSUMsS0FBSixDQUFVRixLQUFLRyxNQUFmLENBQVg7QUFDQSxRQUFJQyxNQUFNLElBQUlGLEtBQUosQ0FBVUYsS0FBS0csTUFBZixDQUFWO0FBQ0EsUUFBSUUsS0FBSyxJQUFJSCxLQUFKLENBQVVGLEtBQUtHLE1BQWYsQ0FBVDs7QUFFQSxTQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sS0FBS0csTUFBekIsRUFBaUNHLEdBQWpDLEVBQXNDO0FBQ2xDTCxhQUFLSyxDQUFMLElBQVVOLEtBQUtNLENBQUwsRUFBUUwsSUFBbEI7QUFDQUcsWUFBSUUsQ0FBSixJQUFTTixLQUFLTSxDQUFMLEVBQVFGLEdBQWpCO0FBQ0FDLFdBQUdDLENBQUgsSUFBUSxDQUFDLElBQUlKLEtBQUosQ0FBVUYsS0FBS00sQ0FBTCxFQUFRQyxJQUFSLENBQWFKLE1BQXZCLENBQUQsRUFBaUMsSUFBSUQsS0FBSixDQUFVRixLQUFLTSxDQUFMLEVBQVFDLElBQVIsQ0FBYUosTUFBdkIsQ0FBakMsQ0FBUjtBQUNBLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJUixLQUFLTSxDQUFMLEVBQVFDLElBQVIsQ0FBYUosTUFBakMsRUFBeUNLLEdBQXpDLEVBQThDO0FBQzFDSCxlQUFHQyxDQUFILEVBQU0sQ0FBTixFQUFTRSxDQUFULElBQWNSLEtBQUtNLENBQUwsRUFBUUMsSUFBUixDQUFhQyxDQUFiLEVBQWdCRCxJQUE5QjtBQUNBRixlQUFHQyxDQUFILEVBQU0sQ0FBTixFQUFTRSxDQUFULElBQWNSLEtBQUtNLENBQUwsRUFBUUMsSUFBUixDQUFhQyxDQUFiLEVBQWdCQyxTQUE5QjtBQUNIO0FBQ0o7O0FBRUQsUUFBSUMsUUFBUSxJQUFJYixZQUFKLENBQWlCSSxJQUFqQixDQUFaO0FBQ0FTLFVBQU1DLFFBQU4sQ0FBZTtBQUNYQyxtQkFBVyxDQURBO0FBRVhDLGNBQU0sS0FGSztBQUdYQyxjQUFNVjtBQUhLLEtBQWY7QUFLQU0sVUFBTUMsUUFBTixDQUFlO0FBQ1hDLG1CQUFXLENBREE7QUFFWEMsY0FBTSxJQUZLO0FBR1hDLGNBQU1UO0FBSEssS0FBZjs7QUFNQSxXQUFPSyxLQUFQO0FBQ0g7O0FBRURLLE9BQU9DLE9BQVAsR0FBaUJqQixRQUFqQiIsImZpbGUiOiJmcm9tSlNPTi5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENocm9tYXRvZ3JhbSA9IHJlcXVpcmUoJy4vQ2hyb21hdG9ncmFtJyk7XG5cbi8qKlxuICogUGFyc2UgZnJvbSBhIEpTT04gZWxlbWVudCB0byBhIG5ldyBDaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0ganNvbiAtIFJlc3VsdCBmcm9tIHRoZSB0b0pTT05cbiAqIEByZXR1cm4ge0Nocm9tYXRvZ3JhbX0gLSBOZXcgcGFyc2VkIENocm9tYXRvZ3JhbVxuICovXG5mdW5jdGlvbiBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHRpbWUgPSBuZXcgQXJyYXkoanNvbi5sZW5ndGgpO1xuICAgIGxldCB0aWMgPSBuZXcgQXJyYXkoanNvbi5sZW5ndGgpO1xuICAgIGxldCBtcyA9IG5ldyBBcnJheShqc29uLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGltZVtpXSA9IGpzb25baV0udGltZTtcbiAgICAgICAgdGljW2ldID0ganNvbltpXS50aWM7XG4gICAgICAgIG1zW2ldID0gW25ldyBBcnJheShqc29uW2ldLm1hc3MubGVuZ3RoKSwgbmV3IEFycmF5KGpzb25baV0ubWFzcy5sZW5ndGgpXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBqc29uW2ldLm1hc3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG1zW2ldWzBdW2pdID0ganNvbltpXS5tYXNzW2pdLm1hc3M7XG4gICAgICAgICAgICBtc1tpXVsxXVtqXSA9IGpzb25baV0ubWFzc1tqXS5pbnRlbnNpdHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hyb20gPSBuZXcgQ2hyb21hdG9ncmFtKHRpbWUpO1xuICAgIGNocm9tLmFkZFNlcmllKHtcbiAgICAgICAgZGltZW5zaW9uOiAxLFxuICAgICAgICBuYW1lOiAndGljJyxcbiAgICAgICAgZGF0YTogdGljXG4gICAgfSk7XG4gICAgY2hyb20uYWRkU2VyaWUoe1xuICAgICAgICBkaW1lbnNpb246IDIsXG4gICAgICAgIG5hbWU6ICdtcycsXG4gICAgICAgIGRhdGE6IG1zXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hyb207XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbUpTT047XG4iXX0=

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Chromatogram = __webpack_require__(28);
var converter = __webpack_require__(132).convert;

/**
 * Creates a new Chromatogram element based in a JCAMP string
 * @param {string} jcamp - String containing the JCAMP data
 * @return {Chromatogram} - New class element with the given data
 */
function fromJcamp(jcamp) {
  var data = converter(jcamp, { newGCMS: true }).gcms;
  return new Chromatogram(data);
}

module.exports = fromJcamp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9tSmNhbXAuanMiXSwibmFtZXMiOlsiQ2hyb21hdG9ncmFtIiwicmVxdWlyZSIsImNvbnZlcnRlciIsImNvbnZlcnQiLCJmcm9tSmNhbXAiLCJqY2FtcCIsImRhdGEiLCJuZXdHQ01TIiwiZ2NtcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxJQUFNQyxZQUFZRCxRQUFRLGdCQUFSLEVBQTBCRSxPQUE1Qzs7QUFFQTs7Ozs7QUFLQSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN0QixNQUFNQyxPQUFPSixVQUFVRyxLQUFWLEVBQWlCLEVBQUNFLFNBQVMsSUFBVixFQUFqQixFQUFrQ0MsSUFBL0M7QUFDQSxTQUFPLElBQUlSLFlBQUosQ0FBaUJNLElBQWpCLENBQVA7QUFDSDs7QUFFREcsT0FBT0MsT0FBUCxHQUFpQk4sU0FBakIiLCJmaWxlIjoiZnJvbUpjYW1wLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2hyb21hdG9ncmFtID0gcmVxdWlyZSgnLi9DaHJvbWF0b2dyYW0nKTtcbmNvbnN0IGNvbnZlcnRlciA9IHJlcXVpcmUoJ2pjYW1wY29udmVydGVyJykuY29udmVydDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IENocm9tYXRvZ3JhbSBlbGVtZW50IGJhc2VkIGluIGEgSkNBTVAgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gamNhbXAgLSBTdHJpbmcgY29udGFpbmluZyB0aGUgSkNBTVAgZGF0YVxuICogQHJldHVybiB7Q2hyb21hdG9ncmFtfSAtIE5ldyBjbGFzcyBlbGVtZW50IHdpdGggdGhlIGdpdmVuIGRhdGFcbiAqL1xuZnVuY3Rpb24gZnJvbUpjYW1wKGpjYW1wKSB7XG4gICAgY29uc3QgZGF0YSA9IGNvbnZlcnRlcihqY2FtcCwge25ld0dDTVM6IHRydWV9KS5nY21zO1xuICAgIHJldHVybiBuZXcgQ2hyb21hdG9ncmFtKGRhdGEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyb21KY2FtcDtcbiJdfQ==

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var kovats = __webpack_require__(52);
var getPeaks = __webpack_require__(29);
var massInPeaks = __webpack_require__(31);

/**
 * Calculates the table of Kovats indexes for the reference spectra
 * @param {Chromatogram} reference - Reference spectra
 * @param {object} [options = {}] - Options object
 * @param {number} [options.heightFilter = 100] - Filter all objects that are bellow heightFilter times the median of the height
 * @param {number} [options.thresholdFactor = 0.005] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = 40] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 5] - When find a max can't be another max in a radius of this size
 * @return {Array<object>} - Time and value for the Kovats index
 */
function getKovatsTable(reference) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$heightFilter = options.heightFilter,
        heightFilter = _options$heightFilter === undefined ? 100 : _options$heightFilter,
        _options$thresholdFac = options.thresholdFactor,
        thresholdFactor = _options$thresholdFac === undefined ? 0.005 : _options$thresholdFac,
        _options$maxNumberPea = options.maxNumberPeaks,
        maxNumberPeaks = _options$maxNumberPea === undefined ? 40 : _options$maxNumberPea,
        _options$groupWidth = options.groupWidth,
        groupWidth = _options$groupWidth === undefined ? 5 : _options$groupWidth;

    // Peak picking

    var peaks = getPeaks(reference, { heightFilter: heightFilter });
    peaks = peaks.sort(function (a, b) {
        return a.index - b.index;
    });

    // integrate mass in the peaks
    var ms = reference.findSerieByName('ms').data;
    var integratedMs = massInPeaks(peaks, ms, { thresholdFactor: thresholdFactor, maxNumberPeaks: maxNumberPeaks, groupWidth: groupWidth });

    var kovatsIndexes = new Array(integratedMs.length);
    for (var i = 0; i < integratedMs.length; i++) {
        kovatsIndexes[i] = {
            time: integratedMs[i].x,
            value: kovats(integratedMs[i].ms)
        };
    }

    return kovatsIndexes;
}

module.exports = getKovatsTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nZXRLb3ZhdHNUYWJsZS5qcyJdLCJuYW1lcyI6WyJrb3ZhdHMiLCJyZXF1aXJlIiwiZ2V0UGVha3MiLCJtYXNzSW5QZWFrcyIsImdldEtvdmF0c1RhYmxlIiwicmVmZXJlbmNlIiwib3B0aW9ucyIsImhlaWdodEZpbHRlciIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiZ3JvdXBXaWR0aCIsInBlYWtzIiwic29ydCIsImEiLCJiIiwiaW5kZXgiLCJtcyIsImZpbmRTZXJpZUJ5TmFtZSIsImRhdGEiLCJpbnRlZ3JhdGVkTXMiLCJrb3ZhdHNJbmRleGVzIiwiQXJyYXkiLCJsZW5ndGgiLCJpIiwidGltZSIsIngiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBTUMsV0FBV0QsUUFBUSxZQUFSLENBQWpCO0FBQ0EsSUFBTUUsY0FBY0YsUUFBUSxlQUFSLENBQXBCOztBQUVBOzs7Ozs7Ozs7O0FBVUEsU0FBU0csY0FBVCxDQUF3QkMsU0FBeEIsRUFBaUQ7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFBQSxnQ0FDOENBLE9BRDlDLENBQ3RDQyxZQURzQztBQUFBLFFBQ3RDQSxZQURzQyx5Q0FDdkIsR0FEdUI7QUFBQSxnQ0FDOENELE9BRDlDLENBQ2xCRSxlQURrQjtBQUFBLFFBQ2xCQSxlQURrQix5Q0FDQSxLQURBO0FBQUEsZ0NBQzhDRixPQUQ5QyxDQUNPRyxjQURQO0FBQUEsUUFDT0EsY0FEUCx5Q0FDd0IsRUFEeEI7QUFBQSw4QkFDOENILE9BRDlDLENBQzRCSSxVQUQ1QjtBQUFBLFFBQzRCQSxVQUQ1Qix1Q0FDeUMsQ0FEekM7O0FBRzdDOztBQUNBLFFBQUlDLFFBQVFULFNBQVNHLFNBQVQsRUFBb0IsRUFBQ0UsMEJBQUQsRUFBcEIsQ0FBWjtBQUNBSSxZQUFRQSxNQUFNQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsRUFBRUUsS0FBRixHQUFVRCxFQUFFQyxLQUF0QjtBQUFBLEtBQVgsQ0FBUjs7QUFFQTtBQUNBLFFBQUlDLEtBQUtYLFVBQVVZLGVBQVYsQ0FBMEIsSUFBMUIsRUFBZ0NDLElBQXpDO0FBQ0EsUUFBSUMsZUFBZWhCLFlBQVlRLEtBQVosRUFBbUJLLEVBQW5CLEVBQXVCLEVBQUNSLGdDQUFELEVBQWtCQyw4QkFBbEIsRUFBa0NDLHNCQUFsQyxFQUF2QixDQUFuQjs7QUFFQSxRQUFJVSxnQkFBZ0IsSUFBSUMsS0FBSixDQUFVRixhQUFhRyxNQUF2QixDQUFwQjtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixhQUFhRyxNQUFqQyxFQUF5Q0MsR0FBekMsRUFBOEM7QUFDMUNILHNCQUFjRyxDQUFkLElBQW1CO0FBQ2ZDLGtCQUFNTCxhQUFhSSxDQUFiLEVBQWdCRSxDQURQO0FBRWZDLG1CQUFPMUIsT0FBT21CLGFBQWFJLENBQWIsRUFBZ0JQLEVBQXZCO0FBRlEsU0FBbkI7QUFJSDs7QUFFRCxXQUFPSSxhQUFQO0FBQ0g7O0FBRURPLE9BQU9DLE9BQVAsR0FBaUJ4QixjQUFqQiIsImZpbGUiOiJnZXRLb3ZhdHNUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGtvdmF0cyA9IHJlcXVpcmUoJy4va292YXRzJyk7XG5jb25zdCBnZXRQZWFrcyA9IHJlcXVpcmUoJy4vZ2V0UGVha3MnKTtcbmNvbnN0IG1hc3NJblBlYWtzID0gcmVxdWlyZSgnLi9tYXNzSW5QZWFrcycpO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHRhYmxlIG9mIEtvdmF0cyBpbmRleGVzIGZvciB0aGUgcmVmZXJlbmNlIHNwZWN0cmFcbiAqIEBwYXJhbSB7Q2hyb21hdG9ncmFtfSByZWZlcmVuY2UgLSBSZWZlcmVuY2Ugc3BlY3RyYVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zID0ge31dIC0gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5oZWlnaHRGaWx0ZXIgPSAxMDBdIC0gRmlsdGVyIGFsbCBvYmplY3RzIHRoYXQgYXJlIGJlbGxvdyBoZWlnaHRGaWx0ZXIgdGltZXMgdGhlIG1lZGlhbiBvZiB0aGUgaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGhyZXNob2xkRmFjdG9yID0gMC4wMDVdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSA0MF0gLSBNYXhpbXVtIG51bWJlciBvZiBwZWFrcyBmb3IgZWFjaCBtYXNzIHNwZWN0cmEgKHdoZW4gaXMgTnVtYmVyLk1BWF9WQUxVRSB0aGVyZSdzIG5vIGZpbHRlcilcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5ncm91cFdpZHRoID0gNV0gLSBXaGVuIGZpbmQgYSBtYXggY2FuJ3QgYmUgYW5vdGhlciBtYXggaW4gYSByYWRpdXMgb2YgdGhpcyBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxvYmplY3Q+fSAtIFRpbWUgYW5kIHZhbHVlIGZvciB0aGUgS292YXRzIGluZGV4XG4gKi9cbmZ1bmN0aW9uIGdldEtvdmF0c1RhYmxlKHJlZmVyZW5jZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge2hlaWdodEZpbHRlciA9IDEwMCwgdGhyZXNob2xkRmFjdG9yID0gMC4wMDUsIG1heE51bWJlclBlYWtzID0gNDAsIGdyb3VwV2lkdGggPSA1fSA9IG9wdGlvbnM7XG5cbiAgICAvLyBQZWFrIHBpY2tpbmdcbiAgICBsZXQgcGVha3MgPSBnZXRQZWFrcyhyZWZlcmVuY2UsIHtoZWlnaHRGaWx0ZXJ9KTtcbiAgICBwZWFrcyA9IHBlYWtzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuICAgIC8vIGludGVncmF0ZSBtYXNzIGluIHRoZSBwZWFrc1xuICAgIGxldCBtcyA9IHJlZmVyZW5jZS5maW5kU2VyaWVCeU5hbWUoJ21zJykuZGF0YTtcbiAgICBsZXQgaW50ZWdyYXRlZE1zID0gbWFzc0luUGVha3MocGVha3MsIG1zLCB7dGhyZXNob2xkRmFjdG9yLCBtYXhOdW1iZXJQZWFrcywgZ3JvdXBXaWR0aH0pO1xuXG4gICAgdmFyIGtvdmF0c0luZGV4ZXMgPSBuZXcgQXJyYXkoaW50ZWdyYXRlZE1zLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnRlZ3JhdGVkTXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga292YXRzSW5kZXhlc1tpXSA9IHtcbiAgICAgICAgICAgIHRpbWU6IGludGVncmF0ZWRNc1tpXS54LFxuICAgICAgICAgICAgdmFsdWU6IGtvdmF0cyhpbnRlZ3JhdGVkTXNbaV0ubXMpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGtvdmF0c0luZGV4ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0S292YXRzVGFibGU7XG4iXX0=

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var binarySearch = __webpack_require__(93);
var ascValue = function ascValue(a, b) {
    return a.value - b.value;
};
var ascTime = function ascTime(a, b) {
    return a.time - b.time;
};

/**
 * Returns a function that allows to convert from time to Kovats or from Kovats to time
 * @param {Array<object>} kovatsConversionTable - List of time-kovats from the reference
 * @param {object} [options = {}] - Options object
 * @param {boolean} [options.revert = false] - True for convert from Kovats to time, false otherwise
 * @return {function(number)} - One parameter function that convert to one dimension to the other
 */
function kovatsConversionFunction(kovatsConversionTable) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$revert = options.revert,
        revert = _options$revert === undefined ? false : _options$revert;


    if (revert) {
        var values = kovatsConversionTable.sort(ascValue);

        return function (index) {
            var position = binarySearch(values, { value: index }, ascValue);

            if (position < 0) {
                position = ~position;

                // handle extreme cases
                if (position === 0 || position === values.length) {
                    return 0;
                }

                var smallerAlcane = values[position - 1].time;
                var largerAlcane = values[position].time;
                return (index - values[position - 1].value) * (largerAlcane - smallerAlcane) / 100 + smallerAlcane;
            } else {
                return values[position].time;
            }
        };
    } else {
        var times = kovatsConversionTable.sort(ascTime);

        return function (time) {
            var position = binarySearch(times, { time: time }, ascTime);

            if (position < 0) {
                position = ~position;

                // handle extreme cases
                if (position === 0 || position === times.length) {
                    return 0;
                }

                var smallerAlcane = times[position - 1].time;
                var largerAlcane = times[position].time;
                return 100 * (time - smallerAlcane) / (largerAlcane - smallerAlcane) + times[position - 1].value;
            } else {
                return times[position].value;
            }
        };
    }
}

module.exports = kovatsConversionFunction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9rb3ZhdHNDb252ZXJzaW9uRnVuY3Rpb24uanMiXSwibmFtZXMiOlsiYmluYXJ5U2VhcmNoIiwicmVxdWlyZSIsImFzY1ZhbHVlIiwiYSIsImIiLCJ2YWx1ZSIsImFzY1RpbWUiLCJ0aW1lIiwia292YXRzQ29udmVyc2lvbkZ1bmN0aW9uIiwia292YXRzQ29udmVyc2lvblRhYmxlIiwib3B0aW9ucyIsInJldmVydCIsInZhbHVlcyIsInNvcnQiLCJpbmRleCIsInBvc2l0aW9uIiwibGVuZ3RoIiwic21hbGxlckFsY2FuZSIsImxhcmdlckFsY2FuZSIsInRpbWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxlQUFSLENBQXJCO0FBQ0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVdELEVBQUVFLEtBQUYsR0FBVUQsRUFBRUMsS0FBdkI7QUFBQSxDQUFqQjtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDSCxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFXRCxFQUFFSSxJQUFGLEdBQVNILEVBQUVHLElBQXRCO0FBQUEsQ0FBaEI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTQyx3QkFBVCxDQUFrQ0MscUJBQWxDLEVBQXVFO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQUEsMEJBQzFDQSxPQUQwQyxDQUM1REMsTUFENEQ7QUFBQSxRQUM1REEsTUFENEQsbUNBQ25ELEtBRG1EOzs7QUFHbkUsUUFBSUEsTUFBSixFQUFZO0FBQ1IsWUFBTUMsU0FBU0gsc0JBQXNCSSxJQUF0QixDQUEyQlgsUUFBM0IsQ0FBZjs7QUFFQSxlQUFPLFVBQUNZLEtBQUQsRUFBVztBQUNkLGdCQUFJQyxXQUFXZixhQUFhWSxNQUFiLEVBQXFCLEVBQUNQLE9BQU9TLEtBQVIsRUFBckIsRUFBcUNaLFFBQXJDLENBQWY7O0FBRUEsZ0JBQUlhLFdBQVcsQ0FBZixFQUFrQjtBQUNkQSwyQkFBVyxDQUFDQSxRQUFaOztBQUVBO0FBQ0Esb0JBQUlBLGFBQWEsQ0FBYixJQUFrQkEsYUFBYUgsT0FBT0ksTUFBMUMsRUFBa0Q7QUFDOUMsMkJBQU8sQ0FBUDtBQUNIOztBQUVELG9CQUFJQyxnQkFBZ0JMLE9BQU9HLFdBQVcsQ0FBbEIsRUFBcUJSLElBQXpDO0FBQ0Esb0JBQUlXLGVBQWVOLE9BQU9HLFFBQVAsRUFBaUJSLElBQXBDO0FBQ0EsdUJBQU8sQ0FBQ08sUUFBUUYsT0FBT0csV0FBVyxDQUFsQixFQUFxQlYsS0FBOUIsS0FBd0NhLGVBQWVELGFBQXZELElBQXdFLEdBQXhFLEdBQ0RBLGFBRE47QUFFSCxhQVpELE1BWU87QUFDSCx1QkFBT0wsT0FBT0csUUFBUCxFQUFpQlIsSUFBeEI7QUFDSDtBQUNKLFNBbEJEO0FBbUJILEtBdEJELE1Bc0JPO0FBQ0gsWUFBTVksUUFBUVYsc0JBQXNCSSxJQUF0QixDQUEyQlAsT0FBM0IsQ0FBZDs7QUFFQSxlQUFPLFVBQUNDLElBQUQsRUFBVTtBQUNiLGdCQUFJUSxXQUFXZixhQUFhbUIsS0FBYixFQUFvQixFQUFDWixVQUFELEVBQXBCLEVBQTRCRCxPQUE1QixDQUFmOztBQUVBLGdCQUFJUyxXQUFXLENBQWYsRUFBa0I7QUFDZEEsMkJBQVcsQ0FBQ0EsUUFBWjs7QUFFQTtBQUNBLG9CQUFJQSxhQUFhLENBQWIsSUFBa0JBLGFBQWFJLE1BQU1ILE1BQXpDLEVBQWlEO0FBQzdDLDJCQUFPLENBQVA7QUFDSDs7QUFFRCxvQkFBSUMsZ0JBQWdCRSxNQUFNSixXQUFXLENBQWpCLEVBQW9CUixJQUF4QztBQUNBLG9CQUFJVyxlQUFlQyxNQUFNSixRQUFOLEVBQWdCUixJQUFuQztBQUNBLHVCQUFPLE9BQU9BLE9BQU9VLGFBQWQsS0FBZ0NDLGVBQWVELGFBQS9DLElBQ0RFLE1BQU1KLFdBQVcsQ0FBakIsRUFBb0JWLEtBRDFCO0FBRUgsYUFaRCxNQVlPO0FBQ0gsdUJBQU9jLE1BQU1KLFFBQU4sRUFBZ0JWLEtBQXZCO0FBQ0g7QUFDSixTQWxCRDtBQW1CSDtBQUNKOztBQUVEZSxPQUFPQyxPQUFQLEdBQWlCYix3QkFBakIiLCJmaWxlIjoia292YXRzQ29udmVyc2lvbkZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYmluYXJ5U2VhcmNoID0gcmVxdWlyZSgnYmluYXJ5LXNlYXJjaCcpO1xuY29uc3QgYXNjVmFsdWUgPSAoYSwgYikgPT4gKGEudmFsdWUgLSBiLnZhbHVlKTtcbmNvbnN0IGFzY1RpbWUgPSAoYSwgYikgPT4gKGEudGltZSAtIGIudGltZSk7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRvIGNvbnZlcnQgZnJvbSB0aW1lIHRvIEtvdmF0cyBvciBmcm9tIEtvdmF0cyB0byB0aW1lXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IGtvdmF0c0NvbnZlcnNpb25UYWJsZSAtIExpc3Qgb2YgdGltZS1rb3ZhdHMgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMgPSB7fV0gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnQgPSBmYWxzZV0gLSBUcnVlIGZvciBjb252ZXJ0IGZyb20gS292YXRzIHRvIHRpbWUsIGZhbHNlIG90aGVyd2lzZVxuICogQHJldHVybiB7ZnVuY3Rpb24obnVtYmVyKX0gLSBPbmUgcGFyYW1ldGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydCB0byBvbmUgZGltZW5zaW9uIHRvIHRoZSBvdGhlclxuICovXG5mdW5jdGlvbiBrb3ZhdHNDb252ZXJzaW9uRnVuY3Rpb24oa292YXRzQ29udmVyc2lvblRhYmxlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7cmV2ZXJ0ID0gZmFsc2V9ID0gb3B0aW9ucztcblxuICAgIGlmIChyZXZlcnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga292YXRzQ29udmVyc2lvblRhYmxlLnNvcnQoYXNjVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGJpbmFyeVNlYXJjaCh2YWx1ZXMsIHt2YWx1ZTogaW5kZXh9LCBhc2NWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IH5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBleHRyZW1lIGNhc2VzXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwIHx8IHBvc2l0aW9uID09PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBzbWFsbGVyQWxjYW5lID0gdmFsdWVzW3Bvc2l0aW9uIC0gMV0udGltZTtcbiAgICAgICAgICAgICAgICBsZXQgbGFyZ2VyQWxjYW5lID0gdmFsdWVzW3Bvc2l0aW9uXS50aW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiAoaW5kZXggLSB2YWx1ZXNbcG9zaXRpb24gLSAxXS52YWx1ZSkgKiAobGFyZ2VyQWxjYW5lIC0gc21hbGxlckFsY2FuZSkgLyAxMDBcbiAgICAgICAgICAgICAgICAgICAgKyBzbWFsbGVyQWxjYW5lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzW3Bvc2l0aW9uXS50aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpbWVzID0ga292YXRzQ29udmVyc2lvblRhYmxlLnNvcnQoYXNjVGltZSk7XG5cbiAgICAgICAgcmV0dXJuICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBiaW5hcnlTZWFyY2godGltZXMsIHt0aW1lfSwgYXNjVGltZSk7XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IH5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBleHRyZW1lIGNhc2VzXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwIHx8IHBvc2l0aW9uID09PSB0aW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHNtYWxsZXJBbGNhbmUgPSB0aW1lc1twb3NpdGlvbiAtIDFdLnRpbWU7XG4gICAgICAgICAgICAgICAgbGV0IGxhcmdlckFsY2FuZSA9IHRpbWVzW3Bvc2l0aW9uXS50aW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiAxMDAgKiAodGltZSAtIHNtYWxsZXJBbGNhbmUpIC8gKGxhcmdlckFsY2FuZSAtIHNtYWxsZXJBbGNhbmUpXG4gICAgICAgICAgICAgICAgICAgICsgdGltZXNbcG9zaXRpb24gLSAxXS52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVzW3Bvc2l0aW9uXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga292YXRzQ29udmVyc2lvbkZ1bmN0aW9uO1xuIl19

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Regression = __webpack_require__(185).NLR.PolynomialRegression;

/**
 * Aligns the time of the sample based on the regression with his reference value
 * @param {Array<object>} reference - Array of peaks, integrated mass spectra and weighted mass spectra for the reference chromatogram
 * @param {Array<object>} sample - Array of peaks, integrated mass spectra and weighted mass spectra for the sample chromatogram
 * @param {object} [options] - Options object
 * @param {boolean} [options.computeQuality = false] - Calculate the quality of the regression
 * @param {number} [options.polynomialDegree = 3] - Degree of the polynomial regression
 * @return {object} - The scaled spectra:
 * * `scaleRegression`: The regression function to make the regression
 * * `stringFormula`: Regression equation
 * * `r2`: R2 quality number
 * * `error`: Vector of the difference between the spected value and the actual shift value
 */
function scaleAlignment(reference, sample) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$computeQuali = options.computeQuality,
        computeQuality = _options$computeQuali === undefined ? false : _options$computeQuali,
        _options$polynomialDe = options.polynomialDegree,
        polynomialDegree = _options$polynomialDe === undefined ? 3 : _options$polynomialDe;

    var referenceTime = reference.map(function (val) {
        return val.x;
    });
    var sampleTime = sample.map(function (val) {
        return val.x;
    });

    var regression = new Regression(sampleTime, referenceTime, polynomialDegree, { computeQuality: computeQuality });

    var error = new Array(sample.length);
    for (var i = 0; i < sample.length; i++) {
        error[i] = reference[i].x - regression.predict(sample[i].x);
    }

    var ans = {
        scaleRegression: regression
    };

    if (computeQuality) {
        ans.r2 = regression.quality.r2;
        ans.error = error;
    }
    return ans;
}

module.exports = scaleAlignment;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY2FsZUFsaWdubWVudC5qcyJdLCJuYW1lcyI6WyJSZWdyZXNzaW9uIiwicmVxdWlyZSIsIk5MUiIsIlBvbHlub21pYWxSZWdyZXNzaW9uIiwic2NhbGVBbGlnbm1lbnQiLCJyZWZlcmVuY2UiLCJzYW1wbGUiLCJvcHRpb25zIiwiY29tcHV0ZVF1YWxpdHkiLCJwb2x5bm9taWFsRGVncmVlIiwicmVmZXJlbmNlVGltZSIsIm1hcCIsInZhbCIsIngiLCJzYW1wbGVUaW1lIiwicmVncmVzc2lvbiIsImVycm9yIiwiQXJyYXkiLCJsZW5ndGgiLCJpIiwicHJlZGljdCIsImFucyIsInNjYWxlUmVncmVzc2lvbiIsInIyIiwicXVhbGl0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixFQUF5QkMsR0FBekIsQ0FBNkJDLG9CQUFoRDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVNDLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DQyxNQUFuQyxFQUF5RDtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLGdDQUNFQSxPQURGLENBQzlDQyxjQUQ4QztBQUFBLFFBQzlDQSxjQUQ4Qyx5Q0FDN0IsS0FENkI7QUFBQSxnQ0FDRUQsT0FERixDQUN0QkUsZ0JBRHNCO0FBQUEsUUFDdEJBLGdCQURzQix5Q0FDSCxDQURHOztBQUVyRCxRQUFJQyxnQkFBZ0JMLFVBQVVNLEdBQVYsQ0FBYyxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsSUFBSUMsQ0FBYjtBQUFBLEtBQWQsQ0FBcEI7QUFDQSxRQUFJQyxhQUFhUixPQUFPSyxHQUFQLENBQVcsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLElBQUlDLENBQWI7QUFBQSxLQUFYLENBQWpCOztBQUVBLFFBQU1FLGFBQWEsSUFBSWYsVUFBSixDQUFlYyxVQUFmLEVBQTJCSixhQUEzQixFQUEwQ0QsZ0JBQTFDLEVBQTRELEVBQUNELGdCQUFnQkEsY0FBakIsRUFBNUQsQ0FBbkI7O0FBRUEsUUFBSVEsUUFBUSxJQUFJQyxLQUFKLENBQVVYLE9BQU9ZLE1BQWpCLENBQVo7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSWIsT0FBT1ksTUFBM0IsRUFBbUNDLEdBQW5DLEVBQXdDO0FBQ3BDSCxjQUFNRyxDQUFOLElBQVdkLFVBQVVjLENBQVYsRUFBYU4sQ0FBYixHQUFpQkUsV0FBV0ssT0FBWCxDQUFtQmQsT0FBT2EsQ0FBUCxFQUFVTixDQUE3QixDQUE1QjtBQUNIOztBQUVELFFBQUlRLE1BQU07QUFDTkMseUJBQWlCUDtBQURYLEtBQVY7O0FBSUEsUUFBSVAsY0FBSixFQUFvQjtBQUNoQmEsWUFBSUUsRUFBSixHQUFTUixXQUFXUyxPQUFYLENBQW1CRCxFQUE1QjtBQUNBRixZQUFJTCxLQUFKLEdBQVlBLEtBQVo7QUFDSDtBQUNELFdBQU9LLEdBQVA7QUFDSDs7QUFFREksT0FBT0MsT0FBUCxHQUFpQnRCLGNBQWpCIiwiZmlsZSI6InNjYWxlQWxpZ25tZW50LmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVncmVzc2lvbiA9IHJlcXVpcmUoJ21sLXJlZ3Jlc3Npb24nKS5OTFIuUG9seW5vbWlhbFJlZ3Jlc3Npb247XG5cbi8qKlxuICogQWxpZ25zIHRoZSB0aW1lIG9mIHRoZSBzYW1wbGUgYmFzZWQgb24gdGhlIHJlZ3Jlc3Npb24gd2l0aCBoaXMgcmVmZXJlbmNlIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHJlZmVyZW5jZSAtIEFycmF5IG9mIHBlYWtzLCBpbnRlZ3JhdGVkIG1hc3Mgc3BlY3RyYSBhbmQgd2VpZ2h0ZWQgbWFzcyBzcGVjdHJhIGZvciB0aGUgcmVmZXJlbmNlIGNocm9tYXRvZ3JhbVxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBzYW1wbGUgLSBBcnJheSBvZiBwZWFrcywgaW50ZWdyYXRlZCBtYXNzIHNwZWN0cmEgYW5kIHdlaWdodGVkIG1hc3Mgc3BlY3RyYSBmb3IgdGhlIHNhbXBsZSBjaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb21wdXRlUXVhbGl0eSA9IGZhbHNlXSAtIENhbGN1bGF0ZSB0aGUgcXVhbGl0eSBvZiB0aGUgcmVncmVzc2lvblxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBvbHlub21pYWxEZWdyZWUgPSAzXSAtIERlZ3JlZSBvZiB0aGUgcG9seW5vbWlhbCByZWdyZXNzaW9uXG4gKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIHNjYWxlZCBzcGVjdHJhOlxuICogKiBgc2NhbGVSZWdyZXNzaW9uYDogVGhlIHJlZ3Jlc3Npb24gZnVuY3Rpb24gdG8gbWFrZSB0aGUgcmVncmVzc2lvblxuICogKiBgc3RyaW5nRm9ybXVsYWA6IFJlZ3Jlc3Npb24gZXF1YXRpb25cbiAqICogYHIyYDogUjIgcXVhbGl0eSBudW1iZXJcbiAqICogYGVycm9yYDogVmVjdG9yIG9mIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHNwZWN0ZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2hpZnQgdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbGlnbm1lbnQocmVmZXJlbmNlLCBzYW1wbGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtjb21wdXRlUXVhbGl0eSA9IGZhbHNlLCBwb2x5bm9taWFsRGVncmVlID0gM30gPSBvcHRpb25zO1xuICAgIGxldCByZWZlcmVuY2VUaW1lID0gcmVmZXJlbmNlLm1hcCgodmFsKSA9PiB2YWwueCk7XG4gICAgbGV0IHNhbXBsZVRpbWUgPSBzYW1wbGUubWFwKCh2YWwpID0+IHZhbC54KTtcblxuICAgIGNvbnN0IHJlZ3Jlc3Npb24gPSBuZXcgUmVncmVzc2lvbihzYW1wbGVUaW1lLCByZWZlcmVuY2VUaW1lLCBwb2x5bm9taWFsRGVncmVlLCB7Y29tcHV0ZVF1YWxpdHk6IGNvbXB1dGVRdWFsaXR5fSk7XG5cbiAgICBsZXQgZXJyb3IgPSBuZXcgQXJyYXkoc2FtcGxlLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYW1wbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZXJyb3JbaV0gPSByZWZlcmVuY2VbaV0ueCAtIHJlZ3Jlc3Npb24ucHJlZGljdChzYW1wbGVbaV0ueCk7XG4gICAgfVxuXG4gICAgbGV0IGFucyA9IHtcbiAgICAgICAgc2NhbGVSZWdyZXNzaW9uOiByZWdyZXNzaW9uXG4gICAgfTtcblxuICAgIGlmIChjb21wdXRlUXVhbGl0eSkge1xuICAgICAgICBhbnMucjIgPSByZWdyZXNzaW9uLnF1YWxpdHkucjI7XG4gICAgICAgIGFucy5lcnJvciA9IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gYW5zO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjYWxlQWxpZ25tZW50O1xuIl19

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(55);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPeaks = __webpack_require__(29);
var massInPeaks = __webpack_require__(31);
var vectorify = __webpack_require__(54);
var cosine = __webpack_require__(51);

/**
 * Preprocessing task over the signals
 * @ignore
 * @param {Chromatogram} chromatography - Chromatogram to process
 * @param {object} [options] - Options object (same as spectraComparison)
 * @return {{peaks: Array<object>, integratedMs: Array<object>, vector: Array<object>}} - Array of peaks, integrated mass spectra and weighted mass spectra
 */
function preprocessing(chromatography, options) {
    // peak picking
    var peaks = getPeaks(chromatography, options);
    peaks = peaks.sort(function (a, b) {
        return a.index - b.index;
    });

    // integrate mass in the peaks
    var ms = chromatography.findSerieByName('ms').data;
    var integratedMs = massInPeaks(peaks, ms, options);
    var vector = vectorify(integratedMs, options);

    return {
        peaks: peaks,
        integratedMs: integratedMs,
        vector: vector
    };
}

var defaultOption = {
    thresholdFactor: 0,
    maxNumberPeaks: Number.MAX_VALUE,
    groupWidth: 0,
    heightFilter: 2,
    massPower: 3,
    intPower: 0.6,
    similarityThreshold: 0.7
};

/**
 * Returns the most similar peaks between two GC/MS and their similarities
 * @param {Chromatogram} chrom1 - First chromatogram
 * @param {Chromatogram} chrom2 - Second chromatogram
 * @param {object} [options] - Options object
 * @param {number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
 * @param {number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
 * @param {number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
 * @param {number} [options.heightFilter = 2] - Filter all objects that are bellow `heightFilter` times the median of the height
 * @param {number} [options.massPower = 3] - Power applied to the mass values
 * @param {number} [options.intPower = 0.6] - Power applied to the abundance values
 * @param {number} [options.similarityThreshold = 0.7] - Minimum similarity value to consider them similar
 * @return {object} - Most similar peaks and their similarities:
 * * `peaksFirst`: Array of peaks, integrated mass spectra and weighted mass spectra for the first chromatogram
 * * `peaksSecond`: Array of peaks, integrated mass spectra and weighted mass spectra for the second chromatogram
 * * `peaksSimilarity`: Array of similarities (number)
 */
function spectraComparison(chrom1, chrom2, options) {
    options = (0, _assign2.default)({}, defaultOption, options);

    // peak picking
    var reference = preprocessing(chrom1, options);
    var sample = preprocessing(chrom2, options);

    // similarity between MS
    var len = Math.max(sample.peaks.length, reference.peaks.length);
    var similarityPeaks = {
        chrom1: new Array(len),
        chrom2: new Array(len),
        similarity: new Array(len)
    };
    var similarLen = 0;

    // Similarity matrix
    for (var i = 0; i < sample.peaks.length; ++i) {
        var max = { similarity: -3 };
        var biggerCounter = 0;
        for (var j = 0; j < reference.peaks.length; ++j) {
            var sim = cosine(sample.vector[i].x, sample.vector[i].y, reference.vector[j].x, reference.vector[j].y);

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

    var duplicates = {};
    for (var _i = 0; _i < similarLen; ++_i) {
        if ({}.hasOwnProperty.call(duplicates, similarityPeaks.chrom1[_i].x)) {
            duplicates[similarityPeaks.chrom1[_i].x].push(_i);
        } else {
            duplicates[similarityPeaks.chrom1[_i].x] = [_i];
        }
    }

    var peaksChrom1 = [];
    var peaksChrom2 = [];
    var peaksSimilarity = [];
    for (var val in duplicates) {
        if (duplicates[val].length === 1) {
            peaksChrom1.push(similarityPeaks.chrom1[duplicates[val][0]]);
            peaksChrom2.push(similarityPeaks.chrom2[duplicates[val][0]]);
            peaksSimilarity.push(similarityPeaks.similarity[duplicates[val][0]]);
        }
    }

    return {
        peaksFirst: peaksChrom1,
        peaksSecond: peaksChrom2,
        peaksSimilarity: peaksSimilarity
    };
}

module.exports = spectraComparison;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGVjdHJhQ29tcGFyaXNvbi5qcyJdLCJuYW1lcyI6WyJnZXRQZWFrcyIsInJlcXVpcmUiLCJtYXNzSW5QZWFrcyIsInZlY3RvcmlmeSIsImNvc2luZSIsInByZXByb2Nlc3NpbmciLCJjaHJvbWF0b2dyYXBoeSIsIm9wdGlvbnMiLCJwZWFrcyIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwibXMiLCJmaW5kU2VyaWVCeU5hbWUiLCJkYXRhIiwiaW50ZWdyYXRlZE1zIiwidmVjdG9yIiwiZGVmYXVsdE9wdGlvbiIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiZ3JvdXBXaWR0aCIsImhlaWdodEZpbHRlciIsIm1hc3NQb3dlciIsImludFBvd2VyIiwic2ltaWxhcml0eVRocmVzaG9sZCIsInNwZWN0cmFDb21wYXJpc29uIiwiY2hyb20xIiwiY2hyb20yIiwicmVmZXJlbmNlIiwic2FtcGxlIiwibGVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsInNpbWlsYXJpdHlQZWFrcyIsIkFycmF5Iiwic2ltaWxhcml0eSIsInNpbWlsYXJMZW4iLCJpIiwiYmlnZ2VyQ291bnRlciIsImoiLCJzaW0iLCJ4IiwieSIsImR1cGxpY2F0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwdXNoIiwicGVha3NDaHJvbTEiLCJwZWFrc0Nocm9tMiIsInBlYWtzU2ltaWxhcml0eSIsInZhbCIsInBlYWtzRmlyc3QiLCJwZWFrc1NlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsWUFBUixDQUFqQjtBQUNBLElBQU1DLGNBQWNELFFBQVEsZUFBUixDQUFwQjtBQUNBLElBQU1FLFlBQVlGLFFBQVEsYUFBUixDQUFsQjtBQUNBLElBQU1HLFNBQVNILFFBQVEsVUFBUixDQUFmOztBQUVBOzs7Ozs7O0FBT0EsU0FBU0ksYUFBVCxDQUF1QkMsY0FBdkIsRUFBdUNDLE9BQXZDLEVBQWdEO0FBQzVDO0FBQ0EsUUFBSUMsUUFBUVIsU0FBU00sY0FBVCxFQUF5QkMsT0FBekIsQ0FBWjtBQUNBQyxZQUFRQSxNQUFNQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsRUFBRUUsS0FBRixHQUFVRCxFQUFFQyxLQUF0QjtBQUFBLEtBQVgsQ0FBUjs7QUFFQTtBQUNBLFFBQUlDLEtBQUtQLGVBQWVRLGVBQWYsQ0FBK0IsSUFBL0IsRUFBcUNDLElBQTlDO0FBQ0EsUUFBSUMsZUFBZWQsWUFBWU0sS0FBWixFQUFtQkssRUFBbkIsRUFBdUJOLE9BQXZCLENBQW5CO0FBQ0EsUUFBSVUsU0FBU2QsVUFBVWEsWUFBVixFQUF3QlQsT0FBeEIsQ0FBYjs7QUFFQSxXQUFPO0FBQ0hDLG9CQURHO0FBRUhRLGtDQUZHO0FBR0hDO0FBSEcsS0FBUDtBQUtIOztBQUVELElBQU1DLGdCQUFnQjtBQUNsQkMscUJBQWlCLENBREM7QUFFbEJDLG9CQUFnQkMsT0FBT0MsU0FGTDtBQUdsQkMsZ0JBQVksQ0FITTtBQUlsQkMsa0JBQWMsQ0FKSTtBQUtsQkMsZUFBVyxDQUxPO0FBTWxCQyxjQUFVLEdBTlE7QUFPbEJDLHlCQUFxQjtBQVBILENBQXRCOztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxTQUFTQyxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBbUNDLE1BQW5DLEVBQTJDdkIsT0FBM0MsRUFBb0Q7QUFDaERBLGNBQVUsc0JBQWMsRUFBZCxFQUFrQlcsYUFBbEIsRUFBaUNYLE9BQWpDLENBQVY7O0FBRUE7QUFDQSxRQUFJd0IsWUFBWTFCLGNBQWN3QixNQUFkLEVBQXNCdEIsT0FBdEIsQ0FBaEI7QUFDQSxRQUFJeUIsU0FBUzNCLGNBQWN5QixNQUFkLEVBQXNCdkIsT0FBdEIsQ0FBYjs7QUFFQTtBQUNBLFFBQU0wQixNQUFNQyxLQUFLQyxHQUFMLENBQVNILE9BQU94QixLQUFQLENBQWE0QixNQUF0QixFQUE4QkwsVUFBVXZCLEtBQVYsQ0FBZ0I0QixNQUE5QyxDQUFaO0FBQ0EsUUFBSUMsa0JBQWtCO0FBQ2xCUixnQkFBUSxJQUFJUyxLQUFKLENBQVVMLEdBQVYsQ0FEVTtBQUVsQkgsZ0JBQVEsSUFBSVEsS0FBSixDQUFVTCxHQUFWLENBRlU7QUFHbEJNLG9CQUFZLElBQUlELEtBQUosQ0FBVUwsR0FBVjtBQUhNLEtBQXRCO0FBS0EsUUFBSU8sYUFBYSxDQUFqQjs7QUFFQTtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVCxPQUFPeEIsS0FBUCxDQUFhNEIsTUFBakMsRUFBeUMsRUFBRUssQ0FBM0MsRUFBOEM7QUFDMUMsWUFBSU4sTUFBTSxFQUFDSSxZQUFZLENBQUMsQ0FBZCxFQUFWO0FBQ0EsWUFBSUcsZ0JBQWdCLENBQXBCO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlaLFVBQVV2QixLQUFWLENBQWdCNEIsTUFBcEMsRUFBNEMsRUFBRU8sQ0FBOUMsRUFBaUQ7QUFDN0MsZ0JBQUlDLE1BQU14QyxPQUFPNEIsT0FBT2YsTUFBUCxDQUFjd0IsQ0FBZCxFQUFpQkksQ0FBeEIsRUFBMkJiLE9BQU9mLE1BQVAsQ0FBY3dCLENBQWQsRUFBaUJLLENBQTVDLEVBQStDZixVQUFVZCxNQUFWLENBQWlCMEIsQ0FBakIsRUFBb0JFLENBQW5FLEVBQXNFZCxVQUFVZCxNQUFWLENBQWlCMEIsQ0FBakIsRUFBb0JHLENBQTFGLENBQVY7O0FBRUEsZ0JBQUlGLE1BQU1yQyxRQUFRb0IsbUJBQWQsSUFBcUNpQixNQUFNVCxJQUFJSSxVQUFuRCxFQUErRDtBQUMzREosc0JBQU07QUFDRkksZ0NBQVlLLEdBRFY7QUFFRmYsNEJBQVFFLFVBQVV2QixLQUFWLENBQWdCbUMsQ0FBaEIsQ0FGTjtBQUdGYiw0QkFBUUUsT0FBT3hCLEtBQVAsQ0FBYWlDLENBQWI7QUFITixpQkFBTjtBQUtIO0FBQ0QsZ0JBQUlHLE1BQU1yQyxRQUFRb0IsbUJBQWxCLEVBQXVDO0FBQ25DLGtCQUFFZSxhQUFGO0FBQ0g7QUFDSjtBQUNELFlBQUlBLGtCQUFrQixDQUF0QixFQUF5QjtBQUNyQkwsNEJBQWdCUixNQUFoQixDQUF1QlcsVUFBdkIsSUFBcUNMLElBQUlOLE1BQXpDO0FBQ0FRLDRCQUFnQlAsTUFBaEIsQ0FBdUJVLFVBQXZCLElBQXFDTCxJQUFJTCxNQUF6QztBQUNBTyw0QkFBZ0JFLFVBQWhCLENBQTJCQyxZQUEzQixJQUEyQ0wsSUFBSUksVUFBL0M7QUFDSDtBQUNKO0FBQ0RGLG9CQUFnQlIsTUFBaEIsQ0FBdUJPLE1BQXZCLEdBQWdDSSxVQUFoQztBQUNBSCxvQkFBZ0JQLE1BQWhCLENBQXVCTSxNQUF2QixHQUFnQ0ksVUFBaEM7O0FBRUEsUUFBSU8sYUFBYSxFQUFqQjtBQUNBLFNBQUssSUFBSU4sS0FBSSxDQUFiLEVBQWdCQSxLQUFJRCxVQUFwQixFQUFnQyxFQUFFQyxFQUFsQyxFQUFxQztBQUNqQyxZQUFJLEdBQUdPLGNBQUgsQ0FBa0JDLElBQWxCLENBQXVCRixVQUF2QixFQUFtQ1YsZ0JBQWdCUixNQUFoQixDQUF1QlksRUFBdkIsRUFBMEJJLENBQTdELENBQUosRUFBcUU7QUFDakVFLHVCQUFXVixnQkFBZ0JSLE1BQWhCLENBQXVCWSxFQUF2QixFQUEwQkksQ0FBckMsRUFBd0NLLElBQXhDLENBQTZDVCxFQUE3QztBQUNILFNBRkQsTUFFTztBQUNITSx1QkFBV1YsZ0JBQWdCUixNQUFoQixDQUF1QlksRUFBdkIsRUFBMEJJLENBQXJDLElBQTBDLENBQUNKLEVBQUQsQ0FBMUM7QUFDSDtBQUNKOztBQUVELFFBQUlVLGNBQWMsRUFBbEI7QUFDQSxRQUFJQyxjQUFjLEVBQWxCO0FBQ0EsUUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0EsU0FBSyxJQUFJQyxHQUFULElBQWdCUCxVQUFoQixFQUE0QjtBQUN4QixZQUFJQSxXQUFXTyxHQUFYLEVBQWdCbEIsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUJlLHdCQUFZRCxJQUFaLENBQWlCYixnQkFBZ0JSLE1BQWhCLENBQXVCa0IsV0FBV08sR0FBWCxFQUFnQixDQUFoQixDQUF2QixDQUFqQjtBQUNBRix3QkFBWUYsSUFBWixDQUFpQmIsZ0JBQWdCUCxNQUFoQixDQUF1QmlCLFdBQVdPLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBdkIsQ0FBakI7QUFDQUQsNEJBQWdCSCxJQUFoQixDQUFxQmIsZ0JBQWdCRSxVQUFoQixDQUEyQlEsV0FBV08sR0FBWCxFQUFnQixDQUFoQixDQUEzQixDQUFyQjtBQUNIO0FBQ0o7O0FBRUQsV0FBTztBQUNIQyxvQkFBWUosV0FEVDtBQUVISyxxQkFBYUosV0FGVjtBQUdIQyx5QkFBaUJBO0FBSGQsS0FBUDtBQUtIOztBQUVESSxPQUFPQyxPQUFQLEdBQWlCOUIsaUJBQWpCIiwiZmlsZSI6InNwZWN0cmFDb21wYXJpc29uLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ2V0UGVha3MgPSByZXF1aXJlKCcuL2dldFBlYWtzJyk7XG5jb25zdCBtYXNzSW5QZWFrcyA9IHJlcXVpcmUoJy4vbWFzc0luUGVha3MnKTtcbmNvbnN0IHZlY3RvcmlmeSA9IHJlcXVpcmUoJy4vdmVjdG9yaWZ5Jyk7XG5jb25zdCBjb3NpbmUgPSByZXF1aXJlKCcuL2Nvc2luZScpO1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmcgdGFzayBvdmVyIHRoZSBzaWduYWxzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge0Nocm9tYXRvZ3JhbX0gY2hyb21hdG9ncmFwaHkgLSBDaHJvbWF0b2dyYW0gdG8gcHJvY2Vzc1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgb2JqZWN0IChzYW1lIGFzIHNwZWN0cmFDb21wYXJpc29uKVxuICogQHJldHVybiB7e3BlYWtzOiBBcnJheTxvYmplY3Q+LCBpbnRlZ3JhdGVkTXM6IEFycmF5PG9iamVjdD4sIHZlY3RvcjogQXJyYXk8b2JqZWN0Pn19IC0gQXJyYXkgb2YgcGVha3MsIGludGVncmF0ZWQgbWFzcyBzcGVjdHJhIGFuZCB3ZWlnaHRlZCBtYXNzIHNwZWN0cmFcbiAqL1xuZnVuY3Rpb24gcHJlcHJvY2Vzc2luZyhjaHJvbWF0b2dyYXBoeSwgb3B0aW9ucykge1xuICAgIC8vIHBlYWsgcGlja2luZ1xuICAgIGxldCBwZWFrcyA9IGdldFBlYWtzKGNocm9tYXRvZ3JhcGh5LCBvcHRpb25zKTtcbiAgICBwZWFrcyA9IHBlYWtzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuICAgIC8vIGludGVncmF0ZSBtYXNzIGluIHRoZSBwZWFrc1xuICAgIGxldCBtcyA9IGNocm9tYXRvZ3JhcGh5LmZpbmRTZXJpZUJ5TmFtZSgnbXMnKS5kYXRhO1xuICAgIGxldCBpbnRlZ3JhdGVkTXMgPSBtYXNzSW5QZWFrcyhwZWFrcywgbXMsIG9wdGlvbnMpO1xuICAgIGxldCB2ZWN0b3IgPSB2ZWN0b3JpZnkoaW50ZWdyYXRlZE1zLCBvcHRpb25zKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBlYWtzLFxuICAgICAgICBpbnRlZ3JhdGVkTXMsXG4gICAgICAgIHZlY3RvclxuICAgIH07XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb24gPSB7XG4gICAgdGhyZXNob2xkRmFjdG9yOiAwLFxuICAgIG1heE51bWJlclBlYWtzOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgIGdyb3VwV2lkdGg6IDAsXG4gICAgaGVpZ2h0RmlsdGVyOiAyLFxuICAgIG1hc3NQb3dlcjogMyxcbiAgICBpbnRQb3dlcjogMC42LFxuICAgIHNpbWlsYXJpdHlUaHJlc2hvbGQ6IDAuN1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtb3N0IHNpbWlsYXIgcGVha3MgYmV0d2VlbiB0d28gR0MvTVMgYW5kIHRoZWlyIHNpbWlsYXJpdGllc1xuICogQHBhcmFtIHtDaHJvbWF0b2dyYW19IGNocm9tMSAtIEZpcnN0IGNocm9tYXRvZ3JhbVxuICogQHBhcmFtIHtDaHJvbWF0b2dyYW19IGNocm9tMiAtIFNlY29uZCBjaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5oZWlnaHRGaWx0ZXIgPSAyXSAtIEZpbHRlciBhbGwgb2JqZWN0cyB0aGF0IGFyZSBiZWxsb3cgYGhlaWdodEZpbHRlcmAgdGltZXMgdGhlIG1lZGlhbiBvZiB0aGUgaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWFzc1Bvd2VyID0gM10gLSBQb3dlciBhcHBsaWVkIHRvIHRoZSBtYXNzIHZhbHVlc1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmludFBvd2VyID0gMC42XSAtIFBvd2VyIGFwcGxpZWQgdG8gdGhlIGFidW5kYW5jZSB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zaW1pbGFyaXR5VGhyZXNob2xkID0gMC43XSAtIE1pbmltdW0gc2ltaWxhcml0eSB2YWx1ZSB0byBjb25zaWRlciB0aGVtIHNpbWlsYXJcbiAqIEByZXR1cm4ge29iamVjdH0gLSBNb3N0IHNpbWlsYXIgcGVha3MgYW5kIHRoZWlyIHNpbWlsYXJpdGllczpcbiAqICogYHBlYWtzRmlyc3RgOiBBcnJheSBvZiBwZWFrcywgaW50ZWdyYXRlZCBtYXNzIHNwZWN0cmEgYW5kIHdlaWdodGVkIG1hc3Mgc3BlY3RyYSBmb3IgdGhlIGZpcnN0IGNocm9tYXRvZ3JhbVxuICogKiBgcGVha3NTZWNvbmRgOiBBcnJheSBvZiBwZWFrcywgaW50ZWdyYXRlZCBtYXNzIHNwZWN0cmEgYW5kIHdlaWdodGVkIG1hc3Mgc3BlY3RyYSBmb3IgdGhlIHNlY29uZCBjaHJvbWF0b2dyYW1cbiAqICogYHBlYWtzU2ltaWxhcml0eWA6IEFycmF5IG9mIHNpbWlsYXJpdGllcyAobnVtYmVyKVxuICovXG5mdW5jdGlvbiBzcGVjdHJhQ29tcGFyaXNvbihjaHJvbTEsIGNocm9tMiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9uLCBvcHRpb25zKTtcblxuICAgIC8vIHBlYWsgcGlja2luZ1xuICAgIGxldCByZWZlcmVuY2UgPSBwcmVwcm9jZXNzaW5nKGNocm9tMSwgb3B0aW9ucyk7XG4gICAgbGV0IHNhbXBsZSA9IHByZXByb2Nlc3NpbmcoY2hyb20yLCBvcHRpb25zKTtcblxuICAgIC8vIHNpbWlsYXJpdHkgYmV0d2VlbiBNU1xuICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KHNhbXBsZS5wZWFrcy5sZW5ndGgsIHJlZmVyZW5jZS5wZWFrcy5sZW5ndGgpO1xuICAgIGxldCBzaW1pbGFyaXR5UGVha3MgPSB7XG4gICAgICAgIGNocm9tMTogbmV3IEFycmF5KGxlbiksXG4gICAgICAgIGNocm9tMjogbmV3IEFycmF5KGxlbiksXG4gICAgICAgIHNpbWlsYXJpdHk6IG5ldyBBcnJheShsZW4pXG4gICAgfTtcbiAgICBsZXQgc2ltaWxhckxlbiA9IDA7XG5cbiAgICAvLyBTaW1pbGFyaXR5IG1hdHJpeFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlLnBlYWtzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBtYXggPSB7c2ltaWxhcml0eTogLTN9O1xuICAgICAgICBsZXQgYmlnZ2VyQ291bnRlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVmZXJlbmNlLnBlYWtzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBsZXQgc2ltID0gY29zaW5lKHNhbXBsZS52ZWN0b3JbaV0ueCwgc2FtcGxlLnZlY3RvcltpXS55LCByZWZlcmVuY2UudmVjdG9yW2pdLngsIHJlZmVyZW5jZS52ZWN0b3Jbal0ueSk7XG5cbiAgICAgICAgICAgIGlmIChzaW0gPiBvcHRpb25zLnNpbWlsYXJpdHlUaHJlc2hvbGQgJiYgc2ltID4gbWF4LnNpbWlsYXJpdHkpIHtcbiAgICAgICAgICAgICAgICBtYXggPSB7XG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IHNpbSxcbiAgICAgICAgICAgICAgICAgICAgY2hyb20xOiByZWZlcmVuY2UucGVha3Nbal0sXG4gICAgICAgICAgICAgICAgICAgIGNocm9tMjogc2FtcGxlLnBlYWtzW2ldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaW0gPiBvcHRpb25zLnNpbWlsYXJpdHlUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICArK2JpZ2dlckNvdW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpZ2dlckNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgIHNpbWlsYXJpdHlQZWFrcy5jaHJvbTFbc2ltaWxhckxlbl0gPSBtYXguY2hyb20xO1xuICAgICAgICAgICAgc2ltaWxhcml0eVBlYWtzLmNocm9tMltzaW1pbGFyTGVuXSA9IG1heC5jaHJvbTI7XG4gICAgICAgICAgICBzaW1pbGFyaXR5UGVha3Muc2ltaWxhcml0eVtzaW1pbGFyTGVuKytdID0gbWF4LnNpbWlsYXJpdHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2ltaWxhcml0eVBlYWtzLmNocm9tMS5sZW5ndGggPSBzaW1pbGFyTGVuO1xuICAgIHNpbWlsYXJpdHlQZWFrcy5jaHJvbTIubGVuZ3RoID0gc2ltaWxhckxlbjtcblxuICAgIGxldCBkdXBsaWNhdGVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW1pbGFyTGVuOyArK2kpIHtcbiAgICAgICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoZHVwbGljYXRlcywgc2ltaWxhcml0eVBlYWtzLmNocm9tMVtpXS54KSkge1xuICAgICAgICAgICAgZHVwbGljYXRlc1tzaW1pbGFyaXR5UGVha3MuY2hyb20xW2ldLnhdLnB1c2goaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdXBsaWNhdGVzW3NpbWlsYXJpdHlQZWFrcy5jaHJvbTFbaV0ueF0gPSBbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGVha3NDaHJvbTEgPSBbXTtcbiAgICBsZXQgcGVha3NDaHJvbTIgPSBbXTtcbiAgICBsZXQgcGVha3NTaW1pbGFyaXR5ID0gW107XG4gICAgZm9yIChsZXQgdmFsIGluIGR1cGxpY2F0ZXMpIHtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZXNbdmFsXS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBlYWtzQ2hyb20xLnB1c2goc2ltaWxhcml0eVBlYWtzLmNocm9tMVtkdXBsaWNhdGVzW3ZhbF1bMF1dKTtcbiAgICAgICAgICAgIHBlYWtzQ2hyb20yLnB1c2goc2ltaWxhcml0eVBlYWtzLmNocm9tMltkdXBsaWNhdGVzW3ZhbF1bMF1dKTtcbiAgICAgICAgICAgIHBlYWtzU2ltaWxhcml0eS5wdXNoKHNpbWlsYXJpdHlQZWFrcy5zaW1pbGFyaXR5W2R1cGxpY2F0ZXNbdmFsXVswXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGVha3NGaXJzdDogcGVha3NDaHJvbTEsXG4gICAgICAgIHBlYWtzU2Vjb25kOiBwZWFrc0Nocm9tMixcbiAgICAgICAgcGVha3NTaW1pbGFyaXR5OiBwZWFrc1NpbWlsYXJpdHksXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzcGVjdHJhQ29tcGFyaXNvbjtcbiJdfQ==

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(86);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(89);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(88);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = function(haystack, needle, comparator, low, high) {
  var mid, cmp;

  if(low === undefined)
    low = 0;

  else {
    low = low|0;
    if(low < 0 || low >= haystack.length)
      throw new RangeError("invalid lower bound");
  }

  if(high === undefined)
    high = haystack.length - 1;

  else {
    high = high|0;
    if(high < low || high >= haystack.length)
      throw new RangeError("invalid upper bound");
  }

  while(low <= high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle, mid, haystack);

    /* Too low. */
    if(cmp < 0.0)
      low  = mid + 1;

    /* Too high. */
    else if(cmp > 0.0)
      high = mid - 1;

    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  return ~low;
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * chemcalc - Analyse molecular formula
 * @version v3.3.2
 * @date 2017-01-09T13:16:24.258Z
 * @link http://www.chemcalc.org
 * @license BSD
*/
(function (root) {
    'use strict';

    function getExports($wnd) {

        var $doc = $wnd.document;
        var $gwt = {};
        var navigator = {
            userAgent: 'webkit'
        };

        function noop(){}

        var __gwtModuleFunction = noop;
        __gwtModuleFunction.__moduleStartupDone = noop;
        var $sendStats = noop;
        var $moduleName, $moduleBase;

        // Start GWT code 
function Hh(){}
function Dh(){}
function Kh(){}
function eb(){}
function mc(){}
function tc(){}
function cc(){}
function Qc(){}
function pq(){}
function ss(){}
function cu(){}
function Pv(){}
function Ih(){Jh()}
function Ip(){tp(this)}
function xq(){pn(this)}
function Pi(a){this.a=a}
function Ac(a){this.a=a}
function Jc(a){this.a=a}
function Uc(a){this.a=a}
function ed(a){this.a=a}
function Lh(a){this.a=a}
function Dn(a){this.a=a}
function po(a){this.a=a}
function vo(a){this.a=a}
function zo(a){this.a=a}
function Eo(a){this.a=a}
function co(a){this.c=a}
function bq(a){this.c=a}
function ep(a){this.b=a}
function jp(a){this.a=a}
function pp(a){this.a=a}
function $s(a){this.a=a}
function Cv(a){this.a=a}
function zc(){this.a=[]}
function Fc(a){return a.a}
function Mc(a){return a.a}
function Zc(a){return a.a}
function kd(a){return a.a}
function zd(a){return a.a}
function rd(){return null}
function Tc(){return null}
function hc(a){gc();fc.u(a)}
function km(){gm();hm(this)}
function cj(){zb.call(this)}
function Uj(){zb.call(this)}
function Oh(){zb.call(this)}
function Ni(){zb.call(this)}
function uq(){zb.call(this)}
function vq(){zb.call(this)}
function cr(){zb.call(this)}
function Fr(){gr.call(this)}
function au(){$r.call(this)}
function Qh(){Oh.call(this)}
function Kq(){Kq=Dh;Jq=Mq()}
function oq(){oq=Dh;nq=new pq}
function Mv(){Mv=Dh;Lv=new xq}
function Db(){Db=Dh;Cb=new eb}
function _b(){_b=Dh;$b=new cc}
function Pc(){Pc=Dh;Oc=new Qc}
function ew(){this.a=new zc}
function kw(){this.a=new dd}
function gr(){this.a=new Ip}
function Ls(){this.g=new $r}
function nt(a){ht(a);return a}
function pt(a){return isNaN(a)}
function Jr(a){a.c=null;a.d=0}
function Ab(a){yb.call(this,a)}
function dj(a){Bb.call(this,a)}
function ej(a){Ab.call(this,a)}
function Nc(a){Ab.call(this,a)}
function Nh(a){Ab.call(this,a)}
function Ph(a){Ab.call(this,a)}
function Mi(a){Ab.call(this,a)}
function Vj(a){Ab.call(this,a)}
function gj(a){Mi.call(this,a)}
function Pj(a){Ph.call(this,a)}
function Rh(a){Ph.call(this,a)}
function _s(a){$s.call(this,a)}
function Wu(a){Ms.call(this,a)}
function hv(a){yb.call(this,a)}
function dd(){ed.call(this,{})}
function Fj(){Lh.call(this,'')}
function Mj(){Lh.call(this,'')}
function Nj(){Lh.call(this,'')}
function xh(){vh==null&&(vh=[])}
function wt(){wt=Dh;tt={};vt={}}
function Rb(){Rb=Dh;!!(gc(),fc)}
function Sr(a){return !!a&&a.b}
function $i(a){return a<0?-a:a}
function _i(a,b){return a>b?a:b}
function aj(a,b){return a<b?a:b}
function Ad(a,b){return ni(a,b)}
function Xo(a,b){return !!a.W(b)}
function eh(a,b){return $g(a,b)>0}
function gh(a,b){return $g(a,b)<0}
function od(a){return new Uc(a)}
function qd(a){return new td(a)}
function Zo(a){return Yo(a,Mr(a))}
function Tm(a){return !a?null:a.c}
function qn(a){return a.a.c+a.b.c}
function is(a){return a.b=ao(a.a)}
function ie(a){return a.l|a.m<<22}
function qu(a){return a.a.e*a.a.c}
function ru(a){return a.a.e*a.a.d}
function fr(a,b){return vp(a.a,b)}
function bh(a,b){return $g(a,b)==0}
function hh(a,b){return $g(a,b)<=0}
function nd(a){return Ic(),a?Hc:Gc}
function fi(a){ei(a);return a.k}
function Oq(){Kq();return new Jq}
function Qq(a,b){return a.a.get(b)}
function Fp(a){kq(a.a,a.a.length)}
function Ms(a){this.g=new _r(a)}
function Ei(a,b){this.a=a;this.b=b}
function Jo(a,b){this.c=a;this.d=b}
function $l(a,b){Ei.call(this,a,b)}
function zs(a,b){Ei.call(this,a,b)}
function Qo(a,b){Jo.call(this,a,b)}
function $r(){_r.call(this,null)}
function Th(){Th=Dh;Sh=(Th(),false)}
function oj(a,b){return ht(a),a===b}
function Oi(a,b){return Qi(a.a,b.a)}
function xe(a){return typeof a===rw}
function ye(a){return typeof a===sw}
function Be(a){return typeof a===tw}
function fh(a){return typeof a===sw}
function Um(a){return !a?null:a.T()}
function Yb(a){$wnd.clearTimeout(a)}
function Ys(a,b,c){a.splice(b,c)}
function Ws(a,b,c){a.splice(b,0,c)}
function Wk(a){Dk();Xk.call(this,a)}
function ct(){$s.call(this,'UTF-8')}
function Zb(){Ob!=0&&(Ob=0);Qb=-1}
function Dq(a){this.a=Oq();this.b=a}
function Tq(a){this.a=Oq();this.b=a}
function Ro(a){Jo.call(this,a.c,a.d)}
function tp(a){a.a=Ed(rf,pw,1,0,5,1)}
function qv(a){a.b=a.d.b;a.c=new au}
function Ej(a,b){a.a+=''+b;return a}
function Ij(a,b){a.a+=''+b;return a}
function Jj(a,b){a.a+=''+b;return a}
function Kj(a,b){a.a+=''+b;return a}
function Er(a,b){vp(a.a,b);return b}
function qj(a,b){return a.indexOf(b)}
function _n(a){return a.a<a.c.size()}
function Ld(a){return Md(a.l,a.m,a.h)}
function Ci(a){return oj(sw,typeof a)}
function rj(a){return oj(tw,typeof a)}
function Ce(a){return a==null?null:a}
function er(a){return a!=null?kb(a):0}
function Qi(a,b){return a<b?-1:a>b?1:0}
function lj(a,b){return a.charCodeAt(b)}
function ot(a,b){return a==b?0:a<b?-1:1}
function st(a){return a.$H||(a.$H=++rt)}
function Xg(a){return a.backingJsObject}
function Vd(a){return a.l+a.m*Lw+a.h*Mw}
function Md(a,b,c){return {l:a,m:b,h:c}}
function Ds(){zs.call(this,'Head',1)}
function Is(){zs.call(this,'Tail',3)}
function Fs(){zs.call(this,'Range',2)}
function Gj(a){Lh.call(this,(ht(a),a))}
function Oj(a){Lh.call(this,(ht(a),a))}
function mb(a){a.g=Ed(tf,pw,33,0,0,1)}
function ft(a){if(!a){throw Xg(new cr)}}
function lt(a){if(!a){throw Xg(new Ni)}}
function Sj(){Sj=Dh;Qj=new Kh;Rj=new Kh}
function tq(a){var b;b=a[$w]|0;a[$w]=b+1}
function ps(a){this.a=a;ep.call(this,a)}
function ks(a){ls.call(this,a,(ys(),us))}
function zb(){mb(this);nb(this);this.t()}
function sj(a,b){return a.lastIndexOf(b)}
function yj(a,b,c){return a.substr(b,c-b)}
function we(a,b){return a!=null&&te(a,b)}
function ai(a){return a>=56320&&a<=57343}
function Gp(a){return Us(a.a,a.a.length)}
function Uh(a){Th();return oj(rw,typeof a)}
function Vh(a,b){Th();return a==b?0:a?1:-1}
function kc(a){gc();return parseInt(a)||-1}
function mk(a){this.e=5;gk(this,(ht(a),a))}
function yv(a,b){this.d=a;qv(this);this.c=b}
function Hu(a,b,c){Iu.call(this,a,b,c,true)}
function hw(a,b,c){bd(a.a,b,c);return a}
function Io(a,b){var c;c=a.d;a.d=b;return c}
function js(a){bo(a.a);Vr(a.c,a.b);a.b=null}
function ei(a){if(a.k!=null){return}ri(a)}
function ue(a){return String.fromCharCode(a)}
function gn(a,b){return hn(b,a.b)||hn(b,a.a)}
function Ap(a,b){return Bp(a,b,a.a.length-1)}
function Ae(a,b){return a&&b&&a instanceof b}
function tj(a,b,c){return a.lastIndexOf(b,c)}
function Sb(a,b,c){return a.apply(b,c);var d}
function Uu(a,b,c){Vu.call(this,a,b,c,1,true)}
function lu(a,b,c,d){ku.call(this,a,0,b,c,d)}
function $q(a,b,c){this.a=a;this.b=b;this.c=c}
function kk(a){this.f=a;this.e=5;this.a=nk(a)}
function kq(a,b){et(b,a.length);iq(a,0,b,null)}
function vp(a,b){a.a[a.a.length]=b;return true}
function ji(a){var b;b=ii(a);vi(a,b);return b}
function Zi(){Zi=Dh;Yi=Ed(mf,pw,22,256,0,1)}
function mj(a,b){return ot((ht(a),a),(ht(b),b))}
function mh(a,b){return _g(de(fh(a)?qh(a):a,b))}
function nh(a,b){return _g(ee(fh(a)?qh(a):a,b))}
function oh(a,b){return _g(fe(fh(a)?qh(a):a,b))}
function xj(a,b){return a.substr(b,a.length-b)}
function Xs(a,b,c){Vs(c,0,a,b,c.length,false)}
function up(a,b,c){jt(b,a.a.length);Ws(a.a,b,c)}
function yp(a,b){gt(b,a.a.length);return a.a[b]}
function dw(a,b){xc(a.a,a.a.a.length,b);return a}
function dt(a,b){if(!a){throw Xg(new Mi(b))}}
function lr(a,b){if(a<0||a>=b){throw Xg(new Qh)}}
function it(a,b){if(a==null){throw Xg(new ej(b))}}
function zt(){if(ut==256){tt=vt;vt={};ut=0}++ut}
function qt(b,c,d){try{b[c]=d}catch(a){}}
function Cd(a,b,c,d,e,f){return Dd(a,b,c,d,e,0,f)}
function th(a){if(fh(a)){return ''+a}return je(a)}
function sh(a){if(fh(a)){return a|0}return ie(a)}
function cp(a){if(!a){throw Xg(new cr)}return a.c}
function li(a){var b;b=ii(a);b.j=a;b.e=1;return b}
function Pq(a,b){return !(a.a.get(b)===undefined)}
function Ks(a,b){return Tr(a.g,b,(Th(),Sh))==null}
function Gd(a){return Array.isArray(a)&&a.bb===Hh}
function ve(a){return !Array.isArray(a)&&a.bb===Hh}
function be(a){return Md(~a.l&Iw,~a.m&Iw,~a.h&Jw)}
function Yd(a,b){return Md(a.l&b.l,a.m&b.m,a.h&b.h)}
function ce(a,b){return Md(a.l|b.l,a.m|b.m,a.h|b.h)}
function ke(a,b){return Md(a.l^b.l,a.m^b.m,a.h^b.h)}
function fn(a,b){return Be(b)?ln(a,b):!!Aq(a.a,b)}
function jn(a,b){return Be(b)?kn(a,b):Um(Aq(a.a,b))}
function Dt(a){return a.a!=0?'['+a.a+a.i+']':a.i}
function _r(a){this.c=null;this.b=(oq(),!a?nq:a)}
function yb(a){mb(this);this.f=a;nb(this);this.t()}
function Tk(a,b,c){Dk();this.e=a;this.d=b;this.a=c}
function xv(a,b){b<1.0E-10&&(b=1.0E-10);a.b=b}
function wv(a,b,c,d){Rt(a.c,d);Qt(a.c,c);Vt(a.c,b)}
function xc(a,b,c){var d;d=wc(a,b);yc(a,b,c);return d}
function bd(a,b,c){var d;d=_c(a,b);cd(a,b,c);return d}
function Ur(a,b){var c;c=new ss;Wr(a,b,c);return c.d}
function Us(a,b){var c;c=a.slice(0,b);return Id(c,a)}
function dc(a,b){!a&&(a=[]);a[a.length]=b;return a}
function Hj(a,b){a.a+=String.fromCharCode(b);return a}
function Aj(a){return String.fromCharCode.apply(null,a)}
function $h(a){return /\d/.test(String.fromCharCode(a))}
function wq(a,b){return Ce(a)===Ce(b)||a!=null&&gb(a,b)}
function dr(a,b){return Ce(a)===Ce(b)||a!=null&&gb(a,b)}
function mn(a,b,c){return Be(b)?nn(a,b,c):Bq(a.a,b,c)}
function Yo(a,b){!!b&&Vr(a,b);return !b?null:new Ro(b)}
function zq(a,b){var c;c=a.a.get(b);return c==null?[]:c}
function sq(a,b){if(b[$w]!=a[$w]){throw Xg(new uq)}}
function ht(a){if(a==null){throw Xg(new cj)}return a}
function td(a){if(a==null){throw Xg(new cj)}this.a=a}
function tu(a){this.a=a;if(a.d>a.c)throw Xg(new hv(fx))}
function hj(a,b,c){this.a=qw;this.d=a;this.b=b;this.c=c}
function bw(a,b,c,d){this.a=a;this.c=b;this.b=d;this.d=c}
function av(a,b,c,d){this.c=a;this.b=b;this.d=c;this.a=d}
function ho(a,b){co.call(this,a);jt(b,a.size());this.a=b}
function qb(a,b){a.backingJsObject=b;b!=null&&qt(b,vw,a)}
function rb(a,b){var c;c=fi(a._);return b==null?c:c+': '+b}
function ki(a,b){var c;c=ii(a);vi(a,c);c.e=b?8:0;return c}
function Ic(){Ic=Dh;Gc=new Jc(false);Hc=new Jc(true)}
function gc(){gc=Dh;var a,b;b=!lc();a=new tc;fc=b?new mc:a}
function zi(a){return oj(sw,typeof a)||a instanceof Number}
function ln(a,b){return b==null?!!Aq(a.a,null):Pq(a.b,b)}
function kn(a,b){return b==null?Um(Aq(a.a,null)):Qq(a.b,b)}
function Mm(a,b){return b===a?'(this Map)':b==null?xw:Gh(b)}
function Zg(a,b){return _g(Yd(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function lh(a,b){return _g(ce(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function uh(a,b){return _g(ke(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function nj(a,b){return mj(a.toLowerCase(),b.toLowerCase())}
function _h(a){return /[A-Z]/i.test(String.fromCharCode(a))}
function Ib(a){return !!a&&!!a.hashCode?a.hashCode():st(a)}
function De(a){return Math.max(Math.min(a,uw),-2147483648)|0}
function Tv(){return Qv(Vv(new xq,gv(null),(fv(),fv(),dv)))}
function nn(a,b,c){return b==null?Bq(a.a,null,c):Rq(a.b,b,c)}
function Cs(){ys();return Hd(Ad(wg,1),pw,30,0,[us,vs,ws,xs])}
function Xb(a){Rb();$wnd.setTimeout(function(){throw a},0)}
function Fq(a){this.e=a;this.b=this.e.a.entries();this.a=[]}
function aq(a){ft(a.a<a.c.a.length);a.b=a.a++;return a.c.a[a.b]}
function Cn(a,b){if(we(b,31)){return Km(a.a,b)}return false}
function Hv(a){if(ln(Fv,a)){return kn(Fv,a)}return null}
function _c(a,b){if(b==null){throw Xg(new cj)}return ad(a,b)}
function Yr(a,b){var c;c=1-b;a.a[c]=Zr(a.a[c],c);return Zr(a,b)}
function Lb(a,b){var c=Kb[a.charCodeAt(0)];return c==null?a:c}
function ni(a,b){var c=a.a=a.a||[];return c[b]||(c[b]=a.D(b))}
function Dp(a,b,c){var d;kt(b,c,a.a.length);d=c-b;Ys(a.a,b,d)}
function jo(a,b,c){kt(b,c,a.size());this.c=a;this.a=b;this.b=c-b}
function Fb(a){Db();Bb.call(this,a);this.a='';this.b=a;this.a=''}
function bo(a){lt(a.b!=-1);a.c.removeAtIndex(a.b);a.a=a.b;a.b=-1}
function ao(a){ft(a.a<a.c.size());return a.c.getAtIndex(a.b=a.a++)}
function rh(a){var b;if(fh(a)){b=a;return b==-0.?0:b}return he(a)}
function Eh(a){function b(){}
;b.prototype=a||{};return new b}
function tb(b){if(!('stack' in b)){try{throw b}catch(a){}}return b}
function pi(a){if(a.J()){return null}var b=a.j;var c=Ah[b];return c}
function Lj(a,b,c){a.a=yj(a.a,0,b)+(''+c)+xj(a.a,b);return a}
function om(a,b,c,d,e,f,g){a+=e+g+(b^c^d);a=a<<f|a>>>-f;return a+b}
function ov(a){if(a.e.c.d==0)throw Xg(new Ab(xx));return _t(a.e.c)}
function nv(a){if(a.e.c.d==0)throw Xg(new Ab(xx));return $t(a.e.c)}
function Fk(a){while(a.d>0&&a.a[--a.d]==0);a.a[a.d++]==0&&(a.e=0)}
function Hb(a,b){return !!a&&!!a.equals?a.equals(b):Ce(a)===Ce(b)}
function Ml(a,b){Gl();return b<Fl.length?Ll(a,Fl[b]):Lk(a,Pl(b))}
function Aq(a,b){var c;return yq(b,zq(a,b==null?0:(c=kb(b),c|0)))}
function Wo(a,b){var c,d;c=b.S();d=a.W(c);return !!d&&dr(d.d,b.T())}
function Vb(a,b,c){var d;d=Tb();try{return Sb(a,b,c)}finally{Wb(d)}}
function Ts(a,b,c,d){Array.prototype.splice.apply(a,[b,c].concat(d))}
function vj(a,b,c){c=Cj(c);return a.replace(new $wnd.RegExp(b,'g'),c)}
function mt(a,b,c){if(a<0||b>c||b<a){throw Xg(new Pj(Gw+a+Hw+b+Fw+c))}}
function cd(d,a,b){if(b){var c=b.A();d.a[a]=c(b)}else{delete d.a[a]}}
function yc(d,a,b){if(b){var c=b.A();b=c(b)}else{b=undefined}d.a[a]=b}
function Nk(a,b){if(b==0||a.e==0){return a}return b>0?fl(a,b):il(a,-b)}
function Pk(a,b){if(b==0||a.e==0){return a}return b>0?il(a,b):fl(a,-b)}
function Ik(a,b){var c;for(c=a.d-1;c>=0&&a.a[c]===b[c];c--);return c<0}
function Bl(a,b,c,d){var e;e=Ed(He,pw,6,b,15,1);Cl(e,a,b,c,d);return e}
function pm(a,b,c,d,e,f,g){a+=e+g+(c^(b|~d));a=a<<f|a>>>-f;return a+b}
function nm(a,b,c,d,e,f,g){a+=e+g+(c^d&(b^c));a=a<<f|a>>>-f;return a+b}
function mm(a,b,c,d,e,f,g){a+=e+g+(d^b&(c^d));a=a<<f|a>>>-f;return a+b}
function Ep(a,b,c){var d;d=(gt(b,a.a.length),a.a[b]);a.a[b]=c;return d}
function Bp(a,b,c){for(;c>=0;--c){if(dr(b,a.a[c])){return c}}return -1}
function Gr(a,b){!a.a?(a.a=new Oj(a.d)):Kj(a.a,a.b);Ij(a.a,b);return a}
function nb(a){if(a.j){a.backingJsObject!==zw&&a.t();a.g=null}return a}
function Cp(a,b){var c;c=(gt(b,a.a.length),a.a[b]);Ys(a.a,b,1);return c}
function on(a,b){return Be(b)?b==null?Cq(a.a,null):Sq(a.b,b):Cq(a.a,b)}
function pn(a){var b;a.a=new Dq(a);a.b=new Tq(a);b=a[$w]|0;a[$w]=b+1}
function ys(){ys=Dh;us=new zs('All',0);vs=new Ds;ws=new Fs;xs=new Is}
function Zs(){Zs=Dh;new ct;new _s('ISO-LATIN-1');new _s('ISO-8859-1')}
function Vr(a,b){var c;c=new ss;c.c=true;c.d=b.T();return Wr(a,b.S(),c)}
function Kd(a){var b,c,d;b=a&Iw;c=a>>22&Iw;d=a<0?Jw:0;return Md(b,c,d)}
function Wb(a){a&&bc((_b(),$b));--Ob;if(a){if(Qb!=-1){Yb(Qb);Qb=-1}}}
function rs(a,b){Qo.call(this,a,b);this.a=Ed(rg,pw,43,2,0,1);this.b=true}
function Sk(a,b){Dk();this.e=a;this.d=1;this.a=Hd(Ad(He,1),pw,6,15,[b])}
function Hr(a,b){this.b=', ';this.d=a;this.e=b;this.c=this.d+(''+this.e)}
function pv(a,b,c,d){this.g=new xq;this.c=a;this.d=b;this.b=c;this.a=d}
function Vq(a){this.d=a;this.b=this.d.a.entries();this.a=this.b.next()}
function Ub(b){Rb();return function(){return Vb(b,this,arguments);var a}}
function Jb(){if(Date.now){return Date.now()}return (new Date).getTime()}
function Jp(){tp(this);dt(true,'Initial capacity must not be negative')}
function wk(a){if($g(a,0)==0&&5<ak.length){return ak[5]}return new lk(a,5)}
function kh(a){var b;if(fh(a)){b=0-a;if(!isNaN(b)){return b}}return _g(ae(a))}
function Zq(a){if(a.a.d!=a.c){return Qq(a.a,a.b.value[0])}return a.b.value[1]}
function jt(a,b){if(a<0||a>b){throw Xg(new Ph('Index: '+a+', Size: '+b))}}
function gt(a,b){if(a<0||a>=b){throw Xg(new Ph('Index: '+a+', Size: '+b))}}
function jw(a,b,c){return c==null?hw(a,b,(Pc(),Pc(),Oc)):hw(a,b,new td(c))}
function iq(a,b,c,d){var e;d=(oq(),!d?nq:d);e=a.slice(b,c);jq(e,a,b,c,-b,d)}
function wl(a,b,c,d){var e;e=Ed(He,pw,6,b+1,15,1);xl(e,a,b,c,d);return e}
function Ed(a,b,c,d,e,f){var g;g=Fd(e,d);e!=10&&Hd(Ad(a,f),b,c,e,g);return g}
function Id(a,b){Bd(b)!=10&&Hd(ib(b),b.ab,b.__elementTypeId$,Bd(b),a);return a}
function Lk(a,b){if(b.e==0){return Ck}if(a.e==0){return Ck}return Gl(),Hl(a,b)}
function zp(a,b,c){for(;c<a.a.length;++c){if(dr(b,a.a[c])){return c}}return -1}
function Lr(a){var b,c;if(!a.c){return null}c=a.c;while(b=c.a[0]){c=b}return c}
function Mr(a){var b,c;if(!a.c){return null}c=a.c;while(b=c.a[1]){c=b}return c}
function Sv(a){var b=new xq;if(a){for(var c in a){b.put(c,String(a[c]))}}return b}
function fw(a){var b;ew.call(this);for(b=0;b<a.length;b++){dw(this,new Uc(a[b]))}}
function iw(a,b){return b==null?hw(a,Nx,(Pc(),Pc(),Oc)):hw(a,Nx,new Uc((ht(b),b)))}
function ze(a){return a!=null&&(typeof a===mw||typeof a==='function')&&!(a.bb===Hh)}
function Bd(a){return a.__elementTypeCategory$==null?10:a.__elementTypeCategory$}
function uj(a){return (new $wnd.RegExp('^(^[A-Z][a-z]?\\{.*\\}$)$')).test(a)}
function _l(){Zl();return Hd(Ad(Cf,1),pw,26,0,[Yl,Sl,Rl,Tl,Wl,Ul,Vl,Xl])}
function pe(){pe=Dh;le=Md(Iw,Iw,524287);me=Md(0,0,Kw);ne=Kd(1);Kd(2);oe=Kd(0)}
function lk(a,b){this.e=b;this.a=ok(a);this.a<54?(this.f=rh(a)):(this.c=dl(a))}
function ku(a,b,c,d,e){this.b=new xq;this.c=a;this.d=b;this.g=c;this.e=d;this.a=e}
function Gt(a,b,c,d){if(c>d)throw Xg(new hv(fx));this.i=a;this.b=b;this.d=c;this.c=d}
function Qv(a){if(zx in a.a.a){throw Xg(new Fb(_c(a.a,zx).B().a))}else{return a.a.a}}
function he(a){if(Zd(a,(pe(),oe))<0){return -Vd(ae(a))}return a.l+a.m*Lw+a.h*Mw}
function hk(a){if(a.a<54){return a.f<0?-1:a.f>0?1:0}return (!a.c&&(a.c=cl(a.f)),a.c).e}
function Wg(a){var b;if(we(a,9)){return a}b=a&&a[vw];if(!b){b=new Fb(a);hc(b)}return b}
function vi(a,b){var c;if(!a){return}b.j=a;var d=pi(b);if(!d){Ah[a]=[b];return}d._=b}
function Vi(a){var b,c;if(a==0){return 32}else{c=0;for(b=1;(b&a)==0;b<<=1){++c}return c}}
function bc(a){var b,c;if(a.b){c=null;do{b=a.b;a.b=null;c=ec(b,c)}while(a.b);a.b=c}}
function ac(a){var b,c;if(a.a){c=null;do{b=a.a;a.a=null;c=ec(b,c)}while(a.a);a.a=c}}
function gw(a){var b;ew.call(this);for(b=0;b<a.length;b++){dw(this,(new fw(a[b])).a)}}
function wh(){xh();var a=vh;for(var b=0;b<arguments.length;b++){a.push(arguments[b])}}
function wc(d,a){var b=d.a[a];var c=(md(),ld)[typeof b];return c?c(b):sd(typeof b)}
function $c(e,a){var b=e.a;var c=0;for(var d in b){b.hasOwnProperty(d)&&(a[c++]=d)}return a}
function lq(a){var b,c,d;d=0;for(c=a.K();c.O();){b=c.P();d=d+(b!=null?kb(b):0);d=d|0}return d}
function sm(a,b){var c,d,e;ht(b);c=false;for(e=b.K();e.O();){d=e.P();c=c|a.add(d)}return c}
function Zr(a,b){var c,d;c=1-b;d=a.a[c];a.a[c]=d.a[b];d.a[b]=a;a.b=true;d.b=false;return d}
function ii(a){var b;b=new gi;b.k='Class$'+(a?'S'+a:''+b.g);b.b=b.k;b.i=b.k;return b}
function _g(a){var b;b=a.h;if(b==0){return a.l+a.m*Lw}if(b==Jw){return a.l+a.m*Lw-Mw}return a}
function tv(a,b){if(a.d.f==0){return uv(a,b)}else if(a.d.f==iv){return vv(a,b)}return uv(a,b)}
function hn(a,b){var c,d;for(d=b.K();d.O();){c=d.P();if(wq(a,c.T())){return true}}return false}
function jc(a){var b=/function(?:\s+([\w$]+))?\s*\(/;var c=b.exec(a);return c&&c[1]||nw}
function qh(a){var b,c,d,e;e=a;d=0;if(e<0){e+=Mw;d=Jw}c=De(e/Lw);b=De(e-c*Lw);return Md(b,c,d)}
function mq(a){var b,c,d;d=1;for(c=a.K();c.O();){b=c.P();d=31*d+(b!=null?kb(b):0);d=d|0}return d}
function Jk(a){var b;if(a.b==-2){if(a.e==0){b=-1}else{for(b=0;a.a[b]==0;b++);}a.b=b}return a.b}
function Xk(a){ht(a);if(a.length==0){throw Xg(new gj('Zero length BigInteger'))}al(this,a)}
function Ct(a){if(a.d==a.c)return a.d;throw Xg(new Ab('Atoms.getCount(): undefined (min!=max)'))}
function dh(a){if(Ow<a&&a<Mw){return a<0?$wnd.Math.ceil(a):$wnd.Math.floor(a)}return _g($d(a))}
function Jn(a){if(a.a.O()){return true}if(a.a!=a.d){return false}a.a=new Fq(a.e.a);return a.a.O()}
function Ov(a){Mv();var b,c;b='61-'+a;if(ln(Lv,b))return kn(Lv,b);c=new Kv(a);nn(Lv,b,c);return c}
function Rv(a,b){var c;c=Sv(b);Rq(c.b,vx,a);return Qv(Wv(c,gv(c.b.a.get(Ax)),(fv(),fv(),dv)))}
function Uv(a,b){var c;c=Sv(b);Rq(c.b,ix,''+a);return Qv(Zv(c,gv(c.b.a.get(Ax)),(fv(),fv(),dv)))}
function Xd(a,b){var c,d,e;c=a.l+b.l;d=a.m+b.m+(c>>22);e=a.h+b.h+(d>>22);return Md(c&Iw,d&Iw,e&Jw)}
function ge(a,b){var c,d,e;c=a.l-b.l;d=a.m-b.m+(c>>22);e=a.h-b.h+(d>>22);return Md(c&Iw,d&Iw,e&Jw)}
function yq(a,b){var c,d,e;for(d=0,e=b.length;d<e;++d){c=b[d];if(wq(a,c.S())){return c}}return null}
function hl(a,b,c){var d,e,f;d=0;for(e=0;e<c;e++){f=b[e];a[e]=f<<1|d;d=f>>>31}d!=0&&(a[c]=d)}
function zh(a,b){typeof window===mw&&typeof window['$gwt']===mw&&(window['$gwt'][a]=b)}
function Ht(a){this.i=a.i;this.b=a.b;this.d=a.d;this.c=a.c;this.e=a.e;this.f=a.f;this.a=a.a}
function ls(a,b){var c;this.c=a;c=new Ip;Pr(a,c,b,a.c,null,false,null,false);this.a=new ho(c,0)}
function Tr(a,b,c){var d,e;d=new rs(b,c);e=new ss;a.c=Rr(a,a.c,d,e);e.b||++a.d;a.c.b=false;return e.d}
function Sq(a,b){var c;c=a.a.get(b);if(c===undefined){++a.d}else{a.a[dx](b);--a.c;tq(a.b)}return c}
function Bt(a,b){var c;if(we(b,35)){c=b;if(oj(a.i,c.i)&&a.a==c.a)return true}else{Sj()}return false}
function Rt(a,b){var c,d,e;c=(new ps(a)).b.V();while(_n(c.a)){d=c.b=ao(c.a);e=nt(d.T());e<b&&js(c)}}
function Kn(a){var b;this.e=a;this.d=new Vq(this.e.b);this.a=this.d;this.b=Jn(this);b=a[$w];this[$w]=b}
function Bb(a){mb(this);nb(this);this.backingJsObject=a;a!=null&&qt(a,vw,this);this.f=a==null?xw:Gh(a)}
function Xh(a){if(oj(typeof a,tw)){return true}return a!=null&&a.$implements__java_lang_CharSequence}
function Du(b){try{Bi(b);return true}catch(a){a=Wg(a);if(we(a,21)){return false}else throw Xg(a)}}
function um(a,b){var c,d;ht(b);for(d=b.K();d.O();){c=d.P();if(!a.contains(c)){return false}}return true}
function aw(a,b){var c;c=Di($wnd.Math.abs(a.a),$wnd.Math.abs(b.a));if(c!=0)return c;return mj(a.b,b.b)}
function ae(a){var b,c,d;b=~a.l+1&Iw;c=~a.m+(b==0?1:0)&Iw;d=~a.h+(b==0&&c==0?1:0)&Jw;return Md(b,c,d)}
function Sd(a){var b,c,d;b=~a.l+1&Iw;c=~a.m+(b==0?1:0)&Iw;d=~a.h+(b==0&&c==0?1:0)&Jw;a.l=b;a.m=c;a.h=d}
function fq(a){var b,c,d,e;e=1;for(c=0,d=a.length;c<d;++c){b=a[c];e=31*e+(b!=null?kb(b):0);e=e|0}return e}
function xp(a,b){var c,d;c=b.toArray();d=c.length;if(d==0){return false}Xs(a.a,a.a.length,c);return true}
function Kr(a,b){var c,d,e;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}d=c<0?0:1;e=e.a[d]}return null}
function Td(a){var b,c;c=Ui(a.h);if(c==32){b=Ui(a.m);return b==32?Ui(a.l)+32:b+20-10}else{return c-12}}
function Dr(a){var b;b=a.a.a.length;if(b>0){return lr(b-1,a.a.a.length),Cp(a.a,b-1)}else{throw Xg(new vq)}}
function wb(a){var b;if(a!=null){b=a[vw];if(b){return b}}return Ae(a,$wnd.TypeError)?new dj(a):new Bb(a)}
function $g(a,b){var c;if(fh(a)&&fh(b)){c=a-b;if(!isNaN(c)){return c}}return Zd(fh(a)?qh(a):a,fh(b)?qh(b):b)}
function Di(a,b){if(a<b){return -1}if(a>b){return 1}if(a==b){return 0}return isNaN(a)?isNaN(b)?0:1:-1}
function cl(a){Dk();if(a<0){if(a!=-1){return new Rk(-1,-a)}return xk}else return a<=10?zk[De(a)]:new Rk(1,a)}
function ok(a){var b;$g(a,0)<0&&(a=_g(be(fh(a)?qh(a):a)));return b=sh(nh(a,32)),64-(b!=0?Ui(b):Ui(sh(a))+32)}
function pb(a){var b,c,d,e;for(b=(a.g==null&&(a.g=(gc(),e=fc.v(a),ic(e))),a.g),c=0,d=b.length;c<d;++c);}
function vm(a,b){var c,d,e;ht(b);c=false;for(d=a.K();d.O();){e=d.P();if(b.contains(e)){d.Q();c=true}}return c}
function Pd(a,b,c,d,e){var f;f=ee(a,b);c&&Sd(f);if(e){a=Rd(a,b);d?(Jd=ae(a)):(Jd=Md(a.l,a.m,a.h))}return f}
function Hd(a,b,c,d,e){e._=a;e.ab=b;e.bb=Hh;e.__elementTypeId$=c;e.__elementTypeCategory$=d;return e}
function Hk(a,b){var c;if(a===b){return true}if(we(b,5)){c=b;return a.e==c.e&&a.d==c.d&&Ik(a,c.a)}return false}
function yl(a,b,c){var d;for(d=c-1;d>=0&&a[d]===b[d];d--);return d<0?0:gh(Zg(a[d],Vw),Zg(b[d],Vw))?-1:1}
function Av(a,b,c){this.d=a;qv(this);this.a=c;sv(this,b);if(b.a!=0){Pt(this.c,-b.a*yx);Tt(this.c,1/$i(b.a))}}
function gi(){this.g=di++;this.k=null;this.i=null;this.f=null;this.d=null;this.b=null;this.j=null;this.a=null}
function md(){md=Dh;ld={'boolean':nd,'number':od,'string':qd,'object':pd,'function':pd,'undefined':rd}}
function ib(a){return Be(a)?xf:ye(a)?ff:xe(a)?df:ve(a)?a._:Gd(a)?a._:a._||Array.isArray(a)&&Ad(Je,1)||Je}
function kb(a){return Be(a)?yt(a):ye(a)?De((ht(a),a)):xe(a)?(ht(a),a)?1231:1237:ve(a)?a.p():Gd(a)?st(a):Ib(a)}
function gb(a,b){return Be(a)?oj(a,b):ye(a)?(ht(a),a===b):xe(a)?(ht(a),a===b):ve(a)?a.n(b):Gd(a)?a===b:Hb(a,b)}
function Wh(a,b){Th();return Be(a)?mj(a,b):ye(a)?Di((ht(a),a),(ht(b),b)):xe(a)?Vh((ht(a),a),(ht(b),b)):a.C(b)}
function jh(a,b){var c;if(fh(a)&&fh(b)){c=a*b;if(Ow<c&&c<Mw){return c}}return _g(_d(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function Yg(a,b){var c;if(fh(a)&&fh(b)){c=a+b;if(Ow<c&&c<Mw){return c}}return _g(Xd(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function ph(a,b){var c;if(fh(a)&&fh(b)){c=a-b;if(Ow<c&&c<Mw){return c}}return _g(ge(fh(a)?qh(a):a,fh(b)?qh(b):b))}
function Zh(a){if(a>=48&&a<58){return a-48}if(a>=97&&a<97){return a-97+10}if(a>=65&&a<65){return a-65+10}return -1}
function Kk(a){var b;if(a.c!=0){return a.c}for(b=0;b<a.a.length;b++){a.c=a.c*33+(a.a[b]&-1)}a.c=a.c*a.e;return a.c}
function lv(a){var b,c,d;b=gx;for(d=new bq(a.d.d);d.a<d.c.a.length;){c=aq(d);c.f>b&&(b=c.f)}wv(a.e,b,a.b,a.a)}
function Yv(a){var b,c,d;d=dl(1);for(c=new bq(a.a);c.a<c.c.a.length;){b=aq(c);d=Lk(d,dl(b.a.c-b.a.d+1))}return d}
function wp(a,b,c){var d,e;jt(b,a.a.length);d=c.toArray();e=d.length;if(e==0){return false}Xs(a.a,b,d);return true}
function Ut(a,b){var c,d,e,f;c=(new ps(a)).b.V();while(_n(c.a)){d=c.b=ao(c.a);e=d.S();f=d.T();Tr(a,e,(ht(f),f)*b)}}
function hq(a,b,c,d,e,f,g,h){var i;i=c;while(f<g){i>=d||b<c&&h.Y(a[b],a[i])<=0?(e[f++]=a[b++]):(e[f++]=a[i++])}}
function gq(a,b,c,d){var e,f,g;for(e=b+1;e<c;++e){for(f=e;f>b&&d.Y(a[f-1],a[f])>0;--f){g=a[f];a[f]=a[f-1];a[f-1]=g}}}
function lm(a,b){var c,d;for(c=0,d=0;d<16;d++){b[d]=a[c++]&255|(a[c++]&255)<<8|(a[c++]&255)<<16|(a[c++]&255)<<24}}
function Xi(a){var b,c;if(a>-129&&a<128){b=a+128;c=(Zi(),Yi)[b];!c&&(c=Yi[b]=new Pi(a));return c}return new Pi(a)}
function Gh(a){if(Array.isArray(a)&&a.bb===Hh){return fi(ib(a))+'@'+(kb(a)>>>0).toString(16)}return a.toString()}
function jk(a){ck();if(!isNaN(a)&&!isFinite(a)||isNaN(a)){throw Xg(new gj('Infinite or NaN'))}ek(this,a.toPrecision(20))}
function sd(a){md();throw Xg(new Nc("Unexpected typeof result '"+a+"'; please report this bug to the GWT team"))}
function kt(a,b,c){if(a<0||b>c){throw Xg(new Ph(Gw+a+Hw+b+', size: '+c))}if(a>b){throw Xg(new Mi(Gw+a+' > toIndex: '+b))}}
function hu(a){if(a.d==0)throw Xg(new Ab('Exact mass of '+a.g+' is unknown. Run calculateExactMass() first.'));return a.d}
function Xt(a){var b,c;b=new jk(a);c=ik(fk(b,(Zl(),Zl(),Wl)));if(c.indexOf('.')!=-1){return vj(c,'\\.?0+$','')}return c}
function Rq(a,b,c){var d;d=a.a.get(b);a.a.set(b,c===undefined?null:c);if(d===undefined){++a.c;tq(a.b)}else{++a.d}return d}
function Dj(a,b,c){var d,e,f,g;f=b+c;mt(b,f,a.length);g='';for(e=b;e<f;){d=e+Ew<f?e+Ew:f;g+=Aj(a.slice(e,d));e=d}return g}
function jv(a,b,c){var d,e,f;f=Nv(ov(a),b,c);e=new au;for(d=0;d<f.length;d++){Tr(e,f[d][0],f[d][1])}a.e.c=e;a.e.c.a=Sw}
function zl(a,b,c){var d,e;d=Zg(c,Vw);for(e=0;$g(d,0)!=0&&e<b;e++){d=Yg(d,Zg(a[e],Vw));a[e]=sh(d);d=nh(d,32)}return sh(d)}
function tm(a,b,c){var d,e;for(e=a.K();e.O();){d=e.P();if(Ce(b)===Ce(d)||b!=null&&gb(b,d)){c&&e.Q();return true}}return false}
function ih(a,b){var c;if(fh(a)&&fh(b)){c=a%b;if(Ow<c&&c<Mw){return c}}return _g((Nd(fh(a)?qh(a):a,fh(b)?qh(b):b,true),Jd))}
function gk(a,b){var c;a.c=b;a.a=el(b);a.a<54&&(a.f=(c=b.d>1?lh(mh(b.a[1],32),Zg(b.a[0],Vw)):Zg(b.a[0],Vw),rh(jh(b.e,c))))}
function Ok(a){var b,c,d,e;return a.e==0?a:(b=a.d,c=b+1,d=Ed(He,pw,6,c,15,1),hl(d,a.a,b),e=new Tk(a.e,c,d),Fk(e),e)}
function $k(a){var b,c,d;if(a<Bk.length){return Bk[a]}c=a>>5;b=a&31;d=Ed(He,pw,6,c+1,15,1);d[c]=1<<b;return new Tk(1,c+1,d)}
function el(a){var b,c,d;if(a.e==0){return 0}b=a.d<<5;c=a.a[a.d-1];if(a.e<0){d=Jk(a);if(d==a.d-1){--c;c=c|0}}b-=Ui(c);return b}
function Il(a,b,c,d,e){if(b==0||d==0){return}b==1?(e[d]=Kl(e,c,d,a[0])):d==1?(e[b]=Kl(e,a,b,c[0])):Jl(a,c,e,b,d)}
function fl(a,b){var c,d,e,f;c=b>>5;b&=31;e=a.d+c+(b==0?0:1);d=Ed(He,pw,6,e,15,1);gl(d,a.a,c,b);f=new Tk(a.e,e,d);Fk(f);return f}
function Nr(a,b){var c,d,e;d=null;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}if(c>=0){e=e.a[1]}else{d=e;e=e.a[0]}}return d}
function Or(a,b){var c,d,e;d=null;e=a.c;while(e){c=a.b.Y(b,e.c);if(c==0){return e}if(c<=0){e=e.a[0]}else{d=e;e=e.a[1]}}return d}
function yt(a){wt();var b,c,d;c=':'+a;d=vt[c];if(!(d===undefined)){return d}d=tt[c];b=d===undefined?xt(a):d;zt();vt[c]=b;return b}
function Bh(){Ah={};!Array.isArray&&(Array.isArray=function(a){return Object.prototype.toString.call(a)==='[object Array]'})}
function bi(a){return String.fromCharCode(a).toLowerCase().charCodeAt(0)==a&&/[A-Z]/i.test(String.fromCharCode(a))}
function ci(a){return String.fromCharCode(a).toLocaleUpperCase().charCodeAt(0)==a&&/[A-Z]/i.test(String.fromCharCode(a))}
function Od(a,b){if(a.h==Kw&&a.m==0&&a.l==0){b&&(Jd=Md(0,0,0));return Ld((pe(),ne))}b&&(Jd=Md(a.l,a.m,a.h));return Md(0,0,0)}
function Ek(a,b){if(a.e>b.e){return 1}if(a.e<b.e){return -1}if(a.d>b.d){return a.e}if(a.d<b.d){return -b.e}return a.e*yl(a.a,b.a,a.d)}
function dl(a){Dk();if($g(a,0)<0){if($g(a,-1)!=0){return new Uk(-1,kh(a))}return xk}else return $g(a,10)<=0?zk[sh(a)]:new Uk(1,a)}
function xi(a){var b;b=typeof a;if(oj(b,rw)||oj(b,sw)||oj(b,tw)){return true}return a!=null&&a.$implements__java_lang_Comparable}
function Jt(a,b,c){if(b>c)throw Xg(new hv(fx));this.d=b;this.c=c;this.e=Pu(a.a);this.f=Qu(a.a);this.a=0;this.i=a.b;this.b=Ou(a.a)}
function Vk(a){Dk();if(a.length==0){this.e=0;this.d=1;this.a=Hd(Ad(He,1),pw,6,15,[0])}else{this.e=1;this.d=a.length;this.a=a;Fk(this)}}
function et(a,b){if(0>a){throw Xg(new Mi('fromIndex: 0 > toIndex: '+a))}if(a>b){throw Xg(new Rh('fromIndex: 0, toIndex: '+a+Fw+b))}}
function Yh(a,b,c){var d,e;d=lj(a,b++);if(d>=55296&&d<=56319&&b<c&&ai(e=a.charCodeAt(b))){return Cw+((d&1023)<<10)+(e&1023)}return d}
function ui(a,b){var c=0;while(!b[c]||b[c]==''){c++}var d=b[c++];for(;c<b.length;c++){if(!b[c]||b[c]==''){continue}d+=a+b[c]}return d}
function lc(){if(Error.stackTraceLimit>0){$wnd.Error.stackTraceLimit=Error.stackTraceLimit=64;return true}return 'stack' in new Error}
function Tb(){var a;if(Ob!=0){a=Jb();if(a-Pb>2000){Pb=a;Qb=$wnd.setTimeout(Zb,10)}}if(Ob++==0){ac((_b(),$b));return true}return false}
function bj(a){var b;if($wnd.Math.abs(a)<4503599627370496){b=a%2;b==-1.5||b==0.5?(a=$wnd.Math.floor(a)):(a=$wnd.Math.round(a))}return a}
function Kl(a,b,c,d){Gl();var e,f;e=0;for(f=0;f<c;f++){e=Yg(jh(Zg(b[f],Vw),Zg(d,Vw)),Zg(sh(e),Vw));a[f]=sh(e);e=oh(e,32)}return sh(e)}
function Nu(a,b){var c,d,e,f;for(d=(f=(new jp(a.g)).a.N().b.V(),new pp(f));_n(d.a.a);){c=(e=is(d.a),e.S());if(oj(c.i,b))return c}return null}
function Pt(a,b){var c,d,e,f,g;d=new au;c=(new ps(a)).b.V();while(_n(c.a)){e=c.b=ao(c.a);f=e.S();g=e.T();Tr(d,(ht(f),f)+b,g);js(c)}Ot(a,d)}
function Tt(a,b){var c,d,e,f,g;d=new au;c=(new ps(a)).b.V();while(_n(c.a)){e=c.b=ao(c.a);f=e.S();g=e.T();Tr(d,(ht(f),f)*b,g);js(c)}Ot(a,d)}
function St(a){var b,c,d,e,f,g;b=gx;f=0;c=(new ps(a)).b.V();while(_n(c.a)){d=c.b=ao(c.a);e=d.S();g=nt(d.T());if(g>b){b=g;f=(ht(e),e)}}return f}
function ad(f,a){var b=f.a;var c;a=String(a);b.hasOwnProperty(a)&&(c=b[a]);var d=(md(),ld)[typeof c];var e=d?d(c):sd(typeof c);return e}
function Hp(a,b){var c,d,e;e=a.a.length;b.length<e&&(b=(d=new Array(e),Id(d,b)));for(c=0;c<e;++c){b[c]=a.a[c]}b.length>e&&(b[e]=null);return b}
function wm(a,b){var c,d,e,f;f=a.size();b.length<f&&(b=(e=new Array(f),Id(e,b)));d=a.K();for(c=0;c<f;++c){b[c]=d.P()}b.length>f&&(b[f]=null);return b}
function su(a,b,c,d,e,f){a.d=_i(De($wnd.Math.floor((c-f-b-e)/a.a.e)),a.a.d);a.c=aj(De($wnd.Math.ceil((c+f-b-d)/a.a.e)),a.a.c);a.b=a.d-1}
function pj(a){ht(Bw);if(a==null){return false}if(oj(Bw,a)){return true}return Bw.length==a.length&&oj(Bw.toLowerCase(),a.toLowerCase())}
function Rk(a,b){this.e=a;if(b<Ww){this.d=1;this.a=Hd(Ad(He,1),pw,6,15,[b|0])}else{this.d=2;this.a=Hd(Ad(He,1),pw,6,15,[b%Ww|0,b/Ww|0])}}
function te(a,b){if(Be(a)){return !!se[b]}else if(a.ab){return !!a.ab[b]}else if(ye(a)){return !!re[b]}else if(xe(a)){return !!qe[b]}return false}
function Iu(a,b,c,d){this.a=b;this.b=c;this.d=new Jp;Eu(this,a,d);if(this.d.a.length==0)throw Xg(new hv('Cannot parse: empty formula: ->'+a+'<-'))}
function Pr(a,b,c,d,e,f,g,h){var i,j;if(!d){return}i=d.a[0];!!i&&Pr(a,b,c,i,e,f,g,h);Qr(a,c,d.c,e,f,g,h)&&b.add(d);j=d.a[1];!!j&&Pr(a,b,c,j,e,f,g,h)}
function zj(a){var b,c,d;c=a.length;d=0;while(d<c&&a.charCodeAt(d)<=32){++d}b=c;while(b>d&&a.charCodeAt(b-1)<=32){--b}return d>0||b<c?a.substr(d,b-d):a}
function ob(a,b,c){var d,e,f,g,h;pb(a);for(e=(a.i==null&&(a.i=Ed(yf,pw,9,0,0,1)),a.i),f=0,g=e.length;f<g;++f){d=e[f];ob(d,b,'\t'+c)}h=a.e;!!h&&ob(h,b,c)}
function Cj(a){var b;b=0;while(0<=(b=a.indexOf('\\',b))){a.charCodeAt(b+1)==36?(a=a.substr(0,b)+'$'+xj(a,++b)):(a=a.substr(0,b)+(''+xj(a,++b)))}return a}
function Rd(a,b){var c,d,e;if(b<=22){c=a.l&(1<<b)-1;d=e=0}else if(b<=44){c=a.l;d=a.m&(1<<b-22)-1;e=0}else{c=a.l;d=a.m;e=a.h&(1<<b-44)-1}return Md(c,d,e)}
function Qr(a,b,c,d,e,f,g){var h,i;if(b.Z()&&(i=a.b.Y(c,d),i<0||!e&&i==0)){return false}if(b.$()&&(h=a.b.Y(c,f),h>0||!g&&h==0)){return false}return true}
function Vs(a,b,c,d,e,f){var g,h,i;if(Ce(a)===Ce(c)){a=a.slice(b,b+e);b=0}for(h=b,i=b+e;h<i;){g=h+Ew<i?h+Ew:i;e=g-h;Ts(c,d,f?e:0,a.slice(h,g));h=g;d+=e}}
function xu(a){var b,c,d,e,f;c='';b=new km;d=em(b,bt((f=a,Zs(),f)));for(e=0;e<5;e++){e==0?(c+=ue($i(d[0]%26)+65&Dw)):(c+=ue($i(d[e]%26)+97&Dw))}return c}
function Ot(a,b){var c,d,e,f,g;e=(new ps(b)).b.V();while(_n(e.a)){c=e.b=ao(e.a);f=c.S();g=c.T();d=Um(Kr(a,f));d!=null&&(g=(ht(d),d)+(ht(g),g));Tr(a,f,g)}}
function Mu(a){var b,c,d,e,f,g;f=Ou(a);for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());b.g=(g=bj(b.b*Ct(b)*100/f*Sw),g/Sw)}}
function Qu(a){var b,c,d,e,f;if(a.e)throw Xg(new hv(sx));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=b.f*Ct(b)}return f}
function Bu(a){var b,c,d;if(a.c)throw Xg(new hv(px));if(a.e)throw Xg(new hv(qx));d=0;for(c=new bq(a.d);c.a<c.c.a.length;){b=aq(c);d=De(d+Qu(b)*b.f)}return d}
function Fd(a,b){var c=new Array(b);var d;switch(a){case 14:case 15:d=0;break;case 16:d=false;break;default:return c;}for(var e=0;e<b;++e){c[e]=d}return c}
function Wd(a,b){var c,d,e;e=a.h-b.h;if(e<0){return false}c=a.l-b.l;d=a.m-b.m+(c>>22);e+=d>>22;if(e<0){return false}a.l=c&Iw;a.m=d&Iw;a.h=e&Jw;return true}
function ah(a,b){var c;if(fh(a)&&fh(b)){c=a/b;if(Ow<c&&c<Mw){return c<0?$wnd.Math.ceil(c):$wnd.Math.floor(c)}}return _g(Nd(fh(a)?qh(a):a,fh(b)?qh(b):b,false))}
function Lm(a,b,c){var d,e,f;for(e=a.N().K();e.O();){d=e.P();f=d.S();if(Ce(b)===Ce(f)||b!=null&&gb(b,f)){if(c){d=new Qo(d.S(),d.T());e.Q()}return d}}return null}
function Km(a,b){var c,d,e;c=b.S();e=b.T();d=a.get(c);if(!(Ce(e)===Ce(d)||e!=null&&gb(e,d))){return false}if(d==null&&!a.containsKey(c)){return false}return true}
function Uk(a,b){this.e=a;if(bh(Zg(b,-4294967296),0)){this.d=1;this.a=Hd(Ad(He,1),pw,6,15,[sh(b)])}else{this.d=2;this.a=Hd(Ad(He,1),pw,6,15,[sh(b),sh(nh(b,32))])}}
function Zd(a,b){var c,d,e,f,g,h,i,j;i=a.h>>19;j=b.h>>19;if(i!=j){return j-i}e=a.h;h=b.h;if(e!=h){return e-h}d=a.m;g=b.m;if(d!=g){return d-g}c=a.l;f=b.l;return c-f}
function nl(a){var b,c,d;if($g(a,0)>=0){c=ah(a,Nw);d=ih(a,Nw)}else{b=oh(a,1);c=ah(b,500000000);d=ih(b,500000000);d=Yg(mh(d,1),Zg(a,1))}return lh(mh(d,32),Zg(c,Vw))}
function em(a,b){var c,d;im(a,b,0,b.length);return c=rm(mh(a.b,3)),d=Ed(Ee,pw,6,16,15,1),a.c>8?im(a,fm,0,a.c-8):im(a,fm,0,64+(a.c-8)),im(a,c,0,8),qm(a.d,d),hm(a),d}
function qm(a,b){var c,d;for(c=0,d=0;c<4;c++){b[d++]=(a[c]&255)<<24>>24;b[d++]=(a[c]>>>8&255)<<24>>24;b[d++]=(a[c]>>>16&255)<<24>>24;b[d++]=(a[c]>>>24&255)<<24>>24}}
function fu(a){var b,c,d,e,f;if(qn(a.b)==0){return}e=0;for(d=(f=(new zo(a.b)).a.N().K(),new Eo(f));d.a.O();){c=(b=d.a.P(),b.T());e+=c.b*c.d/100}if(e==0)return;a.c=e}
function Su(a){var b,c,d,e,f;if(a.g.d==0)return '';f=new Gj('');for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());Ej(f,Et(b))}return f.a}
function yu(a){var b,c,d,e;if(a.c)throw Xg(new hv(nx));if(a.e)throw Xg(new hv(ox));b=0;for(d=new bq(a.d);d.a<d.c.a.length;){c=aq(d);b+=c.a*c.f}return e=bj(b*Tw),e/Tw}
function Au(a){var b,c,d,e;if(a.c)throw Xg(new hv(px));if(a.e)throw Xg(new hv(qx));b=0;for(d=new bq(a.d);d.a<d.c.a.length;){c=aq(d);b+=Pu(c)*c.f}return e=bj(b*Tw),e/Tw}
function yh(b,c,d,e){xh();var f=vh;$moduleName=c;$moduleBase=d;Vg=e;function g(){for(var a=0;a<f.length;a++){f[a]()}}
if(b){try{lw(g)()}catch(a){b(c,a)}}else{lw(g)()}}
function Cl(a,b,c,d,e){var f,g;f=0;for(g=0;g<e;g++){f=Yg(f,ph(Zg(b[g],Vw),Zg(d[g],Vw)));a[g]=sh(f);f=nh(f,32)}for(;g<c;g++){f=Yg(f,Zg(b[g],Vw));a[g]=sh(f);f=nh(f,32)}}
function ic(a){var b,c,d,e;b='hc';c='vb';e=aj(a.length,5);for(d=e-1;d>=0;d--){if(oj(a[d].d,b)||oj(a[d].d,c)){a.length>=d+1&&(a.splice(0,d+1),undefined);break}}return a}
function Ai(a){yi==null&&(yi=/^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);if(!yi.test(a)){throw Xg(new gj(ww+a+'"'))}return parseFloat(a)}
function Tj(a,b,c,d,e){Sj();var f,g;it(a,'src');it(c,'dest');ib(a);ib(c);g=a.length;f=c.length;if(b<0||d<0||e<0||b+e>g||d+e>f){throw Xg(new Oh)}e>0&&Vs(a,b,c,d,e,true)}
function Ol(a,b){Gl();var c,d;d=(Dk(),yk);c=a;for(;b>1;b>>=1){(b&1)!=0&&(d=Lk(d,c));c.d==1?(c=Lk(c,c)):(c=new Vk(Ql(c.a,c.d,Ed(He,pw,6,c.d<<1,15,1))))}d=Lk(d,c);return d}
function Dd(a,b,c,d,e,f,g){var h,i,j,k,l;k=e[f];j=f==g-1;h=j?d:0;l=Fd(h,k);d!=10&&Hd(Ad(a,g-f),b[f],c[f],h,l);if(!j){++f;for(i=0;i<k;++i){l[i]=Dd(a,b,c,d,e,f,g)}}return l}
function hm(a){a.a=Ed(Ee,pw,6,64,15,1);a.d=Ed(He,pw,6,4,15,1);a.e=Ed(He,pw,6,16,15,1);a.d[0]=1732584193;a.d[1]=-271733879;a.d[2]=-1732584194;a.d[3]=271733878;a.b=0;a.c=64}
function xm(a){var b,c,d;d=new Hr('[',']');for(c=a.K();c.O();){b=c.P();Gr(d,b===a?'(this Collection)':b==null?xw:Gh(b))}return !d.a?d.c:d.e.length==0?d.a.a:d.a.a+(''+d.e)}
function Et(a){var b;a.a!=0?(b='<sup>'+a.a+'<\/sup>'+a.i):(b=a.i);if(a.c==1&&a.d==1)return b;if(a.c==a.d)return b+'<sub>'+a.c+'<\/sub>';return b+'<sub>'+a.d+'-'+a.c+'<\/sub>'}
function Cu(a,b){var c,d,e,f;if(a.c)throw Xg(new hv(nx));if(a.e)throw Xg(new hv(ox));f=0;for(d=new bq(a.d);d.a<d.c.a.length;){c=aq(d);f+=nt(Jv(c,b))*c.f}return e=bj(f*Tw),e/Tw}
function Pu(a){var b,c,d,e,f,g;if(a.e)throw Xg(new hv(sx));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=b.e*Ct(b)}return g=bj(f*Tw),g/Tw}
function gm(){gm=Dh;fm=Hd(Ad(Ee,1),pw,6,15,[-128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])}
function Iv(a,b){Gv();var c,d,e,f;f=2;for(d=new bq(a.a);d.a<d.c.a.length;){c=aq(d);e=Hv(c.a.i);if(!e){if(b==null){return null}else{f+=(ht(b),b)*c.b}}else{f+=e.a*c.b}}return f/2}
function Xv(a,b,c){var d,e;for(d=0;d<a.a.a.length;d++){for(e=d+1;e<a.a.a.length;e++){b[d]=b[d]+ru((lr(e,a.a.a.length),yp(a.a,e)));c[d]=c[d]+qu((lr(e,a.a.a.length),yp(a.a,e)))}}}
function Mq(){function b(){try{return (new Map).entries().next().done}catch(a){return false}}
if(typeof Map==='function'&&Map.prototype.entries&&b()){return Map}else{return Nq()}}
function Bj(a){var b,c;if(a>=Cw){b=55296+(a-Cw>>10&1023)&Dw;c=56320+(a-Cw&1023)&Dw;return String.fromCharCode(b)+(''+String.fromCharCode(c))}else{return String.fromCharCode(a&Dw)}}
function gl(a,b,c,d){var e,f,g;if(d==0){Tj(b,0,a,c,a.length-c)}else{g=32-d;a[a.length-1]=0;for(f=a.length-1;f>c;f--){a[f]|=b[f-c-1]>>>g;a[f-1]=b[f-c-1]<<d}}for(e=0;e<c;e++){a[e]=0}}
function im(a,b,c,d){while(true){if(d>=a.c){Tj(b,c,a.a,sh(Zg(a.b,63)),a.c);jm(a,a.a);a.b=Yg(a.b,a.c);c+=a.c;d-=a.c;a.c=64}else{Tj(b,c,a.a,sh(Zg(a.b,63)),d);a.b=Yg(a.b,d);a.c-=d;break}}}
function Xr(a,b,c,d){var e,f;f=b;e=f.c==null||a.b.Y(c.c,f.c)>0?1:0;while(f.a[e]!=c){f=f.a[e];e=a.b.Y(c.c,f.c)>0?1:0}f.a[e]=d;d.b=c.b;d.a[0]=c.a[0];d.a[1]=c.a[1];c.a[0]=null;c.a[1]=null}
function Bv(a,b,c){var d,e;d=b.a!=0?Ct(b):$wnd.Math.pow(qn(kn(a.a.a,b.i).b)-1,Ct(b));e=c.a!=0?Ct(c):$wnd.Math.pow(qn(kn(a.a.a,c.i).b)-1,Ct(c));if(d==e)return Di(b.b,c.b);return -Di(d,e)}
function zv(a,b,c){var d,e,f,g,h;this.d=a;qv(this);this.a=c;e=qn(b.b);xv(this,a.b/(e*4));for(g=(h=(new zo(b.b)).a.N().K(),new Eo(h));g.a.O();){f=(d=g.a.P(),d.T());Tr(this.c,f.b,f.d/100)}}
function Qt(a,b){var c,d,e,f,g,h;e=new au;d=(new ps(a)).b.V();while(_n(d.a)){f=d.b=ao(d.a);g=nt(f.S());h=nt(f.T());js(d);g=bj(g/b)*b;c=Um(e.W(g));c!=null&&(h+=(ht(c),c));Tr(e,g,h)}Ot(a,e)}
function Ft(a,b){var c,d;c=a.i;!!b&&ln(b,a.i)&&uj(kn(b,a.i).e)&&(c=kn(b,a.i).e);d='';a.a!=0?(d+='['+a.a+c+']'):(d+=c);if(a.c==1&&a.d==1)return d;if(a.c==a.d)return d+a.c;return d+a.d+'-'+a.c}
function zu(a){var b,c,d,e;if(a.c)throw Xg(new hv(px));if(a.e)throw Xg(new hv('The mass is not defined'));d=0;for(c=new bq(a.d);c.a<c.c.a.length;){b=aq(c);d+=Ou(b)*b.f}return e=bj(d*Sw),e/Sw}
function de(a,b){var c,d,e;b&=63;if(b<22){c=a.l<<b;d=a.m<<b|a.l>>22-b;e=a.h<<b|a.m>>22-b}else if(b<44){c=0;d=a.l<<b-22;e=a.m<<b-22|a.l>>44-b}else{c=0;d=0;e=a.l<<b-44}return Md(c&Iw,d&Iw,e&Jw)}
function fe(a,b){var c,d,e,f;b&=63;c=a.h&Jw;if(b<22){f=c>>>b;e=a.m>>b|c<<22-b;d=a.l>>b|a.m<<22-b}else if(b<44){f=0;e=c>>>b-22;d=a.m>>b-22|a.h<<44-b}else{f=0;e=0;d=c>>>b-44}return Md(d&Iw,e&Iw,f&Jw)}
function Zt(a){var b,c,d,e,f,g,h;e=a.d;e>(a.a/2|0)&&(e=a.a/2|0);f='';d=(new ps(a)).b.V();b=0;while(_n(d.a)&&b<e){++b;c=d.b=ao(d.a);g=nt(c.S());h=nt(c.T());h>-1.0E100&&(f+=g+', '+h+hx)}return f}
function $t(a){var b,c,d,e,f,g,h;e=a.d;e>(a.a/2|0)&&(e=a.a/2|0);f=new Fj;d=(new ps(a)).b.V();b=0;while(_n(d.a)&&b<e){++b;c=d.b=ao(d.a);g=nt(c.S());h=nt(c.T());Ej(f,Xt(g)+', '+Xt(h*100)+hx)}return f}
function Wt(a){var b,c,d,e,f,g,h;g=a.a/2|0;if(a.d<g)return;h=new Ms(new cu);sm(h,new ps(a));e=0;for(f=(d=(new jp(h.g)).a.N().b.V(),new pp(d));_n(f.a.a);){c=(b=is(f.a),b.S());e++>g&&Ur(a,c.S())}}
function Lu(a,b){var c;if(b.c<b.d)throw Xg(new hv('Syntax error: maxCount<minCount'));c=Nu(a,b.i);if(c)if(c.a==b.a){c.d+=b.d;c.c+=b.c;return}b.c==0&&b.d==0&&(a.e=true);Tr(a.g,b,(Th(),Sh))==null}
function rk(a,b,c){var d,e,f,g,h;f=(e=a/b,e>0?$wnd.Math.floor(e):$wnd.Math.ceil(e));g=a%b;h=Di(a*b,0);if(g!=0){d=Di($wnd.Math.abs(g)*2,$wnd.Math.abs(b));f+=uk(De(f)&1,h*(5+d),c)}return new kk(f)}
function jl(a,b,c,d,e){var f,g,h;f=true;for(g=0;g<d;g++){f=f&c[g]==0}if(e==0){Tj(c,d,a,0,b)}else{h=32-e;f=f&c[g]<<h==0;for(g=0;g<b-1;g++){a[g]=c[g+d]>>>e|c[g+d+1]<<h}a[g]=c[g+d]>>>e;++g}return f}
function Fh(a,b){var c=$wnd;if(a===''){return c}var d=a.split('.');!(d[0] in c)&&c.execScript&&c.execScript('var '+d[0]);for(var e;d.length&&(e=d.shift());){c=c[e]=c[e]||!d.length&&b||{}}return c}
function $u(b){var c,d;d=new kw;jw(d,'name',b.c);jw(d,'symbol',b.b);jw(d,vx,Tu(b.a));try{hw(d,'mass',new Uc(Ou(b.a)))}catch(a){a=Wg(a);if(we(a,4)){c=a;ob(c,(Sj(),Qj),'')}else throw Xg(a)}return d}
function Eb(a){var b;if(a.c==null){b=Ce(a.b)===Ce(Cb)?null:a.b;a.d=b==null?xw:ze(b)?b==null?null:b.name:Be(b)?'String':fi(ib(b));a.a=a.a+': '+(ze(b)?b==null?null:b.message:b+'');a.c='('+a.d+') '+a.a}}
function Zl(){Zl=Dh;Yl=new $l('UP',0);Sl=new $l('DOWN',1);Rl=new $l('CEILING',2);Tl=new $l('FLOOR',3);Wl=new $l('HALF_UP',4);Ul=new $l('HALF_DOWN',5);Vl=new $l('HALF_EVEN',6);Xl=new $l('UNNECESSARY',7)}
function Vt(a,b){var c,d,e,f,g;c=gx;d=(new ps(a)).b.V();while(_n(d.a)){e=d.b=ao(d.a);e.S();g=nt(e.T());g>c&&(c=g)}d=(new ps(a)).b.V();while(_n(d.a)){e=d.b=ao(d.a);f=e.S();g=e.T();Tr(a,f,(ht(g),g)/c*b)}}
function Gu(a){var b,c,d;c=new bq(a.d);d=new Gj('');c.a<c.c.a.length&&(d=new Gj(Gh(aq(c))));while(c.a<c.c.a.length){b=aq(c);b.f==1?Ej(d,'.'+Tu(b)):b.f==0?Ej(d,'.n'+Tu(b)):Ej(d,'.'+b.f+Tu(b))}return d.a}
function Bq(a,b,c){var d,e,f,g,h;h=b==null?0:(g=kb(b),g|0);e=(d=a.a.get(h),d==null?[]:d);if(e.length==0){a.a.set(h,e)}else{f=yq(b,e);if(f){return f.U(c)}}e[e.length]=new Qo(b,c);++a.c;tq(a.b);return null}
function jq(a,b,c,d,e,f){var g,h,i,j;g=d-c;if(g<7){gq(b,c,d,f);return}i=c+e;h=d+e;j=i+(h-i>>1);jq(b,a,i,j,-e,f);jq(b,a,j,h,-e,f);if(f.Y(a[j-1],a[j])<=0){while(c<d){b[c++]=a[i++]}return}hq(a,i,j,h,b,c,d,f)}
function rv(a,b){var c;if(b<=0)throw Xg(new Ab('Error: power='+b));if(b==1)return a;if(b==2){a.c=tv(a,a);return a}--b;c=new yv(a.d,a.c);while(b!=0){(b&1)!=0&&(a.c=tv(a,c));b>>=1;b!=0&&(c.c=tv(c,c))}return a}
function xt(a){var b,c,d,e;b=0;d=a.length;e=d-4;c=0;while(c<e){b=a.charCodeAt(c+3)+31*(a.charCodeAt(c+2)+31*(a.charCodeAt(c+1)+31*(a.charCodeAt(c)+31*b)));b=b|0;c+=4}while(c<d){b=b*31+lj(a,c++)}b=b|0;return b}
function ec(b,c){var d,e,f,g;for(e=0,f=b.length;e<f;e++){g=b[e];try{g[1]?g[0].cb()&&(c=dc(c,g)):g[0].cb()}catch(a){a=Wg(a);if(we(a,9)){d=a;Rb();Xb(we(d,52)?Ce(d.b)===Ce(Cb)?null:d.b:d)}else throw Xg(a)}}return c}
function Ru(a){var b,c,d,e,f;if(a.e)throw Xg(new hv('Cannot get the number of atoms: this is a range formula'));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=Ct(b)}return f}
function Ou(a){var b,c,d,e,f,g;if(a.e)throw Xg(new hv('Cannot calculate mass of a range formula'));f=0;for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());f+=b.b*Ct(b)}return g=bj(f*Sw),g/Sw}
function pd(a){if(!a){return Pc(),Oc}var b=a.valueOf?a.valueOf():a;if(b!==a){var c=ld[typeof b];return c?c(b):sd(typeof b)}else if(a instanceof Array||a instanceof $wnd.Array){return new Ac(a)}else{return new ed(a)}}
function Mk(a,b){var c;if(b<0){throw Xg(new Nh('Negative exponent'))}if(b==0){return yk}else if(b==1||Hk(a,yk)||Hk(a,Ck)){return a}if(!Qk(a,0)){c=1;while(!Qk(a,c)){++c}return Lk($k(c*b),Mk(Pk(a,c),b))}return Ol(a,b)}
function nk(a){var b,c;if(a>-140737488355328&&a<140737488355328){if(a==0){return 0}b=a<0;b&&(a=-a);c=De($wnd.Math.floor($wnd.Math.log(a)/0.6931471805599453));(!b||a!=$wnd.Math.pow(2,c))&&++c;return c}return ok(dh(a))}
function Kv(a){var b,c,d;this.b=61;this.a=a;c=a/(2*$wnd.Math.sqrt(2*$wnd.Math.log(2)));this.c=Ed(Ge,Qw,6,61,15,1);for(b=0;b<61;b++){d=b-30;this.c[b]=1/(c*$wnd.Math.sqrt(6.283185307179586))*$wnd.Math.exp(-d*d/(2*c*c))}}
function Jl(a,b,c,d,e){var f,g,h,i;if(Ce(a)===Ce(b)&&d==e){Ql(a,d,c);return}for(h=0;h<d;h++){g=0;f=a[h];for(i=0;i<e;i++){g=Yg(Yg(jh(Zg(f,Vw),Zg(b[i],Vw)),Zg(c[h+i],Vw)),Zg(sh(g),Vw));c[h+i]=sh(g);g=oh(g,32)}c[h+e]=sh(g)}}
function Tu(a){var b,c,d,e,f;if(a.g.d==0)return '';f=new Gj('');for(c=(e=(new jp(a.g)).a.N().b.V(),new pp(e));_n(c.a.a);){b=(d=is(c.a),d.S());Ej(f,Ft(b,a.c))}a.a!=0&&(a.a>0?Ej(f,'(+'+a.a+')'):Ej(f,'('+a.a+')'));return f.a}
function Jv(a,b){Gv();var c,d,e,f,g,h;h=2;for(d=(g=(new jp(a.g)).a.N().b.V(),new pp(g));_n(d.a.a);){c=(f=is(d.a),f.S());e=Hv(c.i);if(!e){if(b==null){return null}else{h+=(ht(b),b)*Ct(c)}}else{h+=e.a*Ct(c)}}return (h+a.a)/2}
function Ui(a){var b,c,d;if(a<0){return 0}else if(a==0){return 32}else{d=-(a>>16);b=d>>16&16;c=16-b;a=a>>b;d=a-256;b=d>>16&8;c+=b;a<<=b;d=a-4096;b=d>>16&4;c+=b;a<<=b;d=a-16384;b=d>>16&2;c+=b;a<<=b;d=a>>14;b=d&~(d>>1);return c+2-b}}
function Mb(b){var c=(!Kb&&(Kb=Nb()),Kb);var d=b.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g,function(a){return Lb(a,c)});return '"'+d+'"'}
function Cq(a,b){var c,d,e,f,g,h;g=b==null?0:(f=kb(b),f|0);d=(c=a.a.get(g),c==null?[]:c);for(h=0;h<d.length;h++){e=d[h];if(wq(b,e.S())){if(d.length==1){d.length=0;a.a[dx](g)}else{d.splice(h,1)}--a.c;tq(a.b);return e.T()}}return null}
function ee(a,b){var c,d,e,f,g;b&=63;c=a.h;d=(c&Kw)!=0;d&&(c|=-1048576);if(b<22){g=c>>b;f=a.m>>b|c<<22-b;e=a.l>>b|a.m<<22-b}else if(b<44){g=d?Jw:0;f=c>>b-22;e=a.m>>b-22|c<<44-b}else{g=d?Jw:0;f=d?Iw:0;e=c>>b-44}return Md(e&Iw,f&Iw,g&Jw)}
function Qk(a,b){var c,d,e;if(b==0){return (a.a[0]&1)!=0}if(b<0){throw Xg(new Nh('Negative bit address'))}e=b>>5;if(e>=a.d){return a.e<0}c=a.a[e];b=1<<(b&31);if(a.e<0){d=Jk(a);if(e<d){return false}else d==e?(c=-c):(c=~c)}return (c&b)!=0}
function ul(a,b,c,d,e){var f,g,h;f=0;g=0;for(h=0;h<d;h++){f=(Gl(),Yg(jh(Zg(c[h],Vw),Zg(e,Vw)),Zg(sh(f),Vw)));g=Yg(ph(Zg(a[b+h],Vw),Zg(f,Vw)),g);a[b+h]=sh(g);g=nh(g,32);f=oh(f,32)}g=Yg(ph(Zg(a[b+d],Vw),f),g);a[b+d]=sh(g);return sh(nh(g,32))}
function ri(a){if(a.I()){var b=a.c;b.J()?(a.k='['+b.j):!b.I()?(a.k='[L'+b.G()+';'):(a.k='['+b.G());a.b=b.F()+'[]';a.i=b.H()+'[]';return}var c=a.f;var d=a.d;d=d.split('/');a.k=ui('.',[c,ui('$',d)]);a.b=ui('.',[c,ui('.',d)]);a.i=d[d.length-1]}
function _v(b,c){var d,e,f,g,h;h=new gr;try{for(e=(g=(new jp(b.g)).a.N().b.V(),new pp(g));_n(e.a.a);){d=(f=is(e.a),f.S());d.c=aj(d.c,De(c/d.e));if(d.d>d.c)return null;fr(h,new tu(d))}Fp(h.a)}catch(a){a=Wg(a);if(!we(a,4))throw Xg(a)}return h}
function Fu(b){var c,d,e;e=wj(b,'/');if(e.length!=2)throw Xg(new hv(rx+b));try{c=Bi(e[1]);if(c==0)throw Xg(new hv('Syntax error: divide by zero: '+b));d=Bi(e[0]);return d/c}catch(a){a=Wg(a);if(we(a,21)){throw Xg(new hv(rx+b))}else throw Xg(a)}}
function _t(a){var b,c,d,e,f,g,h;e=a.d;e>(a.a/2|0)&&(e=a.a/2|0);f=Cd(Ge,[pw,Qw],[32,6],15,[e,2],2);b=0;for(h=(d=(new jp(a)).a.N().b.V(),new pp(d));_n(h.a.a);){g=(c=is(h.a),c.S());f[b][0]=(ht(g),g);f[b][1]=nt(Um(Kr(a,g)));++b;if(b==e)break}return f}
function gv(b){fv();var c,d,e,f,g;if(b==null)return ev;g=wj(b,' *, *');for(e=0;e<g.length;e++){f=g[e];d=vj(f,' *:.*','');c=vj(f,'.*: *','');if(!oj(d,'')&&!oj(c,'')){try{nn(ev,d,new _u(d,d,c,dv,ev))}catch(a){a=Wg(a);if(!we(a,4))throw Xg(a)}}}return ev}
function Ch(a,b,c){var d=Ah,h;var e=d[a];var f=e instanceof Array?e[0]:null;if(e&&!f){_=e}else{_=(h=b&&b.prototype,!h&&(h=Ah[b]),Eh(h));_.ab=c;_.constructor=_;!b&&(_.bb=Hh);d[a]=_}for(var g=3;g<arguments.length;++g){arguments[g].prototype=_}f&&(_._=f)}
function ju(a){var b,c,d,e,f;f='Element: '+a.a+kx+a.g+' - exact mass: '+a.d+lx+a.c+' - name: '+a.e+' - nb isotope: '+qn(a.b)+hx;for(d=(e=(new zo(a.b)).a.N().K(),new Eo(e));d.a.O();){c=(b=d.a.P(),b.T());f+='Number: '+c.c+lx+c.b+mx+c.d+kx+c.a+hx}return f}
function bt(a){var b,c,d,e,f,g,h;g=a.length;b=0;for(f=0;f<g;){d=Yh(a,f,a.length);f+=d>=Cw?2:1;d<128?++b:d<2048?(b+=2):d<Cw?(b+=3):d<2097152?(b+=4):d<67108864&&(b+=5)}c=Ed(Ee,pw,6,b,15,1);h=0;for(e=0;e<g;){d=Yh(a,e,a.length);e+=d>=Cw?2:1;h+=at(c,h,d)}return c}
function At(a,b){if(Bt(a,b))return 0;if(oj(a.i,'C')){if(oj(b.i,'C'))return a.a-b.a;return -1}if(oj(a.i,'H')){if(oj(b.i,'C'))return 1;if(oj(b.i,'H'))return a.a-b.a;return -1}if(oj(b.i,'H')||oj(b.i,'C')){return 1}if(oj(a.i,b.i))return a.a-b.a;return mj(a.i,b.i)}
function Hl(a,b){Gl();var c,d,e,f,g,h,i,j,k;if(b.d>a.d){h=a;a=b;b=h}if(b.d<63){return Nl(a,b)}g=(a.d&-2)<<4;j=Pk(a,g);k=Pk(b,g);d=Al(a,Nk(j,g));e=Al(b,Nk(k,g));i=Hl(j,k);c=Hl(d,e);f=Hl(Al(j,d),Al(e,k));f=vl(vl(f,i),c);f=Nk(f,g);i=Nk(i,g<<1);return vl(vl(i,f),c)}
function Ud(a){var b,c,d;c=a.l;if((c&c-1)!=0){return -1}d=a.m;if((d&d-1)!=0){return -1}b=a.h;if((b&b-1)!=0){return -1}if(b==0&&d==0&&c==0){return -1}if(b==0&&d==0&&c!=0){return Vi(c)}if(b==0&&d!=0&&c==0){return Vi(d)+22}if(b!=0&&d==0&&c==0){return Vi(b)+44}return -1}
function It(a,b,c,d){var e;if(c>d)throw Xg(new hv(fx));if(b==0){this.d=c;this.c=d;this.e=hu(a);this.f=a.f;this.a=0;this.i=a.g;this.b=a.c;return}e=jn(a.b,new Pi(b));if(!e)throw Xg(new hv('Isotope not found'));this.a=b;this.i=a.g;this.b=e.b;this.e=e.b;this.d=c;this.c=d}
function $d(a){var b,c,d,e,f;if(isNaN(a)){return pe(),oe}if(a<-9223372036854775808){return pe(),me}if(a>=9223372036854775807){return pe(),le}e=false;if(a<0){e=true;a=-a}d=0;if(a>=Mw){d=De(a/Mw);a-=d*Mw}c=0;if(a>=Lw){c=De(a/Lw);a-=c*Lw}b=De(a);f=Md(b,c,d);e&&Sd(f);return f}
function rm(a){var b;b=Ed(Ee,pw,6,8,15,1);b[0]=sh(a)<<24>>24;a=oh(a,8);b[1]=sh(a)<<24>>24;a=oh(a,8);b[2]=sh(a)<<24>>24;a=oh(a,8);b[3]=sh(a)<<24>>24;a=oh(a,8);b[4]=sh(a)<<24>>24;a=oh(a,8);b[5]=sh(a)<<24>>24;a=oh(a,8);b[6]=sh(a)<<24>>24;a=oh(a,8);b[7]=sh(a)<<24>>24;return b}
function _u(b,c,d,e,f){var g;this.b=b;this.c=c;try{this.a=new Uu(d,e,f)}catch(a){a=Wg(a);if(we(a,8)){g=a;Sj();"Group creation error: '"+b+"'='"+d+"': "+rb(g,g.s());this.a=new Uu('',e,f)}else throw Xg(a)}if(this.a.e)throw Xg(new hv('Range formulas not allowed for groups'))}
function fk(a,b){var c;ht(b);c=5-a.e;if(c==0){return a}if(c>0){if(c<$j.length&&a.a+_j[De(c)]<54){return new kk(a.f*$j[De(c)])}return new mk(Ml((!a.c&&(a.c=cl(a.f)),a.c),De(c)))}if(a.a<54&&-c<$j.length){return rk(a.f,$j[De(-c)],b)}return qk((!a.c&&(a.c=cl(a.f)),a.c),Pl(-c),b)}
function Ll(a,b){var c,d,e,f,g,h,i,j,k;j=a.e;if(j==0){return Dk(),Ck}d=a.d;c=a.a;if(d==1){e=jh(Zg(c[0],Vw),Zg(b,Vw));i=sh(e);g=sh(oh(e,32));return g==0?new Sk(j,i):new Tk(j,2,Hd(Ad(He,1),pw,6,15,[i,g]))}h=d+1;f=Ed(He,pw,6,h,15,1);f[d]=Kl(f,c,d,b);k=new Tk(j,h,f);Fk(k);return k}
function Nl(a,b){var c,d,e,f,g,h,i,j,k,l,m;d=a.d;f=b.d;h=d+f;i=a.e!=b.e?-1:1;if(h==2){k=jh(Zg(a.a[0],Vw),Zg(b.a[0],Vw));m=sh(k);l=sh(oh(k,32));return l==0?new Sk(i,m):new Tk(i,2,Hd(Ad(He,1),pw,6,15,[m,l]))}c=a.a;e=b.a;g=Ed(He,pw,6,h,15,1);Il(c,d,e,f,g);j=new Tk(i,h,g);Fk(j);return j}
function gu(a){var b,c,d,e,f,g,h;if(qn(a.b)==0){a.d=a.c;a.f=sh(dh($wnd.Math.round(a.c)));return}b=1.7976931348623157E308;h=gx;d=true;for(f=(g=(new zo(a.b)).a.N().K(),new Eo(g));f.a.O();){e=(c=f.a.P(),c.T());if(e.d>h||d){d=false;b=e.b;h=e.d}}a.d=b;a.f=sh(dh($wnd.Math.round(b)))}
function Gl(){Gl=Dh;var a,b;Dl=Ed(Bf,pw,5,32,0,1);El=Ed(Bf,pw,5,32,0,1);Fl=Hd(Ad(He,1),pw,6,15,[1,10,100,1000,Ew,Rw,Sw,10000000,100000000,Nw]);a=1;for(b=0;b<=18;b++){Dl[b]=dl(a);El[b]=dl(mh(a,b));a=jh(a,5)}for(;b<El.length;b++){Dl[b]=Lk(Dl[b-1],Dl[1]);El[b]=Lk(El[b-1],(Dk(),Ak))}}
function Dk(){Dk=Dh;var a;yk=new Sk(1,1);Ak=new Sk(1,10);Ck=new Sk(0,0);xk=new Sk(-1,1);zk=Hd(Ad(Bf,1),pw,5,0,[Ck,yk,new Sk(1,2),new Sk(1,3),new Sk(1,4),new Sk(1,5),new Sk(1,6),new Sk(1,7),new Sk(1,8),new Sk(1,9),Ak]);Bk=Ed(Bf,pw,5,32,0,1);for(a=0;a<Bk.length;a++){Bk[a]=dl(mh(1,a))}}
function il(a,b){var c,d,e,f,g;d=b>>5;b&=31;if(d>=a.d){return a.e<0?(Dk(),xk):(Dk(),Ck)}f=a.d-d;e=Ed(He,pw,6,f+1,15,1);jl(e,f,a.a,d,b);if(a.e<0){for(c=0;c<d&&a.a[c]==0;c++);if(c<d||b>0&&a.a[c]<<32-b!=0){for(c=0;c<f&&e[c]==-1;c++){e[c]=0}c==f&&++f;++e[c]}}g=new Tk(a.e,f,e);Fk(g);return g}
function Rr(a,b,c,d){var e,f;if(!b){return c}else{e=a.b.Y(c.c,b.c);if(e==0){d.d=Io(b,c.d);d.b=true;return b}f=e<0?0:1;b.a[f]=Rr(a,b.a[f],c,d);if(Sr(b.a[f])){if(Sr(b.a[1-f])){b.b=true;b.a[0].b=false;b.a[1].b=false}else{Sr(b.a[f].a[f])?(b=Zr(b,1-f)):Sr(b.a[f].a[1-f])&&(b=Yr(b,1-f))}}}return b}
function mu(a,b,c){var d,e,f,g,h,i,j,k,l;this.e=c;this.g=b;this.a=a.a;this.b=new xq;h=vj(c,'[^0-9,\\.]','');k=wj(h,',');e=0;for(g=(j=(new zo(a.b)).a.N().K(),new Eo(j));g.a.O();){f=(d=g.a.P(),d.T());l=0;k.length>e&&(l=Ai(k[e]));i=new av(f.c,f.b,l,f.a);mn(this.b,Xi(f.c),i);++e}fu(this);gu(this)}
function tl(a,b){var c,d,e,f,g;d=Zg(b,Vw);if($g(a,0)>=0){f=ah(a,d);g=ih(a,d)}else{c=oh(a,1);e=b>>>1;f=ah(c,e);g=ih(c,e);g=Yg(mh(g,1),Zg(a,1));if((b&1)!=0){if($g(f,g)<=0){g=ph(g,f)}else{if(hh(ph(f,g),d)){g=Yg(g,ph(d,f));f=ph(f,1)}else{g=Yg(g,ph(mh(d,1),f));f=ph(f,2)}}}}return lh(mh(g,32),Zg(f,Vw))}
function Gv(){Gv=Dh;Fv=new xq;nn(Fv,'O',Xi(0));nn(Fv,'N',Xi(1));nn(Fv,'H',Xi(-1));nn(Fv,'C',Xi(2));nn(Fv,'F',Xi(-1));nn(Fv,'Cl',Xi(-1));nn(Fv,'Br',Xi(-1));nn(Fv,'I',Xi(-1));nn(Fv,'S',Xi(0));nn(Fv,'P',Xi(1));nn(Fv,'Li',Xi(-1));nn(Fv,'Na',Xi(-1));nn(Fv,'K',Xi(-1));nn(Fv,'Ca',Xi(0));nn(Fv,'Mg',Xi(0))}
function al(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;m=b.length;i=m;if(b.charCodeAt(0)==45){k=-1;l=1;--m}else{k=1;l=0}f=(ml(),ll)[10];e=m/f|0;p=m%f;p!=0&&++e;h=Ed(He,pw,6,e,15,1);c=kl[8];g=0;n=l+(p==0?f:p);for(o=l;o<i;o=n,n=n+f){d=Bi(b.substr(o,n-o));j=(Gl(),Kl(h,h,g,c));j+=zl(h,g,d);h[g++]=j}a.e=k;a.d=g;a.a=h;Fk(a)}
function Bi(a){var b,c,d,e,f;if(a==null){throw Xg(new gj(xw))}d=a.length;e=d>0&&(a.charCodeAt(0)==45||a.charCodeAt(0)==43)?1:0;for(b=e;b<d;b++){if(Zh(a.charCodeAt(b))==-1){throw Xg(new gj(ww+a+'"'))}}f=parseInt(a,10);c=f<yw;if(isNaN(f)){throw Xg(new gj(ww+a+'"'))}else if(c||f>uw){throw Xg(new gj(ww+a+'"'))}return f}
function je(a){var b,c,d,e,f;if(a.l==0&&a.m==0&&a.h==0){return '0'}if(a.h==Kw&&a.m==0&&a.l==0){return '-9223372036854775808'}if(a.h>>19!=0){return '-'+je(ae(a))}c=a;d='';while(!(c.l==0&&c.m==0&&c.h==0)){e=Kd(Nw);c=Nd(c,e,true);b=''+ie(Jd);if(!(c.l==0&&c.m==0&&c.h==0)){f=9-b.length;for(;f>0;f--){b='0'+b}}d=b+d}return d}
function $v(a,b){var c,d,e,f;f='';for(d=new bq(a.a);d.a<d.c.a.length;){c=aq(d);e=Dt(c.a);(e==null?!!Aq(b.a,null):Pq(b.b,e))&&(oj((e==null?Um(Aq(b.a,null)):Qq(b.b,e)).c.substr(0,'{'.length),'{')?(e=(e==null?Um(Aq(b.a,null)):Qq(b.b,e)).c):(e=(e==null?Um(Aq(b.a,null)):Qq(b.b,e)).b));c.b>1?(f+=e+c.b):c.b>0&&(f+=e)}return f}
function Lq(){if(!Object.create||!Object.getOwnPropertyNames){return false}var a='__proto__';var b=Object.create(null);if(b[a]!==undefined){return false}var c=Object.getOwnPropertyNames(b);if(c.length!=0){return false}b[a]=42;if(b[a]!==42){return false}if(Object.getOwnPropertyNames(b).length==0){return false}return true}
function kv(a){var b,c,d,e,f;c=true;for(e=new bq(a.d.d);e.a<e.c.a.length;){d=aq(e);if(c){a.e=new Av(a,d,a.c);Ut(a.e.c,d.f);b=a.e;c=false}else{b=new Av(a,d,a.c);Ut(b.c,d.f);Ot(a.e.c,b.c)}if(d.b!=''){f=St(b.c);fn(a.g,f)?mn(a.g,f,jn(a.g,f)+','+d.b):mn(a.g,f,d.b)}}if(a.e.c.d==0)throw Xg(new hv('Isotopic distribution: empty table'))}
function rl(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;m=a.a;n=a.d;o=a.e;if(n==1){d=Zg(m[0],Vw);e=Zg(b,Vw);f=ah(d,e);i=ih(d,e);o!=c&&(f=kh(f));o<0&&(i=kh(i));return Hd(Ad(Bf,1),pw,5,0,[dl(f),dl(i)])}h=o==c?1:-1;g=Ed(He,pw,6,n,15,1);j=Hd(Ad(He,1),pw,6,15,[sl(g,m,n,b)]);k=new Tk(h,n,g);l=new Tk(o,1,j);Fk(k);Fk(l);return Hd(Ad(Bf,1),pw,5,0,[k,l])}
function iu(a){var b,c,d,e,f,g,h,i;e=new kw;jw(e,'symbol',a.g);hw(e,ix,new Uc(a.d));hw(e,'mass',new Uc(a.c));jw(e,'name',a.e);hw(e,'atomicNumber',new Uc(a.a));g=new ew;hw(e,'isotopes',g.a);for(d=(h=(new zo(a.b)).a.N().K(),new Eo(h));d.a.O();){c=(b=d.a.P(),b.T());f=(i=new kw,hw(i,'mass',new Uc(c.b)),hw(i,jx,new Uc(c.d)),i);dw(g,f.a)}return e}
function Ql(a,b,c){var d,e,f,g,h;for(f=0;f<b;f++){d=0;for(h=f+1;h<b;h++){d=Yg(Yg(jh(Zg(a[f],Vw),Zg(a[h],Vw)),Zg(c[f+h],Vw)),Zg(sh(d),Vw));c[f+h]=sh(d);d=oh(d,32)}c[f+b]=sh(d)}hl(c,c,b<<1);d=0;for(e=0,g=0;e<b;++e,g++){d=Yg(Yg(jh(Zg(a[e],Vw),Zg(a[e],Vw)),Zg(c[g],Vw)),Zg(sh(d),Vw));c[g]=sh(d);d=oh(d,32);++g;d=Yg(d,Zg(c[g],Vw));c[g]=sh(d);d=oh(d,32)}return c}
function sl(a,b,c,d){var e,f,g,h,i,j,k;j=0;f=Zg(d,Vw);for(h=c-1;h>=0;h--){k=lh(mh(j,32),Zg(b[h],Vw));if($g(k,0)>=0){i=ah(k,f);j=ih(k,f)}else{e=oh(k,1);g=d>>>1;i=ah(e,g);j=ih(e,g);j=Yg(mh(j,1),Zg(k,1));if((d&1)!=0){if($g(i,j)<=0){j=ph(j,i)}else{if(hh(ph(i,j),f)){j=Yg(j,ph(f,i));i=ph(i,1)}else{j=Yg(j,ph(mh(f,1),i));i=ph(i,2)}}}}a[h]=sh(Zg(i,Vw))}return sh(j)}
function Gk(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;f=b.e;if(f==0){throw Xg(new Nh('BigInteger divide by zero'))}e=b.d;d=b.a;if(e==1){return rl(a,d[0],f)}m=a.a;n=a.d;c=n!=e?n>e?1:-1:yl(m,d,n);if(c<0){return Hd(Ad(Bf,1),pw,5,0,[Ck,a])}o=a.e;h=n-e+1;i=o==f?1:-1;g=Ed(He,pw,6,h,15,1);j=ql(g,h,m,n,d,e);k=new Tk(i,h,g);l=new Tk(o,e,j);Fk(k);Fk(l);return Hd(Ad(Bf,1),pw,5,0,[k,l])}
function Qd(a,b,c,d,e,f){var g,h,i,j,k,l,m;j=Td(b)-Td(a);g=de(b,j);i=Md(0,0,0);while(j>=0){h=Wd(a,g);if(h){j<22?(i.l|=1<<j,undefined):j<44?(i.m|=1<<j-22,undefined):(i.h|=1<<j-44,undefined);if(a.l==0&&a.m==0&&a.h==0){break}}k=g.m;l=g.h;m=g.l;g.h=l>>>1;g.m=k>>>1|(l&1)<<21;g.l=m>>>1|(k&1)<<21;--j}c&&Sd(i);if(f){if(d){Jd=ae(a);e&&(Jd=ge(Jd,(pe(),ne)))}else{Jd=Md(a.l,a.m,a.h)}}return i}
function xl(a,b,c,d,e){var f,g;f=Yg(Zg(b[0],Vw),Zg(d[0],Vw));a[0]=sh(f);f=nh(f,32);if(c>=e){for(g=1;g<e;g++){f=Yg(f,Yg(Zg(b[g],Vw),Zg(d[g],Vw)));a[g]=sh(f);f=nh(f,32)}for(;g<c;g++){f=Yg(f,Zg(b[g],Vw));a[g]=sh(f);f=nh(f,32)}}else{for(g=1;g<c;g++){f=Yg(f,Yg(Zg(b[g],Vw),Zg(d[g],Vw)));a[g]=sh(f);f=nh(f,32)}for(;g<e;g++){f=Yg(f,Zg(d[g],Vw));a[g]=sh(f);f=nh(f,32)}}$g(f,0)!=0&&(a[g]=sh(f))}
function wj(a,b){var c,d,e,f,g,h,i;c=new $wnd.RegExp(b,'g');h=Ed(xf,pw,2,0,6,1);d=0;i=a;f=null;while(true){g=c.exec(i);if(g==null||i==''){h[d]=i;break}else{h[d]=yj(i,0,g.index);i=yj(i,g.index+g[0].length,i.length);c.lastIndex=0;if(f==i){h[d]=i.substr(0,1);i=i.substr(1,i.length-1)}f=i;++d}}if(a.length>0){e=h.length;while(e>0&&h[e-1]==''){--e}e<h.length&&(h.length=e,undefined)}return h}
function uk(a,b,c){var d;d=0;switch(c.b){case 7:if(b!=0){throw Xg(new Nh('Rounding necessary'))}break;case 0:d=b==0?0:b<0?-1:1;break;case 2:d=(b==0?0:b<0?-1:1)>0?b==0?0:b<0?-1:1:0;break;case 3:d=(b==0?0:b<0?-1:1)<0?b==0?0:b<0?-1:1:0;break;case 4:(b<0?-b:b)>=5&&(d=b==0?0:b<0?-1:1);break;case 5:(b<0?-b:b)>5&&(d=b==0?0:b<0?-1:1);break;case 6:(b<0?-b:b)+a>5&&(d=b==0?0:b<0?-1:1);}return d}
function Zu(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(b.indexOf(',')==-1)throw Xg(new hv('Syntax error: combinatorial'));if(c!=d)throw Xg(new hv('Combinatorial range formulae are not allowed'));j=wj(b,',');i=0;h=j.length;m=new Gj('{');for(g=0;g<h-1;g++){l=zj(j[g]);f=new Uu(l,a.c,a.d);Ej(m,Su(f)+',');i+=Ou(f)}k=zj(j[h-1]);e=new Uu(k,a.c,a.d);Ej(m,Su(e)+'}');i+=Ou(e);i/=h;Lu(a,new Gt(m.a,i,c,d))}
function dk(a,b){var c,d,e,f,g,h;e=hk(a);h=hk(b);if(e==h){if(a.e==b.e&&a.a<54&&b.a<54){return a.f<b.f?-1:a.f>b.f?1:0}d=a.e-b.e;c=(a.d>0?a.d:$wnd.Math.floor((a.a-1)*Uw)+1)-(b.d>0?b.d:$wnd.Math.floor((b.a-1)*Uw)+1);if(c>d+1){return e}else if(c<d-1){return -e}else{f=(!a.c&&(a.c=cl(a.f)),a.c);g=(!b.c&&(b.c=cl(b.f)),b.c);d<0?(f=Lk(f,Pl(-d))):d>0&&(g=Lk(g,Pl(d)));return Ek(f,g)}}else return e<h?-1:1}
function Vv(b,c,d){var e,f,g,h,i,j,k,l,m,n;j=new kw;n=b.b.a.get(Bx);if(n!=null&&!oj(n,'')){try{d=(fv(),fv(),dv)}catch(a){a=Wg(a);if(!we(a,47))throw Xg(a)}}if(d){k=new ew;hw(j,'elements',k.a);for(f=(m=(new zo(d)).a.N().K(),new Eo(m));f.a.O();){e=(g=f.a.P(),g.T());dw(k,iu(e).a)}}if(c){l=new ew;hw(j,Ax,l.a);for(i=(m=(new zo(c)).a.N().K(),new Eo(m));i.a.O();){h=(g=i.a.P(),g.T());dw(l,$u(h).a)}}return j}
function Nv(a,b,c){Mv();var d,e,f,g,h,i,j,k,l,m,n,o;i=((b.b-1)/b.a|0)/2|0;h=a[0][0];g=a[a.length-1][0];k=sh(dh($wnd.Math.round((g-h)/c*b.a)))+2*b.a*i+1;o=Ed(Ge,Qw,6,k,15,1);for(m=0,n=a.length;m<n;++m){l=a[m];d=sh(dh($wnd.Math.round((l[0]-h)/c*b.a+b.a*i)));for(f=0;f<b.c.length;f++){o[d+f-b.a*i]+=b.c[f]*l[1]}}j=Cd(Ge,[pw,Qw],[32,6],15,[k,2],2);for(e=0;e<k;e++){j[e][0]=(e/b.a-i)*c+h;j[e][1]=o[e]}return j}
function Pl(a){Gl();var b,c,d,e;b=De(a);if(a<El.length){return El[b]}else if(a<=50){return Mk((Dk(),Ak),b)}else if(a<=1000){return Nk(Mk(Dl[1],b),b)}if(a>Sw){throw Xg(new Nh('power of ten too big'))}if(a<=uw){return Nk(Mk(Dl[1],b),b)}d=Mk(Dl[1],uw);e=d;c=dh(a-uw);b=De(a%uw);while($g(c,uw)>0){e=Lk(e,d);c=ph(c,uw)}e=Lk(e,Mk(Dl[1],b));e=Nk(e,uw);c=dh(a-uw);while($g(c,uw)>0){e=Nk(e,uw);c=ph(c,uw)}e=Nk(e,b);return e}
function Al(a,b){var c,d,e,f,g,h,i,j,k,l;g=a.e;i=b.e;if(i==0){return a}if(g==0){return b.e==0?b:new Tk(-b.e,b.d,b.a)}f=a.d;h=b.d;if(f+h==2){c=Zg(a.a[0],Vw);d=Zg(b.a[0],Vw);g<0&&(c=kh(c));i<0&&(d=kh(d));return dl(ph(c,d))}e=f!=h?f>h?1:-1:yl(a.a,b.a,f);if(e==-1){l=-i;k=g==i?Bl(b.a,h,a.a,f):wl(b.a,h,a.a,f)}else{l=g;if(g==i){if(e==0){return Dk(),Ck}k=Bl(a.a,f,b.a,h)}else{k=wl(a.a,f,b.a,h)}}j=new Tk(l,k.length,k);Fk(j);return j}
function mv(b){var c,d,e;if(b.e.c.d==0)throw Xg(new Ab(xx));Tr(b.e.c,nt(cp(Lr(b.e.c)))-2,0);Tr(b.e.c,nt(cp(Mr(b.e.c)))+2,0);d=new xq;nn(d,'FWHM',b.b+'');nn(d,'Threshold',b.a+'');try{if(b.d.d.a.length==1){e=yp(b.d.d,0);nn(d,'Monoisotopic mass',Pu(e)+'');nn(d,'Molecular weight',Ou(e)+'');Jv(e,null)!=null&&nn(d,'Unsaturation',Jv(e,null)+'')}}catch(a){a=Wg(a);if(we(a,8)){c=a;ob(c,(Sj(),Rj),'')}else throw Xg(a)}return Yt(b.e.c,b.d+' - fwhm: '+b.b,b.g,d)}
function ml(){ml=Dh;kl=Hd(Ad(He,1),pw,6,15,[yw,1162261467,Xw,1220703125,362797056,1977326743,Xw,387420489,Nw,214358881,429981696,815730721,1475789056,170859375,268435456,410338673,612220032,893871739,1280000000,1801088541,113379904,148035889,191102976,244140625,308915776,387420489,481890304,594823321,729000000,887503681,Xw,1291467969,1544804416,1838265625,60466176]);ll=Hd(Ad(He,1),pw,6,15,[-1,-1,31,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5])}
function wu(a){var b,c,d,e,f,g,h,i,j,k,l,m;if(a.c)throw Xg(new hv(nx));if(a.e)throw Xg(new hv(ox));e=new xq;for(i=new bq(a.d);i.a<i.c.a.length;){h=aq(i);for(d=(g=(new jp(h.g)).a.N().b.V(),new pp(g));_n(d.a.a);){b=(f=is(d.a),f.S());if(ln(e,b.i)){k=kn(e,b.i);k.d=De(k.d+b.d*h.f);k.c=De(k.c+b.c*h.f)}else{k=new Ht(b);k.d=De(k.d*h.f);k.c=De(k.c*h.f);nn(e,b.i,k)}}}j=zu(a);for(c=(l=(new zo(e)).a.N().K(),new Eo(l));c.a.O();){b=(f=c.a.P(),f.T());b.g=(m=bj(b.b*Ct(b)*100/j*Sw),m/Sw)}return new zo(e)}
function vl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;g=a.e;i=b.e;if(g==0){return b}if(i==0){return a}f=a.d;h=b.d;if(f+h==2){c=Zg(a.a[0],Vw);d=Zg(b.a[0],Vw);if(g==i){k=Yg(c,d);o=sh(k);n=sh(oh(k,32));return n==0?new Sk(g,o):new Tk(g,2,Hd(Ad(He,1),pw,6,15,[o,n]))}return dl(g<0?ph(d,c):ph(c,d))}else if(g==i){m=g;l=f>=h?wl(a.a,f,b.a,h):wl(b.a,h,a.a,f)}else{e=f!=h?f>h?1:-1:yl(a.a,b.a,f);if(e==0){return Dk(),Ck}if(e==1){m=g;l=Bl(a.a,f,b.a,h)}else{m=i;l=Bl(b.a,h,a.a,f)}}j=new Tk(m,l.length,l);Fk(j);return j}
function ik(a){var b,c,d,e,f;if(a.g!=null){return a.g}if(a.a<32){a.g=ol(dh(a.f),De(a.e));return a.g}e=pl((!a.c&&(a.c=cl(a.f)),a.c),0);if(a.e==0){return e}b=(!a.c&&(a.c=cl(a.f)),a.c).e<0?2:1;c=e.length;d=-a.e+c-b;f=new Mj;f.a+=''+e;if(a.e>0&&d>=-6){if(d>=0){Lj(f,c-De(a.e),String.fromCharCode(46))}else{f.a=yj(f.a,0,b-1)+'0.'+xj(f.a,b-1);Lj(f,b+1,Dj(Xj,0,-De(d)-1))}}else{if(c-b>=1){Lj(f,b,String.fromCharCode(46));++c}Lj(f,c,String.fromCharCode(69));d>0&&Lj(f,++c,String.fromCharCode(43));Lj(f,++c,''+th(dh(d)))}a.g=f.a;return a.g}
function _d(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;c=a.l&8191;d=a.l>>13|(a.m&15)<<9;e=a.m>>4&8191;f=a.m>>17|(a.h&255)<<5;g=(a.h&1048320)>>8;h=b.l&8191;i=b.l>>13|(b.m&15)<<9;j=b.m>>4&8191;k=b.m>>17|(b.h&255)<<5;l=(b.h&1048320)>>8;B=c*h;C=d*h;D=e*h;F=f*h;G=g*h;if(i!=0){C+=c*i;D+=d*i;F+=e*i;G+=f*i}if(j!=0){D+=c*j;F+=d*j;G+=e*j}if(k!=0){F+=c*k;G+=d*k}l!=0&&(G+=c*l);n=B&Iw;o=(C&511)<<13;m=n+o;q=B>>22;r=C>>9;s=(D&262143)<<4;t=(F&31)<<17;p=q+r+s+t;v=D>>18;w=F>>5;A=(G&4095)<<8;u=v+w+A;p+=m>>22;m&=Iw;u+=p>>22;p&=Iw;u&=Jw;return Md(m,p,u)}
function Nd(a,b,c){var d,e,f,g,h,i;if(b.l==0&&b.m==0&&b.h==0){throw Xg(new Nh('divide by zero'))}if(a.l==0&&a.m==0&&a.h==0){c&&(Jd=Md(0,0,0));return Md(0,0,0)}if(b.h==Kw&&b.m==0&&b.l==0){return Od(a,c)}i=false;if(b.h>>19!=0){b=ae(b);i=true}g=Ud(b);f=false;e=false;d=false;if(a.h==Kw&&a.m==0&&a.l==0){e=true;f=true;if(g==-1){a=Ld((pe(),le));d=true;i=!i}else{h=ee(a,g);i&&Sd(h);c&&(Jd=Md(0,0,0));return h}}else if(a.h>>19!=0){f=true;a=ae(a);d=true;i=!i}if(g!=-1){return Pd(a,g,i,f,c)}if(Zd(a,b)<0){c&&(f?(Jd=ae(a)):(Jd=Md(a.l,a.m,a.h)));return Md(0,0,0)}return Qd(d?a:Md(a.l,a.m,a.h),b,i,f,e,c)}
function at(a,b,c){if(c<128){a[b]=(c&127)<<24>>24;return 1}else if(c<2048){a[b++]=(c>>6&31|192)<<24>>24;a[b]=(c&63|128)<<24>>24;return 2}else if(c<Cw){a[b++]=(c>>12&15|224)<<24>>24;a[b++]=(c>>6&63|128)<<24>>24;a[b]=(c&63|128)<<24>>24;return 3}else if(c<2097152){a[b++]=(c>>18&7|240)<<24>>24;a[b++]=(c>>12&63|128)<<24>>24;a[b++]=(c>>6&63|128)<<24>>24;a[b]=(c&63|128)<<24>>24;return 4}else if(c<67108864){a[b++]=(c>>24&3|248)<<24>>24;a[b++]=(c>>18&63|128)<<24>>24;a[b++]=(c>>12&63|128)<<24>>24;a[b++]=(c>>6&63|128)<<24>>24;a[b]=(c&63|128)<<24>>24;return 5}throw Xg(new Mi('Character out of range: '+c))}
function Ku(b,c,d,e,f,g){var h,i,j,k,l,m,n,o;if(oj(c,'Zcharge')){b.a+=d;return}if(c.charCodeAt(0)==91){h=1;while($h(c.charCodeAt(h)))++h;if(f==0){try{f=Bi(c.substr(1,h-1))}catch(a){a=Wg(a);if(we(a,8)){throw Xg(new hv('Bad isotope syntax'))}else throw Xg(a)}}c=yj(c,h,c.length-1)}i=kn(b.c,c);if(!i){n=kn(b.d,c);if(!n)throw Xg(new hv('Unrecognized symbol: '+c));if(f!=0)throw Xg(new hv('Syntax error: cannot specify isotopes for groups'));if(g){m=(k=(new jp(n.a.g)).a.N().b.V(),new pp(k));while(_n(m.a.a)){l=(j=is(m.a),j.S());o=new Ht(l);o.d*=d;o.c*=e;Lu(b,o)}}else{Lu(b,new Jt(n,d,e))}}else{Lu(b,new It(i,f,d,e))}}
function pc(a,b){var c,d,e,f,g,h,i,j,k;if(b.length==0){return a.w(qw,nw,-1,-1)}k=zj(b);oj(k.substr(0,3),'at ')&&(k=k.substr(3,k.length-3));k=k.replace(/\[.*?\]/g,'');g=k.indexOf('(');if(g==-1){g=k.indexOf('@');if(g==-1){j=k;k=''}else{j=zj(k.substr(g+1,k.length-(g+1)));k=zj(k.substr(0,g))}}else{c=k.indexOf(')',g);j=k.substr(g+1,c-(g+1));k=zj(k.substr(0,g))}g=qj(k,Bj(46));g!=-1&&(k=k.substr(g+1,k.length-(g+1)));(k.length==0||oj(k,'Anonymous function'))&&(k=nw);h=sj(j,Bj(58));e=tj(j,Bj(58),h-1);i=-1;d=-1;f=qw;if(h!=-1&&e!=-1){f=j.substr(0,e);i=kc(j.substr(e+1,h-(e+1)));d=kc(j.substr(h+1,j.length-(h+1)))}return a.w(f,k,i,d)}
function qk(a,b,c){var d,e,f,g,h,i,j,k,l;f=Gk(a,b);g=f[0];i=f[1];if(i.e==0){return new mk(g)}j=a.e*b.e;if(el(b)<54){h=(l=i.d>1?lh(mh(i.a[1],32),Zg(i.a[0],Vw)):Zg(i.a[0],Vw),jh(i.e,l));e=(k=b.d>1?lh(mh(b.a[1],32),Zg(b.a[0],Vw)):Zg(b.a[0],Vw),jh(b.e,k));d=gh(mh($g(h,0)<0?kh(h):h,1),$g(e,0)<0?kh(e):e)?-1:eh(mh($g(h,0)<0?kh(h):h,1),$g(e,0)<0?kh(e):e)?1:0;d=uk(Qk(g,0)?1:0,j*(5+d),c)}else{d=Ek(Ok(i.e<0?new Tk(1,i.d,i.a):i),b.e<0?new Tk(1,b.d,b.a):b);d=uk(Qk(g,0)?1:0,j*(5+d),c)}if(d!=0){if(el(g)<54){return wk((k=g.d>1?lh(mh(g.a[1],32),Zg(g.a[0],Vw)):Zg(g.a[0],Vw),Yg(jh(g.e,k),d)))}g=vl(g,dl(d));return new mk(g)}return new mk(g)}
function sv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;p=new Wu(new Cv(a));sm(p,b);m=1;for(e=(k=(new jp(p.g)).a.N().b.V(),new pp(k));_n(e.a.a);){c=(i=is(e.a),i.S());h=kn(a.a,c.i);qn(h.b)>m&&(m=qn(h.b))}n=2*m*$wnd.Math.log(Ru(p)+1)/$wnd.Math.log(2);o=a.d.b/(n*4);xv(a,o);Tr(a.c,0,1);for(d=(j=(new jp(p.g)).a.N().b.V(),new pp(j));_n(d.a.a);){c=(i=is(d.a),i.S());h=kn(a.a,c.i);if(c.a!=0){f=new ku(c.b,c.b,h.g,h.e,h.a);h=f}if(qn(h.b)==0){l=new av(De(h.c+0.5),h.c,1,h.g);mn(h.b,new Pi(l.c),l)}if(Ct(c)<0){throw Xg(new hv('Number of element under 0'))}else if(Ct(c)==0);else if(Ct(c)==1){a.c=tv(a,new zv(a.d,h,a.a))}else{g=new zv(a.d,h,a.a);xv(g,a.b);a.c=tv(a,rv(g,Ct(c)))}}}
function Wr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n;if(!a.c){return false}g=null;m=null;i=new rs(null,null);e=1;i.a[1]=a.c;l=i;while(l.a[e]){j=e;h=m;m=l;l=l.a[e];d=a.b.Y(b,l.c);e=d<0?0:1;d==0&&(!c.c||dr(l.d,c.d))&&(g=l);if(!(!!l&&l.b)&&!Sr(l.a[e])){if(Sr(l.a[1-e])){m=m.a[j]=Zr(l,e)}else if(!Sr(l.a[1-e])){n=m.a[1-j];if(n){if(!Sr(n.a[1-j])&&!Sr(n.a[j])){m.b=false;n.b=true;l.b=true}else{f=h.a[1]==m?1:0;Sr(n.a[j])?(h.a[f]=Yr(m,j)):Sr(n.a[1-j])&&(h.a[f]=Zr(m,j));l.b=h.a[f].b=true;h.a[f].a[0].b=false;h.a[f].a[1].b=false}}}}}if(g){c.b=true;c.d=g.d;if(l!=g){k=new rs(l.c,l.d);Xr(a,i,g,k);m==g&&(m=k)}m.a[m.a[1]==l?1:0]=l.a[!l.a[0]?1:0];--a.d}a.c=i.a[1];!!a.c&&(a.c.b=false);return c.b}
function ql(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;q=Ed(He,pw,6,d+1,15,1);r=Ed(He,pw,6,f+1,15,1);i=Ui(e[f-1]);if(i!=0){gl(r,e,0,i);gl(q,c,0,i)}else{Tj(c,0,q,0,d);Tj(e,0,r,0,f)}j=r[f-1];l=b-1;m=d;while(l>=0){if(q[m]==j){k=-1}else{s=Yg(mh(Zg(q[m],Vw),32),Zg(q[m-1],Vw));v=tl(s,j);k=sh(v);u=sh(nh(v,32));if(k!=0){t=false;++k;do{--k;if(t){break}o=jh(Zg(k,Vw),Zg(r[f-2],Vw));w=Yg(mh(u,32),Zg(q[m-2],Vw));p=Yg(Zg(u,Vw),Zg(j,Vw));Ui(sh(oh(p,32)))<32?(t=true):(u=sh(p))}while(eh(uh(o,Yw),uh(w,Yw)))}}if(k!=0){g=ul(q,m-f,r,f,k);if(g!=0){--k;h=0;for(n=0;n<f;n++){h=Yg(h,Yg(Zg(q[m-f+n],Vw),Zg(r[n],Vw)));q[m-f+n]=sh(h);h=oh(h,32)}}}a[l]=k;--m;--l}if(i!=0){jl(r,f,q,0,i);return r}Tj(q,0,r,0,f);return q}
function Vu(a,b,c,d,e){var f,g,h,i,j,k,l;Ls.call(this);this.c=b;this.d=c;this.f=d;h=a.indexOf('$');if(h>-1){this.b=a.substr(h+1,a.length-(h+1));a=a.substr(0,h)}g=new RegExp('(\\([0-9]+[+-]\\))');for(j=g.exec(a);j;j=g.exec(a)){f=j[0];l=Bi(vj(vj(vj(f,'[^0-9+-]',''),'^([0-9]+)([+-])$','$2$1'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('(\\([+-][0-9]+\\))');for(k=g.exec(a);k;k=g.exec(a)){f=k[0];l=Bi(vj(vj(vj(f,'[^0-9+-]',''),'^([0-9])([+-])$','$1$2'),'^[+]',''));a=a.replace(g,'(Zcharge'+l+')')}g=new RegExp('([+-])(?![0-9])');for(i=g.exec(a);i;i=g.exec(a)){f=i[0];oj(f,'+')?(a=a.replace(g,'Zcharge')):(a=a.replace(g,'(Zcharge-1)'))}(new $wnd.RegExp('^([a-zA-Z][0-9]+-[0-9])$')).test(a)&&(this.e=true);a.indexOf('}')!=-1;Yu(this,a,e)}
function ck(){ck=Dh;var a,b,c;new lk(1,0);new lk(10,0);new lk(0,0);Wj=Ed(Af,pw,17,11,0,1);Xj=Ed(Fe,pw,6,100,15,1);Yj=Hd(Ad(Ge,1),Qw,6,15,[1,5,25,125,625,3125,15625,78125,390625,1953125,9765625,48828125,244140625,1220703125,6103515625,30517578125,152587890625,762939453125,3814697265625,19073486328125,95367431640625,476837158203125,2384185791015625]);Zj=Ed(He,pw,6,Yj.length,15,1);$j=Hd(Ad(Ge,1),Qw,6,15,[1,10,100,1000,Ew,Rw,Sw,10000000,100000000,Nw,Tw,100000000000,1000000000000,10000000000000,100000000000000,1000000000000000,10000000000000000]);_j=Ed(He,pw,6,$j.length,15,1);ak=Ed(Af,pw,17,11,0,1);a=0;for(;a<ak.length;a++){Wj[a]=new lk(a,0);ak[a]=new lk(0,a);Xj[a]=48}for(;a<Xj.length;a++){Xj[a]=48}for(c=0;c<Zj.length;c++){Zj[c]=nk(Yj[c])}for(b=0;b<_j.length;b++){_j[b]=nk($j[b])}Gl()}
function uv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.c.a;a.c.d>f&&Wt(a.c);b.c.d>f&&Wt(b.c);k=new au;j=(new ps(b.c)).b.V();e=0;while(_n(j.a)){i=j.b=ao(j.a);h=i.S();g=i.T();q=(new ps(a.c)).b.V();while(_n(q.a)){p=q.b=ao(q.a);o=p.S();n=p.T();m=(ht(o),o)+(ht(h),h);l=(ht(n),n)*(ht(g),g);d=Tm(Or(k,m));c=Tm(Nr(k,m));if(d!=null&&(ht(d),d===m)){l+=nt(Um(Kr(k,c)))}else{d!=null&&$wnd.Math.abs((ht(d),d)-m)>a.b&&(d=null);c!=null&&$wnd.Math.abs((ht(c),c)-m)>a.b&&(c=null);c!=null&&d!=null&&($wnd.Math.abs((ht(c),c)-m)<$wnd.Math.abs((ht(d),d)-m)?(d=null):(c=null));if(c!=null){if(nt(Um(Kr(k,c)))>l){l+=nt(Um(Kr(k,c)));m=(ht(c),c)}else{l+=nt(Um(Kr(k,c)));Ur(k,c)}}else if(d!=null){if(nt(Um(Kr(k,d)))>l){l+=nt(Um(Kr(k,d)));m=(ht(d),d)}else{l+=nt(Um(Kr(k,d)));Ur(k,d)}}}l>a.d.a/Rw&&Tr(k,m,l);l>e&&(e=l)}k.d>f&&Wt(k)}Ut(k,1/e);return k}
function Nq(){function e(){this.obj=this.createObject()}
;e.prototype.createObject=function(a){return Object.create(null)};e.prototype.get=function(a){return this.obj[a]};e.prototype.set=function(a,b){this.obj[a]=b};e.prototype[dx]=function(a){delete this.obj[a]};e.prototype.keys=function(){return Object.getOwnPropertyNames(this.obj)};e.prototype.entries=function(){var b=this.keys();var c=this;var d=0;return {next:function(){if(d>=b.length)return {done:true};var a=b[d++];return {value:[a,c.get(a)],done:false}}}};if(!Lq()){e.prototype.createObject=function(){return {}};e.prototype.get=function(a){return this.obj[':'+a]};e.prototype.set=function(a,b){this.obj[':'+a]=b};e.prototype[dx]=function(a){delete this.obj[':'+a]};e.prototype.keys=function(){var a=[];for(var b in this.obj){b.charCodeAt(0)==58&&a.push(b.substring(1))}return a}}return e}
function vv(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=b.c.a;a.c.d>f&&Wt(a.c);b.c.d>f&&Wt(b.c);k=new au;j=(new ps(b.c)).b.V();e=0;while(_n(j.a)){i=j.b=ao(j.a);h=i.S();g=i.T();q=(new ps(a.c)).b.V();while(_n(q.a)){p=q.b=ao(q.a);o=p.S();n=p.T();m=(ht(o),o)+(ht(h),h);l=(ht(n),n)*(ht(g),g);d=Tm(Or(k,m));c=Tm(Nr(k,m));if(d!=null&&(ht(d),d===m)){l+=nt(Um(Kr(k,c)))}else{d!=null&&$wnd.Math.abs((ht(d),d)-m)>a.b&&(d=null);c!=null&&$wnd.Math.abs((ht(c),c)-m)>a.b&&(c=null);if(c!=null&&d!=null){m=(m*l+(ht(c),c)*nt(Um(Kr(k,c)))+(ht(d),d)*nt(Um(Kr(k,d))))/(l+nt(Um(Kr(k,c)))+nt(Um(Kr(k,d))));l+=nt(Um(Kr(k,c)))+nt(Um(Kr(k,d)));Ur(k,c);Ur(k,d)}else if(c!=null){m=(m*l+(ht(c),c)*nt(Um(Kr(k,c))))/(l+nt(Um(Kr(k,c))));l+=nt(Um(Kr(k,c)));Ur(k,c)}else if(d!=null){m=(m*l+(ht(d),d)*nt(Um(Kr(k,d))))/(l+nt(Um(Kr(k,d))));l+=nt(Um(Kr(k,d)));Ur(k,d)}}l>a.d.a/Rw&&Tr(k,m,l);l>e&&(e=l)}k.d>f&&Wt(k)}Ut(k,1/e);return k}
function ol(a,b){ml();var c,d,e,f,g,h,i,j,k,l,m,n;h=$g(a,0)<0;h&&(a=kh(a));if($g(a,0)==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:l=new Mj;b<0?(l.a+='0E+',l):(l.a+='0E',l);l.a+=b==yw?'2147483648':''+-b;return l.a;}}j=Ed(Fe,pw,6,19,15,1);c=18;n=a;do{i=n;n=ah(n,10);j[--c]=sh(Yg(48,ph(i,jh(n,10))))&Dw}while($g(n,0)!=0);d=ph(ph(ph(18,c),b),1);if(b==0){h&&(j[--c]=45);return Dj(j,c,18-c)}if(b>0&&$g(d,-6)>=0){if($g(d,0)>=0){e=c+sh(d);for(g=17;g>=e;g--){j[g+1]=j[g]}j[++e]=46;h&&(j[--c]=45);return Dj(j,c,18-c+1)}for(f=2;gh(f,Yg(kh(d),1));f++){j[--c]=48}j[--c]=46;j[--c]=48;h&&(j[--c]=45);return Dj(j,c,18-c)}m=c+1;k=new Nj;h&&(k.a+='-',k);if(18-m>=1){Hj(k,j[c]);k.a+='.';k.a+=Dj(j,c+1,18-c-1)}else{k.a+=Dj(j,c,18-c)}k.a+='E';$g(d,0)>0&&(k.a+='+',k);k.a+=''+th(d);return k.a}
function ek(a,b){var c,d,e,f,g,h,i,j;c=0;g=0;f=b.length;j=new Nj;if(0<f&&b.charCodeAt(0)==43){++g;++c;if(g<f&&(b.charCodeAt(g)==43||b.charCodeAt(g)==45)){throw Xg(new gj(ww+b+'"'))}}while(g<f&&b.charCodeAt(g)!=46&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}j.a+=''+yj(b==null?xw:(ht(b),b),c,g);if(g<f&&b.charCodeAt(g)==46){++g;c=g;while(g<f&&b.charCodeAt(g)!=101&&b.charCodeAt(g)!=69){++g}a.e=g-c;j.a+=''+yj(b==null?xw:(ht(b),b),c,g)}else{a.e=0}if(g<f&&(b.charCodeAt(g)==101||b.charCodeAt(g)==69)){++g;c=g;if(g<f&&b.charCodeAt(g)==43){++g;g<f&&b.charCodeAt(g)!=45&&++c}h=b.substr(c,f-c);a.e=a.e-Bi(h);if(a.e!=De(a.e)){throw Xg(new gj('Scale out of range.'))}}i=j.a;if(i.length<16){a.f=(bk==null&&(bk=/^[+-]?\d*$/i),bk.test(i)?parseInt(i,10):NaN);if(pt(a.f)){throw Xg(new gj(ww+b+'"'))}a.a=nk(a.f)}else{gk(a,new Wk(i))}a.d=j.a.length;for(e=0;e<j.a.length;++e){d=lj(j.a,e);if(d!=45&&d!=48){break}--a.d}a.d==0&&(a.d=1)}
function Jh(){var a,b,c;b=$doc.compatMode;a=Hd(Ad(xf,1),pw,2,6,[Pw]);for(c=0;c<a.length;c++){if(oj(a[c],b)){return}}a.length==1&&oj(Pw,a[0])&&oj('BackCompat',b)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\""+b+'"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' "+b+"').<br>Modify your application's host HTML page doctype, or update your custom "+"'document.compatMode' configuration property settings."}
function Nb(){var a=['\\u0000','\\u0001','\\u0002','\\u0003','\\u0004','\\u0005','\\u0006','\\u0007','\\b','\\t','\\n','\\u000B','\\f','\\r','\\u000E','\\u000F','\\u0010','\\u0011','\\u0012','\\u0013','\\u0014','\\u0015','\\u0016','\\u0017','\\u0018','\\u0019','\\u001A','\\u001B','\\u001C','\\u001D','\\u001E','\\u001F'];a[34]='\\"';a[92]='\\\\';a[173]='\\u00ad';a[1536]='\\u0600';a[1537]='\\u0601';a[1538]='\\u0602';a[1539]='\\u0603';a[1757]='\\u06dd';a[1807]='\\u070f';a[6068]='\\u17b4';a[6069]='\\u17b5';a[8203]='\\u200b';a[8204]='\\u200c';a[8205]='\\u200d';a[8206]='\\u200e';a[8207]='\\u200f';a[8232]='\\u2028';a[8233]='\\u2029';a[8234]='\\u202a';a[8235]='\\u202b';a[8236]='\\u202c';a[8237]='\\u202d';a[8238]='\\u202e';a[8288]='\\u2060';a[8289]='\\u2061';a[8290]='\\u2062';a[8291]='\\u2063';a[8292]='\\u2064';a[8298]='\\u206a';a[8299]='\\u206b';a[8300]='\\u206c';a[8301]='\\u206d';a[8302]='\\u206e';a[8303]='\\u206f';a[65279]='\\ufeff';a[65529]='\\ufff9';a[65530]='\\ufffa';a[65531]='\\ufffb';return a}
function Eu(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B;b=vj(b,' ','');(new $wnd.RegExp('^(.*[a-zA-Z][0-9]+-[0-9].*)$')).test(b)&&(a.c=true);r=new RegExp('([A-Z][a-z]?\\{[0-9.,]*\\})');for(t=r.exec(b);t;t=r.exec(b)){h=t[1];p=(v=xu(h),w=vj(h,'\\{.*',''),gn(a.a,v)||nn(a.a,v,new mu(kn(a.a,w),v,h)),v);b=b.replace(r,p)}r=new RegExp('(\\{[A-Za-z0-9]*\\})');for(s=r.exec(b);s;s=r.exec(b)){h=s[1];q=(A=xu(h),B=vj(h,'[\\{\\}]',''),gn(a.b,A)||nn(a.b,A,new _u(A,h,B,a.a,a.b)),A);b=b.replace(r,q)}b.indexOf('}')!=-1;g=wj(b,'\\.');n=1;o=false;for(e=0,f=g.length;e<f;++e){d=g[e];if(Du(d)){if(o)throw Xg(new hv("Syntax error: 'number.number.'"));n=Ai(d);o=true;continue}u=d.indexOf('/');if(u!=-1){if(o)throw Xg(new hv("Syntax error: 'number.number/number'"));k=u+1;l=d.length;while($h(lj(d,k++))){if(k>=l)break}k<l&&--k;n=Fu(d.substr(0,k));o=true;if(k>=l)continue;else d=d.substr(k,d.length-k)}j=0;for(;j<d.length;j++){if(!$h(d.charCodeAt(j)))break}if(j>0){m=Ai(d.substr(0,j));d=d.substr(j,d.length-j);o?(n+=m/$wnd.Math.pow(10,j)):(n=m)}i=new Vu(d,a.a,a.b,n,c);i.f==0&&(a.e=true);i.e&&(a.c=true);vp(a.d,i);n=1;o=false}}
function pl(a,b){ml();var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;A=a.e;n=a.d;e=a.a;if(A==0){switch(b){case 0:return '0';case 1:return '0.0';case 2:return '0.00';case 3:return '0.000';case 4:return '0.0000';case 5:return '0.00000';case 6:return '0.000000';default:v=new Mj;b<0?(v.a+='0E+',v):(v.a+='0E',v);v.a+=-b;return v.a;}}s=n*10+1+7;t=Ed(Fe,pw,6,s+1,15,1);c=s;if(n==1){g=e[0];if(g<0){G=Zg(g,Vw);do{o=G;G=ah(G,10);t[--c]=48+sh(ph(o,jh(G,10)))&Dw}while($g(G,0)!=0)}else{G=g;do{o=G;G=G/10|0;t[--c]=48+(o-G*10)&Dw}while(G!=0)}}else{C=Ed(He,pw,6,n,15,1);F=n;Tj(e,0,C,0,n);H:while(true){w=0;for(i=F-1;i>=0;i--){D=Yg(mh(w,32),Zg(C[i],Vw));q=nl(D);C[i]=sh(q);w=sh(nh(q,32))}r=sh(w);p=c;do{t[--c]=48+r%10&Dw}while((r=r/10|0)!=0&&c!=0);d=9-p+c;for(h=0;h<d&&c>0;h++){t[--c]=48}k=F-1;for(;C[k]==0;k--){if(k==0){break H}}F=k+1}while(t[c]==48){++c}}m=A<0;f=s-c-b-1;if(b==0){m&&(t[--c]=45);return Dj(t,c,s-c)}if(b>0&&f>=-6){if(f>=0){j=c+f;for(l=s-1;l>=j;l--){t[l+1]=t[l]}t[++j]=46;m&&(t[--c]=45);return Dj(t,c,s-c+1)}for(k=2;k<-f+1;k++){t[--c]=48}t[--c]=46;t[--c]=48;m&&(t[--c]=45);return Dj(t,c,s-c)}B=c+1;u=new Nj;m&&(u.a+='-',u);if(s-B>=1){Hj(u,t[c]);u.a+='.';u.a+=Dj(t,c+1,s-c-1)}else{u.a+=Dj(t,c,s-c)}u.a+='E';f>0&&(u.a+='+',u);u.a+=''+f;return u.a}
function Yt(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;u=new Fj;t=a.d;t>(a.a/2|0)&&(t=a.a/2|0);u.a+='##TITLE= '+b+hx+'##JCAMP-DX= 5.00\r\n'+'##DATA TYPE= MASS SPECTRUM\r\n'+'##DATA CLASS= PEAK TABLE\r\n'+'##ORIGIN= Generated spectrum based on ChemCalc www.chemcalc.org\r\n'+'##SPECTROMETER/DATA SYSTEM= Based on ChemCalc isotopic distribution calculator\r\n'+'##XUNITS= M/Z\r\n'+'##YUNITS= RELATIVE ABUNDANCE\r\n'+'##NPOINTS=         \r\n';e=u.a.length;u.a+='##MAXY= 100\r\n##MINY= 0\r\n';for(n=(q=(new po(d)).a.N().K(),new vo(q));n.a.O();){m=(h=n.a.P(),h.S());Ej(u,'##$'+m+'='+(m==null?Um(Aq(d.a,null)):Qq(d.b,m))+hx)}u.a+='##PEAK TABLE= (XY..XY)\r\n';p=0;l=(new ps(a)).b.V();o=wm(new po(c),Ed(ff,{3:1,144:1},72,(new po(c)).a.size(),7,1));iq(o,0,o.length,null);g=0;r=gx;j=true;f=0;s=false;A='';while(_n(l.a)&&f<t){++f;h=l.b=ao(l.a);v=nt(h.S());w=nt(h.T());w<1.0E-9&&(w=0);if(w!=0&&A.length>0){u.a+=A;++p;A=''}i=true;for(k=g;k<o.length;k++){if(!_n(l.a)||$wnd.Math.abs(nt(o[k])-r)<$wnd.Math.abs(nt(o[k])-v)){if(i){u.a+='  $$ ';i=false}else{u.a+=','}Ej(u,jn(c,o[k]));++g}else{break}}r=v;if(j){j=false;Ej(u,Xt(v)+', '+Xt(w*100));++p}else{if(!s||w!=0){u.a+=hx;Ej(u,Xt(v)+', '+Xt(w*100));++p}else{A=hx+Xt(v)+', '+Xt(0)}w==0?(s=true):(s=false)}}u.a+='\r\n##END=\r\n';u.a=yj(u.a,0,e-10)+(p+'')+xj(u.a,e-2);return u}
function jm(a,b){var c,d,e,f;lm(b,a.e);c=a.d[0];d=a.d[1];e=a.d[2];f=a.d[3];c=mm(c,d,e,f,a.e[0],7,-680876936);f=mm(f,c,d,e,a.e[1],12,-389564586);e=mm(e,f,c,d,a.e[2],17,606105819);d=mm(d,e,f,c,a.e[3],22,-1044525330);c=mm(c,d,e,f,a.e[4],7,-176418897);f=mm(f,c,d,e,a.e[5],12,1200080426);e=mm(e,f,c,d,a.e[6],17,-1473231341);d=mm(d,e,f,c,a.e[7],22,-45705983);c=mm(c,d,e,f,a.e[8],7,1770035416);f=mm(f,c,d,e,a.e[9],12,-1958414417);e=mm(e,f,c,d,a.e[10],17,-42063);d=mm(d,e,f,c,a.e[11],22,-1990404162);c=mm(c,d,e,f,a.e[12],7,1804603682);f=mm(f,c,d,e,a.e[13],12,-40341101);e=mm(e,f,c,d,a.e[14],17,-1502002290);d=mm(d,e,f,c,a.e[15],22,1236535329);c=nm(c,d,e,f,a.e[1],5,-165796510);f=nm(f,c,d,e,a.e[6],9,-1069501632);e=nm(e,f,c,d,a.e[11],14,643717713);d=nm(d,e,f,c,a.e[0],20,-373897302);c=nm(c,d,e,f,a.e[5],5,-701558691);f=nm(f,c,d,e,a.e[10],9,38016083);e=nm(e,f,c,d,a.e[15],14,-660478335);d=nm(d,e,f,c,a.e[4],20,-405537848);c=nm(c,d,e,f,a.e[9],5,568446438);f=nm(f,c,d,e,a.e[14],9,-1019803690);e=nm(e,f,c,d,a.e[3],14,-187363961);d=nm(d,e,f,c,a.e[8],20,1163531501);c=nm(c,d,e,f,a.e[13],5,-1444681467);f=nm(f,c,d,e,a.e[2],9,-51403784);e=nm(e,f,c,d,a.e[7],14,1735328473);d=nm(d,e,f,c,a.e[12],20,-1926607734);c=om(c,d,e,f,a.e[5],4,-378558);f=om(f,c,d,e,a.e[8],11,-2022574463);e=om(e,f,c,d,a.e[11],16,1839030562);d=om(d,e,f,c,a.e[14],23,-35309556);c=om(c,d,e,f,a.e[1],4,-1530992060);f=om(f,c,d,e,a.e[4],11,1272893353);e=om(e,f,c,d,a.e[7],16,-155497632);d=om(d,e,f,c,a.e[10],23,-1094730640);c=om(c,d,e,f,a.e[13],4,681279174);f=om(f,c,d,e,a.e[0],11,-358537222);e=om(e,f,c,d,a.e[3],16,-722521979);d=om(d,e,f,c,a.e[6],23,76029189);c=om(c,d,e,f,a.e[9],4,-640364487);f=om(f,c,d,e,a.e[12],11,-421815835);e=om(e,f,c,d,a.e[15],16,530742520);d=om(d,e,f,c,a.e[2],23,-995338651);c=pm(c,d,e,f,a.e[0],6,-198630844);f=pm(f,c,d,e,a.e[7],10,1126891415);e=pm(e,f,c,d,a.e[14],15,-1416354905);d=pm(d,e,f,c,a.e[5],21,-57434055);c=pm(c,d,e,f,a.e[12],6,1700485571);f=pm(f,c,d,e,a.e[3],10,-1894986606);e=pm(e,f,c,d,a.e[10],15,-1051523);d=pm(d,e,f,c,a.e[1],21,-2054922799);c=pm(c,d,e,f,a.e[8],6,1873313359);f=pm(f,c,d,e,a.e[15],10,-30611744);e=pm(e,f,c,d,a.e[6],15,-1560198380);d=pm(d,e,f,c,a.e[13],21,1309151649);c=pm(c,d,e,f,a.e[4],6,-145523070);f=pm(f,c,d,e,a.e[11],10,-1120210379);e=pm(e,f,c,d,a.e[2],15,718787259);d=pm(d,e,f,c,a.e[9],21,-343485551);a.d[0]=a.d[0]+c|0;a.d[1]=a.d[1]+d|0;a.d[2]=a.d[2]+e|0;a.d[3]=a.d[3]+f|0}
function Yu(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;c=zj(c);c=vj(c,'[=]','');if(c.indexOf('.')!=-1)throw Xg(new Ab('Error: the formula "'+c+'"contains dots (error in parsing)'));if(oj(c,'')){return}if($h(c.charCodeAt(0))){throw Xg(new Ab('Error: the formula starts with a number'))}c.charCodeAt(0)==120&&(c='X'+yj(c,1,c.length));g=new Fr;k=1;j=1;m=1;l=1;r=1;q=1;w=c.length-1;while(w>=0){if($h(c.charCodeAt(w))){f=w;while(w>0&&$h(c.charCodeAt(w)))--w;e=nt(c.substr(w+1,f+1-(w+1)));u=Bi(e);if(c.charCodeAt(w)==45){--w;if(w<0)throw Xg(new hv("Syntax error: the formula starts with '-': "+c));f=w;while(w>0&&$h(c.charCodeAt(w)))--w;w==0&&$h(c.charCodeAt(0))&&--w;o=nt(c.substr(w+1,f+1-(w+1)));if(o.length==0){u=Bi('-'+e);v=u}else{v=Bi(o)}}else v=u;if(c.charCodeAt(w)==41){--w;if(w<0)throw Xg(new hv(tx+c));Er(g,new Pi(r));Er(g,new Pi(q));r=m;q=l;l*=u;m*=v}else{k=v;j=u}}else{if(c.charCodeAt(w)==93){s=w;--w;if(w<=1)throw Xg(new hv(ux));if(!_h(c.charCodeAt(w)))throw Xg(new hv(ux));while(w>0&&bi(c.charCodeAt(w)))--w;if(!ci(c.charCodeAt(w)))throw Xg(new hv('Syntax error: bad symbol (must start with uppercase)'));t=c.substr(w,s-w);--w;if(w<0)throw Xg(new hv(ux));if(!$h(c.charCodeAt(w)))throw Xg(new hv(ux));f=w;while(w>0&&c.charCodeAt(w)!=91)--w;p=c.substr(w+1,f+1-(w+1));try{n=Bi(p)}catch(a){a=Wg(a);if(we(a,21)){throw Xg(new hv('Syntax error: bad isotope number '+p))}else throw Xg(a)}if(c.charCodeAt(w)!=91)throw Xg(new hv("Isotope syntax error: no opening '['"));Ku(b,t,k*m,j*l,n,d);j=1;k=1;if(w>0)--w;else return}else{if(_h(c.charCodeAt(w))){s=w;while(w>0&&bi(c.charCodeAt(w)))--w;if(s==0&&w==0&&c.charCodeAt(0)==110){b.f=0;return}if(!ci(c.charCodeAt(w)))throw Xg(new hv('Syntax error: the symbol must start with uppercase'));t=c.substr(w,s+1-w);if(oj(t,'X')&&w==0){b.f=0;return}--w;Ku(b,t,k*m,j*l,0,d);j=1;k=1}else{while(c.charCodeAt(w)==41){--w;if(w<0)throw Xg(new hv(tx+c));Er(g,new Pi(r));Er(g,new Pi(q));r=m;q=l}if(w<0)break;while(c.charCodeAt(w)==40){l=q;m=r;if(g.a.a.length==0){q=1;r=1}else{q=Dr(g).a;r=Dr(g).a}--w;if(w<0)break}if(w<0)break;if(c.charCodeAt(w)==125){i=w;while(w>0&&c.charCodeAt(w)!=123)--w;if(c.charCodeAt(w)!=123)throw Xg(new hv('Syntax error (combinatorial): no opening brace'));Zu(b,c.substr(w+1,i-(w+1)),k*m,j*l);--w}}}}if(w<0)break;h=c.charCodeAt(w);if(h==123)throw Xg(new hv('Syntax error (combinatorial): no closing brace'));if(h==91)throw Xg(new hv('Syntax error (isotope): no closing bracket'));if(!/[A-Z\d]/i.test(String.fromCharCode(h))&&h!=40&&h!=91&&h!=123&&h!=93&&h!=41&&h!=125)throw Xg(new hv("Syntax error: unrecognized character: '"+String.fromCharCode(h)+"'"))}}
function Wv(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S;B=new kw;if(!b){hw(B,zx,new td(Cx));return B}O=b.b.a.get(Bx);if(O!=null&&!oj(O,'')){try{d=(fv(),fv(),dv)}catch(a){a=Wg(a);if(!we(a,47))throw Xg(a)}}H=b.b.a.get(vx);v=b.b.a.get(Dx);R=b.b.a.get(Ex)!=null&&nt((Th(),pj(b.b.a.get(Ex))?true:false));q=0.001;try{q=Ai(b.b.a.get(Fx))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}Q=1.0E-5;try{Q=Ai(b.b.a.get(Gx))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}s=0;try{s=De(Ai(b.b.a.get(Hx)))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}i=null;try{i=Ai(b.b.a.get(Ix))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}A=0;Pq(b.b,Jx)&&oj(b.b.a.get(Jx).toLowerCase(),'center')&&(A=iv);D=new kw;H==null?hw(D,vx,(Pc(),Pc(),Oc)):hw(D,vx,new td(H));Q==null?hw(D,Gx,(Pc(),Pc(),Oc)):hw(D,Gx,new Uc((ht(Q),Q)));q==null?hw(D,Fx,(Pc(),Pc(),Oc)):hw(D,Fx,new Uc((ht(q),q)));hw(D,Ex,(Ic(),R?Hc:Gc));v==null?hw(D,Dx,(Pc(),Pc(),Oc)):hw(D,Dx,new td(v));s>0&&hw(D,Hx,new Uc(s));O==null?hw(D,Bx,(Pc(),Pc(),Oc)):hw(D,Bx,new td(O));hw(B,'options',D.a);n=null;if(H!=null){H=zj(H);oj(H,'')&&(H=null)}if(H!=null){try{n=new Hu(H,d,c);if(n.d.a.length>0){if(n.e){hw(B,zx,new td('mass not defined'))}else{if(R){I=new kw;hw(I,Kx,new td(vx));jw(I,Lx,Gu(n));hw(B,vx,I.a)}else{jw(B,vx,Gu(n))}hw(B,'mw',new Uc(zu(n)));hw(B,'em',new Uc(Au(n)));hw(B,'nominalMass',new Uc(Bu(n)));hw(B,Mx,new Uc(yu(n)));try{hw(B,Nx,new Uc(Cu(n,i)))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}t=new ew;for(h=(L=wu(n).a.N().K(),new Eo(L));h.a.O();){f=(l=h.a.P(),l.T());k=new kw;jw(k,'element',f.i);hw(k,sw,new Uc(Ct(f)));hw(k,jx,new Uc(f.g));dw(t,k.a)}hw(B,'ea',t.a);if(v!=null&&!oj(v,'')){P=new pv(d,n,(ht(q),q),(ht(Q),Q));P.f=A;kv(P);lv(P);if(s>0){r=Ov(s);jv(P,r,(ht(q),q))}hw(D,'numberLines',new Uc(P.e.c.d));if(v.indexOf(Ox)>-1){if(R){w=new kw;hw(w,Kx,new td(Ox));jw(w,Lx,mv(P).a);hw(B,Ox,w.a)}else{jw(B,Ox,mv(P).a)}}if(v.indexOf('xy')>-1){if(R){S=new kw;hw(S,Kx,new td('xy'));jw(S,Lx,nv(P).a);hw(B,'xy',S.a)}else{jw(B,'xy',nv(P).a)}}if(v.indexOf('array')>-1&&v.indexOf('arrayX')==-1){e=ov(P);C=new ew;F=new ew;G=new ew;for(u=0;u<e.length;u++){dw(F,new Uc(e[u][0]));dw(G,new Uc(e[u][1]))}dw(C,F.a);dw(C,G.a);hw(B,'spectrum',C.a)}if(v.indexOf('arrayXXYY')>-1){e=ov(P);C=new ew;F=new ew;G=new ew;for(u=0;u<e.length;u++){dw(F,new Uc(e[u][0]));dw(G,new Uc(e[u][1]))}dw(C,F.a);dw(C,G.a);hw(B,'arrayXXYY',C.a)}if(v.indexOf('arrayXYXY')>-1){e=ov(P);hw(B,'arrayXYXY',(new gw(e)).a)}}N=new ew;hw(B,'parts',N.a);for(p=new bq(n.d);p.a<p.c.a.length;){o=aq(p);M=new kw;dw(N,M.a);if(R){I=new kw;hw(I,Kx,new td(vx));jw(I,Lx,Tu(o));hw(M,vx,I.a)}else{jw(M,vx,Tu(o))}hw(M,'mw',new Uc(Ou(o)));hw(M,'em',new Uc(Pu(o)));hw(M,sw,new Uc(o.f));o.b.length>0&&jw(M,'comment',o.b);iw(M,Jv(o,i));K=Pu(o)-o.a*yx;if(o.a!=0){hw(M,Mx,new Uc(o.a));K=K/$i(o.a)}hw(M,'msem',new Uc(K));Mu(o);j=new ew;for(g=(m=(new jp(o.g)).a.N().b.V(),new pp(m));_n(g.a.a);){f=(l=is(g.a),l.S());k=new kw;jw(k,'element',f.i);hw(k,sw,new Uc(Ct(f)));hw(k,jx,new Uc(f.g));dw(j,k.a)}hw(M,'ea',j.a)}}}else{hw(B,zx,new td('there is no part in the molecule'))}}catch(a){a=Wg(a);if(we(a,4)){J=a;jw(B,zx,J.f)}else throw Xg(a)}}else{hw(B,zx,new td('parameter mf not specified'))}return B}
function Zv(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db;H=0.5;S=0;M=50;K=1000;u=false;db=false;T=false;A=b.b.a.get(Px)!=null&&nt((Th(),pj(b.b.a.get(Px))?true:false));w=b.b.a.get(Qx)==null?'http://www.chemcalc.org/service/jcamp/':b.b.a.get(Qx);P='C0-100H0-202N0-10O0-10F0-3Cl0-3Br0-1';$=gx;Z=new Ls;bb=b.b.a.get(Ex)!=null&&nt((Th(),pj(b.b.a.get(Ex))?true:false));s=0.001;try{s=Ai(b.b.a.get(Fx))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}t=0;try{t=De(Ai(b.b.a.get(Hx)))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}C=new kw;if(!b){hw(C,zx,new td(Cx));return C}W=b.b.a.get(Bx);if(W!=null&&!oj(W,'')){try{d=(fv(),fv(),dv)}catch(a){a=Wg(a);if(!we(a,47))throw Xg(a)}}l=null;try{l=Ai(b.b.a.get(Ix))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}try{S=Ai(b.b.a.get(Rx))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}try{M=Ai(b.b.a.get(Sx))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}if(Pq(b.b,Tx)){try{u=(Th(),pj(b.b.a.get(Tx)))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}}if(Pq(b.b,Ux)){try{db=(Th(),pj(b.b.a.get(Ux)))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}}if(Pq(b.b,Vx)){try{T=(Th(),pj(b.b.a.get(Vx)))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}}try{K=Ai(b.b.a.get('maxNumberRows'))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}try{$=Ai(b.b.a.get(ix))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}try{H=Ai(b.b.a.get('massRange'))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}R=$-H;J=$+H;try{J=Ai(b.b.a.get('maxMass'))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}Pq(b.b,Wx)&&b.b.a.get(Wx)!=null&&b.b.a.get(Wx).length>0&&(P=b.b.a.get(Wx));if($<0){hw(C,zx,new td('monoisotopicMass must be specified and larger than 0'));return C}D=new kw;hw(D,Rx,new Uc(S));hw(D,Sx,new Uc(M));hw(D,Tx,(Ic(),u?Hc:Gc));hw(D,Ux,db?Hc:Gc);hw(D,Vx,T?Hc:Gc);hw(D,'minMass',new Uc(rh(dh($wnd.Math.round(R*Tw)))/Tw));hw(D,'maxMass',new Uc(rh(dh($wnd.Math.round(J*Tw)))/Tw));hw(D,'massRange',new Uc(rh(dh($wnd.Math.round(H*Tw)))/Tw));P==null?hw(D,Wx,(Pc(),Pc(),Oc)):hw(D,Wx,new td(P));hw(D,ix,new Uc(rh(dh($wnd.Math.round($*Tw)))/Tw));W==null?hw(D,Bx,(Pc(),Pc(),Oc)):hw(D,Bx,new td(W));hw(D,Px,A?Hc:Gc);w==null?hw(D,Qx,(Pc(),Pc(),Oc)):hw(D,Qx,new td(w));hw(D,Ex,bb?Hc:Gc);hw(C,'options',D.a);v=0;U=0;f=0;g=0;try{e=new Iu(P,d,c,false);if(e.d.a.length!=1){hw(C,zx,new td('Number of parts not equal to 1'));return C}f=yp(e.d,0).a;g=f<0?-f:f;if(f!=0){$=$*g+f*yx;R=R*g+f*yx;J=J*g+f*yx;H=H*g}V=_v(yp(e.d,0),$+H);if(V){j=Ed(Ge,Qw,6,V.a.a.length,15,1);Q=Ed(Ge,Qw,6,V.a.a.length,15,1);I=Ed(Ge,Qw,6,V.a.a.length,15,1);Xv(V,Q,I);hw(C,'bruteForceIteration',new Uc(Ai(pl(Yv(V),0))));ab=false;k=0;L=V.a.a.length;su((lr(0,V.a.a.length),yp(V.a,0)),0,$,Q[0],I[0],H);while(!ab){if($g(v,2000000000)>0){throw Xg(new hv('Iteration number is over the current maximum of: 2000000000'))}if(j[k]>=R&&j[k]<=J){cb=Iv(V,l);if(!db||cb==null||(ht(cb),cb)>=S&&(ht(cb),cb)<=M&&(!u||(ht(cb),cb)==De((ht(cb),cb)))){U=Yg(U,1);if(!T){if(Z.g.d>=K){if($wnd.Math.abs(cp(Mr(Z.g)).a)>$wnd.Math.abs(j[k]-$)){Tm(Zo(Z.g));Ks(Z,new bw(j[k]-$,j[k],cb,$v(V,c)))}}else{Ks(Z,new bw(j[k]-$,j[k],cb,$v(V,c)))}}}}while(k<L&&k>=0){v=Yg(v,1);i=(lr(k,V.a.a.length),yp(V.a,k));if(i.b<i.c){++i.b;k==0?(j[0]=i.a.e*i.b):(j[k]=j[k-1]+i.a.e*i.b);if(k<L-1){++k;su((lr(k,V.a.a.length),yp(V.a,k)),j[k-1],$,Q[k],I[k],H)}else{break}}else{--k}}k<0&&(ab=true)}}hw(C,'realIteration',new Uc(rh(ph(v,1))));hw(C,'numberResults',new Uc(rh(U)));hw(C,Mx,new Uc(f))}catch(a){a=Wg(a);if(we(a,4)){m=a;jw(C,zx,rb(m,m.f)+'\r'+(ei(Ug),Ug.k+'@'+(st(D)>>>0).toString(16)))}else throw Xg(a)}G=new ew;h='';f!=0&&(f>0?(h='(+'+f+')'):(h='('+f+')'));for(Y=(q=(new jp(Z.g)).a.N().b.V(),new pp(q));_n(Y.a.a);){X=(p=is(Y.a),p.S());F=new kw;if(f==0){r=rh(dh($wnd.Math.round(X.a*Tw)))/Tw;o=rh(dh($wnd.Math.round(X.c*Tw)))/Tw}else{r=rh(dh($wnd.Math.round(X.a/g*Tw)))/Tw;o=rh(dh($wnd.Math.round((X.c-f*yx)/g*Tw)))/Tw}hw(F,zx,new Uc(r));hw(F,'em',new Uc(o));hw(F,'ppm',new Uc(rh(dh($wnd.Math.round(r/o*Tw)))/Tw*Sw));jw(F,'info',X.b+h);try{B=w+(''+X.b)+'&fwhm='+s;t>0&&(B+='&gaussianWidth='+t);if(bb){N=new kw;hw(N,Kx,new td(vx));jw(N,Lx,Gu(new Hu(X.b+h,d,c)));hw(F,vx,N.a);if(A){O=new kw;hw(O,Kx,new td(Ox));hw(O,'url',new td(B));hw(F,Ox,O.a)}}else{jw(F,vx,Gu(new Hu(X.b+h,d,c)));A&&hw(F,'jcampURL',new td(B))}}catch(a){a=Wg(a);if(we(a,4)){n=a;jw(F,vx,rb(n,n.f))}else throw Xg(a)}try{hw(F,'unsat',new Uc(rh(dh($wnd.Math.round(nt(X.d)*Tw)))/Tw))}catch(a){a=Wg(a);if(!we(a,8))throw Xg(a)}dw(G,F.a)}hw(C,'results',G.a);return C}
function fv(){fv=Dh;var b,c,d,e,f,g,h,i,j,k,l,m,n,o;dv=new xq;e=new xq;l=wj('1\tH\tHydrogen\t1.0079407540647767\n2\tHe\tHelium\t4.002601932126928\n3\tLi\tLithium\t6.940036602958518\n4\tBe\tBeryllium\t9.01218306582\n5\tB\tBoron\t10.811028050830402\n6\tC\tCarbon\t12.010735896735273\n7\tN\tNitrogen\t14.006703211447812\n8\tO\tOxygen\t15.99940492431999\n9\tF\tFluorine\t18.9984031627392\n10\tNe\tNeon\t20.1800463805534\n11\tNa\tSodium\t22.989769282019\n12\tMg\tMagnesium\t24.30505162003182\n13\tAl\tAluminium\t26.9815385311\n14\tSi\tSilicon\t28.085498705717367\n15\tP\tPhosphorus\t30.973761998427005\n16\tS\tSulfur\t32.06478740616064\n17\tCl\tChlorine\t35.45293758302163\n18\tAr\tArgon\t39.94779856360816\n19\tK\tPotassium\t39.098300910134526\n20\tCa\tCalcium\t40.078022511320995\n21\tSc\tScandium\t44.9559082877\n22\tTi\tTitanium\t47.86674496650784\n23\tV\tVanadium\t50.94146504682524\n24\tCr\tChromium\t51.99613176185417\n25\tMn\tManganese\t54.9380439148\n26\tFe\tIron\t55.84514443879042\n27\tCo\tCobalt\t58.9331942956\n28\tNi\tNickel\t58.69334711516411\n29\tCu\tCopper\t63.54603995189275\n30\tZn\tZinc\t65.37778253794673\n31\tGa\tGallium\t69.72306608387825\n32\tGe\tGermanium\t72.62755016686985\n33\tAs\tArsenic\t74.9215945795\n34\tSe\tSelenium\t78.9593885653162\n35\tBr\tBromine\t79.90352779450998\n36\tKr\tKrypton\t83.7979999970144\n37\tRb\tRubidium\t85.4676635956754\n38\tSr\tStrontium\t87.6166444816256\n39\tY\tYttrium\t88.905840324\n40\tZr\tZirconium\t91.223641617088\n41\tNb\tNiobium\t92.90637302\n42\tMo\tMolybdenum\t95.95978854712139\n43\tTc\tTechnetium\t97.907212436\n44\tRu\tRuthenium\t101.06494015455816\n45\tRh\tRhodium\t102.905498026\n46\tPd\tPalladium\t106.4153275191986\n47\tAg\tSilver\t107.86814965477768\n48\tCd\tCadmium\t112.4115578234279\n49\tIn\tIndium\t114.81808662995083\n50\tSn\tTin\t118.71011260065993\n51\tSb\tAntimony\t121.75978370048469\n52\tTe\tTellurium\t127.60312649313722\n53\tI\tIodine\t126.90447193899999\n54\tXe\tXenon\t131.29276144954605\n55\tCs\tCaesium\t132.90545196108\n56\tBa\tBarium\t137.326891631724\n57\tLa\tLanthanum\t138.90546889772423\n58\tCe\tCerium\t140.11573076170473\n59\tPr\tPraseodymium\t140.907657623\n60\tNd\tNeodymium\t144.2415960520596\n61\tPm\tPromethium\t144.912755933\n62\tSm\tSamarium\t150.36635573073943\n63\tEu\tEuropium\t151.96437814438002\n64\tGd\tGadolinium\t157.25213066410058\n65\tTb\tTerbium\t158.925354719\n66\tDy\tDysprosium\t162.49947283943277\n67\tHo\tHolmium\t164.930328821\n68\tEr\tErbium\t167.25908267223062\n69\tTm\tThulium\t168.934217922\n70\tYb\tYtterbium\t173.05415018857693\n71\tLu\tLutetium\t174.96681497785502\n72\tHf\tHafnium\t178.48497874351798\n73\tTa\tTantalum\t180.94787565622738\n74\tW\tTungsten\t183.84177756194964\n75\tRe\tRhenium\t186.206704560478\n76\tOs\tOsmium\t190.22485964996508\n77\tIr\tIridium\t192.21605167309997\n78\tPt\tPlatinum\t195.08445687604046\n79\tAu\tGold\t196.9665687971\n80\tHg\tMercury\t200.599167040318\n81\tTl\tThallium\t204.38341285336003\n82\tPb\tLead\t207.21690807599998\n83\tBi\tBismuth\t208.980399116\n84\tPo\tPolonium\t208.98243082000002\n85\tAt\tAstatine\t209.987147983\n86\tRn\tRadon\t222.017578225\n87\tFr\tFrancium\t223.019736025\n88\tRa\tRadium\t226.02541032500002\n89\tAc\tActinium\t227.027752325\n90\tTh\tThorium\t232.03805582100003\n91\tPa\tProtactinium\t231.035884224\n92\tU\tUranium\t238.0289104816502\n93\tNp\tNeptunium\t237.048173619\n94\tPu\tPlutonium\t244.06420535600003\n95\tAm\tAmericium\t243.061381324\n96\tCm\tCurium\t247.070354147\n97\tBk\tBerkelium\t247.070307359\n98\tCf\tCalifornium\t251.079588648\n99\tEs\tEinsteinium\t252.08298054\n100\tFm\tFermium\t257.095106169\n101\tMd\tMendelevium\t258.09843155\n102\tNo\tNobelium\t259.1010311\n103\tLr\tLawrencium\t266.1198356\n104\tRf\tRutherfordium\t267.1217962\n105\tDb\tDubnium\t268.1256757\n106\tSg\tSeaborgium\t269.1286339\n107\tBh\tBohrium\t270.1333631\n108\tHs\tHassium\t277.1519058\n109\tMt\tMeitnerium\t278.1563168\n110\tDs\tDarmstadtium\t281.1645159\n111\tRg\tRoentgenium\t282.1691272\n112\tCn\tCopernicium\t285.177126\n113\tNh\tNihonium\t286.1822172\n114\tFl\tFlerovium\t289.190426\n115\tMc\tMoscovium\t290.1959873\n116\tLv\tLivermorium\t293.204496\n117\tTs\tTeennessine\t294.2104674\n118\tOg\tOganesson\t294.2139271',wx);for(h=0;h<l.length;h++){o=wj(l[h],'\t');c=new lu(Ai(o[3]),zj(o[1]),o[2],Bi(o[0]));nn(dv,c.g,c);nn(e,o[0],c)}l=wj('1\t1.007825032239\t99.9885\t1\n2\t2.0141017781212\t0.0115\t1\n3\t3.016049277924\t0\t1\n4\t3.016029320125\t0.00013\t2\n5\t4.002603254136\t99.99987\t2\n6\t6.015122887416\t7.59\t3\n7\t7.016003436645\t92.41\t3\n8\t9.01218306582\t100\t4\n9\t10.0129369541\t19.9\t5\n10\t11.0093053645\t80.1\t5\n11\t12.0\t98.93\t6\n12\t13.0033548350723\t1.07\t6\n13\t14.00324198844\t0\t6\n14\t14.003074004432\t99.636\t7\n15\t15.0001088988864\t0.364\t7\n17\t16.9991317565069\t0.038\t8\n16\t15.9949146195717\t99.757\t8\n18\t17.9991596128676\t0.205\t8\n19\t18.9984031627392\t100\t9\n21\t20.99384668541\t0.27\t10\n20\t19.992440176217\t90.48\t10\n22\t21.99138511418\t9.25\t10\n23\t22.989769282019\t100\t11\n25\t24.9858369765\t10\t12\n24\t23.98504169714\t78.99\t12\n26\t25.98259296831\t11.01\t12\n27\t26.9815385311\t100\t13\n29\t28.9764946649052\t4.685\t14\n28\t27.9769265346544\t92.223\t14\n30\t29.97377013623\t3.092\t14\n31\t30.973761998427\t100\t15\n34\t33.96786700447\t4.25\t16\n35\t35.967080712\t0.01\t16\n32\t31.972071174414\t94.99\t16\n33\t32.971458909815\t0.75\t16\n36\t34.96885268237\t75.76\t17\n37\t36.96590260255\t24.24\t17\n38\t35.96754510528\t0.3336\t18\n39\t37.9627321121\t0.0629\t18\n40\t39.962383123724\t99.6035\t18\n42\t39.9639981666\t0.0117\t19\n43\t40.961825257941\t6.7302\t19\n41\t38.963706486449\t93.2581\t19\n49\t47.9525227613\t0.187\t20\n48\t45.953689024\t0.004\t20\n46\t42.9587664424\t0.135\t20\n47\t43.9554815635\t2.086\t20\n44\t39.96259086322\t96.941\t20\n45\t41.9586178316\t0.647\t20\n50\t44.9559082877\t100\t21\n51\t45.9526277235\t8.25\t22\n55\t49.9447868939\t5.18\t22\n54\t48.9478656839\t5.41\t22\n53\t47.9479419838\t73.72\t22\n52\t46.9517587938\t7.44\t22\n57\t50.9439570494\t99.75\t23\n56\t49.9471560195\t0.25\t23\n59\t51.9405062363\t83.789\t24\n58\t49.9460418394\t4.345\t24\n61\t53.9388791661\t2.365\t24\n60\t52.9406481562\t9.501\t24\n62\t54.9380439148\t100\t25\n64\t55.9349363349\t91.754\t26\n65\t56.9353928449\t2.119\t26\n66\t57.9332744353\t0.282\t26\n63\t53.9396089953\t5.845\t26\n67\t58.9331942956\t100\t27\n68\t57.9353424152\t68.077\t28\n69\t59.9307858852\t26.223\t28\n70\t60.9310555752\t1.1399\t28\n71\t61.9283453755\t3.6346\t28\n72\t63.9279668258\t0.9255\t28\n73\t62.9295977256\t69.15\t29\n74\t64.9277897071\t30.85\t29\n76\t65.9260338194\t27.73\t30\n77\t66.9271277596\t4.04\t30\n78\t67.9248445598\t18.45\t30\n79\t69.925319221\t0.61\t30\n75\t63.9291420171\t49.17\t30\n81\t70.9247025887\t39.892\t31\n80\t68.925573513\t60.108\t31\n85\t73.92117776113\t36.5\t32\n84\t72.92345895661\t7.75\t32\n86\t75.92140272619\t7.73\t32\n83\t71.92207582681\t27.45\t32\n82\t69.924248759\t20.57\t32\n87\t74.9215945795\t100\t33\n93\t81.916699515\t8.73\t34\n92\t79.916521813\t49.61\t34\n89\t75.91921370417\t9.37\t34\n88\t73.92247593415\t0.89\t34\n91\t77.917309282\t23.77\t34\n90\t76.91991415467\t7.63\t34\n95\t80.916289714\t49.31\t35\n94\t78.918337614\t50.69\t35\n100\t83.911497728244\t56.987\t36\n101\t85.910610626941\t17.279\t36\n98\t81.9134827394\t11.593\t36\n99\t82.9141271632\t11.5\t36\n96\t77.9203649476\t0.355\t36\n97\t79.9163780875\t2.286\t36\n102\t84.911789737954\t72.17\t37\n103\t86.90918053106\t27.83\t37\n106\t86.908877512\t7\t38\n107\t87.905612512\t82.58\t38\n104\t83.913419113\t0.56\t38\n105\t85.909260612\t9.86\t38\n108\t88.905840324\t100\t39\n113\t95.908271421\t2.8\t40\n112\t93.90631082\t17.38\t40\n110\t90.90563962\t11.22\t40\n111\t91.90503472\t17.15\t40\n109\t89.90469772\t51.45\t40\n114\t92.90637302\t100\t41\n119\t96.9060181249\t9.6\t42\n118\t95.9046761247\t16.67\t42\n117\t94.9058387747\t15.84\t42\n116\t93.9050849048\t9.15\t42\n115\t91.9068079684\t14.53\t42\n121\t99.907471811\t9.82\t42\n120\t97.9054048249\t24.39\t42\n124\t98.90625081\t0\t43\n123\t97.907212436\t100\t43\n122\t96.90636674\t0\t43\n129\t100.905576912\t17.06\t44\n127\t98.905934111\t12.76\t44\n128\t99.904214311\t12.6\t44\n126\t97.905286869\t1.87\t44\n131\t103.905427528\t18.62\t44\n125\t95.9075902549\t5.54\t44\n130\t101.904344112\t31.55\t44\n132\t102.905498026\t100\t45\n137\t107.903891612\t26.46\t46\n136\t105.903480412\t27.33\t46\n138\t109.9051722075\t11.72\t46\n133\t101.905602228\t1.02\t46\n135\t104.905079612\t22.33\t46\n134\t103.904030514\t11.14\t46\n139\t106.905091626\t51.839\t47\n140\t108.904755314\t48.161\t47\n141\t105.906459912\t1.25\t48\n143\t109.9030066161\t12.49\t48\n142\t107.904183412\t0.89\t48\n144\t110.9041828761\t12.8\t48\n145\t111.902762876\t24.13\t48\n146\t112.9044081345\t12.22\t48\n147\t113.9033650943\t28.73\t48\n148\t115.9047631517\t7.49\t48\n149\t112.9040618491\t4.29\t49\n150\t114.90387877612\t95.71\t49\n152\t113.90278271\t0.66\t50\n153\t114.90334469916\t0.34\t50\n154\t115.901742801\t14.54\t50\n155\t116.9029539852\t7.68\t50\n156\t117.9016065754\t24.22\t50\n157\t118.9033111778\t8.59\t50\n158\t119.9022016397\t32.58\t50\n159\t121.903443826\t4.63\t50\n160\t123.905276611\t5.79\t50\n151\t111.9048238761\t0.97\t50\n162\t122.904213223\t42.79\t51\n161\t120.90381203\t57.21\t51\n170\t129.90622274812\t34.08\t52\n169\t127.9044612893\t31.74\t52\n168\t125.903310916\t18.84\t52\n163\t119.904059333\t0.09\t52\n167\t124.904429916\t7.07\t52\n166\t123.902817116\t4.74\t52\n165\t122.904269816\t0.89\t52\n164\t121.903043516\t2.55\t52\n171\t126.904471939\t100\t53\n175\t128.90478086116\t26.4006\t54\n174\t127.903531011\t1.9102\t54\n173\t125.904298338\t0.089\t54\n172\t123.905892019\t0.0952\t54\n178\t131.904155085656\t26.9086\t54\n179\t133.905394669\t10.4357\t54\n176\t129.9035093491\t4.071\t54\n177\t130.9050840624\t21.2324\t54\n180\t135.90721448411\t8.8573\t54\n181\t132.90545196108\t100\t55\n186\t135.9045757329\t7.854\t56\n187\t136.905827143\t11.232\t56\n184\t133.904508183\t2.417\t56\n185\t134.9056883829\t6.592\t56\n188\t137.9052470031\t71.698\t56\n182\t129.906320728\t0.106\t56\n183\t131.905061111\t0.101\t56\n190\t138.906356324\t99.91119\t57\n189\t137.907114937\t0.08881\t57\n191\t135.9071292141\t0.185\t58\n193\t139.905443123\t88.45\t58\n192\t137.90599111\t0.251\t58\n194\t141.909250429\t11.114\t58\n195\t140.907657623\t100\t59\n201\t147.916899326\t5.756\t60\n200\t145.91312262\t17.189\t60\n202\t149.920902218\t5.638\t60\n197\t142.90982002\t12.174\t60\n196\t141.90772902\t27.152\t60\n199\t144.91257932\t8.293\t60\n198\t143.91009302\t23.798\t60\n204\t146.915145019\t0\t61\n203\t144.912755933\t100\t61\n205\t143.912006521\t3.07\t62\n207\t147.914829219\t11.24\t62\n206\t146.914904419\t14.99\t62\n208\t148.917192118\t13.82\t62\n209\t149.917282918\t7.38\t62\n210\t151.919739718\t26.75\t62\n211\t153.92221692\t22.75\t62\n212\t150.919857818\t47.81\t63\n213\t152.921238018\t52.19\t63\n220\t159.927062418\t21.86\t64\n216\t154.922630517\t14.8\t64\n217\t155.922131217\t20.47\t64\n218\t156.923968617\t15.65\t64\n219\t157.924112317\t24.84\t64\n214\t151.919799518\t0.2\t64\n215\t153.920874117\t2.18\t64\n221\t158.925354719\t100\t65\n222\t155.924284717\t0.056\t66\n223\t157.924415931\t0.095\t66\n228\t163.92918192\t28.26\t66\n227\t162.92873832\t24.896\t66\n226\t161.92680562\t25.475\t66\n225\t160.92694052\t18.889\t66\n224\t159.92520462\t2.329\t66\n229\t164.930328821\t100\t67\n235\t169.935470226\t14.91\t68\n234\t167.932376722\t26.978\t68\n233\t166.932054622\t22.869\t68\n232\t165.930299522\t33.503\t68\n231\t163.92920882\t1.601\t68\n230\t161.92878842\t0.139\t68\n236\t168.934217922\t100\t69\n239\t170.936330222\t14.09\t70\n238\t169.934766422\t2.982\t70\n237\t167.933889622\t0.123\t70\n242\t173.938866422\t32.026\t70\n243\t175.942576424\t12.996\t70\n240\t171.936385922\t21.68\t70\n241\t172.938215122\t16.103\t70\n244\t174.94077522\t97.401\t71\n245\t175.94268972\t2.599\t71\n250\t178.94582322\t13.62\t72\n251\t179.94655702\t35.08\t72\n248\t176.94322772\t18.6\t72\n249\t177.94370582\t27.28\t72\n246\t173.940046128\t0.16\t72\n247\t175.941407622\t5.26\t72\n252\t179.947464824\t0.01201\t73\n253\t180.94799582\t99.98799\t73\n258\t185.954362817\t28.43\t74\n254\t179.94671082\t0.12\t74\n255\t181.9482039491\t26.5\t74\n256\t182.950222759\t14.31\t74\n257\t183.9509309294\t30.64\t74\n259\t184.952954513\t37.4\t75\n260\t186.955750116\t62.6\t75\n262\t185.953835016\t1.59\t76\n263\t186.955747416\t1.96\t76\n261\t183.952488514\t0.02\t76\n266\t189.958443717\t26.26\t76\n267\t191.961477029\t40.78\t76\n264\t187.955835216\t13.24\t76\n265\t188.958144217\t16.15\t76\n268\t190.960589321\t37.3\t77\n269\t192.962921621\t62.7\t77\n275\t197.967894923\t7.356\t78\n274\t195.9649520999\t25.21\t78\n273\t194.96479171\t33.78\t78\n272\t193.96268091\t32.86\t78\n270\t189.959929763\t0.012\t78\n271\t191.961038732\t0.782\t78\n276\t196.9665687971\t100\t79\n279\t198.9682806446\t16.87\t80\n278\t197.9667686052\t9.97\t80\n277\t195.965832632\t0.15\t80\n283\t203.9734939853\t6.87\t80\n282\t201.9706434069\t29.86\t80\n281\t200.9703028469\t13.18\t80\n280\t199.9683265947\t23.1\t80\n285\t204.974427814\t70.48\t81\n284\t202.972344614\t29.52\t81\n288\t206.975897313\t22.1\t82\n289\t207.976652513\t52.4\t82\n287\t205.974465713\t24.1\t82\n286\t203.973044013\t1.4\t82\n290\t208.980399116\t100\t83\n291\t208.98243082\t100\t84\n292\t209.982874113\t0\t84\n293\t209.987147983\t100\t85\n294\t210.98749663\t0\t85\n295\t210.990601173\t0\t86\n296\t220.011394123\t0\t86\n297\t222.017578225\t100\t86\n298\t223.019736025\t100\t87\n299\t223.018502327\t0\t88\n300\t224.020212023\t0\t88\n301\t226.025410325\t100\t88\n302\t228.031070726\t0\t88\n303\t227.027752325\t100\t89\n305\t232.038055821\t100\t90\n304\t230.033134119\t0\t90\n306\t231.035884224\t100\t91\n307\t233.039635529\t0\t92\n309\t235.043930119\t0.7204\t92\n308\t234.040952319\t0.0054\t92\n311\t238.05078842\t99.2742\t92\n310\t236.045568219\t0\t92\n313\t237.048173619\t100\t93\n312\t236.04657054\t0\t93\n315\t239.052163619\t0\t94\n314\t238.049560119\t0\t94\n317\t241.056851719\t0\t94\n316\t240.053813819\t0\t94\n319\t244.064205356\t100\t94\n318\t242.05874282\t0\t94\n320\t241.056829319\t0\t95\n321\t243.061381324\t100\t95\n326\t247.070354147\t100\t96\n327\t248.072349956\t0\t96\n324\t245.065491522\t0\t96\n325\t246.067223822\t0\t96\n322\t243.061389322\t0\t96\n323\t244.062752819\t0\t96\n328\t247.070307359\t100\t97\n329\t249.074987727\t0\t97\n332\t251.079588648\t100\t98\n333\t252.081627256\t0\t98\n330\t249.074853923\t0\t98\n331\t250.076406222\t0\t98\n334\t252.08298054\t100\t99\n335\t257.095106169\t100\t100\n337\t260.1036534\t0\t101\n336\t258.09843155\t100\t101\n338\t259.1010311\t100\t102\n340\t266.1198356\t100\t103\n339\t262.1096122\t0\t103\n341\t267.1217962\t100\t104\n342\t268.1256757\t100\t105\n343\t269.1286339\t100\t106\n344\t271.1339363\t0\t106\n346\t272.1382658\t0\t107\n345\t270.1333631\t100\t107\n348\t277.1519058\t100\t108\n347\t270.1342927\t0\t108\n350\t278.1563168\t100\t109\n349\t276.1515959\t0\t109\n351\t281.1645159\t100\t110\n352\t280.1651461\t0\t111\n353\t282.1691272\t100\t111\n354\t285.177126\t100\t112\n356\t286.1822172\t100\t113\n355\t284.1787362\t0\t113\n357\t289.190426\t100\t114\n358\t288.1927462\t0\t115\n359\t290.1959873\t100\t115\n360\t293.204496\t100\t116\n361\t292.2074675\t0\t117\n362\t294.2104674\t100\t117\n363\t294.2139271\t100\t118',wx);for(i=0;i<l.length;i++){o=wj(l[i],'\t');c=kn(e,o[3]);j=Ai(o[1]);k=Ai(o[2]);b=new av(De(j+0.5),j,k,c.g);mn(c.b,new Pi(b.c),b)}for(d=(m=(new zo(dv)).a.N().K(),new Eo(m));d.a.O();){c=(f=d.a.P(),f.T());gu(c);if(qn(c.b)==0){n=new av(De(c.c+0.5),c.c,100,c.g);mn(c.b,new Pi(n.c),n)}}ev=new xq;l=wj("1\tAbu\t2-Aminobutyric acid diradical\tC4H7NO\r\n2\tAcet\tAcetyl\tC2H3O\r\n3\tAcm\tAcetamidomethyl\tC3H6NO\r\n4\tAdao\tAdamantyloxy\tC10H15O\r\n5\tAib\talpha-Aminoisobutyric acid diradical\tC4H7NO\r\n6\tAla\tAlainine diradical\tC3H5NO\r\n7\tArg\tArginine diradical\tC6H12N4O\r\n8\tArgp\tArginine triradical\tC6H11N4O\r\n9\tAsn\tAsparagine diradical\tC4H6N2O2\r\n10\tAsnp\tAsparagine triradical\tC4H5N2O2\r\n11\tAsp\tAspartic acid diradical\tC4H5NO3\r\n12\tAspp\tAspartic acid triradical\tC4H4NO3\r\n13\tAsu\talpha-Aminosuberic acid diradical\tC8H13NO3\r\n14\tAsup\talpha-Aminosuberic acid triradical\tC8H12NO3\r\n15\tBoc\tt-Butoxycarbonyl\tC5H9O2\r\n16\tBom\tBenzyloxymethyl\tC8H9O\r\n17\tBrz\t2-Bromobenzyloxycarbonyl\tC8H6BrO2\r\n18\tBu\tButyl\tC4H9\r\n19\tBum\tt-Butoxymethyl\tC5H11O\r\n20\tBz\tBenzoyl\tC7H5O\r\n21\tBzl\tBenzyl\tC7H7\r\n22\tBn\tBenzyl\tC7H7\r\n23\tBzlo\tBenzyloxy\tC7H7O\r\n24\tCha\tbeta-Cyclohexylalanine diradical\tC9H15NO\r\n25\tChxo\tCyclohexyloxy\tC6H11O\r\n26\tCit\tCitrulline diradical\tC6H11N3O2\r\n27\tCitp\tCitrulline triradical\tC6H10N3O2\r\n28\tClz\t2-Chlorobenzyloxycarbonyl\tC8H6ClO2\r\n29\tCp\tCyclopentadienyl\tC5H5\r\n30\tCys\tCysteine diradical\tC3H5NOS\r\n31\tCysp\tCysteine triradical\tC3H4NOS\r\n32\tD\tDeuterium\t[2H]\r\n33\tDde\tDde\tC10H13O2\r\n34\tDnp\t2,4-Dinitrophenyl\tC6H3N2O4\r\n35\tEt\tEthyl\tC2H5\r\n36\tFmoc\tFluorenylmethoxycarbonyl\tC15H11O2\r\n37\tFor\tFormyl\tCHO\r\n38\tGln\tGlutamine diradical\tC5H8N2O2\r\n39\tGlnp\tGlutamine triradical\tC5H7N2O2\r\n40\tGlp\tPyroglutamine\tC5H5NO2\r\n41\tGlu\tGlutamic acid diradical\tC5H7NO3\r\n42\tGlup\tGlutamic acid triradical\tC5H6NO3\r\n43\tGly\tGlycine diradical\tC2H3NO\r\n44\tHci\tHomocitrulline diradical\tC7H13N3O2\r\n45\tHcip\tHomocitrulline triradical\tC7H12N3O2\r\n46\tHis\tHistidine diradical\tC6H7N3O\r\n47\tHisp\tHistidine triradical\tC6H6N3O\r\n48\tHser\tHomoserine diradical\tC4H7NO2\r\n49\tHserp\tHomoserine triradical\tC4H6NO2\r\n50\tHyp\tHydroxyproline diradical\tC5H7NO2\r\n51\tHypp\tHydroxyproline triradical\tC5H6NO2\r\n52\tIle\tIsoleucine diradical\tC6H11NO\r\n53\tIvdde\t1-[4,4-dimethyl-2,6-dioxocyclohexylidene)3-methylb\tC14H21O2\r\n54\tLeu\tLeucine diradical\tC6H11NO\r\n55\tLys\tLysine diradical\tC6H12N2O\r\n56\tLysp\tLysine triradical\tC6H11N2O\r\n57\tMbh\t4,4'-Dimethoxybenzhydryl\tC15H15O2\r\n58\tMe\tMethyl\tCH3\r\n59\tMebzl\t4-Methylbenzyl\tC8H9\r\n60\tMeobzl\t4-Methoxybenzyl1-[4,4-dimethyl-2,6-dioxocyclohexyl\tC8H9O\r\n61\tMet\tMethionine diradical\tC5H9NOS\r\n62\tMmt\t4-Methoxytrityl\tC20H17O\r\n63\tMtc\t2,2,5,7,8-pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n64\tMtr\t4-Methoxy-2,3,6-trimethylbenzenesulphonyl\tC10H13O3S\r\n65\tMts\tMesitylene-2-sulphonyl\tC9H11O2S\r\n66\tMtt\t4-Methyltrityl\tC20H17\r\n67\tNle\tNorleucine diradical\tC6H11NO\r\n68\tNpys\t3-Nitro-2-pyridinesulphenyl\tC5H3N2O2S\r\n69\tNva\tNorvaline diradical\tC5H9NO\r\n70\tOdmab\tOdmab\tC20H26NO3\r\n71\tOrn\tOrnithine diradical\tC5H10N2O\r\n72\tOrnp\tOrnithine triradical\tC5H9N2O\r\n73\tPbf\t2,2,4,6,7-pentamethyldihydrobenzofurane-5-sulfonyl\tC13H17O3S\r\n74\tPen\tPenicillamine diradical\tC5H9NOS\r\n75\tPenp\tPenicillamine triradical\tC5H8NOS\r\n76\tPh\tPhenyl\tC6H5\r\n77\tPhe\tPhenylalanine diradical\tC9H9NO\r\n78\tPhepcl\t4-Chlorophenylalanine diradical\tC9H8ClNO\r\n79\tPhg\tPhenylglycine\tC8H7NO\r\n80\tPmc\t2,2,5,7,8-Pentamethylchroman-6-sulphonyl\tC14H19O3S\r\n81\tPro\tProline diradical\tC5H7NO\r\n82\tPyr\tPyroglutamine\tC5H5NO2\r\n83\tSar\tSarcosine diradical\tC3H5NO\r\n84\tSer\tSerine diradical\tC3H5NO2\r\n85\tSerp\tSerine triradical\tC3H4NO2\r\n86\tSta\tStatine diradical\tC8H15NO2\r\n87\tStap\tStatine triradical\tC8H14NO2\r\n88\tTacm\tTrimethylacetamidomethyl\tC6H12NO\r\n89\tTbdms\tt-Butyldimethylsilyl\tC6H15Si\r\n90\tTbu\tt-Butyl\tC4H9\r\n91\tTbuo\tt-Butoxy\tC4H9O\r\n92\tTbuthio\tt-Butylthio\tC4H9S\r\n93\tTfa\tTrifluoroacetyl\tC2F3O\r\n94\tThi\tbeta-(2-thenyl)alanine\tC7H7NOS\r\n95\tThr\tThreonine diradical\tC4H7NO2\r\n96\tThrp\tThreonine triradical\tC4H6NO2\r\n97\tTips\tTriisopropylsilyl\tC9H21Si\r\n98\tTms\tTrimethylsilyl\tC3H9Si\r\n99\tTos\tTosyl\tC7H7O2S\r\n100\tTrp\tTryptophan diradical\tC11H10N2O\r\n101\tTrpp\tTryptophan triradical\tC11H9N2O\r\n102\tTrt\tTrityl\tC19H15\r\n103\tTyr\tTyrosine diradical\tC9H9NO2\r\n104\tTyrp\tTyrosine triradical\tC9H8NO2\r\n105\tVal\tValine\tC5H9NO\r\n106\tValoh\tbeta-Hydroxyvaline diradical\tC5H9NO2\r\n107\tValohp\tbeta-Hydroxyvaline triradical\tC5H8NO2\r\n108\tXan\tXanthyl\tC13H9O\r\n109\tZ\tBenzyloxycarbonyl\tC8H7O2\r\n110\tT\tTritium\t[3H]",wx);for(g=0;g<l.length;g++){o=wj(l[g],'\t');try{nn(ev,o[1],new _u(o[1],o[2],o[3],dv,ev))}catch(a){a=Wg(a);if(we(a,4)){Sj()}else throw Xg(a)}}}
var mw='object',nw='anonymous',ow='fnStack',pw={3:1},qw='Unknown',rw='boolean',sw='number',tw='string',uw=2147483647,vw='__java$exception',ww='For input string: "',xw='null',yw=-2147483648,zw='__noinit__',Aw={3:1,8:1,9:1},Bw='true',Cw=65536,Dw=65535,Ew=10000,Fw=', length: ',Gw='fromIndex: ',Hw=', toIndex: ',Iw=4194303,Jw=1048575,Kw=524288,Lw=4194304,Mw=17592186044416,Nw=1000000000,Ow=-17592186044416,Pw='CSS1Compat',Qw={32:1,3:1},Rw=100000,Sw=1000000,Tw=10000000000,Uw=0.3010299956639812,Vw=4294967295,Ww=4294967296,Xw=1073741824,Yw={l:0,m:0,h:524288},Zw={14:1,40:1},$w='_gwt_modCount',_w={39:1},ax={41:1,31:1},bx={3:1,63:1},cx={3:1,56:1},dx='delete',ex={3:1,14:1,34:1,30:1},fx='Error: minCount>maxCount',gx=4.9E-324,hx='\r\n',ix='monoisotopicMass',jx='percentage',kx=' - symbol: ',lx=' - mass: ',mx=' - percentage: ',nx='Cannot calculate unsaturation: this is a range formula',ox='The unsaturation is not clearly defined',px='Cannot calculate mass: this is a range formula',qx='The mass is not clearly defined',rx='Syntax error: bad fraction syntax: ',sx='Cannot calculate exact mass of a range formula',tx="Syntax error: the formula starts with ')': ",ux='Syntax error: bad isotope syntax',vx='mf',wx='[\r\n]+',xx='No isotopic distribution data',yx=5.4857990946E-4,zx='error',Ax='groups',Bx='referenceVersion',Cx='options is null',Dx='isotopomers',Ex='typedResult',Fx='fwhm',Gx='threshold',Hx='gaussianWidth',Ix='defaultUnsaturationContribution',Jx='joiningAlgorithm',Kx='type',Lx='value',Mx='charge',Nx='unsaturation',Ox='jcamp',Px='jcampLink',Qx='jcampBaseURL',Rx='minUnsaturation',Sx='maxUnsaturation',Tx='integerUnsaturation',Ux='useUnsaturation',Vx='numberOfResultsOnly',Wx='mfRange',Xx='locale',Yx='default',Zx='user.agent';var _,Ah,vh,Vg=-1;Bh();Ch(1,null,{},eb);_.n=function fb(a){return this===a};_.o=function hb(){return this._};_.p=function jb(){return st(this)};_.q=function lb(){return fi(ib(this))+'@'+(kb(this)>>>0).toString(16)};_.equals=function(a){return this.n(a)};_.hashCode=function(){return this.p()};_.toString=function(){return this.q()};var fc;Ch(134,1,{});Ch(96,134,{},mc);
_.u=function nc(a){var b={},j;var c=[];a[ow]=c;var d=arguments.callee.caller;while(d){var e=(gc(),d.name||(d.name=jc(d.toString())));c.push(e);var f=':'+e;var g=b[f];if(g){var h,i;for(h=0,i=g.length;h<i;h++){if(g[h]===d){return}}}(g||(b[f]=[])).push(d);d=d.caller}};_.v=function oc(a){var b,c,d,e;d=(gc(),a&&a[ow]?a[ow]:[]);c=d.length;e=Ed(tf,pw,33,c,0,1);for(b=0;b<c;b++){e[b]=new hj(d[b],null,-1)}return e};Ch(135,134,{});_.u=function qc(a){};_.w=function rc(a,b,c,d){return new hj(b,a+'@'+d,c<0?-1:c)};_.v=function sc(a){var b,c,d,e,f,g,h;e=(gc(),h=a.backingJsObject,h&&h.stack?h.stack.split('\n'):[]);f=Ed(tf,pw,33,0,0,1);b=0;d=e.length;if(d==0){return f}g=pc(this,e[0]);oj(g.d,nw)||(f[b++]=g);for(c=1;c<d;c++){f[b++]=pc(this,e[c])}return f};Ch(97,135,{},tc);_.w=function uc(a,b,c,d){return new hj(b,a,-1)};var qe,re,se;qe={3:1,90:1,14:1};var Sh;Ch(69,1,{},gi);_.D=function hi(a){var b;b=new gi;b.e=4;a>1?(b.c=ni(this,a-1)):(b.c=this);return b};_.F=function mi(){ei(this);return this.b};_.G=function oi(){return fi(this)};_.H=function qi(){ei(this);return this.i};_.I=function si(){return (this.e&4)!=0};_.J=function ti(){return (this.e&1)!=0};_.q=function wi(){return ((this.e&2)!=0?'interface ':(this.e&1)!=0?'':'class ')+(ei(this),this.k)};_.e=0;_.g=0;var di=1;Ch(49,1,{3:1,49:1});var yi;re={3:1,14:1,72:1,49:1};Ch(9,1,{3:1,9:1});_.r=function sb(a){return new $wnd.Error(a)};_.s=function ub(){return this.f};_.t=function vb(){var a,b,c;c=this.f==null?null:this.f.replace(new $wnd.RegExp('\n','g'),' ');b=(a=fi(this._),c==null?a:a+': '+c);qb(this,tb(this.r(b)));hc(this)};_.q=function xb(){return rb(this,this.s())};_.backingJsObject=zw;_.j=true;Ch(8,9,Aw);Ch(22,49,{3:1,14:1,22:1,49:1},Pi);_.C=function Ri(a){return Qi(this.a,a.a)};_.n=function Si(a){return we(a,22)&&a.a==this.a};_.p=function Ti(){return this.a};_.q=function Wi(){return ''+this.a};_.a=0;Ch(11,8,Aw,Ab);Ch(46,11,Aw,Bb);Ch(45,46,Aw,cj,dj,ej);_.r=function fj(a){return new $wnd.TypeError(a)};se={3:1,70:1,14:1,2:1};var rt=0;var tt,ut=0,vt;var rf=ji(1);var Je=ji(0);var Qe=ji(134);var Ne=ji(96);var Pe=ji(135);var Oe=ji(97);var df=ji(90);var ef=ji(69);var qf=ji(49);var ff=ji(72);var yf=ji(9);var hf=ji(8);var mf=ji(22);var sf=ji(11);var nf=ji(46);var of=ji(45);var xf=ji(2);Ch(98,46,Aw);var Le=ji(98);Ch(52,98,{52:1,3:1,8:1,9:1},Fb);_.s=function Gb(){Eb(this);return this.c};var Cb;var Ie=ji(52);var Kb;Ch(118,1,{});var Ke=ji(118);var Ob=0,Pb=0,Qb=-1;Ch(111,118,{},cc);var $b;var Me=ji(111);Ch(136,1,{});_.B=function vc(){return null};var Ye=ji(136);Ch(68,136,{68:1},zc,Ac);_.n=function Bc(a){if(!we(a,68)){return false}return Hb(this.a,a.a)};_.A=function Cc(){return Fc};_.p=function Dc(){return Ib(this.a)};_.q=function Ec(){var a,b,c;c=new Oj('[');for(b=0,a=this.a.length;b<a;b++){b>0&&(c.a+=',',c);Jj(c,wc(this,b))}c.a+=']';return c.a};var Re=ji(68);Ch(87,136,{},Jc);_.A=function Kc(){return Mc};_.q=function Lc(){return Th(),''+this.a};_.a=false;var Gc,Hc;var Se=ji(87);Ch(113,11,Aw,Nc);var Te=ji(113);Ch(110,136,{},Qc);_.A=function Rc(){return Tc};_.q=function Sc(){return xw};var Oc;var Ue=ji(110);Ch(7,136,{7:1},Uc);_.n=function Vc(a){if(!we(a,7)){return false}return this.a==a.a};_.A=function Wc(){return Zc};_.p=function Xc(){return De(nt(this.a))};_.q=function Yc(){return this.a+''};_.a=0;var Ve=ji(7);Ch(59,136,{59:1},dd,ed);_.n=function fd(a){if(!we(a,59)){return false}return Hb(this.a,a.a)};_.A=function gd(){return kd};_.p=function hd(){return Ib(this.a)};_.q=function jd(){var a,b,c,d,e,f;f=new Oj('{');a=true;e=$c(this,Ed(xf,pw,2,0,6,1));for(c=0,d=e.length;c<d;++c){b=e[c];a?(a=false):(f.a+=', ',f);Kj(f,Mb(b));f.a+=':';Jj(f,_c(this,b))}f.a+='}';return f.a};var We=ji(59);var ld;Ch(10,136,{10:1},td);_.n=function ud(a){if(!we(a,10)){return false}return oj(this.a,a.a)};_.A=function vd(){return zd};_.p=function wd(){return yt(this.a)};_.B=function xd(){return this};_.q=function yd(){return Mb(this.a)};var Xe=ji(10);var Jd;var le,me,ne,oe;Ch(120,1,{});var $e=ji(120);Ch(119,120,{});var Ze=ji(119);Ch(71,119,{},Kh);var _e=ji(71);Ch(48,1,{70:1});_.q=function Mh(){return this.a};var af=ji(48);Ch(44,11,Aw,Nh);var bf=ji(44);Ch(37,11,Aw,Oh,Ph);var lf=ji(37);Ch(88,37,Aw,Qh,Rh);var cf=ji(88);Ch(34,1,{3:1,14:1,34:1});_.C=function Gi(a){return this.b-a.b};_.compareTo=function Fi(a){return this.b-a.b};_.equals=function Hi(a){return this===a};_.n=function(a){return this.equals(a)};_.hashCode=function Ii(){return st(this)};_.p=function(){return this.hashCode()};_.name=function Ji(){return this.a!=null?this.a:''+this.b};_.ordinal=function Ki(){return this.b};_.toString=function Li(){return this.a!=null?this.a:''+this.b};_.q=function(){return this.toString()};_.b=0;var gf=ji(34);Ch(50,11,Aw,Mi);var jf=ji(50);Ch(99,11,Aw,Ni);var kf=ji(99);var Yi;Ch(21,50,{3:1,8:1,21:1,9:1},gj);var pf=ji(21);Ch(33,1,{3:1,33:1},hj);_.n=function ij(a){var b;if(we(a,33)){b=a;return this.c==b.c&&dr(this.d,b.d)&&dr(this.a,b.a)&&dr(this.b,b.b)}return false};_.p=function jj(){return fq(Hd(Ad(rf,1),pw,1,5,[Xi(this.c),this.a,this.d,this.b]))};_.q=function kj(){return this.a+'.'+this.d+'('+(this.b!=null?this.b:'Unknown Source')+(this.c>=0?':'+this.c:'')+')'};_.c=0;var tf=ji(33);Ch(36,48,{70:1},Fj,Gj);var uf=ji(36);Ch(28,48,{70:1},Mj,Nj,Oj);var vf=ji(28);Ch(100,37,Aw,Pj);var wf=ji(100);Ch(160,1,{});var Qj,Rj;Ch(27,11,Aw,Uj,Vj);var zf=ji(27);Ch(17,49,{3:1,14:1,49:1,17:1},jk,kk,lk,mk);_.C=function pk(a){return dk(this,a)};_.n=function sk(a){var b;if(this===a){return true}if(we(a,17)){b=a;return this.e==b.e&&dk(this,b)==0}return false};_.p=function tk(){var a;if(this.b!=0){return this.b}if(this.a<54){a=dh(this.f);this.b=sh(Zg(a,-1));this.b=33*this.b+sh(Zg(nh(a,32),-1));this.b=17*this.b+De(this.e);return this.b}this.b=17*Kk(this.c)+De(this.e);return this.b};_.q=function vk(){return ik(this)};_.a=0;_.b=0;_.d=0;_.e=0;_.f=0;var Wj,Xj,Yj,Zj,$j,_j,ak,bk;var Af=ji(17);Ch(5,49,{3:1,14:1,49:1,5:1},Rk,Sk,Tk,Uk,Vk,Wk);_.C=function Yk(a){return Ek(this,a)};_.n=function Zk(a){return Hk(this,a)};_.p=function _k(){return Kk(this)};_.q=function bl(){return pl(this,0)};_.b=-2;_.c=0;_.d=0;_.e=0;var xk,yk,zk,Ak,Bk,Ck;var Bf=ji(5);var kl,ll;var Dl,El,Fl;Ch(26,34,{3:1,14:1,34:1,26:1},$l);var Rl,Sl,Tl,Ul,Vl,Wl,Xl,Yl;var Cf=ki(26,_l);Ch(40,1,Zw);_.C=function am(a){return nj(this.a,a.a)};_.n=function bm(a){var b;if(a===this){return true}if(!we(a,40)){return false}b=a;return oj(this.a,b.a)};_.p=function cm(){return yt(this.a)};_.q=function dm(){return this.a};var Df=ji(40);Ch(140,1,{});var Ff=ji(140);Ch(141,140,{});var Gf=ji(141);Ch(114,141,{},km);_.b=0;_.c=0;var fm;var Ef=ji(114);Ch(132,1,{});_.add=function ym(a){throw Xg(new Vj('Add not supported on this collection'))};_.addAll=function zm(a){return sm(this,a)};_.clear=function Am(){var a;for(a=this.K();a.O();){a.P();a.Q()}};_.contains=function Bm(a){return tm(this,a,false)};_.containsAll=function Cm(a){return um(this,a)};_.isEmpty=function Dm(){return this.size()==0};_.remove=function Em(a){return tm(this,a,true)};_.removeAll=function Fm(a){return vm(this,a)};_.retainAll=function Gm(a){var b,c,d;ht(a);b=false;for(c=this.K();c.O();){d=c.P();if(!a.contains(d)){c.Q();b=true}}return b};_.toArray=function Hm(){return this.L(Ed(rf,pw,1,this.size(),5,1))};_.L=function Im(a){return wm(this,a)};_.q=function Jm(){return xm(this)};var Hf=ji(132);Ch(131,1,{56:1});_.getOrDefault=function Vm(a,b){var c;return c=this.get(a),c==null&&!this.containsKey(a)?b:c};_.putIfAbsent=function _m(a,b){var c;return c=this.get(a),c!=null?c:this.put(a,b)};_.replace=function bn(a,b){return this.containsKey(a)?this.put(a,b):null};_.clear=function Nm(){this.N().clear()};_.M=function Om(a){return Km(this,a)};_.containsKey=function Pm(a){return !!Lm(this,a,false)};_.containsValue=function Qm(a){var b,c,d;for(c=this.N().K();c.O();){b=c.P();d=b.T();if(Ce(a)===Ce(d)||a!=null&&gb(a,d)){return true}}return false};_.n=function Rm(a){var b,c,d;if(a===this){return true}if(!we(a,56)){return false}d=a;if(this.size()!=d.size()){return false}for(c=d.N().K();c.O();){b=c.P();if(!this.M(b)){return false}}return true};_.get=function Sm(a){return Um(Lm(this,a,false))};_.p=function Wm(){return lq(this.N())};_.isEmpty=function Xm(){return this.size()==0};_.keySet=function Ym(){return new po(this)};_.put=function Zm(a,b){throw Xg(new Vj('Put not supported on this map'))};_.putAll=function $m(a){var b,c;ht(a);for(c=a.N().K();c.O();){b=c.P();this.put(b.S(),b.T())}};_.remove=function an(a){return Um(Lm(this,a,true))};_.size=function cn(){return this.N().size()};_.q=function dn(){var a,b,c;c=new Hr('{','}');for(b=this.N().K();b.O();){a=b.P();Gr(c,Mm(this,a.S())+'='+Mm(this,a.T()))}return !c.a?c.c:c.e.length==0?c.a.a:c.a.a+(''+c.e)};_.values=function en(){return new zo(this)};var Xf=ji(131);Ch(91,131,{56:1});_.clear=function rn(){pn(this)};_.containsKey=function sn(a){return fn(this,a)};_.containsValue=function tn(a){return gn(this,a)};_.N=function un(){return new Dn(this)};_.get=function vn(a){return jn(this,a)};_.put=function wn(a,b){return mn(this,a,b)};_.remove=function xn(a){return on(this,a)};_.size=function yn(){return qn(this)};var Kf=ji(91);Ch(133,132,_w);_.n=function zn(a){var b;if(a===this){return true}if(!we(a,39)){return false}b=a;if(b.size()!=this.size()){return false}return um(this,b)};_.p=function An(){return lq(this)};_.removeAll=function Bn(a){var b,c,d,e;ht(a);e=this.size();if(e<a.size()){for(b=this.K();b.O();){c=b.P();a.contains(c)&&b.Q()}}else{for(d=a.K();d.O();){c=d.P();this.remove(c)}}return e!=this.size()};var ag=ji(133);Ch(92,133,_w,Dn);_.clear=function En(){pn(this.a)};_.contains=function Fn(a){return Cn(this,a)};_.K=function Gn(){return new Kn(this.a)};_.remove=function Hn(a){var b;if(Cn(this,a)){b=a.S();on(this.a,b);return true}return false};_.size=function In(){return qn(this.a)};var Jf=ji(92);Ch(93,1,{},Kn);_.P=function Mn(){var a;return sq(this.e,this),ft(this.b),this.c=this.a,a=this.a.P(),this.b=Jn(this),a};_.O=function Ln(){return this.b};_.Q=function Nn(){var a;lt(!!this.c);sq(this.e,this);this.c.Q();this.c=null;this.b=Jn(this);a=this.e[$w];this[$w]=a};_.b=false;var If=ji(93);Ch(139,132,{63:1});_.addAtIndex=function On(a,b){throw Xg(new Vj('Add not supported on this list'))};_.add=function Pn(a){this.addAtIndex(this.size(),a);return true};_.addAllAtIndex=function Qn(a,b){var c,d,e;ht(b);c=false;for(e=b.K();e.O();){d=e.P();this.addAtIndex(a++,d);c=true}return c};_.clear=function Rn(){this.R(0,this.size())};_.n=function Sn(a){var b,c,d,e,f;if(a===this){return true}if(!we(a,63)){return false}f=a;if(this.size()!=f.size()){return false}e=f.K();for(c=this.K();c.O();){b=c.P();d=e.P();if(!(Ce(b)===Ce(d)||b!=null&&gb(b,d))){return false}}return true};_.p=function Tn(){return mq(this)};_.indexOf=function Un(a){var b,c;for(b=0,c=this.size();b<c;++b){if(dr(a,this.getAtIndex(b))){return b}}return -1};_.K=function Vn(){return new co(this)};_.lastIndexOf=function Wn(a){var b;for(b=this.size()-1;b>-1;--b){if(dr(a,this.getAtIndex(b))){return b}}return -1};_.removeAtIndex=function Xn(a){throw Xg(new Vj('Remove not supported on this list'))};_.R=function Yn(a,b){var c,d;d=new ho(this,a);for(c=a;c<b;++c){ft(d.a<d.c.size());d.c.getAtIndex(d.b=d.a++);bo(d)}};_.setAtIndex=function Zn(a,b){throw Xg(new Vj('Set not supported on this list'))};_.subList=function $n(a,b){return new jo(this,a,b)};var Of=ji(139);Ch(81,1,{},co);_.O=function eo(){return _n(this)};_.P=function fo(){return ao(this)};_.Q=function go(){bo(this)};_.a=0;_.b=-1;var Lf=ji(81);Ch(82,81,{},ho);_.Q=function io(){bo(this)};var Mf=ji(82);Ch(83,139,{63:1},jo);_.addAtIndex=function ko(a,b){jt(a,this.b);this.c.addAtIndex(this.a+a,b);++this.b};_.getAtIndex=function lo(a){gt(a,this.b);return this.c.getAtIndex(this.a+a)};_.removeAtIndex=function mo(a){var b;gt(a,this.b);b=this.c.removeAtIndex(this.a+a);--this.b;return b};_.setAtIndex=function no(a,b){gt(a,this.b);return this.c.setAtIndex(this.a+a,b)};_.size=function oo(){return this.b};_.a=0;_.b=0;var Nf=ji(83);Ch(58,133,_w,po);_.clear=function qo(){this.a.clear()};_.contains=function ro(a){return this.a.containsKey(a)};_.K=function so(){var a;return a=this.a.N().K(),new vo(a)};_.remove=function to(a){if(this.a.containsKey(a)){this.a.remove(a);return true}return false};_.size=function uo(){return this.a.size()};var Qf=ji(58);Ch(73,1,{},vo);_.O=function wo(){return this.a.O()};_.P=function xo(){var a;return a=this.a.P(),a.S()};_.Q=function yo(){this.a.Q()};var Pf=ji(73);Ch(23,132,{},zo);_.clear=function Ao(){this.a.clear()};_.contains=function Bo(a){return this.a.containsValue(a)};_.K=function Co(){var a;return a=this.a.N().K(),new Eo(a)};_.size=function Do(){return this.a.size()};var Sf=ji(23);Ch(24,1,{},Eo);_.O=function Fo(){return this.a.O()};_.P=function Go(){var a;return a=this.a.P(),a.T()};_.Q=function Ho(){this.a.Q()};var Rf=ji(24);Ch(41,1,ax);_.n=function Ko(a){var b;if(!we(a,31)){return false}b=a;return dr(this.c,b.S())&&dr(this.d,b.T())};_.S=function Lo(){return this.c};_.T=function Mo(){return this.d};_.p=function No(){return er(this.c)^er(this.d)};_.U=function Oo(a){return Io(this,a)};_.q=function Po(){return this.c+'='+this.d};var Tf=ji(41);Ch(51,41,{41:1,51:1,31:1},Qo);var Uf=ji(51);Ch(94,41,ax,Ro);_.U=function So(a){throw Xg(new Uj)};var Vf=ji(94);Ch(137,1,{31:1});_.n=function To(a){var b;if(!we(a,31)){return false}b=a;return dr(this.b.value[0],b.S())&&dr(Zq(this),b.T())};_.p=function Uo(){return er(this.b.value[0])^er(Zq(this))};_.q=function Vo(){return this.b.value[0]+'='+Zq(this)};var Wf=ji(137);Ch(138,131,{56:1});_.M=function $o(a){return Wo(this,a)};_.containsKey=function _o(a){return Xo(this,a)};_.N=function ap(){return new ep(this)};_.get=function bp(a){return Um(this.W(a))};_.keySet=function dp(){return new jp(this)};var _f=ji(138);Ch(80,133,_w,ep);_.contains=function fp(a){return we(a,31)&&Wo(this.b,a)};_.K=function gp(){return this.b.V()};_.remove=function hp(a){var b;if(we(a,31)){b=a;return this.b.X(b)}return false};_.size=function ip(){return this.b.size()};var Yf=ji(80);Ch(12,133,_w,jp);_.clear=function kp(){this.a.clear()};_.contains=function lp(a){return Xo(this.a,a)};_.K=function mp(){var a;return a=this.a.N().b.V(),new pp(a)};_.remove=function np(a){if(Xo(this.a,a)){this.a.remove(a);return true}return false};_.size=function op(){return this.a.size()};var $f=ji(12);Ch(13,1,{},pp);_.O=function qp(){return _n(this.a.a)};_.P=function rp(){var a;return a=is(this.a),a.S()};_.Q=function sp(){js(this.a)};var Zf=ji(13);Ch(67,139,bx,Ip,Jp);_.addAtIndex=function Kp(a,b){up(this,a,b)};_.add=function Lp(a){return vp(this,a)};_.addAllAtIndex=function Mp(a,b){return wp(this,a,b)};_.addAll=function Np(a){return xp(this,a)};_.clear=function Op(){this.a=Ed(rf,pw,1,0,5,1)};_.contains=function Pp(a){return zp(this,a,0)!=-1};_.getAtIndex=function Qp(a){return yp(this,a)};_.indexOf=function Rp(a){return zp(this,a,0)};_.isEmpty=function Sp(){return this.a.length==0};_.K=function Tp(){return new bq(this)};_.lastIndexOf=function Up(a){return Ap(this,a)};_.removeAtIndex=function Vp(a){return Cp(this,a)};_.remove=function Wp(a){var b;b=zp(this,a,0);if(b==-1){return false}Cp(this,b);return true};_.R=function Xp(a,b){Dp(this,a,b)};_.setAtIndex=function Yp(a,b){return Ep(this,a,b)};_.size=function Zp(){return this.a.length};_.toArray=function $p(){return Gp(this)};_.L=function _p(a){return Hp(this,a)};var cg=ji(67);Ch(19,1,{},bq);_.O=function cq(){return this.a<this.c.a.length};_.P=function dq(){return aq(this)};_.Q=function eq(){lt(this.b!=-1);Cp(this.c,this.a=this.b);this.b=-1};_.a=0;_.b=-1;var bg=ji(19);var nq;Ch(112,1,pw,pq);_.Y=function qq(a,b){return ht(a),Wh(a,(ht(b),b))};_.n=function rq(a){return this===a};var dg=ji(112);Ch(117,11,Aw,uq);var eg=ji(117);Ch(116,11,Aw,vq);var fg=ji(116);Ch(25,91,cx,xq);var gg=ji(25);Ch(109,1,{},Dq);_.K=function Eq(){return new Fq(this)};_.c=0;var ig=ji(109);Ch(86,1,{},Fq);_.P=function Hq(){return this.d=this.a[this.c++],this.d};_.O=function Gq(){var a;if(this.c<this.a.length){return true}a=this.b.next();if(!a.done){this.a=a.value[1];this.c=0;return true}return false};_.Q=function Iq(){Cq(this.e,this.d.S());this.c!=0&&--this.c};_.c=0;_.d=null;var hg=ji(86);var Jq;Ch(101,1,{},Tq);_.K=function Uq(){return new Vq(this)};_.c=0;_.d=0;var lg=ji(101);Ch(77,1,{},Vq);_.P=function Xq(){return this.c=this.a,this.a=this.b.next(),new $q(this.d,this.c,this.d.d)};_.O=function Wq(){return !this.a.done};_.Q=function Yq(){Sq(this.d,this.c.value[0])};var jg=ji(77);Ch(102,137,{31:1},$q);_.S=function _q(){return this.b.value[0]};_.T=function ar(){return Zq(this)};_.U=function br(a){return Rq(this.a,this.b.value[0],a)};_.c=0;var kg=ji(102);Ch(89,11,Aw,cr);var mg=ji(89);Ch(84,139,bx,gr);_.addAtIndex=function hr(a,b){lr(a,this.a.a.length+1);up(this.a,a,b)};_.add=function ir(a){return fr(this,a)};_.addAllAtIndex=function jr(a,b){lr(a,this.a.a.length+1);return wp(this.a,a,b)};_.addAll=function kr(a){return xp(this.a,a)};_.clear=function mr(){this.a.a=Ed(rf,pw,1,0,5,1)};_.contains=function nr(a){return zp(this.a,a,0)!=-1};_.containsAll=function or(a){return um(this.a,a)};_.getAtIndex=function pr(a){return lr(a,this.a.a.length),yp(this.a,a)};_.indexOf=function qr(a){return zp(this.a,a,0)};_.isEmpty=function rr(){return this.a.a.length==0};_.K=function sr(){return new bq(this.a)};_.lastIndexOf=function tr(a){return Ap(this.a,a)};_.removeAtIndex=function ur(a){return lr(a,this.a.a.length),Cp(this.a,a)};_.removeAll=function vr(a){return vm(this.a,a)};_.R=function wr(a,b){Dp(this.a,a,b)};_.setAtIndex=function xr(a,b){lr(a,this.a.a.length);return Ep(this.a,a,b)};_.size=function yr(){return this.a.a.length};_.subList=function zr(a,b){return new jo(this.a,a,b)};_.toArray=function Ar(){return Gp(this.a)};_.L=function Br(a){return Hp(this.a,a)};_.q=function Cr(){return xm(this.a)};var zg=ji(84);Ch(115,84,bx,Fr);var ng=ji(115);Ch(74,1,{},Hr);_.q=function Ir(){return !this.a?this.c:this.e.length==0?this.a.a:this.a.a+(''+this.e)};var og=ji(74);Ch(62,138,cx,$r,_r);_.clear=function as(){Jr(this)};_.V=function bs(){return new ks(this)};_.N=function cs(){return new ps(this)};_.W=function ds(a){return Kr(this,a)};_.put=function es(a,b){return Tr(this,a,b)};_.remove=function fs(a){return Ur(this,a)};_.X=function gs(a){return Vr(this,a)};_.size=function hs(){return this.d};_.d=0;var xg=ji(62);Ch(79,1,{},ks);_.P=function ns(){return is(this)};_.O=function ms(){return _n(this.a)};_.Q=function os(){js(this)};var pg=ji(79);Ch(16,80,_w,ps);_.clear=function qs(){Jr(this.a)};var qg=ji(16);Ch(43,51,{41:1,51:1,31:1,43:1},rs);_.b=false;var rg=ji(43);Ch(66,1,{},ss);_.q=function ts(){return 'State: mv='+this.c+' value='+this.d+' done='+this.a+' found='+this.b};_.a=false;_.b=false;_.c=false;var sg=ji(66);Ch(30,34,ex,zs);_.Z=function As(){return false};_.$=function Bs(){return false};var us,vs,ws,xs;var wg=ki(30,Cs);Ch(105,30,ex,Ds);_.$=function Es(){return true};var tg=ki(105,null);Ch(106,30,ex,Fs);_.Z=function Gs(){return true};_.$=function Hs(){return true};var ug=ki(106,null);Ch(107,30,ex,Is);_.Z=function Js(){return true};var vg=ki(107,null);Ch(61,133,{3:1,39:1},Ls,Ms);_.add=function Ns(a){return Ks(this,a)};_.clear=function Os(){Jr(this.g)};_.contains=function Ps(a){return Xo(this.g,a)};_.K=function Qs(){var a;return a=(new jp(this.g)).a.N().b.V(),new pp(a)};_.remove=function Rs(a){return Ur(this.g,a)!=null};_.size=function Ss(){return this.g.d};var yg=ji(61);Ch(75,40,Zw);var Cg=ji(75);Ch(76,75,Zw,_s);var Ag=ji(76);Ch(95,75,Zw,ct);var Bg=ji(95);Ch(35,1,{14:1,35:1},Gt,Ht,It,Jt);_.C=function Kt(a){if(!we(a,35))throw Xg(new Vj('Not comparable: Atoms and '+fi(ib(a))));return At(this,a)};_.n=function Lt(a){return Bt(this,a)};_.p=function Mt(){var a;a=this.a+this.i;return yt(a)};_.q=function Nt(){return Ft(this,null)};_.a=0;_.b=0;_.c=0;_.d=0;_.e=0;_.f=0;_.g=0;var Dg=ji(35);Ch(38,62,cx,au);_.q=function bu(){return Zt(this)};_.a=Ew;var Fg=ji(38);Ch(108,1,{},cu);_.n=function eu(a){return this===a};_.Y=function du(a,b){return -Wh(a.T(),b.T())};var Eg=ji(108);Ch(53,1,{14:1,53:1},ku,lu,mu);_.C=function nu(a){Sj();return mj(this.g,a.g)};_.n=function ou(a){var b;if(this===a)return true;if(Gg!=ib(a))return false;b=a;if(oj(this.g,b.g))return true;return false};_.q=function pu(){return ju(this)};_.a=0;_.c=0;_.d=0;_.f=0;var Gg=ji(53);Ch(85,1,{14:1,85:1},tu);_.C=function uu(a){return Oi(new Pi(this.a.c-this.a.d),Xi(a.a.c-a.a.d))};_.q=function vu(){return this.a.i+' - '+this.a.d+' to '+this.a.c+' - current: '+this.b};_.b=0;_.c=0;_.d=0;var Hg=ji(85);Ch(54,1,{},Hu,Iu);_.q=function Ju(){return Gu(this)};_.c=false;_.e=false;var Jg=ji(54);Ch(29,61,{3:1,39:1,29:1},Uu,Vu,Wu);_.q=function Xu(){return Tu(this)};_.a=0;_.b='';_.e=false;_.f=0;var Ig=ji(29);Ch(60,1,{60:1},_u);var Kg=ji(60);Ch(42,1,{14:1,42:1},av);_.C=function bv(a){var b;if(we(a,42)){b=a;return this.c=b.c}else throw Xg(new Vj('Cannot compare Isotope to '+a))};_.q=function cv(){return 'Number: '+this.c+lx+this.b+mx+this.d+kx+this.a};_.b=0;_.c=0;_.d=0;var Lg=ji(42);var dv,ev;Ch(4,8,{3:1,8:1,9:1,4:1},hv);var Mg=ji(4);Ch(103,1,{},pv);_.a=0;_.b=0;_.e=null;_.f=0;var iv=1;var Pg=ji(103);Ch(55,1,{},yv,zv,Av);_.b=0;var Og=ji(55);Ch(104,1,{},Cv);_.Y=function Dv(a,b){return Bv(this,a,b)};_.n=function Ev(a){return this===a};var Ng=ji(104);var Fv;Ch(78,1,{78:1},Kv);_.a=0;_.b=0;_.c=null;var Qg=ji(78);var Lv;Ch(130,1,{},Pv);var Rg=ji(130);Ch(65,1,{14:1,65:1},bw);_.C=function cw(a){return aw(this,a)};_.a=0;_.c=0;var Sg=ji(65);Ch(18,1,{},ew,fw,gw);var Tg=ji(18);Ch(15,1,{},kw);var Ug=ji(15);var Fe=li('C');var He=li('I');var Ee=li('B');var Ge=li('D');_=Fh('CI.Chemcalc',Pv);_.analyseMF=Rv;_.getInfo=Tv;_.mfFromMonoisotopicMass=Uv;Th();_=Fh('java.lang.Boolean');_.$isInstance=Uh;_=Fh('java.lang.CharSequence');_.$isInstance=Xh;_=Fh('java.lang.Comparable');_.$isInstance=xi;_=Fh('java.lang.Double');_.$isInstance=Ci;_=Fh('java.lang.Number');_.$isInstance=zi;_=Fh('java.lang.String');_.$isInstance=rj;_=Fh('java.lang.Throwable');_.of=wb;var lw=(Rb(),Ub);var gwtOnLoad=gwtOnLoad=yh;wh(Ih);zh('permProps',[[[Xx,Yx],[Zx,'gecko1_8']],[[Xx,Yx],[Zx,'ie10']],[[Xx,Yx],[Zx,'ie8']],[[Xx,Yx],[Zx,'ie9']],[[Xx,Yx],[Zx,'safari']]]);$sendStats('moduleStartup', 'moduleEvalEnd');gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);$sendStats('moduleStartup', 'end');$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);


        // End GWT code

        var toReturn = $wnd["CI"]["Chemcalc"];

        toReturn.version = '3.3.2';

        return toReturn;
    }

    var isBrowser, globalEnv;

    if (typeof self !== 'undefined') { // Usual Browser Window or Web Worker
        isBrowser = true;
        globalEnv = self;
    } else if (typeof global !== 'undefined') { // Node.js
        isBrowser = false;
        globalEnv = global;
    } else { // Other environment (example: CouchDB)
        isBrowser = false;
        globalEnv = root;
    }

    var document = globalEnv.document || {};

    if (!document.compatMode) {
        document.compatMode = 'CSS1Compat';
    }

    var fakeWindow;
    if (isBrowser && !true) {
        fakeWindow = globalEnv;
    } else {
        fakeWindow = {};
        fakeWindow.setTimeout = globalEnv.setTimeout ? globalEnv.setTimeout.bind(globalEnv) : noop;
        fakeWindow.clearTimeout = globalEnv.clearTimeout ? globalEnv.clearTimeout.bind(globalEnv) : noop;
        fakeWindow.setInterval = globalEnv.setInterval ? globalEnv.setInterval.bind(globalEnv) : noop;
        fakeWindow.clearInterval = globalEnv.clearInterval ? globalEnv.clearInterval.bind(globalEnv) : noop;
        // required since GWT 2.8.0
        fakeWindow.Error = globalEnv.Error;
        fakeWindow.Math = globalEnv.Math;
        fakeWindow.RegExp = globalEnv.RegExp;
        fakeWindow.TypeError = globalEnv.TypeError;
    }

    if (!fakeWindow.document) {
        fakeWindow.document = document;
    }

    var exportedApi = getExports(fakeWindow);

    if (true) { // NodeJS
        fillExports(exportedApi, exports);
    } else if (typeof define === 'function' && define.amd) { // AMD
        define(function () {
            var exportsObj = {};
            fillExports(exportedApi, exportsObj);
            return exportsObj;
        });
    } else { // Global
        var path = ["CI","Chemcalc"];
        var l = path.length - 1;
        var obj = globalEnv;
        for (var i = 0; i < l; i++) {
            obj = obj[path[i]] || (obj[path[i]] = {});
        }
        obj[path[l]] = {};
        fillExports(exportedApi, obj[path[l]]);
    }

    function fillExports(obj, exports) {
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            exports[keys[i]] = obj[keys[i]];
        }
    }

    function noop() {}

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(196)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(64);
module.exports = __webpack_require__(123);

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(125);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(127);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(129);
__webpack_require__(128);
__webpack_require__(130);
__webpack_require__(131);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(65);
module.exports = __webpack_require__(44).f('iterator');

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9)
  , toLength  = __webpack_require__(121)
  , toIndex   = __webpack_require__(120);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(32)
  , TAG = __webpack_require__(4)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(101);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(15)
  , gOPS    = __webpack_require__(36)
  , pIE     = __webpack_require__(22);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3).document && document.documentElement;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(32);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(60)
  , descriptor     = __webpack_require__(23)
  , setToStringTag = __webpack_require__(37)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(14)(IteratorPrototype, __webpack_require__(4)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(15)
  , toIObject = __webpack_require__(9);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(24)('meta')
  , isObject = __webpack_require__(20)
  , has      = __webpack_require__(7)
  , setDesc  = __webpack_require__(8).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(13)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(15)
  , gOPS     = __webpack_require__(36)
  , pIE      = __webpack_require__(22)
  , toObject = __webpack_require__(41)
  , IObject  = __webpack_require__(58)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(8)
  , anObject = __webpack_require__(18)
  , getKeys  = __webpack_require__(15);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(22)
  , createDesc     = __webpack_require__(23)
  , toIObject      = __webpack_require__(9)
  , toPrimitive    = __webpack_require__(42)
  , has            = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(57)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9)
  , gOPN      = __webpack_require__(61).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(41)
  , IE_PROTO    = __webpack_require__(38)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(19)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(13);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40)
  , defined   = __webpack_require__(33);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(40)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(40)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(104)
  , ITERATOR  = __webpack_require__(4)('iterator')
  , Iterators = __webpack_require__(21);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(18)
  , get      = __webpack_require__(122);
module.exports = __webpack_require__(0).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(102)
  , step             = __webpack_require__(110)
  , Iterators        = __webpack_require__(21)
  , toIObject        = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(59)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(19);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(113)});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(19);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(41)
  , $keys    = __webpack_require__(15);

__webpack_require__(118)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 128 */
/***/ (function(module, exports) {



/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(3)
  , has            = __webpack_require__(7)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(19)
  , redefine       = __webpack_require__(63)
  , META           = __webpack_require__(112).KEY
  , $fails         = __webpack_require__(13)
  , shared         = __webpack_require__(39)
  , setToStringTag = __webpack_require__(37)
  , uid            = __webpack_require__(24)
  , wks            = __webpack_require__(4)
  , wksExt         = __webpack_require__(44)
  , wksDefine      = __webpack_require__(43)
  , keyOf          = __webpack_require__(111)
  , enumKeys       = __webpack_require__(106)
  , isArray        = __webpack_require__(108)
  , anObject       = __webpack_require__(18)
  , toIObject      = __webpack_require__(9)
  , toPrimitive    = __webpack_require__(42)
  , createDesc     = __webpack_require__(23)
  , _create        = __webpack_require__(60)
  , gOPNExt        = __webpack_require__(116)
  , $GOPD          = __webpack_require__(115)
  , $DP            = __webpack_require__(8)
  , $keys          = __webpack_require__(15)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(61).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f  = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(35)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(14)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('asyncIterator');

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43)('observable');

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseXYDataRegExp = __webpack_require__(133);


function getConverter() {

    // the following RegExp can only be used for XYdata, some peakTables have values with a "E-5" ...
    var ntuplesSeparator = /[, \t]{1,}/;

    var GC_MS_FIELDS = ['TIC', '.RIC', 'SCANNUMBER'];

    function convertToFloatArray(stringArray) {
        var l = stringArray.length;
        var floatArray = new Array(l);
        for (var i = 0; i < l; i++) {
            floatArray[i] = parseFloat(stringArray[i]);
        }
        return floatArray;
    }
    
    function Spectrum() {
        
    }

    function convert(jcamp, options) {
        options = options || {};

        var keepRecordsRegExp = /^$/;
        if (options.keepRecordsRegExp) keepRecordsRegExp = options.keepRecordsRegExp;
        var wantXY = !options.withoutXY;

        var start = Date.now();

        var ntuples = {},
            ldr,
            dataLabel,
            dataValue,
            ldrs,
            i, ii, position, endLine, infos;

        var result = {};
        result.profiling = [];
        result.logs = [];
        var spectra = [];
        result.spectra = spectra;
        result.info = {};
        var spectrum = new Spectrum();

        if (!(typeof jcamp === 'string')) return result;
        // console.time('start');

        if (result.profiling) result.profiling.push({
            action: 'Before split to LDRS',
            time: Date.now() - start
        });

        ldrs = jcamp.split(/[\r\n]+##/);

        if (result.profiling) result.profiling.push({
            action: 'Split to LDRS',
            time: Date.now() - start
        });

        if (ldrs[0]) ldrs[0] = ldrs[0].replace(/^[\r\n ]*##/, '');

        for (i = 0, ii = ldrs.length; i < ii; i++) {
            ldr = ldrs[i];
            // This is a new LDR
            position = ldr.indexOf('=');
            if (position > 0) {
                dataLabel = ldr.substring(0, position);
                dataValue = ldr.substring(position + 1).trim();
            } else {
                dataLabel = ldr;
                dataValue = '';
            }
            dataLabel = dataLabel.replace(/[_ -]/g, '').toUpperCase();

            if (dataLabel === 'DATATABLE') {
                endLine = dataValue.indexOf('\n');
                if (endLine === -1) endLine = dataValue.indexOf('\r');
                if (endLine > 0) {
                    var xIndex = -1;
                    var yIndex = -1;
                    // ##DATA TABLE= (X++(I..I)), XYDATA
                    // We need to find the variables

                    infos = dataValue.substring(0, endLine).split(/[ ,;\t]+/);
                    if (infos[0].indexOf('++') > 0) {
                        var firstVariable = infos[0].replace(/.*\(([a-zA-Z0-9]+)\+\+.*/, '$1');
                        var secondVariable = infos[0].replace(/.*\.\.([a-zA-Z0-9]+).*/, '$1');
                        xIndex = ntuples.symbol.indexOf(firstVariable);
                        yIndex = ntuples.symbol.indexOf(secondVariable);
                    }

                    if (xIndex === -1) xIndex = 0;
                    if (yIndex === -1) yIndex = 0;

                    if (ntuples.first) {
                        if (ntuples.first.length > xIndex) spectrum.firstX = ntuples.first[xIndex];
                        if (ntuples.first.length > yIndex) spectrum.firstY = ntuples.first[yIndex];
                    }
                    if (ntuples.last) {
                        if (ntuples.last.length > xIndex) spectrum.lastX = ntuples.last[xIndex];
                        if (ntuples.last.length > yIndex) spectrum.lastY = ntuples.last[yIndex];
                    }
                    if (ntuples.vardim && ntuples.vardim.length > xIndex) {
                        spectrum.nbPoints = ntuples.vardim[xIndex];
                    }
                    if (ntuples.factor) {
                        if (ntuples.factor.length > xIndex) spectrum.xFactor = ntuples.factor[xIndex];
                        if (ntuples.factor.length > yIndex) spectrum.yFactor = ntuples.factor[yIndex];
                    }
                    if (ntuples.units) {
                        if (ntuples.units.length > xIndex) spectrum.xUnit = ntuples.units[xIndex];
                        if (ntuples.units.length > yIndex) spectrum.yUnit = ntuples.units[yIndex];
                    }
                    spectrum.datatable = infos[0];
                    if (infos[1] && infos[1].indexOf('PEAKS') > -1) {
                        dataLabel = 'PEAKTABLE';
                    } else if (infos[1] && (infos[1].indexOf('XYDATA') || infos[0].indexOf('++') > 0)) {
                        dataLabel = 'XYDATA';
                        spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
                    }
                }
            }

            if (dataLabel === 'XYDATA') {
                if (wantXY) {
                    prepareSpectrum(result, spectrum);
                    // well apparently we should still consider it is a PEAK TABLE if there are no '++' after
                    if (dataValue.match(/.*\+\+.*/)) {
                        if (options.fastParse === false) {
                            parseXYDataRegExp(spectrum, dataValue, result);
                        } else {
                            if (!spectrum.deltaX) {
                                spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
                            }
                            fastParseXYData(spectrum, dataValue, result);
                        }
                    } else {
                        parsePeakTable(spectrum, dataValue, result);
                    }
                    spectra.push(spectrum);
                    spectrum = new Spectrum();
                }
                continue;
            } else if (dataLabel === 'PEAKTABLE') {
                if (wantXY) {
                    prepareSpectrum(result, spectrum);
                    parsePeakTable(spectrum, dataValue, result);
                    spectra.push(spectrum);
                    spectrum = new Spectrum();
                }
                continue;
            }


            if (dataLabel === 'TITLE') {
                spectrum.title = dataValue;
            } else if (dataLabel === 'DATATYPE') {
                spectrum.dataType = dataValue;
                if (dataValue.indexOf('nD') > -1) {
                    result.twoD = true;
                }
            } else if (dataLabel === 'NTUPLES') {
                if (dataValue.indexOf('nD') > -1) {
                    result.twoD = true;
                }
            } else if (dataLabel === 'XUNITS') {
                spectrum.xUnit = dataValue;
            } else if (dataLabel === 'YUNITS') {
                spectrum.yUnit = dataValue;
            } else if (dataLabel === 'FIRSTX') {
                spectrum.firstX = parseFloat(dataValue);
            } else if (dataLabel === 'LASTX') {
                spectrum.lastX = parseFloat(dataValue);
            } else if (dataLabel === 'FIRSTY') {
                spectrum.firstY = parseFloat(dataValue);
            } else if (dataLabel === 'LASTY') {
                spectrum.lastY = parseFloat(dataValue);
            } else if (dataLabel === 'NPOINTS') {
                spectrum.nbPoints = parseFloat(dataValue);
            } else if (dataLabel === 'XFACTOR') {
                spectrum.xFactor = parseFloat(dataValue);
            } else if (dataLabel === 'YFACTOR') {
                spectrum.yFactor = parseFloat(dataValue);
            } else if (dataLabel === 'DELTAX') {
                spectrum.deltaX = parseFloat(dataValue);
            } else if (dataLabel === '.OBSERVEFREQUENCY' || dataLabel === '$SFO1') {
                if (!spectrum.observeFrequency) spectrum.observeFrequency = parseFloat(dataValue);
            } else if (dataLabel === '.OBSERVENUCLEUS') {
                if (!spectrum.xType) result.xType = dataValue.replace(/[^a-zA-Z0-9]/g, '');
            } else if (dataLabel === '$SFO2') {
                if (!result.indirectFrequency) result.indirectFrequency = parseFloat(dataValue);

            } else if (dataLabel === '$OFFSET') {   // OFFSET for Bruker spectra
                result.shiftOffsetNum = 0;
                if (!result.shiftOffsetVal)  result.shiftOffsetVal = parseFloat(dataValue);
            } else if (dataLabel === '$REFERENCEPOINT') {   // OFFSET for Varian spectra


                // if we activate this part it does not work for ACD specmanager
                //         } else if (dataLabel=='.SHIFTREFERENCE') {   // OFFSET FOR Bruker Spectra
                //                 var parts = dataValue.split(/ *, */);
                //                 result.shiftOffsetNum = parseInt(parts[2].trim());
                //                 result.shiftOffsetVal = parseFloat(parts[3].trim());
            } else if (dataLabel === 'VARNAME') {
                ntuples.varname = dataValue.split(ntuplesSeparator);
            } else if (dataLabel === 'SYMBOL') {
                ntuples.symbol = dataValue.split(ntuplesSeparator);
            } else if (dataLabel === 'VARTYPE') {
                ntuples.vartype = dataValue.split(ntuplesSeparator);
            } else if (dataLabel === 'VARFORM') {
                ntuples.varform = dataValue.split(ntuplesSeparator);
            } else if (dataLabel === 'VARDIM') {
                ntuples.vardim = convertToFloatArray(dataValue.split(ntuplesSeparator));
            } else if (dataLabel === 'UNITS') {
                ntuples.units = dataValue.split(ntuplesSeparator);
            } else if (dataLabel === 'FACTOR') {
                ntuples.factor = convertToFloatArray(dataValue.split(ntuplesSeparator));
            } else if (dataLabel === 'FIRST') {
                ntuples.first = convertToFloatArray(dataValue.split(ntuplesSeparator));
            } else if (dataLabel === 'LAST') {
                ntuples.last = convertToFloatArray(dataValue.split(ntuplesSeparator));
            } else if (dataLabel === 'MIN') {
                ntuples.min = convertToFloatArray(dataValue.split(ntuplesSeparator));
            } else if (dataLabel === 'MAX') {
                ntuples.max = convertToFloatArray(dataValue.split(ntuplesSeparator));
            } else if (dataLabel === '.NUCLEUS') {
                if (result.twoD) {
                    result.yType = dataValue.split(ntuplesSeparator)[0];
                }
            } else if (dataLabel === 'PAGE') {
                spectrum.page = dataValue.trim();
                spectrum.pageValue = parseFloat(dataValue.replace(/^.*=/, ''));
                spectrum.pageSymbol = spectrum.page.replace(/=.*/, '');
                var pageSymbolIndex = ntuples.symbol.indexOf(spectrum.pageSymbol);
                var unit = '';
                if (ntuples.units && ntuples.units[pageSymbolIndex]) {
                    unit = ntuples.units[pageSymbolIndex];
                }
                if (result.indirectFrequency && unit !== 'PPM') {
                    spectrum.pageValue /= result.indirectFrequency;
                }
            } else if (dataLabel === 'RETENTIONTIME') {
                spectrum.pageValue = parseFloat(dataValue);
            } else if (isMSField(dataLabel)) {
                spectrum[convertMSFieldToLabel(dataLabel)] = dataValue;
            }
            if (dataLabel.match(keepRecordsRegExp)) {
                result.info[dataLabel] = dataValue.trim();
            }
        }

        if (result.profiling) result.profiling.push({
            action: 'Finished parsing',
            time: Date.now() - start
        });

        if (Object.keys(ntuples).length > 0) {
            var newNtuples = [];
            var keys = Object.keys(ntuples);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var values = ntuples[key];
                for (var j = 0; j < values.length; j++) {
                    if (!newNtuples[j]) newNtuples[j] = {};
                    newNtuples[j][key] = values[j];
                }
            }
            result.ntuples = newNtuples;
        }

        if (result.twoD && wantXY) {
            add2D(result, options);
            if (result.profiling) result.profiling.push({
                action: 'Finished countour plot calculation',
                time: Date.now() - start
            });
            if (!options.keepSpectra) {
                delete result.spectra;
            }
        }

        var isGCMS = (spectra.length > 1 && (!spectra[0].dataType || spectra[0].dataType.match(/.*mass.*/i)));
        if (isGCMS && options.newGCMS) {
            options.xy = true;
        }

        if (options.xy && wantXY) { // the spectraData should not be a oneD array but an object with x and y
            if (spectra.length > 0) {
                for (var i = 0; i < spectra.length; i++) {
                    var spectrum = spectra[i];
                    if (spectrum.data.length > 0) {
                        for (var j = 0; j < spectrum.data.length; j++) {
                            var data = spectrum.data[j];
                            var newData = {
                                x: new Array(data.length / 2),
                                y: new Array(data.length / 2)
                            };
                            for (var k = 0; k < data.length; k = k + 2) {
                                newData.x[k / 2] = data[k];
                                newData.y[k / 2] = data[k + 1];
                            }
                            spectrum.data[j] = newData;
                        }

                    }

                }
            }
        }

        // maybe it is a GC (HPLC) / MS. In this case we add a new format
        if (isGCMS && wantXY) {
            if (options.newGCMS) {
                addNewGCMS(result);
            } else {
                addGCMS(result);
            }
            if (result.profiling) result.profiling.push({
                action: 'Finished GCMS calculation',
                time: Date.now() - start
            });
        }

        if (result.profiling) {
            result.profiling.push({
                action: 'Total time',
                time: Date.now() - start
            });
        }

        return result;
    }


    function convertMSFieldToLabel(value) {
        return value.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    function isMSField(dataLabel) {
        return GC_MS_FIELDS.indexOf(dataLabel) !== -1;
    }

    function addNewGCMS(result) {
        var spectra = result.spectra;
        var length = spectra.length;
        var gcms = {
            times: new Array(length),
            series: [{
                name: 'ms',
                dimension: 2,
                data: new Array(length)
            }]
        };

        var i;
        var existingGCMSFields = [];
        for (i = 0; i < GC_MS_FIELDS.length; i++) {
            var label = convertMSFieldToLabel(GC_MS_FIELDS[i]);
            if (spectra[0][label]) {
                existingGCMSFields.push(label);
                gcms.series.push({
                    name: label,
                    dimension: 1,
                    data: new Array(length)
                });
            }
        }

        for (i = 0; i < length; i++) {
            var spectrum = spectra[i];
            gcms.times[i] = spectrum.pageValue;
            for (var j = 0; j < existingGCMSFields.length; j++) {
                gcms.series[j + 1].data[i] = parseFloat(spectrum[existingGCMSFields[j]]);
            }
            if (spectrum.data) {
                gcms.series[0].data[i] = [spectrum.data[0].x, spectrum.data[0].y];
            }

        }
        result.gcms = gcms;
    }

    function addGCMS(result) {
        var spectra = result.spectra;
        var existingGCMSFields = [];
        var i;
        for (i = 0; i < GC_MS_FIELDS.length; i++) {
            var label = convertMSFieldToLabel(GC_MS_FIELDS[i]);
            if (spectra[0][label]) {
                existingGCMSFields.push(label);
            }
        }
        if (existingGCMSFields.length === 0) return;
        var gcms = {};
        gcms.gc = {};
        gcms.ms = [];
        for (i = 0; i < existingGCMSFields.length; i++) {
            gcms.gc[existingGCMSFields[i]] = [];
        }
        for (i = 0; i < spectra.length; i++) {
            var spectrum = spectra[i];
            for (var j = 0; j < existingGCMSFields.length; j++) {
                gcms.gc[existingGCMSFields[j]].push(spectrum.pageValue);
                gcms.gc[existingGCMSFields[j]].push(parseFloat(spectrum[existingGCMSFields[j]]));
            }
            if (spectrum.data) gcms.ms[i] = spectrum.data[0];

        }
        result.gcms = gcms;
    }

    function prepareSpectrum(result, spectrum) {
        if (!spectrum.xFactor) spectrum.xFactor = 1;
        if (!spectrum.yFactor) spectrum.yFactor = 1;
        if (spectrum.observeFrequency) {
            if (spectrum.xUnit && spectrum.xUnit.toUpperCase() === 'HZ') {
                spectrum.xUnit = 'PPM';
                spectrum.xFactor = spectrum.xFactor / spectrum.observeFrequency;
                spectrum.firstX = spectrum.firstX / spectrum.observeFrequency;
                spectrum.lastX = spectrum.lastX / spectrum.observeFrequency;
                spectrum.deltaX = spectrum.deltaX / spectrum.observeFrequency;
            }
        }
        if (result.shiftOffsetVal) {
            var shift = spectrum.firstX - result.shiftOffsetVal;
            spectrum.firstX = spectrum.firstX - shift;
            spectrum.lastX = spectrum.lastX - shift;
        }
    }

    function getMedian(data) {
        data = data.sort(compareNumbers);
        var l = data.length;
        return data[Math.floor(l / 2)];
    }

    function compareNumbers(a, b) {
        return a - b;
    }

    function convertTo3DZ(spectra) {
        var minZ = spectra[0].data[0][0];
        var maxZ = minZ;
        var ySize = spectra.length;
        var xSize = spectra[0].data[0].length / 2;
        var z = new Array(ySize);
        for (var i = 0; i < ySize; i++) {
            z[i] = new Array(xSize);
            var xVector = spectra[i].data[0];
            for (var j = 0; j < xSize; j++) {
                var value = xVector[j * 2 + 1];
                z[i][j] = value;
                if (value < minZ) minZ = value;
                if (value > maxZ) maxZ = value;
            }
        }
        return {
            z: z,
            minX: spectra[0].data[0][0],
            maxX: spectra[0].data[0][spectra[0].data[0].length - 2], // has to be -2 because it is a 1D array [x,y,x,y,...]
            minY: spectra[0].pageValue,
            maxY: spectra[ySize - 1].pageValue,
            minZ: minZ,
            maxZ: maxZ,
            noise: getMedian(z[0].map(Math.abs))
        };

    }

    function add2D(result, options) {
        var zData = convertTo3DZ(result.spectra);
        if (!options.noContour) {
            result.contourLines = generateContourLines(zData, options);
            delete zData.z;
        }
        result.minMax = zData;
    }


    function generateContourLines(zData, options) {
        var noise = zData.noise;
        var z = zData.z;
        var nbLevels = options.nbContourLevels || 7;
        var noiseMultiplier = options.noiseMultiplier === undefined ? 5 : options.noiseMultiplier;
        var povarHeight0, povarHeight1, povarHeight2, povarHeight3;
        var isOver0, isOver1, isOver2, isOver3;
        var nbSubSpectra = z.length;
        var nbPovars = z[0].length;
        var pAx, pAy, pBx, pBy;

        var x0 = zData.minX;
        var xN = zData.maxX;
        var dx = (xN - x0) / (nbPovars - 1);
        var y0 = zData.minY;
        var yN = zData.maxY;
        var dy = (yN - y0) / (nbSubSpectra - 1);
        var minZ = zData.minZ;
        var maxZ = zData.maxZ;

        //System.out.prvarln('y0 '+y0+' yN '+yN);
        // -------------------------
        // Povars attribution
        //
        // 0----1
        // |  / |
        // | /  |
        // 2----3
        //
        // ---------------------d------

        var iter = nbLevels * 2;
        var contourLevels = new Array(iter);
        var lineZValue;
        for (var level = 0; level < iter; level++) { // multiply by 2 for positif and negatif
            var contourLevel = {};
            contourLevels[level] = contourLevel;
            var side = level % 2;
            var factor = (maxZ - noiseMultiplier * noise) * Math.exp((level >> 1) - nbLevels);
            if (side === 0) {
                lineZValue = factor + noiseMultiplier * noise;
            } else {
                lineZValue = (0 - factor) - noiseMultiplier * noise;
            }
            var lines = [];
            contourLevel.zValue = lineZValue;
            contourLevel.lines = lines;

            if (lineZValue <= minZ || lineZValue >= maxZ) continue;

            for (var iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
                var subSpectra = z[iSubSpectra];
                var subSpectraAfter = z[iSubSpectra + 1];
                for (var povar = 0; povar < nbPovars - 1; povar++) {
                    povarHeight0 = subSpectra[povar];
                    povarHeight1 = subSpectra[povar + 1];
                    povarHeight2 = subSpectraAfter[povar];
                    povarHeight3 = subSpectraAfter[povar + 1];

                    isOver0 = (povarHeight0 > lineZValue);
                    isOver1 = (povarHeight1 > lineZValue);
                    isOver2 = (povarHeight2 > lineZValue);
                    isOver3 = (povarHeight3 > lineZValue);

                    // Example povar0 is over the plane and povar1 and
                    // povar2 are below, we find the varersections and add
                    // the segment
                    if (isOver0 !== isOver1 && isOver0 !== isOver2) {
                        pAx = povar + (lineZValue - povarHeight0) / (povarHeight1 - povarHeight0);
                        pAy = iSubSpectra;
                        pBx = povar;
                        pBy = iSubSpectra + (lineZValue - povarHeight0) / (povarHeight2 - povarHeight0);
                        lines.push(pAx * dx + x0);
                        lines.push(pAy * dy + y0);
                        lines.push(pBx * dx + x0);
                        lines.push(pBy * dy + y0);
                    }
                    // remove push does not help !!!!
                    if (isOver3 !== isOver1 && isOver3 !== isOver2) {
                        pAx = povar + 1;
                        pAy = iSubSpectra + 1 - (lineZValue - povarHeight3) / (povarHeight1 - povarHeight3);
                        pBx = povar + 1 - (lineZValue - povarHeight3) / (povarHeight2 - povarHeight3);
                        pBy = iSubSpectra + 1;
                        lines.push(pAx * dx + x0);
                        lines.push(pAy * dy + y0);
                        lines.push(pBx * dx + x0);
                        lines.push(pBy * dy + y0);
                    }
                    // test around the diagonal
                    if (isOver1 !== isOver2) {
                        pAx = (povar + 1 - (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dx + x0;
                        pAy = (iSubSpectra + (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dy + y0;
                        if (isOver1 !== isOver0) {
                            pBx = povar + 1 - (lineZValue - povarHeight1) / (povarHeight0 - povarHeight1);
                            pBy = iSubSpectra;
                            lines.push(pAx);
                            lines.push(pAy);
                            lines.push(pBx * dx + x0);
                            lines.push(pBy * dy + y0);
                        }
                        if (isOver2 !== isOver0) {
                            pBx = povar;
                            pBy = iSubSpectra + 1 - (lineZValue - povarHeight2) / (povarHeight0 - povarHeight2);
                            lines.push(pAx);
                            lines.push(pAy);
                            lines.push(pBx * dx + x0);
                            lines.push(pBy * dy + y0);
                        }
                        if (isOver1 !== isOver3) {
                            pBx = povar + 1;
                            pBy = iSubSpectra + (lineZValue - povarHeight1) / (povarHeight3 - povarHeight1);
                            lines.push(pAx);
                            lines.push(pAy);
                            lines.push(pBx * dx + x0);
                            lines.push(pBy * dy + y0);
                        }
                        if (isOver2 !== isOver3) {
                            pBx = povar + (lineZValue - povarHeight2) / (povarHeight3 - povarHeight2);
                            pBy = iSubSpectra + 1;
                            lines.push(pAx);
                            lines.push(pAy);
                            lines.push(pBx * dx + x0);
                            lines.push(pBy * dy + y0);
                        }
                    }
                }
            }
        }

        return {
            minX: zData.minX,
            maxX: zData.maxX,
            minY: zData.minY,
            maxY: zData.maxY,
            segments: contourLevels
        };
    }

    function fastParseXYData(spectrum, value) {
        // TODO need to deal with result
        //  console.log(value);
        // we check if deltaX is defined otherwise we calculate it

        var yFactor = spectrum.yFactor;
        var deltaX = spectrum.deltaX;


        spectrum.isXYdata = true;
        // TODO to be improved using 2 array {x:[], y:[]}
        var currentData = [];
        spectrum.data = [currentData];


        var currentX = spectrum.firstX;
        var currentY = spectrum.firstY;

        // we skip the first line
        //
        var endLine = false;
        for (var i = 0; i < value.length; i++) {
            var ascii = value.charCodeAt(i);
            if (ascii === 13 || ascii === 10) {
                endLine = true;
            } else {
                if (endLine) break;
            }
        }

        // we proceed taking the i after the first line
        var newLine = true;
        var isDifference = false;
        var isLastDifference = false;
        var lastDifference = 0;
        var isDuplicate = false;
        var inComment = false;
        var currentValue = 0;
        var isNegative = false;
        var inValue = false;
        var skipFirstValue = false;
        var decimalPosition = 0;
        var ascii;
        for (; i <= value.length; i++) {
            if (i === value.length) ascii = 13;
            else ascii = value.charCodeAt(i);
            if (inComment) {
                // we should ignore the text if we are after $$
                if (ascii === 13 || ascii === 10) {
                    newLine = true;
                    inComment = false;
                }
            } else {
                // when is it a new value ?
                // when it is not a digit, . or comma
                // it is a number that is either new or we continue
                if (ascii <= 57 && ascii >= 48) { // a number
                    inValue = true;
                    if (decimalPosition > 0) {
                        currentValue += (ascii - 48) / Math.pow(10, decimalPosition++);
                    } else {
                        currentValue *= 10;
                        currentValue += ascii - 48;
                    }
                } else if (ascii === 44 || ascii === 46) { // a "," or "."
                    inValue = true;
                    decimalPosition++;
                } else {
                    if (inValue) {
                        // need to process the previous value
                        if (newLine) {
                            newLine = false; // we don't check the X value
                            // console.log("NEW LINE",isDifference, lastDifference);
                            // if new line and lastDifference, the first value is just a check !
                            // that we don't check ...
                            if (isLastDifference) skipFirstValue = true;
                        } else {
                            // need to deal with duplicate and differences
                            if (skipFirstValue) {
                                skipFirstValue = false;
                            } else {
                                if (isDifference) {
                                    lastDifference = isNegative ? (0 - currentValue) : currentValue;
                                    isLastDifference = true;
                                    isDifference = false;
                                }
                                var duplicate = isDuplicate ? currentValue - 1 : 1;
                                for (var j = 0; j < duplicate; j++) {
                                    if (isLastDifference) {
                                        currentY += lastDifference;
                                    } else {
                                        currentY = isNegative ? (0 - currentValue) : currentValue;
                                    }
                                    currentData.push(currentX);
                                    currentData.push(currentY * yFactor);
                                    currentX += deltaX;
                                }
                            }
                        }
                        isNegative = false;
                        currentValue = 0;
                        decimalPosition = 0;
                        inValue = false;
                        isDuplicate = false;
                    }

                    // positive SQZ digits @ A B C D E F G H I (ascii 64-73)
                    if ((ascii < 74) && (ascii > 63)) {
                        inValue = true;
                        isLastDifference = false;
                        currentValue = ascii - 64;
                    } else
                    // negative SQZ digits a b c d e f g h i (ascii 97-105)
                    if ((ascii > 96) && (ascii < 106)) {
                        inValue = true;
                        isLastDifference = false;
                        currentValue = ascii - 96;
                        isNegative = true;
                    } else
                    // DUP digits S T U V W X Y Z s (ascii 83-90, 115)
                    if (ascii === 115) {
                        inValue = true;
                        isDuplicate = true;
                        currentValue = 9;
                    } else if ((ascii > 82) && (ascii < 91)) {
                        inValue = true;
                        isDuplicate = true;
                        currentValue = ascii - 82;
                    } else
                    // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
                    if ((ascii > 73) && (ascii < 83)) {
                        inValue = true;
                        isDifference = true;
                        currentValue = ascii - 73;
                    } else
                    // negative DIF digits j k l m n o p q r (ascii 106-114)
                    if ((ascii > 105) && (ascii < 115)) {
                        inValue = true;
                        isDifference = true;
                        currentValue = ascii - 105;
                        isNegative = true;
                    } else
                    // $ sign, we need to check the next one
                    if (ascii === 36 && value.charCodeAt(i + 1) === 36) {
                        inValue = true;
                        inComment = true;
                    } else
                    // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
                    if (ascii === 37) {
                        inValue = true;
                        isDifference = true;
                        currentValue = 0;
                        isNegative = false;
                    } else if (ascii === 45) { // a "-"
                        // check if after there is a number, decimal or comma
                        var ascii2 = value.charCodeAt(i + 1);
                        if ((ascii2 >= 48 && ascii2 <= 57) || ascii2 === 44 || ascii2 === 46) {
                            inValue = true;
                            isLastDifference = false;
                            isNegative = true;
                        }
                    } else if (ascii === 13 || ascii === 10) {
                        newLine = true;
                        inComment = false;
                    }
                    // and now analyse the details ... space or tabulation
                    // if "+" we just don't care
                }
            }
        }
    }

    function parsePeakTable(spectrum, value, result) {
        var removeCommentRegExp = /\$\$.*/;
        var peakTableSplitRegExp = /[,\t ]+/;

        spectrum.isPeaktable = true;
        var i, ii, j, jj, values;
        var currentData = [];
        spectrum.data = [currentData];

        // counts for around 20% of the time
        var lines = value.split(/,? *,?[;\r\n]+ */);

        for (i = 1, ii = lines.length; i < ii; i++) {
            values = lines[i].trim().replace(removeCommentRegExp, '').split(peakTableSplitRegExp);
            if (values.length % 2 === 0) {
                for (j = 0, jj = values.length; j < jj; j = j + 2) {
                    // takes around 40% of the time to add and parse the 2 values nearly exclusively because of parseFloat
                    currentData.push(parseFloat(values[j]) * spectrum.xFactor);
                    currentData.push(parseFloat(values[j + 1]) * spectrum.yFactor);
                }
            } else {
                result.logs.push('Format error: ' + values);
            }
        }
    }


    return convert;

}

var convert = getConverter();

function JcampConverter(input, options, useWorker) {
    if (typeof options === 'boolean') {
        useWorker = options;
        options = {};
    }
    if (useWorker) {
        return postToWorker(input, options);
    } else {
        return convert(input, options);
    }
}

var stamps = {},
    worker;

function postToWorker(input, options) {
    if (!worker) {
        createWorker();
    }
    return new Promise(function (resolve) {
        var stamp = Date.now() + '' + Math.random();
        stamps[stamp] = resolve;
        worker.postMessage(JSON.stringify({
            stamp: stamp,
            input: input,
            options: options
        }));
    });
}

function createWorker() {
    var workerURL = URL.createObjectURL(new Blob([
        'var getConverter =' + getConverter.toString() + ';var convert = getConverter(); onmessage = function (event) { var data = JSON.parse(event.data); postMessage(JSON.stringify({stamp: data.stamp, output: convert(data.input, data.options)})); };'
    ], {type: 'application/javascript'}));
    worker = new Worker(workerURL);
    URL.revokeObjectURL(workerURL);
    worker.addEventListener('message', function (event) {
        var data = JSON.parse(event.data);
        var stamp = data.stamp;
        if (stamps[stamp]) {
            stamps[stamp](data.output);
        }
    });
}

module.exports = {
    convert: JcampConverter
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var xyDataSplitRegExp = /[,\t \+-]*(?=[^\d,\t \.])|[ \t]+(?=[\d+\.-])/;
var removeCommentRegExp = /\$\$.*/;
var DEBUG=false;

module.exports=function(spectrum, value, result) {
    // we check if deltaX is defined otherwise we calculate it
    if (!spectrum.deltaX) {
        spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
    }

    spectrum.isXYdata=true;

    var currentData = [];
    var currentPosition=0;
    spectrum.data = [currentData];

    var currentX = spectrum.firstX;
    var currentY = spectrum.firstY;
    var lines = value.split(/[\r\n]+/);
    var lastDif, values, ascii, expectedY;
    values = [];
    for (var i = 1, ii = lines.length; i < ii; i++) {
        //var previousValues=JSON.parse(JSON.stringify(values));
        values = lines[i].trim().replace(removeCommentRegExp, '').split(xyDataSplitRegExp);
        if (values.length > 0) {
            if (DEBUG) {
                if (!spectrum.firstPoint) {
                    spectrum.firstPoint = +values[0];
                }
                var expectedCurrentX = (values[0] - spectrum.firstPoint) * spectrum.xFactor + spectrum.firstX;
                if ((lastDif || lastDif === 0)) {
                    expectedCurrentX += spectrum.deltaX;
                }
                result.logs.push('Checking X value: currentX: ' + currentX + ' - expectedCurrentX: ' + expectedCurrentX);
            }
            for (var j = 1, jj = values.length; j < jj; j++) {
                if (j === 1 && (lastDif || lastDif === 0)) {
                    lastDif = null; // at the beginning of each line there should be the full value X / Y so the diff is always undefined
                    // we could check if we have the expected Y value
                    ascii = values[j].charCodeAt(0);

                    if (false) { // this code is just to check the jcamp DIFDUP and the next line repeat of Y value
                        // + - . 0 1 2 3 4 5 6 7 8 9
                        if ((ascii === 43) || (ascii === 45) || (ascii === 46) || ((ascii > 47) && (ascii < 58))) {
                            expectedY = +values[j];
                        } else
                        // positive SQZ digits @ A B C D E F G H I (ascii 64-73)
                        if ((ascii > 63) && (ascii < 74)) {
                            expectedY = +(String.fromCharCode(ascii - 16) + values[j].substring(1));
                        } else
                        // negative SQZ digits a b c d e f g h i (ascii 97-105)
                        if ((ascii > 96) && (ascii < 106)) {
                            expectedY = -(String.fromCharCode(ascii - 48) + values[j].substring(1));
                        }
                        if (expectedY !== currentY) {
                            result.logs.push('Y value check error: Found: ' + expectedY + ' - Current: ' + currentY);
                            result.logs.push('Previous values: ' + previousValues.length);
                            result.logs.push(previousValues);
                        }
                    }
                } else {
                    if (values[j].length > 0) {
                        ascii = values[j].charCodeAt(0);
                        // + - . 0 1 2 3 4 5 6 7 8 9
                        if ((ascii === 43) || (ascii === 45) || (ascii === 46) || ((ascii > 47) && (ascii < 58))) {
                            lastDif = null;
                            currentY = +values[j];
                            // currentData.push(currentX, currentY * spectrum.yFactor);
                            currentData[currentPosition++]=currentX;
                            currentData[currentPosition++]=currentY * spectrum.yFactor;
                            currentX += spectrum.deltaX;
                        } else
                        // positive SQZ digits @ A B C D E F G H I (ascii 64-73)
                        if ((ascii > 63) && (ascii < 74)) {
                            lastDif = null;
                            currentY = +(String.fromCharCode(ascii - 16) + values[j].substring(1));
                            // currentData.push(currentX, currentY * spectrum.yFactor);
                            currentData[currentPosition++] = currentX;
                            currentData[currentPosition++] = currentY * spectrum.yFactor;
                            currentX += spectrum.deltaX;
                        } else
                        // negative SQZ digits a b c d e f g h i (ascii 97-105)
                        if ((ascii > 96) && (ascii < 106)) {
                            lastDif = null;
                            // we can multiply the string by 1 because if may not contain decimal (is this correct ????)
                            currentY = -(String.fromCharCode(ascii - 48) + values[j].substring(1))*1;
                            //currentData.push(currentX, currentY * spectrum.yFactor);
                            currentData[currentPosition++]=currentX;
                            currentData[currentPosition++]=currentY * spectrum.yFactor;
                            currentX += spectrum.deltaX;
                        } else



                        // DUP digits S T U V W X Y Z s (ascii 83-90, 115)
                        if (((ascii > 82) && (ascii < 91)) || (ascii === 115)) {
                            var dup = (String.fromCharCode(ascii - 34) + values[j].substring(1)) - 1;
                            if (ascii === 115) {
                                dup = ('9' + values[j].substring(1)) - 1;
                            }
                            for (var l = 0; l < dup; l++) {
                                if (lastDif) {
                                    currentY = currentY + lastDif;
                                }
                                // currentData.push(currentX, currentY * spectrum.yFactor);
                                currentData[currentPosition++]=currentX;
                                currentData[currentPosition++]=currentY * spectrum.yFactor;
                                currentX += spectrum.deltaX;
                            }
                        } else
                        // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
                        if (ascii === 37) {
                            lastDif = +('0' + values[j].substring(1));
                            currentY += lastDif;
                            // currentData.push(currentX, currentY * spectrum.yFactor);
                            currentData[currentPosition++]=currentX;
                            currentData[currentPosition++]=currentY * spectrum.yFactor;
                            currentX += spectrum.deltaX;
                        } else if ((ascii > 73) && (ascii < 83)) {
                            lastDif = (String.fromCharCode(ascii - 25) + values[j].substring(1))*1;
                            currentY += lastDif;
                            // currentData.push(currentX, currentY * spectrum.yFactor);
                            currentData[currentPosition++]=currentX;
                            currentData[currentPosition++]=currentY * spectrum.yFactor;
                            currentX += spectrum.deltaX;
                        } else
                        // negative DIF digits j k l m n o p q r (ascii 106-114)
                        if ((ascii > 105) && (ascii < 115)) {
                            lastDif = -(String.fromCharCode(ascii - 57) + values[j].substring(1))*1;
                            currentY += lastDif;
                            // currentData.push(currentX, currentY * spectrum.yFactor);
                            currentData[currentPosition++]=currentX;
                            currentData[currentPosition++]=currentY * spectrum.yFactor;
                            currentX += spectrum.deltaX;
                        }
                    }
                }
            }
        }
    }
}


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Stat = __webpack_require__(77).array;
/**
 * Function that returns an array of points given 1D array as follows:
 *
 * [x1, y1, .. , x2, y2, ..]
 *
 * And receive the number of dimensions of each point.
 * @param array
 * @param dimensions
 * @returns {Array} - Array of points.
 */
function coordArrayToPoints(array, dimensions) {
    if(array.length % dimensions !== 0) {
        throw new RangeError('Dimensions number must be accordance with the size of the array.');
    }

    var length = array.length / dimensions;
    var pointsArr = new Array(length);

    var k = 0;
    for(var i = 0; i < array.length; i += dimensions) {
        var point = new Array(dimensions);
        for(var j = 0; j < dimensions; ++j) {
            point[j] = array[i + j];
        }

        pointsArr[k] = point;
        k++;
    }

    return pointsArr;
}


/**
 * Function that given an array as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * Returns an array as follows:
 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
 *
 * And receives the number of dimensions of each coordinate.
 * @param array
 * @param dimensions
 * @returns {Array} - Matrix of coordinates
 */
function coordArrayToCoordMatrix(array, dimensions) {
    if(array.length % dimensions !== 0) {
        throw new RangeError('Dimensions number must be accordance with the size of the array.');
    }

    var coordinatesArray = new Array(dimensions);
    var points = array.length / dimensions;
    for (var i = 0; i < coordinatesArray.length; i++) {
        coordinatesArray[i] = new Array(points);
    }

    for(i = 0; i < array.length; i += dimensions) {
        for(var j = 0; j < dimensions; ++j) {
            var currentPoint = Math.floor(i / dimensions);
            coordinatesArray[j][currentPoint] = array[i + j];
        }
    }

    return coordinatesArray;
}

/**
 * Function that receives a coordinate matrix as follows:
 * [[x1, x2, ..], [y1, y2, ..], [ .. ]]
 *
 * Returns an array of coordinates as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * @param coordMatrix
 * @returns {Array}
 */
function coordMatrixToCoordArray(coordMatrix) {
    var coodinatesArray = new Array(coordMatrix.length * coordMatrix[0].length);
    var k = 0;
    for(var i = 0; i < coordMatrix[0].length; ++i) {
        for(var j = 0; j < coordMatrix.length; ++j) {
            coodinatesArray[k] = coordMatrix[j][i];
            ++k;
        }
    }

    return coodinatesArray;
}

/**
 * Tranpose a matrix, this method is for coordMatrixToPoints and
 * pointsToCoordMatrix, that because only transposing the matrix
 * you can change your representation.
 *
 * @param matrix
 * @returns {Array}
 */
function transpose(matrix) {
    var resultMatrix = new Array(matrix[0].length);
    for(var i = 0; i < resultMatrix.length; ++i) {
        resultMatrix[i] = new Array(matrix.length);
    }

    for (i = 0; i < matrix.length; ++i) {
        for(var j = 0; j < matrix[0].length; ++j) {
            resultMatrix[j][i] = matrix[i][j];
        }
    }

    return resultMatrix;
}

/**
 * Function that transform an array of points into a coordinates array
 * as follows:
 * [x1, y1, .. , x2, y2, ..]
 *
 * @param points
 * @returns {Array}
 */
function pointsToCoordArray(points) {
    var coodinatesArray = new Array(points.length * points[0].length);
    var k = 0;
    for(var i = 0; i < points.length; ++i) {
        for(var j = 0; j < points[0].length; ++j) {
            coodinatesArray[k] = points[i][j];
            ++k;
        }
    }

    return coodinatesArray;
}

/**
 * Apply the dot product between the smaller vector and a subsets of the
 * largest one.
 *
 * @param firstVector
 * @param secondVector
 * @returns {Array} each dot product of size of the difference between the
 *                  larger and the smallest one.
 */
function applyDotProduct(firstVector, secondVector) {
    var largestVector, smallestVector;
    if(firstVector.length <= secondVector.length) {
        smallestVector = firstVector;
        largestVector = secondVector;
    } else {
        smallestVector = secondVector;
        largestVector = firstVector;
    }

    var difference = largestVector.length - smallestVector.length + 1;
    var dotProductApplied = new Array(difference);

    for (var i = 0; i < difference; ++i) {
        var sum = 0;
        for (var j = 0; j < smallestVector.length; ++j) {
            sum += smallestVector[j] * largestVector[i + j];
        }
        dotProductApplied[i] = sum;
    }

    return dotProductApplied;
}
/**
 * To scale the input array between the specified min and max values. The operation is performed inplace
 * if the options.inplace is specified. If only one of the min or max parameters is specified, then the scaling
 * will multiply the input array by min/min(input) or max/max(input)
 * @param input
 * @param options
 * @returns {*}
 */
function scale(input, options){
    var y;
    if(options.inPlace){
        y = input;
    }
    else{
        y = new Array(input.length);
    }
    const max = options.max;
    const min = options.min;
    if(typeof max === "number"){
        if(typeof min === "number"){
            var minMax = Stat.minMax(input);
            var factor = (max - min)/(minMax.max-minMax.min);
            for(var i=0;i< y.length;i++){
                y[i]=(input[i]-minMax.min)*factor+min;
            }
        }
        else{
            var currentMin = Stat.max(input);
            var factor = max/currentMin;
            for(var i=0;i< y.length;i++){
                y[i] = input[i]*factor;
            }
        }
    }
    else{
        if(typeof min === "number"){
            var currentMin = Stat.min(input);
            var factor = min/currentMin;
            for(var i=0;i< y.length;i++){
                y[i] = input[i]*factor;
            }
        }
    }
    return y;
}

module.exports = {
    coordArrayToPoints: coordArrayToPoints,
    coordArrayToCoordMatrix: coordArrayToCoordMatrix,
    coordMatrixToCoordArray: coordMatrixToCoordArray,
    coordMatrixToPoints: transpose,
    pointsToCoordArray: pointsToCoordArray,
    pointsToCoordMatrix: transpose,
    applyDotProduct: applyDotProduct,
    scale:scale
};



/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *
 * Function that returns a Number array of equally spaced numberOfPoints
 * containing a representation of intensities of the spectra arguments x
 * and y.
 *
 * The options parameter contains an object in the following form:
 * from: starting point
 * to: last point
 * numberOfPoints: number of points between from and to
 * variant: "slot" or "smooth" - smooth is the default option
 *
 * The slot variant consist that each point in the new array is calculated
 * averaging the existing points between the slot that belongs to the current
 * value. The smooth variant is the same but takes the integral of the range
 * of the slot and divide by the step size between two points in the new array.
 *
 * @param x - sorted increasing x values
 * @param y
 * @param options
 * @returns {Array} new array with the equally spaced data.
 *
 */
function getEquallySpacedData(x, y, options) {
    if (x.length>1 && x[0]>x[1]) {
        x=x.slice().reverse();
        y=y.slice().reverse();
    }

    var xLength = x.length;
    if(xLength !== y.length)
        throw new RangeError("the x and y vector doesn't have the same size.");

    if (options === undefined) options = {};

    var from = options.from === undefined ? x[0] : options.from
    if (isNaN(from) || !isFinite(from)) {
        throw new RangeError("'From' value must be a number");
    }
    var to = options.to === undefined ? x[x.length - 1] : options.to;
    if (isNaN(to) || !isFinite(to)) {
        throw new RangeError("'To' value must be a number");
    }

    var reverse = from > to;
    if(reverse) {
        var temp = from;
        from = to;
        to = temp;
    }

    var numberOfPoints = options.numberOfPoints === undefined ? 100 : options.numberOfPoints;
    if (isNaN(numberOfPoints) || !isFinite(numberOfPoints)) {
        throw new RangeError("'Number of points' value must be a number");
    }
    if(numberOfPoints < 1)
        throw new RangeError("the number of point must be higher than 1");

    var algorithm = options.variant === "slot" ? "slot" : "smooth"; // default value: smooth

    var output = algorithm === "slot" ? getEquallySpacedSlot(x, y, from, to, numberOfPoints) : getEquallySpacedSmooth(x, y, from, to, numberOfPoints);

    return reverse ? output.reverse() : output;
}

/**
 * function that retrieves the getEquallySpacedData with the variant "smooth"
 *
 * @param x
 * @param y
 * @param from - Initial point
 * @param to - Final point
 * @param numberOfPoints
 * @returns {Array} - Array of y's equally spaced with the variant "smooth"
 */
function getEquallySpacedSmooth(x, y, from, to, numberOfPoints) {
    var xLength = x.length;

    var step = (to - from) / (numberOfPoints - 1);
    var halfStep = step / 2;

    var start = from - halfStep;
    var output = new Array(numberOfPoints);

    var initialOriginalStep = x[1] - x[0];
    var lastOriginalStep = x[x.length - 1] - x[x.length - 2];

    // Init main variables
    var min = start;
    var max = start + step;

    var previousX = Number.MIN_VALUE;
    var previousY = 0;
    var nextX = x[0] - initialOriginalStep;
    var nextY = 0;

    var currentValue = 0;
    var slope = 0;
    var intercept = 0;
    var sumAtMin = 0;
    var sumAtMax = 0;

    var i = 0; // index of input
    var j = 0; // index of output

    function getSlope(x0, y0, x1, y1) {
        return (y1 - y0) / (x1 - x0);
    }

    main: while(true) {
        while (nextX - max >= 0) {
            // no overlap with original point, just consume current value
            var add = integral(0, max - previousX, slope, previousY);
            sumAtMax = currentValue + add;

            output[j] = (sumAtMax - sumAtMin) / step;
            j++;

            if (j === numberOfPoints)
                break main;

            min = max;
            max += step;
            sumAtMin = sumAtMax;
        }

        if(previousX <= min && min <= nextX) {
            add = integral(0, min - previousX, slope, previousY);
            sumAtMin = currentValue + add;
        }

        currentValue += integral(previousX, nextX, slope, intercept);

        previousX = nextX;
        previousY = nextY;

        if (i < xLength) {
            nextX = x[i];
            nextY = y[i];
            i++;
        } else if (i === xLength) {
            nextX += lastOriginalStep;
            nextY = 0;
        }
        // updating parameters
        slope = getSlope(previousX, previousY, nextX, nextY);
        intercept = -slope*previousX + previousY;
    }

    return output;
}

/**
 * function that retrieves the getEquallySpacedData with the variant "slot"
 *
 * @param x
 * @param y
 * @param from - Initial point
 * @param to - Final point
 * @param numberOfPoints
 * @returns {Array} - Array of y's equally spaced with the variant "slot"
 */
function getEquallySpacedSlot(x, y, from, to, numberOfPoints) {
    var xLength = x.length;

    var step = (to - from) / (numberOfPoints - 1);
    var halfStep = step / 2;
    var lastStep = x[x.length - 1] - x[x.length - 2];

    var start = from - halfStep;
    var output = new Array(numberOfPoints);

    // Init main variables
    var min = start;
    var max = start + step;

    var previousX = -Number.MAX_VALUE;
    var previousY = 0;
    var nextX = x[0];
    var nextY = y[0];
    var frontOutsideSpectra = 0;
    var backOutsideSpectra = true;

    var currentValue = 0;

    // for slot algorithm
    var currentPoints = 0;

    var i = 1; // index of input
    var j = 0; // index of output

    main: while(true) {
        if (previousX>=nextX) throw (new Error('x must be an increasing serie'));
        while (previousX - max > 0) {
            // no overlap with original point, just consume current value
            if(backOutsideSpectra) {
                currentPoints++;
                backOutsideSpectra = false;
            }

            output[j] = currentPoints <= 0 ? 0 : currentValue / currentPoints;
            j++;

            if (j === numberOfPoints)
                break main;

            min = max;
            max += step;
            currentValue = 0;
            currentPoints = 0;
        }

        if(previousX > min) {
            currentValue += previousY;
            currentPoints++;
        }

        if(previousX === -Number.MAX_VALUE || frontOutsideSpectra > 1)
            currentPoints--;

        previousX = nextX;
        previousY = nextY;

        if (i < xLength) {
            nextX = x[i];
            nextY = y[i];
            i++;
        } else {
            nextX += lastStep;
            nextY = 0;
            frontOutsideSpectra++;
        }
    }

    return output;
}
/**
 * Function that calculates the integral of the line between two
 * x-coordinates, given the slope and intercept of the line.
 *
 * @param x0
 * @param x1
 * @param slope
 * @param intercept
 * @returns {number} integral value.
 */
function integral(x0, x1, slope, intercept) {
    return (0.5 * slope * x1 * x1 + intercept * x1) - (0.5 * slope * x0 * x0 + intercept * x0);
}

exports.getEquallySpacedData = getEquallySpacedData;
exports.integral = integral;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.SNV = SNV;
var Stat = __webpack_require__(77).array;

/**
 * Function that applies the standard normal variate (SNV) to an array of values.
 *
 * @param data - Array of values.
 * @returns {Array} - applied the SNV.
 */
function SNV(data) {
    var mean = Stat.mean(data);
    var std = Stat.standardDeviation(data);
    var result = data.slice();
    for (var i = 0; i < data.length; i++) {
        result[i] = (result[i] - mean) / std;
    }
    return result;
}


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by acastillo on 8/5/15.
 */
var Matrix = __webpack_require__(26);
var math = __webpack_require__(68);

var DEBUG = false;
/** Levenberg Marquardt curve-fitting: minimize sum of weighted squared residuals
 ----------  INPUT  VARIABLES  -----------
 func   = function of n independent variables, 't', and m parameters, 'p',
 returning the simulated model: y_hat = func(t,p,c)
 p      = n-vector of initial guess of parameter values
 t      = m-vectors or matrix of independent variables (used as arg to func)
 y_dat  = m-vectors or matrix of data to be fit by func(t,p)
 weight = weighting vector for least squares fit ( weight >= 0 ) ...
 inverse of the standard measurement errors
 Default:  sqrt(d.o.f. / ( y_dat' * y_dat ))
 dp     = fractional increment of 'p' for numerical derivatives
 dp(j)>0 central differences calculated
 dp(j)<0 one sided 'backwards' differences calculated
 dp(j)=0 sets corresponding partials to zero; i.e. holds p(j) fixed
 Default:  0.001;
 p_min  = n-vector of lower bounds for parameter values
 p_max  = n-vector of upper bounds for parameter values
 c      = an optional matrix of values passed to func(t,p,c)
 opts   = vector of algorithmic parameters
 parameter    defaults    meaning
 opts(1)  =  prnt            3        >1 intermediate results; >2 plots
 opts(2)  =  MaxIter      10*Npar     maximum number of iterations
 opts(3)  =  epsilon_1       1e-3     convergence tolerance for gradient
 opts(4)  =  epsilon_2       1e-3     convergence tolerance for parameters
 opts(5)  =  epsilon_3       1e-3     convergence tolerance for Chi-square
 opts(6)  =  epsilon_4       1e-2     determines acceptance of a L-M step
 opts(7)  =  lambda_0        1e-2     initial value of L-M paramter
 opts(8)  =  lambda_UP_fac   11       factor for increasing lambda
 opts(9)  =  lambda_DN_fac    9       factor for decreasing lambda
 opts(10) =  Update_Type      1       1: Levenberg-Marquardt lambda update
 2: Quadratic update
 3: Nielsen's lambda update equations

 ----------  OUTPUT  VARIABLES  -----------
 p       = least-squares optimal estimate of the parameter values
 X2      = Chi squared criteria
 sigma_p = asymptotic standard error of the parameters
 sigma_y = asymptotic standard error of the curve-fit
 corr    = correlation matrix of the parameters
 R_sq    = R-squared cofficient of multiple determination
 cvg_hst = convergence history

 Henri Gavin, Dept. Civil & Environ. Engineering, Duke Univ. 22 Sep 2013
 modified from: http://octave.sourceforge.net/optim/function/leasqr.html
 using references by
 Press, et al., Numerical Recipes, Cambridge Univ. Press, 1992, Chapter 15.
 Sam Roweis       http://www.cs.toronto.edu/~roweis/notes/lm.pdf
 Manolis Lourakis http://www.ics.forth.gr/~lourakis/levmar/levmar.pdf
 Hans Nielson     http://www2.imm.dtu.dk/~hbn/publ/TR9905.ps
 Mathworks        optimization toolbox reference manual
 K. Madsen, H.B., Nielsen, and O. Tingleff
 http://www2.imm.dtu.dk/pubdb/views/edoc_download.php/3215/pdf/imm3215.pdf
 */
var LM = {

    optimize: function(func,p,t,y_dat,weight,dp,p_min,p_max,c,opts){

        var tensor_parameter = 0;			// set to 1 of parameter is a tensor

        var iteration  = 0;			// iteration counter
        //func_calls = 0;			// running count of function evaluations

        if((typeof p[0])!="object"){
            for(var i=0;i< p.length;i++){
                p[i]=[p[i]];
            }

        }
        //p = p(:); y_dat = y_dat(:);		// make column vectors
        var i,k;
        var eps = 2^-52;
        var Npar   = p.length;//length(p); 			// number of parameters
        var Npnt   = y_dat.length;//length(y_dat);		// number of data points
        var p_old  = Matrix.zeros(Npar,1);		// previous set of parameters
        var y_old  = Matrix.zeros(Npnt,1);		// previous model, y_old = y_hat(t;p_old)
        var X2     = 1e-2/eps;			// a really big initial Chi-sq value
        var X2_old = 1e-2/eps;			// a really big initial Chi-sq value
        var J =  Matrix.zeros(Npnt,Npar);


        if (t.length != y_dat.length) {
            console.log('lm.m error: the length of t must equal the length of y_dat');

            length_t = t.length;
            length_y_dat = y_dat.length;
            var X2 = 0, corr = 0, sigma_p = 0, sigma_y = 0, R_sq = 0, cvg_hist = 0;
            if (!tensor_parameter) {
                return;
            }
        }

        weight = weight||Math.sqrt((Npnt-Npar+1)/(math.multiply(math.transpose(y_dat),y_dat)));
        dp = dp || 0.001;
        p_min   = p_min || math.multiply(Math.abs(p),-100);
        p_max   = p_max || math.multiply(Math.abs(p),100);
        c = c || 1;
        // Algorithmic Paramters
        //prnt MaxIter  eps1  eps2  epx3  eps4  lam0  lamUP lamDN UpdateType
        opts = opts ||[  3,10*Npar, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2, 11, 9, 1 ];

        var prnt          = opts[0];	// >1 intermediate results; >2 plots
        var MaxIter       = opts[1];	// maximum number of iterations
        var epsilon_1     = opts[2];	// convergence tolerance for gradient
        var epsilon_2     = opts[3];	// convergence tolerance for parameter
        var epsilon_3     = opts[4];	// convergence tolerance for Chi-square
        var epsilon_4     = opts[5];	// determines acceptance of a L-M step
        var lambda_0      = opts[6];	// initial value of damping paramter, lambda
        var lambda_UP_fac = opts[7];	// factor for increasing lambda
        var lambda_DN_fac = opts[8];	// factor for decreasing lambda
        var Update_Type   = opts[9];	// 1: Levenberg-Marquardt lambda update
        // 2: Quadratic update
        // 3: Nielsen's lambda update equations

        if ( tensor_parameter && prnt == 3 ) prnt = 2;


        if(!dp.length || dp.length == 1){
            var dp_array = new Array(Npar);
            for(var i=0;i<Npar;i++)
                dp_array[i]=[dp];
            dp=dp_array;
        }

        // indices of the parameters to be fit
        var idx   = [];
        for(i=0;i<dp.length;i++){
            if(dp[i][0]!=0){
                idx.push(i);
            }
        }

        var Nfit = idx.length;			// number of parameters to fit
        var stop = false;				// termination flag

        var weight_sq = null;
        //console.log(weight);
        if ( !weight.length || weight.length < Npnt )	{
            // squared weighting vector
            //weight_sq = ( weight(1)*ones(Npnt,1) ).^2;
            //console.log("weight[0] "+typeof weight[0]);
            var tmp = math.multiply(Matrix.ones(Npnt,1),weight[0]);
            weight_sq = math.dotMultiply(tmp,tmp);
        }
        else{
            //weight_sq = (weight(:)).^2;
            weight_sq = math.dotMultiply(weight,weight);
        }


        // initialize Jacobian with finite difference calculation
        //console.log("J "+weight_sq);
        var result = this.lm_matx(func,t,p_old,y_old,1,J,p,y_dat,weight_sq,dp,c);
        var JtWJ = result.JtWJ,JtWdy=result.JtWdy,X2=result.Chi_sq,y_hat=result.y_hat,J=result.J;
        //[JtWJ,JtWdy,X2,y_hat,J] = this.lm_matx(func,t,p_old,y_old,1,J,p,y_dat,weight_sq,dp,c);
        //console.log(JtWJ);

        if ( Math.max(Math.abs(JtWdy)) < epsilon_1 ){
            console.log(' *** Your Initial Guess is Extremely Close to Optimal ***')
            console.log(' *** epsilon_1 = ', epsilon_1);
            stop = true;
        }


        switch(Update_Type){
            case 1: // Marquardt: init'l lambda
                lambda  = lambda_0;
                break;
            default:    // Quadratic and Nielsen
                lambda  = lambda_0 * Math.max(math.diag(JtWJ));
                nu=2;
        }
        //console.log(X2);
        X2_old = X2; // previous value of X2
        //console.log(MaxIter+" "+Npar);
        //var cvg_hst = Matrix.ones(MaxIter,Npar+3);		// initialize convergence history
        var h = null;
        while ( !stop && iteration <= MaxIter ) {		// --- Main Loop
            iteration = iteration + 1;
            // incremental change in parameters
            switch(Update_Type){
                case 1:					// Marquardt
                    //h = ( JtWJ + lambda * math.diag(math.diag(JtWJ)) ) \ JtWdy;
                    //h = math.multiply(math.inv(JtWdy),math.add(JtWJ,math.multiply(lambda,math.diag(math.diag(Npar)))));
                    h = math.solve(math.add(JtWJ,math.multiply(math.diag(math.diag(JtWJ)),lambda)),JtWdy);
                    break;
                default:					// Quadratic and Nielsen
                    //h = ( JtWJ + lambda * math.eye(Npar) ) \ JtWdy;

                    h = math.solve(math.add(JtWJ,math.multiply( Matrix.eye(Npar),lambda)),JtWdy);
            }

            /*for(var k=0;k< h.length;k++){
             h[k]=[h[k]];
             }*/
            //console.log("h "+h);
            //h=math.matrix(h);
            //  big = max(abs(h./p)) > 2;
            //this is a big step
            // --- Are parameters [p+h] much better than [p] ?
            var hidx = new Array(idx.length);
            for(k=0;k<idx.length;k++){
                hidx[k]=h[idx[k]];
            }
            var p_try = math.add(p, hidx);// update the [idx] elements

            for(k=0;k<p_try.length;k++){
                p_try[k][0]=Math.min(Math.max(p_min[k][0],p_try[k][0]),p_max[k][0]);
            }
            // p_try = Math.min(Math.max(p_min,p_try),p_max);           // apply constraints

            var delta_y = math.subtract(y_dat, func(t,p_try,c));       // residual error using p_try
            //func_calls = func_calls + 1;
            //X2_try = delta_y' * ( delta_y .* weight_sq );  // Chi-squared error criteria

            var X2_try = math.multiply(math.transpose(delta_y),math.dotMultiply(delta_y,weight_sq));

            if ( Update_Type == 2 ){  			  // Quadratic
                //    One step of quadratic line update in the h direction for minimum X2
                //var alpha =  JtWdy'*h / ( (X2_try - X2)/2 + 2*JtWdy'*h ) ;
                var JtWdy_th = math.multiply(math.transpose(JtWdy),h);
                var alpha =  math.multiply(JtWdy_th,math.inv(math.add(math.multiply(math.subtract(X2_try - X2),1/2)),math.multiply(JtWdy_th,2)));//JtWdy'*h / ( (X2_try - X2)/2 + 2*JtWdy'*h ) ;

                h = math.multiply(alpha, h);
                for(var k=0;k<idx.length;k++){
                    hidx[k]=h[idx[k]];
                }

                p_try = math.add(p ,hidx);                     // update only [idx] elements
                p_try = math.min(math.max(p_min,p_try),p_max);          // apply constraints

                delta_y = math.subtract(y_dat, func(t,p_try,c));      // residual error using p_try
                // func_calls = func_calls + 1;
                //X2_try = delta_y' * ( delta_y .* weight_sq ); // Chi-squared error criteria
                X2_try = math.multiply(math.transpose(delta_y), mat.dotMultiply(delta_y, weight_sq));
            }

            //rho = (X2 - X2_try) / ( 2*h' * (lambda * h + JtWdy) ); // Nielsen
            var rho = (X2-X2_try)/math.multiply(math.multiply(math.transpose(h),2),math.add(math.multiply(lambda, h),JtWdy));
            //console.log("rho "+rho);
            if ( rho > epsilon_4 ) {		// it IS significantly better
                //console.log("Here");
                dX2 = X2 - X2_old;
                X2_old = X2;
                p_old = p;
                y_old = y_hat;
                p = p_try;			// accept p_try

                result = this.lm_matx(func, t, p_old, y_old, dX2, J, p, y_dat, weight_sq, dp, c);
                JtWJ = result.JtWJ,JtWdy=result.JtWdy,X2=result.Chi_sq,y_hat=result.y_hat,J=result.J;
                // decrease lambda ==> Gauss-Newton method

                switch (Update_Type) {
                    case 1:							// Levenberg
                        lambda = Math.max(lambda / lambda_DN_fac, 1.e-7);
                        break;
                    case 2:							// Quadratic
                        lambda = Math.max(lambda / (1 + alpha), 1.e-7);
                        break;
                    case 3:							// Nielsen
                        lambda = math.multiply(Math.max(1 / 3, 1 - (2 * rho - 1) ^ 3),lambda);
                        nu = 2;
                        break;
                }
            }
            else {					// it IS NOT better
                X2 = X2_old;			// do not accept p_try
                if (iteration%(2 * Npar)==0) {	// rank-1 update of Jacobian
                    result = this.lm_matx(func, t, p_old, y_old, -1, J, p, y_dat, weight_sq, dp, c);
                    JtWJ = result.JtWJ,JtWdy=result.JtWdy,dX2=result.Chi_sq,y_hat=result.y_hat,J=result.J;
                }

                // increase lambda  ==> gradient descent method
                switch (Update_Type) {
                    case 1:							// Levenberg
                        lambda = Math.min(lambda * lambda_UP_fac, 1.e7);
                        break;
                    case 2:							// Quadratic
                        lambda = lambda + Math.abs((X2_try - X2) / 2 / alpha);
                        break;
                    case 3:						// Nielsen
                        lambda = lambda * nu;
                        nu = 2 * nu;
                        break;
                }
            }
        }// --- End of Main Loop

        // --- convergence achieved, find covariance and confidence intervals

        // equal weights for paramter error analysis
        weight_sq = math.multiply(math.multiply(math.transpose(delta_y),delta_y), Matrix.ones(Npnt,1));

        weight_sq.apply(function(i,j){
            weight_sq[i][j] = (Npnt-Nfit+1)/weight_sq[i][j];
        });
        //console.log(weight_sq);
        result = this.lm_matx(func,t,p_old,y_old,-1,J,p,y_dat,weight_sq,dp,c);
        JtWJ = result.JtWJ,JtWdy=result.JtWdy,X2=result.Chi_sq,y_hat=result.y_hat,J=result.J;

        /*if nargout > 2				// standard error of parameters
         covar = inv(JtWJ);
         sigma_p = sqrt(diag(covar));
         end

         if nargout > 3				// standard error of the fit
         //  sigma_y = sqrt(diag(J * covar * J'));	// slower version of below
         sigma_y = zeros(Npnt,1);
         for i=1:Npnt
         sigma_y(i) = J(i,:) * covar * J(i,:)';
         end
         sigma_y = sqrt(sigma_y);
         end

         if nargout > 4				// parameter correlation matrix
         corr = covar ./ [sigma_p*sigma_p'];
         end

         if nargout > 5				// coefficient of multiple determination
         R_sq = corrcoef([y_dat y_hat]);
         R_sq = R_sq(1,2).^2;
         end

         if nargout > 6				// convergence history
         cvg_hst = cvg_hst(1:iteration,:);
         end*/

        // endfunction  # ---------------------------------------------------------- LM

        return { p:p, X2:X2};
    },

    lm_FD_J:function(func,t,p,y,dp,c) {
        // J = lm_FD_J(func,t,p,y,{dp},{c})
        //
        // partial derivatives (Jacobian) dy/dp for use with lm.m
        // computed via Finite Differences
        // Requires n or 2n function evaluations, n = number of nonzero values of dp
        // -------- INPUT VARIABLES ---------
        // func = function of independent variables, 't', and parameters, 'p',
        //        returning the simulated model: y_hat = func(t,p,c)
        // t  = m-vector of independent variables (used as arg to func)
        // p  = n-vector of current parameter values
        // y  = func(t,p,c) n-vector initialised by user before each call to lm_FD_J
        // dp = fractional increment of p for numerical derivatives
        //      dp(j)>0 central differences calculated
        //      dp(j)<0 one sided differences calculated
        //      dp(j)=0 sets corresponding partials to zero; i.e. holds p(j) fixed
        //      Default:  0.001;
        // c  = optional vector of constants passed to y_hat = func(t,p,c)
        //---------- OUTPUT VARIABLES -------
        // J  = Jacobian Matrix J(i,j)=dy(i)/dp(j)	i=1:n; j=1:m

        //   Henri Gavin, Dept. Civil & Environ. Engineering, Duke Univ. November 2005
        //   modified from: ftp://fly.cnuce.cnr.it/pub/software/octave/leasqr/
        //   Press, et al., Numerical Recipes, Cambridge Univ. Press, 1992, Chapter 15.

        var m = y.length;			// number of data points
        var n = p.length;			// number of parameters

        dp = dp || math.multiply( Matrix.ones(n, 1), 0.001);

        var ps = p.clone();//JSON.parse(JSON.stringify(p));
        //var ps = $.extend(true, [], p);
        var J = new Matrix(m,n), del =new Array(n);         // initialize Jacobian to Zero

        for (var j = 0;j < n; j++) {
            //console.log(j+" "+dp[j]+" "+p[j]+" "+ps[j]+" "+del[j]);
            del[j] = dp[j]*(1+Math.abs(p[j][0]));  // parameter perturbation
            p[j] = [ps[j][0]+del[j]];	      // perturb parameter p(j)
            //console.log(j+" "+dp[j]+" "+p[j]+" "+ps[j]+" "+del[j]);

            if (del[j] != 0){
                y1 = func(t, p, c);
                //func_calls = func_calls + 1;
                if (dp[j][0] < 0) {		// backwards difference
                    //J(:,j) = math.dotDivide(math.subtract(y1, y),del[j]);//. / del[j];
                    //console.log(del[j]);
                    //console.log(y);
                    var column = math.dotDivide(math.subtract(y1, y),del[j]);
                    for(var k=0;k< m;k++){
                        J[k][j]=column[k][0];
                    }
                    //console.log(column);
                }
                else{
                    p[j][0] = ps[j][0] - del[j];
                    //J(:,j) = (y1 - feval(func, t, p, c)). / (2. * del[j]);
                    var column = math.dotDivide(math.subtract(y1,func(t,p,c)),2*del[j]);
                    for(var k=0;k< m;k++){
                        J[k][j]=column[k][0];
                    }

                }			// central difference, additional func call
            }

            p[j] = ps[j];		// restore p(j)

        }
        //console.log("lm_FD_J: "+ JSON.stringify(J));
        return J;

    },

    // endfunction # -------------------------------------------------- LM_FD_J
    lm_Broyden_J: function(p_old,y_old,J,p,y){
        // J = lm_Broyden_J(p_old,y_old,J,p,y)
        // carry out a rank-1 update to the Jacobian matrix using Broyden's equation
        //---------- INPUT VARIABLES -------
        // p_old = previous set of parameters
        // y_old = model evaluation at previous set of parameters, y_hat(t;p_old)
        // J  = current version of the Jacobian matrix
        // p     = current  set of parameters
        // y     = model evaluation at current  set of parameters, y_hat(t;p)
        //---------- OUTPUT VARIABLES -------
        // J = rank-1 update to Jacobian Matrix J(i,j)=dy(i)/dp(j)	i=1:n; j=1:m
        //console.log(p+" X "+ p_old)
        var h  = math.subtract(p, p_old);

        //console.log("hhh "+h);
        var h_t = math.transpose(h);
        h_t.div(math.multiply(h_t,h));

        //console.log(h_t);
        //J = J + ( y - y_old - J*h )*h' / (h'*h);	// Broyden rank-1 update eq'n
        J = math.add(J, math.multiply(math.subtract(y, math.add(y_old,math.multiply(J,h))),h_t));
        return J;
        // endfunction # ---------------------------------------------- LM_Broyden_J
    },

    lm_matx : function (func,t,p_old,y_old,dX2,J,p,y_dat,weight_sq,dp,c,iteration){
        // [JtWJ,JtWdy,Chi_sq,y_hat,J] = this.lm_matx(func,t,p_old,y_old,dX2,J,p,y_dat,weight_sq,{da},{c})
        //
        // Evaluate the linearized fitting matrix, JtWJ, and vector JtWdy,
        // and calculate the Chi-squared error function, Chi_sq
        // Used by Levenberg-Marquard algorithm, lm.m
        // -------- INPUT VARIABLES ---------
        // func   = function ofpn independent variables, p, and m parameters, p,
        //         returning the simulated model: y_hat = func(t,p,c)
        // t      = m-vectors or matrix of independent variables (used as arg to func)
        // p_old  = n-vector of previous parameter values
        // y_old  = m-vector of previous model ... y_old = y_hat(t;p_old);
        // dX2    = previous change in Chi-squared criteria
        // J   = m-by-n Jacobian of model, y_hat, with respect to parameters, p
        // p      = n-vector of current  parameter values
        // y_dat  = n-vector of data to be fit by func(t,p,c)
        // weight_sq = square of the weighting vector for least squares fit ...
        //	    inverse of the standard measurement errors
        // dp     = fractional increment of 'p' for numerical derivatives
        //          dp(j)>0 central differences calculated
        //          dp(j)<0 one sided differences calculated
        //          dp(j)=0 sets corresponding partials to zero; i.e. holds p(j) fixed
        //          Default:  0.001;
        // c      = optional vector of constants passed to y_hat = func(t,p,c)
        //---------- OUTPUT VARIABLES -------
        // JtWJ	 = linearized Hessian matrix (inverse of covariance matrix)
        // JtWdy   = linearized fitting vector
        // Chi_sq = Chi-squared criteria: weighted sum of the squared residuals WSSR
        // y_hat  = model evaluated with parameters 'p'
        // J   = m-by-n Jacobian of model, y_hat, with respect to parameters, p

        //   Henri Gavin, Dept. Civil & Environ. Engineering, Duke Univ. November 2005
        //   modified from: ftp://fly.cnuce.cnr.it/pub/software/octave/leasqr/
        //   Press, et al., Numerical Recipes, Cambridge Univ. Press, 1992, Chapter 15.


        var Npnt = y_dat.length;		// number of data points
        var Npar = p.length;		// number of parameters

        dp = dp || 0.001;


        //var JtWJ = new Matrix.zeros(Npar);
        //var JtWdy  = new Matrix.zeros(Npar,1);

        var y_hat = func(t,p,c);	// evaluate model using parameters 'p'
        //func_calls = func_calls + 1;
        //console.log(J);
        if ( (iteration%(2*Npar))==0 || dX2 > 0 ) {
            //console.log("Par");
            J = this.lm_FD_J(func, t, p, y_hat, dp, c);		// finite difference
        }
        else{
            //console.log("ImPar");
            J = this.lm_Broyden_J(p_old, y_old, J, p, y_hat); // rank-1 update
        }
        var delta_y = math.subtract(y_dat, y_hat);	// residual error between model and data
        //console.log(delta_y[0][0]);
        //console.log(delta_y.rows+" "+delta_y.columns+" "+JSON.stringify(weight_sq));
        //var Chi_sq = delta_y' * ( delta_y .* weight_sq ); 	// Chi-squared error criteria
        var Chi_sq = math.multiply(math.transpose(delta_y),math.dotMultiply(delta_y,weight_sq));
        //JtWJ  = J' * ( J .* ( weight_sq * ones(1,Npar) ) );
        var Jt = math.transpose(J);

        //console.log(weight_sq);

        var JtWJ = math.multiply(Jt, math.dotMultiply(J,math.multiply(weight_sq, Matrix.ones(1,Npar))));

        //JtWdy = J' * ( weight_sq .* delta_y );
        var JtWdy = math.multiply(Jt, math.dotMultiply(weight_sq,delta_y));


        return {JtWJ:JtWJ,JtWdy:JtWdy,Chi_sq:Chi_sq,y_hat:y_hat,J:J};
        // endfunction  # ------------------------------------------------------ LM_MATX
    }



};

module.exports = LM;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(137);
module.exports.Matrix = __webpack_require__(26);
module.exports.Matrix.algebra = __webpack_require__(68);


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const extend = __webpack_require__(66);
const SG = __webpack_require__(194);

const defaultOptions = {
    sgOptions: {
        windowSize: 9,
        polynomial: 3
    },
    minMaxRatio: 0.00025,
    broadRatio: 0.00,
    maxCriteria: true,
    smoothY: true,
    realTopDetection: false,
    heightFactor: 0,
    boundaries: false,
    derivativeThreshold: -1
};

/**
 * Global spectra deconvolution
 * @param {Array<Number>} x - Independent variable
 * @param {Array<Number>} yIn - Dependent variable
 * @param {Object} [options] - Options object
 * @param {Object} [options.sgOptions] - Options object for Savitzky-Golay filter. See https://github.com/mljs/savitzky-golay-generalized#options
 * @param {Number} [options.sgOptions.windowSize = 9] - points to use in the approximations
 * @param {Number} [options.sgOptions.polynomial = 3] - degree of the polynomial to use in the approximations
 * @param {Number} [options.minMaxRatio = 0.00025] - Threshold to determine if a given peak should be considered as a noise
 * @param {Number} [options.broadRatio = 0.00] - If `broadRatio` is higher than 0, then all the peaks which second derivative
 * smaller than `broadRatio * maxAbsSecondDerivative` will be marked with the soft mask equal to true.
 * @param {Number} [options.noiseLevel = 0] - Noise threshold in spectrum units
 * @param {Boolean} [options.maxCriteria = true] - Peaks are local maximum(true) or minimum(false)
 * @param {Boolean} [options.smoothY = true] - Select the peak intensities from a smoothed version of the independent variables
 * @param {Boolean} [options.realTopDetection = false] - Use a quadratic optimizations with the peak and its 3 closest neighbors
 * to determine the true x,y values of the peak?
 * @param {Number} [options.heightFactor = 0] - Factor to multiply the calculated height (usually 2)
 * @param {Boolean} [options.boundaries = false] - Return also the inflection points of the peaks
 * @param {Number} [options.derivativeThreshold = -1] - Filters based on the amplitude of the first derivative
 * @return {Array<Object>}
 */
function gsd(x, yIn, options) {
    options = extend({}, defaultOptions, options);
    let sgOptions = options.sgOptions;
    const y = [].concat(yIn);

    if (!('noiseLevel' in options)) {
        // We have to know if x is equally spaced
        var maxDx = 0,
            minDx = Number.MAX_VALUE,
            tmp;
        for (let i = 0; i < x.length - 1; ++i) {
            tmp = Math.abs(x[i + 1] - x[i]);
            if (tmp < minDx) {
                minDx = tmp;
            }
            if (tmp > maxDx) {
                maxDx = tmp;
            }
        }

        if ((maxDx - minDx) / maxDx < 0.05) {
            options.noiseLevel = getNoiseLevel(y);
        } else {
            options.noiseLevel = 0;
        }
    }
    const yCorrection = {m: 1, b: options.noiseLevel};
    if (!options.maxCriteria) {
        yCorrection.m = -1;
        yCorrection.b *= -1;
    }

    for (let i = 0; i < y.length; i++) {
        y[i] = yCorrection.m * y[i] - yCorrection.b;
    }

    for (let i = 0; i < y.length; i++) {
        if (y[i] < 0) {
            y[i] = 0;
        }
    }
    // If the max difference between delta x is less than 5%, then, we can assume it to be equally spaced variable
    let Y = y;
    let dY, ddY;
    if ((maxDx - minDx) / maxDx < 0.05) {
        if (options.smoothY)
            Y = SG(y, x[1] - x[0], {windowSize: sgOptions.windowSize, polynomial: sgOptions.polynomial, derivative: 0});
        dY = SG(y, x[1] - x[0], {windowSize: sgOptions.windowSize, polynomial: sgOptions.polynomial, derivative: 1});
        ddY = SG(y, x[1] - x[0], {windowSize: sgOptions.windowSize, polynomial: sgOptions.polynomial, derivative: 2});
    } else {
        if (options.smoothY)
            Y = SG(y, x, {windowSize: sgOptions.windowSize, polynomial: sgOptions.polynomial, derivative: 0});
        dY = SG(y, x, {windowSize: sgOptions.windowSize, polynomial: sgOptions.polynomial, derivative: 1});
        ddY = SG(y, x, {windowSize: sgOptions.windowSize, polynomial: sgOptions.polynomial, derivative: 2});
    }

    const X = x;
    const dx = x[1] - x[0];
    var maxDdy = 0;
    var maxY = 0;
    for (let i = 0; i < Y.length; i++) {
        if (Math.abs(ddY[i]) > maxDdy) {
            maxDdy = Math.abs(ddY[i]);
        }
        if (Math.abs(Y[i]) > maxY) {
            maxY = Math.abs(Y[i]);
        }
    }

    var lastMax = null;
    var lastMin = null;
    var minddY = new Array(Y.length - 2);
    var intervalL = new Array(Y.length);
    var intervalR = new Array(Y.length);
    var broadMask = new Array(Y.length - 2);
    var minddYLen = 0;
    var intervalLLen = 0;
    var intervalRLen = 0;
    var broadMaskLen = 0;
    // By the intermediate value theorem We cannot find 2 consecutive maximum or minimum
    for (let i = 1; i < Y.length - 1; ++i) {

        // filter based on derivativeThreshold
        if (Math.abs(dY[i]) > options.derivativeThreshold) {

            // Minimum in first derivative
            if ((dY[i] < dY[i - 1]) && (dY[i] <= dY[i + 1]) ||
                (dY[i] <= dY[i - 1]) && (dY[i] < dY[i + 1])) {
                lastMin = {
                    x: X[i],
                    index: i
                };
                if (dx > 0 && lastMax !== null) {
                    intervalL[intervalLLen++] = lastMax;
                    intervalR[intervalRLen++] = lastMin;
                }
            }

            // Maximum in first derivative
            if ((dY[i] >= dY[i - 1]) && (dY[i] > dY[i + 1]) ||
                (dY[i] > dY[i - 1]) && (dY[i] >= dY[i + 1])) {
                lastMax = {
                    x: X[i],
                    index: i
                };
                if (dx < 0 && lastMin !== null) {
                    intervalL[intervalLLen++] = lastMax;
                    intervalR[intervalRLen++] = lastMin;
                }
            }
        }

        // Minimum in second derivative
        if ((ddY[i] < ddY[i - 1]) && (ddY[i] < ddY[i + 1])) {
            // TODO should we change this to have 3 arrays ? Huge overhead creating arrays
            minddY[minddYLen++] = i; //( [X[i], Y[i], i] );
            broadMask[broadMaskLen++] = Math.abs(ddY[i]) <= options.broadRatio * maxDdy;
        }
    }
    minddY.length = minddYLen;
    intervalL.length = intervalLLen;
    intervalR.length = intervalRLen;
    broadMask.length = broadMaskLen;

    let signals = new Array(minddY.length);
    let signalsLen = 0;
    let lastK = -1;
    let possible, frequency, distanceJ, minDistance, gettingCloser;
    for (let j = 0; j < minddY.length; ++j) {
        frequency = X[minddY[j]];
        possible = -1;
        let k = lastK + 1;
        minDistance = Number.MAX_VALUE;
        distanceJ = 0;
        gettingCloser = true;
        while (possible === -1 && (k < intervalL.length) && gettingCloser) {
            distanceJ = Math.abs(frequency - (intervalL[k].x + intervalR[k].x) / 2);

            //Still getting closer?
            if (distanceJ < minDistance) {
                minDistance = distanceJ;
            } else {
                gettingCloser = false;
            }
            if (distanceJ < Math.abs(intervalL[k].x - intervalR[k].x) / 2) {
                possible = k;
                lastK = k;
            }
            ++k;
        }

        if (possible !== -1) {
            if (Math.abs(Y[minddY[j]]) > options.minMaxRatio * maxY) {
                signals[signalsLen++] = {
                    index: minddY[j],
                    x: frequency,
                    y: (Y[minddY[j]] + yCorrection.b) / yCorrection.m,
                    width: Math.abs(intervalR[possible].x - intervalL[possible].x), //widthCorrection
                    soft: broadMask[j]
                };
                if (options.boundaries) {
                    signals[signalsLen - 1].left = intervalL[possible];
                    signals[signalsLen - 1].right = intervalR[possible];
                }
                if (options.heightFactor) {
                    let yLeft = Y[intervalL[possible].index];
                    let yRight = Y[intervalR[possible].index];
                    signals[signalsLen - 1].height = options.heightFactor * (signals[signalsLen - 1].y - ((yLeft + yRight) / 2));
                }
            }
        }
    }
    signals.length = signalsLen;

    if (options.realTopDetection)
        realTopDetection(signals, X, Y);

    //Correct the values to fit the original spectra data
    for (let j = 0; j < signals.length; j++) {
        signals[j].base = options.noiseLevel;
    }

    signals.sort(function (a, b) {
        return a.x - b.x;
    });

    return signals;

}

function getNoiseLevel(y) {
    var mean = 0, stddev = 0;
    var length = y.length;
    for (let i = 0; i < length; ++i) {
        mean += y[i];
    }
    mean /= length;
    var averageDeviations = new Array(length);
    for (let i = 0; i < length; ++i)
        averageDeviations[i] = Math.abs(y[i] - mean);
    averageDeviations.sort();
    if (length % 2 === 1) {
        stddev = averageDeviations[(length - 1) / 2] / 0.6745;
    } else {
        stddev = 0.5 * (averageDeviations[length / 2] + averageDeviations[length / 2 - 1]) / 0.6745;
    }

    return stddev;
}

function realTopDetection(peakList, x, y) {
    var alpha, beta, gamma, p, currentPoint;
    for (var j = 0; j < peakList.length; j++) {
        currentPoint = peakList[j].i;//peakList[j][2];
        //The detected peak could be moved 1 or 2 unit to left or right.
        if (y[currentPoint - 1] >= y[currentPoint - 2]
            && y[currentPoint - 1] >= y[currentPoint]) {
            currentPoint--;
        } else {
            if (y[currentPoint + 1] >= y[currentPoint]
                && y[currentPoint + 1] >= y[currentPoint + 2]) {
                currentPoint++;
            } else {
                if (y[currentPoint - 2] >= y[currentPoint - 3]
                    && y[currentPoint - 2] >= y[currentPoint - 1]) {
                    currentPoint -= 2;
                } else {
                    if (y[currentPoint + 2] >= y[currentPoint + 1]
                        && y[currentPoint + 2] >= y[currentPoint + 3]) {
                        currentPoint += 2;
                    }
                }
            }
        }
        if (y[currentPoint - 1] > 0 && y[currentPoint + 1] > 0
            && y[currentPoint] >= y[currentPoint - 1]
            && y[currentPoint] >= y[currentPoint + 1]) {
            alpha = 20 * Math.log10(y[currentPoint - 1]);
            beta = 20 * Math.log10(y[currentPoint]);
            gamma = 20 * Math.log10(y[currentPoint + 1]);
            p = 0.5 * (alpha - gamma) / (alpha - 2 * beta + gamma);
            //console.log("p: "+p);
            //console.log(x[currentPoint]+" "+tmp+" "+currentPoint);
            peakList[j].x = x[currentPoint] + (x[currentPoint] - x[currentPoint - 1]) * p;
            peakList[j].y = y[currentPoint] - 0.25 * (y[currentPoint - 1] - y[currentPoint + 1]) * p;
        }
    }
}

module.exports = gsd;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.post = __webpack_require__(141);
module.exports.gsd = __webpack_require__(139);


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by acastillo on 9/6/15.
 */


var Opt = __webpack_require__(172);

function sampleFunction(from, to, x, y, lastIndex) {
    var nbPoints = x.length;
    var sampleX = [];
    var sampleY = [];
    var direction = Math.sign(x[1] - x[0]);//Direction of the derivative
    if (direction === -1) {
        lastIndex[0] = x.length - 1;
    }

    var delta = Math.abs(to - from) / 2;
    var mid = (from + to) / 2;
    var stop = false;
    var index = lastIndex[0];
    while (!stop && index < nbPoints && index >= 0) {
        if (Math.abs(x[index] - mid) <= delta) {
            sampleX.push(x[index]);
            sampleY.push(y[index]);
            index += direction;
        } else {
            //It is outside the range.
            if (Math.sign(mid - x[index]) === 1) {
                //We'll reach the mid going in the current direction
                index += direction;
            } else {
                //There is not more peaks in the current range
                stop = true;
            }
        }
        //console.log(sampleX);
    }
    lastIndex[0] = index;
    return [sampleX, sampleY];
}

function optimizePeaks(peakList, x, y, n, fnType) {
    var i, j, lastIndex = [0];
    var groups = groupPeaks(peakList, n);
    var result = [];
    var factor = 1;
    if (fnType === 'gaussian')
        factor = 1.17741;//From https://en.wikipedia.org/wiki/Gaussian_function#Properties
    var sampling, error, opts;
    for (i = 0; i < groups.length; i++) {
        var peaks = groups[i].group;
        if (peaks.length > 1) {
            //Multiple peaks
            //console.log("Pending group of overlaped peaks "+peaks.length);
            //console.log("here1");
            //console.log(groups[i].limits);
            sampling = sampleFunction(groups[i].limits[0] - groups[i].limits[1], groups[i].limits[0] + groups[i].limits[1], x, y, lastIndex);
            //console.log(sampling);
            if (sampling[0].length > 5) {
                error = peaks[0].width / 1000;
                opts = [  3,    100, error, error, error, error * 10, error * 10,    11,    9,        1 ];
                //var gauss = Opt.optimizeSingleGaussian(sampling[0], sampling[1], opts, peaks);
                var optPeaks = [];
                if (fnType === 'gaussian')
                    optPeaks = Opt.optimizeGaussianSum(sampling, peaks, opts);
                else {
                    if (fnType === 'lorentzian') {
                        optPeaks = Opt.optimizeLorentzianSum(sampling, peaks, opts);
                    }
                }
                //console.log(optPeak);
                for (j = 0; j < optPeaks.length; j++) {
                    result.push({x: optPeaks[j][0][0], y: optPeaks[j][1][0], width: optPeaks[j][2][0] * factor});
                }
            }
        } else {
            //Single peak
            peaks = peaks[0];
            sampling = sampleFunction(peaks.x - n * peaks.width,
                peaks.x + n * peaks.width, x, y, lastIndex);
            //console.log("here2");
            //console.log(groups[i].limits);
            if (sampling[0].length > 5) {
                error = peaks.width / 1000;
                opts = [3, 100, error, error, error, error * 10, error * 10, 11, 9, 1];
                //var gauss = Opt.optimizeSingleGaussian(sampling[0], sampling[1], opts, peaks);
                //var gauss = Opt.optimizeSingleGaussian([sampling[0],sampling[1]], peaks, opts);
                var optPeak = [];
                if (fnType === 'gaussian')
                    optPeak = Opt.optimizeSingleGaussian([sampling[0], sampling[1]], peaks,  opts);
                else {
                    if (fnType === 'lorentzian') {
                        optPeak = Opt.optimizeSingleLorentzian([sampling[0], sampling[1]], peaks,  opts);
                    }
                }
                //console.log(optPeak);
                result.push({x: optPeak[0][0], y: optPeak[1][0], width: optPeak[2][0] * factor}); // From https://en.wikipedia.org/wiki/Gaussian_function#Properties}
            }
        }

    }
    return result;
}

function groupPeaks(peakList, nL) {
    var group = [];
    var groups = [];
    var i, j;
    var limits = [peakList[0].x, nL * peakList[0].width];
    var upperLimit, lowerLimit;
    //Merge forward
    for (i = 0; i < peakList.length; i++) {
        //If the 2 things overlaps
        if (Math.abs(peakList[i].x - limits[0]) < (nL * peakList[i].width + limits[1])) {
            //Add the peak to the group
            group.push(peakList[i]);
            //Update the group limits
            upperLimit = limits[0] + limits[1];
            if (peakList[i].x + nL * peakList[i].width > upperLimit) {
                upperLimit = peakList[i].x + nL * peakList[i].width;
            }
            lowerLimit = limits[0] - limits[1];
            if (peakList[i].x - nL * peakList[i].width < lowerLimit) {
                lowerLimit = peakList[i].x - nL * peakList[i].width;
            }
            limits = [(upperLimit + lowerLimit) / 2, Math.abs(upperLimit - lowerLimit) / 2];

        } else {
            groups.push({limits: limits, group: group});
            //var optmimalPeak = fitSpectrum(group,limits,spectrum);
            group = [peakList[i]];
            limits = [peakList[i].x, nL * peakList[i].width];
        }
    }
    groups.push({limits: limits, group: group});
    //Merge backward
    for (i = groups.length - 2; i >= 0; i--) {
        //The groups overlaps
        if (Math.abs(groups[i].limits[0] - groups[i + 1].limits[0]) <
            (groups[i].limits[1] + groups[i + 1].limits[1]) / 2) {
            for (j = 0; j < groups[i + 1].group.length; j++) {
                groups[i].group.push(groups[i + 1].group[j]);
            }
            upperLimit = groups[i].limits[0] + groups[i].limits[1];
            if (groups[i + 1].limits[0] + groups[i + 1].limits[1] > upperLimit) {
                upperLimit = groups[i + 1].limits[0] + groups[i + 1].limits[1];
            }
            lowerLimit = groups[i].limits[0] - groups[i].limits[1];
            if (groups[i + 1].limits[0] - groups[i + 1].limits[1] < lowerLimit) {
                lowerLimit = groups[i + 1].limits[0] - groups[i + 1].limits[1];
            }
            //console.log(limits);
            groups[i].limits = [(upperLimit + lowerLimit) / 2, Math.abs(upperLimit - lowerLimit) / 2];

            groups.splice(i + 1, 1);
        }
    }
    return groups;
}
/**
 * This function try to join the peaks that seems to belong to a broad signal in a single broad peak.
 * @param peakList
 * @param options
 */
function joinBroadPeaks(peakList, options) {
    var width = options.width;
    var broadLines = [];
    //Optimize the possible broad lines
    var max = 0, maxI = 0, count = 1;
    for (let i = peakList.length - 1; i >= 0; i--) {
        if (peakList[i].soft) {
            broadLines.push(peakList.splice(i, 1)[0]);
        }
    }
    //Push a feak peak
    broadLines.push({x: Number.MAX_VALUE});

    var candidates = [[broadLines[0].x,
                        broadLines[0].y]];
    var indexes = [0];

    for (let i = 1; i < broadLines.length; i++) {
        //console.log(broadLines[i-1].x+" "+broadLines[i].x);
        if (Math.abs(broadLines[i - 1].x - broadLines[i].x) < width) {
            candidates.push([broadLines[i].x, broadLines[i].y]);
            if (broadLines[i].y > max) {
                max = broadLines[i].y;
                maxI = i;
            }
            indexes.push(i);
            count++;
        } else {
            if (count > 2) {
                var fitted = Opt.optimizeSingleLorentzian(candidates,
                    {x: broadLines[maxI].x, y: max, width: Math.abs(candidates[0][0] - candidates[candidates.length - 1][0])});
                peakList.push({x: fitted[0][0], y: fitted[1][0], width: fitted[2][0], soft: false});

            } else {
                //Put back the candidates to the signals list
                indexes.map(function (index) {
                    peakList.push(broadLines[index]);
                });
            }
            candidates = [[broadLines[i].x, broadLines[i].y]];
            indexes = [i];
            max = broadLines[i].y;
            maxI = i;
            count = 1;
        }
    }

    peakList.sort(function (a, b) {
        return a.x - b.x;
    });

    return peakList;

}

/*
 var isPartOf = true
if(options.broadRatio>0){
 var broadLines=[[Number.MAX_VALUE,0,0]];
 //Optimize the possible broad lines
 var max=0, maxI=0,count=0;
 var candidates = [],broadLinesS=[];
 var isPartOf = false;

 for(var i=broadLines.length-1;i>0;i--){
 //console.log(broadLines[i][0]+" "+rangeX+" "+Math.abs(broadLines[i-1][0]-broadLines[i][0]));
 if(Math.abs(broadLines[i-1][0]-broadLines[i][0])<rangeX){

 candidates.push(broadLines[i]);
 if(broadLines[i][1]>max){
 max = broadLines[i][1];
 maxI = i;
 }
 count++;
 }
 else{
 isPartOf = true;
 if(count>30){ // TODO, an options ?
 isPartOf = false;
 //for(var j=0;j<signals.length;j++){
 //    if(Math.abs(broadLines[maxI][0]-signals[j][0])<rangeX)
 //       isPartOf = true;
 //    }
 //console.log("Was part of "+isPartOf);
 }
 if(isPartOf){
 for(var j=0;j<candidates.length;j++){
 signals.push([candidates[j][0], candidates[j][1], dx]);
 }
 }
 else{
 var fitted =  Opt.optimizeSingleLorentzian(candidates,{x:candidates[maxI][0],
 width:Math.abs(candidates[0][0]-candidates[candidates.length-1][0])},
 []);
 //console.log(fitted);
 signals.push([fitted[0][0],fitted[0][1],fitted[0][2]]);
 }
 candidates = [];
 max = 0;
 maxI = 0;
 count = 0;
 }
 }
 }*/

module.exports = {optimizePeaks: optimizePeaks, joinBroadPeaks: joinBroadPeaks};



/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const squaredEuclidean = __webpack_require__(16).squared;

const defaultOptions = {
    sigma: 1
};

class GaussianKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.sigma = options.sigma;
        this.divisor = 2 * options.sigma * options.sigma;
    }

    compute(x, y) {
        const distance = squaredEuclidean(x, y);
        return Math.exp(-distance / this.divisor);
    }
}

module.exports = GaussianKernel;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaultOptions = {
    degree: 1,
    constant: 1,
    scale: 1
};

class PolynomialKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);

        this.degree = options.degree;
        this.constant = options.constant;
        this.scale = options.scale;
    }

    compute(x, y) {
        var sum = 0;
        for (var i = 0; i < x.length; i++) {
            sum += x[i] * y[i];
        }
        return Math.pow(this.scale * sum + this.constant, this.degree);
    }
}

module.exports = PolynomialKernel;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaultOptions = {
    alpha: 0.01,
    constant: -Math.E
};

class SigmoidKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.alpha = options.alpha;
        this.constant = options.constant;
    }

    compute(x, y) {
        var sum = 0;
        for (var i = 0; i < x.length; i++) {
            sum += x[i] * y[i];
        }
        return Math.tanh(this.alpha * sum + this.constant);
    }
}

module.exports = SigmoidKernel;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(1).Matrix;

// https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
function CholeskyDecomposition(value) {
    if (!(this instanceof CholeskyDecomposition)) {
        return new CholeskyDecomposition(value);
    }
    value = Matrix.checkMatrix(value);
    if (!value.isSymmetric()) {
        throw new Error('Matrix is not symmetric');
    }

    var a = value,
        dimension = a.rows,
        l = new Matrix(dimension, dimension),
        positiveDefinite = true,
        i, j, k;

    for (j = 0; j < dimension; j++) {
        var Lrowj = l[j];
        var d = 0;
        for (k = 0; k < j; k++) {
            var Lrowk = l[k];
            var s = 0;
            for (i = 0; i < k; i++) {
                s += Lrowk[i] * Lrowj[i];
            }
            Lrowj[k] = s = (a[j][k] - s) / l[k][k];
            d = d + s * s;
        }

        d = a[j][j] - d;

        positiveDefinite &= (d > 0);
        l[j][j] = Math.sqrt(Math.max(d, 0));
        for (k = j + 1; k < dimension; k++) {
            l[j][k] = 0;
        }
    }

    if (!positiveDefinite) {
        throw new Error('Matrix is not positive definite');
    }

    this.L = l;
}

CholeskyDecomposition.prototype = {
    get lowerTriangularMatrix() {
        return this.L;
    },
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var l = this.L,
            dimension = l.rows;

        if (value.rows !== dimension) {
            throw new Error('Matrix dimensions do not match');
        }

        var count = value.columns,
            B = value.clone(),
            i, j, k;

        for (k = 0; k < dimension; k++) {
            for (j = 0; j < count; j++) {
                for (i = 0; i < k; i++) {
                    B[k][j] -= B[i][j] * l[k][i];
                }
                B[k][j] /= l[k][k];
            }
        }

        for (k = dimension - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                for (i = k + 1; i < dimension; i++) {
                    B[k][j] -= B[i][j] * l[i][k];
                }
                B[k][j] /= l[k][k];
            }
        }

        return B;
    }
};

module.exports = CholeskyDecomposition;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(1).Matrix;
const util = __webpack_require__(45);
const hypotenuse = util.hypotenuse;
const getFilled2DArray = util.getFilled2DArray;

const defaultOptions = {
    assumeSymmetric: false
};

// https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
function EigenvalueDecomposition(matrix, options) {
    options = Object.assign({}, defaultOptions, options);
    if (!(this instanceof EigenvalueDecomposition)) {
        return new EigenvalueDecomposition(matrix, options);
    }
    matrix = Matrix.checkMatrix(matrix);
    if (!matrix.isSquare()) {
        throw new Error('Matrix is not a square matrix');
    }

    var n = matrix.columns,
        V = getFilled2DArray(n, n, 0),
        d = new Array(n),
        e = new Array(n),
        value = matrix,
        i, j;

    var isSymmetric = false;
    if (options.assumeSymmetric) {
        isSymmetric = true;
    } else {
        isSymmetric = matrix.isSymmetric();
    }

    if (isSymmetric) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                V[i][j] = value.get(i, j);
            }
        }
        tred2(n, e, d, V);
        tql2(n, e, d, V);
    } else {
        var H = getFilled2DArray(n, n, 0),
            ort = new Array(n);
        for (j = 0; j < n; j++) {
            for (i = 0; i < n; i++) {
                H[i][j] = value.get(i, j);
            }
        }
        orthes(n, H, ort, V);
        hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
}

EigenvalueDecomposition.prototype = {
    get realEigenvalues() {
        return this.d;
    },
    get imaginaryEigenvalues() {
        return this.e;
    },
    get eigenvectorMatrix() {
        if (!Matrix.isMatrix(this.V)) {
            this.V = new Matrix(this.V);
        }
        return this.V;
    },
    get diagonalMatrix() {
        var n = this.n,
            e = this.e,
            d = this.d,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                X[i][j] = 0;
            }
            X[i][i] = d[i];
            if (e[i] > 0) {
                X[i][i + 1] = e[i];
            } else if (e[i] < 0) {
                X[i][i - 1] = e[i];
            }
        }
        return X;
    }
};

function tred2(n, e, d, V) {

    var f, g, h, i, j, k,
        hh, scale;

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
    }

    for (i = n - 1; i > 0; i--) {
        scale = 0;
        h = 0;
        for (k = 0; k < i; k++) {
            scale = scale + Math.abs(d[k]);
        }

        if (scale === 0) {
            e[i] = d[i - 1];
            for (j = 0; j < i; j++) {
                d[j] = V[i - 1][j];
                V[i][j] = 0;
                V[j][i] = 0;
            }
        } else {
            for (k = 0; k < i; k++) {
                d[k] /= scale;
                h += d[k] * d[k];
            }

            f = d[i - 1];
            g = Math.sqrt(h);
            if (f > 0) {
                g = -g;
            }

            e[i] = scale * g;
            h = h - f * g;
            d[i - 1] = f - g;
            for (j = 0; j < i; j++) {
                e[j] = 0;
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                V[j][i] = f;
                g = e[j] + V[j][j] * f;
                for (k = j + 1; k <= i - 1; k++) {
                    g += V[k][j] * d[k];
                    e[k] += V[k][j] * f;
                }
                e[j] = g;
            }

            f = 0;
            for (j = 0; j < i; j++) {
                e[j] /= h;
                f += e[j] * d[j];
            }

            hh = f / (h + h);
            for (j = 0; j < i; j++) {
                e[j] -= hh * d[j];
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                g = e[j];
                for (k = j; k <= i - 1; k++) {
                    V[k][j] -= (f * e[k] + g * d[k]);
                }
                d[j] = V[i - 1][j];
                V[i][j] = 0;
            }
        }
        d[i] = h;
    }

    for (i = 0; i < n - 1; i++) {
        V[n - 1][i] = V[i][i];
        V[i][i] = 1;
        h = d[i + 1];
        if (h !== 0) {
            for (k = 0; k <= i; k++) {
                d[k] = V[k][i + 1] / h;
            }

            for (j = 0; j <= i; j++) {
                g = 0;
                for (k = 0; k <= i; k++) {
                    g += V[k][i + 1] * V[k][j];
                }
                for (k = 0; k <= i; k++) {
                    V[k][j] -= g * d[k];
                }
            }
        }

        for (k = 0; k <= i; k++) {
            V[k][i + 1] = 0;
        }
    }

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
        V[n - 1][j] = 0;
    }

    V[n - 1][n - 1] = 1;
    e[0] = 0;
}

function tql2(n, e, d, V) {

    var g, h, i, j, k, l, m, p, r,
        dl1, c, c2, c3, el1, s, s2,
        iter;

    for (i = 1; i < n; i++) {
        e[i - 1] = e[i];
    }

    e[n - 1] = 0;

    var f = 0,
        tst1 = 0,
        eps = Math.pow(2, -52);

    for (l = 0; l < n; l++) {
        tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
        m = l;
        while (m < n) {
            if (Math.abs(e[m]) <= eps * tst1) {
                break;
            }
            m++;
        }

        if (m > l) {
            iter = 0;
            do {
                iter = iter + 1;

                g = d[l];
                p = (d[l + 1] - g) / (2 * e[l]);
                r = hypotenuse(p, 1);
                if (p < 0) {
                    r = -r;
                }

                d[l] = e[l] / (p + r);
                d[l + 1] = e[l] * (p + r);
                dl1 = d[l + 1];
                h = g - d[l];
                for (i = l + 2; i < n; i++) {
                    d[i] -= h;
                }

                f = f + h;

                p = d[m];
                c = 1;
                c2 = c;
                c3 = c;
                el1 = e[l + 1];
                s = 0;
                s2 = 0;
                for (i = m - 1; i >= l; i--) {
                    c3 = c2;
                    c2 = c;
                    s2 = s;
                    g = c * e[i];
                    h = c * p;
                    r = hypotenuse(p, e[i]);
                    e[i + 1] = s * r;
                    s = e[i] / r;
                    c = p / r;
                    p = c * d[i] - s * g;
                    d[i + 1] = h + s * (c * g + s * d[i]);

                    for (k = 0; k < n; k++) {
                        h = V[k][i + 1];
                        V[k][i + 1] = s * V[k][i] + c * h;
                        V[k][i] = c * V[k][i] - s * h;
                    }
                }

                p = -s * s2 * c3 * el1 * e[l] / dl1;
                e[l] = s * p;
                d[l] = c * p;

            }
            while (Math.abs(e[l]) > eps * tst1);
        }
        d[l] = d[l] + f;
        e[l] = 0;
    }

    for (i = 0; i < n - 1; i++) {
        k = i;
        p = d[i];
        for (j = i + 1; j < n; j++) {
            if (d[j] < p) {
                k = j;
                p = d[j];
            }
        }

        if (k !== i) {
            d[k] = d[i];
            d[i] = p;
            for (j = 0; j < n; j++) {
                p = V[j][i];
                V[j][i] = V[j][k];
                V[j][k] = p;
            }
        }
    }
}

function orthes(n, H, ort, V) {

    var low = 0,
        high = n - 1,
        f, g, h, i, j, m,
        scale;

    for (m = low + 1; m <= high - 1; m++) {
        scale = 0;
        for (i = m; i <= high; i++) {
            scale = scale + Math.abs(H[i][m - 1]);
        }

        if (scale !== 0) {
            h = 0;
            for (i = high; i >= m; i--) {
                ort[i] = H[i][m - 1] / scale;
                h += ort[i] * ort[i];
            }

            g = Math.sqrt(h);
            if (ort[m] > 0) {
                g = -g;
            }

            h = h - ort[m] * g;
            ort[m] = ort[m] - g;

            for (j = m; j < n; j++) {
                f = 0;
                for (i = high; i >= m; i--) {
                    f += ort[i] * H[i][j];
                }

                f = f / h;
                for (i = m; i <= high; i++) {
                    H[i][j] -= f * ort[i];
                }
            }

            for (i = 0; i <= high; i++) {
                f = 0;
                for (j = high; j >= m; j--) {
                    f += ort[j] * H[i][j];
                }

                f = f / h;
                for (j = m; j <= high; j++) {
                    H[i][j] -= f * ort[j];
                }
            }

            ort[m] = scale * ort[m];
            H[m][m - 1] = scale * g;
        }
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            V[i][j] = (i === j ? 1 : 0);
        }
    }

    for (m = high - 1; m >= low + 1; m--) {
        if (H[m][m - 1] !== 0) {
            for (i = m + 1; i <= high; i++) {
                ort[i] = H[i][m - 1];
            }

            for (j = m; j <= high; j++) {
                g = 0;
                for (i = m; i <= high; i++) {
                    g += ort[i] * V[i][j];
                }

                g = (g / ort[m]) / H[m][m - 1];
                for (i = m; i <= high; i++) {
                    V[i][j] += g * ort[i];
                }
            }
        }
    }
}

function hqr2(nn, e, d, V, H) {
    var n = nn - 1,
        low = 0,
        high = nn - 1,
        eps = Math.pow(2, -52),
        exshift = 0,
        norm = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        z = 0,
        iter = 0,
        i, j, k, l, m, t, w, x, y,
        ra, sa, vr, vi,
        notlast, cdivres;

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            d[i] = H[i][i];
            e[i] = 0;
        }

        for (j = Math.max(i - 1, 0); j < nn; j++) {
            norm = norm + Math.abs(H[i][j]);
        }
    }

    while (n >= low) {
        l = n;
        while (l > low) {
            s = Math.abs(H[l - 1][l - 1]) + Math.abs(H[l][l]);
            if (s === 0) {
                s = norm;
            }
            if (Math.abs(H[l][l - 1]) < eps * s) {
                break;
            }
            l--;
        }

        if (l === n) {
            H[n][n] = H[n][n] + exshift;
            d[n] = H[n][n];
            e[n] = 0;
            n--;
            iter = 0;
        } else if (l === n - 1) {
            w = H[n][n - 1] * H[n - 1][n];
            p = (H[n - 1][n - 1] - H[n][n]) / 2;
            q = p * p + w;
            z = Math.sqrt(Math.abs(q));
            H[n][n] = H[n][n] + exshift;
            H[n - 1][n - 1] = H[n - 1][n - 1] + exshift;
            x = H[n][n];

            if (q >= 0) {
                z = (p >= 0) ? (p + z) : (p - z);
                d[n - 1] = x + z;
                d[n] = d[n - 1];
                if (z !== 0) {
                    d[n] = x - w / z;
                }
                e[n - 1] = 0;
                e[n] = 0;
                x = H[n][n - 1];
                s = Math.abs(x) + Math.abs(z);
                p = x / s;
                q = z / s;
                r = Math.sqrt(p * p + q * q);
                p = p / r;
                q = q / r;

                for (j = n - 1; j < nn; j++) {
                    z = H[n - 1][j];
                    H[n - 1][j] = q * z + p * H[n][j];
                    H[n][j] = q * H[n][j] - p * z;
                }

                for (i = 0; i <= n; i++) {
                    z = H[i][n - 1];
                    H[i][n - 1] = q * z + p * H[i][n];
                    H[i][n] = q * H[i][n] - p * z;
                }

                for (i = low; i <= high; i++) {
                    z = V[i][n - 1];
                    V[i][n - 1] = q * z + p * V[i][n];
                    V[i][n] = q * V[i][n] - p * z;
                }
            } else {
                d[n - 1] = x + p;
                d[n] = x + p;
                e[n - 1] = z;
                e[n] = -z;
            }

            n = n - 2;
            iter = 0;
        } else {
            x = H[n][n];
            y = 0;
            w = 0;
            if (l < n) {
                y = H[n - 1][n - 1];
                w = H[n][n - 1] * H[n - 1][n];
            }

            if (iter === 10) {
                exshift += x;
                for (i = low; i <= n; i++) {
                    H[i][i] -= x;
                }
                s = Math.abs(H[n][n - 1]) + Math.abs(H[n - 1][n - 2]);
                x = y = 0.75 * s;
                w = -0.4375 * s * s;
            }

            if (iter === 30) {
                s = (y - x) / 2;
                s = s * s + w;
                if (s > 0) {
                    s = Math.sqrt(s);
                    if (y < x) {
                        s = -s;
                    }
                    s = x - w / ((y - x) / 2 + s);
                    for (i = low; i <= n; i++) {
                        H[i][i] -= s;
                    }
                    exshift += s;
                    x = y = w = 0.964;
                }
            }

            iter = iter + 1;

            m = n - 2;
            while (m >= l) {
                z = H[m][m];
                r = x - z;
                s = y - z;
                p = (r * s - w) / H[m + 1][m] + H[m][m + 1];
                q = H[m + 1][m + 1] - z - r - s;
                r = H[m + 2][m + 1];
                s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                p = p / s;
                q = q / s;
                r = r / s;
                if (m === l) {
                    break;
                }
                if (Math.abs(H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m - 1][m - 1]) + Math.abs(z) + Math.abs(H[m + 1][m + 1])))) {
                    break;
                }
                m--;
            }

            for (i = m + 2; i <= n; i++) {
                H[i][i - 2] = 0;
                if (i > m + 2) {
                    H[i][i - 3] = 0;
                }
            }

            for (k = m; k <= n - 1; k++) {
                notlast = (k !== n - 1);
                if (k !== m) {
                    p = H[k][k - 1];
                    q = H[k + 1][k - 1];
                    r = (notlast ? H[k + 2][k - 1] : 0);
                    x = Math.abs(p) + Math.abs(q) + Math.abs(r);
                    if (x !== 0) {
                        p = p / x;
                        q = q / x;
                        r = r / x;
                    }
                }

                if (x === 0) {
                    break;
                }

                s = Math.sqrt(p * p + q * q + r * r);
                if (p < 0) {
                    s = -s;
                }

                if (s !== 0) {
                    if (k !== m) {
                        H[k][k - 1] = -s * x;
                    } else if (l !== m) {
                        H[k][k - 1] = -H[k][k - 1];
                    }

                    p = p + s;
                    x = p / s;
                    y = q / s;
                    z = r / s;
                    q = q / p;
                    r = r / p;

                    for (j = k; j < nn; j++) {
                        p = H[k][j] + q * H[k + 1][j];
                        if (notlast) {
                            p = p + r * H[k + 2][j];
                            H[k + 2][j] = H[k + 2][j] - p * z;
                        }

                        H[k][j] = H[k][j] - p * x;
                        H[k + 1][j] = H[k + 1][j] - p * y;
                    }

                    for (i = 0; i <= Math.min(n, k + 3); i++) {
                        p = x * H[i][k] + y * H[i][k + 1];
                        if (notlast) {
                            p = p + z * H[i][k + 2];
                            H[i][k + 2] = H[i][k + 2] - p * r;
                        }

                        H[i][k] = H[i][k] - p;
                        H[i][k + 1] = H[i][k + 1] - p * q;
                    }

                    for (i = low; i <= high; i++) {
                        p = x * V[i][k] + y * V[i][k + 1];
                        if (notlast) {
                            p = p + z * V[i][k + 2];
                            V[i][k + 2] = V[i][k + 2] - p * r;
                        }

                        V[i][k] = V[i][k] - p;
                        V[i][k + 1] = V[i][k + 1] - p * q;
                    }
                }
            }
        }
    }

    if (norm === 0) {
        return;
    }

    for (n = nn - 1; n >= 0; n--) {
        p = d[n];
        q = e[n];

        if (q === 0) {
            l = n;
            H[n][n] = 1;
            for (i = n - 1; i >= 0; i--) {
                w = H[i][i] - p;
                r = 0;
                for (j = l; j <= n; j++) {
                    r = r + H[i][j] * H[j][n];
                }

                if (e[i] < 0) {
                    z = w;
                    s = r;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        H[i][n] = (w !== 0) ? (-r / w) : (-r / (eps * norm));
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                        t = (x * s - z * r) / q;
                        H[i][n] = t;
                        H[i + 1][n] = (Math.abs(x) > Math.abs(z)) ? ((-r - w * t) / x) : ((-s - y * t) / z);
                    }

                    t = Math.abs(H[i][n]);
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        } else if (q < 0) {
            l = n - 1;

            if (Math.abs(H[n][n - 1]) > Math.abs(H[n - 1][n])) {
                H[n - 1][n - 1] = q / H[n][n - 1];
                H[n - 1][n] = -(H[n][n] - p) / H[n][n - 1];
            } else {
                cdivres = cdiv(0, -H[n - 1][n], H[n - 1][n - 1] - p, q);
                H[n - 1][n - 1] = cdivres[0];
                H[n - 1][n] = cdivres[1];
            }

            H[n][n - 1] = 0;
            H[n][n] = 1;
            for (i = n - 2; i >= 0; i--) {
                ra = 0;
                sa = 0;
                for (j = l; j <= n; j++) {
                    ra = ra + H[i][j] * H[j][n - 1];
                    sa = sa + H[i][j] * H[j][n];
                }

                w = H[i][i] - p;

                if (e[i] < 0) {
                    z = w;
                    r = ra;
                    s = sa;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        cdivres = cdiv(-ra, -sa, w, q);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                        vi = (d[i] - p) * 2 * q;
                        if (vr === 0 && vi === 0) {
                            vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                        }
                        cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                        if (Math.abs(x) > (Math.abs(z) + Math.abs(q))) {
                            H[i + 1][n - 1] = (-ra - w * H[i][n - 1] + q * H[i][n]) / x;
                            H[i + 1][n] = (-sa - w * H[i][n] - q * H[i][n - 1]) / x;
                        } else {
                            cdivres = cdiv(-r - y * H[i][n - 1], -s - y * H[i][n], z, q);
                            H[i + 1][n - 1] = cdivres[0];
                            H[i + 1][n] = cdivres[1];
                        }
                    }

                    t = Math.max(Math.abs(H[i][n - 1]), Math.abs(H[i][n]));
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n - 1] = H[j][n - 1] / t;
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            for (j = i; j < nn; j++) {
                V[i][j] = H[i][j];
            }
        }
    }

    for (j = nn - 1; j >= low; j--) {
        for (i = low; i <= high; i++) {
            z = 0;
            for (k = low; k <= Math.min(j, high); k++) {
                z = z + V[i][k] * H[k][j];
            }
            V[i][j] = z;
        }
    }
}

function cdiv(xr, xi, yr, yi) {
    var r, d;
    if (Math.abs(yr) > Math.abs(yi)) {
        r = yi / yr;
        d = yr + r * yi;
        return [(xr + r * xi) / d, (xi - r * xr) / d];
    } else {
        r = yr / yi;
        d = yi + r * yr;
        return [(r * xr + xi) / d, (r * xi - xr) / d];
    }
}

module.exports = EigenvalueDecomposition;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(1).Matrix;
var hypotenuse = __webpack_require__(45).hypotenuse;

//https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
function QrDecomposition(value) {
    if (!(this instanceof QrDecomposition)) {
        return new QrDecomposition(value);
    }
    value = Matrix.checkMatrix(value);

    var qr = value.clone(),
        m = value.rows,
        n = value.columns,
        rdiag = new Array(n),
        i, j, k, s;

    for (k = 0; k < n; k++) {
        var nrm = 0;
        for (i = k; i < m; i++) {
            nrm = hypotenuse(nrm, qr[i][k]);
        }
        if (nrm !== 0) {
            if (qr[k][k] < 0) {
                nrm = -nrm;
            }
            for (i = k; i < m; i++) {
                qr[i][k] /= nrm;
            }
            qr[k][k] += 1;
            for (j = k + 1; j < n; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * qr[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    qr[i][j] += s * qr[i][k];
                }
            }
        }
        rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
}

QrDecomposition.prototype = {
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var qr = this.QR,
            m = qr.rows;

        if (value.rows !== m) {
            throw new Error('Matrix row dimensions must agree');
        }
        if (!this.isFullRank()) {
            throw new Error('Matrix is rank deficient');
        }

        var count = value.columns;
        var X = value.clone();
        var n = qr.columns;
        var i, j, k, s;

        for (k = 0; k < n; k++) {
            for (j = 0; j < count; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * X[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    X[i][j] += s * qr[i][k];
                }
            }
        }
        for (k = n - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= this.Rdiag[k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * qr[i][k];
                }
            }
        }

        return X.subMatrix(0, n - 1, 0, count - 1);
    },
    isFullRank: function () {
        var columns = this.QR.columns;
        for (var i = 0; i < columns; i++) {
            if (this.Rdiag[i] === 0) {
                return false;
            }
        }
        return true;
    },
    get upperTriangularMatrix() {
        var qr = this.QR,
            n = qr.columns,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (i < j) {
                    X[i][j] = qr[i][j];
                } else if (i === j) {
                    X[i][j] = this.Rdiag[i];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get orthogonalMatrix() {
        var qr = this.QR,
            rows = qr.rows,
            columns = qr.columns,
            X = new Matrix(rows, columns),
            i, j, k, s;

        for (k = columns - 1; k >= 0; k--) {
            for (i = 0; i < rows; i++) {
                X[i][k] = 0;
            }
            X[k][k] = 1;
            for (j = k; j < columns; j++) {
                if (qr[k][k] !== 0) {
                    s = 0;
                    for (i = k; i < rows; i++) {
                        s += qr[i][k] * X[i][j];
                    }

                    s = -s / qr[k][k];

                    for (i = k; i < rows; i++) {
                        X[i][j] += s * qr[i][k];
                    }
                }
            }
        }
        return X;
    }
};

module.exports = QrDecomposition;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(1).Matrix;

var SingularValueDecomposition = __webpack_require__(71);
var EigenvalueDecomposition = __webpack_require__(146);
var LuDecomposition = __webpack_require__(70);
var QrDecomposition = __webpack_require__(147);
var CholeskyDecomposition = __webpack_require__(145);

function inverse(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    return solve(matrix, Matrix.eye(matrix.rows));
}

/**
 * Returns the inverse
 * @memberOf Matrix
 * @static
 * @param {Matrix} matrix
 * @return {Matrix} matrix
 * @alias inv
 */
Matrix.inverse = Matrix.inv = inverse;

/**
 * Returns the inverse
 * @memberOf Matrix
 * @static
 * @param {Matrix} matrix
 * @return {Matrix} matrix
 * @alias inv
 */
Matrix.prototype.inverse = Matrix.prototype.inv = function () {
    return inverse(this);
};

function solve(leftHandSide, rightHandSide) {
    leftHandSide = Matrix.checkMatrix(leftHandSide);
    rightHandSide = Matrix.checkMatrix(rightHandSide);
    return leftHandSide.isSquare() ? new LuDecomposition(leftHandSide).solve(rightHandSide) : new QrDecomposition(leftHandSide).solve(rightHandSide);
}

Matrix.solve = solve;
Matrix.prototype.solve = function (other) {
    return solve(this, other);
};

module.exports = {
    SingularValueDecomposition: SingularValueDecomposition,
    SVD: SingularValueDecomposition,
    EigenvalueDecomposition: EigenvalueDecomposition,
    EVD: EigenvalueDecomposition,
    LuDecomposition: LuDecomposition,
    LU: LuDecomposition,
    QrDecomposition: QrDecomposition,
    QR: QrDecomposition,
    CholeskyDecomposition: CholeskyDecomposition,
    CHO: CholeskyDecomposition,
    inverse: inverse,
    solve: solve
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1).Matrix;
module.exports.Decompositions = module.exports.DC = __webpack_require__(148);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Symbol.species) {
    Symbol.species = Symbol.for('@@species');
}


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(10);

class MatrixColumnView extends BaseView {
    constructor(matrix, column) {
        super(matrix, matrix.rows, 1);
        this.column = column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.column, value);
        return this;
    }

    get(rowIndex) {
        return this.matrix.get(rowIndex, this.column);
    }
}

module.exports = MatrixColumnView;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(10);

class MatrixFlipColumnView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
    }
}

module.exports = MatrixFlipColumnView;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(10);

class MatrixFlipRowView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
    }
}

module.exports = MatrixFlipRowView;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(10);

class MatrixRowView extends BaseView {
    constructor(matrix, row) {
        super(matrix, 1, matrix.columns);
        this.row = row;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.row, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.row, columnIndex);
    }
}

module.exports = MatrixRowView;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(10);
var util = __webpack_require__(25);

class MatrixSelectionView extends BaseView {
    constructor(matrix, rowIndices, columnIndices) {
        var indices = util.checkIndices(matrix, rowIndices, columnIndices);
        super(matrix, indices.row.length, indices.column.length);
        this.rowIndices = indices.row;
        this.columnIndices = indices.column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex], value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
    }
}

module.exports = MatrixSelectionView;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(10);
var util = __webpack_require__(25);

class MatrixSubView extends BaseView {
    constructor(matrix, startRow, endRow, startColumn, endColumn) {
        util.checkRange(matrix, startRow, endRow, startColumn, endColumn);
        super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
        this.startRow = startRow;
        this.startColumn = startColumn;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
    }
}

module.exports = MatrixSubView;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(10);

class MatrixTransposeView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.columns, matrix.rows);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(columnIndex, rowIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(columnIndex, rowIndex);
    }
}

module.exports = MatrixTransposeView;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(149);

const GaussianKernel = __webpack_require__(142);
const PolynomialKernel = __webpack_require__(143);
const ANOVAKernel = __webpack_require__(159);
const CauchyKernel = __webpack_require__(160);
const ExponentialKernel = __webpack_require__(161);
const HistogramKernel = __webpack_require__(162);
const LaplacianKernel = __webpack_require__(163);
const MultiquadraticKernel = __webpack_require__(164);
const RationalKernel = __webpack_require__(165);
const SigmoidKernel = __webpack_require__(144);

const kernelType = {
    gaussian: GaussianKernel,
    rbf: GaussianKernel,
    polynomial: PolynomialKernel,
    poly: PolynomialKernel,
    anova: ANOVAKernel,
    cauchy: CauchyKernel,
    exponential: ExponentialKernel,
    histogram: HistogramKernel,
    min: HistogramKernel,
    laplacian: LaplacianKernel,
    multiquadratic: MultiquadraticKernel,
    rational: RationalKernel,
    sigmoid: SigmoidKernel,
    mlp: SigmoidKernel
};

class Kernel {
    constructor(type, options) {
        this.kernelType = type;
        if (type === 'linear') return;

        if (typeof type === 'string') {
            type = type.toLowerCase();

            var KernelConstructor = kernelType[type];
            if (KernelConstructor) {
                this.kernelFunction = new KernelConstructor(options);
            } else {
                throw new Error('unsupported kernel type: ' + type);
            }
        } else if (typeof type === 'object' && typeof type.compute === 'function') {
            this.kernelFunction = type;
        } else {
            throw new TypeError('first argument must be a valid kernel type or instance');
        }
    }

    compute(inputs, landmarks) {
        if (landmarks === undefined) {
            landmarks = inputs;
        }

        if (this.kernelType === 'linear') {
            var matrix = new Matrix(inputs);
            return matrix.mmul(new Matrix(landmarks).transpose());
        }

        const kernelMatrix = new Matrix(inputs.length, landmarks.length);
        var i, j;
        if (inputs === landmarks) { // fast path, matrix is symmetric
            for (i = 0; i < inputs.length; i++) {
                for (j = i; j < inputs.length; j++) {
                    kernelMatrix[i][j] = kernelMatrix[j][i] = this.kernelFunction.compute(inputs[i], inputs[j]);
                }
            }
        } else {
            for (i = 0; i < inputs.length; i++) {
                for (j = 0; j < landmarks.length; j++) {
                    kernelMatrix[i][j] = this.kernelFunction.compute(inputs[i], landmarks[j]);
                }
            }
        }
        return kernelMatrix;
    }
}

module.exports = Kernel;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaultOptions = {
    sigma: 1,
    degree: 1
};

class ANOVAKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.sigma = options.sigma;
        this.degree = options.degree;
    }

    compute(x, y) {
        var sum = 0;
        var len = Math.min(x.length, y.length);
        for (var i = 1; i <= len; ++i) {
            sum += Math.pow(Math.exp(-this.sigma * Math.pow(Math.pow(x[i - 1], i) -
                    Math.pow(y[i - 1], i), 2)), this.degree);
        }
        return sum;
    }
}

module.exports = ANOVAKernel;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const squaredEuclidean = __webpack_require__(16).squared;

const defaultOptions = {
    sigma: 1
};

class CauchyKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.sigma = options.sigma;
    }

    compute(x, y) {
        return 1 / (1 + squaredEuclidean(x, y) / (this.sigma * this.sigma));
    }
}

module.exports = CauchyKernel;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const euclidean = __webpack_require__(16);

const defaultOptions = {
    sigma: 1
};

class ExponentialKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.sigma = options.sigma;
        this.divisor = 2 * options.sigma * options.sigma;
    }

    compute(x, y) {
        const distance = euclidean(x, y);
        return Math.exp(-distance / this.divisor);
    }
}

module.exports = ExponentialKernel;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class HistogramIntersectionKernel {
    compute(x, y) {
        var min = Math.min(x.length, y.length);
        var sum = 0;
        for (var i = 0; i < min; ++i)
            sum += Math.min(x[i], y[i]);

        return sum;
    }
}

module.exports = HistogramIntersectionKernel;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const euclidean = __webpack_require__(16);

const defaultOptions = {
    sigma: 1
};

class LaplacianKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.sigma = options.sigma;
    }

    compute(x, y) {
        const distance = euclidean(x, y);
        return Math.exp(-distance / this.sigma);
    }
}

module.exports = LaplacianKernel;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const squaredEuclidean = __webpack_require__(16).squared;

const defaultOptions = {
    constant: 1
};

class MultiquadraticKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.constant = options.constant;
    }

    compute(x, y) {
        return Math.sqrt(squaredEuclidean(x, y) + this.constant * this.constant);
    }
}

module.exports = MultiquadraticKernel;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const squaredEuclidean = __webpack_require__(16).squared;

const defaultOptions = {
    constant: 1
};

class RationalQuadraticKernel {
    constructor(options) {
        options = Object.assign({}, defaultOptions, options);
        this.constant = options.constant;
    }

    compute(x, y) {
        const distance = squaredEuclidean(x, y);
        return 1 - (distance / (distance + this.constant));
    }
}

module.exports = RationalQuadraticKernel;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(11);

// https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
function CholeskyDecomposition(value) {
    if (!(this instanceof CholeskyDecomposition)) {
        return new CholeskyDecomposition(value);
    }
    value = Matrix.checkMatrix(value);
    if (!value.isSymmetric())
        throw new Error('Matrix is not symmetric');

    var a = value,
        dimension = a.rows,
        l = new Matrix(dimension, dimension),
        positiveDefinite = true,
        i, j, k;

    for (j = 0; j < dimension; j++) {
        var Lrowj = l[j];
        var d = 0;
        for (k = 0; k < j; k++) {
            var Lrowk = l[k];
            var s = 0;
            for (i = 0; i < k; i++) {
                s += Lrowk[i] * Lrowj[i];
            }
            Lrowj[k] = s = (a[j][k] - s) / l[k][k];
            d = d + s * s;
        }

        d = a[j][j] - d;

        positiveDefinite &= (d > 0);
        l[j][j] = Math.sqrt(Math.max(d, 0));
        for (k = j + 1; k < dimension; k++) {
            l[j][k] = 0;
        }
    }

    if (!positiveDefinite) {
        throw new Error('Matrix is not positive definite');
    }

    this.L = l;
}

CholeskyDecomposition.prototype = {
    get leftTriangularFactor() {
        return this.L;
    },
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var l = this.L,
            dimension = l.rows;

        if (value.rows !== dimension) {
            throw new Error('Matrix dimensions do not match');
        }

        var count = value.columns,
            B = value.clone(),
            i, j, k;

        for (k = 0; k < dimension; k++) {
            for (j = 0; j < count; j++) {
                for (i = 0; i < k; i++) {
                    B[k][j] -= B[i][j] * l[k][i];
                }
                B[k][j] /= l[k][k];
            }
        }

        for (k = dimension - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                for (i = k + 1; i < dimension; i++) {
                    B[k][j] -= B[i][j] * l[i][k];
                }
                B[k][j] /= l[k][k];
            }
        }

        return B;
    }
};

module.exports = CholeskyDecomposition;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(11);
var hypotenuse = __webpack_require__(46).hypotenuse;

// https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
function EigenvalueDecomposition(matrix) {
    if (!(this instanceof EigenvalueDecomposition)) {
        return new EigenvalueDecomposition(matrix);
    }
    matrix = Matrix.checkMatrix(matrix);
    if (!matrix.isSquare()) {
        throw new Error('Matrix is not a square matrix');
    }

    var n = matrix.columns,
        V = Matrix.zeros(n, n),
        d = new Array(n),
        e = new Array(n),
        value = matrix,
        i, j;

    if (matrix.isSymmetric()) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                V[i][j] = value[i][j];
            }
        }
        tred2(n, e, d, V);
        tql2(n, e, d, V);
    }
    else {
        var H = Matrix.zeros(n, n),
            ort = new Array(n);
        for (j = 0; j < n; j++) {
            for (i = 0; i < n; i++) {
                H[i][j] = value[i][j];
            }
        }
        orthes(n, H, ort, V);
        hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
}

EigenvalueDecomposition.prototype = {
    get realEigenvalues() {
        return this.d;
    },
    get imaginaryEigenvalues() {
        return this.e;
    },
    get eigenvectorMatrix() {
        return this.V;
    },
    get diagonalMatrix() {
        var n = this.n,
            e = this.e,
            d = this.d,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                X[i][j] = 0;
            }
            X[i][i] = d[i];
            if (e[i] > 0) {
                X[i][i + 1] = e[i];
            }
            else if (e[i] < 0) {
                X[i][i - 1] = e[i];
            }
        }
        return X;
    }
};

function tred2(n, e, d, V) {

    var f, g, h, i, j, k,
        hh, scale;

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
    }

    for (i = n - 1; i > 0; i--) {
        scale = 0;
        h = 0;
        for (k = 0; k < i; k++) {
            scale = scale + Math.abs(d[k]);
        }

        if (scale === 0) {
            e[i] = d[i - 1];
            for (j = 0; j < i; j++) {
                d[j] = V[i - 1][j];
                V[i][j] = 0;
                V[j][i] = 0;
            }
        } else {
            for (k = 0; k < i; k++) {
                d[k] /= scale;
                h += d[k] * d[k];
            }

            f = d[i - 1];
            g = Math.sqrt(h);
            if (f > 0) {
                g = -g;
            }

            e[i] = scale * g;
            h = h - f * g;
            d[i - 1] = f - g;
            for (j = 0; j < i; j++) {
                e[j] = 0;
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                V[j][i] = f;
                g = e[j] + V[j][j] * f;
                for (k = j + 1; k <= i - 1; k++) {
                    g += V[k][j] * d[k];
                    e[k] += V[k][j] * f;
                }
                e[j] = g;
            }

            f = 0;
            for (j = 0; j < i; j++) {
                e[j] /= h;
                f += e[j] * d[j];
            }

            hh = f / (h + h);
            for (j = 0; j < i; j++) {
                e[j] -= hh * d[j];
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                g = e[j];
                for (k = j; k <= i - 1; k++) {
                    V[k][j] -= (f * e[k] + g * d[k]);
                }
                d[j] = V[i - 1][j];
                V[i][j] = 0;
            }
        }
        d[i] = h;
    }

    for (i = 0; i < n - 1; i++) {
        V[n - 1][i] = V[i][i];
        V[i][i] = 1;
        h = d[i + 1];
        if (h !== 0) {
            for (k = 0; k <= i; k++) {
                d[k] = V[k][i + 1] / h;
            }

            for (j = 0; j <= i; j++) {
                g = 0;
                for (k = 0; k <= i; k++) {
                    g += V[k][i + 1] * V[k][j];
                }
                for (k = 0; k <= i; k++) {
                    V[k][j] -= g * d[k];
                }
            }
        }

        for (k = 0; k <= i; k++) {
            V[k][i + 1] = 0;
        }
    }

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
        V[n - 1][j] = 0;
    }

    V[n - 1][n - 1] = 1;
    e[0] = 0;
}

function tql2(n, e, d, V) {

    var g, h, i, j, k, l, m, p, r,
        dl1, c, c2, c3, el1, s, s2,
        iter;

    for (i = 1; i < n; i++) {
        e[i - 1] = e[i];
    }

    e[n - 1] = 0;

    var f = 0,
        tst1 = 0,
        eps = Math.pow(2, -52);

    for (l = 0; l < n; l++) {
        tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
        m = l;
        while (m < n) {
            if (Math.abs(e[m]) <= eps * tst1) {
                break;
            }
            m++;
        }

        if (m > l) {
            iter = 0;
            do {
                iter = iter + 1;

                g = d[l];
                p = (d[l + 1] - g) / (2 * e[l]);
                r = hypotenuse(p, 1);
                if (p < 0) {
                    r = -r;
                }

                d[l] = e[l] / (p + r);
                d[l + 1] = e[l] * (p + r);
                dl1 = d[l + 1];
                h = g - d[l];
                for (i = l + 2; i < n; i++) {
                    d[i] -= h;
                }

                f = f + h;

                p = d[m];
                c = 1;
                c2 = c;
                c3 = c;
                el1 = e[l + 1];
                s = 0;
                s2 = 0;
                for (i = m - 1; i >= l; i--) {
                    c3 = c2;
                    c2 = c;
                    s2 = s;
                    g = c * e[i];
                    h = c * p;
                    r = hypotenuse(p, e[i]);
                    e[i + 1] = s * r;
                    s = e[i] / r;
                    c = p / r;
                    p = c * d[i] - s * g;
                    d[i + 1] = h + s * (c * g + s * d[i]);

                    for (k = 0; k < n; k++) {
                        h = V[k][i + 1];
                        V[k][i + 1] = s * V[k][i] + c * h;
                        V[k][i] = c * V[k][i] - s * h;
                    }
                }

                p = -s * s2 * c3 * el1 * e[l] / dl1;
                e[l] = s * p;
                d[l] = c * p;

            }
            while (Math.abs(e[l]) > eps * tst1);
        }
        d[l] = d[l] + f;
        e[l] = 0;
    }

    for (i = 0; i < n - 1; i++) {
        k = i;
        p = d[i];
        for (j = i + 1; j < n; j++) {
            if (d[j] < p) {
                k = j;
                p = d[j];
            }
        }

        if (k !== i) {
            d[k] = d[i];
            d[i] = p;
            for (j = 0; j < n; j++) {
                p = V[j][i];
                V[j][i] = V[j][k];
                V[j][k] = p;
            }
        }
    }
}

function orthes(n, H, ort, V) {

    var low = 0,
        high = n - 1,
        f, g, h, i, j, m,
        scale;

    for (m = low + 1; m <= high - 1; m++) {
        scale = 0;
        for (i = m; i <= high; i++) {
            scale = scale + Math.abs(H[i][m - 1]);
        }

        if (scale !== 0) {
            h = 0;
            for (i = high; i >= m; i--) {
                ort[i] = H[i][m - 1] / scale;
                h += ort[i] * ort[i];
            }

            g = Math.sqrt(h);
            if (ort[m] > 0) {
                g = -g;
            }

            h = h - ort[m] * g;
            ort[m] = ort[m] - g;

            for (j = m; j < n; j++) {
                f = 0;
                for (i = high; i >= m; i--) {
                    f += ort[i] * H[i][j];
                }

                f = f / h;
                for (i = m; i <= high; i++) {
                    H[i][j] -= f * ort[i];
                }
            }

            for (i = 0; i <= high; i++) {
                f = 0;
                for (j = high; j >= m; j--) {
                    f += ort[j] * H[i][j];
                }

                f = f / h;
                for (j = m; j <= high; j++) {
                    H[i][j] -= f * ort[j];
                }
            }

            ort[m] = scale * ort[m];
            H[m][m - 1] = scale * g;
        }
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            V[i][j] = (i === j ? 1 : 0);
        }
    }

    for (m = high - 1; m >= low + 1; m--) {
        if (H[m][m - 1] !== 0) {
            for (i = m + 1; i <= high; i++) {
                ort[i] = H[i][m - 1];
            }

            for (j = m; j <= high; j++) {
                g = 0;
                for (i = m; i <= high; i++) {
                    g += ort[i] * V[i][j];
                }

                g = (g / ort[m]) / H[m][m - 1];
                for (i = m; i <= high; i++) {
                    V[i][j] += g * ort[i];
                }
            }
        }
    }
}

function hqr2(nn, e, d, V, H) {
    var n = nn - 1,
        low = 0,
        high = nn - 1,
        eps = Math.pow(2, -52),
        exshift = 0,
        norm = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        z = 0,
        iter = 0,
        i, j, k, l, m, t, w, x, y,
        ra, sa, vr, vi,
        notlast, cdivres;

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            d[i] = H[i][i];
            e[i] = 0;
        }

        for (j = Math.max(i - 1, 0); j < nn; j++) {
            norm = norm + Math.abs(H[i][j]);
        }
    }

    while (n >= low) {
        l = n;
        while (l > low) {
            s = Math.abs(H[l - 1][l - 1]) + Math.abs(H[l][l]);
            if (s === 0) {
                s = norm;
            }
            if (Math.abs(H[l][l - 1]) < eps * s) {
                break;
            }
            l--;
        }

        if (l === n) {
            H[n][n] = H[n][n] + exshift;
            d[n] = H[n][n];
            e[n] = 0;
            n--;
            iter = 0;
        } else if (l === n - 1) {
            w = H[n][n - 1] * H[n - 1][n];
            p = (H[n - 1][n - 1] - H[n][n]) / 2;
            q = p * p + w;
            z = Math.sqrt(Math.abs(q));
            H[n][n] = H[n][n] + exshift;
            H[n - 1][n - 1] = H[n - 1][n - 1] + exshift;
            x = H[n][n];

            if (q >= 0) {
                z = (p >= 0) ? (p + z) : (p - z);
                d[n - 1] = x + z;
                d[n] = d[n - 1];
                if (z !== 0) {
                    d[n] = x - w / z;
                }
                e[n - 1] = 0;
                e[n] = 0;
                x = H[n][n - 1];
                s = Math.abs(x) + Math.abs(z);
                p = x / s;
                q = z / s;
                r = Math.sqrt(p * p + q * q);
                p = p / r;
                q = q / r;

                for (j = n - 1; j < nn; j++) {
                    z = H[n - 1][j];
                    H[n - 1][j] = q * z + p * H[n][j];
                    H[n][j] = q * H[n][j] - p * z;
                }

                for (i = 0; i <= n; i++) {
                    z = H[i][n - 1];
                    H[i][n - 1] = q * z + p * H[i][n];
                    H[i][n] = q * H[i][n] - p * z;
                }

                for (i = low; i <= high; i++) {
                    z = V[i][n - 1];
                    V[i][n - 1] = q * z + p * V[i][n];
                    V[i][n] = q * V[i][n] - p * z;
                }
            } else {
                d[n - 1] = x + p;
                d[n] = x + p;
                e[n - 1] = z;
                e[n] = -z;
            }

            n = n - 2;
            iter = 0;
        } else {
            x = H[n][n];
            y = 0;
            w = 0;
            if (l < n) {
                y = H[n - 1][n - 1];
                w = H[n][n - 1] * H[n - 1][n];
            }

            if (iter === 10) {
                exshift += x;
                for (i = low; i <= n; i++) {
                    H[i][i] -= x;
                }
                s = Math.abs(H[n][n - 1]) + Math.abs(H[n - 1][n - 2]);
                x = y = 0.75 * s;
                w = -0.4375 * s * s;
            }

            if (iter === 30) {
                s = (y - x) / 2;
                s = s * s + w;
                if (s > 0) {
                    s = Math.sqrt(s);
                    if (y < x) {
                        s = -s;
                    }
                    s = x - w / ((y - x) / 2 + s);
                    for (i = low; i <= n; i++) {
                        H[i][i] -= s;
                    }
                    exshift += s;
                    x = y = w = 0.964;
                }
            }

            iter = iter + 1;

            m = n - 2;
            while (m >= l) {
                z = H[m][m];
                r = x - z;
                s = y - z;
                p = (r * s - w) / H[m + 1][m] + H[m][m + 1];
                q = H[m + 1][m + 1] - z - r - s;
                r = H[m + 2][m + 1];
                s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                p = p / s;
                q = q / s;
                r = r / s;
                if (m === l) {
                    break;
                }
                if (Math.abs(H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m - 1][m - 1]) + Math.abs(z) + Math.abs(H[m + 1][m + 1])))) {
                    break;
                }
                m--;
            }

            for (i = m + 2; i <= n; i++) {
                H[i][i - 2] = 0;
                if (i > m + 2) {
                    H[i][i - 3] = 0;
                }
            }

            for (k = m; k <= n - 1; k++) {
                notlast = (k !== n - 1);
                if (k !== m) {
                    p = H[k][k - 1];
                    q = H[k + 1][k - 1];
                    r = (notlast ? H[k + 2][k - 1] : 0);
                    x = Math.abs(p) + Math.abs(q) + Math.abs(r);
                    if (x !== 0) {
                        p = p / x;
                        q = q / x;
                        r = r / x;
                    }
                }

                if (x === 0) {
                    break;
                }

                s = Math.sqrt(p * p + q * q + r * r);
                if (p < 0) {
                    s = -s;
                }

                if (s !== 0) {
                    if (k !== m) {
                        H[k][k - 1] = -s * x;
                    } else if (l !== m) {
                        H[k][k - 1] = -H[k][k - 1];
                    }

                    p = p + s;
                    x = p / s;
                    y = q / s;
                    z = r / s;
                    q = q / p;
                    r = r / p;

                    for (j = k; j < nn; j++) {
                        p = H[k][j] + q * H[k + 1][j];
                        if (notlast) {
                            p = p + r * H[k + 2][j];
                            H[k + 2][j] = H[k + 2][j] - p * z;
                        }

                        H[k][j] = H[k][j] - p * x;
                        H[k + 1][j] = H[k + 1][j] - p * y;
                    }

                    for (i = 0; i <= Math.min(n, k + 3); i++) {
                        p = x * H[i][k] + y * H[i][k + 1];
                        if (notlast) {
                            p = p + z * H[i][k + 2];
                            H[i][k + 2] = H[i][k + 2] - p * r;
                        }

                        H[i][k] = H[i][k] - p;
                        H[i][k + 1] = H[i][k + 1] - p * q;
                    }

                    for (i = low; i <= high; i++) {
                        p = x * V[i][k] + y * V[i][k + 1];
                        if (notlast) {
                            p = p + z * V[i][k + 2];
                            V[i][k + 2] = V[i][k + 2] - p * r;
                        }

                        V[i][k] = V[i][k] - p;
                        V[i][k + 1] = V[i][k + 1] - p * q;
                    }
                }
            }
        }
    }

    if (norm === 0) {
        return;
    }

    for (n = nn - 1; n >= 0; n--) {
        p = d[n];
        q = e[n];

        if (q === 0) {
            l = n;
            H[n][n] = 1;
            for (i = n - 1; i >= 0; i--) {
                w = H[i][i] - p;
                r = 0;
                for (j = l; j <= n; j++) {
                    r = r + H[i][j] * H[j][n];
                }

                if (e[i] < 0) {
                    z = w;
                    s = r;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        H[i][n] = (w !== 0) ? (-r / w) : (-r / (eps * norm));
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                        t = (x * s - z * r) / q;
                        H[i][n] = t;
                        H[i + 1][n] = (Math.abs(x) > Math.abs(z)) ? ((-r - w * t) / x) : ((-s - y * t) / z);
                    }

                    t = Math.abs(H[i][n]);
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        } else if (q < 0) {
            l = n - 1;

            if (Math.abs(H[n][n - 1]) > Math.abs(H[n - 1][n])) {
                H[n - 1][n - 1] = q / H[n][n - 1];
                H[n - 1][n] = -(H[n][n] - p) / H[n][n - 1];
            } else {
                cdivres = cdiv(0, -H[n - 1][n], H[n - 1][n - 1] - p, q);
                H[n - 1][n - 1] = cdivres[0];
                H[n - 1][n] = cdivres[1];
            }

            H[n][n - 1] = 0;
            H[n][n] = 1;
            for (i = n - 2; i >= 0; i--) {
                ra = 0;
                sa = 0;
                for (j = l; j <= n; j++) {
                    ra = ra + H[i][j] * H[j][n - 1];
                    sa = sa + H[i][j] * H[j][n];
                }

                w = H[i][i] - p;

                if (e[i] < 0) {
                    z = w;
                    r = ra;
                    s = sa;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        cdivres = cdiv(-ra, -sa, w, q);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                        vi = (d[i] - p) * 2 * q;
                        if (vr === 0 && vi === 0) {
                            vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                        }
                        cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                        if (Math.abs(x) > (Math.abs(z) + Math.abs(q))) {
                            H[i + 1][n - 1] = (-ra - w * H[i][n - 1] + q * H[i][n]) / x;
                            H[i + 1][n] = (-sa - w * H[i][n] - q * H[i][n - 1]) / x;
                        } else {
                            cdivres = cdiv(-r - y * H[i][n - 1], -s - y * H[i][n], z, q);
                            H[i + 1][n - 1] = cdivres[0];
                            H[i + 1][n] = cdivres[1];
                        }
                    }

                    t = Math.max(Math.abs(H[i][n - 1]), Math.abs(H[i][n]));
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n - 1] = H[j][n - 1] / t;
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            for (j = i; j < nn; j++) {
                V[i][j] = H[i][j];
            }
        }
    }

    for (j = nn - 1; j >= low; j--) {
        for (i = low; i <= high; i++) {
            z = 0;
            for (k = low; k <= Math.min(j, high); k++) {
                z = z + V[i][k] * H[k][j];
            }
            V[i][j] = z;
        }
    }
}

function cdiv(xr, xi, yr, yi) {
    var r, d;
    if (Math.abs(yr) > Math.abs(yi)) {
        r = yi / yr;
        d = yr + r * yi;
        return [(xr + r * xi) / d, (xi - r * xr) / d];
    }
    else {
        r = yr / yi;
        d = yi + r * yr;
        return [(r * xr + xi) / d, (r * xi - xr) / d];
    }
}

module.exports = EigenvalueDecomposition;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(11);

// https://github.com/lutzroeder/Mapack/blob/master/Source/LuDecomposition.cs
function LuDecomposition(matrix) {
    if (!(this instanceof LuDecomposition)) {
        return new LuDecomposition(matrix);
    }
    matrix = Matrix.checkMatrix(matrix);

    var lu = matrix.clone(),
        rows = lu.rows,
        columns = lu.columns,
        pivotVector = new Array(rows),
        pivotSign = 1,
        i, j, k, p, s, t, v,
        LUrowi, LUcolj, kmax;

    for (i = 0; i < rows; i++) {
        pivotVector[i] = i;
    }

    LUcolj = new Array(rows);

    for (j = 0; j < columns; j++) {

        for (i = 0; i < rows; i++) {
            LUcolj[i] = lu[i][j];
        }

        for (i = 0; i < rows; i++) {
            LUrowi = lu[i];
            kmax = Math.min(i, j);
            s = 0;
            for (k = 0; k < kmax; k++) {
                s += LUrowi[k] * LUcolj[k];
            }
            LUrowi[j] = LUcolj[i] -= s;
        }

        p = j;
        for (i = j + 1; i < rows; i++) {
            if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
                p = i;
            }
        }

        if (p !== j) {
            for (k = 0; k < columns; k++) {
                t = lu[p][k];
                lu[p][k] = lu[j][k];
                lu[j][k] = t;
            }

            v = pivotVector[p];
            pivotVector[p] = pivotVector[j];
            pivotVector[j] = v;

            pivotSign = -pivotSign;
        }

        if (j < rows && lu[j][j] !== 0) {
            for (i = j + 1; i < rows; i++) {
                lu[i][j] /= lu[j][j];
            }
        }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
}

LuDecomposition.prototype = {
    isSingular: function () {
        var data = this.LU,
            col = data.columns;
        for (var j = 0; j < col; j++) {
            if (data[j][j] === 0) {
                return true;
            }
        }
        return false;
    },
    get determinant() {
        var data = this.LU;
        if (!data.isSquare())
            throw new Error('Matrix must be square');
        var determinant = this.pivotSign, col = data.columns;
        for (var j = 0; j < col; j++)
            determinant *= data[j][j];
        return determinant;
    },
    get lowerTriangularFactor() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i > j) {
                    X[i][j] = data[i][j];
                } else if (i === j) {
                    X[i][j] = 1;
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get upperTriangularFactor() {
        var data = this.LU,
            rows = data.rows,
            columns = data.columns,
            X = new Matrix(rows, columns);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < columns; j++) {
                if (i <= j) {
                    X[i][j] = data[i][j];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get pivotPermutationVector() {
        return this.pivotVector.slice();
    },
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var lu = this.LU,
            rows = lu.rows;

        if (rows !== value.rows)
            throw new Error('Invalid matrix dimensions');
        if (this.isSingular())
            throw new Error('LU matrix is singular');

        var count = value.columns,
            X = value.subMatrixRow(this.pivotVector, 0, count - 1),
            columns = lu.columns,
            i, j, k;

        for (k = 0; k < columns; k++) {
            for (i = k + 1; i < columns; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        for (k = columns - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= lu[k][k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * lu[i][k];
                }
            }
        }
        return X;
    }
};

module.exports = LuDecomposition;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(11);
var hypotenuse = __webpack_require__(46).hypotenuse;

//https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
function QrDecomposition(value) {
    if (!(this instanceof QrDecomposition)) {
        return new QrDecomposition(value);
    }
    value = Matrix.checkMatrix(value);

    var qr = value.clone(),
        m = value.rows,
        n = value.columns,
        rdiag = new Array(n),
        i, j, k, s;

    for (k = 0; k < n; k++) {
        var nrm = 0;
        for (i = k; i < m; i++) {
            nrm = hypotenuse(nrm, qr[i][k]);
        }
        if (nrm !== 0) {
            if (qr[k][k] < 0) {
                nrm = -nrm;
            }
            for (i = k; i < m; i++) {
                qr[i][k] /= nrm;
            }
            qr[k][k] += 1;
            for (j = k + 1; j < n; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * qr[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    qr[i][j] += s * qr[i][k];
                }
            }
        }
        rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
}

QrDecomposition.prototype = {
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var qr = this.QR,
            m = qr.rows;

        if (value.rows !== m)
            throw new Error('Matrix row dimensions must agree');
        if (!this.isFullRank())
            throw new Error('Matrix is rank deficient');

        var count = value.columns,
            X = value.clone(),
            n = qr.columns,
            i, j, k, s;

        for (k = 0; k < n; k++) {
            for (j = 0; j < count; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * X[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    X[i][j] += s * qr[i][k];
                }
            }
        }
        for (k = n - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= this.Rdiag[k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * qr[i][k];
                }
            }
        }

        return X.subMatrix(0, n - 1, 0, count - 1);
    },
    isFullRank: function () {
        var columns = this.QR.columns;
        for (var i = 0; i < columns; i++) {
            if (this.Rdiag[i] === 0) {
                return false;
            }
        }
        return true;
    },
    get upperTriangularFactor() {
        var qr = this.QR,
            n = qr.columns,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (i < j) {
                    X[i][j] = qr[i][j];
                } else if (i === j) {
                    X[i][j] = this.Rdiag[i];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get orthogonalFactor() {
        var qr = this.QR,
            rows = qr.rows,
            columns = qr.columns,
            X = new Matrix(rows, columns),
            i, j, k, s;

        for (k = columns - 1; k >= 0; k--) {
            for (i = 0; i < rows; i++) {
                X[i][k] = 0;
            }
            X[k][k] = 1;
            for (j = k; j < columns; j++) {
                if (qr[k][k] !== 0) {
                    s = 0;
                    for (i = k; i < rows; i++) {
                        s += qr[i][k] * X[i][j];
                    }

                    s = -s / qr[k][k];

                    for (i = k; i < rows; i++) {
                        X[i][j] += s * qr[i][k];
                    }
                }
            }
        }
        return X;
    }
};

module.exports = QrDecomposition;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(11);
var hypotenuse = __webpack_require__(46).hypotenuse;

// https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
function SingularValueDecomposition(value, options) {
    if (!(this instanceof SingularValueDecomposition)) {
        return new SingularValueDecomposition(value, options);
    }
    value = Matrix.checkMatrix(value);

    options = options || {};

    var a = value.clone(),
        m = value.rows,
        n = value.columns,
        nu = Math.min(m, n);

    var wantu = true, wantv = true;
    if (options.computeLeftSingularVectors === false)
        wantu = false;
    if (options.computeRightSingularVectors === false)
        wantv = false;
    var autoTranspose = options.autoTranspose === true;

    var swapped = false;
    if (m < n) {
        if (!autoTranspose) {
            console.warn('Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose');
        } else {
            a = a.transpose();
            m = a.rows;
            n = a.columns;
            swapped = true;
            var aux = wantu;
            wantu = wantv;
            wantv = aux;
        }
    }

    var s = new Array(Math.min(m + 1, n)),
        U = Matrix.zeros(m, nu),
        V = Matrix.zeros(n, n),
        e = new Array(n),
        work = new Array(m);

    var nct = Math.min(m - 1, n);
    var nrt = Math.max(0, Math.min(n - 2, m));

    var i, j, k, p, t, ks, f, cs, sn, max, kase,
        scale, sp, spm1, epm1, sk, ek, b, c, shift, g;

    for (k = 0, max = Math.max(nct, nrt); k < max; k++) {
        if (k < nct) {
            s[k] = 0;
            for (i = k; i < m; i++) {
                s[k] = hypotenuse(s[k], a[i][k]);
            }
            if (s[k] !== 0) {
                if (a[k][k] < 0) {
                    s[k] = -s[k];
                }
                for (i = k; i < m; i++) {
                    a[i][k] /= s[k];
                }
                a[k][k] += 1;
            }
            s[k] = -s[k];
        }

        for (j = k + 1; j < n; j++) {
            if ((k < nct) && (s[k] !== 0)) {
                t = 0;
                for (i = k; i < m; i++) {
                    t += a[i][k] * a[i][j];
                }
                t = -t / a[k][k];
                for (i = k; i < m; i++) {
                    a[i][j] += t * a[i][k];
                }
            }
            e[j] = a[k][j];
        }

        if (wantu && (k < nct)) {
            for (i = k; i < m; i++) {
                U[i][k] = a[i][k];
            }
        }

        if (k < nrt) {
            e[k] = 0;
            for (i = k + 1; i < n; i++) {
                e[k] = hypotenuse(e[k], e[i]);
            }
            if (e[k] !== 0) {
                if (e[k + 1] < 0)
                    e[k] = -e[k];
                for (i = k + 1; i < n; i++) {
                    e[i] /= e[k];
                }
                e[k + 1] += 1;
            }
            e[k] = -e[k];
            if ((k + 1 < m) && (e[k] !== 0)) {
                for (i = k + 1; i < m; i++) {
                    work[i] = 0;
                }
                for (j = k + 1; j < n; j++) {
                    for (i = k + 1; i < m; i++) {
                        work[i] += e[j] * a[i][j];
                    }
                }
                for (j = k + 1; j < n; j++) {
                    t = -e[j] / e[k + 1];
                    for (i = k + 1; i < m; i++) {
                        a[i][j] += t * work[i];
                    }
                }
            }
            if (wantv) {
                for (i = k + 1; i < n; i++) {
                    V[i][k] = e[i];
                }
            }
        }
    }

    p = Math.min(n, m + 1);
    if (nct < n) {
        s[nct] = a[nct][nct];
    }
    if (m < p) {
        s[p - 1] = 0;
    }
    if (nrt + 1 < p) {
        e[nrt] = a[nrt][p - 1];
    }
    e[p - 1] = 0;

    if (wantu) {
        for (j = nct; j < nu; j++) {
            for (i = 0; i < m; i++) {
                U[i][j] = 0;
            }
            U[j][j] = 1;
        }
        for (k = nct - 1; k >= 0; k--) {
            if (s[k] !== 0) {
                for (j = k + 1; j < nu; j++) {
                    t = 0;
                    for (i = k; i < m; i++) {
                        t += U[i][k] * U[i][j];
                    }
                    t = -t / U[k][k];
                    for (i = k; i < m; i++) {
                        U[i][j] += t * U[i][k];
                    }
                }
                for (i = k; i < m; i++) {
                    U[i][k] = -U[i][k];
                }
                U[k][k] = 1 + U[k][k];
                for (i = 0; i < k - 1; i++) {
                    U[i][k] = 0;
                }
            } else {
                for (i = 0; i < m; i++) {
                    U[i][k] = 0;
                }
                U[k][k] = 1;
            }
        }
    }

    if (wantv) {
        for (k = n - 1; k >= 0; k--) {
            if ((k < nrt) && (e[k] !== 0)) {
                for (j = k + 1; j < n; j++) {
                    t = 0;
                    for (i = k + 1; i < n; i++) {
                        t += V[i][k] * V[i][j];
                    }
                    t = -t / V[k + 1][k];
                    for (i = k + 1; i < n; i++) {
                        V[i][j] += t * V[i][k];
                    }
                }
            }
            for (i = 0; i < n; i++) {
                V[i][k] = 0;
            }
            V[k][k] = 1;
        }
    }

    var pp = p - 1,
        iter = 0,
        eps = Math.pow(2, -52);
    while (p > 0) {
        for (k = p - 2; k >= -1; k--) {
            if (k === -1) {
                break;
            }
            if (Math.abs(e[k]) <= eps * (Math.abs(s[k]) + Math.abs(s[k + 1]))) {
                e[k] = 0;
                break;
            }
        }
        if (k === p - 2) {
            kase = 4;
        } else {
            for (ks = p - 1; ks >= k; ks--) {
                if (ks === k) {
                    break;
                }
                t = (ks !== p ? Math.abs(e[ks]) : 0) + (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
                if (Math.abs(s[ks]) <= eps * t) {
                    s[ks] = 0;
                    break;
                }
            }
            if (ks === k) {
                kase = 3;
            } else if (ks === p - 1) {
                kase = 1;
            } else {
                kase = 2;
                k = ks;
            }
        }

        k++;

        switch (kase) {
            case 1: {
                f = e[p - 2];
                e[p - 2] = 0;
                for (j = p - 2; j >= k; j--) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    if (j !== k) {
                        f = -sn * e[j - 1];
                        e[j - 1] = cs * e[j - 1];
                    }
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][p - 1];
                            V[i][p - 1] = -sn * V[i][j] + cs * V[i][p - 1];
                            V[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 2 : {
                f = e[k - 1];
                e[k - 1] = 0;
                for (j = k; j < p; j++) {
                    t = hypotenuse(s[j], f);
                    cs = s[j] / t;
                    sn = f / t;
                    s[j] = t;
                    f = -sn * e[j];
                    e[j] = cs * e[j];
                    if (wantu) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][k - 1];
                            U[i][k - 1] = -sn * U[i][j] + cs * U[i][k - 1];
                            U[i][j] = t;
                        }
                    }
                }
                break;
            }
            case 3 : {
                scale = Math.max(Math.max(Math.max(Math.max(Math.abs(s[p - 1]), Math.abs(s[p - 2])), Math.abs(e[p - 2])), Math.abs(s[k])), Math.abs(e[k]));
                sp = s[p - 1] / scale;
                spm1 = s[p - 2] / scale;
                epm1 = e[p - 2] / scale;
                sk = s[k] / scale;
                ek = e[k] / scale;
                b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
                c = (sp * epm1) * (sp * epm1);
                shift = 0;
                if ((b !== 0) || (c !== 0)) {
                    shift = Math.sqrt(b * b + c);
                    if (b < 0) {
                        shift = -shift;
                    }
                    shift = c / (b + shift);
                }
                f = (sk + sp) * (sk - sp) + shift;
                g = sk * ek;
                for (j = k; j < p - 1; j++) {
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    if (j !== k) {
                        e[j - 1] = t;
                    }
                    f = cs * s[j] + sn * e[j];
                    e[j] = cs * e[j] - sn * s[j];
                    g = sn * s[j + 1];
                    s[j + 1] = cs * s[j + 1];
                    if (wantv) {
                        for (i = 0; i < n; i++) {
                            t = cs * V[i][j] + sn * V[i][j + 1];
                            V[i][j + 1] = -sn * V[i][j] + cs * V[i][j + 1];
                            V[i][j] = t;
                        }
                    }
                    t = hypotenuse(f, g);
                    cs = f / t;
                    sn = g / t;
                    s[j] = t;
                    f = cs * e[j] + sn * s[j + 1];
                    s[j + 1] = -sn * e[j] + cs * s[j + 1];
                    g = sn * e[j + 1];
                    e[j + 1] = cs * e[j + 1];
                    if (wantu && (j < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = cs * U[i][j] + sn * U[i][j + 1];
                            U[i][j + 1] = -sn * U[i][j] + cs * U[i][j + 1];
                            U[i][j] = t;
                        }
                    }
                }
                e[p - 2] = f;
                iter = iter + 1;
                break;
            }
            case 4: {
                if (s[k] <= 0) {
                    s[k] = (s[k] < 0 ? -s[k] : 0);
                    if (wantv) {
                        for (i = 0; i <= pp; i++) {
                            V[i][k] = -V[i][k];
                        }
                    }
                }
                while (k < pp) {
                    if (s[k] >= s[k + 1]) {
                        break;
                    }
                    t = s[k];
                    s[k] = s[k + 1];
                    s[k + 1] = t;
                    if (wantv && (k < n - 1)) {
                        for (i = 0; i < n; i++) {
                            t = V[i][k + 1];
                            V[i][k + 1] = V[i][k];
                            V[i][k] = t;
                        }
                    }
                    if (wantu && (k < m - 1)) {
                        for (i = 0; i < m; i++) {
                            t = U[i][k + 1];
                            U[i][k + 1] = U[i][k];
                            U[i][k] = t;
                        }
                    }
                    k++;
                }
                iter = 0;
                p--;
                break;
            }
        }
    }

    if (swapped) {
        var tmp = V;
        V = U;
        U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
}

SingularValueDecomposition.prototype = {
    get condition() {
        return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
    },
    get norm2() {
        return this.s[0];
    },
    get rank() {
        var eps = Math.pow(2, -52),
            tol = Math.max(this.m, this.n) * this.s[0] * eps,
            r = 0,
            s = this.s;
        for (var i = 0, ii = s.length; i < ii; i++) {
            if (s[i] > tol) {
                r++;
            }
        }
        return r;
    },
    get diagonal() {
        return this.s;
    },
    // https://github.com/accord-net/framework/blob/development/Sources/Accord.Math/Decompositions/SingularValueDecomposition.cs
    get threshold() {
        return (Math.pow(2, -52) / 2) * Math.max(this.m, this.n) * this.s[0];
    },
    get leftSingularVectors() {
        return this.U;
    },
    get rightSingularVectors() {
        return this.V;
    },
    get diagonalMatrix() {
        return Matrix.diag(this.s);
    },
    solve: function (value) {

        var Y = value,
            e = this.threshold,
            scols = this.s.length,
            Ls = Matrix.zeros(scols, scols),
            i;

        for (i = 0; i < scols; i++) {
            if (Math.abs(this.s[i]) <= e) {
                Ls[i][i] = 0;
            } else {
                Ls[i][i] = 1 / this.s[i];
            }
        }


        var VL = this.V.mmul(Ls),
            vrows = this.V.rows,
            urows = this.U.rows,
            VLU = Matrix.zeros(vrows, urows),
            j, k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < scols; k++) {
                    sum += VL[i][k] * this.U[j][k];
                }
                VLU[i][j] = sum;
            }
        }

        return VLU.mmul(Y);
    },
    solveForDiagonal: function (value) {
        return this.solve(Matrix.diag(value));
    },
    inverse: function () {
        var e = this.threshold,
            vrows = this.V.rows,
            vcols = this.V.columns,
            X = new Matrix(vrows, this.s.length),
            i, j;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < vcols; j++) {
                if (Math.abs(this.s[j]) > e) {
                    X[i][j] = this.V[i][j] / this.s[j];
                } else {
                    X[i][j] = 0;
                }
            }
        }

        var urows = this.U.rows,
            ucols = this.U.columns,
            Y = new Matrix(vrows, urows),
            k, sum;

        for (i = 0; i < vrows; i++) {
            for (j = 0; j < urows; j++) {
                sum = 0;
                for (k = 0; k < ucols; k++) {
                    sum += X[i][k] * this.U[j][k];
                }
                Y[i][j] = sum;
            }
        }

        return Y;
    }
};

module.exports = SingularValueDecomposition;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(11);

var SingularValueDecomposition = __webpack_require__(170);
var EigenvalueDecomposition = __webpack_require__(167);
var LuDecomposition = __webpack_require__(168);
var QrDecomposition = __webpack_require__(169);
var CholeskyDecomposition = __webpack_require__(166);

function inverse(matrix) {
    return solve(matrix, Matrix.eye(matrix.rows));
}

Matrix.prototype.inverse = function () {
    return inverse(this);
};

function solve(leftHandSide, rightHandSide) {
    return leftHandSide.isSquare() ? new LuDecomposition(leftHandSide).solve(rightHandSide) : new QrDecomposition(leftHandSide).solve(rightHandSide);
}

Matrix.prototype.solve = function (other) {
    return solve(this, other);
};

module.exports = {
    SingularValueDecomposition: SingularValueDecomposition,
    SVD: SingularValueDecomposition,
    EigenvalueDecomposition: EigenvalueDecomposition,
    EVD: EigenvalueDecomposition,
    LuDecomposition: LuDecomposition,
    LU: LuDecomposition,
    QrDecomposition: QrDecomposition,
    QR: QrDecomposition,
    CholeskyDecomposition: CholeskyDecomposition,
    CHO: CholeskyDecomposition,
    inverse: inverse,
    solve: solve
};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LM = __webpack_require__(138);
var math = LM.Matrix.algebra;
var Matrix = __webpack_require__(26);

/**
 * This function calculates the spectrum as a sum of lorentzian functions. The Lorentzian
 * parameters are divided in 3 batches. 1st: centers; 2nd: heights; 3th: widths;
 * @param t Ordinate values
 * @param p Lorentzian parameters
 * @param c Constant parameters(Not used)
 * @returns {*}
 */
function sumOfLorentzians(t,p,c){
    var nL = p.length/3,factor,i, j,p2, cols = t.rows;
    var result = Matrix.zeros(t.length,1);

    for(i=0;i<nL;i++){
        p2 = Math.pow(p[i+nL*2][0]/2,2);
        factor = p[i+nL][0]*p2;
        for(j=0;j<cols;j++){
            result[j][0]+=factor/(Math.pow(t[j][0]-p[i][0],2)+p2);
        }
    }
    return result;
}

/**
 * This function calculates the spectrum as a sum of gaussian functions. The Gaussian
 * parameters are divided in 3 batches. 1st: centers; 2nd: height; 3th: std's;
 * @param t Ordinate values
 * @param p Gaussian parameters
 * @param c Constant parameters(Not used)
 * @returns {*}
 */
function sumOfGaussians(t,p,c){
    var nL = p.length/3,factor,i, j, cols = t.rows;
    var result = Matrix.zeros(t.length,1);

    for(i=0;i<nL;i++){
        factor = p[i+nL*2][0]*p[i+nL*2][0]/2;
        for(j=0;j<cols;j++){
            result[j][0]+=p[i+nL][0]*Math.exp(-(t[i][0]-p[i][0])*(t[i][0]-p[i][0])/factor);
        }
    }
    return result;
}
/**
 * Single 4 parameter lorentzian function
 * @param t Ordinate values
 * @param p Lorentzian parameters
 * @param c Constant parameters(Not used)
 * @returns {*}
 */
function singleLorentzian(t,p,c){
    var factor = p[1][0]*Math.pow(p[2][0]/2,2);
    var rows = t.rows;
    var result = new Matrix(t.rows, t.columns);
    for(var i=0;i<rows;i++){
        result[i][0]=factor/(Math.pow(t[i][0]-p[0][0],2)+Math.pow(p[2][0]/2,2));
    }
    return result;
}

/**
 * Single 3 parameter gaussian function
 * @param t Ordinate values
 * @param p Gaussian parameters [mean, height, std]
 * @param c Constant parameters(Not used)
 * @returns {*}
 */
function singleGaussian(t,p,c){
    var factor2 = p[2][0]*p[2][0]/2;
    var rows = t.rows;
    var result = new Matrix(t.rows, t.columns);
    for(var i=0;i<rows;i++){
        result[i][0]=p[1][0]*Math.exp(-(t[i][0]-p[0][0])*(t[i][0]-p[0][0])/factor2);
    }
    return result;
}

/**
 * * Fits a set of points to a Lorentzian function. Returns the center of the peak, the width at half height, and the height of the signal.
 * @param data,[y]
 * @returns {*[]}
 */
function optimizeSingleLorentzian(xy, peak, opts) {
    opts = opts || {};
    var xy2 = parseData(xy, opts.percentage||0);

    if(xy2===null||xy2[0].rows<3){
        return null; //Cannot run an optimization with less than 3 points
    }

    var t = xy2[0];
    var y_data = xy2[1];
    var maxY = xy2[2];
    var nbPoints = t.rows, i;

    var weight = [nbPoints / Math.sqrt(y_data.dot(y_data))];

    var opts=Object.create(opts.LMOptions || [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2,    11,    9,        1 ]);
    //var opts = [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2,    11,    9,        1 ];
    var consts = [ ];
    var dt = Math.abs(t[0][0]-t[1][0]);// optional vector of constants
    var dx = new Matrix([[-dt/10000],[-1e-3],[-dt/10000]]);//-Math.abs(t[0][0]-t[1][0])/100;
    var p_init = new Matrix([[peak.x],[1],[peak.width]]);
    var p_min = new Matrix([[peak.x-dt],[0.75],[peak.width/4]]);
    var p_max = new Matrix([[peak.x+dt],[1.25],[peak.width*4]]);

    var p_fit = LM.optimize(singleLorentzian,p_init,t,y_data,weight,dx,p_min,p_max,consts,opts);


    p_fit = p_fit.p;
    return [p_fit[0],[p_fit[1][0]*maxY],p_fit[2]];

}

/**
 * Fits a set of points to a gaussian bell. Returns the mean of the peak, the std and the height of the signal.
 * @param data,[y]
 * @returns {*[]}
 */
function optimizeSingleGaussian(xy, peak, opts) {
    opts = opts || {};
    var xy2 = parseData(xy, opts.percentage||0);

    if(xy2===null||xy2[0].rows<3){
        return null; //Cannot run an optimization with less than 3 points
    }

    var t = xy2[0];
    var y_data = xy2[1];
    var maxY = xy2[2];

    var nbPoints = t.rows, i;



    var weight = [nbPoints / Math.sqrt(y_data.dot(y_data))];

    var opts=Object.create(opts.LMOptions || [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2,    11,    9,        1 ]);
    //var opts = [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2,    11,    9,        1 ];
    var consts = [ ];                         // optional vector of constants
    var dt = Math.abs(t[0][0]-t[1][0]);
    var dx = new Matrix([[-dt/10000],[-1e-3],[-dt/10000]]);//-Math.abs(t[0][0]-t[1][0])/100;

    var dx = new Matrix([[-Math.abs(t[0][0]-t[1][0])/1000],[-1e-3],[-peak.width/1000]]);
    var p_init = new Matrix([[peak.x],[1],[peak.width]]);
    var p_min = new Matrix([[peak.x-dt],[0.75],[peak.width/4]]);
    var p_max = new Matrix([[peak.x+dt],[1.25],[peak.width*4]]);
    //var p_min = new Matrix([[peak.x-peak.width/4],[0.75],[peak.width/3]]);
    //var p_max = new Matrix([[peak.x+peak.width/4],[1.25],[peak.width*3]]);

    var p_fit = LM.optimize(singleGaussian,p_init,t,y_data,weight,dx,p_min,p_max,consts,opts);
    p_fit = p_fit.p;
    return [p_fit[0],[p_fit[1][0]*maxY],p_fit[2]];
}

/*
 peaks on group should sorted
 */
function optimizeLorentzianTrain(xy, group, opts){
    var xy2 = parseData(xy);
    //console.log(xy2[0].rows);
    if(xy2===null||xy2[0].rows<3){
        return null; //Cannot run an optimization with less than 3 points
    }

    var t = xy2[0];
    var y_data = xy2[1];
    var maxY = xy2[2];
    var currentIndex = 0;
    var nbPoints = t.length;
    var nextX;
    var tI, yI, maxY;
    var result=[], current;
    for(var i=0; i<group.length;i++){
        nextX = group[i].x-group[i].width*4;
        //console.log(group[i]);
        while(t[currentIndex++]<nextX&&currentIndex<nbPoints);
        nextX = group[i].x+group[i].width*4;
        tI = [];
        yI = [];
        while(t[currentIndex]<=nextX&&currentIndex<nbPoints){
            tI.push(t[currentIndex][0]);
            yI.push(y_data[currentIndex][0]*maxY);
            currentIndex++;
        }

        current=optimizeSingleLorentzian([tI, yI], group[i], opts);
        if(current){
            result.push({"x":current[0][0],"y":current[1][0],"width":current[2][0],"opt":true});
        }
        else{
            result.push({"x":group[i].x,"y":group[i].y,"width":group[i].width,"opt":false});
        }
    }

    return result;

}

function optimizeGaussianTrain(xy, group, opts){
    var xy2 = parseData(xy);
    //console.log(xy2[0].rows);
    if(xy2===null||xy2[0].rows<3){
        return null; //Cannot run an optimization with less than 3 points
    }

    var t = xy2[0];
    var y_data = xy2[1];
    var maxY = xy2[2];
    var currentIndex = 0;
    var nbPoints = t.length;
    var nextX;
    var tI, yI, maxY;
    var result=[], current;
    for(var i=0; i<group.length;i++){
        nextX = group[i].x-group[i].width*4;
        //console.log(group[i]);
        while(t[currentIndex++]<nextX&&currentIndex<nbPoints);
        nextX = group[i].x+group[i].width*4;
        tI = [];
        yI = [];
        while(t[currentIndex]<=nextX&&currentIndex<nbPoints){
            tI.push(t[currentIndex][0]);
            yI.push(y_data[currentIndex][0]*maxY);
            currentIndex++;
        }

        current=optimizeSingleGaussian([tI, yI], group[i], opts);
        if(current){
            result.push({"x":current[0][0],"y":current[1][0],"width":current[2][0],"opt":true});
        }
        else{
            result.push({"x":group[i].x,"y":group[i].y,"width":group[i].width,"opt":false});
        }
    }

    return result;
}



/**
 *
 * @param xy A two column matrix containing the x and y data to be fitted
 * @param group A set of initial lorentzian parameters to be optimized [center, heigth, half_width_at_half_height]
 * @returns {Array} A set of final lorentzian parameters [center, heigth, hwhh*2]
 */
function optimizeLorentzianSum(xy, group, opts){
    var xy2 = parseData(xy);

    if(xy2===null||xy2[0].rows<3){
        return null; //Cannot run an optimization with less than 3 points
    }

    var t = xy2[0];
    var y_data = xy2[1];
    var maxY = xy2[2];
    var nbPoints = t.rows, i;

    var weight = [nbPoints / math.sqrt(y_data.dot(y_data))];
    var opts=Object.create(opts || [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2, 11, 9, 1 ]);
    var consts = [ ];// optional vector of constants

    var nL = group.length;
    var p_init = new Matrix(nL*3,1);
    var p_min =  new Matrix(nL*3,1);
    var p_max =  new Matrix(nL*3,1);
    var dx = new Matrix(nL*3,1);
    var dt = Math.abs(t[0][0]-t[1][0]);
    for( i=0;i<nL;i++){
        p_init[i][0] = group[i].x;
        p_init[i+nL][0] = 1;
        p_init[i+2*nL][0] = group[i].width;

        p_min[i][0] = group[i].x-dt;//-group[i].width/4;
        p_min[i+nL][0] = 0;
        p_min[i+2*nL][0] = group[i].width/4;

        p_max[i][0] = group[i].x+dt;//+group[i].width/4;
        p_max[i+nL][0] = 1.5;
        p_max[i+2*nL][0] = group[i].width*4;

        dx[i][0] = -dt/1000;
        dx[i+nL][0] = -1e-3;
        dx[i+2*nL][0] = -dt/1000;
    }

    var dx = -Math.abs(t[0][0]-t[1][0])/10000;
    var p_fit = LM.optimize(sumOfLorentzians, p_init, t, y_data, weight, dx, p_min, p_max, consts, opts);
    p_fit=p_fit.p;
    //Put back the result in the correct format
    var result = new Array(nL);
    for( i=0;i<nL;i++){
        result[i]=[p_fit[i],[p_fit[i+nL][0]*maxY],p_fit[i+2*nL]];
    }

    return result;

}

/**
 *
 * @param xy A two column matrix containing the x and y data to be fitted
 * @param group A set of initial lorentzian parameters to be optimized [center, heigth, half_width_at_half_height]
 * @returns {Array} A set of final lorentzian parameters [center, heigth, hwhh*2]
 */
function optimizeGaussianSum(xy, group, opts){
    var xy2 = parseData(xy);

    if(xy2===null||xy2[0].rows<3){
        return null; //Cannot run an optimization with less than 3 points
    }

    var t = xy2[0];
    var y_data = xy2[1];
    var maxY = xy2[2];
    var nbPoints = t.rows,i;

    var weight = new Matrix(nbPoints,1);//[nbPoints / math.sqrt(y_data.dot(y_data))];
    var k = nbPoints / math.sqrt(y_data.dot(y_data));
    for(i=0;i<nbPoints;i++){
        weight[i][0]=k;///(y_data[i][0]);
        //weight[i][0]=k*(2-y_data[i][0]);
    }

    var opts=Object.create(opts || [  3,    100, 1e-3, 1e-3, 1e-3, 1e-2, 1e-2,    11,    9,        2 ]);
    //var opts=[  3,    100, 1e-5, 1e-6, 1e-6, 1e-6, 1e-6,    11,    9,        1 ];
    var consts = [ ];// optional vector of constants

    var nL = group.length;
    var p_init = new Matrix(nL*3,1);
    var p_min =  new Matrix(nL*3,1);
    var p_max =  new Matrix(nL*3,1);
    var dx = new Matrix(nL*3,1);
    var dt = Math.abs(t[0][0]-t[1][0]);
    for( i=0;i<nL;i++){
        p_init[i][0] = group[i].x;
        p_init[i+nL][0] = group[i].y/maxY;
        p_init[i+2*nL][0] = group[i].width;

        p_min[i][0] = group[i].x-dt;
        p_min[i+nL][0] = group[i].y*0.8/maxY;
        p_min[i+2*nL][0] = group[i].width/2;

        p_max[i][0] = group[i].x+dt;
        p_max[i+nL][0] = group[i].y*1.2/maxY;
        p_max[i+2*nL][0] = group[i].width*2;

        dx[i][0] = -dt/1000;
        dx[i+nL][0] = -1e-3;
        dx[i+2*nL][0] = -dt/1000;
    }
    //console.log(t);
    var p_fit = LM.optimize(sumOfLorentzians,p_init,t,y_data,weight,dx,p_min,p_max,consts,opts);
    p_fit = p_fit.p;
    //Put back the result in the correct format
    var result = new Array(nL);
    for( i=0;i<nL;i++){
        result[i]=[p_fit[i],[p_fit[i+nL][0]*maxY],p_fit[i+2*nL]];
    }

    return result;

}
/**
 *
 * Converts the given input to the required x, y column matrices. y data is normalized to max(y)=1
 * @param xy
 * @returns {*[]}
 */
function parseData(xy, threshold){
    var nbSeries = xy.length;
    var t = null;
    var y_data = null, x,y;
    var maxY = 0, i,j;

    if(nbSeries==2){
        //Looks like row wise matrix [x,y]
        var nbPoints = xy[0].length;
        //if(nbPoints<3)
        //    throw new Exception(nbPoints);
        //else{
        t = new Array(nbPoints);//new Matrix(nbPoints,1);
        y_data = new Array(nbPoints);//new Matrix(nbPoints,1);
        x = xy[0];
        y = xy[1];
        if(typeof x[0] === "number"){
            for(i=0;i<nbPoints;i++){
                t[i]=x[i];
                y_data[i]=y[i];
                if(y[i]>maxY)
                    maxY = y[i];
            }
        }
        else{
            //It is a colum matrix
            if(typeof x[0] === "object"){
                for(i=0;i<nbPoints;i++){
                    t[i]=x[i][0];
                    y_data[i]=y[i][0];
                    if(y[i][0]>maxY)
                        maxY = y[i][0];
                }
            }

        }

        //}
    }
    else{
        //Looks like a column wise matrix [[x],[y]]
        var nbPoints = nbSeries;
        //if(nbPoints<3)
        //    throw new SizeException(nbPoints);
        //else {
        t = new Array(nbPoints);//new Matrix(nbPoints, 1);
        y_data = new Array(nbPoints);//new Matrix(nbPoints, 1);
        for (i = 0; i < nbPoints; i++) {
            t[i] = xy[i][0];
            y_data[i] = xy[i][1];
            if(y_data[i]>maxY)
                maxY = y_data[i];
        }
        //}
    }
    for (i = 0; i < nbPoints; i++) {
        y_data[i]/=maxY;
    }
    if(threshold){
        for (i = nbPoints-1; i >=0; i--) {
            if(y_data[i]<threshold) {
                y_data.splice(i,1);
                t.splice(i,1);
            }
        }
    }
    if(t.length>0)
        return [(new Matrix([t])).transpose(),(new Matrix([y_data])).transpose(),maxY];
    return null;
}

function sizeException(nbPoints) {
    return new RangeError("Not enough points to perform the optimization: "+nbPoints +"< 3");
}

module.exports.optimizeSingleLorentzian = optimizeSingleLorentzian;
module.exports.optimizeLorentzianSum = optimizeLorentzianSum;
module.exports.optimizeSingleGaussian = optimizeSingleGaussian;
module.exports.optimizeGaussianSum = optimizeGaussianSum;
module.exports.singleGaussian = singleGaussian;
module.exports.singleLorentzian = singleLorentzian;
module.exports.optimizeGaussianTrain = optimizeGaussianTrain;
module.exports.optimizeLorentzianTrain = optimizeLorentzianTrain;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(2).Matrix;

// https://github.com/lutzroeder/Mapack/blob/master/Source/CholeskyDecomposition.cs
function CholeskyDecomposition(value) {
    if (!(this instanceof CholeskyDecomposition)) {
        return new CholeskyDecomposition(value);
    }
    value = Matrix.checkMatrix(value);
    if (!value.isSymmetric()) {
        throw new Error('Matrix is not symmetric');
    }

    var a = value,
        dimension = a.rows,
        l = new Matrix(dimension, dimension),
        positiveDefinite = true,
        i, j, k;

    for (j = 0; j < dimension; j++) {
        var Lrowj = l[j];
        var d = 0;
        for (k = 0; k < j; k++) {
            var Lrowk = l[k];
            var s = 0;
            for (i = 0; i < k; i++) {
                s += Lrowk[i] * Lrowj[i];
            }
            Lrowj[k] = s = (a[j][k] - s) / l[k][k];
            d = d + s * s;
        }

        d = a[j][j] - d;

        positiveDefinite &= (d > 0);
        l[j][j] = Math.sqrt(Math.max(d, 0));
        for (k = j + 1; k < dimension; k++) {
            l[j][k] = 0;
        }
    }

    if (!positiveDefinite) {
        throw new Error('Matrix is not positive definite');
    }

    this.L = l;
}

CholeskyDecomposition.prototype = {
    get lowerTriangularMatrix() {
        return this.L;
    },
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var l = this.L,
            dimension = l.rows;

        if (value.rows !== dimension) {
            throw new Error('Matrix dimensions do not match');
        }

        var count = value.columns,
            B = value.clone(),
            i, j, k;

        for (k = 0; k < dimension; k++) {
            for (j = 0; j < count; j++) {
                for (i = 0; i < k; i++) {
                    B[k][j] -= B[i][j] * l[k][i];
                }
                B[k][j] /= l[k][k];
            }
        }

        for (k = dimension - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                for (i = k + 1; i < dimension; i++) {
                    B[k][j] -= B[i][j] * l[i][k];
                }
                B[k][j] /= l[k][k];
            }
        }

        return B;
    }
};

module.exports = CholeskyDecomposition;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(2).Matrix;
const util = __webpack_require__(47);
const hypotenuse = util.hypotenuse;
const getFilled2DArray = util.getFilled2DArray;

const defaultOptions = {
    assumeSymmetric: false
};

// https://github.com/lutzroeder/Mapack/blob/master/Source/EigenvalueDecomposition.cs
function EigenvalueDecomposition(matrix, options) {
    options = Object.assign({}, defaultOptions, options);
    if (!(this instanceof EigenvalueDecomposition)) {
        return new EigenvalueDecomposition(matrix, options);
    }
    matrix = Matrix.checkMatrix(matrix);
    if (!matrix.isSquare()) {
        throw new Error('Matrix is not a square matrix');
    }

    var n = matrix.columns,
        V = getFilled2DArray(n, n, 0),
        d = new Array(n),
        e = new Array(n),
        value = matrix,
        i, j;

    var isSymmetric = false;
    if (options.assumeSymmetric) {
        isSymmetric = true;
    } else {
        isSymmetric = matrix.isSymmetric();
    }

    if (isSymmetric) {
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                V[i][j] = value.get(i, j);
            }
        }
        tred2(n, e, d, V);
        tql2(n, e, d, V);
    } else {
        var H = getFilled2DArray(n, n, 0),
            ort = new Array(n);
        for (j = 0; j < n; j++) {
            for (i = 0; i < n; i++) {
                H[i][j] = value.get(i, j);
            }
        }
        orthes(n, H, ort, V);
        hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
}

EigenvalueDecomposition.prototype = {
    get realEigenvalues() {
        return this.d;
    },
    get imaginaryEigenvalues() {
        return this.e;
    },
    get eigenvectorMatrix() {
        if (!Matrix.isMatrix(this.V)) {
            this.V = new Matrix(this.V);
        }
        return this.V;
    },
    get diagonalMatrix() {
        var n = this.n,
            e = this.e,
            d = this.d,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                X[i][j] = 0;
            }
            X[i][i] = d[i];
            if (e[i] > 0) {
                X[i][i + 1] = e[i];
            } else if (e[i] < 0) {
                X[i][i - 1] = e[i];
            }
        }
        return X;
    }
};

function tred2(n, e, d, V) {

    var f, g, h, i, j, k,
        hh, scale;

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
    }

    for (i = n - 1; i > 0; i--) {
        scale = 0;
        h = 0;
        for (k = 0; k < i; k++) {
            scale = scale + Math.abs(d[k]);
        }

        if (scale === 0) {
            e[i] = d[i - 1];
            for (j = 0; j < i; j++) {
                d[j] = V[i - 1][j];
                V[i][j] = 0;
                V[j][i] = 0;
            }
        } else {
            for (k = 0; k < i; k++) {
                d[k] /= scale;
                h += d[k] * d[k];
            }

            f = d[i - 1];
            g = Math.sqrt(h);
            if (f > 0) {
                g = -g;
            }

            e[i] = scale * g;
            h = h - f * g;
            d[i - 1] = f - g;
            for (j = 0; j < i; j++) {
                e[j] = 0;
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                V[j][i] = f;
                g = e[j] + V[j][j] * f;
                for (k = j + 1; k <= i - 1; k++) {
                    g += V[k][j] * d[k];
                    e[k] += V[k][j] * f;
                }
                e[j] = g;
            }

            f = 0;
            for (j = 0; j < i; j++) {
                e[j] /= h;
                f += e[j] * d[j];
            }

            hh = f / (h + h);
            for (j = 0; j < i; j++) {
                e[j] -= hh * d[j];
            }

            for (j = 0; j < i; j++) {
                f = d[j];
                g = e[j];
                for (k = j; k <= i - 1; k++) {
                    V[k][j] -= (f * e[k] + g * d[k]);
                }
                d[j] = V[i - 1][j];
                V[i][j] = 0;
            }
        }
        d[i] = h;
    }

    for (i = 0; i < n - 1; i++) {
        V[n - 1][i] = V[i][i];
        V[i][i] = 1;
        h = d[i + 1];
        if (h !== 0) {
            for (k = 0; k <= i; k++) {
                d[k] = V[k][i + 1] / h;
            }

            for (j = 0; j <= i; j++) {
                g = 0;
                for (k = 0; k <= i; k++) {
                    g += V[k][i + 1] * V[k][j];
                }
                for (k = 0; k <= i; k++) {
                    V[k][j] -= g * d[k];
                }
            }
        }

        for (k = 0; k <= i; k++) {
            V[k][i + 1] = 0;
        }
    }

    for (j = 0; j < n; j++) {
        d[j] = V[n - 1][j];
        V[n - 1][j] = 0;
    }

    V[n - 1][n - 1] = 1;
    e[0] = 0;
}

function tql2(n, e, d, V) {

    var g, h, i, j, k, l, m, p, r,
        dl1, c, c2, c3, el1, s, s2,
        iter;

    for (i = 1; i < n; i++) {
        e[i - 1] = e[i];
    }

    e[n - 1] = 0;

    var f = 0,
        tst1 = 0,
        eps = Math.pow(2, -52);

    for (l = 0; l < n; l++) {
        tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
        m = l;
        while (m < n) {
            if (Math.abs(e[m]) <= eps * tst1) {
                break;
            }
            m++;
        }

        if (m > l) {
            iter = 0;
            do {
                iter = iter + 1;

                g = d[l];
                p = (d[l + 1] - g) / (2 * e[l]);
                r = hypotenuse(p, 1);
                if (p < 0) {
                    r = -r;
                }

                d[l] = e[l] / (p + r);
                d[l + 1] = e[l] * (p + r);
                dl1 = d[l + 1];
                h = g - d[l];
                for (i = l + 2; i < n; i++) {
                    d[i] -= h;
                }

                f = f + h;

                p = d[m];
                c = 1;
                c2 = c;
                c3 = c;
                el1 = e[l + 1];
                s = 0;
                s2 = 0;
                for (i = m - 1; i >= l; i--) {
                    c3 = c2;
                    c2 = c;
                    s2 = s;
                    g = c * e[i];
                    h = c * p;
                    r = hypotenuse(p, e[i]);
                    e[i + 1] = s * r;
                    s = e[i] / r;
                    c = p / r;
                    p = c * d[i] - s * g;
                    d[i + 1] = h + s * (c * g + s * d[i]);

                    for (k = 0; k < n; k++) {
                        h = V[k][i + 1];
                        V[k][i + 1] = s * V[k][i] + c * h;
                        V[k][i] = c * V[k][i] - s * h;
                    }
                }

                p = -s * s2 * c3 * el1 * e[l] / dl1;
                e[l] = s * p;
                d[l] = c * p;

            }
            while (Math.abs(e[l]) > eps * tst1);
        }
        d[l] = d[l] + f;
        e[l] = 0;
    }

    for (i = 0; i < n - 1; i++) {
        k = i;
        p = d[i];
        for (j = i + 1; j < n; j++) {
            if (d[j] < p) {
                k = j;
                p = d[j];
            }
        }

        if (k !== i) {
            d[k] = d[i];
            d[i] = p;
            for (j = 0; j < n; j++) {
                p = V[j][i];
                V[j][i] = V[j][k];
                V[j][k] = p;
            }
        }
    }
}

function orthes(n, H, ort, V) {

    var low = 0,
        high = n - 1,
        f, g, h, i, j, m,
        scale;

    for (m = low + 1; m <= high - 1; m++) {
        scale = 0;
        for (i = m; i <= high; i++) {
            scale = scale + Math.abs(H[i][m - 1]);
        }

        if (scale !== 0) {
            h = 0;
            for (i = high; i >= m; i--) {
                ort[i] = H[i][m - 1] / scale;
                h += ort[i] * ort[i];
            }

            g = Math.sqrt(h);
            if (ort[m] > 0) {
                g = -g;
            }

            h = h - ort[m] * g;
            ort[m] = ort[m] - g;

            for (j = m; j < n; j++) {
                f = 0;
                for (i = high; i >= m; i--) {
                    f += ort[i] * H[i][j];
                }

                f = f / h;
                for (i = m; i <= high; i++) {
                    H[i][j] -= f * ort[i];
                }
            }

            for (i = 0; i <= high; i++) {
                f = 0;
                for (j = high; j >= m; j--) {
                    f += ort[j] * H[i][j];
                }

                f = f / h;
                for (j = m; j <= high; j++) {
                    H[i][j] -= f * ort[j];
                }
            }

            ort[m] = scale * ort[m];
            H[m][m - 1] = scale * g;
        }
    }

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            V[i][j] = (i === j ? 1 : 0);
        }
    }

    for (m = high - 1; m >= low + 1; m--) {
        if (H[m][m - 1] !== 0) {
            for (i = m + 1; i <= high; i++) {
                ort[i] = H[i][m - 1];
            }

            for (j = m; j <= high; j++) {
                g = 0;
                for (i = m; i <= high; i++) {
                    g += ort[i] * V[i][j];
                }

                g = (g / ort[m]) / H[m][m - 1];
                for (i = m; i <= high; i++) {
                    V[i][j] += g * ort[i];
                }
            }
        }
    }
}

function hqr2(nn, e, d, V, H) {
    var n = nn - 1,
        low = 0,
        high = nn - 1,
        eps = Math.pow(2, -52),
        exshift = 0,
        norm = 0,
        p = 0,
        q = 0,
        r = 0,
        s = 0,
        z = 0,
        iter = 0,
        i, j, k, l, m, t, w, x, y,
        ra, sa, vr, vi,
        notlast, cdivres;

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            d[i] = H[i][i];
            e[i] = 0;
        }

        for (j = Math.max(i - 1, 0); j < nn; j++) {
            norm = norm + Math.abs(H[i][j]);
        }
    }

    while (n >= low) {
        l = n;
        while (l > low) {
            s = Math.abs(H[l - 1][l - 1]) + Math.abs(H[l][l]);
            if (s === 0) {
                s = norm;
            }
            if (Math.abs(H[l][l - 1]) < eps * s) {
                break;
            }
            l--;
        }

        if (l === n) {
            H[n][n] = H[n][n] + exshift;
            d[n] = H[n][n];
            e[n] = 0;
            n--;
            iter = 0;
        } else if (l === n - 1) {
            w = H[n][n - 1] * H[n - 1][n];
            p = (H[n - 1][n - 1] - H[n][n]) / 2;
            q = p * p + w;
            z = Math.sqrt(Math.abs(q));
            H[n][n] = H[n][n] + exshift;
            H[n - 1][n - 1] = H[n - 1][n - 1] + exshift;
            x = H[n][n];

            if (q >= 0) {
                z = (p >= 0) ? (p + z) : (p - z);
                d[n - 1] = x + z;
                d[n] = d[n - 1];
                if (z !== 0) {
                    d[n] = x - w / z;
                }
                e[n - 1] = 0;
                e[n] = 0;
                x = H[n][n - 1];
                s = Math.abs(x) + Math.abs(z);
                p = x / s;
                q = z / s;
                r = Math.sqrt(p * p + q * q);
                p = p / r;
                q = q / r;

                for (j = n - 1; j < nn; j++) {
                    z = H[n - 1][j];
                    H[n - 1][j] = q * z + p * H[n][j];
                    H[n][j] = q * H[n][j] - p * z;
                }

                for (i = 0; i <= n; i++) {
                    z = H[i][n - 1];
                    H[i][n - 1] = q * z + p * H[i][n];
                    H[i][n] = q * H[i][n] - p * z;
                }

                for (i = low; i <= high; i++) {
                    z = V[i][n - 1];
                    V[i][n - 1] = q * z + p * V[i][n];
                    V[i][n] = q * V[i][n] - p * z;
                }
            } else {
                d[n - 1] = x + p;
                d[n] = x + p;
                e[n - 1] = z;
                e[n] = -z;
            }

            n = n - 2;
            iter = 0;
        } else {
            x = H[n][n];
            y = 0;
            w = 0;
            if (l < n) {
                y = H[n - 1][n - 1];
                w = H[n][n - 1] * H[n - 1][n];
            }

            if (iter === 10) {
                exshift += x;
                for (i = low; i <= n; i++) {
                    H[i][i] -= x;
                }
                s = Math.abs(H[n][n - 1]) + Math.abs(H[n - 1][n - 2]);
                x = y = 0.75 * s;
                w = -0.4375 * s * s;
            }

            if (iter === 30) {
                s = (y - x) / 2;
                s = s * s + w;
                if (s > 0) {
                    s = Math.sqrt(s);
                    if (y < x) {
                        s = -s;
                    }
                    s = x - w / ((y - x) / 2 + s);
                    for (i = low; i <= n; i++) {
                        H[i][i] -= s;
                    }
                    exshift += s;
                    x = y = w = 0.964;
                }
            }

            iter = iter + 1;

            m = n - 2;
            while (m >= l) {
                z = H[m][m];
                r = x - z;
                s = y - z;
                p = (r * s - w) / H[m + 1][m] + H[m][m + 1];
                q = H[m + 1][m + 1] - z - r - s;
                r = H[m + 2][m + 1];
                s = Math.abs(p) + Math.abs(q) + Math.abs(r);
                p = p / s;
                q = q / s;
                r = r / s;
                if (m === l) {
                    break;
                }
                if (Math.abs(H[m][m - 1]) * (Math.abs(q) + Math.abs(r)) < eps * (Math.abs(p) * (Math.abs(H[m - 1][m - 1]) + Math.abs(z) + Math.abs(H[m + 1][m + 1])))) {
                    break;
                }
                m--;
            }

            for (i = m + 2; i <= n; i++) {
                H[i][i - 2] = 0;
                if (i > m + 2) {
                    H[i][i - 3] = 0;
                }
            }

            for (k = m; k <= n - 1; k++) {
                notlast = (k !== n - 1);
                if (k !== m) {
                    p = H[k][k - 1];
                    q = H[k + 1][k - 1];
                    r = (notlast ? H[k + 2][k - 1] : 0);
                    x = Math.abs(p) + Math.abs(q) + Math.abs(r);
                    if (x !== 0) {
                        p = p / x;
                        q = q / x;
                        r = r / x;
                    }
                }

                if (x === 0) {
                    break;
                }

                s = Math.sqrt(p * p + q * q + r * r);
                if (p < 0) {
                    s = -s;
                }

                if (s !== 0) {
                    if (k !== m) {
                        H[k][k - 1] = -s * x;
                    } else if (l !== m) {
                        H[k][k - 1] = -H[k][k - 1];
                    }

                    p = p + s;
                    x = p / s;
                    y = q / s;
                    z = r / s;
                    q = q / p;
                    r = r / p;

                    for (j = k; j < nn; j++) {
                        p = H[k][j] + q * H[k + 1][j];
                        if (notlast) {
                            p = p + r * H[k + 2][j];
                            H[k + 2][j] = H[k + 2][j] - p * z;
                        }

                        H[k][j] = H[k][j] - p * x;
                        H[k + 1][j] = H[k + 1][j] - p * y;
                    }

                    for (i = 0; i <= Math.min(n, k + 3); i++) {
                        p = x * H[i][k] + y * H[i][k + 1];
                        if (notlast) {
                            p = p + z * H[i][k + 2];
                            H[i][k + 2] = H[i][k + 2] - p * r;
                        }

                        H[i][k] = H[i][k] - p;
                        H[i][k + 1] = H[i][k + 1] - p * q;
                    }

                    for (i = low; i <= high; i++) {
                        p = x * V[i][k] + y * V[i][k + 1];
                        if (notlast) {
                            p = p + z * V[i][k + 2];
                            V[i][k + 2] = V[i][k + 2] - p * r;
                        }

                        V[i][k] = V[i][k] - p;
                        V[i][k + 1] = V[i][k + 1] - p * q;
                    }
                }
            }
        }
    }

    if (norm === 0) {
        return;
    }

    for (n = nn - 1; n >= 0; n--) {
        p = d[n];
        q = e[n];

        if (q === 0) {
            l = n;
            H[n][n] = 1;
            for (i = n - 1; i >= 0; i--) {
                w = H[i][i] - p;
                r = 0;
                for (j = l; j <= n; j++) {
                    r = r + H[i][j] * H[j][n];
                }

                if (e[i] < 0) {
                    z = w;
                    s = r;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        H[i][n] = (w !== 0) ? (-r / w) : (-r / (eps * norm));
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
                        t = (x * s - z * r) / q;
                        H[i][n] = t;
                        H[i + 1][n] = (Math.abs(x) > Math.abs(z)) ? ((-r - w * t) / x) : ((-s - y * t) / z);
                    }

                    t = Math.abs(H[i][n]);
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        } else if (q < 0) {
            l = n - 1;

            if (Math.abs(H[n][n - 1]) > Math.abs(H[n - 1][n])) {
                H[n - 1][n - 1] = q / H[n][n - 1];
                H[n - 1][n] = -(H[n][n] - p) / H[n][n - 1];
            } else {
                cdivres = cdiv(0, -H[n - 1][n], H[n - 1][n - 1] - p, q);
                H[n - 1][n - 1] = cdivres[0];
                H[n - 1][n] = cdivres[1];
            }

            H[n][n - 1] = 0;
            H[n][n] = 1;
            for (i = n - 2; i >= 0; i--) {
                ra = 0;
                sa = 0;
                for (j = l; j <= n; j++) {
                    ra = ra + H[i][j] * H[j][n - 1];
                    sa = sa + H[i][j] * H[j][n];
                }

                w = H[i][i] - p;

                if (e[i] < 0) {
                    z = w;
                    r = ra;
                    s = sa;
                } else {
                    l = i;
                    if (e[i] === 0) {
                        cdivres = cdiv(-ra, -sa, w, q);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                    } else {
                        x = H[i][i + 1];
                        y = H[i + 1][i];
                        vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
                        vi = (d[i] - p) * 2 * q;
                        if (vr === 0 && vi === 0) {
                            vr = eps * norm * (Math.abs(w) + Math.abs(q) + Math.abs(x) + Math.abs(y) + Math.abs(z));
                        }
                        cdivres = cdiv(x * r - z * ra + q * sa, x * s - z * sa - q * ra, vr, vi);
                        H[i][n - 1] = cdivres[0];
                        H[i][n] = cdivres[1];
                        if (Math.abs(x) > (Math.abs(z) + Math.abs(q))) {
                            H[i + 1][n - 1] = (-ra - w * H[i][n - 1] + q * H[i][n]) / x;
                            H[i + 1][n] = (-sa - w * H[i][n] - q * H[i][n - 1]) / x;
                        } else {
                            cdivres = cdiv(-r - y * H[i][n - 1], -s - y * H[i][n], z, q);
                            H[i + 1][n - 1] = cdivres[0];
                            H[i + 1][n] = cdivres[1];
                        }
                    }

                    t = Math.max(Math.abs(H[i][n - 1]), Math.abs(H[i][n]));
                    if ((eps * t) * t > 1) {
                        for (j = i; j <= n; j++) {
                            H[j][n - 1] = H[j][n - 1] / t;
                            H[j][n] = H[j][n] / t;
                        }
                    }
                }
            }
        }
    }

    for (i = 0; i < nn; i++) {
        if (i < low || i > high) {
            for (j = i; j < nn; j++) {
                V[i][j] = H[i][j];
            }
        }
    }

    for (j = nn - 1; j >= low; j--) {
        for (i = low; i <= high; i++) {
            z = 0;
            for (k = low; k <= Math.min(j, high); k++) {
                z = z + V[i][k] * H[k][j];
            }
            V[i][j] = z;
        }
    }
}

function cdiv(xr, xi, yr, yi) {
    var r, d;
    if (Math.abs(yr) > Math.abs(yi)) {
        r = yi / yr;
        d = yr + r * yi;
        return [(xr + r * xi) / d, (xi - r * xr) / d];
    } else {
        r = yr / yi;
        d = yi + r * yr;
        return [(r * xr + xi) / d, (r * xi - xr) / d];
    }
}

module.exports = EigenvalueDecomposition;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(2).Matrix;
var hypotenuse = __webpack_require__(47).hypotenuse;

//https://github.com/lutzroeder/Mapack/blob/master/Source/QrDecomposition.cs
function QrDecomposition(value) {
    if (!(this instanceof QrDecomposition)) {
        return new QrDecomposition(value);
    }
    value = Matrix.checkMatrix(value);

    var qr = value.clone(),
        m = value.rows,
        n = value.columns,
        rdiag = new Array(n),
        i, j, k, s;

    for (k = 0; k < n; k++) {
        var nrm = 0;
        for (i = k; i < m; i++) {
            nrm = hypotenuse(nrm, qr[i][k]);
        }
        if (nrm !== 0) {
            if (qr[k][k] < 0) {
                nrm = -nrm;
            }
            for (i = k; i < m; i++) {
                qr[i][k] /= nrm;
            }
            qr[k][k] += 1;
            for (j = k + 1; j < n; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * qr[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    qr[i][j] += s * qr[i][k];
                }
            }
        }
        rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
}

QrDecomposition.prototype = {
    solve: function (value) {
        value = Matrix.checkMatrix(value);

        var qr = this.QR,
            m = qr.rows;

        if (value.rows !== m) {
            throw new Error('Matrix row dimensions must agree');
        }
        if (!this.isFullRank()) {
            throw new Error('Matrix is rank deficient');
        }

        var count = value.columns;
        var X = value.clone();
        var n = qr.columns;
        var i, j, k, s;

        for (k = 0; k < n; k++) {
            for (j = 0; j < count; j++) {
                s = 0;
                for (i = k; i < m; i++) {
                    s += qr[i][k] * X[i][j];
                }
                s = -s / qr[k][k];
                for (i = k; i < m; i++) {
                    X[i][j] += s * qr[i][k];
                }
            }
        }
        for (k = n - 1; k >= 0; k--) {
            for (j = 0; j < count; j++) {
                X[k][j] /= this.Rdiag[k];
            }
            for (i = 0; i < k; i++) {
                for (j = 0; j < count; j++) {
                    X[i][j] -= X[k][j] * qr[i][k];
                }
            }
        }

        return X.subMatrix(0, n - 1, 0, count - 1);
    },
    isFullRank: function () {
        var columns = this.QR.columns;
        for (var i = 0; i < columns; i++) {
            if (this.Rdiag[i] === 0) {
                return false;
            }
        }
        return true;
    },
    get upperTriangularMatrix() {
        var qr = this.QR,
            n = qr.columns,
            X = new Matrix(n, n),
            i, j;
        for (i = 0; i < n; i++) {
            for (j = 0; j < n; j++) {
                if (i < j) {
                    X[i][j] = qr[i][j];
                } else if (i === j) {
                    X[i][j] = this.Rdiag[i];
                } else {
                    X[i][j] = 0;
                }
            }
        }
        return X;
    },
    get orthogonalMatrix() {
        var qr = this.QR,
            rows = qr.rows,
            columns = qr.columns,
            X = new Matrix(rows, columns),
            i, j, k, s;

        for (k = columns - 1; k >= 0; k--) {
            for (i = 0; i < rows; i++) {
                X[i][k] = 0;
            }
            X[k][k] = 1;
            for (j = k; j < columns; j++) {
                if (qr[k][k] !== 0) {
                    s = 0;
                    for (i = k; i < rows; i++) {
                        s += qr[i][k] * X[i][j];
                    }

                    s = -s / qr[k][k];

                    for (i = k; i < rows; i++) {
                        X[i][j] += s * qr[i][k];
                    }
                }
            }
        }
        return X;
    }
};

module.exports = QrDecomposition;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Matrix = __webpack_require__(2).Matrix;

var SingularValueDecomposition = __webpack_require__(74);
var EigenvalueDecomposition = __webpack_require__(174);
var LuDecomposition = __webpack_require__(73);
var QrDecomposition = __webpack_require__(175);
var CholeskyDecomposition = __webpack_require__(173);

function inverse(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    return solve(matrix, Matrix.eye(matrix.rows));
}

/**
 * Returns the inverse
 * @memberOf Matrix
 * @static
 * @param {Matrix} matrix
 * @return {Matrix} matrix
 * @alias inv
 */
Matrix.inverse = Matrix.inv = inverse;

/**
 * Returns the inverse
 * @memberOf Matrix
 * @static
 * @param {Matrix} matrix
 * @return {Matrix} matrix
 * @alias inv
 */
Matrix.prototype.inverse = Matrix.prototype.inv = function () {
    return inverse(this);
};

function solve(leftHandSide, rightHandSide) {
    leftHandSide = Matrix.checkMatrix(leftHandSide);
    rightHandSide = Matrix.checkMatrix(rightHandSide);
    return leftHandSide.isSquare() ? new LuDecomposition(leftHandSide).solve(rightHandSide) : new QrDecomposition(leftHandSide).solve(rightHandSide);
}

Matrix.solve = solve;
Matrix.prototype.solve = function (other) {
    return solve(this, other);
};

module.exports = {
    SingularValueDecomposition: SingularValueDecomposition,
    SVD: SingularValueDecomposition,
    EigenvalueDecomposition: EigenvalueDecomposition,
    EVD: EigenvalueDecomposition,
    LuDecomposition: LuDecomposition,
    LU: LuDecomposition,
    QrDecomposition: QrDecomposition,
    QR: QrDecomposition,
    CholeskyDecomposition: CholeskyDecomposition,
    CHO: CholeskyDecomposition,
    inverse: inverse,
    solve: solve
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (!Symbol.species) {
    Symbol.species = Symbol.for('@@species');
}


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(12);

class MatrixColumnView extends BaseView {
    constructor(matrix, column) {
        super(matrix, matrix.rows, 1);
        this.column = column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.column, value);
        return this;
    }

    get(rowIndex) {
        return this.matrix.get(rowIndex, this.column);
    }
}

module.exports = MatrixColumnView;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(12);

class MatrixFlipColumnView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
    }
}

module.exports = MatrixFlipColumnView;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(12);

class MatrixFlipRowView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.rows, matrix.columns);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
    }
}

module.exports = MatrixFlipRowView;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(12);

class MatrixRowView extends BaseView {
    constructor(matrix, row) {
        super(matrix, 1, matrix.columns);
        this.row = row;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.row, columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.row, columnIndex);
    }
}

module.exports = MatrixRowView;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(12);
var util = __webpack_require__(27);

class MatrixSelectionView extends BaseView {
    constructor(matrix, rowIndices, columnIndices) {
        var indices = util.checkIndices(matrix, rowIndices, columnIndices);
        super(matrix, indices.row.length, indices.column.length);
        this.rowIndices = indices.row;
        this.columnIndices = indices.column;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex], value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
    }
}

module.exports = MatrixSelectionView;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(12);
var util = __webpack_require__(27);

class MatrixSubView extends BaseView {
    constructor(matrix, startRow, endRow, startColumn, endColumn) {
        util.checkRange(matrix, startRow, endRow, startColumn, endColumn);
        super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
        this.startRow = startRow;
        this.startColumn = startColumn;
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
    }
}

module.exports = MatrixSubView;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BaseView = __webpack_require__(12);

class MatrixTransposeView extends BaseView {
    constructor(matrix) {
        super(matrix, matrix.columns, matrix.rows);
    }

    set(rowIndex, columnIndex, value) {
        this.matrix.set(columnIndex, rowIndex, value);
        return this;
    }

    get(rowIndex, columnIndex) {
        return this.matrix.get(columnIndex, rowIndex);
    }
}

module.exports = MatrixTransposeView;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.SimpleLinearRegression = exports.SLR = __webpack_require__(49);
exports.NonLinearRegression = exports.NLR = {
    PolynomialRegression: __webpack_require__(75),
    PotentialRegression: __webpack_require__(189),
    ExpRegression: __webpack_require__(186),
    PowerRegression: __webpack_require__(190)
};
exports.KernelRidgeRegression = exports.KRR = __webpack_require__(187);
//exports.MultipleLinearRegression = exports.MLR = require('./regression/multiple-linear-regression');
//exports.MultivariateLinearRegression = exports.MVLR = require('./regression/multivariate-linear-regression');
exports.PolinomialFitting2D = __webpack_require__(188);
exports.TheilSenRegression = __webpack_require__(191);


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Function that calculate the linear fit in the form f(x) = Ce^(A * x) and
 * return the A and C coefficient of the given formula.
 *
 * @param {Vector} X - Vector of the x positions of the points.
 * @param {Vector} Y - Vector of the y positions of the points.
 * @return {Object} coefficients - The A and C coefficients.
 *
 * Created by acastillo on 5/12/16.
 */

const maybeToPrecision = __webpack_require__(17).maybeToPrecision;
const SimpleLinearRegression = __webpack_require__(49);
const BaseRegression = __webpack_require__(5);

class ExpRegression extends BaseRegression {
    /**
     * @constructor
     * @param {Array<number>} x - Independent variable
     * @param {Array<number>} y - Dependent variable
     * @param {object} options
     */
    constructor(x, y, options) {
        super();
        let opt = options || {};
        if (x === true) { // reloading model
            this.A = y.A;
            this.C = y.C;
            if (y.quality) {
                this.quality = y.quality;
            }
        } else {
            var n = x.length;
            if (n !== y.length) {
                throw new RangeError('input and output array have a different length');
            }
            var yl = new Array(n);
            for (var i = 0; i < n; i++) {
                yl[i] = Math.log(y[i]);
            }

            var linear = new SimpleLinearRegression(x, yl, {computeCoefficient: false});
            this.A = linear.slope;
            this.C = Math.exp(linear.intercept);
            if (opt.computeQuality) {
                this.quality = this.modelQuality(x, y);
            }
        }
    }

    _predict(newInputs) {
        return this.C * Math.exp(newInputs * this.A);
    }

    toJSON() {
        var out = {name: 'expRegression', A: this.A, C: this.C};
        if (this.quality) {
            out.quality = this.quality;
        }
        return out;
    }

    toString(precision) {
        return 'f(x) = ' + maybeToPrecision(this.C, precision) + ' * exp(' + maybeToPrecision(this.A, precision) + ' * x)';
    }

    toLaTeX(precision) {
        if (this.A >= 0) {
            return 'f(x) = ' + maybeToPrecision(this.C, precision) + 'e^{' + maybeToPrecision(this.A, precision) + 'x}';
        } else {
            return 'f(x) = \\frac{' + maybeToPrecision(this.C, precision) + '}{e^{' + maybeToPrecision(-this.A, precision) + 'x}}';
        }

    }

    static load(json) {
        if (json.name !== 'expRegression') {
            throw new TypeError('not a exp regression model');
        }
        return new ExpRegression(true, json);
    }
}


module.exports = ExpRegression;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(48);
const Kernel = __webpack_require__(158);

const BaseRegression = __webpack_require__(5);

const defaultOptions = {
    lambda: 0.1,
    kernelType: 'gaussian',
    kernelOptions: {},
    computeCoefficient: false
};

// Implements the Kernel ridge regression algorithm.
// http://www.ics.uci.edu/~welling/classnotes/papers_class/Kernel-Ridge.pdf
class KernelRidgeRegression extends BaseRegression {
    constructor(inputs, outputs, options) {
        super();
        if (inputs === true) { // reloading model
            this.alpha = outputs.alpha;
            this.inputs = outputs.inputs;
            this.kernelType = outputs.kernelType;
            this.kernelOptions = outputs.kernelOptions;
            this.kernel = new Kernel(outputs.kernelType, outputs.kernelOptions);

            if (outputs.quality) {
                this.quality = outputs.quality;
            }
        } else {
            options = Object.assign({}, defaultOptions, options);

            const kernelFunction = new Kernel(options.kernelType, options.kernelOptions);
            const K = kernelFunction.compute(inputs);
            const n = inputs.length;
            K.add(Matrix.eye(n, n).mul(options.lambda));

            this.alpha = K.solve(outputs);
            this.inputs = inputs;
            this.kernelType = options.kernelType;
            this.kernelOptions = options.kernelOptions;
            this.kernel = kernelFunction;

            if (options.computeQuality) {
                this.quality = this.modelQuality(inputs, outputs);
            }
        }
    }

    _predict(newInputs) {
        return this.kernel.compute([newInputs], this.inputs).mmul(this.alpha)[0];
    }

    toJSON() {
        var out = {
            name: 'kernelRidgeRegression',
            alpha: this.alpha,
            inputs: this.inputs,
            kernelType: this.kernelType,
            kernelOptions: this.kernelOptions
        };
        if (this.quality) {
            out.quality = this.quality;
        }
        return out;
    }

    static load(json) {
        if (json.name !== 'kernelRidgeRegression') {
            throw new TypeError('not a KRR model');
        }
        return new KernelRidgeRegression(true, json);
    }
}

module.exports = KernelRidgeRegression;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Matrix = __webpack_require__(48);
const SVD = Matrix.DC.SingularValueDecomposition;
const BaseRegression = __webpack_require__(5);

const defaultOptions = {
    order: 2
};
// Implements the Kernel ridge regression algorithm.
// http://www.ics.uci.edu/~welling/classnotes/papers_class/Kernel-Ridge.pdf
class PolynomialFitRegression2D extends BaseRegression {
    /**
     * Constructor for the 2D polynomial fitting
     *
     * @param inputs
     * @param outputs
     * @param options
     * @constructor
     */
    constructor(inputs, outputs, options) {
        super();
        if (inputs === true) { // reloading model
            this.coefficients = Matrix.columnVector(outputs.coefficients);
            this.order = outputs.order;
            if (outputs.r) {
                this.r = outputs.r;
                this.r2 = outputs.r2;
            }
            if (outputs.chi2) {
                this.chi2 = outputs.chi2;
            }
        } else {
            options = Object.assign({}, defaultOptions, options);
            this.order = options.order;
            this.coefficients = [];
            this.X = inputs;
            this.y = outputs;

            this.train(this.X, this.y, options);

            if (options.computeQuality) {
                this.quality = this.modelQuality(inputs, outputs);
            }
        }
    }

    /**
     * Function that fits the model given the data(X) and predictions(y).
     * The third argument is an object with the following options:
     * * order: order of the polynomial to fit.
     *
     * @param {Matrix} X - A matrix with n rows and 2 columns.
     * @param {Matrix} y - A vector of the prediction values.
     */
    train(X, y) {
        if (!Matrix.isMatrix(X)) X = new Matrix(X);
        if (!Matrix.isMatrix(y)) y = Matrix.columnVector(y);

        //Perhaps y is transpose
        if (y.rows !== X.rows) {
            y = y.transpose();
        }

        if (X.columns !== 2) {
            throw new RangeError('You give X with ' + X.columns + ' columns and it must be 2');
        }
        if (X.rows !== y.rows) {
            throw new RangeError('X and y must have the same rows');
        }

        var examples = X.rows;
        var coefficients = ((this.order + 2) * (this.order + 1)) / 2;
        this.coefficients = new Array(coefficients);

        var x1 = X.getColumnVector(0);
        var x2 = X.getColumnVector(1);

        var scaleX1 = 1.0 / x1.clone().apply(abs).max();
        var scaleX2 = 1.0 / x2.clone().apply(abs).max();
        var scaleY = 1.0 / y.clone().apply(abs).max();

        x1.mulColumn(0, scaleX1);
        x2.mulColumn(0, scaleX2);
        y.mulColumn(0, scaleY);

        var A = new Matrix(examples, coefficients);
        var col = 0;

        for (var i = 0; i <= this.order; ++i) {
            var limit = this.order - i;
            for (var j = 0; j <= limit; ++j) {
                var result = powColVector(x1, i).mulColumnVector(powColVector(x2, j));
                A.setColumn(col, result);
                col++;
            }
        }

        var svd = new SVD(A.transpose(), {
            computeLeftSingularVectors: true,
            computeRightSingularVectors: true,
            autoTranspose: false
        });

        var qqs = Matrix.rowVector(svd.diagonal);
        qqs = qqs.apply(function (i, j) {
            if (this[i][j] >= 1e-15) this[i][j] = 1 / this[i][j];
            else this[i][j] = 0;
        });

        var qqs1 = Matrix.zeros(examples, coefficients);
        for (i = 0; i < coefficients; ++i) {
            qqs1[i][i] = qqs[0][i];
        }

        qqs = qqs1;

        var U = svd.rightSingularVectors;
        var V = svd.leftSingularVectors;

        this.coefficients = V.mmul(qqs.transpose()).mmul(U.transpose()).mmul(y);

        col = 0;

        for (i = 0; i <= coefficients; ++i) {
            limit = this.order - i;
            for (j = 0; j <= limit; ++j) {
                this.coefficients[col][0] = (this.coefficients[col][0] * Math.pow(scaleX1, i) * Math.pow(scaleX2, j)) / scaleY;
                col++;
            }
        }
    }

    _predict(newInputs) {
        var x1 = newInputs[0];
        var x2 = newInputs[1];

        var y = 0;
        var column = 0;

        for (var i = 0; i <= this.order; i++) {
            for (var j = 0; j <= this.order - i; j++) {
                y += Math.pow(x1, i) * (Math.pow(x2, j)) * this.coefficients[column][0];
                column++;
            }
        }

        return y;
    }

    toJSON() {
        var out = {
            name: 'polyfit2D',
            order: this.order,
            coefficients: this.coefficients
        };
        if (this.quality) {
            out.quality = this.quality;
        }
        return out;
    }

    static load(json) {
        if (json.name !== 'polyfit2D') {
            throw new TypeError('not a polyfit2D model');
        }
        return new PolynomialFitRegression2D(true, json);
    }

}

module.exports = PolynomialFitRegression2D;


/**
 * Function that given a column vector return this: vector^power
 *
 * @param x - Column vector.
 * @param power - Pow number.
 * @return {Suite|Matrix}
 */
function powColVector(x, power) {
    var result = x.clone();
    for (var i = 0; i < x.rows; ++i) {
        result[i][0] = Math.pow(result[i][0], power);
    }
    return result;
}

/**
 * Function to use in the apply method to get the absolute value
 * of each element of the matrix
 *
 * @param i - current row.
 * @param j - current column.
 */
function abs(i, j) {
    this[i][j] = Math.abs(this[i][j]);
}


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Function that calculate the potential fit in the form f(x) = A*x^M
 * with a given M and return de A coefficient.
 *
 * @param {Vector} X - Vector of the x positions of the points.
 * @param {Vector} Y - Vector of the x positions of the points.
 * @param {Number, BigNumber} M - The exponent of the potential fit.
 * @return {Number|BigNumber} A - The A coefficient of the potential fit.
 * Created by acastillo on 5/12/16.
 */

const maybeToPrecision = __webpack_require__(17).maybeToPrecision;
const PolynomialRegression = __webpack_require__(75);
// const PowerRegression = require('./power-regression');
const BaseRegression = __webpack_require__(5);

class PotentialRegression extends BaseRegression {
    /**
     * @constructor
     * @param x: Independent variable
     * @param y: Dependent variable
     * @param M
     * @param options
     */
    constructor(x, y, M, options) {
        super();
        let opt = options || {};
        if (x === true) { // reloading model
            this.A = y.A;
            this.M = y.M;
            if (y.quality) {
                this.quality = y.quality;
            }
        } else {
            var n = x.length;
            if (n !== y.length) {
                throw new RangeError('input and output array have a different length');
            }

            var linear = new PolynomialRegression(x, y, [M], {computeCoefficient: true});
            this.A = linear.coefficients[0];
            this.M = M;
            if (opt.computeQuality) {
                this.quality = this.modelQuality(x, y);
            }
        }
    }

    _predict(x) {
        return this.A * Math.pow(x, this.M);
    }

    toJSON() {
        var out = {name: 'potentialRegression', A: this.A, M: this.M};
        if (this.quality) {
            out.quality = this.quality;
        }
        return out;
    }

    toString(precision) {
        return 'f(x) = ' + maybeToPrecision(this.A, precision) + ' * x^' + this.M;
    }

    toLaTeX(precision) {

        if (this.M >= 0) {
            return 'f(x) = ' + maybeToPrecision(this.A, precision) + 'x^{' + this.M + '}';
        } else {
            return 'f(x) = \\frac{' + maybeToPrecision(this.A, precision) + '}{x^{' + (-this.M) + '}}';
        }
    }

    static load(json) {
        if (json.name !== 'potentialRegression') {
            throw new TypeError('not a potential regression model');
        }
        return new PotentialRegression(true, json);
    }
}

module.exports = PotentialRegression;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This class implements the power regression f(x)=A*x^B
 * Created by acastillo on 5/12/16.
 */

const maybeToPrecision = __webpack_require__(17).maybeToPrecision;
const SimpleLinearRegression = __webpack_require__(49);
const BaseRegression = __webpack_require__(5);

class PowerRegression extends BaseRegression {
    /**
     * @constructor
     * @param x: Independent variable
     * @param y: Dependent variable
     * @param options
     */
    constructor(x, y, options) {
        super();
        let opt = options || {};
        if (x === true) { // reloading model
            this.A = y.A;
            this.B = y.B;
            this.quality = y.quality || {};
            if (y.quality.r) {
                this.quality.r = y.quality.r;
                this.quality.r2 = y.quality.r2;
            }
            if (y.quality.chi2) {
                this.quality.chi2 = y.quality.chi2;
            }
        } else {
            var n = x.length;
            if (n !== y.length) {
                throw new RangeError('input and output array have a different length');
            }
            var xl = new Array(n), yl = new Array(n);
            for (var i = 0; i < n; i++) {
                xl[i] = Math.log(x[i]);
                yl[i] = Math.log(y[i]);
            }

            var linear = new SimpleLinearRegression(xl, yl, {computeCoefficient: false});
            this.A = Math.exp(linear.intercept);
            this.B = linear.slope;
            if (opt.computeQuality) {
                this.quality = this.modelQuality(x, y);
            }
        }
    }

    _predict(newInputs) {
        return this.A * Math.pow(newInputs, this.B);
    }

    toJSON() {
        var out = {name: 'powerRegression', A: this.A, B: this.B};
        if (this.quality) {
            out.quality = this.quality;
        }
        return out;
    }

    toString(precision) {
        return 'f(x) = ' + maybeToPrecision(this.A, precision) + ' * x^' + maybeToPrecision(this.B, precision);
    }

    toLaTeX(precision) {
        if (this.B >= 0) {
            return 'f(x) = ' + maybeToPrecision(this.A, precision) + 'x^{' + maybeToPrecision(this.B, precision) + '}';
        } else {
            return 'f(x) = \\frac{' + maybeToPrecision(this.A, precision) + '}{x^{' + maybeToPrecision(-this.B, precision) + '}}';
        }
    }

    static load(json) {
        if (json.name !== 'powerRegression') {
            throw new TypeError('not a power regression model');
        }
        return new PowerRegression(true, json);
    }
}

module.exports = PowerRegression;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const BaseRegression = __webpack_require__(5);
const maybeToPrecision = __webpack_require__(17).maybeToPrecision;
const median = __webpack_require__(50).median;

class TheilSenRegression extends BaseRegression {

    /**
     * Theil–Sen estimator
     * https://en.wikipedia.org/wiki/Theil%E2%80%93Sen_estimator
     * @param {Array<number>} x
     * @param {Array<number>} y
     * @param {object} options
     * @constructor
     */
    constructor(x, y, options) {
        options = options || {};
        super();
        if (x === true) {
            // loads the model
            this.slope = y.slope;
            this.intercept = y.intercept;
            this.quality = Object.assign({}, y.quality, this.quality);
        } else {
            // creates the model
            let len = x.length;
            if (len !== y.length) {
                throw new RangeError('Input and output array have a different length');
            }

            let slopes = new Array(len * len);
            let count = 0;
            for (let i = 0; i < len; ++i) {
                for (let j =  i + 1; j < len; ++j) {
                    if (x[i] !== x[j]) {
                        slopes[count++] = (y[j] - y[i]) / (x[j] - x[i]);
                    }
                }
            }
            slopes.length = count;
            let medianSlope = median(slopes);

            let cuts = new Array(len);
            for (let i = 0; i < len; ++i) {
                cuts[i] = y[i] - medianSlope * x[i];
            }

            this.slope = medianSlope;
            this.intercept = median(cuts);
            this.coefficients = [this.intercept, this.slope];
            if (options.computeQuality) {
                this.quality = this.modelQuality(x, y);
            }
        }

    }

    toJSON() {
        var out = {
            name: 'TheilSenRegression',
            slope: this.slope,
            intercept: this.intercept
        };
        if (this.quality) {
            out.quality = this.quality;
        }

        return out;
    }

    _predict(input) {
        return this.slope * input + this.intercept;
    }

    computeX(input) {
        return (input - this.intercept) / this.slope;
    }

    toString(precision) {
        var result = 'f(x) = ';
        if (this.slope) {
            var xFactor = maybeToPrecision(this.slope, precision);
            result += (Math.abs(xFactor - 1) < 1e-5 ? '' : xFactor + ' * ') + 'x';
            if (this.intercept) {
                var absIntercept = Math.abs(this.intercept);
                var operator = absIntercept === this.intercept ? '+' : '-';
                result += ' ' + operator + ' ' + maybeToPrecision(absIntercept, precision);
            }
        } else {
            result += maybeToPrecision(this.intercept, precision);
        }
        return result;
    }

    toLaTeX(precision) {
        return this.toString(precision);
    }

    static load(json) {
        if (json.name !== 'TheilSenRegression') {
            throw new TypeError('not a Theil-Sen model');
        }
        return new TheilSenRegression(true, json);
    }
}

module.exports = TheilSenRegression;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.array = __webpack_require__(76);
exports.matrix = __webpack_require__(193);


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var arrayStat = __webpack_require__(76);

// https://github.com/accord-net/framework/blob/development/Sources/Accord.Statistics/Tools.cs

function entropy(matrix, eps) {
    if (typeof(eps) === 'undefined') {
        eps = 0;
    }
    var sum = 0,
        l1 = matrix.length,
        l2 = matrix[0].length;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            sum += matrix[i][j] * Math.log(matrix[i][j] + eps);
        }
    }
    return -sum;
}

function mean(matrix, dimension) {
    if (typeof(dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theMean, N, i, j;

    if (dimension === -1) {
        theMean = [0];
        N = rows * cols;
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theMean[0] += matrix[i][j];
            }
        }
        theMean[0] /= N;
    } else if (dimension === 0) {
        theMean = new Array(cols);
        N = rows;
        for (j = 0; j < cols; j++) {
            theMean[j] = 0;
            for (i = 0; i < rows; i++) {
                theMean[j] += matrix[i][j];
            }
            theMean[j] /= N;
        }
    } else if (dimension === 1) {
        theMean = new Array(rows);
        N = cols;
        for (j = 0; j < rows; j++) {
            theMean[j] = 0;
            for (i = 0; i < cols; i++) {
                theMean[j] += matrix[j][i];
            }
            theMean[j] /= N;
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theMean;
}

function standardDeviation(matrix, means, unbiased) {
    var vari = variance(matrix, means, unbiased), l = vari.length;
    for (var i = 0; i < l; i++) {
        vari[i] = Math.sqrt(vari[i]);
    }
    return vari;
}

function variance(matrix, means, unbiased) {
    if (typeof(unbiased) === 'undefined') {
        unbiased = true;
    }
    means = means || mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum1 = 0, sum2 = 0, x = 0;
        for (var i = 0; i < rows; i++) {
            x = matrix[i][j] - means[j];
            sum1 += x;
            sum2 += x * x;
        }
        if (unbiased) {
            vari[j] = (sum2 - ((sum1 * sum1) / rows)) / (rows - 1);
        } else {
            vari[j] = (sum2 - ((sum1 * sum1) / rows)) / rows;
        }
    }
    return vari;
}

function median(matrix) {
    var rows = matrix.length, cols = matrix[0].length;
    var medians = new Array(cols);

    for (var i = 0; i < cols; i++) {
        var data = new Array(rows);
        for (var j = 0; j < rows; j++) {
            data[j] = matrix[j][i];
        }
        data.sort();
        var N = data.length;
        if (N % 2 === 0) {
            medians[i] = (data[N / 2] + data[(N / 2) - 1]) * 0.5;
        } else {
            medians[i] = data[Math.floor(N / 2)];
        }
    }
    return medians;
}

function mode(matrix) {
    var rows = matrix.length,
        cols = matrix[0].length,
        modes = new Array(cols),
        i, j;
    for (i = 0; i < cols; i++) {
        var itemCount = new Array(rows);
        for (var k = 0; k < rows; k++) {
            itemCount[k] = 0;
        }
        var itemArray = new Array(rows);
        var count = 0;

        for (j = 0; j < rows; j++) {
            var index = itemArray.indexOf(matrix[j][i]);
            if (index >= 0) {
                itemCount[index]++;
            } else {
                itemArray[count] = matrix[j][i];
                itemCount[count] = 1;
                count++;
            }
        }

        var maxValue = 0, maxIndex = 0;
        for (j = 0; j < count; j++) {
            if (itemCount[j] > maxValue) {
                maxValue = itemCount[j];
                maxIndex = j;
            }
        }

        modes[i] = itemArray[maxIndex];
    }
    return modes;
}

function skewness(matrix, unbiased) {
    if (typeof(unbiased) === 'undefined') unbiased = true;
    var means = mean(matrix);
    var n = matrix.length, l = means.length;
    var skew = new Array(l);

    for (var j = 0; j < l; j++) {
        var s2 = 0, s3 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s3 += dev * dev * dev;
        }

        var m2 = s2 / n;
        var m3 = s3 / n;
        var g = m3 / Math.pow(m2, 3 / 2);

        if (unbiased) {
            var a = Math.sqrt(n * (n - 1));
            var b = n - 2;
            skew[j] = (a / b) * g;
        } else {
            skew[j] = g;
        }
    }
    return skew;
}

function kurtosis(matrix, unbiased) {
    if (typeof(unbiased) === 'undefined') unbiased = true;
    var means = mean(matrix);
    var n = matrix.length, m = matrix[0].length;
    var kurt = new Array(m);

    for (var j = 0; j < m; j++) {
        var s2 = 0, s4 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s4 += dev * dev * dev * dev;
        }
        var m2 = s2 / n;
        var m4 = s4 / n;

        if (unbiased) {
            var v = s2 / (n - 1);
            var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
            var b = s4 / (v * v);
            var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));
            kurt[j] = a * b - 3 * c;
        } else {
            kurt[j] = m4 / (m2 * m2) - 3;
        }
    }
    return kurt;
}

function standardError(matrix) {
    var samples = matrix.length;
    var standardDeviations = standardDeviation(matrix), l = standardDeviations.length;
    var standardErrors = new Array(l);
    var sqrtN = Math.sqrt(samples);

    for (var i = 0; i < l; i++) {
        standardErrors[i] = standardDeviations[i] / sqrtN;
    }
    return standardErrors;
}

function covariance(matrix, dimension) {
    return scatter(matrix, undefined, dimension);
}

function scatter(matrix, divisor, dimension) {
    if (typeof(dimension) === 'undefined') {
        dimension = 0;
    }
    if (typeof(divisor) === 'undefined') {
        if (dimension === 0) {
            divisor = matrix.length - 1;
        } else if (dimension === 1) {
            divisor = matrix[0].length - 1;
        }
    }
    var means = mean(matrix, dimension),
        rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov, i, j, s, k;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
}

function correlation(matrix) {
    var means = mean(matrix),
        standardDeviations = standardDeviation(matrix, true, means),
        scores = zScores(matrix, means, standardDeviations),
        rows = matrix.length,
        cols = matrix[0].length,
        i, j;

    var cor = new Array(cols);
    for (i = 0; i < cols; i++) {
        cor[i] = new Array(cols);
    }
    for (i = 0; i < cols; i++) {
        for (j = i; j < cols; j++) {
            var c = 0;
            for (var k = 0, l = scores.length; k < l; k++) {
                c += scores[k][j] * scores[k][i];
            }
            c /= rows - 1;
            cor[i][j] = c;
            cor[j][i] = c;
        }
    }
    return cor;
}

function zScores(matrix, means, standardDeviations) {
    means = means || mean(matrix);
    if (typeof(standardDeviations) === 'undefined') standardDeviations = standardDeviation(matrix, true, means);
    return standardize(center(matrix, means, false), standardDeviations, true);
}

function center(matrix, means, inPlace) {
    means = means || mean(matrix);
    var result = matrix,
        l = matrix.length,
        i, j, jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var row = result[i];
        for (j = 0, jj = row.length; j < jj; j++) {
            row[j] = matrix[i][j] - means[j];
        }
    }
    return result;
}

function standardize(matrix, standardDeviations, inPlace) {
    if (typeof(standardDeviations) === 'undefined') standardDeviations = standardDeviation(matrix);
    var result = matrix,
        l = matrix.length,
        i, j, jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var resultRow = result[i];
        var sourceRow = matrix[i];
        for (j = 0, jj = resultRow.length; j < jj; j++) {
            if (standardDeviations[j] !== 0 && !isNaN(standardDeviations[j])) {
                resultRow[j] = sourceRow[j] / standardDeviations[j];
            }
        }
    }
    return result;
}

function weightedVariance(matrix, weights) {
    var means = mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum = 0;
        var a = 0, b = 0;

        for (var i = 0; i < rows; i++) {
            var z = matrix[i][j] - means[j];
            var w = weights[i];

            sum += w * (z * z);
            b += w;
            a += w * w;
        }

        vari[j] = sum * (b / (b * b - a));
    }

    return vari;
}

function weightedMean(matrix, weights, dimension) {
    if (typeof(dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length,
        means, i, ii, j, w, row;

    if (dimension === 0) {
        means = new Array(cols);
        for (i = 0; i < cols; i++) {
            means[i] = 0;
        }
        for (i = 0; i < rows; i++) {
            row = matrix[i];
            w = weights[i];
            for (j = 0; j < cols; j++) {
                means[j] += row[j] * w;
            }
        }
    } else if (dimension === 1) {
        means = new Array(rows);
        for (i = 0; i < rows; i++) {
            means[i] = 0;
        }
        for (j = 0; j < rows; j++) {
            row = matrix[j];
            w = weights[j];
            for (i = 0; i < cols; i++) {
                means[j] += row[i] * w;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    var weightSum = arrayStat.sum(weights);
    if (weightSum !== 0) {
        for (i = 0, ii = means.length; i < ii; i++) {
            means[i] /= weightSum;
        }
    }
    return means;
}

function weightedCovariance(matrix, weights, means, dimension) {
    dimension = dimension || 0;
    means = means || weightedMean(matrix, weights, dimension);
    var s1 = 0, s2 = 0;
    for (var i = 0, ii = weights.length; i < ii; i++) {
        s1 += weights[i];
        s2 += weights[i] * weights[i];
    }
    var factor = s1 / (s1 * s1 - s2);
    return weightedScatter(matrix, weights, means, factor, dimension);
}

function weightedScatter(matrix, weights, means, factor, dimension) {
    dimension = dimension || 0;
    means = means || weightedMean(matrix, weights, dimension);
    if (typeof(factor) === 'undefined') {
        factor = 1;
    }
    var rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov, i, j, k, s;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += weights[k] * (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += weights[k] * (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
}

module.exports = {
    entropy: entropy,
    mean: mean,
    standardDeviation: standardDeviation,
    variance: variance,
    median: median,
    mode: mode,
    skewness: skewness,
    kurtosis: kurtosis,
    standardError: standardError,
    covariance: covariance,
    scatter: scatter,
    correlation: correlation,
    zScores: zScores,
    center: center,
    standardize: standardize,
    weightedVariance: weightedVariance,
    weightedMean: weightedMean,
    weightedCovariance: weightedCovariance,
    weightedScatter: weightedScatter
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

//Code translate from Pascal source in http://pubs.acs.org/doi/pdf/10.1021/ac00205a007
var extend = __webpack_require__(66);
var stat = __webpack_require__(192);

var defaultOptions = {
    windowSize: 9,
    derivative: 0,
    polynomial: 3,
};


function SavitzkyGolay(data, h, options) {
    options = extend({}, defaultOptions, options);

    if ((options.windowSize % 2 === 0) || (options.windowSize < 5) || !(Number.isInteger(options.windowSize)))
            throw new RangeError('Invalid window size (should be odd and at least 5 integer number)')


    if (options.windowSize>data.length)
        throw new RangeError('Window size is higher than the data length '+options.windowSize+">"+data.length);
    if ((options.derivative < 0) || !(Number.isInteger(options.derivative)))
        throw new RangeError('Derivative should be a positive integer');
    if ((options.polynomial < 1) || !(Number.isInteger(options.polynomial)))
        throw new RangeError('Polynomial should be a positive integer');
    if (options.polynomial >= 6)
        console.warn('You should not use polynomial grade higher than 5 if you are' +
            ' not sure that your data arises from such a model. Possible polynomial oscillation problems');

    var windowSize = options.windowSize;

    var half = Math.floor(windowSize/2);
    var np = data.length;
    var ans = new Array(np);
    var weights = fullWeights(windowSize,options.polynomial,options.derivative);
    var hs = 0;
    var constantH = true;
    if( Object.prototype.toString.call( h ) === '[object Array]' ) {
        constantH = false;
    }
    else{
        hs = Math.pow(h, options.derivative);
    }
    //console.log("Constant h: "+constantH);
    //For the borders
    for(var i=0;i<half;i++){
        var wg1=weights[half-i-1];
        var wg2=weights[half+i+1];
        var d1 = 0,d2=0;
        for (var l = 0; l < windowSize; l++){
            d1 += wg1[l] * data[l];
            d2 += wg2[l] * data[np-windowSize+l-1];
        }
        if(constantH){
            ans[half-i-1] = d1/hs;
            ans[np-half+i] = d2/hs;
        }
        else{
            hs = getHs(h,half-i-1,half, options.derivative);
            ans[half-i-1] = d1/hs;
            hs = getHs(h,np-half+i,half, options.derivative);
            ans[np-half+i] = d2/hs;
        }
    }
    //For the internal points
    var wg = weights[half];
    for(var i=windowSize;i<np+1;i++){
        var d = 0;
        for (var l = 0; l < windowSize; l++)
            d += wg[l] * data[l+i-windowSize];
        if(!constantH)
            hs = getHs(h,i-half-1,half, options.derivative);
        ans[i-half-1] = d/hs;
    }
    return ans;
}

function getHs(h,center,half,derivative){
    var hs = 0;
    var count = 0;
    for(var i=center-half;i<center+half;i++){
        if(i>=0 && i < h.length-1){
            hs+= (h[i+1]-h[i]);
            count++;
        }
    }
    return Math.pow(hs/count,derivative);
}

function GramPoly(i,m,k,s){
    var Grampoly = 0;
    if(k>0){
        Grampoly = (4*k-2)/(k*(2*m-k+1))*(i*GramPoly(i,m,k-1,s) +
            s*GramPoly(i,m,k-1,s-1)) - ((k-1)*(2*m+k))/(k*(2*m-k+1))*GramPoly(i,m,k-2,s);
    }
    else{
        if(k==0&&s==0){
            Grampoly=1;
        }
        else{
            Grampoly=0;
        }
    }
    //console.log(Grampoly);
    return Grampoly;
}

function GenFact(a,b){
    var gf=1;
    if(a>=b){
        for(var j=a-b+1;j<=a;j++){
            gf*=j;
        }
    }
    return gf;
}

function Weight(i,t,m,n,s){
    var sum=0;
    for(var k=0;k<=n;k++){
        //console.log(k);
        sum+=(2*k+1)*(GenFact(2*m,k)/GenFact(2*m+k+1,k+1))*GramPoly(i,m,k,0)*GramPoly(t,m,k,s)
    }
    return sum;
}

/**
 *
 * @param m  Number of points
 * @param n  Polynomial grade
 * @param s  Derivative
 */
function fullWeights(m,n,s){
    var weights = new Array(m);
    var np = Math.floor(m/2);
    for(var t=-np;t<=np;t++){
        weights[t+np] = new Array(m);
        for(var j=-np;j<=np;j++){
            weights[t+np][j+np]=Weight(j,t,np,n,s);
        }
    }
    return weights;
}

/*function entropy(data,h,options){
    var trend = SavitzkyGolay(data,h,trendOptions);
    var copy = new Array(data.length);
    var sum = 0;
    var max = 0;
    for(var i=0;i<data.length;i++){
        copy[i] = data[i]-trend[i];
    }

    sum/=data.length;
    console.log(sum+" "+max);
    console.log(stat.array.standardDeviation(copy));
    console.log(Math.abs(stat.array.mean(copy))/stat.array.standardDeviation(copy));
    return sum;

}



function guessWindowSize(data, h){
    console.log("entropy "+entropy(data,h,trendOptions));
    return 5;
}
*/
module.exports = SavitzkyGolay;
 


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayStat = __webpack_require__(50);

function compareNumbers(a, b) {
    return a - b;
}

exports.max = function max(matrix) {
    var max = -Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > max) max = matrix[i][j];
        }
    }
    return max;
};

exports.min = function min(matrix) {
    var min = Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
        }
    }
    return min;
};

exports.minMax = function minMax(matrix) {
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) min = matrix[i][j];
            if (matrix[i][j] > max) max = matrix[i][j];
        }
    }
    return {
        min:min,
        max:max
    };
};

exports.entropy = function entropy(matrix, eps) {
    if (typeof (eps) === 'undefined') {
        eps = 0;
    }
    var sum = 0,
        l1 = matrix.length,
        l2 = matrix[0].length;
    for (var i = 0; i < l1; i++) {
        for (var j = 0; j < l2; j++) {
            sum += matrix[i][j] * Math.log(matrix[i][j] + eps);
        }
    }
    return -sum;
};

exports.mean = function mean(matrix, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theMean, N, i, j;

    if (dimension === -1) {
        theMean = [0];
        N = rows * cols;
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theMean[0] += matrix[i][j];
            }
        }
        theMean[0] /= N;
    } else if (dimension === 0) {
        theMean = new Array(cols);
        N = rows;
        for (j = 0; j < cols; j++) {
            theMean[j] = 0;
            for (i = 0; i < rows; i++) {
                theMean[j] += matrix[i][j];
            }
            theMean[j] /= N;
        }
    } else if (dimension === 1) {
        theMean = new Array(rows);
        N = cols;
        for (j = 0; j < rows; j++) {
            theMean[j] = 0;
            for (i = 0; i < cols; i++) {
                theMean[j] += matrix[j][i];
            }
            theMean[j] /= N;
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theMean;
};

exports.sum = function sum(matrix, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theSum, i, j;

    if (dimension === -1) {
        theSum = [0];
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theSum[0] += matrix[i][j];
            }
        }
    } else if (dimension === 0) {
        theSum = new Array(cols);
        for (j = 0; j < cols; j++) {
            theSum[j] = 0;
            for (i = 0; i < rows; i++) {
                theSum[j] += matrix[i][j];
            }
        }
    } else if (dimension === 1) {
        theSum = new Array(rows);
        for (j = 0; j < rows; j++) {
            theSum[j] = 0;
            for (i = 0; i < cols; i++) {
                theSum[j] += matrix[j][i];
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theSum;
};

exports.product = function product(matrix, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length,
        cols = matrix[0].length,
        theProduct, i, j;

    if (dimension === -1) {
        theProduct = [1];
        for (i = 0; i < rows; i++) {
            for (j = 0; j < cols; j++) {
                theProduct[0] *= matrix[i][j];
            }
        }
    } else if (dimension === 0) {
        theProduct = new Array(cols);
        for (j = 0; j < cols; j++) {
            theProduct[j] = 1;
            for (i = 0; i < rows; i++) {
                theProduct[j] *= matrix[i][j];
            }
        }
    } else if (dimension === 1) {
        theProduct = new Array(rows);
        for (j = 0; j < rows; j++) {
            theProduct[j] = 1;
            for (i = 0; i < cols; i++) {
                theProduct[j] *= matrix[j][i];
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }
    return theProduct;
};

exports.standardDeviation = function standardDeviation(matrix, means, unbiased) {
    var vari = exports.variance(matrix, means, unbiased), l = vari.length;
    for (var i = 0; i < l; i++) {
        vari[i] = Math.sqrt(vari[i]);
    }
    return vari;
};

exports.variance = function variance(matrix, means, unbiased) {
    if (typeof (unbiased) === 'undefined') {
        unbiased = true;
    }
    means = means || exports.mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum1 = 0, sum2 = 0, x = 0;
        for (var i = 0; i < rows; i++) {
            x = matrix[i][j] - means[j];
            sum1 += x;
            sum2 += x * x;
        }
        if (unbiased) {
            vari[j] = (sum2 - ((sum1 * sum1) / rows)) / (rows - 1);
        } else {
            vari[j] = (sum2 - ((sum1 * sum1) / rows)) / rows;
        }
    }
    return vari;
};

exports.median = function median(matrix) {
    var rows = matrix.length, cols = matrix[0].length;
    var medians = new Array(cols);

    for (var i = 0; i < cols; i++) {
        var data = new Array(rows);
        for (var j = 0; j < rows; j++) {
            data[j] = matrix[j][i];
        }
        data.sort(compareNumbers);
        var N = data.length;
        if (N % 2 === 0) {
            medians[i] = (data[N / 2] + data[(N / 2) - 1]) * 0.5;
        } else {
            medians[i] = data[Math.floor(N / 2)];
        }
    }
    return medians;
};

exports.mode = function mode(matrix) {
    var rows = matrix.length,
        cols = matrix[0].length,
        modes = new Array(cols),
        i, j;
    for (i = 0; i < cols; i++) {
        var itemCount = new Array(rows);
        for (var k = 0; k < rows; k++) {
            itemCount[k] = 0;
        }
        var itemArray = new Array(rows);
        var count = 0;

        for (j = 0; j < rows; j++) {
            var index = itemArray.indexOf(matrix[j][i]);
            if (index >= 0) {
                itemCount[index]++;
            } else {
                itemArray[count] = matrix[j][i];
                itemCount[count] = 1;
                count++;
            }
        }

        var maxValue = 0, maxIndex = 0;
        for (j = 0; j < count; j++) {
            if (itemCount[j] > maxValue) {
                maxValue = itemCount[j];
                maxIndex = j;
            }
        }

        modes[i] = itemArray[maxIndex];
    }
    return modes;
};

exports.skewness = function skewness(matrix, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var means = exports.mean(matrix);
    var n = matrix.length, l = means.length;
    var skew = new Array(l);

    for (var j = 0; j < l; j++) {
        var s2 = 0, s3 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s3 += dev * dev * dev;
        }

        var m2 = s2 / n;
        var m3 = s3 / n;
        var g = m3 / Math.pow(m2, 3 / 2);

        if (unbiased) {
            var a = Math.sqrt(n * (n - 1));
            var b = n - 2;
            skew[j] = (a / b) * g;
        } else {
            skew[j] = g;
        }
    }
    return skew;
};

exports.kurtosis = function kurtosis(matrix, unbiased) {
    if (typeof (unbiased) === 'undefined') unbiased = true;
    var means = exports.mean(matrix);
    var n = matrix.length, m = matrix[0].length;
    var kurt = new Array(m);

    for (var j = 0; j < m; j++) {
        var s2 = 0, s4 = 0;
        for (var i = 0; i < n; i++) {
            var dev = matrix[i][j] - means[j];
            s2 += dev * dev;
            s4 += dev * dev * dev * dev;
        }
        var m2 = s2 / n;
        var m4 = s4 / n;

        if (unbiased) {
            var v = s2 / (n - 1);
            var a = (n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3));
            var b = s4 / (v * v);
            var c = ((n - 1) * (n - 1)) / ((n - 2) * (n - 3));
            kurt[j] = a * b - 3 * c;
        } else {
            kurt[j] = m4 / (m2 * m2) - 3;
        }
    }
    return kurt;
};

exports.standardError = function standardError(matrix) {
    var samples = matrix.length;
    var standardDeviations = exports.standardDeviation(matrix);
    var l = standardDeviations.length;
    var standardErrors = new Array(l);
    var sqrtN = Math.sqrt(samples);

    for (var i = 0; i < l; i++) {
        standardErrors[i] = standardDeviations[i] / sqrtN;
    }
    return standardErrors;
};

exports.covariance = function covariance(matrix, dimension) {
    return exports.scatter(matrix, undefined, dimension);
};

exports.scatter = function scatter(matrix, divisor, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    if (typeof (divisor) === 'undefined') {
        if (dimension === 0) {
            divisor = matrix.length - 1;
        } else if (dimension === 1) {
            divisor = matrix[0].length - 1;
        }
    }
    var means = exports.mean(matrix, dimension);
    var rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov, i, j, s, k;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                s /= divisor;
                cov[i][j] = s;
                cov[j][i] = s;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
};

exports.correlation = function correlation(matrix) {
    var means = exports.mean(matrix),
        standardDeviations = exports.standardDeviation(matrix, true, means),
        scores = exports.zScores(matrix, means, standardDeviations),
        rows = matrix.length,
        cols = matrix[0].length,
        i, j;

    var cor = new Array(cols);
    for (i = 0; i < cols; i++) {
        cor[i] = new Array(cols);
    }
    for (i = 0; i < cols; i++) {
        for (j = i; j < cols; j++) {
            var c = 0;
            for (var k = 0, l = scores.length; k < l; k++) {
                c += scores[k][j] * scores[k][i];
            }
            c /= rows - 1;
            cor[i][j] = c;
            cor[j][i] = c;
        }
    }
    return cor;
};

exports.zScores = function zScores(matrix, means, standardDeviations) {
    means = means || exports.mean(matrix);
    if (typeof (standardDeviations) === 'undefined') standardDeviations = exports.standardDeviation(matrix, true, means);
    return exports.standardize(exports.center(matrix, means, false), standardDeviations, true);
};

exports.center = function center(matrix, means, inPlace) {
    means = means || exports.mean(matrix);
    var result = matrix,
        l = matrix.length,
        i, j, jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var row = result[i];
        for (j = 0, jj = row.length; j < jj; j++) {
            row[j] = matrix[i][j] - means[j];
        }
    }
    return result;
};

exports.standardize = function standardize(matrix, standardDeviations, inPlace) {
    if (typeof (standardDeviations) === 'undefined') standardDeviations = exports.standardDeviation(matrix);
    var result = matrix,
        l = matrix.length,
        i, j, jj;

    if (!inPlace) {
        result = new Array(l);
        for (i = 0; i < l; i++) {
            result[i] = new Array(matrix[i].length);
        }
    }

    for (i = 0; i < l; i++) {
        var resultRow = result[i];
        var sourceRow = matrix[i];
        for (j = 0, jj = resultRow.length; j < jj; j++) {
            if (standardDeviations[j] !== 0 && !isNaN(standardDeviations[j])) {
                resultRow[j] = sourceRow[j] / standardDeviations[j];
            }
        }
    }
    return result;
};

exports.weightedVariance = function weightedVariance(matrix, weights) {
    var means = exports.mean(matrix);
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length;
    var vari = new Array(cols);

    for (var j = 0; j < cols; j++) {
        var sum = 0;
        var a = 0, b = 0;

        for (var i = 0; i < rows; i++) {
            var z = matrix[i][j] - means[j];
            var w = weights[i];

            sum += w * (z * z);
            b += w;
            a += w * w;
        }

        vari[j] = sum * (b / (b * b - a));
    }

    return vari;
};

exports.weightedMean = function weightedMean(matrix, weights, dimension) {
    if (typeof (dimension) === 'undefined') {
        dimension = 0;
    }
    var rows = matrix.length;
    if (rows === 0) return [];
    var cols = matrix[0].length,
        means, i, ii, j, w, row;

    if (dimension === 0) {
        means = new Array(cols);
        for (i = 0; i < cols; i++) {
            means[i] = 0;
        }
        for (i = 0; i < rows; i++) {
            row = matrix[i];
            w = weights[i];
            for (j = 0; j < cols; j++) {
                means[j] += row[j] * w;
            }
        }
    } else if (dimension === 1) {
        means = new Array(rows);
        for (i = 0; i < rows; i++) {
            means[i] = 0;
        }
        for (j = 0; j < rows; j++) {
            row = matrix[j];
            w = weights[j];
            for (i = 0; i < cols; i++) {
                means[j] += row[i] * w;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    var weightSum = arrayStat.sum(weights);
    if (weightSum !== 0) {
        for (i = 0, ii = means.length; i < ii; i++) {
            means[i] /= weightSum;
        }
    }
    return means;
};

exports.weightedCovariance = function weightedCovariance(matrix, weights, means, dimension) {
    dimension = dimension || 0;
    means = means || exports.weightedMean(matrix, weights, dimension);
    var s1 = 0, s2 = 0;
    for (var i = 0, ii = weights.length; i < ii; i++) {
        s1 += weights[i];
        s2 += weights[i] * weights[i];
    }
    var factor = s1 / (s1 * s1 - s2);
    return exports.weightedScatter(matrix, weights, means, factor, dimension);
};

exports.weightedScatter = function weightedScatter(matrix, weights, means, factor, dimension) {
    dimension = dimension || 0;
    means = means || exports.weightedMean(matrix, weights, dimension);
    if (typeof (factor) === 'undefined') {
        factor = 1;
    }
    var rows = matrix.length;
    if (rows === 0) {
        return [[]];
    }
    var cols = matrix[0].length,
        cov, i, j, k, s;

    if (dimension === 0) {
        cov = new Array(cols);
        for (i = 0; i < cols; i++) {
            cov[i] = new Array(cols);
        }
        for (i = 0; i < cols; i++) {
            for (j = i; j < cols; j++) {
                s = 0;
                for (k = 0; k < rows; k++) {
                    s += weights[k] * (matrix[k][j] - means[j]) * (matrix[k][i] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else if (dimension === 1) {
        cov = new Array(rows);
        for (i = 0; i < rows; i++) {
            cov[i] = new Array(rows);
        }
        for (i = 0; i < rows; i++) {
            for (j = i; j < rows; j++) {
                s = 0;
                for (k = 0; k < cols; k++) {
                    s += weights[k] * (matrix[j][k] - means[j]) * (matrix[i][k] - means[i]);
                }
                cov[i][j] = s * factor;
                cov[j][i] = s * factor;
            }
        }
    } else {
        throw new Error('Invalid dimension');
    }

    return cov;
};


/***/ }),
/* 196 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.Chromatogram = __webpack_require__(28);

// Chromatography utils
exports.getPeaks = __webpack_require__(29);
exports.massInPeaks = __webpack_require__(31);
exports.vectorify = __webpack_require__(54);
exports.cosine = __webpack_require__(51);
exports.massFilter = __webpack_require__(30);
exports.spectraComparison = __webpack_require__(84);
exports.scaleAlignment = __webpack_require__(83);
exports.kovats = __webpack_require__(52);
exports.getKovatsTable = __webpack_require__(81);
exports.kovatsConversionFunction = __webpack_require__(82);
exports.rescaleTime = __webpack_require__(53);
exports.fromJcamp = __webpack_require__(80);
exports.fromJSON = __webpack_require__(79);
exports.applyLockMass = __webpack_require__(78);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQ2hyb21hdG9ncmFtIiwicmVxdWlyZSIsImdldFBlYWtzIiwibWFzc0luUGVha3MiLCJ2ZWN0b3JpZnkiLCJjb3NpbmUiLCJtYXNzRmlsdGVyIiwic3BlY3RyYUNvbXBhcmlzb24iLCJzY2FsZUFsaWdubWVudCIsImtvdmF0cyIsImdldEtvdmF0c1RhYmxlIiwia292YXRzQ29udmVyc2lvbkZ1bmN0aW9uIiwicmVzY2FsZVRpbWUiLCJmcm9tSmNhbXAiLCJmcm9tSlNPTiIsImFwcGx5TG9ja01hc3MiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRQyxZQUFSLEdBQXVCQyxRQUFRLGdCQUFSLENBQXZCOztBQUVBO0FBQ0FGLFFBQVFHLFFBQVIsR0FBbUJELFFBQVEsWUFBUixDQUFuQjtBQUNBRixRQUFRSSxXQUFSLEdBQXNCRixRQUFRLGVBQVIsQ0FBdEI7QUFDQUYsUUFBUUssU0FBUixHQUFvQkgsUUFBUSxhQUFSLENBQXBCO0FBQ0FGLFFBQVFNLE1BQVIsR0FBaUJKLFFBQVEsVUFBUixDQUFqQjtBQUNBRixRQUFRTyxVQUFSLEdBQXFCTCxRQUFRLGNBQVIsQ0FBckI7QUFDQUYsUUFBUVEsaUJBQVIsR0FBNEJOLFFBQVEscUJBQVIsQ0FBNUI7QUFDQUYsUUFBUVMsY0FBUixHQUF5QlAsUUFBUSxrQkFBUixDQUF6QjtBQUNBRixRQUFRVSxNQUFSLEdBQWlCUixRQUFRLFVBQVIsQ0FBakI7QUFDQUYsUUFBUVcsY0FBUixHQUF5QlQsUUFBUSxrQkFBUixDQUF6QjtBQUNBRixRQUFRWSx3QkFBUixHQUFtQ1YsUUFBUSw0QkFBUixDQUFuQztBQUNBRixRQUFRYSxXQUFSLEdBQXNCWCxRQUFRLGVBQVIsQ0FBdEI7QUFDQUYsUUFBUWMsU0FBUixHQUFvQlosUUFBUSxhQUFSLENBQXBCO0FBQ0FGLFFBQVFlLFFBQVIsR0FBbUJiLFFBQVEsWUFBUixDQUFuQjtBQUNBRixRQUFRZ0IsYUFBUixHQUF3QmQsUUFBUSxpQkFBUixDQUF4QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuQ2hyb21hdG9ncmFtID0gcmVxdWlyZSgnLi9DaHJvbWF0b2dyYW0nKTtcblxuLy8gQ2hyb21hdG9ncmFwaHkgdXRpbHNcbmV4cG9ydHMuZ2V0UGVha3MgPSByZXF1aXJlKCcuL2dldFBlYWtzJyk7XG5leHBvcnRzLm1hc3NJblBlYWtzID0gcmVxdWlyZSgnLi9tYXNzSW5QZWFrcycpO1xuZXhwb3J0cy52ZWN0b3JpZnkgPSByZXF1aXJlKCcuL3ZlY3RvcmlmeScpO1xuZXhwb3J0cy5jb3NpbmUgPSByZXF1aXJlKCcuL2Nvc2luZScpO1xuZXhwb3J0cy5tYXNzRmlsdGVyID0gcmVxdWlyZSgnLi9tYXNzRmlsdGVyJyk7XG5leHBvcnRzLnNwZWN0cmFDb21wYXJpc29uID0gcmVxdWlyZSgnLi9zcGVjdHJhQ29tcGFyaXNvbicpO1xuZXhwb3J0cy5zY2FsZUFsaWdubWVudCA9IHJlcXVpcmUoJy4vc2NhbGVBbGlnbm1lbnQnKTtcbmV4cG9ydHMua292YXRzID0gcmVxdWlyZSgnLi9rb3ZhdHMnKTtcbmV4cG9ydHMuZ2V0S292YXRzVGFibGUgPSByZXF1aXJlKCcuL2dldEtvdmF0c1RhYmxlJyk7XG5leHBvcnRzLmtvdmF0c0NvbnZlcnNpb25GdW5jdGlvbiA9IHJlcXVpcmUoJy4va292YXRzQ29udmVyc2lvbkZ1bmN0aW9uJyk7XG5leHBvcnRzLnJlc2NhbGVUaW1lID0gcmVxdWlyZSgnLi9yZXNjYWxlVGltZScpO1xuZXhwb3J0cy5mcm9tSmNhbXAgPSByZXF1aXJlKCcuL2Zyb21KY2FtcCcpO1xuZXhwb3J0cy5mcm9tSlNPTiA9IHJlcXVpcmUoJy4vZnJvbUpTT04nKTtcbmV4cG9ydHMuYXBwbHlMb2NrTWFzcyA9IHJlcXVpcmUoJy4vYXBwbHlMb2NrTWFzcycpO1xuIl19

/***/ })
/******/ ]);
});