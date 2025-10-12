//complete this code
class Person {
	#_name;
	#_age;
	constructor(name, age){
		this.#_name = name;
		this.#_age = age;
	}
	get name(){
		return this.#_name;
	}
	set age(age){
		this.#_age = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
		this.student = name;
	}
	study(){
		const role = `${this.student} is studying`
		console.log(role)
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name,age)
		this.teacher = name;
	}
	teach(){
		const role = `${this.name} is teaching`
		console.log(role)
	}
}

const student = new Student("John", 30);
const teacher = new Teacher("John", 30);


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
