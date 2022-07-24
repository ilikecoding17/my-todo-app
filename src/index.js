import "./styles.css"

const todoListForm = document.getElementById("todoForm")
const formInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")

todoListForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const todoText = formInput.value
    console.log(todoText)

    formInput.value = ""

    const todoItem = document.createElement("div")
    todoItem.className = "todoItem"

    const todoInput = document.createElement("input")
    todoInput.value = todoText
    todoInput.className = "todoInput"
    todoInput.setAttribute("readonly", "readonly")

    const toggleButton = document.createElement("button")
    toggleButton.textContent = "toggle"
    toggleButton.className = "toggleButton"
    
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.className = "editButton"
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "delete"
    deleteButton.className = "deleteButton"

    todoList.append(todoItem)
    todoItem.append(todoInput)
    todoItem.append(toggleButton)
    todoItem.append(editButton)
    todoItem.append(deleteButton)

    toggleButton.addEventListener("click",()=>{
        todoInput.classList.toggle("done")
    })

    editButton.addEventListener("click",()=>{
        if (editButton.textContent === "edit"){
            todoInput.removeAttribute("readonly")
            todoInput.focus()
            editButton.textContent = "save"
        } else{
            editButton.textContent = "edit"
            todoInput.setAttribute("readonly", "readonly")
        }
    })

    deleteButton.addEventListener("click", ()=>{
        todoItem.remove()
    })


})

