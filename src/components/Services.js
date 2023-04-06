import React from "react";
import Title from "./Title";
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <Service
              key={service.id}
              icon={service.icon}
              title={service.title}
              text={service.text}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
