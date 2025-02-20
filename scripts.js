// scripts.js
document.getElementById("mining-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener valores del formulario
  const electricityCost = parseFloat(document.getElementById("electricity-cost").value);
  const hashrate = parseFloat(document.getElementById("hashrate").value);
  const powerConsumption = parseFloat(document.getElementById("power-consumption").value);
  const asicPrice = parseFloat(document.getElementById("asic-price").value);

  // Datos de ejemplo (reemplazar con API)
  const btcPrice = 30000; // Precio de BTC en USD (obtener de API)
  const networkHashrate = 150000000; // Hashrate total de la red (obtener de API)
  const blockReward = 6.25; // Recompensa por bloque (BTC)

  // Cálculos
  const monthlyProfit = ((hashrate / networkHashrate) * blockReward * 30 * btcPrice).toFixed(2);
  const monthlyElectricity = ((powerConsumption / 1000) * 24 * 30 * electricityCost).toFixed(2);
  const roi = (asicPrice / (monthlyProfit - monthlyElectricity)).toFixed(2);

  // Mostrar resultados
  document.getElementById("monthly-profit").textContent = `$${monthlyProfit}`;
  document.getElementById("monthly-electricity").textContent = `$${monthlyElectricity}`;
  document.getElementById("roi").textContent = `${roi} meses`;
});

// Obtener precios de ASIC miners (ejemplo con API)
async function fetchAsicPrices() {
  const response = await fetch("https://api.example.com/asic-prices");
  const data = await response.json();
  const asicList = document.getElementById("asic-list");

  data.forEach((asic) => {
    const asicItem = document.createElement("div");
    asicItem.innerHTML = `<strong>${asic.name}</strong>: $${asic.price}`;
    asicList.appendChild(asicItem);
  });
}

fetchAsicPrices();
