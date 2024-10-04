/* eslint-disable react/prop-types */

const Modal = ({ isOpen, onClose, children, width }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 border flex justify-center items-center">
      <div className={`bg-white py-8 px-6 rounded w-${width} shadow-lg relative`}>
        <button
          onClick={onClose}
          className="text-white border h-8 w-8 rounded-full bg-sky-600 absolute top-6 right-6"
        >
          X
        </button>
        <div>{children}</div>
        {/* On peut passer n'importe quel composant comme contenu */}
      </div>
    </div>
  );
};

export default Modal;
