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
	exports.getPeaks = __webpack_require__(81);
	exports.massInPeaks = __webpack_require__(112);
	exports.vectorify = __webpack_require__(118);
	exports.cosine = __webpack_require__(119);
	exports.massFilter = __webpack_require__(117);
	exports.spectraComparison = __webpack_require__(120);
	exports.scaleAlignment = __webpack_require__(125);
	exports.kovats = __webpack_require__(176);
	exports.getKovatsTable = __webpack_require__(177);
	exports.kovatsConversionFunction = __webpack_require__(178);
	exports.rescaleTime = __webpack_require__(80);
	exports.fromJcamp = __webpack_require__(180);
	exports.fromJSON = __webpack_require__(183);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiQ2hyb21hdG9ncmFtIiwicmVxdWlyZSIsImdldFBlYWtzIiwibWFzc0luUGVha3MiLCJ2ZWN0b3JpZnkiLCJjb3NpbmUiLCJtYXNzRmlsdGVyIiwic3BlY3RyYUNvbXBhcmlzb24iLCJzY2FsZUFsaWdubWVudCIsImtvdmF0cyIsImdldEtvdmF0c1RhYmxlIiwia292YXRzQ29udmVyc2lvbkZ1bmN0aW9uIiwicmVzY2FsZVRpbWUiLCJmcm9tSmNhbXAiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVFDLFlBQVIsR0FBdUJDLFFBQVEsZ0JBQVIsQ0FBdkI7O0FBRUE7QUFDQUYsUUFBUUcsUUFBUixHQUFtQkQsUUFBUSxZQUFSLENBQW5CO0FBQ0FGLFFBQVFJLFdBQVIsR0FBc0JGLFFBQVEsZUFBUixDQUF0QjtBQUNBRixRQUFRSyxTQUFSLEdBQW9CSCxRQUFRLGFBQVIsQ0FBcEI7QUFDQUYsUUFBUU0sTUFBUixHQUFpQkosUUFBUSxVQUFSLENBQWpCO0FBQ0FGLFFBQVFPLFVBQVIsR0FBcUJMLFFBQVEsY0FBUixDQUFyQjtBQUNBRixRQUFRUSxpQkFBUixHQUE0Qk4sUUFBUSxxQkFBUixDQUE1QjtBQUNBRixRQUFRUyxjQUFSLEdBQXlCUCxRQUFRLGtCQUFSLENBQXpCO0FBQ0FGLFFBQVFVLE1BQVIsR0FBaUJSLFFBQVEsVUFBUixDQUFqQjtBQUNBRixRQUFRVyxjQUFSLEdBQXlCVCxRQUFRLGtCQUFSLENBQXpCO0FBQ0FGLFFBQVFZLHdCQUFSLEdBQW1DVixRQUFRLDRCQUFSLENBQW5DO0FBQ0FGLFFBQVFhLFdBQVIsR0FBc0JYLFFBQVEsZUFBUixDQUF0QjtBQUNBRixRQUFRYyxTQUFSLEdBQW9CWixRQUFRLGFBQVIsQ0FBcEI7QUFDQUYsUUFBUWUsUUFBUixHQUFtQmIsUUFBUSxZQUFSLENBQW5CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5DaHJvbWF0b2dyYW0gPSByZXF1aXJlKCcuL0Nocm9tYXRvZ3JhbScpO1xuXG4vLyBDaHJvbWF0b2dyYXBoeSB1dGlsc1xuZXhwb3J0cy5nZXRQZWFrcyA9IHJlcXVpcmUoJy4vZ2V0UGVha3MnKTtcbmV4cG9ydHMubWFzc0luUGVha3MgPSByZXF1aXJlKCcuL21hc3NJblBlYWtzJyk7XG5leHBvcnRzLnZlY3RvcmlmeSA9IHJlcXVpcmUoJy4vdmVjdG9yaWZ5Jyk7XG5leHBvcnRzLmNvc2luZSA9IHJlcXVpcmUoJy4vY29zaW5lJyk7XG5leHBvcnRzLm1hc3NGaWx0ZXIgPSByZXF1aXJlKCcuL21hc3NGaWx0ZXInKTtcbmV4cG9ydHMuc3BlY3RyYUNvbXBhcmlzb24gPSByZXF1aXJlKCcuL3NwZWN0cmFDb21wYXJpc29uJyk7XG5leHBvcnRzLnNjYWxlQWxpZ25tZW50ID0gcmVxdWlyZSgnLi9zY2FsZUFsaWdubWVudCcpO1xuZXhwb3J0cy5rb3ZhdHMgPSByZXF1aXJlKCcuL2tvdmF0cycpO1xuZXhwb3J0cy5nZXRLb3ZhdHNUYWJsZSA9IHJlcXVpcmUoJy4vZ2V0S292YXRzVGFibGUnKTtcbmV4cG9ydHMua292YXRzQ29udmVyc2lvbkZ1bmN0aW9uID0gcmVxdWlyZSgnLi9rb3ZhdHNDb252ZXJzaW9uRnVuY3Rpb24nKTtcbmV4cG9ydHMucmVzY2FsZVRpbWUgPSByZXF1aXJlKCcuL3Jlc2NhbGVUaW1lJyk7XG5leHBvcnRzLmZyb21KY2FtcCA9IHJlcXVpcmUoJy4vZnJvbUpjYW1wJyk7XG5leHBvcnRzLmZyb21KU09OID0gcmVxdWlyZSgnLi9mcm9tSlNPTicpO1xuIl19

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _typeof2 = __webpack_require__(55);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(75);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(76);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _rescaleTime = __webpack_require__(80);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DaHJvbWF0b2dyYW0uanMiXSwibmFtZXMiOlsicmVzY2FsZVRpbWUiLCJyZXF1aXJlIiwiQ2hyb21hdG9ncmFtIiwiZGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInRpbWVzIiwiVHlwZUVycm9yIiwibGVuZ3RoIiwic2VyaWVzIiwic2VyaWUiLCJhZGRTZXJpZSIsIm5hbWUiLCJmaW5kIiwiZGltZW5zaW9uIiwiRXJyb3IiLCJmaW5kU2VyaWVCeU5hbWUiLCJwdXNoIiwiY29udmVyc2lvbkZ1bmN0aW9uIiwiYW5zIiwidGljIiwibWFzcyIsIm1hcCIsIm1zIiwiYW5zTVMiLCJpIiwiaW50ZW5zaXR5IiwidGltZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWNDLFFBQVEsZUFBUixDQUFwQjs7QUFFQTs7Ozs7OztJQU1NQyxZO0FBQ0YsMEJBQVlDLElBQVosRUFBa0I7QUFBQTs7QUFDZCxZQUFJQyxNQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBSixFQUF5QjtBQUNyQjtBQUNBQSxtQkFBTyxFQUFDRyxPQUFPSCxJQUFSLEVBQVA7QUFDSCxTQUhELE1BR08sSUFBSSxRQUFPQSxJQUFQLHVEQUFPQSxJQUFQLE9BQWdCLFFBQXBCLEVBQThCO0FBQ2pDLGtCQUFNLElBQUlJLFNBQUosQ0FBYyxpQ0FBZCxDQUFOO0FBQ0g7O0FBRUQsWUFBSSxDQUFDSCxNQUFNQyxPQUFOLENBQWNGLEtBQUtHLEtBQW5CLENBQUwsRUFBZ0M7QUFDNUIsa0JBQU0sSUFBSUMsU0FBSixDQUFjLDBCQUFkLENBQU47QUFDSDtBQUNELGFBQUtELEtBQUwsR0FBYUgsS0FBS0csS0FBbEI7QUFDQSxhQUFLRSxNQUFMLEdBQWNMLEtBQUtHLEtBQUwsQ0FBV0UsTUFBekI7O0FBRUEsYUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxZQUFJTixLQUFLTSxNQUFULEVBQWlCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2IsZ0VBQW9CTixLQUFLTSxNQUF6Qiw0R0FBaUM7QUFBQSx3QkFBdEJDLEtBQXNCOztBQUM3Qix5QkFBS0MsUUFBTCxDQUFjRCxLQUFkO0FBQ0g7QUFIWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSWhCO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozt3Q0FLZ0JFLEksRUFBTTtBQUNsQixtQkFBTyxLQUFLSCxNQUFMLENBQVlJLElBQVosQ0FBaUI7QUFBQSx1QkFBU0gsTUFBTUUsSUFBTixLQUFlQSxJQUF4QjtBQUFBLGFBQWpCLENBQVA7QUFDSDs7QUFFRDs7Ozs7OztpQ0FJU0YsSyxFQUFPO0FBQ1osZ0JBQUksT0FBT0EsTUFBTUksU0FBYixLQUEyQixRQUEvQixFQUF5QztBQUNyQyxzQkFBTSxJQUFJQyxLQUFKLENBQVUsNkJBQVYsQ0FBTjtBQUNIO0FBQ0QsZ0JBQUksT0FBT0wsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQztBQUNoQyxzQkFBTSxJQUFJRyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNIO0FBQ0QsZ0JBQUksS0FBS0MsZUFBTCxDQUFxQk4sTUFBTUUsSUFBM0IsQ0FBSixFQUFzQztBQUNsQyxzQkFBTSxJQUFJRyxLQUFKLHdCQUErQkwsTUFBTUUsSUFBckMscUJBQU47QUFDSDtBQUNELGdCQUFJLENBQUNSLE1BQU1DLE9BQU4sQ0FBY0ssTUFBTVAsSUFBcEIsQ0FBTCxFQUFnQztBQUM1QixzQkFBTSxJQUFJWSxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNIO0FBQ0QsaUJBQUtOLE1BQUwsQ0FBWVEsSUFBWixDQUFpQlAsS0FBakI7QUFDSDs7QUFFRDs7Ozs7Ozt1Q0FJZTtBQUNYLG1CQUFPLEtBQUtKLEtBQUwsQ0FBVyxDQUFYLENBQVA7QUFDSDs7QUFFRDs7Ozs7OztzQ0FJYztBQUNWLG1CQUFPLEtBQUtBLEtBQUwsQ0FBVyxLQUFLRSxNQUFMLEdBQWMsQ0FBekIsQ0FBUDtBQUNIOztBQUVEOzs7Ozs7O21DQUlXO0FBQ1AsbUJBQU8sS0FBS0YsS0FBWjtBQUNIOztBQUVEOzs7Ozs7O2lDQUlTQSxLLEVBQU87QUFDWixpQkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0g7O0FBRUQ7Ozs7Ozs7b0NBSVlZLGtCLEVBQW9CO0FBQzVCLGlCQUFLWixLQUFMLEdBQWFOLGFBQVksS0FBS00sS0FBakIsRUFBd0JZLGtCQUF4QixDQUFiO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7aUNBT1M7QUFDTCxnQkFBSUMsTUFBTSxJQUFJZixLQUFKLENBQVUsS0FBS0UsS0FBTCxDQUFXRSxNQUFyQixDQUFWO0FBQ0EsZ0JBQU1ZLE1BQU0sS0FBS0osZUFBTCxDQUFxQixLQUFyQixFQUE0QmIsSUFBeEM7QUFDQSxnQkFBTWtCLE9BQU8sS0FBS0wsZUFBTCxDQUFxQixJQUFyQixFQUEyQmIsSUFBM0IsQ0FBZ0NtQixHQUFoQyxDQUFvQyxVQUFDQyxFQUFELEVBQVE7QUFDckQsb0JBQUlDLFFBQVEsSUFBSXBCLEtBQUosQ0FBVW1CLEdBQUcsQ0FBSCxFQUFNZixNQUFoQixDQUFaO0FBQ0EscUJBQUssSUFBSWlCLElBQUksQ0FBYixFQUFnQkEsSUFBSUQsTUFBTWhCLE1BQTFCLEVBQWtDaUIsR0FBbEMsRUFBdUM7QUFDbkNELDBCQUFNQyxDQUFOLElBQVc7QUFDUEosOEJBQU1FLEdBQUcsQ0FBSCxFQUFNRSxDQUFOLENBREM7QUFFUEMsbUNBQVdILEdBQUcsQ0FBSCxFQUFNRSxDQUFOO0FBRkoscUJBQVg7QUFJSDtBQUNELHVCQUFPRCxLQUFQO0FBQ0gsYUFUWSxDQUFiOztBQVdBLGlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sSUFBSVgsTUFBeEIsRUFBZ0NpQixHQUFoQyxFQUFxQztBQUNqQ04sb0JBQUlNLENBQUosSUFBUztBQUNMRSwwQkFBTSxLQUFLckIsS0FBTCxDQUFXbUIsQ0FBWCxDQUREO0FBRUxMLHlCQUFLQSxJQUFJSyxDQUFKLENBRkE7QUFHTEosMEJBQU1BLEtBQUtJLENBQUw7QUFIRCxpQkFBVDtBQUtIOztBQUVELG1CQUFPTixHQUFQO0FBQ0g7Ozs7O0FBR0xTLE9BQU9DLE9BQVAsR0FBaUIzQixZQUFqQiIsImZpbGUiOiJDaHJvbWF0b2dyYW0uanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZXNjYWxlVGltZSA9IHJlcXVpcmUoJy4vcmVzY2FsZVRpbWUnKTtcblxuLyoqXG4gKiBDbGFzcyBhbGxvd2luZyB0byBzdG9yZSB0aW1lIC8gbXMgKG1zKSBzZXJpZXNcbiAqIEl0IGFsbG93cyBhbHNvIHRvIHN0b3JlIHNpbXBsZSB0aW1lIGEgdHJhY2VcbiAqIEBjbGFzcyBDaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fEFycmF5PG51bWJlcj59IGRhdGEgLSBBIEdDL01TIGRhdGEgZm9ybWF0IG9iamVjdCBvciBhIHRpbWUgc2VyaWVcbiAqL1xuY2xhc3MgQ2hyb21hdG9ncmFtIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAvLyBpbml0IHdpdGggdGltZXNcbiAgICAgICAgICAgIGRhdGEgPSB7dGltZXM6IGRhdGF9O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBtdXN0IGJlIGFuIG9iamVjdCBvciBhcnJheScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEudGltZXMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aW1lcyBhcnJheSBpcyBtYW5kYXRvcnknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVzID0gZGF0YS50aW1lcztcbiAgICAgICAgdGhpcy5sZW5ndGggPSBkYXRhLnRpbWVzLmxlbmd0aDtcblxuICAgICAgICB0aGlzLnNlcmllcyA9IFtdO1xuICAgICAgICBpZiAoZGF0YS5zZXJpZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2VyaWUgb2YgZGF0YS5zZXJpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNlcmllKHNlcmllKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgdGhlIHNlcmllIGdpdmluZyB0aGUgbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gbmFtZSBvZiB0aGUgc2VyaWVcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IC0gT2JqZWN0IHdpdGggYW4gYXJyYXkgb2YgZGF0YSwgZGltZW5zaW9ucyBvZiB0aGUgZWxlbWVudHMgaW4gdGhlIGFycmF5IGFuZCBuYW1lIG9mIHRoZSBzZXJpZVxuICAgICAqL1xuICAgIGZpbmRTZXJpZUJ5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcmllcy5maW5kKHNlcmllID0+IHNlcmllLm5hbWUgPT09IG5hbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG5ldyBzZXJpZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZXJpZSAtIE9iamVjdCB3aXRoIGFuIGFycmF5IG9mIGRhdGEsIGRpbWVuc2lvbnMgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBhcnJheSBhbmQgbmFtZSBvZiB0aGUgc2VyaWVcbiAgICAgKi9cbiAgICBhZGRTZXJpZShzZXJpZSkge1xuICAgICAgICBpZiAodHlwZW9mIHNlcmllLmRpbWVuc2lvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2VyaWUgbXVzdCBoYXZlIGEgZGltZW5zaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzZXJpZS5uYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXJpZSBtdXN0IGhhdmUgYSBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmluZFNlcmllQnlOYW1lKHNlcmllLm5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGEgc2VyaWUgd2l0aCBuYW1lICR7c2VyaWUubmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2VyaWUuZGF0YSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2VyaWUgbXVzdCBoYXZlIGEgZGF0YSBhcnJheScpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VyaWVzLnB1c2goc2VyaWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IHRpbWUgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IC0gRmlyc3QgdGltZSB2YWx1ZVxuICAgICAqL1xuICAgIGdldEZpcnN0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCB0aW1lIHZhbHVlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSAtIExhc3QgdGltZSB2YWx1ZVxuICAgICAqL1xuICAgIGdldExhc3RUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lc1t0aGlzLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbWUgdmFsdWVzXG4gICAgICogQHJldHVybiB7QXJyYXk8bnVtYmVyPn0gLSBUaW1lIHZhbHVlc1xuICAgICAqL1xuICAgIGdldFRpbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50aW1lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ24gdGhlIHRpbWUgdmFsdWVzXG4gICAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSB0aW1lcyAtIE5ldyB0aW1lIHZhbHVlc1xuICAgICAqL1xuICAgIHNldFRpbWVzKHRpbWVzKSB7XG4gICAgICAgIHRoaXMudGltZXMgPSB0aW1lcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllcyB0aGUgdGltZSBhcHBseWluZyB0aGUgY29udmVyc2lvbiBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24obnVtYmVyKX0gY29udmVyc2lvbkZ1bmN0aW9uXG4gICAgICovXG4gICAgcmVzY2FsZVRpbWUoY29udmVyc2lvbkZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMudGltZXMgPSByZXNjYWxlVGltZSh0aGlzLnRpbWVzLCBjb252ZXJzaW9uRnVuY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSBjb250ZW50IHRvIGFuIEpTT04gQXJyYXlcbiAgICAgKiBAcmV0dXJuIHtBcnJheTxvYmplY3Q+fSAtIFJldHVybnMgYSBsaXN0IHdpdGggdGhlIGZvbGxvd2luZyBmaWVsZHM6XG4gICAgICogICogYHRpbWVgOiBOdW1iZXIgZm9yIHRoZSByZXRlbnRpb24gdGltZVxuICAgICAqICAqIGB0aWNgOiBOdW1iZXIgZm9yIHRoZSB0b3RhbCBpb24gY2hyb21hdG9ncmFtXG4gICAgICogICogYG1hc3NgOiBMaXN0IG9mIG1hc3MgdmFsdWVzIGFuZCB0aGVpciByZXNwZWN0aXZlIGludGVuc2l0aWVzXG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICB2YXIgYW5zID0gbmV3IEFycmF5KHRoaXMudGltZXMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdGljID0gdGhpcy5maW5kU2VyaWVCeU5hbWUoJ3RpYycpLmRhdGE7XG4gICAgICAgIGNvbnN0IG1hc3MgPSB0aGlzLmZpbmRTZXJpZUJ5TmFtZSgnbXMnKS5kYXRhLm1hcCgobXMpID0+IHtcbiAgICAgICAgICAgIHZhciBhbnNNUyA9IG5ldyBBcnJheShtc1swXS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbnNNUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFuc01TW2ldID0ge1xuICAgICAgICAgICAgICAgICAgICBtYXNzOiBtc1swXVtpXSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZW5zaXR5OiBtc1sxXVtpXVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYW5zTVM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhbnNbaV0gPSB7XG4gICAgICAgICAgICAgICAgdGltZTogdGhpcy50aW1lc1tpXSxcbiAgICAgICAgICAgICAgICB0aWM6IHRpY1tpXSxcbiAgICAgICAgICAgICAgICBtYXNzOiBtYXNzW2ldXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFucztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21hdG9ncmFtO1xuIl19

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

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
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
/***/ function(module, exports) {

	'use strict';

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZXNjYWxlVGltZS5qcyJdLCJuYW1lcyI6WyJyZXNjYWxlVGltZSIsIm9yaWdpbmFsVGltZSIsImNvbnZlcnNpb25GdW5jdGlvbiIsIm1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7O0FBTUEsU0FBU0EsV0FBVCxDQUFxQkMsWUFBckIsRUFBbUNDLGtCQUFuQyxFQUF1RDtBQUNuRCxTQUFPRCxhQUFhRSxHQUFiLENBQWlCRCxrQkFBakIsQ0FBUDtBQUNIOztBQUVERSxPQUFPQyxPQUFQLEdBQWlCTCxXQUFqQiIsImZpbGUiOiJyZXNjYWxlVGltZS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHRpbWUgYXBwbHlpbmcgdGhlIGNvbnZlcnNpb24gZnVuY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gb3JpZ2luYWxUaW1lIC0gT3JpZ2luYWwgbGlzdCBvZiB0aW1lIHZhbHVlc1xuICogQHBhcmFtIHtmdW5jdGlvbihudW1iZXIpfSBjb252ZXJzaW9uRnVuY3Rpb24gLSBGdW5jdGlvbiB0aGF0IGdpdmVuIGEgbnVtYmVyIGNvbXB1dGVzIHRoZSBuZXcgdmFsdWVcbiAqIEByZXR1cm4ge0FycmF5PG51bWJlcj59IC0gTW9kaWZpZWQgbGlzdCBvZiB0aW1lIHZhbHVlc1xuICovXG5mdW5jdGlvbiByZXNjYWxlVGltZShvcmlnaW5hbFRpbWUsIGNvbnZlcnNpb25GdW5jdGlvbikge1xuICAgIHJldHVybiBvcmlnaW5hbFRpbWUubWFwKGNvbnZlcnNpb25GdW5jdGlvbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVzY2FsZVRpbWU7XG4iXX0=

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var gsd = __webpack_require__(82).gsd;

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nZXRQZWFrcy5qcyJdLCJuYW1lcyI6WyJnc2QiLCJyZXF1aXJlIiwiZ2V0UGVha3MiLCJjaHJvbSIsIm9wdGlvbnMiLCJoZWlnaHRGaWx0ZXIiLCJ0aWMiLCJmaW5kU2VyaWVCeU5hbWUiLCJFcnJvciIsImRhdGEiLCJ0aW1lcyIsImdldFRpbWVzIiwicGVha0xpc3QiLCJub2lzZUxldmVsIiwicmVhbFRvcERldGVjdGlvbiIsInNtb290aFkiLCJzZ09wdGlvbnMiLCJ3aW5kb3dTaXplIiwicG9seW5vbWlhbCIsImhlaWdodEZhY3RvciIsImJvdW5kYXJpZXMiLCJzb3J0IiwiYSIsImIiLCJyaWdodCIsImluZGV4IiwibGVmdCIsIm1lZGlhbkRvdHNXaWR0aCIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImhlaWdodCIsIm1lZGlhbkhlaWdodCIsImZpbHRlciIsInZhbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLE1BQU1DLFFBQVEsUUFBUixFQUFrQkQsR0FBOUI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTRSxRQUFULENBQWtCQyxLQUFsQixFQUF1QztBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLGdDQUNSQSxPQURRLENBQzVCQyxZQUQ0QjtBQUFBLFFBQzVCQSxZQUQ0Qix5Q0FDYixDQURhOzs7QUFHbkMsUUFBSUMsTUFBTUgsTUFBTUksZUFBTixDQUFzQixLQUF0QixDQUFWO0FBQ0EsUUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDTixjQUFNLElBQUlFLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ0g7QUFDREYsVUFBTUEsSUFBSUcsSUFBVjtBQUNBLFFBQUlDLFFBQVFQLE1BQU1RLFFBQU4sRUFBWjs7QUFFQTtBQUNBLFFBQUlDLFdBQVdaLElBQUlVLEtBQUosRUFBV0osR0FBWCxFQUFnQjtBQUMzQk8sb0JBQVksQ0FEZTtBQUUzQkMsMEJBQWtCLEtBRlM7QUFHM0JDLGlCQUFTLElBSGtCO0FBSTNCQyxtQkFBVyxFQUFDQyxZQUFZLENBQWIsRUFBZ0JDLFlBQVksQ0FBNUIsRUFKZ0I7QUFLM0JDLHNCQUFjLENBTGE7QUFNM0JDLG9CQUFZO0FBTmUsS0FBaEIsQ0FBZjs7QUFTQVIsYUFBU1MsSUFBVCxDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVdELEVBQUVFLEtBQUYsQ0FBUUMsS0FBUixHQUFnQkgsRUFBRUksSUFBRixDQUFPRCxLQUF4QixJQUFrQ0YsRUFBRUMsS0FBRixDQUFRQyxLQUFSLEdBQWdCRixFQUFFRyxJQUFGLENBQU9ELEtBQXpELENBQVY7QUFBQSxLQUFkO0FBQ0EsUUFBSUUsa0JBQWtCZixTQUFTZ0IsS0FBS0MsS0FBTCxDQUFXLENBQUNqQixTQUFTa0IsTUFBVCxHQUFrQixDQUFuQixJQUF3QixDQUFuQyxDQUFULENBQXRCO0FBQ0FILHNCQUFrQkEsZ0JBQWdCSCxLQUFoQixDQUFzQkMsS0FBdEIsR0FBOEJFLGdCQUFnQkQsSUFBaEIsQ0FBcUJELEtBQXJFOztBQUVBO0FBQ0EsUUFBSUUsa0JBQWtCLENBQXRCLEVBQXlCO0FBQ3JCQSwwQkFBa0IsQ0FBbEI7QUFDSDtBQUNELFFBQUlBLGtCQUFrQixDQUFsQixLQUF3QixDQUE1QixFQUErQjtBQUMzQkEsMkJBQW1CLENBQW5CO0FBQ0g7O0FBRUQ7QUFDQWYsZUFBV1osSUFBSVUsS0FBSixFQUFXSixHQUFYLEVBQWdCO0FBQ3ZCTyxvQkFBWSxDQURXO0FBRXZCQywwQkFBa0IsS0FGSztBQUd2QkMsaUJBQVMsSUFIYztBQUl2QkMsbUJBQVcsRUFBQ0MsWUFBWVUsZUFBYixFQUE4QlQsWUFBWSxDQUExQyxFQUpZO0FBS3ZCQyxzQkFBYyxDQUxTO0FBTXZCQyxvQkFBWTtBQU5XLEtBQWhCLENBQVg7QUFRQVIsYUFBU1MsSUFBVCxDQUFjLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVVELEVBQUVTLE1BQUYsR0FBV1IsRUFBRVEsTUFBdkI7QUFBQSxLQUFkOztBQUVBO0FBQ0EsUUFBSUMsZUFBZXBCLFNBQVNnQixLQUFLQyxLQUFMLENBQVcsQ0FBQ2pCLFNBQVNrQixNQUFULEdBQWtCLENBQW5CLElBQXdCLENBQW5DLENBQVQsRUFBZ0RDLE1BQW5FO0FBQ0FuQixlQUFXQSxTQUFTcUIsTUFBVCxDQUFnQixVQUFDQyxHQUFEO0FBQUEsZUFBU0EsSUFBSUgsTUFBSixHQUFhQyxlQUFlM0IsWUFBckM7QUFBQSxLQUFoQixDQUFYOztBQUVBLFdBQU9PLFFBQVA7QUFDSDs7QUFFRHVCLE9BQU9DLE9BQVAsR0FBaUJsQyxRQUFqQiIsImZpbGUiOiJnZXRQZWFrcy5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGdzZCA9IHJlcXVpcmUoJ21sLWdzZCcpLmdzZDtcblxuLyoqXG4gKiBBcHBseSB0aGUgR1NEIHBlYWsgcGlja2luZyBhbGdvcml0aG1cbiAqIEBwYXJhbSB7Q2hyb21hdG9ncmFtfSBjaHJvbSAtIEdDL01TIGNocm9tYXRvZ3JhbSB3aGVyZSBtYWtlIHRoZSBwZWFrIHBpY2tpbmdcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmhlaWdodEZpbHRlciA9IDJdIC0gRmlsdGVyIGFsbCBvYmplY3RzIHRoYXQgYXJlIGJlbGxvdyBgaGVpZ2h0RmlsdGVyYCB0aW1lcyB0aGUgbWVkaWFuIG9mIHRoZSBoZWlnaHRcbiAqIEByZXR1cm4ge0FycmF5PG9iamVjdD59IC0gTGlzdCBvZiBHU0Qgb2JqZWN0c1xuICovXG5mdW5jdGlvbiBnZXRQZWFrcyhjaHJvbSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge2hlaWdodEZpbHRlciA9IDJ9ID0gb3B0aW9ucztcblxuICAgIGxldCB0aWMgPSBjaHJvbS5maW5kU2VyaWVCeU5hbWUoJ3RpYycpO1xuICAgIGlmICghdGljKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXFwndGljXFwnIHNlcmllIG5vdCBmb3VuZGVkJyk7XG4gICAgfVxuICAgIHRpYyA9IHRpYy5kYXRhO1xuICAgIGxldCB0aW1lcyA9IGNocm9tLmdldFRpbWVzKCk7XG5cbiAgICAvLyBmaXJzdCBwZWFrIHNlbGVjdGlvblxuICAgIGxldCBwZWFrTGlzdCA9IGdzZCh0aW1lcywgdGljLCB7XG4gICAgICAgIG5vaXNlTGV2ZWw6IDAsXG4gICAgICAgIHJlYWxUb3BEZXRlY3Rpb246IGZhbHNlLFxuICAgICAgICBzbW9vdGhZOiB0cnVlLFxuICAgICAgICBzZ09wdGlvbnM6IHt3aW5kb3dTaXplOiA1LCBwb2x5bm9taWFsOiAyfSxcbiAgICAgICAgaGVpZ2h0RmFjdG9yOiAyLFxuICAgICAgICBib3VuZGFyaWVzOiB0cnVlXG4gICAgfSk7XG5cbiAgICBwZWFrTGlzdC5zb3J0KChhLCBiKSA9PiAoYS5yaWdodC5pbmRleCAtIGEubGVmdC5pbmRleCkgLSAoYi5yaWdodC5pbmRleCAtIGIubGVmdC5pbmRleCkpO1xuICAgIGxldCBtZWRpYW5Eb3RzV2lkdGggPSBwZWFrTGlzdFtNYXRoLmZsb29yKChwZWFrTGlzdC5sZW5ndGggLSAxKSAvIDIpXTtcbiAgICBtZWRpYW5Eb3RzV2lkdGggPSBtZWRpYW5Eb3RzV2lkdGgucmlnaHQuaW5kZXggLSBtZWRpYW5Eb3RzV2lkdGgubGVmdC5pbmRleDtcblxuICAgIC8vIHJlc2V0IHBhcmFtZXRlcnNcbiAgICBpZiAobWVkaWFuRG90c1dpZHRoIDwgNSkge1xuICAgICAgICBtZWRpYW5Eb3RzV2lkdGggPSA1O1xuICAgIH1cbiAgICBpZiAobWVkaWFuRG90c1dpZHRoICUgMiA9PT0gMCkge1xuICAgICAgICBtZWRpYW5Eb3RzV2lkdGggLT0gMTtcbiAgICB9XG5cbiAgICAvLyBzZWNvbmQgcGVhayBzZWxlY3Rpb25cbiAgICBwZWFrTGlzdCA9IGdzZCh0aW1lcywgdGljLCB7XG4gICAgICAgIG5vaXNlTGV2ZWw6IDAsXG4gICAgICAgIHJlYWxUb3BEZXRlY3Rpb246IGZhbHNlLFxuICAgICAgICBzbW9vdGhZOiB0cnVlLFxuICAgICAgICBzZ09wdGlvbnM6IHt3aW5kb3dTaXplOiBtZWRpYW5Eb3RzV2lkdGgsIHBvbHlub21pYWw6IDJ9LFxuICAgICAgICBoZWlnaHRGYWN0b3I6IDIsXG4gICAgICAgIGJvdW5kYXJpZXM6IHRydWVcbiAgICB9KTtcbiAgICBwZWFrTGlzdC5zb3J0KChhLCBiKSA9PiBhLmhlaWdodCAtIGIuaGVpZ2h0KTtcblxuICAgIC8vIGZpbHRlciBoZWlnaHQgYnkgZmFjdG9yXG4gICAgbGV0IG1lZGlhbkhlaWdodCA9IHBlYWtMaXN0W01hdGguZmxvb3IoKHBlYWtMaXN0Lmxlbmd0aCAtIDEpIC8gMildLmhlaWdodDtcbiAgICBwZWFrTGlzdCA9IHBlYWtMaXN0LmZpbHRlcigodmFsKSA9PiB2YWwuaGVpZ2h0ID4gbWVkaWFuSGVpZ2h0ICogaGVpZ2h0RmlsdGVyKTtcblxuICAgIHJldHVybiBwZWFrTGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQZWFrcztcbiJdfQ==

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports.post = __webpack_require__(83);
	module.exports.gsd = __webpack_require__(106);


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by acastillo on 9/6/15.
	 */
	'use strict';

	var Opt = __webpack_require__(84);

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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var LM = __webpack_require__(85);
	var math = LM.Matrix.algebra;
	var Matrix = __webpack_require__(97);

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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(86);
	module.exports.Matrix = __webpack_require__(87);
	module.exports.Matrix.algebra = __webpack_require__(96);


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by acastillo on 8/5/15.
	 */
	var Matrix = __webpack_require__(87);
	var math = __webpack_require__(96);

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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(88);
	module.exports.Decompositions = module.exports.DC = __webpack_require__(89);


/***/ },
/* 88 */
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(88);

	var SingularValueDecomposition = __webpack_require__(90);
	var EigenvalueDecomposition = __webpack_require__(92);
	var LuDecomposition = __webpack_require__(93);
	var QrDecomposition = __webpack_require__(94);
	var CholeskyDecomposition = __webpack_require__(95);

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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(88);
	var hypotenuse = __webpack_require__(91).hypotenuse;

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
/* 91 */
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
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(88);
	var hypotenuse = __webpack_require__(91).hypotenuse;

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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(88);

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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(88);
	var hypotenuse = __webpack_require__(91).hypotenuse;

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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(88);

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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by acastillo on 8/24/15.
	 */
	/**
	 * Non in-place function definitions, compatible with mathjs code *
	 */

	'use strict';

	var Matrix = __webpack_require__(87);

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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(98);
	module.exports.Decompositions = module.exports.DC = __webpack_require__(99);


