import { data } from "./data.js";
import {filtrarPorFechaFutura, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias, agregarCardPastFurure} from "./module/functions.js"

let generalEvents = data.events
let upcomingEventsCards = document.getElementById("upcomingEventsCards")

const upcomingEvents = filtrarPorFechaFutura(data.currentDate, generalEvents)

const $keyword = document.getElementById("keyword")

const $checkboxSelection = document.getElementById("checkboxSelection")
const categoriasRepetidas = generalEvents.map(evento => evento["category"])
const categoriasSinRepetirSet = new Set (categoriasRepetidas)
const categoriasSinRepetirArray = [... categoriasSinRepetirSet]


generarCheckbox(categoriasSinRepetirArray, $checkboxSelection)

agregarCardPastFurure(upcomingEvents, upcomingEventsCards) 


//eventos

//CHECKBOX:
$checkboxSelection.addEventListener("change", () => {
    upcomingEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const filtrados=  filtrarCards(upcomingEvents, categorias)

    const palabras = ($keyword.value).toLowerCase()

    const matches = filtrarCoincidencias(filtrados, palabras)

    agregarCardPastFurure(matches, upcomingEventsCards)
}
)


//KEYWORD SEARCH:

$keyword.addEventListener("keyup", () => {
    upcomingEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const filtrados=  filtrarCards(upcomingEvents, categorias)

    const palabras = ($keyword.value).toLowerCase()

    const matches = filtrarCoincidencias(filtrados, palabras)

    agregarCardPastFurure(matches, upcomingEventsCards)
}
)