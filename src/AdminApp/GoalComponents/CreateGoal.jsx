import React, { useEffect, useState } from "react";
import { useAddGoalMutation, useUpdateGoalMutation } from "../../API/GoalApi";
import { useDispatch, useSelector } from "react-redux";
import { resetUpdateState } from "../../Redux/Slices/AdminSlice/GoalManagmentSlice";

function CreateGoal() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isHidden: false,
    image: null,
  });
  const dispatch = useDispatch();
  const [createGoal, addResult] = useAddGoalMutation();
  const [updateGoal, updateResult] = useUpdateGoalMutation();

  const updateState = useSelector((state) => {
    return state.adminGoalManagmentStore.updateState;
  });
  useEffect(() => {
    if (updateState.selectedGoal !== undefined) {
      setFormData((prevState) => {
        return {
          ...prevState,
          id: updateState.selectedGoal.id,
          title: updateState.selectedGoal.title,
          description: updateState.selectedGoal.description,
          isHidden: updateState.selectedGoal.isHidden,
        };
      });
    } else {
      setFormData({
        title: "",
        description: "",
        isHidden: false,
        image: null,
      });
    }
  }, [updateState]);
  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    // Handle different input types
    const inputValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can submit the formData to your API for creating a goal
    const formDataToSend = new FormData();
    formDataToSend.append("Title", formData.title);
    formDataToSend.append("Description", formData.description);
    formDataToSend.append("IsHidden", formData.isHidden);
    formDataToSend.append("Image", formData.image);
    if (updateState.isUpdatingMode) {
      const goal = {
        id: updateState.selectedGoal.id,
        formData: formDataToSend,
      };
      updateGoal(goal);
      dispatch(resetUpdateState());
    } else {
      createGoal(formDataToSend);
    }
    // Reset the form after submission
    setFormData({
      title: "",
      description: "",
      isHidden: false,
      image: null,
    });
  };

  return addResult.isLoading || updateResult.isLoading ? (
    <div className="loading-container">
      <div className="loading"></div>
      <p>Loading...</p>
    </div>
  ) : (
    <div className="container mt-4">
      <h2>{updateState.isUpdatingMode ? "Update" : "Create"} Goal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="isHidden"
            name="isHidden"
            checked={formData.isHidden}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="isHidden">
            Is Hidden
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-${
            updateState.isUpdatingMode ? "warning" : "primary"
          }`}
        >
          {updateState.isUpdatingMode ? "Update" : "Create"} Goal
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
      </form>
    </div>
  );
}

export default CreateGoal;
