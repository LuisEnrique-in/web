document.getElementById('calculoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let resistencia = parseFloat(document.getElementById('resistencia').value);
    let valor = document.getElementById('valor').value;
    let voltaje = parseFloat(document.getElementById('voltaje').value);

    if (valor === 'kohms') {
        resistencia *= 1000;
    }


    let corriente = voltaje / resistencia;
    let unidad;

    if (corriente < 1) {
        corriente *= 1000;
        unidad = 'mA';
    } else {
        unidad = 'A';
    }

    const resultadoTexto = document.getElementById('resultadoTexto');
    resultadoTexto.innerHTML = `
        <div style="display: flex; align-items: center;">
            <img src="xd.gif" alt="Resultado" style="width: 80px; height: 80px; margin-left: 10px;">
            <span>La corriente es: ${corriente.toFixed(2)} ${unidad}</span>
        </div>
    `;
    document.getElementById('modalxd').style.display = 'block';
});


window.onclick = function(event) {
    const modal = document.getElementById('modalxd');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
