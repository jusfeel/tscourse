function subtrNrs(c, d) {
  // missing 'var' keyword
  subtr = c - d;
  return subtr;
}

// An implicit global variable 'subtr', 
// TypeScript will generate a "Could not find symbol" error
// To correct it: add the var keyword (makes variable locally 
// scoped to 'subtrNrs'), or explicitly declare a variable in the global scope