import { series } from './data.js';
import { Serie } from './serie.js';

document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("tbody");
    const averageText = document.getElementById("average-text"); 

    if (tbody) {
        series.forEach(serie => {
            const row = document.createElement("tr");
            
            row.addEventListener('click', () => showSerieDetail(serie));

            const idCell = document.createElement("td");
            idCell.textContent = serie.id.toString();
            row.appendChild(idCell);

            const nameCell = document.createElement("td");
            const nameLink = document.createElement("a");
            nameLink.href = "#";
            nameLink.textContent = serie.name;
            nameLink.addEventListener('click', (event) => {
                event.preventDefault();  
                showSerieDetail(serie);
            });
            nameCell.appendChild(nameLink);
            row.appendChild(nameCell);
            
            const channelCell = document.createElement("td");
            channelCell.textContent = serie.channel;
            row.appendChild(channelCell);
            
            const seasonsCell = document.createElement("td");
            seasonsCell.textContent = serie.seasons.toString();
            row.appendChild(seasonsCell);

            tbody.appendChild(row);
        });

        const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
        const averageSeasons = totalSeasons / series.length;

        if (averageText) { 
            averageText.textContent = `El promedio de temporadas de todas las series es ${averageSeasons.toFixed(2)}`;
        }

    } else {
        console.error("No se encontró el elemento tbody");
    }

    function showSerieDetail(serie: Serie) {
        const detailCard = document.getElementById("serie-detail");
        const serieImage = document.getElementById("serie-image") as HTMLImageElement;
        const serieName = document.getElementById("serie-name");
        const serieDescription = document.getElementById("serie-description");
        const serieLink = document.getElementById("serie-link") as HTMLAnchorElement;
    
        if (detailCard && serieImage && serieName && serieDescription && serieLink) {
            serieImage.src = serie.imageUrl;
            serieName.textContent = serie.name;
            serieDescription.textContent = serie.description;
            serieLink.href = serie.link;
            detailCard.style.display = "block";
        }
    }
});
