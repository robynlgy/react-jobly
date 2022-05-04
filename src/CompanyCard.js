import { Link } from "react-router-dom";

function CompanyCard({ company }) {
    return (
        <Link to={`companies/${company.handle}`}>
            <div className="bg-dark my-3 d-flex">
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