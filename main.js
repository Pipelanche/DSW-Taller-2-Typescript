import { series } from './data.js';
document.addEventListener("DOMContentLoaded", function () {
    var tbody = document.querySelector("tbody");
    var averageText = document.getElementById("average-text");
    if (tbody) {
        series.forEach(function (serie) {
            var row = document.createElement("tr");
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
        if (averageText) {
            averageText.textContent = "El promedio de temporadas de todas las series es ".concat(averageSeasons.toFixed(2));
        }
    }
    else {
        console.error("No se encontró el elemento tbody");
    }
});
