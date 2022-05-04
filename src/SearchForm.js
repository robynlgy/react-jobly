import { useState } from "react";

function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState({ name: "" });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  /** Call parent function. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
  }

  const formInputsHTML = (
    <div className="mb-3">
      <input
        id="search-form"
        name="name"
        className="form-control"
        placeholder="Enter search term.."
        onChange={handleChange}
        value={formData.name}
        aria-label="search-form"
      />
    </div>
  );

  return (
    <form className="SearchForm my-3 d-flex justify-content-center" onSubmit={handleSubmit}>
      {formInputsHTML}
      <button className="SearchForm-Btn btn-primary btn ms-3 py-1 btn-sm">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
