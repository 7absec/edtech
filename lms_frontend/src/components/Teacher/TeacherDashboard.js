import React from 'react';
import {Link} from 'react-router-dom'
import TrainerSidebar from './TrainerSidebar';
import {useEffect, useState} from 'react'
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/elearning';

function TeacherDashboard(){
    const [dashboardData, setdashboardData] = useState([]);
    const teacherId = localStorage.getItem("teacherId");

    useEffect(()=>{
        //fetch Courses
        try{
            axios.get(baseUrl+'/teacher/dashboard/'+teacherId).then((res)=>{
                setdashboardData(res.data);

            })
        }catch(error){
            console.log(error);
        }
    },[])
    return(
        <div className='container-fluid main_container'>
            <div className='row'>
                <aside className='col-md-3'><TrainerSidebar /></aside>
                <section className='col-md-9 mt-3'>
                   <div className='row'>
                    <h3 className="text-center mb-5">Teacher Dashboard</h3>
                    <div className='col-md-4'>
                        <div className='card border-primary'>
                            <h5 className='card-header bg-primary text-white'>Total Courses</h5>
                            <div className='card-body'>
                                <h3><Link to="/teacher-courses">{dashboardData.total_teacher_courses}</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card border-success'>
                            <h5 className='card-header bg-success text-white'>Total Students</h5>
                            <div className='card-body'>
                                <h3><Link to="/teacher-users">{dashboardData.total_teacher_students}</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card border-info'>
                            <h5 className='card-header bg-info text-white'>Total Chapters</h5>
                            <div className='card-body'>
                                <h3><Link to="/teacher-courses">{dashboardData.total_teacher_chapters}</Link></h3>
                            </div>
                        </div>
                    </div>
                   </div>
                </section>
           </div>
        </div>
    )
}

export default TeacherDashboard;