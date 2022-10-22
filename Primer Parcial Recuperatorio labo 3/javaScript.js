let columID = document.getElementById('columnaID');
let listBoxDeFormOculto = document.getElementById('select_tipo');
let nombre = document.getElementById('txtnombre');
let form = document.getElementById('formularioOculto');
let esVisible = false;
let esVisible2 = false;
let edadDeTodos = document.getElementById('cbo');
let tabla = document.getElementById('tblDatos');
listBoxDeFormOculto = addEventListener("change", OcultarTerrestreOAereo);
window.addEventListener("load", CargaInformacionJSON);
window.addEventListener("load", HardcodearAutos);
edadDeTodos.addEventListener("change", filtrarPersonas);
edadDeTodos.addEventListener("change", ObtenerFila);
window.addEventListener("load", ObtenerFila);

let txtVelocidadPromedio = document.getElementById("txtVelocidadPromedio");

let ArrayVehiculos = [];





let arrayJsonVehiculos = JSON.parse('[{"id":14, "modelo":"Ferrari F100", "anoFab":1998, "velMax":400, "cantPue":2, "cantRue":4},{"id":51, "modelo":"Dodge Viper", "anoFab":1991, "velMax":266, "cantPue":2, "cantRue":4},{"id":67, "modelo":"Boeing CH-47 Chinook","anoFab":1962, "velMax":302, "altMax":6, "autonomia":1200},{"id":666, "modelo":"Aprilia RSV 1000 R","anoFab":2004, "velMax":280, "cantPue":0, "cantRue":2},{"id":872, "modelo":"Boeing 747-400", "anoFab":1989,"velMax":988, "altMax":13, "autonomia":13450},{"id":742, "modelo":"Cessna CH-1 SkyhookR", "anoFab":1953,"velMax":174, "altMax":3, "autonomia":870}]');


class Vehiculo {
    id;
    modelo;
    anoFabricacion;
    velocidadMaxima;

    constructor(id, modelo, anoFabricacion, velocidadMaxima) {
        this.id = id;
        this.modelo = modelo;
        this.anoFabricacion = anoFabricacion;
        this.velocidadMaxima = velocidadMaxima;
    }

    toString() {
        return `ID: ${this.id} - modelo: ${this.modelo} - anoFabricacion: ${this.anoFabricacion} - velocidadMaxima ${this.velocidadMaxima}\n `;
    }
}

class Aereo extends Vehiculo {
    alturaMaxima;
    autonomia;

    constructor(id, modelo, anoFabricacion, velocidadMaxima, alturaMaxima, autonomia) {
        super(id, modelo, anoFabricacion, velocidadMaxima);
        this.alturaMaxima = alturaMaxima;
        this.autonomia = autonomia;
    }

    toString() {
        return `${super.toString()}alturaMaxima: ${this.alturaMaxima} - autonomia ${this.autonomia} `;
    }
}

class Terrestre extends Vehiculo {
    cantidadPuertas;
    cantidadRuedas;

    constructor(id, modelo, anoFabricacion, velocidadMaxima, cantidadPuertas, cantidadRuedas) {
        super(id, modelo, anoFabricacion, velocidadMaxima);
        this.cantidadPuertas = cantidadPuertas;
        this.cantidadRuedas = cantidadRuedas;
    }

    toString() {
        return `${super.toString()}cantidadPuertas: ${this.cantidadPuertas} - cantidadRuedas ${this.cantidadRuedas} `;
    }
}


function CargaInformacionJSON() {
    arrayJsonVehiculos.forEach(element => {
        if (element.hasOwnProperty("altMax")) {
            VehiculoNuevo = new Aereo(element["id"], element["modelo"], element["anoFab"], element["velMax"], element["altMax"], element["autonomia"]);
            ArrayVehiculos.push(VehiculoNuevo);
        } else {
            profesionalNuevo = new Terrestre(element["id"], element["modelo"], element["anoFab"], element["velMax"], element["cantPue"], element["cantRue"]);
            ArrayVehiculos.push(profesionalNuevo);
        }

    })
}

