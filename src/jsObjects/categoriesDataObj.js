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
            }
        ]
    },

    birds: {
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
            }
        ]

    },

    rodents: {
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
            }
        ]
    },

    monkeys: {
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
            }
        ]
    },

    snakes: {
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
            }
        ]
    },

    fish: {
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
            }
        ]
    },

    
}

export default categoriesData;