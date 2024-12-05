const inputField = document.querySelector('#inputField');
// Lag en variable som henter elemantet med ID addButton
// Lag en variable som henter elemantet med ID todoLIst

const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');

console.log(inputField, addButton, todoList);

addButton.addEventListener('click', function () {
  console.log('Legg til knappen er trykket!');

  const inputFieldValue = inputField.value;
  console.log(inputFieldValue);

  const todoItem = document.createElement('li');
  todoItem.textContent = inputFieldValue;
  todoList.appendChild(todoItem);

  inputField.Value = '';
});
