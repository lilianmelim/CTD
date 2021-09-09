function executaOperacao(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
  }
  function soma(numero1, numero2) {
    return numero1 + numero2;
  }
  function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
  }
  function divisao(numero1, numero2) {
    return numero1 / numero2;
  }
  function subtracao(numero1, numero2) {
    return numero1 - numero2;
  }
  function quadrado(numero1, numero1) {
    return numero1 * numero1;
  }
  function mediaDeTresNumeros(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3) / 3;
  }
  function calculaPorcentagem(numero1, numero2) {
   return (numero1 * numero2) / 100;
  }

  console.log ("-------------- Teste de Operações / Calculadora --------------");

  console.log(executaOperacao(5, 1, soma)); 
  console.log(executaOperacao(2, 2, multiplicacao)); 
  console.log(executaOperacao(0, 0, divisao));
  console.log(executaOperacao(15, 11, subtracao));
  console.log(executaOperacao(5, 5, quadrado));
  console.log(mediaDeTresNumeros(6, 9, 15));
  console.log(calculaPorcentagem(50, 22));
  
