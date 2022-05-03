let RomanNumerals = {
	numerals: [
		['M', 1000],
		['CM', 900],
		['D', 500],
		['CD', 400],
		['C', 100],
		['XC', 90],
		['L', 50],
		['XL', 40],
		['X', 10],
		['IX', 9],
		['V', 5],
		['IV', 4],
		['I', 1],
	],
	toRoman: function (decimal) {
		let remaining = decimal;
		let romanStr = '';
		this.numerals.forEach(([letter, value]) => {
			while (remaining >= value) {
				romanStr += letter;
				remaining -= value;
			}
		});
		return romanStr;
	},
	fromRoman: function (romanNumeral) {
		let strRemaining = romanNumeral;
		let acc = 0;
		this.numerals.forEach(([letter, value]) => {
			while (strRemaining.indexOf(letter) === 0) {
				acc += value;
				strRemaining = strRemaining.slice(letter.length);
			}
		});
		return acc;
	},
};

console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.fromRoman('MCMXC'));
