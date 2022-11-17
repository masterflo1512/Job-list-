import React from 'react';
import Star from './icons/StarIcon'
import ShareIcon from './icons/ShareIcon'

type HeaderProps ={
    title: string
}
function Header(props: HeaderProps) {
    return (
        <div className='flex justify-between py-10'>
            <h1 className='font-bold text-2xl text-dark-blue'>{props.title}</h1>
            <hr className='font-bold '/>
            <div className='flex flex-row gap-5 justify-around'>
                <div className='flex flex-row gap-2 text-save-icon'>
                    <Star /><span>Save to my list</span>
                </div> 
                <div className='flex flex-row gap-2'>
                    <ShareIcon /><span>Share</span>
                </div>
            </div>
        </div>
    );
}

export default Header;