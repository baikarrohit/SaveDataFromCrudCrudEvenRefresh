
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.emailid.value;

    const userData = {
        name,
        email
    }

}
//*********get the data from crudcrud *******//

window.addEventListener("DOMContentLoaded", ()=> {
    axios.get("https://crudcrud.com/api/a42caac8ae7743bdbcecdb336dd450a6/appointmentdata")
        .then((response) => {
            console.log(response)
            for(var i=0; i<response.data.length; i++){
                showUserOnScreen(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error);
        })
    
})

function showUserOnScreen(userData){
    const ul = document.getElementById('items');
    const li = document.createElement('li');

    li.textContent = userData.name + '-' + userData.email;
    
    const Delete = document.createElement('input');
    Delete.type = 'button';
    Delete.value = 'Delete';
    
    Delete.onclick = ()=>{
        localStorage.removeItem(userData.email);
        ul.removeChild(li);    
    }
    const Edit = document.createElement('input');
    Edit.type = 'button';
    Edit.value = 'Edit';
    
    Edit.onclick = (event)=>{
        var lst = event.target.parentElement;
        let arr = lst.childNodes[0].textContent.split('-');
        
        ul.removeChild(li);   
        document.getElementById('name').value=arr[0];
        document.getElementById('email').value=arr[1]; 
        localStorage.removeItem(userData.email);
    }

    li.appendChild(Delete);
    li.appendChild(Edit);
    ul.appendChild(li);
    
}



    
    
    
