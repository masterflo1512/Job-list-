import React from 'react';
import Star from './icons/StarIcon'
import Shape from './icons/Shape'

type HeaderProps ={
    title: string
}
function Header(props: HeaderProps) {
    return (
        <div className='flex '>
            <h1>{props.title}</h1>
            <div className='flex flex-row gap-5 justify-around'>
                <div className='flex flex-row gap-2'>
                    <Star /><span>Save to my list</span>
                </div> 
                <div className='flex flex-row gap-2'>
                    <Shape /><span>Share</span>
                </div>
            </div>
        </div>
    );
}

export default Header;