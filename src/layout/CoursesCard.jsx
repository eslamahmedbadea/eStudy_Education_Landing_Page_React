const CoursesCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:shadow-lg transition-all">
      <div className="w-3/5">
        <img src={props.img} alt="img" />
      </div>
      <div>
        <h3 className="font-bold text-xl text-center my-5">{props.title}</h3>
        <p className="text-lightText text-center md:text-start">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CoursesCard;
