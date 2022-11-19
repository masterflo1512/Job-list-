import React from "react";
import Button from "./Button";
import Bullet from "./icons/Bullet";

type MainProps = {
  title: string;
  salary: string;
  jobDescription: string;
  responsibilities: string;
  listOfBenefits: string[];
};
function Main(props: MainProps) {
  return (
    <div>
      <Button variant={"primary"} styles="">
        APPLY NOW
      </Button>
      <div className="flex justify-between text-save-icon">
        <h2 className="font-bold text-2xl max-w-[60%]">{props.title}</h2>
        <div className="flex flex-col">
          <span className="font-bold text-2xl">{props.salary}</span>
          <h3 className="">Brutto, per year</h3>
        </div>
      </div>
      <span className="text-posted">Posted 2 days ago</span>
      <div className="flex flex-col gap-5 text-save-icon text-lg">
        <p className="font-">{props.jobDescription}</p>
        <h2 className="font-bold  text-2xl">Responsibilites</h2>
        <p className="">{props.responsibilities}</p>
        <h2 className="font-bold  text-2xl">Compensation & Benefits:</h2>
        {props.listOfBenefits}
        <ul>
            {props.listOfBenefits?.map((benefit,index) => <li key={index} className="flex items-center -mx-12"><Bullet styles="mx-5" />{benefit}</li>)}
        </ul>
      </div>
      <Button variant={"primary"} styles="">
        APPLY NOW
      </Button>
      <h1>Additional info</h1>
      <hr />
      <h2>Employement type</h2>
      <div className="flex gap-2">
        <Button variant={"secondary"} styles="">
          Full time
        </Button>
        <Button variant={"secondary"} styles="">
          Part time
        </Button>
        <Button variant={"secondary"} styles="">
          Temporary
        </Button>
      </div>
      <div>
        <h2>Benefits</h2>
        <div className="flex gap-2">
          <Button variant={"tertiary"} styles="">
            Flexible shedule
          </Button>
          <Button variant={"tertiary"} styles="">
            Relocation assistance
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Main;
