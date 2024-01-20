

const inputText = document.getElementById("inputtext");
const toDoBox = document.getElementById("todobox");

inputText.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    addtodo(event.target.value);
    event.target.value = "";
  }
});

function addtodo(item) {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let date = currentDate.getDate();
  let time = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  const listitem = document.createElement("li");
  
  listitem.innerHTML = `${item} <p>${time}:${minutes} ${date}/${month+1}/${year}</p><i class=" edit fa-regular fa-pen-to-square"></i><i class=" icon fa-solid fa-xmark"></i>`;
  toDoBox.appendChild(listitem);
  saveTasks(listitem)
  listitem.querySelector(".edit").addEventListener("click", () => {
    listitem.contentEditable = true;
  });
  listitem.querySelector(".icon").addEventListener("click", function () {
    toDoBox.removeChild(listitem);
  });
}
function saveTasks(item) {
    var tasks = [];
    var items = document.querySelectorAll('li');
    items.forEach(function(item) {
        console.log(item);
        tasks.push(item.firstChild.nodeValue);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(addtodo);
    }}
