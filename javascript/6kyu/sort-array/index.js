function sortArray(a) {
	// Return a sorted array.
	// Used a insertion sort algorithm.
	for (let i = 0; i < a.length; i++) {
		if (a[i] % 2 !== 0) {
			let min = a[i];
			let minIndex = i;
			for (let j = i + 1; j < a.length; j++) {
				if (a[j] % 2 !== 0 && a[j] < min) {
					min = a[j];
					minIndex = j;
				}
			}
			temp = a[i];
			a[i] = min;
			a[minIndex] = temp;
		}
	}
	return a;
}

module.exports = sortArray;
