function ReviewsCard(props) {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText p-5 rounded-lg hover:shadow-lg shadow-xl transition-all cursor-pointer">
      <div>
        <p className="text-lightText mb-8">{props.review}</p>
      </div>
      <div className="flex flex-row justify-center">
        <img className="rounded-full w-1/4" src={props.img} alt="img" />
      </div>
    </div>
  );
}

export default ReviewsCard;
