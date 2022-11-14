import React from 'react';

type FooterProps ={
    title: string
}
function Footer(props:FooterProps) {
    return (
        <div>
           <h1>Additional info</h1><hr /> 
           <h2>Employement type</h2>
           <div>
            <button>Full time</button>
            <button>Part time</button>
            <button>Temporary</button>
           </div>
           <h2>Benefits</h2>
           <div>
            <button>Flexible shedule</button>
            <button>Relocation assistance</button>
           </div>
           <h1>Attached images</h1>
           <div>
            <img src="" alt="" />
           </div>
        </div>
    );
}

export default Footer;