function CheckBoxes(ID) {

    const ch = document.getElementById(ID);
    if (!ch.checked) {
        switch (ch.id) {
            case 'checkboxID':
                OcultarUnaColumna(0);
                break;
            case 'checkBoxNombre':
                OcultarUnaColumna(1);
                break;
            case 'checkBoxApellido':
                OcultarUnaColumna(2);
                break;
            case 'checkBoxEdad':
                OcultarUnaColumna(3);
                break;
            case 'checkBoxEquipo':
                OcultarUnaColumna(4);
                break;
            case 'checkBoxPosision':
                OcultarUnaColumna(5);
                break;
            case 'checkBoxCantGoles':
                OcultarUnaColumna(6);
                break;
            case 'checkBoxTitulo':
                OcultarUnaColumna(7);
                break;
            case 'checkBoxFacultad':
                OcultarUnaColumna(8);
                break;
            case 'checkBoxAñoGrad':
                OcultarUnaColumna(9);
                break;
        }
    }
    else {
        switch (ch.id) {
            case 'checkboxID':
                RecusitarUnaColumna(0);
                break;
            case 'checkBoxNombre':
                RecusitarUnaColumna(1);
                break;
            case 'checkBoxApellido':
                RecusitarUnaColumna(2);
                break;
            case 'checkBoxEdad':
                RecusitarUnaColumna(3);
                break;
            case 'checkBoxEquipo':
                RecusitarUnaColumna(4);
                break;
            case 'checkBoxPosision':
                RecusitarUnaColumna(5);
                break;
            case 'checkBoxCantGoles':
                RecusitarUnaColumna(6);
                break;
            case 'checkBoxTitulo':
                RecusitarUnaColumna(7);
                break;
            case 'checkBoxFacultad':
                RecusitarUnaColumna(8);
                break;
            case 'checkBoxAñoGrad':
                RecusitarUnaColumna(9);
                break;
        }
    }
}

function OcultarUnaColumna(num) {
    for (let i = 0; i < tabla.rows.length; i++) {
        let w = tabla.rows[i].cells;
        w[num].style.display = 'none';
    }
}
function RecusitarUnaColumna(num) {
    for (let i = 0; i < tabla.rows.length; i++) {
        let w = tabla.rows[i].cells;
        w[num].style.removeProperty("display");
    }
}
function VerificarSiEstaVisible() {
    for (let i = 1; i < tabla.rows.length; i++) {
        if (tabla.rows[i].cells[0].style.display != 'none')
            tabla.rows[i].cells[i].innerHTML;
    }
}
function crearTabla(element, filaInicial) {
    ObtenerFila();
    let fila = document.getElementById('tblDatos').insertRow(1);
    let celda;
    for (let i = 0; i < 8; i++) {
        celda = fila.insertCell(i);

        switch (i) {
            case 0:
                celda.innerHTML = element.id;
                break;
            case 1:
                celda.innerHTML = element.modelo;
                break;
            case 2:
                celda.innerHTML = element.anoFabricacion;
                break;
            case 3:
                celda.innerHTML = element.velocidadMaxima;
                break;
            case 4:
                celda.innerHTML = element.alturaMaxima || "--";
                break;
            case 5:
                celda.innerHTML = element.autonomia || "--";
                break;
            case 6:
                celda.innerHTML = element.cantidadPuertas || "--";
                break;
            case 7:
                celda.innerHTML = element.cantidadRuedas || "--";
                break;

        }

    }


}

