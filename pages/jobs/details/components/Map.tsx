import React from 'react';


type MapProps = {
    styles: string
}
function Map(props:MapProps) {

        const lat=1.305385;
        const lon=30.923029;

    return(
        <div>
            <iframe className='{props.styles}' id="iframeId" height="500px" width="100%" src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}></iframe>
        </div>
    );
}

export default Map;