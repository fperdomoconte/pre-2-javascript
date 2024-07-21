//Menu de bienvenida al simulador
//Pendiente sanitizacion de datos de entrada
let menu = prompt("BIENVENIDO! \nDesea calcular el costo de una casa? Ingrese SI / NO")

//Verifica instancia de calculo
while (menu !== "NO") {
    //Declara y define variable primer dato: metros cuadrados
    let metrosCuadrados = parseInt(prompt("Ingrese la cantidad de metros cuadrados. \nEjemplo: 100"))

    //Declara y define valor inicial para variable segundo dato: tipo de sistema constructivo a utilizar
    let sistemaConstructivo = 0

    //Declara y define variable para sanitizacion de valores de entrada para el segundo dato
    let sistemaValido = false

    //Verifica que el valor ingresado para sistema constructivo a utilizar sea correcto y si no lo es solicita se ingrese uno
    while (sistemaValido == false) {

        //Prompt que solicita al udsuario ingrese el sistema constructivo a utilizar
        sistemaConstructivo = parseInt(prompt("Ingrese el sistema constructivo que usara en su casa: \n1-MAMPOSTERIA TRADICIONAL \n2-PANELES CLT \n3-PANELES SIP \n4-BLOQUES HCCA"))

        //Array que contiene los tipos de sistemas constructivos validos, en un futuro cada sistema puede ser un objeto con informacion del sistema
        const sistemasConstructivos = [1, 2, 3, 4]

        //Verifica que el valor ingresado por el usuario este incluido en el array que contiene los tipos de sistemas constructivos validos
        if (sistemasConstructivos.includes(sistemaConstructivo)) {
            sistemaValido = true
        } else {
            //Si el vaor ingresado no es un tipo de sistema constructivo valido, avisa al usuario y solicita se ingrese uno
            alert("Ha ingresado una opcion incorrecta, prueba nuevamente:\n1-MAMPOSTERIA TRADICIONAL \n2-PANELES CLT \n3-PANELES SIP \n4-BLOQUES HCCA")
        }
    }

    //Declara y define valor de base para la variable precioSistema, que cambiara en funcion de la eleccion del usuario
    let precioSistema = 0

    //Define el valor de la variable precioSistema en base al sistema constructivo elegido por el ususuario
    if ((sistemaConstructivo == 1)) {
        precioSistema = 950
    } else if ((sistemaConstructivo == 2)) {
        precioSistema = 1800
    } else if ((sistemaConstructivo == 3)) {
        precioSistema = 1200
    } else if ((sistemaConstructivo == 4)) {
        precioSistema = 1400
    }

    //Define la funcion con el calculo a realizar con los datos ingresados - calcula el costo de la vivienda en base a los m2 y sistema constructivo, le suma un costo fijo de mano de obra (a futuro sera un % de mano de obra contratada vs. autoconstruccion)
    const calcularCosto = (metrosCuadrados, precioSistema, precioTrabajadores) => metrosCuadrados * (precioSistema + precioTrabajadores)

    //Informa al usuario el costo calculado, concatena texto con variables
    alert("El precio de su casa sera de USD " + calcularCosto(metrosCuadrados, precioSistema, 460))
    console.log("El precio de su casa sera de USD " + calcularCosto(metrosCuadrados, precioSistema, 460))

    //Consulta al usuario si desea realizar otro calculo
    //Pendiente sanitizacion de datos de entrada
    menu = prompt("Desea hacer otra estimacion? Ingrese SI / NO")

} //Informa que se esta cerando el simulador 
alert("Cerrando calculadora!")