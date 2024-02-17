document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const largura = parseFloat(document.getElementById('largura').value);
  const metros = parseFloat(document.getElementById('metros').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const gramatura = parseFloat(document.getElementById('gramatura').value);
  const tara = parseFloat(document.getElementById('tara').value);
  const co = parseFloat(document.getElementById('co').value) / 100; // Porcentagem de Algodão
  const pes = parseFloat(document.getElementById('pes').value) / 100; // Porcentagem de Poliéster
  const pue = parseFloat(document.getElementById('pue').value) / 100; // Porcentagem de Poliuretano
  const cv = parseFloat(document.getElementById('cv').value) / 100; // Porcentagem de Viscose
  
  const tipos_fio = {
      "CO": co,
      "PES": pes,
      "PUE": pue,
      "CV": cv
  };

  let resultadoHTML = '';

  if (metros > 0) {
    
    Object.entries(tipos_fio).forEach(([tipo, percentual]) => {

      const gramaturaLinear = gramatura * largura;
      const pesoLiquidoCalculado = metros * gramaturaLinear;
      const consumoFioPesoCalculado = pesoLiquidoCalculado * percentual;
        
      resultadoHTML += `<p>Peso Líquido (${tipo}): ${pesoLiquidoCalculado.toFixed(2)} kg</p>`;
      resultadoHTML += `<p>Consumo de trama (${tipo}): ${consumoFioPesoCalculado.toFixed(2)} kg</p>`;
        
    });
  }else {

    const pesoLiquidoReal = peso - tara;
    const gramaturaLinear = gramatura * largura;
    const metrosCalculados = pesoLiquidoReal / gramaturaLinear; 
    const consumoFioPesoReal = pesoLiquidoReal * percentual;

    resultadoHTML += `<p>Metros (${tipo}): ${metrosCalculados.toFixed(2)} m</p>`;
    resultadoHTML += `<p>Consumo de fio (${tipo}): ${consumoFioPesoReal.toFixed(2)} kg</p>`;
    
  }

  document.getElementById('resultado').innerHTML = resultadoHTML;
});
