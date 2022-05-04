import { Link } from "react-router-dom";

/** Presentational Component for each list item in list of Companies, 
 * linking to their detail page
 * props: company
 */
function CompanyCard({ company }) {
    return (
        <Link to={`/companies/${company.handle}`}>
            <div className="bg-dark my-3 d-flex p-3">
                <div className="text-start ">
                    <h2>{company.name}</h2>
                    <p>{company.description}</p>
                </div>

                {company.logoUrl && <img className="compLogo" src={company.logoUrl} />}
            </div>
        </Link>
    )
}

export default CompanyCard