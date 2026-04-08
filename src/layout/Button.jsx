const Button = (props) => {
  return (
    <button className="bg-brightGreen py-2 px-5 rounded-full mt-4 text-white hover:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-white hover:text-brightGreen border border-brightGreen transition-all cursor-pointer w-fit">
      {props.title}
    </button>
  );
};

export default Button;
