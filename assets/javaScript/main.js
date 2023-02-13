import {agregarCard, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias} from "./module/functions.js"

const $listOfEvent = document.getElementById("cardsMainColection")
const $checkboxSelection = document.getElementById("checkboxSelection")
const $keyword = document.getElementById("keyword")

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json() )
  .then(datos => {
    agregarCard(datos.events, $listOfEvent);
    generarCheckbox([...new Set(datos.events.map(evento => evento["category"]))], $checkboxSelection)
  })
  .catch(error => console.log(error))



// //eventos

$checkboxSelection.addEventListener("change", () => {
  $listOfEvent.innerHTML = ``

  const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = getCategories(filtradosPorCheckbox)

  const palabras = ($keyword.value).toLowerCase()

  fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json() )
  .then(datos => {
    agregarCard(filtrarCoincidencias(filtrarCards(datos.events, categorias), palabras), $listOfEvent)
  })
  .catch(error => console.log(error))
}
)

$keyword.addEventListener("keyup", () => {
  $listOfEvent.innerHTML = ``

  const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = getCategories(filtradosPorCheckbox)

  const palabras = ($keyword.value).toLowerCase()

  fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json() )
  .then(datos => {
    agregarCard(filtrarCoincidencias(filtrarCards(datos.events, categorias), palabras), $listOfEvent)
  })
  .catch(error => console.log(error))
}
)