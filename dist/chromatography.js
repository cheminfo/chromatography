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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.Chromatogram = __webpack_require__(1);

	// Chromatography utils
	exports.peakPicking = __webpack_require__(80);
	exports.massInPeaks = __webpack_require__(102);
	exports.vectorify = __webpack_require__(108);
	exports.cosine = __webpack_require__(109);
	exports.massFilter = __webpack_require__(107);
	exports.spectraComparison = __webpack_require__(110);
	exports.scaleAlignment = __webpack_require__(115);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQ2hyb21hdG9ncmFtIiwicmVxdWlyZSIsInBlYWtQaWNraW5nIiwibWFzc0luUGVha3MiLCJ2ZWN0b3JpZnkiLCJjb3NpbmUiLCJtYXNzRmlsdGVyIiwic3BlY3RyYUNvbXBhcmlzb24iLCJzY2FsZUFsaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVFDLFlBQVIsR0FBdUJDLFFBQVEsZ0JBQVIsQ0FBdkI7O0FBRUE7QUFDQUYsUUFBUUcsV0FBUixHQUFzQkQsUUFBUSxlQUFSLENBQXRCO0FBQ0FGLFFBQVFJLFdBQVIsR0FBc0JGLFFBQVEsZUFBUixDQUF0QjtBQUNBRixRQUFRSyxTQUFSLEdBQW9CSCxRQUFRLGFBQVIsQ0FBcEI7QUFDQUYsUUFBUU0sTUFBUixHQUFpQkosUUFBUSxVQUFSLENBQWpCO0FBQ0FGLFFBQVFPLFVBQVIsR0FBcUJMLFFBQVEsY0FBUixDQUFyQjtBQUNBRixRQUFRUSxpQkFBUixHQUE0Qk4sUUFBUSxxQkFBUixDQUE1QjtBQUNBRixRQUFRUyxjQUFSLEdBQXlCUCxRQUFRLGtCQUFSLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5DaHJvbWF0b2dyYW0gPSByZXF1aXJlKCcuL0Nocm9tYXRvZ3JhbScpO1xuXG4vLyBDaHJvbWF0b2dyYXBoeSB1dGlsc1xuZXhwb3J0cy5wZWFrUGlja2luZyA9IHJlcXVpcmUoJy4vcGVha1BpY2tpbmcnKTtcbmV4cG9ydHMubWFzc0luUGVha3MgPSByZXF1aXJlKCcuL21hc3NJblBlYWtzJyk7XG5leHBvcnRzLnZlY3RvcmlmeSA9IHJlcXVpcmUoJy4vdmVjdG9yaWZ5Jyk7XG5leHBvcnRzLmNvc2luZSA9IHJlcXVpcmUoJy4vY29zaW5lJyk7XG5leHBvcnRzLm1hc3NGaWx0ZXIgPSByZXF1aXJlKCcuL21hc3NGaWx0ZXInKTtcbmV4cG9ydHMuc3BlY3RyYUNvbXBhcmlzb24gPSByZXF1aXJlKCcuL3NwZWN0cmFDb21wYXJpc29uJyk7XG5leHBvcnRzLnNjYWxlQWxpZ25tZW50ID0gcmVxdWlyZSgnLi9zY2FsZUFsaWdubWVudCcpO1xuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Class allowing to store time / ms (ms) series
	 * It allows also to store simple time a trace
	 * @class Chromatogram
	 * @param {Object|Array<Number>} data - A GC/MS data format object or a time serie
	 */

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _typeof2 = __webpack_require__(55);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(75);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(76);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	     * @param {String} name - name of the serie
	     * @return {Object} - Object with an array of data, dimensions of the elements in the array and name of the serie
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
	         * @param {Object} serie - Object with an array of data, dimensions of the elements in the array and name of the serie
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
	         * @return {Number} - First time value
	         */

	    }, {
	        key: 'getFirstTime',
	        value: function getFirstTime() {
	            return this.times[0];
	        }

	        /**
	         * Returns the last time value
	         * @return {Number} - Last time value
	         */

	    }, {
	        key: 'getLastTime',
	        value: function getLastTime() {
	            return this.times[this.length - 1];
	        }

	        /**
	         * Returns the time values
	         * @return {Array<Number>} - Time values
	         */

	    }, {
	        key: 'getTimes',
	        value: function getTimes() {
	            return this.times;
	        }
	    }]);
	    return Chromatogram;
	}();

	module.exports = Chromatogram;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaHJvbWF0b2dyYW0uanMiXSwibmFtZXMiOlsiQ2hyb21hdG9ncmFtIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInRpbWVzIiwiVHlwZUVycm9yIiwibGVuZ3RoIiwic2VyaWVzIiwic2VyaWUiLCJhZGRTZXJpZSIsIm5hbWUiLCJmaW5kIiwiZGltZW5zaW9uIiwiRXJyb3IiLCJmaW5kU2VyaWVCeU5hbWUiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNTUEsWTtBQUNGLDBCQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsWUFBSUMsTUFBTUMsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDckI7QUFDQUEsbUJBQU8sRUFBQ0csT0FBT0gsSUFBUixFQUFQO0FBQ0gsU0FIRCxNQUdPLElBQUksUUFBT0EsSUFBUCx1REFBT0EsSUFBUCxPQUFnQixRQUFwQixFQUE4QjtBQUNqQyxrQkFBTSxJQUFJSSxTQUFKLENBQWMsaUNBQWQsQ0FBTjtBQUNIOztBQUVELFlBQUksQ0FBQ0gsTUFBTUMsT0FBTixDQUFjRixLQUFLRyxLQUFuQixDQUFMLEVBQWdDO0FBQzVCLGtCQUFNLElBQUlDLFNBQUosQ0FBYywwQkFBZCxDQUFOO0FBQ0g7QUFDRCxhQUFLRCxLQUFMLEdBQWFILEtBQUtHLEtBQWxCO0FBQ0EsYUFBS0UsTUFBTCxHQUFjTCxLQUFLRyxLQUFMLENBQVdFLE1BQXpCOztBQUVBLGFBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsWUFBSU4sS0FBS00sTUFBVCxFQUFpQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNiLGdFQUFvQk4sS0FBS00sTUFBekIsNEdBQWlDO0FBQUEsd0JBQXRCQyxLQUFzQjs7QUFDN0IseUJBQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNIO0FBSFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUloQjtBQUNKOztBQUVEOzs7Ozs7Ozs7d0NBS2dCRSxJLEVBQU07QUFDbEIsbUJBQU8sS0FBS0gsTUFBTCxDQUFZSSxJQUFaLENBQWlCO0FBQUEsdUJBQVNILE1BQU1FLElBQU4sS0FBZUEsSUFBeEI7QUFBQSxhQUFqQixDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7aUNBSVNGLEssRUFBTztBQUNaLGdCQUFJLE9BQU9BLE1BQU1JLFNBQWIsS0FBMkIsUUFBL0IsRUFBeUM7QUFDckMsc0JBQU0sSUFBSUMsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDSDtBQUNELGdCQUFJLE9BQU9MLE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0M7QUFDaEMsc0JBQU0sSUFBSUcsS0FBSixDQUFVLHdCQUFWLENBQU47QUFDSDtBQUNELGdCQUFJLEtBQUtDLGVBQUwsQ0FBcUJOLE1BQU1FLElBQTNCLENBQUosRUFBc0M7QUFDbEMsc0JBQU0sSUFBSUcsS0FBSix3QkFBK0JMLE1BQU1FLElBQXJDLHFCQUFOO0FBQ0g7QUFDRCxnQkFBSSxDQUFDUixNQUFNQyxPQUFOLENBQWNLLE1BQU1QLElBQXBCLENBQUwsRUFBZ0M7QUFDNUIsc0JBQU0sSUFBSVksS0FBSixDQUFVLDhCQUFWLENBQU47QUFDSDtBQUNELGlCQUFLTixNQUFMLENBQVlRLElBQVosQ0FBaUJQLEtBQWpCO0FBQ0g7O0FBRUQ7Ozs7Ozs7dUNBSWU7QUFDWCxtQkFBTyxLQUFLSixLQUFMLENBQVcsQ0FBWCxDQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7c0NBSWM7QUFDVixtQkFBTyxLQUFLQSxLQUFMLENBQVcsS0FBS0UsTUFBTCxHQUFjLENBQXpCLENBQVA7QUFDSDs7QUFFRDs7Ozs7OzttQ0FJVztBQUNQLG1CQUFPLEtBQUtGLEtBQVo7QUFDSDs7Ozs7QUFHTFksT0FBT0MsT0FBUCxHQUFpQmpCLFlBQWpCIiwiZmlsZSI6IkNocm9tYXRvZ3JhbS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2xhc3MgYWxsb3dpbmcgdG8gc3RvcmUgdGltZSAvIG1zIChtcykgc2VyaWVzXG4gKiBJdCBhbGxvd3MgYWxzbyB0byBzdG9yZSBzaW1wbGUgdGltZSBhIHRyYWNlXG4gKiBAY2xhc3MgQ2hyb21hdG9ncmFtXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheTxOdW1iZXI+fSBkYXRhIC0gQSBHQy9NUyBkYXRhIGZvcm1hdCBvYmplY3Qgb3IgYSB0aW1lIHNlcmllXG4gKi9cbmNsYXNzIENocm9tYXRvZ3JhbSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgLy8gaW5pdCB3aXRoIHRpbWVzXG4gICAgICAgICAgICBkYXRhID0ge3RpbWVzOiBkYXRhfTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2RhdGEgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYXJyYXknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhLnRpbWVzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndGltZXMgYXJyYXkgaXMgbWFuZGF0b3J5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lcyA9IGRhdGEudGltZXM7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gZGF0YS50aW1lcy5sZW5ndGg7XG5cbiAgICAgICAgdGhpcy5zZXJpZXMgPSBbXTtcbiAgICAgICAgaWYgKGRhdGEuc2VyaWVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlcmllIG9mIGRhdGEuc2VyaWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTZXJpZShzZXJpZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBzZXJpZSBnaXZpbmcgdGhlIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIG5hbWUgb2YgdGhlIHNlcmllXG4gICAgICogQHJldHVybiB7T2JqZWN0fSAtIE9iamVjdCB3aXRoIGFuIGFycmF5IG9mIGRhdGEsIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSBhbmQgbmFtZSBvZiB0aGUgc2VyaWVcbiAgICAgKi9cbiAgICBmaW5kU2VyaWVCeU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJpZXMuZmluZChzZXJpZSA9PiBzZXJpZS5uYW1lID09PSBuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBuZXcgc2VyaWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2VyaWUgLSBPYmplY3Qgd2l0aCBhbiBhcnJheSBvZiBkYXRhLCBkaW1lbnNpb25zIG9mIHRoZSBlbGVtZW50cyBpbiB0aGUgYXJyYXkgYW5kIG5hbWUgb2YgdGhlIHNlcmllXG4gICAgICovXG4gICAgYWRkU2VyaWUoc2VyaWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXJpZS5kaW1lbnNpb24gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NlcmllIG11c3QgaGF2ZSBhIGRpbWVuc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygc2VyaWUubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2VyaWUgbXVzdCBoYXZlIGEgbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbmRTZXJpZUJ5TmFtZShzZXJpZS5uYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhIHNlcmllIHdpdGggbmFtZSAke3NlcmllLm5hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNlcmllLmRhdGEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NlcmllIG11c3QgaGF2ZSBhIGRhdGEgYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlcmllcy5wdXNoKHNlcmllKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB0aW1lIHZhbHVlXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAtIEZpcnN0IHRpbWUgdmFsdWVcbiAgICAgKi9cbiAgICBnZXRGaXJzdFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgdGltZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gLSBMYXN0IHRpbWUgdmFsdWVcbiAgICAgKi9cbiAgICBnZXRMYXN0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXNbdGhpcy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0aW1lIHZhbHVlc1xuICAgICAqIEByZXR1cm4ge0FycmF5PE51bWJlcj59IC0gVGltZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBnZXRUaW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENocm9tYXRvZ3JhbTtcbiJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(50);
	module.exports = __webpack_require__(52);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	var global        = __webpack_require__(16)
	  , hide          = __webpack_require__(20)
	  , Iterators     = __webpack_require__(8)
	  , TO_STRING_TAG = __webpack_require__(47)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(6)
	  , step             = __webpack_require__(7)
	  , Iterators        = __webpack_require__(8)
	  , toIObject        = __webpack_require__(9);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(13)(Array, 'Array', function(iterated, kind){
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

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(12);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(14)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , hide           = __webpack_require__(20)
	  , has            = __webpack_require__(31)
	  , Iterators      = __webpack_require__(8)
	  , $iterCreate    = __webpack_require__(32)
	  , setToStringTag = __webpack_require__(46)
	  , getPrototypeOf = __webpack_require__(48)
	  , ITERATOR       = __webpack_require__(47)('iterator')
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

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(16)
	  , core      = __webpack_require__(17)
	  , ctx       = __webpack_require__(18)
	  , hide      = __webpack_require__(20)
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

/***/ },
/* 16 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
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

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(21)
	  , createDesc = __webpack_require__(29);
	module.exports = __webpack_require__(25) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(22)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(28)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(25) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(25) && !__webpack_require__(26)(function(){
	  return Object.defineProperty(__webpack_require__(27)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(26)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(23)
	  , document = __webpack_require__(16).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(23);
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

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 31 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(33)
	  , descriptor     = __webpack_require__(29)
	  , setToStringTag = __webpack_require__(46)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(20)(IteratorPrototype, __webpack_require__(47)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(22)
	  , dPs         = __webpack_require__(34)
	  , enumBugKeys = __webpack_require__(44)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(27)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(45).appendChild(iframe);
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


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(21)
	  , anObject = __webpack_require__(22)
	  , getKeys  = __webpack_require__(35);

	module.exports = __webpack_require__(25) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(36)
	  , enumBugKeys = __webpack_require__(44);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(31)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(37)(false)
	  , IE_PROTO     = __webpack_require__(41)('IE_PROTO');

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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(38)
	  , toIndex   = __webpack_require__(40);
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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(39)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(42)('keys')
	  , uid    = __webpack_require__(43);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(16)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16).document && document.documentElement;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(21).f
	  , has = __webpack_require__(31)
	  , TAG = __webpack_require__(47)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(42)('wks')
	  , uid        = __webpack_require__(43)
	  , Symbol     = __webpack_require__(16).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(31)
	  , toObject    = __webpack_require__(49)
	  , IE_PROTO    = __webpack_require__(41)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(12);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(51)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(13)(String, 'String', function(iterated){
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

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(39)
	  , defined   = __webpack_require__(12);
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

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(22)
	  , get      = __webpack_require__(53);
	module.exports = __webpack_require__(17).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(54)
	  , ITERATOR  = __webpack_require__(47)('iterator')
	  , Iterators = __webpack_require__(8);
	module.exports = __webpack_require__(17).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(11)
	  , TAG = __webpack_require__(47)('toStringTag')
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

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(56);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(59);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(57), __esModule: true };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(4);
	module.exports = __webpack_require__(58).f('iterator');

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(47);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(61);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	module.exports = __webpack_require__(17).Symbol;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(16)
	  , has            = __webpack_require__(31)
	  , DESCRIPTORS    = __webpack_require__(25)
	  , $export        = __webpack_require__(15)
	  , redefine       = __webpack_require__(30)
	  , META           = __webpack_require__(62).KEY
	  , $fails         = __webpack_require__(26)
	  , shared         = __webpack_require__(42)
	  , setToStringTag = __webpack_require__(46)
	  , uid            = __webpack_require__(43)
	  , wks            = __webpack_require__(47)
	  , wksExt         = __webpack_require__(58)
	  , wksDefine      = __webpack_require__(63)
	  , keyOf          = __webpack_require__(64)
	  , enumKeys       = __webpack_require__(65)
	  , isArray        = __webpack_require__(68)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(28)
	  , createDesc     = __webpack_require__(29)
	  , _create        = __webpack_require__(33)
	  , gOPNExt        = __webpack_require__(69)
	  , $GOPD          = __webpack_require__(71)
	  , $DP            = __webpack_require__(21)
	  , $keys          = __webpack_require__(35)
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
	  __webpack_require__(70).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(67).f  = $propertyIsEnumerable;
	  __webpack_require__(66).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(14)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(43)('meta')
	  , isObject = __webpack_require__(23)
	  , has      = __webpack_require__(31)
	  , setDesc  = __webpack_require__(21).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(26)(function(){
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

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(16)
	  , core           = __webpack_require__(17)
	  , LIBRARY        = __webpack_require__(14)
	  , wksExt         = __webpack_require__(58)
	  , defineProperty = __webpack_require__(21).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(35)
	  , toIObject = __webpack_require__(9);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(35)
	  , gOPS    = __webpack_require__(66)
	  , pIE     = __webpack_require__(67);
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

/***/ },
/* 66 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 67 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(11);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(9)
	  , gOPN      = __webpack_require__(70).f
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


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(36)
	  , hiddenKeys = __webpack_require__(44).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(67)
	  , createDesc     = __webpack_require__(29)
	  , toIObject      = __webpack_require__(9)
	  , toPrimitive    = __webpack_require__(28)
	  , has            = __webpack_require__(31)
	  , IE8_DOM_DEFINE = __webpack_require__(24)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(25) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63)('asyncIterator');

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63)('observable');

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(77);

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

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(78), __esModule: true };

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(79);
	var $Object = __webpack_require__(17).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(15);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(25), 'Object', {defineProperty: __webpack_require__(21).f});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var gsd = __webpack_require__(81).gsd;

	/**
	 * Apply the GSD peak picking algorithm
	 * @param {Chromatogram} chrom - GC/MS chromatogram where make the peak picking
	 * @param {Object} [options] - Options object
	 * @param {Object} [options.heightFilter = 2] - Filter all objects that are bellow `heightFilter` times the median of the height
	 * @return {Array<Object>} - List of GSD objects
	 */
	function peakPicking(chrom) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var _options$heightFilter = options.heightFilter;
	    var heightFilter = _options$heightFilter === undefined ? 2 : _options$heightFilter;


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

	module.exports = peakPicking;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wZWFrUGlja2luZy5qcyJdLCJuYW1lcyI6WyJnc2QiLCJyZXF1aXJlIiwicGVha1BpY2tpbmciLCJjaHJvbSIsIm9wdGlvbnMiLCJoZWlnaHRGaWx0ZXIiLCJ0aWMiLCJmaW5kU2VyaWVCeU5hbWUiLCJFcnJvciIsImRhdGEiLCJ0aW1lcyIsImdldFRpbWVzIiwicGVha0xpc3QiLCJub2lzZUxldmVsIiwicmVhbFRvcERldGVjdGlvbiIsInNtb290aFkiLCJzZ09wdGlvbnMiLCJ3aW5kb3dTaXplIiwicG9seW5vbWlhbCIsImhlaWdodEZhY3RvciIsImJvdW5kYXJpZXMiLCJzb3J0IiwiYSIsImIiLCJyaWdodCIsImluZGV4IiwibGVmdCIsIm1lZGlhbkRvdHNXaWR0aCIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImhlaWdodCIsIm1lZGlhbkhlaWdodCIsImZpbHRlciIsInZhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLE1BQU1DLFFBQVEsUUFBUixFQUFrQkQsR0FBOUI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTRSxXQUFULENBQXFCQyxLQUFyQixFQUEwQztBQUFBLFFBQWRDLE9BQWMseURBQUosRUFBSTtBQUFBLGdDQUNYQSxPQURXLENBQy9CQyxZQUQrQjtBQUFBLFFBQy9CQSxZQUQrQix5Q0FDaEIsQ0FEZ0I7OztBQUd0QyxRQUFJQyxNQUFNSCxNQUFNSSxlQUFOLENBQXNCLEtBQXRCLENBQVY7QUFDQSxRQUFJLENBQUNELEdBQUwsRUFBVTtBQUNOLGNBQU0sSUFBSUUsS0FBSixDQUFVLDJCQUFWLENBQU47QUFDSDtBQUNERixVQUFNQSxJQUFJRyxJQUFWO0FBQ0EsUUFBSUMsUUFBUVAsTUFBTVEsUUFBTixFQUFaOztBQUVBO0FBQ0EsUUFBSUMsV0FBV1osSUFBSVUsS0FBSixFQUFXSixHQUFYLEVBQWdCO0FBQzNCTyxvQkFBWSxDQURlO0FBRTNCQywwQkFBa0IsS0FGUztBQUczQkMsaUJBQVMsSUFIa0I7QUFJM0JDLG1CQUFXLEVBQUNDLFlBQVksQ0FBYixFQUFnQkMsWUFBWSxDQUE1QixFQUpnQjtBQUszQkMsc0JBQWMsQ0FMYTtBQU0zQkMsb0JBQVk7QUFOZSxLQUFoQixDQUFmOztBQVNBUixhQUFTUyxJQUFULENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBV0QsRUFBRUUsS0FBRixDQUFRQyxLQUFSLEdBQWdCSCxFQUFFSSxJQUFGLENBQU9ELEtBQXhCLElBQWtDRixFQUFFQyxLQUFGLENBQVFDLEtBQVIsR0FBZ0JGLEVBQUVHLElBQUYsQ0FBT0QsS0FBekQsQ0FBVjtBQUFBLEtBQWQ7QUFDQSxRQUFJRSxrQkFBa0JmLFNBQVNnQixLQUFLQyxLQUFMLENBQVcsQ0FBQ2pCLFNBQVNrQixNQUFULEdBQWtCLENBQW5CLElBQXdCLENBQW5DLENBQVQsQ0FBdEI7QUFDQUgsc0JBQWtCQSxnQkFBZ0JILEtBQWhCLENBQXNCQyxLQUF0QixHQUE4QkUsZ0JBQWdCRCxJQUFoQixDQUFxQkQsS0FBckU7O0FBRUE7QUFDQSxRQUFJRSxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDckJBLDBCQUFrQixDQUFsQjtBQUNIO0FBQ0QsUUFBSUEsa0JBQWtCLENBQWxCLEtBQXdCLENBQTVCLEVBQStCO0FBQzNCQSwyQkFBbUIsQ0FBbkI7QUFDSDs7QUFFRDtBQUNBZixlQUFXWixJQUFJVSxLQUFKLEVBQVdKLEdBQVgsRUFBZ0I7QUFDdkJPLG9CQUFZLENBRFc7QUFFdkJDLDBCQUFrQixLQUZLO0FBR3ZCQyxpQkFBUyxJQUhjO0FBSXZCQyxtQkFBVyxFQUFDQyxZQUFZVSxlQUFiLEVBQThCVCxZQUFZLENBQTFDLEVBSlk7QUFLdkJDLHNCQUFjLENBTFM7QUFNdkJDLG9CQUFZO0FBTlcsS0FBaEIsQ0FBWDtBQVFBUixhQUFTUyxJQUFULENBQWMsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsRUFBRVMsTUFBRixHQUFXUixFQUFFUSxNQUF2QjtBQUFBLEtBQWQ7O0FBRUE7QUFDQSxRQUFJQyxlQUFlcEIsU0FBU2dCLEtBQUtDLEtBQUwsQ0FBVyxDQUFDakIsU0FBU2tCLE1BQVQsR0FBa0IsQ0FBbkIsSUFBd0IsQ0FBbkMsQ0FBVCxFQUFnREMsTUFBbkU7QUFDQW5CLGVBQVdBLFNBQVNxQixNQUFULENBQWdCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJSCxNQUFKLEdBQWFDLGVBQWUzQixZQUFyQztBQUFBLEtBQWhCLENBQVg7O0FBRUEsV0FBT08sUUFBUDtBQUNIOztBQUVEdUIsT0FBT0MsT0FBUCxHQUFpQmxDLFdBQWpCIiwiZmlsZSI6InBlYWtQaWNraW5nLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ3NkID0gcmVxdWlyZSgnbWwtZ3NkJykuZ3NkO1xuXG4vKipcbiAqIEFwcGx5IHRoZSBHU0QgcGVhayBwaWNraW5nIGFsZ29yaXRobVxuICogQHBhcmFtIHtDaHJvbWF0b2dyYW19IGNocm9tIC0gR0MvTVMgY2hyb21hdG9ncmFtIHdoZXJlIG1ha2UgdGhlIHBlYWsgcGlja2luZ1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuaGVpZ2h0RmlsdGVyID0gMl0gLSBGaWx0ZXIgYWxsIG9iamVjdHMgdGhhdCBhcmUgYmVsbG93IGBoZWlnaHRGaWx0ZXJgIHRpbWVzIHRoZSBtZWRpYW4gb2YgdGhlIGhlaWdodFxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gLSBMaXN0IG9mIEdTRCBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIHBlYWtQaWNraW5nKGNocm9tLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7aGVpZ2h0RmlsdGVyID0gMn0gPSBvcHRpb25zO1xuXG4gICAgbGV0IHRpYyA9IGNocm9tLmZpbmRTZXJpZUJ5TmFtZSgndGljJyk7XG4gICAgaWYgKCF0aWMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcXCd0aWNcXCcgc2VyaWUgbm90IGZvdW5kZWQnKTtcbiAgICB9XG4gICAgdGljID0gdGljLmRhdGE7XG4gICAgbGV0IHRpbWVzID0gY2hyb20uZ2V0VGltZXMoKTtcblxuICAgIC8vIGZpcnN0IHBlYWsgc2VsZWN0aW9uXG4gICAgbGV0IHBlYWtMaXN0ID0gZ3NkKHRpbWVzLCB0aWMsIHtcbiAgICAgICAgbm9pc2VMZXZlbDogMCxcbiAgICAgICAgcmVhbFRvcERldGVjdGlvbjogZmFsc2UsXG4gICAgICAgIHNtb290aFk6IHRydWUsXG4gICAgICAgIHNnT3B0aW9uczoge3dpbmRvd1NpemU6IDUsIHBvbHlub21pYWw6IDJ9LFxuICAgICAgICBoZWlnaHRGYWN0b3I6IDIsXG4gICAgICAgIGJvdW5kYXJpZXM6IHRydWVcbiAgICB9KTtcblxuICAgIHBlYWtMaXN0LnNvcnQoKGEsIGIpID0+IChhLnJpZ2h0LmluZGV4IC0gYS5sZWZ0LmluZGV4KSAtIChiLnJpZ2h0LmluZGV4IC0gYi5sZWZ0LmluZGV4KSk7XG4gICAgbGV0IG1lZGlhbkRvdHNXaWR0aCA9IHBlYWtMaXN0W01hdGguZmxvb3IoKHBlYWtMaXN0Lmxlbmd0aCAtIDEpIC8gMildO1xuICAgIG1lZGlhbkRvdHNXaWR0aCA9IG1lZGlhbkRvdHNXaWR0aC5yaWdodC5pbmRleCAtIG1lZGlhbkRvdHNXaWR0aC5sZWZ0LmluZGV4O1xuXG4gICAgLy8gcmVzZXQgcGFyYW1ldGVyc1xuICAgIGlmIChtZWRpYW5Eb3RzV2lkdGggPCA1KSB7XG4gICAgICAgIG1lZGlhbkRvdHNXaWR0aCA9IDU7XG4gICAgfVxuICAgIGlmIChtZWRpYW5Eb3RzV2lkdGggJSAyID09PSAwKSB7XG4gICAgICAgIG1lZGlhbkRvdHNXaWR0aCAtPSAxO1xuICAgIH1cblxuICAgIC8vIHNlY29uZCBwZWFrIHNlbGVjdGlvblxuICAgIHBlYWtMaXN0ID0gZ3NkKHRpbWVzLCB0aWMsIHtcbiAgICAgICAgbm9pc2VMZXZlbDogMCxcbiAgICAgICAgcmVhbFRvcERldGVjdGlvbjogZmFsc2UsXG4gICAgICAgIHNtb290aFk6IHRydWUsXG4gICAgICAgIHNnT3B0aW9uczoge3dpbmRvd1NpemU6IG1lZGlhbkRvdHNXaWR0aCwgcG9seW5vbWlhbDogMn0sXG4gICAgICAgIGhlaWdodEZhY3RvcjogMixcbiAgICAgICAgYm91bmRhcmllczogdHJ1ZVxuICAgIH0pO1xuICAgIHBlYWtMaXN0LnNvcnQoKGEsIGIpID0+IGEuaGVpZ2h0IC0gYi5oZWlnaHQpO1xuXG4gICAgLy8gZmlsdGVyIGhlaWdodCBieSBmYWN0b3JcbiAgICBsZXQgbWVkaWFuSGVpZ2h0ID0gcGVha0xpc3RbTWF0aC5mbG9vcigocGVha0xpc3QubGVuZ3RoIC0gMSkgLyAyKV0uaGVpZ2h0O1xuICAgIHBlYWtMaXN0ID0gcGVha0xpc3QuZmlsdGVyKCh2YWwpID0+IHZhbC5oZWlnaHQgPiBtZWRpYW5IZWlnaHQgKiBoZWlnaHRGaWx0ZXIpO1xuXG4gICAgcmV0dXJuIHBlYWtMaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBlYWtQaWNraW5nO1xuIl19

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports.post = __webpack_require__(82);
	module.exports.gsd = __webpack_require__(96);


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by acastillo on 9/6/15.
	 */
	'use strict';

	var Opt = __webpack_require__(83);

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



