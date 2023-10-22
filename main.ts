import { series } from './data.js';

document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("tbody");
    if (tbody) {
        series.forEach(serie => {

            const row = document.createElement("tr");
            
            const imgCell = document.createElement("td");
            const imgElement = document.createElement("img");
            imgElement.src = serie.imageUrl;
            imgElement.alt = serie.name;
            imgElement.classList.add("serie-img");
            imgCell.appendChild(imgElement);
            row.appendChild(imgCell);
            
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

        const averageRow = document.createElement("tr");
        const averageCell = document.createElement("td");
        averageCell.colSpan = 5; 
        averageCell.textContent = `El promedio de temporadas de todas las series es ${averageSeasons.toFixed(2)}`;
        averageRow.appendChild(averageCell);
        tbody.appendChild(averageRow);

    } else {
        console.error("No se encontró el elemento tbody");
    }
});
