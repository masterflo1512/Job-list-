import React from "react";
import Star from "./icons/Star";
import Bookmark from "./icons/Bookmark";
import Location from "./icons/Location";
import Link from 'next/link'

export type JobItemProps = {
    title: string;
    description: string;
    address: string;
    image: string
    id:string
};
function JobItem({title,description,address,image,id}: JobItemProps) {
    console.log(image);
    
    return (
        <div className="flex flex-row my-5 mx-5 bg-white rounded shadow-md p-5">
            <div className="mt-5 shrink-0">
                <img
                    src={image}
                    alt="..."
                    className="h-20 w-20 rounded-full"
                />
            </div>
            <div className="p-5 flex w-full sm:flex-col-reverse">
                <div className="flex flex-row">
                    <div>
                        <Link href={`/jobs/${id}`}>
                            <h2 className="font-semibold text-[#3A4562] text-xl">
                                {title}
                            </h2>
                        </Link>
                        <h4 className="font-light text-[#878D9D] text-sm mt-5 mb-5">
                            {description}
                        </h4>
                        <div className="flex flex-row gap-2 font-light text-[#878D9D] text-sm">
                            <Location styles="" />
                            <span className="">{address}</span>
                        </div>
                    </div>
                </div>
                <div className="flex sm:items-center sm:justify-between sm:mb-5 sm:ml-0 ml-auto">
                    <div className="flex items-center flex-row mr-10 sm:mt-0">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                    <div className="flex flex-col mr-5 justify-between">
                        <Bookmark styles="ml-auto sm:hidden" />
                        <span className="font-light text-[#878D9D] text-sm">
                            Posted 2 days ago
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobItem;