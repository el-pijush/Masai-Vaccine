// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".people");
const valuesContainer = document.querySelector(".values");

const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];
const designationInput=studentForm["designation"]
const priorityInput=studentForm["priority"]
const vaccineInput=studentForm["vaccine"]

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const people = JSON.parse(localStorage.getItem("people")) || [];

const addStudent = (name, age, roll,designation,priority,vaccine) => {
  people.push({
    name,
    age,
    roll,
    designation,
    priority,
    vaccine

  });

  localStorage.setItem("people", JSON.stringify(people));

  return { name, age, roll,designation,priority,vaccine };
};

const createStudentElement = ({ name, age, roll }) => {
    // Create elements
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h4");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");
  const vaccine=document.createElement("p")
  const designation=document.createElement("p")
  const priority=document.createElement("p")
    // Fill the content
    studentName.innerText = "Name name: " + name;
    studentAge.innerText = " Age" + age;
    studentRoll.innerText = "Uniqe ID: " + roll;

vaccine.innerText="Vaccine:"+vaccine
priority.innerText="priority:"+priority
designation.innerText="Designation"+designation
  
    // Add to the DOM
    studentDiv.append(studentName, studentAge, studentRoll,vaccine,priority,designation);
    valuesContainer.appendChild(studentDiv);
  valuesContainer.style.display = students.length === 0 ? "none" : "flex";
  };


studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value,
    designationInput.value,
    priorityInput.value,
    vaccineInput.value
  );
  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
  vaccineInput.value="";
  priorityInput.value="";
  designationInput.value="";

};