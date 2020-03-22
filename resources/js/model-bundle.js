(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Float32Array === 'function' ) ? Float32Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],2:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in the platform byte order.
	*
	* @module @stdlib/array/float32
	*
	* @example
	* var ctor = require( '@stdlib/array/float32' );
	*
	* var arr = new ctor( 10 );
	* // returns <Float32Array>
	*/
	
	// MODULES //
	
	var hasFloat32ArraySupport = require( '@stdlib/assert/has-float32array-support' );
	var builtin = require( './float32array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasFloat32ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./float32array.js":1,"./polyfill.js":3,"@stdlib/assert/has-float32array-support":36}],3:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of single-precision floating-point numbers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],4:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Float64Array === 'function' ) ? Float64Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],5:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
	*
	* @module @stdlib/array/float64
	*
	* @example
	* var ctor = require( '@stdlib/array/float64' );
	*
	* var arr = new ctor( 10 );
	* // returns <Float64Array>
	*/
	
	// MODULES //
	
	var hasFloat64ArraySupport = require( '@stdlib/assert/has-float64array-support' );
	var builtin = require( './float64array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasFloat64ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./float64array.js":4,"./polyfill.js":6,"@stdlib/assert/has-float64array-support":39}],6:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],7:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 16-bit signed integers in the platform byte order.
	*
	* @module @stdlib/array/int16
	*
	* @example
	* var ctor = require( '@stdlib/array/int16' );
	*
	* var arr = new ctor( 10 );
	* // returns <Int16Array>
	*/
	
	// MODULES //
	
	var hasInt16ArraySupport = require( '@stdlib/assert/has-int16array-support' );
	var builtin = require( './int16array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasInt16ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./int16array.js":8,"./polyfill.js":9,"@stdlib/assert/has-int16array-support":44}],8:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Int16Array === 'function' ) ? Int16Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],9:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of twos-complement 16-bit signed integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],10:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 32-bit signed integers in the platform byte order.
	*
	* @module @stdlib/array/int32
	*
	* @example
	* var ctor = require( '@stdlib/array/int32' );
	*
	* var arr = new ctor( 10 );
	* // returns <Int32Array>
	*/
	
	// MODULES //
	
	var hasInt32ArraySupport = require( '@stdlib/assert/has-int32array-support' );
	var builtin = require( './int32array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasInt32ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./int32array.js":11,"./polyfill.js":12,"@stdlib/assert/has-int32array-support":47}],11:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Int32Array === 'function' ) ? Int32Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],12:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of twos-complement 32-bit signed integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],13:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 8-bit signed integers in the platform byte order.
	*
	* @module @stdlib/array/int8
	*
	* @example
	* var ctor = require( '@stdlib/array/int8' );
	*
	* var arr = new ctor( 10 );
	* // returns <Int8Array>
	*/
	
	// MODULES //
	
	var hasInt8ArraySupport = require( '@stdlib/assert/has-int8array-support' );
	var builtin = require( './int8array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasInt8ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./int8array.js":14,"./polyfill.js":15,"@stdlib/assert/has-int8array-support":50}],14:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Int8Array === 'function' ) ? Int8Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],15:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of twos-complement 8-bit signed integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],16:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var Int8Array = require( '@stdlib/array/int8' );
	var Uint8Array = require( '@stdlib/array/uint8' );
	var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
	var Int16Array = require( '@stdlib/array/int16' );
	var Uint16Array = require( '@stdlib/array/uint16' );
	var Int32Array = require( '@stdlib/array/int32' );
	var Uint32Array = require( '@stdlib/array/uint32' );
	var Float32Array = require( '@stdlib/array/float32' );
	var Float64Array = require( '@stdlib/array/float64' );
	
	
	// MAIN //
	
	var CTORS = [
		[ Float64Array, 'Float64Array' ],
		[ Float32Array, 'Float32Array' ],
		[ Int32Array, 'Int32Array' ],
		[ Uint32Array, 'Uint32Array' ],
		[ Int16Array, 'Int16Array' ],
		[ Uint16Array, 'Uint16Array' ],
		[ Int8Array, 'Int8Array' ],
		[ Uint8Array, 'Uint8Array' ],
		[ Uint8ClampedArray, 'Uint8ClampedArray' ]
	];
	
	
	// EXPORTS //
	
	module.exports = CTORS;
	
	},{"@stdlib/array/float32":2,"@stdlib/array/float64":5,"@stdlib/array/int16":7,"@stdlib/array/int32":10,"@stdlib/array/int8":13,"@stdlib/array/uint16":20,"@stdlib/array/uint32":23,"@stdlib/array/uint8":26,"@stdlib/array/uint8c":29}],17:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return a JSON representation of a typed array.
	*
	* @module @stdlib/array/to-json
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	* var toJSON = require( '@stdlib/array/to-json' );
	*
	* var arr = new Float64Array( [ 5.0, 3.0 ] );
	* var json = toJSON( arr );
	* // returns { 'type': 'Float64Array', 'data': [ 5.0, 3.0 ] }
	*/
	
	// MODULES //
	
	var toJSON = require( './to_json.js' );
	
	
	// EXPORTS //
	
	module.exports = toJSON;
	
	},{"./to_json.js":18}],18:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isTypedArray = require( '@stdlib/assert/is-typed-array' );
	var typeName = require( './type.js' );
	
	
	// MAIN //
	
	/**
	* Returns a JSON representation of a typed array.
	*
	* ## Notes
	*
	* -   We build a JSON object representing a typed array similar to how Node.js `Buffer` objects are represented. See [Buffer][1].
	*
	* [1]: https://nodejs.org/api/buffer.html#buffer_buf_tojson
	*
	* @param {TypedArray} arr - typed array to serialize
	* @throws {TypeError} first argument must be a typed array
	* @returns {Object} JSON representation
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var arr = new Float64Array( [ 5.0, 3.0 ] );
	* var json = toJSON( arr );
	* // returns { 'type': 'Float64Array', 'data': [ 5.0, 3.0 ] }
	*/
	function toJSON( arr ) {
		var out;
		var i;
		if ( !isTypedArray( arr ) ) {
			throw new TypeError( 'invalid argument. Must provide a typed array. Value: `' + arr + '`.' );
		}
		out = {};
		out.type = typeName( arr );
		out.data = [];
		for ( i = 0; i < arr.length; i++ ) {
			out.data.push( arr[ i ] );
		}
		return out;
	}
	
	
	// EXPORTS //
	
	module.exports = toJSON;
	
	},{"./type.js":19,"@stdlib/assert/is-typed-array":154}],19:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var instanceOf = require( '@stdlib/assert/instance-of' );
	var ctorName = require( '@stdlib/utils/constructor-name' );
	var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
	var CTORS = require( './ctors.js' );
	
	
	// MAIN //
	
	/**
	* Returns the typed array type.
	*
	* @private
	* @param {TypedArray} arr - typed array
	* @returns {(string|void)} typed array type
	*
	* @example
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var arr = new Float64Array( 5 );
	* var str = typeName( arr );
	* // returns 'Float64Array'
	*/
	function typeName( arr ) {
		var v;
		var i;
	
		// Check for typed array objects from the same realm (same Node.js `vm` or same `Window` object)...
		for ( i = 0; i < CTORS.length; i++ ) {
			if ( instanceOf( arr, CTORS[ i ][ 0 ] ) ) {
				return CTORS[ i ][ 1 ];
			}
		}
		// Walk the prototype tree until we find an object having a desired native class...
		while ( arr ) {
			v = ctorName( arr );
			for ( i = 0; i < CTORS.length; i++ ) {
				if ( v === CTORS[ i ][ 1 ] ) {
					return CTORS[ i ][ 1 ];
				}
			}
			arr = getPrototypeOf( arr );
		}
	}
	
	
	// EXPORTS //
	
	module.exports = typeName;
	
	},{"./ctors.js":16,"@stdlib/assert/instance-of":76,"@stdlib/utils/constructor-name":248,"@stdlib/utils/get-prototype-of":267}],20:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array/uint16
	*
	* @example
	* var ctor = require( '@stdlib/array/uint16' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint16Array>
	*/
	
	// MODULES //
	
	var hasUint16ArraySupport = require( '@stdlib/assert/has-uint16array-support' );
	var builtin = require( './uint16array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasUint16ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./polyfill.js":21,"./uint16array.js":22,"@stdlib/assert/has-uint16array-support":64}],21:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],22:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Uint16Array === 'function' ) ? Uint16Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],23:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array/uint32
	*
	* @example
	* var ctor = require( '@stdlib/array/uint32' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint32Array>
	*/
	
	// MODULES //
	
	var hasUint32ArraySupport = require( '@stdlib/assert/has-uint32array-support' );
	var builtin = require( './uint32array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasUint32ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./polyfill.js":24,"./uint32array.js":25,"@stdlib/assert/has-uint32array-support":67}],24:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of 32-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],25:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Uint32Array === 'function' ) ? Uint32Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],26:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.
	*
	* @module @stdlib/array/uint8
	*
	* @example
	* var ctor = require( '@stdlib/array/uint8' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint8Array>
	*/
	
	// MODULES //
	
	var hasUint8ArraySupport = require( '@stdlib/assert/has-uint8array-support' );
	var builtin = require( './uint8array.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasUint8ArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./polyfill.js":27,"./uint8array.js":28,"@stdlib/assert/has-uint8array-support":70}],27:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],28:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Uint8Array === 'function' ) ? Uint8Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],29:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order clamped to 0-255.
	*
	* @module @stdlib/array/uint8c
	*
	* @example
	* var ctor = require( '@stdlib/array/uint8c' );
	*
	* var arr = new ctor( 10 );
	* // returns <Uint8ClampedArray>
	*/
	
	// MODULES //
	
	var hasUint8ClampedArraySupport = require( '@stdlib/assert/has-uint8clampedarray-support' ); // eslint-disable-line id-length
	var builtin = require( './uint8clampedarray.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasUint8ClampedArraySupport() ) {
		ctor = builtin;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./polyfill.js":30,"./uint8clampedarray.js":31,"@stdlib/assert/has-uint8clampedarray-support":73}],30:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write polyfill
	
	// MAIN //
	
	/**
	* Typed array which represents an array of 8-bit unsigned integers in the platform byte order clamped to 0-255.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],31:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = ( typeof Uint8ClampedArray === 'function' ) ? Uint8ClampedArray : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{}],32:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Object.defineProperty === 'function' ) ? Object.defineProperty : null;
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],33:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for `Object.defineProperty` support.
	*
	* @module @stdlib/assert/has-define-property-support
	*
	* @example
	* var hasDefinePropertySupport = require( '@stdlib/assert/has-define-property-support' );
	*
	* var bool = hasDefinePropertySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasDefinePropertySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasDefinePropertySupport;
	
	},{"./main.js":34}],34:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var defineProperty = require( './define_property.js' );
	
	
	// MAIN //
	
	/**
	* Tests for `Object.defineProperty` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Object.defineProperty` support
	*
	* @example
	* var bool = hasDefinePropertySupport();
	* // returns <boolean>
	*/
	function hasDefinePropertySupport() {
		var bool;
	
		if ( typeof defineProperty !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			defineProperty( {}, 'x', {} );
			bool = true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasDefinePropertySupport;
	
	},{"./define_property.js":32}],35:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Float32Array === 'function' ) ? Float32Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],36:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Float32Array` support.
	*
	* @module @stdlib/assert/has-float32array-support
	*
	* @example
	* var hasFloat32ArraySupport = require( '@stdlib/assert/has-float32array-support' );
	*
	* var bool = hasFloat32ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasFloat32ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasFloat32ArraySupport;
	
	},{"./main.js":37}],37:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isFloat32Array = require( '@stdlib/assert/is-float32array' );
	var PINF = require( '@stdlib/constants/math/float64-pinf' );
	var GlobalFloat32Array = require( './float32array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Float32Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Float32Array` support
	*
	* @example
	* var bool = hasFloat32ArraySupport();
	* // returns <boolean>
	*/
	function hasFloat32ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalFloat32Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalFloat32Array( [ 1.0, 3.14, -3.14, 5.0e40 ] );
			bool = (
				isFloat32Array( arr ) &&
				arr[ 0 ] === 1.0 &&
				arr[ 1 ] === 3.140000104904175 &&
				arr[ 2 ] === -3.140000104904175 &&
				arr[ 3 ] === PINF
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasFloat32ArraySupport;
	
	},{"./float32array.js":35,"@stdlib/assert/is-float32array":102,"@stdlib/constants/math/float64-pinf":183}],38:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Float64Array === 'function' ) ? Float64Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],39:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Float64Array` support.
	*
	* @module @stdlib/assert/has-float64array-support
	*
	* @example
	* var hasFloat64ArraySupport = require( '@stdlib/assert/has-float64array-support' );
	*
	* var bool = hasFloat64ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasFloat64ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasFloat64ArraySupport;
	
	},{"./main.js":40}],40:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isFloat64Array = require( '@stdlib/assert/is-float64array' );
	var GlobalFloat64Array = require( './float64array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Float64Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Float64Array` support
	*
	* @example
	* var bool = hasFloat64ArraySupport();
	* // returns <boolean>
	*/
	function hasFloat64ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalFloat64Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalFloat64Array( [ 1.0, 3.14, -3.14, NaN ] );
			bool = (
				isFloat64Array( arr ) &&
				arr[ 0 ] === 1.0 &&
				arr[ 1 ] === 3.14 &&
				arr[ 2 ] === -3.14 &&
				arr[ 3 ] !== arr[ 3 ]
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasFloat64ArraySupport;
	
	},{"./float64array.js":38,"@stdlib/assert/is-float64array":104}],41:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Dummy function.
	*
	* @private
	*/
	function foo() {
		// No-op...
	}
	
	
	// EXPORTS //
	
	module.exports = foo;
	
	},{}],42:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native function `name` support.
	*
	* @module @stdlib/assert/has-function-name-support
	*
	* @example
	* var hasFunctionNameSupport = require( '@stdlib/assert/has-function-name-support' );
	*
	* var bool = hasFunctionNameSupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasFunctionNameSupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasFunctionNameSupport;
	
	},{"./main.js":43}],43:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var foo = require( './foo.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native function `name` support.
	*
	* @returns {boolean} boolean indicating if an environment has function `name` support
	*
	* @example
	* var bool = hasFunctionNameSupport();
	* // returns <boolean>
	*/
	function hasFunctionNameSupport() {
		return ( foo.name === 'foo' );
	}
	
	
	// EXPORTS //
	
	module.exports = hasFunctionNameSupport;
	
	},{"./foo.js":41}],44:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Int16Array` support.
	*
	* @module @stdlib/assert/has-int16array-support
	*
	* @example
	* var hasInt16ArraySupport = require( '@stdlib/assert/has-int16array-support' );
	*
	* var bool = hasInt16ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasInt16ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasInt16ArraySupport;
	
	},{"./main.js":46}],45:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Int16Array === 'function' ) ? Int16Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],46:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInt16Array = require( '@stdlib/assert/is-int16array' );
	var INT16_MAX = require( '@stdlib/constants/math/int16-max' );
	var INT16_MIN = require( '@stdlib/constants/math/int16-min' );
	var GlobalInt16Array = require( './int16array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Int16Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Int16Array` support
	*
	* @example
	* var bool = hasInt16ArraySupport();
	* // returns <boolean>
	*/
	function hasInt16ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalInt16Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalInt16Array( [ 1, 3.14, -3.14, INT16_MAX+1 ] );
			bool = (
				isInt16Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&      // truncation
				arr[ 2 ] === -3 &&     // truncation
				arr[ 3 ] === INT16_MIN // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasInt16ArraySupport;
	
	},{"./int16array.js":45,"@stdlib/assert/is-int16array":108,"@stdlib/constants/math/int16-max":185,"@stdlib/constants/math/int16-min":186}],47:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Int32Array` support.
	*
	* @module @stdlib/assert/has-int32array-support
	*
	* @example
	* var hasInt32ArraySupport = require( '@stdlib/assert/has-int32array-support' );
	*
	* var bool = hasInt32ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasInt32ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasInt32ArraySupport;
	
	},{"./main.js":49}],48:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Int32Array === 'function' ) ? Int32Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],49:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInt32Array = require( '@stdlib/assert/is-int32array' );
	var INT32_MAX = require( '@stdlib/constants/math/int32-max' );
	var INT32_MIN = require( '@stdlib/constants/math/int32-min' );
	var GlobalInt32Array = require( './int32array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Int32Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Int32Array` support
	*
	* @example
	* var bool = hasInt32ArraySupport();
	* // returns <boolean>
	*/
	function hasInt32ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalInt32Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalInt32Array( [ 1, 3.14, -3.14, INT32_MAX+1 ] );
			bool = (
				isInt32Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&      // truncation
				arr[ 2 ] === -3 &&     // truncation
				arr[ 3 ] === INT32_MIN // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasInt32ArraySupport;
	
	},{"./int32array.js":48,"@stdlib/assert/is-int32array":110,"@stdlib/constants/math/int32-max":187,"@stdlib/constants/math/int32-min":188}],50:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Int8Array` support.
	*
	* @module @stdlib/assert/has-int8array-support
	*
	* @example
	* var hasInt8ArraySupport = require( '@stdlib/assert/has-int8array-support' );
	*
	* var bool = hasInt8ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasInt8ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasInt8ArraySupport;
	
	},{"./main.js":52}],51:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Int8Array === 'function' ) ? Int8Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],52:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInt8Array = require( '@stdlib/assert/is-int8array' );
	var INT8_MAX = require( '@stdlib/constants/math/int8-max' );
	var INT8_MIN = require( '@stdlib/constants/math/int8-min' );
	var GlobalInt8Array = require( './int8array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Int8Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Int8Array` support
	*
	* @example
	* var bool = hasInt8ArraySupport();
	* // returns <boolean>
	*/
	function hasInt8ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalInt8Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalInt8Array( [ 1, 3.14, -3.14, INT8_MAX+1 ] );
			bool = (
				isInt8Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&     // truncation
				arr[ 2 ] === -3 &&    // truncation
				arr[ 3 ] === INT8_MIN // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasInt8ArraySupport;
	
	},{"./int8array.js":51,"@stdlib/assert/is-int8array":112,"@stdlib/constants/math/int8-max":189,"@stdlib/constants/math/int8-min":190}],53:[function(require,module,exports){
	(function (Buffer){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Buffer === 'function' ) ? Buffer : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	}).call(this,require("buffer").Buffer)
	},{"buffer":322}],54:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Buffer` support.
	*
	* @module @stdlib/assert/has-node-buffer-support
	*
	* @example
	* var hasNodeBufferSupport = require( '@stdlib/assert/has-node-buffer-support' );
	*
	* var bool = hasNodeBufferSupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasNodeBufferSupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasNodeBufferSupport;
	
	},{"./main.js":55}],55:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isBuffer = require( '@stdlib/assert/is-buffer' );
	var GlobalBuffer = require( './buffer.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Buffer` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Buffer` support
	*
	* @example
	* var bool = hasNodeBufferSupport();
	* // returns <boolean>
	*/
	function hasNodeBufferSupport() {
		var bool;
		var b;
	
		if ( typeof GlobalBuffer !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			if ( typeof GlobalBuffer.from === 'function' ) {
				b = GlobalBuffer.from( [ 1, 2, 3, 4 ] );
			} else {
				b = new GlobalBuffer( [ 1, 2, 3, 4 ] ); // Note: this is deprecated behavior starting in Node v6 (see https://nodejs.org/api/buffer.html#buffer_new_buffer_array)
			}
			bool = (
				isBuffer( b ) &&
				b[ 0 ] === 1 &&
				b[ 1 ] === 2 &&
				b[ 2 ] === 3 &&
				b[ 3 ] === 4
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasNodeBufferSupport;
	
	},{"./buffer.js":53,"@stdlib/assert/is-buffer":92}],56:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test whether an object has a specified property.
	*
	* @module @stdlib/assert/has-own-property
	*
	* @example
	* var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	*
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'boop' );
	* // returns true
	*
	* bool = hasOwnProp( beep, 'bop' );
	* // returns false
	*/
	
	// MODULES //
	
	var hasOwnProp = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasOwnProp;
	
	},{"./main.js":57}],57:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// FUNCTIONS //
	
	var has = Object.prototype.hasOwnProperty;
	
	
	// MAIN //
	
	/**
	* Tests if an object has a specified property.
	*
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object has a specified property
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasOwnProp( beep, 'bap' );
	* // returns false
	*/
	function hasOwnProp( value, property ) {
		if (
			value === void 0 ||
			value === null
		) {
			return false;
		}
		return has.call( value, property );
	}
	
	
	// EXPORTS //
	
	module.exports = hasOwnProp;
	
	},{}],58:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test whether an object has a specified property, either own or inherited.
	*
	* @module @stdlib/assert/has-property
	*
	* @example
	* var hasProp = require( '@stdlib/assert/has-property' );
	*
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasProp( beep, 'boop' );
	* // returns true
	*
	* bool = hasProp( beep, 'bop' );
	* // returns false
	*/
	
	// MODULES //
	
	var hasProp = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasProp;
	
	},{"./main.js":59}],59:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Tests if an object has a specified property, either own or inherited.
	*
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object has a specified property
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasProp( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = hasProp( beep, 'bap' );
	* // returns false
	*/
	function hasProp( value, property ) {
		if ( value === void 0 || value === null ) {
			return false;
		}
		if ( typeof property === 'symbol' ) {
			return property in Object( value );
		}
		return ( String( property ) in Object( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = hasProp;
	
	},{}],60:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Symbol` support.
	*
	* @module @stdlib/assert/has-symbol-support
	*
	* @example
	* var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
	*
	* var bool = hasSymbolSupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasSymbolSupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasSymbolSupport;
	
	},{"./main.js":61}],61:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Tests for native `Symbol` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Symbol` support
	*
	* @example
	* var bool = hasSymbolSupport();
	* // returns <boolean>
	*/
	function hasSymbolSupport() {
		return (
			typeof Symbol === 'function' &&
			typeof Symbol( 'foo' ) === 'symbol'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = hasSymbolSupport;
	
	},{}],62:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `toStringTag` support.
	*
	* @module @stdlib/assert/has-tostringtag-support
	*
	* @example
	* var hasToStringTagSupport = require( '@stdlib/assert/has-tostringtag-support' );
	*
	* var bool = hasToStringTagSupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasToStringTagSupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasToStringTagSupport;
	
	},{"./main.js":63}],63:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasSymbols = require( '@stdlib/assert/has-symbol-support' );
	
	
	// VARIABLES //
	
	var FLG = hasSymbols();
	
	
	// MAIN //
	
	/**
	* Tests for native `toStringTag` support.
	*
	* @returns {boolean} boolean indicating if an environment has `toStringTag` support
	*
	* @example
	* var bool = hasToStringTagSupport();
	* // returns <boolean>
	*/
	function hasToStringTagSupport() {
		return ( FLG && typeof Symbol.toStringTag === 'symbol' );
	}
	
	
	// EXPORTS //
	
	module.exports = hasToStringTagSupport;
	
	},{"@stdlib/assert/has-symbol-support":60}],64:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Uint16Array` support.
	*
	* @module @stdlib/assert/has-uint16array-support
	*
	* @example
	* var hasUint16ArraySupport = require( '@stdlib/assert/has-uint16array-support' );
	*
	* var bool = hasUint16ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasUint16ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasUint16ArraySupport;
	
	},{"./main.js":65}],65:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isUint16Array = require( '@stdlib/assert/is-uint16array' );
	var UINT16_MAX = require( '@stdlib/constants/math/uint16-max' );
	var GlobalUint16Array = require( './uint16array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Uint16Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint16Array` support
	*
	* @example
	* var bool = hasUint16ArraySupport();
	* // returns <boolean>
	*/
	function hasUint16ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalUint16Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT16_MAX+1, UINT16_MAX+2 ];
			arr = new GlobalUint16Array( arr );
			bool = (
				isUint16Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&            // truncation
				arr[ 2 ] === UINT16_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&            // wrap around
				arr[ 4 ] === 1               // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasUint16ArraySupport;
	
	},{"./uint16array.js":66,"@stdlib/assert/is-uint16array":157,"@stdlib/constants/math/uint16-max":191}],66:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Uint16Array === 'function' ) ? Uint16Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],67:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Uint32Array` support.
	*
	* @module @stdlib/assert/has-uint32array-support
	*
	* @example
	* var hasUint32ArraySupport = require( '@stdlib/assert/has-uint32array-support' );
	*
	* var bool = hasUint32ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasUint32ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasUint32ArraySupport;
	
	},{"./main.js":68}],68:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isUint32Array = require( '@stdlib/assert/is-uint32array' );
	var UINT32_MAX = require( '@stdlib/constants/math/uint32-max' );
	var GlobalUint32Array = require( './uint32array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Uint32Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint32Array` support
	*
	* @example
	* var bool = hasUint32ArraySupport();
	* // returns <boolean>
	*/
	function hasUint32ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalUint32Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT32_MAX+1, UINT32_MAX+2 ];
			arr = new GlobalUint32Array( arr );
			bool = (
				isUint32Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&            // truncation
				arr[ 2 ] === UINT32_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&            // wrap around
				arr[ 4 ] === 1               // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasUint32ArraySupport;
	
	},{"./uint32array.js":69,"@stdlib/assert/is-uint32array":159,"@stdlib/constants/math/uint32-max":192}],69:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Uint32Array === 'function' ) ? Uint32Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],70:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Uint8Array` support.
	*
	* @module @stdlib/assert/has-uint8array-support
	*
	* @example
	* var hasUint8ArraySupport = require( '@stdlib/assert/has-uint8array-support' );
	*
	* var bool = hasUint8ArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasUint8ArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasUint8ArraySupport;
	
	},{"./main.js":71}],71:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isUint8Array = require( '@stdlib/assert/is-uint8array' );
	var UINT8_MAX = require( '@stdlib/constants/math/uint8-max' );
	var GlobalUint8Array = require( './uint8array.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Uint8Array` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint8Array` support
	*
	* @example
	* var bool = hasUint8ArraySupport();
	* // returns <boolean>
	*/
	function hasUint8ArraySupport() {
		var bool;
		var arr;
	
		if ( typeof GlobalUint8Array !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = [ 1, 3.14, -3.14, UINT8_MAX+1, UINT8_MAX+2 ];
			arr = new GlobalUint8Array( arr );
			bool = (
				isUint8Array( arr ) &&
				arr[ 0 ] === 1 &&
				arr[ 1 ] === 3 &&           // truncation
				arr[ 2 ] === UINT8_MAX-2 && // truncation and wrap around
				arr[ 3 ] === 0 &&           // wrap around
				arr[ 4 ] === 1              // wrap around
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasUint8ArraySupport;
	
	},{"./uint8array.js":72,"@stdlib/assert/is-uint8array":161,"@stdlib/constants/math/uint8-max":193}],72:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Uint8Array === 'function' ) ? Uint8Array : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],73:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test for native `Uint8ClampedArray` support.
	*
	* @module @stdlib/assert/has-uint8clampedarray-support
	*
	* @example
	* var hasUint8ClampedArraySupport = require( '@stdlib/assert/has-uint8clampedarray-support' );
	*
	* var bool = hasUint8ClampedArraySupport();
	* // returns <boolean>
	*/
	
	// MODULES //
	
	var hasUint8ClampedArraySupport = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = hasUint8ClampedArraySupport;
	
	},{"./main.js":74}],74:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isUint8ClampedArray = require( '@stdlib/assert/is-uint8clampedarray' );
	var GlobalUint8ClampedArray = require( './uint8clampedarray.js' );
	
	
	// MAIN //
	
	/**
	* Tests for native `Uint8ClampedArray` support.
	*
	* @returns {boolean} boolean indicating if an environment has `Uint8ClampedArray` support
	*
	* @example
	* var bool = hasUint8ClampedArraySupport();
	* // returns <boolean>
	*/
	function hasUint8ClampedArraySupport() { // eslint-disable-line id-length
		var bool;
		var arr;
	
		if ( typeof GlobalUint8ClampedArray !== 'function' ) {
			return false;
		}
		// Test basic support...
		try {
			arr = new GlobalUint8ClampedArray( [ -1, 0, 1, 3.14, 4.99, 255, 256 ] );
			bool = (
				isUint8ClampedArray( arr ) &&
				arr[ 0 ] === 0 &&   // clamped
				arr[ 1 ] === 0 &&
				arr[ 2 ] === 1 &&
				arr[ 3 ] === 3 &&   // round to nearest
				arr[ 4 ] === 5 &&   // round to nearest
				arr[ 5 ] === 255 &&
				arr[ 6 ] === 255    // clamped
			);
		} catch ( err ) { // eslint-disable-line no-unused-vars
			bool = false;
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = hasUint8ClampedArraySupport;
	
	},{"./uint8clampedarray.js":75,"@stdlib/assert/is-uint8clampedarray":163}],75:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var main = ( typeof Uint8ClampedArray === 'function' ) ? Uint8ClampedArray : null; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{}],76:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test whether a value has in its prototype chain a specified constructor as a prototype property.
	*
	* @module @stdlib/assert/instance-of
	*
	* @example
	* var instanceOf = require( '@stdlib/assert/instance-of' );
	*
	* var bool = instanceOf( [], Array );
	* // returns true
	*
	* bool = instanceOf( {}, Object ); // exception
	* // returns true
	*
	* bool = instanceOf( 'beep', String );
	* // returns false
	*
	* bool = instanceOf( null, Object );
	* // returns false
	*
	* bool = instanceOf( 5, Object );
	* // returns false
	*/
	
	// MODULES //
	
	var instanceOf = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = instanceOf;
	
	},{"./main.js":77}],77:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Tests whether a value has in its prototype chain a specified constructor as a prototype property.
	*
	* @param {*} value - value to test
	* @param {Function} constructor - constructor to test against
	* @throws {TypeError} constructor must be callable
	* @returns {boolean} boolean indicating whether a value is an instance of a provided constructor
	*
	* @example
	* var bool = instanceOf( [], Array );
	* // returns true
	*
	* @example
	* var bool = instanceOf( {}, Object ); // exception
	* // returns true
	*
	* @example
	* var bool = instanceOf( 'beep', String );
	* // returns false
	*
	* @example
	* var bool = instanceOf( null, Object );
	* // returns false
	*
	* @example
	* var bool = instanceOf( 5, Object );
	* // returns false
	*/
	function instanceOf( value, constructor ) {
		// TODO: replace with `isCallable` check
		if ( typeof constructor !== 'function' ) {
			throw new TypeError( 'invalid argument. `constructor` argument must be callable. Value: `'+constructor+'`.' );
		}
		return ( value instanceof constructor );
	}
	
	
	// EXPORTS //
	
	module.exports = instanceOf;
	
	},{}],78:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isArguments = require( './main.js' );
	
	
	// VARIABLES //
	
	var bool;
	
	
	// FUNCTIONS //
	
	/**
	* Detects whether an environment returns the expected internal class of the `arguments` object.
	*
	* @private
	* @returns {boolean} boolean indicating whether an environment behaves as expected
	*
	* @example
	* var bool = detect();
	* // returns <boolean>
	*/
	function detect() {
		return isArguments( arguments );
	}
	
	
	// MAIN //
	
	bool = detect();
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{"./main.js":80}],79:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an `arguments` object.
	*
	* @module @stdlib/assert/is-arguments
	*
	* @example
	* var isArguments = require( '@stdlib/assert/is-arguments' );
	*
	* function foo() {
	*     return arguments;
	* }
	*
	* var bool = isArguments( foo() );
	* // returns true
	*
	* bool = isArguments( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var hasArgumentsClass = require( './detect.js' );
	var main = require( './main.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var isArguments;
	if ( hasArgumentsClass ) {
		isArguments = main;
	} else {
		isArguments = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = isArguments;
	
	},{"./detect.js":78,"./main.js":80,"./polyfill.js":81}],80:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// MAIN //
	
	/**
	* Tests whether a value is an `arguments` object.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is an `arguments` object
	*
	* @example
	* function foo() {
	*     return arguments;
	* }
	*
	* var bool = isArguments( foo() );
	* // returns true
	*
	* @example
	* var bool = isArguments( [] );
	* // returns false
	*/
	function isArguments( value ) {
		return ( nativeClass( value ) === '[object Arguments]' );
	}
	
	
	// EXPORTS //
	
	module.exports = isArguments;
	
	},{"@stdlib/utils/native-class":295}],81:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
	var isArray = require( '@stdlib/assert/is-array' );
	var isInteger = require( '@stdlib/math/base/assert/is-integer' );
	var MAX_LENGTH = require( '@stdlib/constants/math/uint32-max' );
	
	
	// MAIN //
	
	/**
	* Tests whether a value is an `arguments` object.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is an `arguments` object
	*
	* @example
	* function foo() {
	*     return arguments;
	* }
	*
	* var bool = isArguments( foo() );
	* // returns true
	*
	* @example
	* var bool = isArguments( [] );
	* // returns false
	*/
	function isArguments( value ) {
		return (
			value !== null &&
			typeof value === 'object' &&
			!isArray( value ) &&
			typeof value.length === 'number' &&
			isInteger( value.length ) &&
			value.length >= 0 &&
			value.length <= MAX_LENGTH &&
			hasOwnProp( value, 'callee' ) &&
			!isEnumerableProperty( value, 'callee' )
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isArguments;
	
	},{"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-array":84,"@stdlib/assert/is-enumerable-property":97,"@stdlib/constants/math/uint32-max":192,"@stdlib/math/base/assert/is-integer":196}],82:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is array-like.
	*
	* @module @stdlib/assert/is-array-like
	*
	* @example
	* var isArrayLike = require( '@stdlib/assert/is-array-like' );
	*
	* var bool = isArrayLike( [] );
	* // returns true
	*
	* bool = isArrayLike( { 'length': 10 } );
	* // returns true
	*
	* bool = isArrayLike( 'beep' );
	* // returns true
	*/
	
	// MODULES //
	
	var isArrayLike = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isArrayLike;
	
	},{"./main.js":83}],83:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInteger = require( '@stdlib/math/base/assert/is-integer' );
	var MAX_LENGTH = require( '@stdlib/constants/array/max-array-length' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is array-like.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is array-like
	*
	* @example
	* var bool = isArrayLike( [] );
	* // returns true
	*
	* @example
	* var bool = isArrayLike( {'length':10} );
	* // returns true
	*/
	function isArrayLike( value ) {
		return (
			value !== void 0 &&
			value !== null &&
			typeof value !== 'function' &&
			typeof value.length === 'number' &&
			isInteger( value.length ) &&
			value.length >= 0 &&
			value.length <= MAX_LENGTH
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isArrayLike;
	
	},{"@stdlib/constants/array/max-array-length":179,"@stdlib/math/base/assert/is-integer":196}],84:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an array.
	*
	* @module @stdlib/assert/is-array
	*
	* @example
	* var isArray = require( '@stdlib/assert/is-array' );
	*
	* var bool = isArray( [] );
	* // returns true
	*
	* bool = isArray( {} );
	* // returns false
	*/
	
	// MODULES //
	
	var isArray = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isArray;
	
	},{"./main.js":85}],85:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var f;
	
	
	// FUNCTIONS //
	
	/**
	* Tests if a value is an array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an array
	*
	* @example
	* var bool = isArray( [] );
	* // returns true
	*
	* @example
	* var bool = isArray( {} );
	* // returns false
	*/
	function isArray( value ) {
		return ( nativeClass( value ) === '[object Array]' );
	}
	
	
	// MAIN //
	
	if ( Array.isArray ) {
		f = Array.isArray;
	} else {
		f = isArray;
	}
	
	
	// EXPORTS //
	
	module.exports = f;
	
	},{"@stdlib/utils/native-class":295}],86:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a boolean.
	*
	* @module @stdlib/assert/is-boolean
	*
	* @example
	* var isBoolean = require( '@stdlib/assert/is-boolean' );
	*
	* var bool = isBoolean( false );
	* // returns true
	*
	* bool = isBoolean( new Boolean( false ) );
	* // returns true
	*
	* @example
	* // Use interface to check for boolean primitives...
	* var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
	*
	* var bool = isBoolean( false );
	* // returns true
	*
	* bool = isBoolean( new Boolean( true ) );
	* // returns false
	*
	* @example
	* // Use interface to check for boolean objects...
	* var isBoolean = require( '@stdlib/assert/is-boolean' ).isObject;
	*
	* var bool = isBoolean( true );
	* // returns false
	*
	* bool = isBoolean( new Boolean( false ) );
	* // returns true
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isBoolean = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isBoolean, 'isPrimitive', isPrimitive );
	setReadOnly( isBoolean, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isBoolean;
	
	},{"./main.js":87,"./object.js":88,"./primitive.js":89,"@stdlib/utils/define-nonenumerable-read-only-property":256}],87:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a boolean.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a boolean
	*
	* @example
	* var bool = isBoolean( false );
	* // returns true
	*
	* @example
	* var bool = isBoolean( true );
	* // returns true
	*
	* @example
	* var bool = isBoolean( new Boolean( false ) );
	* // returns true
	*
	* @example
	* var bool = isBoolean( new Boolean( true ) );
	* // returns true
	*/
	function isBoolean( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isBoolean;
	
	},{"./object.js":88,"./primitive.js":89}],88:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasToStringTag = require( '@stdlib/assert/has-tostringtag-support' );
	var nativeClass = require( '@stdlib/utils/native-class' );
	var test = require( './try2serialize.js' );
	
	
	// VARIABLES //
	
	var FLG = hasToStringTag();
	
	
	// MAIN //
	
	/**
	* Tests if a value is a boolean object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a boolean object
	*
	* @example
	* var bool = isBoolean( true );
	* // returns false
	*
	* @example
	* var bool = isBoolean( new Boolean( false ) );
	* // returns true
	*/
	function isBoolean( value ) {
		if ( typeof value === 'object' ) {
			if ( value instanceof Boolean ) {
				return true;
			}
			if ( FLG ) {
				return test( value );
			}
			return ( nativeClass( value ) === '[object Boolean]' );
		}
		return false;
	}
	
	
	// EXPORTS //
	
	module.exports = isBoolean;
	
	},{"./try2serialize.js":91,"@stdlib/assert/has-tostringtag-support":62,"@stdlib/utils/native-class":295}],89:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Tests if a value is a boolean primitive.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a boolean primitive
	*
	* @example
	* var bool = isBoolean( true );
	* // returns true
	*
	* @example
	* var bool = isBoolean( false );
	* // returns true
	*
	* @example
	* var bool = isBoolean( new Boolean( true ) );
	* // returns false
	*/
	function isBoolean( value ) {
		return ( typeof value === 'boolean' );
	}
	
	
	// EXPORTS //
	
	module.exports = isBoolean;
	
	},{}],90:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// eslint-disable-next-line stdlib/no-redeclare
	var toString = Boolean.prototype.toString; // non-generic
	
	
	// EXPORTS //
	
	module.exports = toString;
	
	},{}],91:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var toString = require( './tostring.js' ); // eslint-disable-line stdlib/no-redeclare
	
	
	// MAIN //
	
	/**
	* Attempts to serialize a value to a string.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value can be serialized
	*/
	function test( value ) {
		try {
			toString.call( value );
			return true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = test;
	
	},{"./tostring.js":90}],92:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a Buffer instance.
	*
	* @module @stdlib/assert/is-buffer
	*
	* @example
	* var isBuffer = require( '@stdlib/assert/is-buffer' );
	*
	* var v = isBuffer( new Buffer( 'beep' ) );
	* // returns true
	*
	* v = isBuffer( {} );
	* // returns false
	*/
	
	// MODULES //
	
	var isBuffer = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isBuffer;
	
	},{"./main.js":93}],93:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isObjectLike = require( '@stdlib/assert/is-object-like' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a Buffer instance.
	*
	* @param {*} value - value to validate
	* @returns {boolean} boolean indicating if a value is a Buffer instance
	*
	* @example
	* var v = isBuffer( new Buffer( 'beep' ) );
	* // returns true
	*
	* @example
	* var v = isBuffer( new Buffer( [1,2,3,4] ) );
	* // returns true
	*
	* @example
	* var v = isBuffer( {} );
	* // returns false
	*
	* @example
	* var v = isBuffer( [] );
	* // returns false
	*/
	function isBuffer( value ) {
		return (
			isObjectLike( value ) &&
			(
				// eslint-disable-next-line no-underscore-dangle
				value._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
				(
					value.constructor &&
	
					// WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
					typeof value.constructor.isBuffer === 'function' &&
					value.constructor.isBuffer( value )
				)
			)
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isBuffer;
	
	},{"@stdlib/assert/is-object-like":133}],94:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a collection.
	*
	* @module @stdlib/assert/is-collection
	*
	* @example
	* var isCollection = require( '@stdlib/assert/is-collection' );
	*
	* var bool = isCollection( [] );
	* // returns true
	*
	* bool = isCollection( {} );
	* // returns false
	*/
	
	// MODULES //
	
	var isCollection = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isCollection;
	
	},{"./main.js":95}],95:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInteger = require( '@stdlib/math/base/assert/is-integer' );
	var MAX_LENGTH = require( '@stdlib/constants/array/max-typed-array-length' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a collection.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is a collection
	*
	* @example
	* var bool = isCollection( [] );
	* // returns true
	*
	* @example
	* var bool = isCollection( {} );
	* // returns false
	*/
	function isCollection( value ) {
		return (
			typeof value === 'object' &&
			value !== null &&
			typeof value.length === 'number' &&
			isInteger( value.length ) &&
			value.length >= 0 &&
			value.length <= MAX_LENGTH
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isCollection;
	
	},{"@stdlib/constants/array/max-typed-array-length":180,"@stdlib/math/base/assert/is-integer":196}],96:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isEnum = require( './native.js' );
	
	
	// VARIABLES //
	
	var bool;
	
	
	// FUNCTIONS //
	
	/**
	* Detects whether an environment has a bug where String indices are not detected as "enumerable" properties. Observed in Node v0.10.
	*
	* @private
	* @returns {boolean} boolean indicating whether an environment has the bug
	*/
	function detect() {
		return !isEnum.call( 'beep', '0' );
	}
	
	
	// MAIN //
	
	bool = detect();
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{"./native.js":99}],97:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test whether an object's own property is enumerable.
	*
	* @module @stdlib/assert/is-enumerable-property
	*
	* @example
	* var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
	*
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'boop' );
	* // returns true
	*
	* bool = isEnumerableProperty( beep, 'hasOwnProperty' );
	* // returns false
	*/
	
	// MODULES //
	
	var isEnumerableProperty = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isEnumerableProperty;
	
	},{"./main.js":98}],98:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isString = require( '@stdlib/assert/is-string' );
	var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;
	var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
	var isEnum = require( './native.js' );
	var hasStringEnumBug = require( './has_string_enumerability_bug.js' );
	
	
	// MAIN //
	
	/**
	* Tests if an object's own property is enumerable.
	*
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object property is enumerable
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'hasOwnProperty' );
	* // returns false
	*/
	function isEnumerableProperty( value, property ) {
		var bool;
		if (
			value === void 0 ||
			value === null
		) {
			return false;
		}
		bool = isEnum.call( value, property );
		if ( !bool && hasStringEnumBug && isString( value ) ) {
			// Note: we only check for indices, as properties attached to a `String` object are properly detected as enumerable above.
			property = +property;
			return (
				!isnan( property ) &&
				isInteger( property ) &&
				property >= 0 &&
				property < value.length
			);
		}
		return bool;
	}
	
	
	// EXPORTS //
	
	module.exports = isEnumerableProperty;
	
	},{"./has_string_enumerability_bug.js":96,"./native.js":99,"@stdlib/assert/is-integer":114,"@stdlib/assert/is-nan":119,"@stdlib/assert/is-string":147}],99:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Tests if an object's own property is enumerable.
	*
	* @private
	* @name isEnumerableProperty
	* @type {Function}
	* @param {*} value - value to test
	* @param {*} property - property to test
	* @returns {boolean} boolean indicating if an object property is enumerable
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'boop' );
	* // returns true
	*
	* @example
	* var beep = {
	*     'boop': true
	* };
	*
	* var bool = isEnumerableProperty( beep, 'hasOwnProperty' );
	* // returns false
	*/
	var isEnumerableProperty = Object.prototype.propertyIsEnumerable;
	
	
	// EXPORTS //
	
	module.exports = isEnumerableProperty;
	
	},{}],100:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an `Error` object.
	*
	* @module @stdlib/assert/is-error
	*
	* @example
	* var isError = require( '@stdlib/assert/is-error' );
	*
	* var bool = isError( new Error( 'beep' ) );
	* // returns true
	*
	* bool = isError( {} );
	* // returns false
	*/
	
	// MODULES //
	
	var isError = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isError;
	
	},{"./main.js":101}],101:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is an `Error` object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is an `Error` object
	*
	* @example
	* var bool = isError( new Error( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = isError( {} );
	* // returns false
	*/
	function isError( value ) {
		if ( typeof value !== 'object' || value === null ) {
			return false;
		}
		// Check for `Error` objects from the same realm (same Node.js `vm` or same `Window` object)...
		if ( value instanceof Error ) {
			return true;
		}
		// Walk the prototype tree until we find an object having the desired native class...
		while ( value ) {
			if ( nativeClass( value ) === '[object Error]' ) {
				return true;
			}
			value = getPrototypeOf( value );
		}
		return false;
	}
	
	
	// EXPORTS //
	
	module.exports = isError;
	
	},{"@stdlib/utils/get-prototype-of":267,"@stdlib/utils/native-class":295}],102:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a Float32Array.
	*
	* @module @stdlib/assert/is-float32array
	*
	* @example
	* var isFloat32Array = require( '@stdlib/assert/is-float32array' );
	*
	* var bool = isFloat32Array( new Float32Array( 10 ) );
	* // returns true
	*
	* bool = isFloat32Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isFloat32Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isFloat32Array;
	
	},{"./main.js":103}],103:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasFloat32Array = ( typeof Float32Array === 'function' );// eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is a Float32Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Float32Array
	*
	* @example
	* var bool = isFloat32Array( new Float32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isFloat32Array( [] );
	* // returns false
	*/
	function isFloat32Array( value ) {
		return (
			( hasFloat32Array && value instanceof Float32Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Float32Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isFloat32Array;
	
	},{"@stdlib/utils/native-class":295}],104:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a Float64Array.
	*
	* @module @stdlib/assert/is-float64array
	*
	* @example
	* var isFloat64Array = require( '@stdlib/assert/is-float64array' );
	*
	* var bool = isFloat64Array( new Float64Array( 10 ) );
	* // returns true
	*
	* bool = isFloat64Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isFloat64Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isFloat64Array;
	
	},{"./main.js":105}],105:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasFloat64Array = ( typeof Float64Array === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is a Float64Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Float64Array
	*
	* @example
	* var bool = isFloat64Array( new Float64Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isFloat64Array( [] );
	* // returns false
	*/
	function isFloat64Array( value ) {
		return (
			( hasFloat64Array && value instanceof Float64Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Float64Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isFloat64Array;
	
	},{"@stdlib/utils/native-class":295}],106:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a function.
	*
	* @module @stdlib/assert/is-function
	*
	* @example
	* var isFunction = require( '@stdlib/assert/is-function' );
	*
	* function beep() {
	*     return 'beep';
	* }
	*
	* var bool = isFunction( beep );
	* // returns true
	*/
	
	// MODULES //
	
	var isFunction = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isFunction;
	
	},{"./main.js":107}],107:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var typeOf = require( '@stdlib/utils/type-of' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a function.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a function
	*
	* @example
	* function beep() {
	*     return 'beep';
	* }
	*
	* var bool = isFunction( beep );
	* // returns true
	*/
	function isFunction( value ) {
		// Note: cannot use `typeof` directly, as various browser engines incorrectly return `'function'` when operating on non-function objects, such as regular expressions and NodeLists.
		return ( typeOf( value ) === 'function' );
	}
	
	
	// EXPORTS //
	
	module.exports = isFunction;
	
	},{"@stdlib/utils/type-of":316}],108:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an Int16Array.
	*
	* @module @stdlib/assert/is-int16array
	*
	* @example
	* var isInt16Array = require( '@stdlib/assert/is-int16array' );
	*
	* var bool = isInt16Array( new Int16Array( 10 ) );
	* // returns true
	*
	* bool = isInt16Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isInt16Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isInt16Array;
	
	},{"./main.js":109}],109:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasInt16Array = ( typeof Int16Array === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is an Int16Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an Int16Array
	*
	* @example
	* var bool = isInt16Array( new Int16Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isInt16Array( [] );
	* // returns false
	*/
	function isInt16Array( value ) {
		return (
			( hasInt16Array && value instanceof Int16Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Int16Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isInt16Array;
	
	},{"@stdlib/utils/native-class":295}],110:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an Int32Array.
	*
	* @module @stdlib/assert/is-int32array
	*
	* @example
	* var isInt32Array = require( '@stdlib/assert/is-int32array' );
	*
	* var bool = isInt32Array( new Int32Array( 10 ) );
	* // returns true
	*
	* bool = isInt32Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isInt32Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isInt32Array;
	
	},{"./main.js":111}],111:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasInt32Array = ( typeof Int32Array === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is an Int32Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an Int32Array
	*
	* @example
	* var bool = isInt32Array( new Int32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isInt32Array( [] );
	* // returns false
	*/
	function isInt32Array( value ) {
		return (
			( hasInt32Array && value instanceof Int32Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Int32Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isInt32Array;
	
	},{"@stdlib/utils/native-class":295}],112:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an Int8Array.
	*
	* @module @stdlib/assert/is-int8array
	*
	* @example
	* var isInt8Array = require( '@stdlib/assert/is-int8array' );
	*
	* var bool = isInt8Array( new Int8Array( 10 ) );
	* // returns true
	*
	* bool = isInt8Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isInt8Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isInt8Array;
	
	},{"./main.js":113}],113:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasInt8Array = ( typeof Int8Array === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is an Int8Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an Int8Array
	*
	* @example
	* var bool = isInt8Array( new Int8Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isInt8Array( [] );
	* // returns false
	*/
	function isInt8Array( value ) {
		return (
			( hasInt8Array && value instanceof Int8Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Int8Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isInt8Array;
	
	},{"@stdlib/utils/native-class":295}],114:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an integer.
	*
	* @module @stdlib/assert/is-integer
	*
	* @example
	* var isInteger = require( '@stdlib/assert/is-integer' );
	*
	* var bool = isInteger( 5.0 );
	* // returns true
	*
	* bool = isInteger( new Number( 5.0 ) );
	* // returns true
	*
	* bool = isInteger( -3.14 );
	* // returns false
	*
	* bool = isInteger( null );
	* // returns false
	*
	* @example
	* // Use interface to check for integer primitives...
	* var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
	*
	* var bool = isInteger( -3.0 );
	* // returns true
	*
	* bool = isInteger( new Number( -3.0 ) );
	* // returns false
	*
	* @example
	* // Use interface to check for integer objects...
	* var isInteger = require( '@stdlib/assert/is-integer' ).isObject;
	*
	* var bool = isInteger( 3.0 );
	* // returns false
	*
	* bool = isInteger( new Number( 3.0 ) );
	* // returns true
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isInteger = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isInteger, 'isPrimitive', isPrimitive );
	setReadOnly( isInteger, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isInteger;
	
	},{"./main.js":116,"./object.js":117,"./primitive.js":118,"@stdlib/utils/define-nonenumerable-read-only-property":256}],115:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var PINF = require( '@stdlib/constants/math/float64-pinf' );
	var NINF = require( '@stdlib/constants/math/float64-ninf' );
	var isInt = require( '@stdlib/math/base/assert/is-integer' );
	
	
	// MAIN //
	
	/**
	* Tests if a number primitive is an integer value.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a number primitive is an integer value
	*/
	function isInteger( value ) {
		return (
			value < PINF &&
			value > NINF &&
			isInt( value )
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isInteger;
	
	},{"@stdlib/constants/math/float64-ninf":182,"@stdlib/constants/math/float64-pinf":183,"@stdlib/math/base/assert/is-integer":196}],116:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is an integer.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an integer
	*
	* @example
	* var bool = isInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isInteger( -3.14 );
	* // returns false
	*
	* @example
	* var bool = isInteger( null );
	* // returns false
	*/
	function isInteger( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isInteger;
	
	},{"./object.js":117,"./primitive.js":118}],117:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isNumber = require( '@stdlib/assert/is-number' ).isObject;
	var isInt = require( './integer.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number object having an integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having an integer value
	*
	* @example
	* var bool = isInteger( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isInteger( new Number( 3.0 ) );
	* // returns true
	*/
	function isInteger( value ) {
		return (
			isNumber( value ) &&
			isInt( value.valueOf() )
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isInteger;
	
	},{"./integer.js":115,"@stdlib/assert/is-number":127}],118:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	var isInt = require( './integer.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number primitive having an integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive having an integer value
	*
	* @example
	* var bool = isInteger( -3.0 );
	* // returns true
	*
	* @example
	* var bool = isInteger( new Number( -3.0 ) );
	* // returns false
	*/
	function isInteger( value ) {
		return (
			isNumber( value ) &&
			isInt( value )
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isInteger;
	
	},{"./integer.js":115,"@stdlib/assert/is-number":127}],119:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is `NaN`.
	*
	* @module @stdlib/assert/is-nan
	*
	* @example
	* var isnan = require( '@stdlib/assert/is-nan' );
	*
	* var bool = isnan( NaN );
	* // returns true
	*
	* bool = isnan( new Number( NaN ) );
	* // returns true
	*
	* bool = isnan( 3.14 );
	* // returns false
	*
	* bool = isnan( null );
	* // returns false
	*
	* @example
	* var isnan = require( '@stdlib/assert/is-nan' ).isPrimitive;
	*
	* var bool = isnan( NaN );
	* // returns true
	*
	* bool = isnan( 3.14 );
	* // returns false
	*
	* bool = isnan( new Number( NaN ) );
	* // returns false
	*
	* @example
	* var isnan = require( '@stdlib/assert/is-nan' ).isObject;
	*
	* var bool = isnan( NaN );
	* // returns false
	*
	* bool = isnan( new Number( NaN ) );
	* // returns true
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isnan = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isnan, 'isPrimitive', isPrimitive );
	setReadOnly( isnan, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isnan;
	
	},{"./main.js":120,"./object.js":121,"./primitive.js":122,"@stdlib/utils/define-nonenumerable-read-only-property":256}],120:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is `NaN`.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( new Number( NaN ) );
	* // returns true
	*
	* @example
	* var bool = isnan( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isnan( null );
	* // returns false
	*/
	function isnan( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isnan;
	
	},{"./object.js":121,"./primitive.js":122}],121:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isNumber = require( '@stdlib/assert/is-number' ).isObject;
	var isNan = require( '@stdlib/math/base/assert/is-nan' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number object having a value of `NaN`.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having a value of `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns false
	*
	* @example
	* var bool = isnan( new Number( NaN ) );
	* // returns true
	*/
	function isnan( value ) {
		return (
			isNumber( value ) &&
			isNan( value.valueOf() )
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isnan;
	
	},{"@stdlib/assert/is-number":127,"@stdlib/math/base/assert/is-nan":198}],122:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	var isNan = require( '@stdlib/math/base/assert/is-nan' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a `NaN` number primitive.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a `NaN` number primitive
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isnan( new Number( NaN ) );
	* // returns false
	*/
	function isnan( value ) {
		return (
			isNumber( value ) &&
			isNan( value )
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isnan;
	
	},{"@stdlib/assert/is-number":127,"@stdlib/math/base/assert/is-nan":198}],123:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a nonnegative integer.
	*
	* @module @stdlib/assert/is-nonnegative-integer
	*
	* @example
	* var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' );
	*
	* var bool = isNonNegativeInteger( 5.0 );
	* // returns true
	*
	* bool = isNonNegativeInteger( new Number( 5.0 ) );
	* // returns true
	*
	* bool = isNonNegativeInteger( -5.0 );
	* // returns false
	*
	* bool = isNonNegativeInteger( 3.14 );
	* // returns false
	*
	* bool = isNonNegativeInteger( null );
	* // returns false
	*
	* @example
	* var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
	*
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns true
	*
	* bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns false
	*
	* @example
	* var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isObject;
	*
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns false
	*
	* bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns true
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isNonNegativeInteger = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isNonNegativeInteger, 'isPrimitive', isPrimitive );
	setReadOnly( isNonNegativeInteger, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isNonNegativeInteger;
	
	},{"./main.js":124,"./object.js":125,"./primitive.js":126,"@stdlib/utils/define-nonenumerable-read-only-property":256}],124:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a nonnegative integer.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a nonnegative integer
	*
	* @example
	* var bool = isNonNegativeInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeInteger( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeInteger( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeInteger( null );
	* // returns false
	*/
	function isNonNegativeInteger( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isNonNegativeInteger;
	
	},{"./object.js":125,"./primitive.js":126}],125:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInteger = require( '@stdlib/assert/is-integer' ).isObject;
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number object having a nonnegative integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having a nonnegative integer value
	*
	* @example
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns true
	*/
	function isNonNegativeInteger( value ) {
		return (
			isInteger( value ) &&
			value.valueOf() >= 0
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isNonNegativeInteger;
	
	},{"@stdlib/assert/is-integer":114}],126:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number primitive having a nonnegative integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive having a nonnegative integer value
	*
	* @example
	* var bool = isNonNegativeInteger( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isNonNegativeInteger( new Number( 3.0 ) );
	* // returns false
	*/
	function isNonNegativeInteger( value ) {
		return (
			isInteger( value ) &&
			value >= 0
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isNonNegativeInteger;
	
	},{"@stdlib/assert/is-integer":114}],127:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a number.
	*
	* @module @stdlib/assert/is-number
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' );
	*
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*
	* bool = isNumber( NaN );
	* // returns true
	*
	* bool = isNumber( null );
	* // returns false
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	*
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* bool = isNumber( NaN );
	* // returns true
	*
	* bool = isNumber( new Number( 3.14 ) );
	* // returns false
	*
	* @example
	* var isNumber = require( '@stdlib/assert/is-number' ).isObject;
	*
	* var bool = isNumber( 3.14 );
	* // returns false
	*
	* bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isNumber = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isNumber, 'isPrimitive', isPrimitive );
	setReadOnly( isNumber, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isNumber;
	
	},{"./main.js":128,"./object.js":129,"./primitive.js":130,"@stdlib/utils/define-nonenumerable-read-only-property":256}],128:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a number
	*
	* @example
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*
	* @example
	* var bool = isNumber( NaN );
	* // returns true
	*
	* @example
	* var bool = isNumber( null );
	* // returns false
	*/
	function isNumber( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isNumber;
	
	},{"./object.js":129,"./primitive.js":130}],129:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasToStringTag = require( '@stdlib/assert/has-tostringtag-support' );
	var nativeClass = require( '@stdlib/utils/native-class' );
	var Number = require( '@stdlib/number/ctor' );
	var test = require( './try2serialize.js' );
	
	
	// VARIABLES //
	
	var FLG = hasToStringTag();
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object
	*
	* @example
	* var bool = isNumber( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isNumber( new Number( 3.14 ) );
	* // returns true
	*/
	function isNumber( value ) {
		if ( typeof value === 'object' ) {
			if ( value instanceof Number ) {
				return true;
			}
			if ( FLG ) {
				return test( value );
			}
			return ( nativeClass( value ) === '[object Number]' );
		}
		return false;
	}
	
	
	// EXPORTS //
	
	module.exports = isNumber;
	
	},{"./try2serialize.js":132,"@stdlib/assert/has-tostringtag-support":62,"@stdlib/number/ctor":212,"@stdlib/utils/native-class":295}],130:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Tests if a value is a number primitive.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive
	*
	* @example
	* var bool = isNumber( 3.14 );
	* // returns true
	*
	* @example
	* var bool = isNumber( NaN );
	* // returns true
	*
	* @example
	* var bool = isNumber( new Number( 3.14 ) );
	* // returns false
	*/
	function isNumber( value ) {
		return ( typeof value === 'number' );
	}
	
	
	// EXPORTS //
	
	module.exports = isNumber;
	
	},{}],131:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var Number = require( '@stdlib/number/ctor' );
	
	
	// MAIN //
	
	// eslint-disable-next-line stdlib/no-redeclare
	var toString = Number.prototype.toString; // non-generic
	
	
	// EXPORTS //
	
	module.exports = toString;
	
	},{"@stdlib/number/ctor":212}],132:[function(require,module,exports){
	arguments[4][91][0].apply(exports,arguments)
	},{"./tostring.js":131,"dup":91}],133:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is object-like.
	*
	* @module @stdlib/assert/is-object-like
	*
	* @example
	* var isObjectLike = require( '@stdlib/assert/is-object-like' );
	*
	* var bool = isObjectLike( {} );
	* // returns true
	*
	* bool = isObjectLike( [] );
	* // returns true
	*
	* bool = isObjectLike( null );
	* // returns false
	*
	* @example
	* var isObjectLike = require( '@stdlib/assert/is-object-like' ).isObjectLikeArray;
	*
	* var bool = isObjectLike( [ {}, [] ] );
	* // returns true
	*
	* bool = isObjectLike( [ {}, '3.0' ] );
	* // returns false
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var arrayfun = require( '@stdlib/assert/tools/array-function' );
	var isObjectLike = require( './main.js' );
	
	
	// MAIN //
	
	setReadOnly( isObjectLike, 'isObjectLikeArray', arrayfun( isObjectLike ) );
	
	
	// EXPORTS //
	
	module.exports = isObjectLike;
	
	},{"./main.js":134,"@stdlib/assert/tools/array-function":168,"@stdlib/utils/define-nonenumerable-read-only-property":256}],134:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Tests if a value is object-like.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value is object-like
	*
	* @example
	* var bool = isObjectLike( {} );
	* // returns true
	*
	* @example
	* var bool = isObjectLike( [] );
	* // returns true
	*
	* @example
	* var bool = isObjectLike( null );
	* // returns false
	*/
	function isObjectLike( value ) {
		return (
			value !== null &&
			typeof value === 'object'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isObjectLike;
	
	},{}],135:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an object.
	*
	* @module @stdlib/assert/is-object
	*
	* @example
	* var isObject = require( '@stdlib/assert/is-object' );
	*
	* var bool = isObject( {} );
	* // returns true
	*
	* bool = isObject( true );
	* // returns false
	*/
	
	// MODULES //
	
	var isObject = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isObject;
	
	},{"./main.js":136}],136:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isArray = require( '@stdlib/assert/is-array' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is an object; e.g., `{}`.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is an object
	*
	* @example
	* var bool = isObject( {} );
	* // returns true
	*
	* @example
	* var bool = isObject( null );
	* // returns false
	*/
	function isObject( value ) {
		return (
			typeof value === 'object' &&
			value !== null &&
			!isArray( value )
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isObject;
	
	},{"@stdlib/assert/is-array":84}],137:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a plain object.
	*
	* @module @stdlib/assert/is-plain-object
	*
	* @example
	* var isPlainObject = require( '@stdlib/assert/is-plain-object' );
	*
	* var bool = isPlainObject( {} );
	* // returns true
	*
	* bool = isPlainObject( null );
	* // returns false
	*/
	
	// MODULES //
	
	var isPlainObject = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isPlainObject;
	
	},{"./main.js":138}],138:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isObject = require( '@stdlib/assert/is-object' );
	var isFunction = require( '@stdlib/assert/is-function' );
	var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var objectPrototype = Object.prototype;
	
	
	// FUNCTIONS //
	
	/**
	* Tests that an object only has own properties.
	*
	* @private
	* @param {Object} obj - value to test
	* @returns {boolean} boolean indicating if an object only has own properties
	*/
	function ownProps( obj ) {
		var key;
	
		// NOTE: possibility of perf boost if key enumeration order is known (see http://stackoverflow.com/questions/18531624/isplainobject-thing).
		for ( key in obj ) {
			if ( !hasOwnProp( obj, key ) ) {
				return false;
			}
		}
		return true;
	}
	
	
	// MAIN //
	
	/**
	* Tests if a value is a plain object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a plain object
	*
	* @example
	* var bool = isPlainObject( {} );
	* // returns true
	*
	* @example
	* var bool = isPlainObject( null );
	* // returns false
	*/
	function isPlainObject( value ) {
		var proto;
	
		// Screen for obvious non-objects...
		if ( !isObject( value ) ) {
			return false;
		}
		// Objects with no prototype (e.g., `Object.create( null )`) are plain...
		proto = getPrototypeOf( value );
		if ( !proto ) {
			return true;
		}
		// Objects having a prototype are plain if and only if they are constructed with a global `Object` function and the prototype points to the prototype of a plain object...
		return (
			// Cannot have own `constructor` property:
			!hasOwnProp( value, 'constructor' ) &&
	
			// Prototype `constructor` property must be a function (see also https://bugs.jquery.com/ticket/9897 and http://stackoverflow.com/questions/18531624/isplainobject-thing):
			hasOwnProp( proto, 'constructor' ) &&
			isFunction( proto.constructor ) &&
			nativeClass( proto.constructor ) === '[object Function]' &&
	
			// Test for object-specific method:
			hasOwnProp( proto, 'isPrototypeOf' ) &&
			isFunction( proto.isPrototypeOf ) &&
	
			(
				// Test if the prototype matches the global `Object` prototype (same realm):
				proto === objectPrototype ||
	
				// Test that all properties are own properties (cross-realm; *most* likely a plain object):
				ownProps( value )
			)
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isPlainObject;
	
	},{"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-function":106,"@stdlib/assert/is-object":135,"@stdlib/utils/get-prototype-of":267,"@stdlib/utils/native-class":295}],139:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a positive integer.
	*
	* @module @stdlib/assert/is-positive-integer
	*
	* @example
	* var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' );
	*
	* var bool = isPositiveInteger( 5.0 );
	* // returns true
	*
	* bool = isPositiveInteger( new Number( 5.0 ) );
	* // returns true
	*
	* bool = isPositiveInteger( -5.0 );
	* // returns false
	*
	* bool = isPositiveInteger( 3.14 );
	* // returns false
	*
	* bool = isPositiveInteger( null );
	* // returns false
	*
	* @example
	* var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
	*
	* var bool = isPositiveInteger( 3.0 );
	* // returns true
	*
	* bool = isPositiveInteger( new Number( 3.0 ) );
	* // returns false
	*
	* @example
	* var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isObject;
	*
	* var bool = isPositiveInteger( 3.0 );
	* // returns false
	*
	* bool = isPositiveInteger( new Number( 3.0 ) );
	* // returns true
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isPositiveInteger = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isPositiveInteger, 'isPrimitive', isPrimitive );
	setReadOnly( isPositiveInteger, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isPositiveInteger;
	
	},{"./main.js":140,"./object.js":141,"./primitive.js":142,"@stdlib/utils/define-nonenumerable-read-only-property":256}],140:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a positive integer.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a positive integer
	*
	* @example
	* var bool = isPositiveInteger( 5.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveInteger( new Number( 5.0 ) );
	* // returns true
	*
	* @example
	* var bool = isPositiveInteger( 0.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveInteger( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveInteger( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isPositiveInteger( null );
	* // returns false
	*/
	function isPositiveInteger( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isPositiveInteger;
	
	},{"./object.js":141,"./primitive.js":142}],141:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInteger = require( '@stdlib/assert/is-integer' ).isObject;
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number object having a positive integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having a positive integer value
	*
	* @example
	* var bool = isPositiveInteger( 3.0 );
	* // returns false
	*
	* @example
	* var bool = isPositiveInteger( new Number( 3.0 ) );
	* // returns true
	*/
	function isPositiveInteger( value ) {
		return (
			isInteger( value ) &&
			value.valueOf() > 0.0
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isPositiveInteger;
	
	},{"@stdlib/assert/is-integer":114}],142:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number primitive having a positive integer value.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive having a positive integer value
	*
	* @example
	* var bool = isPositiveInteger( 3.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveInteger( new Number( 3.0 ) );
	* // returns false
	*/
	function isPositiveInteger( value ) {
		return (
			isInteger( value ) &&
			value > 0.0
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isPositiveInteger;
	
	},{"@stdlib/assert/is-integer":114}],143:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a probability.
	*
	* @module @stdlib/assert/is-probability
	*
	* @example
	* var isProbability = require( '@stdlib/assert/is-probability' );
	*
	* var bool = isProbability( 0.5 );
	* // returns true
	*
	* bool = isProbability( new Number( 0.5 ) );
	* // returns true
	*
	* bool = isProbability( 3.14 );
	* // returns false
	*
	* bool = isProbability( -5.0 );
	* // returns false
	*
	* bool = isProbability( null );
	* // returns false
	*
	* @example
	* var isProbability = require( '@stdlib/assert/is-probability' ).isPrimitive;
	*
	* var bool = isProbability( 0.3 );
	* // returns true
	*
	* bool = isProbability( new Number( 0.3 ) );
	* // returns false
	*
	* @example
	* var isProbability = require( '@stdlib/assert/is-probability' ).isObject;
	*
	* var bool = isProbability( 0.77 );
	* // returns false
	*
	* bool = isProbability( new Number( 0.77 ) );
	* // returns true
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isProbability = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isProbability, 'isPrimitive', isPrimitive );
	setReadOnly( isProbability, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isProbability;
	
	},{"./main.js":144,"./object.js":145,"./primitive.js":146,"@stdlib/utils/define-nonenumerable-read-only-property":256}],144:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a probability.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a probability
	*
	* @example
	* var bool = isProbability( 0.5 );
	* // returns true
	*
	* @example
	* var bool = isProbability( new Number( 0.5 ) );
	* // returns true
	*
	* @example
	* var bool = isProbability( 3.14 );
	* // returns false
	*
	* @example
	* var bool = isProbability( -5.0 );
	* // returns false
	*
	* @example
	* var bool = isProbability( null );
	* // returns false
	*/
	function isProbability( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isProbability;
	
	},{"./object.js":145,"./primitive.js":146}],145:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isNumber = require( '@stdlib/assert/is-number' ).isObject;
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number object having a value which is a probability.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number object having a value which is a probability
	*
	* @example
	* var bool = isProbability( 0.5 );
	* // returns false
	*
	* @example
	* var bool = isProbability( new Number( 0.5 ) );
	* // returns true
	*/
	function isProbability( value ) {
		return (
			isNumber( value ) &&
			value.valueOf() >= 0.0 &&
			value.valueOf() <= 1.0
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isProbability;
	
	},{"@stdlib/assert/is-number":127}],146:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	
	
	// MAIN //
	
	/**
	* Tests if a value is a number primitive having a value which is a probability.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a number primitive having a value which is a probability
	*
	* @example
	* var bool = isProbability( 0.66 );
	* // returns true
	*
	* @example
	* var bool = isProbability( new Number( 0.66 ) );
	* // returns false
	*/
	function isProbability( value ) {
		return (
			isNumber( value ) &&
			value >= 0.0 &&
			value <= 1.0
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isProbability;
	
	},{"@stdlib/assert/is-number":127}],147:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a string.
	*
	* @module @stdlib/assert/is-string
	*
	* @example
	* var isString = require( '@stdlib/assert/is-string' );
	*
	* var bool = isString( 'beep' );
	* // returns true
	*
	* bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* bool = isString( 5 );
	* // returns false
	*
	* @example
	* var isString = require( '@stdlib/assert/is-string' ).isObject;
	*
	* var bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* bool = isString( 'beep' );
	* // returns false
	*
	* @example
	* var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
	*
	* var bool = isString( 'beep' );
	* // returns true
	*
	* bool = isString( new String( 'beep' ) );
	* // returns false
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isString = require( './main.js' );
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	setReadOnly( isString, 'isPrimitive', isPrimitive );
	setReadOnly( isString, 'isObject', isObject );
	
	
	// EXPORTS //
	
	module.exports = isString;
	
	},{"./main.js":148,"./object.js":149,"./primitive.js":150,"@stdlib/utils/define-nonenumerable-read-only-property":256}],148:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPrimitive = require( './primitive.js' );
	var isObject = require( './object.js' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is a string.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a string
	*
	* @example
	* var bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = isString( 'beep' );
	* // returns true
	*/
	function isString( value ) {
		return ( isPrimitive( value ) || isObject( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = isString;
	
	},{"./object.js":149,"./primitive.js":150}],149:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasToStringTag = require( '@stdlib/assert/has-tostringtag-support' );
	var nativeClass = require( '@stdlib/utils/native-class' );
	var test = require( './try2valueof.js' );
	
	
	// VARIABLES //
	
	var FLG = hasToStringTag();
	
	
	// MAIN //
	
	/**
	* Tests if a value is a string object.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a string object
	*
	* @example
	* var bool = isString( new String( 'beep' ) );
	* // returns true
	*
	* @example
	* var bool = isString( 'beep' );
	* // returns false
	*/
	function isString( value ) {
		if ( typeof value === 'object' ) {
			if ( value instanceof String ) {
				return true;
			}
			if ( FLG ) {
				return test( value );
			}
			return ( nativeClass( value ) === '[object String]' );
		}
		return false;
	}
	
	
	// EXPORTS //
	
	module.exports = isString;
	
	},{"./try2valueof.js":151,"@stdlib/assert/has-tostringtag-support":62,"@stdlib/utils/native-class":295}],150:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Tests if a value is a string primitive.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a string primitive
	*
	* @example
	* var bool = isString( 'beep' );
	* // returns true
	*
	* @example
	* var bool = isString( new String( 'beep' ) );
	* // returns false
	*/
	function isString( value ) {
		return ( typeof value === 'string' );
	}
	
	
	// EXPORTS //
	
	module.exports = isString;
	
	},{}],151:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var valueOf = require( './valueof.js' ); // eslint-disable-line stdlib/no-redeclare
	
	
	// MAIN //
	
	/**
	* Attempts to extract a string value.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a string can be extracted
	*/
	function test( value ) {
		try {
			valueOf.call( value );
			return true;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = test;
	
	},{"./valueof.js":152}],152:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// eslint-disable-next-line stdlib/no-redeclare
	var valueOf = String.prototype.valueOf; // non-generic
	
	
	// EXPORTS //
	
	module.exports = valueOf;
	
	},{}],153:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var Int8Array = require( '@stdlib/array/int8' );
	var Uint8Array = require( '@stdlib/array/uint8' );
	var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
	var Int16Array = require( '@stdlib/array/int16' );
	var Uint16Array = require( '@stdlib/array/uint16' );
	var Int32Array = require( '@stdlib/array/int32' );
	var Uint32Array = require( '@stdlib/array/uint32' );
	var Float32Array = require( '@stdlib/array/float32' );
	var Float64Array = require( '@stdlib/array/float64' );
	
	
	// MAIN //
	
	var CTORS = [
		Float64Array,
		Float32Array,
		Int32Array,
		Uint32Array,
		Int16Array,
		Uint16Array,
		Int8Array,
		Uint8Array,
		Uint8ClampedArray
	];
	
	
	// EXPORTS //
	
	module.exports = CTORS;
	
	},{"@stdlib/array/float32":2,"@stdlib/array/float64":5,"@stdlib/array/int16":7,"@stdlib/array/int32":10,"@stdlib/array/int8":13,"@stdlib/array/uint16":20,"@stdlib/array/uint32":23,"@stdlib/array/uint8":26,"@stdlib/array/uint8c":29}],154:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a typed array.
	*
	* @module @stdlib/assert/is-typed-array
	*
	* @example
	* var Int8Array = require( '@stdlib/array/int8' );
	* var isTypedArray = require( '@stdlib/assert/is-typed-array' );
	*
	* var bool = isTypedArray( new Int8Array( 10 ) );
	* // returns true
	*/
	
	// MODULES //
	
	var isTypedArray = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isTypedArray;
	
	},{"./main.js":155}],155:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var ctorName = require( '@stdlib/utils/constructor-name' );
	var fcnName = require( '@stdlib/utils/function-name' );
	var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
	var hasFloat64ArraySupport = require( '@stdlib/assert/has-float64array-support' );
	var Float64Array = require( '@stdlib/array/float64' );
	var CTORS = require( './ctors.js' );
	var NAMES = require( './names.json' );
	
	
	// VARIABLES //
	
	// Abstract `TypedArray` class:
	var TypedArray = ( hasFloat64ArraySupport() ) ? getPrototypeOf( Float64Array ) : Dummy; // eslint-disable-line max-len
	
	// Ensure abstract typed array class has expected name:
	TypedArray = ( fcnName( TypedArray ) === 'TypedArray' ) ? TypedArray : Dummy;
	
	
	// FUNCTIONS //
	
	/**
	* Dummy constructor.
	*
	* @private
	*/
	function Dummy() {} // eslint-disable-line no-empty-function
	
	
	// MAIN //
	
	/**
	* Tests if a value is a typed array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating if a value is a typed array
	*
	* @example
	* var Int8Array = require( '@stdlib/array/int8' );
	*
	* var bool = isTypedArray( new Int8Array( 10 ) );
	* // returns true
	*/
	function isTypedArray( value ) {
		var v;
		var i;
	
		if ( typeof value !== 'object' || value === null ) {
			return false;
		}
		// Check for the abstract class...
		if ( value instanceof TypedArray ) {
			return true;
		}
		// Check for typed array objects from the same realm (same Node.js `vm` or same `Window` object)...
		for ( i = 0; i < CTORS.length; i++ ) {
			if ( value instanceof CTORS[ i ] ) {
				return true;
			}
		}
		// Walk the prototype tree until we find an object having a desired class...
		while ( value ) {
			v = ctorName( value );
			for ( i = 0; i < NAMES.length; i++ ) {
				if ( NAMES[ i ] === v ) {
					return true;
				}
			}
			value = getPrototypeOf( value );
		}
	
		return false;
	}
	
	
	// EXPORTS //
	
	module.exports = isTypedArray;
	
	},{"./ctors.js":153,"./names.json":156,"@stdlib/array/float64":5,"@stdlib/assert/has-float64array-support":39,"@stdlib/utils/constructor-name":248,"@stdlib/utils/function-name":264,"@stdlib/utils/get-prototype-of":267}],156:[function(require,module,exports){
	module.exports=[
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]
	
	},{}],157:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a Uint16Array.
	*
	* @module @stdlib/assert/is-uint16array
	*
	* @example
	* var isUint16Array = require( '@stdlib/assert/is-uint16array' );
	*
	* var bool = isUint16Array( new Uint16Array( 10 ) );
	* // returns true
	*
	* bool = isUint16Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isUint16Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isUint16Array;
	
	},{"./main.js":158}],158:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasUint16Array = ( typeof Uint16Array === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is a Uint16Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint16Array
	*
	* @example
	* var bool = isUint16Array( new Uint16Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint16Array( [] );
	* // returns false
	*/
	function isUint16Array( value ) {
		return (
			( hasUint16Array && value instanceof Uint16Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Uint16Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isUint16Array;
	
	},{"@stdlib/utils/native-class":295}],159:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a Uint32Array.
	*
	* @module @stdlib/assert/is-uint32array
	*
	* @example
	* var isUint32Array = require( '@stdlib/assert/is-uint32array' );
	*
	* var bool = isUint32Array( new Uint32Array( 10 ) );
	* // returns true
	*
	* bool = isUint32Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isUint32Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isUint32Array;
	
	},{"./main.js":160}],160:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasUint32Array = ( typeof Uint32Array === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is a Uint32Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint32Array
	*
	* @example
	* var bool = isUint32Array( new Uint32Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint32Array( [] );
	* // returns false
	*/
	function isUint32Array( value ) {
		return (
			( hasUint32Array && value instanceof Uint32Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Uint32Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isUint32Array;
	
	},{"@stdlib/utils/native-class":295}],161:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a Uint8Array.
	*
	* @module @stdlib/assert/is-uint8array
	*
	* @example
	* var isUint8Array = require( '@stdlib/assert/is-uint8array' );
	*
	* var bool = isUint8Array( new Uint8Array( 10 ) );
	* // returns true
	*
	* bool = isUint8Array( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isUint8Array = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isUint8Array;
	
	},{"./main.js":162}],162:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasUint8Array = ( typeof Uint8Array === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is a Uint8Array.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint8Array
	*
	* @example
	* var bool = isUint8Array( new Uint8Array( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint8Array( [] );
	* // returns false
	*/
	function isUint8Array( value ) {
		return (
			( hasUint8Array && value instanceof Uint8Array ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Uint8Array]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isUint8Array;
	
	},{"@stdlib/utils/native-class":295}],163:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is a Uint8ClampedArray.
	*
	* @module @stdlib/assert/is-uint8clampedarray
	*
	* @example
	* var isUint8ClampedArray = require( '@stdlib/assert/is-uint8clampedarray' );
	*
	* var bool = isUint8ClampedArray( new Uint8ClampedArray( 10 ) );
	* // returns true
	*
	* bool = isUint8ClampedArray( [] );
	* // returns false
	*/
	
	// MODULES //
	
	var isUint8ClampedArray = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isUint8ClampedArray;
	
	},{"./main.js":164}],164:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	
	
	// VARIABLES //
	
	var hasUint8ClampedArray = ( typeof Uint8ClampedArray === 'function' ); // eslint-disable-line stdlib/require-globals
	
	
	// MAIN //
	
	/**
	* Tests if a value is a Uint8ClampedArray.
	*
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether value is a Uint8ClampedArray
	*
	* @example
	* var bool = isUint8ClampedArray( new Uint8ClampedArray( 10 ) );
	* // returns true
	*
	* @example
	* var bool = isUint8ClampedArray( [] );
	* // returns false
	*/
	function isUint8ClampedArray( value ) {
		return (
			( hasUint8ClampedArray && value instanceof Uint8ClampedArray ) || // eslint-disable-line stdlib/require-globals
			nativeClass( value ) === '[object Uint8ClampedArray]'
		);
	}
	
	
	// EXPORTS //
	
	module.exports = isUint8ClampedArray;
	
	},{"@stdlib/utils/native-class":295}],165:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a value is an array of probabilities that sum to one.
	*
	* @module @stdlib/assert/is-unity-probability-array
	*
	* @example
	* var isUnityProbabilityArray = require( '@stdlib/assert/is-unity-probability-array' );
	*
	* var bool = isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
	* // returns true
	*
	* bool = isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
	* // returns true
	*
	* bool = isUnityProbabilityArray( [ 0.4, 0.4, 0.4 ] );
	* // returns false
	*
	* bool = isUnityProbabilityArray( [ 3.14, 0.0 ] );
	* // returns false
	*/
	
	// MODULES //
	
	var isUnityProbabilityArray = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = isUnityProbabilityArray;
	
	},{"./main.js":166}],166:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isTypedArray = require( '@stdlib/assert/is-typed-array' );
	var isArray = require( '@stdlib/assert/is-array' );
	var isNumber = require( '@stdlib/assert/is-number' ).isPrimitive;
	var absdiff = require( '@stdlib/math/base/utils/absolute-difference' );
	var FLOAT64_SQRT_EPS = require( '@stdlib/constants/math/float64-sqrt-eps' );
	
	
	// MAIN //
	
	/**
	* Tests if a value is an array of probabilities that sum to one.
	*
	* @param {*} v - value to test
	* @returns {boolean} boolean indicating if a value is a probability array
	*
	* @example
	* var bool = isUnityProbabilityArray( [ 0.25, 0.5, 0.25 ] );
	* // returns true
	*
	* @example
	* var bool = isUnityProbabilityArray( new Uint8Array( [ 0, 1 ] ) );
	* // returns true
	*
	* @example
	* var bool = isUnityProbabilityArray( [ 0.4, 0.4, 0.4 ] );
	* // returns false
	*
	* @example
	* var bool = isUnityProbabilityArray( [ 3.14, 0.0 ] );
	* // returns false
	*/
	function isUnityProbabilityArray( v ) {
		var sum;
		var i;
		if ( isArray( v ) ) {
			sum = 0.0;
			for ( i = 0; i < v.length; i++ ) {
				if (
					!isNumber( v[ i ] ) ||
					v[ i ] > 1.0 ||
					v[ i ] < 0.0
				) {
					return false;
				}
				sum += v[ i ];
			}
			return ( absdiff( sum, 1.0 ) <= FLOAT64_SQRT_EPS );
		}
		if ( isTypedArray( v ) ) {
			sum = 0.0;
			for ( i = 0; i < v.length; i++ ) {
				if (
					v[ i ] > 1.0 ||
					v[ i ] < 0.0
				) {
					return false;
				}
				sum += v[ i ];
			}
			return ( absdiff( sum, 1.0 ) <= FLOAT64_SQRT_EPS );
		}
		return false;
	}
	
	
	// EXPORTS //
	
	module.exports = isUnityProbabilityArray;
	
	},{"@stdlib/assert/is-array":84,"@stdlib/assert/is-number":127,"@stdlib/assert/is-typed-array":154,"@stdlib/constants/math/float64-sqrt-eps":184,"@stdlib/math/base/utils/absolute-difference":210}],167:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isArray = require( '@stdlib/assert/is-array' );
	
	
	// MAIN //
	
	/**
	* Returns a function which tests if every element in an array passes a test condition.
	*
	* @param {Function} predicate - function to apply
	* @throws {TypeError} must provide a function
	* @returns {Function} an array function
	*
	* @example
	* var isOdd = require( '@stdlib/assert/is-odd' );
	*
	* var arr1 = [ 1, 3, 5, 7 ];
	* var arr2 = [ 3, 5, 8 ];
	*
	* var validate = arrayfcn( isOdd );
	*
	* var bool = validate( arr1 );
	* // returns true
	*
	* bool = validate( arr2 );
	* // returns false
	*/
	function arrayfcn( predicate ) {
		if ( typeof predicate !== 'function' ) {
			throw new TypeError( 'invalid argument. Must provide a function. Value: `' + predicate + '`.' );
		}
		return every;
	
		/**
		* Tests if every element in an array passes a test condition.
		*
		* @private
		* @param {*} value - value to test
		* @returns {boolean} boolean indicating whether a value is an array for which all elements pass a test condition
		*/
		function every( value ) {
			var len;
			var i;
			if ( !isArray( value ) ) {
				return false;
			}
			len = value.length;
			if ( len === 0 ) {
				return false;
			}
			for ( i = 0; i < len; i++ ) {
				if ( predicate( value[ i ] ) === false ) {
					return false;
				}
			}
			return true;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = arrayfcn;
	
	},{"@stdlib/assert/is-array":84}],168:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return a function which tests if every element in an array passes a test condition.
	*
	* @module @stdlib/assert/tools/array-function
	*
	* @example
	* var isOdd = require( '@stdlib/assert/is-odd' );
	* var arrayfcn = require( '@stdlib/assert/tools/array-function' );
	*
	* var arr1 = [ 1, 3, 5, 7 ];
	* var arr2 = [ 3, 5, 8 ];
	*
	* var validate = arrayfcn( isOdd );
	*
	* var bool = validate( arr1 );
	* // returns true
	*
	* bool = validate( arr2 );
	* // returns false
	*/
	
	// MODULES //
	
	var arrayfcn = require( './arrayfcn.js' );
	
	
	// EXPORTS //
	
	module.exports = arrayfcn;
	
	},{"./arrayfcn.js":167}],169:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Blas level 1 routine to copy values from `x` into `y`.
	*
	* @module @stdlib/blas/base/gcopy
	*
	* @example
	* var gcopy = require( '@stdlib/blas/base/gcopy' );
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* gcopy( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*
	* @example
	* // Use the `ndarray` interface...
	* var gcopy = require( '@stdlib/blas/base/gcopy' ).ndarray;
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* gcopy( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var gcopy = require( './main.js' );
	var ndarray = require( './ndarray.js' );
	
	
	// MAIN //
	
	setReadOnly( gcopy, 'ndarray', ndarray );
	
	
	// EXPORTS //
	
	module.exports = gcopy;
	
	},{"./main.js":170,"./ndarray.js":171,"@stdlib/utils/define-nonenumerable-read-only-property":256}],170:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// VARIABLES //
	
	var M = 8;
	
	
	// MAIN //
	
	/**
	* Copies values from `x` into `y`.
	*
	* @param {PositiveInteger} N - number of values to copy
	* @param {(Array|TypedArray)} x - input array
	* @param {integer} strideX - `x` stride length
	* @param {(Array|TypedArray)} y - destination array
	* @param {integer} strideY - `y` stride length
	* @returns {(Array|TypedArray)} `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* gcopy( x.length, x, 1, y, 1 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	function gcopy( N, x, strideX, y, strideY ) {
		var ix;
		var iy;
		var m;
		var i;
		if ( N <= 0 ) {
			return y;
		}
		// Use unrolled loops if both strides are equal to `1`...
		if ( strideX === 1 && strideY === 1 ) {
			m = N % M;
	
			// If we have a remainder, run a clean-up loop...
			if ( m > 0 ) {
				for ( i = 0; i < m; i++ ) {
					y[ i ] = x[ i ];
				}
			}
			if ( N < M ) {
				return y;
			}
			for ( i = m; i < N; i += M ) {
				y[ i ] = x[ i ];
				y[ i+1 ] = x[ i+1 ];
				y[ i+2 ] = x[ i+2 ];
				y[ i+3 ] = x[ i+3 ];
				y[ i+4 ] = x[ i+4 ];
				y[ i+5 ] = x[ i+5 ];
				y[ i+6 ] = x[ i+6 ];
				y[ i+7 ] = x[ i+7 ];
			}
			return y;
		}
		if ( strideX < 0 ) {
			ix = (1-N) * strideX;
		} else {
			ix = 0;
		}
		if ( strideY < 0 ) {
			iy = (1-N) * strideY;
		} else {
			iy = 0;
		}
		for ( i = 0; i < N; i++ ) {
			y[ iy ] = x[ ix ];
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	
	
	// EXPORTS //
	
	module.exports = gcopy;
	
	},{}],171:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// VARIABLES //
	
	var M = 8;
	
	
	// MAIN //
	
	/**
	* Copies values from `x` into `y`.
	*
	* @param {PositiveInteger} N - number of values to copy
	* @param {(Array|TypedArray)} x - input array
	* @param {integer} strideX - `x` stride length
	* @param {NonNegativeInteger} offsetX - starting `x` index
	* @param {(Array|TypedArray)} y - destination array
	* @param {integer} strideY - `y` stride length
	* @param {NonNegativeInteger} offsetY - starting `y` index
	* @returns {(Array|TypedArray)} `y`
	*
	* @example
	* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	* var y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	*
	* gcopy( x.length, x, 1, 0, y, 1, 0 );
	* // y => [ 1.0, 2.0, 3.0, 4.0, 5.0 ]
	*/
	function gcopy( N, x, strideX, offsetX, y, strideY, offsetY ) {
		var ix;
		var iy;
		var m;
		var i;
		if ( N <= 0 ) {
			return y;
		}
		ix = offsetX;
		iy = offsetY;
	
		// Use unrolled loops if both strides are equal to `1`...
		if ( strideX === 1 && strideY === 1 ) {
			m = N % M;
	
			// If we have a remainder, run a clean-up loop...
			if ( m > 0 ) {
				for ( i = 0; i < m; i++ ) {
					y[ iy ] = x[ ix ];
					ix += strideX;
					iy += strideY;
				}
			}
			if ( N < M ) {
				return y;
			}
			for ( i = m; i < N; i += M ) {
				y[ iy ] = x[ ix ];
				y[ iy+1 ] = x[ ix+1 ];
				y[ iy+2 ] = x[ ix+2 ];
				y[ iy+3 ] = x[ ix+3 ];
				y[ iy+4 ] = x[ ix+4 ];
				y[ iy+5 ] = x[ ix+5 ];
				y[ iy+6 ] = x[ ix+6 ];
				y[ iy+7 ] = x[ ix+7 ];
				ix += M;
				iy += M;
			}
			return y;
		}
		for ( i = 0; i < N; i++ ) {
			y[ iy ] = x[ ix ];
			ix += strideX;
			iy += strideY;
		}
		return y;
	}
	
	
	// EXPORTS //
	
	module.exports = gcopy;
	
	},{}],172:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var ctor = require( 'buffer' ).Buffer; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"buffer":322}],173:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Buffer constructor.
	*
	* @module @stdlib/buffer/ctor
	*
	* @example
	* var ctor = require( '@stdlib/buffer/ctor' );
	*
	* var b = new ctor( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*/
	
	// MODULES //
	
	var hasNodeBufferSupport = require( '@stdlib/assert/has-node-buffer-support' );
	var main = require( './buffer.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var ctor;
	if ( hasNodeBufferSupport() ) {
		ctor = main;
	} else {
		ctor = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = ctor;
	
	},{"./buffer.js":172,"./polyfill.js":174,"@stdlib/assert/has-node-buffer-support":54}],174:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: write (browser) polyfill
	
	// MAIN //
	
	/**
	* Buffer constructor.
	*
	* @throws {Error} not implemented
	*/
	function polyfill() {
		throw new Error( 'not implemented' );
	}
	
	
	// EXPORTS //
	
	module.exports = polyfill;
	
	},{}],175:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isFunction = require( '@stdlib/assert/is-function' );
	var Buffer = require( '@stdlib/buffer/ctor' );
	
	
	// MAIN //
	
	var bool = isFunction( Buffer.from );
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{"@stdlib/assert/is-function":106,"@stdlib/buffer/ctor":173}],176:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Copy buffer data to a new `Buffer` instance.
	*
	* @module @stdlib/buffer/from-buffer
	*
	* @example
	* var fromArray = require( '@stdlib/buffer/from-array' );
	* var copyBuffer = require( '@stdlib/buffer/from-buffer' );
	*
	* var b1 = fromArray( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*
	* var b2 = copyBuffer( b1 );
	* // returns <Buffer>
	*/
	
	// MODULES //
	
	var hasFrom = require( './has_from.js' );
	var main = require( './main.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var copyBuffer;
	if ( hasFrom ) {
		copyBuffer = main;
	} else {
		copyBuffer = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = copyBuffer;
	
	},{"./has_from.js":175,"./main.js":177,"./polyfill.js":178}],177:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isBuffer = require( '@stdlib/assert/is-buffer' );
	var Buffer = require( '@stdlib/buffer/ctor' );
	
	
	// MAIN //
	
	/**
	* Copies buffer data to a new `Buffer` instance.
	*
	* @param {Buffer} buffer - buffer from which to copy
	* @throws {TypeError} must provide a `Buffer` instance
	* @returns {Buffer} new `Buffer` instance
	*
	* @example
	* var fromArray = require( '@stdlib/buffer/from-array' );
	*
	* var b1 = fromArray( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*
	* var b2 = fromBuffer( b1 );
	* // returns <Buffer>
	*/
	function fromBuffer( buffer ) {
		if ( !isBuffer( buffer ) ) {
			throw new TypeError( 'invalid argument. Must provide a Buffer. Value: `' + buffer + '`' );
		}
		return Buffer.from( buffer );
	}
	
	
	// EXPORTS //
	
	module.exports = fromBuffer;
	
	},{"@stdlib/assert/is-buffer":92,"@stdlib/buffer/ctor":173}],178:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isBuffer = require( '@stdlib/assert/is-buffer' );
	var Buffer = require( '@stdlib/buffer/ctor' );
	
	
	// MAIN //
	
	/**
	* Copies buffer data to a new `Buffer` instance.
	*
	* @param {Buffer} buffer - buffer from which to copy
	* @throws {TypeError} must provide a `Buffer` instance
	* @returns {Buffer} new `Buffer` instance
	*
	* @example
	* var fromArray = require( '@stdlib/buffer/from-array' );
	*
	* var b1 = fromArray( [ 1, 2, 3, 4 ] );
	* // returns <Buffer>
	*
	* var b2 = fromBuffer( b1 );
	* // returns <Buffer>
	*/
	function fromBuffer( buffer ) {
		if ( !isBuffer( buffer ) ) {
			throw new TypeError( 'invalid argument. Must provide a Buffer. Value: `' + buffer + '`' );
		}
		return new Buffer( buffer ); // eslint-disable-line no-buffer-constructor
	}
	
	
	// EXPORTS //
	
	module.exports = fromBuffer;
	
	},{"@stdlib/assert/is-buffer":92,"@stdlib/buffer/ctor":173}],179:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum length of a generic array.
	*
	* @module @stdlib/constants/array/max-array-length
	*
	* @example
	* var MAX_ARRAY_LENGTH = require( '@stdlib/constants/array/max-array-length' );
	* // returns 4294967295
	*/
	
	// MAIN //
	
	/**
	* Maximum length of a generic array.
	*
	* ```tex
	* 2^{32} - 1
	* ```
	*
	* @constant
	* @type {uinteger32}
	* @default 4294967295
	*/
	var MAX_ARRAY_LENGTH = 4294967295>>>0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = MAX_ARRAY_LENGTH;
	
	},{}],180:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum length of a typed array.
	*
	* @module @stdlib/constants/array/max-typed-array-length
	*
	* @example
	* var MAX_TYPED_ARRAY_LENGTH = require( '@stdlib/constants/array/max-typed-array-length' );
	* // returns 9007199254740991
	*/
	
	// MAIN //
	
	/**
	* Maximum length of a typed array.
	*
	* ```tex
	* 2^{53} - 1
	* ```
	*
	* @constant
	* @type {number}
	* @default 9007199254740991
	*/
	var MAX_TYPED_ARRAY_LENGTH = 9007199254740991;
	
	
	// EXPORTS //
	
	module.exports = MAX_TYPED_ARRAY_LENGTH;
	
	},{}],181:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum safe double-precision floating-point integer.
	*
	* @module @stdlib/constants/math/float64-max-safe-integer
	* @type {number}
	*
	* @example
	* var FLOAT64_MAX_SAFE_INTEGER = require( '@stdlib/constants/math/float64-max-safe-integer' );
	* // returns 9007199254740991
	*/
	
	
	// MAIN //
	
	/**
	* Maximum safe double-precision floating-point integer.
	*
	* ## Notes
	*
	* The integer has the value
	*
	* ```tex
	* 2^{53} - 1
	* ```
	*
	* @constant
	* @type {number}
	* @default 9007199254740991
	* @see [Safe Integers]{@link http://www.2ality.com/2013/10/safe-integers.html}
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_MAX_SAFE_INTEGER = 9007199254740991;
	
	
	// EXPORTS //
	
	module.exports = FLOAT64_MAX_SAFE_INTEGER;
	
	},{}],182:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Double-precision floating-point negative infinity.
	*
	* @module @stdlib/constants/math/float64-ninf
	* @type {number}
	*
	* @example
	* var FLOAT64_NINF = require( '@stdlib/constants/math/float64-ninf' );
	* // returns -Infinity
	*/
	
	// MODULES //
	
	var Number = require( '@stdlib/number/ctor' );
	
	
	// MAIN //
	
	/**
	* Double-precision floating-point negative infinity.
	*
	* ## Notes
	*
	* Double-precision floating-point negative infinity has the bit sequence
	*
	* ```binarystring
	* 1 11111111111 00000000000000000000 00000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {number}
	* @default Number.NEGATIVE_INFINITY
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_NINF = Number.NEGATIVE_INFINITY;
	
	
	// EXPORTS //
	
	module.exports = FLOAT64_NINF;
	
	},{"@stdlib/number/ctor":212}],183:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Double-precision floating-point positive infinity.
	*
	* @module @stdlib/constants/math/float64-pinf
	* @type {number}
	*
	* @example
	* var FLOAT64_PINF = require( '@stdlib/constants/math/float64-pinf' );
	* // returns Infinity
	*/
	
	
	// MAIN //
	
	/**
	* Double-precision floating-point positive infinity.
	*
	* ## Notes
	*
	* Double-precision floating-point positive infinity has the bit sequence
	*
	* ```binarystring
	* 0 11111111111 00000000000000000000 00000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {number}
	* @default Number.POSITIVE_INFINITY
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	*/
	var FLOAT64_PINF = Number.POSITIVE_INFINITY; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = FLOAT64_PINF;
	
	},{}],184:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Square root of double-precision floating-point epsilon.
	*
	* @module @stdlib/constants/math/float64-sqrt-eps
	* @type {number}
	*
	* @example
	* var FLOAT64_SQRT_EPSILON = require( '@stdlib/constants/math/float64-sqrt-eps' );
	* // returns 0.14901161193847656e-7
	*/
	
	
	// MAIN //
	
	/**
	* Square root of double-precision floating-point epsilon.
	*
	* ```tex
	* \sqrt{\frac{1}{2^{52}}}
	* ```
	*
	* @constant
	* @type {number}
	* @default 0.14901161193847656e-7
	* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
	* @see [Machine Epsilon]{@link https://en.wikipedia.org/wiki/Machine_epsilon}
	*/
	var FLOAT64_SQRT_EPSILON = 0.1490116119384765625e-7;
	
	
	// EXPORTS //
	
	module.exports = FLOAT64_SQRT_EPSILON;
	
	},{}],185:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum signed 16-bit integer.
	*
	* @module @stdlib/constants/math/int16-max
	* @type {integer32}
	*
	* @example
	* var INT16_MAX = require( '@stdlib/constants/math/int16-max' );
	* // returns 32767
	*/
	
	
	// MAIN //
	
	/**
	* Maximum signed 16-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{15} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 0111111111111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 32767
	*/
	var INT16_MAX = 32767|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = INT16_MAX;
	
	},{}],186:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Minimum signed 16-bit integer.
	*
	* @module @stdlib/constants/math/int16-min
	* @type {integer32}
	*
	* @example
	* var INT16_MIN = require( '@stdlib/constants/math/int16-min' );
	* // returns -32768
	*/
	
	
	// MAIN //
	
	/**
	* Minimum signed 16-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* -(2^{15})
	* ```
	*
	* which corresponds to the two's complement bit sequence
	*
	* ```binarystring
	* 1000000000000000
	* ```
	*
	* @constant
	* @type {integer32}
	* @default -32768
	*/
	var INT16_MIN = -32768|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = INT16_MIN;
	
	},{}],187:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum signed 32-bit integer.
	*
	* @module @stdlib/constants/math/int32-max
	* @type {integer32}
	*
	* @example
	* var INT32_MAX = require( '@stdlib/constants/math/int32-max' );
	* // returns 2147483647
	*/
	
	
	// MAIN //
	
	/**
	* Maximum signed 32-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{31} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 01111111111111111111111111111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 2147483647
	*/
	var INT32_MAX = 2147483647|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = INT32_MAX;
	
	},{}],188:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Minimum signed 32-bit integer.
	*
	* @module @stdlib/constants/math/int32-min
	* @type {integer32}
	*
	* @example
	* var INT32_MIN = require( '@stdlib/constants/math/int32-min' );
	* // returns -2147483648
	*/
	
	
	// MAIN //
	
	/**
	* Minimum signed 32-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* -(2^{31})
	* ```
	*
	* which corresponds to the two's complement bit sequence
	*
	* ```binarystring
	* 10000000000000000000000000000000
	* ```
	*
	* @constant
	* @type {integer32}
	* @default -2147483648
	*/
	var INT32_MIN = -2147483648|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = INT32_MIN;
	
	},{}],189:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum signed 8-bit integer.
	*
	* @module @stdlib/constants/math/int8-max
	* @type {integer32}
	*
	* @example
	* var INT8_MAX = require( '@stdlib/constants/math/int8-max' );
	* // returns 127
	*/
	
	
	// MAIN //
	
	/**
	* Maximum signed 8-bit integer.
	*
	* ## Notes
	*
	* The number is given by
	*
	* ```tex
	* 2^{7} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 01111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 127
	*/
	var INT8_MAX = 127|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = INT8_MAX;
	
	},{}],190:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Minimum signed 8-bit integer.
	*
	* @module @stdlib/constants/math/int8-min
	* @type {integer32}
	*
	* @example
	* var INT8_MIN = require( '@stdlib/constants/math/int8-min' );
	* // returns -128
	*/
	
	
	// MAIN //
	
	/**
	* Minimum signed 8-bit integer.
	*
	* ## Notes
	*
	* The number is given by
	*
	* ```tex
	* -(2^{7})
	* ```
	*
	* which corresponds to the two's complement bit sequence
	*
	* ```binarystring
	* 10000000
	* ```
	*
	* @constant
	* @type {integer32}
	* @default -128
	*/
	var INT8_MIN = -128|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = INT8_MIN;
	
	},{}],191:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum unsigned 16-bit integer.
	*
	* @module @stdlib/constants/math/uint16-max
	* @type {integer32}
	*
	* @example
	* var UINT16_MAX = require( '@stdlib/constants/math/uint16-max' );
	* // returns 65535
	*/
	
	
	// MAIN //
	
	/**
	* Maximum unsigned 16-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{16} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 1111111111111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 65535
	*/
	var UINT16_MAX = 65535|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = UINT16_MAX;
	
	},{}],192:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum unsigned 32-bit integer.
	*
	* @module @stdlib/constants/math/uint32-max
	* @type {uinteger32}
	*
	* @example
	* var UINT32_MAX = require( '@stdlib/constants/math/uint32-max' );
	* // returns 4294967295
	*/
	
	
	// MAIN //
	
	/**
	* Maximum unsigned 32-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{32} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 11111111111111111111111111111111
	* ```
	*
	* @constant
	* @type {uinteger32}
	* @default 4294967295
	*/
	var UINT32_MAX = 4294967295;
	
	
	// EXPORTS //
	
	module.exports = UINT32_MAX;
	
	},{}],193:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Maximum unsigned 8-bit integer.
	*
	* @module @stdlib/constants/math/uint8-max
	* @type {integer32}
	*
	* @example
	* var UINT8_MAX = require( '@stdlib/constants/math/uint8-max' );
	* // returns 255
	*/
	
	
	// MAIN //
	
	/**
	* Maximum unsigned 8-bit integer.
	*
	* ## Notes
	*
	* The number has the value
	*
	* ```tex
	* 2^{8} - 1
	* ```
	*
	* which corresponds to the bit sequence
	*
	* ```binarystring
	* 11111111
	* ```
	*
	* @constant
	* @type {integer32}
	* @default 255
	*/
	var UINT8_MAX = 255|0; // asm type annotation
	
	
	// EXPORTS //
	
	module.exports = UINT8_MAX;
	
	},{}],194:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a numeric value is infinite.
	*
	* @module @stdlib/math/base/assert/is-infinite
	*
	* @example
	* var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
	*
	* var bool = isInfinite( Infinity );
	* // returns true
	*
	* bool = isInfinite( -Infinity );
	* // returns true
	*
	* bool = isInfinite( 5.0 );
	* // returns false
	*
	* bool = isInfinite( NaN );
	* // returns false
	*/
	
	// MODULES //
	
	var isInfinite = require( './is_infinite.js' );
	
	
	// EXPORTS //
	
	module.exports = isInfinite;
	
	},{"./is_infinite.js":195}],195:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var PINF = require( '@stdlib/constants/math/float64-pinf' );
	var NINF = require( '@stdlib/constants/math/float64-ninf' );
	
	
	// MAIN //
	
	/**
	* Tests if a numeric value is infinite.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is infinite
	*
	* @example
	* var bool = isInfinite( Infinity );
	* // returns true
	*
	* @example
	* var bool = isInfinite( -Infinity );
	* // returns true
	*
	* @example
	* var bool = isInfinite( 5.0 );
	* // returns false
	*
	* @example
	* var bool = isInfinite( NaN );
	* // returns false
	*/
	function isInfinite( x ) {
		return (x === PINF || x === NINF);
	}
	
	
	// EXPORTS //
	
	module.exports = isInfinite;
	
	},{"@stdlib/constants/math/float64-ninf":182,"@stdlib/constants/math/float64-pinf":183}],196:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a finite double-precision floating-point number is an integer.
	*
	* @module @stdlib/math/base/assert/is-integer
	*
	* @example
	* var isInteger = require( '@stdlib/math/base/assert/is-integer' );
	*
	* var bool = isInteger( 1.0 );
	* // returns true
	*
	* bool = isInteger( 3.14 );
	* // returns false
	*/
	
	// MODULES //
	
	var isInteger = require( './is_integer.js' );
	
	
	// EXPORTS //
	
	module.exports = isInteger;
	
	},{"./is_integer.js":197}],197:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var floor = require( '@stdlib/math/base/special/floor' );
	
	
	// MAIN //
	
	/**
	* Tests if a finite double-precision floating-point number is an integer.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is an integer
	*
	* @example
	* var bool = isInteger( 1.0 );
	* // returns true
	*
	* @example
	* var bool = isInteger( 3.14 );
	* // returns false
	*/
	function isInteger( x ) {
		return (floor(x) === x);
	}
	
	
	// EXPORTS //
	
	module.exports = isInteger;
	
	},{"@stdlib/math/base/special/floor":205}],198:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a numeric value is `NaN`.
	*
	* @module @stdlib/math/base/assert/is-nan
	*
	* @example
	* var isnan = require( '@stdlib/math/base/assert/is-nan' );
	*
	* var bool = isnan( NaN );
	* // returns true
	*
	* bool = isnan( 7.0 );
	* // returns false
	*/
	
	// MODULES //
	
	var isnan = require( './is_nan.js' );
	
	
	// EXPORTS //
	
	module.exports = isnan;
	
	},{"./is_nan.js":199}],199:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Tests if a numeric value is `NaN`.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is `NaN`
	*
	* @example
	* var bool = isnan( NaN );
	* // returns true
	*
	* @example
	* var bool = isnan( 7.0 );
	* // returns false
	*/
	function isnan( x ) {
		return ( x !== x );
	}
	
	
	// EXPORTS //
	
	module.exports = isnan;
	
	},{}],200:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Test if a numeric value is positive zero.
	*
	* @module @stdlib/math/base/assert/is-positive-zero
	*
	* @example
	* var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
	*
	* var bool = isPositiveZero( 0.0 );
	* // returns true
	*
	* bool = isPositiveZero( -0.0 );
	* // returns false
	*/
	
	// MODULES //
	
	var isPositiveZero = require( './is_positive_zero.js' );
	
	
	// EXPORTS //
	
	module.exports = isPositiveZero;
	
	},{"./is_positive_zero.js":201}],201:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var PINF = require( '@stdlib/constants/math/float64-pinf' );
	
	
	// MAIN //
	
	/**
	* Tests if a numeric value is positive zero.
	*
	* @param {number} x - value to test
	* @returns {boolean} boolean indicating whether the value is positive zero
	*
	* @example
	* var bool = isPositiveZero( 0.0 );
	* // returns true
	*
	* @example
	* var bool = isPositiveZero( -0.0 );
	* // returns false
	*/
	function isPositiveZero( x ) {
		return (x === 0.0 && 1.0/x === PINF);
	}
	
	
	// EXPORTS //
	
	module.exports = isPositiveZero;
	
	},{"@stdlib/constants/math/float64-pinf":183}],202:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Computes the absolute value of `x`.
	*
	* @param {number} x - input value
	* @returns {number} absolute value
	*
	* @example
	* var v = abs( -1.0 );
	* // returns 1.0
	*
	* @example
	* var v = abs( 2.0 );
	* // returns 2.0
	*
	* @example
	* var v = abs( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = abs( -0.0 );
	* // returns 0.0
	*
	* @example
	* var v = abs( NaN );
	* // returns NaN
	*/
	function abs( x ) {
		if ( x < 0.0 ) {
			return -x;
		}
		if ( x === 0.0 ) {
			return 0.0; // handle negative zero
		}
		return x;
	}
	
	
	// EXPORTS //
	
	module.exports = abs;
	
	},{}],203:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Compute an absolute value.
	*
	* @module @stdlib/math/base/special/abs
	*
	* @example
	* var abs = require( '@stdlib/math/base/special/abs' );
	*
	* var v = abs( -1.0 );
	* // returns 1.0
	*
	* v = abs( 2.0 );
	* // returns 2.0
	*
	* v = abs( 0.0 );
	* // returns 0.0
	*
	* v = abs( -0.0 );
	* // returns 0.0
	*
	* v = abs( NaN );
	* // returns NaN
	*/
	
	// MODULES //
	
	var abs = require( './abs.js' );
	
	
	// EXPORTS //
	
	module.exports = abs;
	
	},{"./abs.js":202}],204:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// TODO: implementation (?)
	
	/**
	* Rounds a numeric value toward negative infinity.
	*
	* @param {number} x - input value
	* @returns {number} rounded value
	*
	* @example
	* var v = floor( -4.2 );
	* // returns -5.0
	*
	* @example
	* var v = floor( 9.99999 );
	* // returns 9.0
	*
	* @example
	* var v = floor( 0.0 );
	* // returns 0.0
	*
	* @example
	* var v = floor( NaN );
	* // returns NaN
	*/
	var floor = Math.floor; // eslint-disable-line stdlib/no-builtin-math
	
	
	// EXPORTS //
	
	module.exports = floor;
	
	},{}],205:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Round a numeric value toward negative infinity.
	*
	* @module @stdlib/math/base/special/floor
	*
	* @example
	* var floor = require( '@stdlib/math/base/special/floor' );
	*
	* var v = floor( -4.2 );
	* // returns -5.0
	*
	* v = floor( 9.99999 );
	* // returns 9.0
	*
	* v = floor( 0.0 );
	* // returns 0.0
	*
	* v = floor( NaN );
	* // returns NaN
	*/
	
	// MODULES //
	
	var floor = require( './floor.js' );
	
	
	// EXPORTS //
	
	module.exports = floor;
	
	},{"./floor.js":204}],206:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return the maximum value.
	*
	* @module @stdlib/math/base/special/max
	*
	* @example
	* var max = require( '@stdlib/math/base/special/max' );
	*
	* var v = max( 3.14, 4.2 );
	* // returns 4.2
	*
	* v = max( 5.9, 3.14, 4.2 );
	* // returns 5.9
	*
	* v = max( 3.14, NaN );
	* // returns NaN
	*
	* v = max( +0.0, -0.0 );
	* // returns +0.0
	*/
	
	// MODULES //
	
	var max = require( './max.js' );
	
	
	// EXPORTS //
	
	module.exports = max;
	
	},{"./max.js":207}],207:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
	var isnan = require( '@stdlib/math/base/assert/is-nan' );
	var NINF = require( '@stdlib/constants/math/float64-ninf' );
	var PINF = require( '@stdlib/constants/math/float64-pinf' );
	
	
	// MAIN //
	
	/**
	* Returns the maximum value.
	*
	* @param {number} [x] - first number
	* @param {number} [y] - second number
	* @param {...number} [args] - numbers
	* @returns {number} maximum value
	*
	* @example
	* var v = max( 3.14, 4.2 );
	* // returns 4.2
	*
	* @example
	* var v = max( 5.9, 3.14, 4.2 );
	* // returns 5.9
	*
	* @example
	* var v = max( 3.14, NaN );
	* // returns NaN
	*
	* @example
	* var v = max( +0.0, -0.0 );
	* // returns +0.0
	*/
	function max( x, y ) {
		var len;
		var m;
		var v;
		var i;
	
		len = arguments.length;
		if ( len === 2 ) {
			if ( isnan( x ) || isnan( y ) ) {
				return NaN;
			}
			if ( x === PINF || y === PINF ) {
				return PINF;
			}
			if ( x === y && x === 0.0 ) {
				if ( isPositiveZero( x ) ) {
					return x;
				}
				return y;
			}
			if ( x > y ) {
				return x;
			}
			return y;
		}
		m = NINF;
		for ( i = 0; i < len; i++ ) {
			v = arguments[ i ];
			if ( isnan( v ) || v === PINF ) {
				return v;
			}
			if ( v > m ) {
				m = v;
			} else if (
				v === m &&
				v === 0.0 &&
				isPositiveZero( v )
			) {
				m = v;
			}
		}
		return m;
	}
	
	
	// EXPORTS //
	
	module.exports = max;
	
	},{"@stdlib/constants/math/float64-ninf":182,"@stdlib/constants/math/float64-pinf":183,"@stdlib/math/base/assert/is-nan":198,"@stdlib/math/base/assert/is-positive-zero":200}],208:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Perform C-like multiplication of two unsigned 32-bit integers.
	*
	* @module @stdlib/math/base/special/uimul
	*
	* @example
	* var uimul = require( '@stdlib/math/base/special/uimul' );
	*
	* var v = uimul( 10>>>0, 4>>>0 );
	* // returns 40
	*/
	
	// MODULES //
	
	var uimul = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = uimul;
	
	},{"./main.js":209}],209:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// VARIABLES //
	
	// Define a mask for the least significant 16 bits (low word): 65535 => 0x0000ffff => 00000000000000001111111111111111
	var LOW_WORD_MASK = 0x0000ffff>>>0; // asm type annotation
	
	
	// MAIN //
	
	/**
	* Performs C-like multiplication of two unsigned 32-bit integers.
	*
	* ## Method
	*
	* -   To emulate C-like multiplication without the aid of 64-bit integers, we recognize that a 32-bit integer can be split into two 16-bit words
	*
	*     ```tex
	*     a = w_h*2^{16} + w_l
	*     ```
	*
	*     where \\( w_h \\) is the most significant 16 bits and \\( w_l \\) is the least significant 16 bits. For example, consider the maximum unsigned 32-bit integer \\( 2^{32}-1 \\)
	*
	*     ```binarystring
	*     11111111111111111111111111111111
	*     ```
	*
	*     The 16-bit high word is then
	*
	*     ```binarystring
	*     1111111111111111
	*     ```
	*
	*     and the 16-bit low word
	*
	*     ```binarystring
	*     1111111111111111
	*     ```
	*
	*     If we cast the high word to 32-bit precision and multiply by \\( 2^{16} \\) (equivalent to a 16-bit left shift), then the bit sequence is
	*
	*     ```binarystring
	*     11111111111111110000000000000000
	*     ```
	*
	*     Similarly, upon casting the low word to 32-bit precision, the bit sequence is
	*
	*     ```binarystring
	*     00000000000000001111111111111111
	*     ```
	*
	*     From the rules of binary addition, we recognize that adding the two 32-bit values for the high and low words will return our original value \\( 2^{32}-1 \\).
	*
	* -   Accordingly, the multiplication of two 32-bit integers can be expressed
	*
	*     ```tex
	*     \begin{align*}
	*     a \cdot b &= ( a_h \cdot 2^{16} + a_l) \cdot ( b_h \cdot 2^{16} + b_l) \\
	*           &= a_l \cdot b_l + a_h \cdot b_l \cdot 2^{16} + a_l \cdot b_h \cdot 2^{16} + (a_h \cdot b_h) \cdot 2^{32} \\
	*           &= a_l \cdot b_l + (a_h \cdot b_l + a_l \cdot b_h) \cdot 2^{16} + (a_h \cdot b_h) \cdot 2^{32}
	*     \end{align*}
	*     ```
	*
	* -   We note that multiplying (dividing) an integer by \\( 2^n \\) is equivalent to performing a left (right) shift of \\( n \\) bits.
	*
	* -   Further, as we want to return an integer of the same precision, for a 32-bit integer, the return value will be modulo \\( 2^{32} \\). Stated another way, we only care about the low word of a 64-bit result.
	*
	* -   Accordingly, the last term, being evenly divisible by \\( 2^{32} \\), drops from the equation leaving the remaining two terms as the remainder.
	*
	*     ```tex
	*     a \cdot b = a_l \cdot b_l + (a_h \cdot b_l + a_l \cdot b_h) << 16
	*     ```
	*
	* -   Lastly, the second term in the above equation contributes to the middle bits and may cause the product to "overflow". However, we can disregard (`>>>0`) overflow bits due modulo arithmetic, as discussed earlier with regard to the term involving the partial product of high words.
	*
	*
	* @param {uinteger32} a - integer
	* @param {uinteger32} b - integer
	* @returns {uinteger32} product
	*
	* @example
	* var v = uimul( 10>>>0, 4>>>0 );
	* // returns 40
	*/
	function uimul( a, b ) {
		var lbits;
		var mbits;
		var ha;
		var hb;
		var la;
		var lb;
	
		a >>>= 0; // asm type annotation
		b >>>= 0; // asm type annotation
	
		// Isolate the most significant 16-bits:
		ha = ( a>>>16 )>>>0; // asm type annotation
		hb = ( b>>>16 )>>>0; // asm type annotation
	
		// Isolate the least significant 16-bits:
		la = ( a&LOW_WORD_MASK )>>>0; // asm type annotation
		lb = ( b&LOW_WORD_MASK )>>>0; // asm type annotation
	
		// Compute partial sums:
		lbits = ( la*lb )>>>0; // asm type annotation; no integer overflow possible
		mbits = ( ((ha*lb) + (la*hb))<<16 )>>>0; // asm type annotation; possible integer overflow
	
		// The final `>>>0` converts the intermediate sum to an unsigned integer (possible integer overflow during sum):
		return ( lbits + mbits )>>>0; // asm type annotation
	}
	
	
	// EXPORTS //
	
	module.exports = uimul;
	
	},{}],210:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Compute the absolute difference.
	*
	* @module @stdlib/math/base/utils/absolute-difference
	*
	* @example
	* var diff = require( '@stdlib/math/base/utils/absolute-difference' );
	*
	* var d = diff( 2.0, 5.0 );
	* // returns 3.0
	*
	* d = diff( -1.0, 3.14 );
	* // returns ~4.14
	*
	* d = diff( 10.1, -2.05 );
	* // returns ~12.15
	*
	* d = diff( -0.0, 0.0 );
	* // returns +0.0
	*
	* d = diff( NaN, 5.0 );
	* // returns NaN
	*
	* d = diff( Infinity, -Infinity  );
	* // returns Infinity
	*
	* d = diff( Infinity, Infinity  );
	* // returns NaN
	*/
	
	// MODULES //
	
	var absoluteDifference = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = absoluteDifference;
	
	},{"./main.js":211}],211:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var PINF = require( '@stdlib/constants/math/float64-pinf' );
	var abs = require( '@stdlib/math/base/special/abs' );
	var isnan = require( '@stdlib/math/base/assert/is-nan' );
	var isInfinite = require( '@stdlib/math/base/assert/is-infinite' );
	
	
	// MAIN //
	
	/**
	* Computes the absolute difference.
	*
	* @param {number} x - first number
	* @param {number} y - second number
	* @returns {number} absolute difference
	*
	* @example
	* var d = absoluteDifference( 2.0, 5.0 );
	* // returns 3.0
	*
	* @example
	* var d = absoluteDifference( -1.0, 3.14 );
	* // returns ~4.14
	*
	* @example
	* var d = absoluteDifference( 10.1, -2.05 );
	* // returns ~12.15
	*
	* @example
	* var d = absoluteDifference( -0.0, 0.0 );
	* // returns +0.0
	*
	* @example
	* var d = absoluteDifference( NaN, 5.0 );
	* // returns NaN
	*
	* @example
	* var d = absoluteDifference( Infinity, -Infinity  );
	* // returns Infinity
	*
	* @example
	* var d = absoluteDifference( Infinity, Infinity  );
	* // returns NaN
	*/
	function absoluteDifference( x, y ) {
		if ( isnan( x ) || isnan( y ) ) {
			return NaN;
		}
		if ( isInfinite( x ) || isInfinite( y ) ) {
			if ( x === y ) {
				return NaN;
			}
			return PINF;
		}
		return abs( x - y );
	}
	
	
	// EXPORTS //
	
	module.exports = absoluteDifference;
	
	},{"@stdlib/constants/math/float64-pinf":183,"@stdlib/math/base/assert/is-infinite":194,"@stdlib/math/base/assert/is-nan":198,"@stdlib/math/base/special/abs":203}],212:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Constructor which returns a `Number` object.
	*
	* @module @stdlib/number/ctor
	*
	* @example
	* var Number = require( '@stdlib/number/ctor' );
	*
	* var v = new Number( 10.0 );
	* // returns <Number>
	*/
	
	// MODULES //
	
	var Number = require( './number.js' );
	
	
	// EXPORTS //
	
	module.exports = Number;
	
	},{"./number.js":213}],213:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// EXPORTS //
	
	module.exports = Number; // eslint-disable-line stdlib/require-globals
	
	},{}],214:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
	var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
	var isObject = require( '@stdlib/assert/is-plain-object' );
	var isProbability = require( '@stdlib/assert/is-probability' ).isPrimitive;
	var isFunction = require( '@stdlib/assert/is-function' );
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var constantFunction = require( '@stdlib/utils/constant-function' );
	var noop = require( '@stdlib/utils/noop' );
	var randu = require( '@stdlib/random/base/mt19937' ).factory;
	var isnan = require( '@stdlib/math/base/assert/is-nan' );
	var typedarray2json = require( '@stdlib/array/to-json' );
	
	
	// MAIN //
	
	/**
	* Returns a pseudorandom number generator for generating Bernoulli distributed random numbers.
	*
	* @param {Probability} [p] - success probability
	* @param {Options} [options] - function options
	* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
	* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
	* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
	* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
	* @throws {TypeError} `p` must be a probability
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide a valid state
	* @returns {PRNG} pseudorandom number generator
	*
	* @example
	* var bernoulli = factory( 0.5 );
	* var v = bernoulli();
	* // returns <number>
	*
	* @example
	* var bernoulli = factory( 0.8, {
	*     'seed': 297
	* });
	* var v = bernoulli();
	* // returns <number>
	*
	* @example
	* var bernoulli = factory();
	* var v = bernoulli( 0.5 );
	* // returns <number>
	*/
	function factory() {
		var opts;
		var rand;
		var prng;
		var p;
	
		if ( arguments.length === 0 ) {
			rand = randu();
		} else if (
			arguments.length === 1 &&
			isObject( arguments[ 0 ] )
		) {
			opts = arguments[ 0 ];
			if ( hasOwnProp( opts, 'prng' ) ) {
				if ( !isFunction( opts.prng ) ) {
					throw new TypeError( 'invalid option. `prng` option must be a pseudorandom number generator function. Option: `' + opts.prng + '`.' );
				}
				rand = opts.prng;
			} else {
				rand = randu( opts );
			}
		} else {
			p = arguments[ 0 ];
			if ( !isProbability( p ) ) {
				throw new TypeError( 'invalid argument. First argument must be a probability. Value: `' + p + '`.' );
			}
			if ( arguments.length > 1 ) {
				opts = arguments[ 1 ];
				if ( !isObject( opts ) ) {
					throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + opts + '`.' );
				}
				if ( hasOwnProp( opts, 'prng' ) ) {
					if ( !isFunction( opts.prng ) ) {
						throw new TypeError( 'invalid option. `prng` option must be a pseudorandom number generator function. Option: `' + opts.prng + '`.' );
					}
					rand = opts.prng;
				} else {
					rand = randu( opts );
				}
			} else {
				rand = randu();
			}
		}
		if ( p === void 0 ) {
			prng = bernoulli2;
		} else {
			prng = bernoulli1;
		}
		setReadOnly( prng, 'NAME', 'bernoulli' );
	
		// If we are provided an "external" PRNG, we don't support getting or setting PRNG state, as we'd need to check for compatible state value types, etc, entailing considerable complexity.
		if ( opts && opts.prng ) {
			setReadOnly( prng, 'seed', null );
			setReadOnly( prng, 'seedLength', null );
			setReadWriteAccessor( prng, 'state', constantFunction( null ), noop );
			setReadOnly( prng, 'stateLength', null );
			setReadOnly( prng, 'byteLength', null );
			setReadOnly( prng, 'toJSON', constantFunction( null ) );
			setReadOnly( prng, 'PRNG', rand );
		} else {
			setReadOnlyAccessor( prng, 'seed', getSeed );
			setReadOnlyAccessor( prng, 'seedLength', getSeedLength );
			setReadWriteAccessor( prng, 'state', getState, setState );
			setReadOnlyAccessor( prng, 'stateLength', getStateLength );
			setReadOnlyAccessor( prng, 'byteLength', getStateSize );
			setReadOnly( prng, 'toJSON', toJSON );
			setReadOnly( prng, 'PRNG', rand );
			rand = rand.normalized;
		}
		return prng;
	
		/**
		* Returns the PRNG seed.
		*
		* @private
		* @returns {PRNGSeedMT19937} seed
		*/
		function getSeed() {
			return rand.seed;
		}
	
		/**
		* Returns the PRNG seed length.
		*
		* @private
		* @returns {PositiveInteger} seed length
		*/
		function getSeedLength() {
			return rand.seedLength;
		}
	
		/**
		* Returns the PRNG state length.
		*
		* @private
		* @returns {PositiveInteger} state length
		*/
		function getStateLength() {
			return rand.stateLength;
		}
	
		/**
		* Returns the PRNG state size (in bytes).
		*
		* @private
		* @returns {PositiveInteger} state size (in bytes)
		*/
		function getStateSize() {
			return rand.byteLength;
		}
	
		/**
		* Returns the current pseudorandom number generator state.
		*
		* @private
		* @returns {PRNGStateMT19937} current state
		*/
		function getState() {
			return rand.state;
		}
	
		/**
		* Sets the pseudorandom number generator state.
		*
		* @private
		* @param {PRNGStateMT19937} s - generator state
		* @throws {Error} must provide a valid state
		*/
		function setState( s ) {
			rand.state = s;
		}
	
		/**
		* Serializes the pseudorandom number generator as a JSON object.
		*
		* ## Notes
		*
		* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
		*
		* @private
		* @returns {Object} JSON representation
		*/
		function toJSON() {
			var out = {};
			out.type = 'PRNG';
			out.name = prng.NAME;
			out.state = typedarray2json( rand.state );
			if ( p === void 0 ) {
				out.params = [];
			} else {
				out.params = [ p ];
			}
			return out;
		}
	
		/**
		* Returns a pseudorandom number drawn from a Bernoulli distribution with bound parameter `p`.
		*
		* @private
		* @returns {NonNegativeInteger} pseudorandom number
		*
		* @example
		* var v = bernoulli1();
		* // returns <number>
		*/
		function bernoulli1() {
			return ( rand() <= p ) ? 1 : 0;
		}
	
		/**
		* Returns a pseudorandom number drawn from a Bernoulli distribution with parameter `p`.
		*
		* @private
		* @param {Probability} p - success probability
		* @returns {NonNegativeInteger} pseudorandom number
		*
		* @example
		* var v = bernoulli2( 0.5 );
		* // returns <number>
		*/
		function bernoulli2( p ) {
			if (
				isnan( p ) ||
				p < 0.0 ||
				p > 1.0
			) {
				return NaN;
			}
			return ( rand() <= p ) ? 1 : 0;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = factory;
	
	},{"@stdlib/array/to-json":17,"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-function":106,"@stdlib/assert/is-plain-object":137,"@stdlib/assert/is-probability":143,"@stdlib/math/base/assert/is-nan":198,"@stdlib/random/base/mt19937":227,"@stdlib/utils/constant-function":247,"@stdlib/utils/define-nonenumerable-read-only-accessor":254,"@stdlib/utils/define-nonenumerable-read-only-property":256,"@stdlib/utils/define-nonenumerable-read-write-accessor":258,"@stdlib/utils/noop":300}],215:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Bernoulli distributed pseudorandom numbers.
	*
	* @module @stdlib/random/base/bernoulli
	*
	* @example
	* var bernoulli = require( '@stdlib/random/base/bernoulli' );
	*
	* var v = bernoulli( 0.5 );
	* // returns <number>
	*
	* @example
	* var factory = require( '@stdlib/random/base/bernoulli' ).factory;
	*
	* var bernoulli = factory( 0.3, {
	*     'seed': 297
	* });
	*
	* var v = bernoulli();
	* // returns <number>
	*
	* @example
	* var factory = require( '@stdlib/random/base/bernoulli' ).factory;
	*
	* var bernoulli = factory({
	*     'seed': 297
	* });
	*
	* var v = bernoulli( 0.5 );
	* // returns <number>
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var bernoulli = require( './main.js' );
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	setReadOnly( bernoulli, 'factory', factory );
	
	
	// EXPORTS //
	
	module.exports = bernoulli;
	
	},{"./factory.js":214,"./main.js":216,"@stdlib/utils/define-nonenumerable-read-only-property":256}],216:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	/**
	* Returns a pseudorandom random number drawn from a Bernoulli distribution with parameter `p`.
	*
	* @name bernoulli
	* @type {PRNG}
	* @param {Probability} p - success probability
	* @returns {NonNegativeInteger} pseudorandom number
	*
	* @example
	* var v = bernoulli( 0.5 );
	* // returns <number>
	*
	* @example
	* var v = bernoulli( 3.14 );
	* // returns NaN
	*
	* @example
	* var v = bernoulli( -1.0 );
	* // returns NaN
	*
	* @example
	* var v = bernoulli( NaN );
	* // returns NaN
	*/
	var bernoulli = factory();
	
	
	// EXPORTS //
	
	module.exports = bernoulli;
	
	},{"./factory.js":214}],217:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isnan = require( '@stdlib/math/base/assert/is-nan' );
	
	
	// VARIABLES //
	
	var NUM_WARMUPS = 8;
	
	
	// MAIN //
	
	/**
	* Initializes a shuffle table.
	*
	* @private
	* @param {PRNG} rand - pseudorandom number generator
	* @param {Int32Array} table - table
	* @param {PositiveInteger} N - table size
	* @throws {Error} PRNG returned `NaN`
	* @returns {NumberArray} shuffle table
	*/
	function createTable( rand, table, N ) {
		var v;
		var i;
	
		// "warm-up" the PRNG...
		for ( i = 0; i < NUM_WARMUPS; i++ ) {
			v = rand();
	
			// Prevent the above loop from being discarded by the compiler...
			if ( isnan( v ) ) {
				throw new Error( 'unexpected error. PRNG returned `NaN`.' );
			}
		}
		// Initialize the shuffle table...
		for ( i = N-1; i >= 0; i-- ) {
			table[ i ] = rand();
		}
		return table;
	}
	
	
	// EXPORTS //
	
	module.exports = createTable;
	
	},{"@stdlib/math/base/assert/is-nan":198}],218:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	/* eslint-disable max-len */
	
	'use strict';
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
	var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var isObject = require( '@stdlib/assert/is-plain-object' );
	var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
	var isCollection = require( '@stdlib/assert/is-collection' );
	var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
	var isInt32Array = require( '@stdlib/assert/is-int32array' );
	var gcopy = require( '@stdlib/blas/base/gcopy' );
	var floor = require( '@stdlib/math/base/special/floor' );
	var Int32Array = require( '@stdlib/array/int32' );
	var INT32_MAX = require( '@stdlib/constants/math/int32-max' );
	var typedarray2json = require( '@stdlib/array/to-json' );
	var createTable = require( './create_table.js' );
	var randint32 = require( './rand_int32.js' );
	
	
	// VARIABLES //
	
	var NORMALIZATION_CONSTANT = (INT32_MAX - 1)|0; // asm type annotation
	var MAX_SEED = (INT32_MAX - 1)|0; // asm type annotation
	var A = 16807|0; // asm type annotation
	
	// Define the number of elements in the shuffle table:
	var TABLE_LENGTH = 32;
	
	// Define the state array schema version:
	var STATE_ARRAY_VERSION = 1; // NOTE: anytime the state array schema changes, this value should be incremented!!!
	
	// Define the number of sections in the state array:
	var NUM_STATE_SECTIONS = 3; // table, other, seed
	
	// Define the index offset of the "table" section in the state array:
	var TABLE_SECTION_OFFSET = 2; // | version | num_sections | table_length | ...table | other_length | shuffle_state | prng_state | seed_length | ...seed |
	
	// Define the index offset of the "state" section in the state array:
	var STATE_SECTION_OFFSET = TABLE_LENGTH + 3; // | version | num_sections | table_length | ...table | state_length | shuffle_state | prng_state | seed_length | ...seed |
	
	// Define the index offset of the seed section in the state array:
	var SEED_SECTION_OFFSET = TABLE_LENGTH + 6; // | version | num_sections | table_length | ...table | state_length | shuffle_state | prng_state | seed_length | ...seed |
	
	// Define the length of the "fixed" length portion of the state array:
	var STATE_FIXED_LENGTH = TABLE_LENGTH + 7; // 1 (version) + 1 (num_sections) + 1 (table_length) + TABLE_LENGTH (table) + 1 (state_length) + 1 (shuffle_state) + 1 (prng_state) + 1 (seed_length)
	
	// Define the indices for the shuffle table and PRNG states:
	var SHUFFLE_STATE = STATE_SECTION_OFFSET + 1;
	var PRNG_STATE = STATE_SECTION_OFFSET + 2;
	
	
	// FUNCTIONS //
	
	/**
	* Verifies state array integrity.
	*
	* @private
	* @param {Int32Array} state - state array
	* @param {boolean} FLG - flag indicating whether the state array was provided as an option (true) or an argument (false)
	* @returns {(Error|null)} an error or `null`
	*/
	function verifyState( state, FLG ) {
		var s1;
		if ( FLG ) {
			s1 = 'option';
		} else {
			s1 = 'argument';
		}
		// The state array must have a minimum length...
		if ( state.length < STATE_FIXED_LENGTH+1 ) {
			return new RangeError( 'invalid '+s1+'. `state` array has insufficient length.' );
		}
		// The first element of the state array must equal the supported state array schema version...
		if ( state[ 0 ] !== STATE_ARRAY_VERSION ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible schema version. Expected: '+STATE_ARRAY_VERSION+'. Actual: '+state[ 0 ]+'.' );
		}
		// The second element of the state array must contain the number of sections...
		if ( state[ 1 ] !== NUM_STATE_SECTIONS ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible number of sections. Expected: '+NUM_STATE_SECTIONS+'. Actual: '+state[ 1 ]+'.' );
		}
		// The length of the "table" section must equal `TABLE_LENGTH`...
		if ( state[ TABLE_SECTION_OFFSET ] !== TABLE_LENGTH ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible table length. Expected: '+TABLE_LENGTH+'. Actual: '+state[ TABLE_SECTION_OFFSET ]+'.' );
		}
		// The length of the "state" section must equal `2`...
		if ( state[ STATE_SECTION_OFFSET ] !== 2 ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible state length. Expected: '+(2).toString()+'. Actual: '+state[ STATE_SECTION_OFFSET ]+'.' );
		}
		// The length of the "seed" section much match the empirical length...
		if ( state[ SEED_SECTION_OFFSET ] !== state.length-STATE_FIXED_LENGTH ) {
			return new RangeError( 'invalid '+s1+'. `state` array length is incompatible with seed section length. Expected: '+(state.length-STATE_FIXED_LENGTH)+'. Actual: '+state[ SEED_SECTION_OFFSET ]+'.' );
		}
		return null;
	}
	
	
	// MAIN //
	
	/**
	* Returns a linear congruential pseudorandom number generator (LCG) whose output is shuffled.
	*
	* @param {Options} [options] - options
	* @param {PRNGSeedMINSTD} [options.seed] - pseudorandom number generator seed
	* @param {PRNGStateMINSTD} [options.state] - pseudorandom number generator state
	* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} a seed must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integers less than the maximum signed 32-bit integer
	* @throws {RangeError} a numeric seed must be a positive integer less than the maximum signed 32-bit integer
	* @throws {TypeError} state must be an `Int32Array`
	* @throws {Error} must provide a valid state
	* @throws {TypeError} `copy` option must be a boolean
	* @returns {PRNG} shuffled LCG PRNG
	*
	* @example
	* var minstd = factory();
	*
	* var v = minstd();
	* // returns <number>
	*
	* @example
	* // Return a seeded LCG:
	* var minstd = factory({
	*     'seed': 1234
	* });
	*
	* var v = minstd();
	* // returns 1421600654
	*/
	function factory( options ) {
		var STATE;
		var state;
		var opts;
		var seed;
		var slen;
		var err;
	
		opts = {};
		if ( arguments.length ) {
			if ( !isObject( options ) ) {
				throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
			}
			if ( hasOwnProp( options, 'copy' ) ) {
				opts.copy = options.copy;
				if ( !isBoolean( options.copy ) ) {
					throw new TypeError( 'invalid option. `copy` option must be a boolean. Option: `' + options.copy + '`.' );
				}
			}
			if ( hasOwnProp( options, 'state' ) ) {
				state = options.state;
				opts.state = true;
				if ( !isInt32Array( state ) ) {
					throw new TypeError( 'invalid option. `state` option must be an Int32Array. Option: `' + state + '`.' );
				}
				err = verifyState( state, true );
				if ( err ) {
					throw err;
				}
				if ( opts.copy === false ) {
					STATE = state;
				} else {
					STATE = new Int32Array( state.length );
					gcopy( state.length, state, 1, STATE, 1 );
				}
				// Create a state (table) "view":
				state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );
	
				// Create a seed "view":
				seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), state[ SEED_SECTION_OFFSET ] );
			}
			// If provided a PRNG state, we ignore the `seed` option...
			if ( seed === void 0 ) {
				if ( hasOwnProp( options, 'seed' ) ) {
					seed = options.seed;
					opts.seed = true;
					if ( isPositiveInteger( seed ) ) {
						if ( seed > MAX_SEED ) {
							throw new RangeError( 'invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `' + seed + '`.' );
						}
						seed |= 0; // asm type annotation
					} else if ( isCollection( seed ) && seed.length > 0 ) {
						slen = seed.length;
						STATE = new Int32Array( STATE_FIXED_LENGTH+slen );
	
						// Initialize sections:
						STATE[ 0 ] = STATE_ARRAY_VERSION;
						STATE[ 1 ] = NUM_STATE_SECTIONS;
						STATE[ TABLE_SECTION_OFFSET ] = TABLE_LENGTH;
						STATE[ STATE_SECTION_OFFSET ] = 2;
						STATE[ PRNG_STATE ] = seed[ 0 ];
						STATE[ SEED_SECTION_OFFSET ] = slen;
	
						// Copy the provided seed array to prevent external mutation, as mutation would lead to an inability to reproduce PRNG values according to the PRNG's stated seed:
						gcopy.ndarray( slen, seed, 1, 0, STATE, 1, SEED_SECTION_OFFSET+1 );
	
						// Create a state (table) "view":
						state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );
	
						// Create a seed "view":
						seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), slen );
	
						// Initialize the internal PRNG state:
						state = createTable( minstd, state, TABLE_LENGTH );
						STATE[ SHUFFLE_STATE ] = state[ 0 ];
					} else {
						throw new TypeError( 'invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `' + seed + '`.' );
					}
				} else {
					seed = randint32()|0; // asm type annotation
				}
			}
		} else {
			seed = randint32()|0; // asm type annotation
		}
		if ( state === void 0 ) {
			STATE = new Int32Array( STATE_FIXED_LENGTH+1 );
	
			// Initialize sections:
			STATE[ 0 ] = STATE_ARRAY_VERSION;
			STATE[ 1 ] = NUM_STATE_SECTIONS;
			STATE[ TABLE_SECTION_OFFSET ] = TABLE_LENGTH;
			STATE[ STATE_SECTION_OFFSET ] = 2;
			STATE[ PRNG_STATE ] = seed;
			STATE[ SEED_SECTION_OFFSET ] = 1;
			STATE[ SEED_SECTION_OFFSET+1 ] = seed;
	
			// Create a state (table) "view":
			state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );
	
			// Create a seed "view":
			seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );
	
			// Initialize the internal PRNG state:
			state = createTable( minstd, state, TABLE_LENGTH );
			STATE[ SHUFFLE_STATE ] = state[ 0 ];
		}
		setReadOnly( minstdShuffle, 'NAME', 'minstd-shuffle' );
		setReadOnlyAccessor( minstdShuffle, 'seed', getSeed );
		setReadOnlyAccessor( minstdShuffle, 'seedLength', getSeedLength );
		setReadWriteAccessor( minstdShuffle, 'state', getState, setState );
		setReadOnlyAccessor( minstdShuffle, 'stateLength', getStateLength );
		setReadOnlyAccessor( minstdShuffle, 'byteLength', getStateSize );
		setReadOnly( minstdShuffle, 'toJSON', toJSON );
		setReadOnly( minstdShuffle, 'MIN', 1 );
		setReadOnly( minstdShuffle, 'MAX', INT32_MAX-1 );
		setReadOnly( minstdShuffle, 'normalized', normalized );
	
		setReadOnly( normalized, 'NAME', minstdShuffle.NAME );
		setReadOnlyAccessor( normalized, 'seed', getSeed );
		setReadOnlyAccessor( normalized, 'seedLength', getSeedLength );
		setReadWriteAccessor( normalized, 'state', getState, setState );
		setReadOnlyAccessor( normalized, 'stateLength', getStateLength );
		setReadOnlyAccessor( normalized, 'byteLength', getStateSize );
		setReadOnly( normalized, 'toJSON', toJSON );
		setReadOnly( normalized, 'MIN', (minstdShuffle.MIN-1.0) / NORMALIZATION_CONSTANT );
		setReadOnly( normalized, 'MAX', (minstdShuffle.MAX-1.0) / NORMALIZATION_CONSTANT );
	
		return minstdShuffle;
	
		/**
		* Returns the PRNG seed.
		*
		* @private
		* @returns {PRNGSeedMINSTD} seed
		*/
		function getSeed() {
			var len = STATE[ SEED_SECTION_OFFSET ];
			return gcopy( len, seed, 1, new Int32Array( len ), 1 );
		}
	
		/**
		* Returns the PRNG seed length.
		*
		* @private
		* @returns {PositiveInteger} seed length
		*/
		function getSeedLength() {
			return STATE[ SEED_SECTION_OFFSET ];
		}
	
		/**
		* Returns the PRNG state length.
		*
		* @private
		* @returns {PositiveInteger} state length
		*/
		function getStateLength() {
			return STATE.length;
		}
	
		/**
		* Returns the PRNG state size (in bytes).
		*
		* @private
		* @returns {PositiveInteger} state size (in bytes)
		*/
		function getStateSize() {
			return STATE.byteLength;
		}
	
		/**
		* Returns the current PRNG state.
		*
		* ## Notes
		*
		* -   The PRNG state array is comprised of a preamble followed by `3` sections:
		*
		*     0.  preamble (version + number of sections)
		*     1.  shuffle table
		*     2.  internal PRNG state
		*     3.  PRNG seed
		*
		* -   The first element of the PRNG state array preamble is the state array schema version.
		*
		* -   The second element of the PRNG state array preamble is the number of state array sections (i.e., `3`).
		*
		* -   The first element of each section following the preamble specifies the section length. The remaining section elements comprise the section contents.
		*
		* @private
		* @returns {PRNGStateMINSTD} current state
		*/
		function getState() {
			var len = STATE.length;
			return gcopy( len, STATE, 1, new Int32Array( len ), 1 );
		}
	
		/**
		* Sets the PRNG state.
		*
		* ## Notes
		*
		* -   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
		* -   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).
		*
		* @private
		* @param {PRNGStateMINSTD} s - generator state
		* @throws {TypeError} must provide an `Int32Array`
		* @throws {Error} must provide a valid state
		*/
		function setState( s ) {
			var err;
			if ( !isInt32Array( s ) ) {
				throw new TypeError( 'invalid argument. Must provide an Int32Array. Value: `' + s + '`.' );
			}
			err = verifyState( s, false );
			if ( err ) {
				throw err;
			}
			if ( opts.copy === false ) {
				if ( opts.state && s.length === STATE.length ) {
					gcopy( s.length, s, 1, STATE, 1 ); // update current shared state
				} else {
					STATE = s; // point to new shared state
					opts.state = true; // setting this flag allows updating a shared state even if a state array was not provided at PRNG creation
				}
			} else {
				// Check if we can reuse allocated memory...
				if ( s.length !== STATE.length ) {
					STATE = new Int32Array( s.length ); // reallocate
				}
				gcopy( s.length, s, 1, STATE, 1 );
			}
			// Create a new state (table) "view":
			state = new Int32Array( STATE.buffer, STATE.byteOffset+((TABLE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), TABLE_LENGTH );
	
			// Create a new seed "view":
			seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), STATE[ SEED_SECTION_OFFSET ] );
		}
	
		/**
		* Serializes the pseudorandom number generator as a JSON object.
		*
		* ## Notes
		*
		* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
		*
		* @private
		* @returns {Object} JSON representation
		*/
		function toJSON() {
			var out = {};
			out.type = 'PRNG';
			out.name = minstdShuffle.NAME;
			out.state = typedarray2json( STATE );
			out.params = [];
			return out;
		}
	
		/**
		* Generates a pseudorandom integer on the interval \\( [1,2^{31}-1) \\).
		*
		* @private
		* @returns {integer32} pseudorandom integer
		*/
		function minstd() {
			var s = STATE[ PRNG_STATE ]|0; // asm type annotation
			s = ( (A*s)%INT32_MAX )|0; // asm type annotation
			STATE[ PRNG_STATE ] = s;
			return s|0; // asm type annotation
		}
	
		/**
		* Generates a pseudorandom integer on the interval \\( [1,2^{31}-1) \\).
		*
		* @private
		* @returns {integer32} pseudorandom integer
		*
		* @example
		* var v = minstd();
		* // returns <number>
		*/
		function minstdShuffle() {
			var s;
			var i;
	
			s = STATE[ SHUFFLE_STATE ];
			i = floor( TABLE_LENGTH * (s/INT32_MAX) );
	
			// Pull a state from the table:
			s = state[ i ];
	
			// Update the PRNG state:
			STATE[ SHUFFLE_STATE ] = s;
	
			// Replace the pulled state:
			state[ i ] = minstd();
	
			return s;
		}
	
		/**
		* Generates a pseudorandom number on the interval \\( [0,1) \\).
		*
		* @private
		* @returns {number} pseudorandom number
		*
		* @example
		* var v = normalized();
		* // returns <number>
		*/
		function normalized() {
			return (minstdShuffle()-1) / NORMALIZATION_CONSTANT;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = factory;
	
	},{"./create_table.js":217,"./rand_int32.js":221,"@stdlib/array/int32":10,"@stdlib/array/to-json":17,"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-boolean":86,"@stdlib/assert/is-collection":94,"@stdlib/assert/is-int32array":110,"@stdlib/assert/is-plain-object":137,"@stdlib/assert/is-positive-integer":139,"@stdlib/blas/base/gcopy":169,"@stdlib/constants/math/int32-max":187,"@stdlib/math/base/special/floor":205,"@stdlib/utils/define-nonenumerable-read-only-accessor":254,"@stdlib/utils/define-nonenumerable-read-only-property":256,"@stdlib/utils/define-nonenumerable-read-write-accessor":258}],219:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* A linear congruential pseudorandom number generator (LCG) whose output is shuffled.
	*
	* @module @stdlib/random/base/minstd-shuffle
	*
	* @example
	* var minstd = require( '@stdlib/random/base/minstd-shuffle' );
	*
	* var v = minstd();
	* // returns <number>
	*
	* @example
	* var factory = require( '@stdlib/random/base/minstd-shuffle' ).factory;
	*
	* var minstd = factory({
	*     'seed': 1234
	* });
	*
	* var v = minstd();
	* // returns 1421600654
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var minstd = require( './main.js' );
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	setReadOnly( minstd, 'factory', factory );
	
	
	// EXPORTS //
	
	module.exports = minstd;
	
	},{"./factory.js":218,"./main.js":220,"@stdlib/utils/define-nonenumerable-read-only-property":256}],220:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var factory = require( './factory.js' );
	var randint32 = require( './rand_int32.js' );
	
	
	// MAIN //
	
	/**
	* Generates a pseudorandom integer on the interval \\( [1,2^{31}-1) \\).
	*
	* ## Method
	*
	* Linear congruential generators (LCGs) use the recurrence relation
	*
	* ```tex
	* X_{n+1} = ( a \cdot X_n + c ) \operatorname{mod}(m)
	* ```
	*
	* where the modulus \\( m \\) is a prime number or power of a prime number and \\( a \\) is a primitive root modulo \\( m \\).
	*
	* <!-- <note> -->
	*
	* For an LCG to be a Lehmer RNG, the seed \\( X_0 \\) must be coprime to \\( m \\).
	*
	* <!-- </note> -->
	*
	* In this implementation, the constants \\( a \\), \\( c \\), and \\( m \\) have the values
	*
	* ```tex
	* \begin{align*}
	* a &= 7^5 = 16807 \\
	* c &= 0 \\
	* m &= 2^{31} - 1 = 2147483647
	* \end{align*}
	* ```
	*
	* <!-- <note> -->
	*
	* The constant \\( m \\) is a Mersenne prime (modulo \\(31\\)).
	*
	* <!-- </note> -->
	*
	* <!-- <note> -->
	*
	* The constant \\( a \\) is a primitive root (modulo \\(31\\)).
	*
	* <!-- </note> -->
	*
	* Accordingly, the maximum possible product is
	*
	* ```tex
	* 16807 \cdot (m - 1) \approx 2^{46}
	* ```
	*
	* The values for \\( a \\), \\( c \\), and \\( m \\) are taken from Park and Miller, "Random Number Generators: Good Ones Are Hard To Find". Park's and Miller's article is also the basis for a recipe in the second edition of _Numerical Recipes in C_.
	*
	* This implementation subsequently shuffles the output of a linear congruential pseudorandom number generator (LCG) using a shuffle table in accordance with the Bays-Durham algorithm.
	*
	*
	* ## Notes
	*
	* -   The generator has a period of approximately \\(2.1\mbox{e}9\\) (see [Numerical Recipes in C, 2nd Edition](#references), p. 279).
	*
	*
	* ## References
	*
	* -   Bays, Carter, and S. D. Durham. 1976. "Improving a Poor Random Number Generator." _ACM Transactions on Mathematical Software_ 2 (1). New York, NY, USA: ACM: 59–64. doi:[10.1145/355666.355670](http://dx.doi.org/10.1145/355666.355670).
	* -   Herzog, T.N., and G. Lord. 2002. _Applications of Monte Carlo Methods to Finance and Insurance_. ACTEX Publications. [https://books.google.com/books?id=vC7I\\\_gdX-A0C](https://books.google.com/books?id=vC7I\_gdX-A0C).
	* -   Press, William H., Brian P. Flannery, Saul A. Teukolsky, and William T. Vetterling. 1992. _Numerical Recipes in C: The Art of Scientific Computing, Second Edition_. Cambridge University Press.
	*
	*
	* @function minstd
	* @type {PRNG}
	* @returns {PositiveInteger} pseudorandom integer
	*
	* @example
	* var v = minstd();
	* // returns <number>
	*/
	var minstd = factory({
		'seed': randint32()
	});
	
	
	// EXPORTS //
	
	module.exports = minstd;
	
	},{"./factory.js":218,"./rand_int32.js":221}],221:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var INT32_MAX = require( '@stdlib/constants/math/int32-max' );
	var floor = require( '@stdlib/math/base/special/floor' );
	
	
	// VARIABLES //
	
	var MAX = INT32_MAX - 1;
	
	
	// MAIN //
	
	/**
	* Returns a pseudorandom integer on the interval \\([1, 2^{31}-1)\\).
	*
	* @private
	* @returns {PositiveInteger} pseudorandom integer
	*
	* @example
	* var v = randint32();
	* // returns <number>
	*/
	function randint32() {
		var v = floor( 1.0 + (MAX*Math.random()) ); // eslint-disable-line stdlib/no-builtin-math
		return v|0; // asm type annotation
	}
	
	
	// EXPORTS //
	
	module.exports = randint32;
	
	},{"@stdlib/constants/math/int32-max":187,"@stdlib/math/base/special/floor":205}],222:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	/* eslint-disable max-len */
	
	'use strict';
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
	var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var isObject = require( '@stdlib/assert/is-plain-object' );
	var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
	var isCollection = require( '@stdlib/assert/is-collection' );
	var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
	var isInt32Array = require( '@stdlib/assert/is-int32array' );
	var INT32_MAX = require( '@stdlib/constants/math/int32-max' );
	var Int32Array = require( '@stdlib/array/int32' );
	var gcopy = require( '@stdlib/blas/base/gcopy' );
	var typedarray2json = require( '@stdlib/array/to-json' );
	var randint32 = require( './rand_int32.js' );
	
	
	// VARIABLES //
	
	var NORMALIZATION_CONSTANT = (INT32_MAX - 1)|0; // asm type annotation
	var MAX_SEED = (INT32_MAX - 1)|0; // asm type annotation
	var A = 16807|0; // asm type annotation
	
	// Define the state array schema version:
	var STATE_ARRAY_VERSION = 1; // NOTE: anytime the state array schema changes, this value should be incremented!!!
	
	// Define the number of sections in the state array:
	var NUM_STATE_SECTIONS = 2; // state, seed
	
	// Define the index offset of the "state" section in the state array:
	var STATE_SECTION_OFFSET = 2; // | version | num_sections | state_length | ...state | seed_length | ...seed |
	
	// Define the index offset of the seed section in the state array:
	var SEED_SECTION_OFFSET = 4; // | version | num_sections | state_length | ...state | seed_length | ...seed |
	
	// Define the length of the "fixed" length portion of the state array:
	var STATE_FIXED_LENGTH = 5; // 1 (version) + 1 (num_sections) + 1 (state_length) + 1 (state) + 1 (seed_length)
	
	
	// FUNCTIONS //
	
	/**
	* Verifies state array integrity.
	*
	* @private
	* @param {Int32Array} state - state array
	* @param {boolean} FLG - flag indicating whether the state array was provided as an option (true) or an argument (false)
	* @returns {(Error|null)} an error or `null`
	*/
	function verifyState( state, FLG ) {
		var s1;
		if ( FLG ) {
			s1 = 'option';
		} else {
			s1 = 'argument';
		}
		// The state array must have a minimum length...
		if ( state.length < STATE_FIXED_LENGTH+1 ) {
			return new RangeError( 'invalid '+s1+'. `state` array has insufficient length.' );
		}
		// The first element of the state array must equal the supported state array schema version...
		if ( state[ 0 ] !== STATE_ARRAY_VERSION ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible schema version. Expected: '+STATE_ARRAY_VERSION+'. Actual: '+state[ 0 ]+'.' );
		}
		// The second element of the state array must contain the number of sections...
		if ( state[ 1 ] !== NUM_STATE_SECTIONS ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible number of sections. Expected: '+NUM_STATE_SECTIONS+'. Actual: '+state[ 1 ]+'.' );
		}
		// The length of the "state" section must equal `1`...
		if ( state[ STATE_SECTION_OFFSET ] !== 1 ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible state length. Expected: '+(1).toString()+'. Actual: '+state[ STATE_SECTION_OFFSET ]+'.' );
		}
		// The length of the "seed" section much match the empirical length...
		if ( state[ SEED_SECTION_OFFSET ] !== state.length-STATE_FIXED_LENGTH ) {
			return new RangeError( 'invalid '+s1+'. `state` array length is incompatible with seed section length. Expected: '+(state.length-STATE_FIXED_LENGTH)+'. Actual: '+state[ SEED_SECTION_OFFSET ]+'.' );
		}
		return null;
	}
	
	
	// MAIN //
	
	/**
	* Returns a linear congruential pseudorandom number generator (LCG) based on Park and Miller.
	*
	* @param {Options} [options] - options
	* @param {PRNGSeedMINSTD} [options.seed] - pseudorandom number generator seed
	* @param {PRNGStateMINSTD} [options.state] - pseudorandom number generator state
	* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} a seed must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integers less than the maximum signed 32-bit integer
	* @throws {RangeError} a numeric seed must be a positive integer less than the maximum signed 32-bit integer
	* @throws {TypeError} state must be an `Int32Array`
	* @throws {Error} must provide a valid state
	* @throws {TypeError} `copy` option must be a boolean
	* @returns {PRNG} LCG PRNG
	*
	* @example
	* var minstd = factory();
	*
	* var v = minstd();
	* // returns <number>
	*
	* @example
	* // Return a seeded LCG:
	* var minstd = factory({
	*     'seed': 1234
	* });
	*
	* var v = minstd();
	* // returns 20739838
	*/
	function factory( options ) {
		var STATE;
		var state;
		var opts;
		var seed;
		var slen;
		var err;
	
		opts = {};
		if ( arguments.length ) {
			if ( !isObject( options ) ) {
				throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
			}
			if ( hasOwnProp( options, 'copy' ) ) {
				opts.copy = options.copy;
				if ( !isBoolean( options.copy ) ) {
					throw new TypeError( 'invalid option. `copy` option must be a boolean. Option: `' + options.copy + '`.' );
				}
			}
			if ( hasOwnProp( options, 'state' ) ) {
				state = options.state;
				opts.state = true;
				if ( !isInt32Array( state ) ) {
					throw new TypeError( 'invalid option. `state` option must be an Int32Array. Option: `' + state + '`.' );
				}
				err = verifyState( state, true );
				if ( err ) {
					throw err;
				}
				if ( opts.copy === false ) {
					STATE = state;
				} else {
					STATE = new Int32Array( state.length );
					gcopy( state.length, state, 1, STATE, 1 );
				}
				// Create a state "view":
				state = new Int32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );
	
				// Create a seed "view":
				seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), state[ SEED_SECTION_OFFSET ] );
			}
			// If provided a PRNG state, we ignore the `seed` option...
			if ( seed === void 0 ) {
				if ( hasOwnProp( options, 'seed' ) ) {
					seed = options.seed;
					opts.seed = true;
					if ( isPositiveInteger( seed ) ) {
						if ( seed > MAX_SEED ) {
							throw new RangeError( 'invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `' + seed + '`.' );
						}
						seed |= 0; // asm type annotation
					} else if ( isCollection( seed ) && seed.length > 0 ) {
						slen = seed.length;
						STATE = new Int32Array( STATE_FIXED_LENGTH+slen );
	
						// Initialize sections:
						STATE[ 0 ] = STATE_ARRAY_VERSION;
						STATE[ 1 ] = NUM_STATE_SECTIONS;
						STATE[ STATE_SECTION_OFFSET ] = 1;
						STATE[ SEED_SECTION_OFFSET ] = slen;
	
						// Copy the provided seed array to prevent external mutation, as mutation would lead to an inability to reproduce PRNG values according to the PRNG's stated seed:
						gcopy.ndarray( slen, seed, 1, 0, STATE, 1, SEED_SECTION_OFFSET+1 );
	
						// Create a state "view":
						state = new Int32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );
	
						// Create a seed "view":
						seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), slen );
	
						// Initialize the internal PRNG state:
						state[ 0 ] = seed[ 0 ];
					} else {
						throw new TypeError( 'invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `' + seed + '`.' );
					}
				} else {
					seed = randint32()|0; // asm type annotation
				}
			}
		} else {
			seed = randint32()|0; // asm type annotation
		}
		if ( state === void 0 ) {
			STATE = new Int32Array( STATE_FIXED_LENGTH+1 );
	
			// Initialize sections:
			STATE[ 0 ] = STATE_ARRAY_VERSION;
			STATE[ 1 ] = NUM_STATE_SECTIONS;
			STATE[ STATE_SECTION_OFFSET ] = 1;
			STATE[ SEED_SECTION_OFFSET ] = 1;
			STATE[ SEED_SECTION_OFFSET+1 ] = seed;
	
			// Create a state "view":
			state = new Int32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );
	
			// Create a seed "view":
			seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );
	
			// Initialize the internal PRNG state:
			state[ 0 ] = seed[ 0 ];
		}
		setReadOnly( minstd, 'NAME', 'minstd' );
		setReadOnlyAccessor( minstd, 'seed', getSeed );
		setReadOnlyAccessor( minstd, 'seedLength', getSeedLength );
		setReadWriteAccessor( minstd, 'state', getState, setState );
		setReadOnlyAccessor( minstd, 'stateLength', getStateLength );
		setReadOnlyAccessor( minstd, 'byteLength', getStateSize );
		setReadOnly( minstd, 'toJSON', toJSON );
		setReadOnly( minstd, 'MIN', 1 );
		setReadOnly( minstd, 'MAX', INT32_MAX-1 );
		setReadOnly( minstd, 'normalized', normalized );
	
		setReadOnly( normalized, 'NAME', minstd.NAME );
		setReadOnlyAccessor( normalized, 'seed', getSeed );
		setReadOnlyAccessor( normalized, 'seedLength', getSeedLength );
		setReadWriteAccessor( normalized, 'state', getState, setState );
		setReadOnlyAccessor( normalized, 'stateLength', getStateLength );
		setReadOnlyAccessor( normalized, 'byteLength', getStateSize );
		setReadOnly( normalized, 'toJSON', toJSON );
		setReadOnly( normalized, 'MIN', (minstd.MIN-1.0) / NORMALIZATION_CONSTANT );
		setReadOnly( normalized, 'MAX', (minstd.MAX-1.0) / NORMALIZATION_CONSTANT );
	
		return minstd;
	
		/**
		* Returns the PRNG seed.
		*
		* @private
		* @returns {PRNGSeedMINSTD} seed
		*/
		function getSeed() {
			var len = STATE[ SEED_SECTION_OFFSET ];
			return gcopy( len, seed, 1, new Int32Array( len ), 1 );
		}
	
		/**
		* Returns the PRNG seed length.
		*
		* @private
		* @returns {PositiveInteger} seed length
		*/
		function getSeedLength() {
			return STATE[ SEED_SECTION_OFFSET ];
		}
	
		/**
		* Returns the PRNG state length.
		*
		* @private
		* @returns {PositiveInteger} state length
		*/
		function getStateLength() {
			return STATE.length;
		}
	
		/**
		* Returns the PRNG state size (in bytes).
		*
		* @private
		* @returns {PositiveInteger} state size (in bytes)
		*/
		function getStateSize() {
			return STATE.byteLength;
		}
	
		/**
		* Returns the current PRNG state.
		*
		* ## Notes
		*
		* -   The PRNG state array is comprised of a preamble followed by `2` sections:
		*
		*     0.  preamble (version + number of sections)
		*     1.  internal PRNG state
		*     2.  PRNG seed
		*
		* -   The first element of the PRNG state array preamble is the state array schema version.
		*
		* -   The second element of the PRNG state array preamble is the number of state array sections (i.e., `2`).
		*
		* -   The first element of each section following the preamble specifies the section length. The remaining section elements comprise the section contents.
		*
		* @private
		* @returns {PRNGStateMINSTD} current state
		*/
		function getState() {
			var len = STATE.length;
			return gcopy( len, STATE, 1, new Int32Array( len ), 1 );
		}
	
		/**
		* Sets the PRNG state.
		*
		* ## Notes
		*
		* -   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
		* -   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).
		*
		* @private
		* @param {PRNGStateMINSTD} s - generator state
		* @throws {TypeError} must provide an `Int32Array`
		* @throws {Error} must provide a valid state
		*/
		function setState( s ) {
			var err;
			if ( !isInt32Array( s ) ) {
				throw new TypeError( 'invalid argument. Must provide an Int32Array. Value: `' + s + '`.' );
			}
			err = verifyState( s, false );
			if ( err ) {
				throw err;
			}
			if ( opts.copy === false ) {
				if ( opts.state && s.length === STATE.length ) {
					gcopy( s.length, s, 1, STATE, 1 ); // update current shared state
				} else {
					STATE = s; // point to new shared state
					opts.state = true; // setting this flag allows updating a shared state even if a state array was not provided at PRNG creation
				}
			} else {
				// Check if we can reuse allocated memory...
				if ( s.length !== STATE.length ) {
					STATE = new Int32Array( s.length ); // reallocate
				}
				gcopy( s.length, s, 1, STATE, 1 );
			}
			// Create a new state "view":
			state = new Int32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );
	
			// Create a new seed "view":
			seed = new Int32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), STATE[ SEED_SECTION_OFFSET ] );
		}
	
		/**
		* Serializes the pseudorandom number generator as a JSON object.
		*
		* ## Notes
		*
		* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
		*
		* @private
		* @returns {Object} JSON representation
		*/
		function toJSON() {
			var out = {};
			out.type = 'PRNG';
			out.name = minstd.NAME;
			out.state = typedarray2json( STATE );
			out.params = [];
			return out;
		}
	
		/**
		* Generates a pseudorandom integer on the interval \\( [1,2^{31}-1) \\).
		*
		* @private
		* @returns {integer32} pseudorandom integer
		*/
		function minstd() {
			var s = state[ 0 ]|0; // asm type annotation
			s = ( (A*s)%INT32_MAX )|0; // asm type annotation
			state[ 0 ] = s;
			return s|0; // asm type annotation
		}
	
		/**
		* Generates a pseudorandom number on the interval \\( [0,1) \\).
		*
		* @private
		* @returns {number} pseudorandom number
		*/
		function normalized() {
			return (minstd()-1) / NORMALIZATION_CONSTANT;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = factory;
	
	},{"./rand_int32.js":225,"@stdlib/array/int32":10,"@stdlib/array/to-json":17,"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-boolean":86,"@stdlib/assert/is-collection":94,"@stdlib/assert/is-int32array":110,"@stdlib/assert/is-plain-object":137,"@stdlib/assert/is-positive-integer":139,"@stdlib/blas/base/gcopy":169,"@stdlib/constants/math/int32-max":187,"@stdlib/utils/define-nonenumerable-read-only-accessor":254,"@stdlib/utils/define-nonenumerable-read-only-property":256,"@stdlib/utils/define-nonenumerable-read-write-accessor":258}],223:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* A linear congruential pseudorandom number generator (LCG) based on Park and Miller.
	*
	* @module @stdlib/random/base/minstd
	*
	* @example
	* var minstd = require( '@stdlib/random/base/minstd' );
	*
	* var v = minstd();
	* // returns <number>
	*
	* @example
	* var factory = require( '@stdlib/random/base/minstd' ).factory;
	*
	* var minstd = factory({
	*     'seed': 1234
	* });
	*
	* var v = minstd();
	* // returns 20739838
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var minstd = require( './main.js' );
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	setReadOnly( minstd, 'factory', factory );
	
	
	// EXPORTS //
	
	module.exports = minstd;
	
	},{"./factory.js":222,"./main.js":224,"@stdlib/utils/define-nonenumerable-read-only-property":256}],224:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var factory = require( './factory.js' );
	var randint32 = require( './rand_int32.js' );
	
	
	// MAIN //
	
	/**
	* Generates a pseudorandom integer on the interval \\( [1,2^{31}-1) \\).
	*
	* ## Method
	*
	* Linear congruential generators (LCGs) use the recurrence relation
	*
	* ```tex
	* X_{n+1} = ( a \cdot X_n + c ) \operatorname{mod}(m)
	* ```
	*
	* where the modulus \\( m \\) is a prime number or power of a prime number and \\( a \\) is a primitive root modulo \\( m \\).
	*
	* <!-- <note> -->
	*
	* For an LCG to be a Lehmer RNG, the seed \\( X_0 \\) must be coprime to \\( m \\).
	*
	* <!-- </note> -->
	*
	* In this implementation, the constants \\( a \\), \\( c \\), and \\( m \\) have the values
	*
	* ```tex
	* \begin{align*}
	* a &= 7^5 = 16807 \\
	* c &= 0 \\
	* m &= 2^{31} - 1 = 2147483647
	* \end{align*}
	* ```
	*
	* <!-- <note> -->
	*
	* The constant \\( m \\) is a Mersenne prime (modulo \\(31\\)).
	*
	* <!-- </note> -->
	*
	* <!-- <note> -->
	*
	* The constant \\( a \\) is a primitive root (modulo \\(31\\)).
	*
	* <!-- </note> -->
	*
	* Accordingly, the maximum possible product is
	*
	* ```tex
	* 16807 \cdot (m - 1) \approx 2^{46}
	* ```
	*
	* The values for \\( a \\), \\( c \\), and \\( m \\) are taken from Park and Miller, "Random Number Generators: Good Ones Are Hard To Find". Park's and Miller's article is also the basis for a recipe in the second edition of _Numerical Recipes in C_.
	*
	*
	* ## Notes
	*
	* -   The generator has a period of approximately \\(2.1\mbox{e}9\\) (see [Numerical Recipes in C, 2nd Edition](#references), p. 279).
	*
	*
	* ## References
	*
	* -   Park, S. K., and K. W. Miller. 1988. "Random Number Generators: Good Ones Are Hard to Find." _Communications of the ACM_ 31 (10). New York, NY, USA: ACM: 1192–1201. doi:[10.1145/63039.63042](http://dx.doi.org/10.1145/63039.63042).
	* -   Press, William H., Brian P. Flannery, Saul A. Teukolsky, and William T. Vetterling. 1992. _Numerical Recipes in C: The Art of Scientific Computing, Second Edition_. Cambridge University Press.
	*
	*
	* @function minstd
	* @type {PRNG}
	* @returns {PositiveInteger} pseudorandom integer
	*
	* @example
	* var v = minstd();
	* // returns <number>
	*/
	var minstd = factory({
		'seed': randint32()
	});
	
	
	// EXPORTS //
	
	module.exports = minstd;
	
	},{"./factory.js":222,"./rand_int32.js":225}],225:[function(require,module,exports){
	arguments[4][221][0].apply(exports,arguments)
	},{"@stdlib/constants/math/int32-max":187,"@stdlib/math/base/special/floor":205,"dup":221}],226:[function(require,module,exports){
	/* eslint-disable max-lines, max-len */
	
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*
	*
	* ## Notice
	*
	* The original C code and copyright notice are from the [source implementation]{@link http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c}. The implementation has been modified for JavaScript.
	*
	* ```text
	* Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
	* All rights reserved.
	*
	* Redistribution and use in source and binary forms, with or without
	* modification, are permitted provided that the following conditions
	* are met:
	*
	*   1. Redistributions of source code must retain the above copyright
	*      notice, this list of conditions and the following disclaimer.
	*
	*   2. Redistributions in binary form must reproduce the above copyright
	*      notice, this list of conditions and the following disclaimer in the
	*      documentation and/or other materials provided with the distribution.
	*
	*   3. The names of its contributors may not be used to endorse or promote
	*      products derived from this software without specific prior written
	*      permission.
	*
	* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
	* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
	* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
	* A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	* CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	* PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
	* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
	* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	* ```
	*/
	
	'use strict';
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
	var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var isObject = require( '@stdlib/assert/is-plain-object' );
	var isCollection = require( '@stdlib/assert/is-collection' );
	var isUint32Array = require( '@stdlib/assert/is-uint32array' );
	var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
	var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
	var FLOAT64_MAX_SAFE_INTEGER = require( '@stdlib/constants/math/float64-max-safe-integer' );
	var UINT32_MAX = require( '@stdlib/constants/math/uint32-max' );
	var Uint32Array = require( '@stdlib/array/uint32' );
	var max = require( '@stdlib/math/base/special/max' );
	var uimul = require( '@stdlib/math/base/special/uimul' );
	var gcopy = require( '@stdlib/blas/base/gcopy' );
	var typedarray2json = require( '@stdlib/array/to-json' );
	var randuint32 = require( './rand_uint32.js' );
	
	
	// VARIABLES //
	
	// Define the size of the state array (see refs):
	var N = 624;
	
	// Define a (magic) constant used for indexing into the state array:
	var M = 397;
	
	// Define the maximum seed: 11111111111111111111111111111111
	var MAX_SEED = UINT32_MAX >>> 0; // asm type annotation
	
	// For seed arrays, define an initial state (magic) constant: 19650218 => 00000001001010111101011010101010
	var SEED_ARRAY_INIT_STATE = 19650218 >>> 0; // asm type annotation
	
	// Define a mask for the most significant `w-r` bits, where `w` is the word size (32 bits) and `r` is the separation point of one word (see refs): 2147483648 => 0x80000000 => 10000000000000000000000000000000
	var UPPER_MASK = 0x80000000 >>> 0; // asm type annotation
	
	// Define a mask for the least significant `r` bits (see refs): 2147483647 => 0x7fffffff => 01111111111111111111111111111111
	var LOWER_MASK = 0x7fffffff >>> 0; // asm type annotation
	
	// Define a multiplier (see Knuth TAOCP Vol2. 3rd Ed. P.106): 1812433253 => 01101100000001111000100101100101
	var KNUTH_MULTIPLIER = 1812433253 >>> 0; // asm type annotation
	
	// Define a (magic) multiplier: 1664525 => 00000000000110010110011000001101
	var MAGIC_MULTIPLIER_1 = 1664525 >>> 0; // asm type annotation
	
	// Define a (magic) multiplier: 1566083941 => 01011101010110001000101101100101
	var MAGIC_MULTIPLIER_2 = 1566083941 >>> 0; // asm type annotation
	
	// Define a tempering coefficient: 2636928640 => 0x9d2c5680 => 10011101001011000101011010000000
	var TEMPERING_COEFFICIENT_1 = 0x9d2c5680 >>> 0; // asm type annotation
	
	// Define a tempering coefficient: 4022730752 => 0xefc60000 => 11101111110001100000000000000000
	var TEMPERING_COEFFICIENT_2 = 0xefc60000 >>> 0; // asm type annotation
	
	// Define a constant vector `a` (see refs): 2567483615 => 0x9908b0df => 10011001000010001011000011011111
	var MATRIX_A = 0x9908b0df >>> 0; // asm type annotation
	
	// MAG01[x] = x * MATRIX_A; for x = {0,1}
	var MAG01 = [ 0x0 >>> 0, MATRIX_A >>> 0 ]; // asm type annotation
	
	// Define a normalization constant when generating double-precision floating-point numbers: 2^53 => 9007199254740992
	var FLOAT64_NORMALIZATION_CONSTANT = 1.0 / ( FLOAT64_MAX_SAFE_INTEGER+1.0 ); // eslint-disable-line id-length
	
	// 2^26: 67108864
	var TWO_26 = 67108864 >>> 0; // asm type annotation
	
	// 2^32: 2147483648 => 0x80000000 => 10000000000000000000000000000000
	var TWO_32 = 0x80000000 >>> 0; // asm type annotation
	
	// 1 (as a 32-bit unsigned integer): 1 => 0x1 => 00000000000000000000000000000001
	var ONE = 0x1 >>> 0; // asm type annotation
	
	// Define the maximum normalized pseudorandom double-precision floating-point number: ( (((2^32-1)>>>5)*2^26)+( (2^32-1)>>>6) ) / 2^53
	var MAX_NORMALIZED = FLOAT64_MAX_SAFE_INTEGER * FLOAT64_NORMALIZATION_CONSTANT;
	
	// Define the state array schema version:
	var STATE_ARRAY_VERSION = 1; // NOTE: anytime the state array schema changes, this value should be incremented!!!
	
	// Define the number of sections in the state array:
	var NUM_STATE_SECTIONS = 3; // state, other, seed
	
	// Define the index offset of the "state" section in the state array:
	var STATE_SECTION_OFFSET = 2; // | version | num_sections | state_length | ...state | other_length | state_index | seed_length | ...seed |
	
	// Define the index offset of the "other" section in the state array:
	var OTHER_SECTION_OFFSET = N + 3; // | version | num_sections | state_length | ...state | other_length | state_index | seed_length | ...seed |
	
	// Define the index offset of the seed section in the state array:
	var SEED_SECTION_OFFSET = N + 5; // | version | num_sections | state_length | ...state | other_length | state_index | seed_length | ...seed |
	
	// Define the length of the "fixed" length portion of the state array:
	var STATE_FIXED_LENGTH = N + 6; // 1 (version) + 1 (num_sections) + 1 (state_length) + N (state) + 1 (other_length) + 1 (state_index) + 1 (seed_length)
	
	
	// FUNCTIONS //
	
	/**
	* Verifies state array integrity.
	*
	* @private
	* @param {Uint32Array} state - state array
	* @param {boolean} FLG - flag indicating whether the state array was provided as an option (true) or an argument (false)
	* @returns {(Error|null)} an error or `null`
	*/
	function verifyState( state, FLG ) {
		var s1;
		if ( FLG ) {
			s1 = 'option';
		} else {
			s1 = 'argument';
		}
		// The state array must have a minimum length...
		if ( state.length < STATE_FIXED_LENGTH+1 ) {
			return new RangeError( 'invalid '+s1+'. `state` array has insufficient length.' );
		}
		// The first element of the state array must equal the supported state array schema version...
		if ( state[ 0 ] !== STATE_ARRAY_VERSION ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible schema version. Expected: '+STATE_ARRAY_VERSION+'. Actual: '+state[ 0 ]+'.' );
		}
		// The second element of the state array must contain the number of sections...
		if ( state[ 1 ] !== NUM_STATE_SECTIONS ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible number of sections. Expected: '+NUM_STATE_SECTIONS+'. Actual: '+state[ 1 ]+'.' );
		}
		// The length of the "state" section must equal `N`...
		if ( state[ STATE_SECTION_OFFSET ] !== N ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible state length. Expected: '+N+'. Actual: '+state[ STATE_SECTION_OFFSET ]+'.' );
		}
		// The length of the "other" section must equal `1`...
		if ( state[ OTHER_SECTION_OFFSET ] !== 1 ) {
			return new RangeError( 'invalid '+s1+'. `state` array has an incompatible section length. Expected: '+(1).toString()+'. Actual: '+state[ OTHER_SECTION_OFFSET ]+'.' );
		}
		// The length of the "seed" section much match the empirical length...
		if ( state[ SEED_SECTION_OFFSET ] !== state.length-STATE_FIXED_LENGTH ) {
			return new RangeError( 'invalid '+s1+'. `state` array length is incompatible with seed section length. Expected: '+(state.length-STATE_FIXED_LENGTH)+'. Actual: '+state[ SEED_SECTION_OFFSET ]+'.' );
		}
		return null;
	}
	
	/**
	* Returns an initial PRNG state.
	*
	* @private
	* @param {Uint32Array} state - state array
	* @param {PositiveInteger} N - state size
	* @param {uinteger32} s - seed
	* @returns {Uint32Array} state array
	*/
	function createState( state, N, s ) {
		var i;
	
		// Set the first element of the state array to the provided seed:
		state[ 0 ] = s >>> 0; // equivalent to `s & 0xffffffffUL` in original C implementation
	
		// Initialize the remaining state array elements:
		for ( i = 1; i < N; i++ ) {
			/*
			* In the original C implementation (see `init_genrand()`),
			*
			* ```c
			* mt[i] = (KNUTH_MULTIPLIER * (mt[i-1] ^ (mt[i-1] >> 30)) + i)
			* ```
			*
			* In order to replicate this in JavaScript, we must emulate C-like multiplication of unsigned 32-bit integers.
			*/
			s = state[ i-1 ]>>>0; // asm type annotation
			s = ( s^(s>>>30) )>>>0; // asm type annotation
			state[ i ] = ( uimul( s, KNUTH_MULTIPLIER ) + i )>>>0; // asm type annotation
		}
		return state;
	}
	
	/**
	* Initializes a PRNG state array according to a seed array.
	*
	* @private
	* @param {Uint32Array} state - state array
	* @param {NonNegativeInteger} N - state array length
	* @param {ArrayLikeObject} seed - seed array
	* @param {NonNegativeInteger} M - seed array length
	* @returns {Uint32Array} state array
	*/
	function initState( state, N, seed, M ) {
		var s;
		var i;
		var j;
		var k;
	
		i = 1;
		j = 0;
		for ( k = max( N, M ); k > 0; k-- ) {
			/*
			* In the original C implementation (see `init_by_array()`),
			*
			* ```c
			* mt[i] = (mt[i]^((mt[i-1]^(mt[i-1]>>30))*1664525UL)) + seed[j] + j;
			* ```
			*
			* In order to replicate this in JavaScript, we must emulate C-like multiplication of unsigned 32-bit integers.
			*/
			s = state[ i-1 ]>>>0; // asm type annotation
			s = ( s^(s>>>30) )>>>0; // asm type annotation
			s = ( uimul( s, MAGIC_MULTIPLIER_1 ) )>>>0; // asm type annotation
			state[ i ] = ( ((state[i]>>>0)^s) + seed[j] + j )>>>0; /* non-linear */ // asm type annotation
	
			i += 1;
			j += 1;
			if ( i >= N ) {
				state[ 0 ] = state[ N-1 ];
				i = 1;
			}
			if ( j >= M ) {
				j = 0;
			}
		}
		for ( k = N-1; k > 0; k-- ) {
			/*
			* In the original C implementation (see `init_by_array()`),
			*
			* ```c
			* mt[i] = (mt[i]^((mt[i-1]^(mt[i-1]>>30))*1566083941UL)) - i;
			* ```
			*
			* In order to replicate this in JavaScript, we must emulate C-like multiplication of unsigned 32-bit integers.
			*/
			s = state[ i-1 ]>>>0; // asm type annotation
			s = ( s^(s>>>30) )>>>0; // asm type annotation
			s = ( uimul( s, MAGIC_MULTIPLIER_2 ) )>>>0; // asm type annotation
			state[ i ] = ( ((state[i]>>>0)^s) - i )>>>0; /* non-linear */ // asm type annotation
	
			i += 1;
			if ( i >= N ) {
				state[ 0 ] = state[ N-1 ];
				i = 1;
			}
		}
		// Ensure a non-zero initial state array:
		state[ 0 ] = TWO_32; // MSB (most significant bit) is 1
	
		return state;
	}
	
	/**
	* Updates a PRNG's internal state by generating the next `N` words.
	*
	* @private
	* @param {Uint32Array} state - state array
	* @returns {Uint32Array} state array
	*/
	function twist( state ) {
		var w;
		var i;
		var j;
		var k;
	
		k = N - M;
		for ( i = 0; i < k; i++ ) {
			w = ( state[i]&UPPER_MASK ) | ( state[i+1]&LOWER_MASK );
			state[ i ] = state[ i+M ] ^ ( w>>>1 ) ^ MAG01[ w&ONE ];
		}
		j = N - 1;
		for ( ; i < j; i++ ) {
			w = ( state[i]&UPPER_MASK ) | ( state[i+1]&LOWER_MASK );
			state[ i ] = state[ i-k ] ^ ( w>>>1 ) ^ MAG01[ w&ONE ];
		}
		w = ( state[j]&UPPER_MASK ) | ( state[0]&LOWER_MASK );
		state[ j ] = state[ M-1 ] ^ ( w>>>1 ) ^ MAG01[ w&ONE ];
		return state;
	}
	
	
	// MAIN //
	
	/**
	* Returns a 32-bit Mersenne Twister pseudorandom number generator.
	*
	* ## Notes
	*
	* -   In contrast to the original C implementation, array seeds of length `1` are considered integer seeds. This ensures that the seed `[ 1234 ]` generates the same output as the seed `1234`. In the original C implementation, the two seeds would yield different output, which is **not** obvious from a user perspective.
	*
	* @param {Options} [options] - options
	* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
	* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
	* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} a seed must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integers less than or equal to the maximum unsigned 32-bit integer
	* @throws {RangeError} a numeric seed must be a positive integer less than or equal to the maximum unsigned 32-bit integer
	* @throws {TypeError} state must be a `Uint32Array`
	* @throws {Error} must provide a valid state
	* @throws {TypeError} `copy` option must be a boolean
	* @returns {PRNG} Mersenne Twister PRNG
	*
	* @example
	* var mt19937 = factory();
	*
	* var v = mt19937();
	* // returns <number>
	*
	* @example
	* // Return a seeded Mersenne Twister PRNG:
	* var mt19937 = factory({
	*     'seed': 1234
	* });
	*
	* var v = mt19937();
	* // returns 822569775
	*/
	function factory( options ) {
		var STATE;
		var state;
		var opts;
		var seed;
		var slen;
		var err;
	
		opts = {};
		if ( arguments.length ) {
			if ( !isObject( options ) ) {
				throw new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
			}
			if ( hasOwnProp( options, 'copy' ) ) {
				opts.copy = options.copy;
				if ( !isBoolean( options.copy ) ) {
					throw new TypeError( 'invalid option. `copy` option must be a boolean. Option: `' + options.copy + '`.' );
				}
			}
			if ( hasOwnProp( options, 'state' ) ) {
				state = options.state;
				opts.state = true;
				if ( !isUint32Array( state ) ) {
					throw new TypeError( 'invalid option. `state` option must be a Uint32Array. Option: `' + state + '`.' );
				}
				err = verifyState( state, true );
				if ( err ) {
					throw err;
				}
				if ( opts.copy === false ) {
					STATE = state;
				} else {
					STATE = new Uint32Array( state.length );
					gcopy( state.length, state, 1, STATE, 1 );
				}
				// Create a state "view":
				state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );
	
				// Create a seed "view":
				seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), state[ SEED_SECTION_OFFSET ] );
			}
			// If provided a PRNG state, we ignore the `seed` option...
			if ( seed === void 0 ) {
				if ( hasOwnProp( options, 'seed' ) ) {
					seed = options.seed;
					opts.seed = true;
					if ( isPositiveInteger( seed ) ) {
						if ( seed > MAX_SEED ) {
							throw new RangeError( 'invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
						}
						seed >>>= 0; // asm type annotation
					} else if ( isCollection( seed ) === false || seed.length < 1 ) {
						throw new TypeError( 'invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
					} else if ( seed.length === 1 ) {
						seed = seed[ 0 ];
						if ( !isPositiveInteger( seed ) ) {
							throw new TypeError( 'invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
						}
						if ( seed > MAX_SEED ) {
							throw new RangeError( 'invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `' + seed + '`.' );
						}
						seed >>>= 0; // asm type annotation
					} else {
						slen = seed.length;
						STATE = new Uint32Array( STATE_FIXED_LENGTH+slen );
	
						// Initialize sections:
						STATE[ 0 ] = STATE_ARRAY_VERSION;
						STATE[ 1 ] = NUM_STATE_SECTIONS;
						STATE[ STATE_SECTION_OFFSET ] = N;
						STATE[ OTHER_SECTION_OFFSET ] = 1;
						STATE[ OTHER_SECTION_OFFSET+1 ] = N; // state index
						STATE[ SEED_SECTION_OFFSET ] = slen;
	
						// Copy the provided seed array to prevent external mutation, as mutation would lead to an inability to reproduce PRNG values according to the PRNG's stated seed:
						gcopy.ndarray( slen, seed, 1, 0, STATE, 1, SEED_SECTION_OFFSET+1 );
	
						// Create a state "view":
						state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );
	
						// Create a seed "view":
						seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), slen );
	
						// Initialize the internal PRNG state:
						state = createState( state, N, SEED_ARRAY_INIT_STATE );
						state = initState( state, N, seed, slen );
					}
				} else {
					seed = randuint32() >>> 0; // asm type annotation
				}
			}
		} else {
			seed = randuint32() >>> 0; // asm type annotation
		}
		if ( state === void 0 ) {
			STATE = new Uint32Array( STATE_FIXED_LENGTH+1 );
	
			// Initialize sections:
			STATE[ 0 ] = STATE_ARRAY_VERSION;
			STATE[ 1 ] = NUM_STATE_SECTIONS;
			STATE[ STATE_SECTION_OFFSET ] = N;
			STATE[ OTHER_SECTION_OFFSET ] = 1;
			STATE[ OTHER_SECTION_OFFSET+1 ] = N; // state index
			STATE[ SEED_SECTION_OFFSET ] = 1;
			STATE[ SEED_SECTION_OFFSET+1 ] = seed;
	
			// Create a state "view":
			state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );
	
			// Create a seed "view":
			seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), 1 );
	
			// Initialize the internal PRNG state:
			state = createState( state, N, seed );
		}
		// Note: property order matters in order to maintain consistency of PRNG "shape" (hidden classes).
		setReadOnly( mt19937, 'NAME', 'mt19937' );
		setReadOnlyAccessor( mt19937, 'seed', getSeed );
		setReadOnlyAccessor( mt19937, 'seedLength', getSeedLength );
		setReadWriteAccessor( mt19937, 'state', getState, setState );
		setReadOnlyAccessor( mt19937, 'stateLength', getStateLength );
		setReadOnlyAccessor( mt19937, 'byteLength', getStateSize );
		setReadOnly( mt19937, 'toJSON', toJSON );
		setReadOnly( mt19937, 'MIN', 1 );
		setReadOnly( mt19937, 'MAX', UINT32_MAX );
		setReadOnly( mt19937, 'normalized', normalized );
	
		setReadOnly( normalized, 'NAME', mt19937.NAME );
		setReadOnlyAccessor( normalized, 'seed', getSeed );
		setReadOnlyAccessor( normalized, 'seedLength', getSeedLength );
		setReadWriteAccessor( normalized, 'state', getState, setState );
		setReadOnlyAccessor( normalized, 'stateLength', getStateLength );
		setReadOnlyAccessor( normalized, 'byteLength', getStateSize );
		setReadOnly( normalized, 'toJSON', toJSON );
		setReadOnly( normalized, 'MIN', 0.0 );
		setReadOnly( normalized, 'MAX', MAX_NORMALIZED );
	
		return mt19937;
	
		/**
		* Returns the PRNG seed.
		*
		* @private
		* @returns {PRNGSeedMT19937} seed
		*/
		function getSeed() {
			var len = STATE[ SEED_SECTION_OFFSET ];
			return gcopy( len, seed, 1, new Uint32Array( len ), 1 );
		}
	
		/**
		* Returns the PRNG seed length.
		*
		* @private
		* @returns {PositiveInteger} seed length
		*/
		function getSeedLength() {
			return STATE[ SEED_SECTION_OFFSET ];
		}
	
		/**
		* Returns the PRNG state length.
		*
		* @private
		* @returns {PositiveInteger} state length
		*/
		function getStateLength() {
			return STATE.length;
		}
	
		/**
		* Returns the PRNG state size (in bytes).
		*
		* @private
		* @returns {PositiveInteger} state size (in bytes)
		*/
		function getStateSize() {
			return STATE.byteLength;
		}
	
		/**
		* Returns the current PRNG state.
		*
		* ## Notes
		*
		* -   The PRNG state array is comprised of a preamble followed by `3` sections:
		*
		*     0.  preamble (version + number of sections)
		*     1.  internal PRNG state
		*     2.  auxiliary state information
		*     3.  PRNG seed
		*
		* -   The first element of the PRNG state array preamble is the state array schema version.
		*
		* -   The second element of the PRNG state array preamble is the number of state array sections (i.e., `3`).
		*
		* -   The first element of each section following the preamble specifies the section length. The remaining section elements comprise the section contents.
		*
		* @private
		* @returns {PRNGStateMT19937} current state
		*/
		function getState() {
			var len = STATE.length;
			return gcopy( len, STATE, 1, new Uint32Array( len ), 1 );
		}
	
		/**
		* Sets the PRNG state.
		*
		* ## Notes
		*
		* -   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
		* -   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).
		*
		* @private
		* @param {PRNGStateMT19937} s - generator state
		* @throws {TypeError} must provide a `Uint32Array`
		* @throws {Error} must provide a valid state
		*/
		function setState( s ) {
			var err;
			if ( !isUint32Array( s ) ) {
				throw new TypeError( 'invalid argument. Must provide a Uint32Array. Value: `' + s + '`.' );
			}
			err = verifyState( s, false );
			if ( err ) {
				throw err;
			}
			if ( opts.copy === false ) {
				if ( opts.state && s.length === STATE.length ) {
					gcopy( s.length, s, 1, STATE, 1 ); // update current shared state
				} else {
					STATE = s; // point to new shared state
					opts.state = true; // setting this flag allows updating a shared state even if a state array was not provided at PRNG creation
				}
			} else {
				// Check if we can reuse allocated memory...
				if ( s.length !== STATE.length ) {
					STATE = new Uint32Array( s.length ); // reallocate
				}
				gcopy( s.length, s, 1, STATE, 1 );
			}
			// Create a new state "view":
			state = new Uint32Array( STATE.buffer, STATE.byteOffset+((STATE_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), N );
	
			// Create a new seed "view":
			seed = new Uint32Array( STATE.buffer, STATE.byteOffset+((SEED_SECTION_OFFSET+1)*STATE.BYTES_PER_ELEMENT), STATE[ SEED_SECTION_OFFSET ] );
		}
	
		/**
		* Serializes the pseudorandom number generator as a JSON object.
		*
		* ## Notes
		*
		* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
		*
		* @private
		* @returns {Object} JSON representation
		*/
		function toJSON() {
			var out = {};
			out.type = 'PRNG';
			out.name = mt19937.NAME;
			out.state = typedarray2json( STATE );
			out.params = [];
			return out;
		}
	
		/**
		* Generates a pseudorandom integer on the interval \\( [1,2^{32}-1) \\).
		*
		* @private
		* @returns {uinteger32} pseudorandom integer
		*
		* @example
		* var r = mt19937();
		* // returns <number>
		*/
		function mt19937() {
			var r;
			var i;
	
			// Retrieve the current state index:
			i = STATE[ OTHER_SECTION_OFFSET+1 ];
	
			// Determine whether we need to update the PRNG state:
			if ( i >= N ) {
				state = twist( state );
				i = 0;
			}
			// Get the next word of "raw"/untempered state:
			r = state[ i ];
	
			// Update the state index:
			STATE[ OTHER_SECTION_OFFSET+1 ] = i + 1;
	
			// Tempering transform to compensate for the reduced dimensionality of equidistribution:
			r ^= r >>> 11;
			r ^= ( r << 7 ) & TEMPERING_COEFFICIENT_1;
			r ^= ( r << 15 ) & TEMPERING_COEFFICIENT_2;
			r ^= r >>> 18;
	
			return r >>> 0;
		}
	
		/**
		* Generates a pseudorandom number on the interval \\( [0,1) \\).
		*
		* ## Notes
		*
		* -   The original C implementation credits Isaku Wada for this algorithm (2002/01/09).
		*
		* @private
		* @returns {number} pseudorandom number
		*
		* @example
		* var r = normalized();
		* // returns <number>
		*/
		function normalized() {
			var x = mt19937() >>> 5;
			var y = mt19937() >>> 6;
			return ( (x*TWO_26)+y ) * FLOAT64_NORMALIZATION_CONSTANT;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = factory;
	
	},{"./rand_uint32.js":229,"@stdlib/array/to-json":17,"@stdlib/array/uint32":23,"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-boolean":86,"@stdlib/assert/is-collection":94,"@stdlib/assert/is-plain-object":137,"@stdlib/assert/is-positive-integer":139,"@stdlib/assert/is-uint32array":159,"@stdlib/blas/base/gcopy":169,"@stdlib/constants/math/float64-max-safe-integer":181,"@stdlib/constants/math/uint32-max":192,"@stdlib/math/base/special/max":206,"@stdlib/math/base/special/uimul":208,"@stdlib/utils/define-nonenumerable-read-only-accessor":254,"@stdlib/utils/define-nonenumerable-read-only-property":256,"@stdlib/utils/define-nonenumerable-read-write-accessor":258}],227:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* A 32-bit Mersenne Twister pseudorandom number generator.
	*
	* @module @stdlib/random/base/mt19937
	*
	* @example
	* var mt19937 = require( '@stdlib/random/base/mt19937' );
	*
	* var v = mt19937();
	* // returns <number>
	*
	* @example
	* var factory = require( '@stdlib/random/base/mt19937' ).factory;
	*
	* var mt19937 = factory({
	*     'seed': 1234
	* });
	*
	* var v = mt19937();
	* // returns 822569775
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var mt19937 = require( './main.js' );
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	setReadOnly( mt19937, 'factory', factory );
	
	
	// EXPORTS //
	
	module.exports = mt19937;
	
	},{"./factory.js":226,"./main.js":228,"@stdlib/utils/define-nonenumerable-read-only-property":256}],228:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var factory = require( './factory.js' );
	var randuint32 = require( './rand_uint32.js' );
	
	
	// MAIN //
	
	/**
	* Generates a pseudorandom integer on the interval \\( [1,2^{32}-1) \\).
	*
	* ## Method
	*
	* -   When generating normalized double-precision floating-point numbers, we first generate two pseudorandom integers \\( x \\) and \\( y \\) on the interval \\( [1,2^{32}-1) \\) for a combined \\( 64 \\) random bits.
	*
	* -   We would like \\( 53 \\) random bits to generate a 53-bit precision integer and, thus, want to discard \\( 11 \\) of the generated bits.
	*
	* -   We do so by discarding \\( 5 \\) bits from \\( x \\) and \\( 6 \\) bits from \\( y \\).
	*
	* -   Accordingly, \\( x \\) contains \\( 27 \\) random bits, which are subsequently shifted left \\( 26 \\) bits (multiplied by \\( 2^{26} \\), and \\( y \\) contains \\( 26 \\) random bits to fill in the lower \\( 26 \\) bits. When summed, they combine to comprise \\( 53 \\) random bits of a double-precision floating-point integer.
	*
	* -   As an example, suppose, for the sake of argument, the 32-bit PRNG generates the maximum unsigned 32-bit integer \\( 2^{32}-1 \\) twice in a row. Then,
	*
	*     ```javascript
	*     x = 4294967295 >>> 5; // 00000111111111111111111111111111
	*     y = 4294967295 >>> 6; // 00000011111111111111111111111111
	*     ```
	*
	*     Multiplying \\( x \\) by \\( 2^{26} \\) returns \\( 9007199187632128 \\), which, in binary, is
	*
	*     ```binarystring
	*     0 10000110011 11111111111111111111 11111100000000000000000000000000
	*     ```
	*
	*     Adding \\( y \\) yields \\( 9007199254740991 \\) (the maximum "safe" double-precision floating-point integer value), which, in binary, is
	*
	*     ```binarystring
	*     0 10000110011 11111111111111111111 11111111111111111111111111111111
	*     ```
	*
	* -   Similarly, suppose the 32-bit PRNG generates the following values
	*
	*     ```javascript
	*     x = 1 >>> 5;  // 0 => 00000000000000000000000000000000
	*     y = 64 >>> 6; // 1 => 00000000000000000000000000000001
	*     ```
	*
	*     Multiplying \\( x \\) by \\( 2^{26} \\) returns \\( 0 \\), which, in binary, is
	*
	*     ```binarystring
	*     0 00000000000 00000000000000000000 00000000000000000000000000000000
	*     ```
	*
	*     Adding \\( y \\) yields \\( 1 \\), which, in binary, is
	*
	*     ```binarystring
	*     0 01111111111 00000000000000000000 00000000000000000000000000000000
	*     ```
	*
	* -   As different combinations of \\( x \\) and \\( y \\) are generated, different combinations of double-precision floating-point exponent and significand bits will be toggled, thus generating pseudorandom double-precision floating-point numbers.
	*
	*
	* ## References
	*
	* -   Matsumoto, Makoto, and Takuji Nishimura. 1998. "Mersenne Twister: A 623-dimensionally Equidistributed Uniform Pseudo-random Number Generator." _ACM Transactions on Modeling and Computer Simulation_ 8 (1). New York, NY, USA: ACM: 3–30. doi:[10.1145/272991.272995][@matsumoto:1998a].
	* -   Harase, Shin. 2017. "Conversion of Mersenne Twister to double-precision floating-point numbers." _ArXiv_ abs/1708.06018 (September). <https://arxiv.org/abs/1708.06018>.
	*
	* [@matsumoto:1998a]: https://doi.org/10.1145/272991.272995
	*
	*
	* @function mt19937
	* @type {PRNG}
	* @returns {PositiveInteger} pseudorandom integer
	*
	* @example
	* var v = mt19937();
	* // returns <number>
	*/
	var mt19937 = factory({
		'seed': randuint32()
	});
	
	
	// EXPORTS //
	
	module.exports = mt19937;
	
	},{"./factory.js":226,"./rand_uint32.js":229}],229:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var UINT32_MAX = require( '@stdlib/constants/math/uint32-max' );
	var floor = require( '@stdlib/math/base/special/floor' );
	
	
	// VARIABLES //
	
	var MAX = UINT32_MAX - 1;
	
	
	// MAIN //
	
	/**
	* Returns a pseudorandom integer on the interval \\([1, 2^{32}-1)\\).
	*
	* @private
	* @returns {PositiveInteger} pseudorandom integer
	*
	* @example
	* var v = randuint32();
	* // returns <number>
	*/
	function randuint32() {
		var v = floor( 1.0 + (MAX*Math.random()) ); // eslint-disable-line stdlib/no-builtin-math
		return v >>> 0; // asm type annotation
	}
	
	
	// EXPORTS //
	
	module.exports = randuint32;
	
	},{"@stdlib/constants/math/uint32-max":192,"@stdlib/math/base/special/floor":205}],230:[function(require,module,exports){
	module.exports={
		"name": "mt19937",
		"copy": true
	}
	
	},{}],231:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var setReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
	var setReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
	var isObject = require( '@stdlib/assert/is-plain-object' );
	var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var typedarray2json = require( '@stdlib/array/to-json' );
	var defaults = require( './defaults.json' );
	var PRNGS = require( './prngs.js' );
	
	
	// MAIN //
	
	/**
	* Returns a pseudorandom number generator for generating uniformly distributed random numbers on the interval \\( [0,1) \\).
	*
	* @param {Options} [options] - function options
	* @param {string} [options.name='mt19937'] - name of pseudorandom number generator
	* @param {*} [options.seed] - pseudorandom number generator seed
	* @param {*} [options.state] - pseudorandom number generator state
	* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
	* @throws {TypeError} must provide an object
	* @throws {TypeError} must provide valid options
	* @throws {Error} must provide the name of a supported pseudorandom number generator
	* @returns {PRNG} pseudorandom number generator
	*
	* @example
	* var uniform = factory();
	* var v = uniform();
	* // returns <number>
	*
	* @example
	* var uniform = factory({
	*     'name': 'minstd'
	* });
	* var v = uniform();
	* // returns <number>
	*
	* @example
	* var uniform = factory({
	*     'seed': 12345
	* });
	* var v = uniform();
	* // returns <number>
	*
	* @example
	* var uniform = factory({
	*     'name': 'minstd',
	*     'seed': 12345
	* });
	* var v = uniform();
	* // returns <number>
	*/
	function factory( options ) {
		var opts;
		var rand;
		var prng;
	
		opts = {
			'name': defaults.name,
			'copy': defaults.copy
		};
		if ( arguments.length ) {
			if ( !isObject( options ) ) {
				throw new TypeError( 'invalid argument. Must provide an object. Value: `' + options + '`.' );
			}
			if ( hasOwnProp( options, 'name' ) ) {
				opts.name = options.name;
			}
			if ( hasOwnProp( options, 'state' ) ) {
				opts.state = options.state;
				if ( opts.state === void 0 ) {
					throw new TypeError( 'invalid option. `state` option cannot be undefined. Option: `' + opts.state + '`.' );
				}
			} else if ( hasOwnProp( options, 'seed' ) ) {
				opts.seed = options.seed;
				if ( opts.seed === void 0 ) {
					throw new TypeError( 'invalid option. `seed` option cannot be undefined. Option: `' + opts.seed + '`.' );
				}
			}
			if ( hasOwnProp( options, 'copy' ) ) {
				opts.copy = options.copy;
				if ( !isBoolean( opts.copy ) ) {
					throw new TypeError( 'invalid option. `copy` option must be a boolean. Option: `' + opts.copy + '`.' );
				}
			}
		}
		prng = PRNGS[ opts.name ];
		if ( prng === void 0 ) {
			throw new Error( 'invalid option. Unrecognized/unsupported PRNG. Option: `' + opts.name + '`.' );
		}
		if ( opts.state === void 0 ) {
			if ( opts.seed === void 0 ) {
				rand = prng.factory();
			} else {
				rand = prng.factory({
					'seed': opts.seed
				});
			}
		} else {
			rand = prng.factory({
				'state': opts.state,
				'copy': opts.copy
			});
		}
		setReadOnly( uniform, 'NAME', 'randu' );
		setReadOnlyAccessor( uniform, 'seed', getSeed );
		setReadOnlyAccessor( uniform, 'seedLength', getSeedLength );
		setReadWriteAccessor( uniform, 'state', getState, setState );
		setReadOnlyAccessor( uniform, 'stateLength', getStateLength );
		setReadOnlyAccessor( uniform, 'byteLength', getStateSize );
		setReadOnly( uniform, 'toJSON', toJSON );
		setReadOnly( uniform, 'PRNG', rand );
		setReadOnly( uniform, 'MIN', rand.normalized.MIN );
		setReadOnly( uniform, 'MAX', rand.normalized.MAX );
	
		return uniform;
	
		/**
		* Returns the PRNG seed.
		*
		* @private
		* @returns {*} seed
		*/
		function getSeed() {
			return rand.seed;
		}
	
		/**
		* Returns the PRNG seed length.
		*
		* @private
		* @returns {PositiveInteger} seed length
		*/
		function getSeedLength() {
			return rand.seedLength;
		}
	
		/**
		* Returns the PRNG state length.
		*
		* @private
		* @returns {PositiveInteger} state length
		*/
		function getStateLength() {
			return rand.stateLength;
		}
	
		/**
		* Returns the PRNG state size (in bytes).
		*
		* @private
		* @returns {PositiveInteger} state size (in bytes)
		*/
		function getStateSize() {
			return rand.byteLength;
		}
	
		/**
		* Returns the current pseudorandom number generator state.
		*
		* @private
		* @returns {*} current state
		*/
		function getState() {
			return rand.state;
		}
	
		/**
		* Sets the pseudorandom number generator state.
		*
		* @private
		* @param {*} s - generator state
		* @throws {Error} must provide a valid state
		*/
		function setState( s ) {
			rand.state = s;
		}
	
		/**
		* Serializes the pseudorandom number generator as a JSON object.
		*
		* ## Notes
		*
		* -   `JSON.stringify()` implicitly calls this method when stringifying a PRNG.
		*
		* @private
		* @returns {Object} JSON representation
		*/
		function toJSON() {
			var out = {};
			out.type = 'PRNG';
			out.name = uniform.NAME + '-' + rand.NAME;
			out.state = typedarray2json( rand.state );
			out.params = [];
			return out;
		}
	
		/**
		* Returns a uniformly distributed pseudorandom number on the interval \\( [0,1) \\).
		*
		* @private
		* @returns {number} pseudorandom number
		*
		* @example
		* var v = uniform();
		* // returns <number>
		*/
		function uniform() {
			return rand.normalized();
		}
	}
	
	
	// EXPORTS //
	
	module.exports = factory;
	
	},{"./defaults.json":230,"./prngs.js":234,"@stdlib/array/to-json":17,"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-boolean":86,"@stdlib/assert/is-plain-object":137,"@stdlib/utils/define-nonenumerable-read-only-accessor":254,"@stdlib/utils/define-nonenumerable-read-only-property":256,"@stdlib/utils/define-nonenumerable-read-write-accessor":258}],232:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Uniformly distributed pseudorandom numbers on the interval \\( [0,1) \\).
	*
	* @module @stdlib/random/base/randu
	*
	* @example
	* var randu = require( '@stdlib/random/base/randu' );
	*
	* var v = randu();
	* // returns <number>
	*
	* @example
	* var factory = require( '@stdlib/random/base/randu' ).factory;
	*
	* var randu = factory({
	*     'name': 'minstd',
	*     'seed': 12345
	* });
	*
	* var v = randu();
	* // returns <number>
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var randu = require( './main.js' );
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	setReadOnly( randu, 'factory', factory );
	
	
	// EXPORTS //
	
	module.exports = randu;
	
	},{"./factory.js":231,"./main.js":233,"@stdlib/utils/define-nonenumerable-read-only-property":256}],233:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	/**
	* Returns a uniformly distributed random number on the interval \\( [0,1) \\).
	*
	* @name randu
	* @type {PRNG}
	* @returns {number} pseudorandom number
	*
	* @example
	* var v = randu();
	* // returns <number>
	*/
	var randu = factory();
	
	
	// EXPORTS //
	
	module.exports = randu;
	
	},{"./factory.js":231}],234:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var prngs = {};
	
	prngs[ 'minstd' ] = require( '@stdlib/random/base/minstd' );
	prngs[ 'minstd-shuffle' ] = require( '@stdlib/random/base/minstd-shuffle' );
	prngs[ 'mt19937' ] = require( '@stdlib/random/base/mt19937' );
	
	
	// EXPORTS //
	
	module.exports = prngs;
	
	},{"@stdlib/random/base/minstd":223,"@stdlib/random/base/minstd-shuffle":219,"@stdlib/random/base/mt19937":227}],235:[function(require,module,exports){
	module.exports={
		"mutate": false,
		"replace": true
	}
	
	},{}],236:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var floor = require( '@stdlib/math/base/special/floor' );
	
	
	// MAIN //
	
	/**
	* Samples from a discrete uniform distribution (equal probabilities and with replacement).
	*
	* @private
	* @param {ArrayLike} x - array-like object from which to sample
	* @param {NonNegativeInteger} size - sample size
	* @param {Function} rand - PRNG for generating uniformly distributed numbers
	* @returns {Array} sample
	*/
	function discreteUniform( x, size, rand ) {
		var pos;
		var out;
		var N;
		var i;
	
		N = x.length;
		out = new Array( size );
		for ( i = 0; i < size; i++ ) {
			pos = floor( N * rand() );
			out[ i ] = x[ pos ];
		}
		return out;
	}
	
	
	// EXPORTS //
	
	module.exports = discreteUniform;
	
	},{"@stdlib/math/base/special/floor":205}],237:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var isArrayLike = require( '@stdlib/assert/is-array-like' );
	var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
	var randu = require( '@stdlib/random/base/mt19937' ).factory;
	var copy = require( '@stdlib/utils/copy' );
	var discreteUniform = require( './discrete_uniform.js' );
	var renormalizing = require( './renormalizing.js' );
	var fisherYates = require( './fisher_yates.js' );
	var vose = require( './vose.js' );
	var defaults = require( './defaults.json' );
	var validate = require( './validate.js' );
	
	
	// FUNCTIONS //
	
	var slice = Array.prototype.slice;
	
	
	// MAIN //
	
	/**
	* Returns a function to sample elements from an array-like object.
	*
	* @param {ArrayLike} [pool] - array-like object from which to sample
	* @param {Options} [options] - function options
	* @param {PositiveInteger} [options.seed] - integer-valued seed
	* @param {NonNegativeInteger} [options.size] - sample size
	* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
	* @param {boolean} [options.mutate=false] - boolean indicating whether to mutate the `pool` when sampling without replacement
	* @throws {TypeError} `pool` must be an array-like object
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {Function} function to sample elements from an array-like object
	*
	* @example
	* var sample = factory({
	*     'seed': 232
	* });
	* var out = sample( 'abcdefg' );
	* // e.g., returns [ 'g', 'd', 'g', 'f', 'c', 'e', 'f' ]
	*
	* @example
	* var sample = factory( [ 1, 2, 3, 4, 5, 6 ], {
	*     'seed': 232,
	*     'size': 2
	* });
	* var out = sample();
	* // e.g., returns [ 6, 4 ]
	*
	* out = sample();
	* // e.g., returns [ 6, 5 ]
	*
	* @example
	* var sample = factory( [ 1, 2, 3, 4, 5, 6 ], {
	*     'seed': 474,
	*     'size': 3,
	*     'mutate': true,
	*     'replace': false
	* });
	* var out = sample();
	* // e.g., returns [ 4, 3, 6 ]
	*
	* out = sample();
	* // e.g., returns [ 1, 5, 2 ]
	*
	* out = sample();
	* // returns null
	*
	* @example
	* var sample = factory( [ 0, 1 ], {
	*     'size': 2
	* });
	*
	* var out = sample();
	* // e.g., returns [ 1, 1 ]
	*
	* out = sample({
	*     'size': 10
	* });
	* // e.g., returns [ 0, 1, 1, 1, 0, 1, 0, 0, 1, 1 ]
	*
	* @example
	* var sample = factory( [ 0, 1 ], {
	*     'size': 2
	* });
	*
	* var out = sample();
	* // e.g., returns [ 1, 1 ]
	*
	* out = sample({
	*     'replace': false
	* });
	* // e.g., returns [ 0, 1 ] or [ 1, 0 ]
	*
	* out = sample();
	* // e.g., returns [ 1, 1 ]
	*
	* @example
	* var sample = factory( [ 0, 1 ], {
	*     'size': 2,
	*     'mutate': true
	* });
	*
	* var out = sample();
	* // e.g., returns [ 1, 1 ]
	*
	* out = sample({
	*     'replace': false
	* });
	* // e.g., returns [ 0, 1 ] or [ 1, 0 ]
	*
	* out = sample();
	* // returns null
	*/
	function factory() {
		var config;
		var pool;
		var conf;
		var rand;
		var err;
		var fcn;
	
		conf = copy( defaults );
		if ( arguments.length === 1 ) {
			if ( isArrayLike( arguments[ 0 ] ) ) {
				pool = arguments[ 0 ];
			} else {
				config = arguments[ 0 ];
				err = validate( conf, config );
			}
		} else if ( arguments.length > 1 ) {
			pool = arguments[ 0 ];
			config = arguments[ 1 ];
			if ( !isArrayLike( pool ) ) {
				throw new TypeError( 'invalid argument. `pool` argument must be array-like. Value: `' + pool + '`.' );
			}
			err = validate( conf, config );
		}
		if ( err ) {
			throw err;
		}
		if ( config && config.seed ) {
			rand = randu({
				'seed': config.seed
			});
		} else {
			rand = randu();
		}
		if ( pool === void 0 ) {
			fcn = sample1;
		} else {
			if ( isString( pool ) ) {
				pool = pool.split( '' );
			} else {
				pool = copy( pool );
			}
			fcn = sample2;
		}
		setReadOnly( fcn, 'seed', rand.seed );
		setReadOnly( fcn, 'PRNG', rand );
	
		rand = rand.normalized;
	
		return fcn;
	
		/**
		* Samples elements from an array-like object.
		*
		* @private
		* @param {ArrayLike} x - array-like object from which to sample elements
		* @param {Options} [options] - function options
		* @param {NonNegativeInteger} [options.size] - sample size
		* @param {ProbabilityArray} [options.probs] - element probabilities
		* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
		* @throws {TypeError} first argument must be array-like
		* @throws {TypeError} options argument must be an object
		* @throws {TypeError} must provide valid options
		* @throws {RangeError} `size` option must be less than or equal to the length of `x` when the `replace` option is `false`
		* @returns {Array} sample
		*/
		function sample1( x, options ) {
			var replace;
			var xcopy;
			var probs;
			var opts;
			var size;
			var err;
	
			if ( !isArrayLike( x ) ) {
				throw new TypeError( 'invalid argument. First argument must be array-like. Value: `' + x + '`.' );
			}
			if ( isString( x ) ) {
				x = x.split( '' );
			}
			opts = {};
			if ( arguments.length > 1 ) {
				err = validate( opts, options );
				if ( err ) {
					throw err;
				}
			}
			if ( opts.replace === void 0 ) {
				replace = conf.replace;
			} else {
				replace = opts.replace;
			}
			if ( opts.probs !== void 0 ) {
				probs = opts.probs;
			}
			if ( opts.size ) {
				size = opts.size;
			} else if ( conf.size ) {
				size = conf.size;
			} else {
				size = x.length;
			}
			if (
				replace === false &&
				size > x.length
			) {
				throw new RangeError( 'invalid input option. `size` option must be less than or equal to the length of `x` when `replace` is `false`. Option: `' + size + '`.' );
			}
			// Custom probabilities...
			if ( probs ) {
				if ( replace ) {
					return vose( x, size, rand, probs );
				}
				return renormalizing( x, size, rand, probs );
			}
			// All elements equally likely...
			if ( replace ) {
				return discreteUniform( x, size, rand );
			}
			xcopy = slice.call( x );
			return fisherYates( xcopy, size, rand );
		}
	
		/**
		* Samples elements from a population.
		*
		* @private
		* @param {Options} [options] - function options
		* @param {NonNegativeInteger} [options.size] - sample size
		* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
		* @param {boolean} [options.mutate=false] - boolean indicating whether to mutate the `pool` when sampling without replacement
		* @throws {TypeError} options argument must be an object
		* @throws {TypeError} must provide valid options
		* @throws {RangeError} `size` option must be less than or equal to the population when the `replace` option is `false`
		* @returns {Array} sample
		*/
		function sample2( options ) {
			var replace;
			var mutate;
			var opts;
			var size;
			var err;
			var out;
	
			if ( pool.length === 0 ) {
				return null;
			}
			opts = {};
			if ( arguments.length ) {
				err = validate( opts, options );
				if ( err ) {
					throw err;
				}
			}
			if ( opts.mutate === void 0 ) {
				mutate = conf.mutate;
			} else {
				mutate = opts.mutate;
			}
			if ( opts.replace === void 0 ) {
				replace = conf.replace;
			} else {
				replace = opts.replace;
			}
			if ( opts.size ) {
				size = opts.size;
			} else if ( conf.size ) {
				size = conf.size;
			} else {
				size = pool.length;
			}
			if (
				replace === false &&
				size > pool.length
			) {
				throw new RangeError( 'invalid input option. `size` option must be less than or equal to the population size when `replace` is `false`. Option: `' + size + '`.' );
			}
			if ( replace ) {
				return discreteUniform( pool, size, rand );
			}
			out = fisherYates( pool, size, rand );
			if ( mutate ) {
				// Remove the sample observations:
				pool = pool.slice( size, pool.length );
			}
			return out;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = factory;
	
	},{"./defaults.json":235,"./discrete_uniform.js":236,"./fisher_yates.js":238,"./renormalizing.js":240,"./validate.js":242,"./vose.js":243,"@stdlib/assert/is-array-like":82,"@stdlib/assert/is-string":147,"@stdlib/random/base/mt19937":227,"@stdlib/utils/copy":252,"@stdlib/utils/define-nonenumerable-read-only-property":256}],238:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var floor = require( '@stdlib/math/base/special/floor' );
	
	
	// FUNCTIONS //
	
	var slice = Array.prototype.slice;
	
	
	// MAIN //
	
	/**
	* Samples uniformly without replacement using the Fisher-Yates shuffle.
	*
	* ## References
	*
	* -   Knuth, Donald E. 1997. _The Art of Computer Programming, Volume 2 (3rd Ed.): Seminumerical Algorithms_. Boston, MA, USA: Addison-Wesley Longman Publishing Co., Inc.
	*
	* @private
	* @param {ArrayLike} x - array-like object from which to sample
	* @param {NonNegativeInteger} size - sample size
	* @param {Function} rand - PRNG for generating uniformly distributed numbers
	* @returns {Array} sample
	*/
	function fisherYates( x, size, rand ) {
		var tmp;
		var N;
		var i;
		var j;
	
		N = x.length;
	
		// Note: we skip the first element, as no further swaps are possible given that all other indices are excluded from swapping...
		for ( i = N-1; i > 0; i-- ) {
			// Generate an integer index on the interval: [0,i]
			j = floor( rand()*(i+1) );
	
			// Swap elements:
			tmp = x[ i ];
			x[ i ] = x[ j ];
			x[ j ] = tmp;
		}
		return slice.call( x, 0, size );
	}
	
	
	// EXPORTS //
	
	module.exports = fisherYates;
	
	},{"@stdlib/math/base/special/floor":205}],239:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Sample elements from an array-like object.
	*
	* @module @stdlib/random/sample
	*
	* @example
	* var sample = require( '@stdlib/random/sample' );
	*
	* var out = sample( 'abc' );
	* // e.g., returns [ 'a', 'a', 'b' ]
	*
	* out = sample( [ 3, 6, 9 ] );
	* // e.g., returns [ 3, 9, 6 ]
	*
	* var bool = ( out.length === 3 );
	* // returns true
	*
	* @example
	* var sample = require( '@stdlib/random/sample' );
	*
	* var mysample = sample.factory({
	*     'seed': 323
	* });
	* var out = mysample( [ 3, 6, 9 ], {
	*     'size': 10
	* });
	* // e.g., returns [ 3, 9, 3, 3, 3, 6, 3, 3, 3, 6 ]
	*/
	
	// MODULES //
	
	var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	var sample = require( './sample.js' );
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	setReadOnly( sample, 'factory', factory );
	
	
	// EXPORTS //
	
	module.exports = sample;
	
	},{"./factory.js":237,"./sample.js":241,"@stdlib/utils/define-nonenumerable-read-only-property":256}],240:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Samples without replacement from a discrete set using custom probabilities.
	*
	* ## Notes
	*
	* -   After each draw, the probabilities of the remaining observations are renormalized so that they sum to one.
	*
	*
	* @private
	* @param {ArrayLike} x - array-like object from which to sample
	* @param {NonNegativeInteger} size - sample size
	* @param {Function} rand - PRNG for generating uniformly distributed numbers
	* @param {ProbabilityArray} probabilities - element probabilities
	* @returns {Array} sample
	*/
	function renormalizing( x, size, rand, probabilities ) {
		var probs;
		var psum;
		var out;
		var N;
		var i;
		var j;
		var k;
		var u;
	
		N = x.length;
		probs = new Array( N );
		for ( i = 0; i < N; i++ ) {
			probs[ i ] = probabilities[ i ];
		}
		out = new Array( size );
		for ( i = 0; i < size; i++ ) {
			u = rand();
			psum = 0;
			for ( j = 0; j < N; j++ ) {
				psum += probs[ j ];
				if ( u < psum ) {
					break;
				}
			}
			for ( k = 0; k < N; k++ ) {
				if ( k === j ) {
					continue;
				}
				probs[ k ] /= 1.0 - probs[ j ];
			}
			probs[ j ] = 0.0;
			out[ i ] = x[ j ];
		}
		return out;
	}
	
	
	// EXPORTS //
	
	module.exports = renormalizing;
	
	},{}],241:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var factory = require( './factory.js' );
	
	
	// MAIN //
	
	/**
	* Samples elements from an array-like object.
	*
	* @name sample
	* @type {Function}
	* @param {ArrayLike} x - array-like object from which to sample
	* @param {Options} [options] - function options
	* @param {NonNegativeInteger} [options.size] - sample size
	* @param {ProbabilityArray} [options.probs] - element probabilities
	* @param {boolean} [options.replace=true] - boolean indicating whether to sample with replacement
	* @throws {TypeError} first argument must be array-like
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @throws {RangeError} `size` option must be less than or equal to the length of `x` when the `replace` option is `false`
	* @returns {Array} sample
	*
	* @example
	* var out = sample( [ 3, null, NaN, 'abc', function(){} ] );
	* // e.g., returns [ 3, 'abc', null, 3, null ]
	*/
	var sample = factory();
	
	
	// EXPORTS //
	
	module.exports = sample;
	
	},{"./factory.js":237}],242:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' );
	var isUnityProbabilityArray = require( '@stdlib/assert/is-unity-probability-array' );
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
	var isObject = require( '@stdlib/assert/is-plain-object' );
	
	
	// MAIN //
	
	/**
	* Validates function options.
	*
	* @private
	* @param {Object} opts - destination for validated options
	* @param {Options} options - function options
	* @param {NonNegativeInteger} [options.size] - sample size
	* @param {ProbabilityArray} [options.probs] - element probabilities
	* @param {boolean} [options.replace] - boolean indicating whether to sample with replacement
	* @param {boolean} [options.mutate] - boolean indicating whether to mutate the `pool` when sampling without replacement
	* @returns {(null|Error)} null or an error
	*
	* @example
	* var opts = {};
	* var options = {
	*     'size': 10,
	*     'replace': false,
	*     'mutate': true,
	*     'probs': [ 0.7, 0.3 ]
	* };
	* var err = validate( opts, options );
	* if ( err ) {
	*     throw err;
	* }
	*/
	function validate( opts, options ) {
		if ( !isObject( options ) ) {
			return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
		}
		if ( hasOwnProp( options, 'size' ) ) {
			opts.size = options.size;
			if ( !isNonNegativeInteger( opts.size ) ) {
				return new TypeError( 'invalid option. `size` option must be a nonnegative integer. Option: `' + opts.size + '`.' );
			}
		}
		if ( hasOwnProp( options, 'probs' ) ) {
			opts.probs = options.probs;
			if ( !isUnityProbabilityArray( opts.probs ) ) {
				return new TypeError( 'invalid option. `probs` option must be an array of probabilities that sum to one. Option: `' + opts.probs + '`.' );
			}
		}
		if ( hasOwnProp( options, 'mutate' ) ) {
			opts.mutate = options.mutate;
			if ( !isBoolean( opts.mutate ) ) {
				return new TypeError( 'invalid option. `mutate` option must be a boolean primitive. Option: `' + opts.mutate + '`.' );
			}
		}
		if ( hasOwnProp( options, 'replace' ) ) {
			opts.replace = options.replace;
			if ( !isBoolean( opts.replace ) ) {
				return new TypeError( 'invalid option. `replace` option must be a boolean primitive. Option: `' + opts.replace + '`.' );
			}
		}
		return null;
	}
	
	
	// EXPORTS //
	
	module.exports = validate;
	
	},{"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-boolean":86,"@stdlib/assert/is-nonnegative-integer":123,"@stdlib/assert/is-plain-object":137,"@stdlib/assert/is-unity-probability-array":165}],243:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var floor = require( '@stdlib/math/base/special/floor' );
	
	
	// MAIN //
	
	/**
	* Samples with replacement and non-uniform probabilities using Vose's [alias method][alias-method].
	*
	* ## References
	*
	* -   Vose, Michael D. 1991. "A linear algorithm for generating random numbers with a given distribution." _IEEE Transactions on Software Engineering_ 17 (9): 972–75. doi:[10.1109/32.92917][@vose:1991].
	*
	* [alias-method]: http://keithschwarz.com/darts-dice-coins/
	* [@vose:1991]: https://doi.org/10.1109/32.92917
	*
	*
	* @private
	* @param {ArrayLike} x - array-like object from which to sample
	* @param {NonNegativeInteger} size - sample size
	* @param {Function} rand - PRNG for generating uniformly distributed numbers
	* @param {ProbabilityArray} probabilities - element probabilities
	* @returns {Array} sample
	*/
	function vose( x, size, rand, probabilities ) {
		var small;
		var large;
		var probs;
		var alias;
		var out;
		var N;
		var p;
		var g;
		var i;
		var l;
	
		probs = probabilities.slice();
		N = x.length;
	
		small = [];
		large = [];
		for ( i = 0; i < N; i++ ) {
			probs[ i ] *= N;
			if ( probs[ i ] < 1.0 ) {
				small.push( i );
			} else {
				large.push( i );
			}
		}
		alias = new Array( N );
		p = new Array( N );
		while ( small.length !== 0 && large.length !== 0 ) {
			l = small.shift();
			g = large.shift();
			p[ l ] = probs[ l ];
			alias[ l ] = g;
			probs[ g ] = probs[ g ] + probs[ l ] - 1.0;
			if ( probs[ g ] < 1.0 ) {
				small.push( g );
			} else {
				large.push( g );
			}
		}
		for ( i = 0; i < large.length; i++ ) {
			p[ large[ i ] ] = 1.0;
		}
		for ( i = 0; i < small.length; i++ ) {
			p[ small[ i ] ] = 1.0;
		}
		out = new Array( size );
		for ( i = 0; i < size; i++ ) {
			l = floor( N*rand() );
			if ( rand() < p[ l ] ) {
				out[ i ] = x[ l ];
			} else {
				out[ i ] = x[ alias[ l ] ];
			}
		}
		return out;
	}
	
	
	// EXPORTS //
	
	module.exports = vose;
	
	},{"@stdlib/math/base/special/floor":205}],244:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Regular expression to capture everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
	*
	* @module @stdlib/regexp/function-name
	* @type {RegExp}
	*
	* @example
	* var RE_FUNCTION_NAME = require( '@stdlib/regexp/function-name' );
	*
	* function fname( fcn ) {
	*     return RE_FUNCTION_NAME.exec( fcn.toString() )[ 1 ];
	* }
	*
	* var fn = fname( Math.sqrt );
	* // returns 'sqrt'
	*
	* fn = fname( Int8Array );
	* // returns 'Int8Array'
	*
	* fn = fname( Object.prototype.toString );
	* // returns 'toString'
	*
	* fn = fname( function(){} );
	* // returns ''
	*/
	
	
	// MAIN //
	
	/**
	* Captures everything that is not a space immediately after the `function` keyword and before the first left parenthesis.
	*
	* Regular expression: `/^\s*function\s*([^(]*)/i`
	*
	* -   `/^\s*`
	*     -   Match zero or more spaces at beginning
	*
	* -   `function`
	*     -   Match the word `function`
	*
	* -   `\s*`
	*     -   Match zero or more spaces after the word `function`
	*
	* -   `()`
	*     -   Capture
	*
	* -   `[^(]*`
	*     -   Match anything except a left parenthesis `(` zero or more times
	*
	* -   `/i`
	*     -   ignore case
	*
	* @constant
	* @type {RegExp}
	* @default /^\s*function\s*([^(]*)/i
	*/
	var RE_FUNCTION_NAME = /^\s*function\s*([^(]*)/i;
	
	
	// EXPORTS //
	
	module.exports = RE_FUNCTION_NAME;
	
	},{}],245:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Regular expression to parse a regular expression string.
	*
	* @module @stdlib/regexp/regexp
	* @type {RegExp}
	*
	* @example
	* var RE_REGEXP = require( '@stdlib/regexp/regexp' );
	*
	* var bool = RE_REGEXP.test( '/^beep$/' );
	* // returns true
	*
	* bool = RE_REGEXP.test( '' );
	* // returns false
	*
	* @example
	* var RE_REGEXP = require( '@stdlib/regexp/regexp' );
	*
	* var parts = RE_REGEXP.exec( '/^.*$/ig' );
	* // returns [ '/^.*$/ig', '^.*$', 'ig', 'index': 0, 'input': '/^.*$/ig' ]
	*/
	
	
	// MAIN //
	
	/**
	* Matches parts of a regular expression string.
	*
	* Regular expression: `/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/`
	*
	* -   `/^\/`
	*     -   match a string that begins with a `/`
	*
	* -   `()`
	*     -   capture
	*
	* -   `(?:)+`
	*     -   capture, but do not remember, a group of characters which occur one or more times
	*
	* -   `\\\/`
	*     -   match the literal `\/`
	*
	* -   `|`
	*     -   OR
	*
	* -   `[^\/]`
	*     -   anything which is not the literal `\/`
	*
	* -   `\/`
	*     -   match the literal `/`
	*
	* -   `([imgy]*)`
	*     -   capture any characters matching `imgy` occurring zero or more times
	*
	* -   `$/`
	*     -   string end
	*
	*
	* @constant
	* @type {RegExp}
	* @default /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/
	*/
	var RE_REGEXP = /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/; // eslint-disable-line no-useless-escape
	
	
	// EXPORTS //
	
	module.exports = RE_REGEXP;
	
	},{}],246:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Creates a function which always returns the same value.
	*
	* @param {*} [value] - value to always return
	* @returns {Function} constant function
	*
	* @example
	* var fcn = wrap( 3.14 );
	*
	* var v = fcn();
	* // returns 3.14
	*
	* v = fcn();
	* // returns 3.14
	*
	* v = fcn();
	* // returns 3.14
	*/
	function wrap( value ) {
		return constantFunction;
	
		/**
		* Constant function.
		*
		* @private
		* @returns {*} constant value
		*/
		function constantFunction() {
			return value;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = wrap;
	
	},{}],247:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Create a constant function.
	*
	* @module @stdlib/utils/constant-function
	*
	* @example
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	*
	* var fcn = constantFunction( 3.14 );
	*
	* var v = fcn();
	* // returns 3.14
	*
	* v = fcn();
	* // returns 3.14
	*
	* v = fcn();
	* // returns 3.14
	*/
	
	// MODULES //
	
	var constantFunction = require( './constant_function.js' );
	
	
	// EXPORTS //
	
	module.exports = constantFunction;
	
	},{"./constant_function.js":246}],248:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Determine the name of a value's constructor.
	*
	* @module @stdlib/utils/constructor-name
	*
	* @example
	* var constructorName = require( '@stdlib/utils/constructor-name' );
	*
	* var v = constructorName( 'a' );
	* // returns 'String'
	*
	* v = constructorName( {} );
	* // returns 'Object'
	*
	* v = constructorName( true );
	* // returns 'Boolean'
	*/
	
	// MODULES //
	
	var constructorName = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = constructorName;
	
	},{"./main.js":249}],249:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	var RE = require( '@stdlib/regexp/function-name' );
	var isBuffer = require( '@stdlib/assert/is-buffer' );
	
	
	// MAIN //
	
	/**
	* Determines the name of a value's constructor.
	*
	* @param {*} v - input value
	* @returns {string} name of a value's constructor
	*
	* @example
	* var v = constructorName( 'a' );
	* // returns 'String'
	*
	* @example
	* var v = constructorName( 5 );
	* // returns 'Number'
	*
	* @example
	* var v = constructorName( null );
	* // returns 'Null'
	*
	* @example
	* var v = constructorName( undefined );
	* // returns 'Undefined'
	*
	* @example
	* var v = constructorName( function noop() {} );
	* // returns 'Function'
	*/
	function constructorName( v ) {
		var match;
		var name;
		var ctor;
		name = nativeClass( v ).slice( 8, -1 );
		if ( (name === 'Object' || name === 'Error') && v.constructor ) {
			ctor = v.constructor;
			if ( typeof ctor.name === 'string' ) {
				return ctor.name;
			}
			match = RE.exec( ctor.toString() );
			if ( match ) {
				return match[ 1 ];
			}
		}
		if ( isBuffer( v ) ) {
			return 'Buffer';
		}
		return name;
	}
	
	
	// EXPORTS //
	
	module.exports = constructorName;
	
	},{"@stdlib/assert/is-buffer":92,"@stdlib/regexp/function-name":244,"@stdlib/utils/native-class":295}],250:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isArray = require( '@stdlib/assert/is-array' );
	var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
	var PINF = require( '@stdlib/constants/math/float64-pinf' );
	var deepCopy = require( './deep_copy.js' );
	
	
	// MAIN //
	
	/**
	* Copies or deep clones a value to an arbitrary depth.
	*
	* @param {*} value - value to copy
	* @param {NonNegativeInteger} [level=+infinity] - copy depth
	* @throws {TypeError} `level` must be a nonnegative integer
	* @returns {*} value copy
	*
	* @example
	* var out = copy( 'beep' );
	* // returns 'beep'
	*
	* @example
	* var value = [
	*     {
	*         'a': 1,
	*         'b': true,
	*         'c': [ 1, 2, 3 ]
	*     }
	* ];
	* var out = copy( value );
	* // returns [ { 'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]
	*
	* var bool = ( value[0].c === out[0].c );
	* // returns false
	*/
	function copy( value, level ) {
		var out;
		if ( arguments.length > 1 ) {
			if ( !isNonNegativeInteger( level ) ) {
				throw new TypeError( 'invalid argument. `level` must be a nonnegative integer. Value: `' + level + '`.' );
			}
			if ( level === 0 ) {
				return value;
			}
		} else {
			level = PINF;
		}
		out = ( isArray( value ) ) ? new Array( value.length ) : {};
		return deepCopy( value, out, [value], [out], level );
	}
	
	
	// EXPORTS //
	
	module.exports = copy;
	
	},{"./deep_copy.js":251,"@stdlib/assert/is-array":84,"@stdlib/assert/is-nonnegative-integer":123,"@stdlib/constants/math/float64-pinf":183}],251:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var isArray = require( '@stdlib/assert/is-array' );
	var isBuffer = require( '@stdlib/assert/is-buffer' );
	var isError = require( '@stdlib/assert/is-error' );
	var typeOf = require( '@stdlib/utils/type-of' );
	var regexp = require( '@stdlib/utils/regexp-from-string' );
	var indexOf = require( '@stdlib/utils/index-of' );
	var objectKeys = require( '@stdlib/utils/keys' );
	var propertyNames = require( '@stdlib/utils/property-names' );
	var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );
	var getPrototypeOf = require( '@stdlib/utils/get-prototype-of' );
	var defineProperty = require( '@stdlib/utils/define-property' );
	var copyBuffer = require( '@stdlib/buffer/from-buffer' );
	var typedArrays = require( './typed_arrays.js' );
	
	
	// FUNCTIONS //
	
	/**
	* Clones a class instance.
	*
	* ## Notes
	*
	* -   This should **only** be used for simple cases. Any instances with privileged access to variables (e.g., within closures) cannot be cloned. This approach should be considered **fragile**.
	* -   The function is greedy, disregarding the notion of a `level`. Instead, the function deep copies all properties, as we assume the concept of `level` applies only to the class instance reference but not to its internal state. This prevents, in theory, two instances from sharing state.
	*
	*
	* @private
	* @param {Object} val - class instance
	* @returns {Object} new instance
	*/
	function cloneInstance( val ) {
		var cache;
		var names;
		var name;
		var refs;
		var desc;
		var tmp;
		var ref;
		var i;
	
		cache = [];
		refs = [];
	
		ref = Object.create( getPrototypeOf( val ) );
		cache.push( val );
		refs.push( ref );
	
		names = propertyNames( val );
		for ( i = 0; i < names.length; i++ ) {
			name = names[ i ];
			desc = propertyDescriptor( val, name );
			if ( hasOwnProp( desc, 'value' ) ) {
				tmp = ( isArray( val[name] ) ) ? [] : {};
				desc.value = deepCopy( val[name], tmp, cache, refs, -1 );
			}
			defineProperty( ref, name, desc );
		}
		if ( !Object.isExtensible( val ) ) {
			Object.preventExtensions( ref );
		}
		if ( Object.isSealed( val ) ) {
			Object.seal( ref );
		}
		if ( Object.isFrozen( val ) ) {
			Object.freeze( ref );
		}
		return ref;
	}
	
	/**
	* Copies an error object.
	*
	* @private
	* @param {(Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|EvalError)} error - error to copy
	* @returns {(Error|TypeError|SyntaxError|URIError|ReferenceError|RangeError|EvalError)} error copy
	*
	* @example
	* var err1 = new TypeError( 'beep' );
	*
	* var err2 = copyError( err1 );
	* // returns <TypeError>
	*/
	function copyError( error ) {
		var cache = [];
		var refs = [];
		var keys;
		var desc;
		var tmp;
		var key;
		var err;
		var i;
	
		// Create a new error...
		err = new error.constructor( error.message );
	
		cache.push( error );
		refs.push( err );
	
		// If a `stack` property is present, copy it over...
		if ( error.stack ) {
			err.stack = error.stack;
		}
		// Node.js specific (system errors)...
		if ( error.code ) {
			err.code = error.code;
		}
		if ( error.errno ) {
			err.errno = error.errno;
		}
		if ( error.syscall ) {
			err.syscall = error.syscall;
		}
		// Any enumerable properties...
		keys = objectKeys( error );
		for ( i = 0; i < keys.length; i++ ) {
			key = keys[ i ];
			desc = propertyDescriptor( error, key );
			if ( hasOwnProp( desc, 'value' ) ) {
				tmp = ( isArray( error[ key ] ) ) ? [] : {};
				desc.value = deepCopy( error[ key ], tmp, cache, refs, -1 );
			}
			defineProperty( err, key, desc );
		}
		return err;
	}
	
	
	// MAIN //
	
	/**
	* Recursively performs a deep copy of an input object.
	*
	* @private
	* @param {*} val - value to copy
	* @param {(Array|Object)} copy - copy
	* @param {Array} cache - an array of visited objects
	* @param {Array} refs - an array of object references
	* @param {NonNegativeInteger} level - copy depth
	* @returns {*} deep copy
	*/
	function deepCopy( val, copy, cache, refs, level ) {
		var parent;
		var keys;
		var name;
		var desc;
		var ctor;
		var key;
		var ref;
		var x;
		var i;
		var j;
	
		level -= 1;
	
		// Primitives and functions...
		if (
			typeof val !== 'object' ||
			val === null
		) {
			return val;
		}
		if ( isBuffer( val ) ) {
			return copyBuffer( val );
		}
		if ( isError( val ) ) {
			return copyError( val );
		}
		// Objects...
		name = typeOf( val );
	
		if ( name === 'date' ) {
			return new Date( +val );
		}
		if ( name === 'regexp' ) {
			return regexp( val.toString() );
		}
		if ( name === 'set' ) {
			return new Set( val );
		}
		if ( name === 'map' ) {
			return new Map( val );
		}
		if (
			name === 'string' ||
			name === 'boolean' ||
			name === 'number'
		) {
			// If provided an `Object`, return an equivalent primitive!
			return val.valueOf();
		}
		ctor = typedArrays[ name ];
		if ( ctor ) {
			return ctor( val );
		}
		// Class instances...
		if (
			name !== 'array' &&
			name !== 'object'
		) {
			// Cloning requires ES5 or higher...
			if ( typeof Object.freeze === 'function' ) {
				return cloneInstance( val );
			}
			return {};
		}
		// Arrays and plain objects...
		keys = objectKeys( val );
		if ( level > 0 ) {
			parent = name;
			for ( j = 0; j < keys.length; j++ ) {
				key = keys[ j ];
				x = val[ key ];
	
				// Primitive, Buffer, special class instance...
				name = typeOf( x );
				if (
					typeof x !== 'object' ||
					x === null ||
					(
						name !== 'array' &&
						name !== 'object'
					) ||
					isBuffer( x )
				) {
					if ( parent === 'object' ) {
						desc = propertyDescriptor( val, key );
						if ( hasOwnProp( desc, 'value' ) ) {
							desc.value = deepCopy( x );
						}
						defineProperty( copy, key, desc );
					} else {
						copy[ key ] = deepCopy( x );
					}
					continue;
				}
				// Circular reference...
				i = indexOf( cache, x );
				if ( i !== -1 ) {
					copy[ key ] = refs[ i ];
					continue;
				}
				// Plain array or object...
				ref = ( isArray( x ) ) ? new Array( x.length ) : {};
				cache.push( x );
				refs.push( ref );
				if ( parent === 'array' ) {
					copy[ key ] = deepCopy( x, ref, cache, refs, level );
				} else {
					desc = propertyDescriptor( val, key );
					if ( hasOwnProp( desc, 'value' ) ) {
						desc.value = deepCopy( x, ref, cache, refs, level );
					}
					defineProperty( copy, key, desc );
				}
			}
		} else if ( name === 'array' ) {
			for ( j = 0; j < keys.length; j++ ) {
				key = keys[ j ];
				copy[ key ] = val[ key ];
			}
		} else {
			for ( j = 0; j < keys.length; j++ ) {
				key = keys[ j ];
				desc = propertyDescriptor( val, key );
				defineProperty( copy, key, desc );
			}
		}
		if ( !Object.isExtensible( val ) ) {
			Object.preventExtensions( copy );
		}
		if ( Object.isSealed( val ) ) {
			Object.seal( copy );
		}
		if ( Object.isFrozen( val ) ) {
			Object.freeze( copy );
		}
		return copy;
	}
	
	
	// EXPORTS //
	
	module.exports = deepCopy;
	
	},{"./typed_arrays.js":253,"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-array":84,"@stdlib/assert/is-buffer":92,"@stdlib/assert/is-error":100,"@stdlib/buffer/from-buffer":176,"@stdlib/utils/define-property":261,"@stdlib/utils/get-prototype-of":267,"@stdlib/utils/index-of":277,"@stdlib/utils/keys":288,"@stdlib/utils/property-descriptor":304,"@stdlib/utils/property-names":308,"@stdlib/utils/regexp-from-string":311,"@stdlib/utils/type-of":316}],252:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Copy or deep clone a value to an arbitrary depth.
	*
	* @module @stdlib/utils/copy
	*
	* @example
	* var copy = require( '@stdlib/utils/copy' );
	*
	* var out = copy( 'beep' );
	* // returns 'beep'
	*
	* @example
	* var copy = require( '@stdlib/utils/copy' );
	*
	* var value = [
	*     {
	*         'a': 1,
	*         'b': true,
	*         'c': [ 1, 2, 3 ]
	*     }
	* ];
	* var out = copy( value );
	* // returns [ {'a': 1, 'b': true, 'c': [ 1, 2, 3 ] } ]
	*
	* var bool = ( value[0].c === out[0].c );
	* // returns false
	*/
	
	// MODULES //
	
	var copy = require( './copy.js' );
	
	
	// EXPORTS //
	
	module.exports = copy;
	
	},{"./copy.js":250}],253:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var Int8Array = require( '@stdlib/array/int8' );
	var Uint8Array = require( '@stdlib/array/uint8' );
	var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
	var Int16Array = require( '@stdlib/array/int16' );
	var Uint16Array = require( '@stdlib/array/uint16' );
	var Int32Array = require( '@stdlib/array/int32' );
	var Uint32Array = require( '@stdlib/array/uint32' );
	var Float32Array = require( '@stdlib/array/float32' );
	var Float64Array = require( '@stdlib/array/float64' );
	
	
	// VARIABLES //
	
	var hash;
	
	
	// FUNCTIONS //
	
	/**
	* Copies an `Int8Array`.
	*
	* @private
	* @param {Int8Array} arr - array to copy
	* @returns {Int8Array} new array
	*/
	function int8array( arr ) {
		return new Int8Array( arr );
	}
	
	/**
	* Copies a `Uint8Array`.
	*
	* @private
	* @param {Uint8Array} arr - array to copy
	* @returns {Uint8Array} new array
	*/
	function uint8array( arr ) {
		return new Uint8Array( arr );
	}
	
	/**
	* Copies a `Uint8ClampedArray`.
	*
	* @private
	* @param {Uint8ClampedArray} arr - array to copy
	* @returns {Uint8ClampedArray} new array
	*/
	function uint8clampedarray( arr ) {
		return new Uint8ClampedArray( arr );
	}
	
	/**
	* Copies an `Int16Array`.
	*
	* @private
	* @param {Int16Array} arr - array to copy
	* @returns {Int16Array} new array
	*/
	function int16array( arr ) {
		return new Int16Array( arr );
	}
	
	/**
	* Copies a `Uint16Array`.
	*
	* @private
	* @param {Uint16Array} arr - array to copy
	* @returns {Uint16Array} new array
	*/
	function uint16array( arr ) {
		return new Uint16Array( arr );
	}
	
	/**
	* Copies an `Int32Array`.
	*
	* @private
	* @param {Int32Array} arr - array to copy
	* @returns {Int32Array} new array
	*/
	function int32array( arr ) {
		return new Int32Array( arr );
	}
	
	/**
	* Copies a `Uint32Array`.
	*
	* @private
	* @param {Uint32Array} arr - array to copy
	* @returns {Uint32Array} new array
	*/
	function uint32array( arr ) {
		return new Uint32Array( arr );
	}
	
	/**
	* Copies a `Float32Array`.
	*
	* @private
	* @param {Float32Array} arr - array to copy
	* @returns {Float32Array} new array
	*/
	function float32array( arr ) {
		return new Float32Array( arr );
	}
	
	/**
	* Copies a `Float64Array`.
	*
	* @private
	* @param {Float64Array} arr - array to copy
	* @returns {Float64Array} new array
	*/
	function float64array( arr ) {
		return new Float64Array( arr );
	}
	
	/**
	* Returns a hash of functions for copying typed arrays.
	*
	* @private
	* @returns {Object} function hash
	*/
	function typedarrays() {
		var out = {
			'int8array': int8array,
			'uint8array': uint8array,
			'uint8clampedarray': uint8clampedarray,
			'int16array': int16array,
			'uint16array': uint16array,
			'int32array': int32array,
			'uint32array': uint32array,
			'float32array': float32array,
			'float64array': float64array
		};
		return out;
	}
	
	
	// MAIN //
	
	hash = typedarrays();
	
	
	// EXPORTS //
	
	module.exports = hash;
	
	},{"@stdlib/array/float32":2,"@stdlib/array/float64":5,"@stdlib/array/int16":7,"@stdlib/array/int32":10,"@stdlib/array/int8":13,"@stdlib/array/uint16":20,"@stdlib/array/uint32":23,"@stdlib/array/uint8":26,"@stdlib/array/uint8c":29}],254:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Define a non-enumerable read-only accessor.
	*
	* @module @stdlib/utils/define-nonenumerable-read-only-accessor
	*
	* @example
	* var setNonEnumerableReadOnlyAccessor = require( '@stdlib/utils/define-nonenumerable-read-only-accessor' );
	*
	* function getter() {
	*     return 'bar';
	* }
	*
	* var obj = {};
	*
	* setNonEnumerableReadOnlyAccessor( obj, 'foo', getter );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/
	
	// MODULES //
	
	var setNonEnumerableReadOnlyAccessor = require( './main.js' ); // eslint-disable-line id-length
	
	
	// EXPORTS //
	
	module.exports = setNonEnumerableReadOnlyAccessor;
	
	},{"./main.js":255}],255:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var defineProperty = require( '@stdlib/utils/define-property' );
	
	
	// MAIN //
	
	/**
	* Defines a non-enumerable read-only accessor.
	*
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {Function} getter - accessor
	*
	* @example
	* function getter() {
	*     return 'bar';
	* }
	*
	* var obj = {};
	*
	* setNonEnumerableReadOnlyAccessor( obj, 'foo', getter );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/
	function setNonEnumerableReadOnlyAccessor( obj, prop, getter ) { // eslint-disable-line id-length
		defineProperty( obj, prop, {
			'configurable': false,
			'enumerable': false,
			'get': getter
		});
	}
	
	
	// EXPORTS //
	
	module.exports = setNonEnumerableReadOnlyAccessor;
	
	},{"@stdlib/utils/define-property":261}],256:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Define a non-enumerable read-only property.
	*
	* @module @stdlib/utils/define-nonenumerable-read-only-property
	*
	* @example
	* var setNonEnumerableReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
	*
	* var obj = {};
	*
	* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/
	
	// MODULES //
	
	var setNonEnumerableReadOnly = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = setNonEnumerableReadOnly;
	
	},{"./main.js":257}],257:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var defineProperty = require( '@stdlib/utils/define-property' );
	
	
	// MAIN //
	
	/**
	* Defines a non-enumerable read-only property.
	*
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {*} value - value to set
	*
	* @example
	* var obj = {};
	*
	* setNonEnumerableReadOnly( obj, 'foo', 'bar' );
	*
	* try {
	*     obj.foo = 'boop';
	* } catch ( err ) {
	*     console.error( err.message );
	* }
	*/
	function setNonEnumerableReadOnly( obj, prop, value ) {
		defineProperty( obj, prop, {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': value
		});
	}
	
	
	// EXPORTS //
	
	module.exports = setNonEnumerableReadOnly;
	
	},{"@stdlib/utils/define-property":261}],258:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Define a non-enumerable read-write accessor.
	*
	* @module @stdlib/utils/define-nonenumerable-read-write-accessor
	*
	* @example
	* var setNonEnumerableReadWriteAccessor = require( '@stdlib/utils/define-nonenumerable-read-write-accessor' );
	*
	* function getter() {
	*     return name + ' foo';
	* }
	*
	* function setter( v ) {
	*     name = v;
	* }
	*
	* var name = 'bar';
	* var obj = {};
	*
	* setNonEnumerableReadWriteAccessor( obj, 'foo', getter, setter );
	*
	* var v = obj.foo;
	* // returns 'bar foo'
	*
	* obj.foo = 'beep';
	*
	* v = obj.foo;
	* // returns 'beep foo'
	*/
	
	// MODULES //
	
	var setNonEnumerableReadWriteAccessor = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = setNonEnumerableReadWriteAccessor;
	
	},{"./main.js":259}],259:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var defineProperty = require( '@stdlib/utils/define-property' );
	
	
	// MAIN //
	
	/**
	* Defines a non-enumerable read-write accessor.
	*
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {Function} getter - get accessor
	* @param {Function} setter - set accessor
	*
	* @example
	* function getter() {
	*     return name + ' foo';
	* }
	*
	* function setter( v ) {
	*     name = v;
	* }
	*
	* var name = 'bar';
	* var obj = {};
	*
	* setNonEnumerableReadWriteAccessor( obj, 'foo', getter, setter );
	*
	* var v = obj.foo;
	* // returns 'bar foo'
	*
	* obj.foo = 'beep';
	*
	* v = obj.foo;
	* // returns 'beep foo'
	*/
	function setNonEnumerableReadWriteAccessor( obj, prop, getter, setter ) { // eslint-disable-line id-length
		defineProperty( obj, prop, {
			'configurable': false,
			'enumerable': false,
			'get': getter,
			'set': setter
		});
	}
	
	
	// EXPORTS //
	
	module.exports = setNonEnumerableReadWriteAccessor;
	
	},{"@stdlib/utils/define-property":261}],260:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Defines (or modifies) an object property.
	*
	* ## Notes
	*
	* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
	*
	* @name defineProperty
	* @type {Function}
	* @param {Object} obj - object on which to define the property
	* @param {(string|symbol)} prop - property name
	* @param {Object} descriptor - property descriptor
	* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
	* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
	* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
	* @param {*} [descriptor.value] - property value
	* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
	* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} third argument must be an object
	* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
	* @returns {Object} object with added property
	*
	* @example
	* var obj = {};
	*
	* defineProperty( obj, 'foo', {
	*     'value': 'bar'
	* });
	*
	* var str = obj.foo;
	* // returns 'bar'
	*/
	var defineProperty = Object.defineProperty;
	
	
	// EXPORTS //
	
	module.exports = defineProperty;
	
	},{}],261:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Define (or modify) an object property.
	*
	* @module @stdlib/utils/define-property
	*
	* @example
	* var defineProperty = require( '@stdlib/utils/define-property' );
	*
	* var obj = {};
	* defineProperty( obj, 'foo', {
	*     'value': 'bar',
	*     'writable': false,
	*     'configurable': false,
	*     'enumerable': false
	* });
	* obj.foo = 'boop'; // => throws
	*/
	
	// MODULES //
	
	var hasDefinePropertySupport = require( '@stdlib/assert/has-define-property-support' );
	var builtin = require( './builtin.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var defineProperty;
	if ( hasDefinePropertySupport() ) {
		defineProperty = builtin;
	} else {
		defineProperty = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = defineProperty;
	
	},{"./builtin.js":260,"./polyfill.js":262,"@stdlib/assert/has-define-property-support":33}],262:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	/* eslint-disable no-underscore-dangle, no-proto */
	
	'use strict';
	
	// MODULES //
	
	var hasProperty = require( '@stdlib/assert/has-property' );
	var isObject = require( '@stdlib/assert/is-object' );
	
	
	// VARIABLES //
	
	var objectProtoype = Object.prototype;
	var defineGetter = objectProtoype.__defineGetter__;
	var defineSetter = objectProtoype.__defineSetter__;
	var lookupGetter = objectProtoype.__lookupGetter__;
	var lookupSetter = objectProtoype.__lookupSetter__;
	
	
	// MAIN //
	
	/**
	* Defines (or modifies) an object property.
	*
	* ## Notes
	*
	* -   Property descriptors come in two flavors: **data descriptors** and **accessor descriptors**. A data descriptor is a property that has a value, which may or may not be writable. An accessor descriptor is a property described by a getter-setter function pair. A descriptor must be one of these two flavors and cannot be both.
	*
	* @param {Object} obj - object on which to define the property
	* @param {string} prop - property name
	* @param {Object} descriptor - property descriptor
	* @param {boolean} [descriptor.configurable=false] - boolean indicating if property descriptor can be changed and if the property can be deleted from the provided object
	* @param {boolean} [descriptor.enumerable=false] - boolean indicating if the property shows up when enumerating object properties
	* @param {boolean} [descriptor.writable=false] - boolean indicating if the value associated with the property can be changed with an assignment operator
	* @param {*} [descriptor.value] - property value
	* @param {(Function|void)} [descriptor.get=undefined] - function which serves as a getter for the property, or, if no getter, undefined. When the property is accessed, a getter function is called without arguments and with the `this` context set to the object through which the property is accessed (which may not be the object on which the property is defined due to inheritance). The return value will be used as the property value.
	* @param {(Function|void)} [descriptor.set=undefined] - function which serves as a setter for the property, or, if no setter, undefined. When assigning a property value, a setter function is called with one argument (the value being assigned to the property) and with the `this` context set to the object through which the property is assigned.
	* @throws {TypeError} first argument must be an object
	* @throws {TypeError} third argument must be an object
	* @throws {Error} property descriptor cannot have both a value and a setter and/or getter
	* @returns {Object} object with added property
	*
	* @example
	* var obj = {};
	*
	* defineProperty( obj, 'foo', {
	*     'value': 'bar'
	* });
	*
	* var str = obj.foo;
	* // returns 'bar'
	*/
	function defineProperty( obj, prop, descriptor ) {
		var prototype;
		var hasValue;
		var hasGet;
		var hasSet;
	
		if ( !isObject( obj ) ) {
			throw new TypeError( 'invalid argument. First argument must be an object. Value: `' + obj + '`.' );
		}
		if ( !isObject( descriptor ) ) {
			throw new TypeError( 'invalid argument. Property descriptor must be an object. Value: `' + descriptor + '`.' );
		}
		hasValue = hasProperty( descriptor, 'value' );
		if ( hasValue ) {
			if (
				lookupGetter.call( obj, prop ) ||
				lookupSetter.call( obj, prop )
			) {
				// Override `__proto__` to avoid touching inherited accessors:
				prototype = obj.__proto__;
				obj.__proto__ = objectProtoype;
	
				// Delete property as existing getters/setters prevent assigning value to specified property:
				delete obj[ prop ];
				obj[ prop ] = descriptor.value;
	
				// Restore original prototype:
				obj.__proto__ = prototype;
			} else {
				obj[ prop ] = descriptor.value;
			}
		}
		hasGet = hasProperty( descriptor, 'get' );
		hasSet = hasProperty( descriptor, 'set' );
	
		if ( hasValue && ( hasGet || hasSet ) ) {
			throw new Error( 'invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.' );
		}
	
		if ( hasGet && defineGetter ) {
			defineGetter.call( obj, prop, descriptor.get );
		}
		if ( hasSet && defineSetter ) {
			defineSetter.call( obj, prop, descriptor.set );
		}
		return obj;
	}
	
	
	// EXPORTS //
	
	module.exports = defineProperty;
	
	},{"@stdlib/assert/has-property":58,"@stdlib/assert/is-object":135}],263:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isFunction = require( '@stdlib/assert/is-function' );
	var hasFunctionNameSupport = require( '@stdlib/assert/has-function-name-support' );
	var RE = require( '@stdlib/regexp/function-name' );
	
	
	// VARIABLES //
	
	var isFunctionNameSupported = hasFunctionNameSupport();
	
	
	// MAIN //
	
	/**
	* Returns the name of a function.
	*
	* @param {Function} fcn - input function
	* @throws {TypeError} must provide a function
	* @returns {string} function name
	*
	* @example
	* var v = functionName( Math.sqrt );
	* // returns 'sqrt'
	*
	* @example
	* var v = functionName( function foo(){} );
	* // returns 'foo'
	*
	* @example
	* var v = functionName( function(){} );
	* // returns '' || 'anonymous'
	*
	* @example
	* var v = functionName( String );
	* // returns 'String'
	*/
	function functionName( fcn ) {
		// TODO: add support for generator functions?
		if ( isFunction( fcn ) === false ) {
			throw new TypeError( 'invalid argument. Must provide a function. Value: `' + fcn + '`.' );
		}
		if ( isFunctionNameSupported ) {
			return fcn.name;
		}
		return RE.exec( fcn.toString() )[ 1 ];
	}
	
	
	// EXPORTS //
	
	module.exports = functionName;
	
	},{"@stdlib/assert/has-function-name-support":42,"@stdlib/assert/is-function":106,"@stdlib/regexp/function-name":244}],264:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return the name of a function.
	*
	* @module @stdlib/utils/function-name
	*
	* @example
	* var functionName = require( '@stdlib/utils/function-name' );
	*
	* var v = functionName( String );
	* // returns 'String'
	*
	* v = functionName( function foo(){} );
	* // returns 'foo'
	*
	* v = functionName( function(){} );
	* // returns '' || 'anonymous'
	*/
	
	// MODULES //
	
	var functionName = require( './function_name.js' );
	
	
	// EXPORTS //
	
	module.exports = functionName;
	
	},{"./function_name.js":263}],265:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isFunction = require( '@stdlib/assert/is-function' );
	var builtin = require( './native.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var getProto;
	if ( isFunction( Object.getPrototypeOf ) ) {
		getProto = builtin;
	} else {
		getProto = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = getProto;
	
	},{"./native.js":268,"./polyfill.js":269,"@stdlib/assert/is-function":106}],266:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var getProto = require( './detect.js' );
	
	
	// MAIN //
	
	/**
	* Returns the prototype of a provided object.
	*
	* @param {*} value - input value
	* @returns {(Object|null)} prototype
	*
	* @example
	* var proto = getPrototypeOf( {} );
	* // returns {}
	*/
	function getPrototypeOf( value ) {
		if (
			value === null ||
			value === void 0
		) {
			return null;
		}
		// In order to ensure consistent ES5/ES6 behavior, cast input value to an object (strings, numbers, booleans); ES5 `Object.getPrototypeOf` throws when provided primitives and ES6 `Object.getPrototypeOf` casts:
		value = Object( value );
	
		return getProto( value );
	}
	
	
	// EXPORTS //
	
	module.exports = getPrototypeOf;
	
	},{"./detect.js":265}],267:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return the prototype of a provided object.
	*
	* @module @stdlib/utils/get-prototype-of
	*
	* @example
	* var getPrototype = require( '@stdlib/utils/get-prototype-of' );
	*
	* var proto = getPrototype( {} );
	* // returns {}
	*/
	
	// MODULES //
	
	var getPrototype = require( './get_prototype_of.js' );
	
	
	// EXPORTS //
	
	module.exports = getPrototype;
	
	},{"./get_prototype_of.js":266}],268:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var getProto = Object.getPrototypeOf;
	
	
	// EXPORTS //
	
	module.exports = getProto;
	
	},{}],269:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var nativeClass = require( '@stdlib/utils/native-class' );
	var getProto = require( './proto.js' );
	
	
	// MAIN //
	
	/**
	* Returns the prototype of a provided object.
	*
	* @private
	* @param {Object} obj - input object
	* @returns {(Object|null)} prototype
	*/
	function getPrototypeOf( obj ) {
		var proto = getProto( obj );
		if ( proto || proto === null ) {
			return proto;
		}
		if ( nativeClass( obj.constructor ) === '[object Function]' ) {
			// May break if the constructor has been tampered with...
			return obj.constructor.prototype;
		}
		if ( obj instanceof Object ) {
			return Object.prototype;
		}
		// Return `null` for objects created via `Object.create( null )`. Also return `null` for cross-realm objects on browsers that lack `__proto__` support, such as IE < 11.
		return null;
	}
	
	
	// EXPORTS //
	
	module.exports = getPrototypeOf;
	
	},{"./proto.js":270,"@stdlib/utils/native-class":295}],270:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Returns the value of the `__proto__` property.
	*
	* @private
	* @param {Object} obj - input object
	* @returns {*} value of `__proto__` property
	*/
	function getProto( obj ) {
		// eslint-disable-next-line no-proto
		return obj.__proto__;
	}
	
	
	// EXPORTS //
	
	module.exports = getProto;
	
	},{}],271:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Returns the global object using code generation.
	*
	* @private
	* @returns {Object} global object
	*/
	function getGlobal() {
		return new Function( 'return this;' )(); // eslint-disable-line no-new-func
	}
	
	
	// EXPORTS //
	
	module.exports = getGlobal;
	
	},{}],272:[function(require,module,exports){
	(function (global){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var obj = ( typeof global === 'object' ) ? global : null;
	
	
	// EXPORTS //
	
	module.exports = obj;
	
	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],273:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return the global object.
	*
	* @module @stdlib/utils/global
	*
	* @example
	* var getGlobal = require( '@stdlib/utils/global' );
	*
	* var g = getGlobal();
	* // returns {...}
	*/
	
	// MODULES //
	
	var getGlobal = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = getGlobal;
	
	},{"./main.js":274}],274:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
	var getThis = require( './codegen.js' );
	var Self = require( './self.js' );
	var Win = require( './window.js' );
	var Global = require( './global.js' );
	
	
	// MAIN //
	
	/**
	* Returns the global object.
	*
	* ## Notes
	*
	* -   Using code generation is the **most** reliable way to resolve the global object; however, doing so is likely to violate content security policies (CSPs) in, e.g., Chrome Apps and elsewhere.
	*
	* @param {boolean} [codegen=false] - boolean indicating whether to use code generation to resolve the global object
	* @throws {TypeError} must provide a boolean
	* @throws {Error} unable to resolve global object
	* @returns {Object} global object
	*
	* @example
	* var g = getGlobal();
	* // returns {...}
	*/
	function getGlobal( codegen ) {
		if ( arguments.length ) {
			if ( !isBoolean( codegen ) ) {
				throw new TypeError( 'invalid argument. Must provide a boolean primitive. Value: `'+codegen+'`.' );
			}
			if ( codegen ) {
				return getThis();
			}
			// Fall through...
		}
		// Case: browsers and web workers
		if ( Self ) {
			return Self;
		}
		// Case: browsers
		if ( Win ) {
			return Win;
		}
		// Case: Node.js
		if ( Global ) {
			return Global;
		}
		// Case: unknown
		throw new Error( 'unexpected error. Unable to resolve global object.' );
	}
	
	
	// EXPORTS //
	
	module.exports = getGlobal;
	
	},{"./codegen.js":271,"./global.js":272,"./self.js":275,"./window.js":276,"@stdlib/assert/is-boolean":86}],275:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var obj = ( typeof self === 'object' ) ? self : null;
	
	
	// EXPORTS //
	
	module.exports = obj;
	
	},{}],276:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var obj = ( typeof window === 'object' ) ? window : null;
	
	
	// EXPORTS //
	
	module.exports = obj;
	
	},{}],277:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return the first index at which a given element can be found.
	*
	* @module @stdlib/utils/index-of
	*
	* @example
	* var indexOf = require( '@stdlib/utils/index-of' );
	*
	* var arr = [ 4, 3, 2, 1 ];
	* var idx = indexOf( arr, 3 );
	* // returns 1
	*
	* arr = [ 4, 3, 2, 1 ];
	* idx = indexOf( arr, 5 );
	* // returns -1
	*
	* // Using a `fromIndex`:
	* arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* idx = indexOf( arr, 2, 3 );
	* // returns 5
	*
	* // `fromIndex` which exceeds `array` length:
	* arr = [ 1, 2, 3, 4, 2, 5 ];
	* idx = indexOf( arr, 2, 10 );
	* // returns -1
	*
	* // Negative `fromIndex`:
	* arr = [ 1, 2, 3, 4, 5, 2, 6, 2 ];
	* idx = indexOf( arr, 2, -4 );
	* // returns 5
	*
	* idx = indexOf( arr, 2, -1 );
	* // returns 7
	*
	* // Negative `fromIndex` exceeding input `array` length:
	* arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* idx = indexOf( arr, 2, -10 );
	* // returns 1
	*
	* // Array-like objects:
	* var str = 'bebop';
	* idx = indexOf( str, 'o' );
	* // returns 3
	*/
	
	// MODULES //
	
	var indexOf = require( './index_of.js' );
	
	
	// EXPORTS //
	
	module.exports = indexOf;
	
	},{"./index_of.js":278}],278:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isnan = require( '@stdlib/assert/is-nan' );
	var isCollection = require( '@stdlib/assert/is-collection' );
	var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
	var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
	
	
	// MAIN //
	
	/**
	* Returns the first index at which a given element can be found.
	*
	* @param {ArrayLike} arr - array-like object
	* @param {*} searchElement - element to find
	* @param {integer} [fromIndex] - starting index (if negative, the start index is determined relative to last element)
	* @throws {TypeError} must provide an array-like object
	* @throws {TypeError} `fromIndex` must be an integer
	* @returns {integer} index or -1
	*
	* @example
	* var arr = [ 4, 3, 2, 1 ];
	* var idx = indexOf( arr, 3 );
	* // returns 1
	*
	* @example
	* var arr = [ 4, 3, 2, 1 ];
	* var idx = indexOf( arr, 5 );
	* // returns -1
	*
	* @example
	* // Using a `fromIndex`:
	* var arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* var idx = indexOf( arr, 2, 3 );
	* // returns 5
	*
	* @example
	* // `fromIndex` which exceeds `array` length:
	* var arr = [ 1, 2, 3, 4, 2, 5 ];
	* var idx = indexOf( arr, 2, 10 );
	* // returns -1
	*
	* @example
	* // Negative `fromIndex`:
	* var arr = [ 1, 2, 3, 4, 5, 2, 6, 2 ];
	* var idx = indexOf( arr, 2, -4 );
	* // returns 5
	*
	* idx = indexOf( arr, 2, -1 );
	* // returns 7
	*
	* @example
	* // Negative `fromIndex` exceeding input `array` length:
	* var arr = [ 1, 2, 3, 4, 5, 2, 6 ];
	* var idx = indexOf( arr, 2, -10 );
	* // returns 1
	*
	* @example
	* // Array-like objects:
	* var str = 'bebop';
	* var idx = indexOf( str, 'o' );
	* // returns 3
	*/
	function indexOf( arr, searchElement, fromIndex ) {
		var len;
		var i;
		if ( !isCollection( arr ) && !isString( arr ) ) {
			throw new TypeError( 'invalid argument. First argument must be an array-like object. Value: `' + arr + '`.' );
		}
		len = arr.length;
		if ( len === 0 ) {
			return -1;
		}
		if ( arguments.length === 3 ) {
			if ( !isInteger( fromIndex ) ) {
				throw new TypeError( 'invalid argument. `fromIndex` must be an integer. Value: `' + fromIndex + '`.' );
			}
			if ( fromIndex >= 0 ) {
				if ( fromIndex >= len ) {
					return -1;
				}
				i = fromIndex;
			} else {
				i = len + fromIndex;
				if ( i < 0 ) {
					i = 0;
				}
			}
		} else {
			i = 0;
		}
		// Check for `NaN`...
		if ( isnan( searchElement ) ) {
			for ( ; i < len; i++ ) {
				if ( isnan( arr[i] ) ) {
					return i;
				}
			}
		} else {
			for ( ; i < len; i++ ) {
				if ( arr[ i ] === searchElement ) {
					return i;
				}
			}
		}
		return -1;
	}
	
	
	// EXPORTS //
	
	module.exports = indexOf;
	
	},{"@stdlib/assert/is-collection":94,"@stdlib/assert/is-integer":114,"@stdlib/assert/is-nan":119,"@stdlib/assert/is-string":147}],279:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Returns an array of an object's own enumerable property names.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.keys()`, this function returns an empty array if provided `undefined` or `null`, rather than throwing an error.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function keys( value ) {
		return Object.keys( Object( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = keys;
	
	},{}],280:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isArguments = require( '@stdlib/assert/is-arguments' );
	var builtin = require( './builtin.js' );
	
	
	// VARIABLES //
	
	var slice = Array.prototype.slice;
	
	
	// MAIN //
	
	/**
	* Returns an array of an object's own enumerable property names.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function keys( value ) {
		if ( isArguments( value ) ) {
			return builtin( slice.call( value ) );
		}
		return builtin( value );
	}
	
	
	// EXPORTS //
	
	module.exports = keys;
	
	},{"./builtin.js":279,"@stdlib/assert/is-arguments":79}],281:[function(require,module,exports){
	module.exports=[
		"console",
		"external",
		"frame",
		"frameElement",
		"frames",
		"innerHeight",
		"innerWidth",
		"outerHeight",
		"outerWidth",
		"pageXOffset",
		"pageYOffset",
		"parent",
		"scrollLeft",
		"scrollTop",
		"scrollX",
		"scrollY",
		"self",
		"webkitIndexedDB",
		"webkitStorageInfo",
		"window"
	]
	
	},{}],282:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var keys = require( './builtin.js' );
	
	
	// FUNCTIONS //
	
	/**
	* Tests the built-in `Object.keys()` implementation when provided `arguments`.
	*
	* @private
	* @returns {boolean} boolean indicating whether the built-in implementation returns the expected number of keys
	*/
	function test() {
		return ( keys( arguments ) || '' ).length !== 2;
	}
	
	
	// MAIN //
	
	/**
	* Tests whether the built-in `Object.keys()` implementation supports providing `arguments` as an input value.
	*
	* ## Notes
	*
	* -   Safari 5.0 does **not** support `arguments` as an input value.
	*
	* @private
	* @returns {boolean} boolean indicating whether a built-in implementation supports `arguments`
	*/
	function check() {
		return test( 1, 2 );
	}
	
	
	// EXPORTS //
	
	module.exports = check;
	
	},{"./builtin.js":279}],283:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var indexOf = require( '@stdlib/utils/index-of' );
	var typeOf = require( '@stdlib/utils/type-of' );
	var isConstructorPrototype = require( './is_constructor_prototype.js' );
	var EXCLUDED_KEYS = require( './excluded_keys.json' );
	var win = require( './window.js' );
	
	
	// VARIABLES //
	
	var bool;
	
	
	// FUNCTIONS //
	
	/**
	* Determines whether an environment throws when comparing to the prototype of a value's constructor (e.g., [IE9][1]).
	*
	* [1]: https://stackoverflow.com/questions/7688070/why-is-comparing-the-constructor-property-of-two-windows-unreliable
	*
	* @private
	* @returns {boolean} boolean indicating whether an environment is buggy
	*/
	function check() {
		var k;
		if ( typeOf( win ) === 'undefined' ) {
			return false;
		}
		for ( k in win ) { // eslint-disable-line guard-for-in
			try {
				if (
					indexOf( EXCLUDED_KEYS, k ) === -1 &&
					hasOwnProp( win, k ) &&
					win[ k ] !== null &&
					typeOf( win[ k ] ) === 'object'
				) {
					isConstructorPrototype( win[ k ] );
				}
			} catch ( err ) { // eslint-disable-line no-unused-vars
				return true;
			}
		}
		return false;
	}
	
	
	// MAIN //
	
	bool = check();
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{"./excluded_keys.json":281,"./is_constructor_prototype.js":289,"./window.js":294,"@stdlib/assert/has-own-property":56,"@stdlib/utils/index-of":277,"@stdlib/utils/type-of":316}],284:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var bool = ( typeof Object.keys !== 'undefined' );
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{}],285:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
	var noop = require( '@stdlib/utils/noop' );
	
	
	// MAIN //
	
	// Note: certain environments treat an object's prototype as enumerable, which, as a matter of convention, it shouldn't be...
	var bool = isEnumerableProperty( noop, 'prototype' );
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{"@stdlib/assert/is-enumerable-property":97,"@stdlib/utils/noop":300}],286:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isEnumerableProperty = require( '@stdlib/assert/is-enumerable-property' );
	
	
	// VARIABLES //
	
	var obj = {
		'toString': null
	};
	
	
	// MAIN //
	
	// Note: certain environments don't allow enumeration of overwritten properties which are considered non-enumerable...
	var bool = !isEnumerableProperty( obj, 'toString' );
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{"@stdlib/assert/is-enumerable-property":97}],287:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var bool = ( typeof window !== 'undefined' );
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{}],288:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return an array of an object's own enumerable property names.
	*
	* @module @stdlib/utils/keys
	*
	* @example
	* var keys = require( '@stdlib/utils/keys' );
	*
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	
	// MODULES //
	
	var keys = require( './main.js' );
	
	
	// EXPORTS //
	
	module.exports = keys;
	
	},{"./main.js":291}],289:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	/**
	* Tests whether a value equals the prototype of its constructor.
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value equals the prototype of its constructor
	*/
	function isConstructorPrototype( value ) {
		return ( value.constructor && value.constructor.prototype === value );
	}
	
	
	// EXPORTS //
	
	module.exports = isConstructorPrototype;
	
	},{}],290:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasAutomationEqualityBug = require( './has_automation_equality_bug.js' );
	var isConstructorPrototype = require( './is_constructor_prototype.js' );
	var HAS_WINDOW = require( './has_window.js' );
	
	
	// MAIN //
	
	/**
	* Wraps the test for constructor prototype equality to accommodate buggy environments (e.g., environments which throw when testing equality).
	*
	* @private
	* @param {*} value - value to test
	* @returns {boolean} boolean indicating whether a value equals the prototype of its constructor
	*/
	function wrapper( value ) {
		if ( HAS_WINDOW === false && !hasAutomationEqualityBug ) {
			return isConstructorPrototype( value );
		}
		try {
			return isConstructorPrototype( value );
		} catch ( error ) { // eslint-disable-line no-unused-vars
			return false;
		}
	}
	
	
	// EXPORTS //
	
	module.exports = wrapper;
	
	},{"./has_automation_equality_bug.js":283,"./has_window.js":287,"./is_constructor_prototype.js":289}],291:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasArgumentsBug = require( './has_arguments_bug.js' );
	var HAS_BUILTIN = require( './has_builtin.js' );
	var builtin = require( './builtin.js' );
	var wrapper = require( './builtin_wrapper.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	/**
	* Returns an array of an object's own enumerable property names.
	*
	* @name keys
	* @type {Function}
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	var keys;
	if ( HAS_BUILTIN ) {
		if ( hasArgumentsBug() ) {
			keys = wrapper;
		} else {
			keys = builtin;
		}
	} else {
		keys = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = keys;
	
	},{"./builtin.js":279,"./builtin_wrapper.js":280,"./has_arguments_bug.js":282,"./has_builtin.js":284,"./polyfill.js":293}],292:[function(require,module,exports){
	module.exports=[
		"toString",
		"toLocaleString",
		"valueOf",
		"hasOwnProperty",
		"isPrototypeOf",
		"propertyIsEnumerable",
		"constructor"
	]
	
	},{}],293:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isObjectLike = require( '@stdlib/assert/is-object-like' );
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var isArguments = require( '@stdlib/assert/is-arguments' );
	var HAS_ENUM_PROTO_BUG = require( './has_enumerable_prototype_bug.js' );
	var HAS_NON_ENUM_PROPS_BUG = require( './has_non_enumerable_properties_bug.js' );
	var isConstructorPrototype = require( './is_constructor_prototype_wrapper.js' );
	var NON_ENUMERABLE = require( './non_enumerable.json' );
	
	
	// MAIN //
	
	/**
	* Returns an array of an object's own enumerable property names.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own enumerable property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var k = keys( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function keys( value ) {
		var skipConstructor;
		var skipPrototype;
		var isFcn;
		var out;
		var k;
		var p;
		var i;
	
		out = [];
		if ( isArguments( value ) ) {
			// Account for environments which treat `arguments` differently...
			for ( i = 0; i < value.length; i++ ) {
				out.push( i.toString() );
			}
			// Note: yes, we are precluding the `arguments` array-like object from having other enumerable properties; however, this should (1) be very rare and (2) not be encouraged (e.g., doing something like `arguments.a = 'b'`; in certain engines directly manipulating the `arguments` value results in automatic de-optimization).
			return out;
		}
		if ( typeof value === 'string' ) {
			// Account for environments which do not treat string character indices as "own" properties...
			if ( value.length > 0 && !hasOwnProp( value, '0' ) ) {
				for ( i = 0; i < value.length; i++ ) {
					out.push( i.toString() );
				}
			}
		} else {
			isFcn = ( typeof value === 'function' );
			if ( isFcn === false && !isObjectLike( value ) ) {
				return out;
			}
			skipPrototype = ( HAS_ENUM_PROTO_BUG && isFcn );
		}
		for ( k in value ) {
			if ( !( skipPrototype && k === 'prototype' ) && hasOwnProp( value, k ) ) {
				out.push( String( k ) );
			}
		}
		if ( HAS_NON_ENUM_PROPS_BUG ) {
			skipConstructor = isConstructorPrototype( value );
			for ( i = 0; i < NON_ENUMERABLE.length; i++ ) {
				p = NON_ENUMERABLE[ i ];
				if ( !( skipConstructor && p === 'constructor' ) && hasOwnProp( value, p ) ) {
					out.push( String( p ) );
				}
			}
		}
		return out;
	}
	
	
	// EXPORTS //
	
	module.exports = keys;
	
	},{"./has_enumerable_prototype_bug.js":285,"./has_non_enumerable_properties_bug.js":286,"./is_constructor_prototype_wrapper.js":290,"./non_enumerable.json":292,"@stdlib/assert/has-own-property":56,"@stdlib/assert/is-arguments":79,"@stdlib/assert/is-object-like":133}],294:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var w = ( typeof window === 'undefined' ) ? void 0 : window;
	
	
	// EXPORTS //
	
	module.exports = w;
	
	},{}],295:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return a string value indicating a specification defined classification of an object.
	*
	* @module @stdlib/utils/native-class
	*
	* @example
	* var nativeClass = require( '@stdlib/utils/native-class' );
	*
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* function Beep() {
	*     return this;
	* }
	* str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/
	
	// MODULES //
	
	var hasToStringTag = require( '@stdlib/assert/has-tostringtag-support' );
	var builtin = require( './native_class.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var nativeClass;
	if ( hasToStringTag() ) {
		nativeClass = polyfill;
	} else {
		nativeClass = builtin;
	}
	
	
	// EXPORTS //
	
	module.exports = nativeClass;
	
	},{"./native_class.js":296,"./polyfill.js":297,"@stdlib/assert/has-tostringtag-support":62}],296:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var toStr = require( './tostring.js' );
	
	
	// MAIN //
	
	/**
	* Returns a string value indicating a specification defined classification (via the internal property `[[Class]]`) of an object.
	*
	* @param {*} v - input value
	* @returns {string} string value indicating a specification defined classification of the input value
	*
	* @example
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* @example
	* var str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* @example
	* function Beep() {
	*     return this;
	* }
	* var str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/
	function nativeClass( v ) {
		return toStr.call( v );
	}
	
	
	// EXPORTS //
	
	module.exports = nativeClass;
	
	},{"./tostring.js":298}],297:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	var toStringTag = require( './tostringtag.js' );
	var toStr = require( './tostring.js' );
	
	
	// MAIN //
	
	/**
	* Returns a string value indicating a specification defined classification of an object in environments supporting `Symbol.toStringTag`.
	*
	* @param {*} v - input value
	* @returns {string} string value indicating a specification defined classification of the input value
	*
	* @example
	* var str = nativeClass( 'a' );
	* // returns '[object String]'
	*
	* @example
	* var str = nativeClass( 5 );
	* // returns '[object Number]'
	*
	* @example
	* function Beep() {
	*     return this;
	* }
	* var str = nativeClass( new Beep() );
	* // returns '[object Object]'
	*/
	function nativeClass( v ) {
		var isOwn;
		var tag;
		var out;
	
		if ( v === null || v === void 0 ) {
			return toStr.call( v );
		}
		tag = v[ toStringTag ];
		isOwn = hasOwnProp( v, toStringTag );
	
		// Attempt to override the `toStringTag` property. For built-ins having a `Symbol.toStringTag` property (e.g., `JSON`, `Math`, etc), the `Symbol.toStringTag` property is read-only (e.g., , so we need to wrap in a `try/catch`.
		try {
			v[ toStringTag ] = void 0;
		} catch ( err ) { // eslint-disable-line no-unused-vars
			return toStr.call( v );
		}
		out = toStr.call( v );
	
		if ( isOwn ) {
			v[ toStringTag ] = tag;
		} else {
			delete v[ toStringTag ];
		}
		return out;
	}
	
	
	// EXPORTS //
	
	module.exports = nativeClass;
	
	},{"./tostring.js":298,"./tostringtag.js":299,"@stdlib/assert/has-own-property":56}],298:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var toStr = Object.prototype.toString;
	
	
	// EXPORTS //
	
	module.exports = toStr;
	
	},{}],299:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var toStrTag = ( typeof Symbol === 'function' ) ? Symbol.toStringTag : '';
	
	
	// EXPORTS //
	
	module.exports = toStrTag;
	
	},{}],300:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* No operation.
	*
	* @module @stdlib/utils/noop
	*
	* @example
	* var noop = require( '@stdlib/utils/noop' );
	*
	* noop();
	* // ...does nothing.
	*/
	
	// MODULES //
	
	var noop = require( './noop.js' );
	
	
	// EXPORTS //
	
	module.exports = noop;
	
	},{"./noop.js":301}],301:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* No operation.
	*
	* @example
	* noop();
	* // ...does nothing.
	*/
	function noop() {
		// Empty function...
	}
	
	
	// EXPORTS //
	
	module.exports = noop;
	
	},{}],302:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// VARIABLES //
	
	var propertyDescriptor = Object.getOwnPropertyDescriptor;
	
	
	// MAIN //
	
	/**
	* Returns a property descriptor for an object's own property.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if provided `undefined` or `null`, rather than throwing an error.
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if an object does not have a provided property, rather than `undefined`.
	*
	* @private
	* @param {*} value - input object
	* @param {(string|symbol)} property - property
	* @returns {(Object|null)} property descriptor or null
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var desc = getOwnPropertyDescriptor( obj, 'foo' );
	* // returns {'configurable':true,'enumerable':true,'writable':true,'value':3.14}
	*/
	function getOwnPropertyDescriptor( value, property ) {
		var desc;
		if ( value === null || value === void 0 ) {
			return null;
		}
		desc = propertyDescriptor( value, property );
		return ( desc === void 0 ) ? null : desc;
	}
	
	
	// EXPORTS //
	
	module.exports = getOwnPropertyDescriptor;
	
	},{}],303:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var bool = ( typeof Object.getOwnPropertyDescriptor !== 'undefined' );
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{}],304:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return a property descriptor for an object's own property.
	*
	* @module @stdlib/utils/property-descriptor
	*
	* @example
	* var getOwnPropertyDescriptor = require( '@stdlib/utils/property-descriptor' );
	*
	* var obj = {
	*   'foo': 'bar',
	*   'beep': 'boop'
	* };
	*
	* var keys = getOwnPropertyDescriptor( obj, 'foo' );
	* // returns {'configurable':true,'enumerable':true,'writable':true,'value':'bar'}
	*/
	
	// MODULES //
	
	var HAS_BUILTIN = require( './has_builtin.js' );
	var builtin = require( './builtin.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var main;
	if ( HAS_BUILTIN ) {
		main = builtin;
	} else {
		main = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{"./builtin.js":302,"./has_builtin.js":303,"./polyfill.js":305}],305:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var hasOwnProp = require( '@stdlib/assert/has-own-property' );
	
	
	// MAIN //
	
	/**
	* Returns a property descriptor for an object's own property.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if provided `undefined` or `null`, rather than throwing an error.
	* -   In contrast to the built-in `Object.getOwnPropertyDescriptor()`, this function returns `null` if an object does not have a provided property, rather than `undefined`.
	* -   In environments lacking `Object.getOwnPropertyDescriptor()` support, property descriptors do not exist. In non-supporting environment, if an object has a provided property, this function returns a descriptor object equivalent to that returned in a supporting environment; otherwise, the function returns `null`.
	*
	* @private
	* @param {*} value - input object
	* @param {(string|symbol)} property - property
	* @returns {(Object|null)} property descriptor or null
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var desc = getOwnPropertyDescriptor( obj, 'foo' );
	* // returns {'configurable':true,'enumerable':true,'writable':true,'value':3.14}
	*/
	function getOwnPropertyDescriptor( value, property ) {
		if ( hasOwnProp( value, property ) ) {
			return {
				'configurable': true,
				'enumerable': true,
				'writable': true,
				'value': value[ property ]
			};
		}
		return null;
	}
	
	
	// EXPORTS //
	
	module.exports = getOwnPropertyDescriptor;
	
	},{"@stdlib/assert/has-own-property":56}],306:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// VARIABLES //
	
	var propertyNames = Object.getOwnPropertyNames;
	
	
	// MAIN //
	
	/**
	* Returns an array of an object's own enumerable and non-enumerable property names.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyNames()`, this function returns an empty array if provided `undefined` or `null`, rather than throwing an error.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var keys = getOwnPropertyNames( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function getOwnPropertyNames( value ) {
		return propertyNames( Object( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = getOwnPropertyNames;
	
	},{}],307:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MAIN //
	
	var bool = ( typeof Object.getOwnPropertyNames !== 'undefined' );
	
	
	// EXPORTS //
	
	module.exports = bool;
	
	},{}],308:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Return an array of an object's own enumerable and non-enumerable property names.
	*
	* @module @stdlib/utils/property-names
	*
	* @example
	* var getOwnPropertyNames = require( '@stdlib/utils/property-names' );
	*
	* var keys = getOwnPropertyNames({
	*   'foo': 'bar',
	*   'beep': 'boop'
	* });
	* // e.g., returns [ 'foo', 'beep' ]
	*/
	
	// MODULES //
	
	var HAS_BUILTIN = require( './has_builtin.js' );
	var builtin = require( './builtin.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var main;
	if ( HAS_BUILTIN ) {
		main = builtin;
	} else {
		main = polyfill;
	}
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{"./builtin.js":306,"./has_builtin.js":307,"./polyfill.js":309}],309:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var keys = require( '@stdlib/utils/keys' );
	
	
	// MAIN //
	
	/**
	* Returns an array of an object's own enumerable and non-enumerable property names.
	*
	* ## Notes
	*
	* -   In contrast to the built-in `Object.getOwnPropertyNames()`, this function returns an empty array if provided `undefined` or `null`, rather than throwing an error.
	* -   In environments lacking support for `Object.getOwnPropertyNames()`, property descriptors are unavailable, and thus all properties can be safely assumed to be enumerable. Hence, we can defer to calling `Object.keys`, which retrieves all own enumerable property names.
	*
	* @private
	* @param {*} value - input object
	* @returns {Array} a list of own property names
	*
	* @example
	* var obj = {
	*     'beep': 'boop',
	*     'foo': 3.14
	* };
	*
	* var keys = getOwnPropertyNames( obj );
	* // e.g., returns [ 'beep', 'foo' ]
	*/
	function getOwnPropertyNames( value ) {
		return keys( Object( value ) );
	}
	
	
	// EXPORTS //
	
	module.exports = getOwnPropertyNames;
	
	},{"@stdlib/utils/keys":288}],310:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
	var RE = require( '@stdlib/regexp/regexp' );
	
	
	// MAIN //
	
	/**
	* Parses a regular expression string and returns a new regular expression.
	*
	* @param {string} str - regular expression string
	* @throws {TypeError} must provide a regular expression string
	* @returns {(RegExp|null)} regular expression or null
	*
	* @example
	* var re = reFromString( '/beep/' );
	* // returns /beep/
	*/
	function reFromString( str ) {
		if ( !isString( str ) ) {
			throw new TypeError( 'invalid argument. Must provide a regular expression string. Value: `' + str + '`.' );
		}
		// Capture the regular expression pattern and any flags:
		str = RE.exec( str );
	
		// Create a new regular expression:
		return ( str ) ? new RegExp( str[1], str[2] ) : null;
	}
	
	
	// EXPORTS //
	
	module.exports = reFromString;
	
	},{"@stdlib/assert/is-string":147,"@stdlib/regexp/regexp":245}],311:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Create a regular expression from a regular expression string.
	*
	* @module @stdlib/utils/regexp-from-string
	*
	* @example
	* var reFromString = require( '@stdlib/utils/regexp-from-string' );
	*
	* var re = reFromString( '/beep/' );
	* // returns /beep/
	*/
	
	// MODULES //
	
	var reFromString = require( './from_string.js' );
	
	
	// EXPORTS //
	
	module.exports = reFromString;
	
	},{"./from_string.js":310}],312:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var RE = require( './fixtures/re.js' );
	var nodeList = require( './fixtures/nodelist.js' );
	var typedarray = require( './fixtures/typedarray.js' );
	
	
	// MAIN //
	
	/**
	* Checks whether a polyfill is needed when using the `typeof` operator.
	*
	* @private
	* @returns {boolean} boolean indicating whether a polyfill is needed
	*/
	function check() {
		if (
			// Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
			typeof RE === 'function' ||
	
			// Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
			typeof typedarray === 'object' ||
	
			// PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
			typeof nodeList === 'function'
		) {
			return true;
		}
		return false;
	}
	
	
	// EXPORTS //
	
	module.exports = check;
	
	},{"./fixtures/nodelist.js":313,"./fixtures/re.js":314,"./fixtures/typedarray.js":315}],313:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var getGlobal = require( '@stdlib/utils/global' );
	
	
	// MAIN //
	
	var root = getGlobal();
	var nodeList = root.document && root.document.childNodes;
	
	
	// EXPORTS //
	
	module.exports = nodeList;
	
	},{"@stdlib/utils/global":273}],314:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	var RE = /./;
	
	
	// EXPORTS //
	
	module.exports = RE;
	
	},{}],315:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	var typedarray = Int8Array; // eslint-disable-line stdlib/require-globals
	
	
	// EXPORTS //
	
	module.exports = typedarray;
	
	},{}],316:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	/**
	* Determine a value's type.
	*
	* @module @stdlib/utils/type-of
	*
	* @example
	* var typeOf = require( '@stdlib/utils/type-of' );
	*
	* var str = typeOf( 'a' );
	* // returns 'string'
	*
	* str = typeOf( 5 );
	* // returns 'number'
	*/
	
	// MODULES //
	
	var usePolyfill = require( './check.js' );
	var typeOf = require( './typeof.js' );
	var polyfill = require( './polyfill.js' );
	
	
	// MAIN //
	
	var main = ( usePolyfill() ) ? polyfill : typeOf;
	
	
	// EXPORTS //
	
	module.exports = main;
	
	},{"./check.js":312,"./polyfill.js":317,"./typeof.js":318}],317:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var ctorName = require( '@stdlib/utils/constructor-name' );
	
	
	// MAIN //
	
	/**
	* Determines a value's type.
	*
	* @param {*} v - input value
	* @returns {string} string indicating the value's type
	*/
	function typeOf( v ) {
		return ctorName( v ).toLowerCase();
	}
	
	
	// EXPORTS //
	
	module.exports = typeOf;
	
	},{"@stdlib/utils/constructor-name":248}],318:[function(require,module,exports){
	/**
	* @license Apache-2.0
	*
	* Copyright (c) 2018 The Stdlib Authors.
	*
	* Licensed under the Apache License, Version 2.0 (the "License");
	* you may not use this file except in compliance with the License.
	* You may obtain a copy of the License at
	*
	*    http://www.apache.org/licenses/LICENSE-2.0
	*
	* Unless required by applicable law or agreed to in writing, software
	* distributed under the License is distributed on an "AS IS" BASIS,
	* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	* See the License for the specific language governing permissions and
	* limitations under the License.
	*/
	
	'use strict';
	
	// MODULES //
	
	var ctorName = require( '@stdlib/utils/constructor-name' );
	
	
	// NOTES //
	
	/*
	* Built-in `typeof` operator behavior:
	*
	* ```text
	* typeof null => 'object'
	* typeof undefined => 'undefined'
	* typeof 'a' => 'string'
	* typeof 5 => 'number'
	* typeof NaN => 'number'
	* typeof true => 'boolean'
	* typeof false => 'boolean'
	* typeof {} => 'object'
	* typeof [] => 'object'
	* typeof function foo(){} => 'function'
	* typeof function* foo(){} => 'object'
	* typeof Symbol() => 'symbol'
	* ```
	*
	*/
	
	
	// MAIN //
	
	/**
	* Determines a value's type.
	*
	* @param {*} v - input value
	* @returns {string} string indicating the value's type
	*/
	function typeOf( v ) {
		var type;
	
		// Address `typeof null` => `object` (see http://wiki.ecmascript.org/doku.php?id=harmony:typeof_null):
		if ( v === null ) {
			return 'null';
		}
		type = typeof v;
	
		// If the `typeof` operator returned something other than `object`, we are done. Otherwise, we need to check for an internal class name or search for a constructor.
		if ( type === 'object' ) {
			return ctorName( v ).toLowerCase();
		}
		return type;
	}
	
	
	// EXPORTS //
	
	module.exports = typeOf;
	
	},{"@stdlib/utils/constructor-name":248}],319:[function(require,module,exports){
	(function (global){
	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
		arrayTag = '[object Array]',
		boolTag = '[object Boolean]',
		dateTag = '[object Date]',
		errorTag = '[object Error]',
		funcTag = '[object Function]',
		genTag = '[object GeneratorFunction]',
		mapTag = '[object Map]',
		numberTag = '[object Number]',
		objectTag = '[object Object]',
		promiseTag = '[object Promise]',
		regexpTag = '[object RegExp]',
		setTag = '[object Set]',
		stringTag = '[object String]',
		symbolTag = '[object Symbol]',
		weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
		dataViewTag = '[object DataView]',
		float32Tag = '[object Float32Array]',
		float64Tag = '[object Float64Array]',
		int8Tag = '[object Int8Array]',
		int16Tag = '[object Int16Array]',
		int32Tag = '[object Int32Array]',
		uint8Tag = '[object Uint8Array]',
		uint8ClampedTag = '[object Uint8ClampedArray]',
		uint16Tag = '[object Uint16Array]',
		uint32Tag = '[object Uint32Array]';
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
		  length = array ? array.length : 0;
	
	  while (++index < length) {
		if (iteratee(array[index], index, array) === false) {
		  break;
		}
	  }
	  return array;
	}
	
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
		  length = values.length,
		  offset = array.length;
	
	  while (++index < length) {
		array[offset + index] = values[index];
	  }
	  return array;
	}
	
	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
		  length = array ? array.length : 0;
	
	  if (initAccum && length) {
		accumulator = array[++index];
	  }
	  while (++index < length) {
		accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
		  result = Array(n);
	
	  while (++index < n) {
		result[index] = iteratee(index);
	  }
	  return result;
	}
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
		try {
		  result = !!(value + '');
		} catch (e) {}
	  }
	  return result;
	}
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
		  result = Array(map.size);
	
	  map.forEach(function(value, key) {
		result[++index] = [key, value];
	  });
	  return result;
	}
	
	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
		return func(transform(arg));
	  };
	}
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
		  result = Array(set.size);
	
	  set.forEach(function(value) {
		result[++index] = value;
	  });
	  return result;
	}
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
		funcProto = Function.prototype,
		objectProto = Object.prototype;
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
		Symbol = root.Symbol,
		Uint8Array = root.Uint8Array,
		getPrototype = overArg(Object.getPrototypeOf, Object),
		objectCreate = Object.create,
		propertyIsEnumerable = objectProto.propertyIsEnumerable,
		splice = arrayProto.splice;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
		nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
		nativeKeys = overArg(Object.keys, Object);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
		Map = getNative(root, 'Map'),
		Promise = getNative(root, 'Promise'),
		Set = getNative(root, 'Set'),
		WeakMap = getNative(root, 'WeakMap'),
		nativeCreate = getNative(Object, 'create');
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
		mapCtorString = toSource(Map),
		promiseCtorString = toSource(Promise),
		setCtorString = toSource(Set),
		weakMapCtorString = toSource(WeakMap);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
		symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
		  length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
		var result = data[key];
		return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
		  length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
		  index = assocIndexOf(data, key);
	
	  if (index < 0) {
		return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
		data.pop();
	  } else {
		splice.call(data, index, 1);
	  }
	  return true;
	}
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
		  index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
		  index = assocIndexOf(data, key);
	
	  if (index < 0) {
		data.push([key, value]);
	  } else {
		data[index][1] = value;
	  }
	  return this;
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
		  length = entries ? entries.length : 0;
	
	  this.clear();
	  while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	  }
	}
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
		'hash': new Hash,
		'map': new (Map || ListCache),
		'string': new Hash
	  };
	}
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
		var pairs = cache.__data__;
		if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
		  pairs.push([key, value]);
		  return this;
		}
		cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
		? baseTimes(value.length, String)
		: [];
	
	  var length = result.length,
		  skipIndexes = !!length;
	
	  for (var key in value) {
		if ((inherited || hasOwnProperty.call(value, key)) &&
			!(skipIndexes && (key == 'length' || isIndex(key, length)))) {
		  result.push(key);
		}
	  }
	  return result;
	}
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
		  (value === undefined && !(key in object))) {
		object[key] = value;
	  }
	}
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
		if (eq(array[length][0], key)) {
		  return length;
		}
	  }
	  return -1;
	}
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
		result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
		return result;
	  }
	  if (!isObject(value)) {
		return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
		result = initCloneArray(value);
		if (!isDeep) {
		  return copyArray(value, result);
		}
	  } else {
		var tag = getTag(value),
			isFunc = tag == funcTag || tag == genTag;
	
		if (isBuffer(value)) {
		  return cloneBuffer(value, isDeep);
		}
		if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
		  if (isHostObject(value)) {
			return object ? value : {};
		  }
		  result = initCloneObject(isFunc ? {} : value);
		  if (!isDeep) {
			return copySymbols(value, baseAssign(result, value));
		  }
		} else {
		  if (!cloneableTags[tag]) {
			return object ? value : {};
		  }
		  result = initCloneByTag(value, tag, baseClone, isDeep);
		}
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
		return stacked;
	  }
	  stack.set(value, result);
	
	  if (!isArr) {
		var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
		if (props) {
		  key = subValue;
		  subValue = value[key];
		}
		// Recursively populate clone (susceptible to call stack limits).
		assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
		return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
		return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
		if (hasOwnProperty.call(object, key) && key != 'constructor') {
		  result.push(key);
		}
	  }
	  return result;
	}
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
		return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
		  length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
		array[index] = source[index];
	  }
	  return array;
	}
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
		  length = props.length;
	
	  while (++index < length) {
		var key = props[index];
	
		var newValue = customizer
		  ? customizer(object[key], source[key], key, object, source)
		  : undefined;
	
		assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}
	
	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
		? data[typeof key == 'string' ? 'string' : 'hash']
		: data.map;
	}
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
		(Map && getTag(new Map) != mapTag) ||
		(Promise && getTag(Promise.resolve()) != promiseTag) ||
		(Set && getTag(new Set) != setTag) ||
		(WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
		var result = objectToString.call(value),
			Ctor = result == objectTag ? value.constructor : undefined,
			ctorString = Ctor ? toSource(Ctor) : undefined;
	
		if (ctorString) {
		  switch (ctorString) {
			case dataViewCtorString: return dataViewTag;
			case mapCtorString: return mapTag;
			case promiseCtorString: return promiseTag;
			case setCtorString: return setTag;
			case weakMapCtorString: return weakMapTag;
		  }
		}
		return result;
	  };
	}
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
		  result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
		result.index = array.index;
		result.input = array.input;
	  }
	  return result;
	}
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
		? baseCreate(getPrototype(object))
		: {};
	}
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
		case arrayBufferTag:
		  return cloneArrayBuffer(object);
	
		case boolTag:
		case dateTag:
		  return new Ctor(+object);
	
		case dataViewTag:
		  return cloneDataView(object, isDeep);
	
		case float32Tag: case float64Tag:
		case int8Tag: case int16Tag: case int32Tag:
		case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
		  return cloneTypedArray(object, isDeep);
	
		case mapTag:
		  return cloneMap(object, isDeep, cloneFunc);
	
		case numberTag:
		case stringTag:
		  return new Ctor(object);
	
		case regexpTag:
		  return cloneRegExp(object);
	
		case setTag:
		  return cloneSet(object, isDeep, cloneFunc);
	
		case symbolTag:
		  return cloneSymbol(object);
	  }
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
		(typeof value == 'number' || reIsUint.test(value)) &&
		(value > -1 && value % 1 == 0 && value < length);
	}
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
		? (value !== '__proto__')
		: (value === null);
	}
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
		  proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
		try {
		  return funcToString.call(func);
		} catch (e) {}
		try {
		  return (func + '');
		} catch (e) {}
	  }
	  return '';
	}
	
	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
		(!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
		value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = cloneDeep;
	
	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],320:[function(require,module,exports){
	let randu = require('@stdlib/random/base/randu');
	let bernoulli = require('@stdlib/random/base/bernoulli');
	let arraySample = require('@stdlib/random/sample');
	// let faker = require('faker');
	let cloneDeep = require('lodash.clonedeep');
	
	// Set up random generators
	let randomSeed = 7;
	let random = randu.factory({'seed': randomSeed});
	let randBernoulli = bernoulli.factory({'seed': randomSeed});
	let sample = arraySample.factory({'seed': randomSeed});
	// faker.seed(randomSeed);
	
	
	////////////////////////
	// Virus Properties
	////////////////////////
	// Based on median duration of viral shedding from here:
	// https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30566-3/fulltext#bib33
	const infectionDuration = 20;
	const pRecovery = 1 / infectionDuration;
	
	
	// Symptoms most commonly manifest in about 5 days (based on WHO)
	// https://www.who.int/news-room/q-a-detail/q-a-coronaviruses
	const pSymptoms = 1 / 5;
	
	// Case severity info based on: https://jamanetwork.com/journals/jama/fullarticle/2762130
	const pHospitalization = 0.14; // Based on "severe" case-rate
	const pCriticalCare = 0.05; // Based on "critical" case-rate
	const pDeathCritical = 0.49 / infectionDuration; // Critical cases have a higher death rate.
	
	// Contagion multiplier and R0 taken from Imperial College COVID-19 Response Team (Ferguson et al. 2020)
	const r0 = 2.4;
	const symptomsMultiplier = 1.5; // People with symptoms are ~50% more contagious.
	
	// Probability of infection given exposure
	// Formula from: https://rpubs.com/hankstevens/covid19-1
	const pInfection = r0 / infectionDuration;
	
	/////////////////////////
	
	function getPDeath(person){
		// Death rates based on https://jamanetwork.com/journals/jama/fullarticle/2762130
		let overallPDeath;
		if (person.age < 70){
			overallPDeath = 0.023;
		} else if(person.age < 80){
			overallPDeath = 0.048;
		} else{
			overallPDeath = 0.08;
		}
		return overallPDeath / infectionDuration // Convert to chance of death each day
	}
	
	
	
	function updateStatus(person){
		if (person.infected){
			// See if the person gets better
			if(randBernoulli(pRecovery)){
				person.infected = false;
				person.symptoms = false;
				person.hospitalized = false;
				person.recovered = true;
				return
			}
	
			// See if symptoms manifest
			if(!person.symptoms && randBernoulli(pSymptoms)){
				person.symptoms = true;
				// Determine severity of symptoms
				if(randBernoulli(pHospitalization)){ 
					person.hospitalized = true;
				}
				if(randBernoulli(pCriticalCare)){
					person.hospitalized = true;
					person.criticalCare = true;
				}
			}
			// See if person dies
			if(person.symptoms && randBernoulli(person.pCriticalCare ? pDeathCritical : person.pDeath)){
				person.deceased = true;
			}
		}
	}
	
	function simulateInteraction(personA, personB){
		// Determine which person is the victim (if applicable)
		let carrier = null;
		let other = null;
	
		if (personA.infected){
			carrier = personA;
			other = personB;
		}else if (personB.infected){
			carrier = personB;
			other = personA;
		}
		if (carrier && !other.infected && !other.recovered){
			// If the victim gets infected, update thier state
			if (randBernoulli(carrier.symptoms ? pInfection * symptomsMultiplier : pInfection)){
				other.infected = true;
				other.daysInfected = 0;
			}
		}
	}
	
	
	function generatePopulation(size, propInfected, propImmuComp) {
		let people = [];
		let person;
		for (let i = 0; i < size; i++){
			infected = Boolean(randBernoulli(propInfected));
			person = {
				id: i,
				infected: infected,
				symptoms: false,
				hospitalized: false,
				criticalCare: false,
				deceased: false,
				recovered: false,
				// name: faker.fake("{{name.firstName}} {{name.lastName}}"),
				// occupation: faker.name.title(),
				// age: faker.random.number({min: 1, max: 100}),
				age: Math.round(random() * 100),
				immuComp: Boolean(randBernoulli(propImmuComp)),
				pDeath: null
			};
			person.pDeath = getPDeath(person); // Probability of death each day this person is infected
			people.push(person);
		}
		return people
	}
	
	function simulate(options){
		let result = [];
	
		let alive = generatePopulation(options.populationSize, options.propInfected, options.propImmuComp);
		let deceased = [];
		let stillAlive = [];
		let nInfected;
		let nSymptomatic;
		let nHospitalized;
		let nCritical;
		let nRecovered;
	
		for (let day = 0; day < options.nDays; day++) {
			// Simulate interactions between people.
			alive.forEach(function(person){
				sample(alive, {'size': options.interactionsPerDay, 'replace': false}).forEach(function(other){
					simulateInteraction(person, other);
				});
				
			});
			// Update each person's status annd separate alive from deceased.
			nInfected = 0;
			nSymptomatic = 0;
			nHospitalized = 0;
			nCritical = 0;
			nRecovered = 0;
			alive.forEach(function(person){
				updateStatus(person);
				if (person.deceased){
					deceased.push(person);
				} else{
					stillAlive.push(person);
				}
				if (person.infected){
					nInfected++;
					if (person.symptoms){
						nSymptomatic++;
						if (person.hospitalized){
							nHospitalized++;
						}
						if (person.criticalCare){
							nCritical++;
						}
					}
				}else if(person.recovered){
					nRecovered++;
				}
			})
			alive = stillAlive;
			stillAlive = [];
	
			// Record the state at the end of this day
			result.push({
				day: day + 1,
				// alive: cloneDeep(alive),
				// deceased: cloneDeep(deceased),
				nInfected: nInfected,
				nSymptomatic: nSymptomatic,
				nHospitalized: nHospitalized,
				nCritical: nCritical,
				nRecovered: nRecovered
			})
		}
		return result;
	}
	
	window.onload = function(){
		window.simulate = simulate;
	};
	},{"@stdlib/random/base/bernoulli":215,"@stdlib/random/base/randu":232,"@stdlib/random/sample":239,"lodash.clonedeep":319}],321:[function(require,module,exports){
	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function getLens (b64) {
	  var len = b64.length
	
	  if (len % 4 > 0) {
		throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=')
	  if (validLen === -1) validLen = len
	
	  var placeHoldersLen = validLen === len
		? 0
		: 4 - (validLen % 4)
	
	  return [validLen, placeHoldersLen]
	}
	
	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}
	
	function toByteArray (b64) {
	  var tmp
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	
	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
	
	  var curByte = 0
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
		? validLen - 4
		: validLen
	
	  var i
	  for (i = 0; i < len; i += 4) {
		tmp =
		  (revLookup[b64.charCodeAt(i)] << 18) |
		  (revLookup[b64.charCodeAt(i + 1)] << 12) |
		  (revLookup[b64.charCodeAt(i + 2)] << 6) |
		  revLookup[b64.charCodeAt(i + 3)]
		arr[curByte++] = (tmp >> 16) & 0xFF
		arr[curByte++] = (tmp >> 8) & 0xFF
		arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 2) {
		tmp =
		  (revLookup[b64.charCodeAt(i)] << 2) |
		  (revLookup[b64.charCodeAt(i + 1)] >> 4)
		arr[curByte++] = tmp & 0xFF
	  }
	
	  if (placeHoldersLen === 1) {
		tmp =
		  (revLookup[b64.charCodeAt(i)] << 10) |
		  (revLookup[b64.charCodeAt(i + 1)] << 4) |
		  (revLookup[b64.charCodeAt(i + 2)] >> 2)
		arr[curByte++] = (tmp >> 8) & 0xFF
		arr[curByte++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
		lookup[num >> 12 & 0x3F] +
		lookup[num >> 6 & 0x3F] +
		lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
		tmp =
		  ((uint8[i] << 16) & 0xFF0000) +
		  ((uint8[i + 1] << 8) & 0xFF00) +
		  (uint8[i + 2] & 0xFF)
		output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
		parts.push(encodeChunk(
		  uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
		))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
		tmp = uint8[len - 1]
		parts.push(
		  lookup[tmp >> 2] +
		  lookup[(tmp << 4) & 0x3F] +
		  '=='
		)
	  } else if (extraBytes === 2) {
		tmp = (uint8[len - 2] << 8) + uint8[len - 1]
		parts.push(
		  lookup[tmp >> 10] +
		  lookup[(tmp >> 4) & 0x3F] +
		  lookup[(tmp << 2) & 0x3F] +
		  '='
		)
	  }
	
	  return parts.join('')
	}
	
	},{}],322:[function(require,module,exports){
	(function (Buffer){
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = require('base64-js')
	var ieee754 = require('ieee754')
	var customInspectSymbol =
	  (typeof Symbol === 'function' && typeof Symbol.for === 'function')
		? Symbol.for('nodejs.util.inspect.custom')
		: null
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	var K_MAX_LENGTH = 0x7fffffff
	exports.kMaxLength = K_MAX_LENGTH
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
	 *               implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * We report that the browser does not support typed arrays if the are not subclassable
	 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
	 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
	 * for __proto__ and has a buggy typed array implementation.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
	
	if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
		typeof console.error === 'function') {
	  console.error(
		'This browser lacks typed array (Uint8Array) support which is required by ' +
		'`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
	  )
	}
	
	function typedArraySupport () {
	  // Can typed array instances can be augmented?
	  try {
		var arr = new Uint8Array(1)
		var proto = { foo: function () { return 42 } }
		Object.setPrototypeOf(proto, Uint8Array.prototype)
		Object.setPrototypeOf(arr, proto)
		return arr.foo() === 42
	  } catch (e) {
		return false
	  }
	}
	
	Object.defineProperty(Buffer.prototype, 'parent', {
	  enumerable: true,
	  get: function () {
		if (!Buffer.isBuffer(this)) return undefined
		return this.buffer
	  }
	})
	
	Object.defineProperty(Buffer.prototype, 'offset', {
	  enumerable: true,
	  get: function () {
		if (!Buffer.isBuffer(this)) return undefined
		return this.byteOffset
	  }
	})
	
	function createBuffer (length) {
	  if (length > K_MAX_LENGTH) {
		throw new RangeError('The value "' + length + '" is invalid for option "size"')
	  }
	  // Return an augmented `Uint8Array` instance
	  var buf = new Uint8Array(length)
	  Object.setPrototypeOf(buf, Buffer.prototype)
	  return buf
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  // Common case.
	  if (typeof arg === 'number') {
		if (typeof encodingOrOffset === 'string') {
		  throw new TypeError(
			'The "string" argument must be of type string. Received type number'
		  )
		}
		return allocUnsafe(arg)
	  }
	  return from(arg, encodingOrOffset, length)
	}
	
	// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	if (typeof Symbol !== 'undefined' && Symbol.species != null &&
		Buffer[Symbol.species] === Buffer) {
	  Object.defineProperty(Buffer, Symbol.species, {
		value: null,
		configurable: true,
		enumerable: false,
		writable: false
	  })
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	function from (value, encodingOrOffset, length) {
	  if (typeof value === 'string') {
		return fromString(value, encodingOrOffset)
	  }
	
	  if (ArrayBuffer.isView(value)) {
		return fromArrayLike(value)
	  }
	
	  if (value == null) {
		throw new TypeError(
		  'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
		  'or Array-like Object. Received type ' + (typeof value)
		)
	  }
	
	  if (isInstance(value, ArrayBuffer) ||
		  (value && isInstance(value.buffer, ArrayBuffer))) {
		return fromArrayBuffer(value, encodingOrOffset, length)
	  }
	
	  if (typeof SharedArrayBuffer !== 'undefined' &&
		  (isInstance(value, SharedArrayBuffer) ||
		  (value && isInstance(value.buffer, SharedArrayBuffer)))) {
		return fromArrayBuffer(value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'number') {
		throw new TypeError(
		  'The "value" argument must not be of type number. Received type number'
		)
	  }
	
	  var valueOf = value.valueOf && value.valueOf()
	  if (valueOf != null && valueOf !== value) {
		return Buffer.from(valueOf, encodingOrOffset, length)
	  }
	
	  var b = fromObject(value)
	  if (b) return b
	
	  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
		  typeof value[Symbol.toPrimitive] === 'function') {
		return Buffer.from(
		  value[Symbol.toPrimitive]('string'), encodingOrOffset, length
		)
	  }
	
	  throw new TypeError(
		'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
		'or Array-like Object. Received type ' + (typeof value)
	  )
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(value, encodingOrOffset, length)
	}
	
	// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
	// https://github.com/feross/buffer/pull/148
	Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
	Object.setPrototypeOf(Buffer, Uint8Array)
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
		throw new TypeError('"size" argument must be of type number')
	  } else if (size < 0) {
		throw new RangeError('The value "' + size + '" is invalid for option "size"')
	  }
	}
	
	function alloc (size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
		return createBuffer(size)
	  }
	  if (fill !== undefined) {
		// Only pay attention to encoding if it's a string. This
		// prevents accidentally sending in a number that would
		// be interpretted as a start offset.
		return typeof encoding === 'string'
		  ? createBuffer(size).fill(fill, encoding)
		  : createBuffer(size).fill(fill)
	  }
	  return createBuffer(size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(size, fill, encoding)
	}
	
	function allocUnsafe (size) {
	  assertSize(size)
	  return createBuffer(size < 0 ? 0 : checked(size) | 0)
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(size)
	}
	
	function fromString (string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
		encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
		throw new TypeError('Unknown encoding: ' + encoding)
	  }
	
	  var length = byteLength(string, encoding) | 0
	  var buf = createBuffer(length)
	
	  var actual = buf.write(string, encoding)
	
	  if (actual !== length) {
		// Writing a hex string, for example, that contains invalid characters will
		// cause everything after the first invalid character to be ignored. (e.g.
		// 'abxxcd' will be treated as 'ab')
		buf = buf.slice(0, actual)
	  }
	
	  return buf
	}
	
	function fromArrayLike (array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  var buf = createBuffer(length)
	  for (var i = 0; i < length; i += 1) {
		buf[i] = array[i] & 255
	  }
	  return buf
	}
	
	function fromArrayBuffer (array, byteOffset, length) {
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
		throw new RangeError('"offset" is outside of buffer bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
		throw new RangeError('"length" is outside of buffer bounds')
	  }
	
	  var buf
	  if (byteOffset === undefined && length === undefined) {
		buf = new Uint8Array(array)
	  } else if (length === undefined) {
		buf = new Uint8Array(array, byteOffset)
	  } else {
		buf = new Uint8Array(array, byteOffset, length)
	  }
	
	  // Return an augmented `Uint8Array` instance
	  Object.setPrototypeOf(buf, Buffer.prototype)
	
	  return buf
	}
	
	function fromObject (obj) {
	  if (Buffer.isBuffer(obj)) {
		var len = checked(obj.length) | 0
		var buf = createBuffer(len)
	
		if (buf.length === 0) {
		  return buf
		}
	
		obj.copy(buf, 0, 0, len)
		return buf
	  }
	
	  if (obj.length !== undefined) {
		if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
		  return createBuffer(0)
		}
		return fromArrayLike(obj)
	  }
	
	  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
		return fromArrayLike(obj.data)
	  }
	}
	
	function checked (length) {
	  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= K_MAX_LENGTH) {
		throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
							 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
		length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return b != null && b._isBuffer === true &&
		b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
	}
	
	Buffer.compare = function compare (a, b) {
	  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
	  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		throw new TypeError(
		  'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
		)
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
		if (a[i] !== b[i]) {
		  x = a[i]
		  y = b[i]
		  break
		}
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
		case 'hex':
		case 'utf8':
		case 'utf-8':
		case 'ascii':
		case 'latin1':
		case 'binary':
		case 'base64':
		case 'ucs2':
		case 'ucs-2':
		case 'utf16le':
		case 'utf-16le':
		  return true
		default:
		  return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!Array.isArray(list)) {
		throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
		return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
		length = 0
		for (i = 0; i < list.length; ++i) {
		  length += list[i].length
		}
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
		var buf = list[i]
		if (isInstance(buf, Uint8Array)) {
		  buf = Buffer.from(buf)
		}
		if (!Buffer.isBuffer(buf)) {
		  throw new TypeError('"list" argument must be an Array of Buffers')
		}
		buf.copy(buffer, pos)
		pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
		return string.length
	  }
	  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
		return string.byteLength
	  }
	  if (typeof string !== 'string') {
		throw new TypeError(
		  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
		  'Received type ' + typeof string
		)
	  }
	
	  var len = string.length
	  var mustMatch = (arguments.length > 2 && arguments[2] === true)
	  if (!mustMatch && len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
		switch (encoding) {
		  case 'ascii':
		  case 'latin1':
		  case 'binary':
			return len
		  case 'utf8':
		  case 'utf-8':
			return utf8ToBytes(string).length
		  case 'ucs2':
		  case 'ucs-2':
		  case 'utf16le':
		  case 'utf-16le':
			return len * 2
		  case 'hex':
			return len >>> 1
		  case 'base64':
			return base64ToBytes(string).length
		  default:
			if (loweredCase) {
			  return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
			}
			encoding = ('' + encoding).toLowerCase()
			loweredCase = true
		}
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
		start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
		return ''
	  }
	
	  if (end === undefined || end > this.length) {
		end = this.length
	  }
	
	  if (end <= 0) {
		return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
		return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
		switch (encoding) {
		  case 'hex':
			return hexSlice(this, start, end)
	
		  case 'utf8':
		  case 'utf-8':
			return utf8Slice(this, start, end)
	
		  case 'ascii':
			return asciiSlice(this, start, end)
	
		  case 'latin1':
		  case 'binary':
			return latin1Slice(this, start, end)
	
		  case 'base64':
			return base64Slice(this, start, end)
	
		  case 'ucs2':
		  case 'ucs-2':
		  case 'utf16le':
		  case 'utf-16le':
			return utf16leSlice(this, start, end)
	
		  default:
			if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
			encoding = (encoding + '').toLowerCase()
			loweredCase = true
		}
	  }
	}
	
	// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
	// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
	// reliably in a browserify context because there could be multiple different
	// copies of the 'buffer' package in use. This method works even for Buffer
	// instances that were created from another copy of the `buffer` package.
	// See: https://github.com/feross/buffer/issues/154
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
		throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
		swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
		throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
		swap(this, i, i + 3)
		swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
		throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
		swap(this, i, i + 7)
		swap(this, i + 1, i + 6)
		swap(this, i + 2, i + 5)
		swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.toLocaleString = Buffer.prototype.toString
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
	  if (this.length > max) str += ' ... '
	  return '<Buffer ' + str + '>'
	}
	if (customInspectSymbol) {
	  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (isInstance(target, Uint8Array)) {
		target = Buffer.from(target, target.offset, target.byteLength)
	  }
	  if (!Buffer.isBuffer(target)) {
		throw new TypeError(
		  'The "target" argument must be one of type Buffer or Uint8Array. ' +
		  'Received type ' + (typeof target)
		)
	  }
	
	  if (start === undefined) {
		start = 0
	  }
	  if (end === undefined) {
		end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
		thisStart = 0
	  }
	  if (thisEnd === undefined) {
		thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
		throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
		return 0
	  }
	  if (thisStart >= thisEnd) {
		return -1
	  }
	  if (start >= end) {
		return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
		if (thisCopy[i] !== targetCopy[i]) {
		  x = thisCopy[i]
		  y = targetCopy[i]
		  break
		}
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
		encoding = byteOffset
		byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
		byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
		byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset // Coerce to Number.
	  if (numberIsNaN(byteOffset)) {
		// byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
		byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
		if (dir) return -1
		else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
		if (dir) byteOffset = 0
		else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
		val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
		// Special case: looking for empty string/buffer always fails
		if (val.length === 0) {
		  return -1
		}
		return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
		val = val & 0xFF // Search for a byte value [0-255]
		if (typeof Uint8Array.prototype.indexOf === 'function') {
		  if (dir) {
			return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
		  } else {
			return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
		  }
		}
		return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
		encoding = String(encoding).toLowerCase()
		if (encoding === 'ucs2' || encoding === 'ucs-2' ||
			encoding === 'utf16le' || encoding === 'utf-16le') {
		  if (arr.length < 2 || val.length < 2) {
			return -1
		  }
		  indexSize = 2
		  arrLength /= 2
		  valLength /= 2
		  byteOffset /= 2
		}
	  }
	
	  function read (buf, i) {
		if (indexSize === 1) {
		  return buf[i]
		} else {
		  return buf.readUInt16BE(i * indexSize)
		}
	  }
	
	  var i
	  if (dir) {
		var foundIndex = -1
		for (i = byteOffset; i < arrLength; i++) {
		  if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
			if (foundIndex === -1) foundIndex = i
			if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
		  } else {
			if (foundIndex !== -1) i -= i - foundIndex
			foundIndex = -1
		  }
		}
	  } else {
		if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
		for (i = byteOffset; i >= 0; i--) {
		  var found = true
		  for (var j = 0; j < valLength; j++) {
			if (read(arr, i + j) !== read(val, j)) {
			  found = false
			  break
			}
		  }
		  if (found) return i
		}
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
		length = remaining
	  } else {
		length = Number(length)
		if (length > remaining) {
		  length = remaining
		}
	  }
	
	  var strLen = string.length
	
	  if (length > strLen / 2) {
		length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
		var parsed = parseInt(string.substr(i * 2, 2), 16)
		if (numberIsNaN(parsed)) return i
		buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
		encoding = 'utf8'
		length = this.length
		offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
		encoding = offset
		length = this.length
		offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
		offset = offset >>> 0
		if (isFinite(length)) {
		  length = length >>> 0
		  if (encoding === undefined) encoding = 'utf8'
		} else {
		  encoding = length
		  length = undefined
		}
	  } else {
		throw new Error(
		  'Buffer.write(string, encoding, offset[, length]) is no longer supported'
		)
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
		throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
		switch (encoding) {
		  case 'hex':
			return hexWrite(this, string, offset, length)
	
		  case 'utf8':
		  case 'utf-8':
			return utf8Write(this, string, offset, length)
	
		  case 'ascii':
			return asciiWrite(this, string, offset, length)
	
		  case 'latin1':
		  case 'binary':
			return latin1Write(this, string, offset, length)
	
		  case 'base64':
			// Warning: maxLength not taken into account in base64Write
			return base64Write(this, string, offset, length)
	
		  case 'ucs2':
		  case 'ucs-2':
		  case 'utf16le':
		  case 'utf-16le':
			return ucs2Write(this, string, offset, length)
	
		  default:
			if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
			encoding = ('' + encoding).toLowerCase()
			loweredCase = true
		}
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
		type: 'Buffer',
		data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
		return base64.fromByteArray(buf)
	  } else {
		return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
		var firstByte = buf[i]
		var codePoint = null
		var bytesPerSequence = (firstByte > 0xEF) ? 4
		  : (firstByte > 0xDF) ? 3
			: (firstByte > 0xBF) ? 2
			  : 1
	
		if (i + bytesPerSequence <= end) {
		  var secondByte, thirdByte, fourthByte, tempCodePoint
	
		  switch (bytesPerSequence) {
			case 1:
			  if (firstByte < 0x80) {
				codePoint = firstByte
			  }
			  break
			case 2:
			  secondByte = buf[i + 1]
			  if ((secondByte & 0xC0) === 0x80) {
				tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
				if (tempCodePoint > 0x7F) {
				  codePoint = tempCodePoint
				}
			  }
			  break
			case 3:
			  secondByte = buf[i + 1]
			  thirdByte = buf[i + 2]
			  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
				tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
				if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
				  codePoint = tempCodePoint
				}
			  }
			  break
			case 4:
			  secondByte = buf[i + 1]
			  thirdByte = buf[i + 2]
			  fourthByte = buf[i + 3]
			  if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
				tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
				if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
				  codePoint = tempCodePoint
				}
			  }
		  }
		}
	
		if (codePoint === null) {
		  // we did not generate a valid codePoint so insert a
		  // replacement char (U+FFFD) and advance only 1 byte
		  codePoint = 0xFFFD
		  bytesPerSequence = 1
		} else if (codePoint > 0xFFFF) {
		  // encode to utf16 (surrogate pair dance)
		  codePoint -= 0x10000
		  res.push(codePoint >>> 10 & 0x3FF | 0xD800)
		  codePoint = 0xDC00 | codePoint & 0x3FF
		}
	
		res.push(codePoint)
		i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
		return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
		res += String.fromCharCode.apply(
		  String,
		  codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
		)
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
		ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
		ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
		out += hexSliceLookupTable[buf[i]]
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
		res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
		start += len
		if (start < 0) start = 0
	  } else if (start > len) {
		start = len
	  }
	
	  if (end < 0) {
		end += len
		if (end < 0) end = 0
	  } else if (end > len) {
		end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf = this.subarray(start, end)
	  // Return an augmented `Uint8Array` instance
	  Object.setPrototypeOf(newBuf, Buffer.prototype)
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
		val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
		checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
		val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
		  (this[offset + 1] << 8) |
		  (this[offset + 2] << 16)) +
		  (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
		((this[offset + 1] << 16) |
		(this[offset + 2] << 8) |
		this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
		val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
		val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
		(this[offset + 1] << 8) |
		(this[offset + 2] << 16) |
		(this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
		(this[offset + 1] << 16) |
		(this[offset + 2] << 8) |
		(this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  offset = offset >>> 0
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
		var maxBytes = Math.pow(2, 8 * byteLength) - 1
		checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
		this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  byteLength = byteLength >>> 0
	  if (!noAssert) {
		var maxBytes = Math.pow(2, 8 * byteLength) - 1
		checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
		this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset + 3] = (value >>> 24)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 1] = (value >>> 8)
	  this[offset] = (value & 0xff)
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
		var limit = Math.pow(2, (8 * byteLength) - 1)
	
		checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
		if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
		  sub = 1
		}
		this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
		var limit = Math.pow(2, (8 * byteLength) - 1)
	
		checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
		if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
		  sub = 1
		}
		this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  this[offset] = (value >>> 8)
	  this[offset + 1] = (value & 0xff)
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  this[offset] = (value & 0xff)
	  this[offset + 1] = (value >>> 8)
	  this[offset + 2] = (value >>> 16)
	  this[offset + 3] = (value >>> 24)
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  this[offset] = (value >>> 24)
	  this[offset + 1] = (value >>> 16)
	  this[offset + 2] = (value >>> 8)
	  this[offset + 3] = (value & 0xff)
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
		checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  value = +value
	  offset = offset >>> 0
	  if (!noAssert) {
		checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
		throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
		end = target.length - targetStart + start
	  }
	
	  var len = end - start
	
	  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
		// Use built-in when available, missing from IE11
		this.copyWithin(targetStart, start, end)
	  } else if (this === target && start < targetStart && targetStart < end) {
		// descending copy from end
		for (var i = len - 1; i >= 0; --i) {
		  target[i + targetStart] = this[i + start]
		}
	  } else {
		Uint8Array.prototype.set.call(
		  target,
		  this.subarray(start, end),
		  targetStart
		)
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
		if (typeof start === 'string') {
		  encoding = start
		  start = 0
		  end = this.length
		} else if (typeof end === 'string') {
		  encoding = end
		  end = this.length
		}
		if (encoding !== undefined && typeof encoding !== 'string') {
		  throw new TypeError('encoding must be a string')
		}
		if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
		  throw new TypeError('Unknown encoding: ' + encoding)
		}
		if (val.length === 1) {
		  var code = val.charCodeAt(0)
		  if ((encoding === 'utf8' && code < 128) ||
			  encoding === 'latin1') {
			// Fast path: If `val` fits into a single byte, use that numeric value.
			val = code
		  }
		}
	  } else if (typeof val === 'number') {
		val = val & 255
	  } else if (typeof val === 'boolean') {
		val = Number(val)
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
		throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
		return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
		for (i = start; i < end; ++i) {
		  this[i] = val
		}
	  } else {
		var bytes = Buffer.isBuffer(val)
		  ? val
		  : Buffer.from(val, encoding)
		var len = bytes.length
		if (len === 0) {
		  throw new TypeError('The value "' + val +
			'" is invalid for argument "value"')
		}
		for (i = 0; i < end - start; ++i) {
		  this[i + start] = bytes[i % len]
		}
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node takes equal signs as end of the Base64 encoding
	  str = str.split('=')[0]
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = str.trim().replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
		str = str + '='
	  }
	  return str
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
		codePoint = string.charCodeAt(i)
	
		// is surrogate component
		if (codePoint > 0xD7FF && codePoint < 0xE000) {
		  // last char was a lead
		  if (!leadSurrogate) {
			// no lead yet
			if (codePoint > 0xDBFF) {
			  // unexpected trail
			  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
			  continue
			} else if (i + 1 === length) {
			  // unpaired lead
			  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
			  continue
			}
	
			// valid lead
			leadSurrogate = codePoint
	
			continue
		  }
	
		  // 2 leads in a row
		  if (codePoint < 0xDC00) {
			if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
			leadSurrogate = codePoint
			continue
		  }
	
		  // valid surrogate pair
		  codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
		} else if (leadSurrogate) {
		  // valid bmp char, but last char was a lead
		  if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		}
	
		leadSurrogate = null
	
		// encode utf8
		if (codePoint < 0x80) {
		  if ((units -= 1) < 0) break
		  bytes.push(codePoint)
		} else if (codePoint < 0x800) {
		  if ((units -= 2) < 0) break
		  bytes.push(
			codePoint >> 0x6 | 0xC0,
			codePoint & 0x3F | 0x80
		  )
		} else if (codePoint < 0x10000) {
		  if ((units -= 3) < 0) break
		  bytes.push(
			codePoint >> 0xC | 0xE0,
			codePoint >> 0x6 & 0x3F | 0x80,
			codePoint & 0x3F | 0x80
		  )
		} else if (codePoint < 0x110000) {
		  if ((units -= 4) < 0) break
		  bytes.push(
			codePoint >> 0x12 | 0xF0,
			codePoint >> 0xC & 0x3F | 0x80,
			codePoint >> 0x6 & 0x3F | 0x80,
			codePoint & 0x3F | 0x80
		  )
		} else {
		  throw new Error('Invalid code point')
		}
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
		// Node's code seems to be doing this and not & 0x7F..
		byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
		if ((units -= 2) < 0) break
	
		c = str.charCodeAt(i)
		hi = c >> 8
		lo = c % 256
		byteArray.push(lo)
		byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
		if ((i + offset >= dst.length) || (i >= src.length)) break
		dst[i + offset] = src[i]
	  }
	  return i
	}
	
	// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
	// the `instanceof` check but they should be treated as of that type.
	// See: https://github.com/feross/buffer/issues/166
	function isInstance (obj, type) {
	  return obj instanceof type ||
		(obj != null && obj.constructor != null && obj.constructor.name != null &&
		  obj.constructor.name === type.name)
	}
	function numberIsNaN (obj) {
	  // For IE11 support
	  return obj !== obj // eslint-disable-line no-self-compare
	}
	
	// Create lookup table for `toString('hex')`
	// See: https://github.com/feross/buffer/issues/219
	var hexSliceLookupTable = (function () {
	  var alphabet = '0123456789abcdef'
	  var table = new Array(256)
	  for (var i = 0; i < 16; ++i) {
		var i16 = i * 16
		for (var j = 0; j < 16; ++j) {
		  table[i16 + j] = alphabet[i] + alphabet[j]
		}
	  }
	  return table
	})()
	
	}).call(this,require("buffer").Buffer)
	},{"base64-js":321,"buffer":322,"ieee754":323}],323:[function(require,module,exports){
	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
		e = 1 - eBias
	  } else if (e === eMax) {
		return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
		m = m + Math.pow(2, mLen)
		e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
		m = isNaN(value) ? 1 : 0
		e = eMax
	  } else {
		e = Math.floor(Math.log(value) / Math.LN2)
		if (value * (c = Math.pow(2, -e)) < 1) {
		  e--
		  c *= 2
		}
		if (e + eBias >= 1) {
		  value += rt / c
		} else {
		  value += rt * Math.pow(2, 1 - eBias)
		}
		if (value * c >= 2) {
		  e++
		  c /= 2
		}
	
		if (e + eBias >= eMax) {
		  m = 0
		  e = eMax
		} else if (e + eBias >= 1) {
		  m = ((value * c) - 1) * Math.pow(2, mLen)
		  e = e + eBias
		} else {
		  m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
		  e = 0
		}
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}
	
	},{}]},{},[320]);
	