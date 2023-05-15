import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import{FontAwesomeIcon} from "@fortawesome/free-solid-svg-icons";

const Home =()=> {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser= async()=>{
        const result=await axios.get("http://localhost:3001/users");
        setUsers(result.data)
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUser();  
    }

    return(
        <div className='container'>
            Home page
            <table class="table">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Emails</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user,index)=>(
        <tr>
            <th scope='row'>{index +1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Link className="btn btn-outline-primary p-2"to={`/user/${user.id}`}>View</Link>
                <Link className="btn btn-outline-primary p-2" to={`/edit/user/${user.id}`}>Edit</Link>
                <Link className="btn btn-danger-primary p-2" onClick={()=>deleteUser(user.id)}>Delete</Link>
                
            </td>
        </tr>
    ))}
  </tbody>
</table>
        </div>
    );
}
   

export default Home;