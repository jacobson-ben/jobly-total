import { useState } from 'react';

function SearchForm({search, name}) {
  const initialState = {[name]: ""};
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData( fData => ({ ...fData, [name]: value }));
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    search({ ...formData });
    setFormData(initialState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input
        name={name}
        placeholder="Enter search term..."
        value={formData[name]}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
    </div>
  )
}

export default SearchForm;