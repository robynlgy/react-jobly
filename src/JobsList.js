import Job from "./Job"

function JobsList({jobs}){
  return (
    <div className="JobsList container">
      {jobs.map(job => <Job key={job.id} job={job}/>)}
    </div>
  )
}

export default JobsList