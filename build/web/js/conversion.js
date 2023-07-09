/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function calcularGrdos(grad)
{
    let grado = parseFloat(document.getElementById("txtgrado").value);

    switch (grad)
    {
        case 1:
            res = convertirAFahrenheit(grado);
            break;
        case 2:
            res = convertirAKelvin(grado);
            break;
        case 3:
            res = convertirACentigrados(grado);
            break;

    }
    document.getElementById("txtResultado").value = res;
}
function convertirAFahrenheit(g)
{
    let resultado = (g * 9 / 5) + 32;
    return resultado;
}
function convertirAKelvin(g)
{
    let resultado = g + 273.15;
    return resultado;
}
function convertirACentigrados(g)
{
    let resultado = g * 1;
    return resultado;
}