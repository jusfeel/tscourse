function countAvr(x: number, y: number, z: number): string {
	var together = x + y + z;
	var avr = together / 3;
	return 'The average is ' + avr;
}

var res = countAvr(3, 2, 10); // 'The average is 5'
console.log(res);