class Student {
  constructor(fullName, direction) {
    this.fullName = fullName;
    this._direction = direction;
  }

  showFullName() {
    return this.fullName;
  }

  nameIncludes(data) {
    return this.showFullName().includes(data);
  }

  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc');
  }

  get direction() {
    return this._direction;
  }

  set direction(newDirection) {
    this._direction = newDirection;
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

console.log(stud1.nameIncludes('Ivan'));   // true
console.log(stud1.nameIncludes('Denysenko')); // false
console.log(stud2.showFullName()); // Sergiy Koval
console.log(stud3.direction); // qc
stud3.direction = 'software testing';
console.log(stud3.direction); // software testing
