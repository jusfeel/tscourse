
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}



for (var i = 0; i < 10; i++) {
    // capture the current state of 'i'
    // by invoking a function with its current value
    // (function(i) {
    //     setTimeout(function() { console.log(i); }, 100 * i);
    // })(i);
}

for (let i = 0; i < 10 ; i++) {
    // setTimeout(function() { console.log(i); }, 100 * i);
}

for (let i = 0; i < 10 ; i++) {
    //setTimeout(() => console.log(i), 100 * i);
}





