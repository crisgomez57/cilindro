function mostrarResultado (v, a) {
    let result1 = document.querySelector("#inner_1");
    result1.innerText = v;
    let result2 = document.querySelector("#inner_2");
    result2.innerText = a;
}

function main () {
    // Obtenemos el dato del radio
    let radio = document.querySelector("#texto_r").value;
    radio = parseInt(radio);
    // Obtenemos el dato de la altura
    let altura = document.querySelector("#texto_h").value;
    altura = parseInt(altura);
    // Operaciones
    let volumen = Math.PI * (radio * radio) * altura;
    let area = 2 * Math.PI * radio * (radio + altura);
    mostrarResultado(volumen, area);
}

// Ejecuta main al dar click en el botón
const boton = document.querySelector("#button");
boton.addEventListener("click", main);