import React, { useState } from 'react';
import './App.css'

const App: React.FC = () => {
  const [ageInYears, setAgeInYears] = useState<number | ''>('');
  const [ageInDays, setAgeInDays] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 0) {
      setAgeInYears(value);
    }
  };

  const calculateAgeInDays = () => {
    if (ageInYears !== '') {
      setAgeInDays(ageInYears * 365);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
        <label>
          Age in Years:
          <input type="number" value={ageInYears} onChange={handleChange} />
        </label>
        <button onClick={calculateAgeInDays}>Calculate</button>
      </div>
      {ageInDays !== null && (
        <div>
          <h2>Age in Days: {ageInDays}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
