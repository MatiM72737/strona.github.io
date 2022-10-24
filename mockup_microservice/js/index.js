const aside = document.querySelector("aside");
const menuAside = () => {
  aside.classList.toggle("asideNotVisible");
};

const nameField = document.querySelector("#nameField");
const sureNameField = document.querySelector("#sureNameField");
const ageField = document.querySelector("#ageField");
const table = document.querySelector("tbody");

let tasks = [];
const addTask = () => {
  if (
    nameField.value !== "" &&
    sureNameField.value !== "" &&
    ageField.value !== ""
  )
    tasks.push({
      id: tasks.length,
      name: nameField.value,
      surename: sureNameField.value,
      age: ageField.value,
    });
  refreshTable();
};

const refreshTable = () => {
  table.innerHTML = "";
  tasks.forEach((task) => {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdSureName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdBtn = document.createElement("button");
    tdName.innerHTML = task.name;
    tdSureName.innerHTML = task.surename;
    tdAge.innerHTML = task.age;
    tdBtn.innerHTML = "Remove";

    tdBtn.addEventListener("click", () => {
      tasks.forEach((_task) => {
        if (parseInt(tasks.indexOf(_task)) === parseInt(tasks.indexOf(task))) {
          tasks = tasks.filter((filteredTask) => filteredTask !== _task);
        }
      });
      refreshTable();
    });

    tr.appendChild(tdName);
    tr.appendChild(tdSureName);
    tr.appendChild(tdAge);
    tr.appendChild(tdBtn);

    table.appendChild(tr);
  });
};
