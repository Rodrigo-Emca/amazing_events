const $generalEvents = data.events
const $listOfEvent = document.getElementById("cardsMainColection")

const $checkboxSelection = document.getElementById("checkboxSelection")

const categoriasRepetidas = $generalEvents.map(evento => evento["category"])
const categoriasSinRepetirSet = new Set (categoriasRepetidas)
const categoriasSinRepetirArray = [... categoriasSinRepetirSet]

const $keyword = document.getElementById("keyword")
//console.log($keyword)


//ejecución de funciones

//La que crea el checkbox:
generarCheckbox(categoriasSinRepetirArray, $checkboxSelection)

//
agregarCard($generalEvents, $listOfEvent) //Las cartas se generan desde el inicio. Luego, sucede el evento...


//eventos

//Filtro por checkbox:
$checkboxSelection.addEventListener("change", (evento) => {
  $listOfEvent.innerHTML = `` //Cuando el evento se ejecuta, deja sin tarjetas la pagina, selecciona los checkbox checked, y luego ejecuta el filtro.

  const $checkboxCheckeado = document.querySelectorAll(`input[type="checkbox"]:checked`)
  //console.log($checkboxCheckeado)

  const categorias = []
  for(let categoria of $checkboxCheckeado){
    if(categoria) {
      categorias.push(categoria.value)
    }
  }
  console.log(categorias.length)

  const filtrados=  filtrarCards($generalEvents, categorias)

  agregarCard(filtrados, $listOfEvent)
}
)


//filtro por Keyword Search:

$keyword.addEventListener("keyup", (event) => {
  $listOfEvent.innerHTML = ``

  const palabras = ($keyword.value).toLowerCase()
  console.log(palabras)

  let matches = filtrarCoincidencias($generalEvents, palabras)
  console.log(matches)

  agregarCard(matches, $listOfEvent)
}
)

function filtrarCoincidencias(listaEventos, keywordIngresado) {
  const coincidencias = []
  for (let evento of listaEventos){
    if((evento["name"].toLowerCase()).includes(keywordIngresado)){
    coincidencias.push(evento)
    console.log(evento)
  }
}
return coincidencias
}

//funciones

function agregarCard(lista, elementoDestino){
  let template = ""
  for (let evento of lista){
    template += generarCard(evento)
  }
  elementoDestino.innerHTML += template
}

function generarCard(evento){
  return `<div class="card text-center col-md-3 m-4" style="width: 18rem;">
  <img src="${evento.image}" class="card-img-top p-2" id="imageCard" alt="outing_to_the_museum">
  <div class="card-body">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">${evento.description}</p>
    <div class="d-flex justify-content-around">
      <a href="./assets/html/details.html" class="card-link">Details</a>
    </div>
  </div>
</div>`
}

function filtrarCards(lista, categorias){
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


function generarCheckbox(lista, elemento){
  for(let categoria of lista) {
    elemento.innerHTML += `<label class="d-flex flex-wrap gap-1">
    <input type="checkbox"  name="${categoria}" value="${categoria}">
    ${categoria}</label>` 
  }
}