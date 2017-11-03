// Prepare two interfaces: House and Mansion.
// The second should have one more property than the first one.
// Declare new variable with type from House interface
// - but provide also that additional parameter(property) from the Mansion interface
// - fix it with type assertion
// Finally try to force the type assertion.

interface House {
	bedrooms: number;
	bathrooms: number;
}

interface Mansion {
	bedrooms: number;
	bathrooms: number;
	butlers: number;
}

// Error: not assignable to 'House', please fix
var avenueRoad: House = {
	bedrooms: 11,
	bathrooms: 10,
	butlers: 1
};

// Errors: Cannot convert House to Mansion, please fix
var mansion: Mansion = avenueRoad;

// Forced type assertions
var placeName: string = 'Avenue Road';

// Error: Cannot convert 'string' to 'number', please fix
var bedrooms: number = <number> placeName;
