import React, { useState } from "react";
const ModulesTuteur = () => {
    return (  
        <div className="modules_tuteur">
            <div className="w-full mt-1">
            <h4 className="mb-4 text-5xl text-center uppercase font-semibold text-gray-600 dark:text-gray-300">
              Listes des modules
            </h4>
  <div className="bg-white overflow-auto">
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Modues
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Durées
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Dates
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            status
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Module 4
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">10 Semaines</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              Jan 21, 2020
            </p>
          </td>
          <td className="px-4 py-3 text-xs border-b border-gray-200">
              <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                non-terminée
              </span>
            </td>
        </tr>
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Module 3
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">6 Semaines</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              Jan 01, 2020
            </p>
          </td>
          <td className="px-4 py-3 text-xs border-b border-gray-200">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                Terminé
              </span>
          </td>
        </tr>
        <tr>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Module 2
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">4 Semaines</p>
          </td>
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
              Jan 10, 2020
            </p>
          </td>
          <td className="px-4 py-3 text-xs border-b border-gray-200">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                Terminé
              </span>
          </td>
        </tr>
        <tr>
          <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">
                  Module 1
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 bg-white text-sm  border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">2 Semaines</p>
          </td>
          <td className="px-5 py-5 bg-white text-sm border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">Jan 18, 2020</p>
          </td>
          <td className="px-4 py-3 text-xs border-b border-gray-200">
              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                Terminé
              </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        </div>
    );
}
 
export default ModulesTuteur;