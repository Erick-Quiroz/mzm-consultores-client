"use client";
import styles from "@/styles/scroll.module.css";
import type React from "react";
import {
  Zap,
  Lightbulb,
  PenToolIcon as Tool,
  Shield,
  Home,
  Building,
  Activity,
  Battery,
  CheckSquare,
  Power,
} from "lucide-react";
import { motion } from "framer-motion";

const electricityServices = [
  { name: "Installations", icon: Zap },
  { name: "Maintenance", icon: Tool },
  { name: "Emergency", icon: Shield },
  { name: "Industrial", icon: Power },
  { name: "Residential", icon: Home },
  { name: "Commercial", icon: Building },
  { name: "Efficiency", icon: Activity },
  { name: "Lighting", icon: Lightbulb },
  { name: "Inspections", icon: CheckSquare },
  { name: "Distribution", icon: Battery },
];

const Brands: React.FC = () => {
  return (
    <motion.section
      className="relative flex w-full items-center justify-center overflow-hidden py-2 dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.carouselContainer}>
        <motion.div
          className={`${styles.carouselTrack} flex list-none`}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {[...electricityServices, ...electricityServices].map(
            (service, index) => (
              <motion.div
                key={index}
                className={styles.carouselItem}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className={styles.logoContainer}>
                  <service.icon className="w-6 h-6" />
                </div>
                <div className={styles.serviceName}>{service.name}</div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Brands;
