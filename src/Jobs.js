import { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobsList from "./JobsList";

function Jobs() {
  const [jobs, setJobs] = useState({
    jobsList: [],
    searchQuery: {},
    isLoading: true,
  });

  useEffect(
    function getJobs() {
      async function fetchJobsFromAPI() {
        const jobsResp = await JoblyApi.getJobs(
          jobs.searchQuery
        );
        setJobs((prevJobs) => ({
          ...prevJobs,
          jobsList: [...jobsResp],
          isLoading: false,
        }));
      }
      if (jobs.isLoading) fetchJobsFromAPI();
    },
    [jobs]
  );

  function handleSearch(queries) {
    setJobs((prevJobs) => ({
      ...prevJobs,
      searchQuery: { ...queries },
      isLoading: true,
    }));
  }

  if (jobs.isLoading) return <div>....Loading</div>

  return (
    <div>
      <SearchForm handleSearch={handleSearch} />
      <JobsList jobs={jobs.jobsList} />
    </div>
  );
}

export default Jobs;
