import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function Studentview(user) {
  const params = useParams();
  const navigate = useNavigate();

  const [studentData, setStudentData] = useState({})

  useEffect(() => {
    loadUser();
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://6304ec13697408f7edbe42f1.mockapi.io/students/${params.id}`)
      setStudentData(user.data)
    } catch (error) {
      console.log(error)
    }
  }

  let back = () => {
    navigate("/portal/students");
  }

  return (
    <>
      <div className='container'>
        <br />
        <h2>Name - {studentData.name}</h2><br />
        <h2>Class - {studentData.class}</h2><br />
        <h2>Roll.no - {studentData.rollno}</h2><br />
        <h2>Teacher - {studentData.teacher}</h2><br />
        <button className='btn btn-success' onClick={back}>Back</button><br />
      </div>
    </>
  )
}

export default Studentview;