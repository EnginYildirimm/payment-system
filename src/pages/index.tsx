import React, { useState } from "react";
import Header from "../components/header";
import Cards from "../components/cards";
import Main from "../components/main";
import Phone from "../components/phone";
import Basket from "../components/basket";
import { ProductType } from "@/data/products";
import Paymentpage from "@/components/paymentpage";
import Paymentcardpage from "@/components/paymentcardpage";

const index = () => {
  const [total, setTotal] = useState(0);
  const totalhandler = (total: number) => {
    setTotal(total);
  };
  const [basket, setBasket] = useState<ProductType[]>([]);
  const baskethandler = (basket: ProductType[]) => {
    setBasket(basket);
  };
  const [visiblecard, setVisiblecard] = useState(false);
  const visiblehandlercard = (visiblecard: boolean) => {
    setVisiblecard(visiblecard);
  };
  const [visiblecode, setVisiblecode] = useState(false);
  const visiblehandlercode = (visiblecode: boolean) => {
    setVisiblecode(visiblecode);
  };
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <Cards />
        <div className=" releative">
          <Main
            total={total}
            setTotal={totalhandler}
            basket={basket}
            setBasket={baskethandler}
          />
          {visiblecard && (
            <div className=" z-10 absolute top-[7rem] left-[34rem] flex justify-center">
              <Paymentcardpage
                total={total}
                visiblecard={visiblecard}
                setVisiblecard={visiblehandlercard}
                visiblecode={visiblecode}
                setVisiblecode={visiblehandlercode}
              />
            </div>
          )}
          {visiblecode && (
            <div className=" z-10 absolute top-[7rem] left-[34rem] flex justify-center">
              <Paymentpage
                total={total}
                visiblecode={visiblecode}
                setVisiblecode={visiblehandlercode}
                visiblecard={visiblecard}
                setVisiblecard={visiblehandlercard}
              />
            </div>
          )}

          <div className="absolute top-[35rem] left-[40rem]">
            <Basket
              setTotal={totalhandler}
              total={total}
              visiblecard={visiblecard}
              setVisiblecard={visiblehandlercard}
              basket={basket}
              setBasket={baskethandler}
            />
          </div>
        </div>

        <Phone />
      </div>
    </div>
  );
};

export default index;
