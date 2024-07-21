let menu = prompt("Bienvenido! \nDesea calcular el costo de una casa? Ingrese SI / NO")

while (menu !== "NO") {
    let metrosCuadrados = parseInt(prompt("Ingrese la cantidad de metros cuadrados. \nEjemplo: 100"))

    let sistemaConstructivo = 0

    let sistemaValido = false

    while (sistemaValido == false) {

        sistemaConstructivo = parseInt(prompt("Ingrese el sistema constructivo que usara en su casa: \n1-MAMPOSTERIA TRADICIONAL \n2-PANELES CLT \n3-PANELES SIP \n4-BLOQUES HCCA"))

        const sistemasConstructivos = [1, 2, 3, 4]

        if (sistemasConstructivos.includes(sistemaConstructivo)) {
            sistemaValido = true
        } else {
            alert("Ha ingresado una opcion incorrecta, prueba nuevamente:\n1-MAMPOSTERIA TRADICIONAL \n2-PANELES CLT \n3-PANELES SIP \n4-BLOQUES HCCA")
        }
    }

    let precioSistema = 0

    if ((sistemaConstructivo == 1)) {
        precioSistema = 950
    } else if ((sistemaConstructivo == 2)) {
        precioSistema = 1800
    } else if ((sistemaConstructivo == 3)) {
        precioSistema = 1200
    } else if ((sistemaConstructivo == 4)) {
        precioSistema = 1400
    }

    const calcularCosto = (metrosCuadrados, precioSistema, precioTrabajadores) => metrosCuadrados * (precioSistema + precioTrabajadores)

    alert("El precio de su casa sera de USD " + calcularCosto(metrosCuadrados, precioSistema, 460))
    console.log("El precio de su casa sera de USD " + calcularCosto(metrosCuadrados, precioSistema, 460))

    menu = prompt("Desea hacer otra estimacion? Ingrese SI / NO")

}alert("Cerrando calculadora!")



/* //Calculo de costo de vivienda
confirm("Bienvenido. A continuacion podra calcular el costo de su casa!" )

function calcularCosto() {
//Dormitorios
let cantidadCuartos = parseInt(prompt("Ingrese la cantidad de dormitorios que tendra su casa:"))

//Sistema constructivo 1-MAMPOSTERIA / 2-CLT / 3-SIP / 4-HCCA
let sistemaConstructivo = (prompt("Ingrese el sistema constructivo que usara en su casa: \n 1-MAMPOSTERIA TRADICIONAL \n 2-PANELES CLT \n 3-PANELES SIP \n 4-BLOQUES HCCA"))

//Mano de obra propia o contratada
let manoObra = (prompt("Ingrese 'C' si la mano de obra sera contratada o 'A' si sera autoconstruccion:"))

}

const sistemasConstructivos = [
    {id:1,nombre:"MCT",costo:950,descripcion:"Mamposteria de tradicional ceramica ladrillo o ticholo"},

    {id:2,nombre:"CLT",costo:1800,descripcion:"Paneles de madera contralaminada encolada"},

    {id:3,nombre:"SIP",costo:1200,descripcion:"Paneles estructurales con nucleo de poliestireno"},

    {id:4,nombre:"HCA",costo:1400,descripcion:"Bloques de hormigon celular o alivianado"},
]



console.table(sistemasConstructivos) */


