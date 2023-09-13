import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserIndex from "./UserComponents/UserIndex";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import GoalIndex from "./GoalComponents/GoalIndex";

function AdminIndex() {
  const [isAdmin] = useState(true);
  return (
    <div>
      {isAdmin ? (
        <div>
          <Header />
          <div style={{ minHeight: "850px" }}>
            <Routes>
              <Route path="/UserManagment" element={<UserIndex />}></Route>
              <Route path="/GoalManagment" element={<GoalIndex />}></Route>
            </Routes>
          </div>

          <Footer />
        </div>
      ) : (
        <div>Please LogIn</div>
      )}
    </div>
  );
}

export default AdminIndex;
