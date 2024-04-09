import "./Form.scss";

const Form = ({ children, className, onSubmit }) => {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
