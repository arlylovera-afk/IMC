// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("btnCalcular");

    boton.addEventListener("click", function () {

        let peso = document.getElementById("peso").value;
        let altura = document.getElementById("altura").value;

        // Convertir a número
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        // Validación
        if (isNaN(peso) || isNaN(altura) || altura === 0) {
            alert("Ingresa valores válidos");
            return;
        }

        let imc = peso / (altura * altura);

        // Mostrar resultado
        document.getElementById("resultado").innerText = imc.toFixed(2);

        // Clasificación
        let mensaje = "";

        if (imc < 18.5) {
            mensaje = "Bajo peso";
        } else if (imc < 24.9) {
            mensaje = "Peso normal";
        } else if (imc < 29.9) {
            mensaje = "Sobrepeso";
        } else {
            mensaje = "Obesidad";
        }

        document.getElementById("mensaje").innerText = mensaje;
    });

});