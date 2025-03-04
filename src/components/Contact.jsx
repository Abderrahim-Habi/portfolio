import React from "react";
import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          <a
            href={`tel:${CONTACT.phoneNo}`} // Ajoute l'URL tel: pour le numéro de téléphone
            target="_blank"
            className="border-b"
          >
            {CONTACT.phoneNo}
          </a>
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          target="_blank"
          className="border-b"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
