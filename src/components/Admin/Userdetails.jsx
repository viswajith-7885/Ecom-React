import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { Context } from '../context'

function Userdetails() {
    const users=useContext(Context)
    const {login}=users
  return (
    <div>
    
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>USER NAME</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>
      {login.map((e)=>(
        <tr>
          <td>{e.name}</td>
          <td>{e.email}</td>
        </tr>
      ))}
       
        
      </tbody>
    </Table>
   


    </div>
  )
}

export default Userdetails