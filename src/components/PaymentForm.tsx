import { BasketType } from "@/pages";
import React, { FC } from "react";

type Props = {
  close: () => void;
  basket: BasketType;
  setBasket: (basket: BasketType) => void;
};

const PaymentForm: FC<Props> = (props) => {
  const { basket } = props;
  const total = basket.reduce((prev, current) => current.price + prev, 0);

  return (
    <div className=" bg-gray-50 w-[25rem] h-[30rem] text-center">
      <div className="flex justify-end">
        <div className="w-[40px] h-[40px] bg-red-600 text-2xl  hover:cursor-pointer">
          X
        </div>
      </div>
      <div className="mt-10">
        <span>
          <span className="text-green-700 font-bold">{total}</span> TL
          değerindeki harcamanız için kart bilgilerinizi doğru biçimde giriniz.
        </span>
      </div>
      <div className="mt-5">
        Card Number : <input id="card" maxLength={16} type="text" />
      </div>
      <div>
        <div className="mt-3 ml-[18px]">
          valid THRU : <input id="valid" type="text" maxLength={4} />
        </div>
        <div className="mt-3 ml-[66px]">
          CVC : <input id="cvc" maxLength={3} type="text" />
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-blue-400 h-[40px] w-[100px] rounded-sm ">
          DEVAM
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
