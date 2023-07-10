document.addEventListener("DOMContentLoaded", function() {
  var todoForm = document.getElementById("todo-form");
  var todoInput = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");

  todoForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    if (todoInput.value !== "") {
      var todoItem = document.createElement("li");
      var todoText = document.createElement("span");
      var deleteButton = document.createElement("button");

      todoText.textContent = todoInput.value;
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener("click", function() {
        todoList.removeChild(todoItem);
      });

      todoItem.appendChild(todoText);
      todoItem.appendChild(deleteButton);
      todoList.appendChild(todoItem);

      todoInput.value = "";
    }
    else{
        alert("Please Enter Task!")
    }
  });
});
