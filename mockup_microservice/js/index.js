var aside = document.querySelector("aside");
function menuAside() {
  aside.classList.toggle("asideNotVisible");
}
var textInput = document.querySelector(".item");
var table = document.querySelector("table");

textInput.addEventListener("input", updateTable);

function updateTable(event) {
  var text = event.target.value;
  var tab = text.split(";");
  table.textContent = "";
  tab.forEach((rowtext) => {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    td.innerHTML = rowtext;
    tr.appendChild(td);
    table.appendChild(tr);
  });
}
