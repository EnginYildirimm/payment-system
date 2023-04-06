import React, { FC } from "react";
import { BsThreeDots } from "react-icons/bs";
type Props = {
  messages: Number;
  setMessages: (param: Number) => void;
};

const Phone: FC<Props> = (props) => {
  return (
    <div>
      <div className="w-[20rem] h-[53.1rem] bg-gray-200 flex justify-center ">
        <div className="text-center w-[15rem] h-[30rem] bg-gray-600 rounded-3xl mt-12 ">
          <div className="three w-6 h-6 mt-4 ml-[6.5rem] flex justify-center items-center">
            <BsThreeDots />
          </div>
          <div className="bg-gray-200 w-[13rem] h-[22rem] mt-1 ml-[1rem]">
            <div className="pt-8">
              {props.messages.valueOf.length >= 0 && (
                <div>
                  <span>
                    Bankanız tarafından gönderilen doğrulma kodunuz :{" "}
                    {props.messages}.
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="bg-gray-500/50 w-[3rem] h-[3rem] rounded-full mt-[1.5rem] ml-[6rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