/***/ },
/* 98 */
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(98);

	var SingularValueDecomposition = __webpack_require__(100);
	var EigenvalueDecomposition = __webpack_require__(102);
	var LuDecomposition = __webpack_require__(103);
	var QrDecomposition = __webpack_require__(104);
	var CholeskyDecomposition = __webpack_require__(105);

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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(98);
	var hypotenuse = __webpack_require__(101).hypotenuse;

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
/* 101 */
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(98);
	var hypotenuse = __webpack_require__(101).hypotenuse;

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
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(98);

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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(98);
	var hypotenuse = __webpack_require__(101).hypotenuse;

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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(98);

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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const extend = __webpack_require__(107);
	const SG = __webpack_require__(108);

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


/***/ },
/* 107 */
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	//Code translate from Pascal source in http://pubs.acs.org/doi/pdf/10.1021/ac00205a007
	var extend = __webpack_require__(107);
	var stat = __webpack_require__(109);

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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.array = __webpack_require__(110);
	exports.matrix = __webpack_require__(111);


/***/ },
/* 110 */
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
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var arrayStat = __webpack_require__(110);

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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(113);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var massFilter = __webpack_require__(117);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYXNzSW5QZWFrcy5qcyJdLCJuYW1lcyI6WyJtYXNzRmlsdGVyIiwicmVxdWlyZSIsIm1hc3NJblBlYWtzIiwicGVha0xpc3QiLCJzYW1wbGVNUyIsIm9wdGlvbnMiLCJpIiwibGVuZ3RoIiwibWFzc0RpY3Rpb25hcnkiLCJtYXgiLCJqIiwibGVmdCIsImluZGV4IiwicmlnaHQiLCJrIiwibWFzcyIsIk1hdGgiLCJyb3VuZCIsIm1hc3NMaXN0IiwibXNTdW0iLCJ4IiwiQXJyYXkiLCJ5IiwiTnVtYmVyIiwibWF4TnVtYmVyUGVha3MiLCJ0aHJlc2hvbGRGYWN0b3IiLCJncm91cFdpZHRoIiwibXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGNBQVIsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7QUFVQSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBdUQ7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ25EO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlILFNBQVNJLE1BQTdCLEVBQXFDLEVBQUVELENBQXZDLEVBQTBDO0FBQ3RDLFlBQUlFLGlCQUFpQixFQUFyQjtBQUNBLFlBQUlDLE1BQU0sQ0FBQyxDQUFYO0FBQ0EsYUFBSyxJQUFJQyxJQUFJUCxTQUFTRyxDQUFULEVBQVlLLElBQVosQ0FBaUJDLEtBQTlCLEVBQXFDRixLQUFLUCxTQUFTRyxDQUFULEVBQVlPLEtBQVosQ0FBa0JELEtBQTVELEVBQW1FLEVBQUVGLENBQXJFLEVBQXdFO0FBQ3BFLGlCQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSVYsU0FBU00sQ0FBVCxFQUFZLENBQVosRUFBZUgsTUFBbkMsRUFBMkMsRUFBRU8sQ0FBN0MsRUFBZ0Q7QUFDNUM7QUFDQSxvQkFBSUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXYixTQUFTTSxDQUFULEVBQVksQ0FBWixFQUFlSSxDQUFmLENBQVgsQ0FBWDs7QUFFQTtBQUNBLG9CQUFJTixlQUFlTyxJQUFmLENBQUosRUFBMEI7QUFDdEJQLG1DQUFlTyxJQUFmLEtBQXdCWCxTQUFTTSxDQUFULEVBQVksQ0FBWixFQUFlSSxDQUFmLENBQXhCO0FBQ0gsaUJBRkQsTUFFTztBQUNITixtQ0FBZU8sSUFBZixJQUF1QlgsU0FBU00sQ0FBVCxFQUFZLENBQVosRUFBZUksQ0FBZixDQUF2QjtBQUNIOztBQUVELG9CQUFJTixlQUFlTyxJQUFmLElBQXVCTixHQUEzQixFQUFnQztBQUM1QkEsMEJBQU1ELGVBQWVPLElBQWYsQ0FBTjtBQUNIO0FBQ0o7QUFDSjtBQUNELFlBQU1HLFdBQVcsb0JBQVlWLGNBQVosQ0FBakI7QUFDQSxZQUFJVyxRQUFRO0FBQ1JDLGVBQUcsSUFBSUMsS0FBSixDQUFVSCxTQUFTWCxNQUFuQixDQURLO0FBRVJlLGVBQUcsSUFBSUQsS0FBSixDQUFVSCxTQUFTWCxNQUFuQjtBQUZLLFNBQVo7O0FBS0EsYUFBSyxJQUFJRyxLQUFJLENBQWIsRUFBZ0JBLEtBQUlRLFNBQVNYLE1BQTdCLEVBQXFDLEVBQUVHLEVBQXZDLEVBQTBDO0FBQ3RDUyxrQkFBTUMsQ0FBTixDQUFRVixFQUFSLElBQWFhLE9BQU9MLFNBQVNSLEVBQVQsQ0FBUCxDQUFiO0FBQ0FTLGtCQUFNRyxDQUFOLENBQVFaLEVBQVIsSUFBYUYsZUFBZVUsU0FBU1IsRUFBVCxDQUFmLENBQWI7QUFDSDs7QUFFRCxZQUFJTCxRQUFRbUIsY0FBUixJQUEwQm5CLFFBQVFvQixlQUFsQyxJQUFxRHBCLFFBQVFxQixVQUFqRSxFQUE2RTtBQUN6RVAsb0JBQVFuQixXQUFXbUIsS0FBWCxFQUFrQmQsT0FBbEIsQ0FBUjtBQUNIO0FBQ0RGLGlCQUFTRyxDQUFULEVBQVlxQixFQUFaLEdBQWlCUixLQUFqQjtBQUNIOztBQUVELFdBQU9oQixRQUFQO0FBQ0g7O0FBRUR5QixPQUFPQyxPQUFQLEdBQWlCM0IsV0FBakIiLCJmaWxlIjoibWFzc0luUGVha3MuanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXNzRmlsdGVyID0gcmVxdWlyZSgnLi9tYXNzRmlsdGVyJyk7XG5cbi8qKlxuICogSW50ZWdyYXRlIE1TIHNwZWN0cmEgb2YgYSBwZWFrIGxpc3RcbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcGVha0xpc3QgLSBMaXN0IG9mIEdTRCBvYmplY3RzXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHNhbXBsZU1TIC0gTVMgYXJyYXkgb2YgR0Mgc3BlY3RyYVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIGZvciB0aGUgaW50ZWdyYWwgZmlsdGVyaW5nXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGhyZXNob2xkRmFjdG9yID0gMF0gLSBFdmVyeSBwZWFrIHRoYXQgaXQncyBiZWxsb3cgdGhlIG1haW4gcGVhayB0aW1lcyB0aGlzIGZhY3RvciBmaWxsIGJlIHJlbW92ZWQgKHdoZW4gaXMgMCB0aGVyZSdzIG5vIGZpbHRlcilcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhOdW1iZXJQZWFrcyA9IE51bWJlci5NQVhfVkFMVUVdIC0gTWF4aW11bSBudW1iZXIgb2YgcGVha3MgZm9yIGVhY2ggbWFzcyBzcGVjdHJhICh3aGVuIGlzIE51bWJlci5NQVhfVkFMVUUgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuZ3JvdXBXaWR0aCA9IDBdIC0gV2hlbiBmaW5kIGEgbWF4IGNhbid0IGJlIGFub3RoZXIgbWF4IGluIGEgcmFkaXVzIG9mIHRoaXMgc2l6ZVxuICogQHJldHVybiB7QXJyYXk8b2JqZWN0Pn0gLSBMaXN0IG9mIEdTRCBvYmplY3RzIHdpdGggYW4gZXh0cmEgJ21zJyBmaWVsZCB3aXRoIHRoZSBpbnRlZ3JhdGVkIE1TIHNwZWN0cmFcbiAqL1xuZnVuY3Rpb24gbWFzc0luUGVha3MocGVha0xpc3QsIHNhbXBsZU1TLCBvcHRpb25zID0ge30pIHtcbiAgICAvLyBpbnRlZ3JhdGUgTVNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlYWtMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBtYXNzRGljdGlvbmFyeSA9IHt9O1xuICAgICAgICBsZXQgbWF4ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGogPSBwZWFrTGlzdFtpXS5sZWZ0LmluZGV4OyBqIDw9IHBlYWtMaXN0W2ldLnJpZ2h0LmluZGV4OyArK2opIHtcbiAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgc2FtcGxlTVNbal1bMF0ubGVuZ3RoOyArK2spIHtcbiAgICAgICAgICAgICAgICAvLyByb3VuZCB0aGUgbWFzcyB2YWx1ZVxuICAgICAgICAgICAgICAgIGxldCBtYXNzID0gTWF0aC5yb3VuZChzYW1wbGVNU1tqXVswXVtrXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIG1hc3MgdmFsdWUgdG8gdGhlIGRpY3Rpb25hcnlcbiAgICAgICAgICAgICAgICBpZiAobWFzc0RpY3Rpb25hcnlbbWFzc10pIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzc0RpY3Rpb25hcnlbbWFzc10gKz0gc2FtcGxlTVNbal1bMV1ba107XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFzc0RpY3Rpb25hcnlbbWFzc10gPSBzYW1wbGVNU1tqXVsxXVtrXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWFzc0RpY3Rpb25hcnlbbWFzc10gPiBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4ID0gbWFzc0RpY3Rpb25hcnlbbWFzc107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hc3NMaXN0ID0gT2JqZWN0LmtleXMobWFzc0RpY3Rpb25hcnkpO1xuICAgICAgICBsZXQgbXNTdW0gPSB7XG4gICAgICAgICAgICB4OiBuZXcgQXJyYXkobWFzc0xpc3QubGVuZ3RoKSxcbiAgICAgICAgICAgIHk6IG5ldyBBcnJheShtYXNzTGlzdC5sZW5ndGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBtYXNzTGlzdC5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbXNTdW0ueFtqXSA9IE51bWJlcihtYXNzTGlzdFtqXSk7XG4gICAgICAgICAgICBtc1N1bS55W2pdID0gbWFzc0RpY3Rpb25hcnlbbWFzc0xpc3Rbal1dO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMubWF4TnVtYmVyUGVha3MgfHwgb3B0aW9ucy50aHJlc2hvbGRGYWN0b3IgfHwgb3B0aW9ucy5ncm91cFdpZHRoKSB7XG4gICAgICAgICAgICBtc1N1bSA9IG1hc3NGaWx0ZXIobXNTdW0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHBlYWtMaXN0W2ldLm1zID0gbXNTdW07XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlYWtMaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc3NJblBlYWtzO1xuIl19

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(115);
	module.exports = __webpack_require__(17).Object.keys;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(49)
	  , $keys    = __webpack_require__(35);

	__webpack_require__(116)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 116 */
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
/* 117 */
/***/ function(module, exports) {

	'use strict';

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYXNzRmlsdGVyLmpzIl0sIm5hbWVzIjpbIm1vcmVEaXN0aW5jdCIsImxpc3QiLCJtYXhOdW1iZXJQZWFrcyIsImdyb3VwV2lkdGgiLCJsZW4iLCJsZW5ndGgiLCJmaWx0ZXJlZExpc3QiLCJBcnJheSIsImkiLCJvdXRSYW5nZSIsImoiLCJ4IiwibWFzc0ZpbHRlciIsIm1hc3NYWU9iamVjdCIsIm9wdGlvbnMiLCJ0aHJlc2hvbGRGYWN0b3IiLCJOdW1iZXIiLCJNQVhfVkFMVUUiLCJtYXgiLCJtYXNzTGlzdCIsInkiLCJmaWx0ZXIiLCJ2YWwiLCJzb3J0IiwiYSIsImIiLCJhbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsU0FBU0EsWUFBVCxDQUFzQkMsSUFBdEIsRUFBNEJDLGNBQTVCLEVBQTRDQyxVQUE1QyxFQUF3RDtBQUNwRCxRQUFJQyxNQUFNLENBQVY7QUFDQSxRQUFJRixpQkFBaUJELEtBQUtJLE1BQTFCLEVBQWtDO0FBQzlCSCx5QkFBaUJELEtBQUtJLE1BQXRCO0FBQ0g7QUFDRCxRQUFJQyxlQUFlLElBQUlDLEtBQUosQ0FBVUwsY0FBVixDQUFuQjs7QUFFQSxTQUFLLElBQUlNLElBQUksQ0FBYixFQUFpQkEsSUFBSVAsS0FBS0ksTUFBVixJQUFzQkQsTUFBTUYsY0FBNUMsRUFBNkQsRUFBRU0sQ0FBL0QsRUFBa0U7QUFDOUQsWUFBSUMsV0FBVyxJQUFmO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlOLEdBQUosSUFBV0ssUUFBM0IsRUFBcUMsRUFBRUMsQ0FBdkMsRUFBMEM7QUFDdENELHVCQUFXQSxZQUFZLEVBQUdSLEtBQUtPLENBQUwsRUFBUUcsQ0FBUixHQUFhTCxhQUFhSSxDQUFiLEVBQWdCQyxDQUFoQixHQUFvQlIsVUFBbEMsSUFBbURGLEtBQUtPLENBQUwsRUFBUUcsQ0FBUixHQUFhTCxhQUFhSSxDQUFiLEVBQWdCQyxDQUFoQixHQUFvQlIsVUFBdEYsQ0FBdkI7QUFDSDtBQUNELFlBQUlNLFFBQUosRUFBYztBQUNWSCx5QkFBYUYsS0FBYixJQUFzQkgsS0FBS08sQ0FBTCxDQUF0QjtBQUNIO0FBQ0o7QUFDREYsaUJBQWFELE1BQWIsR0FBc0JELEdBQXRCOztBQUVBLFdBQU9FLFlBQVA7QUFDSDs7QUFFRDs7Ozs7Ozs7Ozs7QUFXQSxTQUFTTSxVQUFULENBQW9CQyxZQUFwQixFQUFnRDtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLGdDQUNxQ0EsT0FEckMsQ0FDckNDLGVBRHFDO0FBQUEsUUFDckNBLGVBRHFDLHlDQUNuQixDQURtQjtBQUFBLGdDQUNxQ0QsT0FEckMsQ0FDaEJaLGNBRGdCO0FBQUEsUUFDaEJBLGNBRGdCLHlDQUNDYyxPQUFPQyxTQURSO0FBQUEsOEJBQ3FDSCxPQURyQyxDQUNtQlgsVUFEbkI7QUFBQSxRQUNtQkEsVUFEbkIsdUNBQ2dDLENBRGhDOzs7QUFHNUMsUUFBSWUsTUFBTSxDQUFDLENBQVg7QUFDQSxRQUFJQyxXQUFXLElBQUlaLEtBQUosQ0FBVU0sYUFBYUYsQ0FBYixDQUFlTixNQUF6QixDQUFmO0FBQ0EsU0FBSyxJQUFJRyxJQUFJLENBQWIsRUFBZ0JBLElBQUlLLGFBQWFGLENBQWIsQ0FBZU4sTUFBbkMsRUFBMkMsRUFBRUcsQ0FBN0MsRUFBZ0Q7QUFDNUNXLGlCQUFTWCxDQUFULElBQWM7QUFDVkcsZUFBR0UsYUFBYUYsQ0FBYixDQUFlSCxDQUFmLENBRE87QUFFVlksZUFBR1AsYUFBYU8sQ0FBYixDQUFlWixDQUFmO0FBRk8sU0FBZDs7QUFLQSxZQUFJSyxhQUFhTyxDQUFiLENBQWVaLENBQWYsSUFBb0JVLEdBQXhCLEVBQTZCO0FBQ3pCQSxrQkFBTUwsYUFBYU8sQ0FBYixDQUFlWixDQUFmLENBQU47QUFDSDtBQUNKOztBQUVEO0FBQ0FVLFdBQU9ILGVBQVA7QUFDQSxRQUFJVCxlQUFlYSxTQUFTRSxNQUFULENBQWdCLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxJQUFJRixDQUFKLEdBQVFGLEdBQWpCO0FBQUEsS0FBaEIsQ0FBbkI7O0FBRUE7QUFDQSxRQUFJWixhQUFhRCxNQUFiLEdBQXNCSCxjQUF0QixJQUF3Q0MsZUFBZSxDQUEzRCxFQUE4RDtBQUMxREcscUJBQWFpQixJQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLG1CQUFVQSxFQUFFTCxDQUFGLEdBQU1JLEVBQUVKLENBQWxCO0FBQUEsU0FBbEI7O0FBRUE7QUFDQWQsdUJBQWVOLGFBQWFNLFlBQWIsRUFBMkJKLGNBQTNCLEVBQTJDQyxVQUEzQyxDQUFmOztBQUVBRyxxQkFBYWlCLElBQWIsQ0FBa0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsbUJBQVVELEVBQUViLENBQUYsR0FBTWMsRUFBRWQsQ0FBbEI7QUFBQSxTQUFsQjtBQUNIOztBQUVELFFBQUllLE1BQU07QUFDTmYsV0FBRyxJQUFJSixLQUFKLENBQVVELGFBQWFELE1BQXZCLENBREc7QUFFTmUsV0FBRyxJQUFJYixLQUFKLENBQVVELGFBQWFELE1BQXZCO0FBRkcsS0FBVjtBQUlBLFNBQUssSUFBSUcsS0FBSSxDQUFiLEVBQWdCQSxLQUFJRixhQUFhRCxNQUFqQyxFQUF5QyxFQUFFRyxFQUEzQyxFQUE4QztBQUMxQ2tCLFlBQUlmLENBQUosQ0FBTUgsRUFBTixJQUFXRixhQUFhRSxFQUFiLEVBQWdCRyxDQUEzQjtBQUNBZSxZQUFJTixDQUFKLENBQU1aLEVBQU4sSUFBV0YsYUFBYUUsRUFBYixFQUFnQlksQ0FBM0I7QUFDSDs7QUFFRCxXQUFPTSxHQUFQO0FBQ0g7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJoQixVQUFqQiIsImZpbGUiOiJtYXNzRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBGaWx0ZXJzIGJhc2VkIGluIGdyb3VwV2lkdGhcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gbGlzdCAtIFNvcnRlZCBsaXN0IG9mIFhZLW9iamVjdHMgdG8gYmUgZmlsdGVyZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhOdW1iZXJQZWFrcyAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYVxuICogQHBhcmFtIHtudW1iZXJ9IGdyb3VwV2lkdGggLSBXaGVuIGZpbmQgYSBtYXggY2FuJ3QgYmUgYW5vdGhlciBtYXggaW4gYSByYWRpdXMgb2YgdGhpcyBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxvYmplY3Q+fSAtIExpc3Qgb2YgWFktb2JqZWN0cyBmaWx0ZXJlZFxuICovXG5mdW5jdGlvbiBtb3JlRGlzdGluY3QobGlzdCwgbWF4TnVtYmVyUGVha3MsIGdyb3VwV2lkdGgpIHtcbiAgICBsZXQgbGVuID0gMDtcbiAgICBpZiAobWF4TnVtYmVyUGVha3MgPiBsaXN0Lmxlbmd0aCkge1xuICAgICAgICBtYXhOdW1iZXJQZWFrcyA9IGxpc3QubGVuZ3RoO1xuICAgIH1cbiAgICBsZXQgZmlsdGVyZWRMaXN0ID0gbmV3IEFycmF5KG1heE51bWJlclBlYWtzKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyAoaSA8IGxpc3QubGVuZ3RoKSAmJiAobGVuIDwgbWF4TnVtYmVyUGVha3MpOyArK2kpIHtcbiAgICAgICAgbGV0IG91dFJhbmdlID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW4gJiYgb3V0UmFuZ2U7ICsraikge1xuICAgICAgICAgICAgb3V0UmFuZ2UgPSBvdXRSYW5nZSAmJiAhKChsaXN0W2ldLnggPiAoZmlsdGVyZWRMaXN0W2pdLnggLSBncm91cFdpZHRoKSkgJiYgKGxpc3RbaV0ueCA8IChmaWx0ZXJlZExpc3Rbal0ueCArIGdyb3VwV2lkdGgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG91dFJhbmdlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZExpc3RbbGVuKytdID0gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaWx0ZXJlZExpc3QubGVuZ3RoID0gbGVuO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkTGlzdDtcbn1cblxuLyoqXG4gKiBGaWx0ZXJzIGEgbWFzcyBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBtYXNzWFlPYmplY3QgLSBPYmplY3Qgd2l0aCB4IGFuZCB5IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbWFzc1hZT2JqZWN0LnggLSBBcnJheSBvZiBtYXNzIHZhbHVlc1xuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBtYXNzWFlPYmplY3QueSAtIEFycmF5IG9mIGFidW5kYW5jZSB2YWx1ZXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIGludGVncmFsIGZpbHRlcmluZ1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEByZXR1cm4ge29iamVjdH0gLSBPYmplY3Qgd2l0aCBmaWx0ZXJlZCB4IGFuZCB5IGRhdGFcbiAqL1xuZnVuY3Rpb24gbWFzc0ZpbHRlcihtYXNzWFlPYmplY3QsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHt0aHJlc2hvbGRGYWN0b3IgPSAwLCBtYXhOdW1iZXJQZWFrcyA9IE51bWJlci5NQVhfVkFMVUUsIGdyb3VwV2lkdGggPSAwfSA9IG9wdGlvbnM7XG5cbiAgICBsZXQgbWF4ID0gLTE7XG4gICAgbGV0IG1hc3NMaXN0ID0gbmV3IEFycmF5KG1hc3NYWU9iamVjdC54Lmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzWFlPYmplY3QueC5sZW5ndGg7ICsraSkge1xuICAgICAgICBtYXNzTGlzdFtpXSA9IHtcbiAgICAgICAgICAgIHg6IG1hc3NYWU9iamVjdC54W2ldLFxuICAgICAgICAgICAgeTogbWFzc1hZT2JqZWN0LnlbaV1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobWFzc1hZT2JqZWN0LnlbaV0gPiBtYXgpIHtcbiAgICAgICAgICAgIG1heCA9IG1hc3NYWU9iamVjdC55W2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZmlsdGVycyBiYXNlZCBpbiB0aHJlc2hvbGRGYWN0b3JcbiAgICBtYXggKj0gdGhyZXNob2xkRmFjdG9yO1xuICAgIGxldCBmaWx0ZXJlZExpc3QgPSBtYXNzTGlzdC5maWx0ZXIoKHZhbCkgPT4gdmFsLnkgPiBtYXgpO1xuXG4gICAgLy8gZmlsdGVycyBiYXNlZCBpbiBtYXhOdW1iZXJQZWFrc1xuICAgIGlmIChmaWx0ZXJlZExpc3QubGVuZ3RoID4gbWF4TnVtYmVyUGVha3MgfHwgZ3JvdXBXaWR0aCAhPT0gMCkge1xuICAgICAgICBmaWx0ZXJlZExpc3Quc29ydCgoYSwgYikgPT4gYi55IC0gYS55KTtcblxuICAgICAgICAvLyBmaWx0ZXJzIGJhc2VkIGluIGdyb3VwV2lkdGhcbiAgICAgICAgZmlsdGVyZWRMaXN0ID0gbW9yZURpc3RpbmN0KGZpbHRlcmVkTGlzdCwgbWF4TnVtYmVyUGVha3MsIGdyb3VwV2lkdGgpO1xuXG4gICAgICAgIGZpbHRlcmVkTGlzdC5zb3J0KChhLCBiKSA9PiBhLnggLSBiLngpO1xuICAgIH1cblxuICAgIGxldCBhbnMgPSB7XG4gICAgICAgIHg6IG5ldyBBcnJheShmaWx0ZXJlZExpc3QubGVuZ3RoKSxcbiAgICAgICAgeTogbmV3IEFycmF5KGZpbHRlcmVkTGlzdC5sZW5ndGgpXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcmVkTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICBhbnMueFtpXSA9IGZpbHRlcmVkTGlzdFtpXS54O1xuICAgICAgICBhbnMueVtpXSA9IGZpbHRlcmVkTGlzdFtpXS55O1xuICAgIH1cblxuICAgIHJldHVybiBhbnM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFzc0ZpbHRlcjtcbiJdfQ==

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var massFilter = __webpack_require__(117);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92ZWN0b3JpZnkuanMiXSwibmFtZXMiOlsibWFzc0ZpbHRlciIsInJlcXVpcmUiLCJ2ZWN0b3JpZnkiLCJwZWFrTGlzdCIsIm9wdGlvbnMiLCJtYXNzUG93ZXIiLCJpbnRQb3dlciIsImZpbHRlciIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiZ3JvdXBXaWR0aCIsInZlY3RvciIsIkFycmF5IiwibGVuZ3RoIiwiZmlsdGVyT3B0aW9ucyIsImkiLCJsZW4iLCJtcyIsIngiLCJ5IiwiaiIsIk1hdGgiLCJwb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxhQUFhQyxRQUFRLGNBQVIsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0EsU0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsRUFBMkM7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFBQSw2QkFDQ0EsT0FERCxDQUNoQ0MsU0FEZ0M7QUFBQSxRQUNoQ0EsU0FEZ0Msc0NBQ3BCLENBRG9CO0FBQUEsNEJBQ0NELE9BREQsQ0FDakJFLFFBRGlCO0FBQUEsUUFDakJBLFFBRGlCLHFDQUNOLEdBRE07O0FBRXZDLFFBQUlDLFNBQVVILFFBQVFJLGVBQVIsSUFBMkJKLFFBQVFLLGNBQW5DLElBQXFETCxRQUFRTSxVQUEzRTs7QUFFQSxRQUFJQyxTQUFTLElBQUlDLEtBQUosQ0FBVVQsU0FBU1UsTUFBbkIsQ0FBYjtBQUNBLFFBQUlOLE1BQUosRUFBWTtBQUNSLFlBQU1PLGdCQUFnQjtBQUNsQk4sNkJBQWlCSixRQUFRSSxlQURQO0FBRWxCQyw0QkFBZ0JMLFFBQVFLLGNBRk47QUFHbEJDLHdCQUFZTixRQUFRTTtBQUhGLFNBQXRCOztBQU1BLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJWixTQUFTVSxNQUE3QixFQUFxQyxFQUFFRSxDQUF2QyxFQUEwQztBQUN0QyxnQkFBSUMsTUFBTWIsU0FBU1ksQ0FBVCxFQUFZRSxFQUFaLENBQWVDLENBQWYsQ0FBaUJMLE1BQTNCO0FBQ0FGLG1CQUFPSSxDQUFQLElBQVk7QUFDUkcsbUJBQUdmLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlQyxDQURWO0FBRVJDLG1CQUFHLElBQUlQLEtBQUosQ0FBVUksR0FBVjtBQUZLLGFBQVo7QUFJQSxpQkFBSyxJQUFJSSxJQUFJLENBQWIsRUFBZ0JBLElBQUlKLEdBQXBCLEVBQXlCLEVBQUVJLENBQTNCLEVBQThCO0FBQzFCVCx1QkFBT0ksQ0FBUCxFQUFVSSxDQUFWLENBQVlDLENBQVosSUFBaUJDLEtBQUtDLEdBQUwsQ0FBU25CLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlQyxDQUFmLENBQWlCRSxDQUFqQixDQUFULEVBQThCZixTQUE5QixJQUEyQ2dCLEtBQUtDLEdBQUwsQ0FBU25CLFNBQVNZLENBQVQsRUFBWUUsRUFBWixDQUFlRSxDQUFmLENBQWlCQyxDQUFqQixDQUFULEVBQThCZCxRQUE5QixDQUE1RDtBQUNIOztBQUVESyxtQkFBT0ksQ0FBUCxJQUFZZixXQUFXVyxPQUFPSSxDQUFQLENBQVgsRUFBc0JELGFBQXRCLENBQVo7QUFDSDtBQUNKLEtBbkJELE1BbUJPO0FBQ0gsYUFBSyxJQUFJQyxLQUFJLENBQWIsRUFBZ0JBLEtBQUlaLFNBQVNVLE1BQTdCLEVBQXFDLEVBQUVFLEVBQXZDLEVBQTBDO0FBQ3RDLGdCQUFJQyxPQUFNYixTQUFTWSxFQUFULEVBQVlFLEVBQVosQ0FBZUMsQ0FBZixDQUFpQkwsTUFBM0I7QUFDQUYsbUJBQU9JLEVBQVAsSUFBWTtBQUNSRyxtQkFBR2YsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVDLENBRFY7QUFFUkMsbUJBQUcsSUFBSVAsS0FBSixDQUFVSSxJQUFWO0FBRkssYUFBWjtBQUlBLGlCQUFLLElBQUlJLEtBQUksQ0FBYixFQUFnQkEsS0FBSUosSUFBcEIsRUFBeUIsRUFBRUksRUFBM0IsRUFBOEI7QUFDMUJULHVCQUFPSSxFQUFQLEVBQVVJLENBQVYsQ0FBWUMsRUFBWixJQUFpQkMsS0FBS0MsR0FBTCxDQUFTbkIsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVDLENBQWYsQ0FBaUJFLEVBQWpCLENBQVQsRUFBOEJmLFNBQTlCLElBQTJDZ0IsS0FBS0MsR0FBTCxDQUFTbkIsU0FBU1ksRUFBVCxFQUFZRSxFQUFaLENBQWVFLENBQWYsQ0FBaUJDLEVBQWpCLENBQVQsRUFBOEJkLFFBQTlCLENBQTVEO0FBQ0g7QUFDSjtBQUNKOztBQUVELFdBQU9LLE1BQVA7QUFDSDs7QUFFRFksT0FBT0MsT0FBUCxHQUFpQnRCLFNBQWpCIiwiZmlsZSI6InZlY3RvcmlmeS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hc3NGaWx0ZXIgPSByZXF1aXJlKCcuL21hc3NGaWx0ZXInKTtcblxuLyoqXG4gKiBHaXZlbiBhIGxpc3Qgb2YgR1NEIG9iamVjdHMgcmV0dXJucyB0aGUgd2VpZ2h0ZWQgbWFzcyB0aW1lcyBhYnVuZGFuY2VcbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0gcGVha0xpc3QgLSBMaXN0IG9mIEdTRCBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgZm9yIHRoZSBpbnRlZ3JhbCBmaWx0ZXJpbmdcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXNzUG93ZXIgPSAzXSAtIFBvd2VyIGFwcGxpZWQgdG8gdGhlIG1hc3MgdmFsdWVzXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuaW50UG93ZXIgPSAwLjZdIC0gUG93ZXIgYXBwbGllZCB0byB0aGUgYWJ1bmRhbmNlIHZhbHVlc1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEByZXR1cm4ge0FycmF5PG9iamVjdD59IC0gTGlzdCBvZiBtYXNzIGFuZCB3ZWlnaHRlZCBtYXNzIHRpbWVzIGFidW5kYW5jZSBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIHZlY3RvcmlmeShwZWFrTGlzdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge21hc3NQb3dlciA9IDMsIGludFBvd2VyID0gMC42fSA9IG9wdGlvbnM7XG4gICAgbGV0IGZpbHRlciA9IChvcHRpb25zLnRocmVzaG9sZEZhY3RvciB8fCBvcHRpb25zLm1heE51bWJlclBlYWtzIHx8IG9wdGlvbnMuZ3JvdXBXaWR0aCk7XG5cbiAgICBsZXQgdmVjdG9yID0gbmV3IEFycmF5KHBlYWtMaXN0Lmxlbmd0aCk7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgICBjb25zdCBmaWx0ZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgdGhyZXNob2xkRmFjdG9yOiBvcHRpb25zLnRocmVzaG9sZEZhY3RvcixcbiAgICAgICAgICAgIG1heE51bWJlclBlYWtzOiBvcHRpb25zLm1heE51bWJlclBlYWtzLFxuICAgICAgICAgICAgZ3JvdXBXaWR0aDogb3B0aW9ucy5ncm91cFdpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZWFrTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGxlbiA9IHBlYWtMaXN0W2ldLm1zLngubGVuZ3RoO1xuICAgICAgICAgICAgdmVjdG9yW2ldID0ge1xuICAgICAgICAgICAgICAgIHg6IHBlYWtMaXN0W2ldLm1zLngsXG4gICAgICAgICAgICAgICAgeTogbmV3IEFycmF5KGxlbilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbjsgKytqKSB7XG4gICAgICAgICAgICAgICAgdmVjdG9yW2ldLnlbal0gPSBNYXRoLnBvdyhwZWFrTGlzdFtpXS5tcy54W2pdLCBtYXNzUG93ZXIpICogTWF0aC5wb3cocGVha0xpc3RbaV0ubXMueVtqXSwgaW50UG93ZXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZWN0b3JbaV0gPSBtYXNzRmlsdGVyKHZlY3RvcltpXSwgZmlsdGVyT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBlYWtMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gcGVha0xpc3RbaV0ubXMueC5sZW5ndGg7XG4gICAgICAgICAgICB2ZWN0b3JbaV0gPSB7XG4gICAgICAgICAgICAgICAgeDogcGVha0xpc3RbaV0ubXMueCxcbiAgICAgICAgICAgICAgICB5OiBuZXcgQXJyYXkobGVuKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuOyArK2opIHtcbiAgICAgICAgICAgICAgICB2ZWN0b3JbaV0ueVtqXSA9IE1hdGgucG93KHBlYWtMaXN0W2ldLm1zLnhbal0sIG1hc3NQb3dlcikgKiBNYXRoLnBvdyhwZWFrTGlzdFtpXS5tcy55W2pdLCBpbnRQb3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlY3RvcmlmeTtcbiJdfQ==

/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb3NpbmUuanMiXSwibmFtZXMiOlsiY29zaW5lIiwibXMxeCIsIm1zMXkiLCJtczJ4IiwibXMyeSIsImluZGV4MSIsImluZGV4MiIsInByb2R1Y3QiLCJub3JtMSIsIm5vcm0yIiwibGVuZ3RoIiwidzEiLCJ3MiIsIm5vcm0xTm9ybTIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7O0FBUUEsU0FBU0EsTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCLEVBQTRCQyxJQUE1QixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDcEMsUUFBSUMsU0FBUyxDQUFiO0FBQ0EsUUFBSUMsU0FBUyxDQUFiOztBQUVBLFFBQUlDLFVBQVUsQ0FBZDtBQUNBLFFBQUlDLFFBQVEsQ0FBWjtBQUNBLFFBQUlDLFFBQVEsQ0FBWjs7QUFFQSxXQUFRSixTQUFTSixLQUFLUyxNQUFmLElBQTJCSixTQUFTSCxLQUFLTyxNQUFoRCxFQUF5RDtBQUNyRCxZQUFJQyxLQUFLVCxLQUFLRyxNQUFMLENBQVQ7QUFDQSxZQUFJTyxLQUFLUixLQUFLRSxNQUFMLENBQVQ7QUFDQSxZQUFJQSxXQUFXSCxLQUFLTyxNQUFoQixJQUEwQlQsS0FBS0ksTUFBTCxJQUFlRixLQUFLRyxNQUFMLENBQTdDLEVBQTJEO0FBQ3ZERSxxQkFBU0csS0FBS0EsRUFBZDtBQUNBLGNBQUVOLE1BQUY7QUFDSCxTQUhELE1BR08sSUFBSUEsV0FBV0osS0FBS1MsTUFBaEIsSUFBMEJQLEtBQUtHLE1BQUwsSUFBZUwsS0FBS0ksTUFBTCxDQUE3QyxFQUEyRDtBQUM5REkscUJBQVNHLEtBQUtBLEVBQWQ7QUFDQSxjQUFFTixNQUFGO0FBQ0gsU0FITSxNQUdBO0FBQ0hDLHVCQUFXSSxLQUFLQyxFQUFoQjtBQUNBSixxQkFBU0csS0FBS0EsRUFBZDtBQUNBRixxQkFBU0csS0FBS0EsRUFBZDtBQUNBLGNBQUVQLE1BQUY7QUFDQSxjQUFFQyxNQUFGO0FBQ0g7QUFDSjs7QUFFRCxRQUFJTyxhQUFhTCxRQUFRQyxLQUF6QjtBQUNBLFFBQUlJLGVBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsZUFBTyxDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBUU4sVUFBVUEsT0FBWCxHQUF1Qk0sVUFBOUI7QUFDSDtBQUNKOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCZixNQUFqQiIsImZpbGUiOiJjb3NpbmUuanMiLCJzb3VyY2VSb290IjoiL3Vzci9sb2NhbC93d3cvc2l0ZXMvd3d3LmxhY3RhbWUuY29tL25vZGUvZ3JtLWRhdGEvZ2l0L2NoZW1pbmZvLWpzL2Nocm9tYXRvZ3JhcGh5Iiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvc2luZSBzaW1pbGFyaXR5IGJldHdlZW4gdHdvIE1TIHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbXMxeCAtIEFycmF5IG9mIG1hc3MgdmFsdWVzIGZvciB0aGUgZmlyc3Qgc3BlY3RyYVxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBtczF5IC0gQXJyYXkgb2Ygd2VpZ2h0ZWQgYWJ1bmRhbmNlIHZhbHVlcyBmb3IgdGhlIGZpcnN0IHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbXMyeCAtIEFycmF5IG9mIG1hc3MgdmFsdWVzIGZvciB0aGUgc2Vjb25kIHNwZWN0cmFcbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gbXMyeSAtIEFycmF5IG9mIHdlaWdodGVkIGFidW5kYW5jZSB2YWx1ZXMgZm9yIHRoZSBzZWNvbmQgc3BlY3RyYVxuICogQHJldHVybiB7bnVtYmVyfSAtIFNpbWlsYXJpdHkgYmV0d2VlbiB0d28gTVMgc3BlY3RyYVxuICovXG5mdW5jdGlvbiBjb3NpbmUobXMxeCwgbXMxeSwgbXMyeCwgbXMyeSkge1xuICAgIGxldCBpbmRleDEgPSAwO1xuICAgIGxldCBpbmRleDIgPSAwO1xuXG4gICAgbGV0IHByb2R1Y3QgPSAwO1xuICAgIGxldCBub3JtMSA9IDA7XG4gICAgbGV0IG5vcm0yID0gMDtcblxuICAgIHdoaWxlICgoaW5kZXgxIDwgbXMxeC5sZW5ndGgpIHx8IChpbmRleDIgPCBtczJ4Lmxlbmd0aCkpIHtcbiAgICAgICAgbGV0IHcxID0gbXMxeVtpbmRleDFdO1xuICAgICAgICBsZXQgdzIgPSBtczJ5W2luZGV4Ml07XG4gICAgICAgIGlmIChpbmRleDIgPT09IG1zMngubGVuZ3RoIHx8IG1zMXhbaW5kZXgxXSA8IG1zMnhbaW5kZXgyXSkge1xuICAgICAgICAgICAgbm9ybTEgKz0gdzEgKiB3MTtcbiAgICAgICAgICAgICsraW5kZXgxO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4MSA9PT0gbXMxeC5sZW5ndGggfHwgbXMyeFtpbmRleDJdIDwgbXMxeFtpbmRleDFdKSB7XG4gICAgICAgICAgICBub3JtMiArPSB3MiAqIHcyO1xuICAgICAgICAgICAgKytpbmRleDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0ICs9IHcxICogdzI7XG4gICAgICAgICAgICBub3JtMSArPSB3MSAqIHcxO1xuICAgICAgICAgICAgbm9ybTIgKz0gdzIgKiB3MjtcbiAgICAgICAgICAgICsraW5kZXgxO1xuICAgICAgICAgICAgKytpbmRleDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbm9ybTFOb3JtMiA9IG5vcm0xICogbm9ybTI7XG4gICAgaWYgKG5vcm0xTm9ybTIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChwcm9kdWN0ICogcHJvZHVjdCkgLyAobm9ybTFOb3JtMik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvc2luZTtcbiJdfQ==

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(121);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getPeaks = __webpack_require__(81);
	var massInPeaks = __webpack_require__(112);
	var vectorify = __webpack_require__(118);
	var cosine = __webpack_require__(119);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGVjdHJhQ29tcGFyaXNvbi5qcyJdLCJuYW1lcyI6WyJnZXRQZWFrcyIsInJlcXVpcmUiLCJtYXNzSW5QZWFrcyIsInZlY3RvcmlmeSIsImNvc2luZSIsInByZXByb2Nlc3NpbmciLCJjaHJvbWF0b2dyYXBoeSIsIm9wdGlvbnMiLCJwZWFrcyIsInNvcnQiLCJhIiwiYiIsImluZGV4IiwibXMiLCJmaW5kU2VyaWVCeU5hbWUiLCJkYXRhIiwiaW50ZWdyYXRlZE1zIiwidmVjdG9yIiwiZGVmYXVsdE9wdGlvbiIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiTnVtYmVyIiwiTUFYX1ZBTFVFIiwiZ3JvdXBXaWR0aCIsImhlaWdodEZpbHRlciIsIm1hc3NQb3dlciIsImludFBvd2VyIiwic2ltaWxhcml0eVRocmVzaG9sZCIsInNwZWN0cmFDb21wYXJpc29uIiwiY2hyb20xIiwiY2hyb20yIiwicmVmZXJlbmNlIiwic2FtcGxlIiwibGVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsInNpbWlsYXJpdHlQZWFrcyIsIkFycmF5Iiwic2ltaWxhcml0eSIsInNpbWlsYXJMZW4iLCJpIiwiYmlnZ2VyQ291bnRlciIsImoiLCJzaW0iLCJ4IiwieSIsImR1cGxpY2F0ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJwdXNoIiwicGVha3NDaHJvbTEiLCJwZWFrc0Nocm9tMiIsInBlYWtzU2ltaWxhcml0eSIsInZhbCIsInBlYWtzRmlyc3QiLCJwZWFrc1NlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsWUFBUixDQUFqQjtBQUNBLElBQU1DLGNBQWNELFFBQVEsZUFBUixDQUFwQjtBQUNBLElBQU1FLFlBQVlGLFFBQVEsYUFBUixDQUFsQjtBQUNBLElBQU1HLFNBQVNILFFBQVEsVUFBUixDQUFmOztBQUVBOzs7Ozs7O0FBT0EsU0FBU0ksYUFBVCxDQUF1QkMsY0FBdkIsRUFBdUNDLE9BQXZDLEVBQWdEO0FBQzVDO0FBQ0EsUUFBSUMsUUFBUVIsU0FBU00sY0FBVCxFQUF5QkMsT0FBekIsQ0FBWjtBQUNBQyxZQUFRQSxNQUFNQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsRUFBRUUsS0FBRixHQUFVRCxFQUFFQyxLQUF0QjtBQUFBLEtBQVgsQ0FBUjs7QUFFQTtBQUNBLFFBQUlDLEtBQUtQLGVBQWVRLGVBQWYsQ0FBK0IsSUFBL0IsRUFBcUNDLElBQTlDO0FBQ0EsUUFBSUMsZUFBZWQsWUFBWU0sS0FBWixFQUFtQkssRUFBbkIsRUFBdUJOLE9BQXZCLENBQW5CO0FBQ0EsUUFBSVUsU0FBU2QsVUFBVWEsWUFBVixFQUF3QlQsT0FBeEIsQ0FBYjs7QUFFQSxXQUFPO0FBQ0hDLG9CQURHO0FBRUhRLGtDQUZHO0FBR0hDO0FBSEcsS0FBUDtBQUtIOztBQUVELElBQU1DLGdCQUFnQjtBQUNsQkMscUJBQWlCLENBREM7QUFFbEJDLG9CQUFnQkMsT0FBT0MsU0FGTDtBQUdsQkMsZ0JBQVksQ0FITTtBQUlsQkMsa0JBQWMsQ0FKSTtBQUtsQkMsZUFBVyxDQUxPO0FBTWxCQyxjQUFVLEdBTlE7QUFPbEJDLHlCQUFxQjtBQVBILENBQXRCOztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxTQUFTQyxpQkFBVCxDQUEyQkMsTUFBM0IsRUFBbUNDLE1BQW5DLEVBQTJDdkIsT0FBM0MsRUFBb0Q7QUFDaERBLGNBQVUsc0JBQWMsRUFBZCxFQUFrQlcsYUFBbEIsRUFBaUNYLE9BQWpDLENBQVY7O0FBRUE7QUFDQSxRQUFJd0IsWUFBWTFCLGNBQWN3QixNQUFkLEVBQXNCdEIsT0FBdEIsQ0FBaEI7QUFDQSxRQUFJeUIsU0FBUzNCLGNBQWN5QixNQUFkLEVBQXNCdkIsT0FBdEIsQ0FBYjs7QUFFQTtBQUNBLFFBQU0wQixNQUFNQyxLQUFLQyxHQUFMLENBQVNILE9BQU94QixLQUFQLENBQWE0QixNQUF0QixFQUE4QkwsVUFBVXZCLEtBQVYsQ0FBZ0I0QixNQUE5QyxDQUFaO0FBQ0EsUUFBSUMsa0JBQWtCO0FBQ2xCUixnQkFBUSxJQUFJUyxLQUFKLENBQVVMLEdBQVYsQ0FEVTtBQUVsQkgsZ0JBQVEsSUFBSVEsS0FBSixDQUFVTCxHQUFWLENBRlU7QUFHbEJNLG9CQUFZLElBQUlELEtBQUosQ0FBVUwsR0FBVjtBQUhNLEtBQXRCO0FBS0EsUUFBSU8sYUFBYSxDQUFqQjs7QUFFQTtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJVCxPQUFPeEIsS0FBUCxDQUFhNEIsTUFBakMsRUFBeUMsRUFBRUssQ0FBM0MsRUFBOEM7QUFDMUMsWUFBSU4sTUFBTSxFQUFDSSxZQUFZLENBQUMsQ0FBZCxFQUFWO0FBQ0EsWUFBSUcsZ0JBQWdCLENBQXBCO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlaLFVBQVV2QixLQUFWLENBQWdCNEIsTUFBcEMsRUFBNEMsRUFBRU8sQ0FBOUMsRUFBaUQ7QUFDN0MsZ0JBQUlDLE1BQU14QyxPQUFPNEIsT0FBT2YsTUFBUCxDQUFjd0IsQ0FBZCxFQUFpQkksQ0FBeEIsRUFBMkJiLE9BQU9mLE1BQVAsQ0FBY3dCLENBQWQsRUFBaUJLLENBQTVDLEVBQStDZixVQUFVZCxNQUFWLENBQWlCMEIsQ0FBakIsRUFBb0JFLENBQW5FLEVBQXNFZCxVQUFVZCxNQUFWLENBQWlCMEIsQ0FBakIsRUFBb0JHLENBQTFGLENBQVY7O0FBRUEsZ0JBQUlGLE1BQU1yQyxRQUFRb0IsbUJBQWQsSUFBcUNpQixNQUFNVCxJQUFJSSxVQUFuRCxFQUErRDtBQUMzREosc0JBQU07QUFDRkksZ0NBQVlLLEdBRFY7QUFFRmYsNEJBQVFFLFVBQVV2QixLQUFWLENBQWdCbUMsQ0FBaEIsQ0FGTjtBQUdGYiw0QkFBUUUsT0FBT3hCLEtBQVAsQ0FBYWlDLENBQWI7QUFITixpQkFBTjtBQUtIO0FBQ0QsZ0JBQUlHLE1BQU1yQyxRQUFRb0IsbUJBQWxCLEVBQXVDO0FBQ25DLGtCQUFFZSxhQUFGO0FBQ0g7QUFDSjtBQUNELFlBQUlBLGtCQUFrQixDQUF0QixFQUF5QjtBQUNyQkwsNEJBQWdCUixNQUFoQixDQUF1QlcsVUFBdkIsSUFBcUNMLElBQUlOLE1BQXpDO0FBQ0FRLDRCQUFnQlAsTUFBaEIsQ0FBdUJVLFVBQXZCLElBQXFDTCxJQUFJTCxNQUF6QztBQUNBTyw0QkFBZ0JFLFVBQWhCLENBQTJCQyxZQUEzQixJQUEyQ0wsSUFBSUksVUFBL0M7QUFDSDtBQUNKO0FBQ0RGLG9CQUFnQlIsTUFBaEIsQ0FBdUJPLE1BQXZCLEdBQWdDSSxVQUFoQztBQUNBSCxvQkFBZ0JQLE1BQWhCLENBQXVCTSxNQUF2QixHQUFnQ0ksVUFBaEM7O0FBRUEsUUFBSU8sYUFBYSxFQUFqQjtBQUNBLFNBQUssSUFBSU4sS0FBSSxDQUFiLEVBQWdCQSxLQUFJRCxVQUFwQixFQUFnQyxFQUFFQyxFQUFsQyxFQUFxQztBQUNqQyxZQUFJLEdBQUdPLGNBQUgsQ0FBa0JDLElBQWxCLENBQXVCRixVQUF2QixFQUFtQ1YsZ0JBQWdCUixNQUFoQixDQUF1QlksRUFBdkIsRUFBMEJJLENBQTdELENBQUosRUFBcUU7QUFDakVFLHVCQUFXVixnQkFBZ0JSLE1BQWhCLENBQXVCWSxFQUF2QixFQUEwQkksQ0FBckMsRUFBd0NLLElBQXhDLENBQTZDVCxFQUE3QztBQUNILFNBRkQsTUFFTztBQUNITSx1QkFBV1YsZ0JBQWdCUixNQUFoQixDQUF1QlksRUFBdkIsRUFBMEJJLENBQXJDLElBQTBDLENBQUNKLEVBQUQsQ0FBMUM7QUFDSDtBQUNKOztBQUVELFFBQUlVLGNBQWMsRUFBbEI7QUFDQSxRQUFJQyxjQUFjLEVBQWxCO0FBQ0EsUUFBSUMsa0JBQWtCLEVBQXRCO0FBQ0EsU0FBSyxJQUFJQyxHQUFULElBQWdCUCxVQUFoQixFQUE0QjtBQUN4QixZQUFJQSxXQUFXTyxHQUFYLEVBQWdCbEIsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUJlLHdCQUFZRCxJQUFaLENBQWlCYixnQkFBZ0JSLE1BQWhCLENBQXVCa0IsV0FBV08sR0FBWCxFQUFnQixDQUFoQixDQUF2QixDQUFqQjtBQUNBRix3QkFBWUYsSUFBWixDQUFpQmIsZ0JBQWdCUCxNQUFoQixDQUF1QmlCLFdBQVdPLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBdkIsQ0FBakI7QUFDQUQsNEJBQWdCSCxJQUFoQixDQUFxQmIsZ0JBQWdCRSxVQUFoQixDQUEyQlEsV0FBV08sR0FBWCxFQUFnQixDQUFoQixDQUEzQixDQUFyQjtBQUNIO0FBQ0o7O0FBRUQsV0FBTztBQUNIQyxvQkFBWUosV0FEVDtBQUVISyxxQkFBYUosV0FGVjtBQUdIQyx5QkFBaUJBO0FBSGQsS0FBUDtBQUtIOztBQUVESSxPQUFPQyxPQUFQLEdBQWlCOUIsaUJBQWpCIiwiZmlsZSI6InNwZWN0cmFDb21wYXJpc29uLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZ2V0UGVha3MgPSByZXF1aXJlKCcuL2dldFBlYWtzJyk7XG5jb25zdCBtYXNzSW5QZWFrcyA9IHJlcXVpcmUoJy4vbWFzc0luUGVha3MnKTtcbmNvbnN0IHZlY3RvcmlmeSA9IHJlcXVpcmUoJy4vdmVjdG9yaWZ5Jyk7XG5jb25zdCBjb3NpbmUgPSByZXF1aXJlKCcuL2Nvc2luZScpO1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmcgdGFzayBvdmVyIHRoZSBzaWduYWxzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge0Nocm9tYXRvZ3JhbX0gY2hyb21hdG9ncmFwaHkgLSBDaHJvbWF0b2dyYW0gdG8gcHJvY2Vzc1xuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSAtIE9wdGlvbnMgb2JqZWN0IChzYW1lIGFzIHNwZWN0cmFDb21wYXJpc29uKVxuICogQHJldHVybiB7e3BlYWtzOiBBcnJheTxvYmplY3Q+LCBpbnRlZ3JhdGVkTXM6IEFycmF5PG9iamVjdD4sIHZlY3RvcjogQXJyYXk8b2JqZWN0Pn19IC0gQXJyYXkgb2YgcGVha3MsIGludGVncmF0ZWQgbWFzcyBzcGVjdHJhIGFuZCB3ZWlnaHRlZCBtYXNzIHNwZWN0cmFcbiAqL1xuZnVuY3Rpb24gcHJlcHJvY2Vzc2luZyhjaHJvbWF0b2dyYXBoeSwgb3B0aW9ucykge1xuICAgIC8vIHBlYWsgcGlja2luZ1xuICAgIGxldCBwZWFrcyA9IGdldFBlYWtzKGNocm9tYXRvZ3JhcGh5LCBvcHRpb25zKTtcbiAgICBwZWFrcyA9IHBlYWtzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuICAgIC8vIGludGVncmF0ZSBtYXNzIGluIHRoZSBwZWFrc1xuICAgIGxldCBtcyA9IGNocm9tYXRvZ3JhcGh5LmZpbmRTZXJpZUJ5TmFtZSgnbXMnKS5kYXRhO1xuICAgIGxldCBpbnRlZ3JhdGVkTXMgPSBtYXNzSW5QZWFrcyhwZWFrcywgbXMsIG9wdGlvbnMpO1xuICAgIGxldCB2ZWN0b3IgPSB2ZWN0b3JpZnkoaW50ZWdyYXRlZE1zLCBvcHRpb25zKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBlYWtzLFxuICAgICAgICBpbnRlZ3JhdGVkTXMsXG4gICAgICAgIHZlY3RvclxuICAgIH07XG59XG5cbmNvbnN0IGRlZmF1bHRPcHRpb24gPSB7XG4gICAgdGhyZXNob2xkRmFjdG9yOiAwLFxuICAgIG1heE51bWJlclBlYWtzOiBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgIGdyb3VwV2lkdGg6IDAsXG4gICAgaGVpZ2h0RmlsdGVyOiAyLFxuICAgIG1hc3NQb3dlcjogMyxcbiAgICBpbnRQb3dlcjogMC42LFxuICAgIHNpbWlsYXJpdHlUaHJlc2hvbGQ6IDAuN1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtb3N0IHNpbWlsYXIgcGVha3MgYmV0d2VlbiB0d28gR0MvTVMgYW5kIHRoZWlyIHNpbWlsYXJpdGllc1xuICogQHBhcmFtIHtDaHJvbWF0b2dyYW19IGNocm9tMSAtIEZpcnN0IGNocm9tYXRvZ3JhbVxuICogQHBhcmFtIHtDaHJvbWF0b2dyYW19IGNocm9tMiAtIFNlY29uZCBjaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRocmVzaG9sZEZhY3RvciA9IDBdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSBOdW1iZXIuTUFYX1ZBTFVFXSAtIE1heGltdW0gbnVtYmVyIG9mIHBlYWtzIGZvciBlYWNoIG1hc3Mgc3BlY3RyYSAod2hlbiBpcyBOdW1iZXIuTUFYX1ZBTFVFIHRoZXJlJ3Mgbm8gZmlsdGVyKVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmdyb3VwV2lkdGggPSAwXSAtIFdoZW4gZmluZCBhIG1heCBjYW4ndCBiZSBhbm90aGVyIG1heCBpbiBhIHJhZGl1cyBvZiB0aGlzIHNpemVcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5oZWlnaHRGaWx0ZXIgPSAyXSAtIEZpbHRlciBhbGwgb2JqZWN0cyB0aGF0IGFyZSBiZWxsb3cgYGhlaWdodEZpbHRlcmAgdGltZXMgdGhlIG1lZGlhbiBvZiB0aGUgaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWFzc1Bvd2VyID0gM10gLSBQb3dlciBhcHBsaWVkIHRvIHRoZSBtYXNzIHZhbHVlc1xuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmludFBvd2VyID0gMC42XSAtIFBvd2VyIGFwcGxpZWQgdG8gdGhlIGFidW5kYW5jZSB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zaW1pbGFyaXR5VGhyZXNob2xkID0gMC43XSAtIE1pbmltdW0gc2ltaWxhcml0eSB2YWx1ZSB0byBjb25zaWRlciB0aGVtIHNpbWlsYXJcbiAqIEByZXR1cm4ge29iamVjdH0gLSBNb3N0IHNpbWlsYXIgcGVha3MgYW5kIHRoZWlyIHNpbWlsYXJpdGllczpcbiAqICogYHBlYWtzRmlyc3RgOiBBcnJheSBvZiBwZWFrcywgaW50ZWdyYXRlZCBtYXNzIHNwZWN0cmEgYW5kIHdlaWdodGVkIG1hc3Mgc3BlY3RyYSBmb3IgdGhlIGZpcnN0IGNocm9tYXRvZ3JhbVxuICogKiBgcGVha3NTZWNvbmRgOiBBcnJheSBvZiBwZWFrcywgaW50ZWdyYXRlZCBtYXNzIHNwZWN0cmEgYW5kIHdlaWdodGVkIG1hc3Mgc3BlY3RyYSBmb3IgdGhlIHNlY29uZCBjaHJvbWF0b2dyYW1cbiAqICogYHBlYWtzU2ltaWxhcml0eWA6IEFycmF5IG9mIHNpbWlsYXJpdGllcyAobnVtYmVyKVxuICovXG5mdW5jdGlvbiBzcGVjdHJhQ29tcGFyaXNvbihjaHJvbTEsIGNocm9tMiwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9uLCBvcHRpb25zKTtcblxuICAgIC8vIHBlYWsgcGlja2luZ1xuICAgIGxldCByZWZlcmVuY2UgPSBwcmVwcm9jZXNzaW5nKGNocm9tMSwgb3B0aW9ucyk7XG4gICAgbGV0IHNhbXBsZSA9IHByZXByb2Nlc3NpbmcoY2hyb20yLCBvcHRpb25zKTtcblxuICAgIC8vIHNpbWlsYXJpdHkgYmV0d2VlbiBNU1xuICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KHNhbXBsZS5wZWFrcy5sZW5ndGgsIHJlZmVyZW5jZS5wZWFrcy5sZW5ndGgpO1xuICAgIGxldCBzaW1pbGFyaXR5UGVha3MgPSB7XG4gICAgICAgIGNocm9tMTogbmV3IEFycmF5KGxlbiksXG4gICAgICAgIGNocm9tMjogbmV3IEFycmF5KGxlbiksXG4gICAgICAgIHNpbWlsYXJpdHk6IG5ldyBBcnJheShsZW4pXG4gICAgfTtcbiAgICBsZXQgc2ltaWxhckxlbiA9IDA7XG5cbiAgICAvLyBTaW1pbGFyaXR5IG1hdHJpeFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlLnBlYWtzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBtYXggPSB7c2ltaWxhcml0eTogLTN9O1xuICAgICAgICBsZXQgYmlnZ2VyQ291bnRlciA9IDA7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmVmZXJlbmNlLnBlYWtzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICBsZXQgc2ltID0gY29zaW5lKHNhbXBsZS52ZWN0b3JbaV0ueCwgc2FtcGxlLnZlY3RvcltpXS55LCByZWZlcmVuY2UudmVjdG9yW2pdLngsIHJlZmVyZW5jZS52ZWN0b3Jbal0ueSk7XG5cbiAgICAgICAgICAgIGlmIChzaW0gPiBvcHRpb25zLnNpbWlsYXJpdHlUaHJlc2hvbGQgJiYgc2ltID4gbWF4LnNpbWlsYXJpdHkpIHtcbiAgICAgICAgICAgICAgICBtYXggPSB7XG4gICAgICAgICAgICAgICAgICAgIHNpbWlsYXJpdHk6IHNpbSxcbiAgICAgICAgICAgICAgICAgICAgY2hyb20xOiByZWZlcmVuY2UucGVha3Nbal0sXG4gICAgICAgICAgICAgICAgICAgIGNocm9tMjogc2FtcGxlLnBlYWtzW2ldXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzaW0gPiBvcHRpb25zLnNpbWlsYXJpdHlUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICArK2JpZ2dlckNvdW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpZ2dlckNvdW50ZXIgPT09IDEpIHtcbiAgICAgICAgICAgIHNpbWlsYXJpdHlQZWFrcy5jaHJvbTFbc2ltaWxhckxlbl0gPSBtYXguY2hyb20xO1xuICAgICAgICAgICAgc2ltaWxhcml0eVBlYWtzLmNocm9tMltzaW1pbGFyTGVuXSA9IG1heC5jaHJvbTI7XG4gICAgICAgICAgICBzaW1pbGFyaXR5UGVha3Muc2ltaWxhcml0eVtzaW1pbGFyTGVuKytdID0gbWF4LnNpbWlsYXJpdHk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2ltaWxhcml0eVBlYWtzLmNocm9tMS5sZW5ndGggPSBzaW1pbGFyTGVuO1xuICAgIHNpbWlsYXJpdHlQZWFrcy5jaHJvbTIubGVuZ3RoID0gc2ltaWxhckxlbjtcblxuICAgIGxldCBkdXBsaWNhdGVzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW1pbGFyTGVuOyArK2kpIHtcbiAgICAgICAgaWYgKHt9Lmhhc093blByb3BlcnR5LmNhbGwoZHVwbGljYXRlcywgc2ltaWxhcml0eVBlYWtzLmNocm9tMVtpXS54KSkge1xuICAgICAgICAgICAgZHVwbGljYXRlc1tzaW1pbGFyaXR5UGVha3MuY2hyb20xW2ldLnhdLnB1c2goaSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkdXBsaWNhdGVzW3NpbWlsYXJpdHlQZWFrcy5jaHJvbTFbaV0ueF0gPSBbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGVha3NDaHJvbTEgPSBbXTtcbiAgICBsZXQgcGVha3NDaHJvbTIgPSBbXTtcbiAgICBsZXQgcGVha3NTaW1pbGFyaXR5ID0gW107XG4gICAgZm9yIChsZXQgdmFsIGluIGR1cGxpY2F0ZXMpIHtcbiAgICAgICAgaWYgKGR1cGxpY2F0ZXNbdmFsXS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBlYWtzQ2hyb20xLnB1c2goc2ltaWxhcml0eVBlYWtzLmNocm9tMVtkdXBsaWNhdGVzW3ZhbF1bMF1dKTtcbiAgICAgICAgICAgIHBlYWtzQ2hyb20yLnB1c2goc2ltaWxhcml0eVBlYWtzLmNocm9tMltkdXBsaWNhdGVzW3ZhbF1bMF1dKTtcbiAgICAgICAgICAgIHBlYWtzU2ltaWxhcml0eS5wdXNoKHNpbWlsYXJpdHlQZWFrcy5zaW1pbGFyaXR5W2R1cGxpY2F0ZXNbdmFsXVswXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGVha3NGaXJzdDogcGVha3NDaHJvbTEsXG4gICAgICAgIHBlYWtzU2Vjb25kOiBwZWFrc0Nocm9tMixcbiAgICAgICAgcGVha3NTaW1pbGFyaXR5OiBwZWFrc1NpbWlsYXJpdHksXG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzcGVjdHJhQ29tcGFyaXNvbjtcbiJdfQ==

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123);
	module.exports = __webpack_require__(17).Object.assign;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(15);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(124)});

