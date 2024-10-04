import Table from "../../components/ui/Table";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Tuteurstraqueur = () => {
  const [data, setData] = useState([
    {
      id: 1,
      prenom: "John",
      nom: "Doe",
      email: "john@example.com",
      age: 28,
      sexe: "homme",
      adresse: "Dakar",
      photo: "img1",
      telephone: "765678756",
    },
    {
      id: 2,
      prenom: "Jane",
      nom: "Smith",
      email: "jane@example.com",
      age: 34,
      sexe: "femme",
      adresse: "Dakar",
      photo: "img2",
      telephone: "755648756",
    },
  ]);

  const [selectedTuteur, setSelectedTuteur] = useState(null);

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [sexe, setSexe] = useState("");
  const [adresse, setAdresse] = useState("");
  const [age, setAge] = useState();

  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Open/Close Modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // voir modification modal
  const openEditModal = (Tuteur) => {
    setSelectedTuteur(Tuteur);
    setPrenom(Tuteur.prenom);
    setNom(Tuteur.nom);
    setEmail(Tuteur.email);
    setPhoto(Tuteur.photo);
    setAdresse(Tuteur.adresse);
    setSexe(Tuteur.sexe);
    setAge(Tuteur.age);
    setTelephone(Tuteur.telephone);
    setIsEditModalOpen(true);
  };

  // fermeture edit modal
  const closeEditModal = () => setIsEditModalOpen(false);

  // voir detail modal
  const openViewModal = (Tuteur) => {
    setSelectedTuteur(Tuteur);
    setIsViewModalOpen(true);
  };

  // fermeture detail modal
  const closeViewModal = () => setIsViewModalOpen(false);

  const handleEdit = (id) => {
    const Tuteur = data.find((item) => item.id === id);
    openEditModal(Tuteur);
  };

  const handleView = (id) => {
    const Tuteur = data.find((item) => item.id === id);
    openViewModal(Tuteur);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // handleAdd
  const handleAddTutor = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // date
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = String(today.getFullYear()).slice(-2);

    const formattedDate = `${day}-${month}-${year}`;

    const newItem = {
      prenom,
      nom,
      photo,
      email,
      password,
      telephone,
      adresse,
      sexe,
      age,
      created_at: formattedDate,
    };

    console.log("nouveau tuteur", newItem);

    // Ajoute le nouvel étudiant et génère un ID unique
    setData([...data, { id: data.length + 1, ...newItem }]);

    // Réinitialise le formulaire après soumission
    setPrenom("");
    setNom("");
    setPhoto("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setAdresse("");
    setSexe("");
    setAge("");

    closeModal(); // Fermer la modal après soumission
  };

  // handleUpdateItem
  const handleUpdateItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const updatedData = data.map((item) =>
      item.id === selectedTuteur.id
        ? { ...item, prenom, nom, email, adresse, age, sexe, telephone, photo }
        : item
    );

    setData(updatedData);
    closeEditModal(); // Ferme la modale après mise à jour
  };

  const columns = [
    { Header: "Photo", accessor: "photo" },
    { Header: "Prenom", accessor: "prenom" },
    { Header: "Nom", accessor: "nom" },
    { Header: "Email", accessor: "email" },
    { Header: "Adresse", accessor: "adresse" },
    { Header: "Age", accessor: "age" },
    { Header: "Genre", accessor: "sexe" },
    { Header: "Telephone", accessor: "telephone" },
  ];

  return (
    <div className="tuteurs">
      <p className="text-start font-bold">Liste des tuteurs</p>

      <div className="">
        <div className=" flex justify-end mb-4 mt-8">
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Ajouter un tuteur
          </button>
        </div>

        <Table
          data={data}
          columns={columns}
          onUpdate={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
          className="m-0"
          search="Chercher un tuteur"
        ></Table>
      </div>

      {/* Modal qui contient le formulaire */}
      <Modal isOpen={isModalOpen} onClose={closeModal} className="w-52">
        <form className="mt-4" onSubmit={handleAddTutor}>
          <h1 className="text-center my-5 font-bold text-2xl">
            Ajouter un tuteur
          </h1>
          <div className="grid grid-cols-2 gap-4">
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
                placeholder="Nom tuteur"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                fullWidth
              />
              <Input
                type="text"
                placeholder="Genre"
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
                fullWidth
              />
              <Input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
              />
            </div>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
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
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
      {selectedTuteur && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal} width="2/3">
          <form className="mt-4" onSubmit={handleUpdateItem}>
            <h1 className="text-center my-5 font-bold text-2xl">
              Modification du tuteur
            </h1>
            <div className="grid grid-cols-2 gap-4">
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
                  placeholder="Nom tuteur"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Genre"
                  value={sexe}
                  onChange={(e) => setSexe(e.target.value)}
                  fullWidth
                />
                <Input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="flex flex-col gap-3">
                <Input
                  type="email"
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
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
                {/* <Input
                  type="file"
                  placeholder="Photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  fullWidth
                /> */}
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
      {selectedTuteur && (
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal} width="1/3">
          <div className="mt-4">
            <h1 className="text-center my-5 font-bold text-2xl">
              Détails tuteur 
            </h1>
            <div className="flex flex-col gap-3">
              {/* <p>Prenom: {selectedEtudiant.prenom}</p> */}
              <p>Photo: {selectedTuteur.photo}</p>
              <p>Prenom: {selectedTuteur.prenom}</p>
              <p>Nom: {selectedTuteur.nom}</p>
              <p>Email: {selectedTuteur.email}</p>
              <p>Adresse: {selectedTuteur.adresse}</p>
              <p>Sexe: {selectedTuteur.sexe}</p>
              <p>Age: {selectedTuteur.age}</p>
              <p>Telephone: {selectedTuteur.telephone}</p>
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

export default Tuteurstraqueur;
