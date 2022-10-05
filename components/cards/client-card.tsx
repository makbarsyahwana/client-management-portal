import React from "react";
import Image from "next/image";


const ClientCard = ({ logo, title, text }) => {
  return (
    <>
        <div className="flex-column drop-shadow  mx-4 mt-8 mb-4 bg-white w-[264px] h-[198px] rounded-[5px]">
        <div className="float-right px-2">
            <Image alt={'dots'} width={20} height={20} src={"/dots-menu.svg"} />
        </div>
        <div className="px-4 pt-4">
            <Image alt={'client-logo'} width={100} height={30} src={logo} />
        </div>
        <div className="px-4 pt-4">
            <h3 className="font-bold text-[16px] text-[#323A46]">{title}</h3>
            <text className="font-nunito tracking-tighter leading-tighter font-normal text-[11px] text-[#323A46]">
            {text}
            </text>
        </div>
        </div>
    </>
  );
};

export default ClientCard;