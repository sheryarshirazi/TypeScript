/**
 * Situation:
 * More than 1 functions/data requires structure that requires some necessary and optional properties
 * structure (person)
 * 	name, age, gender, profession, email, salary etc.
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
/**
 * if the person's property required in the definePerson function, we have to explicitly have to initiat
 * these properties to fullfil "duck typing" or "structural subtyping" by type-checker.
 * or if we want to use these one more functions then we have to code again and again.
 */
function definePerson(person) {
    // this.age
    var pronoun = ["he", "she"];
    var prefix = ["Mr.", "Ms."];
    var introduction = prefix[person.gender] + " " + person.name + " is " + person.age + " years old and " + pronoun[person.gender] + " is " + person.profession;
    console.log(introduction);
}
// creating person object
var person1 = { name: "Sheryar Shirazi", age: 23, gender: Gender.male, profession: "Developer", email: "sheryarshirazi@gmail.com" };
var person2 = { name: "Ahmar Ansari", age: 26, gender: Gender.male, contact: "03548456987" };
var person3 = { name: "Naheed ur Rehman", age: 38, gender: Gender.female, profession: "Chef" };
definePerson(person1);
// person2 has not all necessary properties.
// definePerson(person2);
definePerson(person3);
function personIntro(person) {
    // this.age
    var pronoun = ["he", "she"];
    var prefix = ["Mr.", "Ms."];
    var introduction = prefix[person.gender] + " " + person.name + " is " + person.age + " years old and " + pronoun[person.gender] + " is " + person.profession;
    console.log(introduction);
}
personIntro(person1);
// personIntro(person2);
personIntro(person3);
var Employee = (function () {
    function Employee(i, n, a, g, p, s, gr) {
        this.id = i;
        this.name = n;
        this.age = a;
        this.gender = g;
        this.profession = p;
        this.salary = s;
        this.grad = gr;
    }
    Employee.prototype.hajjEligible = function (hajjDetail, branch) {
        return (this.age > 50 && (this.salary * 12) < hajjDetail.expenses && branch == 'main');
    };
    return Employee;
})();
var employee1 = new Employee(788, "Ahmad Lashari", 47, Gender.male, "Field Manager", 35000, "E");
var employee2 = new Employee(650, "Mehjabeen Noor", 55, Gender.female, "General Reporter", 25000, "G");
if (employee1.hajjEligible({ expenses: 450000, passport: true, visa: true, maritialStatus: true }, 'main')) {
    console.log("Congrats! " + employee1.name + " of id # " + employee1.id + " is eligible to get Hajj package this year.");
}
else {
    console.log("Sorry ! " + employee1.name + " of id # " + employee1.id + " is not eligible to get Hajj package this year.");
}
if (employee2.hajjEligible({ expenses: 450000, passport: true, visa: true, maritialStatus: true }, 'main')) {
    console.log("Congrats! " + employee2.name + " of id # " + employee2.id + " is eligible to get Hajj package this year.");
}
else {
    console.log("Sorry ! " + employee2.name + " of id # " + employee2.id + " is not eligible to get Hajj package this year.");
}
//# sourceMappingURL=../ts/map/interfaces.js.map