import "./input.scss";
const InputElement = ({ placeholder, type, ...props }: any) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      {...props}
      className="disabled:cursor-not-allowed"
    />
  );
};
export default InputElement;
