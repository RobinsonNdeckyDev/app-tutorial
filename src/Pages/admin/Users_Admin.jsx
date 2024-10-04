import { useState } from "react";
import Table from "../../components/ui/Table";
import Modal from "../../components/ui/Modal";
import Select from "../../components/ui/select";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Users = () => {
  // User selectionné
  const [selectedUser, setSelectedUser] = useState(null);

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  const [role, setRole] = useState("");
  const [sexe, setSexe] = useState("");
  const [password, setPassword] = useState("");

  // Donnée utilisateurs
  const [data, setData] = useState([
    {
      id: 1,
      nom: "Ndiaye",
      prenom: "Moussa",
      email: "moussa@gmail.com",
      adresse: "Bargny",
      telephone: "765674898",
      role: "Admin",
      sexe: "Homme",
      created_at: "04-10-24",
    },
    {
      id: 2,
      nom: "Seck",
      prenom: "Seynabou",
      email: "seynabou@gmail.com",
      adresse: "Bargny",
      telephone: "765674898",
      role: "Tuteur",
      sexe: "Femme",
      created_at: "04-10-24",
    },
    {
      id: 3,
      nom: "Sarr",
      prenom: "Sokhna",
      email: "sokhna@gmail.com",
      adresse: "Dakar",
      telephone: "765674898",
      role: "Tracker",
      sexe: "Femme",
      created_at: "04-10-24",
    },
    {
      id: 4,
      nom: "Diop",
      prenom: "Der",
      email: "der@gmail.com",
      adresse: "Bargny",
      telephone: "765674898",
      role: "Etudiant",
      sexe: "Homme",
      created_at: "04-10-24",
    },
  ]);

  // Gestion des modals
  // modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Open/Close Modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // voir modification modal
  const openEditModal = (user) => {
    setSelectedUser(user);
    setNom(user.nom);
    setPrenom(user.prenom);
    setEmail(user.email);
    setPassword(user.password);
    setRole(user.role);
    setAdresse(user.adresse);
    setTelephone(user.telephone);
    setIsEditModalOpen(true);
  };

  // fermeture edit modal
  const closeEditModal = () => setIsEditModalOpen(false);

  // voir detail modal
  const openViewModal = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  // fermeture detail modal
  const closeViewModal = () => setIsViewModalOpen(false);

  const handleEdit = (id) => {
    const user = data.find((item) => item.id === id);
    openEditModal(user);
  };

  const handleView = (id) => {
    const user = data.find((item) => item.id === id);
    openViewModal(user);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // Ajouter un utilisateur
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
      prenom,
      email,
      adresse,
      telephone,
      role,
      sexe,
      password,
      created_at: formattedDate,
    };

    // Ajoute le nouvel étudiant et génère un ID unique
    setData([...data, { id: data.length + 1, ...newItem }]);

    // Réinitialise le formulaire après soumission
    setNom("");
    setPrenom("");
    setAdresse("");
    setEmail("");
    setSexe("");
    setRole("");
    setPassword("");
    setTelephone("");

    closeModal(); // Fermer la modal après soumission
  };

  // handleUpdateItem
  const handleUpdateItem = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    const updatedData = data.map((item) =>
      item.id === selectedUser.id ? { ...item, nom, prenom, adresse, email, password, sexe, telephone, role } : item
    );

    setData(updatedData);
    closeEditModal(); // Ferme la modale après mise à jour
  };

  //
  const columns = [
    { Header: "#", accessor: "id" },
    { Header: "Nom", accessor: "nom" },
    { Header: "Prenom", accessor: "prenom" },
    { Header: "Email", accessor: "email" },
    { Header: "Adresse", accessor: "adresse" },
    { Header: "telephone", accessor: "telephone" },
    { Header: "Role", accessor: "role" },
    { Header: "Genre", accessor: "sexe" },
    { Header: "Crée le", accessor: "created_at" },
  ];

  const dataGenre = [
    { value: "Homme", label: "Homme" },
    { value: "Femme", label: "Femme" },
  ];

  const dataRoles = [
    { value: "Admin", label: "Admin" },
    { value: "Tracker", label: "Tracker" },
    { value: "Tuteur", label: "Tuteur" },
  ];
  return (
    <div>
      <p className="py-4 font-bold">Liste des utilisateurs</p>

      {/* Créer un utilisateur */}
      <div className=" flex justify-end mb-4 mt-8">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Créer un utilisateur
        </button>
      </div>

      <Table
        data={data}
        columns={columns}
        onUpdate={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        className="m-0"
        search="Chercher un utilisateur"
      ></Table>

      {/* Modal qui contient le formulaire d'ajout de user*/}
      <Modal isOpen={isModalOpen} onClose={closeModal} className="w-1/3">
        <form className="mt-4" onSubmit={handleAddNewItem}>
          <h1 className="text-center my-5 font-bold text-2xl">
            Ajouter un utilisateur
          </h1>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                fullWidth
              />
              <Input
                type="text"
                placeholder="Prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
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
                placeholder="Telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                fullWidth
              />
              <Select
                options={dataRoles}
                placeholder="Sélectionnez un role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
              />
              <Select
                options={dataGenre}
                placeholder="Sélectionnez un genre"
                value={sexe}
                onChange={(e) => setSexe(e.target.value)}
                fullWidth
              />
              <Input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

      {/* Modal pour modifier un utilisateur */}
      {selectedUser && (
        <Modal isOpen={isEditModalOpen} onClose={closeEditModal} width="1/3">
          <form className="mt-4" onSubmit={handleUpdateItem}>
            <h1 className="text-center my-5 font-bold text-2xl">
              Modifier infos utilisateur
            </h1>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  fullWidth
                />
                <Input
                  type="text"
                  placeholder="Prenom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
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
                  placeholder="Telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  fullWidth
                />
                <Select
                  options={dataRoles}
                  placeholder="Sélectionnez un role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  fullWidth
                />
                <Select
                  options={dataGenre}
                  placeholder="Sélectionnez genre"
                  value={sexe}
                  onChange={(e) => setSexe(e.target.value)}
                  fullWidth
                />
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

      {/* Modal pour voir les details d'un utilisateur */}
      {selectedUser && (
        <Modal isOpen={isViewModalOpen} onClose={closeViewModal} width="1/3">
          <div className="mt-4">
            <h1 className="text-center my-5 font-bold text-2xl">
              Détails utilisateur
            </h1>
            <div className="flex flex-col gap-3">
              <p>Prénom: {selectedUser.nom}</p>
              <p>Nom: {selectedUser.prenom}</p>
              <p>Email: {selectedUser.email}</p>
              <p>Mot de passe: {selectedUser.password}</p>
              <p>Adresse: {selectedUser.adresse}</p>
              <p>Role: {selectedUser.role}</p>
              <p>Sexe: {selectedUser.sexe}</p>
              <p>Telephone: {selectedUser.telephone}</p>
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

export default Users;
