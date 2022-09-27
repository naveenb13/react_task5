import React from 'react'
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <hr className="sidebar-divider my-3" />

      {/* <!-- Sidebar - Brand --> */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-text mx-3">Student and Teacher Management</div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-3" />

      <li className="nav-item active">
        <Link className="nav-link" to="/portal/students">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Students</span></Link>
      </li>
      <hr className="sidebar-divider my-1" />
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/teachers">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Teachers</span></Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />
    </ul>
  )
}

export default Sidebar