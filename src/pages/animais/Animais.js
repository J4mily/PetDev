import CategoryButton from "../../componentes/categories_menu/category_button"
import styles from "./Animais.module.css"

export const Animais = () =>{
    //Adicionar um objeto contendo chave e valor para cada nova espécie seguindo o padrão
    // name, img_link, href (link da página da espécie)
    const species_list = [
        {
        specie_id: 'siames',
        name: 'Siamês',
        img_link: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZLtu_HS-kKMEScauynlfNmxPmF4yL1_6kMNJxgb2xN7dA-f5MX0Ubd6HMKJ3Tp3F92vo_aX6qZ-_sNqVQ5xAyCftrrkxRklgQ=w1872-h923',
        href: '/Siames'
    },
    {
        specie_id: 'angora',
        name: 'Angorá',
        img_link: 'https://lh3.google.com/u/0/d/15snj5JPB2xzMEzIRBpd_hkS2_omujhyc=w1365-h911-iv2',
        href: '/Angora'
    },        
    {
        specie_id: 'bordercollie',
        name: 'Border Collie',
        img_link: 'https://lh3.google.com/u/0/d/1Ccei3lUis9fxrl8D9PVpz5AvsyoRAeI7=w1920-h911-iv2',
        href: '/BorderCollie'
    },
    {
        specie_id: 'pitbull',
        name: 'Pitbull',
        img_link: 'https://lh3.google.com/u/0/d/1KGCJ0v1_uvjnAW3sCXS9SiNqR8jwoKen=w1365-h911-iv2',
        href: '/Pitbull',
    }
]

    return(
        <section >
            <h1>Animais</h1>
                <div className={styles.mainConteiner}>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY3ZYWlX4VNsrimhapggQSnnewhuqkMSY0FjKNSUVs0dBYO0ug6WPxArQisu51ZmVV1RoP4JLG5-MpOx0orjNernmlS6xtM8X0=w1872-h923"
                        category_name="Gatos"
                        speciesList={species_list}
                        />
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY3ZYWlX4VNsrimhapggQSnnewhuqkMSY0FjKNSUVs0dBYO0ug6WPxArQisu51ZmVV1RoP4JLG5-MpOx0orjNernmlS6xtM8X0=w1872-h923"
                        category_name="Cachorros"
                        speciesList={species_list}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY3ZYWlX4VNsrimhapggQSnnewhuqkMSY0FjKNSUVs0dBYO0ug6WPxArQisu51ZmVV1RoP4JLG5-MpOx0orjNernmlS6xtM8X0=w1872-h923"
                        category_name="Cachorros"
                        speciesList={species_list}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY3ZYWlX4VNsrimhapggQSnnewhuqkMSY0FjKNSUVs0dBYO0ug6WPxArQisu51ZmVV1RoP4JLG5-MpOx0orjNernmlS6xtM8X0=w1872-h923"
                        category_name="Cachorros"
                        speciesList={species_list}/>
                    </div>
                    <div className={styles.category}>
                        <CategoryButton
                        category_image_link="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY3ZYWlX4VNsrimhapggQSnnewhuqkMSY0FjKNSUVs0dBYO0ug6WPxArQisu51ZmVV1RoP4JLG5-MpOx0orjNernmlS6xtM8X0=w1872-h923"
                        category_name="Cachorros"
                        speciesList={species_list}/>
                    </div>

            </div>
        </section>

    )
}
