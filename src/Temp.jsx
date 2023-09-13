import React from "react";
import { useNavigate } from "react-router-dom";

function Temp() {
  const navigate = useNavigate();
  return (
    <div>
      Temp
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/sales-react/AdminDashboard");
          }}
        >
          Admin Dashboard
        </button>
      </div>
    </div>
  );
}

export default Temp;
