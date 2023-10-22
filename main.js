import { series } from './data.js';
document.addEventListener("DOMContentLoaded", function () {
    var tbody = document.querySelector("tbody");
    if (tbody) {
        series.forEach(function (serie) {
            var row = document.createElement("tr");
            var imgCell = document.createElement("td");
            var imgElement = document.createElement("img");
            imgElement.src = serie.imageUrl;
            imgElement.alt = serie.name;
            imgElement.classList.add("serie-img");
            imgCell.appendChild(imgElement);
            row.appendChild(imgCell);
            var idCell = document.createElement("td");
            idCell.textContent = serie.id.toString();
            row.appendChild(idCell);
            var nameCell = document.createElement("td");
            nameCell.textContent = serie.name;
            row.appendChild(nameCell);
            var channelCell = document.createElement("td");
            channelCell.textContent = serie.channel;
            row.appendChild(channelCell);
            var seasonsCell = document.createElement("td");
            seasonsCell.textContent = serie.seasons.toString();
            row.appendChild(seasonsCell);
            tbody.appendChild(row);
        });
        var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
        var averageSeasons = totalSeasons / series.length;
        var averageRow = document.createElement("tr");
        var averageCell = document.createElement("td");
        averageCell.colSpan = 5;
        averageCell.textContent = "El promedio de temporadas de todas las series es ".concat(averageSeasons.toFixed(2));
        averageRow.appendChild(averageCell);
        tbody.appendChild(averageRow);
    }
    else {
        console.error("No se encontró el elemento tbody");
    }
});
