const Button = (props) => {
  const { children, type, className, onClick = () => {} } = props;
  const style = `bg-[#eb3d4b] py-2 text-white mt-2`;
  return (
    <button onClick={onClick} className={`${className} ${style}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
