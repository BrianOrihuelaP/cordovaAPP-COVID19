
getData = () => {

    var nombre = document.getElementById("nombre").value;

    var res = new Array(9);
    var respuesta = new Array(9);

    res[0] = document.getElementById("contacto1").checked;
    res[1] = document.getElementById("sintomaSI").checked;
    res[2] = document.getElementById("sintomasDias1").checked;
    res[3] = document.getElementById("respiratoria1").checked;
    res[4] = document.getElementById("fiebre").checked;
    res[5] = document.getElementById("fiebre2").checked;
    res[6] = document.getElementById("tos0").checked;
    res[7] = document.getElementById("olfato0").checked;
    res[8] = document.getElementById("malestar0").checked;
    res[9] = document.getElementById("malestar2").checked;

    for (let index = 0; index < 10; index++) {
        respuesta[index] = evalua(res[index]);
    }

    ponderacion = respuesta.reduce((acc, cur) => acc + cur, iv = 0);
    if (ponderacion == 0)
        alert(`${nombre} no has realizado el test`)
    else
        resultados(ponderacion, nombre)
}

evalua = (res) => {
    var valor;
    if (res == true)
        valor = 10;
    else
        valor = 0;
    return valor;
}

resultados = (ponderacion, nombreCompleto) => {

    const tituloDOM = document.getElementById("titulo")
    const dialogoDOM = document.getElementById("dialogo")
    const imgDOM = document.getElementById("imgWarning")

    if (ponderacion <= 50) {
        tituloDOM.textContent = `Estimad@ ${nombreCompleto} usted tiene un riesgo bajo de tener COVID-19`
        dialogoDOM.textContent = "No te preocupes, tienes un riesgo bajo de contraer el COVID-19, aún así sigue nuestras recomendaciones y no bajes la guardia. No solo se trata de tí, se trata de todos nosotros"
        imgDOM.src = "../img/nowarning.gif"
    } else if (ponderacion > 50 && ponderacion <= 80) {
        tituloDOM.textContent = `Estimad@ ${nombreCompleto} usted tiene un riesgo medio de tener COVID-19`
        dialogoDOM.textContent = "Le aconsejamos que visite a su medico, dado que tiene una buena probabilidad de tener COVID-19, por su seguridad le recomendamos vacunarse, si es el caso de que no se ha vacunado..."
        imgDOM.src = "../img/vaccine.gif"
    } else {
        tituloDOM.textContent = `Estimad@ ${nombreCompleto} usted tiene un riesgo alto de tener COVID-19`
        dialogoDOM.textContent = "Acuda de inmediato a su medico, usted tiene una probabilidad muy alta de tener COVID-19!!!, tratese lo más pronto posible y acude con un especialista, comunicate al 800 2222 668 para una mayor atención."
        imgDOM.src = "../img/warning.gif"
    }
}

/* Carcteristica Pendiente
crearPDF = () => {
    const doc = new jsPDF();

    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
}
*/






