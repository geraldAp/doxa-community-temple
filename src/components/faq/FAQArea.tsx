"use client";
import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "./Accordation";

const FAQArea = ({ data }: { data: FAQ[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-3xl mx-auto">
        <Accordion items={data} />
      </div>
    </motion.div>
  );
};

export default FAQArea;
