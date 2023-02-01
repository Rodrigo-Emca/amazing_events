let generalEvents = data.events
let listOfEvent = document.getElementById("cardsMainColection")

for (let event of generalEvents) {
    listOfEvent.innerHTML += `<div class="card text-center col-md-3 m-2" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top p-2" id="imageCard" alt="outing_to_the_museum">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <div class="d-flex justify-content-around">
        <a href="./assets/html/details.html" class="card-link">Details</a>
      </div>
    </div>
</div>`
}