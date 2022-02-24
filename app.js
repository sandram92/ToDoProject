//Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const trashButton=document.querySelector('.trashBtn');
const filterTodo=document.querySelector('.filter-todo');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterTodo.addEventListener('click', todoFilter);
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
    const item=e.target 
    if(item.classList[0]==='trashBtn'){
        const todo=item.parentElement
        //Animation
        todo.classList.add('fall')
        //deleting element 
        todo.addEventListener('transitionend', () => {
            todo.remove()
          })
        
    }
    if(item.classList[0]==='completedBtn'){
        const todo=item.parentElement
        todo.classList.toggle('completed');
    }

}
    function todoFilter(e) {
        const todos=todoList.childNodes
        todos.forEach(function(todo){
            if(e.target.value==="all"){
                todo.style.display="flex"
            }else if(todo.classList.contains('completed')){
                todo.style.display= "flex"
            }else if(!todo.classList.contains('completed')){
                todo.style.display="none"
            }
        })
    }
























// function todoFilter(e){
//     const todos = todoList.childNodes
//     todos.forEach(function(todo){
//        switch( e.target.value){
//            case "all":
//                todo.style.display= "flex";
//                break;
//                case "completed":
//                    if(todo.classList.contains("completed")){
//                        todo.style.display= "flex";
//                    }else{
//                        todo.style.display="none";
//                    }case "uncompleted":
//                    if(!todo.classList.contains("completed")){
//                     todo.style.display= "flex";
//                 }else{
//                     todo.style.display="none"; }
                   
//        }
//     })
    
    
// }