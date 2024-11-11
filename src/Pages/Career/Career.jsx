import React, { useState } from 'react';
import './career.css';

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="careers">
      <div className="careers__header">
        <div className="careers__overlay"></div>
        <div className="careers__heading">
          <h1 className="careers__title">Careers</h1>
          <p className="careers__subtitle">Interested in joining the team</p>
        </div>
        <div className="careers__search">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery}
            onChange={handleSearchChange}
            className="careers__searchInput"
          />
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
