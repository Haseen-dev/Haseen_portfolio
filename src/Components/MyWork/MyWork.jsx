import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import Modal from '../modal/Modal'; // Import the modal

const MyWork = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img className="theme" src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-item">
            <img src={work.w_img} alt={work.w_name} />
            <h3>{work.w_name}</h3>
            <button onClick={() => handleOpenModal(work)} className="view-button">
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>

      {activeProject && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          title={activeProject.w_name}
          techStack={activeProject.w_techStack}
          image={activeProject.w_img}
          desc={activeProject.w_desc}
          github={activeProject.w_github}
        />
      )}
    </div>
  );
};

export default MyWork;
