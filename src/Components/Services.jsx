import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <div className=" mt-24 md:mt-0 md:p-24 font-extrabold text-4xl">
      <h1>Our Services</h1>

      <div className="mt-12 font-thin text-base grid grid-cols-auto gap-9">
        <ServicesCard image={"./webd.jpeg"} title={"Develop Websites"} />
        <ServicesCard image={"./cloud.jpeg"} title={"Cloud Compting"} />
        <ServicesCard image={"./ui.png"} title={"UI/UX Design"} />
      </div>
    </div>
  );
}

export default Services;
