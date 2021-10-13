import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import SignUp from "./components/SignUp/SignUp";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard/Dashboard";
import AddMember from "./components/AddMember/AddMember";
import Accomodation from "./components/Accomodation/Accomodation";
import Review from "./components/Review/Review";
// import MyMembers from "./components/MyMembers/MyMembers";
import YatraReg from "./components/YatraRegistraion/YatraReg";
import { useState } from "react";
import { apiSignedUser } from "./components/db/apiSignedUser";

export default function App() {
  const [gSignedUser, setGSignedUser] = useState(apiSignedUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Home></Home>} />
          <Route
            path="/signUp"
            exact
            component={() => (
              <SignUp
                gSignedUser={gSignedUser}
                setGSignedUser={setGSignedUser}
              ></SignUp>
            )}
          />
          <Route
            path="/dashboard"
            exact
            component={() => <Dashboard></Dashboard>}
          />
          <Route
            path="/addmem"
            exact
            component={() => <AddMember></AddMember>}
          />
          <Route
            path="/accomodation"
            exact
            component={() => <Accomodation></Accomodation>}
          />
          <Route path="/review" exact component={() => <Review></Review>} />
          <Route
            path="/yatrareg"
            exact
            component={() => <YatraReg></YatraReg>}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
