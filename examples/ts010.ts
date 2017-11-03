
// concat string with a separator and allow set begin and ending point
function conc(i: string[], sep = ',', b = 0, e = i.length) {
	var resu = '';
	
	for (var k = b; k < e; k++) {
		resu += i[k];
		if (k < (e - 1)) {
			resu += sep;
		}
	}
	return resu;
}

var items = ['D', 'E', 'F'];

// 'D,E,F'
var res = conc(items); console.log(res);

// 'E-F'
var partRes = conc(items, '-', 1); console.log(partRes);