/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LM = __webpack_require__(84);
	var math = LM.Matrix.algebra;
	var Matrix = __webpack_require__(86);

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

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(85);
	module.exports.Matrix = __webpack_require__(86);
	module.exports.Matrix.algebra = __webpack_require__(95);


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by acastillo on 8/5/15.
	 */
	var Matrix = __webpack_require__(86);
	var math = __webpack_require__(95);

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

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(87);
	module.exports.Decompositions = module.exports.DC = __webpack_require__(88);


/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(87);

	var SingularValueDecomposition = __webpack_require__(89);
	var EigenvalueDecomposition = __webpack_require__(91);
	var LuDecomposition = __webpack_require__(92);
	var QrDecomposition = __webpack_require__(93);
	var CholeskyDecomposition = __webpack_require__(94);

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


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(87);
	var hypotenuse = __webpack_require__(90).hypotenuse;

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


/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(87);
	var hypotenuse = __webpack_require__(90).hypotenuse;

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


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(87);

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


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(87);
	var hypotenuse = __webpack_require__(90).hypotenuse;

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


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(87);

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


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by acastillo on 8/24/15.
	 */
	/**
	 * Non in-place function definitions, compatible with mathjs code *
	 */

	'use strict';

	var Matrix = __webpack_require__(86);

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


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const extend = __webpack_require__(97);
	const SG = __webpack_require__(98);

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
	    let lastK = 0;
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


/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

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



/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	//Code translate from Pascal source in http://pubs.acs.org/doi/pdf/10.1021/ac00205a007
	var extend = __webpack_require__(97);
	var stat = __webpack_require__(99);

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
	 


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.array = __webpack_require__(100);
	exports.matrix = __webpack_require__(101);


