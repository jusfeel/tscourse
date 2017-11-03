
console.log('! false  = ', !false );

const a = "aa";
console.log('!!a      = ', !!a);

const b = true;
const c = false;
console.log('b && c   = ', b && c );
console.log('b || c   = ', b ||c  );

const e: {a: number, b: any} = {a: 8, b: null};
const f: {a: number, b: string} = {a: 3, b: "a"};

console.log('f || e   = ', f || e );

// short-cut evaluation
// function increment(x: number) : number  {
// 	console.log("increment");
// 	return ++x;
// }
const increment: (x: number) => number = (x) => ++x;

if( true && increment(1) === 2  ) {
	console.log("it is true");
}


