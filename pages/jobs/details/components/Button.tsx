import React from 'react';

type ButtonProps ={
    styles: string,
    children:string,
    variant:string
}
function Button(props:ButtonProps) {
    return (
        <div>
            {props.variant === 'primary'?
                <button className="w-36 h-14 bg-dark-blue text-white rounded-lg mt-12 mb-10 text-xs font-semibold">{props.children}</button>
            : props.variant === 'secondary' ? <button className="w-60 h-10 rounded-lg text-text-btn-secondary font-bold bg-btn-secondary my-2">{props.children}</button> 
            : props.variant === 'tertiary' ? <button className="w-60 h-10 rounded-lg
            text-text-btn-tertiary font-bold bg-btn-tertiary my-2">{props.children}</button> 
            : null}
        </div>
    );
}

export default Button;