import { useEffect, useState } from 'react';
import JoblyApi from '../JoblyAPI';
import CompanySearchForm from './CompanySearchForm'
import CompanyCard from './CompanyCard';


function Companies({user}) {
  const [companies, setCompanies] = useState([]);

  // useEffect, calls searchCompanies
  // updates on initial load of page

  useEffect(function showCompaniesOnLoad() {
    searchCompanies();
  }, []);
  
  async function searchCompanies(name={}) {
    let currCompanies = await JoblyApi.getCompanies(name);
    setCompanies(currCompanies);
  }
  
  return (
    <div className="companies">
      <CompanySearchForm searchCompanies={searchCompanies} />
      { companies.map(c => ( <CompanyCard company={c} /> )) }
    </div>
  )
}

export default Companies;