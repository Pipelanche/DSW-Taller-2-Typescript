import { series } from './data.js';

document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("tbody");
    const averageText = document.getElementById("average-text"); 

    if (tbody) {
        series.forEach(serie => {
            const row = document.createElement("tr");
            
            const idCell = document.createElement("td");
            idCell.textContent = serie.id.toString();
            row.appendChild(idCell);
            
            const nameCell = document.createElement("td");
            nameCell.textContent = serie.name;
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
});
