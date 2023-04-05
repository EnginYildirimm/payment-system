import { ProductType } from "@/data/products";
import React, { FC, useState } from "react";

type Props = {
  total: number;
  setTotal: (param: number) => void;
  basket: ProductType[];
  setBasket: (param: ProductType[]) => void;
  visiblecard: boolean;
  setVisiblecard: (param: boolean) => void;
};

const Basket: FC<Props> = (props) => {
  const total = props.basket.reduce((prev, current) => {
    return prev + current.price;
  }, 0);
  props.setTotal(total);
  const handleDelete = () => {
    props.setBasket([]);
  };
  const handlevisible = () => {
    props.setVisiblecard(true);
  };
  return (
    <div>
      <div className="bg-gray-100 h-[10rem] mt-[7.1rem] flex justify-center items-center">
        <div className="">
          <div className="text-green-600 font-bold text-3xl text-center">
            TOTAL : {total} TL
          </div>

          <div className="flex gap-2 justify-center mt-5">
            <div className="text-white bg-red-600 p-2 font-bold text-center">
              <button onClick={handleDelete}>CLEAR BASKET</button>
            </div>
            <div className="text-white bg-blue-600 p-2 font bold text-center">
              <button onClick={handlevisible}>GET PAY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
