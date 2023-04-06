import React, { useState } from "react";
import Header from "../components/header";
import Cards from "../components/cards";
import Main from "../components/main";
import Phone from "../components/phone";
import Basket from "../components/basket";
import { ProductType } from "@/data/products";
import Paymentpage from "@/components/paymentpage";
import PaymentForm from "@/components/PaymentForm";

export type BasketType = ProductType[];

const index = () => {
  const [basket, setBasket] = useState<BasketType>([]);
  const total = basket.reduce((prev, current) => prev + current.price, 0);
  const baskethandler = (basket: BasketType) => {
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
  const [messages, setMessages] = useState(0);
  const messageshandler = (messages: 0) => {
    setMessages(messages);
  };
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
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
          <Main total={total} basket={basket} setBasket={baskethandler} />
          {isPaymentOpen && (
            <div className=" z-10 absolute top-[7rem] left-[34rem] flex justify-center">
              <PaymentForm
                close={paymentFormCloseHandler}
                basket={basket}
                setBasket={setBasket}
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
                messages={messages}
                setMessages={messageshandler}
              />
            </div>
          )}

          <div className="absolute top-[42rem] left-[40rem]">
            <Basket
              total={total}
              visiblecard={visiblecard}
              setVisiblecard={visiblehandlercard}
              basket={basket}
              setBasket={baskethandler}
            />
          </div>
        </div>

        <Phone messages={messages} setMessages={messageshandler} />
      </div>
    </div>
  );
};

export default index;
