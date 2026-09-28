const btnCalcular = document.getElementById("btnCalcular");

const btnLimpar = document.getElementById("btnLimpar");

const resultado = document.getElementById("resultado");

const media = document.getElementById("media");


// CALCULAR MÉDIA

btnCalcular.addEventListener("click", function () {

    const nota1 = parseFloat(
        document.getElementById("nota1").value
    );

    const nota2 = parseFloat(
        document.getElementById("nota2").value
    );

    const nota3 = parseFloat(
        document.getElementById("nota3").value
    );


    // Verificar se os campos foram preenchidos

    if (
        isNaN(nota1) ||
        isNaN(nota2) ||
        isNaN(nota3)
    ) {

        alert("Preencha as três notas.");

        return;
    }


    // Verificar se as notas estão entre 0 e 10

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {

        alert("As notas devem estar entre 0 e 10.");

        return;
    }


    // Cálculo

    const valorMedia =
        (nota1 + nota2 + nota3) / 3;


    // Mostrar resultado

    media.textContent =
        valorMedia.toFixed(1).replace(".", ",");


    resultado.style.display = "block";

});


// LIMPAR CAMPOS

btnLimpar.addEventListener("click", function () {

    document.getElementById("nota1").value = "";

    document.getElementById("nota2").value = "";

    document.getElementById("nota3").value = "";


    media.textContent = "0,0";

    resultado.style.display = "none";

});