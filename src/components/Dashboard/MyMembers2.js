import React, { useState } from "react";
import MemberForm from "./MemberForm";

export default class MyMember2 extends React.Component {
  constructor() {
    super();
    this.state = {
      formData: [],
      memberForm: []
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log("final", this.state.formData);
  };

  addForm = (e) => {
    e.preventDefault();

    let obj = { who: `person${this.state.formData.length + 1}`, name: "" };

    this.state.formData.push(obj);

    // setMemberForm([
    //   ...memberForm,
    //   <MemberForm
    //     mem_count={memberForm.length + 1}
    //     handleForm={(e) => handleForm(e)}
    //   ></MemberForm>
    // ]);
    // this.state.memberForm.push(
    //   "<MemberForm mem_count={this.state.memberForm.length + 1}></MemberForm>"
    // )

    console.log("pushed", this.state.formData);
    console.log("pushedForm", this.state.memberForm);
  };

  // createForm = () => {
  //   return this.state.formData.map(() =>(
  //     <MemberForm mem_count={this.state.memberForm.length + 1}></MemberForm>
  //   ));
  // };

  render() {
    return (
      <>
        form2 component
        {console.log("d", this.state.formData)}
        <form onSubmit={this.onFormSubmit}>
          {this.state.formData.map((index) => {
            return (
              <div class="member container">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id={index}
                    aria-describedby="emailHelp"
                    // onChange={handleForm}
                    // personno={newFormId}
                    p="1"
                    name="name"
                    required
                  />
                </div>
              </div>
            );
          })}
          <div class="add-del">
            <button onClick={this.addForm}>Add Person</button>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
