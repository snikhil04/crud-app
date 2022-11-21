import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ViewStudent(props) {

    let {studentId} = useParams();

    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const getStudentById = async () => {
        let url = props.url + `/${studentId}`;
        let response = await axios.get(url);
        let data = await response.data;
        setStudent(data);
    }

    useEffect(() => {
        getStudentById();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container mt-4 col-md-8 border rounded p-4 shadow">
            <div className="mb-3 text-center">
            <h2 className='text-center m-2'> Student Information</h2>
            <h4 className='text-center m-2'>First Name : {student.firstName}</h4>
            <h4 className='text-center m-2'>Last Name : {student.lastName}</h4>
            <h4 className='text-center m-2'>Email : {student.email}</h4>
            <h4 className='text-center m-2'>Password : {student.password}</h4>
            </div>
        </div>
    )
}
