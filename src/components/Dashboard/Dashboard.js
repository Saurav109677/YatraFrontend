import { useState } from "react";
import AddMember from "../AddMember/AddMember";
import DashboardHome from "./DashboardHome";
import MyProfile from "./MyProfile";
// import MyMembers from "./MyMembers3";
import "./style.css";
import YatraDashboard from "./YatraDashboard";
// import Wait from "./Wait";

export default () => {
  const [option, setOption] = useState("home");

  const getTemplate = () => {
    if (option === "prof") return <MyProfile></MyProfile>;
    else if (option === "register") return <YatraDashboard></YatraDashboard>;
    else return <DashboardHome></DashboardHome>;
  };

  return (
    <>
      <div class="sidenav">
        <div class="login-main-text">
          <h2>Dashboard</h2>
          <p>UserName</p>
          <div class="options">
            <div class="prof" onClick={() => setOption("home")}>
              Home
            </div>
            <div class="prof" onClick={() => setOption("prof")}>
              My Profile
            </div>
            <div class="register" onClick={() => setOption("register")}>
              Register
            </div>
            {/* <div class="addMem" onClick={() => setOption("addMem")}>
              Add Member
            </div> */}
          </div>
        </div>
      </div>

      <div class="main">{getTemplate()}</div>
    </>
  );
};
