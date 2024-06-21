import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServicesCard from "./ServicesCard";

// DRY --> DO not Repeat Yourself

const Services = () => {
  // for toggle
  const [asc, setAsc] = useState();
  const services = useServices(asc);

  return (
    <div className="mt-4">
      <div className="text-center">
        <h2 className="text-orange-500 font-bold">Services</h2>
        <h3 className="text-4xl font-bold">Our Services Area</h3>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomize <br />
          words which don't look even slightly believable.
        </p>
        <button className="btn btn-primary mt-4" onClick={() => setAsc(!asc)}>
          {asc ? "Price: High To Low" : "Price: Low To High "}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
