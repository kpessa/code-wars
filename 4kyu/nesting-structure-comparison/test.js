// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require('chai');
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

const Array = require('./index');

describe('Solution', function () {
	it('true test cases', function () {
		assert.equal([1, 1, 1].sameStructureAs([2, 2, 2]), true);
		assert.equal([1, [1, 1]].sameStructureAs([2, [2, 2]]), true);
	});

	it('false test cases', function () {
		assert.equal([1, [1, 1]].sameStructureAs([[2, 2], 2]), false);
		assert.equal([1, [1, 1]].sameStructureAs([[2], 2]), false);
		// assert.strictEqual(1 + 1, 2);
	});
});
