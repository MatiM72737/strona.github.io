var aside = document.querySelector("aside");
function menuAside() {
  aside.classList.toggle("asideNotVisible");
}
var textInput = document.querySelector(".item");
var table = document.querySelector("table");

textInput.addEventListener("input", updateTable);

var firstTr = document.createElement("tr");
var fTd1 = document.createElement("td");
var fTd2 = document.createElement("td");
var fTd3 = document.createElement("td");
var fTd4 = document.createElement("td");
fTd1.innerHTML = "Name";
fTd2.innerHTML = "SureName";
fTd3.innerHTML = "Age";
fTd4.innerHTML = "Country";
firstTr.appendChild(fTd1);
firstTr.appendChild(fTd2);
firstTr.appendChild(fTd3);
firstTr.appendChild(fTd4);

function updateTable(event) {
  var text = event.target.value;
  var tab = text.split(";");
  table.textContent = "";
  table.appendChild(firstTr);
  tab.forEach((rowtext) => {
    var tr = document.createElement("tr");
    var tdName = document.createElement("td");
    var tdSureName = document.createElement("td");
    var tdAge = document.createElement("td");
    var tdCountry = document.createElement("td");
    tdName.innerHTML = rowtext.split(",")[0];
    tdSureName.innerHTML = rowtext.split(",")[1];
    tdAge.innerHTML = rowtext.split(",")[2];
    tdCountry.innerHTML = rowtext.split(",")[3];
    tr.appendChild(tdName);
    tr.appendChild(tdSureName);
    tr.appendChild(tdAge);
    tr.appendChild(tdCountry);
    table.appendChild(tr);
  });
}
