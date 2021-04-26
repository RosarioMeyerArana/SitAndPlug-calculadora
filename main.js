
/******* ELEMENTS *******/

let inputEmpleados = document.getElementById('inputEmpleados').value;

let inputBarrio = document.getElementById("inputBarrio").value;
let inputDias = document.getElementById("inputDias").value;
let tipoCrecimiento = document.getElementById("tipoCrecimiento");
let crecimientoInput = tipoCrecimiento.value

let inputEmpleadosM = document.getElementById('inputEmpleadosM').value;

let inputBarrioM = document.getElementById("inputBarrioM").value;
let inputDiasM = document.getElementById("inputDiasM").value;
let tipoCrecimientoM = document.getElementById("tipoCrecimientoM");



let tamanoOficina
let inversionInicial

let precioPersonaSit
let alquilerSit
let capacidadReal
let alquilerTradicional1
let cantidadEmpleados 
let inputCrecimiento

let cuantosEmpleados
let cuantosDias
let queBarrio


// CALCULO INVERSION INICIAL //
function calculoInversion(tamanoOficina, alquilerTradicional){
    inversionInicial = (tamanoOficina * 100) + alquilerTradicional;
    addInversionInicial(inversionInicial,0)
}


let tomoEmpleados = document.getElementById('inputEmpleados')
let tomoBarrio = document.getElementById("inputBarrio")
let tomoDias = document.getElementById("inputDias")


const todos = () =>{
    inputCrecimiento = tipoCrecimiento.value
    cuantosEmpleados = tomoEmpleados.value
    queBarrio = tomoBarrio.value
    cuantosDias = tomoDias.value
}

const todosM = () =>{
    inputCrecimiento = tipoCrecimientoM.value
    cuantosEmpleados = tomoEmpleadosM.value
    queBarrio = tomoBarrioM.value
    cuantosDias = tomoDiasM.value
}


// CALCULO TAMAÑO OFICINA //

function calculoTamano(tomoEmpleados, tomoBarrio, tomoDias, tipoCrecimiento){

        let calculo = (5 - tomoDias) / 5
        
        capacidadReal = tomoEmpleados * calculo
        cantidadEmpleados = capacidadReal
        

        precioPersonaSit = 250

        let anio = 12

        let empleados = tomoEmpleados


    if(tipoCrecimiento.value === "decrecimiento"){

        
        let primerAnio = empleados * 0.85
        let primerAnioSit = cantidadEmpleados * 0.85
        
        
        tamanoOficina = primerAnio * 10
        
        let alquilerTradicional = tomoBarrio * tamanoOficina

        alquilerTradicional1 = tomoBarrio * tamanoOficina * anio;

        alquilerSit = primerAnioSit * precioPersonaSit * anio


        // COSTE OPERATIVO //
        let coste = 6
    
        gastoOperativo = coste*tamanoOficina*anio
    
        addCosteOperativo(gastoOperativo)



        addCosteAlquiler(alquilerTradicional1,alquilerSit,alquilerTradicional1,alquilerSit,alquilerTradicional1,alquilerSit)
        calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit)
        


    }else if (tipoCrecimiento.value === "estable"){
        let primerAnio= empleados
        let primerAnioSit = cantidadEmpleados 
        
        tamanoOficina = primerAnio * 10

        let alquilerTradicional = tomoBarrio * tamanoOficina

        let alquilerTradicional1 = tomoBarrio * tamanoOficina * anio;
        

        alquilerSit = primerAnioSit * precioPersonaSit * anio


        // COSTE OPERATIVO //
        let coste = 6

        gastoOperativo = coste*tamanoOficina*anio

        addCosteOperativo(gastoOperativo)

        addCosteAlquiler(alquilerTradicional1,alquilerSit,alquilerTradicional1,alquilerSit,alquilerTradicional1,alquilerSit)
        calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit)


    }else if (tipoCrecimiento.value === "crecimiento"){
        let primerAnio= empleados * 1.2
        let primerAnioSit = cantidadEmpleados * 1.2

        tamanoOficina = primerAnio * 10

        let alquilerTradicional = tomoBarrio * tamanoOficina

        let alquilerTradicional1 = tomoBarrio * tamanoOficina * anio;
        

        alquilerSit = primerAnioSit * precioPersonaSit * anio

        // COSTE OPERATIVO //
        let coste = 6
    
        gastoOperativo = coste*tamanoOficina*anio
    
        addCosteOperativo(gastoOperativo)

        addCosteAlquiler(alquilerTradicional1,alquilerSit,alquilerTradicional1,alquilerSit,alquilerTradicional1,alquilerSit)
        calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit)
        
        

    }else if (tipoCrecimiento.value === "supercrecimiento"){
        let primerAnio= empleados * 2
        let segundoAnio= primerAnio * 1.3
        let tercerAnio= segundoAnio * 1.2

        let primerAnioSit = cantidadEmpleados * 2
        let segundoAnioSit = primerAnioSit * 1.3
        let tercerAnioSit = segundoAnioSit * 1.2
        
        tamanoOficina = tercerAnio * 10

        let alquilerTradicional = tomoBarrio * tamanoOficina

        let alquilerTradicional1 = tomoBarrio * tamanoOficina * anio;
        

        alquilerSit = primerAnioSit * precioPersonaSit * anio
        let alquilerSit2 = segundoAnioSit * precioPersonaSit * anio
        let alquilerSit3 = tercerAnioSit * precioPersonaSit * anio

        // COSTE OPERATIVO //
        let coste = 6
    
        gastoOperativo = coste*tamanoOficina*anio
    
        addCosteOperativo(gastoOperativo)


        addCosteAlquiler(alquilerTradicional1, alquilerSit, alquilerTradicional1, alquilerSit2,alquilerTradicional1,alquilerSit3)
        calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit)
        
    }else{
        console.log("no toma")
    }
}



