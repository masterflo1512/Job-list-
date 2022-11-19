import React from "react";
import Header from "./details/components/Header";
import Main from "./details/components/Main";
import Map from "./details/components/Map";
import Footer from "./details/components/Footer";
import { useRouter } from "next/router";
import { JobItemProps } from "../../components/JobItem";
import parseDescription from '../../utils/parse-description'

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://64.225.68.202/api.json`);
  const jobItems = await res.json();

  // Pass data to the page via props
  return { props: { jobItems } };
}
type JobDetailsProps = {
  jobItems: Array<JobItemProps & { id: string; salary: string }>;
};
function JobDetails({ jobItems }: JobDetailsProps) {
  const router = useRouter();
  const jobItem = jobItems.find((jobItem) => jobItem.id === router.query.id);

  if (jobItem) {
    const { description, benefits, responsibilities } = parseDescription(jobItem.description)
    return (
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[66%] divide-y divide-solid">
          <Header title="Job Details" />
          <Main
            title={jobItem.title}
            salary={jobItem.salary}
            jobDescription={description}
            responsibilities={responsibilities}
            listOfBenefits={benefits}
          />
          <Footer
            image={
              "https://i.picsum.photos/id/849/200/300.jpg?hmac=yxC3iWchW02fPkymErlcM6lg2lcTCKGxXh49nblSx9I"
            }
          />
        </div>
        <div>
          <Map styles="min-w-[50%]" />
        </div>
      </div>
    );
  } else {
    return <h1>job with id {router.query.id} not found </h1>;
  }
}

export default JobDetails;
