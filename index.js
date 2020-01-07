function sum (a, b, c, target) {
	console.log('', target);
	return a + b + c;
}

var tt = sum.apply(null, [1,2,3, null]);

console.log('', tt);