let respuesta = document.getElementById('resultados');


function respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit){

   let ahorroAnio = (alquilerTradicional1 + gastoOperativo ) - alquilerSit;
   let ahorroTres = ahorroAnio*3;

     
    respuesta.innerHTML+=`   <div class="container-ahorro"
                                <div style="color: black">&#9989 Total ahorro anual: <br> € ${ahorroAnio.toLocaleString('es-ES')}</div>
                                <div style="color: black">&#9989 Total ahorro a 3 años: <br> € ${ahorroTres.toLocaleString('es-ES')}</div>
                            </div>
                            `
}


let gastoOperativo

// CALCULO COSTE OPERATIVO //
function costeOperativo(tamanoOficina){
    let coste = 6
    let anio = 12

    gastoOperativo = coste*tamanoOficina*anio

    addCosteOperativo(gastoOperativo,0)

}



/******* FUNCIONES PARA CAMBIO DE VALOR EN CHART *******/

function addInversionInicial(datanueva, datanuevaTrad) {
    myChart.data.datasets[0].data[0] = datanueva
    myChart.data.datasets[0].data[1] = datanuevaTrad

    myChart2.data.datasets[0].data[0] = datanueva
    myChart2.data.datasets[0].data[1] = datanuevaTrad

    myChart.update();
    myChart2.update();
}

function addCosteAlquiler(datanuevaTrad, datanueva, datanuevaTrad2, datanueva2, datanuevaTrad3,datanueva3) {
    myChart.data.datasets[1].data[0] = datanuevaTrad
    myChart.data.datasets[2].data[1] = datanueva
    myChart.data.datasets[1].data[2] = datanuevaTrad2
    myChart.data.datasets[2].data[3] = datanueva2
    myChart.data.datasets[1].data[4] = datanuevaTrad3
    myChart.data.datasets[2].data[5] = datanueva3


    myChart2.data.datasets[1].data[0] = datanuevaTrad
    myChart2.data.datasets[2].data[1] = datanueva

    myChart.update();
    myChart2.update();
}

