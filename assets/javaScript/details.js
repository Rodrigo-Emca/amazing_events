let generalEvents = data["events"]
let detailsCard = document.getElementById("detailsCard")

console.log(generalEvents)

// for (let event of generalEvents) {
//     detailsCard.innerHTML += `<div class="d-flex flex-wrap justify-content-center">
//     <div class="border border-dark p-3 d-flex align-items-center justify-content-center col col-md">
//         <img src="${event.image}" alt="food_fair" class="col border border-dark border-2 img-fluid">
//     </div>
//     <div class="border border-dark p-5 col-md">
//         <h1 class="text-center mb-5 fw-bold">${event.name}</h1>
//         <h3 class="text-center">${event.description}</h3>
//         <div class="mt-5">
//             <p class="text-center fw-bold">More information:</p>
//             <h5 class="text-center">${event.date}</h5>
//             <h5 class="text-center">${event.category}</h5>
//             <h5 class="text-center">${event.place}</h5>
//             <h5 class="text-center">${event.capacity}</h5>
//             <h5 class="text-center">${event.assistance}</h5>
//             <h5 class="text-center">${event.price}</h5>
//         </div>
//     </div>
// </div>`
// }