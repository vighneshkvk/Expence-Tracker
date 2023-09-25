function saveToLocalStorage(event){
    event.preventDefault();
    const price=event.target.name.value;

    const description=event.target.description.value;
    const category=event.target.category.value;

    const obj={
        price,
        description,
        category
    }

    localStorage.setItem(obj.description,JSON.stringify(obj));
    showUserOnScreen(obj);
}



function showUserOnScreen(obj){
    const parentElemen=document.getElementById('listofitems');
    const children=document.createElement('li');

    children.textContent=obj.price+'- '+obj.description+'- '+obj.category;

    const deletebtn=document.createElement('input');
    deletebtn.type='button'
    deletebtn.value='Deleteexpense'

    deletebtn.onclick=()=>{
        localStorage.removeItem(obj.description);
        parentElemen.removeChild(children)
    }

    // children.appendChild(deletebtn)
    const editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='Editexpense'
    
    editbtn.onclick=()=>{
        localStorage.removeItem(obj.description)
        parentElemen.removeChild(children)
        document.getElementById('price').value=obj.price
        document.getElementById('description').value=obj.description
        document.getElementById('category').value=obj.category
    }
    children.appendChild(deletebtn)
    children.appendChild(editbtn)
    parentElemen.appendChild(children)
}