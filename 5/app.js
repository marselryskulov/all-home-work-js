let input = document.querySelector("#input");
 let button = document.querySelector("#button");

 function addHandler(){
    let tag = document.createElement("div");
    // createElement-создает новый html элемент
    tag.setAttribute("class", "block" );
    tag.innerText = input.Value;

    document.body.append(tag)
    // append -как пуш доб 
    
    // кнопка удаление
    let deletebutton = document.createElement("button");
    deletebutton.innerText = "delete";

    deletebutton.onclick = () => {
        tag.remove()
    }
    tag.append(deletebutton);
    // console.log(deletebutton);

    input.value="";

 }'pk'

 button.addEventListener('click', addHandler)