function filtarPorCombobox(element) {
    switch (edadDeTodos.value) {
        case "1":
            return true;
            break;
        case "2":
            return element instanceof (Terrestre);
            break;
        case "3":
            return element instanceof (Aereo);
            break;
    }


}
function filtrarPersonas() {
    RefrescarTabla();

    arrayFiltro = ArrayVehiculos.filter(element => filtarPorCombobox(element));
    arrayFiltro.map(element => crearTabla(element, 1));
}
function RefrescarTabla() {
    let contador = tabla.rows.length;
    for (let i = 1; i < contador; i++) {
        tabla.deleteRow(1);
    }
}


function HardcodearAutos() {
    ArrayVehiculos.map(element => { crearTabla(element, 1) });
}

function idMax() {
    let idmax = ArrayVehiculos.reduce((v1, v2) => {
        if (v2.id > v1) {
            return v2.id;
        } else {
            return v1;
        }
    }, ArrayVehiculos | [0].id);

    return idmax + 1;
}
function AltaDePersonas() {

    const auxID = idMax();
    const auxModelo = document.getElementById("txtModelo").value;
    const auxAnoFabri = parseInt(document.getElementById("txtAnoFabr").value);
    const auxVelMax = parseInt(document.getElementById("txtVelMax").value);
    const auxAltMax = parseInt(document.getElementById("txtAltMax").value);
    const auxAutonomia = parseInt(document.getElementById("txtAutonomia").value);
    const auxCantPuert = parseInt(document.getElementById("txtcantPuertas").value);
    const auxCantRued = parseInt(document.getElementById("txtcantRuedas").value);

    let mensajeAlta = Validaciones(auxModelo, auxAnoFabri, auxVelMax, auxAltMax, auxAutonomia, auxCantPuert, auxCantRued);

    if (mensajeAlta == "¡¡Alta completa!!") {


        switch (select_tipo.value) {
            case "terrestre":
                ArrayVehiculos.push(new Terrestre(auxID, auxModelo, auxAnoFabri, auxVelMax, auxCantPuert, auxCantRued));
                crearTabla(ArrayVehiculos[ArrayVehiculos.length - 1]);
                break;
            case "aereo":
                ArrayVehiculos.push(new Aereo(auxID, auxModelo, auxAnoFabri, auxVelMax, auxAltMax, auxAutonomia));
                crearTabla(ArrayVehiculos[ArrayVehiculos.length - 1]);
                break;
        }
        alert(mensajeAlta);
    } else {
        alert(mensajeAlta);
    }
    ObtenerFila();
}
function Validaciones(auxModelo, auxAnoFabri, auxVelMax, auxAltMax, auxAutonomia, auxCantPuert, auxCantRued) {

    let retorno = "";
    let retornoFeliz = "¡¡Alta completa!!";


    if (!isNaN(auxModelo)) {
        retorno += "Usted agrego un modelo invalido. Reintentelo otra vez.";
    }
    if (isNaN(auxAnoFabri) || auxAnoFabri < 1) {
        retorno += "\nUsted agrego un año de fabricacion invalido. Reintentelo otra vez.";
    }
    if (isNaN(auxVelMax) || auxVelMax < 1) {
        retorno += "\nUsted agrego una edad invalida.Reintentelo otra vez.";
    }

    switch (select_tipo.value) {

        case "terrestre":

            if (isNaN(auxCantPuert) || auxCantPuert < 1) {
                retorno += "\nUsted agrego una cantidad de puertas invalida. Reintentelo otra vez.";
            }
            if (isNaN(auxCantRued) || auxCantRued < 1) {

                retorno += "\nUsted agrego una cantidad de ruedas invalida. Reintentelo otra vez";
            }
            break;
        case "aereo":
            if (isNaN(auxAltMax) || auxAltMax < 1) {
                retorno += "\nUsted agrego una altura maxima erronea. Reintentelo otra vez.";
            }
            if (isNaN(auxAutonomia) || auxAutonomia < 1) {
                retorno += "\nUsted agrego una autonomia erronea. Reintentelo otra vez.";
            }
            break;
    }
    if (retorno != "") {
        return retorno;
    }
    return retornoFeliz;
}


