import { ClearIcon } from "../../icons/ClearIcon";
import { EyeIcon } from "../../icons/EyeIcon";
import "./_input.scss";
export const Input = ({ title, type, name, placeholder }) => {
  return (
    <label className="forms">
      <span className="forms__title">{title}</span>
      <div className="forms__input-wrapper">
        <input
          className="forms__input"
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <div className="forms__input-svg">
          {type === "password" && <ClearIcon />}
          {type === "password" && <EyeIcon />}
        </div>
      </div>
    </label>
  );
};
