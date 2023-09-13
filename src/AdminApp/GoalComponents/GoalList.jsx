import React from "react";
import { useDeleteGoalMutation, useGetGoalsQuery } from "../../API/GoalApi";
import { SharedConstant } from "../../Shared/SharedConstant";
import { useDispatch } from "react-redux";
import {
  resetUpdateState,
  setGoalToUpdate,
} from "../../Redux/Slices/AdminSlice/GoalManagmentSlice";
import { useNavigate } from "react-router-dom";

function GoalList() {
  const { data, isError, error, isFetching, isSuccess } = useGetGoalsQuery();
  const [deleteGoal] = useDeleteGoalMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        <h2 className="text-white-50">Goal List</h2>
        <div className="table-responsive">
          <table className="table table-bordered table-hover mt-3">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>IsHidden</th>
                <th>Image</th>
                <th>Options</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((goal) => (
                <tr key={goal.id}>
                  <td>{goal.title}</td>
                  <td>{goal.description}</td>
                  <td>{goal.isHidden ? "Yes" : "No"}</td>
                  <td>
                    <img
                      src={SharedConstant.baseUrl + goal.imageUrl}
                      alt={goal.title}
                      className="img-fluid " // To make the image responsive
                      style={{ maxWidth: "100px" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => {
                        dispatch(setGoalToUpdate(goal));
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteGoal(goal.id);
                        dispatch(resetUpdateState());
                      }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        navigate(
                          `/AdminDashboard/GoalManagment/Details/${goal.id}`
                        );
                      }}
                    >
                      Details
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

export default GoalList;
