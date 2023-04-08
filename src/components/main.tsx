import React, { FC } from "react";
import Product from "./product";
import { products, ProductType } from "../data/products";
import { BasketType } from "@/pages";

type Props = {
  basket: BasketType;
  setBasket: (param: BasketType) => void;
};

const Main: FC<Props> = (props) => {
  const { basket, setBasket } = props;

  const addToBasket = (product: ProductType) => {
    const newBasket = [...basket];
    newBasket.push(product);
    setBasket(newBasket);
  };

  return (
    <div>
      <div className="w-[55rem]">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              add={() => {
                addToBasket(product);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
