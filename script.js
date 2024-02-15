document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const largura = parseFloat(document.getElementById('largura').value);
  const peso = parseFloat(document.getElementById('peso').value);
  const gramatura = parseFloat(document.getElementById('gramatura').value);
  const tara = parseFloat(document.getElementById('tara').value);

  const tipos_fio = ["CO", "PES", "PUE", "CV"];
  let resultadoHTML = '';

  tipos_fio.forEach(tipo => {
      const peso_liquido = peso - tara;
      const consumo_trama = (peso_liquido * 1000) / (gramatura * largura);
      const consumo_urdume = (peso_liquido * 1000) / (gramatura * largura);

      resultadoHTML += `<p>Consumo de trama (${tipo}): ${consumo_trama.toFixed(2)} metros/kg</p>`;
      resultadoHTML += `<p>Consumo de urdume (${tipo}): ${consumo_urdume.toFixed(2)} metros/kg</p>`;
  });

  document.getElementById('resultado').innerHTML = resultadoHTML;
});