/***/ },
/* 124 */
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Regression = __webpack_require__(126).NLR.PolynomialRegression;

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zY2FsZUFsaWdubWVudC5qcyJdLCJuYW1lcyI6WyJSZWdyZXNzaW9uIiwicmVxdWlyZSIsIk5MUiIsIlBvbHlub21pYWxSZWdyZXNzaW9uIiwic2NhbGVBbGlnbm1lbnQiLCJyZWZlcmVuY2UiLCJzYW1wbGUiLCJvcHRpb25zIiwiY29tcHV0ZVF1YWxpdHkiLCJwb2x5bm9taWFsRGVncmVlIiwicmVmZXJlbmNlVGltZSIsIm1hcCIsInZhbCIsIngiLCJzYW1wbGVUaW1lIiwicmVncmVzc2lvbiIsImVycm9yIiwiQXJyYXkiLCJsZW5ndGgiLCJpIiwicHJlZGljdCIsImFucyIsInNjYWxlUmVncmVzc2lvbiIsInIyIiwicXVhbGl0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLGFBQWFDLFFBQVEsZUFBUixFQUF5QkMsR0FBekIsQ0FBNkJDLG9CQUFoRDs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVNDLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DQyxNQUFuQyxFQUF5RDtBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLGdDQUNFQSxPQURGLENBQzlDQyxjQUQ4QztBQUFBLFFBQzlDQSxjQUQ4Qyx5Q0FDN0IsS0FENkI7QUFBQSxnQ0FDRUQsT0FERixDQUN0QkUsZ0JBRHNCO0FBQUEsUUFDdEJBLGdCQURzQix5Q0FDSCxDQURHOztBQUVyRCxRQUFJQyxnQkFBZ0JMLFVBQVVNLEdBQVYsQ0FBYyxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsSUFBSUMsQ0FBYjtBQUFBLEtBQWQsQ0FBcEI7QUFDQSxRQUFJQyxhQUFhUixPQUFPSyxHQUFQLENBQVcsVUFBQ0MsR0FBRDtBQUFBLGVBQVNBLElBQUlDLENBQWI7QUFBQSxLQUFYLENBQWpCOztBQUVBLFFBQU1FLGFBQWEsSUFBSWYsVUFBSixDQUFlYyxVQUFmLEVBQTJCSixhQUEzQixFQUEwQ0QsZ0JBQTFDLEVBQTRELEVBQUNELGdCQUFnQkEsY0FBakIsRUFBNUQsQ0FBbkI7O0FBRUEsUUFBSVEsUUFBUSxJQUFJQyxLQUFKLENBQVVYLE9BQU9ZLE1BQWpCLENBQVo7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSWIsT0FBT1ksTUFBM0IsRUFBbUNDLEdBQW5DLEVBQXdDO0FBQ3BDSCxjQUFNRyxDQUFOLElBQVdkLFVBQVVjLENBQVYsRUFBYU4sQ0FBYixHQUFpQkUsV0FBV0ssT0FBWCxDQUFtQmQsT0FBT2EsQ0FBUCxFQUFVTixDQUE3QixDQUE1QjtBQUNIOztBQUVELFFBQUlRLE1BQU07QUFDTkMseUJBQWlCUDtBQURYLEtBQVY7O0FBSUEsUUFBSVAsY0FBSixFQUFvQjtBQUNoQmEsWUFBSUUsRUFBSixHQUFTUixXQUFXUyxPQUFYLENBQW1CRCxFQUE1QjtBQUNBRixZQUFJTCxLQUFKLEdBQVlBLEtBQVo7QUFDSDtBQUNELFdBQU9LLEdBQVA7QUFDSDs7QUFFREksT0FBT0MsT0FBUCxHQUFpQnRCLGNBQWpCIiwiZmlsZSI6InNjYWxlQWxpZ25tZW50LmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVncmVzc2lvbiA9IHJlcXVpcmUoJ21sLXJlZ3Jlc3Npb24nKS5OTFIuUG9seW5vbWlhbFJlZ3Jlc3Npb247XG5cbi8qKlxuICogQWxpZ25zIHRoZSB0aW1lIG9mIHRoZSBzYW1wbGUgYmFzZWQgb24gdGhlIHJlZ3Jlc3Npb24gd2l0aCBoaXMgcmVmZXJlbmNlIHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IHJlZmVyZW5jZSAtIEFycmF5IG9mIHBlYWtzLCBpbnRlZ3JhdGVkIG1hc3Mgc3BlY3RyYSBhbmQgd2VpZ2h0ZWQgbWFzcyBzcGVjdHJhIGZvciB0aGUgcmVmZXJlbmNlIGNocm9tYXRvZ3JhbVxuICogQHBhcmFtIHtBcnJheTxvYmplY3Q+fSBzYW1wbGUgLSBBcnJheSBvZiBwZWFrcywgaW50ZWdyYXRlZCBtYXNzIHNwZWN0cmEgYW5kIHdlaWdodGVkIG1hc3Mgc3BlY3RyYSBmb3IgdGhlIHNhbXBsZSBjaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5jb21wdXRlUXVhbGl0eSA9IGZhbHNlXSAtIENhbGN1bGF0ZSB0aGUgcXVhbGl0eSBvZiB0aGUgcmVncmVzc2lvblxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnBvbHlub21pYWxEZWdyZWUgPSAzXSAtIERlZ3JlZSBvZiB0aGUgcG9seW5vbWlhbCByZWdyZXNzaW9uXG4gKiBAcmV0dXJuIHtvYmplY3R9IC0gVGhlIHNjYWxlZCBzcGVjdHJhOlxuICogKiBgc2NhbGVSZWdyZXNzaW9uYDogVGhlIHJlZ3Jlc3Npb24gZnVuY3Rpb24gdG8gbWFrZSB0aGUgcmVncmVzc2lvblxuICogKiBgc3RyaW5nRm9ybXVsYWA6IFJlZ3Jlc3Npb24gZXF1YXRpb25cbiAqICogYHIyYDogUjIgcXVhbGl0eSBudW1iZXJcbiAqICogYGVycm9yYDogVmVjdG9yIG9mIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHNwZWN0ZWQgdmFsdWUgYW5kIHRoZSBhY3R1YWwgc2hpZnQgdmFsdWVcbiAqL1xuZnVuY3Rpb24gc2NhbGVBbGlnbm1lbnQocmVmZXJlbmNlLCBzYW1wbGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtjb21wdXRlUXVhbGl0eSA9IGZhbHNlLCBwb2x5bm9taWFsRGVncmVlID0gM30gPSBvcHRpb25zO1xuICAgIGxldCByZWZlcmVuY2VUaW1lID0gcmVmZXJlbmNlLm1hcCgodmFsKSA9PiB2YWwueCk7XG4gICAgbGV0IHNhbXBsZVRpbWUgPSBzYW1wbGUubWFwKCh2YWwpID0+IHZhbC54KTtcblxuICAgIGNvbnN0IHJlZ3Jlc3Npb24gPSBuZXcgUmVncmVzc2lvbihzYW1wbGVUaW1lLCByZWZlcmVuY2VUaW1lLCBwb2x5bm9taWFsRGVncmVlLCB7Y29tcHV0ZVF1YWxpdHk6IGNvbXB1dGVRdWFsaXR5fSk7XG5cbiAgICBsZXQgZXJyb3IgPSBuZXcgQXJyYXkoc2FtcGxlLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYW1wbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZXJyb3JbaV0gPSByZWZlcmVuY2VbaV0ueCAtIHJlZ3Jlc3Npb24ucHJlZGljdChzYW1wbGVbaV0ueCk7XG4gICAgfVxuXG4gICAgbGV0IGFucyA9IHtcbiAgICAgICAgc2NhbGVSZWdyZXNzaW9uOiByZWdyZXNzaW9uXG4gICAgfTtcblxuICAgIGlmIChjb21wdXRlUXVhbGl0eSkge1xuICAgICAgICBhbnMucjIgPSByZWdyZXNzaW9uLnF1YWxpdHkucjI7XG4gICAgICAgIGFucy5lcnJvciA9IGVycm9yO1xuICAgIH1cbiAgICByZXR1cm4gYW5zO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNjYWxlQWxpZ25tZW50O1xuIl19

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.SimpleLinearRegression = exports.SLR = __webpack_require__(127);
	exports.NonLinearRegression = exports.NLR = {
	    PolynomialRegression: __webpack_require__(130),
	    PotentialRegression: __webpack_require__(158),
	    ExpRegression: __webpack_require__(159),
	    PowerRegression: __webpack_require__(160)
	};
	exports.KernelRidgeRegression = exports.KRR = __webpack_require__(161);
	//exports.MultipleLinearRegression = exports.MLR = require('./regression/multiple-linear-regression');
	//exports.MultivariateLinearRegression = exports.MVLR = require('./regression/multivariate-linear-regression');
	exports.PolinomialFitting2D = __webpack_require__(174);
	exports.TheilSenRegression = __webpack_require__(175);


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var maybeToPrecision = __webpack_require__(128).maybeToPrecision;
	const BaseRegression = __webpack_require__(129);


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


