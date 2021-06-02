document.addEventListener("DOMContentLoaded", () => {
  // init and grab the form
  const taskForm = document.querySelector('#create-task-form')

  //addEventListener to the form and pass a function that handles the submit
  taskForm.addEventListener('submit', handleSubmit)

  //handleSubmit method that takes an event as an arg
  //When submit button is triggered it should target the user input  and display it on the DOM
  function handleSubmit(e){
    e.preventDefault(); //prevents auto refresh
    console.log(e.target['new-task-description'].value);


  //Grab the Ul for the list
  //create an li element to display task when triggered by user input
  //create a delete btn
  let toDoList = document.querySelector('#list')
  let list = document.createElement('li');
  list.textContent = e.target["new-task-description"].value
  
  //Display li to the DOM
  toDoList.appendChild(list);

  }



});
