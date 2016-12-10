/******/ (function(modules) { // webpackBootstrap
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

	var _Vector = __webpack_require__(1);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Cell = __webpack_require__(11);

	var _Cell2 = _interopRequireDefault(_Cell);

	var _Field = __webpack_require__(2);

	var _Field2 = _interopRequireDefault(_Field);

	var _ScalarField = __webpack_require__(3);

	var _ScalarField2 = _interopRequireDefault(_ScalarField);

	var _VectorField = __webpack_require__(4);

	var _VectorField2 = _interopRequireDefault(_VectorField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.L.Vector = _Vector2.default; /* eslint global-require: "error" */

	// base

	window.L.Cell = _Cell2.default;

	window.L.Field = _Field2.default;

	window.L.ScalarField = _ScalarField2.default;

	window.L.VectorField = _VectorField2.default;

	// layer
	var L_CanvasLayer = __webpack_require__(5);
	var L_CanvasLayer_SimpleLonLat = __webpack_require__(6);
	var L_CanvasLayer_Field = __webpack_require__(7);
	var L_CanvasLayer_ScalarField = __webpack_require__(8);
	var L_CanvasLayer_VectorFieldAnim = __webpack_require__(9);

	// control
	var L_Control_ColorBar = __webpack_require__(10);

	// TODO - umd pattern?

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *  2D Vector
	 */
	var Vector = function () {
	    function Vector(u, v) {
	        _classCallCheck(this, Vector);

	        this.u = u;
	        this.v = v;
	    }

	    /**
	     * Magnitude
	     * @returns {Number}
	     */


	    _createClass(Vector, [{
	        key: "magnitude",
	        value: function magnitude() {
	            return Math.sqrt(this.u * this.u + this.v * this.v);
	        }

	        /**
	         * Angle in degrees (0 to 360º) --> Towards
	         * N is 0º and E is 90º
	         * @returns {Number}
	         */

	    }, {
	        key: "directionTo",
	        value: function directionTo() {
	            var verticalAngle = Math.atan2(this.u, this.v);
	            var inDegrees = verticalAngle * (180.0 / Math.PI);
	            if (inDegrees < 0) {
	                inDegrees = inDegrees + 360.0;
	            }
	            return inDegrees;
	        }

	        /**
	         * Angle in degrees (0 to 360º) From x-->
	         * N is 0º and E is 90º
	         * @returns {Number}
	         */

	    }, {
	        key: "directionFrom",
	        value: function directionFrom() {
	            var a = this.directionTo();
	            var opposite = (a + 180.0) % 360.0;
	            return opposite;
	        }

	        /*
	            Degrees --> text
	            new Dictionary<int, string>
	            {
	                //{0, 23, 45, 68, 90, 113, 135, 158, 180, 203, 225, 248, 270, 293, 315, 338, 360};
	                {0, 'N'},
	                {23, 'NNE'},
	                {45, 'NE'},
	                {68, 'ENE'},
	                {90, 'E'},
	                {113, 'ESE'},
	                {135, 'SE'},
	                {158, 'SSE'},
	                {180, 'S'},
	                {203, 'SSW'},
	                {225, 'SW'},
	                {248, 'WSW'},
	                {270, 'W'},
	                {293, 'WNW'},
	                {315, 'NW'},
	                {338, 'NNW'},
	                {360, 'N'}
	            };
	        */

	    }]);

	    return Vector;
	}();

	exports.default = Vector;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Cell = __webpack_require__(11);

	var _Cell2 = _interopRequireDefault(_Cell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *  Abstract class for a set of values (Vector | Scalar)
	 *  assigned to a regular 2D-grid (lon-lat), aka 'a Raster source'
	 */
	var Field = function () {
	    function Field(params) {
	        _classCallCheck(this, Field);

	        if (new.target === Field) {
	            throw new TypeError('Cannot construct Field instances directly (use VectorField or ScalarField)');
	        }
	        this.params = params;

	        this.nCols = params['nCols'];
	        this.nRows = params['nRows'];

	        // ll = lower-left
	        this.xllCorner = params['xllCorner'];
	        this.yllCorner = params['yllCorner'];

	        // ur = upper-right
	        this.xurCorner = params['xllCorner'] + params['nCols'] * params['cellSize'];
	        this.yurCorner = params['yllCorner'] + params['nRows'] * params['cellSize'];

	        this.cellSize = params['cellSize'];

	        this.grid = null; // to be defined by subclasses
	    }

	    /**
	     * Builds a grid with a value at each point (either Vector or Number)
	     * Original params must include the required input values, following
	     * x-ascending & y-descending order (same as in ASCIIGrid)
	     * @abstract
	     * @private
	     * @returns {Array.<Array.<Vector|Number>>} - grid[row][column]--> Vector|Number
	     */


	    _createClass(Field, [{
	        key: '_buildGrid',
	        value: function _buildGrid() {
	            throw new TypeError('Must be overriden');
	        }

	        /**
	         * Number of cells in the grid (rows * cols)
	         * @returns {Number}
	         */

	    }, {
	        key: 'numCells',
	        value: function numCells() {
	            return this.nRows * this.nCols;
	        }

	        /**
	         * A list with every cell
	         * @returns {Array<Cell>} - cells (x-ascending & y-descending order)
	         */

	    }, {
	        key: 'getCells',
	        value: function getCells() {
	            var cells = [];
	            for (var j = 0; j < this.nRows; j++) {
	                for (var i = 0; i < this.nCols; i++) {
	                    var _lonLatAtIndexes2 = this._lonLatAtIndexes(i, j);

	                    var _lonLatAtIndexes3 = _slicedToArray(_lonLatAtIndexes2, 2);

	                    var lon = _lonLatAtIndexes3[0];
	                    var lat = _lonLatAtIndexes3[1];

	                    var center = L.latLng(lat, lon);
	                    var value = this._valueAtIndexes(i, j);
	                    var c = new _Cell2.default(center, value, this.cellSize);
	                    cells.push(c); // <<
	                }
	            }
	            return cells;
	        }
	    }, {
	        key: 'getPyramid',
	        value: function getPyramid(pyramidLevel) {
	            if (pyramidLevel === 1) return this;

	            var params = {};
	            params['nCols'] = this.nCols / pyramidLevel;
	            params['nRows'] = this.nRows / pyramidLevel;
	            params['xllCorner'] = this.xllCorner;
	            params['yllCorner'] = this.yllCorner;
	            params['cellSize'] = this.cellSize * pyramidLevel;

	            return this._completePyramidWithValues(pyramidLevel, params);
	        }
	    }, {
	        key: '_completePyramidWithValues',
	        value: function _completePyramidWithValues(pyramidLevel, params) {
	            var step = pyramidLevel; // 1 = all | 2 = a quarter...

	            var halfCell = params['cellSize'] / 2.0;
	            var centerLon = this.xllCorner + halfCell;
	            var centerLat = this.yurCorner - halfCell;

	            var lon = centerLon;
	            var lat = centerLat;

	            this._newDataArrays(params);
	            for (var j = 0; j < this.nRows / step; j++) {
	                for (var i = 0; i < this.nCols / step; i++) {
	                    var value = this.interpolatedValueAt(lon, lat);
	                    this._pushValueToArrays(params, value);
	                    lon += params['cellSize'];
	                }
	                lat -= params['cellSize'];
	                lon = centerLon;
	            }

	            return this._makeNewFrom(params);
	        }

	        /**
	         * A raster pyramid (a subset of the cells, corresponding to the pyramidLevel)
	         * @param   {Number} pyramidLevel
	         * @returns {Array<Cell>} - cells
	         */

	    }, {
	        key: 'getOldPyramid',
	        value: function getOldPyramid(pyramidLevel) {
	            // TODO implement cache
	            console.time('getCellsFor');

	            var step = pyramidLevel; // 1 = all | 2 = quarter part...

	            var cellSize = this.cellSize * step;
	            var halfCell = cellSize / 2.0;
	            var centerLon = this.xllCorner + halfCell;
	            var centerLat = this.yurCorner - halfCell;

	            var lon = centerLon;
	            var lat = centerLat;

	            var cells = [];
	            for (var j = 0; j < this.nRows / step; j++) {
	                for (var i = 0; i < this.nCols / step; i++) {
	                    var f = void 0;
	                    if (pyramidLevel === 1) {
	                        f = this.valueAt; // no interpolation
	                    } else {
	                        f = this.interpolatedValueAt;
	                    }
	                    var c = this._getCellFor(lat, lon, cellSize, f);
	                    cells.push(c); // <<
	                    lon += cellSize;
	                }
	                lat -= cellSize;
	                lon = centerLon;
	            }

	            console.timeEnd('getCellsFor');
	            return cells;
	        }

	        /**
	         * A full list with possible pyramid levels
	         * @returns {[[Type]]} [[Description]]
	         */

	    }, {
	        key: 'getPyramidLevels',
	        value: function getPyramidLevels() {
	            var pyramids = [];

	            var p = 1;
	            while (this.nCols / p > 1) {
	                pyramids.push(p);
	                p = p * 2;
	            }

	            return pyramids;
	        }

	        /**
	         * A list with all available resolutions (meters per pixel), one
	         * for each of the pyramid levels
	         */

	    }, {
	        key: 'getResolutions',
	        value: function getResolutions() {
	            return [];
	            /*
	                    let resolutions = pyramids.map(this.resolutionForPyramid);
	                    */
	        }

	        /**
	         * Grid extent
	         * @returns {Number[]} [xmin, ymin, xmax, ymax]
	         */

	    }, {
	        key: 'extent',
	        value: function extent() {
	            return [this.xllCorner, this.yllCorner, this.xurCorner, this.yurCorner];
	        }

	        /**
	         * Returns whether or not the grid contains the point
	         * @param   {Number} lon - longitude
	         * @param   {Number} lat - latitude
	         * @returns {Boolean}
	         */

	    }, {
	        key: 'contains',
	        value: function contains(lon, lat) {
	            return lon >= this.xllCorner && lon <= this.xurCorner && lat >= this.yllCorner && lat <= this.yurCorner;
	        }

	        /**
	         * Returns if the grid doesn't contain the point
	         * @param   {Number} lon - longitude
	         * @param   {Number} lat - latitude
	         * @returns {Boolean}
	         */

	    }, {
	        key: 'notContains',
	        value: function notContains(lon, lat) {
	            return !this.contains(lon, lat);
	        }

	        /**
	         * Interpolated value at lon-lat coordinates (bilinear int.)
	         * @param   {Number} longitude
	         * @param   {Number} latitude
	         * @returns {Vector|Number} [u, v, magnitude]
	         *                          
	         * Source: https://github.com/cambecc/earth > product.js
	         */

	    }, {
	        key: 'interpolatedValueAt',
	        value: function interpolatedValueAt(lon, lat) {
	            if (this.notContains(lon, lat)) return null;

	            //         1      2           After converting λ and φ to fractional grid indexes i and j, we find the
	            //        fi  i   ci          four points 'G' that enclose point (i, j). These points are at the four
	            //         | =1.4 |           corners specified by the floor and ceiling of i and j. For example, given
	            //      ---G--|---G--- fj 8   i = 1.4 and j = 8.3, the four surrounding grid points are (1, 8), (2, 8),
	            //    j ___|_ .   |           (1, 9) and (2, 9).
	            //  =8.3   |      |
	            //      ---G------G--- cj 9   Note that for wrapped grids, the first column is duplicated as the last
	            //         |      |           column, so the index ci can be used without taking a modulo.

	            var _getDecimalIndexes2 = this._getDecimalIndexes(lon, lat);

	            var _getDecimalIndexes3 = _slicedToArray(_getDecimalIndexes2, 2);

	            var i = _getDecimalIndexes3[0];
	            var j = _getDecimalIndexes3[1];

	            var indexes = this._getFourSurroundingIndexes(i, j);

	            var _indexes = _slicedToArray(indexes, 4);

	            var fi = _indexes[0];
	            var ci = _indexes[1];
	            var fj = _indexes[2];
	            var cj = _indexes[3];

	            var values = this._getFourSurroundingValues(fi, ci, fj, cj);
	            if (values) {
	                var _values = _slicedToArray(values, 4);

	                var g00 = _values[0];
	                var g10 = _values[1];
	                var g01 = _values[2];
	                var g11 = _values[3];

	                return this._doInterpolation(i - fi, j - fj, g00, g10, g01, g11);
	            }
	            // console.log('cannot interpolate: ' + λ + ',' + φ + ': ' + fi + ' ' + ci + ' ' + fj + ' ' + cj);
	            return null;
	        }

	        /**
	         * Get decimal indexes, clampling on borders 
	         * @private
	         * @param {Number} lon
	         * @param {Number} lat
	         * @returns {Array}    [[Description]]
	         */

	    }, {
	        key: '_getDecimalIndexes',
	        value: function _getDecimalIndexes(lon, lat) {
	            var lon0 = this.xllCorner; // + (this.cellSize / 2.0);
	            //let lon0 = this.xllCorner + (this.cellSize / 2.0); // TODO review
	            var ii = (lon - lon0) / this.cellSize;
	            var i = this._clampColumnIndex(ii);

	            var lat0 = this.yurCorner; // - (this.cellSize / 2.0);
	            //let lat0 = this.yurCorner - (this.cellSize / 2.0); // TODO review
	            var jj = (lat0 - lat) / this.cellSize;
	            var j = this._clampRowIndex(jj);

	            return [i, j];
	        }

	        /**
	         * Get surrounding indexes (integer), clampling on borders
	         * @private
	         * @param   {Number} i - decimal index
	         * @param   {Number} j - decimal index
	         * @returns {Array} [fi, ci, fj, cj]
	         */

	    }, {
	        key: '_getFourSurroundingIndexes',
	        value: function _getFourSurroundingIndexes(i, j) {
	            var fi = this._clampColumnIndex(Math.floor(i));
	            var ci = this._clampRowIndex(fi + 1);
	            var fj = this._clampColumnIndex(Math.floor(j));
	            var cj = this._clampRowIndex(fj + 1);
	            console.log(fi, ci, fj, cj);
	            return [fi, ci, fj, cj];
	        }

	        /**
	         * Get four surrounding values or null if not available,
	         * from 4 integer indexes
	         * @private
	         * @param   {Number} fi
	         * @param   {Number} ci
	         * @param   {Number} fj
	         * @param   {Number} cj
	         * @returns {Array} 
	         */

	    }, {
	        key: '_getFourSurroundingValues',
	        value: function _getFourSurroundingValues(fi, ci, fj, cj) {
	            var row;
	            if (row = this.grid[fj]) {
	                // upper row ^^
	                var g00 = row[fi]; // << left
	                var g10 = row[ci]; // right >>
	                if (this._isValid(g00) && this._isValid(g10) && (row = this.grid[cj])) {
	                    // lower row vv
	                    var g01 = row[fi]; // << left
	                    var g11 = row[ci]; // right >>
	                    if (this._isValid(g01) && this._isValid(g11)) {
	                        return [g00, g10, g01, g11]; // 4 values found!
	                    }
	                }
	            }
	            return null;
	        }

	        /**
	         * Nearest value at lon-lat coordinates
	         * @param   {Number} longitude
	         * @param   {Number} latitude
	         * @returns {Vector|Number}
	         */

	    }, {
	        key: 'valueAt',
	        value: function valueAt(lon, lat) {
	            if (this.notContains(lon, lat)) return null;

	            var _getDecimalIndexes4 = this._getDecimalIndexes(lon, lat);

	            var _getDecimalIndexes5 = _slicedToArray(_getDecimalIndexes4, 2);

	            var i = _getDecimalIndexes5[0];
	            var j = _getDecimalIndexes5[1];

	            var ii = Math.floor(i);
	            var jj = Math.floor(j);

	            return this._valueAtIndexes(ii, jj);
	        }

	        /**
	         * Returns whether or not the field has a value at the point
	         * @param   {Number} lon - longitude
	         * @param   {Number} lat - latitude
	         * @returns {Boolean}
	         */

	    }, {
	        key: 'hasValueAt',
	        value: function hasValueAt(lon, lat) {
	            return this.valueAt(lon, lat) !== null;
	        }

	        /**
	         * Returns if the grid has no value at the point
	         * @param   {Number} lon - longitude
	         * @param   {Number} lat - latitude
	         * @returns {Boolean}
	         */

	    }, {
	        key: 'notHasValueAt',
	        value: function notHasValueAt(lon, lat) {
	            return !this.hasValueAt(lon, lat);
	        }

	        /**
	         * Gives a random position to 'o' inside the grid
	         * @param {Object} [o] - an object (eg. a particle)
	         * @returns {{x: Number, y: Number}} - object with x, y (lon, lat)
	         */

	    }, {
	        key: 'randomPosition',
	        value: function randomPosition() {
	            var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	            var i = Math.random() * this.nCols | 0;
	            var j = Math.random() * this.nRows | 0;

	            o.x = this._longitudeAtX(i);
	            o.y = this._latitudeAtY(j);
	            return o;
	        }

	        /**
	         * Value for grid indexes
	         * @param   {Number} i - column index (integer)
	         * @param   {Number} j - row index (integer)
	         * @returns {Vector|Number}
	         */

	    }, {
	        key: '_valueAtIndexes',
	        value: function _valueAtIndexes(i, j) {
	            return this.grid[j][i]; // <-- j,i !!
	        }

	        /**
	         * Lon-Lat for grid indexes
	         * @param   {Number} i - column index (integer)
	         * @param   {Number} j - row index (integer)
	         * @returns {Number[]} [lon, lat]
	         */

	    }, {
	        key: '_lonLatAtIndexes',
	        value: function _lonLatAtIndexes(i, j) {
	            var lon = this._longitudeAtX(i);
	            var lat = this._latitudeAtY(j);

	            return [lon, lat];
	        }

	        /**
	         * Longitude for grid-index
	         * @param   {Number} i - column index (integer)
	         * @returns {Number} longitude at the center of the cell
	         */

	    }, {
	        key: '_longitudeAtX',
	        value: function _longitudeAtX(i) {
	            var halfPixel = this.cellSize / 2.0;
	            return this.xllCorner + halfPixel + i * this.cellSize;
	        }

	        /**
	         * Latitude for grid-index
	         * @param   {Number} j - row index (integer)
	         * @returns {Number} latitude at the center of the cell
	         */

	    }, {
	        key: '_latitudeAtY',
	        value: function _latitudeAtY(j) {
	            var halfPixel = this.cellSize / 2.0;
	            return this.yurCorner - halfPixel - j * this.cellSize;
	        }

	        /**
	         * Apply the interpolation
	         * @abstract
	         * @private
	         * @param {Number} lon - longitude
	         * @param {Number} lat - latitude
	         * @returns {Vector|Number}
	         */

	    }, {
	        key: '_doInterpolation',
	        value: function _doInterpolation(lon, lat) {
	            throw new TypeError('Must be overriden');
	        }

	        /**
	         * Check the column index is inside the field,
	         * adjusting to min or max when needed
	         * @private
	         * @param   {Number} ii - decimal index
	         * @returns {Number} i - inside the allowed indexes
	         */

	    }, {
	        key: '_clampColumnIndex',
	        value: function _clampColumnIndex(ii) {
	            var i = ii;
	            if (ii < 0) {
	                i = 0;
	            }
	            var maxCol = this.nCols - 1;
	            if (ii > maxCol) {
	                i = maxCol;
	            }

	            return i;
	        }

	        /**
	         * Check the row index is inside the field,
	         * adjusting to min or max when needed
	         * @private
	         * @param   {Number} jj decimal index
	         * @returns {Number} j - inside the allowed indexes
	         */

	    }, {
	        key: '_clampRowIndex',
	        value: function _clampRowIndex(jj) {
	            var j = jj;
	            if (jj < 0) {
	                j = 0;
	            }
	            var maxRow = this.nRows - 1;
	            if (jj > maxRow) {
	                j = maxRow;
	            }

	            return j;
	        }

	        /**
	         * Is valid (not 'null' nor 'undefined')
	         * @private
	         * @param   {Object} x object
	         * @returns {Boolean}
	         */

	    }, {
	        key: '_isValid',
	        value: function _isValid(x) {
	            return x !== null && x !== undefined;
	        }
	    }]);

	    return Field;
	}();

	exports.default = Field;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Field2 = __webpack_require__(2);

	var _Field3 = _interopRequireDefault(_Field2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Scalar Field
	 */
	var ScalarField = function (_Field) {
	    _inherits(ScalarField, _Field);

	    _createClass(ScalarField, null, [{
	        key: 'fromASCIIGrid',


	        /**
	         * Creates a ScalarField from the content of an ASCIIGrid file
	         * @param   {String}   asc
	         * @returns {ScalarField}
	         */
	        value: function fromASCIIGrid(asc) {
	            var scaleFactor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

	            //console.time('ScalarField from ASC');
	            var lines = asc.split('\n');

	            // Header
	            var n = /-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/; // any number
	            var p = {
	                nCols: parseInt(lines[0].match(n)),
	                nRows: parseInt(lines[1].match(n)),
	                xllCorner: parseFloat(lines[2].match(n)),
	                yllCorner: parseFloat(lines[3].match(n)),
	                cellSize: parseFloat(lines[4].match(n))
	            };
	            var NODATA_value = lines[5].replace('NODATA_value', '').trim();

	            // Data (left-right and top-down)
	            var zs = []; //
	            for (var i = 6; i < lines.length; i++) {
	                var line = lines[i].trim();
	                if (line === '') break;

	                var items = line.split(' ');
	                var values = items.map(function (it) {
	                    return it !== NODATA_value ? parseFloat(it * scaleFactor) : null;
	                });
	                zs.push.apply(zs, _toConsumableArray(values));
	            }
	            p.zs = zs;
	            //console.timeEnd('ScalarField from ASC');
	            return new ScalarField(p);
	        }
	    }]);

	    function ScalarField(params) {
	        _classCallCheck(this, ScalarField);

	        var _this = _possibleConstructorReturn(this, (ScalarField.__proto__ || Object.getPrototypeOf(ScalarField)).call(this, params));

	        _this.zs = params['zs'];

	        _this.grid = _this._buildGrid();
	        _this.range = _this._calculateRange();
	        return _this;
	    }

	    /**
	     * Filter the field, using a function
	     * @param   {Function} f boolean function to
	     *                       include in filter
	     * @returns {ScalarField}
	     */


	    _createClass(ScalarField, [{
	        key: 'filterWith',
	        value: function filterWith(f) {
	            var p = this.params;
	            p.zs = p.zs.map(function (v) {
	                if (f(v)) {
	                    return v;
	                }
	                return null;
	            });

	            return new ScalarField(p);
	        }

	        /**
	         * Builds a grid with a Number at each point, from an array
	         * 'zs' following x-ascending & y-descending order
	         * (same as in ASCIIGrid)
	         * @private
	         * @returns {Array.<Array.<Number>>} - grid[row][column]--> Number
	         */

	    }, {
	        key: '_buildGrid',
	        value: function _buildGrid() {
	            var grid = this._arrayTo2d(this.zs, this.nRows, this.nCols);
	            return grid;
	        }
	    }, {
	        key: '_arrayTo2d',
	        value: function _arrayTo2d(array, nRows, nCols) {
	            var grid = [];
	            var p = 0;
	            for (var j = 0; j < nRows; j++) {
	                var row = [];
	                for (var i = 0; i < nCols; i++, p++) {
	                    var z = array[p];
	                    row[i] = this._isValid(z) ? z : null; // <<<
	                }
	                grid[j] = row;
	            }
	            return grid;
	        }
	    }, {
	        key: '_newDataArrays',
	        value: function _newDataArrays(params) {
	            params['zs'] = [];
	        }
	    }, {
	        key: '_pushValueToArrays',
	        value: function _pushValueToArrays(params, value) {
	            params['zs'].push(value);
	        }
	    }, {
	        key: '_makeNewFrom',
	        value: function _makeNewFrom(params) {
	            return new ScalarField(params);
	        }

	        /**
	         * Calculate min & max values
	         * @private
	         * @returns {Array}
	         */

	    }, {
	        key: '_calculateRange',
	        value: function _calculateRange() {
	            return [d3.min(this.zs), d3.max(this.zs)];
	        }

	        /**
	         * Bilinear interpolation for Number
	         * https://en.wikipedia.org/wiki/Bilinear_interpolation
	         * @param   {Number} x
	         * @param   {Number} y
	         * @param   {Number} g00
	         * @param   {Number} g10
	         * @param   {Number} g01
	         * @param   {Number} g11
	         * @returns {Number}
	         */

	    }, {
	        key: '_doInterpolation',
	        value: function _doInterpolation(x, y, g00, g10, g01, g11) {
	            var rx = 1 - x;
	            var ry = 1 - y;
	            return g00 * rx * ry + g10 * x * ry + g01 * rx * y + g11 * x * y;
	        }
	    }]);

	    return ScalarField;
	}(_Field3.default);

	exports.default = ScalarField;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Vector = __webpack_require__(1);

	var _Vector2 = _interopRequireDefault(_Vector);

	var _Field2 = __webpack_require__(2);

	var _Field3 = _interopRequireDefault(_Field2);

	var _ScalarField = __webpack_require__(3);

	var _ScalarField2 = _interopRequireDefault(_ScalarField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 *  A set of vectors assigned to a regular 2D-grid (lon-lat)
	 *  (e.g. a raster representing winds for a region)
	 */
	var VectorField = function (_Field) {
	    _inherits(VectorField, _Field);

	    _createClass(VectorField, null, [{
	        key: 'fromASCIIGrids',


	        /**
	         * Creates a VectorField from the content of two ASCIIGrid files
	         * @param   {String} ascU - with u-component
	         * @param   {String} ascV - with v-component
	         * @returns {VectorField}
	         */
	        value: function fromASCIIGrids(ascU, ascV) {
	            var scaleFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	            var u = _ScalarField2.default.fromASCIIGrid(ascU, scaleFactor);
	            var v = _ScalarField2.default.fromASCIIGrid(ascV, scaleFactor);

	            // TODO - check equal parameters for u|v
	            var p = {
	                nCols: u.nCols,
	                nRows: u.nRows,
	                xllCorner: u.xllCorner,
	                yllCorner: u.yllCorner,
	                cellSize: u.cellSize,
	                us: u.zs,
	                vs: v.zs
	            };
	            return new VectorField(p);
	        }
	    }]);

	    function VectorField(params) {
	        _classCallCheck(this, VectorField);

	        var _this = _possibleConstructorReturn(this, (VectorField.__proto__ || Object.getPrototypeOf(VectorField)).call(this, params));

	        _this.us = params['us'];
	        _this.vs = params['vs'];
	        _this.grid = _this._buildGrid();
	        _this.range = _this._calculateRange();
	        return _this;
	    }

	    /**
	     * Get a derived field, from a computation on 
	     * the VectorField
	     * @param   {String} type ['magnitude' | 'directionTo' | 'directionFrom']
	     * @returns {ScalarField}
	     */


	    _createClass(VectorField, [{
	        key: 'getScalarField',
	        value: function getScalarField(type) {
	            var f = this._getFunctionFor(type);
	            var p = {
	                nCols: this.params.nCols,
	                nRows: this.params.nRows,
	                xllCorner: this.params.xllCorner,
	                yllCorner: this.params.yllCorner,
	                cellSize: this.params.cellSize,
	                zs: this._applyOnField(f)
	            };
	            return new _ScalarField2.default(p);
	        }
	    }, {
	        key: '_getFunctionFor',
	        value: function _getFunctionFor(type) {
	            return function (u, v) {
	                var uv = new _Vector2.default(u, v);
	                return uv[type](); // magnitude, directionTo, directionFrom
	            };
	        }
	    }, {
	        key: '_applyOnField',
	        value: function _applyOnField(func) {
	            var zs = [];
	            var n = this.numCells();
	            for (var i = 0; i < n; i++) {
	                var u = this.us[i];
	                var v = this.vs[i];
	                zs.push(func(u, v));
	            }
	            return zs;
	        }

	        /**
	         * Builds a grid with a Vector at each point, from two arrays
	         * 'us' and 'vs' following x-ascending & y-descending order
	         * (same as in ASCIIGrid)
	         * @returns {Array.<Array.<Vector>>} - grid[row][column]--> Vector
	         */

	    }, {
	        key: '_buildGrid',
	        value: function _buildGrid() {
	            var grid = this._arraysTo2d(this.us, this.vs, this.nRows, this.nCols);
	            return grid;
	        }
	    }, {
	        key: '_arraysTo2d',
	        value: function _arraysTo2d(us, vs, nRows, nCols) {
	            var grid = [];
	            var p = 0;

	            for (var j = 0; j < nRows; j++) {
	                var row = [];
	                for (var i = 0; i < nCols; i++, p++) {
	                    var u = us[p],
	                        v = vs[p];
	                    var valid = this._isValid(u) && this._isValid(v);
	                    row[i] = valid ? new _Vector2.default(u, v) : null; // <<<
	                }
	                grid[j] = row;
	            }
	            return grid;
	        }
	    }, {
	        key: '_newDataArrays',
	        value: function _newDataArrays(params) {
	            params['us'] = [];
	            params['vs'] = [];
	        }
	    }, {
	        key: '_pushValueToArrays',
	        value: function _pushValueToArrays(params, value) {
	            console.log(value);

	            params['us'].push(value.u);
	            params['vs'].push(value.v);
	        }
	    }, {
	        key: '_makeNewFrom',
	        value: function _makeNewFrom(params) {
	            return new VectorField(params);
	        }

	        /**
	         * Calculate min & max values (magnitude)
	         * @private
	         * @returns {Array}
	         */

	    }, {
	        key: '_calculateRange',
	        value: function _calculateRange() {
	            var vectors = this.getCells().map(function (pt) {
	                return pt.value;
	            }).filter(function (v) {
	                return v !== null;
	            });
	            var magnitudes = vectors.map(function (v) {
	                return v.magnitude();
	            });
	            // TODO memory crash!
	            var min = d3.min(magnitudes);
	            var max = d3.max(magnitudes);

	            return [min, max];
	        }

	        /**
	         * Bilinear interpolation for Vector
	         * https://en.wikipedia.org/wiki/Bilinear_interpolation
	         * @param   {Number} x
	         * @param   {Number} y
	         * @param   {Number[]} g00
	         * @param   {Number[]} g10
	         * @param   {Number[]} g01
	         * @param   {Number[]} g11
	         * @returns {Vector}
	         */

	    }, {
	        key: '_doInterpolation',
	        value: function _doInterpolation(x, y, g00, g10, g01, g11) {
	            var rx = 1 - x;
	            var ry = 1 - y;
	            var a = rx * ry,
	                b = x * ry,
	                c = rx * y,
	                d = x * y;
	            var u = g00.u * a + g10.u * b + g01.u * c + g11.u * d;
	            var v = g00.v * a + g10.v * b + g01.v * c + g11.v * d;
	            return new _Vector2.default(u, v);
	        }
	    }]);

	    return VectorField;
	}(_Field3.default);

	exports.default = VectorField;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	/*
	  https://github.com/Sumbera/gLayers.Leaflet/releases/tag/v1.0.1

	  Generic  Canvas Layer for leaflet 0.7 and 1.0-rc,
	  copyright Stanislav Sumbera,  2016 , sumbera.com , license MIT
	  originally created and motivated by L.CanvasOverlay  available here: https://gist.github.com/Sumbera/11114288

	*/

	L.CanvasLayer = L.Layer.extend({
	    // -- initialized is called on prototype
	    initialize: function initialize(options) {
	        this._map = null;
	        this._canvas = null;
	        this._frame = null;
	        this._delegate = null;
	        L.setOptions(this, options);
	    },

	    delegate: function delegate(del) {
	        this._delegate = del;
	        return this;
	    },

	    needRedraw: function needRedraw() {
	        if (!this._frame) {
	            this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
	        }
	        return this;
	    },

	    //-------------------------------------------------------------
	    _onLayerDidResize: function _onLayerDidResize(resizeEvent) {
	        this._canvas.width = resizeEvent.newSize.x;
	        this._canvas.height = resizeEvent.newSize.y;
	    },
	    //-------------------------------------------------------------
	    _onLayerDidMove: function _onLayerDidMove() {
	        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
	        L.DomUtil.setPosition(this._canvas, topLeft);
	        this.drawLayer();
	    },
	    //-------------------------------------------------------------
	    getEvents: function getEvents() {
	        var events = {
	            resize: this._onLayerDidResize,
	            moveend: this._onLayerDidMove
	        };
	        if (this._map.options.zoomAnimation && L.Browser.any3d) {
	            events.zoomanim = this._animateZoom;
	        }

	        return events;
	    },
	    //-------------------------------------------------------------
	    onAdd: function onAdd(map) {
	        this._map = map;
	        this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');
	        this.tiles = {};

	        var size = this._map.getSize();
	        this._canvas.width = size.x;
	        this._canvas.height = size.y;

	        var animated = this._map.options.zoomAnimation && L.Browser.any3d;
	        L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));

	        map._panes.overlayPane.appendChild(this._canvas);

	        map.on(this.getEvents(), this);

	        var del = this._delegate || this;
	        del.onLayerDidMount && del.onLayerDidMount(); // -- callback
	        this.needRedraw();
	    },

	    //-------------------------------------------------------------
	    onRemove: function onRemove(map) {
	        var del = this._delegate || this;
	        del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback


	        map.getPanes().overlayPane.removeChild(this._canvas);

	        map.off(this.getEvents(), this);

	        this._canvas = null;
	    },

	    //------------------------------------------------------------
	    addTo: function addTo(map) {
	        map.addLayer(this);
	        return this;
	    },
	    // --------------------------------------------------------------------------------
	    LatLonToMercator: function LatLonToMercator(latlon) {
	        return {
	            x: latlon.lng * 6378137 * Math.PI / 180,
	            y: Math.log(Math.tan((90 + latlon.lat) * Math.PI / 360)) * 6378137
	        };
	    },

	    //------------------------------------------------------------------------------
	    drawLayer: function drawLayer() {
	        // -- todo make the viewInfo properties  flat objects.
	        var size = this._map.getSize();
	        var bounds = this._map.getBounds();
	        var zoom = this._map.getZoom();

	        var center = this.LatLonToMercator(this._map.getCenter());
	        var corner = this.LatLonToMercator(this._map.containerPointToLatLng(this._map.getSize()));

	        var del = this._delegate || this;
	        del.onDrawLayer && del.onDrawLayer({
	            layer: this,
	            canvas: this._canvas,
	            bounds: bounds,
	            size: size,
	            zoom: zoom,
	            center: center,
	            corner: corner
	        });
	        this._frame = null;
	    },

	    //------------------------------------------------------------------------------
	    _animateZoom: function _animateZoom(e) {
	        var scale = this._map.getZoomScale(e.zoom);
	        var offset = this._map._latLngToNewLayerPoint(this._map.getBounds().getNorthWest(), e.zoom, e.center);

	        L.DomUtil.setTransform(this._canvas, offset, scale);
	    }
	});

	L.canvasLayer = function () {
	    return new L.CanvasLayer();
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 *  Simple layer with lon-lat points
	 *
	 *  TODO rename to SimplePoint?
	 */
	L.CanvasLayer.SimpleLonLat = L.CanvasLayer.extend({
	    options: {
	        color: 'gray'
	    },

	    initialize: function initialize(points, options) {
	        this.points = points;
	        L.Util.setOptions(this, options);
	    },

	    onLayerDidMount: function onLayerDidMount() {
	        // -- prepare custom drawing
	    },

	    onLayerWillUnmount: function onLayerWillUnmount() {
	        // -- custom cleanup
	    },

	    setData: function setData(data) {
	        // -- custom data set
	        this.needRedraw(); // -- call to drawLayer
	    },

	    onDrawLayer: function onDrawLayer(viewInfo) {
	        // canvas preparation
	        var g = viewInfo.canvas.getContext('2d');
	        g.clearRect(0, 0, viewInfo.canvas.width, viewInfo.canvas.height);
	        g.fillStyle = this.options.color;

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = this.points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var point = _step.value;

	                var p = viewInfo.layer._map.latLngToContainerPoint(point);
	                g.beginPath();
	                //g.arc(p.x, p.y, 1, 0, Math.PI * 2); // circle | TODO style 'function' as parameter?
	                g.fillRect(p.x, p.y, 2, 2); //simple point
	                g.fill();
	                g.closePath();
	                g.stroke();
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
	    },

	    getBounds: function getBounds() {
	        // TODO: bounding with points...
	        var xs = this.points.map(function (pt) {
	            return pt.lng;
	        });
	        var ys = this.points.map(function (pt) {
	            return pt.lat;
	        });

	        var xmin = Math.min.apply(Math, _toConsumableArray(xs));
	        var ymin = Math.min.apply(Math, _toConsumableArray(ys));
	        var xmax = Math.max.apply(Math, _toConsumableArray(xs));
	        var ymax = Math.max.apply(Math, _toConsumableArray(ys));

	        var southWest = L.latLng(ymin, xmin),
	            northEast = L.latLng(ymax, xmax);
	        var bounds = L.latLngBounds(southWest, northEast); // TODO FIX ERROR ? hal-pixel?
	        return bounds;
	    }
	});

	L.canvasLayer.simpleLonLat = function (lonslats, options) {
	    return new L.CanvasLayer.SimpleLonLat(lonslats, options);
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Abstract class for a Field layer on canvas, aka 'a Raster layer'
	 * (ScalarField or a VectorField)
	 */
	L.CanvasLayer.Field = L.CanvasLayer.extend({

	    options: {
	        click: true },

	    initialize: function initialize(field, options) {
	        this.field = field;
	        L.Util.setOptions(this, options);
	    },

	    onLayerDidMount: function onLayerDidMount() {
	        if (this.options.click) {
	            this._map.on('click', this._queryValue, this);
	        }
	    },

	    onLayerWillUnmount: function onLayerWillUnmount() {
	        if (this.options.click) {
	            this._map.off('click', this._queryValue, this);
	        }
	    },

	    onDrawLayer: function onDrawLayer(viewInfo) {
	        throw new TypeError('Must be overriden');
	    },

	    setData: function setData(data) {
	        // -- custom data set
	        // TODO
	        this.needRedraw(); // -- call to drawLayer
	    },

	    getBounds: function getBounds() {
	        var bb = this.field.extent();
	        var southWest = L.latLng(bb[1], bb[0]),
	            northEast = L.latLng(bb[3], bb[2]);
	        var bounds = L.latLngBounds(southWest, northEast);
	        return bounds;
	    },

	    _queryValue: function _queryValue(e) {
	        var lon = e.latlng.lng;
	        var lat = e.latlng.lat;
	        var result = {
	            latlng: e.latlng,
	            value: this.field.valueAt(lon, lat)
	        };
	        this.fireEvent('click', result); /*includes: L.Mixin.Events,*/
	    },

	    /**
	     * Get clean context to draw on canvas
	     * @returns {CanvasRenderingContext2D}
	     */
	    _getDrawingContext: function _getDrawingContext() {
	        var g = this._canvas.getContext('2d');
	        g.clearRect(0, 0, this._canvas.width, this._canvas.height);
	        return g;
	    }

	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * ScalarField on canvas (a 'Raster')
	 */
	L.CanvasLayer.ScalarField = L.CanvasLayer.Field.extend({

	    options: {
	        color: null // function colorFor(value) [e.g. chromajs.scale]
	    },

	    initialize: function initialize(scalarField, options) {
	        L.CanvasLayer.Field.prototype.initialize.call(this, scalarField, options);
	        L.Util.setOptions(this, options);

	        if (this.options.color === null) {
	            this.options.color = this._defaultColorScale();
	        }
	    },

	    _defaultColorScale: function _defaultColorScale() {
	        return chroma.scale(['white', 'black']).domain(this.field.range);
	    },

	    onDrawLayer: function onDrawLayer(viewInfo) {
	        //console.time('onDrawLayer');

	        var level = this._pyramidLevelFor(viewInfo);
	        var p = this.field.getPyramid(level);
	        var cellsOnScreen = p.getCells().filter(function (c) {
	            return viewInfo.bounds.intersects(c.getBounds());
	        });
	        this._draw(cellsOnScreen);

	        //console.timeEnd('onDrawLayer');
	    },

	    /**
	     * Select the best raster pyramid level for the current view
	     * @param   {Object} viewInfo
	     * @returns {Number} n of pyramid (1:all | 2:half resolution...)
	     */
	    _pyramidLevelFor: function _pyramidLevelFor(viewInfo) {
	        //console.log(viewInfo);


	        // meters per pixel
	        /*
	        let mapResolution = 40075016.686 * Math.abs(Math.cos(this._map.getCenter().lat * 180 / Math.PI)) / Math.pow(2, this._map.getZoom() + 8);
	        */

	        // let resolution = this.field.getResolution();

	        var pyramids = [];
	        var p = 1;

	        return 1; // allthis._map

	        /*let steps = [];
	        let n = this.field.ncols;
	        console.log('ncols ', n);
	         let i = 1;
	        while (n / i > 1) {
	            steps.push[i];
	            i = i * 2;
	            console.log(i);
	        }
	         console.log(viewInfo);
	        return steps[steps.length - 1]; // TODO fit resolution
	        */
	    },

	    _draw: function _draw(cells) {
	        var g = this._getDrawingContext();
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = cells[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var c = _step.value;

	                if (c.value !== null) {
	                    this._drawRectangle(g, c);
	                }
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
	    },

	    /**
	     * Draw a pixel on canvas
	     * @param {object} g    [[Description]]
	     * @param {object} cell [[Description]]
	     */
	    _drawRectangle: function _drawRectangle(g, cell) {
	        g.fillStyle = this.options.color(cell.value);
	        var r = this._getRectangle(cell.getBounds());
	        //g.fillRect(r.x, r.y, r.width, r.height); // TODO check drawing speed
	        g.fillRect(Math.round(r.x), Math.round(r.y), r.width, r.height);
	    },

	    /**
	     * Get rectangle to draw on canvas, aka 'pixel'
	     * @param   {LatLngBounds} cellBounds
	     * @returns {Object} {x, y, width, height}
	     */
	    _getRectangle: function _getRectangle(cellBounds) {
	        var upperLeft = this._map.latLngToContainerPoint(cellBounds.getNorthWest());
	        var lowerRight = this._map.latLngToContainerPoint(cellBounds.getSouthEast());
	        var width = Math.abs(upperLeft.x - lowerRight.x);
	        var height = Math.abs(upperLeft.y - lowerRight.y);

	        var r = {
	            x: upperLeft.x,
	            y: upperLeft.y,
	            width: width,
	            height: height
	        };
	        return r;
	    },

	    _getPixelColor: function _getPixelColor(x, y) {
	        throw new Error('Not working!'); // TODO FIX
	        /*let ctx = this._canvas.getContext('2d');
	        let pixel = ctx.getImageData(x, y, 1, 1).data;
	         // array [r, g, b, a]
	        return chroma(pixel[0], pixel[1], pixel[2]);*/
	    }

	});

	L.canvasLayer.scalarField = function (scalarField, options) {
	    return new L.CanvasLayer.ScalarField(scalarField, options);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Animated VectorField on canvas
	 */
	L.CanvasLayer.VectorFieldAnim = L.CanvasLayer.Field.extend({

	    options: {
	        paths: 1000,
	        color: 'white', // html-color | function colorFor(value) [e.g. chromajs.scale]
	        width: 2, // path-width
	        fade: 0.96, // 0 to 1
	        duration: 40, // milliseconds per 'frame'
	        maxAge: 200, // number of maximum frames per path
	        velocityScale: 1 / 2000
	    },

	    initialize: function initialize(vectorField, options) {
	        L.CanvasLayer.Field.prototype.initialize.call(this, vectorField, options);
	        L.Util.setOptions(this, options);

	        this.timer = null;
	    },

	    onLayerDidMount: function onLayerDidMount() {
	        L.CanvasLayer.Field.prototype.onLayerDidMount.call(this);
	        this._map.on('movestart resize', this._stopAnimation, this);
	    },

	    onLayerWillUnmount: function onLayerWillUnmount() {
	        L.CanvasLayer.Field.prototype.onLayerWillUnmount.call(this);
	        this._map.off('movestart resize', this._stopAnimation, this);
	    },

	    onDrawLayer: function onDrawLayer(viewInfo) {
	        var g = this._getDrawingContext();
	        var paths = this._prepareParticlePaths();

	        this.timer = d3.timer(function () {
	            moveParticles();
	            drawParticles();
	        }, this.options.duration);

	        var self = this;

	        /**
	         * Builds the paths, adding 'particles' on each animation step, considering
	         * their properties (age / position source > target)
	         */
	        function moveParticles() {
	            paths.forEach(function (par) {
	                if (par.age > self.options.maxAge) {
	                    // restart, on a random x,y
	                    par.age = 0;
	                    self.field.randomPosition(par);
	                }

	                if (self.field.notHasValueAt(par.x, par.y)) {
	                    par.age = self.options.maxAge;
	                } else {
	                    // has a vector...
	                    var vector = self.field.interpolatedValueAt(par.x, par.y);
	                    // ... and the next point will be...
	                    var xt = par.x + vector.u * self.options.velocityScale;
	                    var yt = par.y + vector.v * self.options.velocityScale;

	                    if (self.field.hasValueAt(xt, yt)) {
	                        par.xt = xt;
	                        par.yt = yt;
	                        par.m = vector.magnitude();
	                    } else {
	                        // not visible... keep moving?
	                        par.age = self.options.maxAge; // ??
	                    }
	                }
	                par.age += 1;
	            });
	        }

	        /**
	         * Draws the paths on each step
	         */
	        function drawParticles() {
	            // Previous paths...
	            g.globalCompositeOperation = 'destination-in';
	            g.fillRect(0, 0, g.canvas.width, g.canvas.height);
	            g.globalCompositeOperation = 'source-over';

	            g.fillStyle = 'rgba(125, 255, 0, ' + self.options.fade + ')'; // fading paths...
	            g.lineWidth = self.options.width;
	            g.strokeStyle = self.options.color;

	            // New paths
	            paths.forEach(function (par) {
	                var source = new L.latLng(par.y, par.x);
	                var target = new L.latLng(par.yt, par.xt);

	                if (viewInfo.bounds.contains(source) && par.age <= self.options.maxAge) {
	                    var pA = viewInfo.layer._map.latLngToContainerPoint(source);
	                    var pB = viewInfo.layer._map.latLngToContainerPoint(target);

	                    g.beginPath();
	                    g.moveTo(pA.x, pA.y);
	                    g.lineTo(pB.x, pB.y);

	                    // next-step movement
	                    par.x = par.xt;
	                    par.y = par.yt;

	                    // colormap vs. simple color
	                    var color = self.options.color;
	                    if (typeof color == 'function') {
	                        g.strokeStyle = color(par.m);
	                    }
	                    g.stroke();
	                }
	            });
	        }
	    },

	    _prepareParticlePaths: function _prepareParticlePaths() {
	        var paths = [];

	        for (var i = 0; i < this.options.paths; i++) {
	            var p = this.field.randomPosition();
	            p.age = this._randomAge();
	            paths.push(p);
	        }
	        return paths;
	    },

	    _randomAge: function _randomAge() {
	        return Math.round(Math.random() * this.options.maxAge);
	    },

	    _stopAnimation: function _stopAnimation() {
	        if (this.timer) {
	            this.timer.stop();
	        }
	    }

	});

	L.canvasLayer.vectorFieldAnim = function (vectorField, options) {
	    return new L.CanvasLayer.VectorFieldAnim(vectorField, options);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	/**
	 *   Control for a simple legend with a colorbar
	 *   References:
	 *      - http://jsfiddle.net/ramnathv/g8stqcf6/
	 *      - http://jsfiddle.net/vis4/cYLZH/
	 */
	L.Control.ColorBar = L.Control.extend({
	    options: {
	        position: 'bottomleft',
	        width: 300,
	        height: 15,
	        background: 'transparent',
	        steps: 100,
	        decimals: 2,
	        units: 'uds', // ej: m/s
	        title: 'Legend' },

	    initialize: function initialize(color, range, options) {
	        this.color = color; // 'chromajs' scale function
	        this.range = range; // [min, max]
	        L.Util.setOptions(this, options);
	    },

	    onAdd: function onAdd(map) {
	        this._map = map;
	        var div = L.DomUtil.create('div', 'leaflet-control-colorBar leaflet-bar leaflet-control');
	        L.DomEvent.addListener(div, 'click', L.DomEvent.stopPropagation).addListener(div, 'click', L.DomEvent.preventDefault);
	        div.style.backgroundColor = this.options.background;
	        div.style.cursor = 'text';
	        div.innerHTML = this.title() + this.palette();
	        return div;
	    },

	    title: function title() {
	        var d = document.createElement('div');
	        d3.select(d).append('div').append('span').attr('class', 'leaflet-control-colorBar-title').text(this.options.title);
	        return d.innerHTML;
	    },

	    palette: function palette() {
	        var _this = this;

	        // data preparation
	        var min = this.range[0];
	        var max = this.range[1];
	        var delta = (max - min) / this.options.steps;
	        var data = d3.range(min, max + delta, delta);
	        var colorPerValue = data.map(function (d) {
	            return {
	                'value': d,
	                'color': _this.color(d)
	            };
	        });

	        // div.contenedor > svg
	        var w = this.options.width / colorPerValue.length;
	        var d = document.createElement('div');
	        var svg = d3.select(d).append('svg').attr('width', this.options.width).attr('height', this.options.height).style('padding', '10px'); //

	        // n color-bars
	        var buckets = svg.selectAll('rect').data(colorPerValue).enter().append('rect');
	        buckets.attr('x', function (d, i) {
	            return i * w;
	        }).attr('y', function () {
	            return 0;
	        }).attr('height', function () {
	            return _this.options.height;
	        } /*w * 4*/).attr('width', function () {
	            return w;
	        }).attr('fill', function (d) {
	            return d.color;
	        });

	        buckets.append('title').text(function (d) {
	            return d.value.toFixed(_this.options.decimals) + ' ' + _this.options.units;
	        });
	        return d.innerHTML;
	    }
	});

	L.control.colorBar = function (color, range, options) {
	    return new L.Control.ColorBar(color, range, options);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 *  Simple regular cell in a raster
	 */
	var Cell = function () {

	    /**
	     * A simple cell with value and size
	     * @param {L.LatLng} center
	     * @param {Number} value
	     * @param {Number} size
	     */
	    function Cell(center, value, size) {
	        _classCallCheck(this, Cell);

	        this.center = center;
	        this.value = value;
	        this.size = size;
	    }

	    _createClass(Cell, [{
	        key: 'equals',
	        value: function equals(anotherCell) {
	            return this.center.equals(anotherCell.center) && this._equalValues(this.value, anotherCell.value) && this.size === anotherCell.size;
	        }
	    }, {
	        key: '_equalValues',
	        value: function _equalValues(value, anotherValue) {
	            var type = value.constructor.name;
	            var answerFor = {
	                'Number': value === anotherValue,
	                'Vector': value.u === anotherValue.u && value.v === anotherValue.v
	            };
	            return answerFor[type];
	        }

	        /**
	         * Bounds for the cell
	         * @returns {LatLngBounds}
	         */

	    }, {
	        key: 'getBounds',
	        value: function getBounds() {
	            var half = this.size / 2.0;
	            var cLat = this.center.lat;
	            var cLng = this.center.lng;
	            var ul = L.latLng([cLat + half, cLng - half]);
	            var lr = L.latLng([cLat - half, cLng + half]);

	            return L.latLngBounds(L.latLng(lr.lat, ul.lng), L.latLng(ul.lat, lr.lng));
	        }
	    }]);

	    return Cell;
	}();

	exports.default = Cell;

/***/ }
/******/ ]);