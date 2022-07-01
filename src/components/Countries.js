import { useEffect, useState } from 'react';

export default function Countries() {
  // local state
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState('');

  // methods
  const getCountries = async () => {
    const URL = 'https://restcountries.com/v3.1/all';
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        console.log(jsonRes);
        setCountries(jsonRes.slice(0, 10));
      });
  };

  const handleCountryInput = (e) => {
    setCountryInput(e.target.value);
  };

  const addCountry = () => {
    setCountries((current) => {
      return [...current, { name: { official: countryInput } }];
    });
  };

  // lifecycle
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <input value={countryInput} onChange={handleCountryInput} />
      <button onClick={addCountry}>Add</button>

      <p>countries:</p>

      <ol>
        {countries.map((item) => {
          return (
            <li key={item.name.official}>{item.name.official}</li>
          );
        })}
      </ol>
    </div>
  );
}
