import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

        const [message, setmessage] = useState("")
        const [users, setusers] = useState([])

    const getUsers = async()=>{

        //get function Promise
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response) //axios object //AxiosResponse
        console.log(response.data) //api response.
        console.log(response.data.message)
        setmessage(response.data.message)
        console.log(response.data.data) //array
        setusers(response.data.data)
        get()
    }


  return (
    <div style={{textAlign:"center"}}>
        <h2>API Demo 1</h2>

      <button onClick={getUsers}>Load Users</button>

      <p>{message}</p>

      {/* Table for users */}
      <table border="1" style={{margin:"auto", marginTop:"20px"}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Full name</th>
            <th>Email</th>
            <th>Age</th>
            {/* add more columns if available */}
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u._id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}