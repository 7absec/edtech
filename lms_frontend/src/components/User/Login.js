import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import "./css/login.css"
const baseUrl='http://127.0.0.1:8000/api/elearning';

function Login(){
    const [studentLoginData, setStudentLoginData] = useState({
        'email':'',
        'password':'',
    });

    const [errorMsg, seterrorMsg]=useState('');
    const handleChange=(event)=>{
        setStudentLoginData({
            ...studentLoginData,
            [event.target.name]:event.target.value
        });
    }

    const Swal = require('sweetalert2')
    const handleLogin =()=>{
        Swal.fire({
            title:'Success',
            text: 'You are successfully logged in',
            icon: 'success',
            timer: 3000,
            confirmButtonText: 'Continue',
            showCancelButton:false
        })
    }

    const submitForm = ()=>{
        // console.log(studentLoginData);
        const studentFormData=new FormData();
        studentFormData.append('email', studentLoginData.email)
        studentFormData.append('password', studentLoginData.password)
        try{
            axios.post(baseUrl+'/user-login', studentFormData).then((res)=>{
                if(res.data.bool===true){
                    localStorage.setItem('studentLoginStatus',true);
                    localStorage.setItem('studentId',res.data.student_id);
                    window.location.href='/user-dashboard';
                }else{
                    seterrorMsg('Invalid Email or Password')
                }
            });
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        document.title="Student Login"
    });

    const studentLoginStatus=localStorage.getItem('studentLoginStatus');
    if(studentLoginStatus==='true'){
        window.location.href='/user-dashboard';
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-12"></div>
                <div className="col-md-6 col-12">
                    <div class="login-box">
                        <h2>Login</h2>
                        <form>
                            <div class="user-box">
                                <label>Email</label>
                                <input value={studentLoginData.email} onChange={handleChange} name="email"  className="form-control" type="email" required="" />
                            </div>
                            <div class="user-box">
                                <label>Password</label>
                                <input value={studentLoginData.password} onChange={handleChange} name="password" type='password' className="form-control" id="exampleInputPassword1" required="" />
                            </div>
                            <br />
                            <a className='btn btn-primary' onClick={function(event){ submitForm(); handleLogin();}}>
                            Submit
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        // <div className='container-fluid main_container mt-5'>
        //     <div className='row'>
        //         <div className='col-3 mx-auto mt-3'>
        //             <div className='card mt-5'>
        //                 <div className='card-body'>
        //                     <p className='fs-4 text-center mt-3 mb-3'>User Login</p>
        //                     {errorMsg && <p className='text-danger text-center'>{errorMsg}</p>}
        //                     <hr/>
        //                     <div className='mb-3 mt-5'>
        //                         <input value={studentLoginData.email} onChange={handleChange} name="email" type='email' className="form-control text-center" placeholder='Email' />
        //                     </div>
        //                     <div className='mb-5'>
        //                         <input value={studentLoginData.password} onChange={handleChange} name="password" type='password' className="form-control text-center" id="exampleInputPassword1" placeholder='Password'/>
        //                     </div>
        //                     <div className='mt-5 mb-3 text-center '>
        //                     <button type='button'onClick={function(event){ submitForm(); handleLogin();}} className='btn btn-primary px-5'>Login</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Login;