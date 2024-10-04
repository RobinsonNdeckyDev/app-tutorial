// /* eslint-disable no-undef */
import Modal from "../../components/ui/Modal";
// import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import Table from "../../components/ui/Table";
import Select from "../../components/ui/select";

const Groupes = () => {

    const [data, setData] = useState([
    {
      id: 1,
      nom: "Groupe 1",
      module: "Algorithme",
      tuteur: "Malick Ndiaye",
      created_at: "24-04-24",
    },
    {
      id: 2,
      nom: "Groupe 2",
      module: "Inteligence artificielle",
      tuteur: "Mounir Diagne",
      created_at: "24-04-24",
    },
    // Autres données...
  ]);

  // Groupe selectionné
  const [selectedGroupe, setSelectedGroupe] = useState(null);

  const [nom, setNom] = useState("");
  const [module, setmodule] = useState("");
  const [tuteur, setTuteur] = useState("");

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Open/Close Modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // voir modification modal
  const openEditModal = (groupe) => {
    setSelectedGroupe(groupe);
    setNom(groupe.nom);
    setmodule(groupe.module);
    setTuteur(groupe.tuteur);
    setIsEditModalOpen(true);
  };

  // fermeture edit modal
  const closeEditModal = () => setIsEditModalOpen(false);

  // voir detail modal
  const openViewModal = (groupe) => {
    setSelectedGroupe(groupe);
    setIsViewModalOpen(true);
  };

  // fermeture detail modal
  const closeViewModal = () => setIsViewModalOpen(false);

  const handleEdit = (id) => {
    const groupe = data.find((item) => item.id === id);
    openEditModal(groupe);
  };

  const handleView = (id) => {
    const groupe = data.find((item) => item.id === id);
    openViewModal(groupe);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
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
      module,
      tuteur,
      created_at: formattedDate,
    };

    // Ajoute le nouvel étudiant et génère un ID unique
    setData([...data, { id: data.length + 1, ...newItem }]);

    // Réinitialise le formulaire après soumission
    setNom("");

    closeModal(); // Fermer la modal après soumission
  };

  // handleUpdateItem
  const handleUpdateItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const updatedData = data.map((item) =>
      item.id === selectedGroupe.id
        ? { ...item, nom, module, tuteur }
        : item
    );

    setData(updatedData);
    closeEditModal(); // Ferme la modale après mise à jour
  };

  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Nom", accessor: "nom" },
    { Header: "Module", accessor: "module" },
    { Header: "Tuteur", accessor: "tuteur" },
    { Header: "Crée le", accessor: "created_at" },
  ];

  const datamodules = [
    { value: "IA", label: "IA" },
    {
      value: "Programmation fonctionnelle",
      label: "Programmation fonctionnelle",
    },
    { value: "Algorithme avancé", label: "Algorithme avancé" },
  ];

  const dataTuteurs = [
    { value: "Moussa Sarr", label: "Moussa Sarr" },
    { value: "Sokhna Sene", label: "Sokhna Sene" },
    { value: "Jean Tine", label: "Jean Tine" },
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

      {/* Modal qui contient le formulaire d'ajout de groupe*/}
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
            <Select
              options={datamodules}
              placeholder="Sélectionnez un module"
              value={module}
              onChange={(e) => setmodule(e.target.value)}
              fullWidth
            />
            <Select
              options={dataTuteurs}
              placeholder="Sélectionnez un tuteur"
              value={tuteur}
              onChange={(e) => setTuteur(e.target.value)}
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

      {/* Modal pour modifier une affectation */}
      {selectedGroupe && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal} width="1/3">
          <form className="mt-4" onSubmit={handleUpdateItem}>
            <h1 className="text-center my-5 font-bold text-2xl">
              Modifier une affectation
            </h1>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Nom du groupe"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                fullWidth
              />
              <Select
                options={datamodules}
                placeholder="Sélectionnez un module"
                value={module}
                onChange={(e) => setmodule(e.target.value)}
                fullWidth
              />
              <Select
                options={dataTuteurs}
                placeholder="Sélectionnez un tuteur"
                value={tuteur}
                onChange={(e) => setTuteur(e.target.value)}
                fullWidth
              />
            </div>

            <div className="flex justify-center mt-8 gap-8">
              <Button size="md" color="green" variant="outlined" type="submit">
                Mettre à jour
              </Button>
              <Button
                size="md"
                color="dark"
                variant="outlined"
                onClick={closeEditModal}
              >
                Annuler
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {/* Modal pour voir les détails */}
      {selectedGroupe && (
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal} width="1/3">
          <div className="mt-4">
            <h1 className="text-center my-5 font-bold text-2xl">
              Détails du groupe
            </h1>
            <div className="flex flex-col gap-3">
              <p>Groupe: {selectedGroupe.nom}</p>
              <p>Module: {selectedGroupe.module}</p>
              <p>Tuteur: {selectedGroupe.tuteur}</p>
            </div>

            <div className="flex justify-center mt-8 gap-8">
              <Button
                size="md"
                color="dark"
                variant="outlined"
                onClick={closeViewModal}
              >
                Fermer
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Groupes;
