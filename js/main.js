
let btnMostrar = document.getElementById("btnMostrar");

let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let contador = 0;
let listas = document.getElementsByTagName("ul");
console.log(listas.length);
console.log(listas[0]);
console.log(listas.item(1))


let elementos = document.getElementsByClassName("list-group-item")
console.log(elementos.item(2))

let otroElemento = document.querySelector("ul>li");
console.log('otro elemento', otroElemento);

let otrosElementos = document.querySelectorAll("ul>li")
console.log("otros elementos", otrosElementos)

console.log(elementos.length)
//tengan mucho cuidado ya que si eliminas el arroglo[0], el nuevo arreglo sera otro






function modifica() {
    // encabezado1.innerHTML +="<em>Ejercicio<em> DOM";
    encabezado1.innerHTML = "<em>Ejercicio<em> DOM";
    encabezado2.innerText = "Exercise DOM";
    encabezado2.innerText = ++contador
}



/// PARTE 2 

function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
}

//funcion anonima
btnMostrar.addEventListener("click", function (event) {
    event.preventDefault(); // no hagas lo que haces por defecto
    console.log("boton btnModificar presionado");

})

// console.log("soy un script externo")

// const PI=3.14

// const MAX_VALUE=50;


// encabezado1.innertext="<em>Ejercicio<em> DOM";



// el iner html la recomendacion es para usarse en cualquier caso,
// mediante html modificar algo, hace que el doc ya haya cambiado directamente


// console.log(encabezado1.innerText);
// console.log(encabezado1);



// encabezado2.innerText="Dom Exercise"
// console.log(encabezado2)
// //console.log(document.getElementById("encabezado1"));

// document

//camelcase is for variables, functions, object properties 

//events blur, mouse enter, mouse in, focus, animation, touch, load
// dom content load es peligroso, no carga recursos. 
// 