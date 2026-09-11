window.blueCoinsData = window.blueCoinsData || [];

const pinnaCoins = {
	zoneName: "Parc Pinna",
	folder: "pinna",
	mapImage: "map.jpg",
	mapText: "Meilleur épisode pour les pièces bleues : 6<br>Les pièces indisponible dans le 6 sont dans le 2",
	coins: [
		{
			id: "pinna-01",
			episode: "Tous",
			description: "Afficher un marquage bleu sur la plage."
		},
		{
			id: "pinna-02",
			episode: "Tous",
			description: "Afficher un marquage bleu sur la plag.e"
		},
		{
			id: "pinna-03",
			episode: "2",
			description: "Caché dans un panier renversé sur la plage. Il faut un Bill Ball pour le détruire."
		},
		{
			id: "pinna-04",
			episode: "2",
			description: "Caché dans un panier renversé sur la plage. Il faut un Bill Ball pour le détruire."
		},
		{
			id: "pinna-05",
			episode: "2",
			description: "Caché dans un panier renversé sur la plage. Il faut un Bill Ball pour le détruire."
		},
		{
			id: "pinna-06",
			episode: "2",
			description: "Caché dans un panier renversé sur la plage. Il faut un Bill Ball pour le détruire."
		},
		{
			id: "pinna-07",
			episode: "2",
			description: "Caché dans un panier renversé sur la plage. Il faut un Bill Ball pour le détruire."
		},
		{
			id: "pinna-08",
			episode: "2",
			description: "Caché dans un panier renversé sur la plage. Il faut un Bill Ball pour le détruire."
		},
		{
			id: "pinna-09",
			episode: "Tous avec Yoshi",
			description: "Manger un papillon bleu situé près des Enfants Tournesols."
		},
		{
			id: "pinna-10",
			episode: "Tous avec Yoshi",
			description: "Manger un papillon bleu situé près des Enfants Tournesols."
		},
		{
			id: "pinna-11",
			episode: "Tous (sauf 2 et 4)",
			description: "Arroser l'oiseau bleu qui vole près du carousel Yoshi"
		},
		{
			id: "pinna-12",
			episode: "Tous (sauf 2 et 4)",
			description: "Envoyer de l'eau sur la palourde verte pour l'ouvrir."
		},
		{
			id: "pinna-13",
			episode: "Tous (sauf 2 et 4)",
			description: "Dans la cage sous l'escalier menant aux bateaux pirates."
		},
		{
			id: "pinna-14",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le M situé à côté des bateaux pirates."
		},
		{
			id: "pinna-15",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le X correspondant sur l'arbre en forme de Pianta. La pièce bleue apparaît sur le mur blanc à côté des bateaux pirates"
		},
		{
			id: "pinna-16",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le X correspondant sur le mur blanc à côté des bateaux pirates. La pièce bleue apparaît sur l'arbre en forme de Pianta"
		},
		{
			id: "pinna-17",
			episode: "Tous (sauf 2 et 4)",
			description: "Arroser l'oiseau bleu perché près du chemin menant aux montagnes russes"
		},
		{
			id: "pinna-18",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le triangle correspondant sur un mur sur le chemin menant à la grande roue. La pièce bleue apparaît sur un mur à côté des bateaux pirates"
		},
		{
			id: "pinna-19",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le triangle correspondant sur un mur à côté des bateaux pirates. La pièce bleue apparaît sur un mur sans issue sur le chemin menant à la grande roue"
		},
		{
			id: "pinna-20",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le O correspondant sur le mur du quai de la grande roue. La pièce bleue apparaît au sol de l'autre côté"
		},
		{
			id: "pinna-21",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le O correspondant sur le quai de la grande roue. La pièce bleue apparaît sur le mur de l'autre côté"
		},
		{
			id: "pinna-22",
			episode: "Tous (sauf 2 et 4)",
			description: "Sur une plateforme herbeuse derrière l'entrée des montagnes russes."
		},
		{
			id: "pinna-23",
			episode: "Tous (sauf 2 et 4)",
			description: "Flottant bien au-dessus du point d'embarquement du premier bateau pirate, cette pièce bleue s'obtient en atteignant le sommet de la plateforme métallique et en sautant sur le bateau pirate lors de sa rotation à 360 degrés."
		},
		{
			id: "pinna-24",
			episode: "Tous (sauf 2 et 4)",
			description: "Au sommet d'une arche en acier vert soutenant les navires pirates."
		},
		{
			id: "pinna-25",
			episode: "Tous (sauf 2 et 4)",
			description: "Sur une plateforme en bois située au-dessus de la cage verte où se trouve la Pièce Bleue 17. Cette pièce bleue est accessible immédiatement après avoir sauté sur le Bateau Pirate pour obtenir la Pièce Bleue 20."
		},
		{
			id: "pinna-26",
			episode: "Tous (sauf 2 et 4)",
			description: "Caché à l'intérieur d'une cage métallique verte au-dessus des bateaux pirates."
		},
		{
			id: "pinna-27",
			episode: "Tous (sauf 2 et 4)",
			description: "Vaincre le Strollin' Stu sous le pont en bois menant aux montagnes russes"
		},
		{
			id: "pinna-28",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le M sur une petite plateforme de sable à côté de la piscine, à l'extérieur du parc"
		},
		
		{
			id: "pinna-29",
			episode: "Tous (sauf 2 et 4)",
			description: "Effacer le M en hauteur sur le mur latéral de la section située derrière la grande roue"
		},
		{
			id: "pinna-30",
			episode: "6 avec Yoshi",
			description: "Utilisez Yoshi pour manger un papillon bleu sous le palmier sur une petite plateforme de sable à côté de la piscine (près de l'endroit où la pièce bleue 14 a été obtenue)."
		},
	]
};

window.blueCoinsData.push(pinnaCoins);