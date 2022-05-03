const billboard = require('./name-on-billboard.js');

test('Basic tests', () => {
	expect(billboard('Jeong-Ho Aristotelis')).toEqual(600);
});
