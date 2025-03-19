function ServicesCard({ image, title }) {
  //service card
  return (
    <div className="">
      <div className="shadow-2xl md:w-72 flex flex-col gap-4 p-2 rounded-lg  lg:items-center">
        <img
          src={image}
          className=" w-80  md:w-72 h-56 rounded-md"
          loading="lazy"
        />
        <div className="space-y-4 self-start">
          <h1>{title}</h1>
        </div>
        <div className="self-stretch">
          <button className="w-full items-stretch bg-black text-white px-2 py-1 rounded-lg mb-2">
            Use Service &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
