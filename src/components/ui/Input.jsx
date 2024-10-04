/* eslint-disable react/prop-types */
const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  size = "medium",
  required= true,
  disabled = false,
  fullWidth = false,
}) => {
  const baseClass = `border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`;
  const sizeClass = size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base';
  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      className={`${baseClass} ${sizeClass} ${widthClass}`}
    />
  );
};
 
export default Input;

/**
 * Un champ d'entrée réutilisable (input) peut également avoir plusieurs propriétés personnalisables.

Propriétés (props) possibles pour le composant Input :

type : Le type d'input (text, password, email, etc.).
placeholder : Le texte indicatif dans l'input.
value : La valeur de l'input.
onChange : Fonction à appeler lors de la modification de l'input.
size : Taille de l'input (small, medium, large).
borderColor : Couleur de la bordure.
disabled : Désactive l'input (boolean).
fullWidth : Si l'input doit occuper toute la largeur (boolean).

*/

/**
 * Le composant gère différents types d'input (text, password, etc.).
La bordure peut être personnalisée via la prop borderColor, et l'input peut être désactivé avec disabled.
La largeur complète est prise en charge via fullWidth.

*/