enum FootSize {
  Small,
  Medium,
  Large,
  XL,
  XXL
}

var fsize = FootSize.Small;
++fsize;
console.log(FootSize[fsize]); // Medium

var fsize = FootSize.XL;
--fsize;
console.log(FootSize[fsize]); // Large

var fsize = FootSize.XXL;
++fsize;
console.log(FootSize[fsize]); // undefined