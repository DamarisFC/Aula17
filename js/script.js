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

function MostrarAlerta(msg)
{
    alert("Boa noite,"+msg)
}

function mensagem_com_parametro_return(msg1)
{
    return("você digitou:"+msg1);
}


function soma_return(num1, num2)
{
    soma= parseFloat(num1)  + parseFloat(num2); 
    return(soma);
}