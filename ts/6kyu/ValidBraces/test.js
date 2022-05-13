import validBraces from './solution.js';
import { assert } from 'chai';

describe('solution', function () {
	it('should handle basic tests', function () {
		assert.strictEqual(validBraces('()'), true);
		assert.strictEqual(validBraces('[(])'), false);
	});
});
