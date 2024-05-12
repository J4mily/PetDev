import CategoryButton from "../../componentes/categories_menu/category_button"

export const Animais = () =>{
    //Adicionar um objeto contendo chave e valor para cada nova espécie seguindo o padrão
    // name, img_link, href (link da página da espécie)
    const species_list = [
        {
        specie_id: 'siames',
        name: 'Siamês',
        img_link: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZLtu_HS-kKMEScauynlfNmxPmF4yL1_6kMNJxgb2xN7dA-f5MX0Ubd6HMKJ3Tp3F92vo_aX6qZ-_sNqVQ5xAyCftrrkxRklgQ=w1872-h923',
        href: '/siames'
    },
    {
        specie_id: 'siames',
        name: 'Siamês',
        img_link: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZLtu_HS-kKMEScauynlfNmxPmF4yL1_6kMNJxgb2xN7dA-f5MX0Ubd6HMKJ3Tp3F92vo_aX6qZ-_sNqVQ5xAyCftrrkxRklgQ=w1872-h923',
        href: '/siames'
    },        
    {
        specie_id: 'siames',
        name: 'Siamês',
        img_link: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZLtu_HS-kKMEScauynlfNmxPmF4yL1_6kMNJxgb2xN7dA-f5MX0Ubd6HMKJ3Tp3F92vo_aX6qZ-_sNqVQ5xAyCftrrkxRklgQ=w1872-h923',
        href: '/siames'
    }
]

    return(
        <div>
            <h1>Animais</h1>
            <CategoryButton
            category_image_link="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY3ZYWlX4VNsrimhapggQSnnewhuqkMSY0FjKNSUVs0dBYO0ug6WPxArQisu51ZmVV1RoP4JLG5-MpOx0orjNernmlS6xtM8X0=w1872-h923"
            category_name="Gatos"
            speciesList={species_list}
            />
            <CategoryButton
            category_image_link="https://lh3.google.com/u/0/d/1fpB5w-8GBSGI5EV1syfk0shGA_z6Cqxe=w1872-h923-iv1"
            category_name="Cachorros"
            speciesList={species_list}
            />
        </div>

    )
}
