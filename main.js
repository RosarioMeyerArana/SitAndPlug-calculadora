
/******* ELEMENTS *******/

let inputEmpleados = document.getElementById('inputEmpleados').value;

let inputBarrio = document.getElementById("inputBarrio").value;
let inputDias = document.getElementById("inputDias").value;
let tipoCrecimiento = document.getElementById("tipoCrecimiento");
let crecimientoInput = tipoCrecimiento.value



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
    addInversionInicial(inversionInicial)
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



// CALCULO TAMAÑO OFICINA //

function calculoTamano(tomoEmpleados, tomoBarrio, tomoDias, tipoCrecimiento){

        let calculo = (5 - tomoDias) / 5
        
        capacidadReal = tomoEmpleados * calculo
        cantidadEmpleados = capacidadReal
        

        precioPersonaSit = 250

        let anio = 12

        let empleados = tomoEmpleados


    if(tipoCrecimiento.value === "basica"){

        
        let primerAnio = empleados
        let primerAnioSit = cantidadEmpleados
        
        
        tamanoOficina = primerAnio * 10
        
        let alquilerTradicional = (tomoBarrio * 0.6) * tamanoOficina

        alquilerTradicional1 = (tomoBarrio * 0.6) * tamanoOficina * anio;

        alquilerSit = primerAnioSit * (precioPersonaSit * 0.6) * anio


        // COSTE OPERATIVO //
        let coste = 6
    
        gastoOperativo = coste*tamanoOficina*anio
    
        addCosteOperativo(gastoOperativo)

        addCosteAlquiler(alquilerTradicional1, alquilerSit)
        calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit)
        


    }else if (tipoCrecimiento.value === "media"){
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

        addCosteAlquiler(alquilerTradicional1, alquilerSit)
        calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit)


    }else if (tipoCrecimiento.value === "alta"){
        let primerAnio= empleados 
        let primerAnioSit = cantidadEmpleados 

        tamanoOficina = primerAnio * 10

        let alquilerTradicional = (tomoBarrio * 1.2) * tamanoOficina

        let alquilerTradicional1 = (tomoBarrio * 1.2) * tamanoOficina * anio;
        

        alquilerSit = primerAnioSit * (precioPersonaSit * 1.2) * anio

        // COSTE OPERATIVO //
        let coste = 6
    
        gastoOperativo = coste*tamanoOficina*anio
    
        addCosteOperativo(gastoOperativo)

        addCosteAlquiler(alquilerTradicional1, alquilerSit)
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

     
    respuesta.innerHTML=`   <div class="titulo-ahorro mb-2" style="color: #33d298">AHORRO TOTAL</div>
                            <div class="container-ahorro"
                                <div style="color: black">Total ahorro anual: €${ahorroAnio.toLocaleString('es-ES')}</div>
                                <div style="color: black">Total ahorro a 3 años: €${ahorroTres.toLocaleString('es-ES')}</div>
                            </div>
                            `
}


let gastoOperativo


// &#9989
// CALCULO COSTE OPERATIVO //
// function costeOperativo(tamanoOficina){
//     let coste = 6
//     let anio = 12

//     gastoOperativo = coste*tamanoOficina*anio

//     addCosteOperativo(gastoOperativo, null)

// }



/******* FUNCIONES PARA CAMBIO DE VALOR EN CHART *******/

function addInversionInicial(datanueva) {
    myChart.data.datasets[0].data[0] = datanueva

    myChart.update();
  
}

function addCosteAlquiler(datanuevaTrad, datanueva) {
    myChart.data.datasets[1].data[0] = datanuevaTrad
    myChart.data.datasets[2].data[1] = datanueva

    myChart.update();
    
}



function addCosteOperativo(datanueva) {
    myChart.data.datasets[3].data[0] = datanueva
    


    myChart.update();

}


/******* CHART *******/

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tradicional', 'SitandPlug'],
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
          
            backgroundColor: [
                '#F24C00',
                '#F24C00'
            ],
        },{
            label: 'Coste Sitandplug*',
            data: [],
          
            backgroundColor: [
                '#33d298',
                '#33d298'
            ],
        },{
            label: 'Costes Operativos',
            data: [],
          
            backgroundColor: [
                '#F9C784',
                '#F9C784'
            ],
        }
    
    ]
    },

    

    options: {
        onResize: function(myChart, size) {

            var noLegend = (size.height < 140) ? false : true;
       
            myChart.options = {
                scales: {
                    x: {
                        grid:{
                            display: false
                        },
                        stacked: true
                    },
                    y: {
                        grid:{
                            display: false
                        },
                        major: true,
                        ticks: {
                            min: 0,
                            count: 5
                        },
                        
                        beginAtZero: true,
                        stacked: true
                    }    
                },
                   plugins:{
                       legend:{
                           display: false
                       }
                   }
            }
       
          },
        // onResize: function(myChart, size) {
        //     myChart.options.plugins.legend.display = (size.height >= 140);
        // },

        scales: {
            x: {
                grid:{
                    display: false
                },
                stacked: true
            },
            y: {
                grid:{
                    display: false
                },
                major: true,
                ticks: {
                    min: 0,
                    count: 5
                },
                
                beginAtZero: true,
                stacked: true
            }    
        },
            plugins: {
                legend: {
                    position: 'right',
                    labels:{
                        boxWidth: 10,
                        font: {
                            size: 10
                        },
                    },
                    maxWidth:170
                },
                // tooltip:{
                //     filter: function (dataset, data) {
                           

                //                   if ((valor0 == 0) || (valor1 == 0) || (valor2 == 0)){
                //                           return false;
                //                       } else {
                //                           return true;
                //                       }
                //                  }
                //         }
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
      //  plugins: {
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
        
       // },
        
        responsive: true,
        // responsive: {
        //     rules: [{
        //         chartOptions: {
        //             legend: {
        //                 enabled: false
        //             }
        //         },
        //         condition: {
        //             maxWidth: 500
        //         }
        //     }]
        // }
    }
},  

);

calculoTamano(inputEmpleados, inputBarrio, inputDias, tipoCrecimiento)

