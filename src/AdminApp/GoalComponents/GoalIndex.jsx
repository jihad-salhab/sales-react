import React from "react";
import GoalList from "./GoalList";
import CreateGoal from "./CreateGoal";

function GoalIndex() {
  return (
    <div>
      <CreateGoal></CreateGoal>
      <GoalList></GoalList>
    </div>
  );
}

export default GoalIndex;
