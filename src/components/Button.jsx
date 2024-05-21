const Button = ({
  text = "Click me",
  onClick = () => alert("No parameter function"),
}) => {
  return (
    // <button onClick={() => alert(`${text} button was clicked`)}>{text}</button>
    <button onClick={onClick}>{text}</button>
  );
};

export default Button;
