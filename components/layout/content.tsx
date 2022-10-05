import React from "react";

const Content = ({children}) => {
  return (
    <div className="bg-primary overflow-auto text-[#323A46] font-nunito bg-[#F5F6FA] flex-1 p-4">
            {children}
    </div>
  );
};

export default Content;