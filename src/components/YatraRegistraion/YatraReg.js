import { useHistory } from "react-router-dom";
import { memList } from "../db/memberList";

export default () => {
  const history = useHistory();
  const dependents = memList[0].dependents;
  // console.log("myMem", myMem);

  const onNext = () => {
    history.push({
      path: "/accomodation",
      state: {
        regDependents: []
      }
    });
  };

  return (
    <div class="wrapper">
      <div class="card mb-3">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Mayapur Yatra</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">HDG AC Bhaktivedant Swami</small>
          </p>
        </div>
      </div>
      Select members : -
      {dependents.map((d) => (
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            {d.name}|{d.age}|{d.address}
          </label>
        </div>
      ))}
      {/* .................................... */}
      <button onClick={() => history.push("/addmem")}>Add New Member</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};
