/* eslint-disable react/prop-types */

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appelle la fonction onSubmit avec les données du formulaire
    // onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="">

    </form>
  );
};

export default Form;
