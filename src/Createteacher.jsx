import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

function Createteacher() {

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

            if (values.position === "") {
                errors.class = "Please enter position"
            }

            return errors;
        },
        onSubmit: async (values) => {
            let user = await axios.post("https://6304ec13697408f7edbe42f1.mockapi.io/teachers", values)
            alert("User created");
            navigate("/portal/teachers")
        }
    })

    return (
        <div className='container'>
            <h1>Teacher Creation</h1><br />
            <form onSubmit={formik.handleSubmit}>
                <label>Teacher Name</label>
                <input className='form-control' type={"text"} value={formik.values.teacherName} onChange={formik.handleChange} name="teacherName"></input><span style={{ color: "red" }}>{formik.errors.teacherName}</span><br />
                <label>Class</label>
                <input className='form-control' type={"text"} value={formik.values.class} onChange={formik.handleChange} name="class"></input><span style={{ color: "red" }}>{formik.errors.class}</span><br />
                <label>Subjects</label>
                <input className='form-control' type={"text"} value={formik.values.subjects} onChange={formik.handleChange} name="subjects"></input><br />
                <label>Students</label>
                <input className='form-control' type={"text"} value={formik.values.students} onChange={formik.handleChange} name="students"></input><br />
                <input className='btn btn-info' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
            </form>
        </div>
    )
}


export default Createteacher