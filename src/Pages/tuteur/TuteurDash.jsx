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

        </div>
    );
}
 
export default TuteurDash;