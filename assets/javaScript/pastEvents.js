const generalEvents = data.events
const pastEventsCards = document.getElementById("pastEventsCards")


const pastEventsDate = []
function filtrarPorFecha(fecha, lista){
    let aux = []
    for (let event of lista) {
        if (event.date < fecha){
            pastEventsDate.push(event)
        }
    }
    return aux
}
const pastEvents = filtrarPorFecha(data.currentDate, generalEvents)


for (let event of pastEventsDate) {
    pastEventsCards.innerHTML += `<div class="card text-center col-md-3 m-4" style="width: 18rem;">
    <img src="${event["image"]}" class="card-img-top p-2" id="imageCard" alt="outing_to_the_museum">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="d-flex justify-content-around">
        <a href="../html/details.html" class="card-link">Details</a>
        </div>
    </div>
</div>`
}