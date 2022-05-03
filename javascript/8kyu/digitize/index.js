function digitize(n) {
	return String(n).split``.map(Number).reverse();
}

module.exports = digitize;
