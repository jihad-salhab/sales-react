import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { UserType } from "./Shared/Enum/UserType";
import { useLoginUserMutation } from "./API/UserApi";
import { updateUserTypeState } from "./Redux/Slices/SharedSlice/AppStateSlice";

function LoginPage() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });
  const [loginFunction, loginResult] = useLoginUserMutation();
  const userTypeState = useSelector(
    (state) => state.AppStateStore.userState.userType
  );
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunction(formData);
  };

  useEffect(() => {
    if (loginResult.isSuccess) {
      dispatch(updateUserTypeState(loginResult.data.role));
    }
  });
  return userTypeState === -1 ? (
    loginResult.isLoading ? (
      <div className="loading-container " style={{ minHeight: "100vh" }}>
        <div className="loading"></div>
        <p>Loading...</p>
      </div>
    ) : (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <h2 className="text-center">
              {loginResult.isError && (
                <span className="text-danger text-center h4 ml-2">
                  {loginResult.error.data.title}
                </span>
              )}
            </h2>
          </div>
        </div>
      </div>
    )
  ) : UserType[userTypeState] === "Admin" ? (
    <Navigate to="/AdminDashboard" replace={true} />
  ) : (
    <div></div>
  );
}

export default LoginPage;
