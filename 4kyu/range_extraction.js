function range_extraction(a) {
	let count = 1;
	let idx = 0;

	function move_forward() {
		idx += 1;
		count += 1;
	}

	function make_range() {
		s = a[idx];
		while (count > 1) {
			count -= 1;
			delete a[idx];
			idx -= 1;
		}
		s = `${a[idx]}-${s}`;
		a[idx] = s;
	}

	while (true) {
		if (idx == 0)
			// base case
			move_forward();
		else if (idx !== a.length - 1)
			if (typeof a[idx - 1] !== 'number' || a[idx] == a[idx - 1] + 1)
				// increment step
				move_forward();
			else {
				if (count > 1) {
					// back up
					count -= 1;
					idx -= 1;
					// if count >= 3, make range
					if (count >= 3) make_range();
					// reset count
					count = 0;
				}
				move_forward();
			}
		else {
			// terminate step
			if (count >= 3) make_range();
			break;
		}
	}
	return a.join(',');
}

let ans = range_extraction([0, 1, 2, 4, 5, 7, 8, 9]);
console.log(ans);