function addCosteOperativo(datanueva, datanuevaTrad) {
    myChart.data.datasets[3].data[0] = datanueva
    myChart.data.datasets[3].data[1] = datanuevaTrad
    myChart.data.datasets[3].data[2] = datanueva
    myChart.data.datasets[3].data[3] = datanuevaTrad
    myChart.data.datasets[3].data[4] = datanueva
    myChart.data.datasets[3].data[5] = datanuevaTrad

    myChart2.data.datasets[3].data[0] = datanueva
    myChart2.data.datasets[3].data[1] = datanuevaTrad

    myChart.update();
    myChart2.update();
}


/******* CHART MOBILE *******/

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tradicional', 'SitandPlug'],
        datasets: [{
            label: 'Inversion Inicial',
            data: [],
            barThickness: 45,
            backgroundColor: [
                '#D90429',
                '#D90429'
            ]},
            {
            label: 'Coste de Alquiler tradicional',
            data: [],
            barThickness: 45,
            backgroundColor: [
                '#F24C00',
                '#F24C00'
            ],
        },{
            label: 'Coste Sitandplug*',
            data: [],
            barThickness: 45,
            backgroundColor: [
                '#33d298',
                '#33d298'
            ],
        },{
            label: 'Costes Operativos',
            data: [],
            barThickness: 45,
            backgroundColor: [
                '#F9C784',
                '#F9C784'
            ]
        }
    
    ]
    },

    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                beginAtZero: true,
                stacked: true
            }    
        },
        tooltips: {
            mode: 'index'},    
        //responsive: true,
        maintainAspectRatio: true
    }
},  

);


/******* CHART *******/

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tradicional', 'SitandPlug', 'Tradicional','SitandPlug', 'Tradicional', 'SitandPlug'],
        datasets: [{
            label: 'Inversion Inicial',
            data: [],
           // barThickness: 51,
            backgroundColor: [
                '#D90429',
                '#D90429'
            ]},
            {
            label: 'Coste de Alquiler tradicional',
            data: [],
          //  barThickness: 51,
            backgroundColor: [
                '#F24C00',
                '#F24C00'
            ],
        },{
            label: 'Coste Sitandplug*',
            data: [],
           // barThickness: 51,
            backgroundColor: [
                '#33d298',
                '#33d298'
            ],
        },{
            label: 'Costes Operativos',
            data: [],
          //  barThickness: 51,
            backgroundColor: [
                '#F9C784',
                '#F9C784'
            ],
        }
    
    ]
    },

    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                beginAtZero: true,
                stacked: true
            }    
        },
        
        tooltip: {
                filter: function (tooltipItem, data) {
                     var datapointValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    console.log(datapointValue)
                      if (datapointValue == 0) {
                           return false
                           return console.log(datapointValue)
                      } else {
                           return true;
                          return console.log(datapointValue)
                      }
                }
            },
        //  tooltips: {
        //         mode: 'index',
        //         intersect: false,
        //         filter: function (tooltipItem) {
        //             let hola = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]

        //             return tooltipItem.datasetIndex == 0;
        //             }
                // filter: function () {
                //     let value0 = myChart.data.datasets[0].data[1];
                //     console.log(value0)
                //     if (value0 == 0) {
                //         return false;
                //     } else {
                //         return true;
                //     }
                // }
        // },
        // interaction: {
        //     mode: 'nearest',
        //     axis: 'y'
        // }, 
        plugins: {
                // callbacks: {
                //     label: function(context) {
                //         var label = context.dataset.label || '';

                //         if (label) {
                //             label += ':';
                //         }
                //         if (context.parsed.y !== null) {
                //             label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(context.parsed.y);
                //         }
                //         return label
                //         }
                //     }
        
        },
        
        responsive: true
    }
},  

);

calculoTamano(inputEmpleados, inputBarrio, inputDias, tipoCrecimiento)

