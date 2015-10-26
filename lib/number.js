'use strict';

// FUNCTIONS //


// MGF //

/**
* FUNCTION: mgf( x, lambda )
*	Evaluates the moment-generating function (MGF) for an exponential distribution with rate parameter `lambda` at a value `t`.
*
* @param {Number} t - input value
* @param {Number} lambda - rate parameter
* @returns {Number} evaluated MGF
*/
function mgf( t, lambda ) {
	if ( t >= lambda ) {
		return NaN;
	}
	return lambda / ( lambda - t );
} // end FUNCTION mgf()


// EXPORTS //

module.exports = mgf;
