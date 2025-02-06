"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/contants/motion";
import styles from "@/contants/styles";
import TitleText from "./TitleText";
import { insights } from "@/contants/appdata";
import InsightCard from "./InsightCard";

const Insights = ({ isForm, form }) => {
  return (
    <motion.div
      variants={!isForm && staggerContainer}
      initial={!isForm && "show"}
      whileInView={!isForm && "show"}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      {!isForm && <TitleText title={<>Our Fleet</>} />}

      <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        {insights?.map((insight, index) => (
          <InsightCard
            key={index}
            {...insight}
            index={index}
            isForm={isForm}
            form={form}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Insights;
