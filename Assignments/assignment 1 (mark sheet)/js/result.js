var Course = (function () {
    function Course(n, c, m, mO) {
        this.name = n;
        this.creditHours = c;
        this.marks = m;
        this.marksObtain = mO;
    }
    Course.prototype.getGradePoint = function () {
        var x = this.marksObtain / this.marks;
        if (x >= 0.88 && x <= 1) {
            this.grade = 4;
        }
        else if (x >= 0.81 && x <= 0.87) {
            this.grade = 3.5;
        }
        else if (x >= 0.74 && x <= 0.80) {
            this.grade = 3;
        }
        else if (x >= 0.67 && x <= 0.73) {
            this.grade = 2.5;
        }
        else if (x >= 0.6 && x <= 0.66) {
            this.grade = 2;
        }
        else {
            this.grade = 1.5;
        }
        return (this.creditHours * this.grade);
    };
    return Course;
})();
function addMarks(n, c, m, mO) {
    var objCourse = new Course(n, c, m, mO);
    courses.push(objCourse);
}
function calGpa() {
    var noCourses = courses.length;
    var gradePoints = 0;
    var creditHours = 0;
    for (var i = 0; i < noCourses; i++) {
        creditHours += courses[i].creditHours;
        gradePoints += courses[i].getGradePoint();
    }
    return (gradePoints / creditHours);
}
var courses = [];
var gpa;
var output = '';
function getMarks() {
    var name = document.getElementById('name').value;
    var credit = Number(document.getElementById('credit').value);
    var marks = Number(document.getElementById('marks').value);
    var marksObtained = Number(document.getElementById('marksObtained').value);
    addMarks(name, credit, marks, marksObtained);
    if (name == null || credit == 0 || marks == 0 || marksObtained == 0) {
        alert('Fill all fields');
        return;
    }
    var table = document.getElementById('row').parentElement;
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var attributes = [name, credit, marks, marksObtained];
    for (var i = 0; i < 4; i++) {
        var myNewElement = document.createElement('td');
        myNewElement.innerHTML = attributes[i].toString();
        tr.appendChild(myNewElement);
    }
    document.getElementById('name').value = "";
    document.getElementById('credit').value = "";
    document.getElementById('marks').value = "";
    document.getElementById('marksObtained').value = "";
}
var addButton = document.getElementById('add');
addButton.onclick = function () {
    getMarks();
};
var displayButton = document.getElementById('display');
displayButton.onclick = function () {
    if (courses.length == 0) {
        alert('Add course first');
        return;
    }
    gpa = calGpa();
    var table = document.getElementById('row').parentElement;
    var tr = document.createElement('tr');
    table.appendChild(tr);
    var myNewElement = document.createElement('td');
    myNewElement.innerHTML = "Your gpa is : " + gpa.toString();
    tr.appendChild(myNewElement);
};
//# sourceMappingURL=../ts/map/result.js.map