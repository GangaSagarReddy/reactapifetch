import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add(){
    const [inputData, setInputData] = useState({name:'',sex:'',dob:'',salary:'',department:''})
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault()

        axios.post('http://localhost:3000/users', inputData).then(res => {
            alert("Data Added Succesfully!");
            navigate('/emp');
        }).catch(err => console.log(err));
    }

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center' style={{ margin: '0rem',backgroundColor:'orange' }}>
        <div className='w-50 border bg-lightt p-5'>
        <h class="text-DARK" style={{fontSize:50 ,textAlign:"center"}}>ENTER DETAILS</h>
            <form  onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Name: </label>
                    <input type="text" name="name" className="form-control" onChange={e=>setInputData({...inputData,name: e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Gender">Gender : </label>
                    <input type="text" name="Gender" className="form-control" onChange={e=>setInputData({...inputData,sex: e.target.value})}></input>
                </div><br/>
                <div>
                    <label htmlFor="Date Of Birth"> Date Of Birth : </label>
                    <input type="text" name="Date Of Birth" className="form-control" onChange={e=>setInputData({...inputData,dob: e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Salary"> Salary : </label>
                    <input type="text" name="Salary" className="form-control" onChange={e=>setInputData({...inputData,salary: e.target.value})}></input>
                </div>
                <div>
                    <label htmlFor="Department"> Department : </label>
                    <input type="text" name="Department" className="form-control" onChange={e=>setInputData({...inputData,department: e.target.value})}></input>
                </div><br/>
                <button className="btn btn-info">Save</button>
            </form>
        </div>
        </div>
    )
}

export default Add;
