//Funciones Exportadas:

export function agregarCard(lista, elementoDestino){
    if(lista.length === 0){return elementoDestino.innerHTML = `
    <div class="d-flex flex-column justify-content-center pt-3">
    <h3 class="text-center pt-2 pb-2">Oops, could´t find your search. <br> Please, try again.</h3> <br> <img src="/assets/images/no-result-gif.gif" height="500rem"></img></div>`}
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
<img src="${evento.image}" class="card-img-top p-2" id="imageCard" alt="${evento.name}">
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
    <h3 class="text-center pt-2 pb-2">Oops, could´t find your search. <br> Please, try again.</h3> <br> <img src="/assets/images/no-result-gif.gif" height="500rem"></img></div>`}
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
    <img src="${evento.image}" class="card-img-top p-2" id="imageCard" alt="${evento.name}">
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

export function getCategoriasTodas(array){
    const categorias = []
    for(let categoria of array){
        if(categoria) {
        categorias.push(categoria.category)
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

export function porcentajeMasAlto(array){
    let aux = []
    array.forEach(element => {
      let promedio =(element.assistance / element.capacity *100).toFixed(2)
      element.promedio = promedio
      aux.push(element)
    });
    let auxMax = aux.sort(function(a, b){return b.promedio - a.promedio}).slice([0],[1])
    let auxCompl = auxMax[0].name + " " + auxMax[0].promedio + "%"
    return auxCompl
}

export function porcentajeMasBajo(array){
  let aux = []
  array.forEach(element => {
    let promedio = (element.assistance / element.capacity *100).toFixed(2)
    element.promedio = promedio
    aux.push(element)
  });
  let auxMax = aux.sort(function(a, b){return a.promedio - b.promedio}).slice([0],[1])
  let auxCompl = auxMax[0].name + " " + auxMax[0].promedio + "%"
  return auxCompl
}

export function eventoMayorCapacidad(array){
  let aux = array.sort(function(a, b){return b.capacity - a.capacity}).slice([0],[1])
  let auxCompl = aux[0].name + " " + aux[0].capacity
  return auxCompl
}

export function crearPrimeraTabla(evento1, evento2, evento3){
firstTable.innerHTML = `<table class=" container border border-secondary" >
<thead class="border border-secondary bg-dark-subtle">
    <tr>
        <th colspan="3">Events Statistics</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td class="col-4 border border-secondary text-center">Events with the highest percentage of attendance</td>
        <td class="col-4 border border-secondary text-center">Events with the lowest percentage of attendance</td>
        <td class="col-4 border border-secondary text-center">Event with larger capacity</td>
    </tr>
    <tr>
        <td class="col-4 border border-secondary text-center">${evento1}</td>
        <td class="col-4 border border-secondary text-center">${evento2}</td>
        <td class="col-4 border border-secondary text-center">${evento3}</td>
    </tr>
</tbody>
</table>`
}

    export function gananciasyporcentajesEventosPasados(array){
        let aux = []
        array.forEach(element => {
        const totalRevenues= (element.price) * (element.assistance)
        element.gananciasTotales = parseInt(totalRevenues)
        const promedio =(element.assistance / element.capacity *100).toFixed(2)
        element.promedioAsistencia = parseInt(promedio)
        aux.push(element)
        })
        return aux
    }

    export function gananciasyporcentajesEventosFuturos(array){
        let aux = []
        array.forEach(element => {
        const revenues = parseInt(element.price)
        const estimado = parseInt(element.estimate)
        const totalRevenues= revenues * estimado
        element.gananciasTotales = parseInt(totalRevenues)
        const promedio =(element.estimate / element.capacity *100)
        element.promedioAsistencia = parseInt(promedio)
        aux.push(element)
        })
        return aux
    }

    export function contenidoSegundaTabla(lista, categorias){
        let aux = []
        categorias.forEach(categoria => {
        let revenue = lista.map( event => {
            if(event.category.includes(categoria)){
            return event.gananciasTotales
            }
        }).filter(Boolean) //le quita los undefined

        let attendance = lista.map(event => {
            if(event.category.includes(categoria)){
            return event.promedioAsistencia
            }
        }).filter(Boolean)

        aux.push([categoria,  "$" + revenue.reduce((a,b) => a + b), attendance.slice([0],[1]) + "%"])
        
    })
        return aux
    }

    export function contenidoTerceraTabla(lista, categorias){
        let aux = []
        categorias.forEach(categoria => {
        let revenue = lista.map( event => {
            if(event.category.includes(categoria)){
            return event.gananciasTotales
            }
        }).filter(Boolean) //le quita los undefined

        let attendance = lista.map(event => {
            if(event.category.includes(categoria)){
            return event.promedioAsistencia
            }
        }).filter(Boolean)

        aux.push([categoria, "$" + revenue.reduce((a,b) => a + b), (attendance.reduce((a,b) => a + b)/attendance.length).toFixed(2) + "%"])
        })
        return aux
    }


    export function imprimirTablas(contenido, destino){
        for (let evento of contenido){
            destino.innerHTML += `<tr>
            <td class="col-4 border border-secondary text-center">${evento[0]}</td>
            <td class="col-4 border border-secondary text-center">${evento[1]}</td>
            <td class="col-4 border border-secondary text-center">${evento[2]}</td>
            </tr>`
        }
    }