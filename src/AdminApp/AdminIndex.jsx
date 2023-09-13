import { Navigate, Route, Routes } from "react-router-dom";
import UserIndex from "./UserComponents/UserIndex";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import GoalIndex from "./GoalComponents/GoalIndex";
import { useSelector } from "react-redux";
import { UserType } from "../Shared/Enum/UserType";
import GoalDetailIndex from "./GoalComponents/GoalDetailIndex";

function AdminIndex() {
  const userState = useSelector(
    (state) => state.AppStateStore.userState.userType
  );
  return (
    <div>
      {UserType[userState] === "Admin" ? (
        <div>
          <Header />
          <div style={{ minHeight: "850px" }}>
            <Routes>
              <Route path="/UserManagment" element={<UserIndex />}></Route>
              <Route path="/GoalManagment">
                <Route path="" element={<GoalIndex />}></Route>
                <Route
                  path="Details/:goalId"
                  element={<GoalDetailIndex />}
                ></Route>
              </Route>
            </Routes>
          </div>

          <Footer />
        </div>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </div>
  );
}

export default AdminIndex;
