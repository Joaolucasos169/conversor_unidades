
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Fatores de conversão em relação a metros
const units = {
  cm: 0.01,
  m: 1,
  km: 1000,
  mi: 1609.34
};

app.post('/convert', (req, res) => {
  const { value, fromUnit, toUnit } = req.body;
  const number = parseFloat(value);

  if (isNaN(number)) {
    return res.status(400).json({ error: 'Valor inválido' });
  }

  if (!units[fromUnit] || !units[toUnit]) {
    return res.status(400).json({ error: 'Unidades não suportadas' });
  }

  // Converter para metros primeiro, depois para a unidade de destino
  const valueInMeters = number * units[fromUnit];
  const result = valueInMeters / units[toUnit];

  res.json({ result: result.toFixed(6) }); // Limitar para 6 casas decimais
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});