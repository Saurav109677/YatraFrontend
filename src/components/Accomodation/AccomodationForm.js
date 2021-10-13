import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export default (props) => {
  const location = useLocation();
  const history = useHistory();
  const memDetails = location.state.memberDetails;

  const accDummy = {
    roomType: "",
    days: "",
    countRoom: "",
    dateArrival: "",
    dateReturn: ""
  };
  const [formData, setFormData] = useState(accDummy);
  // console.log("fromData", formData);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const finalData = { ...memDetails, accomodation: { ...formData } };
    console.log("final", finalData);
    history.push({
      pathname: "/review",
      state: {
        reviewDetails: finalData
      }
    });
  };
  const handleForm = (e) => {
    let updatedForm = { ...formData, [e.target.name]: e.target.value };
    setFormData(updatedForm);
  };

  return (
    <div>
      <h1>Accomodation</h1>
      <h3>Total Persons:</h3>
      <h4>Pricing</h4>
      <form onSubmit={onFormSubmit}>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Room Type
            </label>
          </div>
          <select
            class="custom-select"
            id="inputGroupSelect01"
            name="roomType"
            onChange={handleForm}
          >
            <option selected>Choose...</option>
            <option value="1000">AC Room </option>
            <option value="800">Non AC</option>
            <option value="400">Dormatory</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              No. of Room
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="countRoom"
            onChange={handleForm}
          />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              No. of Days
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="days"
            onChange={handleForm}
          />
        </div>
        <div>
          <label for="birthday">Date of Arrival:</label>
          <input
            type="date"
            id="birthday"
            name="dateArrival"
            onChange={handleForm}
          />
        </div>
        <div>
          <label for="birthday">Returning on:</label>
          <input
            type="date"
            id="birthday"
            name="dateReturn"
            onChange={handleForm}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Next
        </button>
      </form>
    </div>
  );
};
