interface Musician {
  singles: number;
  albums: number;
}

interface Rapper {
  singles: number;
  albums: number;
  styles: number;
}

var eminem: Musician = {
  singles: 120,
  albums: 80,
  styles: 4
}

// Errors: Cannot convert Musician to Rapper
var rapper: Rapper = eminem;

// Works
var rapper: Rapper = <Rapper>eminem;


// Forced type assertions
var rapperName: string = 'Rapper Eminem';

// Error: Cannot convert 'string' to 'number'
var singles: number = <number> rapperName;

// Works
var singles: number = <number> <any> rapperName;