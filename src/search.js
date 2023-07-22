import "./styles.css";

export default function Search() {
  return (
    <form id="search-form" className="mb-4">
      <div className="row">
        <div className="col-8">
          <input
            type="search"
            placeholder="Type a cityyy..."
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="search"
            className="form-control btn btn-primary shadow-sm"
          />
        </div>
        <div className="col-2">
          <input
            type="button"
            value="current"
            className="form-control btn btn-primary shadow-sm"
            id="current-location-button"
          />
        </div>
      </div>
    </form>
  );
}
