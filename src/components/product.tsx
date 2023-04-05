import React, { FC } from "react";
import { products, ProductType } from "../data/products";

type Props = {
  product: ProductType;
  basket: ProductType[];
  setBasket: (param: ProductType[]) => void;
};

const Product: FC<Props> = (props) => {
  const addBasket = () => {
    props.setBasket([...props.basket, props.product]);
  };
  return (
    <div>
      <div className="w-[8rem] h-[17rem] text-center bg-gray-0 ml-1 mt-4 relative ">
        <div>
          <img src={props.product.image} alt="" />
        </div>
        <div className="absolute bottom-0 rounded-[0.5rem] bg-gray-100 w-[100%]">
          <h2>{props.product.title}</h2>
          <h3>{props.product.price}TL</h3>
          <button
            onClick={addBasket}
            className="bg-green-400 mb-1 rounded-[0.2rem] p-1"
          >
            SATIN AL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
