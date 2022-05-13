//Solicitud de nombre completo y carrera
var nombre = prompt('Ingrese su Nombre Completo:');
var carrera = prompt('Ingrese su Carrera:');

//Solicitud de ramo 1 y sus notas
var ramoUno = prompt('Ingrese el nombre del primer ramo:');
var notaUnoRamoUno = prompt('Ingrese la primera nota del ramo ' + ramoUno);
var notaDosRamoUno = prompt('Ingrese la segunda nota del ramo ' + ramoUno);
var notaTresRamoUno = prompt('Ingrese la tercera nota del ramo ' + ramoUno);

//Solicitud de ramo 2 y sus notas
var ramoDos = prompt('Ingrese el nombre del segundo ramo:');
var notaUnoRamoDos = prompt('Ingrese la primera nota del ramo ' + ramoDos);
var notaDosRamoDos = prompt('Ingrese la segunda nota del ramo ' + ramoDos);
var notaTresRamoDos = prompt('Ingrese la tercera nota del ramo ' + ramoDos);

//Solicitud de ramo 3 y sus notas
var ramoTres = prompt('Ingrese el nombre del tercer ramo:');
var notaUnoRamoTres = prompt('Ingrese la primera nota del ramo ' + ramoTres);
var notaDosRamoTres = prompt('Ingrese la segunda nota del ramo ' + ramoTres);

//Solicitud nota de arpobacion
var notaAprobacion = prompt('Ingrese la nota de aprovacion requerida para el ramo ' + ramoTres);

//Calculo promedio ramo 1
var sumaRamoUno = parseInt(notaUnoRamoUno) + parseInt(notaDosRamoUno) + parseInt(notaTresRamoUno);
var promedioRamoUnoDecimal = sumaRamoUno / 3;
var promedioRamoUno = promedioRamoUnoDecimal.toFixed(1); 

//Calculo promedio ramo 2
var sumaRamoDos = parseInt(notaUnoRamoDos) + parseInt(notaDosRamoDos) + parseInt(notaTresRamoDos);
var promedioRamoDosDecimal = sumaRamoDos / 3;
var promedioRamoDos = promedioRamoDosDecimal.toFixed(1);

//Calculo de nota necesaria para aprovar el ramo 3
let promedioRamoTres = 3 * notaAprobacion - (parseInt(notaUnoRamoTres) + parseInt(notaDosRamoTres));

//Titulo
document.write(`
<div class="container">
<h1 class="pt-5">Notas Finales</h1>
</div>
`)

//Informacion del estudiante y su carrera
document.write(`
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-3 fw-bold">Nombre:</div>
    <div class="col-6 col-sm-3">${nombre}</div>
    <div class="w-100"></div>
    <div class="col-6 col-sm-3 fw-bold">Carrera:</div>
    <div class="col-6 col-sm-3">${carrera}</div>
  </div>
</div>
`);

//Tabla de notas y promedios
document.write(`
    <div class="container">
        <table class="table">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Ramo</th>
                    <th scope="col">Nota 1</th>
                    <th scope="col">Nota 2</th>
                    <th scope="col">Nota 3</th>
                    <th scope="col">Promedio</th>
                </tr>
            </thead>
            <tbody>
                <tr class="fw-bold">
                    <th scope="row">${ramoUno}</th>
                    <td>${notaUnoRamoUno}</td>
                    <td>${notaDosRamoUno}</td>
                    <td>${notaTresRamoUno}</td>
                    <td>${promedioRamoUno}</td>
                </tr>
                <tr class="fw-bold">
                    <th scope="row">${ramoDos}</th>
                    <td>${notaUnoRamoDos}</td>
                    <td>${notaDosRamoDos}</td>
                    <td>${notaTresRamoDos}</td>
                    <td>${promedioRamoDos}</td>>
                </tr>
                <tr class="fw-bold">
                    <th scope="row">${ramoTres}</th>
                    <td>${notaUnoRamoTres}</td>
                    <td>${notaDosRamoTres}</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
    `);

//Resultado de la nota necesaria para aprovar el ramo 3
document.write(`
<div class="container">
<p>Para aprobar el ramo ${ramoTres} con nota 4, necesitas obtener un ${promedioRamoTres} en la nota 3</p>
</div>
`);