import React from 'react';
import './Skills.css';

const skills = {
  Languages: ['Python', 'SQL', 'Java', 'C++', 'C', 'PHP', 'R'],
  Frameworks: ["PySpark", "Matplotlib", "Seaborn", "Pandas", "Numpy", "Scikit-Learn", "TensorFlow", "PyTorch", "Keras", "OpenCV"],
  Databases: ['MySQL', 'PostgreSQL', 'Snowflake', 'MongoDB'],
  Tools: ['GitHub', 'Tableau', 'Power BI', 'Jupyter Notebook', 'Visual Studio Code', 'Databricks', 'Docker'],
  "Cloud Technologies": ['AWS', 'Azure DevOps', 'Google Cloud'],
  'Web Technologies': ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'React', 'Express', 'NodeJS', 'VueJS', 'Django'],

};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {skills[category].map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-cell">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
