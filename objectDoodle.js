// Create Object
function Person(firstName, lastName, dob, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.age = age;
    this.gender = gender;
    this.interests = interests;

    // Age function
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now(dob) - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return ageDate.getUTCFullYear() - 1970;
    // }
}

// Calculate Age prototype
// outside the object as a prototype
Person.prototype.calculateAge = calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
}

// Bio prototype
// Person.prototype.bio = function() {
//     return `${this.firstName} ${this.lastName} is ${this.calculateAge()} years old. They like ${this.interests}`
// }

// Greeting prototype
Person.prototype.greeting = function() {
    return `Hi! I'm ${this.firstName} ${this.lastName}`;
}

// Instantiate new Person Object 'abdul'
const abdul = new Person ('Abdulkadir', 'Adamu', '09-02-1996', 'Male', 'Coding');

// console.log(abdul.bio());
// console.log(abdul.greeting());

// Prototypal Inheritance
// First create new Classes to inherit from parent class

// Teacher class
function Teacher(firstName, lastName, dob, gender, interests, subject) {
    // use the 'call' key to inherit from Person class.
    Person.call(this, firstName, lastName, dob, gender, interests);

    this.subject = subject;
}

// To be able to use Person class Prototype methods
Teacher.prototype = Object.create(Person.prototype)

// Make customer.prototype return Customer
Teacher.prototype.constructor = Teacher;

const teach = new Teacher('Brad', 'Traversy', '12-25-1980', 'Male', 'Teaching and Coding', 'Computer science')

console.log(teach)
console.log(teach.greeting())


// Teacher class greeting Prototype
Teacher.prototype.bio = function() {
    return `${this.firstName} ${this.lastName} is ${this.calculateAge()} years old. They like ${this.interests} and they teach ${this.subject}`
}

console.log(teach.bio())