/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    photo: "",
    email: "",
    password: "",
    telephone: "",
    adresse: "",
    sexe: "",
    age: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appelle la fonction onSubmit avec les données du formulaire
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h2 className="text-center mb-10 font-bold text-2xl">
        Ajouter un tuteur
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <div className="mb-4">
            <label className="block text-gray-700">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Sexe</label>
            <select
              name="sexe"
              value={formData.sexe}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
        </div>
        <div className="">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Adresse</label>
            <input
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Photo</label>
            <input
              type="file"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="border p-1.5 w-full"
            />
          </div>
        </div>
      </div>

      {/* Exemple d'un champ select */}
      {/* <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}

      <div className="flex justify-center mt- gap-8">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Envoyer
        </button>
        <button
          type="button"
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded"
        >
          Annuler
        </button>
      </div>
    </form>
  );
};

export default Form;
