import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editteacher() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      teacherName: "",
      class: "",
      subjects: "",
      students: "",
    },
    validate: (values) => {

      let errors = {}
      if (values.teacherName === "") {
        errors.teacherName = "Please enter name"
      }

      if (values.teacherName.length <= 5) {
        errors.teacherName = "name must be greater than 5 letters"
      }

      if (values.class === "") {
        errors.class = "Please enter position"
      }

      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(`https://6304ec13697408f7edbe42f1.mockapi.io/teachers/${params.id}`, values)
      alert("User edited")
      navigate("/portal/teachers");
    }
  })

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`https://6304ec13697408f7edbe42f1.mockapi.io/teachers/${params.id}`)
      formik.setValues({
        teacherName: user.data.teacherName,
        class: user.data.class,
        subjects: user.data.subjects,
        students: user.data.students,
      })

    } catch (error) {
      console.log(error);
    }
  }

  let back = () => {
    navigate("/portal/teachers")
  }

  return (
    <div className='container'>
      <h1>Edit Teacher</h1><br />
      <form onSubmit={formik.handleSubmit}>
        <label>Teacher Name</label>
        <input className='form-control' type={"text"} value={formik.values.teacherName} onChange={formik.handleChange} name="teacherName"></input><span style={{ color: "red" }}>{formik.errors.teacherName}</span><br />
        <label>Class</label>
        <input className='form-control' type={"text"} value={formik.values.class} onChange={formik.handleChange} name="class"></input><span style={{ color: "red" }}>{formik.errors.class}</span><br />
        <label>Subjects</label>
        <input className='form-control' type={"text"} value={formik.values.subjects} onChange={formik.handleChange} name="subjects"></input><br />
        <label>Students</label>
        <input className='form-control' type={"text"} value={formik.values.students} onChange={formik.handleChange} name="students"></input><br />
        <input className='btn btn-info' type={"submit"} value="Submit" disabled={!formik.isValid}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn btn-success' onClick={back}>Back</button><br />
      </form>
    </div>
  )
}

export default Editteacher