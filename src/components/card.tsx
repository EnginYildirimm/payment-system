import { cards, CardType } from "@/data/cards";
import React, { FC } from "react";
import { FcSimCardChip } from "react-icons/fc";
type Props = {
  card: CardType;
};

const Card: FC<Props> = (props) => {
  const { card } = props;
  return (
    <div>
      <div className="w-[16rem] h-40 rounded-2xl bg-gray-100  ml-5 mr-5 mt-5">
        <div className="text-center font-bold">{card.title}</div>
        <div className="flex justify-between mt-4 ">
          <div className="chip ml-6">
            <FcSimCardChip />
          </div>
          <div className="mr-2 flex justify-center">
            <img
              className="w-[1.3rem] h-[1.8rem] bg-gray-200  "
              src="https://w7.pngwing.com/pngs/283/254/png-transparent-contactless-payment-google-pay-logo-american-express-visa-text-logo-payment-thumbnail.png"
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="text-xl  text-center text-gray-700 font-semibold">
            <span className="tracking-[3px]">{card.cardnumber}</span>
          </div>
          <div className="text-xs  text-center">
            <span>{card.validthru}</span>
          </div>
          <div className="text-sm  ml-4 text-gray-500 font-normal flex justify-between">
            <span>{card.name}</span>
            <span className="mr-4">cvc : {card.cvc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
