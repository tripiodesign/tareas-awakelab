function tituloH1(textoH1){//funcion para crear un subtitulo
    return document.write(`<h1>${textoH1}</h1>`);
};
function subH2(textoH2){//funcion para crear un subtitulo
    return document.write(`<h2>${textoH2}</h2>`);
};
function subH3(textoH3){//funcion para crear un subtitulo
    return document.write(`<h3>${textoH3}</h3>`);
};


//Comienzan los ejercicios de la actividad

tituloH1("Se invierten los valores numericos");

var valorNumerico = "7248374923";
var vnOrdenados = valorNumerico.split('').sort().join(' | ');

var ordenInvertido = "3294738427";
var ordenInvSeparado = valorNumerico.split('').reverse().join(' - ');
var ordenInvOrdenado = valorNumerico.split('').reverse().join(' | ');

function invertirCadena(valor) {
    return valor.split('').reverse().join('');
};


subH2("Los valores originales son: ");
document.write(`<b>Orden Original:</b> ${valorNumerico} <br>`);
document.write(`<b>O.O. Separados:</b> ${valorNumerico.split('').join(' - ')} <br>`);
document.write(`<b>Valores Ordenados:</b> ${vnOrdenados} <br>`);

subH2(`Los valores invertidos son: `);
document.write(`<b>Orden Invertido:</b> ${invertirCadena(valorNumerico)} <br>`);
document.write(`<b>O. I. Separado:</b> ${ordenInvSeparado} <br>`);
document.write(`<b>Valores Invertidos Ordenados:</b> ${ordenInvOrdenado} <br>`);

subH3(`Los valores han sido invertidos`);



//ordenar cadena de texto alfabeticamente

var palabra = "ESTERNOCLESTOMASTOIDEO";

function ordenAlfabetico(texto) {
    return texto.split('').sort().join(' - ');
};

document.write(`La palabra original es: <b>${palabra}</b> <br>La *PALABRA* ordenada alfabeticamente es: <b>${ordenAlfabetico(palabra)}</b><br>`);




//Cambiar primera letra de minus <===> mayus
var textoMayus = ['TODAS LAS LETRAS', 'ORIGINALMENTE', 'SON MAYUSCULAS'];
var textoMinus = ['todas las letras', 'originalmente', 'son minusculas'];
var counter1 = 0;
var counter2 = 0;
var x = 0;

function letraMayuscula(lineaTextoUno){
    return lineaTextoUno[0].charAt().toUpperCase() + lineaTextoUno[0].slice(1) + ' ' + lineaTextoUno[1].charAt().toUpperCase() + lineaTextoUno[1].slice(1) + ' ' + lineaTextoUno[2].charAt().toUpperCase() + lineaTextoUno[2].slice(1);
};
    
function letraMinuscula(lineaTextoDos){
    return lineaTextoDos[0].charAt() + lineaTextoDos[0].slice(1).toLowerCase() + ' ' + lineaTextoDos[1].charAt() + lineaTextoDos[1].slice(1).toLowerCase() + ' ' + lineaTextoDos[2].charAt() + lineaTextoDos[2].slice(1).toLowerCase();
};

subH2('Se muesta primera letra con mayuscula y minuscula respectivamente');

subH3(`Texto N•1 en minuscula ... Sentencia original [${textoMinus.join(' ')}]`);
document.write(letraMayuscula(textoMinus));

subH3(`Texto N•2 en MAYUSCULA ... Sentencia original [${textoMayus.join(' ')}]`);
document.write(letraMinuscula(textoMayus));




//Busqueda de palabra mas larga de la frase

tituloH1('Busqueda de la palabra mas larga de la frase');

function encontrarPalabra(cadenaUno) {
    let palabras = cadenaUno.split(" ");
    let counter3 = 0;
    let word = "";
    
    subH3('Resultado de la consulta...');
    
    document.write(`El texto ingresado fue: <b>${cadenaUno}</b><br>`);
    document.write(`El texto contiene <b>${palabras.length}</b> palabras<br>`);
    
    subH2('La palabra mas larga del texto ingresado es:') 
    
    while(counter3 < palabras.length){
        document.write('<center>' + palabras[counter3] + '</center>');
        counter3++;
    
    }
    palabras.forEach(function(palabras) {
        if(palabras.length > counter3) {
            counter3 = palabras.length;
            word = palabras;
        }
    });

    return `La palabra mas larga de la cadena es: <b>${word}</b><br> \
            Esta cadena contiene <b>${word.length}</b> caracteres<br>`;
} 
       
document.write(encontrarPalabra('se encontrara la palabra mas larga de la cadena'));