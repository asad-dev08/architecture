import React from "react";
import { useParams } from "react-router-dom";
import ResidentialInterior from "./ResidentialInterior";
import CommercialInterior from "./CommercialInterior";
import ArchitecturalConsultancy from "./ArchitecturalConsultancy";

const ServiceDetails = () => {
  const { type } = useParams();
  if (type === "residential-interior") {
    return <ResidentialInterior />;
  } else if (type === "commercial-interior") {
    return <CommercialInterior />;
  } else if (type === "architectural-consultancy") {
    return <ArchitecturalConsultancy />;
  }
  return <div>ServiceDetails</div>;
};

export default ServiceDetails;
