//Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const trashButton=document.querySelector('.trashBtn');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//Functions
function addTodo (e){
    //Prevent form from submitting
    e.preventDefault()
    //Creating todoDiv
    const todoDiv = document.createElement('div');
    todoDiv.setAttribute('class','todo');
    todoList.append(todoDiv);
    //Creating newTodo li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark buttons
    const completedButton= document.createElement('button');
    completedButton.innerHTML= `<img class="btn-img" src="  https://pic.onlinewebfonts.com/svg/img_447789.png "  alt=""> `
    completedButton.classList.add('completedBtn');
    todoDiv.appendChild(completedButton);
    //Trash mark buttons
    const trashButton= document.createElement('button');
    trashButton.innerHTML= `<img class="btnTrash-img" src=" https://pic.onlinewebfonts.com/svg/img_411751.png"  alt=""> `
    trashButton.classList.add('trashBtn');
    todoDiv.appendChild(trashButton);
    //Clear todo input
     todoInput.value=""
}
 function deleteCheck(e){
    const item= e.target
    //delete todo
    if(item.classList[0] === 'trashBtn'){
        const todo=item.parentElement;
        todo.classList.add('animation')
        
        // todo.remove();
    }
    //mark to do as completed
    if(item.classList[0]=== 'completedBtn'){
        const todo= item.parentElement;
        todo.classList.add('completed')
    }
}
