function subH1(textoH1){//funcion para crear un subtitulo
    return document.write("<h1>" + textoH1 + "</h1>");
};
function subH2(textoH2){//funcion para crear un subtitulo
    return document.write("<h2>" + textoH2 + "</h2>");
};

var cmates = ["Pedro", "Juan", "Diego", "Victor", "Tania"];
var contador = cmates.length;
function showCmates(array){
    for (var i = 0; i < cmates.length; i++){
        document.write( cmates[i] + "<br>" );
    }
};


subH1("Ejercicios Modulo2 Tarea2");

subH2("Compañeros de clases (orden de agregado)");//nombres en orden original.
document.write(cmates.join("<br>") );


var cmatesOrdenados = cmates.sort();

subH2("Compañeros de clase en orden aflabetico");//nombres en orden alfabetico
showCmates(cmates);


subH2("Devolucion de posiciones de compañeros");
function showPosition(){
    for ( i = 0; i < cmates.length;i++ ){
        if( i == 0 ){
            
            document.write(`El primer compañero en orden es: <b>${cmates[i]}</b><br>`)

        }else if( i < contador -1){
            
            document.write("..." + "<br>")

        }else if( i == contador -1 ){

            document.write(`El ultimo compañero en orden es: <b>${cmates[i]}</b><br>`)

        }else{

            document.write("No quedan mas compañeros")

        }
        
    }
};

showPosition(cmates);


//aplicacion de js en edades

var edades = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
var contEdades = 0;

subH1("Edades de los compañeros de clase");

while ( contEdades <= edades.length-1 ){
    document.write( edades[contEdades] + "<br>" );
    contEdades++;
};


subH2("Ciclo WHILE de numeros pares");

var contShowEdades1 = 0;
function showEdadesWhile(){
    while( contShowEdades1 < edades.length ){
        document.write(edades[contShowEdades1] + "<br>");
        contShowEdades1 = contShowEdades1 +2;
    }
};

showEdadesWhile();


subH2("Ciclo FOR de numeros pares");

var contShowEdades2 = 1;
function showEdadesFor(){
    for (var contShowEdades2 = 0; contShowEdades2 < edades.length ; contShowEdades2 = contShowEdades2 +2){
        document.write( edades[contShowEdades2] + "<br>" );
    }
};

showEdadesFor();



subH2("Edades menor y mayor del arreglo");

var contEdades2;
function edadMenorMayor(array){
    for ( contEdades2 = 0; contEdades2 <= edades.length-1; contEdades2++ ){
        if( contEdades2 == 0 ){
            
            document.write(`La menor edad del arreglo es: <b>${edades[contEdades2]}</b> <br>`)

        }else if( contEdades2 < edades.length -1 ){
            
            document.write("." + "<br>")

        }else if( contEdades2 == edades.length -1){

            document.write(`La mayor edad del arreglo es: <b>${edades[contEdades2]}</b> <br>`)

        }else{

            document.write('<br><b>No quedan mas edades en el arreglo</b> <br>')
            // edades = null;
        }
        
    };
};

edadMenorMayor(edades);


subH1("Funcion[function] Con 2 parametros");

var mat = [0,17,24,07,14,33,45,54,03,29];
var ind = 5;
// var ind = document.getElementById('valor').value;
function valorParametro(arreglo){
    if(ind < mat.length){
        subH1("Resultado de la funcion con 2 parametros");
        document.write("<b>El resultado del valor elegido es: </b>" + mat[ind] + "<br> <br>");
        document.write("Se ha realizado la consulta del parametro correctamente");
        // document.write('Pulsa el boton para volver al sitio inicial y realizar otra consulta... ==> <a href="index.html"><button><b>AQUI</b></button></a> <== <br>');

    }else{
        document.write('El parametro ingresado no contiene un valor para mostrar');
    }
}

subH2('Ingresa un parametro de tipo numerico dentro del campo');
document.write(`<b>Los parametros son: [0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9]</b><br><br>`);
document.write(`<b>Los valores son: [0 | 17 | 24 | 07 | 14 | 33 | 45 | 54 | 03 | 29]</b><br><br>`);

valorParametro(mat);



subH1("Funcion para unir los elementos de la matriz en una cadena");

var misColores = ['Rojo', 'Verde', 'Azul', 'Blanco', 'Negro'];

function unirElementos(array){
    var iColores = 0;
    document.write(misColores[iColores] + "<br>");
    document.write(misColores[iColores].concat(misColores[iColores+1]) + "<br>");
    document.write(misColores[iColores].concat(misColores[iColores+1]).concat(misColores[iColores+2]) + "<br>");
    document.write(misColores[iColores].concat(misColores[iColores+1]).concat(misColores[iColores+2]).concat(misColores[iColores+3]) + "<br>");
    document.write(misColores[iColores].concat(misColores[iColores+1]).concat(misColores[iColores+2]).concat(misColores[iColores+3]).concat(misColores[iColores+4]) + "<br>");
};

document.write(`Los valores de la matriz son: ==> ${misColores.join( ' | ' )} <== <br><br>`);
subH2(`Todos los elementos de la matriz se uniran como una sola cadena de texto`);
unirElementos(misColores);  

subH1(`<br> <b>Fin de Actividad Segundo Link</b> <br>`)