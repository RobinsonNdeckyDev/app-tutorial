import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const TuteurDash = () => {
    return (  
        <div>
<div className="flex flex-col h-full w-full mx-auto  space-y-6">
  <section className="flex flex-col mx-auto bg-white rounded-lg p-6 shadow-md space-y-6 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full min-w-0">
      {/* In use */}
      <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-blue-500">11</div>
          <div className="text-lg font-medium text-blue-500">Modules</div>
        </div>
      </div>
      {/* renovation */}
      <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-amber-500">24</div>
          <div className="text-lg font-medium text-amber-600">Séances Affectés</div>
        </div>
      </div>
      {/* Suspended */}
      <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-red-500">12</div>
          <div className="text-lg font-medium text-red-600">Séances non-effectuées</div>
        </div>
      </div>
      {/* Closed */}
      <div className="flex flex-col px-6 py-2 bg-white shadow rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-primary-900">8</div>
          <div className="text-lg font-medium text-primary-900">Groupes Formés</div>
        </div>
      </div>
    </div>
  </section>
</div>
<div className="chart pt-5 mt-5 mb-5 pb-5">
  <div className="dataCard revenueCard">
        <Line 
      data={{
        labels:["Modules","Groupes","Séances","Modules","Groupes","Séances","Modules","Groupes","Séances","Modules","Groupes","Séances","Modules","Groupes","Séances","Modules","Groupes","Séances","Modules","Groupes","Séances","Modules","Groupes","Séances","Modules","Groupes","Séances"],
        datasets: [
          {
            label : "Modules",
            data: [200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400],
            backgroundColor: [
              "rgba(20,43,59,0.9)",
              "rgba(92,113,29,0.9)",
              "rgba(143,13,10,0.9)",
            ],
          },
          {
            label : "Groupes",
            data: [200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400],
            backgroundColor: [
              "rgba(20,43,59,0.9)",
              "rgba(92,113,29,0.9)",
              "rgba(143,13,10,0.9)",
            ],
          },
          {
            label : "Séances",
            data: [200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400,200,150,400],
            backgroundColor: [
              "rgba(20,43,59,0.9)",
              "rgba(92,113,29,0.9)",
              "rgba(143,13,10,0.9)",
            ],
          },
        ],
      }}
    /> 
  </div>
  <div className="dataCard customerCard">
    <Bar 
      data={{
        labels:["Modules","Groupes","Séances"],
        datasets: [
          {
            label : "Modules",
            data: [200,300,400],
            backgroundColor: [
              "rgba(20,43,59,0.9)"
            ],
          },
          {
            label : "Séances",
            data: [150,250,300],
            backgroundColor: [
              "rgba(143,13,10,0.9)"
            ],
          },
          {
            label : "Groupes",
            data: [20,50,80],
            backgroundColor: [
              "rgba(92,113,29,0.9)"

            ],
          },
        ],
      }}
    /> 
  </div>
  <div className="dataCard customerCard">
    <Doughnut 
      data={{
        labels:["Modules","Groupes","Séances"],
        datasets: [
          {
            label : "Module",
            data: [200,300,400],
            backgroundColor: [
              "rgba(20,43,59,0.9)",
              "rgba(92,113,29,0.9)",
              "rgba(143,13,10,0.9)",
            ],
          },
        ],
      }}
    /> 
  </div>
</div>
        </div>
    );
}
 
export default TuteurDash;