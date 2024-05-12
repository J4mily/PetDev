import React from "react";

function SpeciesListComponent({ speciesList }) {
    
  return (
    <div>
      {speciesList.map((species, index) => (
        <a href={species.href}>
        <div key={index}>
          <img src={species.img_link} alt={species.name} />
          <p>{species.name}</p>
          </div>
          </a>
        
      ))}
    </div>
  );
}

export default SpeciesListComponent;