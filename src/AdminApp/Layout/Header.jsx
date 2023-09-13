import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateUserTypeState } from "../../Redux/Slices/SharedSlice/AppStateSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            SalesApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/AdminDashboard/UserManagment"
                >
                  User Managment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/AdminDashboard/GoalManagment"
                >
                  Goal Managment
                </NavLink>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/Product">
                      Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Product/List">
                      Product List
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Product/Details/10">
                      ProductDetails
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/Product/Create">
                      CreateProduct
                    </NavLink>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-danger ms-3"
              onClick={() => {
                dispatch(updateUserTypeState(-1));
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
