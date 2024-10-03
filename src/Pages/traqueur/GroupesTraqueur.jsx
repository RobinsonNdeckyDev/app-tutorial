/* eslint-disable no-undef */
import Modal from "../../components/ui/Modal";
// import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import Table from "../../components/ui/Table";

const GroupesTraqueur = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nom: "Groupe 1",
      nbre_etudiants: 18,
      created_at: "24-04-24",
    },
    {
      id: 2,
      nom: "Groupe 2",
      nbre_etudiants: 20,
      created_at: "24-04-24",
    },
    // Autres données...
  ]);

  const [nom, setNom] = useState("");
  const [nbre_etudiants, setNbre_etudiants] = useState("");
  
  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleEdit = (data) => {
    console.log("edit", data);
  };

  const handleView = (data) => {
    console.log("view", data);
  };

  const handleDelete = (data) => {
    console.log("delete", data);
  };

  // handleAdd
  const handleAddNewItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // date
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = String(today.getFullYear()).slice(-2);

    const formattedDate = `${day}-${month}-${year}`;

    const newItem = {
        nom,
        nbre_etudiants,
        created_at: formattedDate
    };

    // Ajoute le nouvel étudiant et génère un ID unique
    setData([...data, { id: data.length + 1, ...newItem }]);

    // Réinitialise le formulaire après soumission
    setNom("");

    closeModal(); // Fermer la modal après soumission
  };


  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Nom", accessor: "nom" },
    { Header: "Nbre étudiants", accessor: "nbre_etudiants" },
    { Header: "Crée le", accessor: "created_at" },
  ];

  return (
    <div className="">
      <p className="text-start font-bold">Liste des groupes</p>

      {/* <p>Page tuteurs works !</p> */}
      <div className="">
        <div className=" flex justify-end mb-4 mt-8">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Créer un groupe
          </button>
        </div>

        <Table
          data={data}
          columns={columns}
          onUpdate={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          className="m-0"
          search="Chercher un groupe"
        ></Table>
      </div>

      {/* Modal qui contient le formulaire */}
      <Modal isOpen={isModalOpen} onClose={closeModal} width="1/3">
        <form className="mt-4" onSubmit={handleAddNewItem}>
          <h1 className="text-center my-5 font-bold text-2xl">
            Créer un groupe
          </h1>
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Nom du groupe"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              fullWidth
            />
            <Input
              type="number"
              placeholder="Nbre d'étudiants"
              value={nbre_etudiants}
              onChange={(e) => setNbre_etudiants(e.target.value)}
              fullWidth
            />
          </div>

          <div className="flex justify-center mt-8 gap-8">
            <Button size="md" color="green" variant="outlined" type="submit">
              Ajouter
            </Button>
            <Button
              size="md"
              color="dark"
              variant="outlined"
              background="transparent"
              onClick={closeModal}
            >
              Annuler
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default GroupesTraqueur;
