
import { useState } from "react";
import Weather from "./Weather";


const Display = ({
  name,
  continent,
  capital,
  area,
  population,
  languages,
  flag,
  number
}) => {
  
  const [show, setShow] = useState(false)

  return (
    <div className="display">
      <h1>{name} <button className='button' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button></h1> 
      {show  &&
      <div className="div-show">
        <img className="img-border" alt="FLAG" src={flag} />
        <p><strong>Continente:</strong> {continent}</p>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Area:</strong> {area}m²</p>
        <p><strong>População:</strong> {population}</p>
        <strong>Linguas: </strong>
        <ul>
          {languages.map((language, i) => (
            <li key={i}>{Object.values(language)}</li>
          ))}
        </ul>
        <div>
          <Weather key={number} cityName={capital}  />
        </div>
      </div>
      }
    </div>
  );
};


const DisplayOne = ({
  name,
  continent,
  capital,
  area,
  population,
  languages,
  flag,
  number
}) => {
  


  return (
    <div className="display">
      <h1>{name}</h1> 
      <div>
        <img alt="FLAG" src={flag} />
        <p><strong>Continente:</strong> {continent}</p>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Area:</strong> {area}m²</p>
        <p><strong>População:</strong> {population}</p>
        <strong>Linguas: </strong>
        <ul>
          {languages.map((language, i) => (
            <li key={i}>{Object.values(language)}</li>
          ))}
        </ul>
      </div>
      <Weather key={number} cityName={capital} />
    </div>
  );
};

export {DisplayOne};

export default Display;
