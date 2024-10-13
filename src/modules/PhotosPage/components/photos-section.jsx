import React, { useState } from 'react';
import { PhotosWrapper, ButtonWrapper } from "./photos-section-styles.js";

const PhotosSection = ({ sectionName }) => {
  const [ showMore, setShowMore ] = useState(false);
  return (
    <PhotosWrapper>
      <h3>{sectionName}</h3>
      <div className="d-inline-flex gap-4">
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
      </div>
      <div className="collapse" id={sectionName}>
        <div className="d-inline-flex gap-4">
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
          <img src="./assets/img/cabin/FrontFace-tile.jpg" alt="..." className="img-thumbnail"></img>
        </div>
      </div>
      <ButtonWrapper>
        <button
          className="btn btn-outline-primary float-end"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${sectionName}`}
          aria-expanded="false"
          aria-controls={sectionName}
          onClick={() => setShowMore(!showMore)}
        >
          See {showMore ? 'less' : 'more'}
        </button>
      </ButtonWrapper>
    </PhotosWrapper>
  );
};

export default PhotosSection;
