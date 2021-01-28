class Shape{
    constructor(property){
        this.property = property;
    }
    getType(){
        return this.property;
    }
}

function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.Shape = function(){

}

Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}

Triangle.prototype.getType = function(){
    return this.constructor.name.toString();
}

const shape = Triangle.prototype;

const newTriangle = new Triangle(8,2,5);
console.log(`---------------`)
console.log(`>> Parametros de {newTriangle}`)
console.log(newTriangle.constructor === Triangle);
console.log(shape.isPrototypeOf(newTriangle));
console.log(newTriangle.getPerimeter());
console.log(newTriangle.getType());


var t = new Triangle(1, 2, 3);
console.log(`---------------`)
console.log(`>> Parametros de {t}`)
console.log(t.constructor === Triangle);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

console.log(`---------------`)
console.log(`>> Tarea 2 <<`)


const urlTarea = `https://jsonplaceholder.typicode.com/posts`;

function loadJson() {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(respuesta => {
        try{
            if (respuesta.status == 200) {
                return respuesta.json();
            }
        }
        catch(error){
            console.log(`Error: ${erorr}`)
        }
    })    
}

async function callJson(){
    await loadJson();
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await respuesta.json();
    console.log(`---------------`)
    console.log(`Respuesta ${posts}`);
    for (let i = 0; i < posts.length; i++) {
        let userId = posts[i].userId;
        let postId = posts[i].id;
        console.log(`---------------`)
        console.log(`Post ${postId}: ${userId}`);
    }
}

callJson();

async function asyncSinAwait(){
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return fetch(urlTarea).then(resp => resp.json())
}

function callSinAwait(){
    let callFuncion = asyncSinAwait();
    callFuncion.then(function(resultado){
        console.log(`---------------------`);
        console.log(`Resultado de funcion:`);
        for (let i = 0; i < resultado.length; i++) {
            let userId = resultado[i].userId;
            console.log(`ID de usuario: ${userId}`);
        }
    });
}

callSinAwait();