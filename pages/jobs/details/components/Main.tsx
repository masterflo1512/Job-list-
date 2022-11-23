import React from "react";
import Button from "./Button";
import Bullet from "./icons/Bullet";
import calculateTimeAgo from "../../../../utils/calculate-time-ago";

type MainProps = {
    title: string;
    salary: string;
    jobDescription: string;
    responsibilities: string;
    listOfBenefits: string[];
    employmentTypes: string[];
    benefits: string[];
    createdAt: string;
};
function Main({
    title,
    salary,
    jobDescription,
    responsibilities,
    listOfBenefits = [],
    employmentTypes = [],
    benefits = [],
    createdAt,
}: MainProps) {
    return (
        <div>
            <Button variant={"primary"} styles="">
                APPLY NOW
            </Button>
            <div className="flex justify-between text-save-icon">
                <h2 className="font-bold text-2xl max-w-[60%]">{title}</h2>
                <div className="flex flex-col">
                    <span className="font-bold text-2xl">{salary}</span>
                    <h3 className="">Brutto, per year</h3>
                </div>
            </div>
            <h5 className="text-posted">{calculateTimeAgo(createdAt)}</h5>
            <div className="flex flex-col gap-5 text-save-icon text-lg">
                <p className="font-">{jobDescription}</p>
                <h2 className="font-bold  text-2xl">Responsibilites</h2>
                <p className="">{responsibilities}</p>
                <h2 className="font-bold  text-2xl">
                    Compensation & Benefits:
                </h2>
                {listOfBenefits}
                <ul>
                    {listOfBenefits.map((benefit, index) => (
                        <li key={index} className="flex items-center -mx-12">
                            <Bullet styles="mx-5" />
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant={"primary"} styles="">
                APPLY NOW
            </Button>
            <h1 className="font-bold text-2xl text-save-icon">
                Additional info
            </h1>
            <hr />
            <h2 className="text-save-icon">Employement type</h2>
            <div className="flex gap-2">
                {employmentTypes.map((type: string, i: number) => {
                    return (
                        <Button variant={"secondary"} styles="" key={i}>
                            {type}
                        </Button>
                    );
                })}
            </div>
            <div>
                <h2 className="text-save-icon">Benefits</h2>
                <div className="flex gap-2">
                    {benefits.map((type: string, i: number) => {
                        return (
                            <Button variant={"tertiary"} styles="" key={i}>
                                {type}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Main;
