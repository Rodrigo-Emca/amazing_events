import { data } from "./data.js"
import {generarDetailCard} from "./module/functions.js"

let generalEvents = data["events"]
let detailsCard = document.getElementById("detailsCard")


const params = new URLSearchParams(location.search)
const nameEvent = params.get("name")
const id = params.get("id")

document.title = `Details of ${nameEvent}`

const detalleEvento = generalEvents.find(evento => evento["_id"] === id)

generarDetailCard(detalleEvento, detailsCard)