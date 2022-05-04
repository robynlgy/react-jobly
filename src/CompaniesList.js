import CompanyCard from "./CompanyCard";

function CompaniesList({companies}) {
  return (
    <div className="CompaniesList container">
      {companies.map(company => <CompanyCard key={company.handle} company={company}/>)}
    </div>
  )
}

export default CompaniesList;
