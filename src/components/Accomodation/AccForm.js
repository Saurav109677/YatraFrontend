export default () => {
  const onFormSubmit = () => {};

  const handleForm = () => {};
  return (
    <div>
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
          Submit
        </button>
      </form>
    </div>
  );
};
