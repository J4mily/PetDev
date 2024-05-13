import React, { useState } from "react";
import styles from "./category_button.module.css";
import SpeciesListComponent from "./species_list";
import { CSSTransition } from 'react-transition-group';

export const CategoryButton = ({ category_image_link, category_name, speciesList }) => {

    const [menuSpecies, setMenuSpecies] = useState(false);

    const toggleMenu = () => {
        setMenuSpecies(!menuSpecies);
    };

    return (
        <div className={styles.container}>
            <div className={styles.button} onClick={toggleMenu}>
                <img className={styles.image} src={category_image_link} alt="Imagem Categoria" />
                <p className={styles.name}>{category_name}</p>
            </div>
            <CSSTransition
                in={menuSpecies}
                timeout={300}
                classNames={{
                    enter: styles.slideEnter,
                    enterActive: styles.slideEnterActive,
                    exit: styles.slideExit,
                    exitActive: styles.slideExitActive,
                }}
                unmountOnExit
            >
                <div className={styles.speciesContainer}>
                    <SpeciesListComponent speciesList={speciesList} />
                </div>
            </CSSTransition>
        </div>
    );
}

export default CategoryButton;
