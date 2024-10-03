import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Enregistrer les composants nécessaires à Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Données pour le graphique en anneau
  const data = {
    labels: ["Rouge", "Bleu", "Jaune"],
    datasets: [
      {
        label: "Votes",
        data: [300, 50, 100],
        backgroundColor: ["#16A34A", "#2563EB", "#D97706"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        // borderWidth: 1,
      },
    ],
  };

  // Options de configuration
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;