export const Input = ({ title, type, name, placeholder }) => {
  return (
    <label className="forms">
      <span className="forms__title">{title}</span>
      <input
        className="forms__input"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};
