import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"

function Students() {

    const [students, setStudents] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get("https://6304ec13697408f7edbe42f1.mockapi.io/students")
        setStudents(users.data)
        setLoading(false)
    }

    let studentDelete = async (id) => {
        try {
            let ask = window.confirm("Do you really want to delete?")
            if (ask) {
                await axios.delete(`https://6304ec13697408f7edbe42f1.mockapi.io/students/${id}`)
                alert("User Deleted")
                loadData();
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Students</h1>
                <Link to="/portal/create-student" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create-Student</Link>
            </div>

            {/* <!-- DataTales Example --> */}

            {
                isLoading ? <div class="text-center">
                    <button class="btn btn-primary" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div> : <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Student DataTable</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Sl.No</th>
                                        <th>Name</th>
                                        <th>Class</th>
                                        <th>Roll.no</th>
                                        <th>Teacher</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Sl.No</th>
                                        <th>Name</th>
                                        <th>Class</th>
                                        <th>Roll.no</th>
                                        <th>Teacher</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        students.map((student, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{student.name}</td>
                                                <td>{student.class}</td>
                                                <td>{student.rollno}</td>
                                                <td>{student.teacher}</td>
                                                <td>
                                                    <Link to={`/portal/students/${student.id}`} className='btn btn-primary'>View</Link>&nbsp;
                                                    <Link to={`/portal/students/edit/${student.id}`} className='btn btn-success'>Edit</Link>&nbsp;
                                                    <button onClick={() => studentDelete(student.id)} className='btn btn-danger'>Delete</button>&nbsp;
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }


        </div>
    )
}

export default Students;