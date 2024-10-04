/* eslint-disable no-undef */
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import { useState } from "react";
import Table from "../../components/ui/Table";

const Seances_Admin = () => {
  
    const [data, setData] = useState([
      {
        id: 1,
        nom_seance: "Séance 1",
        groupe: "Groupe 1",
        module: "Tests unitaires",
        tuteur: "Malick Ndiaye",
        etat: "terminée",
        created_at: "24-04-24",
      },
      {
        id: 2,
        nom_seance: "Séance 2",
        groupe: "Groupe 3",
        module: "Fond. logiciel",
        tuteur: "Seynabou Seck",
        etat: "terminée",
        created_at: "24-04-24",
      },
    ]);

    const [selectedSeance, setSelectedSeance] = useState(null);

    // modal state
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    // Open/Close Modals
    // const openModal = () => setIsModalOpen(true);

    // voir detail modal
    const openViewModal = (seance) => {
      setSelectedSeance(seance);
      setIsViewModalOpen(true);
    };

    // fermeture detail modal
    const closeViewModal = () => setIsViewModalOpen(false);

    const handleView = (id) => {
      const seance = data.find((item) => item.id === id);
      openViewModal(seance);
    };

    const handleDelete = (id) => {
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
    };

    const columns = [
      { Header: "#", accessor: "id" },
      { Header: "Nom", accessor: "nom_seance" },
      { Header: "Tuteur", accessor: "tuteur" },
      { Header: "Module", accessor: "module" },
      { Header: "Groupe", accessor: "groupe" },
      { Header: "Etat", accessor: "etat" },
      { Header: "Fait le", accessor: "created_at" },
    ];
  return (
    <div className="">
      <p className="text-start font-bold">Liste des Séances</p>
      <div className="mt-10">
        <Table
          data={data}
          columns={columns}
          onDelete={handleDelete}
          onView={handleView}
          showActions={false}
          className="m-0"
          search="Chercher une séance"
        ></Table>
      </div>

      {selectedSeance && (
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

export default Seances_Admin;
