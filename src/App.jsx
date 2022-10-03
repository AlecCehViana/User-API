
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import UserItem from './Components/userItem'

function App() {

 const [user, setUser] = useState([])
 const [userSelected, setUserSelected] = useState(null)

 useEffect(() =>{
  axios.get(`https://users-crud1.herokuapp.com/users/`)
        .then(res => setUser(res.data))
        
 },[])

 const getUsers = () => {
  axios.get(`https://users-crud1.herokuapp.com/users/`)
        .then(res => setUser(res.data))
       
 }
 console.log(user);

  const  addUser = (newUser) => {

  axios.post(`https://users-crud1.herokuapp.com/users/`, newUser)
       .then(() => getUsers())
       .catch(error => console.log(error.response));
 }

 const deleteUser = (id) => {
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers())
 }
 const selectUser = (user) => {
       setUserSelected(user)
 }

const deselectUser = () => setUserSelected(null)

 const updateUser = (newUser) =>{
 axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/` , newUser)
      .then(() => getUsers())
      .catch(error => console.log(error.response))
 }

 console.log(userSelected);

  return (
    <div className="App">
      
      <h1>Find User</h1>
      <Form  
      addUser={addUser}
      userSelected={userSelected}
      updateUser={updateUser}
      deselectUser={deselectUser}/>
      
      <UserItem 
      users={user}
      deleteUser={deleteUser}
      selectUser={selectUser}
      />
    
    </div>
  )
}

export default App
