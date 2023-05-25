import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function Edit(){
    const {id} = useParams();
    const[data,setData] = useState([])
    const navigate= useNavigate()
    useEffect(()=> {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    function handleSubmit(event){
        event.preventDefault()
        axios.put('http://localhost:3000/users/'+id, data).then(res=>{
            alert("Data Added Successfully!");
            navigate("/emp")
        })
    }
    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center' style={{ margin: '0rem',backgroundColor:'black' }}>
        <div className='w-50 border bg-lightt p-5'>
        <h class="text-primary" style={{fontSize:50 ,textAlign:"center"}}>UPDATE DETAILS</h>
            <form onSubmit={handleSubmit}>
            <div>
                    <label htmlFor="name" class="text-success">ID: </label>
                    <input type="text" name="name" disabled value={data.id}className="form-control" ></input>
                </div>
                <div>
                    <label htmlFor="name" class="text-success"> Name: </label>
                    <input type="text" name="name"  value={data.name}className="form-control"  onChange={e=>setData({...data,name:e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Sex" class="text-success">Sex: </label>
                    <input type="text" value={data.sex} className="form-control" onChange={e=>setData({...data,sex:e.target.value})}></input>
                </div><br/>
                <div>
                    <label htmlFor="Date Of Birth" class="text-success"> Date Of Birth : </label>
                    <input type="text" name="Date Of Birth" value={data.dob} className="form-control" onChange={e=>setData({...data,dob:e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Salary" class="text-success"> Salary : </label>
                    <input type="text" name="Salary" value={data.salary} className="form-control" onChange={e=>setData({...data,salary:e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Department" class="text-success"> Department : </label>
                    <input type="text" name="Department" value={data.department} className="form-control" onChange={e=>setData({...data,department:e.target.value})}></input>
                </div>
                <br/>
                <button className="btn btn-info">Save</button>
            </form>
           
        </div>
        </div>
    )
}

export default Edit;
