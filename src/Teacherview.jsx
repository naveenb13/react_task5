import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

function Teacherview(user) {
  const params = useParams();
  const navigate = useNavigate();

  const [teacherData, setTeacherData] = useState({})
  console.log(teacherData);

  useEffect(() => {
    loadUser();
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://6304ec13697408f7edbe42f1.mockapi.io/teachers/${params.id}`)
      setTeacherData(user.data)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(teacherData);

  let back = () => {
    navigate("/portal/teachers");
  }

  return (
    <>
      <div className='container'>
        <br />
        <h2>Teacher Name - {teacherData.teacherName}</h2><br />
        <h2>Class - {teacherData.class}</h2><br />
        <h2>Subjects - {`${teacherData.subjects}`}</h2><br />
        <h2>Students - {`${teacherData.students}`}</h2><br />
        <button className='btn btn-success' onClick={back}>Back</button><br />
      </div>
    </>
  )
}

export default Teacherview;