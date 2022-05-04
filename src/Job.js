function Job({ job }) {
  return (
    <div className="bg-dark my-3 d-flex p-3">
      <div className="text-start ">
        <h3>{job.title}</h3>
        {job.companyName && <h2>{job.companyName}</h2>}
        <p>Salary: {job.salary}</p>
        <p>Equity: {job.equity}</p>
      </div>
    </div>
  );
}

export default Job;
