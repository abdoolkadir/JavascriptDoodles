class Person {
    constructor(firstName, lastName, dob, gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
        this.gender = gender;
        this.interests = interests;
    }

    bio() {
        return `${this.firstName} ${this.lastName} is ${this.calculateAge()} years old. They like ${this.interests}`
    }

    greeting() {
        return `Hi! I'm ${this.firstName} ${this.lastName}`
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

// Instantiate new Person Object
const person1 = new Person('Bob', 'Smith', '05-23-2020', 'Male', 'Music and skiing')

console.log(person1.bio())

// Class Extension (Inheritance)
class Teacher extends Person{
    constructor(firstName, lastName, dob, gender, interests, subject) {
        super(firstName, lastName, dob, gender, interests);

        this.subject = subject;

    }

    static salary() {
        return 50000;
    }
}

// Instantiate new Teacher object
const teacher1 = new Teacher('John', 'Doe', '12-25-1999', 'Male', 'Teaching and coding', 'Computer science');

console.log(teacher1.bio())
console.log(teacher1.bio()+ 'and their salary is ' + Teacher.salary())