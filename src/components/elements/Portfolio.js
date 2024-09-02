import React, { useState } from "react";

function Portfolio({ portfolio }) {
  const { title, image, popupLink, link ,language} = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  const handleIcon = () => {
    if (link) {
      return <i className="icon-link"></i>;
    } else if (popupLink) {
      if (popupLink.length > 1) {
        if (popupLink.toString().match(/youtube/g)) {
          return <i className="icon-camrecorder"></i>;
        }
        return <i className="icon-picture"></i>;
      } else if (popupLink.toString().match(/youtube/g)) {
        return <i className="icon-camrecorder"></i>;
      } else {
        return <i className="icon-magnifier-add"></i>;
      }
    }
    return <i className="icon-magnifier-add"></i>;
  };
  return (
    <>
      <a
        href={link ? link : "!#"}
        target="_blank"
        rel="noopener noreferrer"
        className="work-image"
        onClick={handleLightbox}
      >
        <div className="portfolio-item rounded shadow-dark">
          <div className="details">
            <h4 className="title">{title}</h4>
            <span className="more-button">{handleIcon()}</span>
          </div>
          
          <div className="thumb">
            <img src={image} alt="Portfolio-title" />
            <div className="mask"></div>
          </div>
          <br></br>
          <p className="tag">{language}</p>
        </div>
      </a>
    </>
  );
}

export default Portfolio;
