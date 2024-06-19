function invertirCadena() {
    const input = document.getElementById('cadenaInput').value;
    const resultado = document.getElementById('invertirCadenaResultado');
    resultado.innerText = `Resultado: ${input.split('').reverse().join('')}`;
}

function esNumeroPrimo() {
    const numero = parseInt(document.getElementById('numeroInput').value);
    const resultado = document.getElementById('esNumeroPrimoResultado');
    if (numero <= 1) {
        resultado.innerText = "Resultado: No, no es primo";
        return;
    }
    let esPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    resultado.innerText = esPrimo ? "Resultado: Sí, es primo" : "Resultado: No, no es primo";
}

function eliminarDuplicados() {
    const arregloString = document.getElementById('arregloInput').value;
    let arreglo;
    try {
        arreglo = JSON.parse(arregloString);
    } catch (error) {
        const resultado = document.getElementById('eliminarDuplicadosResultado');
        resultado.innerText = `Error: ${error.message}`;
        return;
    }
    const resultado = document.getElementById('eliminarDuplicadosResultado');
    resultado.innerText = `Resultado: [${[...new Set(arreglo)]}]`;
}

function calcularFactorial() {
    const numero = parseInt(document.getElementById('factorialInput').value);
    const resultado = document.getElementById('factorialResultado');
    if (isNaN(numero)) {
        resultado.innerText = "Resultado: Ingresa un número válido";
        return;
    }
    if (numero < 0) {
        resultado.innerText = "Resultado: No se puede calcular el factorial de un número negativo";
        return;
    }
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    resultado.innerText = `Resultado: ${factorial}`;
}

function contarVocales() {
    const cadena = document.getElementById('vocalesInput').value;
    const resultado = document.getElementById('contarVocalesResultado');
    const vocales = cadena.match(/[aeiouAEIOU]/g);
    const numeroVocales = vocales ? vocales.length : 0;
    resultado.innerText = `Resultado: ${numeroVocales}`;
}

function sumarArreglo() {
    const arregloString = document.getElementById('sumaInput').value;
    let arreglo;
    try {
        arreglo = JSON.parse(arregloString);
    } catch (error) {
        const resultado = document.getElementById('sumarArregloResultado');
        resultado.innerText = `Error: ${error.message}`;
        return;
    }
    const suma = arreglo.reduce((acc, curr) => acc + curr, 0);
    const resultado = document.getElementById('sumarArregloResultado');
    resultado.innerText = `Resultado: ${suma}`;
}

function buscarMaximo() {
    const arregloString = document.getElementById('maximoInput').value;
    let arreglo;
    try {
        arreglo = JSON.parse(arregloString);
    } catch (error) {
        const resultado = document.getElementById('buscarMaximoResultado');
        resultado.innerText = `Error: ${error.message}`;
        return;
    }
    const maximo = Math.max(...arreglo);
    const resultado = document.getElementById('buscarMaximoResultado');
    resultado.innerText = `Resultado: ${maximo}`;
}
