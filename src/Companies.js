import { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import CompaniesList from "./CompaniesList";

/** Companies component handling page for Companies
 * 
 * state: jobs {companiesList, searchQuery, isLoading}
 * props: none
 */
function Companies() {
  const [companies, setCompanies] = useState({
    companiesList: [],
    searchQuery: {},
    isLoading: true,
  });

  useEffect(
    function getCompanies() {
      async function fetchCompaniesFromAPI() {
        const companiesResp = await JoblyApi.getCompanies(
          companies.searchQuery
        );
        setCompanies((prevComp) => ({
          ...prevComp,
          companiesList: [...companiesResp],
          isLoading: false,
        }));
      }
      if (companies.isLoading) fetchCompaniesFromAPI();
    },
    [companies]
  );

  function handleSearch(queries) {
    setCompanies((prevComp) => ({
      ...prevComp,
      searchQuery: { ...queries },
      isLoading: true,
    }));
  }

  // if (companies.isLoading) return <div>....Loading</div>

  return (
    <div>
      <SearchForm searchFor={"name"} handleSearch={handleSearch} />
      <CompaniesList companies={companies.companiesList} />
    </div>
  );
}

export default Companies;
