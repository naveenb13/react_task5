import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Createstudent() {

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            class: "",
            rollno: "",
            teacher: "",
        },
        validate: (values) => {

            let errors = {}
            if (values.name === "") {
                errors.name = "Please enter name"
            }

            if (values.name.length <= 5) {
                errors.name = "name must be greater than 5 letters"
            }

            if (values.class === "") {
                errors.class = "Please enter position"
            }

            return errors;
        },
        onSubmit: async (values) => {
            let user = await axios.post("https://6304ec13697408f7edbe42f1.mockapi.io/students", values)
            alert("User created")
            navigate("/portal/students");
        }
    })

    return (
        <div className='container'>
            <h1>Student Creation</h1><br />
            <form onSubmit={formik.handleSubmit}>
                <label>Student Name</label>
                <input className='form-control' type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name"></input><span style={{ color: "red" }}>{formik.errors.name}</span><br />
                <label>Class</label>
                <input className='form-control' type={"text"} value={formik.values.class} onChange={formik.handleChange} name="class"></input><span style={{ color: "red" }}>{formik.errors.class}</span><br />
                <label>Rollno</label>
                <input className='form-control' type={"text"} value={formik.values.rollno} onChange={formik.handleChange} name="rollno"></input><br />
                <label>Teacher</label>
                <input className='form-control' type={"text"} value={formik.values.teacher} onChange={formik.handleChange} name="teacher"></input><br />
                <input className='btn btn-info' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
            </form>
        </div>
    )
}

export default Createstudent