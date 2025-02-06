import React from "react";
import InsightCard from "./InsightCard";

const CardGrid = ({ cardsData, isForm, form, transfertype, source, destination }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cardsData.map((card, index) => (
        <InsightCard
          key={index}
          imgUrl={card.imgUrl}
          title={card.title}
          subtitle={card.subtitle}
          index={index}
          isForm={isForm}
          form={form}
          transfertype={transfertype}
          source={source}
          destination={destination}
        />
      ))}
    </div>
  );
};

export default CardGrid;