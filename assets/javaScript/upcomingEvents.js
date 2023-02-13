
import {filtrarPorFechaFutura, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias, agregarCardPastFurure} from "./module/functions.js"

let upcomingEventsCards = document.getElementById("upcomingEventsCards")
const $checkboxSelection = document.getElementById("checkboxSelection")
const $keyword = document.getElementById("keyword")

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        agregarCardPastFurure(filtrarPorFechaFutura(datos.currentDate, datos.events), upcomingEventsCards);
        generarCheckbox([...new Set(datos.events.map(evento => evento["category"]))], $checkboxSelection)
    })
    .catch(error => console.log(error))


//eventos

//CHECKBOX:
$checkboxSelection.addEventListener("change", () => {
    upcomingEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaFutura(datos.currentDate, datos.events), categorias), palabras), upcomingEventsCards)
    })
    .catch(error => console.log(error))
}
)


//KEYWORD SEARCH:

$keyword.addEventListener("keyup", () => {
    upcomingEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaFutura(datos.currentDate, datos.events), categorias), palabras), upcomingEventsCards)
    })
    .catch(error => console.log(error))
}
)