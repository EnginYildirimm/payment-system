import { BasketType } from "@/pages";
import React, { FC, FormEvent, useState } from "react";
import ValidatePaymentForm from "./ValidatePaymentForm";
import { cards, CardType } from "@/data/cards";

type Props = {
  close: () => void;

  basket: BasketType;
  setBasket: (basket: BasketType) => void;
  otpCode: number;
  setOtpCode: (code: number) => void;
};

const PaymentForm: FC<Props> = (props) => {
  const { basket, setBasket, close, otpCode, setOtpCode } = props;
  const [isOtpStep, setIsOtpStep] = useState(false);

  const [error, setError] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [validThru, setValidThru] = useState("");
  const [cvc, setCvc] = useState("");
  const [foundedCard, setFoundedCard] = useState("");

  const total = basket.reduce((prev, current) => current.price + prev, 0);
  const clearBasket = () => {
    setBasket([]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const foundedCard = cards.find((card) => card.cardnumber === cardNumber);
    if (!foundedCard) {
      setError("Kart bilgileri yanlış.");
      return;
    }
    if (
      foundedCard.validthru === validThru &&
      foundedCard.cvc.toString() === cvc
    ) {
      setFoundedCard(foundedCard.title);
      const codex = Math.floor(Math.random() * 10000);

      setOtpCode(codex);
      console.log(codex);

      setIsOtpStep(true);
    } else {
      setError("Kart bilgileri yanlış.");
    }
  };

  if (isOtpStep) {
    return (
      <ValidatePaymentForm
        foundedCard={foundedCard}
        setOtpCode={setOtpCode}
        basket={basket}
        clearBasket={clearBasket}
        close={close}
        otpCode={otpCode}
      />
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className=" bg-gray-50 w-[25rem] h-[30rem] text-center"
    >
      <div className="flex justify-end">
        <button
          type="button"
          className="w-[40px] h-[40px] bg-red-600 text-2xl  hover:cursor-pointer"
          onClick={close}
        >
          X
        </button>
      </div>
      <div className="mt-10">
        <span>
          <span className="text-green-500 font-bold">{total}</span> TL
          değerindeki harcamanız için kart bilgilerinizi doğru biçimde giriniz.
        </span>
      </div>
      <div className="mt-5">
        Card Number :{" "}
        <input
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
          id="card"
          maxLength={16}
          type="text"
        />
      </div>
      <div>
        <div className="mt-3 ml-[18px]">
          valid THRU :{" "}
          <input
            id="valid"
            type="text"
            maxLength={5}
            value={validThru}
            onChange={(e) => {
              setValidThru(e.target.value);
            }}
          />
        </div>
        <div className="mt-3 ml-[66px]">
          CVC :{" "}
          <input
            id="cvc"
            maxLength={3}
            type="text"
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
          />
        </div>
      </div>
      {Boolean(error) && <p className="text-sm text-red-500">{error}</p>}
      <div className="mt-5">
        <button
          type="submit"
          className="bg-blue-400 h-[40px] w-[100px] rounded-sm "
        >
          DEVAM
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
