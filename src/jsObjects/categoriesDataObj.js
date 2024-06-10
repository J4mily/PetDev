import getImage from "../utilities/getImageLink";

const categoriesData = {
    dogs: {
        nameCategory: "Cachorros",
        imgCategory: getImage("https://drive.google.com/file/d/1Dr7MwlS9CtNBJMUCsUvK3WhxyrEbWbTn/view?usp=drive_link"),
        dogSpecies:[
            {
                name:"Pitbull",
                img: getImage("https://drive.google.com/file/d/1KGCJ0v1_uvjnAW3sCXS9SiNqR8jwoKen/view?usp=drive_link"),
                link_to: "/GermanSheperd"
            },
            {
                name: "Border Collie",
                img: getImage("https://drive.google.com/file/d/1Ccei3lUis9fxrl8D9PVpz5AvsyoRAeI7/view?usp=drive_link"),
                link_to: "/BorderCollie"
            }
        ]
    },

    cats: {
        nameCategory: "Gatos",
        imgCategory: getImage("https://drive.google.com/file/d/1YIYXcFfGcbOZcWE-_wrdZTyGcGQujJ40/view?usp=sharing"),
        catSpecies:[
            {
                name: "Siamês",
                img: getImage("https://drive.google.com/file/d/1WFhZ0YJZvWfTkP8o1VzYNws6Eamz1EgY/view?usp=drive_link"),
                link_to:"/Siames"
            },
            {
                name: "Angorá",
                img: getImage("https://drive.google.com/file/d/15snj5JPB2xzMEzIRBpd_hkS2_omujhyc/view?usp=drive_link"),
                link_to:"/Angora"
            },
            {
                name: "Persa",
                img: getImage("https://drive.google.com/file/d/1AhvmF1sKbQE_mGEQoChby0T2Lre3h-mY/view?usp=drive_link"),
                link_to:"/Persa"
            }
        ]
    },

    birds: {
        nameCategory: "Passaros",
        imgCategory: getImage("https://drive.google.com/file/d/1QyI--PluQTS2CmtG-w-Nz95O666p95b4/view?usp=drive_link"),
        birdSpecies:[
            {
                name: "Canário Belga",
                img: getImage("https://drive.google.com/file/d/1r_Z_fnYH7vSitlI8rlZFowlI5PhZPy_6/view?usp=drive_link"),
                link_to:"/CanarioBelga"
            }
        ]

    },

    rodents: {
        nameCategory: "Gatos",
        imgCategory: getImage("https://drive.google.com/file/d/1YIYXcFfGcbOZcWE-_wrdZTyGcGQujJ40/view?usp=sharing"),
        rodentSpecies:[
            {
                name: "Siamês",
                img: getImage("https://drive.google.com/file/d/1WFhZ0YJZvWfTkP8o1VzYNws6Eamz1EgY/view?usp=drive_link"),
                link_to:"/Siames"
            },
            {
                name: "Angorá",
                img: getImage("https://drive.google.com/file/d/15snj5JPB2xzMEzIRBpd_hkS2_omujhyc/view?usp=drive_link"),
                link_to:"/Angora"
            }
        ]
    },

    monkeys: {
        nameCategory: "Gatos",
        imgCategory: getImage("https://drive.google.com/file/d/1YIYXcFfGcbOZcWE-_wrdZTyGcGQujJ40/view?usp=sharing"),
        monkeySpecies:[
            {
                name: "Siamês",
                img: getImage("https://drive.google.com/file/d/1WFhZ0YJZvWfTkP8o1VzYNws6Eamz1EgY/view?usp=drive_link"),
                link_to:"/Siames"
            },
            {
                name: "Angorá",
                img: getImage("https://drive.google.com/file/d/15snj5JPB2xzMEzIRBpd_hkS2_omujhyc/view?usp=drive_link"),
                link_to:"/Angora"
            }
        ]
    },

    snakes: {
        nameCategory: "Gatos",
        imgCategory: getImage("https://drive.google.com/file/d/1YIYXcFfGcbOZcWE-_wrdZTyGcGQujJ40/view?usp=sharing"),
        snakeSpecies:[
            {
                name: "Siamês",
                img: getImage("https://drive.google.com/file/d/1WFhZ0YJZvWfTkP8o1VzYNws6Eamz1EgY/view?usp=drive_link"),
                link_to:"/Siames"
            },
            {
                name: "Angorá",
                img: getImage("https://drive.google.com/file/d/15snj5JPB2xzMEzIRBpd_hkS2_omujhyc/view?usp=drive_link"),
                link_to:"/Angora"
            }
        ]
    },

    fish: {
        nameCategory: "Peixes",
        imgCategory: "./images/quais-peixes-podem-viver-juntos-no-aquario3-1.jpg",
        fishSpecies:[
            {
                name: "Betta",
                img: "./images/betta_categorias_peixes.png",
                link_to:"/betta"
            },
        ]
    },
}

export default categoriesData;