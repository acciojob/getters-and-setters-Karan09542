//complete this code
class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(age){
		this._age = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
		this.student = name;
	}
	study(){
		return `${this.student} is studying`
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name,age)
		this.teacher = name;
	}
	teach(){
		return `${this.name} is teaching`
	}
}

const student = new Student("John", 30)
const teacher = new Teacher("John", 30)

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
