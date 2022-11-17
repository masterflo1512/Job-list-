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
                <button className="w-32 h-8 bg-dark-blue text-white rounded-lg my-10">{props.children}</button>
            : props.variant === 'secondary' ? <button className="w-60 h-10 rounded-lg text-text-btn-secondary font-bold bg-btn-secondary my-2">{props.children}</button> 
            : props.variant === 'tertiary' ? <button className="w-60 h-10 rounded-lg
            text-text-btn-tertiary font-bold bg-btn-tertiary my-2">{props.children}</button> 
            : null}
        </div>
    );
}

export default Button;