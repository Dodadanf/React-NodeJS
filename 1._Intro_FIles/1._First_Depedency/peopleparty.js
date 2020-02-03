const faker = require("faker");
const Student = require("../Students.js");

//console.log("Meesege: ", Student);

const students = [];

for (let i = 0; i < 10; i++) {
    const student = new Student(faker.name.findName());
    students.push(student);
};

console.log(students);