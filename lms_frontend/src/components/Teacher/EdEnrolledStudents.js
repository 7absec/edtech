import React from "react";
import { Link, useParams} from "react-router-dom";
import TrainerSidebar from './TrainerSidebar';
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api/elearning";

function EdEnrolledStudents() {
  const [studentData, setstudentData] = useState([]);
  let {course_id}=useParams();
  

  useEffect(() => {
    try {
      axios.get(baseUrl + "/fetch-enrolled-students/" + course_id).then((res) => {
        setstudentData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  //console.log(courseData)

  return (
    <div className="container-fluid main_container">
      <div className="row">
        <aside className="col-md-2"><TrainerSidebar /></aside>
        <div className="col-md-9 mt-3">
          <div className="card">
            <h5 className="card-header">Enrolled Student List</h5>
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th> 
                    <th>Email</th>
                    <th>Username</th>
                    <th>Interests</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.map((row, index) => (
                    <tr>
                      <td>{row.student.full_name}</td>
                      <td>{row.student.email}</td>
                      <td>{row.student.username}</td>
                      <td>{row.student.interests}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EdEnrolledStudents;
