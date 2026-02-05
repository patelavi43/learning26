import React from 'react'

export const MapDemo5 = () => {
    var students =[
        {id:1,name:"Avi",age:23,marks:98,city:"ahmedabad",gender:"male"},
        {id:2,name:"Swar",age:21,marks:88,city:"ahmedabad",gender:"male"},
        {id:3,name:"Shurbhi",age:21,marks:78,city:"ahmedabad",gender:"female"},
    ]
   return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 5</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender =="male" && "green"}}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color: st.age>22 ? "red" :"black"}}>{st.age}</td>
                            <td style={{backgroundColor:st.marks<80 && "red"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td>{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}