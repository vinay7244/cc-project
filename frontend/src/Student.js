import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const API = "http://ec2-3-83-92-18.compute-1.amazonaws.com/api/v1";

function Student() {
    const [student,setStudent]=useState([])
    useEffect(()=>{
        axios.get(`${API}`)
        .then(res => {setStudent(res.data); console.log(res.data)})
        .catch(err => console.log(err));
    },[])

        const handleDelete = async(id)=>{
            try{
                await axios.delete(`${API}/student/${id}`);
                window.location.reload();
            }catch(err){
                console.log(err);
            }
        }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <h2>He</h2>
                <Link to="/create" className='btn btn-success'>ADD +</Link>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            student && student?.map((data,i)=>(
                                <tr key={i}>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>
                                        <Link to={`update/${data.id}`}className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-2' onClick={e => handleDelete(data.id)}>Delete</button>
                                    </td>

                                    
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Student
