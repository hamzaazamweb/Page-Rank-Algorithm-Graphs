import "./Button.css";
const Button = ({ children, text, className, onClick }) => {
  return (
    <button className={`app-button ${className ? className : ""} `} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
