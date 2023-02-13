import {agregarCard, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias, filtrarPorFechaPasada} from "./module/functions.js"

const firstTable = document.getElementById("firstTable")
const secondTable = document.getElementById("secondTable")
const thirdTable = document.getElementById("thirdTable")

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json() )
  .then(datos => {
    let eventosPasados = filtrarPorFechaPasada(datos.currentDate, datos.events)

    crearPrimeraTabla(porcentajeMasAlto(eventosPasados), porcentajeMasBajo(eventosPasados),eventoMayorCapacidad(datos.events))
    //console.log(porcentajeMasAlto(eventosPasados))
    //console.log(porcentajeMasBajo(eventosPasados))
    //console.log(eventoMayorCapacidad(datos.events))

  })
  .catch(error => console.log(error))


    function porcentajeMasAlto(array){
        let aux = []
        array.forEach(element => {
          let promedio =(element.assistance / element.capacity *100)
          element.promedio = promedio
          aux.push(element)
        });
        let auxMax = aux.sort(function(a, b){return b.promedio - a.promedio}).slice([0],[1])
        let auxCompl = auxMax[0].name + " " + auxMax[0].promedio + "%"
        return auxCompl
    }

    function porcentajeMasBajo(array){
      let aux = []
      array.forEach(element => {
        let promedio = (element.assistance / element.capacity *100)
        element.promedio = promedio
        aux.push(element)
      });
      let auxMax = aux.sort(function(a, b){return a.promedio - b.promedio}).slice([0],[1])
      let auxCompl = auxMax[0].name + " " + auxMax[0].promedio + "%"
      return auxCompl
  }

  function eventoMayorCapacidad(array){
    let aux = array.sort(function(a, b){return b.capacity - a.capacity}).slice([0],[1])
    let auxCompl = aux[0].name + " " + aux[0].capacity
    return auxCompl
}

  function crearPrimeraTabla(evento1, evento2, evento3){
    firstTable.innerHTML = `<table class=" container border border-secondary" >
    <thead class="border border-secondary bg-dark-subtle">
        <tr>
            <th colspan="3">Events Statistics</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="col-4 border border-secondary">Events with the highest percentage of attendance</td>
            <td class="col-4 border border-secondary">Events with the lowest percentage of attendance</td>
            <td class="col-4 border border-secondary">Event with larger capacity</td>
        </tr>
        <tr>
            <td class="col-4 border border-secondary text-center">${evento1}</td>
            <td class="col-4 border border-secondary text-center">${evento2}</td>
            <td class="col-4 border border-secondary text-center">${evento3}</td>
        </tr>
    </tbody>
</table>`
  }