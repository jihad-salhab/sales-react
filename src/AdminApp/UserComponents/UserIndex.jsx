import React from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function UserIndex() {
  return (
    <div>
      <CreateUser></CreateUser>
      <UserList></UserList>
    </div>
  );
}

export default UserIndex;
