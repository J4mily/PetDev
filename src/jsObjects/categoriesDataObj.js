import getImage from "../utilities/getImageLink";

const categoriesData = {
    dogs: {
        nameCategory: "Cachorros",
        imgCategory:"/images/categorias_cachorros.png",
        dogSpecies:[
            {
                name:"Pitbull",
                img: "/images/pitbull_cachorros_racas_medias.png",
                link_to: "/Pitbull"
            },
            {
                name:"Rottweiler",
                img: "/images/rotweiller_cachorros_racas_grandes.png.png",
                link_to: "/Rottweiler"
            },
            {
                name:"Golden Retriever",
                img: "/images/golden_cachorros_racas_grandes.png",
                link_to: "/GoldenRetriever"
            },
            {
                name:"Pastor Alemão",
                img: "/images/pastor_cachorros_racas_grandes.png",
                link_to: "/PastorAlemao"
            },
            {
                name: "Border Collie",
                img: "/images/border_cachorros_racas_medias.png",
                link_to: "/BorderCollie"
            },
            {
                name:"ChowChow",
                img: "/images/chowchow_cachorros_racas_medias.png",
                link_to: "/ChowChow"
            },
            {
                name: "Poodle",
                img: "/images/poodle_cachorros_racas_pequenas.png",
                link_to: "/Poodle"
            },
            {
                name:"Pinscher",
                img: "/images/pinscher_cachorros_racas_pequenas.png",
                link_to: "/Pinscher"
            }
        ]
    },

    cats: {
        nameCategory: "Gatos",
        imgCategory: "/images/categorias_gatos.png",
        catSpecies:[
            {
                name: "Siamês",
                img: "/images/siames_categorias_gatos.png",
                link_to:"/Siames"
            },
            {
                name: "Angorá",
                img: "/images/angora_categorias_gatos.png",
                link_to:"/Angora"
            },
            {
                name: "Persa",
                img: "/images/persa_categorias_gatos.png",
                link_to:"/Persa"
            }
        ]
    },

    birds: {
        nameCategory: "Pássaros",
        imgCategory: "/images/categorias_passaros.png",
        birdSpecies:[
            {
                name: "Canário Belga",
                img: "/images/canario_belga_categorias_passaros.png",
                link_to:"/CanarioBelga"
            }
        ]

    },

    rodents: {
        nameCategory: "Roedores",
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
        nameCategory: "Macacos",
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
        nameCategory: "Cobras",
        imgCategory: getImage("https://drive.google.com/file/d/1__ApZuuTnr1_MIApLk78xmatOB4FQ-nu/view?usp=drive_link"),
        snakeSpecies:[
            {
                name: "CornSnake",
                img: getImage("https://drive.google.com/file/d/1N_F7zoKh-9k-XMTScEUqsLEChut2koyN/view?usp=drive_link"),
                link_to:"/CornSnake"
            },
            {
                name: "Gopher",
                img: getImage("https://drive.google.com/file/d/1nyxJg0LyRSyWFcHc6hBmAv7hUXk0U4Iu/view?usp=drive_link"),
                link_to:"/Gopher"
            },
            {
                name: "Jiboia",
                img: getImage("https://drive.google.com/file/d/1z7vDxFQWofuXyTZe5Vl-COETLHoEQuY-/view?usp=drive_link"),
                link_to:"/Jiboia"
            }
        ]
    },

    fish: {
        nameCategory: "Peixes",
        imgCategory: getImage("https://drive.google.com/file/d/1YIYXcFfGcbOZcWE-_wrdZTyGcGQujJ40/view?usp=sharing"),
        fishSpecies:[
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

    
}

export default categoriesData;