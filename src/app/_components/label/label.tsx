import "./label.scss";
const Label = ({ htmlFor, labelText }: any) => {
  return <label htmlFor={htmlFor}>{labelText}</label>;
};
export default Label;
