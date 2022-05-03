const lastDigit = require('./lastDigit');

test('simple tests', () => {
	expect(lastDigit('4', '1')).toBe(4);
});