/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var arrayStat = __webpack_require__(100);

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


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(103);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var massFilter = __webpack_require__(107);

	/**
	 * Integrate MS spectra of a peak list
	 * @param {Array<Object>} peakList - List of GSD objects
	 * @param {Array<Object>} sampleMS - MS array of GC spectra
	 * @param {Object} options - Options for the integral filtering
	 * @param {Number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
	 * @param {Number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
	 * @param {Number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
	 * @return {Array<Object>} - List of GSD objects with an extra 'ms' field with the integrated MS spectra
	 */
	function massInPeaks(peakList, sampleMS) {
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYXNzSW5QZWFrcy5qcyJdLCJuYW1lcyI6WyJtYXNzRmlsdGVyIiwicmVxdWlyZSIsIm1hc3NJblBlYWtzIiwicGVha0xpc3QiLCJzYW1wbGVNUyIsIm9wdGlvbnMiLCJpIiwibGVuZ3RoIiwibWFzc0RpY3Rpb25hcnkiLCJtYXgiLCJqIiwibGVmdCIsImluZGV4IiwicmlnaHQiLCJrIiwibWFzcyIsIk1hdGgiLCJyb3VuZCIsIm1hc3NMaXN0IiwibXNTdW0iLCJ4IiwiQXJyYXkiLCJ5IiwiTnVtYmVyIiwibWF4TnVtYmVyUGVha3MiLCJ0aHJlc2hvbGRGYWN0b3IiLCJncm91cFdpZHRoIiwibXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGNBQVIsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7QUFVQSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBdUQ7QUFBQSxRQUFkQyxPQUFjLHlEQUFKLEVBQUk7O0FBQ25EO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFNBQVNJLE1BQTdCLEVBQXFDLEVBQUVELENBQXZDLEVBQTBDO0FBQ3RDLFlBQUlFLGlCQUFpQixFQUFyQjtBQUNBLFlBQUlDLE1BQU0sQ0FBQyxDQUFYO0FBQ0EsYUFBSyxJQUFJQyxJQUFJUCxTQUFTRyxDQUFULEVBQVlLLElBQVosQ0FBaUJDLEtBQTlCLEVBQXFDRixLQUFLUCxTQUFTRyxDQUFULEVBQVlPLEtBQVosQ0FBa0JELEtBQTVELEVBQW1FLEVBQUVGLENBQXJFLEVBQXdFO0FBQ3BFLGlCQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSVYsU0FBU00sQ0FBVCxFQUFZLENBQVosRUFBZUgsTUFBbkMsRUFBMkMsRUFBRU8sQ0FBN0MsRUFBZ0Q7QUFDNUM7QUFDQSxvQkFBSUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXYixTQUFTTSxDQUFULEVBQVksQ0FBWixFQUFlSSxDQUFmLENBQVgsQ0FBWDs7QUFFQTtBQUNBLG9CQUFJTixlQUFlTyxJQUFmLENBQUosRUFBMEI7QUFDdEJQLG1DQUFlTyxJQUFmLEtBQXdCWCxTQUFTTSxDQUFULEVBQVksQ0FBWixFQUFlSSxDQUFmLENBQXhCO0FBQ0gsaUJBRkQsTUFFTztBQUNITixtQ0FBZU8sSUFBZixJQUF1QlgsU0FBU00sQ0FBVCxFQUFZLENBQVosRUFBZUksQ0FBZixDQUF2QjtBQUNIOztBQUVELG9CQUFJTixlQUFlTyxJQUFmLElBQXVCTixHQUEzQixFQUFnQztBQUM1QkEsMEJBQU1ELGVBQWVPLElBQWYsQ0FBTjtBQUNIO0FBQ0o7QUFDSjtBQUNELFlBQU1HLFdBQVcsb0JBQVlWLGNBQVosQ0FBakI7QUFDQSxZQUFJVyxRQUFRO0FBQ1JDLGVBQUcsSUFBSUMsS0FBSixDQUFVSCxTQUFTWCxNQUFuQixDQURLO0FBRVJlLGVBQUcsSUFBSUQsS0FBSixDQUFVSCxTQUFTWCxNQUFuQjtBQUZLLFNBQVo7O0FBS0EsYUFBSyxJQUFJRyxLQUFJLENBQWIsRUFBZ0JBLEtBQUlRLFNBQVNYLE1BQTdCLEVBQXFDLEVBQUVHLEVBQXZDLEVBQTBDO0FBQ3RDUyxrQkFBTUMsQ0FBTixDQUFRVixFQUFSLElBQWFhLE9BQU9MLFNBQVNSLEVBQVQsQ0FBUCxDQUFiO0FBQ0FTLGtCQUFNRyxDQUFOLENBQVFaLEVBQVIsSUFBYUYsZUFBZVUsU0FBU1IsRUFBVCxDQUFmLENBQWI7QUFDSDs7QUFFRCxZQUFJTCxRQUFRbUIsY0FBUixJQUEwQm5CLFFBQVFvQixlQUFsQyxJQUFxRHBCLFFBQVFxQixVQUFqRSxFQUE2RTtBQUN6RVAsb0JBQVFuQixXQUFXbUIsS0FBWCxFQUFrQmQsT0FBbEIsQ0FBUjtBQUNIO0FBQ0RGLGlCQUFTRyxDQUFULEVBQVlxQixFQUFaLEdBQWlCUixLQUFqQjtBQUNIOztBQUVELFdBQU9oQixRQUFQO0FBQ0g7O0FBRUR5QixPQUFPQyxPQUFQLEdBQWlCM0IsV0FBakIiLCJmaWxlIjoibWFzc0luUGVha3MuanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXNzRmlsdGVyID0gcmVxdWlyZSgnLi9tYXNzRmlsdGVyJyk7XG5cbi8qKlxuICogSW50ZWdyYXRlIE1TIHNwZWN0cmEgb2YgYSBwZWFrIGxpc3RcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcGVha0xpc3QgLSBMaXN0IG9mIEdTRCBvYmplY3RzXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHNhbXBsZU1TIC0gTVMgYXJyYXkgb2YgR0Mgc3BlY3RyYVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgaW50ZWdyYWwgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMudGhyZXNob2xkRmFjdG9yID0gMF0gLSBFdmVyeSBwZWFrIHRoYXQgaXQncyBiZWxsb3cgdGhlIG1haW4gcGVhayB0aW1lcyB0aGlzIGZhY3RvciBmaWxsIGJlIHJlbW92ZWQgKHdoZW4gaXMgMCB0aGVyZSdzIG5vIGZpbHRlcilcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXhOdW1iZXJQZWFrcyA9IE51bWJlci5NQVhfVkFMVUVdIC0gTWF4aW11bSBudW1iZXIgb2YgcGVha3MgZm9yIGVhY2ggbWFzcyBzcGVjdHJhICh3aGVuIGlzIE51bWJlci5NQVhfVkFMVUUgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZ3JvdXBXaWR0aCA9IDBdIC0gV2hlbiBmaW5kIGEgbWF4IGNhbid0IGJlIGFub3RoZXIgbWF4IGluIGEgcmFkaXVzIG9mIHRoaXMgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn0gLSBMaXN0IG9mIEdTRCBvYmplY3RzIHdpdGggYW4gZXh0cmEgJ21zJyBmaWVsZCB3aXRoIHRoZSBpbnRlZ3JhdGVkIE1TIHNwZWN0cmFcbiAqL1xuZnVuY3Rpb24gbWFzc0luUGVha3MocGVha0xpc3QsIHNhbXBsZU1TLCBvcHRpb25zID0ge30pIHtcbiAgICAvLyBpbnRlZ3JhdGUgTVNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlYWtMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBtYXNzRGljdGlvbmFyeSA9IHt9O1xuICAgICAgICBsZXQgbWF4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGogPSBwZWFrTGlzdFtpXS5sZWZ0LmluZGV4OyBqIDw9IHBlYWtMaXN0W2ldLnJpZ2h0LmluZGV4OyArK2opIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2FtcGxlTVNbal1bMF0ubGVuZ3RoOyArK2spIHtcbiAgICAgICAgICAgICAgICAvLyByb3VuZCB0aGUgbWFzcyB2YWx1ZVxuICAgICAgICAgICAgICAgIGxldCBtYXNzID0gTWF0aC5yb3VuZChzYW1wbGVNU1tqXVswXVtrXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIG1hc3MgdmFsdWUgdG8gdGhlIGRpY3Rpb25hcnlcbiAgICAgICAgICAgICAgICBpZiAobWFzc0RpY3Rpb25hcnlbbWFzc10pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzc0RpY3Rpb25hcnlbbWFzc10gKz0gc2FtcGxlTVNbal1bMV1ba107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzc0RpY3Rpb25hcnlbbWFzc10gPSBzYW1wbGVNU1tqXVsxXVtrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWFzc0RpY3Rpb25hcnlbbWFzc10gPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gbWFzc0RpY3Rpb25hcnlbbWFzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hc3NMaXN0ID0gT2JqZWN0LmtleXMobWFzc0RpY3Rpb25hcnkpO1xuICAgICAgICBsZXQgbXNTdW0gPSB7XG4gICAgICAgICAgICB4OiBuZXcgQXJyYXkobWFzc0xpc3QubGVuZ3RoKSxcbiAgICAgICAgICAgIHk6IG5ldyBBcnJheShtYXNzTGlzdC5sZW5ndGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXNzTGlzdC5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbXNTdW0ueFtqXSA9IE51bWJlcihtYXNzTGlzdFtqXSk7XG4gICAgICAgICAgICBtc1N1bS55W2pdID0gbWFzc0RpY3Rpb25hcnlbbWFzc0xpc3Rbal1dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWF4TnVtYmVyUGVha3MgfHwgb3B0aW9ucy50aHJlc2hvbGRGYWN0b3IgfHwgb3B0aW9ucy5ncm91cFdpZHRoKSB7XG4gICAgICAgICAgICBtc1N1bSA9IG1hc3NGaWx0ZXIobXNTdW0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHBlYWtMaXN0W2ldLm1zID0gbXNTdW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlYWtMaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc3NJblBlYWtzO1xuIl19

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(105);
	module.exports = __webpack_require__(17).Object.keys;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(49)
	  , $keys    = __webpack_require__(35);

	__webpack_require__(106)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(15)
	  , core    = __webpack_require__(17)
	  , fails   = __webpack_require__(26);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Filters based in groupWidth
	 * @ignore
	 * @param {Array<Object>} list - Sorted list of XY-objects to be filtered
	 * @param {Number} maxNumberPeaks - Maximum number of peaks for each mass spectra
	 * @param {Number} groupWidth - When find a max can't be another max in a radius of this size
	 * @return {Array<Object>} - List of XY-objects filtered
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
	 * @param {Object} massXYObject - Object with x and y data
	 * @param {Array<Number>} massXYObject.x - Array of mass values
	 * @param {Array<Number>} massXYObject.y - Array of abundance values
	 * @param {Object} options - Options for the integral filtering
	 * @param {Number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
	 * @param {Number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
	 * @param {Number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
	 * @return {Object} - Object with filtered x and y data
	 */
	function massFilter(massXYObject) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var _options$thresholdFac = options.thresholdFactor;
	    var thresholdFactor = _options$thresholdFac === undefined ? 0 : _options$thresholdFac;
	    var _options$maxNumberPea = options.maxNumberPeaks;
	    var maxNumberPeaks = _options$maxNumberPea === undefined ? Number.MAX_VALUE : _options$maxNumberPea;
	    var _options$groupWidth = options.groupWidth;
	    var groupWidth = _options$groupWidth === undefined ? 0 : _options$groupWidth;


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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYXNzRmlsdGVyLmpzIl0sIm5hbWVzIjpbIm1vcmVEaXN0aW5jdCIsImxpc3QiLCJtYXhOdW1iZXJQZWFrcyIsImdyb3VwV2lkdGgiLCJsZW4iLCJsZW5ndGgiLCJmaWx0ZXJlZExpc3QiLCJBcnJheSIsImkiLCJvdXRSYW5nZSIsImoiLCJ4IiwibWFzc0ZpbHRlciIsIm1hc3NYWU9iamVjdCIsIm9wdGlvbnMiLCJ0aHJlc2hvbGRGYWN0b3IiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtYXgiLCJtYXNzTGlzdCIsInkiLCJmaWx0ZXIiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJhbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLGNBQTVCLEVBQTRDQyxVQUE1QyxFQUF3RDtBQUNwRCxRQUFJQyxNQUFNLENBQVY7QUFDQSxRQUFJRixpQkFBaUJELEtBQUtJLE1BQTFCLEVBQWtDO0FBQzlCSCx5QkFBaUJELEtBQUtJLE1BQXRCO0FBQ0g7QUFDRCxRQUFJQyxlQUFlLElBQUlDLEtBQUosQ0FBVUwsY0FBVixDQUFuQjs7QUFFQSxTQUFLLElBQUlNLElBQUksQ0FBYixFQUFpQkEsSUFBSVAsS0FBS0ksTUFBVixJQUFzQkQsTUFBTUYsY0FBNUMsRUFBNkQsRUFBRU0sQ0FBL0QsRUFBa0U7QUFDOUQsWUFBSUMsV0FBVyxJQUFmO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlOLEdBQUosSUFBV0ssUUFBM0IsRUFBcUMsRUFBRUMsQ0FBdkMsRUFBMEM7QUFDdENELHVCQUFXQSxZQUFZLEVBQUdSLEtBQUtPLENBQUwsRUFBUUcsQ0FBUixHQUFhTCxhQUFhSSxDQUFiLEVBQWdCQyxDQUFoQixHQUFvQlIsVUFBbEMsSUFBbURGLEtBQUtPLENBQUwsRUFBUUcsQ0FBUixHQUFhTCxhQUFhSSxDQUFiLEVBQWdCQyxDQUFoQixHQUFvQlIsVUFBdEYsQ0FBdkI7QUFDSDtBQUNELFlBQUlNLFFBQUosRUFBYztBQUNWSCx5QkFBYUYsS0FBYixJQUFzQkgsS0FBS08sQ0FBTCxDQUF0QjtBQUNIO0FBQ0o7QUFDREYsaUJBQWFELE1BQWIsR0FBc0JELEdBQXRCOztBQUVBLFdBQU9FLFlBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7QUFXQSxTQUFTTSxVQUFULENBQW9CQyxZQUFwQixFQUFnRDtBQUFBLFFBQWRDLE9BQWMseURBQUosRUFBSTtBQUFBLGdDQUNxQ0EsT0FEckMsQ0FDckNDLGVBRHFDO0FBQUEsUUFDckNBLGVBRHFDLHlDQUNuQixDQURtQjtBQUFBLGdDQUNxQ0QsT0FEckMsQ0FDaEJaLGNBRGdCO0FBQUEsUUFDaEJBLGNBRGdCLHlDQUNDYyxPQUFPQyxTQURSO0FBQUEsOEJBQ3FDSCxPQURyQyxDQUNtQlgsVUFEbkI7QUFBQSxRQUNtQkEsVUFEbkIsdUNBQ2dDLENBRGhDOzs7QUFHNUMsUUFBSWUsTUFBTSxDQUFDLENBQVg7QUFDQSxRQUFJQyxXQUFXLElBQUlaLEtBQUosQ0FBVU0sYUFBYUYsQ0FBYixDQUFlTixNQUF6QixDQUFmO0FBQ0EsU0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlLLGFBQWFGLENBQWIsQ0FBZU4sTUFBbkMsRUFBMkMsRUFBRUcsQ0FBN0MsRUFBZ0Q7QUFDNUNXLGlCQUFTWCxDQUFULElBQWM7QUFDVkcsZUFBR0UsYUFBYUYsQ0FBYixDQUFlSCxDQUFmLENBRE87QUFFVlksZUFBR1AsYUFBYU8sQ0FBYixDQUFlWixDQUFmO0FBRk8sU0FBZDs7QUFLQSxZQUFJSyxhQUFhTyxDQUFiLENBQWVaLENBQWYsSUFBb0JVLEdBQXhCLEVBQTZCO0FBQ3pCQSxrQkFBTUwsYUFBYU8sQ0FBYixDQUFlWixDQUFmLENBQU47QUFDSDtBQUNKOztBQUVEO0FBQ0FVLFdBQU9ILGVBQVA7QUFDQSxRQUFJVCxlQUFlYSxTQUFTRSxNQUFULENBQWdCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJRixDQUFKLEdBQVFGLEdBQWpCO0FBQUEsS0FBaEIsQ0FBbkI7O0FBRUE7QUFDQSxRQUFJWixhQUFhRCxNQUFiLEdBQXNCSCxjQUF0QixJQUF3Q0MsZUFBZSxDQUEzRCxFQUE4RDtBQUMxREcscUJBQWFpQixJQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1CQUFVQSxFQUFFTCxDQUFGLEdBQU1JLEVBQUVKLENBQWxCO0FBQUEsU0FBbEI7O0FBRUE7QUFDQWQsdUJBQWVOLGFBQWFNLFlBQWIsRUFBMkJKLGNBQTNCLEVBQTJDQyxVQUEzQyxDQUFmOztBQUVBRyxxQkFBYWlCLElBQWIsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELEVBQUViLENBQUYsR0FBTWMsRUFBRWQsQ0FBbEI7QUFBQSxTQUFsQjtBQUNIOztBQUVELFFBQUllLE1BQU07QUFDTmYsV0FBRyxJQUFJSixLQUFKLENBQVVELGFBQWFELE1BQXZCLENBREc7QUFFTmUsV0FBRyxJQUFJYixLQUFKLENBQVVELGFBQWFELE1BQXZCO0FBRkcsS0FBVjtBQUlBLFNBQUssSUFBSUcsS0FBSSxDQUFiLEVBQWdCQSxLQUFJRixhQUFhRCxNQUFqQyxFQUF5QyxFQUFFRyxFQUEzQyxFQUE4QztBQUMxQ2tCLFlBQUlmLENBQUosQ0FBTUgsRUFBTixJQUFXRixhQUFhRSxFQUFiLEVBQWdCRyxDQUEzQjtBQUNBZSxZQUFJTixDQUFKLENBQU1aLEVBQU4sSUFBV0YsYUFBYUUsRUFBYixFQUFnQlksQ0FBM0I7QUFDSDs7QUFFRCxXQUFPTSxHQUFQO0FBQ0g7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJoQixVQUFqQiIsImZpbGUiOiJtYXNzRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBGaWx0ZXJzIGJhc2VkIGluIGdyb3VwV2lkdGhcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbGlzdCAtIFNvcnRlZCBsaXN0IG9mIFhZLW9iamVjdHMgdG8gYmUgZmlsdGVyZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhOdW1iZXJQZWFrcyAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYVxuICogQHBhcmFtIHtOdW1iZXJ9IGdyb3VwV2lkdGggLSBXaGVuIGZpbmQgYSBtYXggY2FuJ3QgYmUgYW5vdGhlciBtYXggaW4gYSByYWRpdXMgb2YgdGhpcyBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fSAtIExpc3Qgb2YgWFktb2JqZWN0cyBmaWx0ZXJlZFxuICovXG5mdW5jdGlvbiBtb3JlRGlzdGluY3QobGlzdCwgbWF4TnVtYmVyUGVha3MsIGdyb3VwV2lkdGgpIHtcbiAgICBsZXQgbGVuID0gMDtcbiAgICBpZiAobWF4TnVtYmVyUGVha3MgPiBsaXN0Lmxlbmd0aCkge1xuICAgICAgICBtYXhOdW1iZXJQZWFrcyA9IGxpc3QubGVuZ3RoO1xuICAgIH1cbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gbmV3IEFycmF5KG1heE51bWJlclBlYWtzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyAoaSA8IGxpc3QubGVuZ3RoKSAmJiAobGVuIDwgbWF4TnVtYmVyUGVha3MpOyArK2kpIHtcbiAgICAgICAgbGV0IG91dFJhbmdlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW4gJiYgb3V0UmFuZ2U7ICsraikge1xuICAgICAgICAgICAgb3V0UmFuZ2UgPSBvdXRSYW5nZSAmJiAhKChsaXN0W2ldLnggPiAoZmlsdGVyZWRMaXN0W2pdLnggLSBncm91cFdpZHRoKSkgJiYgKGxpc3RbaV0ueCA8IChmaWx0ZXJlZExpc3Rbal0ueCArIGdyb3VwV2lkdGgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dFJhbmdlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZExpc3RbbGVuKytdID0gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWx0ZXJlZExpc3QubGVuZ3RoID0gbGVuO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbn1cblxuLyoqXG4gKiBGaWx0ZXJzIGEgbWFzcyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXNzWFlPYmplY3QgLSBPYmplY3Qgd2l0aCB4IGFuZCB5IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbWFzc1hZT2JqZWN0LnggLSBBcnJheSBvZiBtYXNzIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBtYXNzWFlPYmplY3QueSAtIEFycmF5IG9mIGFidW5kYW5jZSB2YWx1ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGludGVncmFsIGZpbHRlcmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEByZXR1cm4ge09iamVjdH0gLSBPYmplY3Qgd2l0aCBmaWx0ZXJlZCB4IGFuZCB5IGRhdGFcbiAqL1xuZnVuY3Rpb24gbWFzc0ZpbHRlcihtYXNzWFlPYmplY3QsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHt0aHJlc2hvbGRGYWN0b3IgPSAwLCBtYXhOdW1iZXJQZWFrcyA9IE51bWJlci5NQVhfVkFMVUUsIGdyb3VwV2lkdGggPSAwfSA9IG9wdGlvbnM7XG5cbiAgICBsZXQgbWF4ID0gLTE7XG4gICAgbGV0IG1hc3NMaXN0ID0gbmV3IEFycmF5KG1hc3NYWU9iamVjdC54Lmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzWFlPYmplY3QueC5sZW5ndGg7ICsraSkge1xuICAgICAgICBtYXNzTGlzdFtpXSA9IHtcbiAgICAgICAgICAgIHg6IG1hc3NYWU9iamVjdC54W2ldLFxuICAgICAgICAgICAgeTogbWFzc1hZT2JqZWN0LnlbaV1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWFzc1hZT2JqZWN0LnlbaV0gPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IG1hc3NYWU9iamVjdC55W2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsdGVycyBiYXNlZCBpbiB0aHJlc2hvbGRGYWN0b3JcbiAgICBtYXggKj0gdGhyZXNob2xkRmFjdG9yO1xuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBtYXNzTGlzdC5maWx0ZXIoKHZhbCkgPT4gdmFsLnkgPiBtYXgpO1xuXG4gICAgLy8gZmlsdGVycyBiYXNlZCBpbiBtYXhOdW1iZXJQZWFrc1xuICAgIGlmIChmaWx0ZXJlZExpc3QubGVuZ3RoID4gbWF4TnVtYmVyUGVha3MgfHwgZ3JvdXBXaWR0aCAhPT0gMCkge1xuICAgICAgICBmaWx0ZXJlZExpc3Quc29ydCgoYSwgYikgPT4gYi55IC0gYS55KTtcblxuICAgICAgICAvLyBmaWx0ZXJzIGJhc2VkIGluIGdyb3VwV2lkdGhcbiAgICAgICAgZmlsdGVyZWRMaXN0ID0gbW9yZURpc3RpbmN0KGZpbHRlcmVkTGlzdCwgbWF4TnVtYmVyUGVha3MsIGdyb3VwV2lkdGgpO1xuXG4gICAgICAgIGZpbHRlcmVkTGlzdC5zb3J0KChhLCBiKSA9PiBhLnggLSBiLngpO1xuICAgIH1cblxuICAgIGxldCBhbnMgPSB7XG4gICAgICAgIHg6IG5ldyBBcnJheShmaWx0ZXJlZExpc3QubGVuZ3RoKSxcbiAgICAgICAgeTogbmV3IEFycmF5KGZpbHRlcmVkTGlzdC5sZW5ndGgpXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICBhbnMueFtpXSA9IGZpbHRlcmVkTGlzdFtpXS54O1xuICAgICAgICBhbnMueVtpXSA9IGZpbHRlcmVkTGlzdFtpXS55O1xuICAgIH1cblxuICAgIHJldHVybiBhbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFzc0ZpbHRlcjtcbiJdfQ==

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var massFilter = __webpack_require__(107);

	/**
	 * Given a list of GSD objects returns the weighted mass times abundance
	 * @param {Array<Object>} peakList - List of GSD objects
	 * @param {Object} options - Options for the integral filtering
	 * @param {Number} [options.massPower = 3] - Power applied to the mass values
	 * @param {Number} [options.intPower = 0.6] - Power applied to the abundance values
	 * @param {Number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
	 * @param {Number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
	 * @param {Number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
	 * @return {Array<Object>} - List of mass and weighted mass times abundance objects
	 */
	function vectorify(peakList) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var _options$massPower = options.massPower;
	    var massPower = _options$massPower === undefined ? 3 : _options$massPower;
	    var _options$intPower = options.intPower;
	    var intPower = _options$intPower === undefined ? 0.6 : _options$intPower;

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92ZWN0b3JpZnkuanMiXSwibmFtZXMiOlsibWFzc0ZpbHRlciIsInJlcXVpcmUiLCJ2ZWN0b3JpZnkiLCJwZWFrTGlzdCIsIm9wdGlvbnMiLCJtYXNzUG93ZXIiLCJpbnRQb3dlciIsImZpbHRlciIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiZ3JvdXBXaWR0aCIsInZlY3RvciIsIkFycmF5IiwibGVuZ3RoIiwiZmlsdGVyT3B0aW9ucyIsImkiLCJsZW4iLCJtcyIsIngiLCJ5IiwiaiIsIk1hdGgiLCJwb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGNBQVIsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0EsU0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsRUFBMkM7QUFBQSxRQUFkQyxPQUFjLHlEQUFKLEVBQUk7QUFBQSw2QkFDQ0EsT0FERCxDQUNoQ0MsU0FEZ0M7QUFBQSxRQUNoQ0EsU0FEZ0Msc0NBQ3BCLENBRG9CO0FBQUEsNEJBQ0NELE9BREQsQ0FDakJFLFFBRGlCO0FBQUEsUUFDakJBLFFBRGlCLHFDQUNOLEdBRE07O0FBRXZDLFFBQUlDLFNBQVVILFFBQVFJLGVBQVIsSUFBMkJKLFFBQVFLLGNBQW5DLElBQXFETCxRQUFRTSxVQUEzRTs7QUFFQSxRQUFJQyxTQUFTLElBQUlDLEtBQUosQ0FBVVQsU0FBU1UsTUFBbkIsQ0FBYjtBQUNBLFFBQUlOLE1BQUosRUFBWTtBQUNSLFlBQU1PLGdCQUFnQjtBQUNsQk4sNkJBQWlCSixRQUFRSSxlQURQO0FBRWxCQyw0QkFBZ0JMLFFBQVFLLGNBRk47QUFHbEJDLHdCQUFZTixRQUFRTTtBQUhGLFNBQXRCOztBQU1BLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJWixTQUFTVSxNQUE3QixFQUFxQyxFQUFFRSxDQUF2QyxFQUEwQztBQUN0QyxnQkFBSUMsTUFBTWIsU0FBU1ksQ0FBVCxFQUFZRSxFQUFaLENBQWVDLENBQWYsQ0FBaUJMLE1BQTNCO0FBQ0FGLG1CQUFPSSxDQUFQLElBQVk7QUFDUkcsbUJBQUdmLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlQyxDQURWO0FBRVJDLG1CQUFHLElBQUlQLEtBQUosQ0FBVUksR0FBVjtBQUZLLGFBQVo7QUFJQSxpQkFBSyxJQUFJSSxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLEdBQXBCLEVBQXlCLEVBQUVJLENBQTNCLEVBQThCO0FBQzFCVCx1QkFBT0ksQ0FBUCxFQUFVSSxDQUFWLENBQVlDLENBQVosSUFBaUJDLEtBQUtDLEdBQUwsQ0FBU25CLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlQyxDQUFmLENBQWlCRSxDQUFqQixDQUFULEVBQThCZixTQUE5QixJQUEyQ2dCLEtBQUtDLEdBQUwsQ0FBU25CLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlRSxDQUFmLENBQWlCQyxDQUFqQixDQUFULEVBQThCZCxRQUE5QixDQUE1RDtBQUNIOztBQUVESyxtQkFBT0ksQ0FBUCxJQUFZZixXQUFXVyxPQUFPSSxDQUFQLENBQVgsRUFBc0JELGFBQXRCLENBQVo7QUFDSDtBQUNKLEtBbkJELE1BbUJPO0FBQ0gsYUFBSyxJQUFJQyxLQUFJLENBQWIsRUFBZ0JBLEtBQUlaLFNBQVNVLE1BQTdCLEVBQXFDLEVBQUVFLEVBQXZDLEVBQTBDO0FBQ3RDLGdCQUFJQyxPQUFNYixTQUFTWSxFQUFULEVBQVlFLEVBQVosQ0FBZUMsQ0FBZixDQUFpQkwsTUFBM0I7QUFDQUYsbUJBQU9JLEVBQVAsSUFBWTtBQUNSRyxtQkFBR2YsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVDLENBRFY7QUFFUkMsbUJBQUcsSUFBSVAsS0FBSixDQUFVSSxJQUFWO0FBRkssYUFBWjtBQUlBLGlCQUFLLElBQUlJLEtBQUksQ0FBYixFQUFnQkEsS0FBSUosSUFBcEIsRUFBeUIsRUFBRUksRUFBM0IsRUFBOEI7QUFDMUJULHVCQUFPSSxFQUFQLEVBQVVJLENBQVYsQ0FBWUMsRUFBWixJQUFpQkMsS0FBS0MsR0FBTCxDQUFTbkIsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVDLENBQWYsQ0FBaUJFLEVBQWpCLENBQVQsRUFBOEJmLFNBQTlCLElBQTJDZ0IsS0FBS0MsR0FBTCxDQUFTbkIsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVFLENBQWYsQ0FBaUJDLEVBQWpCLENBQVQsRUFBOEJkLFFBQTlCLENBQTVEO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQU9LLE1BQVA7QUFDSDs7QUFFRFksT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6InZlY3RvcmlmeS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hc3NGaWx0ZXIgPSByZXF1aXJlKCcuL21hc3NGaWx0ZXInKTtcblxuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgR1NEIG9iamVjdHMgcmV0dXJucyB0aGUgd2VpZ2h0ZWQgbWFzcyB0aW1lcyBhYnVuZGFuY2VcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gcGVha0xpc3QgLSBMaXN0IG9mIEdTRCBvYmplY3RzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSBpbnRlZ3JhbCBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5tYXNzUG93ZXIgPSAzXSAtIFBvd2VyIGFwcGxpZWQgdG8gdGhlIG1hc3MgdmFsdWVzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaW50UG93ZXIgPSAwLjZdIC0gUG93ZXIgYXBwbGllZCB0byB0aGUgYWJ1bmRhbmNlIHZhbHVlc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IC0gTGlzdCBvZiBtYXNzIGFuZCB3ZWlnaHRlZCBtYXNzIHRpbWVzIGFidW5kYW5jZSBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIHZlY3RvcmlmeShwZWFrTGlzdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge21hc3NQb3dlciA9IDMsIGludFBvd2VyID0gMC42fSA9IG9wdGlvbnM7XG4gICAgbGV0IGZpbHRlciA9IChvcHRpb25zLnRocmVzaG9sZEZhY3RvciB8fCBvcHRpb25zLm1heE51bWJlclBlYWtzIHx8IG9wdGlvbnMuZ3JvdXBXaWR0aCk7XG5cbiAgICBsZXQgdmVjdG9yID0gbmV3IEFycmF5KHBlYWtMaXN0Lmxlbmd0aCk7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgICBjb25zdCBmaWx0ZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgdGhyZXNob2xkRmFjdG9yOiBvcHRpb25zLnRocmVzaG9sZEZhY3RvcixcbiAgICAgICAgICAgIG1heE51bWJlclBlYWtzOiBvcHRpb25zLm1heE51bWJlclBlYWtzLFxuICAgICAgICAgICAgZ3JvdXBXaWR0aDogb3B0aW9ucy5ncm91cFdpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZWFrTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGxlbiA9IHBlYWtMaXN0W2ldLm1zLngubGVuZ3RoO1xuICAgICAgICAgICAgdmVjdG9yW2ldID0ge1xuICAgICAgICAgICAgICAgIHg6IHBlYWtMaXN0W2ldLm1zLngsXG4gICAgICAgICAgICAgICAgeTogbmV3IEFycmF5KGxlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgKytqKSB7XG4gICAgICAgICAgICAgICAgdmVjdG9yW2ldLnlbal0gPSBNYXRoLnBvdyhwZWFrTGlzdFtpXS5tcy54W2pdLCBtYXNzUG93ZXIpICogTWF0aC5wb3cocGVha0xpc3RbaV0ubXMueVtqXSwgaW50UG93ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZWN0b3JbaV0gPSBtYXNzRmlsdGVyKHZlY3RvcltpXSwgZmlsdGVyT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlYWtMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gcGVha0xpc3RbaV0ubXMueC5sZW5ndGg7XG4gICAgICAgICAgICB2ZWN0b3JbaV0gPSB7XG4gICAgICAgICAgICAgICAgeDogcGVha0xpc3RbaV0ubXMueCxcbiAgICAgICAgICAgICAgICB5OiBuZXcgQXJyYXkobGVuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyArK2opIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3JbaV0ueVtqXSA9IE1hdGgucG93KHBlYWtMaXN0W2ldLm1zLnhbal0sIG1hc3NQb3dlcikgKiBNYXRoLnBvdyhwZWFrTGlzdFtpXS5tcy55W2pdLCBpbnRQb3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlY3RvcmlmeTtcbiJdfQ==

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Cosine similarity between two MS spectra
	 * @param {Array<Number>} ms1x - Array of mass values for the first spectra
	 * @param {Array<Number>} ms1y - Array of weighted abundance values for the first spectra
	 * @param {Array<Number>} ms2x - Array of mass values for the second spectra
	 * @param {Array<Number>} ms2y - Array of weighted abundance values for the second spectra
	 * @return {Number} - Similarity between two MS spectra
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3NpbmUuanMiXSwibmFtZXMiOlsiY29zaW5lIiwibXMxeCIsIm1zMXkiLCJtczJ4IiwibXMyeSIsImluZGV4MSIsImluZGV4MiIsInByb2R1Y3QiLCJub3JtMSIsIm5vcm0yIiwibGVuZ3RoIiwidzEiLCJ3MiIsIm5vcm0xTm9ybTIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDcEMsUUFBSUMsU0FBUyxDQUFiO0FBQ0EsUUFBSUMsU0FBUyxDQUFiOztBQUVBLFFBQUlDLFVBQVUsQ0FBZDtBQUNBLFFBQUlDLFFBQVEsQ0FBWjtBQUNBLFFBQUlDLFFBQVEsQ0FBWjs7QUFFQSxXQUFRSixTQUFTSixLQUFLUyxNQUFmLElBQTJCSixTQUFTSCxLQUFLTyxNQUFoRCxFQUF5RDtBQUNyRCxZQUFJQyxLQUFLVCxLQUFLRyxNQUFMLENBQVQ7QUFDQSxZQUFJTyxLQUFLUixLQUFLRSxNQUFMLENBQVQ7QUFDQSxZQUFJQSxXQUFXSCxLQUFLTyxNQUFoQixJQUEwQlQsS0FBS0ksTUFBTCxJQUFlRixLQUFLRyxNQUFMLENBQTdDLEVBQTJEO0FBQ3ZERSxxQkFBU0csS0FBS0EsRUFBZDtBQUNBLGNBQUVOLE1BQUY7QUFDSCxTQUhELE1BR08sSUFBSUEsV0FBV0osS0FBS1MsTUFBaEIsSUFBMEJQLEtBQUtHLE1BQUwsSUFBZUwsS0FBS0ksTUFBTCxDQUE3QyxFQUEyRDtBQUM5REkscUJBQVNHLEtBQUtBLEVBQWQ7QUFDQSxjQUFFTixNQUFGO0FBQ0gsU0FITSxNQUdBO0FBQ0hDLHVCQUFXSSxLQUFLQyxFQUFoQjtBQUNBSixxQkFBU0csS0FBS0EsRUFBZDtBQUNBRixxQkFBU0csS0FBS0EsRUFBZDtBQUNBLGNBQUVQLE1BQUY7QUFDQSxjQUFFQyxNQUFGO0FBQ0g7QUFDSjs7QUFFRCxRQUFJTyxhQUFhTCxRQUFRQyxLQUF6QjtBQUNBLFFBQUlJLGVBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsZUFBTyxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBUU4sVUFBVUEsT0FBWCxHQUF1Qk0sVUFBOUI7QUFDSDtBQUNKOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZixNQUFqQiIsImZpbGUiOiJjb3NpbmUuanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvc2luZSBzaW1pbGFyaXR5IGJldHdlZW4gdHdvIE1TIHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbXMxeCAtIEFycmF5IG9mIG1hc3MgdmFsdWVzIGZvciB0aGUgZmlyc3Qgc3BlY3RyYVxuICogQHBhcmFtIHtBcnJheTxOdW1iZXI+fSBtczF5IC0gQXJyYXkgb2Ygd2VpZ2h0ZWQgYWJ1bmRhbmNlIHZhbHVlcyBmb3IgdGhlIGZpcnN0IHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbXMyeCAtIEFycmF5IG9mIG1hc3MgdmFsdWVzIGZvciB0aGUgc2Vjb25kIHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gbXMyeSAtIEFycmF5IG9mIHdlaWdodGVkIGFidW5kYW5jZSB2YWx1ZXMgZm9yIHRoZSBzZWNvbmQgc3BlY3RyYVxuICogQHJldHVybiB7TnVtYmVyfSAtIFNpbWlsYXJpdHkgYmV0d2VlbiB0d28gTVMgc3BlY3RyYVxuICovXG5mdW5jdGlvbiBjb3NpbmUobXMxeCwgbXMxeSwgbXMyeCwgbXMyeSkge1xuICAgIGxldCBpbmRleDEgPSAwO1xuICAgIGxldCBpbmRleDIgPSAwO1xuXG4gICAgbGV0IHByb2R1Y3QgPSAwO1xuICAgIGxldCBub3JtMSA9IDA7XG4gICAgbGV0IG5vcm0yID0gMDtcblxuICAgIHdoaWxlICgoaW5kZXgxIDwgbXMxeC5sZW5ndGgpIHx8IChpbmRleDIgPCBtczJ4Lmxlbmd0aCkpIHtcbiAgICAgICAgbGV0IHcxID0gbXMxeVtpbmRleDFdO1xuICAgICAgICBsZXQgdzIgPSBtczJ5W2luZGV4Ml07XG4gICAgICAgIGlmIChpbmRleDIgPT09IG1zMngubGVuZ3RoIHx8IG1zMXhbaW5kZXgxXSA8IG1zMnhbaW5kZXgyXSkge1xuICAgICAgICAgICAgbm9ybTEgKz0gdzEgKiB3MTtcbiAgICAgICAgICAgICsraW5kZXgxO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4MSA9PT0gbXMxeC5sZW5ndGggfHwgbXMyeFtpbmRleDJdIDwgbXMxeFtpbmRleDFdKSB7XG4gICAgICAgICAgICBub3JtMiArPSB3MiAqIHcyO1xuICAgICAgICAgICAgKytpbmRleDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0ICs9IHcxICogdzI7XG4gICAgICAgICAgICBub3JtMSArPSB3MSAqIHcxO1xuICAgICAgICAgICAgbm9ybTIgKz0gdzIgKiB3MjtcbiAgICAgICAgICAgICsraW5kZXgxO1xuICAgICAgICAgICAgKytpbmRleDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbm9ybTFOb3JtMiA9IG5vcm0xICogbm9ybTI7XG4gICAgaWYgKG5vcm0xTm9ybTIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChwcm9kdWN0ICogcHJvZHVjdCkgLyAobm9ybTFOb3JtMik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvc2luZTtcbiJdfQ==

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(111);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var peakPicking = __webpack_require__(80);
	var massInPeaks = __webpack_require__(102);
	var vectorify = __webpack_require__(108);
	var cosine = __webpack_require__(109);

	/**
	 * Preprocessing task over the signals
	 * @ignore
	 * @param {Chromatogram} chromatography - Chromatogram to process
	 * @param {Object} [options] - Options object (same as spectraComparison)
	 * @return {{peaks: Array<Object>, integratedMs: Array<Object>, vector: Array<Object>}} - Array of peaks, integrated mass spectra and weighted mass spectra
	 */
	function preprocessing(chromatography, options) {
	    // peak picking
	    var peaks = peakPicking(chromatography, options);
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
	 * @param {Object} [options] - Options object
	 * @param {Number} [options.thresholdFactor = 0] - Every peak that it's bellow the main peak times this factor fill be removed (when is 0 there's no filter)
	 * @param {Number} [options.maxNumberPeaks = Number.MAX_VALUE] - Maximum number of peaks for each mass spectra (when is Number.MAX_VALUE there's no filter)
	 * @param {Number} [options.groupWidth = 0] - When find a max can't be another max in a radius of this size
	 * @param {Number} [options.heightFilter = 2] - Filter all objects that are bellow `heightFilter` times the median of the height
	 * @param {Number} [options.massPower = 3] - Power applied to the mass values
	 * @param {Number} [options.intPower = 0.6] - Power applied to the abundance values
	 * @param {Number} [options.similarityThreshold = 0.7] - Minimum similarity value to consider them similar
	 * @return {Object} - Most similar peaks and their similarities:
	 * * `peaksFirst`: Array of peaks, integrated mass spectra and weighted mass spectra for the first chromatogram
	 * * `peaksSecond`: Array of peaks, integrated mass spectra and weighted mass spectra for the second chromatogram
	 * * `peaksSimilarity`: Array of similarities (Number)
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
	        if (duplicates.hasOwnProperty(similarityPeaks.chrom1[_i].x)) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGVjdHJhQ29tcGFyaXNvbi5qcyJdLCJuYW1lcyI6WyJwZWFrUGlja2luZyIsInJlcXVpcmUiLCJtYXNzSW5QZWFrcyIsInZlY3RvcmlmeSIsImNvc2luZSIsInByZXByb2Nlc3NpbmciLCJjaHJvbWF0b2dyYXBoeSIsIm9wdGlvbnMiLCJwZWFrcyIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwibXMiLCJmaW5kU2VyaWVCeU5hbWUiLCJkYXRhIiwiaW50ZWdyYXRlZE1zIiwidmVjdG9yIiwiZGVmYXVsdE9wdGlvbiIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiZ3JvdXBXaWR0aCIsImhlaWdodEZpbHRlciIsIm1hc3NQb3dlciIsImludFBvd2VyIiwic2ltaWxhcml0eVRocmVzaG9sZCIsInNwZWN0cmFDb21wYXJpc29uIiwiY2hyb20xIiwiY2hyb20yIiwicmVmZXJlbmNlIiwic2FtcGxlIiwibGVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsInNpbWlsYXJpdHlQZWFrcyIsIkFycmF5Iiwic2ltaWxhcml0eSIsInNpbWlsYXJMZW4iLCJpIiwiYmlnZ2VyQ291bnRlciIsImoiLCJzaW0iLCJ4IiwieSIsImR1cGxpY2F0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJwZWFrc0Nocm9tMSIsInBlYWtzQ2hyb20yIiwicGVha3NTaW1pbGFyaXR5IiwidmFsIiwicGVha3NGaXJzdCIsInBlYWtzU2Vjb25kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBY0MsUUFBUSxlQUFSLENBQXBCO0FBQ0EsSUFBTUMsY0FBY0QsUUFBUSxlQUFSLENBQXBCO0FBQ0EsSUFBTUUsWUFBWUYsUUFBUSxhQUFSLENBQWxCO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUSxVQUFSLENBQWY7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTSSxhQUFULENBQXVCQyxjQUF2QixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDNUM7QUFDQSxRQUFJQyxRQUFRUixZQUFZTSxjQUFaLEVBQTRCQyxPQUE1QixDQUFaO0FBQ0FDLFlBQVFBLE1BQU1DLElBQU4sQ0FBVyxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxFQUFFRSxLQUFGLEdBQVVELEVBQUVDLEtBQXRCO0FBQUEsS0FBWCxDQUFSOztBQUVBO0FBQ0EsUUFBSUMsS0FBS1AsZUFBZVEsZUFBZixDQUErQixJQUEvQixFQUFxQ0MsSUFBOUM7QUFDQSxRQUFJQyxlQUFlZCxZQUFZTSxLQUFaLEVBQW1CSyxFQUFuQixFQUF1Qk4sT0FBdkIsQ0FBbkI7QUFDQSxRQUFJVSxTQUFTZCxVQUFVYSxZQUFWLEVBQXdCVCxPQUF4QixDQUFiOztBQUVBLFdBQU87QUFDSEMsb0JBREc7QUFFSFEsa0NBRkc7QUFHSEM7QUFIRyxLQUFQO0FBS0g7O0FBRUQsSUFBTUMsZ0JBQWdCO0FBQ2xCQyxxQkFBaUIsQ0FEQztBQUVsQkMsb0JBQWdCQyxPQUFPQyxTQUZMO0FBR2xCQyxnQkFBWSxDQUhNO0FBSWxCQyxrQkFBYyxDQUpJO0FBS2xCQyxlQUFXLENBTE87QUFNbEJDLGNBQVUsR0FOUTtBQU9sQkMseUJBQXFCO0FBUEgsQ0FBdEI7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLFNBQVNDLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQ0MsTUFBbkMsRUFBMkN2QixPQUEzQyxFQUFvRDtBQUNoREEsY0FBVSxzQkFBYyxFQUFkLEVBQWtCVyxhQUFsQixFQUFpQ1gsT0FBakMsQ0FBVjs7QUFFQTtBQUNBLFFBQUl3QixZQUFZMUIsY0FBY3dCLE1BQWQsRUFBc0J0QixPQUF0QixDQUFoQjtBQUNBLFFBQUl5QixTQUFTM0IsY0FBY3lCLE1BQWQsRUFBc0J2QixPQUF0QixDQUFiOztBQUVBO0FBQ0EsUUFBTTBCLE1BQU1DLEtBQUtDLEdBQUwsQ0FBU0gsT0FBT3hCLEtBQVAsQ0FBYTRCLE1BQXRCLEVBQThCTCxVQUFVdkIsS0FBVixDQUFnQjRCLE1BQTlDLENBQVo7QUFDQSxRQUFJQyxrQkFBa0I7QUFDbEJSLGdCQUFRLElBQUlTLEtBQUosQ0FBVUwsR0FBVixDQURVO0FBRWxCSCxnQkFBUSxJQUFJUSxLQUFKLENBQVVMLEdBQVYsQ0FGVTtBQUdsQk0sb0JBQVksSUFBSUQsS0FBSixDQUFVTCxHQUFWO0FBSE0sS0FBdEI7QUFLQSxRQUFJTyxhQUFhLENBQWpCOztBQUVBO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlULE9BQU94QixLQUFQLENBQWE0QixNQUFqQyxFQUF5QyxFQUFFSyxDQUEzQyxFQUE4QztBQUMxQyxZQUFJTixNQUFNLEVBQUNJLFlBQVksQ0FBQyxDQUFkLEVBQVY7QUFDQSxZQUFJRyxnQkFBZ0IsQ0FBcEI7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVosVUFBVXZCLEtBQVYsQ0FBZ0I0QixNQUFwQyxFQUE0QyxFQUFFTyxDQUE5QyxFQUFpRDtBQUM3QyxnQkFBSUMsTUFBTXhDLE9BQU80QixPQUFPZixNQUFQLENBQWN3QixDQUFkLEVBQWlCSSxDQUF4QixFQUEyQmIsT0FBT2YsTUFBUCxDQUFjd0IsQ0FBZCxFQUFpQkssQ0FBNUMsRUFBK0NmLFVBQVVkLE1BQVYsQ0FBaUIwQixDQUFqQixFQUFvQkUsQ0FBbkUsRUFBc0VkLFVBQVVkLE1BQVYsQ0FBaUIwQixDQUFqQixFQUFvQkcsQ0FBMUYsQ0FBVjs7QUFFQSxnQkFBSUYsTUFBTXJDLFFBQVFvQixtQkFBZCxJQUFxQ2lCLE1BQU1ULElBQUlJLFVBQW5ELEVBQStEO0FBQzNESixzQkFBTTtBQUNGSSxnQ0FBWUssR0FEVjtBQUVGZiw0QkFBUUUsVUFBVXZCLEtBQVYsQ0FBZ0JtQyxDQUFoQixDQUZOO0FBR0ZiLDRCQUFRRSxPQUFPeEIsS0FBUCxDQUFhaUMsQ0FBYjtBQUhOLGlCQUFOO0FBS0g7QUFDRCxnQkFBSUcsTUFBTXJDLFFBQVFvQixtQkFBbEIsRUFBdUM7QUFDbkMsa0JBQUVlLGFBQUY7QUFDSDtBQUNKO0FBQ0QsWUFBSUEsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3JCTCw0QkFBZ0JSLE1BQWhCLENBQXVCVyxVQUF2QixJQUFxQ0wsSUFBSU4sTUFBekM7QUFDQVEsNEJBQWdCUCxNQUFoQixDQUF1QlUsVUFBdkIsSUFBcUNMLElBQUlMLE1BQXpDO0FBQ0FPLDRCQUFnQkUsVUFBaEIsQ0FBMkJDLFlBQTNCLElBQTJDTCxJQUFJSSxVQUEvQztBQUNIO0FBQ0o7QUFDREYsb0JBQWdCUixNQUFoQixDQUF1Qk8sTUFBdkIsR0FBZ0NJLFVBQWhDO0FBQ0FILG9CQUFnQlAsTUFBaEIsQ0FBdUJNLE1BQXZCLEdBQWdDSSxVQUFoQzs7QUFFQSxRQUFJTyxhQUFhLEVBQWpCO0FBQ0EsU0FBSyxJQUFJTixLQUFJLENBQWIsRUFBZ0JBLEtBQUlELFVBQXBCLEVBQWdDLEVBQUVDLEVBQWxDLEVBQXFDO0FBQ2pDLFlBQUlNLFdBQVdDLGNBQVgsQ0FBMEJYLGdCQUFnQlIsTUFBaEIsQ0FBdUJZLEVBQXZCLEVBQTBCSSxDQUFwRCxDQUFKLEVBQTREO0FBQ3hERSx1QkFBV1YsZ0JBQWdCUixNQUFoQixDQUF1QlksRUFBdkIsRUFBMEJJLENBQXJDLEVBQXdDSSxJQUF4QyxDQUE2Q1IsRUFBN0M7QUFDSCxTQUZELE1BRU87QUFDSE0sdUJBQVdWLGdCQUFnQlIsTUFBaEIsQ0FBdUJZLEVBQXZCLEVBQTBCSSxDQUFyQyxJQUEwQyxDQUFDSixFQUFELENBQTFDO0FBQ0g7QUFDSjs7QUFFRCxRQUFJUyxjQUFjLEVBQWxCO0FBQ0EsUUFBSUMsY0FBYyxFQUFsQjtBQUNBLFFBQUlDLGtCQUFrQixFQUF0QjtBQUNBLFNBQUssSUFBSUMsR0FBVCxJQUFnQk4sVUFBaEIsRUFBNEI7QUFDeEIsWUFBSUEsV0FBV00sR0FBWCxFQUFnQmpCLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQzlCYyx3QkFBWUQsSUFBWixDQUFpQlosZ0JBQWdCUixNQUFoQixDQUF1QmtCLFdBQVdNLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBdkIsQ0FBakI7QUFDQUYsd0JBQVlGLElBQVosQ0FBaUJaLGdCQUFnQlAsTUFBaEIsQ0FBdUJpQixXQUFXTSxHQUFYLEVBQWdCLENBQWhCLENBQXZCLENBQWpCO0FBQ0FELDRCQUFnQkgsSUFBaEIsQ0FBcUJaLGdCQUFnQkUsVUFBaEIsQ0FBMkJRLFdBQVdNLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBM0IsQ0FBckI7QUFDSDtBQUNKOztBQUVELFdBQU87QUFDSEMsb0JBQVlKLFdBRFQ7QUFFSEsscUJBQWFKLFdBRlY7QUFHSEMseUJBQWlCQTtBQUhkLEtBQVA7QUFLSDs7QUFFREksT0FBT0MsT0FBUCxHQUFpQjdCLGlCQUFqQiIsImZpbGUiOiJzcGVjdHJhQ29tcGFyaXNvbi5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBlYWtQaWNraW5nID0gcmVxdWlyZSgnLi9wZWFrUGlja2luZycpO1xuY29uc3QgbWFzc0luUGVha3MgPSByZXF1aXJlKCcuL21hc3NJblBlYWtzJyk7XG5jb25zdCB2ZWN0b3JpZnkgPSByZXF1aXJlKCcuL3ZlY3RvcmlmeScpO1xuY29uc3QgY29zaW5lID0gcmVxdWlyZSgnLi9jb3NpbmUnKTtcblxuLyoqXG4gKiBQcmVwcm9jZXNzaW5nIHRhc2sgb3ZlciB0aGUgc2lnbmFsc1xuICogQGlnbm9yZVxuICogQHBhcmFtIHtDaHJvbWF0b2dyYW19IGNocm9tYXRvZ3JhcGh5IC0gQ2hyb21hdG9ncmFtIHRvIHByb2Nlc3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdCAoc2FtZSBhcyBzcGVjdHJhQ29tcGFyaXNvbilcbiAqIEByZXR1cm4ge3twZWFrczogQXJyYXk8T2JqZWN0PiwgaW50ZWdyYXRlZE1zOiBBcnJheTxPYmplY3Q+LCB2ZWN0b3I6IEFycmF5PE9iamVjdD59fSAtIEFycmF5IG9mIHBlYWtzLCBpbnRlZ3JhdGVkIG1hc3Mgc3BlY3RyYSBhbmQgd2VpZ2h0ZWQgbWFzcyBzcGVjdHJhXG4gKi9cbmZ1bmN0aW9uIHByZXByb2Nlc3NpbmcoY2hyb21hdG9ncmFwaHksIG9wdGlvbnMpIHtcbiAgICAvLyBwZWFrIHBpY2tpbmdcbiAgICBsZXQgcGVha3MgPSBwZWFrUGlja2luZyhjaHJvbWF0b2dyYXBoeSwgb3B0aW9ucyk7XG4gICAgcGVha3MgPSBwZWFrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4IC0gYi5pbmRleCk7XG5cbiAgICAvLyBpbnRlZ3JhdGUgbWFzcyBpbiB0aGUgcGVha3NcbiAgICBsZXQgbXMgPSBjaHJvbWF0b2dyYXBoeS5maW5kU2VyaWVCeU5hbWUoJ21zJykuZGF0YTtcbiAgICBsZXQgaW50ZWdyYXRlZE1zID0gbWFzc0luUGVha3MocGVha3MsIG1zLCBvcHRpb25zKTtcbiAgICBsZXQgdmVjdG9yID0gdmVjdG9yaWZ5KGludGVncmF0ZWRNcywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwZWFrcyxcbiAgICAgICAgaW50ZWdyYXRlZE1zLFxuICAgICAgICB2ZWN0b3JcbiAgICB9O1xufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9uID0ge1xuICAgIHRocmVzaG9sZEZhY3RvcjogMCxcbiAgICBtYXhOdW1iZXJQZWFrczogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICBncm91cFdpZHRoOiAwLFxuICAgIGhlaWdodEZpbHRlcjogMixcbiAgICBtYXNzUG93ZXI6IDMsXG4gICAgaW50UG93ZXI6IDAuNixcbiAgICBzaW1pbGFyaXR5VGhyZXNob2xkOiAwLjdcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbW9zdCBzaW1pbGFyIHBlYWtzIGJldHdlZW4gdHdvIEdDL01TIGFuZCB0aGVpciBzaW1pbGFyaXRpZXNcbiAqIEBwYXJhbSB7Q2hyb21hdG9ncmFtfSBjaHJvbTEgLSBGaXJzdCBjaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7Q2hyb21hdG9ncmFtfSBjaHJvbTIgLSBTZWNvbmQgY2hyb21hdG9ncmFtXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy50aHJlc2hvbGRGYWN0b3IgPSAwXSAtIEV2ZXJ5IHBlYWsgdGhhdCBpdCdzIGJlbGxvdyB0aGUgbWFpbiBwZWFrIHRpbWVzIHRoaXMgZmFjdG9yIGZpbGwgYmUgcmVtb3ZlZCAod2hlbiBpcyAwIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1heE51bWJlclBlYWtzID0gTnVtYmVyLk1BWF9WQUxVRV0gLSBNYXhpbXVtIG51bWJlciBvZiBwZWFrcyBmb3IgZWFjaCBtYXNzIHNwZWN0cmEgKHdoZW4gaXMgTnVtYmVyLk1BWF9WQUxVRSB0aGVyZSdzIG5vIGZpbHRlcilcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5ncm91cFdpZHRoID0gMF0gLSBXaGVuIGZpbmQgYSBtYXggY2FuJ3QgYmUgYW5vdGhlciBtYXggaW4gYSByYWRpdXMgb2YgdGhpcyBzaXplXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuaGVpZ2h0RmlsdGVyID0gMl0gLSBGaWx0ZXIgYWxsIG9iamVjdHMgdGhhdCBhcmUgYmVsbG93IGBoZWlnaHRGaWx0ZXJgIHRpbWVzIHRoZSBtZWRpYW4gb2YgdGhlIGhlaWdodFxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLm1hc3NQb3dlciA9IDNdIC0gUG93ZXIgYXBwbGllZCB0byB0aGUgbWFzcyB2YWx1ZXNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5pbnRQb3dlciA9IDAuNl0gLSBQb3dlciBhcHBsaWVkIHRvIHRoZSBhYnVuZGFuY2UgdmFsdWVzXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuc2ltaWxhcml0eVRocmVzaG9sZCA9IDAuN10gLSBNaW5pbXVtIHNpbWlsYXJpdHkgdmFsdWUgdG8gY29uc2lkZXIgdGhlbSBzaW1pbGFyXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gTW9zdCBzaW1pbGFyIHBlYWtzIGFuZCB0aGVpciBzaW1pbGFyaXRpZXM6XG4gKiAqIGBwZWFrc0ZpcnN0YDogQXJyYXkgb2YgcGVha3MsIGludGVncmF0ZWQgbWFzcyBzcGVjdHJhIGFuZCB3ZWlnaHRlZCBtYXNzIHNwZWN0cmEgZm9yIHRoZSBmaXJzdCBjaHJvbWF0b2dyYW1cbiAqICogYHBlYWtzU2Vjb25kYDogQXJyYXkgb2YgcGVha3MsIGludGVncmF0ZWQgbWFzcyBzcGVjdHJhIGFuZCB3ZWlnaHRlZCBtYXNzIHNwZWN0cmEgZm9yIHRoZSBzZWNvbmQgY2hyb21hdG9ncmFtXG4gKiAqIGBwZWFrc1NpbWlsYXJpdHlgOiBBcnJheSBvZiBzaW1pbGFyaXRpZXMgKE51bWJlcilcbiAqL1xuZnVuY3Rpb24gc3BlY3RyYUNvbXBhcmlzb24oY2hyb20xLCBjaHJvbTIsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbiwgb3B0aW9ucyk7XG5cbiAgICAvLyBwZWFrIHBpY2tpbmdcbiAgICBsZXQgcmVmZXJlbmNlID0gcHJlcHJvY2Vzc2luZyhjaHJvbTEsIG9wdGlvbnMpO1xuICAgIGxldCBzYW1wbGUgPSBwcmVwcm9jZXNzaW5nKGNocm9tMiwgb3B0aW9ucyk7XG5cbiAgICAvLyBzaW1pbGFyaXR5IGJldHdlZW4gTVNcbiAgICBjb25zdCBsZW4gPSBNYXRoLm1heChzYW1wbGUucGVha3MubGVuZ3RoLCByZWZlcmVuY2UucGVha3MubGVuZ3RoKTtcbiAgICBsZXQgc2ltaWxhcml0eVBlYWtzID0ge1xuICAgICAgICBjaHJvbTE6IG5ldyBBcnJheShsZW4pLFxuICAgICAgICBjaHJvbTI6IG5ldyBBcnJheShsZW4pLFxuICAgICAgICBzaW1pbGFyaXR5OiBuZXcgQXJyYXkobGVuKVxuICAgIH07XG4gICAgbGV0IHNpbWlsYXJMZW4gPSAwO1xuXG4gICAgLy8gU2ltaWxhcml0eSBtYXRyaXhcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNhbXBsZS5wZWFrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBsZXQgbWF4ID0ge3NpbWlsYXJpdHk6IC0zfTtcbiAgICAgICAgbGV0IGJpZ2dlckNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlZmVyZW5jZS5wZWFrcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbGV0IHNpbSA9IGNvc2luZShzYW1wbGUudmVjdG9yW2ldLngsIHNhbXBsZS52ZWN0b3JbaV0ueSwgcmVmZXJlbmNlLnZlY3RvcltqXS54LCByZWZlcmVuY2UudmVjdG9yW2pdLnkpO1xuXG4gICAgICAgICAgICBpZiAoc2ltID4gb3B0aW9ucy5zaW1pbGFyaXR5VGhyZXNob2xkICYmIHNpbSA+IG1heC5zaW1pbGFyaXR5KSB7XG4gICAgICAgICAgICAgICAgbWF4ID0ge1xuICAgICAgICAgICAgICAgICAgICBzaW1pbGFyaXR5OiBzaW0sXG4gICAgICAgICAgICAgICAgICAgIGNocm9tMTogcmVmZXJlbmNlLnBlYWtzW2pdLFxuICAgICAgICAgICAgICAgICAgICBjaHJvbTI6IHNhbXBsZS5wZWFrc1tpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2ltID4gb3B0aW9ucy5zaW1pbGFyaXR5VGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgKytiaWdnZXJDb3VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiaWdnZXJDb3VudGVyID09PSAxKSB7XG4gICAgICAgICAgICBzaW1pbGFyaXR5UGVha3MuY2hyb20xW3NpbWlsYXJMZW5dID0gbWF4LmNocm9tMTtcbiAgICAgICAgICAgIHNpbWlsYXJpdHlQZWFrcy5jaHJvbTJbc2ltaWxhckxlbl0gPSBtYXguY2hyb20yO1xuICAgICAgICAgICAgc2ltaWxhcml0eVBlYWtzLnNpbWlsYXJpdHlbc2ltaWxhckxlbisrXSA9IG1heC5zaW1pbGFyaXR5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHNpbWlsYXJpdHlQZWFrcy5jaHJvbTEubGVuZ3RoID0gc2ltaWxhckxlbjtcbiAgICBzaW1pbGFyaXR5UGVha3MuY2hyb20yLmxlbmd0aCA9IHNpbWlsYXJMZW47XG5cbiAgICBsZXQgZHVwbGljYXRlcyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2ltaWxhckxlbjsgKytpKSB7XG4gICAgICAgIGlmIChkdXBsaWNhdGVzLmhhc093blByb3BlcnR5KHNpbWlsYXJpdHlQZWFrcy5jaHJvbTFbaV0ueCkpIHtcbiAgICAgICAgICAgIGR1cGxpY2F0ZXNbc2ltaWxhcml0eVBlYWtzLmNocm9tMVtpXS54XS5wdXNoKGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZHVwbGljYXRlc1tzaW1pbGFyaXR5UGVha3MuY2hyb20xW2ldLnhdID0gW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHBlYWtzQ2hyb20xID0gW107XG4gICAgbGV0IHBlYWtzQ2hyb20yID0gW107XG4gICAgbGV0IHBlYWtzU2ltaWxhcml0eSA9IFtdO1xuICAgIGZvciAobGV0IHZhbCBpbiBkdXBsaWNhdGVzKSB7XG4gICAgICAgIGlmIChkdXBsaWNhdGVzW3ZhbF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBwZWFrc0Nocm9tMS5wdXNoKHNpbWlsYXJpdHlQZWFrcy5jaHJvbTFbZHVwbGljYXRlc1t2YWxdWzBdXSk7XG4gICAgICAgICAgICBwZWFrc0Nocm9tMi5wdXNoKHNpbWlsYXJpdHlQZWFrcy5jaHJvbTJbZHVwbGljYXRlc1t2YWxdWzBdXSk7XG4gICAgICAgICAgICBwZWFrc1NpbWlsYXJpdHkucHVzaChzaW1pbGFyaXR5UGVha3Muc2ltaWxhcml0eVtkdXBsaWNhdGVzW3ZhbF1bMF1dKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHBlYWtzRmlyc3Q6IHBlYWtzQ2hyb20xLFxuICAgICAgICBwZWFrc1NlY29uZDogcGVha3NDaHJvbTIsXG4gICAgICAgIHBlYWtzU2ltaWxhcml0eTogcGVha3NTaW1pbGFyaXR5LFxuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3BlY3RyYUNvbXBhcmlzb247XG4iXX0=

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(113);
	module.exports = __webpack_require__(17).Object.assign;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(114)});

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(35)
	  , gOPS     = __webpack_require__(66)
	  , pIE      = __webpack_require__(67)
	  , toObject = __webpack_require__(49)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(26)(function(){
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

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _toConsumableArray2 = __webpack_require__(116);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Regression = __webpack_require__(124).NLR.PolynomialRegression;

	/**
	 * Aligns the time of the sample based on the regression with his reference value
	 * @param {Array<Object>} reference - Array of peaks, integrated mass spectra and weighted mass spectra for the reference chromatogram
	 * @param {Array<Object>} sample - Array of peaks, integrated mass spectra and weighted mass spectra for the sample chromatogram
	 * @param {Object} [options] - Options object
	 * @param {Boolean} [options.computeQuality = false] - Calculate the quality of the regression
	 * @param {Number} [options.stringFormula = 0] - Precision of the string formula (0 if don't need the value)
	 * @param {Number} [options.polynomialDegree = 3] - Degree of the polynomial regression
	 * @return {Object} - The scaled spectra:
	 * * `reference`: The reference array
	 * * `sample`: The scaled sample array
	 * * `stringFormula`: Regression equation
	 * * `r2`: R2 quality number
	 */
	function scaleAlignment(reference, sample) {
	    var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	    var _options$computeQuali = options.computeQuality;
	    var computeQuality = _options$computeQuali === undefined ? false : _options$computeQuali;
	    var _options$stringFormul = options.stringFormula;
	    var stringFormula = _options$stringFormul === undefined ? 0 : _options$stringFormul;
	    var _options$polynomialDe = options.polynomialDegree;
	    var polynomialDegree = _options$polynomialDe === undefined ? 3 : _options$polynomialDe;

	    var referenceTime = reference.map(function (val) {
	        return val.x;
	    });
	    var sampleTime = sample.map(function (val) {
	        return val.x;
	    });

	    var regression = new Regression(sampleTime, referenceTime, polynomialDegree, { computeQuality: computeQuality });

	    var maxTime = Math.max.apply(Math, (0, _toConsumableArray3.default)(referenceTime));
	    var scaledSample = sample.map(function (peak) {
	        peak.x = regression.predict(peak.x);
	        return peak;
	    }).filter(function (peak) {
	        return peak.x <= maxTime;
	    });

	    var ans = {
	        reference: reference,
	        sample: scaledSample
	    };

	    if (stringFormula !== 0) {
	        ans.stringFormula = regression.toString(stringFormula);
	    }
	    if (computeQuality) {
	        ans.r2 = regression.quality.r2;
	    }
	    return ans;
	}

	module.exports = scaleAlignment;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY2FsZUFsaWdubWVudC5qcyJdLCJuYW1lcyI6WyJSZWdyZXNzaW9uIiwicmVxdWlyZSIsIk5MUiIsIlBvbHlub21pYWxSZWdyZXNzaW9uIiwic2NhbGVBbGlnbm1lbnQiLCJyZWZlcmVuY2UiLCJzYW1wbGUiLCJvcHRpb25zIiwiY29tcHV0ZVF1YWxpdHkiLCJzdHJpbmdGb3JtdWxhIiwicG9seW5vbWlhbERlZ3JlZSIsInJlZmVyZW5jZVRpbWUiLCJtYXAiLCJ2YWwiLCJ4Iiwic2FtcGxlVGltZSIsInJlZ3Jlc3Npb24iLCJtYXhUaW1lIiwiTWF0aCIsIm1heCIsInNjYWxlZFNhbXBsZSIsInBlYWsiLCJwcmVkaWN0IiwiZmlsdGVyIiwiYW5zIiwidG9TdHJpbmciLCJyMiIsInF1YWxpdHkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGVBQVIsRUFBeUJDLEdBQXpCLENBQTZCQyxvQkFBaEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsU0FBU0MsY0FBVCxDQUF3QkMsU0FBeEIsRUFBbUNDLE1BQW5DLEVBQXlEO0FBQUEsUUFBZEMsT0FBYyx5REFBSixFQUFJO0FBQUEsZ0NBQ3FCQSxPQURyQixDQUM5Q0MsY0FEOEM7QUFBQSxRQUM5Q0EsY0FEOEMseUNBQzdCLEtBRDZCO0FBQUEsZ0NBQ3FCRCxPQURyQixDQUN0QkUsYUFEc0I7QUFBQSxRQUN0QkEsYUFEc0IseUNBQ04sQ0FETTtBQUFBLGdDQUNxQkYsT0FEckIsQ0FDSEcsZ0JBREc7QUFBQSxRQUNIQSxnQkFERyx5Q0FDZ0IsQ0FEaEI7O0FBRXJELFFBQUlDLGdCQUFnQk4sVUFBVU8sR0FBVixDQUFjLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJQyxDQUFiO0FBQUEsS0FBZCxDQUFwQjtBQUNBLFFBQUlDLGFBQWFULE9BQU9NLEdBQVAsQ0FBVyxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsSUFBSUMsQ0FBYjtBQUFBLEtBQVgsQ0FBakI7O0FBRUEsUUFBTUUsYUFBYSxJQUFJaEIsVUFBSixDQUFlZSxVQUFmLEVBQTJCSixhQUEzQixFQUEwQ0QsZ0JBQTFDLEVBQTRELEVBQUNGLGdCQUFnQkEsY0FBakIsRUFBNUQsQ0FBbkI7O0FBRUEsUUFBTVMsVUFBVUMsS0FBS0MsR0FBTCw4Q0FBWVIsYUFBWixFQUFoQjtBQUNBLFFBQUlTLGVBQWVkLE9BQU9NLEdBQVAsQ0FBVyxVQUFDUyxJQUFELEVBQVU7QUFDcENBLGFBQUtQLENBQUwsR0FBU0UsV0FBV00sT0FBWCxDQUFtQkQsS0FBS1AsQ0FBeEIsQ0FBVDtBQUNBLGVBQU9PLElBQVA7QUFDSCxLQUhrQixFQUdoQkUsTUFIZ0IsQ0FHVCxVQUFDRixJQUFEO0FBQUEsZUFBVUEsS0FBS1AsQ0FBTCxJQUFVRyxPQUFwQjtBQUFBLEtBSFMsQ0FBbkI7O0FBS0EsUUFBSU8sTUFBTTtBQUNObkIsbUJBQVdBLFNBREw7QUFFTkMsZ0JBQVFjO0FBRkYsS0FBVjs7QUFLQSxRQUFJWCxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDckJlLFlBQUlmLGFBQUosR0FBb0JPLFdBQVdTLFFBQVgsQ0FBb0JoQixhQUFwQixDQUFwQjtBQUNIO0FBQ0QsUUFBSUQsY0FBSixFQUFvQjtBQUNoQmdCLFlBQUlFLEVBQUosR0FBU1YsV0FBV1csT0FBWCxDQUFtQkQsRUFBNUI7QUFDSDtBQUNELFdBQU9GLEdBQVA7QUFDSDs7QUFFREksT0FBT0MsT0FBUCxHQUFpQnpCLGNBQWpCIiwiZmlsZSI6InNjYWxlQWxpZ25tZW50LmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVncmVzc2lvbiA9IHJlcXVpcmUoJ21sLXJlZ3Jlc3Npb24nKS5OTFIuUG9seW5vbWlhbFJlZ3Jlc3Npb247XG5cbi8qKlxuICogQWxpZ25zIHRoZSB0aW1lIG9mIHRoZSBzYW1wbGUgYmFzZWQgb24gdGhlIHJlZ3Jlc3Npb24gd2l0aCBoaXMgcmVmZXJlbmNlIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHJlZmVyZW5jZSAtIEFycmF5IG9mIHBlYWtzLCBpbnRlZ3JhdGVkIG1hc3Mgc3BlY3RyYSBhbmQgd2VpZ2h0ZWQgbWFzcyBzcGVjdHJhIGZvciB0aGUgcmVmZXJlbmNlIGNocm9tYXRvZ3JhbVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBzYW1wbGUgLSBBcnJheSBvZiBwZWFrcywgaW50ZWdyYXRlZCBtYXNzIHNwZWN0cmEgYW5kIHdlaWdodGVkIG1hc3Mgc3BlY3RyYSBmb3IgdGhlIHNhbXBsZSBjaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb21wdXRlUXVhbGl0eSA9IGZhbHNlXSAtIENhbGN1bGF0ZSB0aGUgcXVhbGl0eSBvZiB0aGUgcmVncmVzc2lvblxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLnN0cmluZ0Zvcm11bGEgPSAwXSAtIFByZWNpc2lvbiBvZiB0aGUgc3RyaW5nIGZvcm11bGEgKDAgaWYgZG9uJ3QgbmVlZCB0aGUgdmFsdWUpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMucG9seW5vbWlhbERlZ3JlZSA9IDNdIC0gRGVncmVlIG9mIHRoZSBwb2x5bm9taWFsIHJlZ3Jlc3Npb25cbiAqIEByZXR1cm4ge09iamVjdH0gLSBUaGUgc2NhbGVkIHNwZWN0cmE6XG4gKiAqIGByZWZlcmVuY2VgOiBUaGUgcmVmZXJlbmNlIGFycmF5XG4gKiAqIGBzYW1wbGVgOiBUaGUgc2NhbGVkIHNhbXBsZSBhcnJheVxuICogKiBgc3RyaW5nRm9ybXVsYWA6IFJlZ3Jlc3Npb24gZXF1YXRpb25cbiAqICogYHIyYDogUjIgcXVhbGl0eSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbGlnbm1lbnQocmVmZXJlbmNlLCBzYW1wbGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtjb21wdXRlUXVhbGl0eSA9IGZhbHNlLCBzdHJpbmdGb3JtdWxhID0gMCwgcG9seW5vbWlhbERlZ3JlZSA9IDN9ID0gb3B0aW9ucztcbiAgICBsZXQgcmVmZXJlbmNlVGltZSA9IHJlZmVyZW5jZS5tYXAoKHZhbCkgPT4gdmFsLngpO1xuICAgIGxldCBzYW1wbGVUaW1lID0gc2FtcGxlLm1hcCgodmFsKSA9PiB2YWwueCk7XG5cbiAgICBjb25zdCByZWdyZXNzaW9uID0gbmV3IFJlZ3Jlc3Npb24oc2FtcGxlVGltZSwgcmVmZXJlbmNlVGltZSwgcG9seW5vbWlhbERlZ3JlZSwge2NvbXB1dGVRdWFsaXR5OiBjb21wdXRlUXVhbGl0eX0pO1xuXG4gICAgY29uc3QgbWF4VGltZSA9IE1hdGgubWF4KC4uLnJlZmVyZW5jZVRpbWUpO1xuICAgIGxldCBzY2FsZWRTYW1wbGUgPSBzYW1wbGUubWFwKChwZWFrKSA9PiB7XG4gICAgICAgIHBlYWsueCA9IHJlZ3Jlc3Npb24ucHJlZGljdChwZWFrLngpO1xuICAgICAgICByZXR1cm4gcGVhaztcbiAgICB9KS5maWx0ZXIoKHBlYWspID0+IHBlYWsueCA8PSBtYXhUaW1lKTtcblxuICAgIGxldCBhbnMgPSB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBzYW1wbGU6IHNjYWxlZFNhbXBsZVxuICAgIH07XG5cbiAgICBpZiAoc3RyaW5nRm9ybXVsYSAhPT0gMCkge1xuICAgICAgICBhbnMuc3RyaW5nRm9ybXVsYSA9IHJlZ3Jlc3Npb24udG9TdHJpbmcoc3RyaW5nRm9ybXVsYSk7XG4gICAgfVxuICAgIGlmIChjb21wdXRlUXVhbGl0eSkge1xuICAgICAgICBhbnMucjIgPSByZWdyZXNzaW9uLnF1YWxpdHkucjI7XG4gICAgfVxuICAgIHJldHVybiBhbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2NhbGVBbGlnbm1lbnQ7XG4iXX0=

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(117);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(119);
	module.exports = __webpack_require__(17).Array.from;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(18)
	  , $export        = __webpack_require__(15)
	  , toObject       = __webpack_require__(49)
	  , call           = __webpack_require__(120)
	  , isArrayIter    = __webpack_require__(121)
	  , toLength       = __webpack_require__(38)
	  , createProperty = __webpack_require__(122)
	  , getIterFn      = __webpack_require__(53);

	$export($export.S + $export.F * !__webpack_require__(123)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(8)
	  , ITERATOR   = __webpack_require__(47)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(21)
	  , createDesc      = __webpack_require__(29);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(47)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.SimpleLinearRegression = exports.SLR = __webpack_require__(125);
	exports.NonLinearRegression = exports.NLR = {
	    PolynomialRegression: __webpack_require__(128),
	    PotentialRegression: __webpack_require__(154),
	    ExpRegression: __webpack_require__(156),
	    PowerRegression: __webpack_require__(155)
	};
	exports.KernelRidgeRegression = exports.KRR = __webpack_require__(157);
	//exports.MultipleLinearRegression = exports.MLR = require('./regression/multiple-linear-regression');
	//exports.MultivariateLinearRegression = exports.MVLR = require('./regression/multivariate-linear-regression');
	exports.PolinomialFitting2D = __webpack_require__(190);
	exports.TheilSenRegression = __webpack_require__(191);


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var maybeToPrecision = __webpack_require__(126).maybeToPrecision;
	const BaseRegression = __webpack_require__(127);


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
	            var ySquared = 0;
	            var xY = 0;

	            for (var i = 0; i < n; i++) {
	                xSum += x[i];
	                ySum += y[i];
	                xSquared += x[i] * x[i];
	                ySquared += y[i] * y[i];
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
	        var result = 'y = ';
	        if (this.slope) {
	            var xFactor = maybeToPrecision(this.slope, precision);
	            result += (xFactor == 1 ? '' : xFactor) + 'x';
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


/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';

	exports.maybeToPrecision = function maybeToPrecision(value, digits) {
	    if (digits) return value.toPrecision(digits);
	    else return value.toString();
	};


/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

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

	    _predict(x) {
	        throw new Error('_compute not implemented');
	    }

	    train(options) {
	        //Do nothing for this package
	    }

	    toString(precision) {
	        return '';
	    }

	    toLaTeX(precision) {
	        return '';
	    }

	    /**
	     * Return the correlation coefficient of determination (r) and chi-square.
	     * @param x
	     * @param y
	     * @returns {object}
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
	            if (y[i] !== 0)
	                chi2 += (y[i] - y2[i]) * (y[i] - y2[i]) / y[i];
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


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	const maybeToPrecision = __webpack_require__(126).maybeToPrecision;
	const BaseRegression = __webpack_require__(127);
	const Matrix = __webpack_require__(129);


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
	                    if (powers[k] === 0)
	                        F[i][k] = 1;
	                    else {
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
	        var times = '*';
	        if (isLaTeX) {
	            sup = '^{';
	            closeSup = '}';
	            times = '';
	        }

	        var fn =  '', str;
	        for (var  k = 0; k < this.coefficients.length; k++) {
	            str = '';
	            if (this.coefficients[k] !== 0) {
	                if (this.powers[k] === 0)
	                    str = maybeToPrecision(this.coefficients[k], precision);
	                else {
	                    if (this.powers[k] === 1)
	                        str = maybeToPrecision(this.coefficients[k], precision) + times + 'x';
	                    else {
	                        str = maybeToPrecision(this.coefficients[k], precision) + times + 'x' + sup + this.powers[k] + closeSup;
	                    }
	                }
	                if (this.coefficients[k] > 0)
	                    str = '+' + str;
	            }
	            fn = str + fn;
	        }
	        if (fn.charAt(0) === '+') {
	            fn = fn.slice(1);
	        }

	        return 'y = ' + fn;
	    }

	    static load(json) {
	        if (json.name !== 'polynomialRegression') {
	            throw new TypeError('not a polynomial regression model');
	        }
	        return new PolynomialRegression(true, json);
	    }
	}

	module.exports = PolynomialRegression;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(130);
	module.exports.Decompositions = module.exports.DC = __webpack_require__(147);


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(131);
	var abstractMatrix = __webpack_require__(132);
	var util = __webpack_require__(138);

	class Matrix extends abstractMatrix(Array) {
	    constructor(nRows, nColumns) {
	        if (arguments.length === 1 && typeof nRows === 'number') {
	            return new Array(nRows);
	        }
	        if (Matrix.isMatrix(nRows)) {
	            return nRows.clone();
	        } else if (Number.isInteger(nRows) && nRows > 0) { // Create an empty matrix
	            super(nRows);
	            if (Number.isInteger(nColumns) && nColumns > 0) {
	                for (var i = 0; i < nRows; i++) {
	                    this[i] = new Array(nColumns);
	                }
	            } else {
	                throw new TypeError('nColumns must be a positive integer');
	            }
	        } else if (Array.isArray(nRows)) { // Copy the values from the 2D array
	            var matrix = nRows;
	            nRows = matrix.length;
	            nColumns = matrix[0].length;
	            if (typeof nColumns !== 'number' || nColumns === 0) {
	                throw new TypeError('Data must be a 2D array with at least one element');
	            }
	            super(nRows);
	            for (var i = 0; i < nRows; i++) {
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
	     * @returns {Matrix}
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
	     * @returns {Matrix} this
	     */
	    removeRow(index) {
	        util.checkRowIndex(this, index);
	        if (this.rows === 1)
	            throw new RangeError('A matrix cannot have less than one row');
	        this.splice(index, 1);
	        this.rows -= 1;
	        return this;
	    }

	    /**
	     * Adds a row at the given index
	     * @param {number} [index = this.rows] - Row index
	     * @param {Array|Matrix} array - Array or vector
	     * @returns {Matrix} this
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
	     * @returns {Matrix} this
	     */
	    removeColumn(index) {
	        util.checkColumnIndex(this, index);
	        if (this.columns === 1)
	            throw new RangeError('A matrix cannot have less than one column');
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
	     * @returns {Matrix} this
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

	module.exports = Matrix;
	Matrix.abstractMatrix = abstractMatrix;


/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';

	if (!Symbol.species) {
	    Symbol.species = Symbol.for('@@species');
	}


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = abstractMatrix;

	var arrayUtils = __webpack_require__(133);
	var util = __webpack_require__(138);
	var MatrixTransposeView = __webpack_require__(139);
	var MatrixRowView = __webpack_require__(141);
	var MatrixSubView = __webpack_require__(142);
	var MatrixSelectionView = __webpack_require__(143);
	var MatrixColumnView = __webpack_require__(144);
	var MatrixFlipRowView = __webpack_require__(145);
	var MatrixFlipColumnView = __webpack_require__(146);

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
	         * @returns {Matrix} - The new matrix
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
	         * @returns {Matrix} - The new matrix
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
	         * @returns {Matrix} - The new matrix
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
	         * @returns {Matrix} - The new matrix
	         */
	        static empty(rows, columns) {
	            return new this(rows, columns);
	        }

	        /**
	         * Creates a matrix with the given dimensions. Values will be set to zero.
	         * @param {number} rows - Number of rows
	         * @param {number} columns - Number of columns
	         * @returns {Matrix} - The new matrix
	         */
	        static zeros(rows, columns) {
	            return this.empty(rows, columns).fill(0);
	        }

	        /**
	         * Creates a matrix with the given dimensions. Values will be set to one.
	         * @param {number} rows - Number of rows
	         * @param {number} columns - Number of columns
	         * @returns {Matrix} - The new matrix
	         */
	        static ones(rows, columns) {
	            return this.empty(rows, columns).fill(1);
	        }

	        /**
	         * Creates a matrix with the given dimensions. Values will be randomly set.
	         * @param {number} rows - Number of rows
	         * @param {number} columns - Number of columns
	         * @param {function} [rng] - Random number generator (default: Math.random)
	         * @returns {Matrix} The new matrix
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
	         * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
	         * @param {number} rows - Number of rows
	         * @param {number} [columns] - Number of columns (Default: rows)
	         * @returns {Matrix} - The new identity matrix
	         */
	        static eye(rows, columns) {
	            if (columns === undefined) columns = rows;
	            var min = Math.min(rows, columns);
	            var matrix = this.zeros(rows, columns);
	            for (var i = 0; i < min; i++) {
	                matrix.set(i, i, 1);
	            }
	            return matrix;
	        }

	        /**
	         * Creates a diagonal matrix based on the given array.
	         * @param {Array} data - Array containing the data for the diagonal
	         * @param {number} [rows] - Number of rows (Default: data.length)
	         * @param {number} [columns] - Number of columns (Default: rows)
	         * @returns {Matrix} - The new diagonal matrix
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
	         * @param matrix1
	         * @param matrix2
	         * @returns {Matrix}
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
	         * @param matrix1
	         * @param matrix2
	         * @returns {Matrix}
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
	         * @param value - The value to check
	         * @returns {Matrix}
	         */
	        static checkMatrix(value) {
	            return Matrix.isMatrix(value) ? value : new this(value);
	        }

	        /**
	         * Returns true if the argument is a Matrix, false otherwise
	         * @param value - The value to check
	         * @return {boolean}
	         */
	        static isMatrix(value) {
	            return (value != null) && (value.klass === 'Matrix');
	        }

	        /**
	         * @property {number} - The number of elements in the matrix.
	         */
	        get size() {
	            return this.rows * this.columns;
	        }

	        /**
	         * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
	         * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
	         * @returns {Matrix} this
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
	         * @returns {Array}
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
	         * @returns {Array}
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
	         * @returns {boolean} true if the matrix has one row
	         */
	        isRowVector() {
	            return this.rows === 1;
	        }

	        /**
	         * @returns {boolean} true if the matrix has one column
	         */
	        isColumnVector() {
	            return this.columns === 1;
	        }

	        /**
	         * @returns {boolean} true if the matrix has one row or one column
	         */
	        isVector() {
	            return (this.rows === 1) || (this.columns === 1);
	        }

	        /**
	         * @returns {boolean} true if the matrix has the same number of rows and columns
	         */
	        isSquare() {
	            return this.rows === this.columns;
	        }

	        /**
	         * @returns {boolean} true if the matrix is square and has the same values on both sides of the diagonal
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
	         * @param {number} rowIndex - Index of the row
	         * @param {number} columnIndex - Index of the column
	         * @param {number} value - The new value for the element
	         * @returns {Matrix} this
	         */
	        set(rowIndex, columnIndex, value) {
	            throw new Error('set method is unimplemented');
	        }

	        /**
	         * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
	         * @param {number} rowIndex - Index of the row
	         * @param {number} columnIndex - Index of the column
	         * @returns {number}
	         */
	        get(rowIndex, columnIndex) {
	            throw new Error('get method is unimplemented');
	        }

	        /**
	         * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
	         * rows of the matrix, and colRep times the number of columns of the matrix
	         * @param {number} rowRep - Number of times the rows should be repeated
	         * @param {number} colRep - Number of times the columns should be re
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
	         */
	        neg() {
	            return this.mulS(-1);
	        }

	        /**
	         * Returns a new array from the given row index
	         * @param {number} index - Row index
	         * @returns {Array}
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
	         * @returns {Matrix}
	         */
	        getRowVector(index) {
	            return this.constructor.rowVector(this.getRow(index));
	        }

	        /**
	         * Sets a row at the given index
	         * @param {number} index - Row index
	         * @param {Array|Matrix} array - Array or vector
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Array}
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
	         * @returns {Matrix}
	         */
	        getColumnVector(index) {
	            return this.constructor.columnVector(this.getColumn(index));
	        }

	        /**
	         * Sets a column at the given index
	         * @param {number} index - Column index
	         * @param {Array|Matrix} array - Array or vector
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
	         */
	        mulColumn(index, value) {
	            util.checkColumnIndex(this, index);
	            for (var i = 0; i < this.rows; i++) {
	                this.set(i, index, this.get(i, index) * value);
	            }
	        }

	        /**
	         * Returns the maximum value of the matrix
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {Array}
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
	         * Returns the sum of all elements of the matrix
	         * @returns {number}
	         */
	        sum() {
	            var v = 0;
	            for (var i = 0; i < this.rows; i++) {
	                for (var j = 0; j < this.columns; j++) {
	                    v += this.get(i, j);
	                }
	            }
	            return v;
	        }

	        /**
	         * Returns the mean of all elements of the matrix
	         * @returns {number}
	         */
	        mean() {
	            return this.sum() / this.size;
	        }

	        /**
	         * Returns the product of all elements of the matrix
	         * @returns {number}
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
	         * @returns {Matrix} this
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
	         * @returns {number}
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
	         * @returns {Matrix}
	         */
	        mmul(other) {
	            other = this.constructor.checkMatrix(other);
	            if (this.columns !== other.rows)
	                console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');

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

	        /**
	         * Returns a row-by-row scaled matrix
	         * @param {Number} [min=0] - Minimum scaled value
	         * @param {Number} [max=1] - Maximum scaled value
	         * @returns {Matrix} - The scaled matrix
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
	         * @param {Number} [min=0] - Minimum scaled value
	         * @param {Number} [max=1] - Maximum scaled value
	         * @returns {Matrix} - The new scaled matrix
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
	         * @returns {Matrix}
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix}
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
	         * @returns {Matrix}
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
	         * @returns {Matrix}
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
	         * @param startRow - The index of the first row to set
	         * @param startColumn - The index of the first column to set
	         * @returns {Matrix}
	         */
	        setSubMatrix(matrix, startRow, startColumn) {
	            matrix = this.constructor.checkMatrix(matrix);
	            var endRow = startRow + matrix.rows - 1;
	            var endColumn = startColumn + matrix.columns - 1;
	            if ((startRow > endRow) || (startColumn > endColumn) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
	                throw new RangeError('Argument out of range');
	            }
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
	         * @returns {Matrix} The new matrix
	         */
	        selection(rowIndices, columnIndices) {
	            var indices = util.checkIndices(this, rowIndices, columnIndices);
	            var newMatrix = new this.constructor(rowIndices.length, columnIndices.length);
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
	         * @returns {number}
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
	        transposeView() {
	            return new MatrixTransposeView(this);
	        }

	        rowView(row) {
	            util.checkRowIndex(this, row);
	            return new MatrixRowView(this, row);
	        }

	        columnView(column) {
	            util.checkColumnIndex(this, column);
	            return new MatrixColumnView(this, column);
	        }

	        flipRowView() {
	            return new MatrixFlipRowView(this);
	        }

	        flipColumnView() {
	            return new MatrixFlipColumnView(this);
	        }

	        subMatrixView(startRow, endRow, startColumn, endColumn) {
	            return new MatrixSubView(this, startRow, endRow, startColumn, endColumn);
	        }

	        selectionView(rowIndices, columnIndices) {
	            return new MatrixSelectionView(this, rowIndices, columnIndices);
	        }
	    }

	    Matrix.prototype.klass = 'Matrix';

	    /**
	     * @private
	     * Check that two matrices have the same dimensions
	     * @param {Matrix} matrix
	     * @param {Matrix} otherMatrix
	     */
	    function checkDimensions(matrix, otherMatrix) {
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
	    var newMatrix = new this(matrix);
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
	    var newMatrix = new this(matrix);
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
	    var newMatrix = new this(matrix);
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

	    for (var operator of operators) {
	        var inplaceOp = eval(fillTemplateFunction(inplaceOperator, {name: operator[1], op: operator[0]}));
	        var inplaceOpS = eval(fillTemplateFunction(inplaceOperatorScalar, {name: operator[1] + 'S', op: operator[0]}));
	        var inplaceOpM = eval(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[1] + 'M', op: operator[0]}));
	        var staticOp = eval(fillTemplateFunction(staticOperator, {name: operator[1]}));
	        for (var i = 1; i < operator.length; i++) {
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
	        for (var i = 1; i < method.length; i++) {
	            Matrix.prototype[method[i]] = inplaceMeth;
	            Matrix[method[i]] = staticMeth;
	        }
	    }

	    var methodsWithArgs = [
	        ['Math.pow', 1, 'pow']
	    ];

	    for (var methodWithArg of methodsWithArgs) {
	        var args = 'arg0';
	        for (var i = 1; i < methodWithArg[1]; i++) {
	            args += `, arg${i}`;
	        }
	        if (methodWithArg[1] !== 1) {
	            var inplaceMethWithArgs = eval(fillTemplateFunction(inplaceMethodWithArgs, {
	                name: methodWithArg[2],
	                method: methodWithArg[0],
	                args: args
	            }));
	            var staticMethWithArgs = eval(fillTemplateFunction(staticMethodWithArgs, {name: methodWithArg[2], args: args}));
	            for (var i = 2; i < methodWithArg.length; i++) {
	                Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
	                Matrix[methodWithArg[i]] = staticMethWithArgs;
	            }
	        } else {
	            var tmplVar = {
	                name: methodWithArg[2],
	                args: args,
	                method: methodWithArg[0]
	            };
	            var inplaceMethod = eval(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
	            var inplaceMethodS = eval(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
	            var inplaceMethodM = eval(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
	            var staticMethod = eval(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
	            for (var i = 2; i < methodWithArg.length; i++) {
	                Matrix.prototype[methodWithArg[i]] = inplaceMethod;
	                Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
	                Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
	                Matrix[methodWithArg[i]] = staticMethod;
	            }
	        }
	    }

	    function fillTemplateFunction(template, values) {
	        for (var i in values) {
	            template = template.replace(new RegExp('%' + i + '%', 'g'), values[i]);
	        }
	        return template;
	    }

	    return Matrix;
	}


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = __webpack_require__(134);
	exports.getEquallySpacedData = __webpack_require__(135).getEquallySpacedData;
	exports.SNV = __webpack_require__(136).SNV;
	exports.binarySearch = __webpack_require__(137);


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Stat = __webpack_require__(99).array;
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



/***/ },
/* 135 */
/***/ function(module, exports) {

	'use strict';

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

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.SNV = SNV;
	var Stat = __webpack_require__(99).array;

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


/***/ },
/* 137 */
/***/ function(module, exports) {

	/**
	 * Performs a binary search of value in array
	 * @param {number[]} array - Array in which value will be searched. It must be sorted.
	 * @param {number} value - Value to search in array
	 * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
	 */
	function binarySearch(array, value, options) {
	    options = options || {};
	    var low = options.from || 0;
	    var high = options.to || array.length - 1;

	    while (low <= high) {
	        var mid = (low + high) >>> 1;
	        var midValue = array[mid];
	        if (midValue < value) {
	            low = mid + 1;
	        } else if (midValue > value) {
	            high = mid - 1;
	        } else {
	            return mid;
	        }
	    }

	    return -(low + 1);
	}

	module.exports = binarySearch;


/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';

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
	 * @returns {Array}
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
	 * @returns {Array}
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
	        throw new RangeError('Indices are out of range')
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


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(140);

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


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var abstractMatrix = __webpack_require__(132);
	var Matrix;

	class BaseView extends abstractMatrix() {
	    constructor(matrix, rows, columns) {
	        super();
	        this.matrix = matrix;
	        this.rows = rows;
	        this.columns = columns;
	    }

	    static get [Symbol.species]() {
	        if (!Matrix) {
	            Matrix = __webpack_require__(130);
	        }
	        return Matrix;
	    }
	}

	module.exports = BaseView;


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(140);

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


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(140);
	var util = __webpack_require__(138);

	class MatrixSubView extends BaseView {
	    constructor(matrix, startRow, endRow, startColumn, endColumn) {
	        util.checkRange(matrix, startRow, endRow, startColumn, endColumn);
	        super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
	        this.startRow = startRow;
	        this.startColumn = startColumn;
	    }

	    set(rowIndex, columnIndex, value) {
	        this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex , value);
	        return this;
	    }

	    get(rowIndex, columnIndex) {
	        return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
	    }
	}

	module.exports = MatrixSubView;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(140);
	var util = __webpack_require__(138);

	class MatrixSelectionView extends BaseView {
	    constructor(matrix, rowIndices, columnIndices) {
	        var indices = util.checkIndices(matrix, rowIndices, columnIndices);
	        super(matrix, indices.row.length, indices.column.length);
	        this.rowIndices = indices.row;
	        this.columnIndices = indices.column;
	    }

	    set(rowIndex, columnIndex, value) {
	        this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex] , value);
	        return this;
	    }

	    get(rowIndex, columnIndex) {
	        return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
	    }
	}

	module.exports = MatrixSelectionView;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(140);

	class MatrixColumnView extends BaseView {
	    constructor(matrix, column) {
	        super(matrix, matrix.rows, 1);
	        this.column = column;
	    }

	    set(rowIndex, columnIndex, value) {
	        this.matrix.set(rowIndex, this.column, value);
	        return this;
	    }

	    get(rowIndex, columnIndex) {
	        return this.matrix.get(rowIndex, this.column);
	    }
	}

	module.exports = MatrixColumnView;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(140);

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


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(140);

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


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(130);

	var SingularValueDecomposition = __webpack_require__(148);
	var EigenvalueDecomposition = __webpack_require__(150);
	var LuDecomposition = __webpack_require__(151);
	var QrDecomposition = __webpack_require__(152);
	var CholeskyDecomposition = __webpack_require__(153);

	function inverse(matrix) {
	    matrix = Matrix.checkMatrix(matrix);
	    return solve(matrix, Matrix.eye(matrix.rows));
	}

	Matrix.inverse = Matrix.inv = inverse;
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


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(130);
	var util = __webpack_require__(149);
	var hypotenuse = util.hypotenuse;
	var getFilled2DArray = util.getFilled2DArray;

	// https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
	function SingularValueDecomposition(value, options) {
	    if (!(this instanceof SingularValueDecomposition)) {
	        return new SingularValueDecomposition(value, options);
	    }
	    value = Matrix.checkMatrix(value);

	    options = options || {};

	    var m = value.rows,
	        n = value.columns,
	        nu = Math.min(m, n);

	    var wantu = true, wantv = true;
	    if (options.computeLeftSingularVectors === false)
	        wantu = false;
	    if (options.computeRightSingularVectors === false)
	        wantv = false;
	    var autoTranspose = options.autoTranspose === true;

	    var swapped = false;
	    var a;
	    if (m < n) {
	        if (!autoTranspose) {
	            a = value.clone();
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
	        if (!Matrix.isMatrix(this.U)) {
	            this.U = new Matrix(this.U);
	        }
	        return this.U;
	    },
	    get rightSingularVectors() {
	        if (!Matrix.isMatrix(this.V)) {
	            this.V = new Matrix(this.V);
	        }
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

	        var U = this.U;
	        var V = this.rightSingularVectors;

	        var VL = V.mmul(Ls),
	            vrows = V.rows,
	            urows = U.length,
	            VLU = Matrix.zeros(vrows, urows),
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
	        return this.solve(Matrix.diag(value));
	    },
	    inverse: function () {
	        var V = this.V;
	        var e = this.threshold,
	            vrows = V.length,
	            vcols = V[0].length,
	            X = new Matrix(vrows, this.s.length),
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
	            Y = new Matrix(vrows, urows),
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


/***/ },
/* 149 */
/***/ function(module, exports) {

	'use strict';

	exports.hypotenuse = function hypotenuse(a, b) {
	    if (Math.abs(a) > Math.abs(b)) {
	        var r = b / a;
	        return Math.abs(a) * Math.sqrt(1 + r * r);
	    }
	    if (b !== 0) {
	        var r = a / b;
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


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(130);
	const util = __webpack_require__(149);
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
	    }
	    else {
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


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(130);

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
	    get lowerTriangularMatrix() {
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
	    get upperTriangularMatrix() {
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


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(130);
	var hypotenuse = __webpack_require__(149).hypotenuse;

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


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(130);

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


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	const maybeToPrecision = __webpack_require__(126).maybeToPrecision;
	const PolynomialRegression = __webpack_require__(128);
	const PowerRegression = __webpack_require__(155);
	const BaseRegression = __webpack_require__(127);

	class PotentialRegression extends BaseRegression {
	    /**
	     * @constructor
	     * @param x: Independent variable
	     * @param y: Dependent variable
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
	        return 'y = ' + maybeToPrecision(this.A, precision) + '*x^' + this.M;
	    }

	    toLaTeX(precision) {

	        if (this.M >= 0)
	            return 'y = ' + maybeToPrecision(this.A, precision) + 'x^{' + this.M + '}';
	        else
	            return 'y = \\frac{' + maybeToPrecision(this.A, precision) + '}{x^{' + (-this.M) + '}}';
	    }

	    static load(json) {
	        if (json.name !== 'potentialRegression') {
	            throw new TypeError('not a potential regression model');
	        }
	        return new PowerRegression(true, json);
	    }
	}

	module.exports = PotentialRegression;


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * This class implements the power regression f(x)=A*x^B
	 * Created by acastillo on 5/12/16.
	 */

	const maybeToPrecision = __webpack_require__(126).maybeToPrecision;
	const SimpleLinearRegression = __webpack_require__(125);
	const BaseRegression = __webpack_require__(127);

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
	        return 'y = ' + maybeToPrecision(this.A, precision) + '*x^' + maybeToPrecision(this.B, precision);
	    }

	    toLaTeX(precision) {
	        if (this.B >= 0)
	            return 'y = ' + maybeToPrecision(this.A, precision) + 'x^{' + maybeToPrecision(this.B, precision) + '}';
	        else
	            return 'y = \\frac{' + maybeToPrecision(this.A, precision) + '}{x^{' + maybeToPrecision(-this.B, precision) + '}}';
	    }

	    static load(json) {
	        if (json.name !== 'powerRegression') {
	            throw new TypeError('not a power regression model');
	        }
	        return new PowerRegression(true, json);
	    }
	}

	module.exports = PowerRegression;


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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

	const maybeToPrecision = __webpack_require__(126).maybeToPrecision;
	const SimpleLinearRegression = __webpack_require__(125);
	const BaseRegression = __webpack_require__(127);

	class ExpRegression extends BaseRegression {
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
	        return 'y = ' + maybeToPrecision(this.C, precision) + '*exp(' + maybeToPrecision(this.A, precision) + '*x)';
	    }

	    toLaTeX(precision) {
	        if (this.A >= 0)
	            return 'y = ' + maybeToPrecision(this.C, precision) + 'e^{' + maybeToPrecision(this.A, precision) + 'x}';
	        else
	            return 'y = \\frac{' + maybeToPrecision(this.C, precision) + '}{e^{' + maybeToPrecision(-this.A, precision) + 'x}}';

	    }

	    static load(json) {
	        if (json.name !== 'expRegression') {
	            throw new TypeError('not a exp regression model');
	        }
	        return new ExpRegression(true, json);
	    }
	}


	module.exports = ExpRegression;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(129);
	const Kernel = __webpack_require__(158);

	const BaseRegression = __webpack_require__(127);

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


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(159);

	const GaussianKernel = __webpack_require__(179);
	const PolynomialKernel = __webpack_require__(181);
	const ANOVAKernel = __webpack_require__(182);
	const CauchyKernel = __webpack_require__(183);
	const ExponentialKernel = __webpack_require__(184);
	const HistogramKernel = __webpack_require__(185);
	const LaplacianKernel = __webpack_require__(186);
	const MultiquadraticKernel = __webpack_require__(187);
	const RationalKernel = __webpack_require__(188);
	const SigmoidKernel = __webpack_require__(189);

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


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(160);
	module.exports.Decompositions = module.exports.DC = __webpack_require__(172);


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(161);
	var abstractMatrix = __webpack_require__(162);
	var util = __webpack_require__(163);

	class Matrix extends abstractMatrix(Array) {
	    constructor(nRows, nColumns) {
	        if (arguments.length === 1 && typeof nRows === 'number') {
	            return new Array(nRows);
	        }
	        if (Matrix.isMatrix(nRows)) {
	            return nRows.clone();
	        } else if (Number.isInteger(nRows) && nRows > 0) { // Create an empty matrix
	            super(nRows);
	            if (Number.isInteger(nColumns) && nColumns > 0) {
	                for (var i = 0; i < nRows; i++) {
	                    this[i] = new Array(nColumns);
	                }
	            } else {
	                throw new TypeError('nColumns must be a positive integer');
	            }
	        } else if (Array.isArray(nRows)) { // Copy the values from the 2D array
	            var matrix = nRows;
	            nRows = matrix.length;
	            nColumns = matrix[0].length;
	            if (typeof nColumns !== 'number' || nColumns === 0) {
	                throw new TypeError('Data must be a 2D array with at least one element');
	            }
	            super(nRows);
	            for (var i = 0; i < nRows; i++) {
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
	     * @returns {Matrix}
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
	     * @returns {Matrix} this
	     */
	    removeRow(index) {
	        util.checkRowIndex(this, index);
	        if (this.rows === 1)
	            throw new RangeError('A matrix cannot have less than one row');
	        this.splice(index, 1);
	        this.rows -= 1;
	        return this;
	    }

	    /**
	     * Adds a row at the given index
	     * @param {number} [index = this.rows] - Row index
	     * @param {Array|Matrix} array - Array or vector
	     * @returns {Matrix} this
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
	     * @returns {Matrix} this
	     */
	    removeColumn(index) {
	        util.checkColumnIndex(this, index);
	        if (this.columns === 1)
	            throw new RangeError('A matrix cannot have less than one column');
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
	     * @returns {Matrix} this
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

	module.exports = Matrix;
	Matrix.abstractMatrix = abstractMatrix;


/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';

	if (!Symbol.species) {
	    Symbol.species = Symbol.for('@@species');
	}


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = abstractMatrix;

	var arrayUtils = __webpack_require__(133);
	var util = __webpack_require__(163);
	var MatrixTransposeView = __webpack_require__(164);
	var MatrixRowView = __webpack_require__(166);
	var MatrixSubView = __webpack_require__(167);
	var MatrixSelectionView = __webpack_require__(168);
	var MatrixColumnView = __webpack_require__(169);
	var MatrixFlipRowView = __webpack_require__(170);
	var MatrixFlipColumnView = __webpack_require__(171);

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
	         * @returns {Matrix} - The new matrix
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
	         * @returns {Matrix} - The new matrix
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
	         * @returns {Matrix} - The new matrix
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
	         * @returns {Matrix} - The new matrix
	         */
	        static empty(rows, columns) {
	            return new this(rows, columns);
	        }

	        /**
	         * Creates a matrix with the given dimensions. Values will be set to zero.
	         * @param {number} rows - Number of rows
	         * @param {number} columns - Number of columns
	         * @returns {Matrix} - The new matrix
	         */
	        static zeros(rows, columns) {
	            return this.empty(rows, columns).fill(0);
	        }

	        /**
	         * Creates a matrix with the given dimensions. Values will be set to one.
	         * @param {number} rows - Number of rows
	         * @param {number} columns - Number of columns
	         * @returns {Matrix} - The new matrix
	         */
	        static ones(rows, columns) {
	            return this.empty(rows, columns).fill(1);
	        }

	        /**
	         * Creates a matrix with the given dimensions. Values will be randomly set.
	         * @param {number} rows - Number of rows
	         * @param {number} columns - Number of columns
	         * @param {function} [rng] - Random number generator (default: Math.random)
	         * @returns {Matrix} The new matrix
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
	         * Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.
	         * @param {number} rows - Number of rows
	         * @param {number} [columns] - Number of columns (Default: rows)
	         * @returns {Matrix} - The new identity matrix
	         */
	        static eye(rows, columns) {
	            if (columns === undefined) columns = rows;
	            var min = Math.min(rows, columns);
	            var matrix = this.zeros(rows, columns);
	            for (var i = 0; i < min; i++) {
	                matrix.set(i, i, 1);
	            }
	            return matrix;
	        }

	        /**
	         * Creates a diagonal matrix based on the given array.
	         * @param {Array} data - Array containing the data for the diagonal
	         * @param {number} [rows] - Number of rows (Default: data.length)
	         * @param {number} [columns] - Number of columns (Default: rows)
	         * @returns {Matrix} - The new diagonal matrix
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
	         * @param matrix1
	         * @param matrix2
	         * @returns {Matrix}
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
	         * @param matrix1
	         * @param matrix2
	         * @returns {Matrix}
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
	         * @param value - The value to check
	         * @returns {Matrix}
	         */
	        static checkMatrix(value) {
	            return Matrix.isMatrix(value) ? value : new this(value);
	        }

	        /**
	         * Returns true if the argument is a Matrix, false otherwise
	         * @param value - The value to check
	         * @return {boolean}
	         */
	        static isMatrix(value) {
	            return (value != null) && (value.klass === 'Matrix');
	        }

	        /**
	         * @property {number} - The number of elements in the matrix.
	         */
	        get size() {
	            return this.rows * this.columns;
	        }

	        /**
	         * Applies a callback for each element of the matrix. The function is called in the matrix (this) context.
	         * @param {function} callback - Function that will be called with two parameters : i (row) and j (column)
	         * @returns {Matrix} this
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
	         * @returns {Array}
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
	         * @returns {Array}
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
	         * @returns {boolean} true if the matrix has one row
	         */
	        isRowVector() {
	            return this.rows === 1;
	        }

	        /**
	         * @returns {boolean} true if the matrix has one column
	         */
	        isColumnVector() {
	            return this.columns === 1;
	        }

	        /**
	         * @returns {boolean} true if the matrix has one row or one column
	         */
	        isVector() {
	            return (this.rows === 1) || (this.columns === 1);
	        }

	        /**
	         * @returns {boolean} true if the matrix has the same number of rows and columns
	         */
	        isSquare() {
	            return this.rows === this.columns;
	        }

	        /**
	         * @returns {boolean} true if the matrix is square and has the same values on both sides of the diagonal
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
	         * @param {number} rowIndex - Index of the row
	         * @param {number} columnIndex - Index of the column
	         * @param {number} value - The new value for the element
	         * @returns {Matrix} this
	         */
	        set(rowIndex, columnIndex, value) {
	            throw new Error('set method is unimplemented');
	        }

	        /**
	         * Returns the given element of the matrix. mat.get(3,4) is equivalent to matrix[3][4]
	         * @param {number} rowIndex - Index of the row
	         * @param {number} columnIndex - Index of the column
	         * @returns {number}
	         */
	        get(rowIndex, columnIndex) {
	            throw new Error('get method is unimplemented');
	        }

	        /**
	         * Creates a new matrix that is a repetition of the current matrix. New matrix has rowRep times the number of
	         * rows of the matrix, and colRep times the number of columns of the matrix
	         * @param {number} rowRep - Number of times the rows should be repeated
	         * @param {number} colRep - Number of times the columns should be re
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
	         */
	        neg() {
	            return this.mulS(-1);
	        }

	        /**
	         * Returns a new array from the given row index
	         * @param {number} index - Row index
	         * @returns {Array}
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
	         * @returns {Matrix}
	         */
	        getRowVector(index) {
	            return this.constructor.rowVector(this.getRow(index));
	        }

	        /**
	         * Sets a row at the given index
	         * @param {number} index - Row index
	         * @param {Array|Matrix} array - Array or vector
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Array}
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
	         * @returns {Matrix}
	         */
	        getColumnVector(index) {
	            return this.constructor.columnVector(this.getColumn(index));
	        }

	        /**
	         * Sets a column at the given index
	         * @param {number} index - Column index
	         * @param {Array|Matrix} array - Array or vector
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
	         */
	        mulColumn(index, value) {
	            util.checkColumnIndex(this, index);
	            for (var i = 0; i < this.rows; i++) {
	                this.set(i, index, this.get(i, index) * value);
	            }
	        }

	        /**
	         * Returns the maximum value of the matrix
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {number}
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
	         * @returns {Array}
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
	         * @returns {Array}
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
	         * Returns the sum of all elements of the matrix
	         * @returns {number}
	         */
	        sum() {
	            var v = 0;
	            for (var i = 0; i < this.rows; i++) {
	                for (var j = 0; j < this.columns; j++) {
	                    v += this.get(i, j);
	                }
	            }
	            return v;
	        }

	        /**
	         * Returns the mean of all elements of the matrix
	         * @returns {number}
	         */
	        mean() {
	            return this.sum() / this.size;
	        }

	        /**
	         * Returns the product of all elements of the matrix
	         * @returns {number}
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
	         * @returns {Matrix} this
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
	         * @returns {number}
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
	         * @returns {Matrix}
	         */
	        mmul(other) {
	            other = this.constructor.checkMatrix(other);
	            if (this.columns !== other.rows)
	                console.warn('Number of columns of left matrix are not equal to number of rows of right matrix.');

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

	        /**
	         * Returns a row-by-row scaled matrix
	         * @param {Number} [min=0] - Minimum scaled value
	         * @param {Number} [max=1] - Maximum scaled value
	         * @returns {Matrix} - The scaled matrix
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
	         * @param {Number} [min=0] - Minimum scaled value
	         * @param {Number} [max=1] - Maximum scaled value
	         * @returns {Matrix} - The new scaled matrix
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
	         * @returns {Matrix}
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix} this
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
	         * @returns {Matrix}
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
	         * @returns {Matrix}
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
	         * @returns {Matrix}
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
	         * @param startRow - The index of the first row to set
	         * @param startColumn - The index of the first column to set
	         * @returns {Matrix}
	         */
	        setSubMatrix(matrix, startRow, startColumn) {
	            matrix = this.constructor.checkMatrix(matrix);
	            var endRow = startRow + matrix.rows - 1;
	            var endColumn = startColumn + matrix.columns - 1;
	            if ((startRow > endRow) || (startColumn > endColumn) || (startRow < 0) || (startRow >= this.rows) || (endRow < 0) || (endRow >= this.rows) || (startColumn < 0) || (startColumn >= this.columns) || (endColumn < 0) || (endColumn >= this.columns)) {
	                throw new RangeError('Argument out of range');
	            }
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
	         * @returns {Matrix} The new matrix
	         */
	        selection(rowIndices, columnIndices) {
	            var indices = util.checkIndices(this, rowIndices, columnIndices);
	            var newMatrix = new this.constructor(rowIndices.length, columnIndices.length);
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
	         * @returns {number}
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
	        transposeView() {
	            return new MatrixTransposeView(this);
	        }

	        rowView(row) {
	            util.checkRowIndex(this, row);
	            return new MatrixRowView(this, row);
	        }

	        columnView(column) {
	            util.checkColumnIndex(this, column);
	            return new MatrixColumnView(this, column);
	        }

	        flipRowView() {
	            return new MatrixFlipRowView(this);
	        }

	        flipColumnView() {
	            return new MatrixFlipColumnView(this);
	        }

	        subMatrixView(startRow, endRow, startColumn, endColumn) {
	            return new MatrixSubView(this, startRow, endRow, startColumn, endColumn);
	        }

	        selectionView(rowIndices, columnIndices) {
	            return new MatrixSelectionView(this, rowIndices, columnIndices);
	        }
	    }

	    Matrix.prototype.klass = 'Matrix';

	    /**
	     * @private
	     * Check that two matrices have the same dimensions
	     * @param {Matrix} matrix
	     * @param {Matrix} otherMatrix
	     */
	    function checkDimensions(matrix, otherMatrix) {
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
	    var newMatrix = new this(matrix);
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
	    var newMatrix = new this(matrix);
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
	    var newMatrix = new this(matrix);
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

	    for (var operator of operators) {
	        var inplaceOp = eval(fillTemplateFunction(inplaceOperator, {name: operator[1], op: operator[0]}));
	        var inplaceOpS = eval(fillTemplateFunction(inplaceOperatorScalar, {name: operator[1] + 'S', op: operator[0]}));
	        var inplaceOpM = eval(fillTemplateFunction(inplaceOperatorMatrix, {name: operator[1] + 'M', op: operator[0]}));
	        var staticOp = eval(fillTemplateFunction(staticOperator, {name: operator[1]}));
	        for (var i = 1; i < operator.length; i++) {
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
	        for (var i = 1; i < method.length; i++) {
	            Matrix.prototype[method[i]] = inplaceMeth;
	            Matrix[method[i]] = staticMeth;
	        }
	    }

	    var methodsWithArgs = [
	        ['Math.pow', 1, 'pow']
	    ];

	    for (var methodWithArg of methodsWithArgs) {
	        var args = 'arg0';
	        for (var i = 1; i < methodWithArg[1]; i++) {
	            args += `, arg${i}`;
	        }
	        if (methodWithArg[1] !== 1) {
	            var inplaceMethWithArgs = eval(fillTemplateFunction(inplaceMethodWithArgs, {
	                name: methodWithArg[2],
	                method: methodWithArg[0],
	                args: args
	            }));
	            var staticMethWithArgs = eval(fillTemplateFunction(staticMethodWithArgs, {name: methodWithArg[2], args: args}));
	            for (var i = 2; i < methodWithArg.length; i++) {
	                Matrix.prototype[methodWithArg[i]] = inplaceMethWithArgs;
	                Matrix[methodWithArg[i]] = staticMethWithArgs;
	            }
	        } else {
	            var tmplVar = {
	                name: methodWithArg[2],
	                args: args,
	                method: methodWithArg[0]
	            };
	            var inplaceMethod = eval(fillTemplateFunction(inplaceMethodWithOneArg, tmplVar));
	            var inplaceMethodS = eval(fillTemplateFunction(inplaceMethodWithOneArgScalar, tmplVar));
	            var inplaceMethodM = eval(fillTemplateFunction(inplaceMethodWithOneArgMatrix, tmplVar));
	            var staticMethod = eval(fillTemplateFunction(staticMethodWithOneArg, tmplVar));
	            for (var i = 2; i < methodWithArg.length; i++) {
	                Matrix.prototype[methodWithArg[i]] = inplaceMethod;
	                Matrix.prototype[methodWithArg[i] + 'M'] = inplaceMethodM;
	                Matrix.prototype[methodWithArg[i] + 'S'] = inplaceMethodS;
	                Matrix[methodWithArg[i]] = staticMethod;
	            }
	        }
	    }

	    function fillTemplateFunction(template, values) {
	        for (var i in values) {
	            template = template.replace(new RegExp('%' + i + '%', 'g'), values[i]);
	        }
	        return template;
	    }

	    return Matrix;
	}


/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';

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
	 * @returns {Array}
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
	 * @returns {Array}
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
	        throw new RangeError('Indices are out of range')
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


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(165);

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


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var abstractMatrix = __webpack_require__(162);
	var Matrix;

	class BaseView extends abstractMatrix() {
	    constructor(matrix, rows, columns) {
	        super();
	        this.matrix = matrix;
	        this.rows = rows;
	        this.columns = columns;
	    }

	    static get [Symbol.species]() {
	        if (!Matrix) {
	            Matrix = __webpack_require__(160);
	        }
	        return Matrix;
	    }
	}

	module.exports = BaseView;


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(165);

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


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(165);
	var util = __webpack_require__(163);

	class MatrixSubView extends BaseView {
	    constructor(matrix, startRow, endRow, startColumn, endColumn) {
	        util.checkRange(matrix, startRow, endRow, startColumn, endColumn);
	        super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
	        this.startRow = startRow;
	        this.startColumn = startColumn;
	    }

	    set(rowIndex, columnIndex, value) {
	        this.matrix.set(this.startRow + rowIndex, this.startColumn + columnIndex , value);
	        return this;
	    }

	    get(rowIndex, columnIndex) {
	        return this.matrix.get(this.startRow + rowIndex, this.startColumn + columnIndex);
	    }
	}

	module.exports = MatrixSubView;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(165);
	var util = __webpack_require__(163);

	class MatrixSelectionView extends BaseView {
	    constructor(matrix, rowIndices, columnIndices) {
	        var indices = util.checkIndices(matrix, rowIndices, columnIndices);
	        super(matrix, indices.row.length, indices.column.length);
	        this.rowIndices = indices.row;
	        this.columnIndices = indices.column;
	    }

	    set(rowIndex, columnIndex, value) {
	        this.matrix.set(this.rowIndices[rowIndex], this.columnIndices[columnIndex] , value);
	        return this;
	    }

	    get(rowIndex, columnIndex) {
	        return this.matrix.get(this.rowIndices[rowIndex], this.columnIndices[columnIndex]);
	    }
	}

	module.exports = MatrixSelectionView;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(165);

	class MatrixColumnView extends BaseView {
	    constructor(matrix, column) {
	        super(matrix, matrix.rows, 1);
	        this.column = column;
	    }

	    set(rowIndex, columnIndex, value) {
	        this.matrix.set(rowIndex, this.column, value);
	        return this;
	    }

	    get(rowIndex, columnIndex) {
	        return this.matrix.get(rowIndex, this.column);
	    }
	}

	module.exports = MatrixColumnView;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(165);

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


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(165);

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


/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(160);

	var SingularValueDecomposition = __webpack_require__(173);
	var EigenvalueDecomposition = __webpack_require__(175);
	var LuDecomposition = __webpack_require__(176);
	var QrDecomposition = __webpack_require__(177);
	var CholeskyDecomposition = __webpack_require__(178);

	function inverse(matrix) {
	    matrix = Matrix.checkMatrix(matrix);
	    return solve(matrix, Matrix.eye(matrix.rows));
	}

	Matrix.inverse = Matrix.inv = inverse;
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


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(160);
	var util = __webpack_require__(174);
	var hypotenuse = util.hypotenuse;
	var getFilled2DArray = util.getFilled2DArray;

	// https://github.com/lutzroeder/Mapack/blob/master/Source/SingularValueDecomposition.cs
	function SingularValueDecomposition(value, options) {
	    if (!(this instanceof SingularValueDecomposition)) {
	        return new SingularValueDecomposition(value, options);
	    }
	    value = Matrix.checkMatrix(value);

	    options = options || {};

	    var m = value.rows,
	        n = value.columns,
	        nu = Math.min(m, n);

	    var wantu = true, wantv = true;
	    if (options.computeLeftSingularVectors === false)
	        wantu = false;
	    if (options.computeRightSingularVectors === false)
	        wantv = false;
	    var autoTranspose = options.autoTranspose === true;

	    var swapped = false;
	    var a;
	    if (m < n) {
	        if (!autoTranspose) {
	            a = value.clone();
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
	        if (!Matrix.isMatrix(this.U)) {
	            this.U = new Matrix(this.U);
	        }
	        return this.U;
	    },
	    get rightSingularVectors() {
	        if (!Matrix.isMatrix(this.V)) {
	            this.V = new Matrix(this.V);
	        }
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

	        var U = this.U;
	        var V = this.rightSingularVectors;

	        var VL = V.mmul(Ls),
	            vrows = V.rows,
	            urows = U.length,
	            VLU = Matrix.zeros(vrows, urows),
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
	        return this.solve(Matrix.diag(value));
	    },
	    inverse: function () {
	        var V = this.V;
	        var e = this.threshold,
	            vrows = V.length,
	            vcols = V[0].length,
	            X = new Matrix(vrows, this.s.length),
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
	            Y = new Matrix(vrows, urows),
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


/***/ },
/* 174 */
/***/ function(module, exports) {

	'use strict';

	exports.hypotenuse = function hypotenuse(a, b) {
	    if (Math.abs(a) > Math.abs(b)) {
	        var r = b / a;
	        return Math.abs(a) * Math.sqrt(1 + r * r);
	    }
	    if (b !== 0) {
	        var r = a / b;
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


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(160);
	const util = __webpack_require__(174);
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
	    }
	    else {
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


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(160);

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
	    get lowerTriangularMatrix() {
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
	    get upperTriangularMatrix() {
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


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(160);
	var hypotenuse = __webpack_require__(174).hypotenuse;

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


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(160);

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


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(180).squared;

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


/***/ },
/* 180 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(180).squared;

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


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const euclidean = __webpack_require__(180);

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


/***/ },
/* 185 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const euclidean = __webpack_require__(180);

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


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(180).squared;

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


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(180).squared;

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


/***/ },
/* 189 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(129);
	const SVD = Matrix.DC.SingularValueDecomposition;
	const BaseRegression = __webpack_require__(127);

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
	     * @param X - A matrix with n rows and 2 columns.
	     * @param y - A vector of the prediction values.
	     * @param options
	     */
	    train(X, y, options) {
	        if (!Matrix.isMatrix(X)) X = new Matrix(X);
	        if (!Matrix.isMatrix(y)) y = Matrix.columnVector(y);

	        if (y.rows !== X.rows)//Perhaps y is transpose
	            y = y.transpose();

	        if (X.columns !== 2)
	            throw new RangeError('You give X with ' + X.columns + ' columns and it must be 2');
	        if (X.rows !== y.rows)
	            throw new RangeError('X and y must have the same rows');

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
	 * @returns {Suite|Matrix}
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


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const BaseRegression = __webpack_require__(127);
	const maybeToPrecision = __webpack_require__(126).maybeToPrecision;
	const median = __webpack_require__(192).median;

	/**
	 * Theil–Sen estimator
	 *
	 * https://en.wikipedia.org/wiki/Theil%E2%80%93Sen_estimator
	 * @class
	 */
	class TheilSenRegression extends BaseRegression {

	    /**
	     *
	     * @param x
	     * @param y
	     * @param options
	     * @constructor
	     */
	    constructor(x, y, options) {
	        options = options || {};
	        super();
	        if (x === true) {
	            // loads the model
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
	        var result = 'y = ';
	        if (this.slope) {
	            var xFactor = maybeToPrecision(this.slope, precision);
	            result += (Math.abs(xFactor - 1) < 1e-5 ? '' : xFactor) + 'x';
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


/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';

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


/***/ }
/******/ ])
});
;