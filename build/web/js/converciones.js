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
function calcularLongitud(cal)
{
let dis = parseFloat(document.getElementById("txtlongitud").value);

        switch (cal)
{
case 1:
        res = convertirACentimetro(dis);
        break;
        case 2:
        res = convertirAPulgadas(dis);
        break;
        case 3:
        res = convertirAPies(dis);
        break;
        case 4:
        res = convertirAYardas(dis);
        break;
        case 5:
        res = convertirAMillas(dis);
        break;
}
document.getElementById("txtResultado2").value = res;
}
function convertirACentimetro(n)
{
let resultado = n*1;
        return resultado;
}
function convertirAPulgadas(n)
{
let resultado = n/ 2.54;
        return resultado;
}
function convertirAPies(n)
{
let resultado = n/ 30.48;
        return resultado;
}
function convertirAYardas(n)
{
let resultado = n/ 91.44 ;
        return resultado;
}
function convertirAMillas(n)
{
let resultado = n/ 160934.4 ;
        return resultado;
}
function calcularPesos(pes)
{
let din = parseFloat(document.getElementById("txtpesos").value);

        switch (pes)
{
case 1:
        res = convertirAmexicano(din);
        break;
        case 2:
        res = convertirADolar(din);
        break;
        case 3:
        res = convertirACanadiense(din);
        break;
        case 4:
        res = convertirAEuro(din);
        break;
        case 5:
        res = convertirALibra(din);
        break;
        case 6:
        res = convertirAChileno(din);
        break;
        case 7:
        res = convertirAUruguayo(din);
        break;
        case 8:
        res = convertirARupia(din);
        break;
        case 9:
        res = convertirAurYen(din);
        break;
        case 10:
        res = convertirAZloty(din);
        break;
}
document.getElementById("txtResultado3").value = res;
}
function convertirAmexicano(p)
{
let resultado = p*1;
        return resultado;
}
function convertirADolar (p)
{
let resultado = p*1/ 24.04;
        return resultado;
}
function convertirACanadiense(p)
{
let resultado = p*1/17.24;
        return resultado;
}
function convertirAEuro(p)
{
let resultado = p*1/ 26.2 ;
        return resultado;
}
function convertirALibra(p)
{
let resultado = p*1/ 30.05 ;
        return resultado;
}
function convertirAChileno(p)
{
let resultado = p*1/  0.028 ;
        return resultado;
}
function convertirAUruguayo(p)
{
let resultado = p*1/ 0.56 ;
        return resultado;
}
function convertirARupia(p)
{
let resultado = p*1/ 0.32 ;
        return resultado;
}
function convertirAurYen(p)
{
let resultado = p*1/ 0.22 ;
        return resultado;
}
function convertirAZloty(p)
{
let resultado = p*1/ 5.78 ;
        return resultado;
}