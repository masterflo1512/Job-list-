import React from 'react';

type FooterProps ={
    image:string
}
function Footer(props:FooterProps) {
    return (
        <div>
           <h1>Attached images</h1>
           <div className='flex gap-5'>
            <img src={props.image} alt="" className='rounded-md'/>
            <img src={props.image} alt="" className='rounded-md'/>
            <img src={props.image} alt="" className='rounded-md'/>
           </div>
        </div>
    );
}

export default Footer;