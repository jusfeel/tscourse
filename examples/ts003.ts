// primitive type annotation
var secondName: string = 'Robert';
var footLength: number = 26.50;
var isMarried:  boolean = true;

// array type annotation
var languages:  string[] = ['JavaScript', 'TypeScript', 'jQuery'];

// function annotation with parameter type annotation and return type annotation
var shoutHi: (name: string) => string;

// implementation of 'shoutHi' function
shoutHi = function (name: string) {
  return 'Hi ' + name;
};

// object type annotation
var human: { secondName: string; footLength: number; };

// Implementation of a person object
human = {
  secondName: 'Mat',
  footLength: 28
};