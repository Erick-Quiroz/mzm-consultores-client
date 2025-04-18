"use client";

import data from "./Data";
import Card_Nosotros from "./CardCont";
import { motion } from "framer-motion";

const Features = () => {
  console.log("Renderizando el componente Features con datos:", data);
  return (
    <motion.section
      id="nosotros"
      className="relative py-6 md:py-10 lg:py-20 text-foreground overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card_Nosotros data={data} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
