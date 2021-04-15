import { useEffect, useState } from 'react';
import JoblyApi from '../JoblyAPI';
import SearchForm from '../common/SearchForm'
import CompanyCard from './CompanyCard';

function Companies() {
  const [companies, setCompanies] = useState([]);
  
  useEffect(function showCompaniesOnLoad() {
    searchCompanies();
  }, []);
  
  async function searchCompanies(name={}) {
    let currCompanies = await JoblyApi.getCompanies(name);
    setCompanies(currCompanies);
  }
  
  return (
    <div className="companies">
      <SearchForm search={searchCompanies} name={"name"} />
      { companies.map(c => ( <CompanyCard key={c.handle} company={c} /> )) }
    </div>
  )
}

export default Companies;