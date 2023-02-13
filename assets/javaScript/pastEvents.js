
import {filtrarPorFechaPasada, generarCheckbox, getCategories, filtrarCards, filtrarCoincidencias, agregarCardPastFurure} from "./module/functions.js"

const pastEventsCards = document.getElementById("pastEventsCards")
const $checkboxSelection = document.getElementById("checkboxSelection")
const $keyword = document.getElementById("keyword")

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        agregarCardPastFurure(filtrarPorFechaPasada(datos.currentDate, datos.events), pastEventsCards);
        generarCheckbox([...new Set(datos.events.map(evento => evento["category"]))], $checkboxSelection)
    })
    .catch(error => console.log(error))


//eventos

//CHECKBOX:
$checkboxSelection.addEventListener("change", () => {
    pastEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaPasada(datos.currentDate, datos.events), categorias), palabras), pastEventsCards)
    })
    .catch(error => console.log(error))
}
)


//KEYWORD SEARCH:

$keyword.addEventListener("keyup", () => {
    pastEventsCards.innerHTML = ``

    const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

    const categorias = getCategories(filtradosPorCheckbox)

    const palabras = ($keyword.value).toLowerCase()

    fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        agregarCardPastFurure(filtrarCoincidencias(filtrarCards(filtrarPorFechaPasada(datos.currentDate, datos.events), categorias), palabras), pastEventsCards)
    })
    .catch(error => console.log(error))
}
)