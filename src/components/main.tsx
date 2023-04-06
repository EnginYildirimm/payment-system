import React, { FC } from "react";
import Product from "./product";
import { products, ProductType } from "../data/products";

type Props = {
  total: number;
  basket: ProductType[];
  setBasket: (param: ProductType[]) => void;
};

const Main: FC<Props> = (props) => {
  return (
    <div>
      <div className="w-[57.5rem] ">
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              basket={props.basket}
              setBasket={props.setBasket}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
