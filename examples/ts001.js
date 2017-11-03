// Not using with
var r = 6;
var a = Math.PI * r * r;
// Using with
var r = 6;
with (Math) {
    var a = PI * r * r;
}
r = 'some string';
// Static type checking will shout: "Cannot convert 'string' to 'number'".
console.log(r);
