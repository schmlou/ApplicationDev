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

document.querySelector("#edu").style.color = "green";
console.log(edu);

document.querySelector("#cts").textContent = "This text was rewritten by a frog in the JS file";
document.querySelector("#cts").style.color = "purple";
document.querySelector("#cts").textContent = calulateAverage(grades);

let eyebrow = document.querySelector(".eyebrow");

cts.addEventListener("click", function() {
    console.log("CTS section was clicked");
})


const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");

darkMode.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

lightMode.addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
})

let isExpanded = false;

document.querySelector("#expand-button").addEventListener("click", function() {
    if (isExpanded) {
        document.querySelector("#second-p").style.display = "block";
        document.querySelector("#expand-button").textContent = "Close";
    } else {
        document.querySelector("#second-p").style.display = "none";
        document.querySelector("#expand-button").textContent = "Expand";
    }
    isExpanded = !isExpanded;
})

let randomNumber = Math.floor(Math.random() * 9);
console.log(randomNumber);

document.querySelector("#cell-" + randomNumber).classList.add("bomb");

document.querySelectorAll(".cell").forEach(function(cell) {
    cell.addEventListener("click", function(e) {
        for(let i=0; i < e.target.classList.length; i++) {
            if (e.target.classList[i] === "bomb") {
                console.log("You clicked on a bomb! Game over.");
                e.target.style.backgroundColor = "red";
            } else {
                e.target.style.backgroundColor = "green";
            }
        }
    })
})