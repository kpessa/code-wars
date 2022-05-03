var assert = require('assert');

var lastDigit = function (str1, str2) {
	let num1 = Number(BigInt(str1) % 10n);
	let num2 = Number(BigInt(str2) % 4n);
	if (num1 === 0 && num2 === 0) return 0;
	return num1 ** num2 % 10;
};

function runTest(str1, str2) {
	return it(`${str1}^${str2}==${Number(str1) ** Number(str2) % 10}`, function () {
		assert.equal(lastDigit(str1, str2), Number(str1) ** Number(str2) % 10);
	});
}

describe('last digit function', function () {
	it('log sequence', function () {
		assert.equal(lastDigit('1606938044258990275541962092341162602522202993782792835301376', '2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376'), 6);
	});
});
