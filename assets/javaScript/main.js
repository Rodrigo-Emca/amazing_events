const $generalEvents = data.events
const $listOfEvent = document.getElementById("cardsMainColection")

const $checkboxSelection = document.getElementById("checkboxSelection")

const categoriasRepetidas = $generalEvents.map(evento => evento["category"])
const categoriasSinRepetirSet = new Set (categoriasRepetidas)
const categoriasSinRepetirArray = [... categoriasSinRepetirSet]

const $keyword = document.getElementById("keyword")


//ejecución de funciones
generarCheckbox(categoriasSinRepetirArray, $checkboxSelection)

agregarCard($generalEvents, $listOfEvent) 


//eventos

//Filtro por checkbox:
$checkboxSelection.addEventListener("change", () => {
  $listOfEvent.innerHTML = ``

  const $checkboxCheckeado = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = []
  for(let categoria of $checkboxCheckeado){
    if(categoria) {
      categorias.push(categoria.value)
    }
  }

  const filtrados=  filtrarCards($generalEvents, categorias)

  const palabras = ($keyword.value).toLowerCase()
  console.log(palabras)
  const matches = filtrarCoincidencias(filtrados, palabras)

  agregarCard(matches, $listOfEvent)
}
)


//filtro por Keyword Search:

$keyword.addEventListener("keyup", () => {
  $listOfEvent.innerHTML = ``
  
  const filtradosPorCheckbox = document.querySelectorAll(`input[type="checkbox"]:checked`)

  const categorias = []
  for(let categoria of filtradosPorCheckbox){
    if(categoria) {
      categorias.push(categoria.value)
    }
  }
  console.log(categorias.length)
  const filtrados=  filtrarCards($generalEvents, categorias)
  console.log(filtrados)
  

  const palabras = ($keyword.value).toLowerCase()

  const matches = filtrarCoincidencias(filtrados, palabras)

  agregarCard(matches, $listOfEvent)
}
)

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

function generarCheckbox(lista, elemento){
  for(let categoria of lista) {
    elemento.innerHTML += `<label class="d-flex flex-wrap gap-1">
    <input type="checkbox"  name="${categoria}" value="${categoria}">
    ${categoria}</label>` 
  }
}