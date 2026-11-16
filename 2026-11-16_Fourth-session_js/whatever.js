console.log("Hello, frogs...!");

let x = 10;
let y = "Louis";
let z = true;

let students = ["Student1", "Student2", "Student3", "Student4", "Student5", "Student6", "Student7", "Student8", "Student9", "Student10"];

let grades = [7, 12, 18, 13, 2, 20, 17, 9, 10, 20];

students.push("John")

console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(typeof students)
console.log(students[-1])

for (let i = 0; i < 10; i = i + 1) {
    console.log("Hi")
}

for (let i = 0; i < students.length; i++) {
    console.log(students[i])
}

let gradesAverage = 0;
for (let i = 0; i < grades.length; i++) {
    gradesAverage += grades[i];
}

average = gradesAverage / grades.length;
console.log(average)

//or
let m = 32 < 20 || 10 < 20;

//compare
let comp = y === "Louis";
console.log(comp);

if (y === "Louis") {
    console.log("Yes, it's Louis")
} else {
    console.log("No, it's not Louis")
}

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 12) {
        console.log(students[i] + " has passed the exam with a grade of " + grades[i] + " and therefore made the frogs happy")
    } else {
        console.log(students[i] + " has failed the exam because he/she has a grade of " + grades[i] + " and therefore made the frogs sad")
    }
}

function calculateArea(w, h) {
    let area = w * h;
    return area;
}

let a = calculateArea(10, 20);
console.log(a);

function calulateAverage(g) {
    let gradesAverage = 0;

        for (let i = 0; i < g.length; i++) {
            gradesAverage += g[i];
        }

        let avg = gradesAverage / g.length;
        
        return avg
}


let myAverage = calulateAverage(grades);



function isInsideBoundinBox(px,py, a,b,c,d) {
    if (px > a && px < a + c && py > b && py < b + d) {
        return true;
    } else {
        return false;
    }
}

console.log(isInsideBoundinBox(10, 10, 0, 0, 20, 20))

const name = "Louis";

let student = {
    age: 22,
    nationality: "Pakistan",
    name: "Assad Ullah"
};

console.log(student.name);