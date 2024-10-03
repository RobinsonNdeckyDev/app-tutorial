/* eslint-disable no-undef */
import Modal from "../../components/ui/Modal";
// import Form from "../../components/ui/Form";
import Button from "../../components/ui/Button";
import { useState } from "react";
import Table from "../../components/ui/Table";
import Select from "../../components/ui/select";

const AffectationTraqueur = () => {
  const [data, setData] = useState([
    {
      id: 1,
      tuteur: "Moussa Fall",
      module: "Tests unitaires",
      groupe: "Groupe 4",
      created_at: "24-04-24",
    },
    {
      id: 2,
      tuteur: "Marieme Kane",
      module: "IA générative",
      groupe: "Groupe 5",
      created_at: "24-04-24",
    },
  ]);

  const [selectedAffectation, setSelectedAffectation] = useState(null);

  const [tuteur, setTuteur] = useState("");
  const [module, setModule] = useState("");
  const [groupe, setGroupe] = useState("");

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Open/Close Modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // voir modification modal
  const openEditModal = (affectation) => {
    setSelectedAffectation(affectation);
    setTuteur(affectation.tuteur);
    setModule(affectation.module);
    setGroupe(affectation.groupe);
    setIsEditModalOpen(true);
  };

  // fermeture edit modal
  const closeEditModal = () => setIsEditModalOpen(false);

  // voir detail modal
  const openViewModal = (affectation) => {
    setSelectedAffectation(affectation);
    setIsViewModalOpen(true);
  };

  // fermeture detail modal
  const closeViewModal = () => setIsViewModalOpen(false);

  

  const handleEdit = (id) => {
    const affectation = data.find((item) => item.id === id);
    openEditModal(affectation);
  };

  const handleView = (id) => {
    const affectation = data.find((item) => item.id === id);
    openViewModal(affectation);
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
      tuteur,
      module,
      groupe,
      created_at: formattedDate,
    };

    // Ajoute le nouvel étudiant et génère un ID unique
    setData([...data, { id: data.length + 1, ...newItem }]);

    // Réinitialise le formulaire après soumission
    setTuteur("");
    setGroupe("");
    setModule("");

    closeModal(); // Fermer la modal après soumission
  };

  // handleUpdateItem
  const handleUpdateItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const updatedData = data.map((item) =>
      item.id === selectedAffectation.id
        ? { ...item, tuteur, module, groupe }
        : item
    );

    setData(updatedData);
    closeEditModal(); // Ferme la modale après mise à jour
  };

  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Tuteur", accessor: "tuteur" },
    { Header: "Module", accessor: "module" },
    { Header: "Groupe", accessor: "groupe" },
    { Header: "Fait le", accessor: "created_at" },
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

  const dataGroupes = [
    { value: "Groupe 1", label: "Groupe 1" },
    { value: "Groupe 2", label: "Groupe 2" },
    { value: "Groupe 3", label: "Groupe 3" },
  ];

  return (
    <div className="">
      <p className="text-start font-bold">Liste des affectations</p>

      {/* <p>Page tuteurs works !</p> */}
      <div className="">
        <div className=" flex justify-end mb-4 mt-8">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Créer une affectation
          </button>
        </div>

        <Table
          data={data}
          columns={columns}
          onUpdate={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          className="m-0"
          search="Chercher une affectation"
        ></Table>
      </div>

      {/* Modal qui contient le formulaire d'ajout */}
      <Modal isOpen={isModalOpen} onClose={closeModal} width="1/3">
        <form className="mt-4" onSubmit={handleAddNewItem}>
          <h1 className="text-center my-5 font-bold text-2xl">
            Créer une affectation
          </h1>
          <div className="flex flex-col gap-3">
            <Select
              options={dataTuteurs}
              placeholder="Sélectionnez un tuteur"
              value={tuteur}
              onChange={(e) => setTuteur(e.target.value)}
              fullWidth
            />
            <Select
              options={datamodules}
              placeholder="Sélectionnez un module"
              value={module}
              onChange={(e) => setModule(e.target.value)}
              fullWidth
            />
            <Select
              options={dataGroupes}
              placeholder="Sélectionnez un groupe"
              value={groupe}
              onChange={(e) => setGroupe(e.target.value)}
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
      {selectedAffectation && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal} width="1/3">
          <form className="mt-4" onSubmit={handleUpdateItem}>
            <h1 className="text-center my-5 font-bold text-2xl">
              Modifier une affectation
            </h1>
            <div className="flex flex-col gap-3">
              <Select
                options={dataTuteurs}
                placeholder="Sélectionnez un tuteur"
                value={tuteur}
                onChange={(e) => setTuteur(e.target.value)}
                fullWidth
              />
              <Select
                options={datamodules}
                placeholder="Sélectionnez un module"
                value={module}
                onChange={(e) => setModule(e.target.value)}
                fullWidth
              />
              <Select
                options={dataGroupes}
                placeholder="Sélectionnez un groupe"
                value={groupe}
                onChange={(e) => setGroupe(e.target.value)}
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
      {selectedAffectation && (
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal} width="1/3">
          <div className="mt-4">
            <h1 className="text-center my-5 font-bold text-2xl">
              Détails affectation
            </h1>
            <div className="flex flex-col gap-3">
              <p>Tuteur: {selectedAffectation.tuteur}</p>
              <p>Module: {selectedAffectation.module}</p>
              <p>Groupe: {selectedAffectation.groupe}</p>
              <p>Date: {selectedAffectation.created_at}</p>
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

export default AffectationTraqueur;
