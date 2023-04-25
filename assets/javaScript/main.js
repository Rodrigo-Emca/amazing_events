import {agregarCard, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias} from "./module/functions.js"

const $listOfEvent = document.getElementById("cardsMainColection")
const $checkboxSelection = document.getElementById("checkboxSelection")
const $keyword = document.getElementById("keyword")

let eventos;
let currentDate;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json() )
  .then(datos => {
    eventos = datos.events
    currentDate = datos.currentDate
    agregarCard(eventos, $listOfEvent);
    generarCheckbox([...new Set(eventos.map(evento => evento["category"]))], $checkboxSelection)
  })
  .catch(error => console.log(error))



// //eventos

$checkboxSelection.addEventListener("change", () => {
  $listOfEvent.innerHTML = ``

  const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = getCategories(filtradosPorCheckbox)

  const palabras = ($keyword.value).toLowerCase()

  agregarCard(filtrarCoincidencias(filtrarCards(eventos, categorias), palabras), $listOfEvent)
}
)

$keyword.addEventListener("keyup", () => {
  $listOfEvent.innerHTML = ``

  const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = getCategories(filtradosPorCheckbox)

  const palabras = ($keyword.value).toLowerCase()

  agregarCard(filtrarCoincidencias(filtrarCards(eventos, categorias), palabras), $listOfEvent)
}
)