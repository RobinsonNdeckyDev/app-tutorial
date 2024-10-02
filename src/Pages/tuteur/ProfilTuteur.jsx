const ProfilTuteur = () => {
    return (  
        <div>
<div className="mx-20">
  <div>
    <div className="mt-5 bg-white rounded-lg shadow">
          <h1 className="text-2xl font-semibold text-center pb-6 leading-none">INFORMATIONS PERSONNEL</h1>
      <div className="px-5 pb-4">
      
<div className="pb-4">
  <label className="block mb-2 pt-4 font-bold text-gray-900 dark:text-white" htmlFor="file_input">Photo profile</label>
  <input className="block w-full text-sm text-black placeholder-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
</div>


      <div className="flex">
          <div className="flex-grow w-1/4 pr-2">
            <label for="Nom" className="pt-4 font-bold">Nom</label>
            <input placeholder="Touré" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
          </div>
          <div className="flex-grow">
            <label for="Prénom" className="pt-4 font-bold">Prénom</label>
            <input placeholder="Macoumba" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
          </div>
        </div>
        <label for="Email" className="pt-4 font-bold">Email</label>
        <input placeholder="touremacoumba@unchk.edu.sn" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
        <label for="Mot de passe" className="pt-4 font-bold">Mot de passe</label>
        <input placeholder="****************" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /> 
        <label for="Téléphone" className="pt-4 font-bold">Téléphone</label>
        <input placeholder="785356842" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
        <label for="Adresse" className="pt-4 font-bold">Adresse</label>
        <input placeholder="Dakar Plateau" className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /> 
      </div>
      <hr className="mt-4" />
      <div className="flex flex-row-reverse p-3">
        <div className="flex-initial pl-3">
          <button type="button" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3" />
              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
            </svg>
            <span className="pl-2 mx-1">Enregistrer</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="grid gap-6 mb-8 md:grid-cols-2">

</div>
        </div>
    );
}
 
export default ProfilTuteur;