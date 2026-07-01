// Student Result Calculator

let name = prompt("Enter your name");

let m1 = Number(prompt("Enter Math marks"));
let m2 = Number(prompt("Enter Science marks"));
let m3 = Number(prompt("Enter English marks"));
let m4 = Number(prompt("Enter Hindi marks"));
let m5 = Number(prompt("Enter Computer marks"));

let total = m1 + m2 + m3 + m4 + m5;
let average = total / 5;
let percentage = (total / 500) * 100;

let highest = Math.max(m1, m2, m3, m4, m5);
let lowest = Math.min(m1, m2, m3, m4, m5);

let grade;

if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else {
    grade = "Fail";
}

let day = prompt("Enter day name");

switch (day) {
    case "Monday":
        console.log("New week new goals");
        break;
    case "Tuesday":
        console.log("Keep studying");
        break;
    case "Wednesday":
        console.log("Half week done");
        break;
    default:
        console.log("Do your best");
}

let marks = [m1, m2, m3, m4, m5];

console.log("Marks are:");
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

console.log("Student Name :", name);
console.log("Total :", total);
console.log("Average :", average);
console.log("Percentage :", percentage);
console.log("Grade :", grade);
console.log("Highest Marks :", highest);
console.log("Lowest Marks :", lowest);