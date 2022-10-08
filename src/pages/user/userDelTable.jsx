
function UserDelTable(props){
    return(
        
            <tr>
                <th>{props.index}</th>
                <td >{props.userId}</td>
                <td>{props.type}</td>
                <td>{props.userName}</td> 
            </tr>
      
    )
}

export default UserDelTable;