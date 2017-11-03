

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        //console.log(""" + s + "" " + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}

// Split previous code into a couple of files:
// - val.ts, lettersVal.ts, zipVal.ts, test.ts
// - provide necessary references in the 'test.ts'
// -- for example "/// <reference path="val.ts" />"
// - compile it as one output file (using --outFile)

// We will need to compile all TS files
// tsc --outFile test.js test.ts val.ts lettersVal.ts zipVal.ts 