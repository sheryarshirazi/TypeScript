class Course{
	name:string;
	creditHours : number;
	marks: number;
	marksObtain:number;
	grade:number;
	
	constructor(n:string,c:number,m:number,mO:number){
		this.name=n;
		this.creditHours=c;
		this.marks=m;
		this.marksObtain=mO;
	}
	
	getGradePoint():number{
		let x = this.marksObtain/this.marks;
		
		if (x>=0.88 && x<=1) {
			this.grade = 4;
		} else if (x>=0.81 && x<=0.87) {
			this.grade = 3.5;
		} else if (x>=0.74 && x<=0.80) {
			this.grade = 3;
		} else if (x>=0.67 && x<=0.73) {
			this.grade = 2.5;
		} else if (x>=0.6 && x<=0.66) {
			this.grade = 2;
		} else {
			this.grade = 1.5;
		}
		
		return (this.creditHours*this.grade)
	}
}

function addMarks(n:string,c:number,m:number,mO:number) {
	var objCourse = new Course(n,c,m,mO);
	courses.push(objCourse);
}
function calGpa():number {
	let noCourses=courses.length;
	let gradePoints=0;
	let creditHours=0;
	
	for (let i = 0; i < noCourses; i++) {
		creditHours += courses[i].creditHours;
		gradePoints += courses[i].getGradePoint();
	}
	return (gradePoints/creditHours);
}

var courses:Array<Course>=[];
var gpa:number;
var output='';
function getMarks() {

	let name = (<HTMLInputElement>document.getElementById('name')).value;
	let credit:number= Number( (<HTMLInputElement> document.getElementById('credit') ).value);
	let marks:number= Number((<HTMLInputElement>document.getElementById('marks')).value);
	let marksObtained:number =Number( (<HTMLInputElement>document.getElementById('marksObtained')).value);

	addMarks(name,credit,marks,marksObtained);
	
	if (name==null || credit==0 || marks==0 || marksObtained==0) {
		alert('Fill all fields');
		return
	}
	
	
	let table = document.getElementById('row').parentElement;
	let tr = document.createElement('tr');
	table.appendChild(tr);
	
	let attributes = [name,credit,marks,marksObtained];
	
	for (let i = 0; i < 4; i++) {
		let myNewElement = document.createElement('td');
		myNewElement.innerHTML = attributes[i].toString();
		tr.appendChild(myNewElement);
	}
	
	(<HTMLInputElement>document.getElementById('name')).value="";
	(<HTMLInputElement> document.getElementById('credit') ).value="";
	(<HTMLInputElement>document.getElementById('marks')).value="";
	(<HTMLInputElement>document.getElementById('marksObtained')).value="";
}

var addButton = document.getElementById('add');
addButton.onclick = function () {
	getMarks(); 
}
var displayButton = document.getElementById('display');
displayButton.onclick = function () {
	
	if (courses.length==0) {
		alert('Add course first');
		return ;
	}
	
	gpa = calGpa();
	
	let table = document.getElementById('row').parentElement;
	let tr = document.createElement('tr');
	table.appendChild(tr);
	
	let myNewElement = document.createElement('td');
	myNewElement.innerHTML = "Your gpa is : "+ gpa.toString();
	tr.appendChild(myNewElement);
}