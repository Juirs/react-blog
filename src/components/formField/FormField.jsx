import "./FormField.css";
import {forwardRef} from "react";

// eslint-disable-next-line react/display-name
const FormField = forwardRef(({ label, name, error, type = "text", ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        ref={ref}
        {...rest}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
});

export default FormField;