import React from "react";
import TrainerSidebar from "./TrainerSidebar";


function TeacherProfileSetting() {
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <aside className="col-md-2">
          <TrainerSidebar />
        </aside>
        <section className="col-md-9 mt-5">
            <div className="card">
                <h5 className="card-header">Profile Setting</h5>
                <div className="card-body">
                <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Profile Picture</label>
                        <div className="col-sm-10">
                            <input type="file" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="staticEmail" className="col-sm-2 col-form-label">Skills</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="staticEmail" />
                        </div>
                    </div>
                    <hr />
                    <button className="btn btn-primary">Update</button>
                    
                </div>
            </div> 
        </section>
      </div>
    </div>
  );
}

export default TeacherProfileSetting;
