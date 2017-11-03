// Built-in NodeList interface
/*
interface NodeList {
	length: number;
	item(index: number): Node;
	[index: number]: Node;
}
*/

// An additional interface block extends the built-in NodeList interface 
// to add an onclick property that is not available natively.
// The implementation isn’t included in this example - it may be a new web standard 
// or a JavaScript library that adds the additional functionality. 
// As far as the compiler is concerned, the interface that is defined in the standard library 
// and the interface that is defined in our TypeScript file are one interface

// Extending the NodeList interface example
interface NodeList {
	// Function arrow shortcut (event case)
	onclick: (event: MouseEvent) => any;
}

var nodeList = document.getElementsByTagName('div');

nodeList.onclick = function (event: MouseEvent) {
	alert('Clicked');
};