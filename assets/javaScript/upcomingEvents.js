
import {filtrarPorFechaFutura, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias, agregarCardPastFurure} from "./module/functions.js"

let upcomingEventsCards = document.getElementById("upcomingEventsCards")
const $checkboxSelection = document.getElementById("checkboxSelection")
const $keyword = document.getElementById("keyword")

let eventos;
let currentDate;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        eventos = datos.events
        currentDate = datos.currentDate
        let eventosFuturos = filtrarPorFechaFutura(currentDate, eventos)
        agregarCardPastFurure(filtrarPorFechaFutura(currentDate, eventos), upcomingEventsCards);
        generarCheckbox([...new Set(eventosFuturos.map(evento => evento["category"]))], $checkboxSelection)
    })
    .catch(error => console.log(error))


//eventos

//CHECKBOX:
$checkboxSelection.addEventListener("change", () => {
    upcomingEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaFutura(currentDate, eventos), categorias), palabras), upcomingEventsCards)
}
)


//KEYWORD SEARCH:

$keyword.addEventListener("keyup", () => {
    upcomingEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaFutura(currentDate, eventos), categorias), palabras), upcomingEventsCards)
}
)