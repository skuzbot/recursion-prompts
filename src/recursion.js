/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number.
//	base case: n = 0; reduction: n * n-1 edge: n is negative
var factorial = (n) => { 
	return n < 0 ? null : n === 0 ? 1 : n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
//	base: array length is 0; reduction: index 0 + index 1
var sum = (array) => {
   return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
//	base: array length is 0 ; reduction: index 0 + index 1; edge: if index is an array run function on index
var arraySum = (array) => {
	return (array.length === 0) ? 0 
		: Array.isArray(array[0]) ? arraySum(array[0]) + arraySum(array.slice(1))
			: array[0] + arraySum(array.slice(1));
};

// 4. Check if a number is even.
//	base case: n = 0 true, n = 1 false; reduction: n - 2; edge: (n < 0)
var isEven = (n) => {
	return (n === 0) ? true
		: (n === 1) ? false
			: (n < 0) ? isEven(-n)
				: isEven(n - 2);
};

// 5. Sum all integers below a given integer.
//	base: n = 0; recusion: n - 1 + sumBelow(n - 1); edge: (n < 0)
var sumBelow = (n) => {
	return (n === 0) ? 0
		: (n < 0) ? (n + 1) + sumBelow(n + 1)
			: (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// 	base: x is 1 place away from y; recursion increment x up or down towards y then concat to itself
var range =(x, y) => {
	return ((x + 1) < y) ? [x + 1].concat(range((x + 1), y)) 
		: ((x - 1) > y) ? [x - 1].concat(range((x - 1), y))
			: [];
};

// 7. Compute the exponent of a number.
//	base: exp is 0 base equals 1 recursion: increment exp towards but not reaching 0; edge: exp 0 output 1
var exponent =(base, exp) => {
  return (exp > 0) ? base * exponent(base, (exp - 1)) 
    : (exp < 0) ? 1 / (base * exponent(base, (-1 * (exp + 1))))
      : 1;
};

// 8. Determine if a number is a power of two.  **** NOTE: does not work for negative powers of 2
//	base: n = 2 is true n is between 2 and 0 is false ; recursion: divide n by 2 ; edge: n = 1 true;
var powerOfTwo = (n) => {
  return (n === 2 || n === 1) ? true
    : (n > 2) ? powerOfTwo(n / 2)
      : false;
};

// 9. Write a function that reverses a string.
//	base: string length is zero; recursion: run reverse on chars after [0] then add [0] to result
var reverse = (string) => {
  return (string.length === 0) ? ''
    : reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
//	base: str.length reaches zero with no false matches; recursion: if char 1st = last, remove and run again
var palindrome = (string) => {
  var str = string.toLowerCase().replace(/\s/g, '');
  return (str.length <= 1) ? true
    : (str.charAt(0) === str.charAt(str.length - 1)) ? palindrome(str.substr(1, str.length - 2))
      : false; 
};

// 11. Write a function that returns the remainder of x divided by y without using the
//  base: diff between x and y is less than y; recursion: modulo(x - y, y) edge: y=0 return NaN
//  if x < 0 output is (-) therefore need to switch sign of x and output
//  if y < 0 switch it's sign so modulo() will incriment towards zero
var modulo = (x, y) => {
  return (y === 0) ? NaN
    : (x < 0) ? -modulo(-x, y)
      : (y < 0) ? modulo(x, -y)
        : (x < y) ? x
          : modulo(x-y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
//  base: x is 1 return y; recusion: y + multiply(x - 1, y) edge: either is 0
var multiply = (x, y) => {
  return (x === 0 || y === 0) ? 0
    : (x < 0) ? -multiply(-x, y)
      : (y < 0) ? -multiply(x, -y)
        : (x > 1) ? y + multiply(x - 1, y)
          : y;
};

// 13. Write a function that divides two numbers without using the / operator or
//  base: distance from x to 0 is less than y; recursion: 1 + divide((x - y), y)
var divide =(x, y) => {
  return (y === 0) ? NaN
    : (x < 0) ? -divide(-x, y)
      : (y < 0) ? divide(x, -y)
        : (x < y) ? 0
          : 1 + divide((x - y), y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
//  base: upper % lower = 0; recusion: gcd(lower, (upper % lower)); edge: null if a || b < 0
var gcd = (x, y) => {
  var lower = Math.min(x, y);
  var upper = Math.max(x, y);
  return (x < 0 || y < 0) ? null
    :(upper % lower === 0) ? lower
      : gcd(lower, (upper % lower));
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
//  base: str1 and str2 length = 0; recursion: incriment over each letter until both ''
var compareStr = (str1, str2) => {
  return ((str1.charAt(0) === '') && (str2.charAt(0) === '')) ? true
    : (str1.charAt(0) === str2.charAt(0)) ? compareStr(str1.substr(1), str2.substr(1))
      : false; 
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// base: str.length = 0; recursion: concat substr(1) to charAt(0)
var createArray = (str) => {
  return (str.length > 0) ? [str.charAt(0)].concat(createArray(str.substr(1))) : [];
};

// 17. Reverse the order of an array
//  base: length = 0; take last index then concat reversArr of the remaining indexes
var reverseArr =(array) => {
  return (array.length > 0) ? [array[array.length - 1]].concat(reverseArr(array.slice(0, -1))) : [];
};

// 18. Create a new array with a given value and length.
//  base: length = 0; recursion: concat value with length -1
var buildList =(value, length) => {
  return (length > 0) ? [value].concat(buildList(value, length - 1)) : [];
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = (n) => {
  return ((n % 3 === 0) && (n % 5 === 0)) ? fizzBuzz(n - 1).concat('FizzBuzz')
    : (n % 5 === 0) ? fizzBuzz(n - 1).concat('Buzz')
      : (n % 3 === 0) ? fizzBuzz(n - 1).concat('Fizz')
        : (n > 1) ? fizzBuzz(n - 1).concat(String(n))
          : ['1'];
};

// 20. Count the occurence of a value in a list.
//  base: array.length = 0; recursion: check array[0] matches value then run on array.slice(1)
var countOccurrence = (array, value) => {
  return (!array.length) ? 0 : (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
//  base: array.length = 0; recursion: callback(array[0) then concat slice(1)
var rMap = (array, callback) => {
  return (!array.length) ? array : [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
var countKeysInObj =(obj, key) => {
  var counter = 0;

  for (var k in obj) {
    if (k === key) {
      counter++;
    }
    if(typeof obj[k] === 'object') {
      counter += countKeysInObj(obj[k], key);
    }
  }

  return counter;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = (obj, value) => {
  var counter = 0;

  for (var k in obj) {
    if (obj[k] === value) {
      counter++;
    }
    if (typeof obj[k] === 'object') {
     counter += countValuesInObj(obj[k], value)
    }
  }
  return counter;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = (obj, oldKey, newKey) => {
  for (var k in obj) {
    if (k === oldKey) {
      obj[newKey] = obj[k];
      delete obj[k];
    }
    if (typeof obj[k] === 'object') {
      replaceKeysInObj(obj[k], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
//	base: n = 0; recursion:return array of fn-1, fn-1 + fn-2 
var fibonacci =(n) => {
	if (n <= 0) {
		return null;
	}
	if (n === 1) {
		return [0, 1];
	}
	var array = fibonacci(n - 1);
	return [...array, array[n - 1] + array[n - 2]];
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// base: n = 0 recursion: return fn-1 fn-2
var nthFibo = (n) => {
	return (n > 1) ? nthFibo(n - 1) + nthFibo(n - 2)
		: (n === 1) ? 1
			: (n === 0) ? 0
				: null;
};

// 27. Given an array of words, return a new array containing each word capitalized.
//base: !array.length; recursion: array[0].toUppercase()
var capitalizeWords =(array) => {
	return (!array.length) ? []
		: [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
//base: !array.length; recursion: array[0] chain split, toUpper, concat with array[0] slice(1)
var capitalizeFirst =(array) => {
	return (!array.length) ? []
		: [array[0].split('')[0].toUpperCase().concat(array[0].split('').slice(1)).replace(/,/g, '')].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