/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 129 */
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


/***/ },
/* 130 */
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

	const maybeToPrecision = __webpack_require__(128).maybeToPrecision;
	const BaseRegression = __webpack_require__(129);
	const Matrix = __webpack_require__(131);


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


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(132);
	module.exports.Decompositions = module.exports.DC = __webpack_require__(151);


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(133);
	var abstractMatrix = __webpack_require__(134);
	var util = __webpack_require__(142);

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
/* 133 */
/***/ function(module, exports) {

	'use strict';

	if (!Symbol.species) {
	    Symbol.species = Symbol.for('@@species');
	}


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = abstractMatrix;

	var arrayUtils = __webpack_require__(135);
	var util = __webpack_require__(142);
	var MatrixTransposeView = __webpack_require__(143);
	var MatrixRowView = __webpack_require__(145);
	var MatrixSubView = __webpack_require__(146);
	var MatrixSelectionView = __webpack_require__(147);
	var MatrixColumnView = __webpack_require__(148);
	var MatrixFlipRowView = __webpack_require__(149);
	var MatrixFlipColumnView = __webpack_require__(150);

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
	         * @param {function} [rng=Math.random] - Random number generator
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
	         * Creates a matrix with the given dimensions. Values will be random integers.
	         * @param {number} rows - Number of rows
	         * @param {number} columns - Number of columns
	         * @param {number} [maxValue=1000] - Maximum value
	         * @param {function} [rng=Math.random] - Random number generator
	         * @returns {Matrix} The new matrix
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
	         * @param {number} [columns] - Number of columns (Default: rows)
	         * @returns {Matrix} - The new identity matrix
	         */
	        static eye(rows, columns, value) {
	            if (value === undefined) value = 1
	            if (columns === undefined) columns = rows;
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

	        strassen_2x2(other){
	            var result = new this.constructor[Symbol.species](2, 2);
	            const a11 = this.get(0,0);
	            const b11 = other.get(0,0);
	            const a12 = this.get(0,1);
	            const b12 = other.get(0,1);
	            const a21 = this.get(1,0);
	            const b21 = other.get(1,0);
	            const a22 = this.get(1,1);
	            const b22 = other.get(1,1);

	            // Compute intermediate values.
	            const m1 = (a11+a22)*(b11+b22);
	            const m2 = (a21+a22)*b11;
	            const m3 = a11*(b12-b22);
	            const m4 = a22*(b21-b11);
	            const m5 = (a11+a12)*b22;
	            const m6 = (a21-a11)*(b11+b12);
	            const m7 = (a12-a22)*(b21+b22);

	            // Combine intermediate values into the output.
	            const c00 =m1+m4-m5+m7;
	            const c01 = m3+m5;
	            const c10 = m2+m4;
	            const c11 = m1-m2+m3+m6;

	            result.set(0,0,c00);
	            result.set(0,1,c01);
	            result.set(1,0,c10);
	            result.set(1,1,c11);
	            return result;
	        }

	        strassen_3x3(other){
	            var result = new this.constructor[Symbol.species](3, 3);

	            const a00 = this.get(0,0);
	            const a01 = this.get(0,1);
	            const a02 = this.get(0,2);
	            const a10 = this.get(1,0);
	            const a11 = this.get(1,1);
	            const a12 = this.get(1,2);
	            const a20 = this.get(2,0);
	            const a21 = this.get(2,1);
	            const a22 = this.get(2,2);

	            const b00 = other.get(0,0);
	            const b01 = other.get(0,1);
	            const b02 = other.get(0,2);
	            const b10 = other.get(1,0);
	            const b11 = other.get(1,1);
	            const b12 = other.get(1,2);
	            const b20 = other.get(2,0);
	            const b21 = other.get(2,1);
	            const b22 = other.get(2,2);

	            const m1 = (a00+a01+a02-a10-a11-a21-a22)*b11;
	            const m2 = (a00-a10)*(-b01+b11);
	            const m3 = a11*(-b00+b01+b10-b11-b12-b20+b22);
	            const m4 = (-a00+a10+a11)*(b00-b01+b11);
	            const m5 = (a10+a11)*(-b00+b01);
	            const m6 = a00*b00;
	            const m7 = (-a00+a20+a21)*(b00-b02+b12);
	            const m8 = (-a00+a20)*(b02-b12);
	            const m9 = (a20+a21)*(-b00+b02);
	            const m10 = (a00+a01+a02-a11-a12-a20-a21)*b12;
	            const m11 = a21*(-b00+b02+b10-b11-b12-b20+b21);
	            const m12 = (-a02+a21+a22)*(b11+b20-b21);
	            const m13 = (a02-a22)*(b11-b21);
	            const m14 = a02*b20;
	            const m15 = (a21+a22)*(-b20+b21);
	            const m16 = (-a02+a11+a12)*(b12+b20-b22);
	            const m17 = (a02-a12)*(b12-b22);
	            const m18 = (a11+a12)*(-b20+b22);
	            const m19= a01*b10;
	            const m20 = a12*b21;
	            const m21 = a10*b02;
	            const m22 = a20*b01;
	            const m23 = a22*b22;

	            const c00 = m6+m14+m19;
	            const c01 = m1+m4+m5+m6+m12+m14+m15;
	            const c02 = m6+m7+m9+m10+m14+m16+m18;
	            const c10 = m2+m3+m4+m6+m14+m16+m17;
	            const c11 = m2+m4+m5+m6+m20;
	            const c12 = m14+m16+m17+m18+m21;
	            const c20 = m6+m7+m8+m11+m12+m13+m14;
	            const c21 = m12+m13+m14+m15+m22;
	            const c22 = m6+m7+m8+m9+m23;

	            result.set(0,0,c00);
	            result.set(0,1,c01);
	            result.set(0,2,c02);
	            result.set(1,0,c10);
	            result.set(1,1,c11);
	            result.set(1,2,c12);
	            result.set(2,0,c20);
	            result.set(2,1,c21);
	            result.set(2,2,c22);
	            return result;
	        }


	        /**
	         * Returns the matrix product between x and y. More efficient than mmul(other) only when we multiply squared matrix and when the size of the matrix is > 1000.
	         * @param {Matrix} x
	         * @param {Matrix} y
	         * @returns {Matrix}
	         */
	        mmul_strassen(y){
	            var x = this.clone();
	            var r1 = x.rows;
	            var c1 = x.columns;
	            var r2 = y.rows;
	            var c2 = y.columns;
	            if(c1 != r2){
	                console.log(`Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`)
	            }

	            // Put a matrix into the top left of a matrix of zeros.
	            // `rows` and `cols` are the dimensions of the output matrix.
	            function embed(mat, rows, cols){
	                var r = mat.rows;
	                var c = mat.columns;
	                if((r==rows) && (c==cols)){
	                    return mat;
	                }
	                else{
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
	            var x = embed(x, r, c);
	            var y = embed(y, r, c);

	            // Our recursive multiplication function.
	            function block_mult(a, b, rows, cols){
	                // For small matrices, resort to naive multiplication.
	                if (rows <= 512 || cols <= 512){
	                    return a.mmul(b); // a is equivalent to this
	                }

	                // Apply dynamic padding.
	                if ((rows % 2 == 1) && (cols % 2 == 1)) {
	                    a = embed(a, rows + 1, cols + 1);
	                    b = embed(b, rows + 1, cols + 1);
	                }
	                else if (rows % 2 == 1){
	                    a = embed(a, rows + 1, cols);
	                    b = embed(b, rows + 1, cols);
	                }
	                else if (cols % 2 == 1){
	                    a = embed(a, rows, cols + 1);
	                    b = embed(b, rows, cols + 1);
	                }

	                var half_rows = parseInt(a.rows / 2);
	                var half_cols = parseInt(a.columns / 2);
	                // Subdivide input matrices.
	                var a11 = a.subMatrix(0, half_rows -1, 0, half_cols - 1);
	                var b11 = b.subMatrix(0, half_rows -1, 0, half_cols - 1);

	                var a12 = a.subMatrix(0, half_rows -1, half_cols, a.columns - 1);
	                var b12 = b.subMatrix(0, half_rows -1,  half_cols, b.columns - 1);

	                var a21 = a.subMatrix(half_rows, a.rows - 1,  0, half_cols - 1);
	                var b21 = b.subMatrix(half_rows, b.rows - 1,  0, half_cols - 1);

	                var a22 = a.subMatrix(half_rows, a.rows - 1, half_cols, a.columns - 1);
	                var b22 = b.subMatrix(half_rows, b.rows - 1, half_cols, b.columns - 1);

	                // Compute intermediate values.
	                var m1 = block_mult(Matrix.add(a11,a22), Matrix.add(b11,b22), half_rows, half_cols);
	                var m2 = block_mult(Matrix.add(a21,a22), b11, half_rows, half_cols);
	                var m3 = block_mult(a11, Matrix.sub(b12, b22), half_rows, half_cols);
	                var m4 = block_mult(a22, Matrix.sub(b21,b11), half_rows, half_cols);
	                var m5 = block_mult(Matrix.add(a11,a12), b22, half_rows, half_cols);
	                var m6 = block_mult(Matrix.sub(a21, a11), Matrix.add(b11, b12), half_rows, half_cols);
	                var m7 = block_mult(Matrix.sub(a12,a22), Matrix.add(b21,b22), half_rows, half_cols);

	                // Combine intermediate values into the output.
	                var c11 = Matrix.add(m1, m4);
	                c11.sub(m5);
	                c11.add(m7);
	                var c12 = Matrix.add(m3,m5);
	                var c21 = Matrix.add(m2,m4);
	                var c22 = Matrix.sub(m1,m2);
	                c22.add(m3);
	                c22.add(m6);

	                //Crop output to the desired size (undo dynamic padding).
	                var resultat = Matrix.zeros(2*c11.rows, 2*c11.columns);
	                resultat = resultat.setSubMatrix(c11, 0, 0);
	                resultat = resultat.setSubMatrix(c12, c11.rows, 0)
	                resultat = resultat.setSubMatrix(c21, 0, c11.columns);
	                resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
	                return resultat.subMatrix(0, rows - 1, 0, cols - 1);
	            }
	            var resultat_final =  block_mult(x, y, r, c);
	            return resultat_final;
	        };

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
	         * @returns {Matrix} The new matrix
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

	        /**
	         * Returns a view of the transposition of the matrix
	         * @returns {MatrixTransposeView}
	         */
	        transposeView() {
	            return new MatrixTransposeView(this);
	        }

	        /**
	         * Returns a view of the row vector with the given index
	         * @param {number} row - row index of the vector
	         * @returns {MatrixRowView}
	         */
	        rowView(row) {
	            util.checkRowIndex(this, row);
	            return new MatrixRowView(this, row);
	        }

	        /**
	         * Returns a view of the column vector with the given index
	         * @param {number} column - column index of the vector
	         * @returns {MatrixColumnView}
	         */
	        columnView(column) {
	            util.checkColumnIndex(this, column);
	            return new MatrixColumnView(this, column);
	        }

	        /**
	         * Returns a view of the matrix flipped in the row axis
	         * @returns {MatrixFlipRowView}
	         */
	        flipRowView() {
	            return new MatrixFlipRowView(this);
	        }

	        /**
	         * Returns a view of the matrix flipped in the column axis
	         * @returns {MatrixFlipColumnView}
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
	         * @returns {MatrixSubView}
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
	         * @returns {MatrixSelectionView}
	         */
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = exports = __webpack_require__(136);


	exports.getEquallySpacedData = __webpack_require__(140).getEquallySpacedData;
	exports.SNV = __webpack_require__(141).SNV;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Stat = __webpack_require__(137).array;
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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.array = __webpack_require__(138);
	exports.matrix = __webpack_require__(139);


/***/ },
/* 138 */
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


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayStat = __webpack_require__(138);

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


/***/ },
/* 140 */
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.SNV = SNV;
	var Stat = __webpack_require__(137).array;

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
/* 142 */
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
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(144);

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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var abstractMatrix = __webpack_require__(134);
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
	            Matrix = __webpack_require__(132);
	        }
	        return Matrix;
	    }
	}

	module.exports = BaseView;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(144);

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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(144);
	var util = __webpack_require__(142);

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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(144);
	var util = __webpack_require__(142);

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
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(144);

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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(144);

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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var BaseView = __webpack_require__(144);

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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(132);

	var SingularValueDecomposition = __webpack_require__(152);
	var EigenvalueDecomposition = __webpack_require__(154);
	var LuDecomposition = __webpack_require__(155);
	var QrDecomposition = __webpack_require__(156);
	var CholeskyDecomposition = __webpack_require__(157);

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


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(132);
	var util = __webpack_require__(153);
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
/* 153 */
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
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(132);
	const util = __webpack_require__(153);
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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(132);

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
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(132);
	var hypotenuse = __webpack_require__(153).hypotenuse;

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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Matrix = __webpack_require__(132);

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
/* 158 */
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

	const maybeToPrecision = __webpack_require__(128).maybeToPrecision;
	const PolynomialRegression = __webpack_require__(130);
	// const PowerRegression = require('./power-regression');
	const BaseRegression = __webpack_require__(129);

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


