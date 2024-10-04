import { useHistory  } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const alertMessage = (icon, titre, timer) => {
    Swal.fire({
      position: "top-end",
      icon: icon,
      title: titre,
      showConfirmButton: false,
      timer: timer,
      progressBar: true,
    });
  };

  // Fonction pour gérer la connexion
  const handleLogin = async (e) => {
    // async;
    e.preventDefault();
    setIsLoading(true);

   const loginData = { email, password };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        // Remplacer par ton URL d'API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log("data", data)

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la connexion");
      }

      // Enregistrement du token JWT et rôle dans le localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("userRole", data.role);

      alertMessage("success", "Connexion réussie avec succès", 2000);

      // Redirection selon le rôle
      switch (data.role) {
        case "admin":
          history.push("/dashboard/admin/AdminDash");
          break;
        case "tracker":
          history.push("/dashboard/traqueur/traqueurDash");
          break;
        case "tuteur":
          history.push("/dashboard/tuteur/tuteurDash");
          break;
        default:
          history.push("/login");
      }
    } catch (error) {
      alertMessage("error", error.message, 2000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login flex min-h-full flex-col justify-center">
      <div className="loginCard shadow border w-1/3 mx-auto py-10 px-8">
        <div className="">
          <h2 className="text-center mb-5 text-2xl font-bold leading-9 tracking-tight text-color">
            Connectez-vous
          </h2>
        </div>

        <div className="">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-color"
              >
                Votre adresse email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="monnom@gmail.com"
                  className="block px-3 w-full text-color rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-color"
              >
                Votre mot de passe
              </label>
              <div className="mt-2 mb-3">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="mot de passe"
                  className="block px-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
                />
                <span className="mt-2">
                  <Link to="/forgotPassword">Mot de passe oublié ?</Link>
                </span>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md btnLogin py-2 px-4 text-sm font-semibold text-white shadow-sm focus:ring-2 focus:ring-inset"
                disabled={isLoading}
              >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// gfghjghfgh
// jdhhgh

export default Login;
