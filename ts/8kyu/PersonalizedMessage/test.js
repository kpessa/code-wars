import { assert } from 'chai';

import { greet } from './solution.js';

// TODO Add your tests here
describe('example', () => {
	it('Fixed test', () => {
		assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss');
		assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest');
	});
});
