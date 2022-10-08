import Table from 'react-bootstrap/Table';
import UserDelTable from "./userDelTable";
import axios from "axios";
import { useEffect,useState } from "react";
import "./table.scss"
import {Link} from 'react-router-dom'
import Button from "../../components/Button"; 

function DeleteUser() {

    
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        loadUsers();
    },[])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:2097/api/v1/user");
        setUsers(result.data);
    }

    const deleteUser = async userId =>{
        await axios.delete("http://localhost:2097/api/v1/user/${userId}");
            loadUsers();
    };

    

    return (
        <div>
            <h1>User List</h1> 
            <br></br>
            <Table bordered striped hover variant="dark" >
                <thead>
                    <tr>
                    <th >#</th>
                        <th >User Id</th>
                        <th>Type</th>
                        <th>User Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {users.map((user,index) => {
                        return (
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <td>{user.userId}</td>
                                <td>{user.type}</td>
                                <td>{user.userName}</td>
                                <td><Link className="btn btn-danger" onClick={() => deleteUser(user.userId)}>Delete</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>


    )
}

export default DeleteUser;