const inputField = document.querySelector('#inputField');
// Lag en variable som henter elemantet med ID addButton
// Lag en variable som henter elemantet med ID todoLIst

const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');

console.log(inputField, addButton, todoList);

/**
 
create li when button is pressed
put the input value text into the li
add the li to ul
create a remove button
create a done/finish button

click function for done button
- add a class or remove a class of the class done
click function for remove button
- class of done has to be on


 */


addButton.addEventListener('click', function () {
  console.log('Legg til knappen er trykket!');
  //get the value from inputfield
  const inputFieldValue = inputField.value;
  //todoItem creates an li element
  const todoItem = document.createElement('li');
  //put the text on the li element
  todoItem.textContent = inputFieldValue;
  //put the li in the ul "todoList"
  todoList.appendChild(todoItem);


  
  console.log(inputFieldValue);
  //empty the inputfield after button is pressed
  inputField.Value = '';
// craete a button for deleting the li
  const deleteItem = document.createElement("button");

  // put the text of "Slett" into the deletItem button
  deleteItem.textContent = "Slett";

  // put the deleteItem button inside of the todoItem li
  todoItem.appendChild(deleteItem);

// here we craete a done button
  const FinishItem = document.createElement("button");

  FinishItem.textContent= "done";
  // here we put the elemnets inside the list
  todoItem.appendChild(FinishItem);

  FinishItem.addEventListener("click", function() {
  console.log("done button is clicked")
  
  if(todoItem.classList.contains("done")) {
    todoItem.classList.remove("done");
  } else {
    todoItem.classList.add("done");
  };


  });

  deleteItem.addEventListener("click", function() {
    console.log("delete button is pressed")
   
    //check if class of done is on, if not we can not delete task

  if(todoItem.classList.contains("done")) {
    todoItem.remove()
  } else{
    alert("you have not done")
  }


  }) 


});



