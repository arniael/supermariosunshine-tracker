window.blueCoinsData = window.blueCoinsData || [];

const nokiCoins = {
	zoneName: "Baie Noki",
	folder: "noki",
	mapImage: "map.jpg",
	mapText: "Meilleur épisode pour les pièces bleues : 6<br>Les pièces bleues non disponible dans le 6 sont dans le 4 et le 8",
	coins: [
		{
			id: "noki-01",
			episode: "Tous",
			description: "Flottant au-dessus de l'eau près de la plateforme de départ ; dans le premier épisode, il se trouve également près de l'endroit où le bateau à la dérive commence."
		},
		{
			id: "noki-02",
			episode: "Tous",
			description: "Flottant au-dessus de l'eau à droite de la Pièce Bleue 1, utiliser Jet pour diriger le bateau et l'atteindre même lorsque l'eau est empoisonnée."
		},
		{
			id: "noki-03",
			episode: "Tous",
			description: "Sous la cascade, une rangée de pièces jaunes mène à une pièce bleue tout en bas, gardée par un Cheep-Cheep ."
		},
		
		{
			id: "noki-04",
			episode: "Tous",
			description: "En haut d'une rangée de pièces, au-dessus de l'endroit où se trouve le boîtier contenant la Catabuse."
		},
		{
			id: "noki-05",
			episode: "Tous",
			description: "Dans une petite niche située juste au-dessus de la Catabuse. Après avoir récupéré cette pièce bleue, Mario sera éjecté de la niche et tombera dans l'eau."
		},
		{
			id: "noki-06",
			episode: "Tous",
			description: "À droite de la première poulie (là où se trouve le deuxième ascenseur), s'accrocher à une corniche pour la traverser. Au bout de cette corniche, à gauche, arroser la peinture murale pour révéler une niche contenant la pièce bleue."
		},
		{
			id: "noki-07",
			episode: "Tous",
			description: "En continuant sur la corniche, atteindre l'alcôve à son extrémité. Se poser dans l'un des trous au centre pour éviter de tomber. Une fois au bout de la corniche, effectuer des sauts muraux à répétition pour atteindre la pièce bleue en haut."
		},
		{
			id: "noki-08",
			episode: "Tous",
			description: "Derrière la deuxième poulie, se trouve une autre corniche. La suivre jusqu'au bout et arroser la peinture murale pour révéler un trou contenant une pièce bleue."
		},
		{
			id: "noki-09",
			episode: "Tous",
			description: "Dans l'alcôve située en contrebas du sommet de la falaise de la cascade, là où se trouve la Turbobuse."
		},
		{
			id: "noki-10",
			episode: "2 à 8",
			description: "Dans le premier labyrinthe mural, utiliser une alcôve contenant une pièce bleue pour accéder à la zone où il a affronté le Bloops Géant dans l'épisode 2."
		},
		{
			id: "noki-11",
			episode: "2 à 8",
			description: "Dans le deuxième labyrinthe mural, il y a une alcôve pour grimper jusqu'à la zone où il a affronté le Bloops Géant dans l'épisode 2."
		},
		{
			id: "noki-12",
			episode: "2 à 8",
			description: "Dans la salle où l'on obtient le Soleil dans l'épisode 2, asperger les grandes urnes."
		},
		{
			id: "noki-13",
			episode: "2 à 8",
			description: "Dans la salle où l'on obtient le Soleil dans l'épisode 2, asperger les grandes urnes."
		},
		{
			id: "noki-14",
			episode: "Tous",
			description: "Effacer le M  à droite de l'emplacement de la pièce n°11"
		},
		{
			id: "noki-15",
			episode: "Tous",
			description: "À droite de la Pièce Bleue 10 (face à la falaise), se trouve un autre trou dans la falaise. Pour l'atteindre, il faut utiliser la Catabuse combinée à un Saut Tournoyant"
		},
		{
			id: "noki-16",
			episode: "Tous",
			description: "Sur la falaise opposée à celle où se trouve l'Oiseau d'or, utiliser la Catabuse pour sauter et atteindre un trou contenant la pièce bleue."
		},
		{
			id: "noki-17",
			episode: "Tous",
			description: "Descendre la falaise où se trouve l' Oiseau d'or jusqu'à la corniche la plus haute (cette corniche se situe au-dessus de celle où se trouve la Pièce bleue n°13). En arrosant de l'eau sur la peinture murale, il découvre une alcôve contenant la pièce bleue."
		},
		{
			id: "noki-18",
			episode: "Tous",
			description: "Au-dessus de la plateforme qui propulse Mario au sommet de la falaise où se trouve l'Oiseau d'or, se trouve une autre plateforme. Mario peut l'atteindre soit en utilisant la Catabuse depuis la plateforme inférieure, soit le Vol stationnaire depuis le sommet de la falaise. En arrosant les peintures murales, la pièce bleue apparaît"
		},
		{
			id: "noki-19",
			episode: "Tous",
			description: "Dans l'épisode 9, à l'endroit où se trouve l'Oiseau d'or pour obtenir le Soleil, sauter et viser une zone où huit peintures murales sont visibles. En arrosant ces peintures, il révélera deux pièces bleues."
		},
		{
			id: "noki-20",
			episode: "Tous",
			description: "Dans l'épisode 9, à l'endroit où se trouve l'Oiseau d'or pour obtenir le Soleil, sauter et viser une zone où huit peintures murales sont visibles. En arrosant ces peintures, il révélera deux pièces bleues."
		},
		{
			id: "noki-21",
			episode: "Tous",
			description: "À partir de l'emplacement pièce bleue 6, sauter en bas et à gauche (dos au mur) vers une alcôve avec deux peintures murales, en arrosant celle de droite pour révéler la pièce bleue."
		},
		{
			id: "noki-22",
			episode: "Tous",
			description: "Depuis la zone où les pièces bleues 4 et 5 sont obtenues, sauter dans la plus grande alcôve à droite (dos au mur) et arroser la peinture murale pour révéler une zone cachée avec la pièce bleue."
		},
		
		{
			id: "noki-23",
			episode: "Tous",
			description: "À partir de l'emplacement de la pièce bleue n° 7, sauter sur le rebord et arroser la peinture murale pour révéler une zone cachée contenant la pièce bleue."
		},
		{
			id: "noki-24",
			episode: "Tous",
			description: "Depuis l'emplacement de la pièce bleue n°8, sauter dans l'alcôve où se trouve le tableau mural vierge et l'arroser pour le faire se rétracter. Il doit ensuite remonter le mur jusqu'à atteindre une autre alcôve contenant une pièce bleue."
		},
		{
			id: "noki-25",
			episode: "6",
			description: "Effacer le O au pied de la falaise de la cascade. La pièce bleue apparaît près de la cabane du raton laveur"
		},
		{
			id: "noki-26",
			episode: "6",
			description: "Effacer le O près de la cabane du raton laveur. La pièce bleue apparaît au pied de la falaise de la cascade"
		},
		{
			id: "noki-27",
			episode: "4 et 8",
			description: "Sur un pilier dans la zone spéciale située en contrebas de la cascade."
		},
		{
			id: "noki-28",
			episode: "4 et 8",
			description: "Sur un pilier dans la zone spéciale située en contrebas de la cascade."
		},
		{
			id: "noki-29",
			episode: "4 et 8",
			description: "Sur un pilier dans la zone spéciale située en contrebas de la cascade."
		},
		{
			id: "noki-30",
			episode: "4 et 8",
			description: "Sur un pilier dans la zone spéciale située en contrebas de la cascade."
		},
	]
};

window.blueCoinsData.push(nokiCoins);