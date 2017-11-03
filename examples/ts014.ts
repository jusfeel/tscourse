// Arrow functions
var addNrs = (x: number, y: number) => x + y;

var addNrs = (x: number, y: number) => {
	return x + y;
}

var addNrs = function (x: number, y: number) {
	return x + y;
}

// Wrapping an object in parentheses
var createName = (f: string, l: string) => ({first: f, last: l});

// Preserving scope with arrow syntax
var ScopeLosingEx = {
	text: "Property from lexical scope",
	
	run: function () {
	// Here we have the usual JS way
		setTimeout( function() {
			console.log(this.text);
		}, 1000);
	}
};

// alerts undefined
ScopeLosingEx.run();

var ScopePreservingEx = {
	text: "Property from lexical scope",
	run: function () {
	// Here below goes the main change in code
		setTimeout( () => {
			console.log(this.text);
		}, 1000);
	}
};

// alerts "Property from lexical scope"
ScopePreservingEx.run();