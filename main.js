
/******* ELEMENTS *******/

let inputEmpleados = document.getElementById('inputEmpleados').value;

let inputBarrio = document.getElementById("inputBarrio").value;
let inputDias = document.getElementById("inputDias").value;
let tipoCrecimiento = document.getElementById("tipoCrecimiento");
let crecimientoInput = tipoCrecimiento.value



let gastoOperativo
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

        
        // INVERSION INICIAL //
        inversionInicial = (tamanoOficina * 100) + alquilerTradicional;
        addInversionInicial(inversionInicial)


        // COSTE OPERATIVO //
        let coste = 6
    
        gastoOperativo = coste*tamanoOficina*anio
    
        addCosteOperativo(gastoOperativo)

        addCosteAlquiler(alquilerTradicional1, alquilerSit)
        // calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit,inversionInicial)
        


    }else if (tipoCrecimiento.value === "media"){
        let primerAnio= empleados
        let primerAnioSit = cantidadEmpleados 
        
        tamanoOficina = primerAnio * 10

        let alquilerTradicional = tomoBarrio * tamanoOficina

        let alquilerTradicional1 = tomoBarrio * tamanoOficina * anio;
        

        alquilerSit = primerAnioSit * precioPersonaSit * anio


        // INVERSION INICIAL //
         inversionInicial = (tamanoOficina * 100) + alquilerTradicional;
         addInversionInicial(inversionInicial)


        // COSTE OPERATIVO //
        let coste = 6

        gastoOperativo = coste*tamanoOficina*anio

        addCosteOperativo(gastoOperativo)

        addCosteAlquiler(alquilerTradicional1, alquilerSit)
        // calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit,inversionInicial)


    }else if (tipoCrecimiento.value === "alta"){
        let primerAnio= empleados 
        let primerAnioSit = cantidadEmpleados 

        tamanoOficina = primerAnio * 10

        let alquilerTradicional = (tomoBarrio * 1.2) * tamanoOficina

        let alquilerTradicional1 = (tomoBarrio * 1.2) * tamanoOficina * anio;
        

        alquilerSit = primerAnioSit * (precioPersonaSit * 1.2) * anio


        // INVERSION INICIAL //
        inversionInicial = (tamanoOficina * 100) + alquilerTradicional;
        addInversionInicial(inversionInicial)


        // COSTE OPERATIVO //
        let coste = 6
    
        gastoOperativo = coste*tamanoOficina*anio
    
        addCosteOperativo(gastoOperativo)

        addCosteAlquiler(alquilerTradicional1, alquilerSit)
        // calculoInversion(tamanoOficina, alquilerTradicional)
        respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit,inversionInicial)
        
        
    }else{
        console.log("no toma")
    }
}


let respuesta = document.getElementById('resultados');


function respuestaAhorro(alquilerTradicional1, gastoOperativo, alquilerSit, inversionInicial ){

   let ahorroAnio = (alquilerTradicional1 + gastoOperativo + inversionInicial ) - alquilerSit;
   let ahorroTres = (ahorroAnio - inversionInicial)*3;

     
    respuesta.innerHTML=`   <div class="titulo-ahorro" style="color: #33d298">TU AHORRO TOTAL</div>
                            <div class="container-ahorro"
                                <div style="color: black; font-size: 17px">&#9989 <strong>€${ahorroAnio.toLocaleString('es-ES')}</strong> el primer año</div>
                                <div style="color: black; font-size: 17px; margin-bottom: 1rem">&#9989 <strong>€${ahorroTres.toLocaleString('es-ES')}</strong> a 3 años</div>
                            </div>
                            `
}





/******* FUNCIONES PARA CAMBIO DE VALOR EN CHART *******/

function addInversionInicial(datanueva) {
    myChart.data.datasets[0].data[0] = datanueva

    myChart.update();
  
}

function addCosteAlquiler(datanuevaTrad, datanueva) {
    myChart.data.datasets[1].data[0] = datanuevaTrad
    myChart.data.datasets[1].data[1] = null
    myChart.data.datasets[2].data[1] = datanueva
    myChart.data.datasets[2].data[0] = null


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
        labels: ['Oficina Tradicional', 'Oficina SitandPlug'],
        datasets: [{
            label: 'Inversion Inicial',
            data: [],
            barThickness: 100,
            backgroundColor: [
                '#D90429',
                '#D90429'
            ]},
            {
            label: 'Coste de Alquiler tradicional',
            data: [],
            barThickness: 100,
            backgroundColor: [
                '#F24C00',
                '#F24C00'
            ],
        },{
            label: 'Coste Sitandplug*',
            data: [],
            barThickness: 100,
            backgroundColor: [
                '#33d298',
                '#33d298'
            ],
        },{
            label: 'Costes Operativos',
            data: [],
            barThickness: 100,
            backgroundColor: [
                '#F9C784',
                '#F9C784'
            ],
        }
    
    ]
    },

    

    options: {
        onResize: function(myChart) {
       
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
                           display: false,
                       },
                       tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                let labelSit = myChart.data.datasets[2].data[0]

                            
                                if (label) {
                                    label += ': ';
                                }else if(labelSit == null) {
                                    labelSit = ""
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('de-DE', { maximumSignificantDigits:1 }).format(context.parsed.y);
                                    return label;
                                }
                                
                            }
                        }
                }
                   }
            }
       
          },
        
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
                    
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            var label = context.dataset.label || '';
    
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
            }
            },
        
        responsive: true,
            }
},  

);

calculoTamano(inputEmpleados, inputBarrio, inputDias, tipoCrecimiento)




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
        




 
                // tooltip:{
                //     filter: function (dataset, data) {
                           

                //                   if ((valor0 == 0) || (valor1 == 0) || (valor2 == 0)){
                //                           return false;
                //                       } else {
                //                           return true;
                //                       }
                //                  }
                //         }



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
