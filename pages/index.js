import React, {useState, useEffect} from "react";
import Layout from "../components/layout/layout";
import Image from "next/image";
import cardData from "../utills/cards-data";
import TableList from "../components/list/table-list";
import ClientCard from "../components/cards/client-card";
import { cryptoService } from "../services";


export default function Home() {

  const [cryptoList, setCryptoList] = useState([])

  useEffect(() => {
    cryptoService.getCryptoList().then(res => {
      console.log(res)
      setCryptoList(res.data)
    })
  }, [])
  
  return (
    <Layout>
      <div className="flex-column">
        <p className="text-[28px] font-nunito font-medium px-4 pt-8 pb-4">Hi Radhika, welcome back!</p>
        <p className="text-[20px] font-nunito font-normal px-4 pt-8 pb-4">Your client list</p>
        <p className="text-[14px] font-nunito font-light px-4">You currently servicing 3 clients</p>

        <div className="flex">
          {
            cardData.map((card, idx) => (
              <ClientCard
                key={idx}
                logo={card.logo}
                title={card.title}
                text={card.text}
               />
            ))
          }
        </div>

        <div className="flex-column">
          <TableList
            title={'Recent Approvals'}
            subTitle={'You can find the recent on-going approvals here'}
            data={cryptoList}
          />
        </div>

      </div>
    </Layout>
  );
}