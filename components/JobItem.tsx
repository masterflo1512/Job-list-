import React from 'react';
import { useState } from 'react';
import Star from './icons/Star';
import Rectangle from './icons/Rectangle'
import Location from './icons/Location'

type JobItemProps = {
    title: string,
    description: string,
    address: string
}
function JobItem(props: JobItemProps) {
    
    return (
        <div className='flex flex-row justify-between my-5 mx-5 bg-white rounded shadow-md '>
            <div className='flex flex-row basis-3/4 mx-5'>
                <div className="basis-1/12 mt-5">
                    <div className=''>
                        <img 
                            src="https://i.picsum.photos/id/849/200/300.jpg?hmac=yxC3iWchW02fPkymErlcM6lg2lcTCKGxXh49nblSx9I" alt="..." className="h-20 w-20 rounded-full" />
                    </div>
                </div>
                <div className='basis-2/4 p-5'>
                    <h2 className='font-semibold text-[#3A4562] text-xl'>{props.title}</h2>
                    <h4 className='font-light text-[#878D9D] text-sm mt-5 mb-5'>{props.description}</h4>
                    <div className='flex flex-row gap-2 font-light text-[#878D9D] text-sm'>
                        <Location styles=""/>
                        <span className=''>{props.address}</span>
                    </div>
                </div>
            </div>
            <div className='basis-1/12 flex flex-row mt-24'>
                <Star styles=""/><Star styles=""/><Star styles=""/><Star styles=""/><Star styles=""/>
            </div>
            <div className='basis-1/12 flex flex-col space-y-20 mr-5'>
                <Rectangle styles="mt-10  ml-auto"/>
                <span className='font-light text-[#878D9D] text-sm'>Posted 2days ago</span>
            </div>    
        </div>
    );
}

export default JobItem;
