import Table from "../../components/ui/Table";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
// import Form from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const EtudiantTraqueur = () => {
  const [data, setData] = useState([
    {
      id: 1,
      nom: "Moussa Sarr",
      email: "moussasarr@gmail.com",
      sexe: "Homme",
      adresse: "Dakar",
      photo: "img1",
      promo: 7,
      cycle: "Licence",
      eno: "Dakar",
    },
    {
      id: 2,
      nom: "Awa Seck",
      email: "awaseck@gmail.com",
      sexe: "Femme",
      adresse: "Dakar",
      photo: "img2",
      promo: 7,
      cycle: "Licence",
      eno: "Sebikotane",
    },
    // Autres données...
  ]);

  const [selectedEtudiant, setSelectedEtudiant] = useState(null);

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [adresse, setAdresse] = useState("");
  const [promo, setPromo] = useState("");
  const [cycle, setCycle] = useState("");
  const [eno, setEno] = useState("");

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Open/Close Modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // voir modification modal
  const openEditModal = (etudiant) => {
    setSelectedEtudiant(etudiant);
    setPrenom(etudiant.prenom);
    setNom(etudiant.nom);
    setEmail(etudiant.email);
    setPhoto(etudiant.photo);
    setAdresse(etudiant.adresse);
    setCycle(etudiant.cycle);
    setPromo(etudiant.promo);
    setEno(etudiant.eno);
    setIsEditModalOpen(true);
  };

  // fermeture edit modal
  const closeEditModal = () => setIsEditModalOpen(false);

  // voir detail modal
  const openViewModal = (etudiant) => {
    setSelectedEtudiant(etudiant);
    setIsViewModalOpen(true);
  };

  // fermeture detail modal
  const closeViewModal = () => setIsViewModalOpen(false);

  const handleEdit = (id) => {
    const etudiant = data.find((item) => item.id === id);
    openEditModal(etudiant);
  };

  const handleView = (id) => {
    const etudiant = data.find((item) => item.id === id);
    openViewModal(etudiant);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // handleAdd
  const handleAddNewItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const newItem = {
      prenom,
      nom,
      email,
      photo,
      adresse,
      promo,
      cycle,
      eno,
    };

    // Ajoute le nouvel étudiant et génère un ID unique
    setData([...data, { id: data.length + 1, ...newItem }]);

    // Réinitialise le formulaire après soumission
    setPrenom("");
    setNom("");
    setEmail("");
    setPhoto("");
    setAdresse("");
    setPromo("");
    setCycle("");
    setEno("");

    closeModal(); // Fermer la modal après soumission
  };

  // handleUpdateItem
  const handleUpdateItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const updatedData = data.map((item) =>
      item.id === selectedEtudiant.id
        ? { ...item, prenom, nom, email, adresse, promo, eno, cycle, photo }
        : item
    );

    setData(updatedData);
    closeEditModal(); // Ferme la modale après mise à jour
  };

  

  const columns = [
    { Header: "Photo", accessor: "photo" },
    { Header: "Nom", accessor: "nom" },
    { Header: "Email", accessor: "email" },
    { Header: "Adresse", accessor: "adresse" },
    { Header: "Promo", accessor: "promo" },
    { Header: "Cycle", accessor: "cycle" },
    { Header: "Eno", accessor: "eno" },
  ];

  return (
    <div className="">
      <p className="text-start font-bold">Liste des étudiant</p>

      {/* <p>Page tuteurs works !</p> */}
      <div className="">
        <div className=" flex justify-end mb-4 mt-8">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Ajouter un un étudiant
          </button>
        </div>

        <Table
          data={data}
          columns={columns}
          onUpdate={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          className="m-0"
          search="Chercher une étudiant"
        ></Table>
      </div>

      {/* Modal qui contient le formulaire */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form className="mt-4" onSubmit={handleAddNewItem}>
          <h1 className="text-center my-5 font-bold text-2xl">
            Ajouter un étudiant
          </h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Prénom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                fullWidth
              />
              <Input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                fullWidth
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
              <Input
                type="text"
                placeholder="Adresse"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                fullWidth
              />
            </div>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Promo"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                fullWidth
              />
              <Input
                type="text"
                placeholder="Cycle"
                value={cycle}
                onChange={(e) => setCycle(e.target.value)}
                fullWidth
              />
              <Input
                type="text"
                placeholder="Eno de rattachement"
                value={eno}
                onChange={(e) => setEno(e.target.value)}
                fullWidth
              />
              <Input
                type="file"
                placeholder="Photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                fullWidth
              />
            </div>
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
      {selectedEtudiant && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal} width="1/3">
          <form className="mt-4" onSubmit={handleUpdateItem}>
            <h1 className="text-center my-5 font-bold text-2xl">
              Modifier une affectation
            </h1>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Prénom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Promo"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Cycle"
                  value={cycle}
                  onChange={(e) => setCycle(e.target.value)}
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Eno de rattachement"
                  value={eno}
                  onChange={(e) => setEno(e.target.value)}
                  fullWidth
                />
                <Input
                  type="file"
                  placeholder="Photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  fullWidth
                />
              </div>
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
      {selectedEtudiant && (
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal} width="1/3">
          <div className="mt-4">
            <h1 className="text-center my-5 font-bold text-2xl">
              Détails affectation
            </h1>
            <div className="flex flex-col gap-3">
              {/* <p>Prenom: {selectedEtudiant.prenom}</p> */}
              <p>Nom: {selectedEtudiant.nom}</p>
              <p>Email: {selectedEtudiant.email}</p>
              <p>Promo: {selectedEtudiant.promo}</p>
              <p>Eno: {selectedEtudiant.eno}</p>
              <p>Cycle: {selectedEtudiant.cycle}</p>
              <p>Adresse: {selectedEtudiant.adresse}</p>
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

export default EtudiantTraqueur;

{/* <Button
              color="blue"
              size="md"
              // variant="contained"
              background="blue-500"
              fullWidth={false}
              //   onClick={handleLogin}
                      ><Button>
                              {/* <Button
              color="blue"
                          size="md"
              // variant="contained"
              background="blue-500"
              fullWidth={false}
            //   onClick={handleLogin}
            ></Button> */} 
