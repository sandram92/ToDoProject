//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const trashButton = document.querySelector('.trashBtn');
const filter = document.querySelector('.list');

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filter.addEventListener('change', todoFilter);


//Functions
function addTodo(e) {
    //Prevent form from submitting
    e.preventDefault()
    //Creating todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.setAttribute('class', 'todo uncompleted all');
    todoList.append(todoDiv);
    //Creating newTodo li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    // save in local Storage
    saveToLocalStorage(todoInput.value);
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<img class="btn-img" src="  https://pic.onlinewebfonts.com/svg/img_447789.png "  alt=""> `
    completedButton.classList.add('completedBtn');
    todoDiv.appendChild(completedButton);
    //Trash mark buttons
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<img class="btnTrash-img" src=" https://pic.onlinewebfonts.com/svg/img_411751.png"  alt=""> `
    trashButton.classList.add('trashBtn');
    todoDiv.appendChild(trashButton);
    //Clear todo input
    todoInput.value = ""

}
function deleteCheck(e) {
    const item = e.target
    if (item.classList[0] === 'trashBtn') {
        const todo = item.parentElement
        //Animation
        todo.classList.add('fall')
        //removing from local storage
        removeFromLocalStorage(todo)
        //deleting element 
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })

    }
    if (item.classList[0] === 'completedBtn') {
        const todo = item.parentElement
        if (todo.classList.contains('uncompleted')) {
            todo.classList.remove('uncompleted')
            todo.classList.add('completed')
        } else {
            todo.classList.add('uncompleted')
            todo.classList.remove('completed')

        }

    }
}

function todoFilter(e) {
    const filterValue = e.target.value
    const todos = todoList.children
    for (let i = 0; i < todos.length; i++) {
        if (!todos[i].classList.contains(filterValue)) {
            todos[i].style.display = 'none'
        } else {
            todos[i].style.display = "flex"
        }
    }
}

function saveToLocalStorage(todo) {
    let todos;
    if (!localStorage.getItem('todos')) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (!localStorage.getItem('todos')) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'todo uncompleted all');
        todoList.append(todoDiv);
        //Creating newTodo li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //Check mark buttons
        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<img class="btn-img" src="  https://pic.onlinewebfonts.com/svg/img_447789.png "  alt=""> `
        completedButton.classList.add('completedBtn');
        todoDiv.appendChild(completedButton);
        //Trash mark buttons
        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<img class="btnTrash-img" src=" https://pic.onlinewebfonts.com/svg/img_411751.png"  alt=""> `
        trashButton.classList.add('trashBtn');
        todoDiv.appendChild(trashButton);
        //Clear todo input

    });

}

function removeFromLocalStorage(todo) {
    let todos;
    if (!localStorage.getItem('todos')) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoValue = todo.children[0].innerText
    todos.splice(todos.indexOf(todoValue), 1)
    localStorage.setItem('todos', JSON.stringify(todos));

}


