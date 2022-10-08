
function UserTable(props){
    return(
        
            <tr>
                <th>{props.index}</th>
                <td >{props.userId}</td>
                <td >{props.password}</td>
                <td>{props.passwordConfirm}</td>
                <td>{props.type}</td>
                <td>{props.userName}</td> 
            </tr>
      
    )
}

export default UserTable;
