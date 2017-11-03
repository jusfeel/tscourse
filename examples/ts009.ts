function countAvr(x: number, y: number, z?: number): string {
	var tog = x;
	var counter = 1;
	
	tog += y;
	counter++;
	
	if (typeof z !== 'undefined') {
		tog += z;
		counter++;
	}
	
	var avr = tog / counter;
	return 'The average is ' + avr;
}

var res = countAvr(2, 8); // 'The average is 5'
console.log(res);

