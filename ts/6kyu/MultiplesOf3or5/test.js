import { Challenge } from './solution.js';
import { assert } from 'chai';

function test(num, expected) {
	assert.strictEqual(Challenge.solution(num), expected);
}

describe('solution', function () {
	it('should handle basic tests', function () {
		test(10, 23);
	});
});
