import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServicesCard from "./ServicesCard";

// DRY --> DO not Repeat Yourself

const Services = () => {
  // for toggle
  const [asc, setAsc] = useState();
  const [search, setSearch] = useState("");
  // const [min, setMin] = useState(undefined);
  // const [mxa, setMxa] = useState(undefined);
  const services = useServices(asc, search);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  };

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
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            id=""
            className="border rounded-sm text-center bg-green-300"
          />
          <input type="submit" value="Search" className="btn btn-ghost" />
        </form>
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
