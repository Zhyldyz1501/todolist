const addTodoBtn = document.querySelector('#add-new-todo');
const newTodoInput = document.querySelector('#new-todo-input');
const ulTodoList = document.querySelector('#todo-list');

addTodoBtn.addEventListener('click', function () {
    console.log(newTodoInput.value);
    const inputValue = newTodoInput.value
    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'single-todo');
    // console.log(listItem, '<<<<');
    // listItem.classList = 'single-todo'
    // console.log(listItem, '<<<')
    // listItem.classList.add('single-todo')
    //     console.log(listItem, "<<<<");
    const checkBox = document.createElement('input')
    checkBox.setAttribute('class', 'single-todo-check')
    // checkBox.type = 'checkbox'
    checkBox.setAttribute('type', 'checkbox')
    // console.log(checkBox, '<<<')

    //paragraph
    const todoText = document.createElement('p')
    todoText.innerText = inputValue
    todoText.setAttribute("class", "single-todo-text");
    
    //delete btn
    const deleteBtn = document.createElement('buttton')
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.innerText = 'delete'
    deleteBtn.addEventListener('click', function () {
        console.log('clicked the delete btn')
        let parentElement = deleteBtn.parentNode; //from button I am going to LI //parentElement === li
        const ul = parentElement.parentNode //from LI to UL
        ul.removeChild(parentElement);
    })

    listItem.appendChild(checkBox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    ulTodoList.appendChild(listItem)
})