import Table from 'react-bootstrap/Table';
import UserTable from "./userTable";
import axios from "axios";
import { useEffect,useState } from "react";
import "./table.scss"


function ShowUsers() {

    
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        axios.get("http://localhost:2097/api/v1/user").then((response) => {
          console.log(response.data);
          setUsers(response.data);
        }).catch(e=>console.log(e));
    },[])

    

    

    return (
        <div>
            <h1>User List</h1> 
            <br></br>
            <Table bordered striped hover variant="dark" >
                <thead>
                    <tr>
                    <th >#</th>
                        <th >User Id</th>
                        <th>Password</th>
                        <th >Confirm Password</th>
                        <th>Type</th>
                        <th>User Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    
                    {users.map((cust,index) => {
                        return (
                            <UserTable
                                index={index+1}
                                userId={cust.userId}
                                password={cust.password}
                                passwordConfirm={cust.passwordConfirm}
                                type={cust.type}
                                userName={cust.userName}
                                
                            ></UserTable>
                        )
                    })}
                </tbody>
            </Table>
        </div>


    )
}

export default ShowUsers;