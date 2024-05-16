import React from "react";
import { Link } from "react-router-dom";

function SpeciesListComponent({ speciesList }) {
    
  return (
    <div>
      {speciesList.map((species, index) => (
        <Link to={"/Animais"+species.link_to}> 
        <div key={index}>
          <img src={species.img} alt={species.name} />
          <p>{species.name}</p>
          </div>
          </ Link>
        
      ))}
    </div>
  );
}

export default SpeciesListComponent;