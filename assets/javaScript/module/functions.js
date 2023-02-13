//Funciones Exportadas:

export function agregarCard(lista, elementoDestino){
    if(lista.length === 0){return elementoDestino.innerHTML = `
    <div class="d-flex flex-column justify-content-center pt-3">
    <h3 class="text-center pt-2 pb-2">Oops, could´t find your search. <br> Please, try again.</h3> <br> <img src="/assets/images/no-result-gif.gif" height="250rem"></img></div>`}
    else{
        let template = ""
        for (let evento of lista){
        template += generarCard(evento)
    }
    elementoDestino.innerHTML += template
    }
    
}

export function generarCard(evento){
return `<div class="card text-center col-md-3 m-4" style="width: 18rem;">
<img src="${evento.image}" class="card-img-top p-2" id="imageCard" alt="outing_to_the_museum">
<div class="card-body">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">${evento.description}</p>
    <div class="d-flex justify-content-around">
    <a href="./assets/html/details.html?name=${evento.name}&id=${evento["_id"]}" class="card-link">Details</a>
    </div>
</div>
</div>`
}

export function agregarCardPastFurure(lista, elementoDestino){
    if(lista.length === 0){return elementoDestino.innerHTML = `
    <div class="d-flex flex-column justify-content-center pt-3">
    <h3 class="text-center pt-2 pb-2">Oops, could´t find your search. <br> Please, try again.</h3> <br> <img src="/assets/images/no-result-gif.gif" height="250rem"></img></div>`}
    else{
    let template = ""
    for (let evento of lista){
        template += generarCardPastFuture(evento)
    }
    elementoDestino.innerHTML += template
    }
}

export function generarCardPastFuture(evento){
    return `<div class="card text-center col-md-3 m-4" style="width: 18rem;">
    <img src="${evento.image}" class="card-img-top p-2" id="imageCard" alt="outing_to_the_museum">
    <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
        <div class="d-flex justify-content-around">
        <a href="../html/details.html?name=${evento.name}&id=${evento["_id"]}" class="card-link">Details</a>
        </div>
    </div>
    </div>`
    }

export function getCategories(nodos){
const categorias = []
for(let categoria of nodos){
    if(categoria) {
    categorias.push(categoria.value)
    }    
}
return categorias
}

export function filtrarCards(lista, categorias){
if(categorias.length === 0){
    return lista
}
let aux = []
for (let evento of lista){
    for (let categoria of categorias){
    if (evento.category === categoria){
        aux.push(evento)
    }
    }
}
return aux
}

export function filtrarCoincidencias(listaEventos, keywordIngresado) {
const coincidencias = []
for (let evento of listaEventos){
    if((evento["name"].toLowerCase()).includes(keywordIngresado)){
    coincidencias.push(evento)
    console.log(evento)
}
}
return coincidencias
}

export function generarCheckbox(lista, elemento){
for(let categoria of lista) {
    elemento.innerHTML += `<label class="d-flex gap-2 col-12 col-md-3 col-lg-1">
    <input type="checkbox" name="${categoria}" value="${categoria}">
    ${categoria}</label>` 
}
}

export function filtrarPorFechaPasada(fecha, lista){
    const pastEventsDate = []
    for (let event of lista) {
        if (event.date < fecha){
            pastEventsDate.push(event)
        }
    }
    return pastEventsDate
}

export function filtrarPorFechaFutura(fecha, lista){
    const pastEventsDate = []
    for (let event of lista) {
        if (event.date > fecha){
            pastEventsDate.push(event)
        }
    }
    return pastEventsDate
}

export function generarDetailCard(event, destino) {
    destino.innerHTML += `<div class="d-flex flex-wrap justify-content-center">
    <div class="border border-dark p-3 d-flex align-items-center justify-content-center col col-md">
        <img src="${event.image}" alt="food_fair" class="col border border-dark border-2 img-fluid">
    </div>
    <div class="border border-dark p-5 col-md">
        <h1 class="text-center mb-5 fw-bold">${event.name}</h1>
        <h3 class="text-center">${event.description}</h3>
        <div class="mt-5">
            <p class="text-center fw-bold">More information:</p>
            <h5 class="text-center">Date: ${event.date}</h5>
            <h5 class="text-center">Category: ${event.category}</h5>
            <h5 class="text-center">Place: ${event.place}</h5>
            <h5 class="text-center">Capacity: ${event.capacity}</h5>
            <h5 class="text-center">Assistance: ${event.assistance}</h5>
            <h5 class="text-center">Price: ${event.price}</h5>
        </div>
    </div>
</div>`
}

