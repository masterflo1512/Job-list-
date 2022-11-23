import React from "react";
import JobItem, {JobItemProps} from "../../components/JobItem";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://64.225.68.202/api.json`);
  const jobItems = await res.json();

  // Pass data to the page via props
  return { props: { jobItems } };
}
type JobListProps={
    jobItems: Array<JobItemProps & {pictures: Array<string>}>;
}
function JobList({ jobItems }:JobListProps) {
  return (
    <>
      {jobItems.map((jobItem) => (
        <JobItem
          id={jobItem.id}
          key={jobItem.id}
          title={jobItem.title}
          image={`${jobItem.pictures[0]}?random=${Math.floor(
            Math.random() * 1000
          )}`}
          name={jobItem.name}
          address={jobItem.address}
          createdAt={jobItem.createdAt}
        />
      ))}
    </>
  );
}

export default JobList;
