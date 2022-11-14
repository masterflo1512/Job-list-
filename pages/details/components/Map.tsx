import React from 'react';
import { useEffect } from "react";

type MapProps = {
    styles: string
}
function Map(props:MapProps) {
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=1.305385;
        const lon=30.923029;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div>
            <iframe className='{props.styles}' id="iframeId" height="500px" width="100%"></iframe>
        </div>
    );
}

export default Map;