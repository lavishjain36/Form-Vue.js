let url="https://6375bd447e93bcb006b86a05.mockapi.io/users";


//write a logic to get the data 
async function getUsers(){
    let users;
    try {
        //Fetch the data 
        const data=await fetch(url,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        users=await data.json();
        // console.log(users)
    } catch (error) {
        console.log(error)
    }

    return users
}

// getUsers()


//Write a function to display the data in DOM 
async function displayUsers(){
    let users=await getUsers();
    // console.log(users)
    //select the target element user-list
    const userList=document.querySelector(".user-list")
    userList.innerHTML="";

    users.forEach((user)=>{
        // console.log(user.name)
        // console.log(user.avatar)
        userList.innerHTML+=`
        <div class="user-container">
        <img class="user-avatar" src="${user.avatar}" alt="${user.name}">
        <h4>${user.name}</h4>
        <button class="btn btn-primary" onClick="deleteUser(${user.id})">Delete</button>
        <button class="btn btn-primary" onClick="editUser(${user.id})">Edit</button>
        </div>
        `
    })

}

displayUsers()


async function addUser(){
    //target element 
    const userName=document.querySelector(".add-user-name").value;
    const userAvatar=document.querySelector(".add-user-avatar").value;

    // console.log(userName,userAvatar)

    const data=await fetch(url,{
        method:"POST",
        body:JSON.stringify({
            name:userName,
            avatar:userAvatar
        }),
        headers:{
            "Content-Type": "application/json",
        }
    })

    displayUsers()
     userName=document.querySelector(".add-user-name").value="";
     userAvatar=document.querySelector(".add-user-avatar").value="";

}


//Write a Logic to delete user data when clicked on Delete button
async function deleteUser(id){
    try {
        const data=await fetch(`${url}/${id}`,{
            method:"Delete",
            headers:{
                "Content-Type": "application/json",
            }
        })
        const users=await data.json();
        console.log(users);
        displayUsers()
    } catch (error) {
       console.log(error) 
    }
}


async function editUser(id){
    try {
        
    } catch (error) {
        
    }
}