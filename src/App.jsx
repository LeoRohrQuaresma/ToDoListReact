import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";


function App() {

  const [usersList, setUsersList] = useState([])


  //? Declarou o Callback, só é ativado quando a função stringAddHandler é utilizada (ou seja, quando clicam no botão)
  const addUserHandler = (uName) => {
    setUsersList((prevUsersList) =>{
      return [...prevUsersList, {name:uName, id: Math.random().toString()}]
    })
  }

  const handleDelete = (id) => {
    const updatedUsers = usersList.filter((user) => user.id !== id);
    setUsersList(updatedUsers);
  };

  return (
    <div>
      <AddUser onAddUser= {addUserHandler} />
      <UserList users={usersList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