/***/ },
/* 159 */
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

	const maybeToPrecision = __webpack_require__(128).maybeToPrecision;
	const SimpleLinearRegression = __webpack_require__(127);
	const BaseRegression = __webpack_require__(129);

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


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * This class implements the power regression f(x)=A*x^B
	 * Created by acastillo on 5/12/16.
	 */

	const maybeToPrecision = __webpack_require__(128).maybeToPrecision;
	const SimpleLinearRegression = __webpack_require__(127);
	const BaseRegression = __webpack_require__(129);

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


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(131);
	const Kernel = __webpack_require__(162);

	const BaseRegression = __webpack_require__(129);

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
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(131);

	const GaussianKernel = __webpack_require__(163);
	const PolynomialKernel = __webpack_require__(165);
	const ANOVAKernel = __webpack_require__(166);
	const CauchyKernel = __webpack_require__(167);
	const ExponentialKernel = __webpack_require__(168);
	const HistogramKernel = __webpack_require__(169);
	const LaplacianKernel = __webpack_require__(170);
	const MultiquadraticKernel = __webpack_require__(171);
	const RationalKernel = __webpack_require__(172);
	const SigmoidKernel = __webpack_require__(173);

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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(164).squared;

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
/* 164 */
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
/* 165 */
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
/* 166 */
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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(164).squared;

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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const euclidean = __webpack_require__(164);

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
/* 169 */
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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const euclidean = __webpack_require__(164);

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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(164).squared;

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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const squaredEuclidean = __webpack_require__(164).squared;

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
/* 173 */
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
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const Matrix = __webpack_require__(131);
	const SVD = Matrix.DC.SingularValueDecomposition;
	const BaseRegression = __webpack_require__(129);

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


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const BaseRegression = __webpack_require__(129);
	const maybeToPrecision = __webpack_require__(128).maybeToPrecision;
	const median = __webpack_require__(138).median;

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


