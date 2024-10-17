import React, { useState } from 'react';
import '../Registration.css';

const StudentRegistration = () => {
    const [students, setStudents] = useState([
        { id: 116257, name: 'Anna Smith', program: 'MBA' },
        { id: 615789, name: 'John Doe', program: 'Compro' },
        { id: 116868, name: 'Tom Jerryh', program: 'MBA' },
    ]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [program, setProgram] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { id, name, program };
        setStudents([...students, newStudent]);
        setId('');
        setName('');
        setProgram('');
    };
    const resetForm = () => {
        setId('');
        setName('');
        setProgram('');
    };

    return (
        <div className="registration-container">
            <div class="banner">
                Student Registration
                <div class="banner-subtext"></div>
               
            </div>
            <h1>Create Student</h1>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>ID</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                        placeholder="Enter student ID"
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter student name"
                    />
                </div>
                <div className="form-group">
                    <label>Program</label>
                    <input
                        type="text"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        required
                        placeholder="Enter student program"
                    />
                </div>
                <div className="form-actions">
                    <button type="submit" className="register-btn">Register</button>
                    <button type="button" className="reset-btn" onClick={resetForm}>Reset</button>
                </div>
                
               
            </form>

            <h2>All Students</h2>
            <table className="student-list">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Program</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.program}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentRegistration;
