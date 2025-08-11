const dados = {
    labels: ["Nome1", "Nome2", "Nome3", "Nome4", "Nome5", "Nome6"],
    valores: [30, 20, 20, 20, 10, 10] // Adicionado o sexto valor
  };
  
  // Gráfico de Pizza com 6 divisões
  new Chart(document.getElementById("graficoPizza"), {
    type: "pie",
    data: {
      labels: dados.labels,
      datasets: [{
        data: dados.valores,
        // Adicionada uma nova cor para a sexta divisão
        backgroundColor: ["#ff00d4ff", "#0099ffff", "#ffb701ff", "#03fc0cff", "#f50f0fff", "#8a2be2ff"] 
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          labels: {
            color: '#000000ff'
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              // A função de cálculo da porcentagem já funciona para 6 itens
              let total = context.dataset.data.reduce((a, b) => a + b, 0);
              let valor = context.raw;
              let porcentagem = ((valor / total) * 100).toFixed(1);
              return `${context.label}: ${porcentagem}%`;
            }
          }
        }
      }
    }
  });
  
  // Gráfico de Barras
  new Chart(document.getElementById("graficoBarras"), {
    type: "bar",
    data: {
      labels: dados.labels,
      datasets: [{
        label: "Distribuição (%)",
        data: dados.valores,
        backgroundColor: "#0f1c8fff"
      }]
    },
    options: {
      responsive: false,
      plugins:{
        legend:{
          labels:{
            color: '#000000ff'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks:{
            color:'#000000ff'
          },
          grid:{
            color: '#000000ff'
          }
        },
        x: {
            ticks:{
              color:'#000000ff'
            },
            grid:{
              color: '#000000ff'
          }
        }
      }
    }
  });