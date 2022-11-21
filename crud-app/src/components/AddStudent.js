import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddStudent(props) {

    let navigate = useNavigate();

    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const saveStudent = async (e) => {
        e.preventDefault();
        let url = props.url;
        await axios.post(url, student);
        navigate("/");
    }

    return (
        <div className="container mt-4 col-md-8 border rounded p-4 shadow">
            <h2 className='text-center m-2'>Register Student</h2>
            <div className="mb-2 text-center">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">First Name</label>
                        <input value={student.firstName} onChange={(e) => onChangeHandler(e)} type="text" placeholder='First Name' name='firstName' className="form-control" id="inputFirstName" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                        <input value={student.lastName} onChange={(e) => onChangeHandler(e)} type="text" placeholder='Last Name' name='lastName' className="form-control" id="inputLastName" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input value={student.email} onChange={(e) => onChangeHandler(e)} type="email" placeholder='Email' name='email' className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input value={student.password} onChange={(e) => onChangeHandler(e)} autoComplete='true' type="password" placeholder='Password' name='password' className="form-control" id="inputPassword4" />
                    </div>
                    <div className='text-center'>
                        <button type="button" disabled={student.firstName==='' || student.lastName==='' || student.email==='' || student.password==='' ? true : false} onClick={(e) => saveStudent(e)} className="btn btn-outline-dark">Save</button>
                        <Link type="button" to="/" className="btn btn-outline-danger mx-3">Cancel</Link></div>
                </form>
            </div>
        </div>
    )
}
