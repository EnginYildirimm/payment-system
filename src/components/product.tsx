import React, { FC } from "react";
import { products, ProductType } from "../data/products";
import { BasketType } from "@/pages";

type Props = {
  product: ProductType;
  add: () => void;
};

const Product: FC<Props> = (props) => {
  const { product, add } = props;
  return (
    <div>
      <div className="w-[8rem] h-[17rem] text-center bg-gray-0 ml-1 mt-4 relative ">
        <div>
          <img src={product.image} alt="" />
        </div>
        <div className="absolute bottom-0 rounded-[0.5rem] bg-gray-100 w-[100%]">
          <h2>{product.title}</h2>
          <h3>{product.price}TL</h3>
          <button
            onClick={add}
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
