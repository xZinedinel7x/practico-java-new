//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
//const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
    console.groupEnd();

//Codigo del triángulo
// console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triangulo son: "    
//     + ladoTriangulo1 
//     + "cm", ladoTriangulo2 
//     + "cm " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + "cm");
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}  
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base * alturaTriangulo) /2;
} 
// console.log("El area del triángulo es: " + areaTriangulo + "cm");
// console.groupEnd();
 
// Codigo del circulo

console.group("Circulos");

// //Radio
// const radioCirculo = 4;
// console.log ("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// function diametroCirculo () radioCirculo * 2;
// console.log ("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log ("PI del circulo es: " + PI + "cm");


//Circunferencia
function circunferenciaCirculo(){
    
} 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo )* PI; 
console.log("El area del circulo es: " + areaCirculo + "cm");
console.groupEnd();