function MostarFormulario() {


    switch (esVisible) {
        case false:
            document.querySelector(".formularioOculto").style.display = "grid";
            document.querySelector(".locura").style.display = "grid";
            document.querySelector(".terrestre").style.display = "grid";
            document.querySelector(".aereo").style.display = "grid";
            document.querySelector(".buttonsito").style.visibility = "visible";
            document.getElementById('DivFormDatos').style.display = "none";
            esVisible = true;
            break;
        case true:
            document.querySelector(".formularioOculto").style.display = "none";
            document.getElementById('DivFormDatos').style.display = "inline";
            document.querySelector(".buttonsito").style.visibility = "hidden";
            esVisible = false;
            break;
    }

}
function OrdernarColuma(id) {
    const stringAux = id;
    switch (stringAux) {
        case "IdTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => b.id - a.id);
            break;
        case "ModeloTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => (b.modelo > a.modelo) ? 1 : ((a.modelo > b.modelo) ? -1 : 0));
            break;
        case "AnoFabTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => b.anoFabricacion - a.anoFabricacion);
            break;
        case "VelMaxTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => b.velocidadMaxima - a.velocidadMaxima);
            break;
        case "AltMaxTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => b.alturaMaxima - a.alturaMaxima);
            break;
        case "AutonomiaTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => b.autonomia - a.autonomia);
            break;
        case "CantPuerTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => b.cantidadPuertas - a.cantidadPuertas);
            break;
        case "CantRueTitulo":
            ArrayVehiculos = ArrayVehiculos.sort((a, b) => b.cantidadRuedas - a.cantidadRuedas);
            break;
    }

    filtrarPersonas();

}
function ObtenerFila() {

    for (let i = 1; i < tabla.rows.length; i++) {
        tabla.rows[i].addEventListener("dblclick", MostrarForm2);
    }
}

function MostrarForm2(e) {

    switch (esVisible2) {
        case false:
            document.querySelector(".formularioOculto").style.display = "grid";
            document.querySelector(".locura").style.display = "grid";
            document.querySelector(".terrestre").style.display = "grid";
            document.querySelector(".aereo").style.display = "grid";
            document.querySelector(".ModificarYBorrarBtn").style.visibility = "visible";
            document.getElementById('DivFormDatos').style.display = "none";
            document.querySelector(".idBtnAlta").style.visibility = "hidden";
            esVisible2 = true;
            break;
        case true:
            document.querySelector(".formularioOculto").style.display = "none";
            document.getElementById('DivFormDatos').style.display = "inline";
            document.querySelector(".ModificarYBorrarBtn").style.visibility = "hidden";
            document.querySelector(".idBtnAlta").style.visibility = "visible";
            document.getElementById("txtId").value = "";
            document.getElementById("txtModelo").value = "";
            document.getElementById("txtAnoFabr").value = "";
            document.getElementById("txtVelMax").value = "";
            document.getElementById("txtcantPuertas").value = "";
            document.getElementById("txtcantRuedas").value = "";
            document.getElementById("txtAltMax").value = "";
            document.getElementById("txtAutonomia").value = "";
            esVisible2 = false;
            break;
    }

    var regex = /(\d+)/g;
    let auxReturn;
    if (e.currentTarget != undefined) {
        let id = e.currentTarget.innerText;
        id = id.match(regex);

        ObtenerValorDeFila(id[0]);
    }

}
function ObtenerValorDeFila(e) {
    document.getElementById("txtId").value = e;
    ArrayVehiculos.map(element => {
        if (element.id == e) {
            document.getElementById("txtModelo").value = element.modelo;
            document.getElementById("txtAnoFabr").value = element.anoFabricacion;
            document.getElementById("txtVelMax").value = element.velocidadMaxima;
            document.getElementById("txtcantPuertas").value = element.cantidadPuertas || "--";
            document.getElementById("txtcantRuedas").value = element.cantidadRuedas || "--";
            document.getElementById("txtAltMax").value = element.alturaMaxima || "--";
            document.getElementById("txtAutonomia").value = element.autonomia || "--";
        }
    })

}

