const chai = require('chai');
const assert = chai.assert;

const hello = require('./index');

describe('test function', () => {
	it('should return what was sent to function', () => {
		assert.equal(hello('kurt'), 'Hello, kurt!');
	});
	it('sent susan to hello function', () => {
		assert.equal(hello('susan'), 'Hello, susan!');
	});
});
