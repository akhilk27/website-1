import React from 'react';
import Slider from 'react-slick';
import './ProjectSlider.css';

const ProjectSlider = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <div className="arrow arrow-right">→</div>,
    prevArrow: <div className="arrow arrow-left">←</div>,
  };

  return (
    <Slider {...settings} className="project-carousel">
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <img src={project.image} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ProjectSlider;
