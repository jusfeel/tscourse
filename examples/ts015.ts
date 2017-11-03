// Interfaces examples
interface CourseVenue {
	// Properties
	city: string;
	country: string;
}

interface CourseParticipant {
	// Properties
	name: string;
}

interface CourseEvent {
	// Constructor
	new() : CourseEvent;  //<------------ 'new' keyword
	
	// Properties
	currentLocation: CourseVenue;
	// Methods
	bookVenue(venue: CourseVenue);
	addDelegate(delegate: CourseParticipant);
	removeDelegate(delegate: CourseParticipant);
}





// indexers
class MyType {
    constructor(public someVal: string) {

    }
}

interface MyCollection {   
   [name: string]: MyType;
}

var collection: MyCollection = {};

collection['First'] = new MyType('Val');
collection['Second'] = new MyType('Another');

var a = collection['First'];

console.log(a.someVal);