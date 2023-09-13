import { useEffect, useState } from "react";
import { UserType } from "../../Shared/Enum/UserType";
import { useAddUserMutation, useUpdateUserMutation } from "../../API/UserApi";
import { useDispatch, useSelector } from "react-redux";
import { resetUpdateState } from "../../Redux/Slices/AdminSlice/UserManagmentSlice";
function CreateUser() {
  // State to store form input values
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: 0,
  });
  const updateState = useSelector((state) => {
    return state.adminUserManagetStore.updateState;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (updateState.selectedUser !== undefined) {
      setFormData(updateState.selectedUser);
    } else {
      setFormData({ username: "", password: "", role: 0 });
    }
  }, [updateState]);
  const [createUser, addResult] = useAddUserMutation();
  const [updateUser, updateResult] = useUpdateUserMutation();
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "role" ? parseInt(value, 10) : value; // Parse 'type' as an integer
    setFormData({
      ...formData,
      [name]: parsedValue,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateState.isUpdatingMode) {
      updateUser(formData);
      dispatch(resetUpdateState());
    } else {
      createUser(formData);
    }

    setFormData({
      username: "",
      password: "",
      role: 0,
    });
  };

  return addResult.isLoading || updateResult.isLoading ? (
    <div className="loading-container pt-3">
      <div className="loading"></div>
      <p>Loading...</p>
    </div>
  ) : (
    <div className="text-center pt-4">
      <h2>{updateState.isUpdatingMode ? "Update User" : "Create User"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto" style={{ maxWidth: "400px" }}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
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
              disabled={updateState.isUpdatingMode}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label ">
              Type
            </label>
            <select
              value={formData.role}
              onChange={handleInputChange}
              name="role"
              className="form-select "
            >
              {Object.keys(UserType).map((key) => (
                <option key={key} value={key}>
                  {UserType[key]}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className={`btn ${
              updateState.isUpdatingMode ? "btn btn-warning" : "btn btn-primary"
            }`}
          >
            {updateState.isUpdatingMode ? "Update User" : "Create User"}
          </button>
          &nbsp;
          {updateState.isUpdatingMode && (
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(resetUpdateState());
              }}
            >
              Cancel Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
