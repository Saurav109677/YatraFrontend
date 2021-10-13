import { useEffect, useState } from "react";
import MemberForm from "./MemberForm";
import Wait from "./Wait";

export default (props) => {
  const [formData, setFormData] = useState([{ who: "person1", name: "" }]);
  const [memberForm, setMemberForm] = useState([]);
  const [wait, setWait] = useState(false);
  // console.log("fromData", formData);
  // let finalObj = [];
  // console.log(p);

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
    console.log("handle", formData);
    let personNo = e.target.attributes.getNamedItem("personno").value;
    let who = "person" + personNo;
    console.log("who", who);
    // let value = e.target.value;
    switch (e.target.id) {
      case "name": {
        let obj = formData.map((p1) => {
          console.log("inside", p1);
          // if (p1.who == who) {
          //   console.log("matched", p1);
          //   return { ...p1, name: e.target.value };
          // } else return p1;
          // console.log(p1);
          // return p1;
          let returnValue = { ...p1 };
          if (p1.who === who) {
            console.log("matched");
            returnValue.name = e.target.value;
          }
          return returnValue;
        });
        // console.log("pf", finalObj);
        setFormData(obj);
        console.log("name", formData);
        console.log("obj", obj);
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    setWait(false);
  }, [formData]);

  const addForm = (e) => {
    e.preventDefault();

    let obj = [...formData, { who: `person${formData.length + 1}`, name: "" }];
    setFormData(obj);
    setWait(true);
    setMemberForm([
      ...memberForm,
      <MemberForm
        mem_count={memberForm.length + 1}
        handleForm={(e) => handleForm(e)}
      ></MemberForm>
    ]);

    console.log(formData);
  };

  const delForm = (e) => {
    e.preventDefault();
  };

  const getForm = () => {
    return (
      <form onSubmit={onFormSubmit}>
        {memberForm}
        <div class="add-del">
          <button onClick={addForm}>Add Person</button>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };
  return (
    <>
      {/* {formData.length} */}
      {!wait ? getForm() : <Wait></Wait>}
    </>
  );
};
