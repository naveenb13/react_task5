import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function Teachers() {

    const [teachers, setTeachers] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get("https://6304ec13697408f7edbe42f1.mockapi.io/teachers")
        setTeachers(users.data)
        setLoading(false)
    }

    let teachersDelete = async (id) => {
        try {
            let ask = window.confirm("Do you really want to delete?")
            if (ask) {
                await axios.delete(`https://6304ec13697408f7edbe42f1.mockapi.io/teachers/${id}`)
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
                <h1 className="h3 mb-0 text-gray-800">Teachers</h1>
                <Link to="/portal/create-teacher" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create-teacher</Link>
            </div>

            {/* <!-- DataTales Example --> */}
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Teacher DataTable</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Teacher Name</th>
                                    <th>Subjects</th>
                                    <th>Class</th>
                                    <th>Students</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>Sl.No</th>
                                <th>Teacher Name</th>
                                <th>Subjects</th>
                                    <th>Class</th>
                                    <th>Students</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                            {
                                        teachers.map((teacher, index) => {
                                            return <tr>
                                                <td>{index + 1}</td>
                                                <td>{teacher.teacherName}</td>
                                                <td>{teacher.class}</td>
                                                <td>{`${teacher.subjects}`}</td>
                                                <td>{`${teacher.students}`}</td>
                                                <td>
                                                    <Link to={`/portal/teachers/${teacher.id}`} className='btn btn-primary'>View</Link>&nbsp;
                                                    <Link to={`/portal/teachers/edit/${teacher.id}`} className='btn btn-success'>Edit</Link>&nbsp;
                                                    <button onClick={() => teachersDelete(teacher.id)} className='btn btn-danger'>Delete</button>&nbsp;
                                                </td>
                                            </tr>
                                        })
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Teachers