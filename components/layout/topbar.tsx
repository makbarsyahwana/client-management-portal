import React,  {ReactNode} from "react";
import Image
 from "next/image";
const Topbar = () => {
    return (
        <div className="flex-row drop-shadow w-full h-[7vh] bg-white">
            <div className="w-72 h-full px-4 pt-4 pb-4 bg-[#1E67AF] shadow-md">
                <Image alt={'page-logo'} className="drop-shadow" width={209} height={20} src={'/M&C-Logo-blue.png'} />
            </div>
        </div>
    )
}

export default Topbar