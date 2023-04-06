import React, { FC } from "react";
type Props = {
  total: number;
  visiblecard: boolean;
  setVisiblecard: (param: boolean) => void;
  visiblecode: boolean;
  setVisiblecode: (param: boolean) => void;
  messages: Number;
  setMessages: (param: Number) => void;
};

const Paymentpage: FC<Props> = (props) => {
  const handleVisible = () => {
    props.setVisiblecode(false);
    props.setVisiblecard(false);
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
        <div>
          <span>
            <span className="text-green-700 font-bold">{props.total}</span> TL
            değerindeki harcamanız için telefonunuza gönderilen doğrulama kodunu
            giriniz.
          </span>
        </div>
        <div className="mt-5">
          <input className="h-10 " type="text" />
        </div>
        <div className="mt-7">
          <button className="bg-blue-400 w-[100px] h-[40px] rounded-sm">
            SUBMİT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paymentpage;
