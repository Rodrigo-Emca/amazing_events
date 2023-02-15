import {porcentajeMasAlto, porcentajeMasBajo, eventoMayorCapacidad, crearPrimeraTabla, filtrarPorFechaPasada, filtrarPorFechaFutura, getCategoriasTodas, contenidoSegundaTabla, contenidoTerceraTabla, gananciasyporcentajesEventosPasados, gananciasyporcentajesEventosFuturos, imprimirTablas} from "./module/functions.js"


fetch('https://mindhub-xj03.onrender.com/api/amazing') //CREA PRIMERA TABLA
  .then(response => response.json() )
  .then(datos => {
    let eventosPasados = filtrarPorFechaPasada(datos.currentDate, datos.events)
    crearPrimeraTabla(porcentajeMasAlto(eventosPasados), porcentajeMasBajo(eventosPasados),eventoMayorCapacidad(datos.events))
  })
  .catch(error => console.log(error))


  fetch('https://mindhub-xj03.onrender.com/api/amazing') //CREANDO SEGUNDA TABLA //EVENTOS FUTUROS
  .then(response => response.json() )
  .then(datos => {
    let eventosFuturos = filtrarPorFechaFutura(datos.currentDate, datos.events)
    let gananciasyPorcentajesFuturos = gananciasyporcentajesEventosFuturos(eventosFuturos) 
    //Array con objetos: eventos con gananciasTotales y PromedioAsistencia agregados.

    let categoriasFuturas = [... new Set (getCategoriasTodas(eventosFuturos))]

    const contenidoFutureTable = contenidoSegundaTabla(gananciasyPorcentajesFuturos, categoriasFuturas)
    //console.log(contenidoFutureTable)

    let bodyFutureEventsTable = document.getElementById("secondTable")
    imprimirTablas(contenidoFutureTable, bodyFutureEventsTable)
  })
  .catch(error => console.log(error))


  fetch('https://mindhub-xj03.onrender.com/api/amazing') //CREANDO TERCERA TABLA//EVENTOS PASADOS
  .then(response => response.json() )
  .then(datos => {
    let eventosPasados = filtrarPorFechaPasada(datos.currentDate, datos.events)
  
    let gananciasyPorcentajesPasados = gananciasyporcentajesEventosPasados(eventosPasados) 
    //Array con objetos: eventos con gananciasTotales y PromedioAsistencia agregados.

    let categoriasPasadas= [... new Set (getCategoriasTodas(eventosPasados))]
    
    const contenidoPastTable = contenidoTerceraTabla(gananciasyPorcentajesPasados, categoriasPasadas)
    //console.log(contenidoPastTable)

    let bodyPastEventsTable = document.getElementById("thirdTable")
    imprimirTablas(contenidoPastTable, bodyPastEventsTable)

  })
  .catch(error => console.log(error))