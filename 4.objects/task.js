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
    if (this.hasOwnProperty('marks')) {
        this.marks.push(...marks);
    };
};

Student.prototype.getAverage = function () {
    let result = 0;
    if (this.hasOwnProperty('marks') === false || this.marks.length === 0) {
        return result;
    } else {
        result = this.marks.reduce((acc, item, i, arr) => {
            acc+=item 
            if (i === arr.length - 1) {
                return acc / arr.length;
            }; 
            return acc;
        }, 0);
        return result;
    };
};

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
};

