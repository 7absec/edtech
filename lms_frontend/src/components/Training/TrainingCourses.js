import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api/training';

function TrainingCourses(){

    const [trainingCourseData, setTrainingCourseData]=useState([]);
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/training-courses/').then((res)=>{
              setTrainingCourseData(res.data)
            })
        }catch(error){
            console.log(error);
        }
    }, []);

    return(
        <div className="container-fluid main_container mt-3">
             <div className="row">
                <div className="col-3">
                    course category
                </div>
            {/* Latest Course */}
            <div className="col-8">
            <h3 className="pb-1 mb-4">Training Courses</h3>
            <div className="row">
            { trainingCourseData.map((course, index) => (
                <div className="col-md-3 mb-4">
                  <div className="card w-100">
                    <Link to={`/training-course-detail/${course.id}`}>
                      <img
                        src={course.featured_img}
                        className="card-img-top"
                        width={200}
                        height={150}
                        alt={course.title}
                      />
                    </Link>
                    <hr />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/training-course-detail/${course.id}`}>{course.title}</Link>
                      </h5>
                      <p><b>Detail:</b>&nbsp;&nbsp; {course.description}...<Link to={`/training-course-detail/${course.id}`}>learn more</Link></p>
                    </div>
                    <div className="card-footer">
                      <div className="title">
                        <span><b>Rating:&nbsp;&nbsp;{course.course_rating}/5</b></span>
                        <span className="float-end"><b>Enrolled:&nbsp;&nbsp;{course.training_enrolled_student}</b></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
            
            {/* End Latest Courses */}
            {/* pagination Start */}
            <nav aria-label="Page navigation example mt-5">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="/#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="/#">1</a></li>
                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                    <li className="page-item"><a className="page-link" href="/#">Next</a></li>
                </ul>
            </nav>
            {/* pagination End */}
            </div>
        </div>
        </div>
    )
}

export default TrainingCourses;