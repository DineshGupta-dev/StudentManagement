
function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter all details");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = name + " - " + roll;

    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}
    
let students = [];

function registerStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Enter all details");
        return;
    }

    students.push({name: name, roll: roll});
    alert("Student Registered");
}

