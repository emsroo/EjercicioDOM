
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



/// PARTE 2  This is an example of 

function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
}

//funcion anonima que revisa acciones del boton mouse (oreja)
btnMostrar.addEventListener("click", function (event) {
    event.preventDefault(); // no hagas lo que haces por defecto
    console.log("boton btnModificar presionado"); 

    let element = document.createElement("li"); //crear el elemento que yo quiera
    element.innerText="Another item"; // <li> Another Item</li>
    element.classList.add("list-group-item"); // anadir una clase para que tenga el border
    // Se puede anadir dos clases, con un espacoi en el cmand anterior, o sino repitiendolo, y asignas clas
    element.id="";  // no tiene sentido tener una lista de ids, porque el id es unico


    //THis is to clone the element and change the inner text
    let element2 = element.cloneNode(true);
    element.innerText="Another item"; // <li> Another Item</li>
    // -------------------------------------------------------


    // inserta el elemento antes de la lista, prepend es prinicipio de lista
    //  append despues o al final de la lista
    //  after es despues de la lista
    // listas.item(0).before(element) //yo lo quiero antes checa la imagen, vas a la primera lista

    listas.item(0).prepend(element);
    listas.item(0).after(element2);
    // -------------------------------------------------------


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