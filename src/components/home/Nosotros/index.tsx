"use client";

import data from "./Data";
import Card_Nosotros from "./CardCont";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.section
      id="nosotros"
      className="relative py-6 md:py-10 lg:py-20 text-black dark:text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Particles canvas */}

      <div className="container relative z-10 mx-auto px-4">
        <div className="relative">
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          ></motion.div>

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
