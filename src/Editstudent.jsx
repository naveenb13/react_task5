import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Editstudent() {

    const params = useParams();
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
            await axios.put(`https://6304ec13697408f7edbe42f1.mockapi.io/students/${params.id}`, values)
            alert("User edited")
            navigate("/portal/students");
        }
    })

    useEffect(() => {
        loadUser()
    }, [])

    let loadUser = async () => {
        try {
            let user = await axios.get(`https://6304ec13697408f7edbe42f1.mockapi.io/students/${params.id}`)
            formik.setValues({
                name: user.data.name,
                class: user.data.class,
                rollno: user.data.rollno,
                teacher: user.data.teacher,
            })

        } catch (error) {
            console.log(error);
        }
    }

    let back = () => {
        navigate("/portal/students")
    }

    return (
        <div className='container'>
            <h1>Edit student</h1><br />
            <form onSubmit={formik.handleSubmit}>
                <label>Student Name</label>
                <input className='form-control' type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name"></input><span style={{ color: "red" }}>{formik.errors.name}</span><br />
                <label>Class</label>
                <input className='form-control' type={"text"} value={formik.values.class} onChange={formik.handleChange} name="class"></input><span style={{ color: "red" }}>{formik.errors.class}</span><br />
                <label>Roll no</label>
                <input className='form-control' type={"text"} value={formik.values.rollno} onChange={formik.handleChange} name="rollno"></input><br />
                <label>Teacher</label>
                <input className='form-control' type={"text"} value={formik.values.teacher} onChange={formik.handleChange} name="teacher"></input><br />
                <input className='btn btn-info' type={"submit"} value="Submit" disabled={!formik.isValid}></input> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-success' onClick={back}>Back</button><br />
            </form>
        </div>
    )
}

export default Editstudent;