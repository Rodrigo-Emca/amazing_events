import {data} from "./data.js"
import {agregarCard, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias} from "./module/functions.js"

const $generalEvents = data.events
const $listOfEvent = document.getElementById("cardsMainColection")

const $checkboxSelection = document.getElementById("checkboxSelection")
const categoriasRepetidas = $generalEvents.map(evento => evento["category"])
const categoriasSinRepetirSet = new Set (categoriasRepetidas)
const categoriasSinRepetirArray = [... categoriasSinRepetirSet]

const $keyword = document.getElementById("keyword")


// //ejecución de funciones

generarCheckbox(categoriasSinRepetirArray, $checkboxSelection)

agregarCard($generalEvents, $listOfEvent) 


// //eventos

//CHECKBOX:
$checkboxSelection.addEventListener("change", () => {
  $listOfEvent.innerHTML = ``

  const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = getCategories(filtradosPorCheckbox)

  const filtrados=  filtrarCards($generalEvents, categorias)

  const palabras = ($keyword.value).toLowerCase()

  const matches = filtrarCoincidencias(filtrados, palabras)

  agregarCard(matches, $listOfEvent)
}
)


// //KEYWORD SEARCH:

$keyword.addEventListener("keyup", () => {
  $listOfEvent.innerHTML = ``
  
  const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = getCategories(filtradosPorCheckbox)
  
  const filtrados=  filtrarCards($generalEvents, categorias)

  const palabras = ($keyword.value).toLowerCase()

  const matches = filtrarCoincidencias(filtrados, palabras)

  agregarCard(matches, $listOfEvent)
}
)