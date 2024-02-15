document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const largura = parseFloat(document.getElementById('largura').value);
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

  Object.entries(tipos_fio).forEach(([tipo, percentual]) => {
      const peso_liquido = peso - tara;
      const consumo_trama = ((peso_liquido * 1000) / (gramatura * largura)) * percentual;
      const consumo_urdume = ((peso_liquido * 1000) / (gramatura * largura)) * percentual;

      resultadoHTML += `<p>Consumo de trama (${tipo}): ${consumo_trama.toFixed(2)} metros/kg</p>`;
      resultadoHTML += `<p>Consumo de urdume (${tipo}): ${consumo_urdume.toFixed(2)} metros/kg</p>`;
  });

  document.getElementById('resultado').innerHTML = resultadoHTML;
});
