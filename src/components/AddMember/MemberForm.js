export default (props) => {
  let newFormId = props.mem_count;
  let handleForm = props.handleForm;
  let { dependents, isDisable } = props;
  return (
    <form>
      <div class="member container">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={handleForm}
            personno={newFormId}
            value={dependents[0].name}
            disabled={isDisable}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input
            type="number"
            class="form-control"
            id={`age${newFormId}`}
            // onChange={handleForm}
            value={dependents[0].age}
            disabled={isDisable}
          />
        </div>
        <label for="exampleInputPassword1">Gender</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            value="Male"
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
            // onChange={handleForm}
            id={`gender${newFormId}`}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Female
          </label>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contact no.</label>
          <input
            type="number"
            class="form-control"
            maxLength="10"
            value={dependents[0].contact}
            disabled={isDisable}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Address</label>
          <textarea
            class="form-control"
            value={dependents[0].address}
            rows="3"
            disabled={isDisable}
            // onChange={handleForm}
          ></textarea>
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};