function OcultarTerrestreOAereo() {
    switch (select_tipo.value) {
        case "terrestre":
            document.querySelector(".terrestre").style.visibility = "visible";
            document.querySelector(".aereo").style.visibility = "hidden";
            break;
        case "aereo":
            document.querySelector(".terrestre").style.visibility = "hidden";
            document.querySelector(".aereo").style.visibility = "visible";
            break;
    }
}

function CalcularVelocidad() {
    let numero = 0;
    let contador = 0;
    switch (edadDeTodos.value) {
        case "1":
            ArrayVehiculos.map(elements => {
                numero += elements.velocidadMaxima;
            })
            txtVelocidadPromedio.value = numero / ArrayVehiculos.length.toFixed(2);
            break;
        case "2":
            ArrayVehiculos.map(elements => {
                if (elements.cantidadRuedas != null) {
                    numero += elements.velocidadMaxima;
                    contador++;
                }
            })
            txtVelocidadPromedio.value = numero / contador.toFixed(2);
            break;
        case "3":
            ArrayVehiculos.map(elements => {
                if (elements.alturaMaxima != null) {
                    numero += elements.velocidadMaxima;
                    contador++;
                }
            })
            txtVelocidadPromedio.value = numero / contador.toFixed(2);
            break;
    }
}

function Modificar() {
    RefrescarTabla();
    const auxId = document.getElementById("txtId").value;
    const auxModelo = document.getElementById("txtModelo").value;
    const auxAnoFab = document.getElementById("txtAnoFabr").value;
    const auxVelMax = document.getElementById("txtVelMax").value;
    const auxCantPuertas = parseInt(document.getElementById("txtcantPuertas").value);
    const auxCantRuedas = document.getElementById("txtcantRuedas").value;
    const auxAltMax = parseInt(document.getElementById("txtAltMax").value);
    const auxAutonomia = document.getElementById("txtAutonomia").value;


    ArrayVehiculos = ArrayVehiculos.filter(element => {
        if (element.id == auxId) {
            element.modelo = auxModelo;
            element.anoFabricacion = auxAnoFab;
            element.velocidadMaxima = auxVelMax;
            switch (select_tipo.value) {
                case "terrestre":
                    element.cantidadPuertas = auxCantPuertas;
                    element.cantidadRuedas = auxCantRuedas;
                    break;
                case "aereo":
                    element.alturaMaxima = auxAltMax;
                    element.autonomia = auxAutonomia;
                    break;
            }

        }
        return element;
    });

    ArrayVehiculos.map(element => { crearTabla(element, 1) });
    ObtenerFila();
    alert("Modificado");
}
function Borrar() {
    RefrescarTabla();
    const auxId = document.getElementById("txtId").value;
    const auxModelo = document.getElementById("txtModelo").value;
    const auxAnoFab = document.getElementById("txtAnoFabr").value;
    const auxVelMax = document.getElementById("txtVelMax").value;
    const auxCantPuertas = parseInt(document.getElementById("txtcantPuertas").value);
    const auxCantRuedas = document.getElementById("txtcantRuedas").value;
    const auxAltMax = parseInt(document.getElementById("txtAltMax").value);
    const auxAutonomia = document.getElementById("txtAutonomia").value;

    console.log(ArrayVehiculos);
    for(let i =0;i<ArrayVehiculos.length;i++)
    {
        if(ArrayVehiculos[i].id==auxId)
        {
            ArrayVehiculos.splice(i,1);
        }
    }


    ArrayVehiculos.map(element => { crearTabla(element, 1) });
    ObtenerFila();
    console.log(ArrayVehiculos);
    alert("Borrado");
}
