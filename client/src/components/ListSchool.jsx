import { METHODS } from 'http'
import React, { Fragment, useState, useEffect} from 'react'
import EditSchool from './EditSchool'


//delete school

const deleteSchool = async() => {
  try {
    const deleteSchool = await fetch(`http://localhost:4000/schools/${id}`, {
    method: "DELETE"})

    setSchool(schools.filter(school => schools.id !== id))

  } catch (error) {

    console.error(error.message)
  }
}


const ListSchool = () => {
  const [school, setSchool]= useState([])

  const getSchool = async () =>{
    try {
      const response = await fetch("http://localhost:4000/schools")
      const jsonData = await response.json()
      
      setSchool(jsonData)

    } catch (error) {
      console.log(error.message)
      
    }
  }
useEffect(() => {
  getSchool()
}, [])


  return (
    <Fragment>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

          {school.map(school => (
            <tr key={school.id}>
              <td>{school.name}</td>
              <td> <EditSchool></EditSchool> </td>
              <td>
                <button className='btn btn-outline-danger' onClick={() =>deleteSchool(school.id)}>Delte</button>
              </td>
            </tr>
          ))}
        </thead>
      </table>

    </Fragment>
  )
}

export default ListSchool