import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();

  return (
    <div
      style={{
        backgroundRepeat: 'no',
        height: '880px',
        paddingTop: '100px'
      }}
    >
      <div className="col-6" style={{ margin: 'auto' }}>
        <div className="card px-5 py-2" style={{ margin: '3%' }}>
          <Link to="/">
            <i className="far fa-arrow-square-left fa-2x"></i>
          </Link>
          {history.location.pathname == '/studentLogin' && (
            <>
              <h4 style={{ margin: 'auto', marginBottom: '10px' }}>
                Student Login
              </h4>
              <img
                src="Images/student4.jpg"
                alt="Student Image"
                className="landing_img"
              />
              <br />
            </>
          )}
          {history.location.pathname == '/teacherLogin' && (
            <>
              <h4 style={{ margin: 'auto', marginBottom: '20px' }}>
                Teacher Login
              </h4>
              <img
                src="Images/backgg.jpg"
                alt="Student Image"
                className="landing_img"
              />
              <br />
            </>
          )}
          {history.location.pathname == '/adminLogin' && (
            <>
              <h4 style={{ margin: 'auto', marginBottom: '20px' }}>
                Admin Login
              </h4>
              <img
                src="Images/admin2.jpg"
                alt="Student Image"
                className="landing_img"
              />
              <br />
            </>
          )}

          <div className="row mg" style={{ marginBottom: '10px' }}>
            <div className="col">
              <input
                type="text"
                placeholder="email"
                className="form-control st_input_class"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="password"
                placeholder="password"
                className="form-control st_input_class"
              />
            </div>
          </div>
          <br />
          <button className="btn btn-primary mb-4 mt-2 st_input_class">
            SignIn
          </button>
          <Link
            to={
              history.location.pathname == '/studentLogin'
                ? '/studentRegister'
                : '/teacherRegister'
            }
            style={{ textDecoration: 'none' }}
          >
            <p>Don't have an account?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
