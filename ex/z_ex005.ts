enum VehicleType {
	PedalCycle,
	MotorCycle,
	Car,
	Van,
	Bus,
	Lorry
}

var type = VehicleType.Lorry;

var typeName = VehicleType[type]; // 'Lorry'

// Enumeration splitted across multiple blocks
enum BoxSize {
	Small,
	Medium
}

//...

enum BoxSize {
	Large = 2,
	XLarge,
	XXLarge
}
