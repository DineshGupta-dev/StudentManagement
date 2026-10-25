
let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter all details");
        return;
    }

    students.push({ name: name, roll: roll });

    let li = document.createElement("li");
    li.innerHTML = name + " - " + roll;
    document.getElementById("list").appendChild(li);

    alert("Student Registered");
}

function registerStudent() {
    addStudent();
}

function searchStudent() {
    let roll = document.getElementById("searchRoll").value;
    let student = students.find(s => s.roll === roll);

    if (student) {
        document.getElementById("result").innerHTML =
            "Name: " + student.name + ", Roll: " + student.roll;
    } else {
        document.getElementById("result").innerHTML =
            "Student not found";
    }
}
