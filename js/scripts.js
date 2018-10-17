// Домашка за 10.07.2018
// Создайте простой TODO лист, основываясь на приведенном примере на скриншоте.

var btnNewIn = document.querySelector(".btnNewItem");
var list = document.querySelector("ul");
var lastLi = document.querySelector(".inputGroup");

function createBntNewInput() {
  btnNewIn.style.display = "none";
  var newInput = document.createElement("input");
  newInput.setAttribute("class", "inputAdd");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "Add....");
  lastLi.appendChild(newInput);
  var newbtnAddFromInput = document.createElement("button");
  newbtnAddFromInput.setAttribute("class", "btnAddFromInput");
  newbtnAddFromInput.textContent = "ADD";
  lastLi.appendChild(newbtnAddFromInput);

  var input = document.querySelector("input");
  var btnAdd = document.querySelector(".btnAddFromInput");

  btnAdd.onclick = function () {
    createNote();
  }

  input.onkeypress = function (e) {
    if (e.keyCode == 13) {
      createNote();
    }
  }
}

function createNote() {
  var input = document.querySelector("input");
  if (input.value) {
    var text = input.value;
    var newLi = document.createElement("li");
    newLi.setAttribute("class", "newLi");
    var newP = document.createElement("p");
    newP.setAttribute("class", "newP");
    newP.textContent = text;
    var span = document.createElement("span");
    span.setAttribute("class", "removeLi");

    span.onclick = function () {
      list.removeChild(newLi);
    }

    newP.appendChild(span);
    newLi.appendChild(newP);
    list.insertBefore(newLi, lastLi);
    input.value = "";
  }
}

btnNewIn.onclick = createBntNewInput;