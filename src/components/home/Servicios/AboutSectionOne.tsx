"use client";

import { motion } from "framer-motion";
import {
  RiFlashlightLine,
  RiSunLine,
  RiLightbulbLine,
  RiSettings3Line,
  RiShieldCheckLine,
  RiBarChartLine,
  RiMoneyDollarCircleLine,
  RiGlobalLine,
} from "react-icons/ri";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ElectricServices = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-wider text-white  bg-blue-600 inline-block px-4 py-2 mb-4 rounded-full shadow-md"
          >
            SOLUCIONES ENERGÉTICAS INTEGRALES
          </motion.div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
            Ofrecemos servicios eléctricos completos con los más altos
            estándares de calidad y seguridad. Desde instalaciones residenciales
            hasta proyectos industriales, garantizamos soluciones energéticas
            eficientes y sostenibles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Service 1 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-6">
              <RiFlashlightLine className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Instalaciones Eléctricas
            </h3>
            <p className="text-gray-600">
              Diseño e implementación de sistemas eléctricos seguros y
              eficientes para viviendas y edificios.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-yellow-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-xl mb-6">
              <RiSunLine className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Instalaciones Eléctricas Industriales
            </h3>
            <p className="text-gray-600">
              Diseño, instalación y mantenimiento de sistemas eléctricos
              industriales para garantizar un suministro seguro y eficiente.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-green-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-xl mb-6">
              <RiLightbulbLine className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Iluminación Eficiente
            </h3>
            <p className="text-gray-600">
              Soluciones de iluminación LED y sistemas inteligentes para reducir
              el consumo energético.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-purple-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl mb-6">
              <RiSettings3Line className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mantenimiento Industrial
            </h3>
            <p className="text-gray-600">
              Mantenimiento preventivo y correctivo de instalaciones eléctricas
              industriales.
            </p>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-xl mb-6">
              <RiShieldCheckLine className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Seguridad Eléctrica
            </h3>
            <p className="text-gray-600">
              Auditorías y certificaciones eléctricas para garantizar la
              seguridad de tus instalaciones.
            </p>
          </motion.div>

          {/* Service 6 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl mb-6">
              <RiBarChartLine className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Eficiencia Energética
            </h3>
            <p className="text-gray-600">
              Estudios y soluciones para optimizar el consumo eléctrico y
              reducir costos energéticos.
            </p>
          </motion.div>

          {/* Service 7 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-green-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-xl mb-6">
              <RiMoneyDollarCircleLine className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Asesoría en Tarifas
            </h3>
            <p className="text-gray-600">
              Optimización de contratos eléctricos y análisis de tarifas para
              reducir tus facturas.
            </p>
          </motion.div>

          {/* Service 8 */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-l-xl"></div>
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-xl mb-6">
              <RiGlobalLine className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Domótica y Automatización
            </h3>
            <p className="text-gray-600">
              Sistemas inteligentes para el control automatizado de la energía
              en hogares y empresas.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElectricServices;