/***/ },
/* 176 */
/***/ function(module, exports) {

	'use strict';

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9rb3ZhdHMuanMiXSwibmFtZXMiOlsia292YXRzIiwibXMiLCJtYXNzIiwieCIsIm1hc3NNb2wiLCJ0YXJnZXRzIiwiaSIsImxlbmd0aCIsInB1c2giLCJrb3ZhdHNJbmRleCIsIm0iLCJjYW5kaWRhdGUiLCJ0IiwiaW5kZXhPZiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7OztBQU9BLFNBQVNBLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CO0FBQ2hCLFFBQUlDLE9BQU9ELEdBQUdFLENBQWQ7QUFDQSxRQUFJQyxVQUFVLEVBQWQ7QUFDQSxRQUFNQyxVQUFVLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixDQUFoQjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUosS0FBS0ssTUFBekIsRUFBaUNELEdBQWpDLEVBQXNDO0FBQ2xDLFlBQUksQ0FBQ0osS0FBS0ksQ0FBTCxJQUFVLENBQVgsSUFBZ0IsRUFBaEIsS0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUJGLG9CQUFRSSxJQUFSLENBQWFOLEtBQUtJLENBQUwsQ0FBYjtBQUNIO0FBQ0o7QUFDRCxRQUFJRixRQUFRRyxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLGVBQU8sQ0FBUDtBQUNIOztBQUVELFFBQUlFLGNBQWMsQ0FBbEI7QUFDQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sUUFBUUcsTUFBNUIsRUFBb0NHLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQUlDLFlBQVksSUFBaEI7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVAsUUFBUUUsTUFBNUIsRUFBb0NLLEdBQXBDLEVBQXlDO0FBQ3JDRCx3QkFBWUEsYUFDSlQsS0FBS1csT0FBTCxDQUFhUixRQUFRTyxDQUFSLENBQWIsTUFBNkIsQ0FBQyxDQUQxQixLQUVIVixLQUFLVyxPQUFMLENBQWFULFFBQVFNLENBQVIsSUFBYUwsUUFBUU8sQ0FBUixDQUExQixNQUEwQyxDQUFDLENBQTVDLElBQ0FWLEtBQUtXLE9BQUwsQ0FBYVQsUUFBUU0sQ0FBUixJQUFhTCxRQUFRTyxDQUFSLENBQWIsR0FBMEIsQ0FBdkMsTUFBOEMsQ0FBQyxDQUQvQyxJQUVBVixLQUFLVyxPQUFMLENBQWFULFFBQVFNLENBQVIsSUFBYUwsUUFBUU8sQ0FBUixDQUFiLEdBQTBCLENBQXZDLE1BQThDLENBQUMsQ0FKM0MsQ0FBWjtBQUtIO0FBQ0QsWUFBSUQsU0FBSixFQUFlO0FBQ1hGLDBCQUFjLE9BQU9MLFFBQVFNLENBQVIsSUFBYSxDQUFwQixJQUF5QixFQUF2QztBQUNIO0FBQ0o7QUFDRCxXQUFPRCxXQUFQO0FBQ0g7O0FBRURLLE9BQU9DLE9BQVAsR0FBaUJmLE1BQWpCIiwiZmlsZSI6ImtvdmF0cy5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgS292YXRzIHJldGVudGlvbiBpbmRleCBmb3IgYSBtYXNzIHNwZWN0cmEgb2YgYSBuLWFsa2FuZVxuICogQHBhcmFtIHtvYmplY3R9IG1zIC0gQW4gbWFzcyBzcGVjdHJhIG9iamVjdFxuICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBtcy54IC0gQXJyYXkgb2YgbWFzc2VzXG4gKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IG1zLnkgLSBBcnJheSBvZiBpbnRlbnNpdGllc1xuICogQHJldHVybiB7bnVtYmVyfSAtIEtvdmF0cyByZXRlbnRpb24gaW5kZXhcbiAqL1xuZnVuY3Rpb24ga292YXRzKG1zKSB7XG4gICAgbGV0IG1hc3MgPSBtcy54O1xuICAgIGxldCBtYXNzTW9sID0gW107XG4gICAgY29uc3QgdGFyZ2V0cyA9IFs0MywgNTcsIDcxLCA4NV07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKChtYXNzW2ldIC0gMikgJSAxNCA9PT0gMCkge1xuICAgICAgICAgICAgbWFzc01vbC5wdXNoKG1hc3NbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChtYXNzTW9sLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBsZXQga292YXRzSW5kZXggPSAwO1xuICAgIGZvciAodmFyIG0gPSAwOyBtIDwgbWFzc01vbC5sZW5ndGg7IG0rKykge1xuICAgICAgICBsZXQgY2FuZGlkYXRlID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0YXJnZXRzLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVcbiAgICAgICAgICAgICAgICAmJiAobWFzcy5pbmRleE9mKHRhcmdldHNbdF0pICE9PSAtMSlcbiAgICAgICAgICAgICAgICAmJiAoKG1hc3MuaW5kZXhPZihtYXNzTW9sW21dIC0gdGFyZ2V0c1t0XSkgIT09IC0xKVxuICAgICAgICAgICAgICAgIHx8IChtYXNzLmluZGV4T2YobWFzc01vbFttXSAtIHRhcmdldHNbdF0gKyAxKSAhPT0gLTEpXG4gICAgICAgICAgICAgICAgfHwgKG1hc3MuaW5kZXhPZihtYXNzTW9sW21dIC0gdGFyZ2V0c1t0XSAtIDEpICE9PSAtMSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5kaWRhdGUpIHtcbiAgICAgICAgICAgIGtvdmF0c0luZGV4ID0gMTAwICogKG1hc3NNb2xbbV0gLSAyKSAvIDE0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBrb3ZhdHNJbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrb3ZhdHM7XG4iXX0=

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var kovats = __webpack_require__(176);
	var getPeaks = __webpack_require__(81);
	var massInPeaks = __webpack_require__(112);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nZXRLb3ZhdHNUYWJsZS5qcyJdLCJuYW1lcyI6WyJrb3ZhdHMiLCJyZXF1aXJlIiwiZ2V0UGVha3MiLCJtYXNzSW5QZWFrcyIsImdldEtvdmF0c1RhYmxlIiwicmVmZXJlbmNlIiwib3B0aW9ucyIsImhlaWdodEZpbHRlciIsInRocmVzaG9sZEZhY3RvciIsIm1heE51bWJlclBlYWtzIiwiZ3JvdXBXaWR0aCIsInBlYWtzIiwic29ydCIsImEiLCJiIiwiaW5kZXgiLCJtcyIsImZpbmRTZXJpZUJ5TmFtZSIsImRhdGEiLCJpbnRlZ3JhdGVkTXMiLCJrb3ZhdHNJbmRleGVzIiwiQXJyYXkiLCJsZW5ndGgiLCJpIiwidGltZSIsIngiLCJ2YWx1ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBTUMsV0FBV0QsUUFBUSxZQUFSLENBQWpCO0FBQ0EsSUFBTUUsY0FBY0YsUUFBUSxlQUFSLENBQXBCOztBQUVBOzs7Ozs7Ozs7O0FBVUEsU0FBU0csY0FBVCxDQUF3QkMsU0FBeEIsRUFBaUQ7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFBQSxnQ0FDOENBLE9BRDlDLENBQ3RDQyxZQURzQztBQUFBLFFBQ3RDQSxZQURzQyx5Q0FDdkIsR0FEdUI7QUFBQSxnQ0FDOENELE9BRDlDLENBQ2xCRSxlQURrQjtBQUFBLFFBQ2xCQSxlQURrQix5Q0FDQSxLQURBO0FBQUEsZ0NBQzhDRixPQUQ5QyxDQUNPRyxjQURQO0FBQUEsUUFDT0EsY0FEUCx5Q0FDd0IsRUFEeEI7QUFBQSw4QkFDOENILE9BRDlDLENBQzRCSSxVQUQ1QjtBQUFBLFFBQzRCQSxVQUQ1Qix1Q0FDeUMsQ0FEekM7O0FBRzdDOztBQUNBLFFBQUlDLFFBQVFULFNBQVNHLFNBQVQsRUFBb0IsRUFBQ0UsMEJBQUQsRUFBcEIsQ0FBWjtBQUNBSSxZQUFRQSxNQUFNQyxJQUFOLENBQVcsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsZUFBVUQsRUFBRUUsS0FBRixHQUFVRCxFQUFFQyxLQUF0QjtBQUFBLEtBQVgsQ0FBUjs7QUFFQTtBQUNBLFFBQUlDLEtBQUtYLFVBQVVZLGVBQVYsQ0FBMEIsSUFBMUIsRUFBZ0NDLElBQXpDO0FBQ0EsUUFBSUMsZUFBZWhCLFlBQVlRLEtBQVosRUFBbUJLLEVBQW5CLEVBQXVCLEVBQUNSLGdDQUFELEVBQWtCQyw4QkFBbEIsRUFBa0NDLHNCQUFsQyxFQUF2QixDQUFuQjs7QUFFQSxRQUFJVSxnQkFBZ0IsSUFBSUMsS0FBSixDQUFVRixhQUFhRyxNQUF2QixDQUFwQjtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSixhQUFhRyxNQUFqQyxFQUF5Q0MsR0FBekMsRUFBOEM7QUFDMUNILHNCQUFjRyxDQUFkLElBQW1CO0FBQ2ZDLGtCQUFNTCxhQUFhSSxDQUFiLEVBQWdCRSxDQURQO0FBRWZDLG1CQUFPMUIsT0FBT21CLGFBQWFJLENBQWIsRUFBZ0JQLEVBQXZCO0FBRlEsU0FBbkI7QUFJSDs7QUFFRCxXQUFPSSxhQUFQO0FBQ0g7O0FBRURPLE9BQU9DLE9BQVAsR0FBaUJ4QixjQUFqQiIsImZpbGUiOiJnZXRLb3ZhdHNUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGtvdmF0cyA9IHJlcXVpcmUoJy4va292YXRzJyk7XG5jb25zdCBnZXRQZWFrcyA9IHJlcXVpcmUoJy4vZ2V0UGVha3MnKTtcbmNvbnN0IG1hc3NJblBlYWtzID0gcmVxdWlyZSgnLi9tYXNzSW5QZWFrcycpO1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHRhYmxlIG9mIEtvdmF0cyBpbmRleGVzIGZvciB0aGUgcmVmZXJlbmNlIHNwZWN0cmFcbiAqIEBwYXJhbSB7Q2hyb21hdG9ncmFtfSByZWZlcmVuY2UgLSBSZWZlcmVuY2Ugc3BlY3RyYVxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zID0ge31dIC0gT3B0aW9ucyBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5oZWlnaHRGaWx0ZXIgPSAxMDBdIC0gRmlsdGVyIGFsbCBvYmplY3RzIHRoYXQgYXJlIGJlbGxvdyBoZWlnaHRGaWx0ZXIgdGltZXMgdGhlIG1lZGlhbiBvZiB0aGUgaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudGhyZXNob2xkRmFjdG9yID0gMC4wMDVdIC0gRXZlcnkgcGVhayB0aGF0IGl0J3MgYmVsbG93IHRoZSBtYWluIHBlYWsgdGltZXMgdGhpcyBmYWN0b3IgZmlsbCBiZSByZW1vdmVkICh3aGVuIGlzIDAgdGhlcmUncyBubyBmaWx0ZXIpXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4TnVtYmVyUGVha3MgPSA0MF0gLSBNYXhpbXVtIG51bWJlciBvZiBwZWFrcyBmb3IgZWFjaCBtYXNzIHNwZWN0cmEgKHdoZW4gaXMgTnVtYmVyLk1BWF9WQUxVRSB0aGVyZSdzIG5vIGZpbHRlcilcbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5ncm91cFdpZHRoID0gNV0gLSBXaGVuIGZpbmQgYSBtYXggY2FuJ3QgYmUgYW5vdGhlciBtYXggaW4gYSByYWRpdXMgb2YgdGhpcyBzaXplXG4gKiBAcmV0dXJuIHtBcnJheTxvYmplY3Q+fSAtIFRpbWUgYW5kIHZhbHVlIGZvciB0aGUgS292YXRzIGluZGV4XG4gKi9cbmZ1bmN0aW9uIGdldEtvdmF0c1RhYmxlKHJlZmVyZW5jZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge2hlaWdodEZpbHRlciA9IDEwMCwgdGhyZXNob2xkRmFjdG9yID0gMC4wMDUsIG1heE51bWJlclBlYWtzID0gNDAsIGdyb3VwV2lkdGggPSA1fSA9IG9wdGlvbnM7XG5cbiAgICAvLyBQZWFrIHBpY2tpbmdcbiAgICBsZXQgcGVha3MgPSBnZXRQZWFrcyhyZWZlcmVuY2UsIHtoZWlnaHRGaWx0ZXJ9KTtcbiAgICBwZWFrcyA9IHBlYWtzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KTtcblxuICAgIC8vIGludGVncmF0ZSBtYXNzIGluIHRoZSBwZWFrc1xuICAgIGxldCBtcyA9IHJlZmVyZW5jZS5maW5kU2VyaWVCeU5hbWUoJ21zJykuZGF0YTtcbiAgICBsZXQgaW50ZWdyYXRlZE1zID0gbWFzc0luUGVha3MocGVha3MsIG1zLCB7dGhyZXNob2xkRmFjdG9yLCBtYXhOdW1iZXJQZWFrcywgZ3JvdXBXaWR0aH0pO1xuXG4gICAgdmFyIGtvdmF0c0luZGV4ZXMgPSBuZXcgQXJyYXkoaW50ZWdyYXRlZE1zLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnRlZ3JhdGVkTXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAga292YXRzSW5kZXhlc1tpXSA9IHtcbiAgICAgICAgICAgIHRpbWU6IGludGVncmF0ZWRNc1tpXS54LFxuICAgICAgICAgICAgdmFsdWU6IGtvdmF0cyhpbnRlZ3JhdGVkTXNbaV0ubXMpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGtvdmF0c0luZGV4ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0S292YXRzVGFibGU7XG4iXX0=

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = __webpack_require__(55);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var binarySearch = __webpack_require__(179);
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
	        var _ret = function () {
	            var values = kovatsConversionTable.sort(ascValue);

	            return {
	                v: function v(index) {
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
	                }
	            };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	    } else {
	        var _ret2 = function () {
	            var times = kovatsConversionTable.sort(ascTime);

	            return {
	                v: function v(time) {
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
	                }
	            };
	        }();

	        if ((typeof _ret2 === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret2)) === "object") return _ret2.v;
	    }
	}

	module.exports = kovatsConversionFunction;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9rb3ZhdHNDb252ZXJzaW9uRnVuY3Rpb24uanMiXSwibmFtZXMiOlsiYmluYXJ5U2VhcmNoIiwicmVxdWlyZSIsImFzY1ZhbHVlIiwiYSIsImIiLCJ2YWx1ZSIsImFzY1RpbWUiLCJ0aW1lIiwia292YXRzQ29udmVyc2lvbkZ1bmN0aW9uIiwia292YXRzQ29udmVyc2lvblRhYmxlIiwib3B0aW9ucyIsInJldmVydCIsInZhbHVlcyIsInNvcnQiLCJpbmRleCIsInBvc2l0aW9uIiwibGVuZ3RoIiwic21hbGxlckFsY2FuZSIsImxhcmdlckFsY2FuZSIsInRpbWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZUMsUUFBUSxlQUFSLENBQXJCO0FBQ0EsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVdELEVBQUVFLEtBQUYsR0FBVUQsRUFBRUMsS0FBdkI7QUFBQSxDQUFqQjtBQUNBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDSCxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFXRCxFQUFFSSxJQUFGLEdBQVNILEVBQUVHLElBQXRCO0FBQUEsQ0FBaEI7O0FBRUE7Ozs7Ozs7QUFPQSxTQUFTQyx3QkFBVCxDQUFrQ0MscUJBQWxDLEVBQXVFO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQUEsMEJBQzFDQSxPQUQwQyxDQUM1REMsTUFENEQ7QUFBQSxRQUM1REEsTUFENEQsbUNBQ25ELEtBRG1EOzs7QUFHbkUsUUFBSUEsTUFBSixFQUFZO0FBQUE7QUFDUixnQkFBTUMsU0FBU0gsc0JBQXNCSSxJQUF0QixDQUEyQlgsUUFBM0IsQ0FBZjs7QUFFQTtBQUFBLG1CQUFPLFdBQUNZLEtBQUQsRUFBVztBQUNkLHdCQUFJQyxXQUFXZixhQUFhWSxNQUFiLEVBQXFCLEVBQUNQLE9BQU9TLEtBQVIsRUFBckIsRUFBcUNaLFFBQXJDLENBQWY7O0FBRUEsd0JBQUlhLFdBQVcsQ0FBZixFQUFrQjtBQUNkQSxtQ0FBVyxDQUFDQSxRQUFaOztBQUVBO0FBQ0EsNEJBQUlBLGFBQWEsQ0FBYixJQUFrQkEsYUFBYUgsT0FBT0ksTUFBMUMsRUFBa0Q7QUFDOUMsbUNBQU8sQ0FBUDtBQUNIOztBQUVELDRCQUFJQyxnQkFBZ0JMLE9BQU9HLFdBQVcsQ0FBbEIsRUFBcUJSLElBQXpDO0FBQ0EsNEJBQUlXLGVBQWVOLE9BQU9HLFFBQVAsRUFBaUJSLElBQXBDO0FBQ0EsK0JBQU8sQ0FBQ08sUUFBUUYsT0FBT0csV0FBVyxDQUFsQixFQUFxQlYsS0FBOUIsS0FBd0NhLGVBQWVELGFBQXZELElBQXdFLEdBQXhFLEdBQ0RBLGFBRE47QUFFSCxxQkFaRCxNQVlPO0FBQ0gsK0JBQU9MLE9BQU9HLFFBQVAsRUFBaUJSLElBQXhCO0FBQ0g7QUFDSjtBQWxCRDtBQUhROztBQUFBO0FBc0JYLEtBdEJELE1Bc0JPO0FBQUE7QUFDSCxnQkFBTVksUUFBUVYsc0JBQXNCSSxJQUF0QixDQUEyQlAsT0FBM0IsQ0FBZDs7QUFFQTtBQUFBLG1CQUFPLFdBQUNDLElBQUQsRUFBVTtBQUNiLHdCQUFJUSxXQUFXZixhQUFhbUIsS0FBYixFQUFvQixFQUFDWixVQUFELEVBQXBCLEVBQTRCRCxPQUE1QixDQUFmOztBQUVBLHdCQUFJUyxXQUFXLENBQWYsRUFBa0I7QUFDZEEsbUNBQVcsQ0FBQ0EsUUFBWjs7QUFFQTtBQUNBLDRCQUFJQSxhQUFhLENBQWIsSUFBa0JBLGFBQWFJLE1BQU1ILE1BQXpDLEVBQWlEO0FBQzdDLG1DQUFPLENBQVA7QUFDSDs7QUFFRCw0QkFBSUMsZ0JBQWdCRSxNQUFNSixXQUFXLENBQWpCLEVBQW9CUixJQUF4QztBQUNBLDRCQUFJVyxlQUFlQyxNQUFNSixRQUFOLEVBQWdCUixJQUFuQztBQUNBLCtCQUFPLE9BQU9BLE9BQU9VLGFBQWQsS0FBZ0NDLGVBQWVELGFBQS9DLElBQ0RFLE1BQU1KLFdBQVcsQ0FBakIsRUFBb0JWLEtBRDFCO0FBRUgscUJBWkQsTUFZTztBQUNILCtCQUFPYyxNQUFNSixRQUFOLEVBQWdCVixLQUF2QjtBQUNIO0FBQ0o7QUFsQkQ7QUFIRzs7QUFBQTtBQXNCTjtBQUNKOztBQUVEZSxPQUFPQyxPQUFQLEdBQWlCYix3QkFBakIiLCJmaWxlIjoia292YXRzQ29udmVyc2lvbkZ1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYmluYXJ5U2VhcmNoID0gcmVxdWlyZSgnYmluYXJ5LXNlYXJjaCcpO1xuY29uc3QgYXNjVmFsdWUgPSAoYSwgYikgPT4gKGEudmFsdWUgLSBiLnZhbHVlKTtcbmNvbnN0IGFzY1RpbWUgPSAoYSwgYikgPT4gKGEudGltZSAtIGIudGltZSk7XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHRvIGNvbnZlcnQgZnJvbSB0aW1lIHRvIEtvdmF0cyBvciBmcm9tIEtvdmF0cyB0byB0aW1lXG4gKiBAcGFyYW0ge0FycmF5PG9iamVjdD59IGtvdmF0c0NvbnZlcnNpb25UYWJsZSAtIExpc3Qgb2YgdGltZS1rb3ZhdHMgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMgPSB7fV0gLSBPcHRpb25zIG9iamVjdFxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZXZlcnQgPSBmYWxzZV0gLSBUcnVlIGZvciBjb252ZXJ0IGZyb20gS292YXRzIHRvIHRpbWUsIGZhbHNlIG90aGVyd2lzZVxuICogQHJldHVybiB7ZnVuY3Rpb24obnVtYmVyKX0gLSBPbmUgcGFyYW1ldGVyIGZ1bmN0aW9uIHRoYXQgY29udmVydCB0byBvbmUgZGltZW5zaW9uIHRvIHRoZSBvdGhlclxuICovXG5mdW5jdGlvbiBrb3ZhdHNDb252ZXJzaW9uRnVuY3Rpb24oa292YXRzQ29udmVyc2lvblRhYmxlLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7cmV2ZXJ0ID0gZmFsc2V9ID0gb3B0aW9ucztcblxuICAgIGlmIChyZXZlcnQpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0ga292YXRzQ29udmVyc2lvblRhYmxlLnNvcnQoYXNjVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiAoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IGJpbmFyeVNlYXJjaCh2YWx1ZXMsIHt2YWx1ZTogaW5kZXh9LCBhc2NWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IH5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBleHRyZW1lIGNhc2VzXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwIHx8IHBvc2l0aW9uID09PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBzbWFsbGVyQWxjYW5lID0gdmFsdWVzW3Bvc2l0aW9uIC0gMV0udGltZTtcbiAgICAgICAgICAgICAgICBsZXQgbGFyZ2VyQWxjYW5lID0gdmFsdWVzW3Bvc2l0aW9uXS50aW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiAoaW5kZXggLSB2YWx1ZXNbcG9zaXRpb24gLSAxXS52YWx1ZSkgKiAobGFyZ2VyQWxjYW5lIC0gc21hbGxlckFsY2FuZSkgLyAxMDBcbiAgICAgICAgICAgICAgICAgICAgKyBzbWFsbGVyQWxjYW5lO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzW3Bvc2l0aW9uXS50aW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRpbWVzID0ga292YXRzQ29udmVyc2lvblRhYmxlLnNvcnQoYXNjVGltZSk7XG5cbiAgICAgICAgcmV0dXJuICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBiaW5hcnlTZWFyY2godGltZXMsIHt0aW1lfSwgYXNjVGltZSk7XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA8IDApIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IH5wb3NpdGlvbjtcblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBleHRyZW1lIGNhc2VzXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwIHx8IHBvc2l0aW9uID09PSB0aW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHNtYWxsZXJBbGNhbmUgPSB0aW1lc1twb3NpdGlvbiAtIDFdLnRpbWU7XG4gICAgICAgICAgICAgICAgbGV0IGxhcmdlckFsY2FuZSA9IHRpbWVzW3Bvc2l0aW9uXS50aW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiAxMDAgKiAodGltZSAtIHNtYWxsZXJBbGNhbmUpIC8gKGxhcmdlckFsY2FuZSAtIHNtYWxsZXJBbGNhbmUpXG4gICAgICAgICAgICAgICAgICAgICsgdGltZXNbcG9zaXRpb24gLSAxXS52YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVzW3Bvc2l0aW9uXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga292YXRzQ29udmVyc2lvbkZ1bmN0aW9uO1xuIl19

