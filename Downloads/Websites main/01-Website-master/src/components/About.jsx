import React from 'react';
import './About.css';
import profilePicture from '../images/me2.jpg'; // Adjust the path to your image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={profilePicture} className="img-fluid pic" alt="Akhil" />
          </div>
          <div className="col-12 col-lg-6">
            <h2 className="about-title">Akhilesh Reddy Katapally</h2>
            <p className="about-text">
                Hi! I am Akhilesh! I am a Data Engineer with extensive experience in developing scalable data solutions, leveraging Python, SQL, AWS, and PySpark to design and optimize ETL processes. Proven track record in managing data warehousing on Snowflake, automating workflows, and enhancing data quality for data-driven decision-making. Committed to delivering high-performance systems that support insightful analytics and business intelligence.          
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

