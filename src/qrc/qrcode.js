
import QRCode from 'qrcode'; 
import { useEffect, useState } from "react";

const QRCODE = ({text}) => {
     
    const [src, setSrc] = useState(''); 

    useEffect(() => {
        QRCode.toDataURL("SampleIdTextForQRCODE").then(setSrc);
    },[]);
    return (<div>
            <img src={src} />


    </div>

    )
} ;

export default QRCODE;