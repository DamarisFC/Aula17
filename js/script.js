/*Procedimento 
descrição: exibe uma mensagem fixa
nome: mostraAlerta
Parâmetro: void
Retorno: void
void-> significa que não retorna valor*/

function mostrarAlerta()
{
    alert("Não é que isso funciona mesmo!!!");
}

/*Procedimento
Descrição: Exibe uma mensagem com parâmetro
Nome: mostraAlerta1
Parâmetro: string
retorna: void
void -> Significa que não retorna valor*/

// Função para exibir uma mensagem com parâmetro
function mostrarAlerta1(msg) {
    alert("Boa noite, " + msg);
}

// Função para retornar uma mensagem com o texto digitado
function mensagem_com_parametro_return(msg1) {
    return "Você digitou: " + msg1;
}

// Função para somar dois números e retornar o resultado
function soma_return(num1, num2) {
    // Declaração explícita das variáveis
    let soma = parseFloat(num1) + parseFloat(num2); // Conversão para números decimais
    return soma; // Retorna o resultado da soma
}