import React, { useState } from "react";
import styles from "./category_button.module.css";
import SpeciesListComponent from "./species_list";

function CategoryButton({ category_image_link, category_name, speciesList}) {

    const [menuSpecies, setMenuSpecies] = useState(false);

    const OpenClose = () => {
        const state = !menuSpecies
        setMenuSpecies(state);
      };


    // Adicionar um objeto contendo chave e valor para cada nova espécie seguindo o padrão
    // name, img_link, href (link da página da espécie)


    return (
        <div className={styles.container}>
            <p>{category_name}</p>
            <img src={category_image_link} alt="Imagem Categoria" onClick={OpenClose} />
            {menuSpecies && 
            <div className={styles.speciesContainer}>
                <SpeciesListComponent speciesList={speciesList}/> 
            </div>}
        </div>
    );
}


export default CategoryButton;
