function validBraces(braces) {
	var s = braces;
	var regex = /({}|\[]|())/g;
	while (s.match(regex)) {
		s = s.replace(regex, '');
	}
	if (s.length > 0) return false;
	return true;
}
validBraces('(){}[]');
validBraces('([{}])');
