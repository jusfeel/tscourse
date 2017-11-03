// obfuscated by .,.
function countAvr(...avr: number[]): string {
	var t = 0;
	var c = 0;

	for (var k = 0; k < avr.length; k++) {
		t += avr[k];
		c++;
	}

	var av = t / c;
	return 'The average is ' + av;
}

var res = countAvr(1, 6, 8, 9, 11); // 'The average is 7'
console.log(res);