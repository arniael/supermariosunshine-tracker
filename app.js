document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("app-container");
    const globalProgressBar = document.getElementById("progress-bar");
    const globalProgressText = document.getElementById("progress-text");
    
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close-modal");

    const savedData = JSON.parse(localStorage.getItem("blueCoinsSave")) || [];
    const collectedCoins = new Set(savedData);

    function openModal(imageSrc) {
        modalImg.src = imageSrc;
        modal.classList.add("active");
    }

    closeModal.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });

    function updateProgress() {
        const totalCollected = collectedCoins.size;
        const globalPercentage = (totalCollected / 240) * 100;
        globalProgressBar.style.width = `${globalPercentage}%`;
        globalProgressText.textContent = `${totalCollected} / 240`;

        localStorage.setItem("blueCoinsSave", JSON.stringify([...collectedCoins]));

        window.blueCoinsData.forEach(zone => {
            const zoneCollectedCount = zone.coins.filter(coin => collectedCoins.has(coin.id)).length;
            const zoneTotalCount = zone.coins.length;
            const zonePercentage = zoneTotalCount === 0 ? 0 : (zoneCollectedCount / zoneTotalCount) * 100;
            
            const zoneBar = document.getElementById(`bar-${zone.folder}`);
            const zoneText = document.getElementById(`text-${zone.folder}`);
            
            if (zoneBar && zoneText) {
                zoneBar.style.width = `${zonePercentage}%`;
                zoneText.textContent = `${zoneCollectedCount} / ${zoneTotalCount}`;
            }
        });
    }

    window.blueCoinsData.forEach(zone => {
        const section = document.createElement("details");
        section.className = "level-section";
        
        const summary = document.createElement("summary");
        summary.className = "zone-header";
        summary.innerHTML = `
            <div class="zone-header-title">
                <span>${zone.zoneName}</span>
                <span id="text-${zone.folder}">0 / ${zone.coins.length}</span>
            </div>
            <div class="zone-progress-container">
                <div id="bar-${zone.folder}" class="zone-progress-bar"></div>
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
            <div class="zone-maps-gallery">
                ${mapsHTML}
            </div>
            <div class="coins-list"></div>
        `;

        contentDiv.querySelectorAll('.clickable-img').forEach(img => {
            img.addEventListener("click", () => openModal(img.src));
        });

        const listContainer = contentDiv.querySelector(".coins-list");

        zone.coins.forEach(coin => {
            const div = document.createElement("div");
            div.className = "coin-item";
            if (collectedCoins.has(coin.id)) div.classList.add("collected");

            const isChecked = collectedCoins.has(coin.id) ? "checked" : "";
            const imagePath = `images/${zone.folder}/${coin.id}.jpg`;

            div.innerHTML = `
                <input type="checkbox" id="${coin.id}" ${isChecked}>
                <div class="coin-image-container">
                    <img src="${imagePath}" class="coin-img" 
                         onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'75\\'><rect width=\\'100\\' height=\\'75\\' fill=\\'%23ddd\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' font-family=\\'sans-serif\\' font-size=\\'12\\' fill=\\'%23666\\'>Pas d\\'image</text></svg>'">
                </div>
                <div class="coin-details">
                    <label for="${coin.id}"><strong>Episode : ${coin.episode}</strong> : ${coin.description}</label>
                </div>
            `;

            div.querySelector("input").addEventListener("change", (e) => {
                if (e.target.checked) {
                    collectedCoins.add(coin.id);
                    div.classList.add("collected");
                } else {
                    collectedCoins.delete(coin.id);
                    div.classList.remove("collected");
                }
                updateProgress();
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
        container.appendChild(section);
    });

    const exportBtn = document.getElementById("export-btn");
    const importFile = document.getElementById("import-file");

    exportBtn.addEventListener("click", () => {
        const dataStr = localStorage.getItem("blueCoinsSave") || "[]";
        
        const blob = new Blob([dataStr], { type: "application/json" });
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
                
                if (Array.isArray(importedData)) {
                    localStorage.setItem("blueCoinsSave", JSON.stringify(importedData));
                    alert("Sauvegarde importée avec succès ! La page va se recharger pour tout afficher.");
                    location.reload();
                } else {
                    alert("Ce fichier ne ressemble pas à une sauvegarde valide.");
                }
            } catch (err) {
                alert("Erreur lors de la lecture du fichier. Est-ce bien un fichier .json ?");
            }
        };
        reader.readAsText(file);
    });
    updateProgress();
});