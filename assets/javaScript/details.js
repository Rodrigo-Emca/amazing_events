import {generarDetailCard} from "./module/functions.js"

let detailsCard = document.getElementById("detailsCard")

const params = new URLSearchParams(location.search)
const nameEvent = params.get("name")
const id = parseInt(params.get("id"))
document.title = `Details of ${nameEvent}`

fetch('https://mindhub-xj03.onrender.com/api/amazing')
    .then(response => response.json() )
    .then(datos => {
        const datosEventos = datos.events
        const detalleEvento = datosEventos.find(evento => evento["_id"] === id)
        generarDetailCard(detalleEvento, detailsCard)
    })
    .catch(error => console.log(error))
