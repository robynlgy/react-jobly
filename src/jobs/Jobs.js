import { useState, useEffect } from "react";
import JoblyApi from "../api";
import SearchForm from "../shared/SearchForm";
import JobsList from "./JobsList";
import LoadingSpinner from "../shared/LoadingSpinner";

/** Jobs component handling page for Jobs
 *
 * state: jobs {jobsList, searchQuery, isLoading}
 * props: none
 */
function Jobs() {
  const [jobs, setJobs] = useState({
    jobsList: null,
    isLoading: true,
  });
  const [searchQuery,setSearchQuery] = useState(undefined)

  useEffect(
    () => {
      async function fetchJobsFromAPI() {
        const jobsResp = await JoblyApi.getJobs(searchQuery);
        setJobs({
          jobsList: jobsResp,
          isLoading: false,
        });
      }
      fetchJobsFromAPI();
    },
    [ searchQuery ]
  );

  function handleSearch(query) {
    setSearchQuery(query)
  }

  if (jobs.isLoading) return < LoadingSpinner />

  return (
    <div className="pb-5">
      <SearchForm handleSearch={handleSearch} />
      <JobsList jobs={jobs.jobsList} />
    </div>
  );
}

export default Jobs;
