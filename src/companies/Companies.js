import { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchForm from "../shared/SearchForm";
import CompaniesList from "./CompaniesList";
import LoadingSpinner from "../shared/LoadingSpinner";

/** Companies component handling page for Companies
 *
 * state: jobs {companiesList, searchQuery, isLoading}
 * props: none
 */
function Companies() {
  const [companies, setCompanies] = useState({
    companiesList: null,
    isLoading: true,
  });
  const [searchQuery,setSearchQuery]= useState(null)

  useEffect(
    () => {
      async function fetchCompaniesFromAPI() {
        const companiesResp = await JoblyApi.getCompanies(searchQuery);
        setCompanies({
          companiesList : companiesResp,
          isLoading: false
        });
      }
      fetchCompaniesFromAPI()
    },
    [ searchQuery ]
  );

  function handleSearch(query) {
    if (!query) query = null
    setSearchQuery(query)
  }

  if (companies.isLoading) return < LoadingSpinner />

  return (
    <div className="pb-5">
      <SearchForm handleSearch={handleSearch} />
      <CompaniesList companies={companies.companiesList} />
    </div>
  );
}

export default Companies;
