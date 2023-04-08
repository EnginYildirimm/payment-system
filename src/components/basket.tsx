import { ProductType } from "@/data/products";
import React, { FC, useState } from "react";

type Props = {
  basket: ProductType[];
  setBasket: (param: ProductType[]) => void;
  openPayment: () => void;
};

const Basket: FC<Props> = (props) => {
  const { basket, setBasket, openPayment } = props;
  const total = basket.reduce((prev, current) => prev + current.price, 0);
  const clearBasket = () => setBasket([]);

  return (
    <div>
      <div className="bg-gray-100 h-[10rem] w-[300px] flex justify-center items-center  rounded-xl ">
        <div className="">
          <div className="text-green-600 font-bold text-3xl text-center">
            TOTAL : {total} TL
          </div>
          <div className="flex gap-2 justify-center mt-5">
            <div className="text-white bg-red-600 p-2 font-bold text-center rounded-sm">
              <button type="button" onClick={clearBasket}>
                CLEAR BASKET
              </button>
            </div>
            <div className="text-white bg-blue-600 p-2 font bold text-center rounded-sm ">
              <button type="button" onClick={openPayment}>
                GET PAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
