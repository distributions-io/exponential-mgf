'use strict';

// FUNCTIONS //


// PARTIAL //

/**
* FUNCTION: partial( lambda )
*	Partially applies rate parameter `lambda` and returns a function for evaluating the moment-generating function (MGF) for an exponential distribution.
*
* @param {Number} lambda - rate parameter
* @returns {Function} MGF
*/
function partial( lambda ) {

	/**
	* FUNCTION: mgf( t )
	*	Evaluates the moment-generating function (MGF) for an exponential distribution.
	*
	* @private
	* @param {Number} t - input value
	* @returns {Number} evaluated MGF
	*/
	return function mgf( t ) {
		if ( t >= lambda ) {
			return NaN;
		}
		return lambda / ( lambda - t );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
