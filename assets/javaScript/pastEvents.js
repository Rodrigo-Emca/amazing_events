import { data } from "./data.js"
import {filtrarPorFechaPasada, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias, agregarCardPastFurure} from "./module/functions.js"

const generalEvents = data.events
const pastEventsCards = document.getElementById("pastEventsCards")

const pastEvents = filtrarPorFechaPasada(data.currentDate, generalEvents)

const $keyword = document.getElementById("keyword")

const $checkboxSelection = document.getElementById("checkboxSelection")
const categoriasRepetidas = generalEvents.map(evento => evento["category"])
const categoriasSinRepetirSet = new Set (categoriasRepetidas)
const categoriasSinRepetirArray = [... categoriasSinRepetirSet]

generarCheckbox(categoriasSinRepetirArray, $checkboxSelection)

agregarCardPastFurure(pastEvents, pastEventsCards) 


//eventos

//CHECKBOX:
$checkboxSelection.addEventListener("change", () => {
    pastEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const filtrados=  filtrarCards(pastEvents, categorias)

    const palabras = ($keyword.value).toLowerCase()

    const matches = filtrarCoincidencias(filtrados, palabras)

    agregarCardPastFurure(matches, pastEventsCards)
}
)


//KEYWORD SEARCH:

$keyword.addEventListener("keyup", () => {
    pastEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const filtrados=  filtrarCards(pastEvents, categorias)

    const palabras = ($keyword.value).toLowerCase()

    const matches = filtrarCoincidencias(filtrados, palabras)

    agregarCardPastFurure(matches, pastEventsCards)
}
)