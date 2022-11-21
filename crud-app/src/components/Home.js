import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ViewStudentModal from './ViewStudentModal';

export default function Home(props) {

    const [students, setStudent] = useState([])
    const [viewStudent, setViewStudent] = useState(false);

    const loadStudentData = async () => {
        let response = await axios.get(props.url);
        let studentData = await response.data;
        setStudent(studentData);
    }

    const deleteStudent = async (e, studentId) => {
        e.preventDefault();
        let url = props.url + `/${studentId}`
        await axios.delete(url);
        loadStudentData();
    }


    const viewStudentBtnHandler = (e) => {
        e.preventDefault();
        setViewStudent(true);
    }


    const handleCancel = (e) => {
        console.log(e)
        e.preventDefault();
        setViewStudent(false);
        loadStudentData();
    }

    const handleOk = (e) => {
        console.log(e)
        e.preventDefault();
        setViewStudent(false);
        loadStudentData();
    }

    useEffect(() => {
        loadStudentData();
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <div className="container mt-4 col-md-8 border rounded p-4 shadow">
                <h2 className='text-center m-2'>Student List</h2>
                <button className='btn btn-outline-dark bg-warning' onClick={(e) => viewStudentBtnHandler(e)}>Click here</button>
                {/* <button className='btn btn-outline-dark bg-warning'>Click here</button> */}
                <div className="mb-3 text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((student, index) => {
                                return <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td><Link type="button" to={`/viewStudent/${student.id}`} className="btn btn-outline-dark">View</Link>
                                        <Link type="button" to={`/updateStudent/${student.id}`} className="btn btn-outline-warning mx-2">Edit</Link>
                                        <button type="button" onClick={(e) => deleteStudent(e, student.id)} className="btn btn-outline-danger mx-2">Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {viewStudent && (
                <ViewStudentModal handleCancel={handleCancel} handleOk={handleOk} />
            )}
        </>
    )
}
