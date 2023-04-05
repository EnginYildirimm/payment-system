import { cards } from "@/data/cards";
import React from "react";
import Card from "./card";

const Cards = () => {
  return (
    <div className="bg-gray-200">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
