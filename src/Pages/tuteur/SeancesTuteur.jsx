const SeancesTuteur = () => {
    return (  
        <div className="sceances">
<div>
  <h4 className="mb-4 text-5xl text-center uppercase font-semibold text-gray-600 dark:text-gray-300">
    Listes des séances
  </h4>
  <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
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
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
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
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
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
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
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
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
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
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
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
                <button className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray" aria-label="Edit">
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
        </div>
    );
}
 
export default SeancesTuteur;