import React from 'react';
import {Link} from 'react-router-dom'
import UserSidebar from './UserSidebar';
import {useEffect, useState} from 'react'
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/elearning';

function Dashboard(){
    const [dashboardData, setdashboardData] = useState([]);
    const studentId = localStorage.getItem("studentId");

    useEffect(()=>{
        //fetch Courses
        try{
            axios.get(baseUrl+'/student/dashboard/'+studentId).then((res)=>{
                setdashboardData(res.data);

            })
        }catch(error){
            console.log(error);
        }
    },[])
    return(
        <div className='container-fluid main_container'>
            <div className='row'>
                <aside className='col-md-3'><UserSidebar /></aside>
                <section className='col-md-9 mt-3'>
                   <div className='row'>
                    <h3 className="text-center mb-5">Student Dashboard</h3>
                    <div className='col-md-4'>
                        <div className='card border-primary'>
                            <h5 className='card-header bg-primary text-white'>Enrolled Courses</h5>
                            <div className='card-body'>
                                <h3><Link to="/my-courses">{dashboardData.enrolled_courses}</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card border-success'>
                            <h5 className='card-header bg-success text-white'>Favorite Courses</h5>
                            <div className='card-body'>
                                <h3><Link to="/favorite-courses/">{dashboardData.favorites_courses}</Link></h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card border-info'>
                            <h5 className='card-header bg-info text-white'>Assignments</h5>
                            <div className='card-body'>
                                <div className="row">
                                    <div className="col-md-6">
                                <h5>Completed :<Link to="/my-assignments/"> {dashboardData.complete_assignments}</Link></h5>

                                    </div>
                                    <div className="col-md-6">
                                        
                                <h5>Pending : <Link to="/my-assignments/"> {dashboardData.pending_assignments}</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                </section>
           </div>
        </div>
    )
}

export default Dashboard;