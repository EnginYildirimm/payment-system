import React, { useState } from "react";
import Header from "../components/header";
import Cards from "../components/cards";
import Main from "../components/main";
import Phone from "../components/Phone";
import Basket from "../components/Basket";
import { ProductType } from "@/data/products";
import PaymentForm from "@/components/PaymentForm";

export type BasketType = ProductType[];

const HomePage = () => {
  const [basket, setBasket] = useState<BasketType>([]);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [otpCode, setOtpCode] = useState(0);

  const basketHandler = (basket: BasketType) => {
    setBasket(basket);
  };

  const otpHandler = (code: number) => {
    setOtpCode(code);
  };
  const paymentFormCloseHandler = () => {
    setIsPaymentOpen(false);
  };
  const paymentFormOpenHandler = () => {
    setIsPaymentOpen(true);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <Cards />
        <div className=" releative">
          <Main basket={basket} setBasket={basketHandler} />
          {isPaymentOpen && (
            <div className=" z-10 absolute top-[7rem] left-[36.5rem] flex justify-center">
              <PaymentForm
                close={paymentFormCloseHandler}
                basket={basket}
                setBasket={setBasket}
                otpCode={otpCode}
                setOtpCode={otpHandler}
              />
            </div>
          )}
          <div className="absolute top-[42rem] left-[40rem]">
            <Basket
              basket={basket}
              setBasket={basketHandler}
              openPayment={paymentFormOpenHandler}
            />
          </div>
        </div>
        <Phone code={otpCode} />
      </div>
    </div>
  );
};

export default HomePage;
