
// Given a signed 32-bit integer x, return x with its digits reversed. 
//If reversing x causes the value to go outside the signed 32-bit integer range
// [-2^31, 2^31 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers 
//(signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321

// Example 2:

// Input: x = -123
// Output: -321

// Example 3:

// Input: x = 120
// Output: 21

// Example 4:

// Input: x = 0
// Output: 0

 

// Constraints:

//     -2^31 <= x <= 2^31 - 1


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let number = Math.abs(x).toString().split('').reverse().join('');
    if(number > 2147483647) {return 0}
    return(x < 0? -1: 1) * number
};

var reverse = function(x) {
    let positive = true;
    if (x < 0) {
        positive = false;
        x *= -1;
    }
    let reversedNumber = parseInt(x.toString().split('').reverse().join(''));
    if (!positive) {
        reversedNumber *= -1;
    }
    if (reversedNumber > 2147483647 || reversedNumber < -2147483648) {
        return 0;
    }
	return reversedNumber;
};