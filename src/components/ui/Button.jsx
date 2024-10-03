/* eslint-disable react/prop-types */
const Button = ({
  size = "sm" | "md" | "lg",
  color = "blue", // Couleur par défaut
  variant = "contained",
  disabled = false,
  onClick,
  children,
  fullWidth = false,
  background = "blue", // Définir une valeur par défaut si nécessaire
}) => {
  const baseClass = `py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75`;

  // Gestion des tailles
  const sizeClass =
    size === "sm"
      ? "text-sm"
      : size === "md"
      ? "text-md"
      : size === "lg"
      ? "text-lg"
      : "text-base";

  // Gestion du fond
  const backgroundClass =
    background === "transparent"
      ? "bg-transparent"
      : background === "dark"
      ? "bg-gray-800"
      : `bg-${background}`;

  // Gestion explicite des couleurs pour Tailwind CSS
  const colorClass =
    color === "blue"
      ? "text-blue-500 border-blue-500"
      : color === "red"
      ? "text-red-500 border-red-500"
      : color === "green"
      ? "text-green-500 border-green-500"
      : color === "dark"
      ? "text-gray-800 border-gray-800"
      : `text-${color}-500 border-${color}-500`;

  // Gestion des variantes (contained, outlined)
  const variantClass =
    variant === "contained"
      ? "text-white" // Texte blanc pour "contained"
      : variant === "outlined"
      ? `border-2 ${colorClass} bg-transparent`
      : "text-black"; // Par défaut, texte noir pour d'autres variantes

  // Combiner toutes les classes
  const classes = [
    baseClass,
    sizeClass,
    backgroundClass,
    variantClass,
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : "",
  ].join(" ");

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
