import "./style.css";
// import "./home-internal.js";
// import ScriptTag from "react-script-tag";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

// const signin = () => {
//   return (
//     <GoogleLogin
//       clientId="982316181452-h2um7ud51f9e70s6b3obb6bo003bugjs.apps.googleusercontent.com"
//       buttonText="Login"
//       onSuccess={responseGoogle}
//       onFailure={responseGoogle}
//       cookiePolicy={"single_host_origin"}
//     />
//   );
// };

export default () => {
  let history = useHistory();
  const responseGoogle = (response) => {
    let { email, name, googleId, imageUrl } = response.profileObj;
    let personDetail = {
      email,
      name,
      googleId,
      imageUrl
    };
    // console.log(personDetail);
    history.push({
      pathname: "/signUp",
      state: {
        personDetail: { ...personDetail }
      }
    });
    // history.push("/signUp");
    // console.log("forwared");
  };
  return (
    <>
      {/* <script type="text/javascript" src="./home-internal.js"></script> */}
      {/* start showcase */}
      {/* <ScriptTag isHydrating={true} type="text/javascript" src="../" /> */}
      <div className="showcase" id="home">
        <div className="navLinks ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>About</li>
          <li>
            <a href="#up-events"> Schedule</a>
          </li>

          <li id="register">
            <a href="#steps-content">Registration</a>
          </li>

          <li>Gallery</li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
          <li>
            {/* <button id="signin-btn" onClick={signin}>
              Signin
            </button> */}
            <GoogleLogin
              className="signin-btn"
              clientId="982316181452-h2um7ud51f9e70s6b3obb6bo003bugjs.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </li>
        </div>
        <div className="showcase-content">
          <div className="showcase-heading">
            <h1>GET ENERGIZED.</h1>
            <div style={{ display: "flex" }}>
              <h1>AT</h1>&nbsp;<h1 className="whom"></h1>
            </div>
          </div>
          <div className="showcase-button">
            <button id="bookNow">Book Now</button>
            <button id="show">Show Me More</button>
          </div>
        </div>
      </div>
    </>
  );
};
