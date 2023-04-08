import { BasketType } from "@/pages";
import React, { FC, FormEvent, useState } from "react";
type Props = {
  basket: BasketType;
  clearBasket: () => void;
  close: () => void;
  setOtpCode: (code: number) => void;
  otpCode: number;
  foundedCard: "";
};

const ValidatePaymentForm: FC<Props> = (props) => {
  const { basket, otpCode, clearBasket, close, setOtpCode, foundedCard } =
    props;
  const total = basket.reduce((prev, current) => current.price + prev, 0);

  const [input, setInput] = useState("");

  const submitHandler = (e: FormEvent) => {
    if (input === otpCode.toString()) {
      alert("Ödeme işlemi başarıyla gerçekleştirildi.");
      clearBasket();
      close();
      setOtpCode(0);
    } else {
      alert("Doğrulama kodunu hatalı girdiniz !");
    }
  };
  return (
    <div className=" bg-gray-50 w-[25rem] h-[30rem] text-center">
      <div className="flex justify-end">
        <button
          type="button"
          className="w-[40px] h-[40px] bg-red-600 text-2xl  hover:cursor-pointer"
          onClick={close}
        >
          X
        </button>
      </div>
      <form onSubmit={submitHandler} className="mt-10">
        <div>
          <span>
            <span className="text-blue-700 font-bold">{foundedCard} </span> ile
            yapmış olduğunuz <br />
            <span className="text-green-600 font-bold">{total}</span> TL
            değerindeki harcamanız için telefonunuza gönderilen doğrulama kodunu
            giriniz.
          </span>
        </div>
        <div className="mt-5">
          <input
            type="text"
            className="h-10"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
        <div className="mt-7">
          <button
            type="button"
            className="bg-blue-400 w-[100px] h-[40px] rounded-sm"
          >
            SUBMİT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ValidatePaymentForm;
