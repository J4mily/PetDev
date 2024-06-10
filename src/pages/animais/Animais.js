import CategoryButton from "../../componentes/categories_menu/category_button"
import styles from "./Animais.module.css"
import categoriesData from "../../jsObjects/categoriesDataObj"

export const Animais = () =>{

    const dogs = categoriesData.dogs
    const cats = categoriesData.cats
    const birds = categoriesData.birds
    const monkeys = categoriesData.monkeys
    const fish = categoriesData.fish
    const snakes = categoriesData.snakes
    const rodents = categoriesData.rodents
    

    return(
        <section >
            <h1>Animais</h1>
                <div className={styles.mainConteiner}>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={dogs.imgCategory}
                        category_name={dogs.nameCategory}
                        speciesList={dogs.dogSpecies}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={cats.imgCategory}
                        category_name={cats.nameCategory}
                        speciesList={cats.catSpecies}/>
                        </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={birds.imgCategory}
                        category_name={birds.nameCategory}
                        speciesList={birds.birdSpecies}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={monkeys.imgCategory}
                        category_name={monkeys.nameCategory}
                        speciesList={monkeys.monkeySpecies}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={fish.imgCategory}
                        category_name={fish.nameCategory}
                        speciesList={fish.fishSpecies}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={snakes.imgCategory}
                        category_name={snakes.nameCategory}
                        speciesList={snakes.snakeSpecies}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link={rodents.imgCategory}
                        category_name={rodents.nameCategory}
                        speciesList={rodents.rodentSpecies}/>
                    </div>
            </div>
        </section>

    )
}
