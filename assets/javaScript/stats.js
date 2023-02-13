import {agregarCard, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias} from "./module/functions.js"

const firstTable = document.getElementById("firstTable")
const secondTable = document.getElementById("secondTable")
const thirdTable = document.getElementById("thirdTable")

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json() )
  .then(datos => {
    console.log(datos.events)

    console.log(porcentajeMasAlto(datos.events))


  })
  .catch(error => console.log(error))


    function porcentajeMasAlto(array){
        let aux = []
        array.forEach(element => {
            let promedio = element.assistance *100 / element.capacity
            aux.push(promedio)
        });
        return aux
    }