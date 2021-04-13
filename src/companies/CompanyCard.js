import { Link } from 'react-router-dom';

function CompanyCard({company}) {

  const {handle, description, logoUrl, name} = company
  return (
    <Link to={`companies/${handle}`}> 
      <div> 
        <h2> {name} </h2>
        <img src={logoUrl} alt={handle}/>
        <p> {description} </p>
      </div>
    </Link>
  );
}

export default CompanyCard;