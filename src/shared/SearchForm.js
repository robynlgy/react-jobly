import { useCallback, useState } from "react";
import _debounce from 'lodash/debounce'

/** Form component used for searching jobs/companies
 * props: handleSearch function
 * state: formData
 */
function SearchForm({ handleSearch }) {
  const [formData, setFormData] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(_debounce(handleDebounceFn, 1000),[])

  function handleDebounceFn(formData){
    handleSearch(formData)
  }
  /** Update form input. */
  function handleChange(evt) {
    setFormData(evt.target.value);
    debounceFn(evt.target.value);
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
        name="search"
        className="form-control form-search-input"
        placeholder="Enter search term.."
        onChange={handleChange}
        value={formData}
        aria-label="search-form"
      />
    </div>
  );

  return (
    <form className="SearchForm my-3 d-flex d-inline justify-content-center" onSubmit={handleSubmit}>
      {formInputsHTML}
      <button className="SearchForm-Btn btn-outline-dark btn ms-3 py-1 btn-med">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
