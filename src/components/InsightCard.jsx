import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/contants/motion";
import { useRouter, useSearchParams } from "next/navigation";
import { FaCar, FaGasPump, FaRoad, FaUserFriends } from 'react-icons/fa'; // Importing icons

const InsightCard = ({ imgUrl, title, subtitle, fuel, member, avg, model, index, isForm, form }) => {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");
  const router = useRouter();

  return (
    <div className="">
      <motion.div
        variants={fadeIn("up", "string", index * 0.5, 1)}
        className="flex flex-col h-[100%] justify-between bg-white shadow-lg rounded-lg p-1 w-full md:w-[100%] lg:w-[100%] xl:w-[100%]"
      >
        <div className="">
          <img
            src={imgUrl}
            className="w-full h-[35vh] rounded-lg object-cover mb-4"
            alt={title}
          />
        </div>
        <div className="flex flex-col justify-between h-[100%]">
          <div>
            <h4 className="font-extrabold m-auto text-slate-500 text-2xl mb-2">{title}</h4>
            <p className="font-normal text-slate-400 mb-2">{subtitle}</p>
          </div>

          <div className="flex pt-2">
            <div className="flex items-center justify-around w-full mb-2">
              <div className="flex">
                <a href="#"><FaGasPump className="me-2 mt-0.5" /></a>
                <span className="text-slate-500">{fuel}</span>
              </div>
              <div className="flex">
                <a href="#"><FaUserFriends className="me-2 mt-0.5" /></a>
                <span className="text-slate-500">{member}</span>
              </div>
              <div className="flex">
                <a href="#"><FaCar className="me-2 mt-0.5" /></a>
                <span className="text-slate-500">{model}</span>
              </div>
              <div className="flex">
                <a href="#"><FaRoad className="me-2 mt-0.5" /></a>
                <span className="text-slate-500">{avg}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t-2 items-center mt-auto">
          {isForm && (
            <button
              onClick={() => {
                form.setValue("imgUrl", imgUrl);
                form.setValue("title", title);
                form.setValue("subtitle", subtitle);
                router.push(`/booking?index=2&option=${index}`);
              }}
              className={`mt-2 ${option == index
                ? "bg-third-color text-white"
                : "bg-slate-200 text-slate-500"
                } h-10 text-md px-4 rounded-full`}
              disabled={option == index}
            >
              Order Now
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default InsightCard;