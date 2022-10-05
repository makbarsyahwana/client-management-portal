import React from "react";
import Image from "next/image";


const TableList = ({ data, title, subTitle }) => {
  return (
    <>

        <div className="flex justify-between">
            <div>
            <p className="text-[20px] font-nunito font-medium px-4 pt-8 pb-4">{title}</p>
            <p className="text-[14px] font-nunito font-light px-4">{subTitle}</p>
            </div>

            <button className="flex drop-shadow text-white px-5 pt-1 pb-3  mx-4 mt-8 mb-4 bg-[#1E67AF] w-[227px] h-[32px] rounded-[53px]">
            + Create new Approval
            </button>
        </div>

        <div className="flex justify-between drop-shadow px-5 pt-2 pb-1  mx-auto mt-8 mb-4 bg-white w-full h-[45px] rounded-[5px]">
            <p>Image</p>
            <p>Name</p>
            <p>Current Price</p>
            <p>Market Cap</p>
        </div>

        {
            data.map((item, idx) => (
                <div key={idx} className="flex justify-between drop-shadow px-5 pt-2 pb-1  mx-auto mt-8 mb-4 bg-white w-full h-[45px] rounded-[5px]">
                    <Image alt={'coin-logo'} width={25} height={20} src={item.image} />
                    <p>{item.name}</p>
                    <p>{item.current_price}</p>
                    <p>{item.market_cap}</p>
                </div>
            ))
        }
              
    </>
  );
};

export default TableList;