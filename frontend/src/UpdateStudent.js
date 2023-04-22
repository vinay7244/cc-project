import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

const API = "http://ec2-3-83-92-18.compute-1.amazonaws.com/api/v1";

function UpdateStudent() {
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const navigate =useNavigate();
    const {id}=useParams();
    function handleSubmit(event){
        event.preventDefault();
        axios.put(`${API}/update/`+id,{name,email})
        .then(res=>{
            navigate('/');
            console.log(res);
        }).catch(err =>console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' 
                        onChange={e=>setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'
                        onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>

    )
}
export default UpdateStudent