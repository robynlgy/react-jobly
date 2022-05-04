import CompanyCard from "./CompanyCard";

/** Presentation Component for creating list of CompanyCards
 * props: companies
 */
function CompaniesList({ companies }) {
  return (
    <div className="CompaniesList container">
      {companies.map(company => <CompanyCard key={company.handle} company={company} />)}
    </div>
  )
}

export default CompaniesList;
