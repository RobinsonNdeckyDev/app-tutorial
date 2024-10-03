/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";
import { useState } from "react";
// import { CloudSnow } from "lucide-react";

// Composant Table
const Table = ({ data, columns, onView, onDelete, onUpdate, search}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  // Filtrer les données en fonction de la recherche
  const filteredData = data.filter((item) =>
    columns.some((column) => {
      const value = item[column.accessor];
      return (
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  );

  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  // Gestion de la pagination
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  
  return (
    <div className="container mx-auto">
      {/* Champ de recherche */}
      <input
        type="text"
        className="border p-2 mb-4 w-full"
        placeholder={search}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Tableau */}
      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-4 bg-gray-100 border"
              >
                {column.Header}
              </th>
            ))}

            {/* Collonne pour les actions */}
            <th className="py-2 px-4 border text-center bg-gray-100">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border text-center"
                >
                  {item[column.accessor]}
                </td>
              ))}

              {/* Colonne pour les actions */}
              <td className="py-2 px-4 border text-center">
                <button
                  onClick={() => onView(item.id)}
                  className="text-blue-500 hover:text-blue-700 mx-2"
                  title="Voir détails"
                >
                  <i className="bi bi-eye-fill"></i>
                </button>
                <button
                  onClick={() => onUpdate(item.id)}
                  className="text-green-500 hover:text-green-700 mx-2"
                  title="Modifier"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-500 hover:text-red-700 mx-2"
                  title="Supprimer"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Table;