/***/ },
/* 179 */
/***/ function(module, exports) {

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


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Chromatogram = __webpack_require__(1);
	var converter = __webpack_require__(181).convert;

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9tSmNhbXAuanMiXSwibmFtZXMiOlsiQ2hyb21hdG9ncmFtIiwicmVxdWlyZSIsImNvbnZlcnRlciIsImNvbnZlcnQiLCJmcm9tSmNhbXAiLCJqY2FtcCIsImRhdGEiLCJuZXdHQ01TIiwiZ2NtcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLGVBQWVDLFFBQVEsZ0JBQVIsQ0FBckI7QUFDQSxJQUFNQyxZQUFZRCxRQUFRLGdCQUFSLEVBQTBCRSxPQUE1Qzs7QUFFQTs7Ozs7QUFLQSxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN0QixNQUFNQyxPQUFPSixVQUFVRyxLQUFWLEVBQWlCLEVBQUNFLFNBQVMsSUFBVixFQUFqQixFQUFrQ0MsSUFBL0M7QUFDQSxTQUFPLElBQUlSLFlBQUosQ0FBaUJNLElBQWpCLENBQVA7QUFDSDs7QUFFREcsT0FBT0MsT0FBUCxHQUFpQk4sU0FBakIiLCJmaWxlIjoiZnJvbUpjYW1wLmpzIiwic291cmNlUm9vdCI6Ii91c3IvbG9jYWwvd3d3L3NpdGVzL3d3dy5sYWN0YW1lLmNvbS9ub2RlL2dybS1kYXRhL2dpdC9jaGVtaW5mby1qcy9jaHJvbWF0b2dyYXBoeSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgQ2hyb21hdG9ncmFtID0gcmVxdWlyZSgnLi9DaHJvbWF0b2dyYW0nKTtcbmNvbnN0IGNvbnZlcnRlciA9IHJlcXVpcmUoJ2pjYW1wY29udmVydGVyJykuY29udmVydDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IENocm9tYXRvZ3JhbSBlbGVtZW50IGJhc2VkIGluIGEgSkNBTVAgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gamNhbXAgLSBTdHJpbmcgY29udGFpbmluZyB0aGUgSkNBTVAgZGF0YVxuICogQHJldHVybiB7Q2hyb21hdG9ncmFtfSAtIE5ldyBjbGFzcyBlbGVtZW50IHdpdGggdGhlIGdpdmVuIGRhdGFcbiAqL1xuZnVuY3Rpb24gZnJvbUpjYW1wKGpjYW1wKSB7XG4gICAgY29uc3QgZGF0YSA9IGNvbnZlcnRlcihqY2FtcCwge25ld0dDTVM6IHRydWV9KS5nY21zO1xuICAgIHJldHVybiBuZXcgQ2hyb21hdG9ncmFtKGRhdGEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZyb21KY2FtcDtcbiJdfQ==

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var parseXYDataRegExp = __webpack_require__(182);


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


/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';


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


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Chromatogram = __webpack_require__(1);

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mcm9tSlNPTi5qcyJdLCJuYW1lcyI6WyJDaHJvbWF0b2dyYW0iLCJyZXF1aXJlIiwiZnJvbUpTT04iLCJqc29uIiwidGltZSIsIkFycmF5IiwibGVuZ3RoIiwidGljIiwibXMiLCJpIiwibWFzcyIsImoiLCJpbnRlbnNpdHkiLCJjaHJvbSIsImFkZFNlcmllIiwiZGltZW5zaW9uIiwibmFtZSIsImRhdGEiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGdCQUFSLENBQXJCOztBQUVBOzs7OztBQUtBLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3BCLFFBQUlDLE9BQU8sSUFBSUMsS0FBSixDQUFVRixLQUFLRyxNQUFmLENBQVg7QUFDQSxRQUFJQyxNQUFNLElBQUlGLEtBQUosQ0FBVUYsS0FBS0csTUFBZixDQUFWO0FBQ0EsUUFBSUUsS0FBSyxJQUFJSCxLQUFKLENBQVVGLEtBQUtHLE1BQWYsQ0FBVDs7QUFFQSxTQUFLLElBQUlHLElBQUksQ0FBYixFQUFnQkEsSUFBSU4sS0FBS0csTUFBekIsRUFBaUNHLEdBQWpDLEVBQXNDO0FBQ2xDTCxhQUFLSyxDQUFMLElBQVVOLEtBQUtNLENBQUwsRUFBUUwsSUFBbEI7QUFDQUcsWUFBSUUsQ0FBSixJQUFTTixLQUFLTSxDQUFMLEVBQVFGLEdBQWpCO0FBQ0FDLFdBQUdDLENBQUgsSUFBUSxDQUFDLElBQUlKLEtBQUosQ0FBVUYsS0FBS00sQ0FBTCxFQUFRQyxJQUFSLENBQWFKLE1BQXZCLENBQUQsRUFBaUMsSUFBSUQsS0FBSixDQUFVRixLQUFLTSxDQUFMLEVBQVFDLElBQVIsQ0FBYUosTUFBdkIsQ0FBakMsQ0FBUjtBQUNBLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJUixLQUFLTSxDQUFMLEVBQVFDLElBQVIsQ0FBYUosTUFBakMsRUFBeUNLLEdBQXpDLEVBQThDO0FBQzFDSCxlQUFHQyxDQUFILEVBQU0sQ0FBTixFQUFTRSxDQUFULElBQWNSLEtBQUtNLENBQUwsRUFBUUMsSUFBUixDQUFhQyxDQUFiLEVBQWdCRCxJQUE5QjtBQUNBRixlQUFHQyxDQUFILEVBQU0sQ0FBTixFQUFTRSxDQUFULElBQWNSLEtBQUtNLENBQUwsRUFBUUMsSUFBUixDQUFhQyxDQUFiLEVBQWdCQyxTQUE5QjtBQUNIO0FBQ0o7O0FBRUQsUUFBSUMsUUFBUSxJQUFJYixZQUFKLENBQWlCSSxJQUFqQixDQUFaO0FBQ0FTLFVBQU1DLFFBQU4sQ0FBZTtBQUNYQyxtQkFBVyxDQURBO0FBRVhDLGNBQU0sS0FGSztBQUdYQyxjQUFNVjtBQUhLLEtBQWY7QUFLQU0sVUFBTUMsUUFBTixDQUFlO0FBQ1hDLG1CQUFXLENBREE7QUFFWEMsY0FBTSxJQUZLO0FBR1hDLGNBQU1UO0FBSEssS0FBZjs7QUFNQSxXQUFPSyxLQUFQO0FBQ0g7O0FBRURLLE9BQU9DLE9BQVAsR0FBaUJqQixRQUFqQiIsImZpbGUiOiJmcm9tSlNPTi5qcyIsInNvdXJjZVJvb3QiOiIvdXNyL2xvY2FsL3d3dy9zaXRlcy93d3cubGFjdGFtZS5jb20vbm9kZS9ncm0tZGF0YS9naXQvY2hlbWluZm8tanMvY2hyb21hdG9ncmFwaHkiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENocm9tYXRvZ3JhbSA9IHJlcXVpcmUoJy4vQ2hyb21hdG9ncmFtJyk7XG5cbi8qKlxuICogUGFyc2UgZnJvbSBhIEpTT04gZWxlbWVudCB0byBhIG5ldyBDaHJvbWF0b2dyYW1cbiAqIEBwYXJhbSB7QXJyYXk8b2JqZWN0Pn0ganNvbiAtIFJlc3VsdCBmcm9tIHRoZSB0b0pTT05cbiAqIEByZXR1cm4ge0Nocm9tYXRvZ3JhbX0gLSBOZXcgcGFyc2VkIENocm9tYXRvZ3JhbVxuICovXG5mdW5jdGlvbiBmcm9tSlNPTihqc29uKSB7XG4gICAgbGV0IHRpbWUgPSBuZXcgQXJyYXkoanNvbi5sZW5ndGgpO1xuICAgIGxldCB0aWMgPSBuZXcgQXJyYXkoanNvbi5sZW5ndGgpO1xuICAgIGxldCBtcyA9IG5ldyBBcnJheShqc29uLmxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGltZVtpXSA9IGpzb25baV0udGltZTtcbiAgICAgICAgdGljW2ldID0ganNvbltpXS50aWM7XG4gICAgICAgIG1zW2ldID0gW25ldyBBcnJheShqc29uW2ldLm1hc3MubGVuZ3RoKSwgbmV3IEFycmF5KGpzb25baV0ubWFzcy5sZW5ndGgpXTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBqc29uW2ldLm1hc3MubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIG1zW2ldWzBdW2pdID0ganNvbltpXS5tYXNzW2pdLm1hc3M7XG4gICAgICAgICAgICBtc1tpXVsxXVtqXSA9IGpzb25baV0ubWFzc1tqXS5pbnRlbnNpdHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2hyb20gPSBuZXcgQ2hyb21hdG9ncmFtKHRpbWUpO1xuICAgIGNocm9tLmFkZFNlcmllKHtcbiAgICAgICAgZGltZW5zaW9uOiAxLFxuICAgICAgICBuYW1lOiAndGljJyxcbiAgICAgICAgZGF0YTogdGljXG4gICAgfSk7XG4gICAgY2hyb20uYWRkU2VyaWUoe1xuICAgICAgICBkaW1lbnNpb246IDIsXG4gICAgICAgIG5hbWU6ICdtcycsXG4gICAgICAgIGRhdGE6IG1zXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hyb207XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbUpTT047XG4iXX0=

/***/ }
/******/ ])
});
;