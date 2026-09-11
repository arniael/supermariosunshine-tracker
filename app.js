document.addEventListener("DOMContentLoaded", () => {
	
	// --- Fonction Popup ---
	const dialogModal = document.getElementById("custom-dialog");
	const dialogTitle = document.getElementById("dialog-title");
	const dialogMessage = document.getElementById("dialog-message");
	
	function showCustomDialog(title, htmlMessage, type, onConfirm) {
		dialogTitle.innerHTML = title;
		dialogMessage.innerHTML = htmlMessage;
		const oldConfirmBtn = document.getElementById("dialog-confirm-btn");
		const oldCancelBtn = document.getElementById("dialog-cancel-btn");
		const newConfirmBtn = oldConfirmBtn.cloneNode(true);
		const newCancelBtn = oldCancelBtn.cloneNode(true);
		oldConfirmBtn.parentNode.replaceChild(newConfirmBtn, oldConfirmBtn);
		oldCancelBtn.parentNode.replaceChild(newCancelBtn, oldCancelBtn);

		if (type === 'info') {
			newCancelBtn.style.display = 'none';
			newConfirmBtn.textContent = 'OK';
		} else if (type === 'confirm') {
			newCancelBtn.style.display = 'inline-block';
			newCancelBtn.textContent = 'Annuler';
			newConfirmBtn.textContent = 'Confirmer';
		}

		newConfirmBtn.addEventListener("click", () => {
			dialogModal.classList.remove("active");
			if (onConfirm) onConfirm();
		});

		newCancelBtn.addEventListener("click", () => {
			dialogModal.classList.remove("active");
		});

		dialogModal.classList.add("active");
	}

	// --- Popup Aide ---
	const helpTitle = "Bienvenue sur le Super Mario Sunshine Tracker";
	const helpMessage = `
		Cet outil permet de suivre sa progression et d'obtenir de l'aide pour trouver les pièces bleues ainsi que les soleils afin d'atteindre le 100%.<br>
		Cet outil fonctionne intégralement dans le navigateur et sauvegarde le tout dedans automatiquement. Un système d'exportation et d'importation de sauvegarde pour éviter les pertes de données (il ne faut
		donc pas hésiter à sauvegarder au cas où de temps à autre).<br><br><br>
		<u><b>Utilisation :</b></u><br><br>
		🔹 <strong>Onglet "Pièces Bleues" :</strong> Il est possible de cocher les pièces bleues déjà trouvées. Il est également possible de cliquer sur une image pour l'agrandir.<br>Le tableau permet de
		se rendre rapidement à la pièce bleue concernée en se référant à la position sur la carte.<br><br>
		☀️ <strong>Onglet "Soleils" :</strong> Même fonctionnement que pour les pièces bleues, mais avec les soleils du jeu.<br><br>
		💾 <strong>Sauvegarde et Importation :</strong> Permet de récupérer et d'importer un fichier de sauvegarde, pour éviter une perte de celle-ci si le cache du navigateur est vidé ou si une autre sauvegarde est importée.<br><br>
		❓ <strong>Partage :</strong> Créer un lien permettant de partager sa sauvegarde sans avoir à partager le fichier de sauvegarde.<br>
		Attention, l'utilisation d'un lien partagé efface la sauvegarde présente dans le navigateur. Un message d'alerte apparaît en demandant la confirmation si une sauvegarde existe déjà.
	`;
	
	// --- Popup À propos ---
	const aboutBtn = document.getElementById("about-btn");
	if (aboutBtn) {
		aboutBtn.addEventListener("click", () => {
			const aboutTitle = "À propos de Super Mario Sunshine Tracker";
			const aboutMessage = `
				Cet outil a pour but d'aider au <strong>suivi de la progression dans Super Mario Sunshine</strong>, tout en fournissant des indications pour trouver les pièces bleues ainsi que les soleils 
				"cachés" du jeu.<br><br>
				L'idée du tracker est apparue en regardant les <strong>lives Twitch d'Edward (Rétro Découverte, Aube du Pixel...)</strong> où ce dernier se lançait comme objectif de faire le <strong>100% du jeu</strong>,
				car il n'existait pas d'outil comme celui-là <strong>moderne</strong>, <strong>utilisable</strong> rapidement, regroupant images, indications et suivi des pièces bleues et des soleils.<br>
				Ayant <strong>terminé le jeu</strong> plusieurs fois, et quelques fois à 100%, et en ayant de bons souvenirs, j'ai eu l'occasion de conseiller Edward durant sa progression dans le jeu, mais aussi de
				l'aider dans sa quête des pièces bleues et des derniers soleils.
				C'est ce qui m'a permis <strong>d'essayer le tracker en temps réel</strong>, de voir <strong>ce qui n'allait pas, ce qu'il fallait ajouter</strong>... Et à la fin d'aboutir à ce que vous êtes 
				actuellement en train d'utiliser.<br><br>
				Cet outil, qui <strong>était à l'origine pensé uniquement pour la quête des pièces bleues</strong>, inclut désormais le suivi des soleils et des indications pour les soleils "cachés".<br>
				Dès l'origine, il a été <strong>pensé pour être open source</strong>, <strong>responsive</strong>, et fonctionnel <strong>directement dans le navigateur, sans avoir besoin de l'héberger ou
				d'installer</strong> quoi que ce soit.
				Mais mettre en place une version avec Github Pages me semblait rester une bonne idée et à permis l'<strong>intégration de la fonction de partage</strong> sans avoir à transmettre 
				les fichiers de sauvegarde. Tout <strong>s'enregistre donc directement dans le cache du navigateur</strong>, et vous pouvez récupérer un fichier json pour enregistrer votre progression
				en dehors du navigateur, pour la transférer d'appareil ou faire un backup, tout en ayant la possibilité de <strong>fournir un lien de partage pour importer la sauvegarde</strong> avec un seul et 
				unique lien.<br><br>
				J'ai <strong>travaillé sur ce projet</strong> pendant <strong>plusieurs soirs</strong> durant quelques semaines, jusqu'à assez tard, pour <strong>fournir l'outil que j'aurais toujours voulu avoir</strong>
				pour pouvoir finir Mario Sunshine à 100%, mais aussi pour avoir un outil <strong>fiable et agréable à utiliser</strong> afin d'aider Edward dans sa quête, durant ces lives Twitch, 
				que ce soit en vocal avec lui ou en lui donnant des indications dans le chat.<br>
				Alors, <strong>si jamais ce tracker vous a aidé à terminer le jeu et que vous avez envie de remercier</strong>, vous pouvez <strong>"star"</strong> le repo Github, le <strong>partager</strong>
				et, si le coeur vous en dit, me soutenir via ma <strong>page Ko-Fi</strong>.<br><br>
				<a href='https://ko-fi.com/W5E021T1FR' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a><br><br>
				<strong>Merci d'utiliser ce tracker, et j'espère qu'il vous sera autant utile</strong> qu'il me l'a été, et qu'<strong>il vous fera plaisir</strong> autant que j'en ai eu en le créant.<br><br>
				~ Arniael				
			`;
			showCustomDialog(aboutTitle, aboutMessage, "info");
		});
	}

	// --- Vérification de sauvegarde existante ---
	const existingBlue = localStorage.getItem("blueCoinsSave");
	const existingShines = localStorage.getItem("shinesSave");
	const isLocalSaveEmpty = (!existingBlue || existingBlue === "[]") && (!existingShines || existingShines === "[]");

	const urlParams = new URLSearchParams(window.location.search);
	const sharedSaveBase64 = urlParams.get('save');

	// --- Popup aide (premier démarrage) ---
	if (isLocalSaveEmpty && !sharedSaveBase64 && !localStorage.getItem("tutorialSeen")) {
		showCustomDialog(helpTitle, helpMessage, "info", () => {
			localStorage.setItem("tutorialSeen", "true");
		});
	}

	// --- Vérification de la validité du lien de partage ---
	if (sharedSaveBase64) {
		try {
			const decodedSave = atob(decodeURIComponent(sharedSaveBase64));
			const parsedSave = JSON.parse(decodedSave);
			if (parsedSave.blueCoins || parsedSave.shines) {
				
				const performImport = () => {
					if (parsedSave.blueCoins) localStorage.setItem("blueCoinsSave", JSON.stringify(parsedSave.blueCoins));
					if (parsedSave.shines) localStorage.setItem("shinesSave", JSON.stringify(parsedSave.shines));
					
					const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
					window.history.replaceState({path: cleanUrl}, '', cleanUrl);
					
					showCustomDialog("Succès", "Progression partagée chargée avec succès !", "info", () => location.reload());
				};

				if (!isLocalSaveEmpty) {
					showCustomDialog(
						"⚠️ Écraser la sauvegarde ?", 
						"Importer une sauvegarde partagée va <strong>REMPLACER et EFFACER</strong> la progression locale actuelle.<br><br>Continuer ?", 
						"confirm", 
						performImport
					);
				} else {
					performImport();
				}
			} else {
				showCustomDialog("Erreur", "Ce lien de partage utilise un ancien format qui n'est plus compatible.", "info", () => {
					const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
					window.history.replaceState({path: cleanUrl}, '', cleanUrl);
				});
			}
		} catch (e) {
			showCustomDialog("Erreur", "Le lien de partage semble invalide ou corrompu.", "info", () => {
				const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
				window.history.replaceState({path: cleanUrl}, '', cleanUrl);
			});
		}
	}

	// --- Système d'onglets ---
	const tabBtns = document.querySelectorAll('.tab-btn');
	const tabContents = document.querySelectorAll('.tab-content');

	tabBtns.forEach(btn => {
		btn.addEventListener('click', () => {
			tabBtns.forEach(b => b.classList.remove('active'));
			tabContents.forEach(c => c.classList.remove('active'));
			
			btn.classList.add('active');
			document.getElementById(btn.dataset.target).classList.add('active');
		});
	});

	// --- Gestions modales images ---
	const modal = document.getElementById("image-modal");
	const modalImg = document.getElementById("modal-img");
	const closeModal = document.querySelector(".close-modal");

	function openModal(imageSrc) {
		modalImg.src = imageSrc;
		modal.classList.add("active");
	}

	closeModal.addEventListener("click", () => modal.classList.remove("active"));
	modal.addEventListener("click", (e) => {
		if (e.target === modal) modal.classList.remove("active");
	});

	// --- Données progression pièces bleues ---
	const blueContainer = document.getElementById("blue-tab");
	const blueProgressBar = document.getElementById("blue-progress-bar");
	const blueProgressText = document.getElementById("blue-progress-text");
	const savedBlueData = JSON.parse(localStorage.getItem("blueCoinsSave")) || [];
	const collectedBlueCoins = new Set(savedBlueData);

	function updateBlueProgress() {
		const totalCollected = collectedBlueCoins.size;
		const globalPercentage = (totalCollected / 240) * 100;
		blueProgressBar.style.width = `${globalPercentage}%`;
		blueProgressText.textContent = `${totalCollected} / 240`;

		localStorage.setItem("blueCoinsSave", JSON.stringify([...collectedBlueCoins]));

		if (window.blueCoinsData) {
			window.blueCoinsData.forEach(zone => {
				const zoneCollectedCount = zone.coins.filter(coin => collectedBlueCoins.has(coin.id)).length;
				const zoneTotalCount = zone.coins.length;
				const zonePercentage = zoneTotalCount === 0 ? 0 : (zoneCollectedCount / zoneTotalCount) * 100;
				
				const zoneBar = document.getElementById(`blue-bar-${zone.folder}`);
				const zoneText = document.getElementById(`blue-text-${zone.folder}`);
				
				if (zoneBar && zoneText) {
					zoneBar.style.width = `${zonePercentage}%`;
					zoneText.textContent = `${zoneCollectedCount} / ${zoneTotalCount}`;
				}
			});
		}
	}

	// --- Données progression Soleils ---
	const shineContainer = document.getElementById("shine-tab");
	const shineProgressBar = document.getElementById("shine-progress-bar");
	const shineProgressText = document.getElementById("shine-progress-text");
	const savedShineData = JSON.parse(localStorage.getItem("shinesSave")) || [];
	const collectedShines = new Set(savedShineData);

	function updateShineProgress() {
		const totalCollected = collectedShines.size;
		const globalPercentage = (totalCollected / 120) * 100;
		shineProgressBar.style.width = `${globalPercentage}%`;
		shineProgressText.textContent = `${totalCollected} / 120`;

		localStorage.setItem("shinesSave", JSON.stringify([...collectedShines]));

		if (window.shinesData) {
			window.shinesData.forEach(zone => {
				const zoneCollectedCount = zone.shines.filter(shine => collectedShines.has(shine.id)).length;
				const zoneTotalCount = zone.shines.length;
				const zonePercentage = zoneTotalCount === 0 ? 0 : (zoneCollectedCount / zoneTotalCount) * 100;
				
				const zoneBar = document.getElementById(`shine-bar-${zone.folder}`);
				const zoneText = document.getElementById(`shine-text-${zone.folder}`);
				
				if (zoneBar && zoneText) {
					zoneBar.style.width = `${zonePercentage}%`;
					zoneText.textContent = `${zoneCollectedCount} / ${zoneTotalCount}`;
				}
			});
		}
	}

	// --- Onglet Pièces Bleues ---
	if (window.blueCoinsData) {
		window.blueCoinsData.forEach(zone => {
			const section = document.createElement("details");
			section.className = "level-section";
			
			const summary = document.createElement("summary");
			summary.className = "zone-header";
			summary.innerHTML = `
				<div class="zone-header-title">
					<span>${zone.zoneName}</span>
					<span id="blue-text-${zone.folder}">0 / ${zone.coins.length}</span>
				</div>
				<div class="zone-progress-container">
					<div id="blue-bar-${zone.folder}" class="zone-progress-bar"></div>
				</div>
			`;
			section.appendChild(summary);

			const contentDiv = document.createElement("div");
			contentDiv.className = "zone-content";

			let mapsToDisplay = [];
			if (zone.maps) {
				mapsToDisplay = zone.maps;
			} else if (zone.mapImage) {
				mapsToDisplay = [{ image: zone.mapImage, description: zone.mapText || "" }];
			}

			const mapsHTML = mapsToDisplay.map(map => `
				<div class="map-item">
					<img src="images/${zone.folder}/${map.image}" alt="Carte" class="zone-map clickable-img">
					${map.description ? `<p class="map-description">${map.description}</p>` : ''}
				</div>
			`).join('');

			contentDiv.innerHTML = `
				<div class="zone-maps-gallery">${mapsHTML}</div>
				<p class="coin-navigation-title">Accès rapide</p> <div class="coin-navigation-grid"></div>
				<div class="coins-list"></div>
			`;

			contentDiv.querySelectorAll('.clickable-img').forEach(img => {
				img.addEventListener("click", () => openModal(img.src));
			});

			const navGrid = contentDiv.querySelector(".coin-navigation-grid");
			zone.coins.forEach((coin, index) => {
				const navLink = document.createElement("a");
				navLink.href = `#coin-${coin.id}`; 
				navLink.className = "coin-nav-link";
				navLink.textContent = String(index + 1).padStart(2, '0');
				
				navLink.addEventListener("click", (e) => {
					e.preventDefault();
					const targetDiv = document.getElementById(`coin-${coin.id}`);
					if (targetDiv) {
						targetDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
						targetDiv.classList.remove("highlight-pulse");
						void targetDiv.offsetWidth; 
						targetDiv.classList.add("highlight-pulse");
						history.pushState(null, null, `#coin-${coin.id}`);
					}
				});
				navGrid.appendChild(navLink);
			});

			const listContainer = contentDiv.querySelector(".coins-list");
			zone.coins.forEach((coin, index) => {
				const div = document.createElement("div");
				div.className = "coin-item";
				div.id = `coin-${coin.id}`; 
				if (collectedBlueCoins.has(coin.id)) div.classList.add("collected");

				const isChecked = collectedBlueCoins.has(coin.id) ? "checked" : "";
				const imagePath = `images/${zone.folder}/${coin.id}.jpg`;
				const coinNumber = String(index + 1).padStart(2, '0');
				const episodeText = coin.episode ? ` - Episode : ${coin.episode}` : '';

				div.innerHTML = `
					<input type="checkbox" id="${coin.id}" ${isChecked}>
					<div class="coin-image-container">
						<img src="${imagePath}" class="coin-img" 
							 onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'75\\'><rect width=\\'100\\' height=\\'75\\' fill=\\'%23ddd\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-family=\\'sans-serif\\' font-size=\\'12\\' fill=\\'%23666\\'>Pas d\\'image</text></svg>'">
					</div>
					<div class="coin-details">
						<label for="${coin.id}"><strong>N° ${coinNumber}${episodeText}</strong> : ${coin.description}</label>
					</div>
				`;

				div.querySelector("input").addEventListener("change", (e) => {
					if (e.target.checked) {
						collectedBlueCoins.add(coin.id);
						div.classList.add("collected");
					} else {
						collectedBlueCoins.delete(coin.id);
						div.classList.remove("collected");
					}
					updateBlueProgress();
				});

				const coinImg = div.querySelector(".coin-img");
				coinImg.addEventListener("click", () => {
					if (!coinImg.src.includes("data:image/svg+xml")) {
						openModal(coinImg.src);
					}
				});

				listContainer.appendChild(div);
			});

			section.appendChild(contentDiv);
			blueContainer.appendChild(section);
		});
	}

	// --- Onglet Soleils ---
	if (window.shinesData) {
		window.shinesData.forEach(zone => {
			const section = document.createElement("details");
			section.className = "level-section";
			
			const summary = document.createElement("summary");
			summary.className = "zone-header";
			summary.innerHTML = `
				<div class="zone-header-title">
					<span>${zone.zoneName}</span>
					<span id="shine-text-${zone.folder}">0 / ${zone.shines.length}</span>
				</div>
				<div class="zone-progress-container">
					<div id="shine-bar-${zone.folder}" class="zone-progress-bar shine-bar"></div>
				</div>
			`;
			section.appendChild(summary);

			const contentDiv = document.createElement("div");
			contentDiv.className = "zone-content";

			contentDiv.innerHTML = `
				<p class="coin-navigation-title">Accès rapide</p> <div class="coin-navigation-grid"></div>
				<div class="coins-list"></div>
			`;

			const navGrid = contentDiv.querySelector(".coin-navigation-grid");
			zone.shines.forEach((shine, index) => {
				const navLink = document.createElement("a");
				navLink.href = `#shine-${shine.id}`; 
				navLink.className = "coin-nav-link";
				navLink.textContent = String(index + 1).padStart(2, '0');
				
				navLink.addEventListener("click", (e) => {
					e.preventDefault();
					const targetDiv = document.getElementById(`shine-${shine.id}`);
					if (targetDiv) {
						targetDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
						targetDiv.classList.remove("highlight-pulse");
						void targetDiv.offsetWidth; 
						targetDiv.classList.add("highlight-pulse");
						history.pushState(null, null, `#shine-${shine.id}`);
					}
				});
				navGrid.appendChild(navLink);
			});

			const listContainer = contentDiv.querySelector(".coins-list");
			zone.shines.forEach((shine, index) => {
				const div = document.createElement("div");
				div.className = "coin-item";
				div.id = `shine-${shine.id}`; 
				if (collectedShines.has(shine.id)) div.classList.add("collected");

				const isChecked = collectedShines.has(shine.id) ? "checked" : "";
				const shineNumber = String(index + 1).padStart(2, '0');
				
				let episodeLabel = "Episode";
				const mainWorlds = ["bianco", "ricco", "gelato", "pinna", "sirena", "noki", "pianta"];
				const isMainWorld = mainWorlds.some(world => zone.folder && zone.folder.includes(world));
				
				if (isMainWorld && index === 10) {
					episodeLabel = "Episode Conseillé";
				}

				const episodeText = shine.episode ? ` - ${episodeLabel} : ${shine.episode}` : '';
				const imgName = shine.id.includes('s_bluecoins') ? 's_bluecoins.jpg' : `${shine.id}.jpg`;
				const imagePath = `images/shines/${imgName}`;
				const imageHTML = `
					<div class="coin-image-container">
						<img src="${imagePath}" class="coin-img shine-img" 
							 onerror="this.parentElement.style.display='none'">
					</div>
				`;

				div.innerHTML = `
					<input type="checkbox" id="${shine.id}" ${isChecked}>
					${imageHTML}
					<div class="coin-details">
						<label for="${shine.id}"><strong>N° ${shineNumber}${episodeText}</strong> : ${shine.description}</label>
					</div>
				`;

				div.querySelector("input").addEventListener("change", (e) => {
					if (e.target.checked) {
						collectedShines.add(shine.id);
						div.classList.add("collected");
					} else {
						collectedShines.delete(shine.id);
						div.classList.remove("collected");
					}
					updateShineProgress();
				});

				const shineImg = div.querySelector(".shine-img");
				if (shineImg) {
					shineImg.addEventListener("click", () => {
						openModal(shineImg.src);
					});
				}

				listContainer.appendChild(div);
			});

			section.appendChild(contentDiv);
			shineContainer.appendChild(section);
		});
	}

	// --- Import / Export ---
	const exportBtn = document.getElementById("export-btn");
	const importFile = document.getElementById("import-file");

	exportBtn.addEventListener("click", () => {
		const saveData = {
			blueCoins: JSON.parse(localStorage.getItem("blueCoinsSave")) || [],
			shines: JSON.parse(localStorage.getItem("shinesSave")) || []
		};
		const blob = new Blob([JSON.stringify(saveData)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "sunshinetracker_save.json";
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	});

	importFile.addEventListener("change", (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				const importedData = JSON.parse(event.target.result);
				
				const doImport = () => {
					if (importedData.blueCoins || importedData.shines) {
						if (importedData.blueCoins) localStorage.setItem("blueCoinsSave", JSON.stringify(importedData.blueCoins));
						if (importedData.shines) localStorage.setItem("shinesSave", JSON.stringify(importedData.shines));
						showCustomDialog("Succès", "Sauvegarde importée avec succès !", "info", () => location.reload());
					} else {
						showCustomDialog("Erreur", "Ce fichier ne ressemble pas à une sauvegarde valide (les anciennes sauvegardes contenant uniquement les pièces bleus ne sont plus compatibles).", "info");
					}
				};

				const currentBlue = localStorage.getItem("blueCoinsSave");
				const currentShines = localStorage.getItem("shinesSave");
				const isCurrentSaveEmpty = (!currentBlue || currentBlue === "[]") && (!currentShines || currentShines === "[]");

				if (!isCurrentSaveEmpty) {
					showCustomDialog(
						"⚠️ Écraser la sauvegarde ?", 
						"L'importation de ce fichier va <strong>REMPLACER et EFFACER</strong> la progression locale actuelle.<br><br>Continuer ?", 
						"confirm", 
						doImport
					);
				} else {
					doImport();
				}
			} catch (err) {
				showCustomDialog("Erreur", "Erreur lors de la lecture du fichier. Est-ce bien un fichier .json valide ?", "info");
			}
			importFile.value = ''; // Réinitialise l'input
		};
		reader.readAsText(file);
	});

	// --- Bouton Partager ---
	const shareBtn = document.getElementById("share-btn");
	if (shareBtn) {
		shareBtn.addEventListener("click", () => {
			const saveData = {
				blueCoins: JSON.parse(localStorage.getItem("blueCoinsSave")) || [],
				shines: JSON.parse(localStorage.getItem("shinesSave")) || []
			};
			const base64Save = btoa(JSON.stringify(saveData));
			const shareUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?save=" + encodeURIComponent(base64Save);
			
			navigator.clipboard.writeText(shareUrl).then(() => {
				showCustomDialog("Lien copié !", "🔗 Le lien de partage a été copié dans le presse-papier !<br><br>Il peut maintenant être partagé.", "info");
			}).catch(err => {
				prompt("Le navigateur bloque la copie automatique. Voici le lien à copier manuellement :", shareUrl);
			});
		});
	}

	// --- Popup Aide (bouton) ---
	const helpBtn = document.getElementById("help-btn");
	if (helpBtn) {
		helpBtn.addEventListener("click", () => {
			showCustomDialog(helpTitle, helpMessage, "info");
		});
	}

	// Initialisation
	updateBlueProgress();
	updateShineProgress();
});