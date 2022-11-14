import React from 'react';
import Apply from './buttons/Apply';
import Bullet from './icons/Bullet'

type MainProps = {
    title: string;
    salary:string;
};
function Main(props:MainProps) {
    return (
        <div>
            <Apply />
            <div>
                <h2 className="font-semibold text-[#3A4562] text-xl">
                    {props.title}
                </h2>
                <div>
                    <span className='font-semibold text-[#3A4562]'>{props.salary}</span>
                    <h3>Brutto, per year</h3>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt odit aperiam, commodi doloribus sed! Possimus labore cupiditate quaerat eos, odio nisi totam nihil consequuntur impedit. Quidem quia nesciunt iure.
            Dolorum saepe dolorem reiciendis, natus, repellendus tenetur iure iusto quasi placeat voluptate rerum cumque nesciunt aliquid, unde deleniti. Incidunt eaque numquam repellendus perspiciatis quia cumque quisquam! Error optio ratione fugiat!</p>
            <h1>Responsopilities</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique voluptas numquam. Doloribus, numquam culpa nulla deserunt velit obcaecati magni ut eos ipsa. Nam quam quae incidunt blanditiis eum repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique voluptas numquam. Doloribus, numquam culpa nulla deserunt velit obcaecati magni ut eos ipsa. Nam quam quae incidunt blanditiis eum repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique voluptas numquam. Doloribus, numquam culpa nulla deserunt velit obcaecati magni ut eos ipsa. Nam quam quae incidunt blanditiis eum repudiandae.</p>
            <h1>Compensation & Benefits:</h1>
            <p>Our physicians enjoya wide range of benefits,including:</p>
            <ul>
                <li>Very competitive compensation package with bbbbonuses</li>
                <li>Medical, Dental, and Vision Insurance</li>
                <li>Occurrence-based Malpractice Coverage</li>
                <li>Short-term and Long-term Disability Insurance and life insurance</li>
            </ul>
            <Apply />
        </div>
    );
}

export default Main;