import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Enregistrer les composants nécessaires à Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  // Données pour le graphique
  const data = {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        label: "Séances",
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: "#2563EB", // Couleur des barres
        borderColor: "rgba(75, 192, 192, 1)", // Bordure des barres
        borderWidth: 1,
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
        text: "Séances mensuelle",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Désactiver la grille sur l'axe x
        },
      },
      y: {
        grid: {
          display: false, // Désactiver la grille sur l'axe y
        },
        beginAtZero: true, // Commence à 0 sur l'axe des ordonnées
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
