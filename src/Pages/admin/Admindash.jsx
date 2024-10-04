import DoughnutChart from "../../components/charts/DoughnutChart";
import BarChart from "../../components/charts/BarChart";

const AdminDash = () => {
  return (
    <div>
      <div className="my-4 grid grid-cols-4 gap-8">
        <div className="border rounded flex flex-col justify-center items-center py-5 text-white shadow bg-blue-600">
          <p className="mb-3">
            <strong>02</strong>
          </p>
          <p className="font-medium">Tuteurs</p>
        </div>
        <div className="border rounded flex flex-col justify-center items-center py-5 text-white shadow bg-amber-600">
          <p className="mb-3">
            <strong>02</strong>
          </p>
          <p className="font-medium">Modules</p>
        </div>
        <div className="border rounded flex flex-col justify-center items-center py-5 text-white shadow bg-green-600">
          <p className="mb-3">
            <strong>02</strong>
          </p>
          <p className="font-medium">Groupes</p>
        </div>
        <div className="border rounded flex flex-col justify-center items-center py-5 text-white shadow bg-blue-600">
          <p className="mb-3">
            <strong>02</strong>
          </p>
          <p className="font-medium">Affectations</p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-8">
        <div className="col-span-8  py-2 px-2 shadow">
          <BarChart />
        </div>
        <div className="col-span-4 py-2 shadow rounded">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
