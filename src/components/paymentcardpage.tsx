import React, { FC } from "react";
type Props = {
  total: number;
  visiblecode: boolean;
  setVisiblecode: (param: boolean) => void;
  visiblecard: boolean;
  setVisiblecard: (param: boolean) => void;
};

const Paymentcardpage: FC<Props> = (props) => {
  const handleVisible = () => {
    props.setVisiblecard(false);
  };
  const handlenext = () => {
    props.setVisiblecode(true);
  };
  return (
    <div className=" bg-gray-50 w-[25rem] h-[30rem] text-center">
      <div className="flex justify-end">
        <div
          onClick={handleVisible}
          className="w-[40px] h-[40px] bg-red-600 text-2xl  hover:cursor-pointer"
        >
          X
        </div>
      </div>
      <div className="mt-10">
        <span>
          <span className="text-green-700 font-bold">{props.total}</span> TL
          değerindeki harcamanız için kart bilgilerinizi doğru biçimde giriniz.
        </span>
      </div>
      <div className="mt-5">
        Card Number :{" "}
        <input
          className="lenght"
          onChange={(e) => e.target.value}
          maxLength={16}
          type="number"
        />
      </div>
      <div>
        <div className="mt-3 ml-[18px]">
          valid THRU :{" "}
          <input type="number" onChange={(e) => e.target.value} maxLength={4} />
        </div>
        <div className="mt-3 ml-[66px]">
          CVC : <input type="number" />
        </div>
      </div>
      <div className="mt-5">
        <button
          className="bg-blue-400 h-[40px] w-[100px] rounded-sm "
          onClick={handlenext}
        >
          DEVAM
        </button>
      </div>
    </div>
  );
};

export default Paymentcardpage;
