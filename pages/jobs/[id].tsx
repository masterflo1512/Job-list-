import React from 'react';
import Header from './details/components/Header';
import Main from './details/components/Main';
import Map from './details/components/Map';
import Footer from './details/components/Footer';

function JobDetails(props) {
    return (
        <div className='flex justify-center'>
            <div className='flex flex-col max-w-[66%] divide-y divide-solid'>
                <Header title="Job Details"/>
                <Main 
                    title="Arbeitsmediziner/-in/Betriebsmediziner/-in(m/w/d) oder einen Arzt/eine Arztin(m/w/d)fur die Weiterbildung zum Facharzt/zur Facharztin fur Arbeitsnedizin(m/w/d)"
                    salary="€ 54000-60000"
                    jobDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus incidunt odit aperiam, commodi doloribus sed! Possimus labore cupiditate quaerat eos, odio nisi totam nihil consequuntur impedit. Quidem quia nesciunt iure.
                    Dolorum saepe dolorem reiciendis, natus, repellendus tenetur iure iusto quasi placeat voluptate rerum cumque nesciunt aliquid, unde deleniti. Incidunt eaque numquam repellendus perspiciatis quia cumque quisquam! Error optio ratione fugiat!"
                    subTitle="Responsopilities"
                    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique voluptas numquam. Doloribus, numquam culpa nulla deserunt velit obcaecati magni ut eos ipsa. Nam quam quae incidunt blanditiis eum repudiandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique voluptas numquam. Doloribus, numquam culpa nulla deserunt velit obcaecati magni ut eos ipsa. Nam quam quae incidunt blanditiis eum repudiandae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero similique voluptas numquam. Doloribus, numquam culpa nulla deserunt velit obcaecati magni ut eos ipsa. Nam quam quae incidunt blanditiis eum repudiandae."
                    CompensationTitle="Compensation & Benefits:"
                    listOfBenefits="Our physicians enjoya wide range of benefits,including:
                    Very competitive compensation package with bbbbonuses
                    Medical, Dental, and Vision Insurance
                    Occurrence-based Malpractice Coverage
                    Short-term and Long-term Disability Insurance and life insurance"
                />
                <Footer image={"https://i.picsum.photos/id/849/200/300.jpg?hmac=yxC3iWchW02fPkymErlcM6lg2lcTCKGxXh49nblSx9I"}/>
            </div>
            <div>
                <Map styles="min-w-[50%]"/>
            </div>
        </div>
    );
}

export default JobDetails;