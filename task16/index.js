function Student(name, surname, birthDate, assessments = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.assessments = assessments;
    this.attendance = [];
}

Student.prototype.getAge = function () {
    let totalYear = new Date().getFullYear();
    return totalYear - this.birthDate.getFullYear();
}

Student.prototype.getAverage = function () {
    let sum = this.assessments.reduce((acc, num) => acc + num, 0);
    return sum / this.assessments.length;
}

Student.prototype.present = function () {
    this.attendance.push(true);
    return this;
}

Student.prototype.absent = function () {
    this.attendance.push(false);
    return this;
}

Student.prototype.summary = function () {
  let averageGrade = this.getAverage();
  let averageAttendance = this.attendance.reduce((acc, num) => acc + num, 0)/this.assessments.length;
  if (averageGrade > 90 && averageAttendance > 0.9) {
      return 'Молодець!';
  }
  else if (averageGrade > 90 || averageAttendance > 0.9){
      return "Добре, але можна краще";
  }
  else {
     return `Ну ти редиска!`;
  }
}

const student1 = new Student('Serhii', 'Zhitnik', new Date(2004, 0 , 1), [100, 99, 80, 100]);
const student2 = new Student('Leonid', 'Zverev', new Date(2005, 0, 1), [0, 2]);
const student3 = new Student('Evgeniy', 'Zelinskiy', new Date(2004, 0, 1), [100, 52, 75, 36]);
console.log(student1.present().absent().present());;
console.log(student1.getAverage());;
console.log(student1.getAge());;
console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
