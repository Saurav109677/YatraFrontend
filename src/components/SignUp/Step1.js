import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import SignUp from "./SignUp";

export default (props) => {
  const [formData, setFormData] = useState({ email: "fromGoogle@gmail.com" });

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("final", formData);
    //api call to save the object
    // {
    //   firstName: "krsna"
    //     email: "krsna@gmail.com"
    //     gender: "Male"
    //     contact: "32432406"
    //     facilitator: "radhe"
    // }
  };
  const handleForm = (e) => {
    // console.log(formData);

    switch (e.target.id) {
      case "name":
        setFormData({
          ...formData,
          firstName: e.target.value
        });
        break;
      case "gender":
        setFormData({ ...formData, gender: e.target.value });
        break;
      case "contact":
        setFormData({ ...formData, contact: e.target.value });
        break;
      case "fac":
        setFormData({ ...formData, facilitator: e.target.value });
        break;

      default:
        break;
    }
  };

  const formTemplate = (
    <form onSubmit={onFormSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          onChange={handleForm}
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          value="fromGoogle@gmail.com"
          disabled
        />
      </div>
      <label for="exampleInputPassword1">Gender</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          value="Male"
          onChange={handleForm}
          id="gender"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Male
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          value="Female"
          onChange={handleForm}
          id="gender"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Female
        </label>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Contact no.</label>
        <input
          type="number"
          id="contact"
          class="form-control"
          maxLength="10"
          onChange={handleForm}
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Facilitator</label>
        <input
          type="text"
          class="form-control"
          id="fac"
          onChange={handleForm}
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );

  return <>{formTemplate}</>;
};
