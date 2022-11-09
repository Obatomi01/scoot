import { useState } from "react";

import Job from "./job";

import styles from "../../styles/careers/jobs.module.css";

const JOBS = [
  {
    title: "General Manager",
    location: "Jakarta, Indonesia",
    disabled: false,
  },
  {
    title: "UI/UX Designer",
    location: "Yokohama, Japan",
    disabled: false,
  },
  {
    title: "Blog Content Copywriter",
    location: "New York, United States",
    disabled: false,
  },
  {
    title: "Graphic Designer",
    location: "New York, United States",
    disabled: false,
  },
  {
    title: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
    disabled: false,
  },
  {
    title: "UX Analyst",
    location: "London, United Kingdom",
    disabled: false,
  },
];

const Jobs = () => {
  const [jobsState, setJobsState] = useState(JOBS);

  const disableButtonHandler = (i) => {
    alert("Application accepted. Thanks");
    const newJobsState = jobsState.map((el, index) => {
      if (i === index) {
        return {
          ...el,
          disabled: true,
        };
      }
      return el;
    });
    setJobsState(newJobsState);
  };

  return (
    <section className="container">
      <ul className={styles.jobs}>
        {jobsState.map((el, index) => {
          return (
            <Job
              title={el.title}
              location={el.location}
              btnDisabled={el.disabled}
              onButtonClick={disableButtonHandler.bind(null, index)}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Jobs;
