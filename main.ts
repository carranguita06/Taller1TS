import { series } from "./data.js";
import { Serie } from "./Serie.js";


const seriesTableBody: HTMLElement = document.getElementById('series-table-body')!;
const promedio: HTMLElement = document.getElementById('average-seasons')!;

function generarSeriesTable(series: Serie[]): void {
  seriesTableBody.innerHTML = '';
  
  series.forEach(serie => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    seriesTableBody.appendChild(row);
  }
    );
}

function calcularPromedio(series: Serie[]): void {
  const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
  const average = totalSeasons / series.length;
  promedio.innerText = `Average Seasons: ${average.toFixed(2)}`;
}
  

  document.addEventListener('DOMContentLoaded', () => {
  generarSeriesTable(series);
    calcularPromedio(series);
  
});


calcularPromedio(series);
generarSeriesTable(series);