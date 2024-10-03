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

    const [nom_module, setnom_module] = useState("");
    const [semainesAttribuees, setsemainesAttribuees] = useState("");
    

    // modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleEdit = (data) => {
      console.log("edit", data);
    };


    // date
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0"); 
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = String(today.getFullYear()).slice(-2); 

    const formattedDate = `${day}-${month}-${year}`;

    // const handleView = (data) => {
    //   console.log("view", data);
    // };

    const handleDelete = (data) => {
      console.log("delete", data);
    };

    // handleAdd
    const handleAddNewItem = (e) => {
      e.preventDefault(); // Empêche le rechargement de la page

      const newItem = {
        nom_module,
        semainesAttribuees,
        created_at: formattedDate,
      };
        
        console.log("nouveau module", newItem)

      // Ajoute le nouvel étudiant et génère un ID unique
      setData([...data, { id: data.length + 1, ...newItem }]);

      // Réinitialise le formulaire après soumission
      setnom_module("");
        setsemainesAttribuees();
        
      closeModal(); // Fermer la modal après soumission
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
    </div>
  );
};

export default ModulesTraqueur;
