Array.prototype.sameStructureAs = function (other) {
	// Return 'true' if and only if 'other' has the same
	// nesting structure as 'this'.

	const isArray = Array.isArray;

	function helper(arr1, arr2) {
		if (isArray(arr1) ^ isArray(arr2)) return false;
		if (isArray(arr1) === false && isArray(arr2) === false) return true;
		if (arr1.length !== arr2.length) return false;

		for (let i = 0; i < arr1.length; i++) {
			let result = helper(arr1[i], arr2[i]);
			if (result === false) return false;
		}
		return true;
	}

	let result = helper(this, other);
	return result;
	// Note: You are given a function isArray(o) that returns
	// whether its argument is an array.
};

[1, 1, 1].sameStructureAs([2, 2, 2]);

module.exports = Array;
