window.blueCoinsData = window.blueCoinsData || [];

const gelatoCoins = {
    zoneName: "Gelato-les-Flots",
    folder: "gelato",
    mapImage: "map.jpg",
    mapText: "Meilleur épisode pour les pièces bleues : 4<br>Pièces 22 et 29 uniquement dans l'épisode 6<br>Pièce 25 plus facilement accessible dans l'épisode 6<br>Meilleur épisode pour les 100 pièces : 8",
    coins: [
        {
            id: "gelato-01",
            episode: "N'importe quel épisode (sauf le 3)",
            description: "Arroser une marque brune cachée sur la plage près de la cabane de sable"
        },
        {
            id: "gelato-02",
            episode: "N'importe quel épisode (sauf le 3)",
            description: "Arroser une marque brune cachée sur la plage à mi-chemin entre la cabane de sable et la péninsule"
        },
        {
            id: "gelato-03",
            episode: "N'importe quel épisode (sauf le 3)",
            description: "Arroser une marque brune cachée sur la plage près de la cabane pastèque"
        },
        {
            id: "gelato-04",
            episode: "N'importe quel épisode (sauf le 1 et 3)",
            description: "Arroser une marque brune dissimulé sur la péninsule"
        },
        {
            id: "gelato-05",
            episode: "Episode 1, 2 et 4",
            description: "Arroser et en sauter sur le seul Cataquack rouge sur la plage"
        },
        {
            id: "gelato-06",
            episode: "N'importe quel épisode",
            description: "Arroser le graffiti triangle correspondant sur les mur situé de part et d'autre de la plage. La pièce bleue apparaît de l'autre côté de la plage"
        },
        {
            id: "gelato-07",
            episode: "N'importe quel épisode",
            description: "Arroser le graffiti triangle correspondant sur les mur situé de part et d'autre de la plage. La pièce bleue apparaît de l'autre côté de la plage"
        },
        {
            id: "gelato-08",
            episode: "N'importe quel épisode",
            description: "Au centre du plafond de la cabane de sable ."
        },
        {
            id: "gelato-09",
            episode: "N'importe quel épisode",
            description: "Sur le parcours de la balançoire située sur l'île au large de la plage."
        },
        {
            id: "gelato-10",
            episode: "N'importe quel épisode",
            description: "Sur le grand palmier qui soutient la balançoire sur l'île."
        },
        {
            id: "gelato-11",
            episode: "N'importe quel épisode (sauf le 5)",
            description: "Sous l'eau, loin des côtes de l'île."
        },
        {
            id: "gelato-12",
            episode: "N'importe quel épisode (sauf le 5)",
            description: "Sous l'eau, entre l'île et le récif corallien."
        },
        {
            id: "gelato-13",
            episode: "N'importe quel épisode (sauf le 5)",
            description: "À la suite d'un banc de poissons près de la pièce n°12."
        },
        {
            id: "gelato-14",
            episode: "N'importe quel épisode (sauf le 5)",
            description: "Derrière un banc de poissons près du récif corallien"
        },
        {
            id: "gelato-15",
            episode: "N'importe quel épisode",
            description: "Sous la jetée, derrière le cabane pastèque"
        },
        {
            id: "gelato-16",
            episode: "N'importe quel épisode",
            description: "Effacer le M sur une petite falaise à côté de la cabane de sable"
        },
        {
            id: "gelato-17",
            episode: "N'importe quel épisode",
            description: "Entre deux murs, en haut d'une colline du côté de la plage où se trouve la cabane pastèque . On peut y accéder en sautant depuis la zone de corde"
        },
        {
            id: "gelato-18",
            episode: "Episode 4",
            description: "Au sommet d'un nuage dans la zone des oiseaux des sables"
        },
        {
            id: "gelato-19",
            episode: "Episode 4",
            description: "Identique à la pièce bleue 18, mais un peu plus haut."
        },
        {
            id: "gelato-20",
            episode: "Episode 4",
            description: "Identique à la pièce bleue 19, mais un peu plus haut."
        },
        {
            id: "gelato-21",
            episode: "Episode 4",
            description: "Identique à la pièce bleue 20, mais vers le haut.i"
        },
        {
            id: "gelato-22",
            episode: "Episode 6 avec Yoshi",
            description: "Cachée sous une graine de dune recouvert de la barrière nectar Yoshi, près de la cabane de sable, arroser la graine de dune pour révéler la pièce bleue."
        },
        {
            id: "gelato-23",
            episode: "N'importe quel épisode",
            description: "Arroser l'oiseau bleu perché sur le fil tendu dans la zone de la falaise surplombant la plage."
        },
        {
            id: "gelato-24",
            episode: "N'importe quel épisode",
            description: "Arroser l'oiseau bleu perché sur le fil tendu dans la zone de la falaise surplombant la plage."
        },
        {
            id: "gelato-25",
            episode: "Episode 6 avec la Catabuse",
            description: "Flottant haut au-dessus d'une cabane à côté de la Tour Soleil"
        },
        {
            id: "gelato-26",
            episode: "N'importe quel épisode",
            description: "Au sommet d'un poteau relié à un fil tendu dans la zone de la falaise près de la plage, du côté de la cabane de sable ."
        },
        {
            id: "gelato-27",
            episode: "N'importe quel épisode",
            description: "Flottant au-dessus du fil tendu le plus haut du côté de la plage où se trouve la cabane pastèque"
        },
        {
            id: "gelato-28",
            episode: "n'importe quel épisode",
            description: "Obtenu en faisant tomber n'importe quel fruit dans l'extracteur de jus sur le toit de la cabane pastèque"
        },
        {
            id: "gelato-29",
            episode: "Episode 6 avec Yoshi",
            description: "Manger les abeilles sous la cabane à côté de la Tour Soleil"
        },
        {
            id: "gelato-30",
            episode: "Episode 5 à 8",
            description: "Vaincre le Cataquack bleu solitaire dormant sur l'arbre à côté de la Tour Soleil"
        },
    ]
};

window.blueCoinsData.push(gelatoCoins);
