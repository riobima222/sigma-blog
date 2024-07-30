const Input = (props) => {
  const { type, className, placeholder, name } = props;
  const style = `focus:outline-none py-1 px-2 border-b-[1.9px] border-[#eb3d4b] mb-5`;
  return (
    <input
      className={`${className} ${style}`}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};
export default Input;
