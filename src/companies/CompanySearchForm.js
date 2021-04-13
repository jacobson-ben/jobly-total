import { useState } from 'react';

function CompanySearchForm({searchCompanies}) {
  const [formData, setFormData] = useState('');

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData( fData => ({ ...fData, [name]: value }));
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    searchCompanies({ ...formData });
    setFormData('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input
        name="name"
        placeholder="Enter search term..."
        value={formData.name}
        onChange={handleChange}
      />
      <button> Submit </button>
    </form>
    </div>
  )
}

export default CompanySearchForm;