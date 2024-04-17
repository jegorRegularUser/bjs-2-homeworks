function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) {
  this.marks?.push(...marks)
}

Student.prototype.getAverage = function () {
  return this.marks?.length?this.marks?.reduce((el,acc)=>acc+el,0)/this.marks?.length:0
}

Student.prototype.exclude = function (reason) {
    delete this.marks
    delete this.subject
    this.excluded = reason
  
}
