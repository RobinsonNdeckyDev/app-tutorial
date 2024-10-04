const SeancesTuteur = () => {
    return (  
        <div className="sceances">
<div>
  <h4 className="mb-4 text-5xl text-center uppercase font-semibold text-gray-600 dark:text-gray-300">
    Listes des séances
  </h4>
  <button type="button" data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
        </svg>
    Ajouter une séance
   </button>
  <div className="w-full overflow-hidden rounded-lg shadow-xs">
    <div className="w-full overflow-x-auto">
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <th className="px-4 py-3">Groupes</th>
            <th className="px-4 py-3">Séances</th>
            <th className="px-4 py-3">Modules</th>
            <th className="px-4 py-3">Dates</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4  py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
                <div>
                  <p className="font-semibold">Groupe 1</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">
              Séance 6
            </td>
            <td className="px-4 py-3 text-sm">
              Module 5
            </td>
            <td className="px-4 py-3 text-sm">
              6/10/2020
            </td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                non-effectuée
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center space-x-4 text-sm">
                <button data-modal-target="crud-modal2" data-modal-toggle="crud-modal2" className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
              <div>
                  <p className="font-semibold">Groupe 2</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">
              Séance 5
            </td>            
            <td className="px-4 py-3 text-sm">
              Module 4
            </td>
            <td className="px-4 py-3 text-sm">
              6/10/2020
            </td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                effectuée
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center space-x-4 text-sm">
                <button data-modal-target="crud-modal2" data-modal-toggle="crud-modal2" className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
              <div>
                  <p className="font-semibold">Groupe 1</p>
              </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">
              Séance 4
            </td>
            <td className="px-4 py-3 text-sm">
              Module 3
            </td>
            <td className="px-4 py-3 text-sm">
              6/10/2020
            </td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                effectuée
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center space-x-4 text-sm">
                <button data-modal-target="crud-modal2" data-modal-toggle="crud-modal2" className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
              <div>
                  <p className="font-semibold">Groupe 1</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">
              Séance 3
            </td>            
            <td className="px-4 py-3 text-sm">
              Module 2
            </td>
            <td className="px-4 py-3 text-sm">
              6/10/2020
            </td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                effectuée
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center space-x-4 text-sm">
                <button data-modal-target="crud-modal2" data-modal-toggle="crud-modal2" className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
              <div>
                  <p className="font-semibold">Groupe 2</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">
              Séance 2
            </td>
            <td className="px-4 py-3 text-sm">
             Module 1
            </td>
            <td className="px-4 py-3 text-sm">
              6/10/2020
            </td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                effectuée
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center space-x-4 text-sm">
                <button data-modal-target="crud-modal2" data-modal-toggle="crud-modal2" className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
          <tr className="text-gray-700 dark:text-gray-400">
            <td className="px-4 py-3">
              <div className="flex items-center text-sm">
              <div>
                  <p className="font-semibold">Groupe 1</p>
                </div>
              </div>
            </td>
            <td className="px-4 py-3 text-sm">
              Séance 1
            </td>
            <td className="px-4 py-3 text-sm">
              Module 1
            </td>
            <td className="px-4 py-3 text-sm">
              6/10/2020
            </td>
            <td className="px-4 py-3 text-xs">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                effectuée
              </span>
            </td>
            <td className="px-4 py-3">
              <div className="flex items-center space-x-4 text-sm">
                <button data-modal-target="crud-modal2" data-modal-toggle="crud-modal2" className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* Les modals de la pages séances */}

{/* Main modal ajouter séance */}
<div id="crud-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div className="relative p-4 w-full max-w-md max-h-full">
    {/* Contenu du Modal */}
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      {/* entête du Modal */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Ajouter une séance
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Fermer</span>
        </button>
      </div>
      {/* Corp du Modal */}
      <form className="p-4 md:p-5">
        <div className="grid gap-4 mb-4 grid-cols-2">
        <div>
          <label htmlFor="groupes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choisir un groupe</label>
            <select id="groupes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choisir un groupe</option>
              <option value="Groupe 1">Groupe 1</option>
              <option value="Groupe 2">Groupe 2</option>
              <option value="Groupe 3">Groupe 3</option>
            </select>
        </div>
          <div className="col-span-2">
            <label htmlFor="module" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Module</label>
            <input type="text" name="module" id="module" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entrer un module" required />
          </div>
          <div className="col-span-2">
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entrer une date" required />
          </div>
        </div>
        <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
          Ajouter
        </button>
      </form>
    </div>
  </div>
</div>
{/* Main modal modifier séance */}
<div id="crud-modal2" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
  <div className="relative p-4 w-full max-w-md max-h-full">
    {/* Contenu du Modal */}
    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
      {/* entête du Modal */}
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Modifier une séance
        </h3>
        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal2">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Fermer</span>
        </button>
      </div>
      {/* Corp du Modal */}
      <form className="p-4 md:p-5">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div>
          <label htmlFor="groupes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choisir un groupe</label>
            <select id="groupes" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choisir un groupe</option>
              <option value="Groupe 1">Groupe 1</option>
              <option value="Groupe 2">Groupe 2</option>
              <option value="Groupe 3">Groupe 3</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="module" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Module</label>
            <input type="text" name="module" id="module" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entrer un module" value="Module 1" />
          </div>
          <div className="col-span-2">
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
            <input type="date" name="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Entrer une date" required />
          </div>
        </div>
        <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Enregistrer
        </button>
      </form>
    </div>
  </div>
</div>
        </div>
    );
}
export default SeancesTuteur;