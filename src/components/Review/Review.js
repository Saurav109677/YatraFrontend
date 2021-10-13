import { useState } from "react";
import { useLocation } from "react-router-dom";
import AccForm from "../Accomodation/AccForm";
import MemberForm from "../AddMember/MemberForm";

export default () => {
  const location = useLocation();
  const { dependents, accomodation } = location.state.reviewDetails;
  // const disableObj = dependents.map((dep) => ({ ...dep, disabled: "true" }));
  const [editDisable, setEditDisable] = useState(true);
  const calculateBill = () => {
    const regCharge = 1000;
    const noOfPersons = dependents.length;
    const roomChargePerDay = accomodation.roomType;
    const noOfRoom = accomodation.countRoom;
    const days = accomodation.days;

    const acc = roomChargePerDay * noOfRoom * days;
    const reg = regCharge * noOfPersons;
    // console.log("payment", editDependents);
    return reg + acc;
  };

  const editMemDetails = () => {
    setEditDisable(!editDisable);
  };

  return (
    <div>
      <h1>Review page</h1>
      <div class="mem-details">
        <button onClick={editMemDetails}>Edit</button>
        <MemberForm
          dependents={dependents}
          isDisable={editDisable}
        ></MemberForm>
      </div>
      <div class="accomodation-details">
        <button>Edit</button>
        <AccForm accomodation={accomodation}></AccForm>
      </div>
      <div class="payment">Due Amount:{calculateBill()}</div>
      <button>Go back</button>
      <button>Proceed for payment</button>
    </div>
  );
};
