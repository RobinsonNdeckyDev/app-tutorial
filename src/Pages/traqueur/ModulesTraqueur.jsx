/* eslint-disable no-undef */
import Modal from "../../components/ui/Modal";
// import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState } from "react";
import Table from "../../components/ui/Table";

const ModulesTraqueur = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nom_module: "Module 1",
      semainesAttribuees: 4,
      created_at: "24-04-24",
    },
    {
      id: 2,
      nom_module: "Module 2",
      created_at: "24-04-24",
      semainesAttribuees: 8,
    },
    // Autres données...
  ]);

  // Module sélectionné
  const [selectedModule, setSelectedModule] = useState(null);

  const [nom_module, setnom_module] = useState("");
  const [semainesAttribuees, setsemainesAttribuees] = useState("");

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Open/Close Modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // voir modification modal
  const openEditModal = (module) => {
    setSelectedModule(module);
    setnom_module(module.nom_module);
    setsemainesAttribuees(module.semainesAttribuees);
    setIsEditModalOpen(true);
  };

  // fermeture edit modal
  const closeEditModal = () => setIsEditModalOpen(false);

  // voir detail modal
  const openViewModal = (module) => {
    setSelectedModule(module);
    setIsViewModalOpen(true);
  };

  // fermeture detail modal
  const closeViewModal = () => setIsViewModalOpen(false);

  const handleEdit = (id) => {
    const module = data.find((item) => item.id === id);
    openEditModal(module);
  };

  const handleView = (id) => {
    const module = data.find((item) => item.id === id);
    openViewModal(module);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // date
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = String(today.getFullYear()).slice(-2);

  const formattedDate = `${day}-${month}-${year}`;

  // handleAdd
  const handleAddNewItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const newItem = {
      nom_module,
      semainesAttribuees,
      created_at: formattedDate,
    };

    console.log("nouveau module", newItem);

    // Ajoute le nouvel étudiant et génère un ID unique
    setData([...data, { id: data.length + 1, ...newItem }]);

    // Réinitialise le formulaire après soumission
    setnom_module("");
    setsemainesAttribuees();

    closeModal(); // Fermer la modal après soumission
  };

  // handleUpdateItem
  const handleUpdateItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const updatedData = data.map((item) =>
      item.id === selectedModule.id
        ? { ...item, tuteur, module, groupe }
        : item
    );

    setData(updatedData);
    closeEditModal(); // Ferme la modale après mise à jour
  };

  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Module", accessor: "nom_module" },
    { Header: "Nbre_semaines", accessor: "semainesAttribuees" },
    { Header: "Crée le", accessor: "created_at" },
  ];

  return (
    <div className="">
      <p className="text-start font-bold">Liste des modules</p>

      {/* <p>Page tuteurs works !</p> */}
      <div className="">
        <div className=" flex justify-end mb-4 mt-8">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Créer un module
          </button>
        </div>

        <Table
          data={data}
          columns={columns}
          onUpdate={handleEdit}
          onDelete={handleDelete}
          onView = {handleView}
          className="m-0"
          search="Chercher un module"
        ></Table>
      </div>

      {/* Modal qui contient le formulaire */}
      <Modal isOpen={isModalOpen} onClose={closeModal} width="1/3">
        <form className="mt-4" onSubmit={handleAddNewItem}>
          <h1 className="text-center my-5 font-bold text-2xl">
            Créer un module
          </h1>
          <div className="flex flex-col gap-3">
            <Input
              type="text"
              placeholder="Nom module"
              value={nom_module}
              onChange={(e) => setnom_module(e.target.value)}
              fullWidth
            />
            <Input
              type="number"
              placeholder="Nbre de semaine attribuées"
              value={semainesAttribuees}
              onChange={(e) => setsemainesAttribuees(e.target.value)}
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
      {selectedModule && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal} width="1/3">
          <form className="mt-4" onSubmit={handleUpdateItem}>
            <h1 className="text-center my-5 font-bold text-2xl">
              Modifier une affectation
            </h1>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Nom module"
                value={nom_module}
                onChange={(e) => setnom_module(e.target.value)}
                fullWidth
              />
              <Input
                type="number"
                placeholder="Nbre de semaine attribuées"
                value={semainesAttribuees}
                onChange={(e) => setsemainesAttribuees(e.target.value)}
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
      {selectedModule && (
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal} width="1/3">
          <div className="mt-4">
            <h1 className="text-center my-5 font-bold text-2xl">
              Détails affectation
            </h1>
            <div className="flex flex-col gap-3">
              <p>Nom: {selectedModule.nom_module}</p>
              <p>Semaines attribuées: {selectedModule.semainesAttribuees}</p>
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

export default ModulesTraqueur;
