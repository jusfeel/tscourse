function countAvr(x: string, y: string, z: string): string;
function countAvr(x: number, y: number, z: number): string;
// implementation signature
function countAvr(x: any, y: any, z: any): string {
	var t = parseInt(x, 10) + parseInt(y, 10) + parseInt(z, 10);
	var av = t / 3;
	return 'The average is ' + av;
}

var res = countAvr(2, 4, 9); // 5
console.log(res);