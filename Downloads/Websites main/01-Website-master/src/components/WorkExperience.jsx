import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    id: 1,
    date: 'Aug 2023 - Dec 2024',
    title: 'Data Engineer',
    company: 'TOPSYS IT, United States',
    description: [
      "Developed end-to-end ETL processes using PySpark for transforming raw data into structured formats.",
      "Implemented advanced data warehousing solutions in Snowflake to ensure scalability and comprehensive analytics on large client datasets.",
      "Developed complex data transformation logic that improved data quality by addressing previous inconsistencies.",
      "Automated repetitive workflows with Python and AWS Step Functions, reducing manual efforts by 40%.",
      "Created insightful reports and dashboards using SQL and Tableau, to facilitate data-driven decision-making."
    ],
    tools: [
      "Python", "SQL", "AWS S3", "AWS RDS", "PySpark", "Databricks", "Tableau", "MySQL Workbench", "Snowflake", "Github"
    ]
  },
  {
    id: 2,
    date: 'May 2023 - Dec 2023',
    title: 'Data Science Engineer',
    company: 'Wi-Tronix, Bolingbrook, United States',
    description: [
      "Evaluated and implemented a new labeling tool, instrumental in driving the business objectives.",
      "Participated in design discussions and developed scripts for efficient data extraction and migration.",
      "Conducted feature engineering to boost model performance, achieving improvement in prediction accuracy.",
      "Delivered efficient data analytics solutions with Python, SQL and Tableau to get actionable business insights."
    ],
    tools: [
      "Python", "Scikit-Learn", "Numpy", "Pandas", "PySpark", "SQL", "S3", "GIT", "MySQL", "SQL Server Management Studio", "Tableau", "V7", "SuperAnnotate"
    ]
  },
  {
    id: 3,
    date: 'Jan 2021 - Jul 2022',
    title: 'Software Engineer',
    company: 'Avco Consulting, Inc, Hyderabad, India',
    description: [
      "Orchestrated the migration of data systems to AWS cloud infrastructure, ensuring seamless integration.",
      "Designed and optimized scalable ETL frameworks using PySpark within AWS, leveraging AWS Glue and Snowflake for streamlined data processing.",
      "Implemented rigorous data validation checks that improved data quality by 30%, ensuring more reliable outcomes for downstream analytics and reporting.",
      "Leveraged expertise in SQL and Tableau to develop insightful reports and dashboards for decision-making."
    ],
    tools: [
      "Python", "SQL", "Apache Spark", "PySpark", "AWS S3", "AWS Glue", "Snowflake", "Tableau", "VS Code", "GIT"
    ]
  }
  // Add more experiences as needed
];

const WorkExperience = () => {
  return (
    <div section id="experience" className="work-experience-section">
      <h2 className="section-title">Work Experience</h2>
      {experiences.map((experience) => (
        <div className="work-experience-item" key={experience.id}>
          <div className="work-experience-date">
            <p>{experience.date}</p>
          </div>
          <div className="work-experience-details">
            <h3>
              {experience.title} -{' '}
              <span className="company-name">{experience.company}</span>
            </h3>
            <div className="work-experience-description">
              {experience.description.map((point, index) => (
                <p key={index}>• {point}</p>
              ))}
            </div>
            <div className="work-experience-tools">
              {experience.tools.map((tool, index) => (
                <span className="tool-badge" key={index}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
