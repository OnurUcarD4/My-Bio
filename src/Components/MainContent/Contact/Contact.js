import React from "react";
import ContactCard from "./ContactComponents/ContactCard";
import ContactForm from "./ContactComponents/ContactForm";
import ContactTitle from "./ContactComponents/ContactTitle";

const Contact = () => {
  return (
    <div>
      <ContactTitle />
      <div className="sm:grid-cols-2  lg:grid lg:grid-cols-3 mt-8 gap-4 sm:flex sm:flex-col sm:gap-8">
        <div className="col-span-1">
          <ContactCard />
        </div>
        <div className="col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
