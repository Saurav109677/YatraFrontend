import { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import MemberForm from "./MemberForm";
import Wait from "./Wait";
import { memList } from "../db/memberList";

export default (props) => {
  let history = useHistory();
  const userTemplate = {
    name: "",
    age: "",
    gender: "",
    contact: "",
    address: ""
  };
  const [formData, setFormData] = useState([userTemplate]);
  const [wait, setWait] = useState(false);

  const addForm = () => {
    setFormData([...formData, userTemplate]);
  };

  const onChange = (e, index) => {
    let updatedForm = formData.map((data, i) =>
      i === index
        ? Object.assign({ ...data, [e.target.name]: e.target.value })
        : data
    );

    setFormData(updatedForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let finalData = {
      yatraId: "",
      personId: "", //signup person id
      dependents: formData
    };
    console.log("final data", finalData);
    //api call
    memList.push(formData);
    history.push({
      pathname: "/yatrareg",
      state: {}
    });

    // history.goForward();
  };

  const deleteForm = (e, index) => {
    e.preventDefault();

    let filteredForm = [...formData];
    console.log("del", filteredForm);
    filteredForm.splice(index, 1);
    setFormData(filteredForm);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          {formData.map((data, index) => (
            <div class="member container" key={index}>
              <button onClick={(e) => deleteForm(e, index)}>delete</button>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  name="name"
                  onChange={(e) => onChange(e, index)}
                  value={data.name}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Age</label>
                <input
                  type="number"
                  class="form-control"
                  name="age"
                  onChange={(e) => onChange(e, index)}
                  value={data.age}
                />
              </div>

              <label for="exampleInputPassword1">Gender</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => onChange(e, index)}
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
                  onChange={(e) => onChange(e, index)}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Female
                </label>
              </div>

              {/* contac */}
              <div class="form-group">
                <label for="exampleInputPassword1">Contact no.</label>
                <input
                  type="number"
                  name="contact"
                  class="form-control"
                  maxLength="10"
                  onChange={(e) => onChange(e, index)}
                  value={data.contact}
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Address</label>
                <textarea
                  class="form-control"
                  name="address"
                  rows="3"
                  onChange={(e) => onChange(e, index)}
                  value={data.address}
                ></textarea>
              </div>
            </div>
          ))}
          <button>Done</button>
        </form>
      </div>
      <button onClick={addForm}>add</button>
    </>
  );
};
