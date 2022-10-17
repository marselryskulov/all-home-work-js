const list = [
    // {
    //     id: 1,
    //     text: "Learn JS"
    // },
    // {
    //     id: 2,
    //     text: "Кпить молоко"
    // }
]

const addButton = document.querySelector("#button")
const input = document.querySelector("#input")

function change(id) {
    const index = list.findIndex(t => t.id === id)
    const newTodo = prompt('to change text....')
    list[index].text = newTodo
    console.log(list[index]);
    render()
}
function deleteButton(id) {
    const index = list.findIndex(t => t.id === id)
    list[index].splice(index[i])
    render()
} 

function render() {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute("class", "list");

    for(let i = 0; i  < list.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("class", "todoBlock")

        const p = document.createElement('p')
        p.textContent = list[i].text
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute("class", "actions");

        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.innerText = "ИЗМЕНИТЬ"

        // changeButton.onclick = () => {
        //     let newTodo = prompt("change text")
        //     p.innerText = newTodo 
        //     event.preventDefault()
        changeButton.onclick = () => {
            change(list[i].id)
        }
        // }

        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = "УДАЛИТЬ"
        deleteButton.onclick = () => {
            div.remove(list[i].id)
        }


        buttons.append(changeButton, deleteButton);
        div.append(buttons)
        mainDiv.append(div)

        
 
    }

    const form = document.querySelector('.form');
    document.querySelector('.list').remove();
    
    form.append(mainDiv)
}

//render()
 

function handleClick() {
    event.preventDefault()
    const object = {
        id: list.length + 1,
        text: input.value     
    }
list.push(object);
console.log(list)
render()
}

addButton.addEventListener('click',handleClick)
