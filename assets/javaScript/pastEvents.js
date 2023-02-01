let generalEvents = data.events
let pastEventsCards = document.getElementById("pastEventsCards")

const pastEventsDate = []
// for (let i = 0; i < generalEvents.length; i++) {
//     if (generalEvents[i]["date"] < data.currentDate)
//     pastEventsDate.push(generalEvents[i])
// }
// console.log(pastEventsDate)
// console.log(pastEventsDate.length)

for (let event of generalEvents) {
    // console.log(event.date)
    if (event.date < data.currentDate){
        pastEventsDate.push(event)
    }
}
// console.log(pastEventsDate)
// console.log(pastEventsDate.length)

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