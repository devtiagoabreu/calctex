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

  let count = 0;

  if (metros > 0) {
    
    Object.entries(tipos_fio).forEach(([tipo, percentual]) => {

      count = count + 1;

      const gramaturaLinear = gramatura * largura;
      const pesoLiquidoCalculado = metros * gramaturaLinear;
      const consumoFioPesoCalculado = pesoLiquidoCalculado * percentual;
      
      if (count == 1) {
        resultadoHTML += `<p>Peso Líquido do tecido : ${pesoLiquidoCalculado.toFixed(4)} kg</p>`;
        resultadoHTML += `<p>Gramatura Linear : ${gramaturaLinear.toFixed(4)} kg</p>`;
      }

      if (percentual != 0) {        
        resultadoHTML += `<p>Consumo de fio de (${tipo}): ${consumoFioPesoCalculado.toFixed(4)} kg</p>`;
      }
            
    });
  }else {
    Object.entries(tipos_fio).forEach(([tipo, percentual]) => {

      count = count + 1;

      const pesoLiquidoReal = peso - tara;
      const gramaturaLinear = gramatura * largura;
      const metrosCalculados = pesoLiquidoReal / gramaturaLinear; 
      const consumoFioPesoReal = pesoLiquidoReal * percentual;

      if (count == 1) {
        resultadoHTML += `<p>Metros de tecido : ${metrosCalculados.toFixed(4)} m</p>`;
        resultadoHTML += `<p>Gramatura Linear : ${gramaturaLinear.toFixed(4)} kg</p>`;
      }

      if (percentual != 0) {       
        resultadoHTML += `<p>Consumo de fio de (${tipo}): ${consumoFioPesoReal.toFixed(4)} kg</p>`;
      }

    });
  }

  document.getElementById('resultado').innerHTML = resultadoHTML;
});
