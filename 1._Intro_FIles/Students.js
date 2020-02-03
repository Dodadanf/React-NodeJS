class Student {
    //fields
    classes = [];

    //constructers
    constructor(name) {
        this.name = name;
        //this.classes = [];
    }
    //methods
    addClass(studentClass) {
        this.classes.push(studentClass);
    }
}

module.exports = Student;

/*
const student = new Student("Emer");
student.addClass("ReactNode");
student.addClass("Django");
console.log(student.name, student.classes[0], student.classes[1]);
*/
