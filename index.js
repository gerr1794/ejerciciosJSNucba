/*                                   ejercicio 1                               */
function saberParImpar(numero) {
    if(numero % 2 == 0) {
      console.log(numero + " es par");
    } else {
      console.log(numero + " es impar");
    }
  }

  saberParImpar(18);
  saberParImpar(53);


/*                                   ejercicio 2                               */
function comparacionDeNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
      console.log(num2 + " es mayor que " + num1);
    } else {
      console.log("Los num son iguales");
    }
  }

  comparacionDeNumeros(17, 7);
  comparacionDeNumeros(7, 17);
  comparacionDeNumeros(17, 17);



/*                                   ejercicio 3                               */
function multiploDeCinco(numero) {
    if (numero % 5 == 0) {
      console.log(numero + " es multiplo de 5");
    } else {
      console.log(numero + " no es multiplo de 5");
    }
  }


console.log(multiploDeCinco(100))




/*                                   ejercicio 4                               */
function imprimirNumerosUnoAUno(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  imprimirNumerosUnoAUno(17);



/*                                   ejercicio 5                               */
function imprimirPalabra(palabra, num) {
    for (let i = 0; i < num; i++) {
      console.log(palabra);
    }
  }

  imprimirPalabra("perrito malvado", 5);



/*                                   ejercicio 6                               */
function imprimirArrayCompleto(array2) {
    for (let i = 0; i < array2.length; i++) {
      console.log(array2[i]);
    }
  }
  const arraydeNumRandom = [16, 31, 12, 89, 58];
  imprimirArrayCompleto(arraydeNumRandom);




/*                                   ejercicio 7                               */
function imprimirNumerosMenosIndiceCinco(array1) {
    for (let i = 0; i < array1.length; i++) {
      if (i !== 5) {
        console.log(array1[i]);
      }
    }
  }

const arrayMenosIndiceCinco = [123, 451, 5123, 545, 8123, 896]
console.log(imprimirNumerosMenosIndiceCinco(arrayMenosIndiceCinco))




/*                                  ejercicio 8                                 */
function multiplicar(array, num) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
}

const num = [10, 20, 30, 40, 50];
const multiplo = 2;
multiplicar(num, multiplo);
console.log(multiplicar);