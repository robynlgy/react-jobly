/** Presentational component for each job in job list
 * props: job
 */
function Job({ job }) {
  return (
    <div className="JobCard bg-light my-3 d-flex p-3">
      <div className=" text-start ">
        <h3>{job.title}</h3>
        {job.companyName && <h5>{job.companyName}</h5>}
        <p className="mt-3 mb-1">Salary: ${job.salary && job.salary.toLocaleString("en")}</p>
        <p>Equity: {job.equity}</p>
      </div>
    </div>
  );
}

export default Job;
