import React from 'react';
import { GetServerSideProps } from 'next';
import JobItem from '../../components/JobItem';

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`)
    const jobItems = await res.json()
  
    // Pass data to the page via props
    return { props: { jobItems } }
  }

function JobList({jobItems}) {
    return (
        <>
            {jobItems.map((jobItem) =>(
            <JobItem id={jobItem.id} key={jobItem.id} title={jobItem.title} image={jobItem.pictures[0]} description={jobItem.description} address={jobItem.address}/>

            ))} 
        </>
    );
}

export default JobList;