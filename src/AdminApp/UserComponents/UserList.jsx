import React from "react";
import { useDeleteUserMutation, useGetUsersQuery } from "../../API/UserApi";
import "../../Style/Style.css";
import { UserType } from "../../Shared/Enum/UserType";
import { useDispatch } from "react-redux";
import {
  resetUpdateState,
  setUserToUpdate,
} from "../../Redux/Slices/AdminSlice/UserManagmentSlice";
function UserList() {
  const { data, isFetching, isSuccess, isError, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();
  const dispatch = useDispatch();
  let content;
  if (isFetching) {
    content = (
      <div className="loading-container">
        <div className="loading"></div>
        <p>Loading...</p>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div className="text-center">
        <h2 className="text-white-50">User List</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover mt-3">
            <thead className="table-primary">
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{UserType[user.role]}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => dispatch(setUserToUpdate(user))}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteUser(user.id);
                        dispatch(resetUpdateState());
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <div className="pt-3">{content}</div>;
}

export default UserList;
