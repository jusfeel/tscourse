interface House {
	bedrooms: number;
	bathrooms: number;
}

interface Mansion {
	bedrooms: number;
	bathrooms: number;
	butlers: number;
}

var avenueRoad: House = {
	bedrooms: 11,
	bathrooms: 10,
	butlers: 1
};

// Errors: Cannot convert House to Mansion
var mansion: Mansion = avenueRoad;

// Works
var mansion: Mansion = <Mansion>avenueRoad;

// Forced type assertions
var placeName: string = 'Avenue Road';

// Error: Cannot convert 'string' to 'number'
var bedrooms: number = <number> placeName;

// Works
var bedrooms: number = <number> <any> placeName;