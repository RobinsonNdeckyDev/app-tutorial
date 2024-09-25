import Table from "../../components/ui/Table";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import Form from "../../components/ui/Form";

const Tuteurstraqueur = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nom: "John Doe",
      email: "john@example.com",
      age: 28,
      sexe: "Homme",
      adresse: "Dakar",
      photo: "img1",
    },
    {
      id: 2,
      nom: "Jane Smith",
      email: "jane@example.com",
      age: 34,
      sexe: "Homme",
      adresse: "Dakar",
      photo: "img2",
    },
    // Autres données...
  ]);

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // handleAdd
  // handleAdd
  const handleAddNewItem = (newItem) => {
    setData([...data, { id: data.length + 1, ...newItem }]); // Ajout du nouvel élément avec un ID
    closeModal(); // Fermer la modal après soumission
  };

  const columns = [
    { Header: "Photo", accessor: "photo" },
    { Header: "Nom", accessor: "nom" },
    { Header: "Email", accessor: "email" },
    { Header: "Adresse", accessor: "adresse" },
    { Header: "Age", accessor: "age" },
    { Header: "Actions", accessor: "actions" },
  ];

  return (
    <div className="tuteurs">
      {/* <p>Page tuteurs works !</p> */}
      <div className="card">
        <div className=" flex justify-end mb-4 mt-8">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Ajouter un tuteur
          </button>
        </div>

        <Table data={data} columns={columns} className="m-0" />
      </div>

      {/* Modal qui contient le formulaire */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form onSubmit={handleAddNewItem} />
      </Modal>
    </div>
  );
};

export default Tuteurstraqueur;
