// Constructors example
class Training {
	constructor(private category: string, private title: string, private noOfDays: number) {

	}

	buy() {
		console.log('Buying this ' + this.noOfDays + ' day(s) ' + this.title + ' course from category ' + this.category);
	}
}

// Properties and methods
class CartWithTrainings {
	private trainings: Training[] = [];

	static maxTraining: number = 10;

	constructor(public cartId: string) {
	}

	addTraining(training: Training) {
		if (this.trainings.length >= CartWithTrainings.maxTraining) {
			throw new Error('To many courses in your Cart.');
		}
		this.trainings.push(training);
	}
}

// Creating a new instance
var coursesCart = new CartWithTrainings('Cart1');

// Accessing a public instance property
var nameCart = coursesCart.cartId;

// Calling a public instance method
coursesCart.addTraining(new Training('GIT', 'Git for Users', 1));

// Accessing a public static property
var maxTrainings = CartWithTrainings.maxTraining;

let i = 0;
while( i < 8) {
	coursesCart.addTraining(new Training('GIT', 'Git for Users', 1));	
	i++;
}