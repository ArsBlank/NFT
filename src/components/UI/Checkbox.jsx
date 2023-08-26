export const Checkbox = ({ label }) => {
  return (
    <label className="chk">
      <input type="checkbox" />
      {label && <span>{label}</span>}
    </label>
  );
};
