import React from "react";
import Layout from "../../components/Layout";
import Address from "./Adress";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="grid grid-cols-2 px-32 gap-20 mt-32 sm:grid-cols-1 sm:p-5">
      <Address />
      <ContactForm />
    </div>
  );
}
export default Contact;
