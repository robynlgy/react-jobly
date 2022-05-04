import Job from "./Job"

/** Presentational component that creates list of Job components
 *  props: jobs
 */
function JobsList({ jobs }) {
  return (
    <div className="JobsList container">
      {jobs.map(job => <Job key={job.id} job={job} />)}
    </div>
  )
}

export default JobsList