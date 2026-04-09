const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white border-2 border-lightText md:px-32 p-5 items-center">
      <span className="font-semibold text-2xl cursor-pointer">eStudy</span>
      <p>
        All Rights Reserved To{" "}
        <span className="text-brightGreen font-bold">eStudy</span>
      </p>
    </div>
  );
};

export default Footer;
