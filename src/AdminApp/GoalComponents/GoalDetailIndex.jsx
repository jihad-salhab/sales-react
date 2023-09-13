import React from "react";
import { useParams } from "react-router-dom";

function GoalDetailIndex() {
  const { goalId } = useParams();
  return <div>GoalDetailIndex of Goal Id {goalId}</div>;
}

export default GoalDetailIndex;
