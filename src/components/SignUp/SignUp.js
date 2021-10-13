import { useLocation } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Header from "./Header";
import Step1 from "./Step1";
import Step2 from "./Step2";
import "./styles.css";

export default (props) => {
  const { gSignedUser, setGSignedUser } = props;
  const location = useLocation();
  const personDetail = location.state.personDetail;
  console.log("pesonDetail", personDetail);

  const isUserPresent = () => {
    const userFound = gSignedUser.filter(
      (data) => data.googleId === personDetail.googleId
    );
    console.log("userFound", userFound);

    if (userFound.length) return true;
    else return false;
  };

  return (
    <>
      <Header></Header>
      {isUserPresent() ? <Dashboard></Dashboard> : <Step1></Step1>}
      {/* <Step2></Step2>` */}
    </>
  );
};
