import React from "react";
import { Link } from "react-router-dom";



function TrainerSidebar(){

    return(
        <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width:280, height:900}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <Link to={`/teacher-dashboard/`} class="fs-4 text-white" style={{ textDecoration: 'none' }}>Dashboard</Link>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                        <Link to={`/teacher-dashboard/`} className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Dashboard</Link>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <Link to={`/training-details/`} className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Training</Link>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <Link to="/teacher-courses" className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Courses</Link>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <Link to="/teacher-users" className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Enrolled Users</Link>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <Link to="/quiz" className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Quiz</Link>
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        <Link to="/add-quiz" className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Add Quiz</Link>
                    </a>
                </li>
                
            </ul>
            <hr />
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" class="rounded-circle me-2" width="32" height="32" />
                    <strong>User</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <a class="dropdown-item" href="#">
                        <Link to="/teacher-profile-setting" className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Setting</Link>
                        </a>
                    </li>
                    <li><hr class="dropdown-divider"/></li>
                    <li>
                        <a class="dropdown-item" href="#">
                            <Link to="/teacher-logout"  className="bi me-2 text-light" style={{ textDecoration: 'none' }}>Sign out</Link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TrainerSidebar;