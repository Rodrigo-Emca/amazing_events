
import {filtrarPorFechaPasada, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias, agregarCardPastFurure} from "./module/functions.js"

const pastEventsCards = document.getElementById("pastEventsCards")
const $checkboxSelection = document.getElementById("checkboxSelection")
const $keyword = document.getElementById("keyword")

let eventos;
let currentDate;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        eventos = datos.events
        currentDate = datos.currentDate
        agregarCardPastFurure(filtrarPorFechaPasada(currentDate, eventos), pastEventsCards);
        generarCheckbox([...new Set(eventos.map(evento => evento["category"]))], $checkboxSelection)
    })
    .catch(error => console.log(error))


//eventos

//CHECKBOX:
$checkboxSelection.addEventListener("change", () => {
    pastEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaPasada(currentDate, eventos), categorias), palabras), pastEventsCards)
}
)


//KEYWORD SEARCH:

$keyword.addEventListener("keyup", () => {
    pastEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaPasada(currentDate, eventos), categorias), palabras), pastEventsCards)
}
)